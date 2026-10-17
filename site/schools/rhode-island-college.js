registerSchool({
  id: 'rhode-island-college',
  name: 'RIC',
  nameSub: 'Rhode Island College',
  state: 'Rhode Island',
  location: 'Providence, RI · Mount Pleasant',
  asOf: '2026',

  colors: {
    name: 'Anchormen · Burgundy and gold',
    swatches: ['#990000', '#F1B434', '#FFFFFF'],
    band: '#990000',
    onBand: '#FFFFFF',
    onBandMuted: '#F3D9A0',
    stripe: '#F1B434',
    accent: '#990000',
    accentOnDark: '#F1B434'
  },

  vibe: "A small, affordable public college on the edge of Providence where most students are from Rhode Island and commute. People come to become teachers, nurses and social workers, and the vibe is practical and friendly.",
  flags: ['Mostly commuters', 'Very affordable', 'Teaching and nursing', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'City edge' },
    { label: 'Undergrads', value: '~5,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Providence buses; T. F. Green is the airport", "points": ["RIPTA buses serve the campus area from downtown Providence.", "T. F. Green Airport is the closest major airport.", "Plenty of students commute by car. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly a commuter school; limited housing on campus.", "housing": ["Most students commute from home, so the campus can feel quiet at night and on weekends.", "There is some on-campus housing, but fewer students live there than at a typical residential college.", "If you want a full dorm experience, ask how many students actually live there."], "food": ["Dining is more limited than at a residential school.", "Commuters mostly eat on campus between classes or bring food.", "Providence is close, with lots of restaurants if you have a ride."]},
    vibe: {
      preview: 'Commuter-heavy, low cost, practical majors, calm',
      meters: {
        party:    { value: 2, note: 'Most people go home at night' },
        campus:   { value: 5, note: 'Green campus, in a city neighborhood' },
        spirit:   { value: 3, note: 'Small D3 crowds' },
        pressure: { value: 4, note: 'Nursing is tough, most else is fine' },
        career:   { value: 7, note: 'Majors that lead straight to jobs' },
        greek:    { value: 2, note: 'A few chapters, growing' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Small dorm community. Most students commute, so plan to join things.',
      paragraphs: [
        "Only about 1,200 students live in the dorms. Everyone else drives or takes the bus in, so the campus feels like a commuter school, especially at night and on weekends.",
        "If you live on campus, the dorm crowd is small enough that you get to know people. Clubs, teams, theater and music are the main ways people find their group.",
        "Downtown Providence is a short drive or bus ride away, with food, shows and other college students from Brown, PC and RISD around."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Rhode Islanders can get the last two years free.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Decent grades and a complete application are what count.' },
        { title: 'The Hope Scholarship is a big deal.', text: 'Rhode Island residents who start full time and stay on track can get free tuition for junior and senior year. It has rules, like a 2.5 GPA, and it is still a state pilot, so check the latest.' },
        { title: 'Tests may be optional.', text: 'Check the current SAT and ACT policy on the admissions site before you apply.' },
        { title: 'Some programs are competitive.', text: 'Nursing and teacher education have their own requirements after you get in.' }
      ]
    },

    who: {
      preview: 'Rhode Islanders, first-gen students, future teachers and nurses',
      paragraphs: [
        "Most students are from Rhode Island, with some from nearby Massachusetts and Connecticut. A lot are the first in their family at college, and many work jobs while in school.",
        "The big majors are education, nursing, social work, psychology, business and justice studies. People are down to earth and focused on finishing without debt."
      ]
    },

    knownFor: {
      preview: 'Training teachers, nurses and social workers, and being cheap',
      points: [
        { title: 'Teachers', text: "It started in 1854 as the state's school for training teachers. A huge share of Rhode Island teachers went here." },
        { title: 'Nursing and social work', text: 'Two of its biggest and best-known programs. Many grads work in Rhode Island hospitals and agencies.' },
        { title: 'Low cost', text: "One of the cheapest four-year options in New England for in-state students, especially with the Hope Scholarship." },
        { title: 'Arts on campus', text: 'Music, theater and dance are active, with regular shows open to the public.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is true. "Just for teachers" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: "Most students don't live on campus. If you want a buzzing dorm life, you'll have to work to find it." },
        { said: "It's only for teachers.", verdict: 'half', text: "Education is its history and still huge, but nursing, social work, business and the arts are big too." },
        { said: "It's where you go if you didn't get into URI.", verdict: 'myth', text: "Lots of students pick it on purpose because it is cheaper, closer to home and strong in what they want to study." },
        { said: "There's nothing to do on campus.", verdict: 'half', text: "Weekends are quiet. During the week there are clubs, games and shows if you show up for them." }
      ]
    },

    mythsAndKnow: {
      preview: 'Not the same as URI. A car or bus pass helps.',
      myths: [
        { title: 'RIC and URI are the same school.', text: 'They are separate. URI is the big flagship in Kingston. RIC is smaller, cheaper and in Providence.' },
        { title: 'Cheap means low quality.', text: 'The education, nursing and social work programs are respected around the state. Employers in Rhode Island know the name.' }
      ],
      know: [
        { title: 'Plan your transportation.', text: "Campus is on the edge of the city. Buses run there, but a car makes life easier." },
        { title: 'Get involved to make friends.', text: 'With so many commuters, the people who like it most join clubs, teams or work on campus.' },
        { title: 'Read the Hope Scholarship rules.', text: 'You need to start full time, keep your GPA up and stay on pace for four years. Missing a step can cost you the free years.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a cheap, practical degree near home. Rough if you want dorm life.',
      love: ['You live in Rhode Island and want to avoid debt', 'You want to teach, nurse or do social work', 'You want to live at home or close to it', 'You like small classes'],
      struggle: ['You want a lively campus at night and on weekends', 'You want big-time sports', 'You want to get far away from home']
    },

    people: {
      preview: 'Cheap and practical with good professors. Commuter feel is the complaint.',
      plus: ['Very affordable, especially with Hope', 'Professors know your name', 'Strong local reputation for teaching and nursing'],
      minus: ['Campus feels empty at night and on weekends', 'Hard to build a social life as a commuter', 'Parking and offices can be a hassle']
    }
  }
});
