registerSchool({
  id: 'hellenic',
  name: 'Hellenic',
  nameSub: 'Hellenic College Holy Cross',
  title: 'Hellenic College',
  state: 'Massachusetts',
  location: 'Brookline, MA · Greek Orthodox college',
  asOf: '2026',

  colors: {
    name: 'Slate and gold',
    swatches: ['#293F50', '#E9A411', '#98012E'],
    band: '#293F50',
    onBand: '#FFFFFF',
    onBandMuted: '#B9C4CD',
    stripe: '#E9A411',
    accent: '#98012E',
    accentOnDark: '#E9A411'
  },

  vibe: "A tiny Greek Orthodox college on a quiet campus just outside Boston. Faith is part of daily life here, and everybody knows everybody.",
  flags: ['Very small', 'Greek Orthodox', 'Near Boston', 'Tight community'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~60' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Intramural' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Very small school, most students live on campus", "housing": ["It is a very small school, and most students live on campus.", "Housing is limited in size and mostly traditional dorms.", "It is close to Boston, so students often go into the city."], "food": ["There is one small dining hall.", "Students say it is simple.", "Brookline and Boston have lots of restaurants a short ride away."]},
    vibe: {
      preview: 'Tiny, faith-centered, and close',
      meters: {
        party:    { value: 1, note: 'Very low-key' },
        campus:   { value: 5, note: 'Green campus with a chapel' },
        spirit:   { value: 2, note: 'Community, not crowds' },
        pressure: { value: 4, note: 'Small classes, you can not hide' },
        career:   { value: 5, note: 'Church and ministry paths, plus a Boston transfer option' },
        greek:    { value: 1, note: 'No fraternities or sororities' },
        religion: { value: 10, note: 'Faith is part of daily campus life' }
      }
    },

    social: {
      preview: 'Everyone knows everyone. Chapel, meals and weekends together.',
      paragraphs: [
        "With only a few dozen undergrads, you will know basically everyone. Life centers on class, chapel, the dining hall and campus events. There is no party scene.",
        "Boston is a short ride away. Plenty of people head into the city for food, museums and fun."
      ]
    },

    gettingIn: {
      preview: 'Small school, so the fit matters more than the numbers.',
      points: [
        { title: 'Most applicants get in.', text: 'It is not a numbers game. They care that it is a good fit.' },
        { title: 'Know what it is.', text: 'Faith is built into the school. Read how chapel and community life work before you apply.' },
        { title: 'Visit if you can.', text: 'It is so small that a visit tells you more than any website.' }
      ]
    },

    who: {
      preview: 'Mostly Greek Orthodox students, plus some who want a small faith-based school',
      paragraphs: [
        "Many students are Greek Orthodox and come from around the country. Some are thinking about ministry or work in the church. Others just want a small, values-focused school.",
        "Students from other backgrounds are welcome, and there is a program for outside undergrads to spend a semester here."
      ]
    },

    knownFor: {
      preview: 'Greek Orthodox education in the Boston area',
      points: [
        { title: 'Orthodox identity', text: 'It is one of the main Greek Orthodox colleges in the country and sits next to a theological school.' },
        { title: 'Brookline campus', text: 'A wooded campus just outside Boston with city access.' },
        { title: 'Boston College link', text: 'Students can finish the core here and move to a Boston College program for a career-focused major.' },
        { title: 'Very small classes', text: 'Professors know you by name.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is Greek Orthodox" is mostly true. "Strict" is half true.',
      items: [
        { said: "Everyone there is Greek Orthodox.", verdict: 'half', text: 'Most are. Not all. The school welcomes others.' },
        { said: "It's super strict.", verdict: 'half', text: 'Faith is a real part of daily life, with chapel and community expectations. How strict that feels depends on you.' },
        { said: "There's nothing to do.", verdict: 'half', text: 'Campus is quiet, but Boston is close.' },
        { said: "It's just for future priests.", verdict: 'myth', text: 'Some students go that route, but undergrads study other things too.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Tiny and faith-focused. Know it before you apply.',
      myths: [
        { title: 'It is a seminary only.', text: 'There is a seminary-level school next door, but the college is a separate undergraduate program.' },
        { title: 'It is in Boston proper.', text: 'It is in Brookline, a neighboring town, with easy access into the city.' }
      ],
      know: [
        { title: 'Small means small.', text: 'Few majors and few students. Check that your interest is covered.' },
        { title: 'Faith is part of daily life.', text: 'Expect chapel and a community built around Orthodox practice.' },
        { title: 'You can transfer paths.', text: 'The Boston College link opens more majors.' },
        { title: 'Check net price.', text: 'Aid varies. Use the calculator on the website.' }
      ]
    },

    fit: {
      preview: 'Great if you want faith and a tiny community. Hard if you want variety.',
      love: ['You want faith at the center of college', 'You like very small classes', 'You want to be near Boston without living in it'],
      struggle: ['You want a big social scene', 'You want lots of majors', 'You want sports and school spirit']
    },

    people: {
      preview: 'Close and caring. Very limited choices.',
      plus: ['Everyone knows you', 'Strong sense of community', 'Boston nearby'],
      minus: ['Very few students and majors', 'Quiet social life', 'Faith expectations may not suit everyone']
    }
  }
});
