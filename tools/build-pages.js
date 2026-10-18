#!/usr/bin/env node
/* Builds a real page for every school at site/s/<id>/index.html from site/school.html,
   with its own title, description and link preview (Open Graph) tags, so each school
   has its own address and shows a proper card when shared. Also adds the site-wide
   preview tags to the other pages. Run after adding a school or editing a vibe line.
   Usage: node tools/build-pages.js */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://joudrie.github.io/collegeculture/site/';
const root = path.join(__dirname, '..', 'site');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'schools', 'index.js'), 'utf8'), ctx);
const list = ctx.window.SCHOOL_LIST;
const esc = v => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function tags(o) {
  return [
    `<link rel="canonical" href="${o.url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="College Culture">`,
    `<meta property="og:title" content="${esc(o.title)}">`,
    `<meta property="og:description" content="${esc(o.description)}">`,
    `<meta property="og:url" content="${o.url}">`,
    `<meta property="og:image" content="${o.image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="theme-color" content="${o.color || '#0B0B0B'}">`,
    `<link rel="icon" href="${o.base || ''}favicon.svg" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="${o.base || ''}apple-touch-icon.png">`
  ].join('\n');
}

// School pages
const template = fs.readFileSync(path.join(root, 'school.html'), 'utf8');
fs.rmSync(path.join(root, 's'), { recursive: true, force: true });
list.forEach(entry => {
  let s = null;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'schools', entry.id + '.js'), 'utf8'), { registerSchool: d => { s = d; } });
  const name = s.title || s.name;
  const full = entry.name;
  const title = `${name} Culture Snapshot`;
  const description = s.vibe;
  let html = template
    .replace('<head>', '<head>\n<base href="../../">')
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`)
    .replace('</head>', tags({
      url: `${SITE}s/${entry.id}/`, title: `${full}: what it's actually like`, description,
      image: `${SITE}og/${entry.id}.jpg`, color: s.colors.band
    }) + '\n</head>')
    .replace('<script src="render.js"></script>', `<script>window.SCHOOL_ID = '${entry.id}';</script>\n<script src="render.js"></script>`);
  const dir = path.join(root, 's', entry.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
});

// Site-wide tags on the other pages (replaced each run)
const PAGES = {
  'index.html': 'College Culture: what New England colleges are actually like',
  'quiz.html': 'Find your fit: a college vibe quiz',
  'compare.html': 'Compare two New England colleges',
  'basics.html': 'College basics: timeline, visits and myths',
  'glossary.html': 'College words in plain English',
  'about.html': 'About College Culture',
  'school.html': 'College Culture'
};
Object.keys(PAGES).forEach(file => {
  const p = path.join(root, file);
  let html = fs.readFileSync(p, 'utf8').replace(/<!-- share -->[\s\S]*?<!-- \/share -->\n/, '');
  const desc = (html.match(/<meta name="description" content="([^"]*)">/) || [])[1] || '';
  html = html.replace('</head>', '<!-- share -->\n' + tags({
    url: SITE + (file === 'index.html' ? '' : file), title: PAGES[file], description: desc.replace(/&quot;/g, '"'),
    image: SITE + 'og/site.jpg'
  }) + '\n<!-- /share -->\n</head>');
  fs.writeFileSync(p, html);
});
console.log(list.length + ' school pages built; share tags on ' + Object.keys(PAGES).length + ' pages');
