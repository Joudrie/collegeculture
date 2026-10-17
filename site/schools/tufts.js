registerSchool({
  id: 'tufts',
  name: 'Tufts',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Medford, MA · On a hill by Somerville',
  asOf: '2026',

  colors: {
    name: 'Jumbos · Blue and brown',
    swatches: ['#3E8EDE', '#63493A'],
    band: '#63493A',
    onBand: '#FFFFFF',
    onBandMuted: '#E6DBD0',
    stripe: '#3E8EDE',
    accent: '#3172AE',
    accentOnDark: '#6FA8E8'
  },

  vibe: "A mid-sized school full of smart, slightly quirky people who care about the world. It's academic without being stiff, and Boston is a train ride away.",
  flags: ['Very hard to get in', 'Quirky smart kids', 'Big on study abroad', 'Green Line to Boston'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~7,000' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Green Line stop at campus; Red Line nearby", "points": ["The Green Line has a Medford/Tufts stop, and Davis Square on the Red Line is a short trip away.", "Logan Airport is the closest major airport.", "You do not need a car. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly on-campus living, decent dining, quiet area near Boston", "housing": ["Most students live on campus, especially early on.", "Many upperclassmen move into houses and apartments near campus.", "You can get into Boston on the T, but campus itself is residential."], "food": ["There are two main dining halls plus a few smaller options.", "Students tend to say the food is better than at most schools.", "Davis Square is close and has lots of cheap places to eat."]},
    vibe: {
      preview: 'Nerdy, friendly, globally minded, and close to the city',
      meters: {
        party:    { value: 5, note: 'Frat basements and house parties, plus Boston' },
        campus:   { value: 8, note: 'Pretty hilltop campus with a Boston skyline view' },
        spirit:   { value: 4, note: 'Small-school sports, big love for Jumbo' },
        pressure: { value: 7, note: 'Hard classes, but people help each other' },
        career:   { value: 7, note: 'Strong for pre-med, policy and engineering' },
        greek:    { value: 3, note: 'Around, but most people skip it' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Small friend groups, house parties, and trips into Boston',
      paragraphs: [
        "Freshman dorms and clubs are where most friend groups form. There are hundreds of clubs, and people get really into them, from a cappella to debate to the student-run radio station. Your club often turns into your social life.",
        "The party scene is there but not huge. It's mostly off-campus houses and a few frats, and the school has cracked down on some Greek houses in recent years. Spring Fling, the big spring concert, is the one day almost everyone comes out.",
        "Davis Square in Somerville is a short walk away for food and coffee. The Green Line now stops right by campus, so Boston is easy to get to without a car."
      ]
    },

    gettingIn: {
      preview: 'Around 1 in 10 get in. Treat it as a reach for almost anyone.',
      points: [
        { title: "It's extremely hard to get into.", text: 'The vast majority of applicants are turned away, and most of them had great grades. Treat it as a reach no matter how strong you are.' },
        { title: 'Early decision is a big deal.', text: 'Tufts has two early decision rounds. A big chunk of the class gets in early, so if it is your first choice, ED can help.' },
        { title: 'Tests are optional.', text: 'You can apply without SAT or ACT scores. Most admitted students still sent them. Check the current policy before you apply.' },
        { title: 'Show why Tufts specifically.', text: 'The essays ask what draws you to Tufts. Generic "it\'s a good school" answers do not help.' }
      ]
    },

    who: {
      preview: 'Smart, curious, a little quirky, and into big ideas',
      paragraphs: [
        "People who could have gone to an Ivy and are happy they didn't. Lots of international relations, pre-med, economics, engineering and computer science students. Plenty of people double major or study abroad.",
        "The stereotype is the quirky smart kid, and it's pretty fair. People get excited about niche stuff, talk politics at dinner, and are a little nerdy about it. If you want a laid-back, sports-first school, it's not that."
      ]
    },

    knownFor: {
      preview: 'International relations, Jumbo, and smart kids who care',
      points: [
        { title: 'International relations', text: "It's one of the biggest majors, and the grad school for international affairs, the Fletcher School, adds to the reputation. Study abroad is very common." },
        { title: 'Jumbo the elephant', text: 'The mascot comes from P.T. Barnum, the circus guy, who was an early donor. Students are weirdly proud of it.' },
        { title: 'Active citizenship', text: 'Tufts pushes civic engagement and public service hard. Lots of students volunteer or work on social issues.' },
        { title: 'Pre-med and engineering', text: 'Both are popular and strong, with a medical school and a dental school in the same university.' }
      ]
    },

    stereotypes: {
      preview: '"Harvard reject" is mostly a joke. "Quirky smart kids" is true.',
      items: [
        { said: "Everyone's a Harvard reject.", verdict: 'half', text: "Plenty of students applied to Ivies, and the joke is old. But with an admit rate this low, lots of people pick Tufts first and apply early decision." },
        { said: "It's full of quirky, nerdy kids.", verdict: 'true', text: "People are smart and a little weird in a good way. Being really into something niche is normal here." },
        { said: 'Everyone wants to be a diplomat.', verdict: 'half', text: "International relations is huge, so you'll meet a lot of future policy people. But pre-med, engineering and CS students are everywhere too." },
        { said: "There's no school spirit.", verdict: 'half', text: "It's Division III, so games are small. But people love Jumbo, Spring Fling and the school traditions." }
      ]
    },

    mythsAndKnow: {
      preview: 'Campus is on a hill, the T is close, and look at aid',
      myths: [
        { title: "It's a Boston school.", text: "It's in Medford and Somerville, about 5 miles out. It feels like a leafy campus, not a city campus, but Boston is easy to reach." },
        { title: "It's a backup school.", text: 'Not anymore. It turns away about 9 out of 10 applicants, and many students pick it first.' }
      ],
      know: [
        { title: 'Campus is on a hill.', text: 'Students talk about "uphill" and "downhill" campus. You will be walking up stairs in the snow.' },
        { title: "You don't need a car.", text: 'The Green Line has a stop next to campus, and Davis Square on the Red Line is walking distance.' },
        { title: 'Aid has gotten better.', text: 'Tufts announced a plan to make tuition free for many families earning under $150,000, starting with the class entering in 2026. Check the current details.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for curious people who want a real campus near a city.',
      love: ['You love learning and talking about big ideas', 'You want a campus feel with Boston nearby', 'You want to study abroad or go into policy', "You're a little quirky and want people like you"],
      struggle: ['You want big-time sports and tailgates', 'You want a huge party scene', 'You want to be in the middle of a city']
    },

    people: {
      preview: 'Smart people and a great location. Cost and workload are the complaints.',
      plus: ['Professors and classmates are genuinely smart and friendly', 'Pretty campus with easy train access to Boston', 'Easy to find people who share your niche interests'],
      minus: ["It's expensive unless your aid is good", 'The workload is heavy', 'Social life can feel small and cliquey']
    }
  }
});
