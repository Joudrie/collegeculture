registerSchool({
  id: 'lasell',
  name: 'Lasell',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Newton, MA · Auburndale village',
  asOf: '2026',

  colors: {
    name: 'Lasers · Navy and blue',
    swatches: ['#13294B', '#69B3E7', '#5C88DA'],
    band: '#13294B',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C4D8',
    stripe: '#5C88DA',
    accent: '#13294B',
    accentOnDark: '#69B3E7'
  },

  vibe: "A small, friendly campus in a quiet suburb about half an hour from Boston. It's hands-on and career-minded, with a lot of fashion, communication, sport management and hospitality students, and weekends are pretty calm.",
  flags: ['Small campus', 'Suburb near Boston', 'Hands-on majors', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,300' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small and welcoming, practical majors, quiet on weekends',
      meters: {
        party:    { value: 2, note: 'Parties are few and far between' },
        campus:   { value: 6, note: 'Old houses and green space in a nice suburb' },
        spirit:   { value: 3, note: 'Small crowds, some love for basketball' },
        pressure: { value: 3, note: 'Manageable for most majors' },
        career:   { value: 7, note: 'Real projects and internships built in' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs and events during the week, quiet campus on weekends',
      paragraphs: [
        "It's small enough that you'll know a lot of people by sophomore year. Students say the community is welcoming, and clubs, teams and campus events are where friend groups form.",
        "The common complaint is weekends. Students say parties are rare and a lot of people go home or leave campus. If you want a busy Saturday night, you'll probably be taking the train into Boston.",
        "Marathon Monday is the biggest day of the year. The Boston Marathon runs through Newton, and students turn out to watch."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Steady grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Ask about the tuition deal.', text: 'Lasell has announced it will cover tuition for some first-time, full-time Massachusetts students from lower-income families. Room, board and fees are not included, so check the details.' },
        { title: 'Merit aid is common.', text: 'Many students get scholarships. The sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Fashion, communication, sport management and hospitality students',
      paragraphs: [
        "A lot of students pick Lasell for a specific practical major: fashion design or merchandising, communication, sport management, event and hospitality management, criminal justice, psychology and exercise science. Many are from Massachusetts and the rest of New England.",
        "It fits people who learn best by doing and want a small school where professors know them. If you want a big, loud campus or a top-ranked name, look elsewhere."
      ]
    },

    knownFor: {
      preview: 'Connected learning, fashion, and a retirement community on campus',
      points: [
        { title: 'Connected learning', text: "Lasell's big idea is that classes include real-world projects, often with outside clients, plus internships. You build a portfolio while you're still in school." },
        { title: 'Fashion', text: "Fashion is one of the school's best-known programs, and student work ends up in a yearly fashion show." },
        { title: 'Lasell Village', text: 'There is a retirement community on campus where residents take classes as part of living there. Some students and older adults end up learning together.' },
        { title: 'Sport and event management', text: 'Sport management and hospitality students get hands-on work with teams and events around Boston.' }
      ]
    },

    stereotypes: {
      preview: '"Fashion school" is half true. "Dead on weekends" is mostly true.',
      items: [
        { said: "It's a fashion school.", verdict: 'half', text: "Fashion is a big draw and very visible. It's still only part of the school. Communication, sport management, business and criminal justice are big too." },
        { said: "Campus is dead on weekends.", verdict: 'true', text: "Students say it's quiet, and plenty of people go home. Weekday clubs and events are where the energy is." },
        { said: "It's an easy school.", verdict: 'half', text: "Getting in is not hard, and classes are manageable. The project work and internships still take real effort." },
        { said: "You're surrounded by retirees.", verdict: 'myth', text: 'Lasell Village is on campus, but it is its own community. Day to day you mostly see other students.' }
      ]
    },

    mythsAndKnow: {
      preview: "It's in Newton, not Boston. The train and shuttle get you there.",
      myths: [
        { title: "It's in Boston.", text: "It's in Newton, a quiet suburb. Boston is a train ride away, not a walk." },
        { title: 'Small means no opportunities.', text: 'Connected learning and internships near Boston give students real experience. You have to go after it, though.' }
      ],
      know: [
        { title: 'Getting to Boston takes planning.', text: 'The Auburndale commuter rail stop is a short walk, and a campus shuttle runs to the Green Line at Riverside. Trains are not as frequent as the subway.' },
        { title: 'A car helps but is not required.', text: 'Most students get by with the shuttle and train. A car makes weekend trips easier.' },
        { title: 'Get involved early.', text: 'Students who join clubs and teams right away are the happiest. The ones who go home every weekend say it feels quiet.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a hands-on, small school near Boston. Rough if you want a party scene.',
      love: ['You want a practical major like fashion, sport management or communication', 'You learn best by doing real projects', 'You want a small, friendly campus', 'You want Boston nearby without living in the city'],
      struggle: ['You want a busy party scene', 'You want big games and school spirit', 'You want to walk out your door into a city']
    },

    people: {
      preview: 'Community and hands-on learning win. Quiet weekends are the complaint.',
      plus: ['Welcoming, tight-knit community', 'Hands-on classes and real projects', 'Pretty, safe suburban campus near Boston'],
      minus: ['Weekends on campus are quiet', 'Getting into Boston takes time', 'Fewer majors and resources than a big school']
    }
  }
});
