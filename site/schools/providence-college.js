registerSchool({
  id: 'providence-college',
  name: 'Providence',
  nameSub: 'College',
  state: 'Rhode Island',
  location: 'Providence, RI · Elmhurst neighborhood',
  asOf: '2026',

  colors: {
    name: 'Friars · Black and white',
    swatches: ['#000000', '#FFFFFF', '#A3A19E'],
    band: '#000000',
    onBand: '#FFFFFF',
    onBandMuted: '#B5B3B0',
    stripe: '#A3A19E',
    accent: '#5E5C59',
    accentOnDark: '#A3A19E'
  },

  vibe: "A tight, social Catholic college where basketball season is a big deal and weekends get loud. It's small enough to feel like a bubble, with a real city just down the hill.",
  flags: ['Catholic college', 'Big East hoops', 'Required Civ course', 'No frats'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~4,500' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Big social scene, big spirit, small enclosed campus',
      meters: {
        party:    { value: 8, note: 'Off-campus houses carry the weekend' },
        campus:   { value: 8, note: 'Compact, gated and walkable' },
        spirit:   { value: 8, note: 'Big East basketball and hockey' },
        pressure: { value: 5, note: 'Civ is real work, the rest is manageable' },
        career:   { value: 7, note: 'Strong alumni network in the Northeast' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 6, note: 'Dominican friars on campus, practice is up to you' }
      }
    },

    social: {
      preview: 'Everyone knows everyone. Weekends move to the off-campus houses.',
      paragraphs: [
        "PC is small and most people live on campus for at least the first few years, so you see the same faces all the time. People describe it as friendly and close, and also a bit of a bubble.",
        "There's no Greek life, so the party scene runs through off-campus houses on streets like Eaton Street, mostly upperclassmen. Underclassmen end up there a lot too. The neighbors complain about it often, and the city and the college have pushed back on big parties more than once.",
        "Basketball games are the shared event. Home games are downtown at the arena, and a big Big East game is the best night of the winter for a lot of people."
      ]
    },

    gettingIn: {
      preview: 'About half get in. Tests are optional, and most apply without them.',
      points: [
        { title: "It's selective, not impossible.", text: "Roughly half of applicants get in. Solid grades in hard classes put you in good shape." },
        { title: 'Tests are optional.', text: "Most applicants and most admitted students skip the SAT and ACT. Check the current policy before you apply." },
        { title: 'Early options exist.', text: "There are early action and early decision rounds. If it's your clear first choice, applying early can help." },
        { title: 'Honors is separate.', text: 'There is an Honors Program with its own, longer version of Civ. Ask admissions how students are picked.' }
      ]
    },

    who: {
      preview: 'Mostly Northeast kids, social, sporty, a lot of business majors',
      paragraphs: [
        "A lot of students come from Massachusetts, Connecticut, New York and New Jersey, and plenty went to Catholic high schools. Many of them already knew a few people here before they showed up.",
        "Business is the biggest draw, along with things like health sciences, nursing, psychology and education. The crowd tends to be social, athletic and pretty put-together. It's not the place if you want a huge mix of backgrounds and scenes."
      ]
    },

    knownFor: {
      preview: 'Friars basketball, the Civ program, and a work hard, party hard rep',
      points: [
        { title: 'Friars basketball', text: 'PC plays in the Big East against schools like UConn, Villanova and Georgetown. Home games are downtown at the Amica Mutual Pavilion.' },
        { title: 'Civ', text: "Development of Western Civilization is a required four-semester course in your first two years. It covers history, literature, philosophy, theology and art. Everyone has an opinion about it." },
        { title: 'Hockey', text: "The men's team won the national championship in 2015 and plays at Schneider Arena on campus." },
        { title: 'The party reputation', text: "PC has long had a rep as a social, heavy-drinking school. Students mostly agree it's earned." }
      ]
    },

    stereotypes: {
      preview: '"Party school" is mostly true. "Everyone is preppy" is half true.',
      items: [
        { said: "It's a party school.", verdict: 'true', text: "Weekends are busy and the off-campus house scene is a big part of life. You can skip it, but you'll notice it." },
        { said: 'Everyone dresses preppy.', verdict: 'half', text: "There's definitely a polished, preppy look on campus. It's not everyone, and nobody checks your closet at the gate." },
        { said: "Everyone's from New England or the tri-state area.", verdict: 'true', text: "Most students come from the Northeast. You'll hear a lot about Boston suburbs and Connecticut towns." },
        { said: 'Civ will ruin your first two years.', verdict: 'half', text: 'It is a lot of reading and writing, and some semesters are tough. Plenty of people end up saying it was the most interesting class they took.' }
      ]
    },

    mythsAndKnow: {
      preview: 'You do not need to be Catholic. Civ and core classes are required.',
      myths: [
        { title: 'You have to be Catholic.', text: "It's run by the Dominican friars and the Catholic identity is real, but students of any faith or none go here. Mass is there if you want it, never required." },
        { title: "It's in the middle of downtown.", text: "Campus is in a residential neighborhood on the north side of the city. Downtown is a short drive or bus ride away." }
      ],
      know: [
        { title: 'The core is big.', text: 'Besides Civ, you take required classes in areas like theology, philosophy, math and science. Plan for that when you map out a major.' },
        { title: 'Campus is small and fenced.', text: "You can walk across it in about 10 minutes. It feels safe and contained, which some love and some find tight." },
        { title: 'Housing gets competitive later.', text: 'Upperclassmen often move off campus into nearby houses. Rent and landlords vary a lot, so ask around early.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want spirit and a social scene. Rough if you want variety.',
      love: ['You want big-time college basketball', 'You want a small school with a busy social life', "You like reading and arguing about big ideas", 'You want a strong Northeast alumni network'],
      struggle: ['You want a wide mix of people and backgrounds', "You're not into drinking culture", 'You want to skip required core classes']
    },

    people: {
      preview: 'Spirit and community win. The bubble and sameness get criticized.',
      plus: ['Basketball games are a blast', 'Easy to make friends fast', 'Professors know you and the classes are small'],
      minus: ['The student body can feel very similar', 'Drinking culture is hard to avoid', 'Civ eats a lot of your time early on']
    }
  }
});
