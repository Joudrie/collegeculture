registerSchool({
  id: 'franklin-cummings',
  name: 'Franklin Cummings',
  nameSub: 'Tech',
  title: 'Franklin Cummings Tech',
  state: 'Massachusetts',
  location: 'Boston, MA · Roxbury / Nubian Square',
  asOf: '2026',

  colors: {
    name: 'Tech school · Blue and yellow',
    swatches: ['#2350A4', '#EEB00E'],
    band: '#2350A4',
    onBand: '#FFFFFF',
    onBandMuted: '#D5E2F5',
    stripe: '#EEB00E',
    accent: '#2350A4',
    accentOnDark: '#A6CDEF'
  },

  vibe: "A small, hands-on tech school in Boston, formerly called Benjamin Franklin Institute of Technology. You learn trades and technology by doing them, and most people are focused on getting a job in the field.",
  flags: ['Hands-on', 'Small and commuter-heavy', 'Trades and tech', 'Mostly open admission'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: 'Small' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '2 to 4 years' },
    { label: 'Sports', value: 'Little' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Small tech school in Boston; mostly commuters, little campus housing.", "housing": ["Franklin Cummings is mostly a commuter school.", "Campus housing is limited, and many students live at home or rent in the area.", "Boston rent is high, so plan for the cost."], "food": ["There is no big dining hall like at a traditional campus.", "Most students bring food or eat nearby.", "The South End has lots of places to eat, from cheap to pricey."]},
    vibe: {
      preview: 'Practical, small, job-focused, light on campus life',
      meters: {
        party:    { value: 1, note: 'Not what this school is about' },
        campus:   { value: 3, note: 'A newer city campus in Roxbury' },
        spirit:   { value: 1, note: 'Sports are a small part of school life' },
        pressure: { value: 5, note: 'Labs, projects and real skills tests' },
        career:   { value: 9, note: 'Programs are built around jobs' },
        greek:    { value: 0, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Lab partners and classmates, then life off campus',
      paragraphs: [
        "It's a small school where many students commute and some work part time. Friend groups form in labs and shops, where you work with the same people every day.",
        "There isn't a big party or events scene. People come to learn a skill, then go home or to work.",
        "The school is in Roxbury, close to the Orange Line and buses. Boston is right there if you want to explore."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Programs vary in what they need.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted. Some programs may have extra requirements.' },
        { title: 'Check program details.', text: 'Different programs have different prerequisites, so look at the one you want.' },
        { title: 'Ask about aid.', text: 'Many students get financial aid, and costs are lower than a typical private college. Confirm the current numbers.' }
      ]
    },

    who: {
      preview: 'Hands-on learners, career starters and career changers',
      paragraphs: [
        'People who want to learn a skilled trade or technology field, like engineering technology, electrical, automotive or computer fields. Many come from the Boston area, and there are plenty of older students and career changers.',
        "It fits practical people who learn by doing. If you want a broad liberal arts experience, look elsewhere."
      ]
    },

    knownFor: {
      preview: 'Hands-on programs, a long history, and a new Roxbury campus',
      points: [
        { title: 'Hands-on learning', text: 'You spend a lot of class time in labs and shops, using the same tools you will use on the job.' },
        { title: 'A long history', text: 'The school was founded in the early 1900s with a goal of training people for technical careers.' },
        { title: 'New campus', text: 'In 2026 it opened a new building in Nubian Square in Roxbury.' }
      ]
    },

    stereotypes: {
      preview: '"Just a trade school" is half true. "No campus life" is true.',
      items: [
        { said: "It's just a trade school.", verdict: 'half', text: 'Training for skilled jobs is the point. It also offers bachelor degrees in some technical fields.' },
        { said: "There's no campus life.", verdict: 'true', text: 'It is small and mostly commuter. Expect a school, not a college town.' },
        { said: "It's only for people who didn't do well in high school.", verdict: 'myth', text: 'Plenty of students choose it because they want a direct path to a job without a huge price tag.' },
        { said: "You'll be broke after.", verdict: 'myth', text: 'Technical careers can pay well. Check outcomes for your program before deciding.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It has bachelor degrees, a name change, and a commuter feel',
      myths: [
        { title: "It's only a two-year school.", text: 'There are associate programs, and also bachelor degrees in some fields.' },
        { title: "It's still called Franklin Institute.", text: 'It was renamed Franklin Cummings Tech in 2023. The legal name is still the long one.' }
      ],
      know: [
        { title: 'Check housing.', text: 'Many students commute. Ask the school what housing options exist before you count on it.' },
        { title: "You don't need a car.", text: 'It is close to the T and bus lines.' },
        { title: 'Pick your program carefully.', text: 'Programs are specific, so know what you want to do before you enroll.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a skill and a job. Rough if you want college life.',
      love: ['You like hands-on work', 'You want a clear path to a career', 'You want a smaller price tag'],
      struggle: ['You want a classic campus', 'You want to explore many subjects', 'You want sports and big events']
    },

    people: {
      preview: 'Practical skills win. Limited campus life is the complaint.',
      plus: ['Hands-on learning', 'Clear paths to jobs', 'Lower cost than many private colleges'],
      minus: ['Small and quiet', 'Fewer majors and activities', 'Not much campus social life']
    }
  }
});
