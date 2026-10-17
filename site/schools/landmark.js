registerSchool({
  id: 'landmark',
  name: 'Landmark',
  nameSub: 'College',
  state: 'Vermont',
  location: 'Putney, VT · Small rural campus',
  asOf: '2026',

  colors: {
    name: 'Sharks · Blue and gold',
    swatches: ['#1F5AA6', '#F2B705'],
    band: '#1F5AA6',
    onBand: '#FFFFFF',
    onBandMuted: '#D6E4F5',
    stripe: '#F2B705',
    accent: '#1F5AA6',
    accentOnDark: '#F2B705'
  },

  vibe: "A small college built only for students who learn differently, like dyslexia, ADHD and autism. Support is built into everything, and nobody is the odd one out.",
  flags: ['For learning differences', 'Very small', 'Support built in', 'Rural'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~600' },
    { label: 'Getting in', value: 'Specific fit' },
    { label: 'Usual length', value: '2 to 4 years' },
    { label: 'Mascot', value: 'Sharks' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Small Vermont town; Amtrak in nearby Brattleboro", "points": ["Putney is small, but Brattleboro nearby has Amtrak's Vermonter and bus service.", "Bradley and Manchester are the nearest larger airports.", "A car helps in a rural area. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small residential school for students with learning differences", "housing": ["Most students live on campus in residence halls.", "Staff are around to help with daily life and routines.", "The campus is small and in rural Vermont."], "food": ["There's a main dining hall on campus.", "Students use meal plans, since there's little around.", "Putney is a tiny town, so off-campus food is limited."]},
    vibe: {
      preview: 'Supportive, small, structured, built for how you learn',
      meters: {
        party:    { value: 2, note: 'Quiet, mostly campus events' },
        campus:   { value: 6, note: 'Small campus in the hills' },
        spirit:   { value: 3, note: 'Small, friendly crowds' },
        pressure: { value: 5, note: 'Real college work with support' },
        career:   { value: 5, note: 'Focus on skills and independence' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Almost everyone lives on campus, so it is a close community',
      paragraphs: [
        'Almost all students live on campus. It is small, so people get to know each other quickly. Clubs, activities and weekend events are a big part of life.',
        "Many students say it's the first place they didn't feel different. Friends form around shared interests and shared experiences.",
        'Putney is tiny. Students take trips to nearby towns, and a car or a ride helps.'
      ]
    },

    gettingIn: {
      preview: 'You need documented learning differences and the ability to do college work.',
      points: [
        { title: 'It is for a specific group.', text: 'Applicants must have a diagnosed learning difference such as dyslexia, ADHD or autism.' },
        { title: 'You still need to do college work.', text: 'The school looks for students who can handle college-level coursework with support.' },
        { title: 'Tests are not required.', text: 'SAT or ACT scores are not required.' }
      ]
    },

    who: {
      preview: 'Bright students who learn differently, often after a hard time in high school',
      paragraphs: [
        'Students with dyslexia, ADHD, autism and executive function challenges. Many are creative, curious and good at things school did not measure well.',
        'Many students transfer in after trying another college. The average age is a little older than most schools.'
      ]
    },

    knownFor: {
      preview: 'Pioneering college support for dyslexia and universal design',
      points: [
        { title: 'Dyslexia pioneer', text: 'It is known as the first college to build programs for students with dyslexia.' },
        { title: 'Small class size', text: 'A low student-to-faculty ratio means professors know you.' },
        { title: 'Support built in', text: 'Teaching is designed so support is part of every class, not an add-on.' }
      ]
    },

    stereotypes: {
      preview: '"It is easier" is a myth. "It is tiny" is true.',
      items: [
        { said: "It's an easy college.", verdict: 'myth', text: 'The work is real. The support is what is different.' },
        { said: "It's tiny.", verdict: 'true', text: 'About 600 students. You will know most people.' },
        { said: 'There is no social life.', verdict: 'half', text: 'It is quiet, but there are clubs, events and a close community.' },
        { said: "It's only for one type of student.", verdict: 'half', text: 'All students learn differently, but they have different needs and interests.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is a real college with real degrees. Fit matters a lot.',
      myths: [
        { title: 'It is a special-ed program.', text: 'It is a college that gives associate and bachelor degrees.' },
        { title: 'Everyone has the same needs.', text: 'Students have different diagnoses and goals.' }
      ],
      know: [
        { title: 'Costs add up.', text: 'The support model is pricey. Ask about aid and net price.' },
        { title: 'Check your major.', text: 'The school has a smaller set of programs than a big university.' },
        { title: 'Visit first.', text: 'A tiny rural campus is not for everyone.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want support and community. Rough if you want a big college.',
      love: ['You want support built into class', 'You want to feel understood', 'You like small settings'],
      struggle: ['You want a big campus', 'You want a big sports scene', 'You want a city']
    },

    people: {
      preview: 'Support and community win. Cost and size are the complaints.',
      plus: ['Teaching built around how you learn', 'Small classes and close professors', 'Community where you fit in'],
      minus: ['High cost', 'Very small and rural', 'Fewer majors than a big school']
    }
  }
});
