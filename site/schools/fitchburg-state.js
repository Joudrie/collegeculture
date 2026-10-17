registerSchool({
  id: 'fitchburg-state',
  name: 'Fitchburg State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Fitchburg, MA · North Central Mass',
  asOf: '2026',

  colors: {
    name: 'Falcons · Green and gold',
    swatches: ['#00563F', '#E9AF2F'],
    band: '#E9AF2F',
    onBand: '#00261C',
    onBandMuted: '#004633',
    stripe: '#00563F',
    accent: '#00563F',
    accentOnDark: '#E9AF2F'
  },

  vibe: "A small, cheap state school in an old mill city, with a surprisingly strong media program. About half the students commute, so it's low-key, practical and friendly more than wild.",
  flags: ['Film and game design', 'Half commuters', 'Affordable', 'Small city'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~3,400' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mix of residents and commuters, basic dorms, average food", "housing": ["Many students live on campus, and many commute.", "Housing includes traditional dorms and some suite or apartment-style options.", "Students often move off campus into the city later."], "food": ["There is a main dining hall and some smaller options.", "Students call it fine, not great.", "Fitchburg has cheap local places to eat."]},
    vibe: {
      preview: 'Low-key, creative pockets, lots of commuters',
      meters: {
        party:    { value: 3, note: 'Small parties, not a scene' },
        campus:   { value: 5, note: 'Compact campus inside the city' },
        spirit:   { value: 3, note: 'Football and hockey, small crowds' },
        pressure: { value: 3, note: 'Supportive, not cutthroat' },
        career:   { value: 7, note: 'Hands-on majors like nursing and media' },
        greek:    { value: 2, note: 'A few chapters, a small slice of students' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Clubs and your major are where friends come from. Weekends are quiet.',
      paragraphs: [
        "Somewhere around half the undergrads commute, and a lot of residents are from Massachusetts and go home some weekends. That makes campus pretty calm, especially Friday to Sunday.",
        "The people who stay find each other through clubs, teams and their major. Communications media students in particular spend a lot of time together in the studios and labs. There are around 60 clubs, plus a student paper and radio station.",
        "Commuters get real attention here, with their own lounge and events. The commuter rail runs from Fitchburg to Boston, so the city is reachable, but it's a long ride."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Steady grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some majors have extra steps.', text: 'Nursing in particular can be more competitive and has its own requirements. Check the program page early.' }
      ]
    },

    who: {
      preview: 'Mass kids, creative types, future nurses and teachers',
      paragraphs: [
        "Mostly students from Massachusetts, many from central and northern parts of the state. There's a creative crowd in film, game design, photography and graphic design, plus a lot of nursing, education, business and criminal justice students.",
        "It's a practical, unpretentious place. Lots of students work part time and plenty are the first in their family at college. People come for a useful degree at a low price."
      ]
    },

    knownFor: {
      preview: 'Communications media, game design, nursing and teacher training',
      points: [
        { title: 'Communications media', text: "The school's standout. Film and video, photography, graphic design and more, with real studios and equipment students use from early on." },
        { title: 'Game design', text: 'It was the first public school in New England to offer a game design degree. Students build games in teams, and some work with mentors from the industry.' },
        { title: 'Nursing', text: 'A popular program with a practice hospital space on campus.' },
        { title: 'Teacher training', text: 'It started in 1894 as a school for training teachers, and education is still a core program.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is half true. "Sketchy city" is overblown.',
      items: [
        { said: "It's a commuter school.", verdict: 'half', text: 'About half the students commute, so the weekends are quiet. The other half live in the dorms and have a normal college routine.' },
        { said: 'Fitchburg is sketchy.', verdict: 'half', text: "It's an old mill city that has had hard times, and some parts are rougher than others. Students generally say campus itself feels safe." },
        { said: "There's nothing to do.", verdict: 'half', text: "On campus there are events and clubs, but the town isn't a college town. A car or the train makes a big difference." },
        { said: 'Small state school means weak programs.', verdict: 'myth', text: 'The media and game design programs have real equipment, industry ties and alumni who ship actual games and films.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Cheap for in-state, quiet weekends, a car helps',
      myths: [
        { title: "It's only for locals.", text: 'Plenty of students are from nearby, but people come from all over the state for media, game design and nursing.' },
        { title: 'Cheap means you get less.', text: 'Classes are small and professors are easy to reach. What you get out of it depends on how involved you get.' }
      ],
      know: [
        { title: 'A car helps.', text: 'The commuter rail goes to Boston, but it takes a while. Getting around central Mass is much easier if you drive.' },
        { title: 'Weekends are quiet.', text: "If you want a constant social scene, this isn't it. If you're happy with a small group and a calm campus, it works." },
        { title: 'Get into the studios early.', text: 'Media and game design students who start projects and clubs early tend to leave with the best portfolios.' },
        { title: 'Look at net price, not sticker price.', text: "In-state cost is low to begin with, and state aid can bring it down more. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for media and game design on a budget. Rough if you want a party campus.',
      love: ['You want film, game design or other media work', 'You want a cheap degree with small classes', 'You want nursing or teaching at a state school price', "You're fine with a quiet, low-drama campus"],
      struggle: ['You want a big party scene', 'You want a classic college town', 'You want big-time sports and school spirit']
    },

    people: {
      preview: 'Affordable with good media programs. Quiet weekends and the city are the complaints.',
      plus: ['Hands-on media and game design programs', 'Low cost for in-state students', 'Small classes and helpful professors'],
      minus: ['Weekends feel empty with so many commuters', 'The city is not much of a college town', 'Hard to get around without a car']
    }
  }
});
