registerSchool({
  id: 'bowdoin',
  name: 'Bowdoin',
  nameSub: 'College',
  state: 'Maine',
  location: 'Brunswick, ME · Small town near the coast',
  asOf: '2026',

  colors: {
    name: 'Polar Bears · Black and white',
    swatches: ['#231F20', '#FFFFFF', '#00506A'],
    band: '#231F20',
    onBand: '#FFFFFF',
    onBandMuted: '#C8C6C7',
    stripe: '#00506A',
    accent: '#00506A',
    accentOnDark: '#A7A5A6'
  },

  vibe: "A small, very hard-to-get-into college in a friendly Maine town, a few miles from the ocean. People work hard, eat really well, and spend a lot of time outside.",
  flags: ['Very hard to get in', 'Famous food', 'Outdoorsy', 'Cold winters'],
  facts: [
    { label: 'Setting', value: 'Coastal town' },
    { label: 'Undergrads', value: '~1,900' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Fully residential and tight-knit; food is a highlight for many students.", "housing": ["Almost all students live on campus, especially first-years.", "Housing is a mix of dorms and apartment-style options for upperclassmen.", "Campus social life stays mostly on campus, so you will see the same people a lot."], "food": ["Students generally say the dining halls are among the best around.", "Meal plans are standard for people living on campus.", "Brunswick has a small downtown with local restaurants."]},
    vibe: {
      preview: 'Friendly, outdoorsy, academic, and the food is the best around',
      meters: {
        party:    { value: 5, note: 'Campus parties, social houses, a few big weekends' },
        campus:   { value: 8, note: 'Classic brick and pines, walkable to town' },
        spirit:   { value: 6, note: 'Hockey against Colby is the big one' },
        pressure: { value: 7, note: 'Smart classmates and real workloads' },
        career:   { value: 8, note: 'Strong network, lots of finance and grad school' },
        greek:    { value: 0, note: 'Fraternities were phased out long ago' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Everyone lives on campus. Social houses replace frats.',
      paragraphs: [
        "Almost everyone lives on campus all four years, so the whole school is basically one big neighborhood. First-years are linked to a College House, which hosts parties and events open to everyone. That system took the place of fraternities, which Bowdoin got rid of years ago.",
        "Weekends are mostly campus parties, house events and sports games. Ivies, a big spring weekend, is the event of the year. It's a small school, so you'll see the same faces everywhere. Some people love that. Others feel it by junior year.",
        "Brunswick is a pleasant small town with a main street of cafes and shops right next to campus. For more, Portland is about half an hour away, and the train runs from Brunswick to Boston."
      ]
    },

    gettingIn: {
      preview: 'One of the hardest schools in New England to get into',
      points: [
        { title: "It's extremely hard to get into.", text: 'Only a small share of applicants get in. Treat it as a reach even with top grades.' },
        { title: 'Early decision helps.', text: "A bigger share of early decision applicants get in than regular ones. It's binding, so only apply early if it's your clear first pick." },
        { title: 'Tests are optional.', text: 'Bowdoin was the first college in the country to go test-optional, back in 1969. Around half of students don\'t send scores. Check the current policy before you apply.' },
        { title: 'Aid has no loans.', text: 'Bowdoin meets full demonstrated need with grants instead of loans. Run the net price calculator before you rule it out.' }
      ]
    },

    who: {
      preview: 'Smart, outdoorsy, athletic, and friendlier than you expect',
      paragraphs: [
        "Driven students who also like to be outside. A lot of people play a varsity or club sport, go on Outing Club trips, or ski on weekends. Econ, government and the sciences are popular, and plenty of grads head into finance, consulting or grad school.",
        "It's a lot of New Englanders and New Yorkers, plus a growing number of students from the rest of the country and abroad. If you want a city or a huge school, it'll feel small. If you want a tight, friendly community where people say hi on the path, it fits."
      ]
    },

    knownFor: {
      preview: 'The food, the outdoors, and being very hard to get into',
      points: [
        { title: 'The food', text: "Bowdoin's dining halls are famous and regularly ranked among the best in the country. The lobster bake at the start of the year is a big deal." },
        { title: 'The outdoors', text: 'The Outing Club runs hiking, paddling and ski trips, and the college has a coastal studies center on the water.' },
        { title: 'Academics', text: "Small classes, demanding professors and a strong reputation. It's in the same tier as the top liberal arts colleges." },
        { title: 'No fraternities', text: 'Bowdoin replaced its frats with College Houses that throw open parties. Social life is less exclusive because of it.' }
      ]
    },

    stereotypes: {
      preview: '"Rich and preppy" is half true. "Nothing to do in Maine" is a myth.',
      items: [
        { said: "Everyone's rich and preppy.", verdict: 'half', text: 'There are plenty of wealthy, preppy students. There are also lots of students on big aid packages. Generous no-loan aid has made it more mixed.' },
        { said: "There's nothing to do in Maine.", verdict: 'myth', text: "Brunswick has a walkable downtown, the ocean is minutes away, and Portland is close. You'll be busy if you like the outdoors." },
        { said: 'Everyone plays a sport.', verdict: 'half', text: "A big share of students are athletes, and it shapes the social scene. Plenty of people aren't, and they do fine." },
        { said: 'The food is the best part.', verdict: 'true', text: 'Students really do brag about it. Even people who complain about everything else agree the food is great.' }
      ]
    },

    mythsAndKnow: {
      preview: "It's less isolated than you think, but winters are long",
      myths: [
        { title: "It's in the middle of nowhere.", text: "Brunswick is a real town with a downtown next to campus. The Amtrak train goes to Boston, and Portland is close." },
        { title: "You can't afford it.", text: 'The sticker price is huge, but aid has no loans and meets full need. Many families pay much less than the listed price.' }
      ],
      know: [
        { title: 'Winters are long and cold.', text: 'Maine winters are serious. Bring real boots, a real coat, and a plan to enjoy the snow.' },
        { title: 'It is small.', text: "With about 2,000 students, you'll know a lot of people. Great for community, harder if you want to reinvent yourself." },
        { title: 'Hockey is the big ticket.', text: 'Games against Colby pack the rink. It is the closest thing to a big game day.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love the outdoors and a tight community. Rough if you need a city.',
      love: ['You love hiking, skiing or the ocean', 'You want a small, friendly campus', 'You want great food without leaving campus', 'You want strong academics and a strong network'],
      struggle: ['You need a city nearby', "You can't stand long, cold winters", 'You want a big school with lots of new faces', 'You want a big Greek scene']
    },

    people: {
      preview: 'Food, friendliness and the outdoors win. Size and winter are the complaints.',
      plus: ['The food really is amazing', 'People are friendly and close', 'The coast and outdoors are right there'],
      minus: ['It can feel small fast', 'Winters are long and dark', 'The athlete and prep crowd can feel dominant']
    }
  }
});
