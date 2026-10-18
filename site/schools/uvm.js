registerSchool({
  id: 'uvm',
  name: 'UVM',
  nameSub: 'Vermont',
  state: 'Vermont',
  location: 'Burlington, VT · Above Lake Champlain',
  asOf: '2026',

  colors: {
    name: 'Catamounts · Green and gold',
    swatches: ['#154734', '#FFD100'],
    band: '#154734',
    onBand: '#FFFFFF',
    onBandMuted: '#C5D6CC',
    stripe: '#FFD100',
    accent: '#1E6B4E',
    accentOnDark: '#FFD100'
  },

  vibe: "An outdoorsy school in a fun little college town, where people ski on weekends and hike when it's warm. It's relaxed and friendly, but the winters are long and cold.",
  flags: ['College town', 'Outdoorsy', 'Cold winters', 'Mostly out-of-state'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~12,000' },
    { label: 'Getting in', value: 'Moderate' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "City buses in Burlington; Burlington airport is nearby", "points": ["Green Mountain Transit buses serve Burlington and the campus.", "Burlington International Airport is the closest airport, and the Amtrak Vermonter stops in nearby Essex Junction.", "You can get by without a car in Burlington. Check the school's rules on first-year cars."]},
    "living": {"preview": "First-years live on campus, then many move into Burlington", "housing": ["First-years mostly live in residence halls on campus.", "After that, a lot of students rent houses and apartments in Burlington.", "Off-campus rentals can be competitive and pricey, people say."], "food": ["There are a few dining halls, and students generally call the food decent.", "Vermont has a big local food and farm scene.", "Downtown Burlington has lots of restaurants and cafes."]},
    vibe: {
      preview: 'Laid back, outdoorsy, real party scene, great college town',
      meters: {
        party:    { value: 7, note: 'Off-campus houses and apartments' },
        campus:   { value: 7, note: 'Pretty campus on a hill over the lake' },
        spirit:   { value: 5, note: 'Hockey and basketball, no football' },
        pressure: { value: 4, note: 'Relaxed, more so in some majors' },
        career:   { value: 5, note: 'Strong in nursing and the sciences' },
        greek:    { value: 2, note: 'Small, easy to skip' },
        religion: { value: 1, note: 'Very secular' }
      }
    },

    social: {
      preview: 'Burlington and the mountains are your social life',
      paragraphs: [
        "Burlington is a real college town. Church Street, the walkable downtown with shops, restaurants and street performers, is a short walk from campus, and the Lake Champlain waterfront is right below it.",
        "Winter weekends often mean skiing or snowboarding. Several mountains are within about an hour, and the ski club is one of the biggest groups on campus. When it's warm, people hike, swim in the lake and hang out outside.",
        "Parties are mostly at off-campus houses and apartments. Hockey games at Gutterson are the biggest sports crowd. Montreal is a couple of hours away for a weekend trip if you have a passport."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Cost for out-of-staters is the hurdle.',
      points: [
        { title: "It's not too hard to get into.", text: 'A good majority of applicants are admitted. Some programs, like nursing, are more competitive.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Out-of-state is expensive.', text: "Most students come from outside Vermont and pay out-of-state tuition, which is high for a public school. Check what aid you'd actually get." },
        { title: 'There are early rounds.', text: 'It has early action, which can get you an answer sooner. Check the dates for your year.' }
      ]
    },

    who: {
      preview: 'Outdoorsy Northeast kids, lots of environmental and health majors',
      paragraphs: [
        "Most students are from out of state, lots from Massachusetts, New York, New Jersey and Connecticut. A lot of them picked UVM partly for the skiing and the outdoors.",
        "Popular areas include environmental science, natural resources, nursing, business, biology and animal science. People tend to be relaxed, friendly and into the outdoors, though there's a wide mix once you get there."
      ]
    },

    knownFor: {
      preview: 'Skiing, Burlington, environmental programs, and a 2024 soccer title',
      points: [
        { title: 'The outdoors', text: 'Mountains, ski areas and Lake Champlain are all close by. For a lot of students, that is the main reason they came.' },
        { title: 'Burlington', text: 'Regularly called one of the best college towns around. Small enough to walk, big enough to have plenty going on.' },
        { title: 'Environmental programs', text: "UVM has a big focus on the environment and sustainability. If that's your thing, there are a lot of options." },
        { title: 'Men\'s soccer', text: "The team won the 2024 NCAA national championship, the school's first national title outside of skiing." }
      ]
    },

    stereotypes: {
      preview: '"Granola" is pretty true. "Everyone is a hippie" is a stretch.',
      items: [
        { said: "Everyone's a granola hippie.", verdict: 'half', text: "There's a real outdoorsy, Patagonia-and-Birkenstocks crowd, and students joke about it. But plenty of people aren't like that at all." },
        { said: "It's a stoner school.", verdict: 'half', text: "UVM has had that reputation for a long time, and it's part of the culture for some people. Plenty of students don't care about it, and weed is still banned on campus." },
        { said: 'Everyone skis.', verdict: 'half', text: "A lot of people do, and it's a big part of winter life. You don't need to, but you might want to learn." },
        { said: 'The winters are brutal.', verdict: 'true', text: 'It gets very cold and stays snowy for months. Good boots and a real coat are not optional.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Housing is tight, winters are long, and out-of-state costs add up',
      myths: [
        { title: "It's a tiny school in the woods.", text: "It's a mid-sized university in Vermont's biggest city, with a medical school and lots of majors." },
        { title: "There's no school spirit.", text: "There's no football, but hockey and basketball crowds get loud, and the 2024 soccer title got the whole town excited." }
      ],
      know: [
        { title: 'Burlington housing is tight.', text: 'Off-campus apartments are hard to find and not cheap. Start looking early when it is time to move off campus.' },
        { title: 'Pack for real cold.', text: "If you're from somewhere warm, winter will be a shock. Budget for proper gear." },
        { title: "You don't need a car in town.", text: 'Campus and downtown are walkable, and there are buses. A car helps for getting to the mountains, but lots of people carpool.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love the outdoors. Rough if you hate the cold.',
      love: ['You want to ski or hike on weekends', 'You want a walkable, lively college town', "You care about the environment", 'You want a laid-back, friendly crowd'],
      struggle: ['You hate cold weather', 'You want big football game days', 'You need a cheap school and are out-of-state']
    },

    people: {
      preview: 'Burlington and the outdoors win. Cost and cold are the complaints.',
      plus: ['Burlington is a great college town', 'Skiing and outdoor stuff are right there', 'People are friendly and relaxed'],
      minus: ['Expensive for out-of-state students', 'Winters are long and gray', 'Off-campus housing is hard to find']
    }
  }
});
