registerSchool({
  id: 'bentley',
  name: 'Bentley',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Waltham, MA · Suburbs west of Boston',
  asOf: '2026',

  colors: {
    name: 'Falcons · Blue, gold and black',
    swatches: ['#0075BE', '#FFCC33', '#000000'],
    band: '#0B0B0B',
    onBand: '#FFFFFF',
    onBandMuted: '#B9C7D6',
    stripe: '#0075BE',
    accent: '#0075BE',
    accentOnDark: '#FFCC33'
  },

  vibe: "A business school with a campus attached. Almost everyone is there to get a good job, and recruiting starts early. It's friendly and polished, but it's not where you go to figure out if you even like business.",
  flags: ['Business-focused', 'Recruiting starts early', 'Shuttle to Boston', 'Smaller school'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~4,500' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Medium' }
  ],

  sections: {
    "living": {"preview": "Mostly residential and compact; food is fine, with Boston nearby.", "housing": ["Most first-years live on campus, and a lot of students stay on campus for years.", "Housing is a mix of traditional dorms and suites or apartments.", "Some upperclassmen move off campus in the Waltham area."], "food": ["There is a main dining hall plus smaller spots around campus.", "Students usually call the food fine, not amazing.", "Waltham has lots of restaurants, and Boston is easy to reach."]},
    vibe: {
      preview: 'Career-first, polished, medium social scene',
      meters: {
        party:    { value: 5, note: 'Dorm and Greek parties, plus trips to Boston' },
        campus:   { value: 7, note: 'Hilly, compact and well kept' },
        spirit:   { value: 4, note: 'Hockey games draw the crowds' },
        pressure: { value: 6, note: 'Grades and internships both matter' },
        career:   { value: 10, note: 'Recruiting is the whole point' },
        greek:    { value: 5, note: 'About 1 in 5 students join' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Campus-based and close-knit. Boston is a shuttle ride away.',
      paragraphs: [
        "Almost everyone lives on campus, so dorms, clubs and teams are where life happens. The school is small enough that you see the same faces a lot. People describe it as friendly but a little cliquey.",
        "Greek life is a real part of the scene. Bentley says about 20 percent of undergrads join, so it matters more here than at many Boston-area schools. The party scene is medium, not wild.",
        "Waltham has a good restaurant strip on Moody Street. The school runs shuttles to Waltham and into Cambridge, and from there the T gets you anywhere in Boston."
      ]
    },

    gettingIn: {
      preview: 'Selective, but realistic for solid students. Apply early if you can.',
      points: [
        { title: "It's selective.", text: 'Roughly half or fewer of applicants get in. Good grades in hard classes, especially math, help a lot.' },
        { title: 'Early options exist.', text: 'Bentley offers early decision and early action. If it is your top choice, early decision can help.' },
        { title: 'Tests are optional.', text: "You can apply without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Show interest in business.', text: "You don't need a perfect plan, but it helps if your essays show why a business school makes sense for you." }
      ]
    },

    who: {
      preview: 'Business-minded, career-focused, a bit preppy',
      paragraphs: [
        "People who already know they want to work in business. Finance, accounting, marketing and management are the big majors. Lots of students are from Massachusetts, the rest of the Northeast, and overseas.",
        "Many students dress a little nicer than at other schools, and talking about internships is normal at lunch. If you want to explore lots of subjects before choosing, you'll feel boxed in. Bentley does have arts and sciences classes, but business is the center."
      ]
    },

    knownFor: {
      preview: 'Finance and accounting, getting hired, and DI hockey',
      points: [
        { title: 'Finance and accounting', text: 'These are its best-known programs. Big accounting firms and banks recruit on campus a lot.' },
        { title: 'Getting hired', text: "Bentley's career center is a big selling point. Internships start early, and most grads land jobs quickly." },
        { title: 'Business plus something else', text: 'Many students add a liberal studies major on top of their business degree, like in tech or global perspectives.' },
        { title: 'Hockey', text: 'Most teams are Division II, but men\'s hockey plays Division I. Those games are the big sports event.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone dresses business casual" is half true. "Finance bros" is half true.',
      items: [
        { said: 'Everyone wears business casual to class.', verdict: 'half', text: "Most days it's normal college clothes. You'll see a lot more blazers than at other schools, though, because of interviews and recruiting events." },
        { said: "It's all finance bros.", verdict: 'half', text: "Finance is huge and has that crowd. But accounting, marketing and other majors are big too, and plenty of people don't fit the type." },
        { said: "Everyone's obsessed with internships.", verdict: 'true', text: "Recruiting starts early, sometimes sophomore year. It's a big part of campus life, for better and worse." },
        { said: "It's just a backup for bigger business schools.", verdict: 'half', text: 'Some students did apply to bigger names. Others pick Bentley on purpose for its job placement and smaller size.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Not just accounting, recruiting is early, and you can get to Boston',
      myths: [
        { title: "It's only for accounting.", text: "Accounting is strong, but finance, marketing, CIS and management are just as popular." },
        { title: "You're stuck in the suburbs.", text: 'Campus is quiet, but the school shuttles and nearby trains make Boston and Cambridge easy to reach.' }
      ],
      know: [
        { title: 'Recruiting starts early.', text: 'Expect career events and internship talk from your first year. It helps if you are ready for it.' },
        { title: 'Campus is hilly.', text: 'The dorms sit uphill from the academic side. Lots of stairs.' },
        { title: 'A car helps but is not required.', text: 'Shuttles cover Waltham and the trip toward Boston. A car makes weekend trips easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know you want business. Rough if you are undecided.',
      love: ['You know you want a business career', 'You want internships and jobs lined up early', 'You like a smaller campus near Boston'],
      struggle: ['You want to explore lots of subjects first', 'You want a big sports or party scene', 'Career talk all the time would wear you down']
    },

    people: {
      preview: 'Job results are the win. Cliques and career pressure are the complaints.',
      plus: ['Recruiting and job placement are excellent', 'Small classes and helpful professors', 'Clean, safe campus close to Boston'],
      minus: ['Not much variety if business is not your thing', 'Social scene can feel small and cliquey', "It's expensive"]
    }
  }
});
