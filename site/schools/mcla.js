registerSchool({
  id: 'mcla',
  name: 'MCLA',
  nameSub: 'Mass College of Liberal Arts',
  state: 'Massachusetts',
  location: 'North Adams, MA · In the Berkshires',
  asOf: '2026',

  colors: {
    name: 'Trailblazers · Blues and gold',
    swatches: ['#002B49', '#0085CA', '#88DBDF', '#FFCD00'],
    band: '#88DBDF',
    onBand: '#002B49',
    onBandMuted: '#1D4A5C',
    stripe: '#0085CA',
    accent: '#006CA5',
    accentOnDark: '#88DBDF'
  },

  vibe: "A tiny public college in a mountain town in the far corner of the state. It's quiet, artsy and outdoorsy, and you'll know most faces on campus within a month.",
  flags: ['Very small', 'Remote', 'Cheap for in-state', 'Bring a car'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~800' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None official' }
  ],

  sections: {
    vibe: {
      preview: 'Small, quiet, artsy, mountains everywhere',
      meters: {
        party:    { value: 3, note: 'House parties and small get-togethers' },
        campus:   { value: 6, note: 'Compact campus with mountain views' },
        spirit:   { value: 3, note: 'Small crowds, hockey is back' },
        pressure: { value: 3, note: 'Supportive, not competitive' },
        career:   { value: 5, note: 'Internships, but you have to chase them' },
        greek:    { value: 0, note: 'No school-recognized chapters' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Everyone knows everyone. Fun is small and homemade.',
      paragraphs: [
        "With well under a thousand undergrads, this is about as small as a college gets. You'll see the same people in the dining hall, at club meetings and at the one party that weekend. Some people love that. Some feel boxed in by sophomore year.",
        "North Adams is not a college town. It's a small former mill city with a few bars, coffee shops and restaurants. The social life is mostly on campus: clubs, theater, music, games and whatever your friends set up.",
        "The outdoors fills a lot of free time. Hiking, skiing and Mount Greylock, the highest point in the state, are all close. Boston is about three hours away, so you won't pop into the city for the night."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are not a factor.',
      points: [
        { title: "It's easy to get into.", text: 'Most applicants are admitted. Decent grades in a normal college prep schedule usually get you in.' },
        { title: 'Tests are not required.', text: 'MCLA has not required SAT or ACT scores in recent years. Check the current policy before you apply.' },
        { title: 'Early action helps.', text: "There's a non-binding early action round in the fall. Apply early to hear back early and get first shot at aid." },
        { title: 'Compare the real cost.', text: "It's a state school, so in-state tuition is low. Out-of-state students should ask what discounts they qualify for." }
      ]
    },

    who: {
      preview: 'Artsy, outdoorsy and local kids who want small',
      paragraphs: [
        "A lot of Massachusetts students, many from the western part of the state, plus some from New York and Vermont nearby. You'll find art and theater kids, future teachers, psych and business majors, and people who picked it for the mountains.",
        "It suits people who want a liberal arts setup with small classes but don't want private school prices. It doesn't suit people who need noise, crowds and a city around them."
      ]
    },

    knownFor: {
      preview: 'Public liberal arts, the Berkshires, and a big art scene for a tiny town',
      points: [
        { title: 'Public liberal arts', text: "It's the state's public liberal arts college. Think small classes and professors who know you, at a public price." },
        { title: 'Art next door', text: 'MASS MoCA, one of the biggest contemporary art museums in the country, is in North Adams. Arts students use the town as part of class.' },
        { title: 'The Berkshires', text: 'The campus sits in a valley surrounded by mountains. It looks like a postcard in October and gets real winter.' },
        { title: 'Hockey came back', text: 'The old men\'s hockey team was cut in 2003. Men\'s and women\'s hockey returned in 2023.' }
      ]
    },

    stereotypes: {
      preview: '"In the middle of nowhere" is true. "Not a real college" is a myth.',
      items: [
        { said: "It's in the middle of nowhere.", verdict: 'true', text: "It's a long drive from any big city. The upside is the mountains, the quiet and the art. The downside is a car feels close to required." },
        { said: "There's nothing to do.", verdict: 'half', text: "There's no big party scene and the town is small. Clubs, the outdoors and the art scene keep people busy if they go looking." },
        { said: "It's a backup school.", verdict: 'half', text: 'Some students do land here as a fallback. Plenty pick it on purpose for the size, the price and the setting.' },
        { said: "It's just the school next to Williams.", verdict: 'myth', text: "Williams is a few miles away, but the two are very different places. MCLA has its own students, programs and identity." }
      ]
    },

    mythsAndKnow: {
      preview: 'Tiny on purpose. Winters are real. A car changes everything.',
      myths: [
        { title: 'Liberal arts means no practical majors.', text: 'You can study business, education, psychology, computer science and more. The liberal arts part means you also take a spread of other classes.' },
        { title: 'The school is shrinking away.', text: 'Enrollment dropped a lot over the last decade, but it has been growing again the last couple of years.' }
      ],
      know: [
        { title: 'Winters are long.', text: 'This is the mountains. Expect snow, early dark and cold from November to March.' },
        { title: 'A car helps a lot.', text: 'Buses run around the area, but getting home, to a city or to the trailheads is much easier if you drive.' },
        { title: "You can't hide in class.", text: 'Classes are small. Professors notice when you skip, and they also notice when you show up.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small, cheap and outdoorsy. Rough if you want a city.',
      love: ['You want a really small school where people know you', 'You love hiking, skiing or the arts', 'You want liberal arts at a public price', 'You like quiet more than crowds'],
      struggle: ['You want a big party scene', 'You want a city close by', 'You need a lot of new faces to stay interested']
    },

    people: {
      preview: 'Professors and scenery get the praise. Isolation is the complaint.',
      plus: ['Professors know you and help a lot', 'The setting is beautiful', 'Low cost for in-state students'],
      minus: ['The town is quiet and far from everything', 'Small means not many options for friends or classes', 'Weekends can feel slow without a car']
    }
  }
});
