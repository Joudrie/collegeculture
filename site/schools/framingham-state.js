registerSchool({
  id: 'framingham-state',
  name: 'Framingham State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Framingham, MA · Up on Bare Hill',
  asOf: '2026',

  colors: {
    name: 'Rams · Black and gold',
    swatches: ['#000000', '#FCB614'],
    band: '#FCB614',
    onBand: '#000000',
    onBandMuted: '#4A3500',
    stripe: '#000000',
    accent: '#8A5D00',
    accentOnDark: '#FCB614'
  },

  vibe: "A small, affordable state school on a hill west of Boston. Lots of students commute or go home on weekends, classes are small, and nobody is pretending it's a big party campus.",
  flags: ['Small campus', 'Lots of commuters', 'Quiet weekends', 'Affordable'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~2,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Little to none' }
  ],

  sections: {
    "living": {"preview": "Mix of residents and commuters; food is basic and simple.", "housing": ["Many students commute, but there are residence halls on campus.", "First-years who live on campus usually are in traditional dorms.", "Framingham has apartments nearby, and the commuter rail helps."], "food": ["There is a main dining hall and a few other spots on campus.", "Residents usually need a meal plan.", "Downtown Framingham has a decent mix of restaurants."]},
    vibe: {
      preview: 'Small, low-key, close to home, quiet on weekends',
      meters: {
        party:    { value: 3, note: 'Small get-togethers, not a scene' },
        campus:   { value: 6, note: 'Compact hilltop campus in a suburb' },
        spirit:   { value: 3, note: 'Small crowds at Division III games' },
        pressure: { value: 3, note: 'Manageable, professors want you to pass' },
        career:   { value: 6, note: 'Practical majors, Boston-area jobs' },
        greek:    { value: 1, note: 'Not part of campus life' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Clubs and events during the week. Weekends empty out.',
      paragraphs: [
        "A big share of students commute or live close enough to go home, so the campus can feel empty on weekends. Students say that's just what you get at a small state school near home.",
        "During the week there's more going on than people expect. The school runs events most weeks, and there are around 60 clubs, plus a radio station, a theater group and a student paper. If you live on campus and join a couple of things, it's easy to meet people.",
        "Boston is about 20 miles east. The commuter rail runs from downtown Framingham into the city, so a day trip is doable even without a car."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Decent grades in solid classes will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some majors have extra steps.', text: 'Programs like nursing can have their own requirements. Check the program page for the major you want.' }
      ]
    },

    who: {
      preview: 'Mostly Massachusetts kids, commuters, athletes and future teachers',
      paragraphs: [
        "Mostly students from Massachusetts, a lot of them from the MetroWest area and within driving distance of home. Plenty of first-generation college students, athletes, and people who want a cheaper degree without leaving the Boston area.",
        "Popular paths include education, business, psychology, nutrition and fashion. People tend to be practical and down to earth. They're here to get a degree at a good price, not to chase prestige."
      ]
    },

    knownFor: {
      preview: 'Teacher training history, fashion, nutrition and Christa McAuliffe',
      points: [
        { title: 'The first public teachers college', text: 'It started in 1839 as the first state-supported "normal school" in the country, built to train teachers. Education is still a big part of the school.' },
        { title: 'Fashion design and retailing', text: 'One of the few public fashion programs in New England, with apparel design and merchandising tracks and a yearly student fashion show.' },
        { title: 'Food and nutrition', text: 'Nutrition and food science are a real draw. People who want to become dietitians often look here.' },
        { title: 'Christa McAuliffe', text: 'The teacher-astronaut lost on the Challenger graduated from here. The campus has a center and planetarium named for her.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is mostly true. "Nothing to do" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'half', text: 'A lot of students commute, and it shapes weekends. There are still plenty of residents who have a normal dorm experience.' },
        { said: 'Everyone goes home on weekends.', verdict: 'true', text: "Many students live close and head home Friday. If you stay, it's quiet. Some people like that, some get bored." },
        { said: "There's nothing to do.", verdict: 'half', text: "Weeknights have events and clubs. Weekends are slow on campus, but Boston and the Natick Mall area are close." },
        { said: "It's just a backup school.", verdict: 'myth', text: 'Plenty of people pick it on purpose for the price, the location or programs like fashion and nutrition.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Cheap for in-state, quiet weekends, a car or the train helps',
      myths: [
        { title: 'Small state school means bad professors.', text: 'Students regularly say professors are supportive and easy to reach. Small classes make it hard to fall through the cracks.' },
        { title: "You're stuck in the suburbs.", text: 'The commuter rail gets you to Boston, and the town has plenty of food and shopping nearby.' }
      ],
      know: [
        { title: 'The campus is on a hill.', text: "You'll walk up and down it a lot. Wear real shoes in winter." },
        { title: 'Parking is a common complaint.', text: 'Commuters say finding a spot can be a pain. Leave extra time.' },
        { title: 'The school has gotten smaller.', text: 'Enrollment has dropped a lot over the last decade. Classes are small, but some programs and events feel thinner than they used to.' },
        { title: 'Look at net price, not sticker price.', text: "In-state cost is low to begin with, and state aid can bring it down more. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want cheap and close to home. Rough if you want a big scene.',
      love: ['You want an affordable degree near Boston', 'You want small classes and professors who know you', 'You want fashion, nutrition or teaching', 'You like having home close by'],
      struggle: ['You want a busy party scene', 'You want big games and school spirit', 'You want a campus that stays full on weekends']
    },

    people: {
      preview: 'Cheap and supportive. Quiet weekends and food are the complaints.',
      plus: ['Low cost for a four-year degree', 'Professors who actually help', 'Easy to get involved in clubs'],
      minus: ['Weekends can feel dead', 'Dining hall food gets mixed reviews', 'Commuter parking is a hassle']
    }
  }
});
