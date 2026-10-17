registerSchool({
  id: 'smith',
  name: 'Smith',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Northampton, MA · Artsy small-city downtown',
  asOf: '2026',

  colors: {
    name: 'Bears · Blue and gold',
    swatches: ['#207CB1', '#1A2C57', '#FFEB0A'],
    band: '#207CB1',
    onBand: '#FFFFFF',
    onBandMuted: '#FFFEF0',
    stripe: '#FFEB0A',
    accent: '#1A2C57',
    accentOnDark: '#41A4DD'
  },

  vibe: "A women's college where you live in a house instead of a dorm, pick your own classes, and walk to one of the best little downtowns in New England. Smart, intense, opinionated, and a lot more fun than people expect.",
  flags: ["Women's college", 'Houses, not dorms', 'No required classes', 'Five Colleges'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~2,500' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Houses are the whole system; most people live on campus all four years", "housing": ["Students live in houses on campus, each with its own community.", "Most students stay on campus for most or all of their time.", "Houses range from big old buildings to smaller ones."], "food": ["Dining is mostly in the houses, so you eat with your neighbors.", "Students generally call it good for college food.", "Downtown Northampton has lots of food and cafes."]},
    vibe: {
      preview: 'Academic, close-knit houses, artsy town, no frat parties',
      meters: {
        party:    { value: 3, note: 'House parties and Amherst or UMass trips' },
        campus:   { value: 9, note: 'Gorgeous, with a botanic garden and a pond' },
        spirit:   { value: 5, note: 'Big on traditions, small on game days' },
        pressure: { value: 7, note: 'Lots of reading, lots of high achievers' },
        career:   { value: 7, note: 'Strong alum network that answers emails' },
        greek:    { value: 0, note: 'No sororities' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Your house is your home base. Weekends mix with the Five Colleges.',
      paragraphs: [
        "You don't live in a dorm. You live in one of a few dozen houses, each with its own personality, traditions and mix of all four class years. Your house is where you make your first friends, and a lot of people stay loyal to it all four years. Some houses still do afternoon tea.",
        "The party scene is small and mostly house parties. People who want more take the free bus to Amherst College or UMass, about 20 to 30 minutes away. Plenty of students are happy with a quieter weekend, and nobody makes you feel weird about it.",
        'Northampton is the real social perk. Downtown is a few minutes\' walk, with coffee shops, bookstores, thrift stores, restaurants and live music. It feels like a college town with an art scene, not a strip mall.'
      ]
    },

    gettingIn: {
      preview: 'Very selective. Tests optional. Aid is strong.',
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away. Strong grades in hard classes and real interest in the school matter.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Early decision is an option.', text: "If Smith is your clear first pick, applying early can help. It's binding, so only do it if you're sure." },
        { title: 'Aid has no loans.', text: 'Smith meets full demonstrated need and dropped loans from need-based aid packages. Run the net price calculator before you rule it out.' }
      ]
    },

    who: {
      preview: 'Opinionated, curious, artsy or science-y, and ready to speak up',
      paragraphs: [
        "People who like to talk about ideas and won't sit quietly in class. You'll find serious science and engineering students right next to poets, activists and theater kids. Students come from all over the country and the world.",
        "If you want a big rah-rah sports school or a frat scene, this isn't it. If you want small classes, professors who know you, and classmates who push back on everything, you'll probably love it."
      ]
    },

    knownFor: {
      preview: 'The house system, the open curriculum, and the Five Colleges',
      points: [
        { title: 'The house system', text: 'Students live in houses that mix all four years. It feels more like a big shared home than a dorm floor.' },
        { title: 'The open curriculum', text: "There are no required gen-ed classes outside your major. You build your own schedule, with an adviser's help." },
        { title: 'Five Colleges', text: 'You can take classes at the other schools in the group, like Amherst, Mount Holyoke and UMass, and ride the bus there for free.' },
        { title: 'Engineering and STEM', text: 'Smith has its own engineering program and strong sciences, which surprises people who think of it as only a humanities school.' }
      ]
    },

    stereotypes: {
      preview: '"Super political" is mostly true. "No social life" is a myth.',
      items: [
        { said: "Everyone's super political.", verdict: 'true', text: "Students care a lot and say so, in class and out. If you love debate, great. If you don't, it can feel like a lot." },
        { said: "There's no social life.", verdict: 'myth', text: "It's different, not dead. House events, Northampton, and the Five College scene keep weekends busy if you want them to be." },
        { said: "It's all English majors.", verdict: 'half', text: 'Humanities are big, but so are the sciences, economics and engineering. You can do almost anything here.' },
        { said: 'Everyone is stressed all the time.', verdict: 'half', text: "Classes are tough and people are high achievers. The houses help, and most students find their rhythm by second semester." }
      ]
    },

    mythsAndKnow: {
      preview: "You're not stuck on one campus, and Northampton isn't sleepy",
      myths: [
        { title: "You'll only ever see Smith people.", text: 'The Five College buses run all day. Lots of students take classes, join clubs or go out at the other schools.' },
        { title: "It's in the middle of nowhere.", text: 'Campus is right next to downtown Northampton, which has more going on than plenty of bigger towns. Boston is a couple of hours away.' }
      ],
      know: [
        { title: 'Your house matters.', text: 'Where you live shapes your first year a lot. Learn about the house options when you get there.' },
        { title: 'Traditions are a big deal.', text: 'Mountain Day is a surprise day off in the fall when the bells ring. There are plenty more, and students take them seriously.' },
        { title: 'Winters are real.', text: "It's western Massachusetts. Bring a real coat and boots." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small classes and a tight house. Rough if you want game days.',
      love: ['You want small classes where you talk a lot', 'You like freedom to pick your own path', 'You want a walkable, artsy town', 'You like traditions and a close community'],
      struggle: ['You want big sports and a frat scene', "You'd rather not discuss politics at dinner", 'You want a big-city feel', 'You want a party every weekend on campus']
    },

    people: {
      preview: 'The houses and Northampton win. Workload and a small scene are the complaints.',
      plus: ['The house system makes it easy to find friends', 'Professors know you and push you', 'Northampton is a great town to live in'],
      minus: ['The workload is heavy', 'The on-campus party scene is small', 'It can feel like a bubble']
    }
  }
});
