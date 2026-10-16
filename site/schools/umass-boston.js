registerSchool({
  id: 'umass-boston',
  name: 'UMass',
  title: 'UMass Boston',
  nameSub: 'Boston',
  state: 'Massachusetts',
  location: 'Boston, MA · Columbia Point on the harbor',
  asOf: '2026',

  colors: {
    name: 'Beacons · Blue and white',
    swatches: ['#005A8B', '#FEDE42', '#FFFFFF'],
    band: '#005A8B',
    onBand: '#FFFFFF',
    onBandMuted: '#CFE4F5',
    stripe: '#FEDE42',
    accent: '#005A8B',
    accentOnDark: '#78AFE9'
  },

  vibe: "A public university on the water in Dorchester where most people commute, a lot of them work, and the student body looks like the whole city. It's affordable and serious, but you build your own social life.",
  flags: ['Mostly commuters', 'On the harbor', 'Very diverse', 'Good value'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~12,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Very small' }
  ],

  sections: {
    vibe: {
      preview: 'Commuter-heavy, diverse, independent, nice harbor views',
      meters: {
        party:    { value: 2, note: 'Not a party campus, people go out in the city' },
        campus:   { value: 5, note: 'On the water, newer buildings and dorms' },
        spirit:   { value: 2, note: 'Small crowds at Division III games' },
        pressure: { value: 5, note: 'Depends on your major, nursing is tough' },
        career:   { value: 6, note: 'Boston internships are a train ride away' },
        greek:    { value: 1, note: 'A couple of groups, no houses' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Your dorm and your clubs are everything. Commuters have to try harder.',
      paragraphs: [
        "Most students commute, and many work jobs or have families. That means a lot of people come for class and leave. Friend groups form in clubs, cultural groups, study groups and the dorms, not by just hanging around.",
        "The first residence halls opened in 2018, so living on campus is still pretty new here. Students who live there say it makes a big difference for meeting people. It's a smaller dorm crowd than at a typical state school.",
        "Weekends are about Boston, not campus. The Red Line is a short shuttle ride away, and downtown, Southie and the rest of the city are easy to reach."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Transfers are a big deal here.', text: 'A lot of students transfer in from community colleges. It is a common and well-worn path.' },
        { title: 'There is an honors college.', text: 'The Honors College offers smaller classes and extra challenge for students who want it.' }
      ]
    },

    who: {
      preview: 'Boston-area students from every background, many working their way through',
      paragraphs: [
        "UMass Boston has one of the most diverse student bodies in New England. Students come from all over the Boston area and from families around the world, and lots of them are the first in their family to go to college.",
        "Many students are older than 18 to 22, transferred in, or work a lot of hours. It fits independent, motivated people who want a real degree at a public price and don't need a traditional campus scene."
      ]
    },

    knownFor: {
      preview: 'The harbor location, diversity, nursing and a good price',
      points: [
        { title: 'On the harbor', text: 'The campus sits on Columbia Point next to the JFK Presidential Library, with the Harborwalk around it and water views from a lot of buildings.' },
        { title: 'Diversity', text: 'Students describe classes where people bring very different life experiences. It is a big part of how the school sees itself.' },
        { title: 'Nursing and health', text: 'Nursing is one of the best-known programs and is more competitive than the school overall.' },
        { title: 'Public price in Boston', text: "It's one of the cheapest ways to get a four-year degree while living in or near Boston." }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is true. "No campus life" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: "Most students commute, and that shapes everything. The dorms have changed things a bit, but it's still mostly commuters." },
        { said: "There's no campus life.", verdict: 'half', text: "It's quieter than a residential school. But there are clubs, cultural groups and events, and dorm students say they found a community." },
        { said: "It's the backup to UMass Amherst.", verdict: 'half', text: "Some students do pick it after other schools. Plenty choose it on purpose to stay in Boston, keep working or save money." },
        { said: 'The campus is always under construction.', verdict: 'half', text: 'It went through years of construction and garage repairs. A lot of that is done, and the newer buildings are nice.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Take the shuttle, get involved early, and plan for the commute.',
      myths: [
        { title: "It's in a bad part of Boston.", text: "Columbia Point is a quiet peninsula with the JFK Library next door. It's a normal city area with normal city sense." },
        { title: 'Easy to get in means an easy school.', text: 'Admission is open to a lot of people, but classes still take work, especially in nursing and the sciences.' }
      ],
      know: [
        { title: 'The T is close.', text: 'JFK/UMass station on the Red Line is a short free shuttle ride from campus.' },
        { title: 'Dorm spots are limited.', text: 'There are far fewer beds than students. If you want to live on campus, apply for housing early.' },
        { title: 'Get involved early.', text: 'With so many commuters, clubs are how people meet. Students who join early tend to be happiest.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want an affordable Boston degree. Rough if you want a campus bubble.',
      love: ['You want to stay in Boston and save money', 'You want to meet people from every background', "You're independent and fine building your own social life", 'You plan to work while you study'],
      struggle: ['You want a classic dorm-and-quad experience', 'You want big games and school spirit', 'You want a big party scene']
    },

    people: {
      preview: 'Price, diversity and the views win. Community is the complaint.',
      plus: ['Affordable for a Boston school', 'People from all kinds of backgrounds', 'The harbor views are great'],
      minus: ['Hard to make friends if you commute', 'Not much school spirit', 'Parking and the commute can be a pain']
    }
  }
});
