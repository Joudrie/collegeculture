registerSchool({
  id: 'roger-williams',
  name: 'Roger Williams',
  nameSub: 'University',
  state: 'Rhode Island',
  location: 'Bristol, RI · On Mount Hope Bay',
  asOf: '2026',

  colors: {
    name: 'Hawks · Navy, light blue and gold',
    swatches: ['#9BC9EA', '#01295F'],
    band: '#9BC9EA',
    onBand: '#01295F',
    onBandMuted: '#1F4272',
    stripe: '#01295F',
    accent: '#01295F',
    accentOnDark: '#9BC9EA'
  },

  vibe: "A waterfront campus in a quiet Rhode Island town. People come for the ocean views, architecture and marine science, and stay for a friendly, active school with a lot of school spirit for its size.",
  flags: ['On the water', 'Quiet town', 'Most get in', 'Needs a car'],
  facts: [
    { label: 'Setting', value: 'Coastal town' },
    { label: 'Undergrads', value: '~4,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mostly residential on the water; food is okay.", "housing": ["Most first-years live on campus.", "Housing is a mix of dorms, suites and apartment-style options.", "Many upperclassmen move off campus in nearby towns."], "food": ["There is a main dining hall, and students call the food decent.", "Residents usually need a meal plan.", "Bristol has a small downtown, but a car helps for more choices."]},
    vibe: {
      preview: 'Beachy, friendly, outdoorsy, quiet town',
      meters: {
        party:    { value: 5, note: 'Mostly off-campus houses and small parties' },
        campus:   { value: 8, note: 'Waterfront, green and easy to walk' },
        spirit:   { value: 5, note: 'Teams get support, not huge crowds' },
        pressure: { value: 4, note: 'Depends on major, architecture is intense' },
        career:   { value: 6, note: 'Hands-on majors and internships' },
        greek:    { value: 2, note: 'A small part of campus life' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friendly and active. The town is small, so campus is the center.',
      paragraphs: [
        "Most students live on campus, and the school keeps a steady stream of events, club activities and intramurals going. Sports, sailing, outdoor clubs and your dorm floor are where people find friends.",
        "Bristol is a small town, so there is not a big nightlife scene walking distance away. Students head to Providence or Newport, or hang around campus. Weekends can be quiet if you do not have a plan.",
        "A car helps a lot. Providence is roughly 30 to 40 minutes away by car, and the beaches are close."
      ]
    },

    gettingIn: {
      preview: 'Most applicants are admitted. Strong grades help for scholarships.',
      points: [
        { title: "It's not too hard to get into.", text: 'The large majority of applicants are admitted. Some programs, like architecture, are more competitive.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Merit aid is common.', text: 'Many students get scholarships, so the sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Northeast kids who like water, building things and a friendly campus',
      paragraphs: [
        "Lots of students from New England, New York and New Jersey. A good number are into sports, boating, marine science or architecture. People are mostly outgoing and down to earth.",
        "Popular majors include business, marine biology, architecture, criminal justice, engineering and psychology."
      ]
    },

    knownFor: {
      preview: 'Architecture, marine science, and a waterfront campus',
      points: [
        { title: 'Architecture', text: 'The architecture program is a big draw and has its own school on campus.' },
        { title: 'Marine biology', text: 'Being on the bay makes marine and natural science programs a major part of the school.' },
        { title: 'Law school', text: 'RWU has a law school in Bristol, which brings a graduate presence to the campus.' },
        { title: 'The location', text: 'The campus looks out over Mount Hope Bay. It is often the first thing students mention.' }
      ]
    },

    stereotypes: {
      preview: '"Beach school" is half true. "Just a party school" is a myth.',
      items: [
        { said: "It's a beach school where nobody studies.", verdict: 'half', text: 'The setting is relaxed, but architecture and engineering are real work. Most majors are manageable.' },
        { said: "It's a safety school.", verdict: 'half', text: 'Admission is not hard, and some students come because they did not get into a first pick. Many others choose it for the programs and the setting.' },
        { said: 'Everyone is from the same few states.', verdict: 'half', text: 'Most students are from the Northeast. Fewer come from far away.' },
        { said: 'Nothing to do in Bristol.', verdict: 'true', text: 'It is a small town. You make your own fun on campus or head to Providence or Newport.' }
      ]
    },

    mythsAndKnow: {
      preview: 'You will want a car. The campus is beautiful but small-town quiet.',
      myths: [
        { title: 'It is just a party school.', text: 'There is a social scene, but it is not famous for it. Most students are busy with classes, teams and clubs.' },
        { title: 'Only for people who want the beach.', text: "The setting is a perk, but programs like architecture, engineering and criminal justice are what bring many people here." }
      ],
      know: [
        { title: 'A car makes life easier.', text: 'There is public transit, but it is limited. Getting around the area is much easier with a car.' },
        { title: 'Most people live on campus.', text: 'Housing is a big part of the experience, and the campus feels connected.' },
        { title: 'Check your program.', text: "Different majors have different workloads and costs. Architecture is the most demanding." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a pretty campus and a friendly crowd. Rough if you want a big city.',
      love: ['You want a waterfront campus', 'You like sailing or the outdoors', 'You want architecture or marine science', 'You like a medium-sized friendly school'],
      struggle: ['You want a city around you', 'You want a big party scene', 'You do not want to rely on a car']
    },

    people: {
      preview: 'Campus and community win. Small-town quiet is the main complaint.',
      plus: ['Beautiful campus on the water', 'Friendly students and a strong community', 'Hands-on programs and good facilities'],
      minus: ['Bristol is quiet', 'Costs can be high before aid', 'Limited public transit']
    }
  }
});
