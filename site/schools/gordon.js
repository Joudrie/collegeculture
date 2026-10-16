registerSchool({
  id: 'gordon',
  name: 'Gordon',
  nameSub: 'College',
  title: 'Gordon College',
  state: 'Massachusetts',
  location: 'Wenham, MA · North Shore woods',
  asOf: '2026',

  colors: {
    name: 'Fighting Scots · Blue and cyan',
    swatches: ['#014983', '#00AEEF', '#D5F0FE'],
    band: '#D5F0FE',
    onBand: '#014983',
    onBandMuted: '#3D5F7E',
    stripe: '#00AEEF',
    accent: '#014983',
    accentOnDark: '#00AEEF'
  },

  vibe: "A small Christian college in the woods north of Boston. Faith is built into daily life here, with required chapel and a conduct code, and the community is tight, quiet and friendly.",
  flags: ['Christian college', 'Chapel required', 'Dry campus', 'Small and tight'],
  facts: [
    { label: 'Setting', value: 'Wooded suburb' },
    { label: 'Undergrads', value: '~1,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Faith-centered, close-knit, quiet weekends',
      meters: {
        party:    { value: 1, note: 'Alcohol is against the rules on campus' },
        campus:   { value: 8, note: 'Woods, ponds and trails' },
        spirit:   { value: 4, note: 'Small crowds, no football' },
        pressure: { value: 4, note: 'Real work, not cutthroat' },
        career:   { value: 5, note: 'Solid, not the main draw' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 10, note: 'Chapel and faith are part of the deal' }
      }
    },

    social: {
      preview: 'Dorm life, chapel and campus events. Not a party scene.',
      paragraphs: [
        "Social life happens on campus. Think coffeehouses, game nights, talent shows, dinners in someone's room and hanging out in the dorms. Students describe the place as always having something small going on.",
        "This is not a party school, and it isn't trying to be. Drinking breaks the school's conduct rules, so the weekend scene is quiet. Students say there are some off-campus parties, but most people aren't part of them.",
        "Because the school is small and almost everyone lives on campus, you get to know people fast. Beaches on the North Shore are close, and Boston is under an hour away, so people with cars get out."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. You share your faith story.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'There is a faith piece.', text: 'The application asks for a faith testimony, and students agree to a statement of faith and a life and conduct statement. Read both before you apply.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. It also accepts the CLT. Check the current policy before you apply." },
        { title: 'Nothing is binding.', text: "Gordon has early action, not early decision, so applying early doesn't lock you in." }
      ]
    },

    who: {
      preview: 'Christian students who want a small, close community',
      paragraphs: [
        "Students come from a wide mix of Christian backgrounds and churches. Most want faith to be part of their college life, not something separate from it. People tend to be friendly, earnest and involved.",
        "It fits people who want small classes, a quiet campus and a community with shared values. If you want a big, anything-goes college experience, you will feel the rules."
      ]
    },

    knownFor: {
      preview: 'Christian liberal arts, required chapel, and La Vida',
      points: [
        { title: 'Christian liberal arts', text: "It's one of the best-known evangelical Christian colleges in New England. Faith shows up in classes, chapel and campus life." },
        { title: 'Required chapel', text: 'Chapel runs Monday, Wednesday and Friday mornings. Students earn a set number of chapel credits each semester, and falling short has consequences.' },
        { title: 'La Vida', text: "First-years do an outdoor program, either a 12-day wilderness expedition or an on-campus version with ropes courses and climbing. It's a big bonding experience." },
        { title: 'The campus', text: 'It sits on a big wooded property with ponds and trails, a short drive from the ocean.' }
      ]
    },

    stereotypes: {
      preview: '"Dry campus" is true. "Just a Bible college" is a myth.',
      items: [
        { said: "It's a dry campus.", verdict: 'true', text: "Alcohol is against the conduct rules, and students know it. That's a big part of why weekends are quiet." },
        { said: "It's just a Bible college.", verdict: 'myth', text: 'It is a liberal arts college with majors like biology, business, psychology, education and music. Faith is part of it, but you can major in plenty of things besides theology.' },
        { said: "There's nothing to do.", verdict: 'half', text: "There's no party scene, and Wenham is quiet. But there are lots of small campus events, and the beach and Boston are close." },
        { said: 'Everyone knows everyone.', verdict: 'true', text: "It's small and almost everyone lives on campus. Great if you like that. Hard if you want to blend in." }
      ]
    },

    mythsAndKnow: {
      preview: 'The rules are real. Read the conduct statement first.',
      myths: [
        { title: 'The rules are just suggestions.', text: 'You agree to the life and conduct statement as a student, and it covers things like alcohol and relationships. Breaking it can lead to discipline.' },
        { title: "It's in the middle of nowhere.", text: "It's in a quiet town, but the North Shore has beaches and downtowns nearby, and Boston is under an hour away." }
      ],
      know: [
        { title: 'Read the conduct statement.', text: "Know exactly what you're agreeing to before you commit. If parts of it would bother you, take that seriously." },
        { title: 'Chapel is not optional.', text: 'Plan on going to chapel a few mornings a week. Credits are tracked every semester.' },
        { title: 'A car helps.', text: 'Getting to Boston, the beach or a grocery store is a lot easier if you drive.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want faith at the center. Rough if you want freedom and parties.',
      love: ['You want faith to be part of everyday college life', 'You want a small, tight community', 'You like the outdoors', 'You want professors who know your name'],
      struggle: ["You don't want required chapel or a conduct code", 'You want a party scene or Greek life', 'You want a big, diverse school with lots going on']
    },

    people: {
      preview: 'Community and professors win. Rules and quiet weekends are the complaints.',
      plus: ['Friendly, close-knit community', 'Small classes and caring professors', 'Beautiful wooded campus near the ocean'],
      minus: ['Rules can feel strict', 'Quiet weekends', 'Not much to do without a car']
    }
  }
});
