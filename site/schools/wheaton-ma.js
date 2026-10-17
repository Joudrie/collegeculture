registerSchool({
  id: 'wheaton-ma',
  name: 'Wheaton',
  nameSub: 'College · Massachusetts',
  title: 'Wheaton College (MA)',
  state: 'Massachusetts',
  location: 'Norton, MA · Quiet small town',
  asOf: '2026',

  colors: {
    name: 'Lyons · Blue and white',
    swatches: ['#155196', '#A9B6DA', '#FFFFFF'],
    band: '#155196',
    onBand: '#FFFFFF',
    onBandMuted: '#C9D3EC',
    stripe: '#A9B6DA',
    accent: '#155196',
    accentOnDark: '#A9B6DA'
  },

  vibe: "A small liberal arts college on a pretty, old campus in a sleepy town between Boston and Providence. Classes are small, people are artsy and laid back, and the social life lives on campus because there's not much around it.",
  flags: ['Small and close-knit', 'Quiet town', 'No Greek life', 'Not the Illinois one'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~1,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Residential small college; most people live on campus", "housing": ["Most students live on campus, and it's pretty residential.", "Dorms range from older halls to apartment-style for upperclassmen.", "Campus is small and green, with a close community."], "food": ["There's a main dining hall, and students say it's fine.", "Meal plans are standard for residents.", "Norton is a small town, so off-campus food is limited."]},
    vibe: {
      preview: 'Small, artsy, laid back, quiet town, campus-based social life',
      meters: {
        party:    { value: 3, note: 'Dorm parties and campus events' },
        campus:   { value: 8, note: 'Old brick buildings, lawns and a pond' },
        spirit:   { value: 3, note: 'Division III, small crowds' },
        pressure: { value: 5, note: 'Real work, not cutthroat' },
        career:   { value: 5, note: 'Liberal arts first, internships if you push' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular, unlike the Illinois Wheaton' }
      }
    },

    social: {
      preview: 'Everything happens on campus. Boston and Providence for a change of pace.',
      paragraphs: [
        "Almost everyone lives on campus, so the dorms, the dining hall and campus events are the social scene. There are no fraternities or sororities. Weekends are small parties, shows, club events and hanging out with your friends.",
        "Norton is quiet. Students rate the town low and say there's not much to walk to. That makes campus feel close, and some people love that. Others say it gets boring by the end of the semester.",
        "Providence is about half an hour away and Boston is about an hour. The commuter rail stops in nearby Mansfield, and the college has run trips into both cities. A car or a friend with one helps."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's moderately selective.", text: "More applicants get in than get turned away, but it's pickier than many schools nearby. Good grades in solid classes are the main thing." },
        { title: 'Tests are optional.', text: "Wheaton has been test-optional for a long time. You decide whether your scores help your application. Check the current policy before you apply." },
        { title: 'Show you want to be there.', text: "Small colleges like this care if you visit, interview or reach out. It's a fit school, so explain why it fits you." },
        { title: 'Merit aid is common.', text: 'Many students get scholarships. The sticker price is not what most people pay.' }
      ]
    },

    who: {
      preview: 'Artsy, curious, laid-back people who like a small community',
      paragraphs: [
        "Lots of students from New England, New York and the rest of the Northeast, plus a group from other states and countries. Popular majors include psychology, biology, business, the arts and the social sciences. Many people say the student body leans artsy and progressive.",
        "It fits people who want to know their professors, try a few subjects before picking one and be part of a small community. It's not for people who want a big school, a big sports scene or a city outside the door."
      ]
    },

    knownFor: {
      preview: 'Liberal arts, a pretty campus, and being confused with Illinois',
      points: [
        { title: 'Liberal arts with links', text: 'The Connections curriculum has you take linked courses across different subjects, so a science major might pair classes with art or history.' },
        { title: 'Long history', text: "It started in 1834 as a school for women and became coed in 1988. It's one of the older colleges in New England." },
        { title: 'The campus', text: "Brick buildings, big lawns and a pond. It's been used as a filming spot for movies, including parts of Legally Blonde." },
        { title: 'Fellowships', text: "For a small school, Wheaton has had a solid record of students winning Fulbright and other big postgrad awards." }
      ]
    },

    stereotypes: {
      preview: '"Nothing to do in Norton" is true. "Religious school" is a myth.',
      items: [
        { said: "There's nothing to do in Norton.", verdict: 'true', text: "Pretty much. The town is quiet and you'll spend most of your time on campus. Providence and Boston are the escape." },
        { said: "It's a religious school.", verdict: 'myth', text: "That's Wheaton College in Illinois, a Christian college. This Wheaton is secular and has no connection to it." },
        { said: "Everyone's artsy and liberal.", verdict: 'half', text: "The arts are big and the campus leans progressive. You'll also find athletes, science majors and plenty of people in between." },
        { said: "It's a backup for Boston schools.", verdict: 'half', text: "Some students did apply as a backup. Many pick it on purpose for small classes and a real campus feel." }
      ]
    },

    mythsAndKnow: {
      preview: "It's not the Illinois one. It's coed. A car helps.",
      myths: [
        { title: "It's Wheaton in Illinois.", text: "Different school, different state. Wheaton in Illinois is an evangelical Christian college near Chicago. This one is a secular liberal arts college in Massachusetts. Double check which one you're looking at." },
        { title: "It's still a women's college.", text: "It was for most of its history, but it has admitted men since 1988." }
      ],
      know: [
        { title: 'Campus is the social life.', text: "If you want a bubble, great. If you need a city around you, think hard. You'll leave campus on purpose, not by accident." },
        { title: 'Trains are close, not on campus.', text: "The Mansfield commuter rail station is a short drive away and gets you to Boston or Providence. You need a ride or shuttle to get there." },
        { title: 'Small means everyone knows you.', text: 'Great for getting help and building relationships with professors. Some people find it a little too small by senior year.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a small, pretty campus. Rough if you want a city or a big scene.',
      love: ['You want small classes and professors who know you', 'You like art, writing or exploring a few subjects', 'You want a close campus community', 'You want Boston and Providence for weekends, not every day'],
      struggle: ['You want a city or college town to walk around', 'You want big parties or Greek life', 'You want huge game days and school spirit']
    },

    people: {
      preview: 'Professors and community win. The quiet town is the complaint.',
      plus: ['Professors are approachable and care', 'A pretty, walkable campus', 'A friendly, accepting community'],
      minus: ['Norton is quiet and there is little to walk to', 'Social life can feel small or repetitive', 'Getting off campus takes planning without a car']
    }
  }
});
