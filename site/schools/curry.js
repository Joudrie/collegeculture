registerSchool({
  id: 'curry',
  name: 'Curry',
  nameSub: 'College',
  title: 'Curry College',
  state: 'Massachusetts',
  location: 'Milton, MA · Near the Blue Hills',
  asOf: '2026',

  colors: {
    name: 'Colonels · Purple and white',
    swatches: ['#654389', '#FFFFFF', '#9DC33B'],
    band: '#654389',
    onBand: '#FFFFFF',
    onBandMuted: '#D9CCE8',
    stripe: '#9DC33B',
    accent: '#654389',
    accentOnDark: '#B9A3DB'
  },

  vibe: "A small, friendly college in a leafy suburb just south of Boston. It's known for nursing and for PAL, a well-known program for students with learning differences, and it's an easy place to get to know people.",
  flags: ['Small campus', 'PAL program', 'Big on nursing', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Basically none' }
  ],

  sections: {
    "living": {"preview": "Small, mostly residential, with a commuter group; food is average.", "housing": ["Most first-years live on campus.", "Housing is mainly traditional dorms and suites.", "Some students commute, and campus can be quiet on weekends."], "food": ["There is one main dining hall, and students call the food average.", "Residents usually need a meal plan.", "Boston is close for more food by train or car."]},
    vibe: {
      preview: 'Small, supportive, practical, quiet on weekends',
      meters: {
        party:    { value: 3, note: 'Small parties, rare big ones' },
        campus:   { value: 6, note: 'Wooded and hilly, edge of the Blue Hills' },
        spirit:   { value: 4, note: 'Football draws a crowd' },
        pressure: { value: 3, note: 'Supportive, nursing is harder' },
        career:   { value: 6, note: 'Nursing and practical majors' },
        greek:    { value: 0, note: 'Not part of the scene' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Easy to make friends. Weekends are the weak spot.',
      paragraphs: [
        "It's small, so you recognize faces fast, and students say people are welcoming. Friend groups come from your dorm, your team and the dining hall.",
        "Weekends are the main complaint. A lot of students are from Massachusetts and nearby, and many head home. Students who stay say that's when you really get to know people. Big events like Spring Weekend are the highlight.",
        "Some students say the campus culture can feel a little like high school, mostly because it's so small. Boston is close, so people who want more go into the city."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. PAL has its own process.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. Decent grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'PAL is a separate application.', text: 'If you want PAL, you apply to it too and send diagnostic testing about your learning profile. It also costs extra on top of tuition.' },
        { title: 'Nursing can be tougher.', text: 'Some programs, like nursing, may ask for more than the school overall. Check what your major needs.' }
      ]
    },

    who: {
      preview: 'Local kids, future nurses, athletes and PAL students',
      paragraphs: [
        "Most students are from Massachusetts and the rest of New England. Nursing, criminal justice, business and communication are popular. There's a good number of athletes, and football has a following.",
        "It fits people who want a smaller school with a lot of support, and people who learn differently and want a program built for that. It's less of a fit if you want a big, busy campus scene."
      ]
    },

    knownFor: {
      preview: 'PAL, nursing, criminal justice, and being close to Boston',
      points: [
        { title: 'PAL', text: 'The Program for Advancement of Learning is one of the oldest and best-known college programs for students with learning differences like dyslexia and ADHD. Students meet with PAL faculty in small classes on top of their regular courses.' },
        { title: 'Nursing', text: "Nursing is one of the biggest programs, and it's growing. In 2026 Curry agreed to take over the nursing programs of nearby Labouré College." },
        { title: 'Criminal justice', text: 'One of the most popular majors. A lot of students are aiming for policing, law or public service.' },
        { title: 'Blue Hills and Boston', text: 'The Blue Hills Reservation has hiking right nearby, and downtown Boston is only about 7 miles away.' }
      ]
    },

    stereotypes: {
      preview: '"Easy to get in" is true. "Only a PAL school" is half true.',
      items: [
        { said: 'Anyone can get in.', verdict: 'true', text: "Admission is easy. That doesn't make classes easy. Professors know who shows up." },
        { said: "It's only for students with learning disabilities.", verdict: 'half', text: 'PAL is a big part of its reputation, and it draws a lot of students. But plenty of students are not in PAL and just take regular classes.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: 'A lot of people do, and weekends are quiet. Students who stay say it is better than its reputation.' },
        { said: 'It feels like high school.', verdict: 'half', text: 'Small size means everyone knows everyone and groups form fast. Some love that. Others want more room.' }
      ]
    },

    mythsAndKnow: {
      preview: 'PAL costs extra. Stay on weekends if you want friends.',
      myths: [
        { title: 'PAL is just tutoring.', text: "It's a structured program with its own classes and faculty, focused on how you learn. It's more than drop-in help." },
        { title: "It's in Boston.", text: "It's in Milton, a quiet suburb. Boston is close, but you are not living in the city." }
      ],
      know: [
        { title: 'Budget for PAL.', text: 'PAL has its own fee on top of tuition, and it is not small. Ask how aid applies.' },
        { title: 'Stay on weekends.', text: "Students who go home every Friday say it's harder to make friends. The ones who stay find their people." },
        { title: 'A car helps.', text: 'Getting into Boston and around the area is easier if you drive. Without one, plan your trips.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want support and a small campus. Rough if you want a big scene.',
      love: ['You learn differently and want real support', 'You want to be a nurse', 'You want a small school close to Boston', 'You play a sport and want to actually play'],
      struggle: ['You want a big party school', 'You want a selective, high-pressure academic scene', 'You plan to go home every weekend and still want a big social life']
    },

    people: {
      preview: 'Support and small classes win. Weekends and food are the complaints.',
      plus: ['Small classes and professors who help', 'PAL is a real support system', 'Close to Boston and the Blue Hills'],
      minus: ['Weekends can feel empty', 'Food and dorms get mixed reviews', 'Expensive, especially with PAL']
    }
  }
});
