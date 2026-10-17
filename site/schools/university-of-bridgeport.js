registerSchool({
  id: 'university-of-bridgeport',
  name: 'Bridgeport',
  nameSub: 'University of Bridgeport',
  title: 'University of Bridgeport',
  state: 'Connecticut',
  location: 'Bridgeport, CT · On Long Island Sound',
  asOf: '2026',

  colors: {
    name: 'Purple Knights · Purple and white',
    swatches: ['#592D82', '#FFFFFF'],
    band: '#FFFFFF',
    onBand: '#592D82',
    onBandMuted: '#6B4A8C',
    stripe: '#592D82',
    accent: '#592D82',
    accentOnDark: '#B58CE0'
  },

  vibe: "A diverse, commuter-heavy school on the water in a working city. Lots of international students and grad programs, with a small campus feel and not much of a traditional college scene.",
  flags: ['Very diverse', 'Lots of grad students', 'Commuter-heavy', 'Division II'],
  facts: [
    { label: 'Setting', value: 'Urban' },
    { label: 'Undergrads', value: '~3,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mix of residents and commuters; campus is small, food is basic.", "housing": ["There is on-campus housing, mostly dorms.", "A good share of students commute or live nearby.", "The campus is small and sits in a city, so the feel is less like a campus bubble."], "food": ["There is a main dining option, and students call the food okay.", "Residents usually need a meal plan.", "Bridgeport has restaurants around, but students may travel for more choices."]},
    vibe: {
      preview: 'Diverse, practical, and what you make of it',
      meters: {
        party:    { value: 3, note: 'Some parties, not a party school' },
        campus:   { value: 5, note: 'Waterfront campus in a city' },
        spirit:   { value: 3, note: 'Small crowds for Division II games' },
        pressure: { value: 4, note: 'Varies by program' },
        career:   { value: 6, note: 'Health and engineering focus' },
        greek:    { value: 2, note: 'A few chapters' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small circles. Many people are from all over the world.',
      paragraphs: [
        "Social life is clubs, teams, cultural groups and your friend group. Many students commute, and many grad students are not around on weekends, so the campus can feel quiet.",
        "Bridgeport is a working city, so people tend to go to New Haven, Norwalk or New York for a bigger night out. A car or train pass helps a lot."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Programs vary.',
      points: [
        { title: 'It is not very selective.', text: 'Most who apply are admitted.' },
        { title: 'Check program rules.', text: 'Health programs and the honors program have their own requirements.' },
        { title: 'Test policy changes.', text: 'Check the website for the current testing rule.' }
      ]
    },

    who: {
      preview: 'Local students, international students, athletes',
      paragraphs: [
        "A mix of Connecticut and New York area students, plus a big international group. It is one of the more diverse campuses in the state.",
        "Health sciences, engineering, business and computer science are popular choices."
      ]
    },

    knownFor: {
      preview: 'Diversity, health programs, and a waterfront campus',
      points: [
        { title: 'International students', text: 'The school has a long history of enrolling students from around the world.' },
        { title: 'Health programs', text: 'It has a physician assistant program and other health-related programs, including chiropractic and acupuncture.' },
        { title: 'Women\'s soccer', text: 'The women\'s team won a Division II national title in 2018.' },
        { title: 'Goodwin ownership', text: 'Goodwin University took over the school in 2021, and it keeps its own name.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is half true. "Easy to get in" is true.',
      items: [
        { said: "It's a commuter school.", verdict: 'half', text: 'Many students commute, but there are residence halls and plenty of people live on campus.' },
        { said: 'Anyone can get in.', verdict: 'true', text: 'Most applicants are admitted. What you get out of it depends on you.' },
        { said: 'Bridgeport is unsafe.', verdict: 'half', text: 'Parts of the city have real problems and people say to be careful at night. Stay aware like you would in any city.' },
        { said: "Nothing to do on campus.", verdict: 'half', text: 'It is quiet at times, but clubs and teams keep things going if you get involved.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is smaller and quieter than people expect.',
      myths: [
        { title: 'It is just a grad school.', text: 'It has a lot of grad students, but undergrads are a large part of the school.' },
        { title: 'Nobody lives on campus.', text: 'There are dorms with students living in them.' }
      ],
      know: [
        { title: 'A car helps.', text: 'Getting around the region is easier with one.' },
        { title: 'Get involved early.', text: 'Clubs and teams make the campus feel bigger.' },
        { title: 'Check net price.', text: 'Aid varies a lot. Use the calculator on the website.' },
        { title: 'Visit first.', text: 'Walk the campus and neighborhood before you decide.' }
      ]
    },

    fit: {
      preview: 'Good for diverse, practical, health-minded students. Not a classic college town.',
      love: ['You want a diverse student body', 'You want a health or engineering program', 'You want Division II sports', 'You want a small school near the water'],
      struggle: ['You want a big party scene', 'You want a leafy college town', 'You want a name that impresses at first glance']
    },

    people: {
      preview: 'Welcoming mix of people. The city and quiet weekends are the knocks.',
      plus: ['Very diverse and welcoming', 'Practical programs', 'Waterfront campus'],
      minus: ['Quiet weekends', 'Not much around campus', 'Hard to get around without a car']
    }
  }
});
