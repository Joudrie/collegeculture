registerSchool({
  id: 'fisher',
  name: 'Fisher',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Boston, MA · Back Bay',
  asOf: '2026',

  colors: {
    name: 'Falcons · Navy and blue',
    swatches: ['#031756', '#01549E'],
    band: '#031756',
    onBand: '#FFFFFF',
    onBandMuted: '#B9C4E0',
    stripe: '#01549E',
    accent: '#01549E',
    accentOnDark: '#6FB1F0'
  },

  vibe: "A small private college in Back Bay with a few buildings on historic streets. Classes are small and everyone knows your name, but it's a quiet campus in an expensive neighborhood.",
  flags: ['Tiny campus', 'Back Bay Boston', 'Small classes', 'Most get in'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,300' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'NAIA' },
    { label: 'Greek life', value: 'Little' }
  ],

  sections: {
    "living": {"preview": "Small, city-based, with limited housing; many students commute.", "housing": ["The school is small and sits in an urban area, so campus living is limited.", "Many students commute or find housing on their own.", "Ask the school what housing is offered before you count on it."], "food": ["Dining on campus is limited, so many students eat out or bring food.", "Boston has huge food options at every price.", "Plan for food costs outside school meals."]},
    vibe: {
      preview: 'Small, friendly, career-minded, quiet campus in a big city',
      meters: {
        party:    { value: 3, note: 'Low-key, most nights out are in the city' },
        campus:   { value: 2, note: 'A few buildings on Beacon St area streets' },
        spirit:   { value: 3, note: 'Small crowds, small teams' },
        pressure: { value: 4, note: 'Manageable, professors check in on you' },
        career:   { value: 6, note: 'Business, criminal justice and nursing focus' },
        greek:    { value: 1, note: 'Not a thing here' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small friend groups, clubs and the whole city as your weekend',
      paragraphs: [
        "With a small student body, you'll recognize most people by sophomore year. Friend groups form in the residence halls, on teams and in clubs. There isn't a big on-campus party scene, so people mostly go out into Boston.",
        "Some students commute, and they say it's harder to get plugged in if you leave right after class. Joining a club or team early fixes most of that.",
        'The location does a lot of the work. Boston Common, Newbury Street and the T are all close, and other colleges nearby make it easy to meet people outside Fisher.'
      ]
    },

    gettingIn: {
      preview: "Most applicants get in. Show you're ready to do the work.",
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted. Decent grades will usually do it.' },
        { title: 'Check the test policy.', text: "Recent years have been test-optional, but policies change. Look at the current rules before you apply." },
        { title: 'It has a rolling timeline.', text: "Decisions come in as applications arrive, so applying earlier means hearing back earlier." }
      ]
    },

    who: {
      preview: 'Career-minded students who want small classes in a city',
      paragraphs: [
        "Students who want a real degree in a small setting, often in business, criminal justice, health or communications. Many are from Massachusetts, with a good number of out-of-state and international students too.",
        "It fits people who would feel lost at a huge university. You'll be known by your professors, and nobody will let you quietly disappear."
      ]
    },

    knownFor: {
      preview: 'Small size, a Back Bay address, and career-focused majors',
      points: [
        { title: 'Back Bay address', text: 'Fisher sits in one of the nicest neighborhoods in Boston, near the Public Garden and the Common.' },
        { title: 'Small classes', text: 'Professors know your name and your grades. That is the main selling point.' },
        { title: 'Hands-on majors', text: 'Programs lean toward careers like business, criminal justice, nursing and communications.' }
      ]
    },

    stereotypes: {
      preview: '"Tiny" is true. "Not a real college" is a myth.',
      items: [
        { said: "It's tiny.", verdict: 'true', text: "A few buildings and under 2,000 students counting everyone. If you want a campus with a quad and a stadium, this isn't it." },
        { said: "It's an easy school.", verdict: 'half', text: "Getting in is easy. Classes still take work, and small classes mean you can't hide." },
        { said: "There's nothing going on.", verdict: 'half', text: 'Campus events are low-key. Boston is the thing to do, and it is right outside the door.' },
        { said: "It's only for people who couldn't get in elsewhere.", verdict: 'myth', text: 'Some students picked it because they wanted small classes and a city location. That is a real reason.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Boston costs a lot. Look at net price. Get involved early.',
      myths: [
        { title: 'Small means boring.', text: "Campus is quiet, but you're in the middle of Boston. Plenty of students say that is the point." },
        { title: "It's only a two-year school.", text: 'It offers bachelor degrees and has for years, along with associate programs.' }
      ],
      know: [
        { title: 'Boston is expensive.', text: 'Housing and food in Back Bay cost more than most college towns. Budget for it.' },
        { title: "You don't need a car.", text: 'The T and walking get you almost everywhere.' },
        { title: 'Join something early.', text: 'In a small school, clubs and teams are how you build a friend group.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for small classes and a city. Rough for a big college scene.',
      love: ['You want professors who know you', 'You want to live in central Boston', 'You like a career-focused degree'],
      struggle: ['You want football and a big campus', 'You want a huge party scene', 'You want a lot of majors to choose from']
    },

    people: {
      preview: 'Size and location win. A quiet campus is the complaint.',
      plus: ['Small classes and close professors', 'Great location in Back Bay', 'Clear, career-focused majors'],
      minus: ['Campus can feel very small', 'Limited social scene on campus', 'Boston living costs add up']
    }
  }
});
