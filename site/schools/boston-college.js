registerSchool({
  id: 'boston-college',
  name: 'BC',
  nameSub: 'Boston College',
  state: 'Massachusetts',
  location: 'Chestnut Hill, MA · Edge of Boston',
  asOf: '2026',

  colors: {
    name: 'Eagles · Maroon and gold',
    swatches: ['#8A100B', '#B29D6C'],
    band: '#8A100B',
    onBand: '#FFFFFF',
    onBandMuted: '#DCCAA0',
    stripe: '#B29D6C',
    accent: '#8A100B',
    accentOnDark: '#DCCAA0'
  },

  vibe: "A pretty Gothic campus on a hill with big-time sports and a work hard, play hard crowd. It feels like a classic college bubble, with Boston a train ride away.",
  flags: ['Classic campus', 'Big game days', 'Jesuit Catholic', 'No frats'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~9,500' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Greek life', value: 'None official' }
  ],

  sections: {
    vibe: {
      preview: 'Tight campus bubble, lots of school spirit, social and driven',
      meters: {
        party:    { value: 7, note: 'Busy weekends, especially in the fall' },
        campus:   { value: 9, note: 'Gothic buildings on a hill' },
        spirit:   { value: 8, note: 'Football tailgates and hockey' },
        pressure: { value: 7, note: 'Smart, ambitious crowd' },
        career:   { value: 8, note: 'Strong business school and alumni network' },
        greek:    { value: 1, note: 'Not officially recognized' },
        religion: { value: 6, note: 'Jesuit school, required theology, practice is up to you' }
      }
    },

    social: {
      preview: 'Campus-centered. Tailgates, dorm parties and Marathon Monday.',
      paragraphs: [
        "Social life mostly happens on or right around campus. With no official Greek life, weekends are dorm parties, off-campus houses and nights out in Cleveland Circle and Boston. Fall football Saturdays are the high point, with tailgates all day.",
        "A lot of freshmen live on Upper Campus. Some live on Newton Campus, about a mile and a half away, and ride a shuttle to class. People argue about which is better, but both are close-knit freshman bubbles.",
        "Marathon Monday is the biggest day of the year. The Boston Marathon runs right past campus near Heartbreak Hill, and the whole school is out on the course."
      ]
    },

    gettingIn: {
      preview: 'Very selective. Test-optional. Apply early if it is your top pick.',
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away. Treat it as a reach unless your grades are near the top of your class.' },
        { title: 'Early decision helps.', text: "BC has early decision rounds. If it's your clear first choice, applying ED can help." },
        { title: 'Tests are optional.', text: 'BC is test-optional, but it says scores help when you send them. Check the current policy before you apply.' },
        { title: "Show you get what BC is about.", text: 'It is a Jesuit school that talks a lot about service and "men and women for others." Showing you care about that in your essays fits what they look for.' }
      ]
    },

    who: {
      preview: 'Social, athletic, put-together, mostly from the Northeast',
      paragraphs: [
        "A lot of students come from the Northeast, especially Massachusetts, New York, New Jersey and Connecticut. Many went to private or Catholic high schools. People tend to be social, involved, into fitness and pretty put-together.",
        "Popular paths are business through the Carroll School of Management, nursing, education, economics and pre-med. It's ambitious, but more balanced than a pure grind school. People study hard and go out hard."
      ]
    },

    knownFor: {
      preview: 'The campus, big-time sports, the Jesuit core and business',
      points: [
        { title: 'The campus', text: 'Gothic stone buildings on Chestnut Hill. It looks the way most people picture college.' },
        { title: 'Big-time sports', text: 'BC plays in the ACC, so you get real Division I football Saturdays. Hockey is a powerhouse too, and the Beanpot against BU, Northeastern and Harvard is a big deal.' },
        { title: 'The core', text: 'Everyone takes a broad set of required classes, including theology and philosophy. Some love it, some see it as a box to check.' },
        { title: 'Business and service', text: 'The Carroll School of Management is a big draw. Service trips and volunteering are a real part of the culture.' }
      ]
    },

    stereotypes: {
      preview: '"Preppy and rich" is half true. "Super religious" is mostly a myth.',
      items: [
        { said: "It's all preppy kids in Patagonias.", verdict: 'half', text: "There's a real look here: fleece, quarter-zips and clean-cut outfits. Plenty of students fit it, plenty don't. You'll notice it on day one, though." },
        { said: "Everyone's rich.", verdict: 'half', text: "A lot of students come from well-off families and private schools. There are also many students on aid. The money can be noticeable." },
        { said: "It's super religious.", verdict: 'myth', text: 'BC is Jesuit Catholic, and you will take theology. But most students are not there for religion, and nobody makes you go to Mass. It is there if you want it.' },
        { said: 'Work hard, play hard.', verdict: 'true', text: 'This is the one most students agree with. People take classes seriously during the week and go out a lot on weekends.' }
      ]
    },

    mythsAndKnow: {
      preview: "It's not really in the city. No frats. You will take theology.",
      myths: [
        { title: "It's a Boston city school.", text: "BC is in Chestnut Hill at the very end of the Green Line B branch. Getting downtown takes a while. It's a suburban campus with the city nearby." },
        { title: 'No Greek life means no parties.', text: 'The social scene is busy without frats. It runs on dorms, off-campus houses, tailgates and bars instead.' }
      ],
      know: [
        { title: 'The core is required.', text: 'Plan on theology and philosophy classes no matter your major.' },
        { title: 'Newton Campus is a real possibility.', text: "Some freshmen live on Newton Campus and take a shuttle. It's a tight community, but it's a bit away from the action." },
        { title: 'The B line is slow.', text: 'The Green Line gets you to Boston, but the B branch is known for being slow. Budget time for trips into the city.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a classic campus and game days. Rough if you want a big city or frats.',
      love: ['You want a beautiful classic campus', 'You want football Saturdays and school spirit', 'You like being social and busy', 'You want a strong network after you graduate'],
      struggle: ['You want Greek life', 'You want to live in the middle of a city', "You don't want any required religion classes"]
    },

    people: {
      preview: 'The campus and spirit win people over. Sameness and cost are the complaints.',
      plus: ['The campus is beautiful', 'Game days and Marathon Monday are unforgettable', 'Alumni are loyal and well connected'],
      minus: ['The crowd can feel a little all the same', "It's expensive", 'Getting into Boston takes longer than you expect']
    }
  }
});
