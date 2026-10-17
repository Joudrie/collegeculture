registerSchool({
  id: 'university-of-new-haven',
  name: 'New Haven',
  nameSub: 'University of New Haven',
  title: 'University of New Haven',
  state: 'Connecticut',
  location: 'West Haven, CT · Near the shore',
  asOf: '2026',

  colors: {
    name: 'Chargers · Blue and gold',
    swatches: ['#002D74', '#FFC629'],
    band: '#002D74',
    onBand: '#FFFFFF',
    onBandMuted: '#CFE0F7',
    stripe: '#FFC629',
    accent: '#002D74',
    accentOnDark: '#FFC629'
  },

  vibe: "A hands-on, career-focused school in West Haven, best known for forensic science, criminal justice and engineering. It's practical and a little nerdy, and it's moving up to Division I sports.",
  flags: ['Forensic science', 'Hands-on learning', 'Moving to Division I', 'Commuter mix'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~4,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division I' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "West Haven; trains and buses nearby", "points": ["West Haven has a Metro-North and Shore Line East station, plus local buses.", "Tweed New Haven is the closest airport, and the New York airports are the bigger options.", "Check the school's rules on first-year cars."]},
    "living": {"preview": "Mix of residents and commuters; food is decent, with a nearby city.", "housing": ["Many first-years live on campus.", "Housing is a mix of dorms, suites and apartment-style options.", "Some students commute from nearby towns."], "food": ["There is a main dining hall, and students call it decent.", "Residents usually need a meal plan.", "West Haven and New Haven have plenty of places to eat."]},
    vibe: {
      preview: 'Hands-on, career-focused, practical, friendly',
      meters: {
        party:    { value: 5, note: 'Dorm and off-campus parties' },
        campus:   { value: 5, note: 'Compact, with some newer buildings' },
        spirit:   { value: 5, note: 'Growing now that sports are moving up' },
        pressure: { value: 6, note: 'Heavy in science and engineering' },
        career:   { value: 8, note: 'Internships and labs are the main pitch' },
        greek:    { value: 2, note: 'Around but small' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs, sports and a lot of friend groups by major',
      paragraphs: [
        "There are around 200 clubs, and friend groups often form by major, dorm or team. Students in forensics, engineering and criminal justice tend to hang together because of shared classes.",
        "Social life leans on campus events and nearby apartments. The shore is close, and New Haven has more going on, but you usually need a ride.",
        "As the school moves to Division I, the sports scene is growing, so game days are getting more attention."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Some majors are harder.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted. Solid grades will usually do it.' },
        { title: 'Some majors are tougher.', text: 'Competitive programs can have higher standards, so check your major.' },
        { title: 'Merit aid is common.', text: 'Sticker price is not what most students pay.' }
      ]
    },

    who: {
      preview: 'Future forensic scientists, engineers, cops and chefs',
      paragraphs: [
        "A lot of students pick it for a specific career. Popular areas include forensic science, criminal justice, engineering, business, and the culinary and hospitality programs.",
        "Most students are from the Northeast. It fits people who like hands-on classes and don't need a classic college town."
      ]
    },

    knownFor: {
      preview: 'Forensic science, criminal justice and a rising sports program',
      points: [
        { title: 'Forensic science', text: 'The Henry C. Lee Institute of Forensic Science is a big draw for students interested in crime and science.' },
        { title: 'Hands-on programs', text: 'Many majors include labs, internships and practical work.' },
        { title: 'Moving up in sports', text: 'The school is moving its teams up to Division I.' },
        { title: 'Marching band', text: 'The band is big, and it is a well-known part of campus life.' }
      ]
    },

    stereotypes: {
      preview: '"CSI school" is half true. "Commuter school" is half true.',
      items: [
        { said: "Everyone studies forensics like on TV.", verdict: 'half', text: "Forensic science is the famous major, but real forensic work is lab science, not TV drama. Many students do other majors." },
        { said: "It's a commuter school.", verdict: 'half', text: "There are commuters, but there is also a large residential group." },
        { said: "It's a backup school.", verdict: 'half', text: "It's easier to get into than some nearby schools, but many pick it for the programs." },
        { said: "It's all work, no fun.", verdict: 'myth', text: "STEM majors are busy, but there are clubs, sports and events to balance it." }
      ]
    },

    mythsAndKnow: {
      preview: 'Check your major, plan for a car, expect a growing sports scene.',
      myths: [
        { title: 'It is just forensics.', text: 'It has engineering, business, cybersecurity, culinary and more.' },
        { title: 'It is in New Haven.', text: 'The campus is in West Haven, near the shore, a short trip from downtown New Haven.' }
      ],
      know: [
        { title: 'Pick your major carefully.', text: 'Some programs have different requirements and levels of difficulty.' },
        { title: 'A car helps.', text: 'The campus is suburban, and a car makes errands and weekends easier.' },
        { title: 'Sports are changing.', text: 'The move to Division I may change the athletics scene over time.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a specific career path. Rough if you want a classic college town.',
      love: ['You want hands-on classes', 'You want forensic science or engineering', 'You want a mid-sized school', 'You like a shore location'],
      struggle: ['You want a quiet, picture-perfect campus', 'You want a big Greek scene', 'You want a lot of liberal arts options']
    },

    people: {
      preview: 'Programs and hands-on work win. Campus feel is the complaint.',
      plus: ['Hands-on programs', 'Career-minded classmates', 'Close to the shore and New Haven'],
      minus: ['Campus is plain compared to some schools', 'You may want a car', 'Some students want more to do on weekends']
    }
  }
});
