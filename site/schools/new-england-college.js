registerSchool({
  id: 'new-england-college',
  name: 'NEC',
  nameSub: 'New England College',
  title: 'New England College',
  state: 'New Hampshire',
  location: 'Henniker, NH · Small town near Concord',
  asOf: '2026',

  colors: {
    name: 'Pilgrims · Navy and red',
    swatches: ['#011E41', '#BF243A'],
    band: '#011E41',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C4D4',
    stripe: '#BF243A',
    accent: '#BF243A',
    accentOnDark: '#F07583'
  },

  vibe: "A tiny college in a New Hampshire village, with a lot of hockey and a lot of online students you'll never see. On campus it is friendly, quiet and a good fit for people who want to be known by their professors.",
  flags: ['Tiny campus', 'Small town', 'Hockey school', 'Big online side'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~800' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Minimal' }
  ],

  sections: {
    "getThere": {"preview": "Small NH town; a car really helps", "points": ["Public transit in Henniker is very limited.", "Manchester-Boston Regional Airport is the closest airport.", "You will want a car. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small and mostly residential in a small town; food is basic.", "housing": ["Most students live on campus.", "Housing is mainly traditional dorms with a few apartment-style options.", "Henniker is quiet, so weekends can feel slow without a car."], "food": ["There is a main dining hall, and students call the food okay.", "Residents usually need a meal plan.", "Henniker has very few restaurants, so students drive for more."]},
    vibe: {
      preview: 'Small, friendly, outdoorsy, quiet weekends',
      meters: {
        party:    { value: 4, note: 'House gatherings and team hangouts' },
        campus:   { value: 6, note: 'A real campus in a small village' },
        spirit:   { value: 4, note: 'Hockey games are the draw' },
        pressure: { value: 3, note: 'Supportive and low key' },
        career:   { value: 5, note: 'Practical majors, small network' },
        greek:    { value: 1, note: 'Not a big part of campus' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Everyone knows each other. Weekends depend on what you plan.',
      paragraphs: [
        "With a few hundred students living on campus, it feels like a big friend group. Sports teams, clubs, and dorm life are where most people connect.",
        "Henniker is a small town. There is a handful of local spots and not much else, so students plan trips to Concord or Manchester. A car helps a lot.",
        "Winter is a big part of the vibe. People ski, snowshoe and go to hockey games. If you like the outdoors, it is a plus."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Check the test policy.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. A decent transcript puts you in good shape.' },
        { title: 'Scholarships are common.', text: 'Most students get aid, so the sticker price is not what most pay.' },
        { title: 'Check the current test policy.', text: 'Policies change. Look at the admissions page before you apply.' }
      ]
    },

    who: {
      preview: 'Athletes, small-school fans and people who like the outdoors',
      paragraphs: [
        "Mostly students from New England, a lot from New Hampshire and Massachusetts. Many are athletes who chose it for the size and the chance to play.",
        "Popular majors include business, criminal justice, education, psychology and sport management. People are friendly and laid back."
      ]
    },

    knownFor: {
      preview: 'Small size, hockey, and a huge online program',
      points: [
        { title: 'Online programs', text: 'NEC has a large online student body. Many people who say they go to NEC are not on campus.' },
        { title: 'Hockey', text: 'Ice hockey is the signature sport, with a strong following on campus.' },
        { title: 'Henniker setting', text: 'A classic New Hampshire village with a river, hills and trails nearby.' },
        { title: 'Small classes', text: 'Professors know you by name.' }
      ]
    },

    stereotypes: {
      preview: '"Tiny and quiet" is true. "Just online" is a myth.',
      items: [
        { said: "It's in the middle of nowhere.", verdict: 'true', text: 'Henniker is a small village. You can get to Concord in about 20 minutes with a car.' },
        { said: "It's just an online school.", verdict: 'myth', text: 'There is a real campus with dorms, teams and clubs. The online side is large but separate.' },
        { said: 'Everyone plays a sport.', verdict: 'half', text: 'Athletes are a big share of the student body, but not everyone.' },
        { said: 'Nothing to do on weekends.', verdict: 'half', text: 'It is quiet. If you plan ahead and have a car, it is fine.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring a car and warm clothes. The campus is small.',
      myths: [
        { title: 'Small means no options.', text: 'There are clubs, teams and outdoor stuff, just fewer than a big school. You have to jump in.' },
        { title: 'It is an easy ride.', text: 'Admission is open, but classes still take work. Small classes mean professors notice if you slack.' }
      ],
      know: [
        { title: 'A car helps a lot.', text: 'There is no real transit. Concord is the closest bigger town.' },
        { title: 'Winters are long.', text: 'Expect snow and cold for months.' },
        { title: 'Campus and online are different.', text: 'The online and campus programs have very different experiences. Know which you are applying to.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and quiet. Rough if you want a big social scene.',
      love: ['You want professors who know your name', 'You want to play a sport', 'You like hockey and winter', 'You want a low-pressure school'],
      struggle: ['You want a big party scene', 'You want a city nearby', 'You want a large, diverse crowd']
    },

    people: {
      preview: 'Friendly and quiet. Isolation is the main complaint.',
      plus: ['Small classes and supportive faculty', 'Friendly community', 'Outdoor activities nearby'],
      minus: ['Very small town', 'Limited social options', 'Need a car']
    }
  }
});
