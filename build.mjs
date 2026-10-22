import fs from 'node:fs';
import path from 'node:path';
import { grievances } from './content.mjs';
import { research } from './research.mjs';

const root = path.resolve('dist');
const detailDir = path.join(root, 'grievances');
fs.mkdirSync(detailDir, { recursive: true });
fs.copyFileSync('styles.css', path.join(root, 'styles.css'));

const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const roman = n => {
  const parts = [[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let out = '';
  for (const [v,s] of parts) { while(n>=v){out+=s;n-=v;} }
  return out;
};
const uniqueSources = g => {
  const seen = new Set();
  return [...g.sources, ...(research[g.id]?.sources ?? [])].filter(source => {
    if (seen.has(source[3])) return false;
    seen.add(source[3]);
    return true;
  });
};
const totalSources = grievances.reduce((n,g) => n + uniqueSources(g).length, 0);
const doc = ({title, description, body, inner=false}) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#f7f5ef"><meta name="description" content="${esc(description)}">
<title>${esc(title)} — A Declaration of Grievances</title>
<link rel="stylesheet" href="${inner?'../':''}styles.css"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f7f5ef'/%3E%3Cpath d='M14 16h36M14 32h36M14 48h36' stroke='%238e302c' stroke-width='5'/%3E%3C/svg%3E">
</head><body>${body}</body></html>`;

const homeItems = grievances.map((g,i) => `
<li class="grievance" id="${esc(g.id)}">
  <a class="grievance-link" href="grievances/${esc(g.id)}.html" aria-label="Grievance ${i+1}: ${esc(g.line)}">
    <span class="ordinal">${roman(i+1).padStart(3,'\u00a0')}</span>
    <span class="grievance-body"><span class="grievance-line">${esc(g.line)}</span><span class="grievance-category">${esc(g.category)}</span></span>
    <span class="arrow" aria-hidden="true">↗</span>
  </a>
</li>`).join('');

const homepage = `<a class="skip" href="#grievances">Skip to grievances</a>
<div class="page-wrap home">
  <header class="topline"><span>AN INDEPENDENT CIVIC RECORD</span><span>OCTOBER 22, 2026</span></header>
  <main>
    <div class="eyebrow">IN THE SPIRIT OF 1776 <span class="ornament">◆</span> FOR THE PUBLIC RECORD</div>
    <h1 class="masthead">A Declaration<br><em>of Grievances</em></h1>
    <div class="thick-rule"></div>
    <p class="preface dropcap">When public authority becomes an instrument of private benefit; when the force of government falls upon the governed; when the rights of the people and the promises made to allies are placed at the pleasure of one man—these acts deserve a plain recital.</p>
    <p class="preface">We therefore set forth this record of grievances concerning the second administration of Donald J. Trump. Each charge is an <em>editorial interpretation</em> of documented events, supported by dated accounts, independent reporting, court rulings, and the administration’s response where available.</p>
    <div class="section-head" id="grievances"><span>THE GRIEVANCES</span><span>${grievances.length} ARTICLES <span aria-hidden="true">·</span> ${totalSources} SOURCES</span></div>
    <ol class="grievance-list">${homeItems}</ol>
    <div class="closing-mark" aria-hidden="true">❧</div>
    <p class="closing">Let the facts be read, the sources examined, and the judgment remain with the people.</p>
  </main>
  <footer class="footer"><span>THIS IS AN EDITORIAL PROJECT, NOT AN OFFICIAL HISTORICAL DOCUMENT.</span><span><a href="about.html">ABOUT THIS RECORD ↗</a></span></footer>
</div>`;
fs.writeFileSync(path.join(root, 'index.html'), doc({title:'Home',description:'A source-linked, Declaration-style editorial record on the second Trump administration.',body:homepage}));

grievances.forEach((g,i) => {
  const previous = grievances[(i-1+grievances.length)%grievances.length];
  const next = grievances[(i+1)%grievances.length];
  const sourceItems = uniqueSources(g);
  const sources = sourceItems.map(([title,outlet,date,url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><span class="source-title">${esc(title)}</span><span class="source-arrow" aria-hidden="true">↗</span></a><div class="source-meta">${esc(outlet)} <span class="dot">·</span> ${esc(date)}</div></li>`).join('');
  const supplement = research[g.id] ?? {};
  const chronology = (supplement.events ?? []).map(([date,description]) => `<li><span class="event-date">${esc(date)}</span><span class="event-text">${esc(description)}</span></li>`).join('');
  const sequence = chronology ? `<section class="chronology-section" aria-labelledby="chronology-heading"><div class="section-head"><h2 id="chronology-heading">A DOCUMENTED SEQUENCE</h2><span>${supplement.events.length} MILESTONES</span></div><ol class="event-list">${chronology}</ol></section>` : '';
  const note = supplement.note ? `<aside class="qualification"><h2>WHAT THE RECORD DOES NOT ESTABLISH</h2><p>${esc(supplement.note)}</p></aside>` : '';
  const page = `<a class="skip" href="#content">Skip to article</a><div class="page-wrap detail">
  <header class="topline"><a class="home-link" href="../index.html">← THE DECLARATION</a><span>ARTICLE ${roman(i+1)} OF ${roman(grievances.length)}</span></header>
  <main id="content">
    <div class="detail-overline">GRIEVANCE ${roman(i+1)} <span class="small-diamond">◆</span> ${esc(g.category.toUpperCase())}</div>
    <p class="detail-charge">${esc(g.line)}</p>
    <div class="thick-rule"></div>
    <div class="summary-label">THE RECORD SHOWS</div>
    <h1 class="detail-headline"><strong>${esc(g.headline)}</strong></h1>
    <p class="summary-text">${esc(g.summary)}</p>
    ${sequence}${note}
    <section class="source-section" aria-labelledby="source-heading"><div class="section-head"><h2 id="source-heading">READ THE SOURCES</h2><span>${sourceItems.length} LINK${sourceItems.length!==1?'S':''}</span></div><ol class="source-list">${sources}</ol></section>
    <div class="detail-nav"><a href="${esc(previous.id)}.html" aria-label="Previous grievance">← <span>PREVIOUS</span></a><a href="../index.html">ALL GRIEVANCES</a><a href="${esc(next.id)}.html" aria-label="Next grievance"><span>NEXT</span> →</a></div>
  </main><footer class="footer"><span>AN EDITORIAL INTERPRETATION, NOT A LEGAL FINDING.</span><span><a href="../about.html">ABOUT &amp; METHODS ↗</a></span></footer>
</div>`;
  fs.writeFileSync(path.join(detailDir, `${g.id}.html`), doc({title:`${roman(i+1)} — ${g.category}`,description:g.headline,body:page,inner:true}));
});

