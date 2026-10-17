registerSchool({
  id: 'babson',
  name: 'Babson',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Wellesley, MA · Wooded suburb west of Boston',
  asOf: '2026',

  colors: {
    name: 'Beavers · Green, gray and black',
    swatches: ['#006644', '#A3AAAE', '#000000'],
    band: '#006644',
    onBand: '#FFFFFF',
    onBandMuted: '#C2E3D4',
    stripe: '#A3AAAE',
    accent: '#006644',
    accentOnDark: '#4FC38F'
  },

  vibe: "A small business school where everyone is pitching an idea. You'll run a real business your first year, and people talk about startups the way other schools talk about sports.",
  flags: ['Business only', 'Startup culture', 'Small and tight-knit', 'Very hard to get in'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~2,800' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mostly residential, small campus; dining is okay and options are limited.", "housing": ["Most undergrads live on campus, especially early on.", "Housing is a mix of traditional dorms and suite-style rooms.", "The campus is small and a bit separate from the town of Wellesley."], "food": ["There are a few dining options on campus, so variety can get old.", "Residents usually have a meal plan.", "You will want a ride or the train to get to better food off campus."]},
    vibe: {
      preview: 'Entrepreneurial, small, career-focused, quiet suburb',
      meters: {
        party:    { value: 5, note: 'Small parties on campus, Boston for nights out' },
        campus:   { value: 7, note: 'Green and wooded, but small' },
        spirit:   { value: 3, note: 'Division III, small crowds' },
        pressure: { value: 6, note: 'Busy, with lots of group projects' },
        career:   { value: 9, note: 'Business is the whole point' },
        greek:    { value: 3, note: 'A few chapters, easy to skip' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Small and close-knit. You know everyone, for better or worse.',
      paragraphs: [
        "With under 3,000 undergrads, you'll know a lot of faces fast. Most students live on campus, so dorms and clubs are the center of social life. Group projects and your first-year business team also build friendships quickly.",
        "The party scene is small. There are campus parties and a few Greek chapters, but lots of people head into Boston on weekends. Without a car, that takes some planning.",
        "There's a big international crowd, which shapes the social scene. Friend groups sometimes split along where people are from."
      ]
    },

    gettingIn: {
      preview: 'Very selective. Most applicants are turned away.',
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away, and it has gotten harder in recent years. Treat it as a reach unless your grades are near the top.' },
        { title: 'Early decision helps.', text: "Babson has early decision and early action rounds. If it's your first choice, ED can help." },
        { title: 'Tests are optional.', text: "You can apply without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Show you build things.', text: "A side business, a club you started or a project you ran says more about fit here than a perfect GPA alone." }
      ]
    },

    who: {
      preview: 'Entrepreneurs, future founders, and people from family businesses',
      paragraphs: [
        "People who want to start something or run something. Some already have a small business or plan to join a family company. A lot of students come from abroad, and there's a strong crowd from New York, New Jersey and the rest of the Northeast.",
        "Everyone gets a business degree, so the classroom is all business all the time. If you love debating books or want to try lots of subjects, it can feel narrow. Babson does have liberal arts classes, but they're built around business."
      ]
    },

    knownFor: {
      preview: 'Entrepreneurship, FME, and a strong business network',
      points: [
        { title: 'Entrepreneurship', text: 'Babson has been ranked number one for undergrad entrepreneurship by U.S. News for years. It is the main reason people apply.' },
        { title: 'FME', text: 'In the first-year course, teams of students invent, launch and close a real business with startup money from the school. Profits go to charity.' },
        { title: 'Business careers', text: 'Grads go into finance, consulting, marketing and family businesses, and many start their own companies.' },
        { title: 'Neighbors', text: 'Olin College of Engineering is right next door and Wellesley College is close by. Students can take some classes across the three schools.' }
      ]
    },

    stereotypes: {
      preview: '"Rich kids" is half true. "Everyone has a startup" is half true.',
      items: [
        { said: "It's all rich kids.", verdict: 'half', text: "There is real wealth on campus, and you'll notice nice cars and clothes. But plenty of students are on aid, and not everyone is from money." },
        { said: 'Everyone runs a startup.', verdict: 'half', text: "Everyone runs one in FME. After that, some people keep building, but lots go into normal jobs like finance or consulting." },
        { said: "It's a family business school.", verdict: 'half', text: "A good number of students come from family businesses and plan to go back. It's common, not universal." },
        { said: "There's nothing to do.", verdict: 'half', text: "Wellesley is quiet and campus is small. People who plan trips into Boston do fine. People who wait for fun to find them get bored." }
      ]
    },

    mythsAndKnow: {
      preview: 'Not just for founders, Boston takes planning, look at aid',
      myths: [
        { title: 'You have to want to start a company.', text: "Lots of students go into finance, consulting or marketing. The entrepreneurship training helps there too." },
        { title: "It's part of Wellesley College.", text: "Babson is its own school. It's in the town of Wellesley, next to Olin, and the two are separate from Wellesley College." }
      ],
      know: [
        { title: 'FME is a lot of work.', text: 'Running a real business with a big team takes time and causes drama. It is also what many alumni remember most.' },
        { title: 'Getting to Boston takes planning.', text: 'Campus is in the suburbs. There are shuttles and a commuter train nearby, but no T stop on campus.' },
        { title: 'Group projects everywhere.', text: 'Many classes are built around team work, so expect lots of meetings.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want to build a business. Rough if you want a big school.',
      love: ['You want to start or run a business', 'You like hands-on, team-based classes', 'You want a small campus near Boston', 'You want a strong business network'],
      struggle: ['You want a big school with lots of majors', 'You want big-time sports or parties', 'You are not sure business is for you']
    },

    people: {
      preview: 'FME and the network are the wins. Size and cost are the complaints.',
      plus: ['FME teaches you more than most classes', 'Strong alumni network in business', 'Small classes and easy access to professors'],
      minus: ["It's expensive", 'Small social scene that can feel cliquey', 'Getting off campus takes effort']
    }
  }
});
