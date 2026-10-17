registerSchool({
  id: 'brandeis',
  name: 'Brandeis',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Waltham, MA · Commuter Rail to Boston',
  asOf: '2026',

  colors: {
    name: 'Judges · Brandeis blue and cyan',
    swatches: ['#003478', '#00A3E0', '#FFFFFF'],
    band: '#00A3E0',
    onBand: '#001A3D',
    onBandMuted: '#0A2A5C',
    stripe: '#003478',
    accent: '#003478',
    accentOnDark: '#5FB8F0'
  },

  vibe: "A small research university full of smart, opinionated people. Classes are serious, the social scene is quiet, and Boston is a train ride away.",
  flags: ['Academic', 'Quiet social scene', 'No Greek life', 'Train to Boston'],
  facts: [
    { label: 'Setting', value: 'Suburb' },
    { label: 'Undergrads', value: '~3,400' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'None official' }
  ],

  sections: {
    "living": {"preview": "Mostly live on campus, small and quiet, food is fine", "housing": ["Most students live on campus, especially in the first years.", "Housing includes traditional dorms and apartment-style options.", "Waltham is quiet, so campus is where most people spend time."], "food": ["There are a few dining spots, with one main dining hall.", "Students say it is okay and can get repetitive.", "Moody Street in Waltham has a good mix of restaurants nearby."]},
    vibe: {
      preview: 'Academic, activist, and pretty low-key on weekends',
      meters: {
        party:    { value: 3, note: 'Small parties, lots of nights in' },
        campus:   { value: 6, note: 'Hilly, with a real castle on it' },
        spirit:   { value: 2, note: 'D3, no football' },
        pressure: { value: 7, note: 'Lots of pre-med and grad school plans' },
        career:   { value: 6, note: 'Strong for med school and research' },
        greek:    { value: 0, note: 'Not recognized by the school' },
        religion: { value: 4, note: 'Nonsectarian, with a big Jewish community' }
      }
    },

    social: {
      preview: 'Clubs and small friend groups. Go to Boston for more.',
      paragraphs: [
        "The social scene is built around clubs, a cappella, theater, student activism and small friend groups. There's no official Greek life, so there's no frat row running the weekend.",
        "Parties exist, but they're smaller and quieter than at a big school. A lot of people say they had to work to find their crowd, and then it felt like home once they did.",
        "Moody Street in Waltham has restaurants and a movie theater within reach. The Commuter Rail stop is right by campus, so Boston is about half an hour away when you want more."
      ]
    },

    gettingIn: {
      preview: 'Selective. Around half or fewer get in.',
      points: [
        { title: "It's selective.", text: "Most admits are strong students with tough schedules. It's not a lock even with good grades." },
        { title: 'Tests are optional.', text: 'You can apply with or without SAT or ACT scores. Check the current policy before you apply.' },
        { title: 'Early decision helps.', text: "If it's your top pick, the early decision rounds can give you a better shot." },
        { title: 'Show what you care about.', text: 'Brandeis likes students who care about ideas and causes. Your essays are a good place to show that.' }
      ]
    },

    who: {
      preview: 'Smart, opinionated, often pre-med or pre-law',
      paragraphs: [
        "Lots of students from the Northeast, plus a big international crowd. People tend to be intellectual and care about social issues. Debates in class and in the dining hall are normal.",
        "Biology, neuroscience, psychology, economics and politics are popular. A lot of students plan on med school, law school or grad school. If you love school, you'll fit right in."
      ]
    },

    knownFor: {
      preview: 'Academics, social justice, a castle, and its history',
      points: [
        { title: 'Serious academics', text: "It's a research university with a small-college feel. Undergrads can get into labs early, especially in the sciences." },
        { title: 'Social justice', text: "It's named after Supreme Court Justice Louis Brandeis, and activism is part of campus life. Students push for change and talk about it a lot." },
        { title: 'Its history', text: 'It was founded in 1948 by the American Jewish community and is open to students of every background. Jewish life on campus is big and visible.' },
        { title: 'The Castle', text: 'There is a real castle on campus, and students live in it.' }
      ]
    },

    stereotypes: {
      preview: '"No social life" is half true. "Everyone is pre-med" is half true.',
      items: [
        { said: "There's no social life.", verdict: 'half', text: "It's quiet compared to a big state school, and some weekends are dead. But clubs and friend groups keep people busy, and Boston is close." },
        { said: 'Everyone is pre-med.', verdict: 'half', text: 'There are a lot of pre-med students, and they are visible. Plenty of people study politics, economics, arts and everything else.' },
        { said: 'Everyone is an activist.', verdict: 'half', text: 'Activism is a real part of campus, and people care about causes. Lots of students are just focused on classes and friends.' },
        { said: "It's a backup for the Ivies.", verdict: 'half', text: 'Some students did apply to bigger names first. Most say that stops mattering after the first semester.' }
      ]
    },

    mythsAndKnow: {
      preview: "You don't need a car, and you don't have to be Jewish",
      myths: [
        { title: 'You have to be Jewish.', text: 'No. Brandeis is nonsectarian and open to everyone. It has a large Jewish community, and students of all backgrounds go here.' },
        { title: "It's in Boston.", text: "It's in Waltham, a suburb west of the city. Boston is close, but you need the train to get there." }
      ],
      know: [
        { title: 'The train is your friend.', text: 'The Brandeis stop on the Commuter Rail is right by campus. It runs into North Station in Boston.' },
        { title: "You'll have to build your social life.", text: "Nobody hands you a scene. Join clubs early. That's where most people find their group." },
        { title: 'Campus is hilly.', text: 'Expect a lot of walking up and down, especially in winter.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love ideas and debate. Rough if you want a party school.',
      love: ['You love classes and talking about ideas', 'You want a small school near Boston', 'You care about social issues', 'You want research experience as an undergrad'],
      struggle: ['You want big parties and game days', 'You want Greek life', 'You want a social scene handed to you']
    },

    people: {
      preview: 'Academics and Boston access are the wins. Quiet weekends are the complaint.',
      plus: ['Professors and classes are excellent', 'Easy research and lab access', 'Boston is a cheap train ride away'],
      minus: ['Weekends can feel quiet', 'School spirit is low', "It's expensive"]
    }
  }
});