const about = `<div class="page-wrap detail"><header class="topline"><a class="home-link" href="index.html">← THE DECLARATION</a><span>EDITORIAL NOTE</span></header>
<main class="about-main"><div class="detail-overline">METHODS <span class="small-diamond">◆</span> OCTOBER 22, 2026</div><h1 class="about-title">On the record.</h1><div class="thick-rule"></div>
<p>This website is an opinionated civic document modeled on the cadence of the American Declaration of Independence. It is not a government publication, a legal indictment, or an exhaustive catalog of the administration’s actions.</p>
<p>Each grievance has a concise claim, a dated sequence, and clickable source headlines from identifiable publications or relevant official records. The homepage language is editorial. The detail pages distinguish documented actions from allegations, interpretations, contested responsibility, and legal outcomes where material.</p>
<p>The ${grievances.length} entries provide ${totalSources} linked sources. News reporting and primary records are generally favored; advocacy-group accounts and opinion pieces are identified as such. The chronology marks some publication dates rather than original action dates. A separate qualification on each page explains an important limit of the evidence.</p>
<p>Sources were selected and checked as of <strong>October 22, 2026</strong>. News can change. A link represents a specific report at a specific time, not necessarily the final result of an investigation or lawsuit. External links open their original publisher's pages, which may have paywalls.</p>
<p>The distinction matters: criticism is strongest when the record can be inspected.</p><a class="return-link" href="index.html">← RETURN TO THE GRIEVANCES</a></main><footer class="footer"><span>A DECLARATION OF GRIEVANCES</span><span>2025—2026</span></footer></div>`;
fs.writeFileSync(path.join(root,'about.html'),doc({title:'About the record',description:'Editorial method and sourcing for A Declaration of Grievances.',body:about}));
console.log(`Generated homepage, about page, and ${grievances.length} grievance pages.`);
