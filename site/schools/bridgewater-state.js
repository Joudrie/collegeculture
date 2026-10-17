registerSchool({
  id: 'bridgewater-state',
  name: 'Bridgewater State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Bridgewater, MA · South of Boston',
  asOf: '2026',

  colors: {
    name: 'Bears · Crimson and white',
    swatches: ['#89191F', '#FFFFFF'],
    band: '#89191F',
    onBand: '#FFFFFF',
    onBandMuted: '#E8C4C8',
    stripe: '#D49991',
    accent: '#89191F',
    accentOnDark: '#F08A8A'
  },

  vibe: "The biggest of the Massachusetts state universities, in a quiet small town south of Boston. It's affordable, practical and friendly, with a real campus, but a lot of students commute or head home on weekends.",
  flags: ['Affordable', 'Lots of commuters', 'Quiet town', 'Train to Boston'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~9,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Commuter rail to Boston; Logan is the main airport", "points": ["The MBTA commuter rail has a Bridgewater station, and local buses run in the area.", "Logan Airport and T.F. Green are the main airport options.", "A car makes life easier here. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mix of dorms and commuters; food is standard campus dining", "housing": ["Many students commute, so it's less residential than some schools.", "First-years and others live in residence halls on campus.", "Dorms are mostly traditional with some apartment-style options."], "food": ["There is a main dining hall plus a few smaller spots.", "Students call it decent, like most state school dining.", "The town of Bridgewater has basic food options, but a car helps."]},
    vibe: {
      preview: 'Practical, low pressure, mixed commuter and dorm crowd',
      meters: {
        party:    { value: 5, note: 'House parties exist, not a party school' },
        campus:   { value: 6, note: 'A real campus with a quad, in a small town' },
        spirit:   { value: 4, note: 'Football draws some, most people skip' },
        pressure: { value: 3, note: 'Manageable for most majors' },
        career:   { value: 6, note: 'Teaching, criminal justice and aviation pipelines' },
        greek:    { value: 2, note: 'A handful of chapters, easy to ignore' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Fun if you live on campus and join things. Quiet if you commute.',
      paragraphs: [
        "If you live in the dorms, freshman year feels like normal college. People meet on their floor, in clubs and on teams, and there are house parties around town on weekends. It's a social school, just not a wild one.",
        "A big share of students commute or go home on weekends, and you'll hear people call it a suitcase school. Some Friday nights are busy. Others feel empty. Students who join clubs or teams early say that's what made it click.",
        "The town of Bridgewater is quiet, with a few spots to eat near campus. The commuter rail stops right at campus, so Boston is an easy train ride when you want more to do."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades in a normal college prep schedule will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some majors have extra steps.', text: 'Aviation, education and some health programs have their own requirements once you are in. Look up your major early.' },
        { title: 'In-state cost can be very low.', text: 'Massachusetts residents from lower and middle income families may get tuition and fees covered. Check the current rules on the school website.' }
      ]
    },

    who: {
      preview: 'Mostly Massachusetts kids, future teachers, cops and pilots',
      paragraphs: [
        "Mostly students from Massachusetts, a lot of them from the South Shore, Cape Cod and the Brockton and Fall River areas. Many are the first in their family to go to college, and plenty work part time.",
        "People here tend to be practical and down to earth. Popular majors include education, criminal justice, psychology, business and aviation. It's a good fit if you want a degree without massive debt or a cutthroat vibe."
      ]
    },

    knownFor: {
      preview: 'Training teachers, criminal justice, aviation and low cost',
      points: [
        { title: 'Teaching', text: 'It started in 1840 as one of the first teacher training schools in the country. A lot of Massachusetts teachers went here.' },
        { title: 'Criminal justice', text: 'One of the most popular majors. Lots of students are aiming for policing, corrections, law or social services.' },
        { title: 'Aviation', text: 'You can earn a pilot track degree. Flight training happens at New Bedford Regional Airport, about 30 minutes away, and it costs extra.' },
        { title: 'Size and price', text: "It's the largest Massachusetts state university, and it's one of the cheaper ways to get a four-year degree in New England if you live in the state." }
      ]
    },

    stereotypes: {
      preview: '"Suitcase school" is half true. "Just a backup" misses the point.',
      items: [
        { said: "Everyone goes home on weekends.", verdict: 'half', text: "A lot of people do, especially freshmen from nearby towns. Plenty of others stay, and weekends are busier if you live on campus and know people." },
        { said: "It's a commuter school.", verdict: 'half', text: "Commuters are a big part of the student body. There's also a large dorm population and a real campus life for people who live there." },
        { said: "Half the school wants to be a cop or a teacher.", verdict: 'half', text: "Criminal justice and education are huge here. There are also lots of business, psych, science and aviation students." },
        { said: "It's just a backup school.", verdict: 'myth', text: "For many students it's the first choice because of the price and the programs. Nobody here is spending their week wishing they were somewhere else." }
      ]
    },

    mythsAndKnow: {
      preview: "Real campus, cheap for in-state, and aviation isn't cheap",
      myths: [
        { title: 'State school means huge lectures.', text: 'Most classes are small to medium. You are not going to be one of 400 people in an auditorium most days.' },
        { title: "There's nothing to do.", text: "The town is quiet, but campus has clubs, games and events. The train makes Boston an easy trip." }
      ],
      know: [
        { title: 'The train stops on campus.', text: 'The commuter rail station is right at campus, which makes Boston and home easy to reach.' },
        { title: 'Aviation costs extra.', text: 'Flight hours are paid on top of tuition and add up fast. Ask the department for current numbers before you commit.' },
        { title: 'Get involved early.', text: 'Students who join clubs, Greek life or teams in the first semester tend to be the ones who stay on weekends and like it most.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want an affordable degree. Rough if you want a big scene.',
      love: ['You want a four-year degree without huge debt', 'You want to teach, work in criminal justice or fly', "You like a real campus that isn't intense", 'You want to stay close to home'],
      struggle: ['You want a big party or sports scene', 'You want a busy town right outside campus', 'You want a campus that stays full every weekend']
    },

    people: {
      preview: 'Price and friendly people win. Quiet weekends are the complaint.',
      plus: ['Affordable, especially for Massachusetts residents', 'Friendly, low drama people', 'Professors who know your name'],
      minus: ['Weekends can feel empty', 'The town has little going on', 'Some buildings and dorms are dated']
    }
  }
});
