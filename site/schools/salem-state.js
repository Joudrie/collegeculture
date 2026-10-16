registerSchool({
  id: 'salem-state',
  name: 'Salem State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Salem, MA · North Shore, by the harbor',
  asOf: '2026',

  colors: {
    name: 'Vikings · Navy and orange',
    swatches: ['#00205B', '#D24700'],
    band: '#00205B',
    onBand: '#FFFFFF',
    onBandMuted: '#C9CFE3',
    stripe: '#D24700',
    accent: '#D24700',
    accentOnDark: '#F47D2F'
  },

  vibe: "An affordable state school in the witch city, a short walk from the water. Lots of commuters and working students, and a campus split into a few parts. October is wild.",
  flags: ['Affordable', 'Lots of commuters', 'Halloween town', 'Near the ocean'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~4,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Laid back, practical, a cool town, light on school spirit',
      meters: {
        party:    { value: 4, note: 'Small parties and bars downtown' },
        campus:   { value: 5, note: 'A few campuses, some near the water' },
        spirit:   { value: 3, note: 'Hockey gets a crowd, no football' },
        pressure: { value: 3, note: 'Low key for most majors' },
        career:   { value: 6, note: 'Nursing, teaching and business pipelines' },
        greek:    { value: 2, note: 'A few chapters, most people skip it' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Dorms and clubs are where friends happen. Downtown Salem helps.',
      paragraphs: [
        "A lot of students commute and many work part time, so campus can clear out after classes. If you live in the dorms, that's where most friend groups start. Students who join clubs or teams say it's easy to find people. Students who don't say it can feel quiet.",
        "Downtown Salem is the upside. It's a walkable little city with coffee shops, restaurants, the waterfront and a lot of weird history. In October the whole town turns into a Halloween festival and gets packed with tourists.",
        "The commuter rail runs from Salem to Boston, so the city is about 30 minutes away by train when you want more to do."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Your high school grades matter most.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. If your GPA is on the low side, the school may ask for more, like scores or a letter. Check the current policy before you apply." },
        { title: 'Nursing is harder to get into.', text: 'Popular health programs fill up and can have higher bars than the school overall. Apply early if that is your plan.' },
        { title: 'In-state cost is low.', text: 'Massachusetts residents pay much less than at a private school, and state aid can cover a lot for lower and middle income families.' }
      ]
    },

    who: {
      preview: 'North Shore locals, working students, future nurses and teachers',
      paragraphs: [
        "Mostly students from Massachusetts, especially the North Shore and the Boston area. Many are first in their family to go to college, and a lot of people balance school with a job.",
        "Popular majors include nursing, business, education, social work, criminal justice and psychology. People are practical and laid back. It fits someone who wants an affordable degree and a cool town more than a classic rah-rah campus."
      ]
    },

    knownFor: {
      preview: 'The witch city, nursing and teaching, and a cheap degree',
      points: [
        { title: 'Salem itself', text: 'Witch trial history, museums, shops and a giant month-long Halloween celebration. Not many schools have a town this distinct.' },
        { title: 'Nursing and health', text: 'Nursing is one of the most popular programs, with clinical spots at hospitals around the North Shore and Boston.' },
        { title: 'Teaching and social work', text: 'A lot of North Shore teachers and social workers went here.' },
        { title: 'Being near the ocean', text: 'Part of campus sits close to the water, and Salem Harbor and the beaches are close by.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is mostly true. "Everyone is a witch" is a joke.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: "A big chunk of students commute and it shapes the vibe. There are dorms and a real residential crowd, but campus is quieter at night and on weekends than a typical college." },
        { said: "Everyone's into witches and Halloween.", verdict: 'half', text: "It's a running joke and some students love it. Most people just enjoy October and avoid downtown traffic the rest of the time." },
        { said: "There's no school spirit.", verdict: 'half', text: "There's no football, so no big game days. Hockey games can get a decent crowd, and the people who care really care." },
        { said: "It's a last resort school.", verdict: 'myth', text: "Lots of students pick it on purpose for the price, nursing or staying near home. The degree is respected around the region." }
      ]
    },

    mythsAndKnow: {
      preview: 'Campus is split up, October is chaos, the train is close',
      myths: [
        { title: 'Easy to get in means easy classes.', text: 'Nursing and science courses are real work. Small classes mean professors notice if you are not keeping up.' },
        { title: 'Salem is only fun in October.', text: 'The rest of the year it is a nice, walkable small city with food, the waterfront and a lot less traffic.' }
      ],
      know: [
        { title: 'Campus is in a few pieces.', text: 'Salem State has several campuses close to each other. Depending on your classes and dorm, you may walk between them a lot.' },
        { title: 'October is intense.', text: 'Huge crowds come to Salem for Halloween. Expect traffic, packed trains and very full streets on weekends.' },
        { title: 'The train goes to Boston.', text: 'The commuter rail stops in Salem, so you can get into the city without a car.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want cheap and a cool town. Rough if you want a big campus scene.',
      love: ['You want an affordable degree close to home', 'You want nursing, teaching or social work', 'You like a quirky town by the ocean', 'You need to work while in school'],
      struggle: ['You want a busy campus every weekend', 'You want big sports and game days', 'You want one compact campus']
    },

    people: {
      preview: 'Price and the town win. Commuter quiet and spread-out campus are the complaints.',
      plus: ['Affordable for Massachusetts students', 'Salem is a fun place to live', 'Small classes and helpful professors'],
      minus: ['Campus feels empty when commuters leave', 'Getting between campuses can be annoying', 'Not much school spirit']
    }
  }
});
