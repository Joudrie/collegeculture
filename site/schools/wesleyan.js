registerSchool({
  id: 'wesleyan',
  name: 'Wesleyan',
  nameSub: 'University',
  state: 'Connecticut',
  location: 'Middletown, CT · Small river city',
  asOf: '2026',

  colors: {
    name: 'Cardinals · Cardinal red and black',
    swatches: ['#D72121', '#000000'],
    band: '#D72121',
    onBand: '#FFFFFF',
    onBandMuted: '#FFF0F0',
    stripe: '#000000',
    accent: '#D72121',
    accentOnDark: '#FF7A7A'
  },

  vibe: "A small, artsy, very liberal school where you design your own path. People are into music, film, activism and arguing about ideas, and it's one of the more selective schools in the state.",
  flags: ['No core classes', 'Very selective', 'Artsy and activist', 'Small city'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~2,900' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Most students live on campus or in nearby houses, food is good", "housing": ["Most first-years and many upperclassmen live on campus.", "Many seniors live in houses owned by the school or in nearby apartments.", "Middletown is a small city, so campus is a big part of social life."], "food": ["There are a few dining halls and cafes.", "Students usually say the food is good.", "Main Street in Middletown has a number of local restaurants."]},
    vibe: {
      preview: 'Creative, political, open curriculum, not a sports school',
      meters: {
        party:    { value: 6, note: 'Student houses and theme parties' },
        campus:   { value: 7, note: 'Big hilltop campus, lots of old brick' },
        spirit:   { value: 3, note: 'Small crowds, but the rivalry games matter' },
        pressure: { value: 7, note: 'Self-driven, lots of reading and writing' },
        career:   { value: 5, note: 'Alumni network helps, but it is not the main pitch' },
        greek:    { value: 2, note: 'A few houses, easy to ignore' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Student-run houses, concerts, and a lot of activism',
      paragraphs: [
        "Social life is student-driven. Program houses, theme houses and a few society houses host parties, shows and events. Lots of people spend their weekends at a student band show, a film screening or a friend's house.",
        "Activism is a big part of campus. Students are quick to organize about causes they care about, and some people love that. Others say it can feel like there's one right opinion.",
        "The campus can feel like a bubble. Middletown has a small downtown with restaurants, and New Haven and Hartford are both a short drive away, but most people stay on campus."
      ]
    },

    gettingIn: {
      preview: 'Hard to get into. Tests are optional.',
      points: [
        { title: "It's very selective.", text: 'Most applicants are turned away. You need strong grades and a good reason you want an open curriculum.' },
        { title: 'Tests are optional.', text: 'You can apply without SAT or ACT scores. Check the current policy before you apply.' },
        { title: 'Early decision exists.', text: "If it's your first choice, applying early can help." },
        { title: 'Aid depends on need.', text: "It gives need-based aid, so what you pay depends on your family's finances. Use the net price calculator." }
      ]
    },

    who: {
      preview: 'Creative, curious, politically active, big on arts and humanities',
      paragraphs: [
        "People who like ideas and don't want a checklist of required classes. Lots of students in film, music, theater, English, government and the sciences, and many double up on interests.",
        "It fits self-starters. Nobody makes you pick a path, so you have to pick one yourself. If you want a strict plan handed to you, it can feel loose."
      ]
    },

    knownFor: {
      preview: 'The open curriculum, film and music, and student activism',
      points: [
        { title: 'Open curriculum', text: 'There are no required courses for everyone. You build your schedule within some broad guidelines and a major.' },
        { title: 'Film and music', text: 'The film studies program and the music scene are famous. Several well-known filmmakers and musicians went here.' },
        { title: 'The Little Three', text: 'Wesleyan, Amherst and Williams are rivals in sports and often get cross-shopped by applicants.' },
        { title: 'Singing', text: 'There are a lot of a cappella groups, and people like to sing.' }
      ]
    },

    stereotypes: {
      preview: '"Super liberal" is true. "All they do is protest" is half true.',
      items: [
        { said: "It's super liberal.", verdict: 'true', text: "Campus politics lean strongly left, and students talk about it a lot. If you're conservative, you'll be in the minority." },
        { said: "Everyone is an artist or a musician.", verdict: 'half', text: "Arts are a big part of campus, but plenty of students do science, economics and government." },
        { said: "It's a bubble.", verdict: 'half', text: "Most people live on campus and stay on campus. Middletown is small, so you have to make your own fun or take a ride to New Haven." },
        { said: "It's a party school.", verdict: 'half', text: "There are parties, and some people go hard, but the work load is real. Most people balance both." }
      ]
    },

    mythsAndKnow: {
      preview: 'Open curriculum is not an easy curriculum. Plan your own path.',
      myths: [
        { title: 'No requirements means easy.', text: 'You still need to complete a major and take a wide mix of classes. Many students take a heavy load.' },
        { title: 'It is a tiny school in the middle of nowhere.', text: 'It is small, but Middletown is a real town and the trip to New Haven or Hartford is not far.' }
      ],
      know: [
        { title: 'Pick advisors well.', text: "With an open curriculum, advising matters a lot. Go talk to professors early." },
        { title: 'Housing is mostly on campus.', text: 'Many students live in dorms, houses and apartments owned by the school.' },
        { title: 'A car helps.', text: 'You can live without one, but a friend with a car makes weekends easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want freedom and ideas. Rough if you want structure and big games.',
      love: ['You want to design your own classes', 'You like arts, film or music', 'You want a politically engaged crowd', 'You like small classes'],
      struggle: ['You want a big sports scene', 'You want a clear career path laid out', 'You want a campus that is not very political']
    },

    people: {
      preview: 'Freedom and community win. The bubble and the politics are the complaints.',
      plus: ['You pick what you study', 'Creative, interesting people', 'Small classes with professors who know you'],
      minus: ['It can feel like a bubble', 'Campus politics can feel one-sided', 'Very little school spirit around sports']
    }
  }
});
