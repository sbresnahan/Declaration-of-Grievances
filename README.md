# A Declaration of Grievances

A minimalist, Declaration-inspired, source-linked editorial website about the second Donald Trump administration. The content was reviewed on October 22, 2026.

## Local build

Requires Node.js 18+ and no package dependencies.

```sh
node build.mjs
```

Publish the generated `dist/` directory as a static website. The generated pages use relative paths and are compatible with GitHub Pages, including project-site subpaths.

## GitHub Pages

This repository includes a GitHub Actions workflow that deploys the built `dist/` directory on pushes to `main`. Enable GitHub Pages in the repository settings with **Source → GitHub Actions**. The source repository is not connected to a personal GitHub account by default; a GitHub connection or manual repository push is required for `github.io` hosting.

## Editing

The 27 grievances, editorial summaries, and initial source headlines live in `content.mjs`. Dated chronologies, additional references, and explicit evidence limitations live in `research.mjs` and are merged by `build.mjs`. Run `node build.mjs` after edits. The site is intentionally buildless at runtime: no tracking, analytics, or client JavaScript.

Each source is an external link to the original publisher (or a clearly labeled syndication). New claims should have a publication date and primary reporting, court documents, or official-record support. Separate enacted actions from proposals, interim court orders from final outcomes, allegations from findings, and corporate donations from proven quid pro quo transactions.

The copy is editorial and sourced, not a claim of an official historical or legal finding. Verify updates against current reporting before publication.
