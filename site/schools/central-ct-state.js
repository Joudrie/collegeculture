registerSchool({
  id: 'central-ct-state',
  name: 'CCSU',
  nameSub: 'Central Connecticut State',
  state: 'Connecticut',
  location: 'New Britain, CT · Near Hartford',
  asOf: '2026',

  colors: {
    name: 'Blue Devils · Blue and white',
    swatches: ['#205999', '#FFFFFF'],
    band: '#205999',
    onBand: '#FFFFFF',
    onBandMuted: '#CFE3F7',
    stripe: '#1B9CF2',
    accent: '#205999',
    accentOnDark: '#7FB2E5'
  },

  vibe: "The biggest of Connecticut's state universities, with Division I sports and a practical, get-your-degree attitude. Lots of people commute or work, so weekdays are busy and weekends are calm.",
  flags: ['Lots of commuters', 'Division I sports', 'Affordable', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~9,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'D1 football' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "A lot of commuters, some on-campus living, food is basic", "housing": ["The school is commuter-heavy, and many students live at home.", "Some students live on campus, mostly first-years.", "Campus can feel quiet on weekends because many students leave."], "food": ["There are a few dining options on campus.", "Students generally call it fine, not special.", "Off-campus food nearby is mostly casual and cheap."]},
    vibe: {
      preview: 'Practical, mostly in-state, D1 sports, calm weekends',
      meters: {
        party:    { value: 3, note: 'Off-campus parties, not a big scene' },
        campus:   { value: 6, note: 'A real campus with a quad' },
        spirit:   { value: 4, note: 'D1 games, crowds come and go' },
        pressure: { value: 4, note: 'Depends on your major' },
        career:   { value: 7, note: 'Business, tech and teaching lead to jobs' },
        greek:    { value: 2, note: 'Some chapters, easy to skip' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: "Clubs, teams and dorm friends. Weekends empty out.",
      paragraphs: [
        "More than half of students live off campus, and almost everyone is from Connecticut. Students and reviewers say the same thing: a lot of people go home on weekends, so the dorms get quiet unless you're an athlete or have a close group.",
        "The fix is getting involved. Clubs, intramurals and games are where people meet. The school is big enough that you keep meeting new people, but not so big that you feel lost.",
        "Commuters get free parking permits and a bus pass that covers CT Transit, and there are weekday commuter events at the Student Center. Hartford is about 20 minutes away for concerts and food."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Some programs ask for more.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Steady grades and a complete application are what matter.' },
        { title: "Tests aren't required.", text: 'You do not need SAT or ACT scores, but they are looked at if you send them. Check the current policy before you apply.' },
        { title: 'Some majors are tighter.', text: 'Programs like nursing and teacher certification have their own requirements once you are in.' },
        { title: 'In-state is cheap.', text: 'In-state tuition and fees are low for New England. Out-of-state costs more.' }
      ]
    },

    who: {
      preview: 'Connecticut kids who want a practical degree without big debt',
      paragraphs: [
        "Almost all students are from Connecticut. Lots of commuters, lots of people working part time, and plenty of transfer students from the community colleges.",
        "Popular paths include business and accounting, engineering technology and engineering, computer science, education, criminology and psychology. People are practical about why they're here: get a good degree, keep costs down, get a job."
      ]
    },

    knownFor: {
      preview: 'Oldest public university in Connecticut, D1 sports, practical majors',
      points: [
        { title: 'A long history', text: "It opened in 1849 as a school for training teachers. It's the oldest public university in the state." },
        { title: 'Division I sports', text: 'The Blue Devils play D1, including FCS football in the Northeast Conference and basketball. That is rare for a regional state school.' },
        { title: 'Business and tech', text: 'The business school and the engineering and technology programs feed a lot of grads into Connecticut companies.' },
        { title: 'Teachers', text: 'Education is still a big deal. Former U.S. Education Secretary Miguel Cardona is an alum.' }
      ]
    },

    stereotypes: {
      preview: '"Suitcase school" is mostly true. "Glorified community college" is a myth.',
      items: [
        { said: 'Everyone goes home on weekends.', verdict: 'true', text: "Reviews say it over and over. If you live on campus, plan to join something so you have people around on Saturdays." },
        { said: "It's basically a community college.", verdict: 'myth', text: "It's a full university with graduate programs, research and D1 sports. The price is low, not the level." },
        { said: "Nobody goes to the games.", verdict: 'half', text: "Football and basketball get decent crowds for big games. Regular season attendance is hit or miss." },
        { said: "New Britain is boring.", verdict: 'half', text: "It's not a college town. But Hartford is close, and the art museum and parks nearby are better than people expect." }
      ]
    },

    mythsAndKnow: {
      preview: 'D1 without a big-school price. A car still helps.',
      myths: [
        { title: 'State school means nobody cares about you.', text: 'Most classes are small to medium, and professors are usually easy to reach.' },
        { title: 'Only locals can get anything out of it.', text: "Most students are local, but out-of-staters who live on campus and join things do fine." }
      ],
      know: [
        { title: 'Get involved early.', text: 'The people who like CCSU most are in clubs, on teams or working on campus. The ones who just go to class feel the empty weekends.' },
        { title: 'A car helps.', text: 'The bus pass is useful, but getting around central Connecticut is much easier if you drive.' },
        { title: 'Lots of transfers.', text: 'Many students start at community college and finish here. Classes feel mixed in age and background.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a cheap D1 school near home. Rough if you want a party campus.',
      love: ['You want a solid degree without big debt', 'You want D1 sports on a state school budget', 'You want business, engineering tech or teaching', 'You want to stay near home'],
      struggle: ['You want packed weekends on campus', 'You want a classic college town', "You don't want to need a car"]
    },

    people: {
      preview: 'Good value and helpful professors. Dead weekends are the complaint.',
      plus: ['Affordable for what you get', 'Professors are approachable', 'Big enough to keep meeting new people'],
      minus: ['Weekends on campus can be dead', 'Feels like a commuter school at times', 'Not much within walking distance']
    }
  }
});
