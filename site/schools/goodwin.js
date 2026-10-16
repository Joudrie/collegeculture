registerSchool({
  id: 'goodwin',
  name: 'Goodwin',
  nameSub: 'Goodwin University',
  state: 'Connecticut',
  location: 'East Hartford, CT · On the Connecticut River',
  asOf: '2026',

  colors: {
    name: 'Blue and green',
    swatches: ['#005CB9', '#7FBC42'],
    band: '#005CB9',
    onBand: '#FFFFFF',
    onBandMuted: '#CCE0F3',
    stripe: '#7FBC42',
    accent: '#005CB9',
    accentOnDark: '#7FBC42'
  },

  vibe: "A career-first school for people who want to get into a job fast. It is mostly commuters and adults, with almost no traditional college life.",
  flags: ['Career-focused', 'Commuter', 'No varsity sports', 'Health programs'],
  facts: [
    { label: 'Setting', value: 'Urban' },
    { label: 'Students', value: '~3,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '2 to 4 years' },
    { label: 'Sports', value: 'Intramural' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Focused, practical, and built for jobs',
      meters: {
        party:    { value: 1, note: 'Not a thing' },
        campus:   { value: 3, note: 'Small riverfront campus' },
        spirit:   { value: 1, note: 'No varsity teams' },
        pressure: { value: 5, note: 'Health programs are demanding' },
        career:   { value: 9, note: 'The whole point of the school' },
        greek:    { value: 1, note: 'No Greek life' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Class, work, home. Friends come from your program.',
      paragraphs: [
        "Most students commute and many are adults with jobs. People tend to connect with their program cohort rather than through campus events.",
        "Goodwin ended its residential housing program after spring 2024, so plan on living off campus. There are some clubs and intramural sports, but this is not a social-first school."
      ]
    },

    gettingIn: {
      preview: 'Most get in. Health programs are pickier.',
      points: [
        { title: 'General admission is easy.', text: 'Most applicants are admitted to the school.' },
        { title: 'Health programs have extra steps.', text: 'Nursing and similar programs have their own requirements and can fill up.' },
        { title: 'Start dates are flexible.', text: 'There are multiple start terms.' }
      ]
    },

    who: {
      preview: 'Working adults, career-changers, and local students',
      paragraphs: [
        "Many students are from the Hartford area. A lot are adults going back to school. Others are younger students who want a direct path to a career.",
        "Nursing, health professions, business, manufacturing and education are big."
      ]
    },

    knownFor: {
      preview: 'Health, manufacturing and fast routes to jobs',
      points: [
        { title: 'Health programs', text: 'Nursing, dental hygiene, respiratory care, occupational therapy assistant and more.' },
        { title: 'Advanced manufacturing', text: 'Hands-on technical programs tied to local employers.' },
        { title: 'Magnet schools on campus', text: 'Three public magnet schools share the campus.' },
        { title: 'Used to be Goodwin College', text: 'It became a university in 2020.' }
      ]
    },

    stereotypes: {
      preview: '"No campus life" is true. "Not a real university" is a myth.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: 'Yes. Plan on living off campus and driving or taking transit.' },
        { said: "There's no college life.", verdict: 'true', text: 'No varsity teams or Greek life, and very few big events.' },
        { said: "It's not a real university.", verdict: 'myth', text: 'It is an accredited nonprofit university with bachelor, associate and graduate programs.' },
        { said: "It's just for older people.", verdict: 'half', text: 'Many are adults, but younger students go here too.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Great for a job path. Not for a classic college experience.',
      myths: [
        { title: 'It is a trade school.', text: 'It offers bachelor and graduate degrees as well as certificates.' },
        { title: 'It is a high school.', text: 'Magnet high schools share the campus but are separate.' }
      ],
      know: [
        { title: 'No dorms now.', text: 'Residential life ended after spring 2024.' },
        { title: 'Know your program.', text: 'Health programs are competitive and demanding.' },
        { title: 'Check job outcomes.', text: 'Ask about placement and clinical partners.' },
        { title: 'Check net price.', text: 'Aid varies. Use the calculator on the website.' }
      ]
    },

    fit: {
      preview: 'Great for a fast, direct career path. Wrong for a classic campus life.',
      love: ['You want a clear path to a health or technical job', 'You are working and need flexibility', 'You live nearby and want to save money'],
      struggle: ['You want dorms and a social scene', 'You want sports and spirit', 'You want a wide liberal arts menu']
    },

    people: {
      preview: 'Practical and focused. No campus life.',
      plus: ['Clear career paths', 'Flexible schedules', 'Hands-on programs'],
      minus: ['No campus social life', 'No housing', 'Narrow range of majors']
    }
  }
});
