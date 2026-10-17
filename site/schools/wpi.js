registerSchool({
  id: 'wpi',
  name: 'WPI',
  nameSub: 'Worcester Polytechnic',
  state: 'Massachusetts',
  location: 'Worcester, MA · Quiet residential side of the city',
  asOf: '2026',

  colors: {
    name: 'Engineers · Crimson and gray',
    swatches: ['#AC2B37', '#A9B0B7', '#000000'],
    band: '#A9B0B7',
    onBand: '#111111',
    onBandMuted: '#3A3D42',
    stripe: '#AC2B37',
    accent: '#AC2B37',
    accentOnDark: '#FF7A85'
  },

  vibe: "A hands-on tech school where you learn by building things for real people. Terms are short and fast, and the crowd is nerdy in a friendly, collaborative way.",
  flags: ['7-week terms', 'Project-based', 'STEM-heavy', 'Big Greek scene'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~5,500' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football (D3)' },
    { label: 'Greek life', value: 'Big' }
  ],

  sections: {
    "getThere": {"preview": "Worcester Union Station has commuter rail and buses", "points": ["Worcester has a commuter rail line to Boston and a city bus system. Both are slower than a car.", "Boston Logan is the main airport. Worcester and Hartford have smaller options.", "You can get by without a car, but a car gives you more freedom. Check the school's rules on first-year cars."]},
    "living": {"preview": "Lots of students live on campus; food is fine and near downtown Worcester.", "housing": ["First-years usually live on campus.", "After that, many students choose apartments and houses near campus.", "The campus is in a city neighborhood, so off-campus living is common."], "food": ["There is a main dining hall plus a few other spots on campus.", "Students generally call the food okay.", "Worcester has lots of restaurants, though you may need a short ride."]},
    vibe: {
      preview: 'Fast terms, real projects, nerdy but social',
      meters: {
        party:    { value: 4, note: 'Mostly frat parties and small hangouts' },
        campus:   { value: 6, note: 'Compact and pretty, right next to a big park' },
        spirit:   { value: 4, note: 'D3 sports, more pride in projects than games' },
        pressure: { value: 8, note: 'Seven-week terms move fast' },
        career:   { value: 9, note: 'Engineering and CS grads get hired' },
        greek:    { value: 6, note: 'A real chunk of campus joins' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Frats, clubs and project teams. Small enough to know people.',
      paragraphs: [
        "With around 5,000 undergrads, you'll recognize faces everywhere. Freshman dorms and project teams are where most friend groups start. You spend so much time working in groups that you end up knowing a lot of people.",
        "Greek life is a big part of the weekend. A good share of students join, and frat parties are a main option. If that's not your thing, there are gaming nights, robotics, a cappella, theater and tons of clubs.",
        "Worcester has more going on than people think, with restaurants, a minor league ballpark and other colleges nearby. Boston is about an hour away by Commuter Rail for a bigger day out."
      ]
    },

    gettingIn: {
      preview: 'Selective. Strong math and science grades matter most.',
      points: [
        { title: "It's selective.", text: 'More than half of applicants get in, but they are strong students. Your math and science classes carry a lot of weight.' },
        { title: 'Tests are optional.', text: 'WPI tried a test-blind policy for a few years, then went back to test-optional. Check the current policy before you apply.' },
        { title: 'Early options help.', text: "There are early action and early decision rounds. If it's your top pick, apply early." },
        { title: 'Show you like building things.', text: 'Robotics, coding projects, science fairs, even fixing cars. Hands-on stuff fits what WPI is about.' }
      ]
    },

    who: {
      preview: 'Engineers, coders and builders who like working in teams',
      paragraphs: [
        "Mostly engineering, computer science, robotics and science students. There are a few business and humanities majors, but almost everyone has a technical streak. Lots of students come from New England, New York and New Jersey.",
        "People here like to make things work. It's less cutthroat than some tech schools because so much of the grade comes from team projects. Gamers, robotics kids and outdoorsy types all fit in."
      ]
    },

    knownFor: {
      preview: 'Project-based learning, 7-week terms and job outcomes',
      points: [
        { title: 'The WPI Plan', text: 'You do big required projects. The IQP, usually junior year, has you solving a real problem for a community, often at a project center abroad. The MQP is a senior project in your major.' },
        { title: 'Seven-week terms', text: 'The year is split into four short terms. You take about three classes at a time and finish them fast.' },
        { title: 'Robotics and engineering', text: 'WPI was one of the first schools to offer a robotics engineering degree. Engineering and CS are its strongest names.' },
        { title: 'Good job outcomes', text: 'Employers know the school. The project work gives you real things to talk about in interviews.' }
      ]
    },

    stereotypes: {
      preview: '"Nerd school" is mostly true. "No social life" is half true.',
      items: [
        { said: "It's a total nerd school.", verdict: 'true', text: "Pretty much, and students own it. People are into games, robots and code. It's a friendly kind of nerdy, not a snobby one." },
        { said: "There's no social life.", verdict: 'half', text: "It's not a big party school, but Greek life and clubs keep weekends busy. You'll find something if you look." },
        { said: 'The workload is brutal.', verdict: 'true', text: 'Seven-week terms mean midterms come fast and there is no time to coast. The upside is a bad class is over quickly.' },
        { said: 'Worcester is sketchy.', verdict: 'half', text: "Some parts of the city are rough, like any city. The area right around campus is residential and pretty quiet." }
      ]
    },

    mythsAndKnow: {
      preview: 'Not just engineering, terms fly by, and the ratio is uneven',
      myths: [
        { title: "It's only for engineers.", text: 'Engineering is the core, but there are majors in science, business, game design and more. Still, expect a technical feel everywhere.' },
        { title: "You'll be stuck in Worcester.", text: 'A lot of students leave for an IQP project center somewhere else for a term. Plenty go abroad.' }
      ],
      know: [
        { title: 'Terms go fast.', text: 'Seven weeks per class. Falling behind for one week is a big deal, so stay on it.' },
        { title: 'More guys than girls.', text: "Men still outnumber women by a lot. It's better than it used to be, but you'll notice it." },
        { title: 'Group work is everywhere.', text: 'Projects mean lots of teamwork. You learn to deal with every kind of partner.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you like building things. Rough if you want a big party school.',
      love: ['You like hands-on projects more than lectures', 'You want a small, collaborative tech school', 'You want to work on a project abroad', 'You want strong job prospects in STEM'],
      struggle: ['You want big game days and tailgates', 'You want a wide mix of majors', 'You hate fast deadlines']
    },

    people: {
      preview: 'Projects and outcomes are the wins. Pace and cost are the complaints.',
      plus: ['The projects are real and look great on a resume', 'Students help each other more than they compete', 'Short terms mean a bad class ends fast'],
      minus: ['The pace can be exhausting', "It's expensive", 'The social scene leans on Greek life']
    }
  }
});
