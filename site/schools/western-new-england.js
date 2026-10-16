registerSchool({
  id: 'western-new-england',
  name: 'WNE',
  nameSub: 'Western New England',
  title: 'Western New England',
  state: 'Massachusetts',
  location: 'Springfield, MA · Sixteen Acres',
  asOf: '2026',

  colors: {
    name: 'Golden Bears · Blue and gold',
    swatches: ['#004B8E', '#FDB812'],
    band: '#004B8E',
    onBand: '#FFFFFF',
    onBandMuted: '#C9D6E8',
    stripe: '#FDB812',
    accent: '#004B8E',
    accentOnDark: '#FDB812'
  },

  vibe: "A mid-size private school on a quiet, grassy campus at the edge of Springfield. Most people are here for a practical degree like engineering, business, pharmacy or criminal justice, and it feels more like a close suburban campus than a city school.",
  flags: ['Career-minded majors', 'Suburban campus', 'Car helps a lot', 'Easy to get in'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~2,600' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Tests', value: 'Optional' }
  ],

  sections: {
    vibe: {
      preview: 'Practical majors, friendly campus, medium social scene',
      meters: {
        party:    { value: 4, note: 'Some parties, not a party school' },
        campus:   { value: 7, note: 'Big, green and self-contained' },
        spirit:   { value: 4, note: 'Football and hockey get some crowds' },
        pressure: { value: 5, note: 'Engineering and pharmacy are the hard ones' },
        career:   { value: 8, note: 'Most majors point at a specific job' },
        greek:    { value: 1, note: 'Not a real part of campus life' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Campus events, sports and dorm friends. A car opens things up.',
      paragraphs: [
        "Social life is mostly on campus. Freshman dorms, clubs, teams and the campus center are where people meet. The school runs weekend events and trips, and students who show up to things say it's easy to find a group.",
        "The campus sits in a residential part of Springfield, a few miles from downtown. There isn't much in walking distance, so people with cars get around more. Plenty of students head home on some weekends, which can make Saturdays quiet.",
        "Plenty of students play a sport, and the athletes are a big part of the social scene. If you're not into sports or big parties, clubs and your floor are how you'll find people."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'A large majority of applicants are admitted. Solid grades in a normal high school schedule will usually do it.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some programs ask for more.', text: 'Engineering and pharmacy want strong math and science grades. Getting into the school is easier than doing well in those majors.' },
        { title: 'Merit aid is common.', text: "Like a lot of private schools, WNE gives many students scholarships. The sticker price is not what most people pay." }
      ]
    },

    who: {
      preview: 'Practical, mostly New England kids with a job in mind',
      paragraphs: [
        "Mostly students from Massachusetts, Connecticut and the rest of the Northeast who want a degree that leads somewhere. Engineering, business, pharmacy, criminal justice, psychology and pre-law are big. A lot of students play a sport.",
        "It fits people who want a real campus without a huge school around them. It's not a place for people who want a big city or a famous name. Students say the people are friendly and down to earth."
      ]
    },

    knownFor: {
      preview: 'Engineering, pharmacy, a law school and small classes',
      points: [
        { title: 'Engineering and business', text: 'These are two of the biggest colleges on campus. Classes are small, and professors teach them, not grad students.' },
        { title: 'Pharmacy', text: 'The College of Pharmacy and Health Sciences offers a Doctor of Pharmacy. It draws a lot of students who already know they want that path.' },
        { title: 'Its own law school', text: 'The School of Law is on the same campus. Undergrads interested in law can see it up close and should ask about faster routes into it.' },
        { title: 'Started in the city', text: 'It began in 1919 as a Springfield branch of Northeastern and was a commuter school for years. It opened its current campus in 1959 and became a university in 2011.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is outdated. "Nothing to do" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'outdated', text: "That's where it started. Today it's a residential campus with dorms and weekend events. Some commuters are still around, and the school has a lounge and council for them." },
        { said: "There's nothing to do around here.", verdict: 'half', text: "Walking distance, not much. With a car, you have Springfield, Six Flags, the Big E, Northampton and Hartford. Boston is about 90 minutes away." },
        { said: "It's a safety school.", verdict: 'half', text: "For a lot of people it is a backup, and that's fine. But engineering and pharmacy are real work, and lots of students pick it first for those programs." },
        { said: "Everyone's an athlete.", verdict: 'half', text: "Not everyone, but a big share of students play a varsity or club sport. It shapes the social scene more than at bigger schools." }
      ]
    },

    mythsAndKnow: {
      preview: "It's not in downtown Springfield. A car helps. Look at net price.",
      myths: [
        { title: "It's in the middle of the city.", text: "It's in a residential neighborhood on the east side of Springfield. The campus feels suburban, with lots of grass and parking lots." },
        { title: 'Easy to get in means easy classes.', text: 'Admission is open to a lot of people, but engineering, pharmacy and the sciences have tough courses. People do fail out of them.' }
      ],
      know: [
        { title: 'A car helps.', text: "Campus is a few miles from downtown and the train station. You can get by without one, but people with cars get out more." },
        { title: 'Weekends can be quiet.', text: 'Plenty of students live within driving distance and go home sometimes. Clubs and campus events are what keep weekends busy.' },
        { title: 'Ask about combined degrees.', text: 'With pharmacy, law and grad programs on the same campus, there are often faster paths to an advanced degree. Ask what fits your major.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a practical degree on a calm campus. Rough if you want a city.',
      love: ['You know you want engineering, business, pharmacy or law', 'You want small classes and professors who know you', 'You want a real campus that is not huge', 'You want to play a sport at a small school'],
      struggle: ['You want a city right outside your door', "You don't have a car and hate being stuck", 'You want a big-name school or a huge party scene']
    },

    people: {
      preview: 'Friendly people and small classes win. Location and quiet weekends are the complaints.',
      plus: ['Small classes and approachable professors', 'Practical majors with clear job paths', 'The campus is roomy and easy to get around'],
      minus: ['Not much in walking distance', 'Weekends can feel empty when people go home', 'Some say the social scene is a bit small']
    }
  }
});
