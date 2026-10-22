// Fetch the curated Wikimedia Commons images and their license information.
// This maintenance step is not required for the offline `node build.mjs` build:
// image assets and `image-credits.json` are committed as ordinary site files.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import { choices } from './image-choices.mjs';

const imageDir = 'assets/images';
fs.mkdirSync(imageDir, {recursive:true});
const escapeFileTitle = file => `File:${file}`;
const licenseAllowed = license => /^(Public domain|CC0|CC BY(?:-SA)? \d(?:\.\d)?(?: \w+)?|CC BY(?:-SA)? \d\.\d)$/i.test(license);
const stripHtml = input => String(input ?? '')
  .replace(/<br\s*\/?\s*>/gi, ' ')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'")
  .replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function curl(url, output) {
  const args = ['--fail','--location','--silent','--show-error','--retry','3','--retry-delay','3','--max-time','90'];
  if (output) args.push('--output',output);
  args.push(url);
  return execFileSync('curl',args,output ? {stdio:'pipe'} : {encoding:'utf8',maxBuffer:12*1024*1024});
}

const pages = new Map();
const fileNames = Object.values(choices).map(choice=>escapeFileTitle(choice.file));
for (let i=0;i<fileNames.length;i+=9) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  const params = {action:'query',titles:fileNames.slice(i,i+9).join('|'),prop:'imageinfo',iiprop:'url|extmetadata|size',iiurlwidth:'1040',format:'json'};
  for (const [k,v] of Object.entries(params)) url.searchParams.set(k,v);
  const result = JSON.parse(curl(url.toString()));
  for (const p of Object.values(result.query?.pages ?? {})) pages.set(p.title,p);
  await delay(800);
}

const credits = {};
for (const [id, choice] of Object.entries(choices)) {
  const page = pages.get(escapeFileTitle(choice.file));
  const info = page?.imageinfo?.[0];
  if (!info?.descriptionurl || !(info.thumburl || info.url)) throw new Error(`Missing Commons image: ${id}: ${choice.file}`);
  const extra = info.extmetadata ?? {};
  const license = stripHtml(extra.LicenseShortName?.value);
  if (!licenseAllowed(license)) throw new Error(`Unacceptable or unknown image license for ${id}: ${license}`);
  const ext = path.extname(choice.file).toLowerCase();
  if (!['.jpg','.jpeg','.png','.webp','.svg'].includes(ext)) throw new Error(`Unsupported image extension: ${choice.file}`);
  const file = `images/${id}${ext}`;
  const target = path.join('assets',file);
  console.log(`Downloading ${id} (${license})`);
  curl(info.thumburl ?? info.url,target);
  const bytes = fs.statSync(target).size;
  if (bytes < 3000) throw new Error(`Image download appears incomplete for ${id}: ${bytes} bytes`);
  let author = stripHtml(extra.Artist?.value);
  if (!author || author.length>140) author = 'Contributor credited on Wikimedia Commons';
  credits[id] = {
    src:file,
    alt:choice.alt,
    caption:choice.caption,
    author,
    license,
    licenseUrl:stripHtml(extra.LicenseUrl?.value) || info.descriptionurl,
    sourceUrl:info.descriptionurl,
    original:choice.file,
  };
  await delay(220);
}
fs.writeFileSync('image-credits.json',JSON.stringify(credits,null,2)+'\n');
const header = '# Image credits\n\nEach grievance page features a contextually relevant image. Images may illustrate an institution, person, or prior event rather than the specific reported incident; captions clarify that distinction. Images were retrieved from Wikimedia Commons under the license indicated on each linked file page.\n\n';
const rows = Object.entries(credits).map(([id,c])=>`- **${id}** — ${c.caption} [Source](${c.sourceUrl}) · ${c.author} · [${c.license}](${c.licenseUrl})`);
fs.writeFileSync('IMAGE_CREDITS.md',header+rows.join('\n')+'\n');
console.log(`Downloaded and credited ${Object.keys(credits).length} images.`);
