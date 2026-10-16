registerSchool({
  id: 'risd',
  name: 'RISD',
  nameSub: 'Rhode Island School of Design',
  state: 'Rhode Island',
  location: 'Providence, RI · College Hill, next to Brown',
  asOf: '2026',

  colors: {
    name: 'Nads · RISD blue',
    swatches: ['#003DA5', '#F2F2F2'],
    band: '#003DA5',
    onBand: '#FFFFFF',
    onBandMuted: '#C9D6F0',
    stripe: '#000000',
    accent: '#003DA5',
    accentOnDark: '#8DAEF0'
  },

  vibe: "An art and design school where almost everyone is a maker. Studios stay open late, people are intense about their work, and the whole campus is on a hill in Providence next to Brown.",
  flags: ['Art school', 'Portfolio required', 'Studio all night', 'Very selective'],
  facts: [
    { label: 'Setting', value: 'Urban' },
    { label: 'Undergrads', value: '~2,200' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Mostly club' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Creative, intense, studio-heavy, not a sports school',
      meters: {
        party:    { value: 4, note: 'Art shows, house parties and dorm hangouts' },
        campus:   { value: 5, note: 'Buildings spread across a hill in the city' },
        spirit:   { value: 1, note: 'Pride in the work, not in teams' },
        pressure: { value: 8, note: 'Long studio hours and constant critiques' },
        career:   { value: 7, note: 'A well-known name in design and art' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 0, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friends come from your studio. Free time is rare, but people make it count.',
      paragraphs: [
        "Your social life mostly happens in the studio. You spend hours next to the same group of people, so friendships form fast. Students say it can feel like a small town of makers where everyone is working on something.",
        "Weekends are a mix of working and going out. Student shows, openings, house parties and dorm hangouts are the usual plans. Big, loud party culture is not the thing here.",
        "Brown is next door, and RISD students can take classes there. That gives you a bigger crowd to meet if you want one. Downtown Providence is a short walk, with food, thrift stores and venues."
      ]
    },

    gettingIn: {
      preview: 'Very selective, and your portfolio matters most.',
      points: [
        { title: 'It is hard to get into.', text: 'The acceptance rate is low. Strong applicants get turned away every year.' },
        { title: 'The portfolio is the main thing.', text: 'You send a body of work, and you do a drawing assignment too. Grades matter, but the art is what stands out.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Everyone starts with Foundation Year.', text: 'First-years take shared drawing and design classes before picking a major, no matter what they applied for.' }
      ]
    },

    who: {
      preview: 'Artists, designers and makers who are serious about their craft',
      paragraphs: [
        "People who have been drawing, building or designing for years and want to do it all day. Students come from all over the country and the world, and a lot of them were the art kid at their old school.",
        "Majors include illustration, industrial design, architecture, graphic design, fashion (apparel design), film and fine arts. People are creative, a bit quirky, and usually proud of it."
      ]
    },

    knownFor: {
      preview: 'One of the top art schools in the country, with a big museum and Brown next door',
      points: [
        { title: 'Top art and design name', text: 'RISD is one of the best-known art schools in the US. Its name carries weight in design, illustration and architecture.' },
        { title: 'The RISD Museum', text: 'A large art museum on campus that students can use for classes and inspiration.' },
        { title: 'Brown cross-registration', text: 'RISD and Brown have shared classes for a very long time. You can take courses across the street.' },
        { title: 'The Nads and Scrotie', text: "The hockey team is the Nads and the unofficial mascot is Scrotie. It's a joke the school fully leans into." }
      ]
    },

    stereotypes: {
      preview: '"Nobody sleeps" is true. "It is all for fun" is a myth.',
      items: [
        { said: 'Nobody sleeps.', verdict: 'true', text: 'Studio projects take a lot of time. All-nighters are common around critiques.' },
        { said: 'Everyone dresses like an art kid.', verdict: 'half', text: 'Style is a big thing here and people take risks with it. But plenty of students dress normally.' },
        { said: 'You just draw and play around all day.', verdict: 'myth', text: 'The workload is heavy. You also take liberal arts classes in writing, history and more.' },
        { said: 'RISD students look down on Brown students.', verdict: 'half', text: 'There is some friendly rivalry, but plenty of people share classes, friends and parties across the two schools.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Supplies cost real money. The workload is big.',
      myths: [
        { title: 'You need to be a perfect artist to get in.', text: 'Admissions looks at your potential and how you think. A polished portfolio helps, but they know you are still learning.' },
        { title: 'An art degree means no job.', text: 'Graduates work in design, animation, product, architecture, fashion and tech. The brand name opens doors.' }
      ],
      know: [
        { title: 'Supplies add up.', text: 'Materials, printing and equipment cost real money on top of tuition. Ask about it early.' },
        { title: 'Sports are small.', text: 'There is not a big varsity scene. Hockey and a few club teams are the main sports.' },
        { title: 'You pick a major after Foundation Year.', text: 'Many students change their minds during the first year, and that is expected.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if art is your life. Rough if you want a regular college experience.',
      love: ['You live to make things', 'You want a school full of creative people', 'You want access to Brown classes too', 'You want a city campus'],
      struggle: ['You want a big sports scene', 'You are not sure you want to do art as your main thing', 'You want a lot of free time']
    },

    people: {
      preview: 'Creative community and studios win. Workload and cost are the complaints.',
      plus: ['Studios and facilities are great', 'Classmates are creative and driven', 'Providence is a good college city'],
      minus: ['Workload can be exhausting', 'Supplies and costs add up', 'Little school spirit or sports']
    }
  }
});
