registerSchool({
  id: 'snhu',
  name: 'SNHU',
  nameSub: 'Southern New Hampshire University',
  state: 'New Hampshire',
  location: 'Manchester, NH · On the Merrimack River',
  asOf: '2026',

  colors: {
    name: 'Penmen · Blue and gold',
    swatches: ['#0A3370', '#FDB913'],
    band: '#0A3370',
    onBand: '#FFFFFF',
    onBandMuted: '#B7C4DC',
    stripe: '#FDB913',
    accent: '#1D57B8',
    accentOnDark: '#FDB913'
  },

  vibe: "A small, friendly campus hiding behind one of the biggest online schools in the country. On campus it's chill and community-driven, and nobody's competing to be the smartest person in the room.",
  flags: ['Small campus', 'Huge online side', 'Easy to get in', 'Chill academics'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'On campus', value: '~3,000' },
    { label: 'Getting in', value: 'Easy' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Laid back, close-knit, quiet weekends',
      meters: {
        party:    { value: 4, note: 'House parties and small get-togethers' },
        campus:   { value: 6, note: 'A real campus, edge of the city' },
        spirit:   { value: 4, note: 'Small crowds, loyal ones' },
        pressure: { value: 3, note: 'Supportive, not cutthroat' },
        career:   { value: 7, note: 'Lots of practical majors' },
        greek:    { value: 2, note: 'A few chapters, not a big deal' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and friendly. You know faces fast. Weekends can be quiet.',
      paragraphs: [
        "The campus is small enough that you start recognizing everyone by October. People describe it as welcoming and low drama. Clubs, sports teams and your dorm floor are where friend groups form.",
        "Weekends are the weak spot. A lot of students are from New Hampshire and Massachusetts and go home, so Friday night can feel empty. If you stay, it's movie nights, small parties and trips into downtown Manchester.",
        "Boston is about an hour away, and the ocean and mountains are both close, so people with a car get out a lot."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Apply any time.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. If you have a diploma and decent grades, you are very likely in.' },
        { title: 'There are no hard deadlines.', text: 'Admissions are rolling, so you can apply whenever and hear back quickly.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Know which SNHU you are applying to.', text: 'The campus and the online school have separate applications and very different experiences.' }
      ]
    },

    who: {
      preview: 'Local kids, athletes, and people who want a calmer college',
      paragraphs: [
        "Mostly kids from New Hampshire, Massachusetts and the rest of New England. A good number of athletes, plus people who want a smaller, calmer school than a big state university.",
        "Popular majors are practical ones: business, sport management, game design, psychology and criminal justice. People tend to be friendly and down to earth more than flashy or hyper-competitive."
      ]
    },

    knownFor: {
      preview: 'Online programs, the TV ads, and an affordable small campus',
      points: [
        { title: 'Online school', text: 'SNHU has one of the largest online programs in the country. Most people who say they go to SNHU are online students, many of them working adults.' },
        { title: 'Those commercials', text: "If you've watched TV, you've seen the ads. That's the online side, not the campus." },
        { title: 'Affordable campus', text: 'Campus tuition is low for a private school in New England, and it has been cut in recent years.' },
        { title: 'Game design and sport management', text: 'Two programs people specifically pick SNHU for.' }
      ]
    },

    stereotypes: {
      preview: '"Only an online school" is a myth. "Easy to get into" is true.',
      items: [
        { said: "It's just an online school.", verdict: 'myth', text: 'There is a real campus in Manchester with dorms, a dining hall, sports teams and a quad. It just gets overshadowed by the online side.' },
        { said: 'Anyone can get in.', verdict: 'true', text: "Admission is easy. That doesn't make the degree worthless. What you get out of it depends on what you put in." },
        { said: "It's not a real degree.", verdict: 'myth', text: 'SNHU is a fully accredited, nonprofit university. Campus and online degrees carry the same name.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: "A lot of local students do, so weekends are quieter than at a big school. Plenty of people stay, especially athletes and out-of-staters." }
      ]
    },

    mythsAndKnow: {
      preview: 'Campus and online are different worlds. Bring a car if you can.',
      myths: [
        { title: 'Online and campus are the same experience.', text: 'They are basically two different schools. Campus is a traditional college for 18 to 22 year olds. Online is mostly working adults.' },
        { title: 'Small school means nothing to do.', text: "There are clubs, Division II sports and a city next door. It's quieter, not empty." }
      ],
      know: [
        { title: 'A car helps a lot.', text: "Manchester has buses, but getting to Boston, the beach or the mountains is much easier if you drive." },
        { title: 'Weekends are what you make them.', text: 'If you want a constant party scene, this is not it. If you want a calm campus with friends close by, it fits.' },
        { title: 'Professors know your name.', text: "Classes are small, so it's easy to get help. It's also hard to hide if you skip." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and chill. Rough if you want a big party scene.',
      love: ['You want a small school where people know you', 'You want lower cost for a private school', 'You play a sport and want real playing time', 'You want a practical major without a pressure cooker'],
      struggle: ['You want a big party school', 'You want big-time college sports', 'You want a name that impresses people at first glance']
    },

    people: {
      preview: 'Friendly and affordable. Quiet weekends are the main complaint.',
      plus: ['People are friendly and the campus feels safe', 'Small classes and professors who help', 'Cheaper than most private schools nearby'],
      minus: ['Weekends can feel empty', 'People assume you went online when you say SNHU', 'Not much to do without a car']
    }
  }
});
