registerSchool({
  id: 'cambridge-college',
  name: 'Cambridge College',
  nameSub: 'Boston, mostly adult learners',
  title: 'Cambridge College',
  state: 'Massachusetts',
  location: 'Boston, MA · Charlestown',
  asOf: '2026',

  colors: {
    name: 'Blue and teal',
    swatches: ['#002F65', '#00697A'],
    band: '#002F65',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C6DA',
    stripe: '#00697A',
    accent: '#00697A',
    accentOnDark: '#4DB8C8'
  },

  vibe: "Not a classic college campus. Most students are adults going back to school while working, so classes are built around real schedules and there is no dorm life or football Saturday.",
  flags: ['Mostly adult learners', 'Commuter', 'No dorm scene', 'Online options'],
  facts: [
    { label: 'Setting', value: 'Urban' },
    { label: 'Undergrads', value: '~1,200' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: 'Varies' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Boston-area school; most students use the T", "points": ["Check which location you will attend, since Cambridge College runs more than one site.", "Logan Airport is the main airport for the Boston area.", "Most students commute, so check parking and transit near your location."]},
    "living": {"preview": "No dorms; school is for adult learners who live on their own", "housing": ["Cambridge College has no dorms.", "Students are mostly adult learners who already have housing.", "You'd find your own place or live at home."], "food": ["There is no campus dining hall or meal plan.", "Students eat on their own around work and class.", "The Boston area has lots of food nearby."]},
    vibe: {
      preview: 'Adults, evenings, and getting the degree done',
      meters: {
        party:    { value: 1, note: 'Not what this place is for' },
        campus:   { value: 2, note: 'One city campus, mostly commuters' },
        spirit:   { value: 1, note: 'No sports teams to rally around' },
        pressure: { value: 4, note: 'Real work, but built around jobs' },
        career:   { value: 7, note: 'Programs aimed at working adults' },
        greek:    { value: 1, note: 'No Greek life' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'You come, you learn, you go to work or home. Friends happen in class.',
      paragraphs: [
        "Most students have jobs, kids or both, so there is not much hanging-out culture. Classes often run evenings, weekends or online, and people leave when they are done.",
        "If you are 18 and want dorms, parties and a student center full of people, this will not feel like college to you. The people you do meet tend to be focused and a lot more serious about why they are there."
      ]
    },

    gettingIn: {
      preview: 'Open-door style admissions. Check what each program needs.',
      points: [
        { title: 'Most applicants get in.', text: 'It is not a selective school. A diploma or equivalent gets you started.' },
        { title: 'Programs differ.', text: 'Education, counseling and some health-related programs have extra requirements, so read the page for your major.' },
        { title: 'Rolling start dates.', text: 'There are multiple start terms, so you are not stuck with one fall deadline.' },
        { title: 'Ask about transfer credit.', text: 'Many students come in with credits from somewhere else. It can shorten the time a lot.' }
      ]
    },

    who: {
      preview: 'Working adults, career changers, and parents',
      paragraphs: [
        "The typical student is an adult finishing a degree or switching careers. Many are local to the Boston area, and the school has a long history of serving people who were told college was not for them.",
        "Traditional 18 year olds are the minority. If you are one, you will be in class with people who have been working for years."
      ]
    },

    knownFor: {
      preview: 'Flexible schedules and a lot of grad programs',
      points: [
        { title: 'Adult learner focus', text: 'The whole school is set up for people who work. Schedules and support reflect that.' },
        { title: 'Graduate programs', text: 'Most of its students are in graduate programs, with education and counseling being big ones.' },
        { title: 'Bay Path connection', text: 'It was acquired by Bay Path University in 2024 and still goes by its own name.' },
        { title: 'Online option', text: 'Cambridge College Global offers fully online programs.' }
      ]
    },

    stereotypes: {
      preview: '"Not a real college experience" is true. "Not a real degree" is not.',
      items: [
        { said: "It's not a real college experience.", verdict: 'true', text: 'No dorm life, no teams, no big campus events. If that matters to you, look elsewhere.' },
        { said: "It's only for older students.", verdict: 'true', text: 'Mostly, yes. Younger students are welcome but are the minority.' },
        { said: "The degree isn't legit.", verdict: 'myth', text: 'It is an accredited school. As with any school, what matters is the program and what you do with it.' },
        { said: 'You can just show up and get through.', verdict: 'half', text: "Admission is easy, but the coursework is real and most students are juggling jobs, so they still have to put the time in." }
      ]
    },

    mythsAndKnow: {
      preview: 'It is a different kind of college. Know that before you apply.',
      myths: [
        { title: 'It is part of Cambridge University or Harvard.', text: 'No. It has no link to either one, and it is based in Boston, not Cambridge.' },
        { title: 'It is just an online school.', text: 'It has a physical campus in Boston, though online options exist too.' }
      ],
      know: [
        { title: 'It is mostly grad students.', text: 'Undergrads are a smaller group than the graduate side.' },
        { title: 'Housing is not a thing.', text: 'Plan on commuting or finding your own apartment.' },
        { title: 'Check net price.', text: 'What families pay depends on aid. Use the net price calculator on the website.' },
        { title: 'Ask about your program.', text: 'Details like format and schedule vary by major.' }
      ]
    },

    fit: {
      preview: 'Great for working adults. Wrong for a classic campus life.',
      love: ['You are working and need flexible classes', 'You are finishing a degree you started earlier', 'You want to change careers', 'You want a classroom of people with real-world experience'],
      struggle: ['You want dorms and a social scene', 'You want sports and school spirit', 'You are 18 and want the classic experience']
    },

    people: {
      preview: 'Flexible and focused. Not much campus community.',
      plus: ['Schedules built around adult life', 'Classmates with real experience', 'Open admission, with support'],
      minus: ['No traditional campus life', 'Hard to make friends outside class', 'Mostly graduate focus']
    }
  }
});
