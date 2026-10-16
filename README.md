# College Culture

What colleges are actually like, written for high schoolers. Not rankings and not advice. Each school page covers the vibe, social life, getting in, stereotypes vs. reality, myths, and who it's a good fit for, based on what students and alumni say.

## View it

Open `site/index.html` in a browser. No build step and no server needed.

## How it's built

```
site/
  index.html          list of schools
  school.html         the school page template (school.html#<id>)
  render.js           builds a school page from its data file
  styles.css          shared styles for every page
  schools/
    index.js          the list of schools shown on index.html
    _template.js      blank school file with writing and color rules
    northeastern.js   one file per school
tools/
  check-schools.js    checks every school file against the rules
```

Every school page uses the same template. A school is one data file: its content plus its colors.

## Add a school

1. Copy `site/schools/_template.js` to `site/schools/<id>.js` (lowercase with dashes, like `umass-amherst.js`).
2. Fill in the content and colors. The comments at the top of the template explain each field.
3. Add a line for it in `site/schools/index.js`.
4. Run `node tools/check-schools.js <id>` to check colors, contrast and content rules.
5. Open `site/school.html#<id>` to see it.

## Design rules

- **School colors.** The header band uses the school's colors. The accent color has to stay readable on white and on near-black, so bright school colors go on the stripe and a darker shade is used for the accent.
- **One font.** Archivo, condensed for the school name and section titles, normal width for reading.
- **Short first screen.** A one-screen summary up top, then collapsible sections, each with a one-line preview.
- **Strict system.** Text sizes 13 / 15 / 17 plus the display size, spacing on an 8pt scale, one 4px radius, no decorative animation.
- **Same scales everywhere.** The vibe meters (party scene, campus feel, school spirit, academic pressure, career focus, Greek life, religion) are fixed in `render.js` so every school is rated the same way, and the quiz can use them too.

Content is approximate as of 2026 and should be checked before anything goes public.
