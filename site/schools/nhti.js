registerSchool({
  id: 'nhti',
  name: 'NHTI',
  nameSub: "Concord's Community College",
  state: 'New Hampshire',
  location: 'Concord, NH · The state capital',
  asOf: '2026',

  colors: {
    name: 'Lynx · Maroon and gold',
    swatches: ['#E0A526', '#7A1F2B'],
    band: '#E0A526',
    onBand: '#4A0E1A',
    onBandMuted: '#5C1A27',
    stripe: '#7A1F2B',
    accent: '#7A1F2B',
    accentOnDark: '#E0A526'
  },

  vibe: "A community college in the state capital, with a practical focus and a lot of students working toward nursing or other health careers. Most people are here to get a degree or certificate, then transfer or start working.",
  flags: ['Community college', 'Two-year degrees', 'Open admission', 'Some dorms'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Students', value: '~3,000' },
    { label: 'Getting in', value: 'Open' },
    { label: 'Usual length', value: '2 years' },
    { label: 'Sports', value: 'Small teams' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Practical, low pressure, mostly commuters',
      meters: {
        party:    { value: 1, note: 'Not a party school' },
        campus:   { value: 5, note: 'A real campus with a few residence halls' },
        spirit:   { value: 2, note: 'Small teams, small crowds' },
        pressure: { value: 4, note: 'Health programs are tough, others are lighter' },
        career:   { value: 8, note: 'Programs are built around jobs' },
        greek:    { value: 0, note: 'No Greek life' },
        religion: { value: 0, note: 'Secular' }
      }
    },

    social: {
      preview: 'Mostly commuters. Friends come from classes and clubs.',
      paragraphs: [
        "Most students commute and many work or have family responsibilities, so campus empties out when classes end. You make friends through classes, programs and clubs.",
        "The campus does have residence halls, so some students live on site. If you want a classic college social life, you may need to seek it out. If you want a practical start, it fits.",
        "Concord has restaurants, shops and state government, and Manchester and Boston are within reach by car."
      ]
    },

    gettingIn: {
      preview: 'Open to most people with a diploma. Some programs are competitive.',
      points: [
        { title: "It's easy to get into the school.", text: 'Community colleges generally admit most applicants with a diploma or equivalent.' },
        { title: 'Some programs are competitive.', text: 'Health programs like nursing often have extra requirements and limited seats.' },
        { title: 'It costs much less.', text: 'Tuition at a New Hampshire community college is far below most four-year schools.' }
      ]
    },

    who: {
      preview: 'Recent grads, working adults and people planning to transfer',
      paragraphs: [
        "A mix of 18 year olds from New Hampshire and older students going back to school or changing careers. Many work while studying.",
        "Programs include nursing, dental hygiene, radiologic technology, business, criminal justice, engineering technology and liberal arts."
      ]
    },

    knownFor: {
      preview: 'Health programs, affordability, and a path to a four-year school',
      points: [
        { title: 'Health programs', text: 'Nursing and other health careers are a major draw.' },
        { title: 'Affordable tuition', text: 'A way to get a degree or certificate for far less than most four-year schools.' },
        { title: 'Transfer path', text: 'Many students finish an associate degree and then transfer. Ask about transfer agreements.' },
        { title: 'Capital city location', text: "It's in Concord, New Hampshire's capital." }
      ]
    },

    stereotypes: {
      preview: '"Just a community college" is half true. "Not a real college" is a myth.',
      items: [
        { said: "It's just 13th grade.", verdict: 'myth', text: 'Classes are college-level, and health programs are tough. It is a real step up from high school.' },
        { said: 'Nobody is on campus.', verdict: 'half', text: 'Many students commute, so it empties out. There are residence halls and clubs for those who want them.' },
        { said: "It's only for people who couldn't go elsewhere.", verdict: 'myth', text: 'Plenty of students choose it for cost, flexibility or specific programs.' },
        { said: "You can't get a good job with it.", verdict: 'myth', text: 'Programs like nursing and dental hygiene lead directly into jobs. Results depend on the program.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Transfer credits matter. Programs differ a lot.',
      myths: [
        { title: 'Credits do not transfer.', text: 'Many do, especially within New Hampshire public schools. Always confirm before you commit.' },
        { title: 'No campus life.', text: 'There are clubs, teams and events. It is smaller, but it exists.' }
      ],
      know: [
        { title: 'Plan your transfer early.', text: 'Talk to an advisor about which classes count at the four-year school you want.' },
        { title: 'A car helps.', text: 'Concord has limited public transit, so most students drive.' },
        { title: 'Housing is limited.', text: 'There are a few residence halls. Ask about availability and cost.' },
        { title: 'Look at net price.', text: "Costs are low, and aid can bring them lower. Use the calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a low-cost start or a quick career path. Rough if you want a full campus scene.',
      love: ['You want to save money', 'You want a health or technical career', 'You plan to transfer later', 'You want to work while studying'],
      struggle: ['You want a big campus life', 'You want big sports', 'You want a four-year degree in one place']
    },

    people: {
      preview: 'Affordable and practical. Limited campus life is the main trade-off.',
      plus: ['Low cost compared to four-year schools', 'Clear career paths', 'Flexible schedules'],
      minus: ['Not much campus social life', 'Competitive entry for some programs', 'Only two-year degrees for most programs']
    }
  }
});
