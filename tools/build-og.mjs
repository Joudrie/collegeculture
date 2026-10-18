#!/usr/bin/env node
/* Makes the link preview images (1200x630) in site/og/: one per school in its colors, plus site.jpg,
   and the 180px apple-touch-icon.png. Needs Playwright with Chromium.
   Usage: node tools/build-og.mjs [path/to/playwright/index.mjs] */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');
const { chromium } = await import(process.argv[2] || 'playwright');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'schools', 'index.js'), 'utf8'), ctx);
const esc = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap">';

function card(o) {
  return `<!doctype html><html><head>${FONT}<style>
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; background: ${o.band}; color: ${o.on}; font-family: Archivo, sans-serif;
      border-bottom: 32px solid ${o.stripe}; padding: 64px 72px; display: flex; flex-direction: column; justify-content: space-between; }
    .top { display: flex; justify-content: space-between; font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; font-variation-settings: "wdth" 75; color: ${o.muted}; }
    h1 { font-size: ${o.size}px; line-height: 1; font-weight: 800; text-transform: uppercase; font-variation-settings: "wdth" 62; letter-spacing: -0.01em; }
    p { font-size: 34px; line-height: 1.3; max-width: 1000px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  </style></head><body><div class="top"><span>College Culture</span><span>${esc(o.where)}</span></div>
  <div><h1>${esc(o.title)}</h1></div><p>${esc(o.line)}</p></body></html>`;
}

const out = path.join(root, 'og');
fs.mkdirSync(out, { recursive: true });
const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
const browser = await chromium.launch({ proxy });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, ignoreHTTPSErrors: true });
async function shoot(html, file) {
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(out, file), type: 'jpeg', quality: 82 });
}

await shoot(card({ band: '#0B0B0B', on: '#FFFFFF', muted: '#B9B9B9', stripe: '#D41B2C', size: 132,
  where: 'New England', title: 'What colleges are actually like', line: 'Honest snapshots of 127 New England colleges for high schoolers. Not rankings, not advice.' }), 'site.jpg');
for (const e of ctx.window.SCHOOL_LIST) {
  let s = null;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'schools', e.id + '.js'), 'utf8'), { registerSchool: d => { s = d; } });
  const title = s.title || s.name;
  await shoot(card({ band: s.colors.band, on: s.colors.onBand, muted: s.colors.onBandMuted, stripe: s.colors.stripe,
    size: title.length > 16 ? 120 : title.length > 10 ? 160 : 220, where: e.location, title, line: s.vibe }), e.id + '.jpg');
}
// Home screen icon from the favicon
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(`<body style="margin:0">${fs.readFileSync(path.join(root, 'favicon.svg'), 'utf8').replace('<svg ', '<svg width="180" height="180" ')}</body>`);
await page.screenshot({ path: path.join(root, 'apple-touch-icon.png') });
await browser.close();
console.log('preview images written to site/og/');
