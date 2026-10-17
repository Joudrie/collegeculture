registerSchool({
  id: 'new-england-tech', nameStyle: "slab",
  name: 'New England Tech',
  nameSub: 'Institute of Technology',
  state: 'Rhode Island',
  location: 'East Greenwich, RI · Plus two campuses in Warwick',
  asOf: '2026',

  colors: {
    name: 'Tech Tigers · Blue and gold',
    swatches: ['#12355B', '#F2A900'],
    band: '#12355B',
    onBand: '#FFFFFF',
    onBandMuted: '#BFCBDA',
    stripe: '#F2A900',
    accent: '#12355B',
    accentOnDark: '#F2A900'
  },

  vibe: "A hands-on school where you learn a trade or technical skill and get to work fast. It is more about shop classes and labs than dorm life, and most people are here to get a job, not to find themselves.",
  flags: ['Hands-on learning', 'Career first', 'Small campus', 'Several campuses'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '2 to 4 years' },
    { label: 'Sports', value: 'Small teams' },
    { label: 'Greek life', value: 'Little' }
  ],

  sections: {
    "getThere": {"preview": "Close to T.F. Green Airport; a car helps", "points": ["RIPTA buses serve the area, but service is limited.", "T.F. Green Airport in Warwick is the closest major airport.", "A car makes getting around easier. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly commuters, with some housing; career-focused school", "housing": ["Many students commute, and it is not a big residential campus.", "The school has some on-campus housing options.", "Some students live in nearby apartments."], "food": ["The campus has basic dining options.", "Most students grab food around campus or bring their own.", "A car helps for off-campus food in East Greenwich."]},
    vibe: {
      preview: 'Practical, focused, low drama, light on traditions',
      meters: {
        party:    { value: 2, note: 'Not a party-first school' },
        campus:   { value: 4, note: 'Main campus plus separate program buildings' },
        spirit:   { value: 2, note: 'Small teams, small crowds' },
        pressure: { value: 5, note: 'Fast-paced technical programs' },
        career:   { value: 9, note: 'Everything is built around a job' },
        greek:    { value: 1, note: 'Not a thing here' },
        religion: { value: 0, note: 'Secular' }
      }
    },

    social: {
      preview: 'Mostly about your program and your cohort. Dorm life exists but is small.',
      paragraphs: [
        "A lot of students are focused on finishing their program and getting into the workforce. You tend to make friends through your classes and labs. The pace is quick, so there is less time for a big campus scene.",
        "The main East Greenwich campus has a large residence hall, but plenty of students live nearby or commute. If you want a typical college social life, this is a different style of school.",
        "Providence is a drive away for nights out, and the Warwick and East Greenwich areas have stores and food close by."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Pick your program carefully.',
      points: [
        { title: "It's not hard to get into.", text: 'The school admits most applicants. Some programs ask for a specific background or test.' },
        { title: 'You apply to a program.', text: 'You choose a major from the start, so know what you want before you apply.' },
        { title: 'Check current requirements.', text: 'Admission rules and test policies can change. Look at the school website before you apply.' }
      ]
    },

    who: {
      preview: 'Hands-on people, career changers and anyone who wants skills fast',
      paragraphs: [
        "A mix of recent high school grads and older students switching careers. Most are from Rhode Island and nearby states. People tend to be practical, down to earth and focused.",
        "Programs include automotive, HVAC, building construction, plumbing and heating, electrical, welding, criminal justice and marine technology."
      ]
    },

    knownFor: {
      preview: 'Trade and technical programs, small classes and a career focus',
      points: [
        { title: 'Technical programs', text: 'Automotive, building construction, HVAC, plumbing, electrical and welding are the heart of the school.' },
        { title: 'Hands-on classes', text: 'Much of your time is in a shop or lab, not a lecture hall.' },
        { title: 'Multiple campuses', text: "Programs are split across East Greenwich and two Warwick campuses, so where you go depends on your major." },
        { title: 'Career focus', text: 'Classes are built around getting you ready to work.' }
      ]
    },

    stereotypes: {
      preview: '"Just a trade school" is half true. "No real college life" is half true.',
      items: [
        { said: "It's just a trade school.", verdict: 'half', text: 'Trades are a big part of it. It also offers associate and bachelor degrees in other fields.' },
        { said: "It's not a real college.", verdict: 'myth', text: 'It is an accredited institution that awards degrees. It just has a different focus than a liberal arts school.' },
        { said: 'There is nothing to do.', verdict: 'half', text: "There are clubs and events, but it's quieter than most colleges. Most people spend free time off campus." },
        { said: 'Everyone gets a job right away.', verdict: 'half', text: 'Skilled trades are in demand, but results depend on your program and the job market. Ask the school for placement info.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Programs are spread out. Costs vary by program.',
      myths: [
        { title: 'You need to be good with tools.', text: 'You learn from the basics. You do need to be okay with hands-on work.' },
        { title: 'It is only for people who did not get into college.', text: 'Many students choose it on purpose because they want a direct path to a trade or technical job.' }
      ],
      know: [
        { title: 'Your campus depends on your major.', text: 'Programs are split among East Greenwich and Warwick locations. Check where yours is.' },
        { title: 'A car helps.', text: 'Locations are spread out and public transit is limited.' },
        { title: 'Tools and supplies cost money.', text: 'Some programs require tools or gear. Ask what you will need.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want skills and a job. Rough if you want the classic college life.',
      love: ['You know the trade or field you want', 'You like learning by doing', 'You want a quicker path to work', 'You want small classes'],
      struggle: ['You want a big campus life', 'You are undecided on a major', 'You want big sports and school spirit']
    },

    people: {
      preview: 'Hands-on training wins. Limited campus life is the main complaint.',
      plus: ['Hands-on learning in real shops and labs', 'Clear path to a specific career', 'Small classes'],
      minus: ['Not much traditional campus life', 'Campuses are spread out', 'Less flexibility to explore majors']
    }
  }
});
