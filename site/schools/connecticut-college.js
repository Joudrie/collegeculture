registerSchool({
  id: 'connecticut-college', nameStyle: "classic",
  name: 'Conn College',
  nameSub: 'Connecticut College',
  title: 'Connecticut College',
  state: 'Connecticut',
  location: 'New London, CT · Hilltop above the Thames',
  asOf: '2026',

  colors: {
    name: 'Camels · Blue and white',
    swatches: ['#002F5F', '#9EC3DE', '#FFFFFF'],
    band: '#DCE6F2',
    onBand: '#002F5F',
    onBandMuted: '#34507A',
    stripe: '#002F5F',
    accent: '#002F5F',
    accentOnDark: '#9EC3DE'
  },

  vibe: "A small, friendly liberal arts college on a hill over the Thames River. Lots of students study abroad, lots do research, and there are no frats.",
  flags: ['Small campus', 'Honor code', 'No Greek life', 'Selective'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,900' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Amtrak station in New London nearby", "points": ["New London has an Amtrak station and regional buses.", "T. F. Green Airport and Bradley are the closest major airports.", "You can get by without a car. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly residential; food is solid, with a small city nearby.", "housing": ["Most students live on campus, especially in the early years.", "Housing is a mix of traditional dorms, suites and some apartments.", "Campus is close-knit, so most social life stays on it."], "food": ["There are a few dining spots, and students generally say the food is good.", "Meal plans are standard for residents.", "New London has restaurants, though many students use a car or a ride."]},
    vibe: {
      preview: 'Small, close, outdoorsy, honor code, no frats',
      meters: {
        party:    { value: 4, note: 'Dorm parties and house events, low-key' },
        campus:   { value: 8, note: 'Big hilltop campus with the arboretum' },
        spirit:   { value: 4, note: 'Soccer and hockey bring people out' },
        pressure: { value: 6, note: 'Real work, but students help each other' },
        career:   { value: 5, note: 'Internships and a funded program help' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Dorms, clubs, teams and weekend events, with no Greek scene',
      paragraphs: [
        "There are no fraternities or sororities, so social life runs through dorms, clubs, teams and student-run events. Parties exist, but they're smaller and mostly on campus.",
        "It's small, so you see the same people a lot. Most people like that. Some say it gets claustrophobic by junior year.",
        "New London is a small city, and students say it's not a big nightlife town. Some people take trips to New Haven, Providence or the beach in nice weather."
      ]
    },

    gettingIn: {
      preview: 'Selective, and tests are optional.',
      points: [
        { title: "It's selective.", text: 'It turns away most applicants. Strong grades and good course rigor matter.' },
        { title: 'Tests are optional.', text: 'Check the current policy before you apply.' },
        { title: 'Early decision exists.', text: "If it's your top pick, applying early can help." }
      ]
    },

    who: {
      preview: 'Outdoorsy, curious, and into research and travel',
      paragraphs: [
        "Friendly, curious people who want a small school with real attention from professors. Lots of students study abroad, and many do research with faculty.",
        "A lot of students come from New England and the Northeast. The crowd skews outgoing and a bit preppy, but not in a way that feels cliquey to most people."
      ]
    },

    knownFor: {
      preview: 'The honor code, studying abroad, and a pretty hilltop',
      points: [
        { title: 'The honor code', text: 'It dates back to 1922. Students take exams unproctored, on their own schedule.' },
        { title: 'Study abroad', text: 'Most students go abroad at some point, and the school pushes it.' },
        { title: 'Research', text: 'Students can do research with professors, often as undergrads.' },
        { title: 'Soccer', text: 'The men\'s soccer team won a Division III national title in 2021.' }
      ]
    },

    stereotypes: {
      preview: '"Preppy" is half true. "Boring" is half true.',
      items: [
        { said: "It's a preppy school.", verdict: 'half', text: "You'll see plenty of boat shoes and quarter-zips. You'll also see a wide mix, and most people just wear what's comfortable." },
        { said: "It's boring.", verdict: 'half', text: "The campus is quiet and small. If you like clubs, teams and low-key nights, you'll be fine. If you want nonstop parties, you won't." },
        { said: "It's a backup for Trinity or Wesleyan.", verdict: 'myth', text: "Plenty of students choose it first. It has its own identity, with a strong study abroad culture and a nice campus." },
        { said: "Everyone is wealthy.", verdict: 'half', text: "Many students come from well-off families, but there are plenty who rely on aid." }
      ]
    },

    mythsAndKnow: {
      preview: 'Small school, small town. Plan for a quiet campus.',
      myths: [
        { title: 'The honor code means no stress.', text: 'Classes are still hard. The honor code just means no one stands over you during exams.' },
        { title: 'Nothing to do in New London.', text: 'It is small, but there is a beach, a downtown and easy access to bigger cities.' }
      ],
      know: [
        { title: 'The campus is on a hill.', text: 'Expect a lot of walking up and down in winter.' },
        { title: 'Most people live on campus.', text: 'Housing is guaranteed for most of your time, so you will be around people a lot.' },
        { title: 'A car helps.', text: 'The train station is nearby, but a car makes weekends easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for small-school people. Rough if you want a city or a big party scene.',
      love: ['You want small classes and close professors', 'You want to study abroad', 'You like a scenic campus', 'You like a low-key social scene'],
      struggle: ['You want a Greek life or party scene', 'You want a big city around you', 'You want big-time sports']
    },

    people: {
      preview: 'Community and study abroad win. Quiet nights are the complaint.',
      plus: ['Close with professors', 'Great study abroad and research options', 'Beautiful campus'],
      minus: ['Small and quiet for some', 'New London is not a big college town', 'Can feel isolated without a car']
    }
  }
});
