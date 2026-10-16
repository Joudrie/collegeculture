registerSchool({
  id: 'umass-amherst',
  name: 'UMass',
  title: 'UMass Amherst',
  nameSub: 'Amherst',
  state: 'Massachusetts',
  location: 'Amherst, MA · Pioneer Valley college town',
  asOf: '2026',

  colors: {
    name: 'Minutemen and Minutewomen · Maroon and black',
    swatches: ['#840028', '#212721', '#FFFFFF'],
    band: '#840028',
    onBand: '#FFFFFF',
    onBandMuted: '#F2B8C2',
    stripe: '#A2AAAD',
    accent: '#840028',
    accentOnDark: '#FF7A8A'
  },

  vibe: "A huge state school that feels like its own small city. Great food, a big social scene, and so many people that you can find your crowd no matter what you're into.",
  flags: ['Huge campus', 'Best dining hall food', 'Five Colleges', 'Mostly in-state'],
  facts: [
    { label: 'Setting', value: 'College town' },
    { label: 'Undergrads', value: '~23,000' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Big, social, lots to do, and the food is actually good',
      meters: {
        party:    { value: 7, note: 'Big off-campus scene, calmer than its rep' },
        campus:   { value: 7, note: 'Huge and spread out, with a pond in the middle' },
        spirit:   { value: 6, note: 'Hockey is the hot ticket' },
        pressure: { value: 5, note: 'Depends on your major, some are tough' },
        career:   { value: 7, note: 'Strong in business, CS and engineering' },
        greek:    { value: 3, note: 'Around, but most people skip it' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Something for everyone. You have to go find your people.',
      paragraphs: [
        "With over 20,000 undergrads, there's a scene for everything. Hundreds of clubs, club sports, intramurals, and a party scene for people who want it. The flip side is that nobody hands you a friend group. Your dorm floor and your clubs are where it starts.",
        "Where you live freshman year shapes things. Southwest is the big tower area and the most social. Other areas, like Orchard Hill, are quieter. Upperclassmen often move to apartments in Amherst and nearby towns.",
        "The Five College buses connect you to Amherst College, Smith and Mount Holyoke, and Northampton is a short ride for shows, food and coffee shops."
      ]
    },

    gettingIn: {
      preview: "About half to two-thirds get in. Some majors are much harder.",
      points: [
        { title: "It's harder than it used to be.", text: 'UMass turns away a good chunk of applicants now. Strong grades matter. Your parents may remember it as easier.' },
        { title: 'Tests are optional.', text: "You can apply with or without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Your major matters a lot.', text: 'Computer science, nursing, engineering and business are much harder to get into than the school overall.' },
        { title: 'Honors college is separate.', text: 'Commonwealth Honors College is part of UMass. It has its own housing and extra classes for students who get in.' }
      ]
    },

    who: {
      preview: 'Mostly Massachusetts kids, plus everyone else',
      paragraphs: [
        "Most students are from Massachusetts, with a solid group from the rest of New England, New York and New Jersey. Because it's so big, you'll meet every type of person here.",
        "Lots of business, computer science, engineering, nursing and psychology students. Some people are super focused, some are there for the experience. Both fit in fine."
      ]
    },

    knownFor: {
      preview: 'The food, the old ZooMass rep, hockey, and strong majors',
      points: [
        { title: 'The food', text: "UMass has been ranked number one for campus food by The Princeton Review year after year. People really do brag about the dining halls." },
        { title: 'ZooMass', text: "The old party nickname. Students still use it, sometimes as a joke, sometimes as a badge of honor." },
        { title: 'Hockey', text: 'UMass won the men\'s national hockey title in 2021. Games at the Mullins Center are the big night out.' },
        { title: 'Strong programs', text: 'The Isenberg School of Management and computer science are the two names people bring up most.' }
      ]
    },

    stereotypes: {
      preview: '"ZooMass" is half true. "Backup school" is outdated.',
      items: [
        { said: "It's ZooMass, a total party school.", verdict: 'half', text: "There is a big party scene, and some weekends get wild. But the school has cracked down a lot, and plenty of people never go near it." },
        { said: "It's everyone's safety school.", verdict: 'outdated', text: "It used to be. Now it's harder to get into, and a lot of students pick it first, especially for business and CS." },
        { said: 'Everyone is from Massachusetts.', verdict: 'true', text: "Most students are in-state. If you're from Mass, you'll probably run into people from your high school." },
        { said: "You'll be just a number.", verdict: 'half', text: "Intro classes can be huge. Upper-level classes get smaller, and clubs make the school feel smaller too." }
      ]
    },

    mythsAndKnow: {
      preview: 'Big classes early, free buses, and pick your housing area carefully',
      myths: [
        { title: "UMass is easy to get into.", text: 'Not anymore. Plenty of strong students get turned down, especially for popular majors.' },
        { title: 'Big school means no help.', text: 'Help is there, but you have to go get it. Office hours, tutoring and advisors work if you use them.' }
      ],
      know: [
        { title: 'Intro classes are big.', text: 'Some first-year lectures are in giant halls. It gets better as you get into your major.' },
        { title: "You don't need a car.", text: 'The PVTA buses run all over Amherst and to the other Five Colleges, and they are free for students.' },
        { title: 'Campus is spread out.', text: 'Walking from one side to the other takes a while. Expect a lot of walking in the cold.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a big, social school. Rough if you want small classes.',
      love: ['You want a big school with tons of options', 'You want a real social scene and big game nights', "You're in-state and want a strong school at a lower price", 'You like good food'],
      struggle: ['You want small classes from day one', 'You need people to check in on you', 'You want a city right outside your door']
    },

    people: {
      preview: 'Food, options and price are the wins. Size is the complaint.',
      plus: ['The food really is that good', 'So many clubs and people that you find your crowd', 'Good value, especially for in-state students'],
      minus: ['Intro classes are huge', 'Housing and registration can be a hassle', 'Easy to feel lost if you don\'t put yourself out there']
    }
  }
});
