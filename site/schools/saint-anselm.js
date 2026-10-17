registerSchool({
  id: 'saint-anselm', nameStyle: "classic",
  name: "Saint A's",
  nameSub: 'Saint Anselm College',
  state: 'New Hampshire',
  location: 'Goffstown, NH · Hilltop outside Manchester',
  asOf: '2026',

  colors: {
    name: 'Hawks · Blue and white',
    swatches: ['#00325B', '#FFFFFF', '#30A3C0'],
    band: '#00325B',
    onBand: '#FFFFFF',
    onBandMuted: '#B9CDE0',
    stripe: '#30A3C0',
    accent: '#00325B',
    accentOnDark: '#30A3C0'
  },

  vibe: "A small Catholic college on a hill where you know half the campus by Thanksgiving. It's close-knit and traditional, and every four years presidential candidates show up on your campus.",
  flags: ['Small and tight-knit', 'Catholic, run by monks', 'Politics central', 'No Greek life'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~2,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Suburban campus; a car is useful", "points": ["Public transit around Goffstown is limited.", "Manchester-Boston Regional Airport is the nearest airport.", "A car helps. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small and mostly residential; most people live on campus.", "housing": ["Most students live on campus for much of their time there.", "Housing is a mix of traditional dorms and apartment-style options for older students.", "Campus is small, so everything is close together."], "food": ["There is a main dining hall, and students say the food is decent.", "Residents usually need a meal plan.", "Goffstown is quiet, so many students drive to Manchester for more food."]},
    vibe: {
      preview: 'Close-knit, traditional, more social than you would guess',
      meters: {
        party:    { value: 5, note: 'Dorm and townhouse parties, all on campus' },
        campus:   { value: 8, note: 'Pretty hilltop campus, most live on it' },
        spirit:   { value: 6, note: 'Small school, people show up' },
        pressure: { value: 5, note: 'The core classes are real work' },
        career:   { value: 7, note: 'Nursing and politics connections' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 7, note: 'Monks on campus, Mass is optional' }
      }
    },

    social: {
      preview: 'Everything happens on campus. You will know everyone.',
      paragraphs: [
        "Most students live on campus all four years, so the social life is right there. Freshmen start in traditional dorms, and upperclassmen move into townhouses and apartment-style halls, which is where a lot of the weekend gatherings happen.",
        "With no Greek life, friend groups come from your floor, sports teams and clubs. It's small enough that you see the same faces at dinner, at games and at parties. People love that or find it a little much.",
        "Goffstown itself is quiet. Manchester is a short drive for food and shopping, and Boston is about an hour away. A car or a friend with one helps a lot."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Nursing is the tougher door.',
      points: [
        { title: "It's not hard to get into.", text: 'Most people who apply are admitted. Solid grades in a normal college prep schedule put you in good shape.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Nursing is more competitive.', text: 'It is one of the most popular programs, so expect a higher bar if you apply directly into it.' },
        { title: 'Early action is an option.', text: "Applying early can get you an answer sooner. Check the school's site for current deadlines." }
      ]
    },

    who: {
      preview: 'New England kids, lots of nursing and politics majors',
      paragraphs: [
        "A lot of students come from Massachusetts and New Hampshire, with the rest mostly from the Northeast. Many went to Catholic high schools, but plenty didn't, and you don't have to be Catholic to fit in.",
        "Nursing, politics, business, criminal justice and psychology are big. People tend to be friendly, involved and pretty traditional in a New England way. If you want a small place where professors know you, it fits."
      ]
    },

    knownFor: {
      preview: 'The NH Institute of Politics, nursing, and a Benedictine abbey',
      points: [
        { title: 'Presidential primary central', text: "The New Hampshire Institute of Politics is on campus. In primary years candidates visit constantly, and national TV debates have been held here. Students volunteer, intern and sometimes ask the questions." },
        { title: 'Nursing', text: 'A well-regarded nursing program that a lot of students come specifically for.' },
        { title: 'The monks', text: 'It was founded by Benedictine monks, and the monastery is still on campus. Some monks teach and you will see them around.' },
        { title: 'A real core curriculum', text: 'Everyone takes required humanities, philosophy and theology classes. Expect a lot of reading and discussion.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone knows everyone" is true. "Nothing to do" is half true.',
      items: [
        { said: 'Everyone knows everyone.', verdict: 'true', text: "With about 2,000 students mostly living on campus, it's hard to be anonymous. Great for community, rough if you want a fresh start every semester." },
        { said: "It's a politics school.", verdict: 'half', text: "The Institute of Politics gives it that reputation, and primary season is a big deal. But most students aren't politics majors, and plenty never go to an event." },
        { said: 'Half the school is from Massachusetts.', verdict: 'half', text: "Maybe not half, but a lot. Expect to hear plenty of Boston-area accents." },
        { said: "There's nothing to do in Goffstown.", verdict: 'half', text: "Goffstown is quiet, true. Campus fills the gap, and Manchester is close if you can get there." }
      ]
    },

    mythsAndKnow: {
      preview: "You don't have to be Catholic. You do have to take the core.",
      myths: [
        { title: 'You have to be Catholic.', text: 'Students of all backgrounds go here. You will see the Catholic side in the abbey, theology classes and campus traditions, but Mass is not required.' },
        { title: 'The politics stuff is only for poli sci majors.', text: 'Anyone can go to events, volunteer during debates or hear candidates speak. Some of the best experiences are open to everyone.' }
      ],
      know: [
        { title: 'The core is not optional.', text: 'Required humanities, philosophy and theology classes take up a good chunk of your first two years. Some people love it, some grind through it.' },
        { title: 'Primary years are wild.', text: 'If you are on campus during a New Hampshire primary, expect news vans, candidates and long lines for events. Plan to get involved.' },
        { title: 'Bring a car if you can.', text: "Campus is outside town. Getting to Manchester, the mountains or Boston is a lot easier if you drive." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and close-knit. Rough if you want a city.',
      love: ['You want a small school where people know your name', "You're into politics or current events", 'You want a strong nursing program', 'You like traditions and a pretty campus'],
      struggle: ['You want a big city outside your door', 'You want Greek life or a huge party scene', "You'd rather skip required philosophy and theology"]
    },

    people: {
      preview: 'Community and politics access win. Small size and location are the knocks.',
      plus: ['Tight community where people look out for each other', 'Front-row seat to presidential politics', 'Professors who know you and help'],
      minus: ['Small enough that gossip travels fast', 'Not much in walking distance', 'Required core classes feel like a lot to some']
    }
  }
});
