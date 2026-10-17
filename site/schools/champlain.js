registerSchool({
  id: 'champlain',
  name: 'Champlain',
  nameSub: 'College',
  state: 'Vermont',
  location: 'Burlington, VT · Hill Section near downtown',
  asOf: '2026',

  colors: {
    name: 'Beavers · Blue and green',
    swatches: ['#003C5F', '#6B8F00', '#6DC8E0'],
    band: '#003C5F',
    onBand: '#FFFFFF',
    onBandMuted: '#B5CBD8',
    stripe: '#6B8F00',
    accent: '#003C5F',
    accentOnDark: '#6DC8E0'
  },

  vibe: "A small, career-focused college on a hill in Burlington where you start your major on day one. It's nerdy in a good way, with lots of game design, cybersecurity and creative media people, and a fun little city right down the hill.",
  flags: ['Major from day one', 'Tech and creative', 'No varsity sports', 'Burlington is great'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~2,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Club + esports' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Small school in Burlington; dorms early, off-campus later", "housing": ["Many first-years live in residence halls.", "Older students often move into apartments in and around Burlington.", "Campus sits close to downtown, so living there feels like city living."], "food": ["Dining options are small compared to a big university.", "Students say the food is okay.", "Burlington has lots of restaurants and cafes nearby."]},
    vibe: {
      preview: 'Career-focused, creative, small campus in a fun city',
      meters: {
        party:    { value: 3, note: 'Small gatherings, some UVM spillover' },
        campus:   { value: 7, note: 'Victorian houses on a hill, lake views' },
        spirit:   { value: 2, note: 'No varsity teams to rally around' },
        pressure: { value: 5, note: 'Project-heavy, more grind than competition' },
        career:   { value: 9, note: 'Internships early, very job-focused' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs, gaming and Burlington. Not a party school.',
      paragraphs: [
        "The social life runs through clubs, majors and dorms. A lot of dorms are old Victorian houses, so you might live with a small group in a house instead of a big hall, which makes it easy to get close fast.",
        "It's not a party school. Weekends are game nights, movie nights, club events and heading downtown. People who want bigger parties sometimes end up at UVM, which is right next door.",
        "Burlington does a lot of the work. Church Street, the waterfront and Lake Champlain are a walk away, and ski mountains are close enough for day trips in winter."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Know what you want to study.',
      points: [
        { title: "It's not very hard to get into.", text: 'A majority of applicants are admitted. Solid grades should put you in good shape.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'You apply to a major.', text: "Because classes in your major start right away, it helps to have a direction. Undeclared is an option if you're not sure." },
        { title: 'Some programs want a portfolio.', text: 'Creative majors like art, animation or design may ask for samples of your work. Check your program before you apply.' }
      ]
    },

    who: {
      preview: 'Gamers, coders, artists and people who know what job they want',
      paragraphs: [
        "A lot of game design, cybersecurity, digital forensics, computer science, animation and business students. People tend to be creative, a little nerdy and already pretty sure what they want to do. The student body leans male, mostly because of the tech majors.",
        "Students come from all over the Northeast and beyond. If you want a classic college experience with football Saturdays, this isn't it. If you want to make games or catch hackers, you'll find your people."
      ]
    },

    knownFor: {
      preview: 'Game design, cybersecurity, and starting your major right away',
      points: [
        { title: 'Game design', text: 'One of the better-known undergrad game programs around. Students work in teams to make actual games, often across art, programming and production.' },
        { title: 'Cybersecurity and digital forensics', text: "The Leahy Center on campus lets students work on real security and forensics projects for clients, not just classroom exercises." },
        { title: 'Upside-down curriculum', text: 'Instead of two years of gen eds first, you take classes in your major starting freshman year. That means internships can start early.' },
        { title: 'A big online side', text: 'Champlain College Online serves mostly working adults. It is separate from the residential campus experience.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is a gamer" is half true. "No school spirit" is mostly true.',
      items: [
        { said: 'Everyone is a gamer.', verdict: 'half', text: 'Game design and esports are big, so you will meet a lot of gamers. There are also plenty of business, media, psych and other majors who never touch a controller.' },
        { said: "There's no school spirit.", verdict: 'true', text: "No varsity sports teams means no big game days. Spirit shows up in clubs, projects and showcases instead." },
        { said: "It's just UVM's little neighbor.", verdict: 'myth', text: "They share a city and some social life, but they're totally different schools. Champlain is small, private and career-focused." },
        { said: "It's basically a trade school.", verdict: 'half', text: "It is very job-focused, but it gives real bachelor's degrees with a required core of writing and thinking classes alongside your major." }
      ]
    },

    mythsAndKnow: {
      preview: 'No varsity sports, real winters, and the abroad campuses have changed',
      myths: [
        { title: "You can't change your mind about your major.", text: "You start early, but switching is possible. It's easier if you switch sooner rather than later." },
        { title: 'Burlington is in the middle of nowhere.', text: "It's a lively small city with restaurants, music and a lake. It just isn't Boston." }
      ],
      know: [
        { title: 'No traditional varsity sports.', text: 'There are club teams, intramurals and a varsity esports program, but no NCAA teams. If you want to play a college sport, look elsewhere.' },
        { title: 'Winters are cold.', text: 'Vermont winters are long and snowy. Great for skiing and riding, rough if you hate the cold.' },
        { title: 'Study abroad has changed.', text: 'Champlain used to run its own campuses in Montreal and Dublin. Those closed in 2026, so ask how study abroad works now.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know your path. Rough if you want game days.',
      love: ['You want to start your major right away', "You're into games, tech, cybersecurity or creative media", 'You want a small school in a fun city', 'You like snow and the outdoors'],
      struggle: ['You want big-time sports or a party scene', 'You have no idea what you want to study', 'You want a big traditional campus']
    },

    people: {
      preview: 'Hands-on programs and Burlington win. Weak spirit is the knock.',
      plus: ['Real projects and internships early', 'Burlington is a great college town', 'Small classes and approachable professors'],
      minus: ['Not much school spirit or sports culture', "Some programs are very specialized if you change your mind", 'Private school price tag']
    }
  }
});
