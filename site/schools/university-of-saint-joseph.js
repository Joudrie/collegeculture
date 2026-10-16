registerSchool({
  id: 'university-of-saint-joseph',
  name: 'Saint Joseph',
  nameSub: 'University of Saint Joseph',
  title: 'University of Saint Joseph',
  state: 'Connecticut',
  location: 'West Hartford, CT · Catholic, suburban',
  asOf: '2026',

  colors: {
    name: 'Blue Jays · Navy, blue and gold',
    swatches: ['#002D62', '#0B6DB7', '#FFD200'],
    band: '#002D62',
    onBand: '#FFFFFF',
    onBandMuted: '#B3C4DA',
    stripe: '#0B6DB7',
    accent: '#0B6DB7',
    accentOnDark: '#FFD200'
  },

  vibe: "A small, quiet Catholic school in a nice suburb. It used to be a women's college, still skews that way, and is known for nursing and pharmacy.",
  flags: ['Small', 'Catholic', 'Health programs', 'Mostly women'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,000' },
    { label: 'Getting in', value: 'Selective-ish' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, calm, and focused on health careers',
      meters: {
        party:    { value: 2, note: 'Pretty quiet' },
        campus:   { value: 7, note: 'Pretty brick campus' },
        spirit:   { value: 3, note: 'Small crowds' },
        pressure: { value: 6, note: 'Health programs are demanding' },
        career:   { value: 8, note: 'Nursing, pharmacy and health lead' },
        greek:    { value: 1, note: 'No Greek life' },
        religion: { value: 4, note: 'Catholic roots, welcoming to all' }
      }
    },

    social: {
      preview: 'Small and tight. Quiet by design.',
      paragraphs: [
        "It is small enough to know people fast. Social life is clubs, teams, your dorm and hanging out with friends. Parties are not the main thing here.",
        "West Hartford has a walkable downtown with food and shops, and Hartford is close. A car helps for anything bigger."
      ]
    },

    gettingIn: {
      preview: 'Moderately selective. Some programs are harder to get into.',
      points: [
        { title: 'Grades matter.', text: 'It is more selective than a typical state school but not a reach for most solid students.' },
        { title: 'Health programs have their own rules.', text: 'Nursing and pharmacy are competitive. Read the requirements.' },
        { title: 'Tests may be optional.', text: 'Check the current policy on the website.' }
      ]
    },

    who: {
      preview: 'Mostly Connecticut students heading toward health careers',
      paragraphs: [
        "Most come from Connecticut and nearby states. The school was a women's college until 2018 and most students are still women, though men are now admitted.",
        "Nursing, health sciences, education, psychology and pharmacy are all big."
      ]
    },

    knownFor: {
      preview: 'Nursing, pharmacy and a pretty campus',
      points: [
        { title: 'Health programs', text: 'Nursing and pharmacy are the headliners.' },
        { title: 'Catholic roots', text: 'It was founded by the Sisters of Mercy. Students of any background attend.' },
        { title: 'Went coed in 2018', text: 'Men were first admitted to full-time undergrad programs in fall 2018.' },
        { title: 'Campus design', text: 'The brick campus was designed by the Olmsted Brothers.' }
      ]
    },

    stereotypes: {
      preview: '"All women" is outdated. "Quiet" is true.',
      items: [
        { said: "It's a women's college.", verdict: 'outdated', text: 'It was, but men have been admitted since 2018. Women are still the majority.' },
        { said: "It's only for nurses.", verdict: 'half', text: 'Health programs are big, but there are many other majors.' },
        { said: "It's strictly Catholic.", verdict: 'myth', text: 'It has Catholic roots and a ministry presence, but students of all backgrounds are welcome.' },
        { said: 'Nothing happens on weekends.', verdict: 'half', text: 'It is quiet, and many people go home. If you stay, there are events and the town nearby.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Small, calm, and academic.',
      myths: [
        { title: 'It is only a nursing school.', text: 'There are plenty of non-health majors.' },
        { title: 'It is in Hartford.', text: 'It is in West Hartford, a separate suburb.' }
      ],
      know: [
        { title: 'Plan for a quiet campus.', text: 'Weekends are calm.' },
        { title: 'Health programs are demanding.', text: 'Expect real work and clinical hours.' },
        { title: 'A car helps.', text: 'Buses run, but a car gives you freedom.' },
        { title: 'Check net price.', text: 'Aid varies. Use the calculator on the website.' }
      ]
    },

    fit: {
      preview: 'Great for health-minded students who like small. Wrong for a big social scene.',
      love: ['You want nursing, pharmacy or health sciences', 'You like small classes', 'You want a pretty, safe campus', 'You want a quiet place to focus'],
      struggle: ['You want a party scene', 'You want big-time sports', 'You want a big, mixed student body']
    },

    people: {
      preview: 'Supportive and focused. Small and quiet.',
      plus: ['Strong health programs', 'Small classes and helpful faculty', 'Nice campus and suburb'],
      minus: ['Quiet weekends', 'Small student body', 'Few non-health options']
    }
  }
});
