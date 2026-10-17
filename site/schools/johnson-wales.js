registerSchool({
  id: 'johnson-wales',
  name: 'JWU',
  nameSub: 'Johnson & Wales University',
  state: 'Rhode Island',
  location: 'Providence, RI · Downcity and Harborside',
  asOf: '2026',

  colors: {
    name: 'Wildcats · Blue and gold',
    swatches: ['#004483', '#FDB714'],
    band: '#FDB714',
    onBand: '#002E5A',
    onBandMuted: '#004483',
    stripe: '#004483',
    accent: '#004483',
    accentOnDark: '#FDB714'
  },

  vibe: "A hands-on school in downtown Providence where a lot of people walk to class in chef whites. It's practical and career-first, and nobody's pretending it's a liberal arts college.",
  flags: ['Culinary school', 'Downtown campus', 'Easy to get in', 'Hands-on classes'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~4,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Downtown Providence school known for culinary programs; mix of dorms and commuters", "housing": ["Many first-years live on campus, and some students live off campus.", "Housing is in and around the Providence campus.", "Some students commute from nearby."], "food": ["The school is famous for culinary programs, so food is a big part of the culture.", "Students still have regular dining options and meal plans.", "Providence has a strong restaurant scene to explore."]},
    vibe: {
      preview: 'Practical, city-based, quiet party scene, very career-focused',
      meters: {
        party:    { value: 3, note: 'Small apartment parties, city nightlife' },
        campus:   { value: 3, note: 'Buildings spread around downtown' },
        spirit:   { value: 2, note: 'Division III, small crowds' },
        pressure: { value: 4, note: 'Long lab hours, not cutthroat' },
        career:   { value: 9, note: 'Internships and industry ties are the point' },
        greek:    { value: 2, note: 'A few chapters, easy to ignore' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friends come from your program and your kitchen lab group',
      paragraphs: [
        "There isn't one big campus quad. Downcity is a set of buildings mixed into downtown Providence, and Harborside, where a lot of the culinary labs are, sits a few miles south near the water. Shuttles connect them.",
        "Social life is mostly your program, your dorm and your lab group. Culinary and baking students spend long hours together in kitchens, which builds tight friendships fast.",
        "Downtown Providence is right there, with restaurants, the mall, WaterFire in the warmer months and other colleges nearby. If you want a big campus party scene, it's not here."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. Decent grades and a diploma put you in good shape.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Know your program.', text: "You apply into a specific area like culinary, baking and pastry, hospitality or business. It's good to have a rough idea before you start." },
        { title: 'Pick your campus.', text: 'JWU now has two campuses: Providence and Charlotte, NC. Make sure you apply to the one you want.' }
      ]
    },

    who: {
      preview: 'Future chefs, bakers, hotel managers and business people',
      paragraphs: [
        "A lot of students already know what they want to do: cook, bake, run a restaurant or work in hotels and events. Plenty have worked in kitchens or restaurants in high school.",
        "There's also a big business side, plus health science programs and others. The common thread is people who learn by doing more than by reading. Students come from all over the country, not just New England."
      ]
    },

    knownFor: {
      preview: 'Culinary arts, hospitality, and hands-on learning',
      points: [
        { title: 'Culinary arts', text: 'This is the famous part. JWU is one of the best-known culinary schools in the country, and lots of working chefs went here.' },
        { title: 'Hospitality', text: 'Hotel, restaurant, events and tourism management programs are a big draw.' },
        { title: 'Learning by doing', text: 'Labs, kitchens and required work experience are built in. Many programs include internships before you graduate.' },
        { title: 'Fewer campuses now', text: 'JWU closed its Denver and North Miami campuses in 2021. Providence is the main campus, and Charlotte, NC is still open.' }
      ]
    },

    stereotypes: {
      preview: '"Just a cooking school" is a myth. "Easy to get in" is true.',
      items: [
        { said: "It's just a cooking school.", verdict: 'myth', text: "Culinary is the famous part, but business, hospitality, health and other programs make up a big share of students." },
        { said: 'Anyone can get in.', verdict: 'true', text: "Admission is easy. The work isn't, especially the long, physical kitchen labs." },
        { said: 'Everyone walks around in chef whites.', verdict: 'half', text: "Culinary and baking students wear uniforms for labs, so you'll see a lot of them. Everyone else dresses like normal students." },
        { said: "There's no real college life.", verdict: 'half', text: "There's no big quad or football Saturday. There are dorms, clubs, Division III teams and a whole city around you." }
      ]
    },

    mythsAndKnow: {
      preview: 'Expect early mornings in the kitchen. Providence is the main campus.',
      myths: [
        { title: 'JWU has campuses all over.', text: 'It used to. Denver and North Miami closed in 2021. Now it is Providence and Charlotte.' },
        { title: 'Culinary is the easy major.', text: 'Kitchen labs can start very early and run long, with real standards and real grading.' }
      ],
      know: [
        { title: 'Your schedule may be odd.', text: 'Culinary labs often run in blocks and can start early in the morning. It feels more like a job than a class sometimes.' },
        { title: 'You will take shuttles.', text: "Classes can be at Downcity or Harborside. You don't need a car, but plan for some travel time." },
        { title: 'Experience counts.', text: 'Employers care about your internships and lab work. Take the work experience parts seriously.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know your craft. Rough if you want classic college.',
      love: ['You want to cook, bake or work in hospitality', 'You learn best with your hands', 'You want to live in a city', 'You want work experience built in'],
      struggle: ['You want big sports and school spirit', 'You want a classic campus with a quad', "You're not sure what you want to do yet"]
    },

    people: {
      preview: 'Hands-on training wins. Spread-out campus and cost get criticized.',
      plus: ['Chef instructors with real industry experience', 'Learning by doing from day one', 'Downtown Providence is a fun place to live'],
      minus: ["Campus doesn't feel like one place", 'It can be expensive for what some careers pay', 'Not much traditional college spirit']
    }
  }
});
