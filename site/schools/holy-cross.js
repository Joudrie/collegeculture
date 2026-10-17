registerSchool({
  id: 'holy-cross',
  name: 'Holy Cross',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Worcester, MA · On a hill above the city',
  asOf: '2026',

  colors: {
    name: 'Crusaders · Purple and black',
    swatches: ['#602D89', '#000000', '#FFFFFF'],
    band: '#602D89',
    onBand: '#FFFFFF',
    onBandMuted: '#D9C6EC',
    stripe: '#111111',
    accent: '#602D89',
    accentOnDark: '#C9A2EE'
  },

  vibe: "A small, tight-knit Jesuit college on a hill. Everyone lives on campus, classes are small, and the alumni network follows you for life.",
  flags: ['Small classes', 'Jesuit Catholic', 'No Greek life', 'Lots of hills'],
  facts: [
    { label: 'Setting', value: 'Hill in city' },
    { label: 'Undergrads', value: '~3,200' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Almost everyone lives on campus; food is fine, campus feels tight-knit", "housing": ["Most students live on campus for most or all of their time.", "The school is small and residential, so campus is where life happens.", "Dorm types range from traditional rooms to apartment-style for older students."], "food": ["Dining is centered on a main hall plus a few smaller spots.", "Students usually call it fine, not amazing.", "Worcester has food nearby, but you'll likely want a ride or the bus."]},
    vibe: {
      preview: 'Small, close, work hard and play hard, everyone on campus',
      meters: {
        party:    { value: 6, note: 'Busy weekends, mostly on or near campus' },
        campus:   { value: 9, note: 'Gorgeous, green and very hilly' },
        spirit:   { value: 6, note: 'D1 football and basketball draw people' },
        pressure: { value: 7, note: 'Small classes, nowhere to hide' },
        career:   { value: 8, note: 'The alumni network is famous' },
        greek:    { value: 0, note: 'No frats or sororities at all' },
        religion: { value: 6, note: 'Jesuit and visible, but not forced' }
      }
    },

    social: {
      preview: 'Everyone lives on campus, so the social life stays on the hill',
      paragraphs: [
        "Almost everyone lives on campus all four years, so your friends are always close by. Upperclassmen move into on-campus apartments, and a lot of weekend plans start there.",
        "There's no Greek life, so parties are in dorms, apartments and houses just off campus. People go out a lot for a school this size. It's a work hard, play hard crowd.",
        "Worcester has restaurants and bars, and Boston is about an hour away. Still, most people say the hill is its own little world, for better and worse."
      ]
    },

    gettingIn: {
      preview: "Very selective now. Most applicants don't get in.",
      points: [
        { title: "It's gotten much harder.", text: 'Holy Cross turns away most applicants now. Treat it as a reach unless your grades are near the top of your class.' },
        { title: 'Tests are optional.', text: 'Holy Cross has been test-optional for a long time. Check the current policy before you apply.' },
        { title: 'Early decision helps.', text: "If it's your clear first choice, applying early decision can give you a better shot." },
        { title: 'Show who you are.', text: 'It is small, so essays and recommendations matter. Service and community work fit the school well.' }
      ]
    },

    who: {
      preview: 'Mostly Northeast, outgoing, a lot of future finance and med kids',
      paragraphs: [
        "A lot of students come from Massachusetts, Connecticut, New York and New Jersey. Many went to Catholic or private high schools, but plenty didn't. The crowd tends to be outgoing, athletic and involved.",
        "Lots of economics, psychology, biology and political science majors. Many people are aiming for finance, consulting, law or medical school. There's also a big service and volunteering culture."
      ]
    },

    knownFor: {
      preview: 'The alumni network, small classes and a Jesuit core',
      points: [
        { title: 'The alumni network', text: 'Holy Cross grads are known for helping each other out, especially in finance, law and medicine. People really do pick up the phone.' },
        { title: 'Liberal arts, for real', text: "There's no business or engineering major. You study the liberal arts and go into those fields from there." },
        { title: 'The Jesuit tradition', text: "It's Catholic and Jesuit, with Mass, retreats and service trips. You don't have to be Catholic or religious to go." },
        { title: 'The hill', text: "Campus sits on Mount St. James. It's beautiful, and you will feel the stairs in your legs." }
      ]
    },

    stereotypes: {
      preview: '"Preppy" is half true. "Bubble on the hill" is true.',
      items: [
        { said: 'Everyone is preppy.', verdict: 'half', text: "There's a real preppy look on campus, and a lot of students went to private schools. But it's not everyone, and nobody makes you dress a certain way." },
        { said: "It's a bubble on the hill.", verdict: 'true', text: "Everyone lives on campus and most of life happens there. Some love how close it feels. Others feel boxed in by junior year." },
        { said: 'Everyone goes into finance.', verdict: 'half', text: 'Finance and consulting are big, partly because of the alumni network. Lots of people go into medicine, law, teaching and service too.' },
        { said: 'Work hard, play hard.', verdict: 'true', text: 'Classes are demanding and small, and weekends are social. Most students do both.' }
      ]
    },

    mythsAndKnow: {
      preview: "You don't have to be Catholic, and the stairs are real",
      myths: [
        { title: 'You have to be Catholic.', text: "No. Students of all faiths and none go here. Religion is part of the school's identity, but going to Mass is your choice." },
        { title: 'No business major means no business jobs.', text: 'Holy Cross sends lots of grads into finance and business. They major in things like economics, and the network does the rest.' }
      ],
      know: [
        { title: 'You live on campus.', text: 'Housing is basically all four years. Living off campus is not the normal path.' },
        { title: 'The hills are steep.', text: "Campus is built on a big hill. Bring good shoes and expect it in the snow." },
        { title: 'Classes are small.', text: "Professors know your name. That's great, and it also means you can't skip quietly." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a close community. Rough if you want a city or variety.',
      love: ['You want small classes and to know your professors', 'You want a tight, social campus community', 'You care about service and big questions', 'You want an alumni network that shows up'],
      struggle: ['You want a big, diverse mix of people', 'You want an engineering or business major', 'You want to live in the middle of a city']
    },

    people: {
      preview: 'Community and network are the wins. The bubble is the complaint.',
      plus: ['The alumni network opens real doors', 'Professors actually know you', 'Campus is beautiful and close-knit'],
      minus: ['It can feel like a bubble', 'The crowd can feel similar', "It's expensive"]
    }
  }
});
