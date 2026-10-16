registerSchool({
  id: 'rivier',
  name: 'Rivier',
  nameSub: 'University',
  state: 'New Hampshire',
  location: 'Nashua, NH · Suburban, on the Massachusetts line',
  asOf: '2026',

  colors: {
    name: 'Raiders · Blue and silver',
    swatches: ['#004C97', '#B8BBBE'],
    band: '#004C97',
    onBand: '#FFFFFF',
    onBandMuted: '#CBD8E8',
    stripe: '#B8BBBE',
    accent: '#004C97',
    accentOnDark: '#8FB4E3'
  },

  vibe: "A small Catholic university in Nashua with a strong nursing and education focus. Lots of students commute, the campus is quiet, and Boston is about an hour away.",
  flags: ['Small campus', 'Catholic roots', 'Lots of commuters', 'Nursing focus'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Quiet, friendly, career-focused, lots of commuters',
      meters: {
        party:    { value: 2, note: 'Low-key, most go home or off campus' },
        campus:   { value: 6, note: 'A tidy suburban campus' },
        spirit:   { value: 3, note: 'Small crowds, loyal fans' },
        pressure: { value: 5, note: 'Nursing is demanding' },
        career:   { value: 7, note: 'Strong health and education programs' },
        greek:    { value: 0, note: 'No Greek life' },
        religion: { value: 4, note: 'Catholic roots, mostly in the background' }
      }
    },

    social: {
      preview: 'Small and friendly. Weekends are quiet, especially for commuters.',
      paragraphs: [
        "With only a few hundred students living on campus, you get to know people quickly. Clubs, sports and dorm events are the main social options. Students who get involved say it feels like a community.",
        "Many students commute or work, so campus empties out after classes and on weekends. If you live on campus, you will likely head into Nashua or toward Boston for a night out.",
        "The university is Catholic and was founded by the Sisters of the Presentation of Mary. It is part of the school's identity and service focus, though students of any background attend."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Nursing is more competitive.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Nursing may ask for stronger grades.' },
        { title: 'Scholarships are common.', text: 'Most students get aid, so the sticker price is not what most pay.' },
        { title: 'Check the current test policy.', text: 'Policies can change. Look at the admissions page before you apply.' }
      ]
    },

    who: {
      preview: 'Local kids, future nurses and teachers, and commuters',
      paragraphs: [
        "Mostly students from New Hampshire and Massachusetts. A lot are headed for nursing, education and other helping careers. Many are commuters who work or have family nearby.",
        "People are friendly and practical. It is not a flashy school."
      ]
    },

    knownFor: {
      preview: 'Nursing, education, and an affordable small-school feel',
      points: [
        { title: 'Nursing', text: 'A major draw. The university also added an accelerated nursing program recently.' },
        { title: 'Education', text: 'Teacher training is a long-standing strength.' },
        { title: 'Catholic roots', text: 'Founded in 1933 by the Sisters of the Presentation of Mary.' },
        { title: 'Nashua location', text: "A suburban campus in southern New Hampshire that's close to Massachusetts and Boston." }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is half true. "Strictly Catholic" is a myth.',
      items: [
        { said: "It's a commuter school.", verdict: 'half', text: 'A lot of students commute. There are residence halls, and residents get the standard college experience.' },
        { said: "It's a strict Catholic school.", verdict: 'myth', text: 'Catholic identity is part of the mission. Day to day, most students say it is not heavy-handed.' },
        { said: "It's just for nurses.", verdict: 'half', text: 'Nursing is big, but there are programs in business, education, psychology and more.' },
        { said: 'Nothing happens on weekends.', verdict: 'half', text: 'Weekends are quiet. Students head to Nashua or Boston for fun.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Plan for a quiet campus. A car helps.',
      myths: [
        { title: 'Small means no choices.', text: 'There are enough majors for most people, and you can take graduate courses in some programs.' },
        { title: 'It is only for locals.', text: 'Many students are local, but others come from other states.' }
      ],
      know: [
        { title: 'Residence halls are limited.', text: 'Only a few hundred students live on campus. Ask about housing early.' },
        { title: 'A car helps.', text: 'Nashua has some buses, but a car gives you far more freedom.' },
        { title: 'Boston is reachable.', text: 'Boston is about an hour away, good for internships and weekends.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want nursing or education in a small school. Rough if you want a big social scene.',
      love: ['You want nursing or education', 'You want small classes', 'You live nearby and may commute', 'You want a calm campus'],
      struggle: ['You want a big party scene', 'You want a big sports school', 'You want a residential campus with many people']
    },

    people: {
      preview: 'Supportive and focused. Quiet campus life is the main complaint.',
      plus: ['Friendly, supportive faculty', 'Strong nursing and education programs', 'Close to Boston'],
      minus: ['Quiet weekends', 'Small residential population', 'Not much nightlife nearby']
    }
  }
});
