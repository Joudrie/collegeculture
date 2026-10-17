registerSchool({
  id: 'mitchell',
  name: 'Mitchell',
  nameSub: 'Mitchell College',
  state: 'Connecticut',
  location: 'New London, CT · On the water',
  asOf: '2026',

  colors: {
    name: 'Mariners · Purple and red',
    swatches: ['#38164B', '#FF0033'],
    band: '#38164B',
    onBand: '#FFFFFF',
    onBandMuted: '#CDBBD8',
    stripe: '#FF0033',
    accent: '#CC0029',
    accentOnDark: '#FF5C7A'
  },

  vibe: "A very small waterfront college where professors know your name. Known for supporting students who learn differently, with a close, friendly campus.",
  flags: ['Very small', 'Waterfront', 'Learning support', 'Division III'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~600' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Small campus, a mix of residents and commuters, basic food", "housing": ["Many students live on campus, and some commute.", "Housing is a small mix of dorms and suites.", "The campus is small and close to the water."], "food": ["There is one main dining hall.", "Students say it is basic.", "New London has local restaurants within a short ride."]},
    vibe: {
      preview: 'Small, friendly, and supportive',
      meters: {
        party:    { value: 3, note: 'Low-key' },
        campus:   { value: 7, note: 'Waterfront campus' },
        spirit:   { value: 4, note: 'Small crowds, loyal ones' },
        pressure: { value: 3, note: 'Supportive' },
        career:   { value: 6, note: 'Practical majors' },
        greek:    { value: 1, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Everyone knows everyone. Teams and clubs run things.',
      paragraphs: [
        "It is tiny, so you know people by name quickly. Teams, clubs and residence halls are where friends come from.",
        "Weekends are calm. New London has a small downtown and the shoreline is close, and a car makes it easier to get out."
      ]
    },

    gettingIn: {
      preview: 'Most get in. Rolling admissions.',
      points: [
        { title: 'Easy to get into.', text: 'Most applicants are admitted, and decisions come back quickly.' },
        { title: 'Tests are optional.', text: 'Scores are not required.' },
        { title: 'Rolling deadlines.', text: 'You can apply for fall 2027 now.' },
        { title: 'Free to apply.', text: 'No application fee.' }
      ]
    },

    who: {
      preview: 'Local students, athletes, and students who want extra support',
      paragraphs: [
        "Mostly from Connecticut and the Northeast. Many came for the small size and the support services.",
        "Business, psychology, education, criminal justice and the new nursing program are popular."
      ]
    },

    knownFor: {
      preview: 'Learning support and a small waterfront campus',
      points: [
        { title: 'Support for different learners', text: 'Programs like Thames at Mitchell help students who learn differently.' },
        { title: 'Waterfront campus', text: 'The campus sits on the water in New London.' },
        { title: 'Nursing', text: 'A new BS in Nursing started its first cohort.' },
        { title: 'Division III', text: 'Eight varsity sports as the Mariners.' }
      ]
    },

    stereotypes: {
      preview: '"Tiny" is true. "Easy to get in" is true.',
      items: [
        { said: "It's tiny.", verdict: 'true', text: 'About 600 undergrads. It is intimate, which is good or bad depending on you.' },
        { said: 'Anyone can get in.', verdict: 'true', text: 'Most applicants are admitted. Success depends on effort.' },
        { said: "It's just for kids who struggle.", verdict: 'myth', text: 'Support services are a strength, but it is a regular college with regular majors.' },
        { said: 'Nothing to do.', verdict: 'half', text: 'It is quiet. Teams, clubs and the shoreline fill the gaps.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Small and supportive. Plan for quiet.',
      myths: [
        { title: 'It merged or closed.', text: 'It is open and accepting applications for 2027.' },
        { title: 'It is just a sports school.', text: 'Athletics matter, but the majors are broader.' }
      ],
      know: [
        { title: 'Ask about support costs.', text: 'Some programs cost extra.' },
        { title: 'A car helps.', text: 'The area is spread out.' },
        { title: 'Visit.', text: 'Open houses are listed on the website.' },
        { title: 'Check net price.', text: 'Aid varies. Use the calculator on the website.' }
      ]
    },

    fit: {
      preview: 'Great if you want small and supported. Rough if you want a big scene.',
      love: ['You want professors who know you', 'You like small classes', 'You want support for how you learn', 'You play a sport and want real playing time'],
      struggle: ['You want a big school', 'You want a big party scene', 'You want lots of majors']
    },

    people: {
      preview: 'Friendly and supportive. Small and quiet.',
      plus: ['Friendly community', 'Small classes', 'Nice location'],
      minus: ['Quiet weekends', 'Few majors', 'Small social pool']
    }
  }
});
