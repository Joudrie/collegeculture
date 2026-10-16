registerSchool({
  id: 'brown',
  name: 'Brown',
  nameSub: 'University',
  state: 'Rhode Island',
  location: 'Providence, RI · College Hill',
  asOf: '2026',

  colors: {
    name: 'Bears · Brown, red and white',
    swatches: ['#4E3629', '#ED1C24', '#FFFFFF'],
    band: '#4E3629',
    onBand: '#FFFFFF',
    onBandMuted: '#E8D9CF',
    stripe: '#ED1C24',
    accent: '#4E3629',
    accentOnDark: '#FFC72C'
  },

  vibe: "An Ivy where you pick your own classes and nobody makes you take anything you don't want. It's laid back on the surface, but people are working hard on whatever they chose.",
  flags: ['No core classes', 'Tests required', 'RISD next door', 'Small city campus'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~7,200' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Freedom to pick your classes, relaxed vibe, quiet sports scene',
      meters: {
        party:    { value: 5, note: 'Dorm parties, house parties, Spring Weekend' },
        campus:   { value: 8, note: 'Brick buildings and greens on a hill' },
        spirit:   { value: 3, note: 'Few people follow the sports teams' },
        pressure: { value: 6, note: 'People work hard but compare less' },
        career:   { value: 8, note: 'Ivy name and a strong alumni network' },
        greek:    { value: 2, note: 'Exists, easy to ignore' },
        religion: { value: 2, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Campus-centered, with Thayer Street and Providence close by',
      paragraphs: [
        "Most students live on campus, and freshmen are grouped together, so it's easy to meet people early. Dining halls like the Ratty are where a lot of friendships start.",
        "The party scene is there but not the center of everything. Weekends are dorm and house parties, shows, club events and hanging out on Thayer Street. Greek life is small. Spring Weekend, a big concert on campus, is the one time almost everyone goes out together.",
        "Providence is a real city with good food and the arts. RISD sits right next door, so art students and Brown students cross paths, and you can take classes there too."
      ]
    },

    gettingIn: {
      preview: 'One of the hardest schools to get into. Tests are required.',
      points: [
        { title: "It's a reach for everyone.", text: 'Even students with perfect grades and scores get turned down every year. Apply, but never count on it.' },
        { title: 'SAT or ACT is required.', text: 'Brown brought back the testing requirement after its test-optional years. Check the current policy before you apply.' },
        { title: 'Early decision is binding.', text: "If you apply early and get in, you're going. Only do it if Brown is clearly your first choice." },
        { title: 'Show why the Open Curriculum.', text: 'Brown wants to see that you are curious and would actually use the freedom to build your own path.' }
      ]
    },

    who: {
      preview: 'Curious, independent people who want to choose their own path',
      paragraphs: [
        "People who are smart and curious about a lot of things, and who want to steer their own education. You'll meet engineers who take dance, pre-meds who study history, and plenty of students double concentrating.",
        "It fits self-starters. Nobody hands you a plan, so if you like structure and clear requirements, the freedom can feel overwhelming at first."
      ]
    },

    knownFor: {
      preview: 'The Open Curriculum, happy students and RISD next door',
      points: [
        { title: 'The Open Curriculum', text: "There are no core classes everyone has to take. You pick a concentration (Brown's word for major) and choose the rest yourself." },
        { title: 'Flexible grading', text: 'You can take any class Satisfactory/No Credit instead of a letter grade. There are no pluses or minuses, and failed classes do not show up on your outside transcript.' },
        { title: 'RISD', text: 'The Rhode Island School of Design is next door. There is even a five-year dual degree program for students who get into both.' },
        { title: 'The eight-year med program', text: 'PLME lets some students get admitted to both college and Brown medical school straight out of high school.' }
      ]
    },

    stereotypes: {
      preview: '"Artsy and progressive" is mostly true. "Easy Ivy" is a myth.',
      items: [
        { said: "Everyone's artsy and progressive.", verdict: 'true', text: "The campus leans left politically, and arts are a big deal. But you'll also find plenty of engineers, econ students and future bankers." },
        { said: "It's the easy Ivy.", verdict: 'myth', text: "No requirements doesn't mean no work. Most students pick hard classes on purpose, and the concentrations themselves can be demanding." },
        { said: "It's the happy Ivy.", verdict: 'half', text: "Students do seem less stressed than at some peers, partly because of the flexible grading. People still burn out, they just compare less." },
        { said: "Nobody cares about sports.", verdict: 'half', text: "Game crowds are small compared to big schools. But Brown has lots of D1 teams, and athletes are a real part of campus." }
      ]
    },

    mythsAndKnow: {
      preview: 'There are still a few rules. Providence is better than people think.',
      myths: [
        { title: 'There are zero requirements.', text: 'You still have to finish a concentration and meet a writing requirement. You just choose everything else.' },
        { title: 'Grades are fake.', text: "There's no D and no pluses or minuses, but you still earn your A's and B's. Grad schools and employers know how it works." }
      ],
      know: [
        { title: 'Try classes early.', text: "You can add and drop classes early in each semester. Use that time to test a few, since you're choosing everything." },
        { title: 'Providence is a real city.', text: 'Great food, the arts scene and the train to Boston and New York. Campus sits up the hill from downtown.' },
        { title: 'Get an advisor early.', text: 'With no core, it helps to talk to an advisor about which classes actually lead where you want to go.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want freedom. Rough if you want structure or big game days.',
      love: ['You want to choose your own classes', 'You have lots of interests and want to explore', 'You like art, activism and a relaxed vibe', 'You want a small city nearby'],
      struggle: ['You want a clear set of required classes', 'You want a big sports and tailgate scene', 'You want a big Greek life scene']
    },

    people: {
      preview: 'Freedom and happy students. Cost and a sometimes one-sided vibe are the complaints.',
      plus: ['The Open Curriculum lets you build your own path', 'Students are collaborative, not cutthroat', 'Providence and RISD add a lot'],
      minus: ['Campus politics can feel one-sided', 'Freedom can feel overwhelming without a plan', "It's expensive without good aid"]
    }
  }
});
