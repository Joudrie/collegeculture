registerSchool({
  id: 'western-ct-state',
  name: 'WestConn',
  nameSub: 'Western Connecticut State',
  title: 'Western Connecticut State',
  state: 'Connecticut',
  location: 'Danbury, CT · Two campuses',
  asOf: '2026',

  colors: {
    name: 'Wolves · Deep blue and orange',
    swatches: ['#002856', '#FF4D00'],
    band: '#002856',
    onBand: '#FFFFFF',
    onBandMuted: '#C5D3EA',
    stripe: '#FF4D00',
    accent: '#002856',
    accentOnDark: '#FF7A3D'
  },

  vibe: "An affordable state school in Danbury with a lot of commuters and two small campuses. It's practical and low-key, and a good fit if you want a degree without a huge price tag.",
  flags: ['Lots of commuters', 'Affordable', 'Two campuses', 'Meteorology program'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~3,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mix of commuters and residents; state school dorms and basic dining", "housing": ["Many students commute, but there are residence halls on campus.", "First-years often live on campus.", "Some older students move to apartments near Danbury."], "food": ["There's a campus dining hall plus smaller spots.", "Students say it's average.", "Danbury has lots of food within a short drive."]},
    vibe: {
      preview: 'Low-key, commuter-heavy, affordable, practical',
      meters: {
        party:    { value: 3, note: 'Small scene, many students go home' },
        campus:   { value: 4, note: 'Two small campuses in Danbury' },
        spirit:   { value: 3, note: 'Small crowds at games' },
        pressure: { value: 4, note: 'Manageable for most majors' },
        career:   { value: 5, note: 'Nursing, business, education and more' },
        greek:    { value: 1, note: 'Small if present at all' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs and dorms matter. Commuters have to work at it.',
      paragraphs: [
        "A lot of students commute, which means campus can feel quiet after classes. If you live on campus, you have a much easier time meeting people.",
        "There are over 75 clubs, and joining one is the easiest way to find your people.",
        "Danbury is a real city with restaurants and shopping, and New York is not too far by train, but most weekends are low-key."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Cost is low for CT residents.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted. Solid grades will do it.' },
        { title: 'Check the test policy.', text: 'Confirm whether tests are required or optional before you apply.' },
        { title: 'In-state cost is lower.', text: 'As a public school, it costs much less for Connecticut residents.' }
      ]
    },

    who: {
      preview: 'Mostly Connecticut and New York area students, many commuters',
      paragraphs: [
        "Most students come from western Connecticut and nearby parts of New York. Many work part time, and lots are the first in their family to go to college.",
        "It fits people who want to save money and stay close to home, or who want a specific program like nursing, education or meteorology."
      ]
    },

    knownFor: {
      preview: 'Meteorology, music, and a low price',
      points: [
        { title: 'Meteorology', text: 'It has the only bachelor\'s program in meteorology in southern New England.' },
        { title: 'Environmental programs', text: 'It is home to the Jane Goodall Center for Excellence in Environmental Studies.' },
        { title: 'Affordable', text: 'It is one of the cheaper options for Connecticut residents.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is mostly true. "Backup school" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: "Many students live at home or nearby. There are dorms, but a big share goes home after class." },
        { said: "It's a backup school.", verdict: 'half', text: "Some students pick it as a safe choice. Others choose it for the price and programs." },
        { said: "There's nothing to do.", verdict: 'half', text: "Campus life is quiet, but Danbury has restaurants and shops, and New York is reachable by train." },
        { said: "The campus is split up and awkward.", verdict: 'half', text: "There are two campuses with a shuttle between them. It works, but it takes planning." }
      ]
    },

    mythsAndKnow: {
      preview: 'Two campuses, a lot of commuters, and a low price.',
      myths: [
        { title: 'Public means low quality.', text: 'Classes are small and professors know students. Quality depends on your program and effort.' },
        { title: 'It is a party school.', text: 'The party scene is small. Most people have jobs or go home.' }
      ],
      know: [
        { title: 'There are two campuses.', text: 'Midtown and Westside are connected by a shuttle.' },
        { title: 'Live on campus if you want a social life.', text: 'It makes meeting friends a lot easier.' },
        { title: 'A car helps.', text: 'Danbury is a city, but a car makes work and errands easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want affordable and practical. Rough if you want a campus bubble.',
      love: ['You want a lower price', 'You want a nursing, education or meteorology degree', 'You want to stay near home', 'You like small classes'],
      struggle: ['You want a big college town', 'You want big sports', 'You want a busy weekend scene']
    },

    people: {
      preview: 'Price and small classes win. Quiet campus is the complaint.',
      plus: ['Low cost for CT residents', 'Small classes', 'Unique programs like meteorology'],
      minus: ['Quiet campus life', 'Many students are not around on weekends', 'Two campuses take planning']
    }
  }
});
