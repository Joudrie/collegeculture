# College Culture

What colleges are actually like, written for high schoolers. Not rankings and not advice. Each school page covers the vibe, social life, getting in, stereotypes vs. reality, myths, and who it's a good fit for, based on what students and alumni say.

## View it

Open `site/index.html` in a browser. No build step and no server needed.

## How it's built

```
site/
  index.html          list of schools
  school.html         the school page template; old school.html#<id> links redirect to s/<id>/
  s/<id>/index.html   each school's real page and address (generated, do not edit)
  og/                 link preview images (generated)
  render.js           builds a school page from its data file
  nav.js              the Schools / Quiz / Compare / Basics menu on every page
  styles.css          shared styles for every page
  schools/
    index.js          the list of schools shown on index.html
    _template.js      blank school file with writing and color rules
    northeastern.js   one file per school
  about.html          where the info comes from
  glossary.html       college words in plain English
  basics.html         timeline from junior year to move-in, plus common myths
  compare.html        two schools side by side (compare.html#a=<id>&b=<id>)
  quiz.html           the Find Your Fit quiz (quiz.js, quiz-questions.js)
  zips.js             ZIP code locations for distance
  schools/quiz-data.js  generated quiz data (do not edit)
  schools/stats.js    generated federal numbers: size, admit rate, prices (do not edit)
data/
  quiz-facts.json     structured facts per school for the quiz
  scorecard.json      numbers from the federal College Scorecard
  scorecard-ids.json  school id to Scorecard UNITID
tools/
  check-schools.js    checks every school file against the rules
  build-quiz-data.js  rebuilds schools/quiz-data.js and schools/stats.js after edits
  update-scorecard.py refreshes data/scorecard.json from the Scorecard download
  sync-index.js       copies school short names and colors into the school list
  build-pages.js      builds s/<id>/ pages and link preview tags (run after any school edit)
  build-og.mjs        builds the preview images in og/ (needs Playwright)
```

Every school page uses the same template. A school is one data file: its content plus its colors.

## Add a school

1. Copy `site/schools/_template.js` to `site/schools/<id>.js` (lowercase with dashes, like `umass-amherst.js`).
2. Fill in the content and colors. The comments at the top of the template explain each field.
3. Add a line for it in `site/schools/index.js`.
4. Run `node tools/check-schools.js <id>` to check colors, contrast and content rules.
5. Run `node tools/sync-index.js`, `node tools/build-pages.js` and `node tools/build-og.mjs`.
6. Open `site/s/<id>/` to see it.

## Design rules

- **School colors.** The header band uses the school's colors. The accent color has to stay readable on white and on near-black, so bright school colors go on the stripe and a darker shade is used for the accent.
- **One font.** Archivo, condensed for the school name and section titles, normal width for reading. The only exception: a school file can set `nameStyle: 'classic'` (Libre Caslon, for old traditional schools) or `'slab'` (Roboto Slab, for tech, maritime and military schools), which changes the big school name in the header and nothing else. Official school fonts are licensed, so these are free look-alikes.
- **Short first screen.** A one-screen summary up top, then collapsible sections, each with a one-line preview.
- **Strict system.** Text sizes 13 / 15 / 17 plus the display size, spacing on an 8pt scale, one 4px radius, no decorative animation.
- **Same scales everywhere.** The vibe meters (party scene, campus feel, school spirit, academic pressure, career focus, Greek life, religion) are fixed in `render.js` so every school is rated the same way, and the quiz can use them too.

Undergrad size, admit rate and the "What it costs" section come from the College Scorecard, not the school files. To refresh them, follow the steps at the top of `tools/update-scorecard.py`.

Content is approximate as of 2026 and should be checked before anything goes public.
