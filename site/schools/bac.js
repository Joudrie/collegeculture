registerSchool({
  id: 'bac',
  name: 'BAC',
  nameSub: 'Boston Architectural College',
  state: 'Massachusetts',
  location: 'Boston, MA · Back Bay',
  asOf: '2026',

  colors: {
    name: 'Design school · Charcoal and yellow',
    swatches: ['#343434', '#FFC632'],
    band: '#343434',
    onBand: '#FFFFFF',
    onBandMuted: '#C4C4C4',
    stripe: '#FFC632',
    accent: '#343434',
    accentOnDark: '#FFC632'
  },

  vibe: "A small design school where you study architecture or design and work in the field at the same time. There are no dorms and no traditional campus. It's for people who want to be working designers.",
  flags: ['Architecture and design only', 'Work while you study', 'No dorms', 'Open admission'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: 'Small' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 to 5 years' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Design-obsessed, work-focused, no classic campus',
      meters: {
        party:    { value: 1, note: 'Studio nights, not parties' },
        campus:   { value: 1, note: 'City buildings, not a campus' },
        spirit:   { value: 1, note: 'No sports teams' },
        pressure: { value: 7, note: 'Studio deadlines plus a job' },
        career:   { value: 9, note: 'You work in the field while you study' },
        greek:    { value: 0, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Studio friends and coworkers, not dorm life',
      paragraphs: [
        "There's no residence life, so your social circle forms in studios and classes. Late nights in the studio build real friendships, but it's not a college-party kind of social life.",
        "Many students are working in design offices while they take classes. That means your friends have jobs, schedules and lives outside school. It can feel more adult than most college experiences.",
        'Back Bay is a great place to hang out between classes. Museums, parks and the T are all close.'
      ]
    },

    gettingIn: {
      preview: 'Open admission for on-campus programs. Your portfolio helps.',
      points: [
        { title: "It's open admission.", text: 'The school says it has an open admissions policy for its on-campus degree programs. You do not need a perfect record.' },
        { title: 'Rolling applications.', text: 'You can apply any time of year, and decisions come as applications arrive.' },
        { title: 'Check what to submit.', text: 'Some programs ask for a portfolio or other materials. Look at the current requirements for your program.' }
      ]
    },

    who: {
      preview: 'Hands-on designers who want to start working now',
      paragraphs: [
        'People who already know they want architecture, interior design or landscape architecture. Many are career changers or older students, plus some who came straight from high school.',
        "It fits independent people who can manage school and work together. It's not for someone who wants a traditional four-year campus experience."
      ]
    },

    knownFor: {
      preview: 'Work-study model, architecture focus, and a long history',
      points: [
        { title: 'Work while you learn', text: 'The school is built around students working in design practice while they study. You get experience, not just classes.' },
        { title: 'Architecture first', text: 'It started as a club for architects in 1889. Architecture is still the core.' },
        { title: 'Back Bay home', text: 'The school sits in one of the most beautiful parts of Boston.' }
      ]
    },

    stereotypes: {
      preview: '"All-nighters" is true. "Not a real college" is a myth.',
      items: [
        { said: "Everyone lives in the studio.", verdict: 'true', text: 'Design school means long hours and deadline crunches. Studio becomes a second home.' },
        { said: "It's not a real college.", verdict: 'myth', text: "It's accredited and gives real degrees, including an accredited architecture program." },
        { said: "There's no college experience.", verdict: 'half', text: "No dorms, no sports and no quad. If you want those, this isn't it." },
        { said: "It's easy to get in, so it must be easy.", verdict: 'myth', text: 'Open admission is not the same as easy. Studio work is demanding.' }
      ]
    },

    mythsAndKnow: {
      preview: 'No housing, a work-study model, and Boston costs',
      myths: [
        { title: 'You just study architecture all day.', text: 'You also work in a design office as part of the program.' },
        { title: 'Open admission means low standards.', text: 'Anyone can start, but the workload is real, and not everyone finishes.' }
      ],
      know: [
        { title: 'There is no housing.', text: 'You will need to find your own place in or near Boston, which is expensive.' },
        { title: "You don't need a car.", text: 'The T and walking work.' },
        { title: 'Plan for your timeline.', text: 'Working while studying can stretch how long it takes. Ask the school about your path.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want to practice design now. Rough if you want a campus.',
      love: ['You know you want architecture or design', 'You want real work experience while studying', 'You are independent and self-motivated'],
      struggle: ['You want dorms and campus life', 'You are unsure about your major', 'You want sports and big events']
    },

    people: {
      preview: 'Real experience wins. The grind and lack of campus life are complaints.',
      plus: ['You gain professional experience as a student', 'Small studios with attention from faculty', 'Great Back Bay location'],
      minus: ['No housing or classic campus', 'Studio and work load is heavy', 'Not much social life outside school']
    }
  }
});
