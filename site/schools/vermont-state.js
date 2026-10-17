registerSchool({
  id: 'vermont-state',
  name: 'Vermont State',
  nameSub: 'University',
  state: 'Vermont',
  location: 'Castleton, Johnson, Lyndon, Randolph · VT',
  asOf: '2026',

  colors: {
    name: 'Vermont State · Teal and red',
    swatches: ['#00A5B3', '#EC3754'],
    band: '#00A5B3',
    onBand: '#06262B',
    onBandMuted: '#07323A',
    stripe: '#B3223F',
    accent: '#B3223F',
    accentOnDark: '#FF7A90'
  },

  vibe: "Vermont's public university, made from several small colleges that merged in 2023. Each campus is small and has its own feel, with affordable tuition for Vermont residents.",
  flags: ['Several campuses', 'Public and affordable', 'Small towns', 'Merged in 2023'],
  facts: [
    { label: 'Setting', value: 'Small towns' },
    { label: 'Undergrads', value: '~4,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Several small campuses; housing and food depend on which one you pick.", "housing": ["Vermont State has several campuses, and housing differs a lot between them.", "Some campuses have residence halls, and others are mostly commuter or online.", "Check with the campus you like about housing before you apply."], "food": ["Dining is small at most campuses, and some have limited options.", "Residents usually have a meal plan where dining exists.", "Castleton and the other towns are small, so off-campus food is limited."]},
    vibe: {
      preview: 'Small campuses, down-to-earth, depends on which one',
      meters: {
        party:    { value: 4, note: 'Small and mostly low-key' },
        campus:   { value: 6, note: 'Rural Vermont campuses' },
        spirit:   { value: 3, note: 'Small crowds at games' },
        pressure: { value: 4, note: 'Manageable, depends on the major' },
        career:   { value: 6, note: 'Hands-on programs in tech and health' },
        greek:    { value: 0, note: 'Not part of campus life' },
        religion: { value: 1, note: 'Secular, public school' }
      }
    },

    social: {
      preview: 'Small campuses, teams and clubs, and a lot of outdoor time',
      paragraphs: [
        'Each campus is small enough that you will know many people. Social life revolves around dorms, teams, clubs and house gatherings.',
        'The towns are quiet. Students lean on the outdoors, campus events and road trips to Burlington or Montpelier. A car helps.',
        'Because the school has several campuses, the feel changes. Castleton and Lyndon have more of a traditional residential feel. Randolph Center is known for technical programs.'
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Cost is the draw.',
      points: [
        { title: "It's not hard to get in.", text: 'Admission is broad. Solid effort in high school usually works.' },
        { title: 'Tests are not the main thing.', text: 'Check the current policy before you apply.' },
        { title: 'Cost is a big deal.', text: 'Tuition is lower for Vermont residents. Check net price.' }
      ]
    },

    who: {
      preview: 'Mostly Vermonters and New Englanders, many first-generation',
      paragraphs: [
        'Lots of Vermont students, plus people from around New England and New York. Many are practical about cost and career.',
        'Popular programs include nursing and health, education, business, engineering technology and the arts.'
      ]
    },

    knownFor: {
      preview: 'Affordable public college, hands-on programs and small campuses',
      points: [
        { title: 'The 2023 merger', text: 'Castleton, Northern Vermont University and Vermont Tech combined into one university.' },
        { title: 'Technical programs', text: 'Randolph Center is known for engineering technology, agriculture and nursing-related fields.' },
        { title: 'Small campuses', text: 'Class sizes are small and professors know students.' }
      ]
    },

    stereotypes: {
      preview: '"Backup school" is unfair. "Quiet" is true.',
      items: [
        { said: "It's a backup school.", verdict: 'half', text: 'Many students choose it for cost, size and specific programs. It is not for everyone, but it is a real choice.' },
        { said: 'Nothing to do.', verdict: 'half', text: 'Towns are small, but outdoor stuff and campus events fill time.' },
        { said: 'It is all Vermonters.', verdict: 'half', text: 'Vermonters are the biggest group, but there are many students from elsewhere.' },
        { said: 'The merger made it messy.', verdict: 'half', text: 'The combined system has gone through changes. Check how your program is doing before you commit.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is one university with several campuses. Pick the campus you want.',
      myths: [
        { title: 'All campuses are the same.', text: 'They differ in size, location and programs.' },
        { title: 'It is only for locals.', text: 'Out-of-state students attend too.' }
      ],
      know: [
        { title: 'Visit more than one.', text: 'Your daily life depends on which campus you choose.' },
        { title: 'A car helps.', text: 'Towns are small and spread out.' },
        { title: 'Programs vary by campus.', text: 'Check where your major is actually taught.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want affordable and small. Rough if you want a big scene.',
      love: ['You want a lower-cost public option', 'You want small classes', 'You like hands-on programs'],
      struggle: ['You want a big campus', 'You want a big sports scene', 'You want a city']
    },

    people: {
      preview: 'Cost and small classes win. Size and changes are the complaints.',
      plus: ['Lower cost for Vermonters', 'Small classes and close professors', 'Hands-on, career-focused programs'],
      minus: ['Quiet towns', 'Fewer options than a big university', 'Campuses are still adjusting after the merger']
    }
  }
});
