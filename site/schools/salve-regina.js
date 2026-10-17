registerSchool({
  id: 'salve-regina',
  name: 'Salve Regina',
  nameSub: 'University',
  state: 'Rhode Island',
  location: 'Newport, RI · Gilded Age mansions by the ocean',
  asOf: '2026',

  colors: {
    name: 'Seahawks · Blue, teal and gold',
    swatches: ['#002855', '#AA8800'],
    band: '#002855',
    onBand: '#FFFFFF',
    onBandMuted: '#C2DCDC',
    stripe: '#AA8800',
    accent: '#005588',
    accentOnDark: '#E0BE4A'
  },

  vibe: "A small Catholic university on old mansion grounds in Newport. The campus looks like a movie set, the community is tight, and the ocean is basically in your backyard.",
  flags: ['Mansion campus', 'Catholic school', 'Small classes', 'Heavily women'],
  facts: [
    { label: 'Setting', value: 'Coastal city' },
    { label: 'Undergrads', value: '~2,100' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Mostly residential campus; food is okay and Newport is a big draw.", "housing": ["Most students live on campus, especially in the first years.", "Some campus housing is in older mansions and houses, which students tend to like.", "Newport is expensive, so off-campus housing can cost a lot."], "food": ["There is a main dining hall plus a few smaller spots.", "Residents typically need a meal plan.", "Newport has lots of restaurants, though many are geared to tourists."]},
    vibe: {
      preview: 'Pretty, close-knit, a bit preppy, quiet weekdays',
      meters: {
        party:    { value: 4, note: 'Off-campus houses and downtown Newport' },
        campus:   { value: 9, note: 'Mansions and ocean views' },
        spirit:   { value: 4, note: 'Supportive but small crowds' },
        pressure: { value: 5, note: 'Solid workload, small classes' },
        career:   { value: 6, note: 'Nursing and criminal justice pipelines' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 5, note: 'Catholic roots, not pushed hard' }
      }
    },

    social: {
      preview: 'Small and friendly. Newport is the weekend plan.',
      paragraphs: [
        "With about 2,000 undergrads you see the same faces a lot. People describe the community as warm and close. Teams, clubs, service groups and your dorm are the main ways to meet people.",
        "Newport is a tourist town. In summer it is busy, and in winter it can feel pretty quiet. Students spend time at the waterfront, restaurants and the Cliff Walk, which runs right past campus.",
        "The school is Catholic and has a campus ministry, but students say it is not heavy-handed. You will see it in the buildings and the service focus more than in daily life."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Grades and your fit matter.',
      points: [
        { title: "It's not too hard to get into.", text: 'The large majority of applicants are admitted. Decent grades put you in good shape.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Merit aid is common.', text: 'Many students get scholarships, so the sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Northeast kids who want a small, pretty school with a service streak',
      paragraphs: [
        "Mostly students from New England and the mid-Atlantic. The student body is majority women, which shapes the vibe. People are friendly, polished and involved in service work.",
        "Popular majors include nursing, business, criminal justice, psychology, education and international relations."
      ]
    },

    knownFor: {
      preview: 'The mansion campus, nursing and criminal justice, and Newport',
      points: [
        { title: 'The campus', text: 'Ochre Court and other Gilded Age mansions on the ocean are used as classrooms and offices.' },
        { title: 'Nursing and health', text: 'Nursing is one of the biggest programs and is a main reason people choose Salve.' },
        { title: 'Criminal justice', text: 'A popular major with a strong track record for students heading into law enforcement and legal fields.' },
        { title: 'Newport', text: 'Sailing, the Cliff Walk, and a historic downtown by the water.' }
      ]
    },

    stereotypes: {
      preview: '"Rich and preppy" is half true. "Boring" is half true.',
      items: [
        { said: 'Everyone is rich and preppy.', verdict: 'half', text: 'There is a preppy edge to the campus and the setting. Plenty of students are middle-class and on aid.' },
        { said: 'It is all girls.', verdict: 'myth', text: "The student body is majority women, but a good number of men are on campus, especially on sports teams." },
        { said: 'It is a strict Catholic school.', verdict: 'myth', text: 'It has Catholic roots and a ministry. Day to day, most students say religion is not a big part of life.' },
        { said: 'Newport is dead in the winter.', verdict: 'half', text: 'It is much quieter than summer. There is still food, music and things to do, just less of it.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Housing and cost are the things to look at. Bring a coat.',
      myths: [
        { title: 'You live in a mansion.', text: 'Some mansions hold offices and classes, but dorms are more normal. They are still nice for what they are.' },
        { title: 'Small means everyone is the same.', text: 'The school pulls from many states and countries. It is small, not identical.' }
      ],
      know: [
        { title: 'Newport can be pricey.', text: 'Rent and going out add up, especially in summer.' },
        { title: 'A car is helpful.', text: 'Newport is walkable, but getting to Providence or Boston is easier with a car.' },
        { title: 'Winters are windy.', text: 'The ocean is great until January. Pack for cold and wind.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and pretty. Rough if you want a big, loud school.',
      love: ['You want a close-knit campus', 'You are into nursing or criminal justice', 'You want ocean access', 'You like service and community work'],
      struggle: ['You want a big party scene', 'You want a big sports school', 'You want a very diverse crowd']
    },

    people: {
      preview: 'Campus and community win. Cost and winter quiet are the complaints.',
      plus: ['Gorgeous campus on the water', 'Friendly, close community', 'Small classes and helpful faculty'],
      minus: ['Newport is expensive', 'Quiet off-season', 'Small school, small social pool']
    }
  }
});
