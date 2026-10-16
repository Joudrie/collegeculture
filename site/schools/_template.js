/* Copy this file to schools/<id>.js (lowercase, dashes, e.g. umass-amherst.js),
   fill it in, then add the school to schools/index.js.
   The page is at school.html?s=<id>.

   Writing rules:
   - Write like you're telling a 16-year-old the truth. Short sentences, no brochure language.
   - Every preview is one line that gives the gist without opening the section.
   - Stereotypes are what people say about the students. Myths are what people get wrong about the school.
   - Leave out any section you don't have good info for; the page skips it.

   Colors:
   - band: the header background, usually the school's darkest color.
   - onBand / onBandMuted: text on the band. Must be easy to read on it (4.5:1 contrast or better).
   - stripe: the thick line under the header and the slashes between tags. Can be a bright school color.
   - accent: links, meter bars and open section titles on the white page. Must be readable on white.
   - accentOnDark: the same accent for dark mode. Must be readable on near-black.
   Bright school colors (yellow, light blue) usually work as stripe but not as accent on white;
   use a darker shade of the same color for accent. */

registerSchool({
  id: 'school-id',
  name: 'School',            // big condensed name, e.g. 'Northeastern'
  nameSub: 'University',     // smaller line under it, or '' if none
  state: 'Massachusetts',
  location: 'Town · Neighborhood',
  asOf: '2026',

  colors: {
    name: 'Mascot · Color and color',
    swatches: ['#000000', '#FFFFFF'],
    band: '#000000',
    onBand: '#FFFFFF',
    onBandMuted: '#B9B9B9',
    stripe: '#000000',
    accent: '#000000',
    accentOnDark: '#FFFFFF'
  },

  vibe: 'One or two sentences on what it feels like to go here.',
  flags: ['Heads-up tag', 'Heads-up tag', 'Heads-up tag', 'Heads-up tag'],
  facts: [                   // exactly 6, kept short so each fits on one line on a phone
    { label: 'Setting', value: '' },
    { label: 'Undergrads', value: '' },
    { label: 'Getting in', value: '' },
    { label: 'Usual length', value: '' },
    { label: 'Big sport', value: '' },
    { label: 'Greek life', value: '' }
  ],

  sections: {
    vibe: {
      preview: '',
      meters: {              // value 0 to 10; note is a short reason
        party:    { value: 5, note: '' },
        campus:   { value: 5, note: '' },
        spirit:   { value: 5, note: '' },
        pressure: { value: 5, note: '' },
        career:   { value: 5, note: '' },
        greek:    { value: 5, note: '' },
        religion: { value: 5, note: '' }
      }
    },
    social:    { preview: '', paragraphs: [''] },
    gettingIn: { preview: '', points: [{ title: '', text: '' }] },
    who:       { preview: '', paragraphs: [''] },
    knownFor:  { preview: '', points: [{ title: '', text: '' }] },
    stereotypes: {
      preview: '',
      items: [               // verdict: 'true', 'half', 'myth' or 'outdated'
        { said: '', verdict: 'half', text: '' }
      ]
    },
    mythsAndKnow: {
      preview: '',
      myths: [{ title: '', text: '' }],
      know: [{ title: '', text: '' }]
    },
    fit:    { preview: '', love: [''], struggle: [''] },
    people: { preview: '', plus: [''], minus: [''] }
  }
});
