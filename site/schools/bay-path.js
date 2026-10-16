registerSchool({
  id: 'bay-path',
  name: 'Bay Path',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Longmeadow, MA · Next to Springfield',
  asOf: '2026',

  colors: {
    name: 'Wildcats · Maroon and white',
    swatches: ['#6A1E26', '#BE414F', '#FFFFFF'],
    band: '#6A1E26',
    onBand: '#FFFFFF',
    onBandMuted: '#E3C3C7',
    stripe: '#BE414F',
    accent: '#6A1E26',
    accentOnDark: '#E07A85'
  },

  vibe: "A small women's college on a quiet suburban campus, with a lot of students headed into health care and business. It's practical, supportive and low-key.",
  flags: ["Women's college", 'Career-focused', 'Very small', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Suburb' },
    { label: 'Undergrads', value: '~1,200' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'USCAA' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, supportive, career-minded, quiet',
      meters: {
        party:    { value: 1, note: 'Not a party school at all' },
        campus:   { value: 6, note: 'Small, tidy and in a nice suburb' },
        spirit:   { value: 2, note: 'Small teams, small crowds' },
        pressure: { value: 5, note: 'Health programs keep you busy' },
        career:   { value: 8, note: 'Internships and job-focused majors' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Not religious' }
      }
    },

    social: {
      preview: 'Small and close, but quiet. Many people commute or go home.',
      paragraphs: [
        "The campus is small, and so is the group of students living on it. You'll know a lot of people quickly, and classes feel more like a team than a crowd.",
        "Social life is low-key. Think club events, movie nights and hanging out in the dorms, not parties. A good number of students commute or head home on weekends, so campus can get very quiet.",
        "Springfield is right next door and Hartford is close, so there's more to do if you have a car. Other colleges in the area give you a bigger scene if you want one."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's easy to get into.", text: 'Most applicants are admitted. If you have decent grades and a diploma, you are very likely in.' },
        { title: 'Tests are optional.', text: 'Very few applicants send SAT or ACT scores. Check the current policy before you apply.' },
        { title: 'The campus college is for women.', text: 'The in-person undergrad program in Longmeadow admits women. Graduate and online programs admit everyone.' },
        { title: 'Ask about health program tracks.', text: 'Programs like the direct entry physician assistant track have their own requirements. Ask early.' }
      ]
    },

    who: {
      preview: 'Career-minded women, lots of health and business majors',
      paragraphs: [
        "Women who want a practical degree and a direct path to a job. Health sciences, psychology and business are big. Many students are from nearby in Massachusetts and Connecticut.",
        "It suits people who want small classes, a lot of support and a calm place to focus. It doesn't suit someone who wants a big campus scene or major college sports."
      ]
    },

    knownFor: {
      preview: "A women's undergrad college, health programs, and internships",
      points: [
        { title: "Women's college", text: "The on-campus undergrad program is one of the few women's colleges left in New England. Grad school is coed." },
        { title: 'Health careers', text: 'Occupational therapy, physician assistant and other health tracks are a big reason people pick it.' },
        { title: 'Internships', text: 'The school says every student completes an internship tied to their field.' },
        { title: 'Growing online', text: 'Bay Path took over Cambridge College in 2024 and runs a large online program. That side is very different from campus life.' }
      ]
    },

    stereotypes: {
      preview: '"Nothing to do" is half true. "Just an online school" is a myth.',
      items: [
        { said: "There's nothing to do.", verdict: 'half', text: "Campus is quiet, especially on weekends. People who get involved in clubs, sports or nearby cities stay busy." },
        { said: "It's a commuter school.", verdict: 'half', text: 'A lot of students commute or go home often. There is still a real residential crowd on campus.' },
        { said: "It's just an online school.", verdict: 'myth', text: 'There is a real campus in Longmeadow with dorms, teams and clubs. The online side is just bigger in the ads.' },
        { said: "Everyone's in a health major.", verdict: 'half', text: 'Health programs are a huge part of the school. Business, psychology and other majors are there too.' }
      ]
    },

    mythsAndKnow: {
      preview: "Grad school is coed. Bring a car. It's small on purpose.",
      myths: [
        { title: 'The whole university is women-only.', text: 'Only the on-campus undergrad college is. Graduate programs and Bay Path Online enroll men and women.' },
        { title: 'Small school means fewer chances.', text: 'Small classes make it easier to get to know professors, get help and land internships through them.' }
      ],
      know: [
        { title: 'A car helps a lot.', text: "Longmeadow is a quiet suburb. Getting to jobs, internships or anything fun is easier if you drive." },
        { title: 'Sports are small.', text: 'Teams compete in the USCAA, not the NCAA. Softball, soccer and volleyball are the main sports.' },
        { title: 'Weekends are what you make them.', text: 'Plan with friends or you may find campus very empty on a Saturday.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a focused, supportive path to a job. Rough if you want a big social scene.',
      love: ["You want a women's college with small classes", 'You know you want a health or business career', 'You want a lot of support from faculty'],
      struggle: ['You want a big, busy campus', 'You want parties or big sports', 'You want a coed classroom']
    },

    people: {
      preview: 'Support and small classes win. Quiet campus life is the complaint.',
      plus: ['Professors and staff are supportive', 'Small classes and real attention', 'Career focus with internships'],
      minus: ['Not much social life on campus', 'Many students leave on weekends', 'Few sports and activities compared to bigger schools']
    }
  }
});
