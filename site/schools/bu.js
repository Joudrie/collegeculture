registerSchool({
  id: 'bu',
  name: 'BU',
  nameSub: 'Boston University',
  state: 'Massachusetts',
  location: 'Boston, MA · Along Comm Ave',
  asOf: '2026',

  colors: {
    name: 'Terriers · Scarlet and white',
    swatches: ['#CC0000', '#2D2926', '#FFFFFF'],
    band: '#2D2926',
    onBand: '#FFFFFF',
    onBandMuted: '#BDB7B2',
    stripe: '#CC0000',
    accent: '#CC0000',
    accentOnDark: '#FF6B6B'
  },

  vibe: "A huge city school stretched along one busy street, with the Green Line running down the middle. You get all of Boston as your campus, but you have to go find your people.",
  flags: ['City campus', 'Big school', 'Hockey school', 'No football'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~18,000' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Big, urban and independent. Medium party scene, hockey spirit.',
      meters: {
        party:    { value: 6, note: 'Allston apartments and bars, not frat row' },
        campus:   { value: 3, note: 'One long city street, no real quad' },
        spirit:   { value: 5, note: 'Hockey games get loud' },
        pressure: { value: 6, note: 'Depends a lot on your school within BU' },
        career:   { value: 8, note: 'Boston internships are right there' },
        greek:    { value: 3, note: 'Exists, most people skip it' },
        religion: { value: 1, note: 'Secular, lots of groups if you want one' }
      }
    },

    social: {
      preview: 'Big dorms freshman year, then Allston apartments and the city',
      paragraphs: [
        "Freshman year usually means a giant dorm like Warren Towers, where you'll meet a ton of people on your floor. That's the easiest year to make friends, so go to things early.",
        "After that, the social life moves to apartments in Allston and Brighton, plus bars once people turn 21. Greek life is around but it's a small slice of the school, so it doesn't run the weekends.",
        "With this many students, nobody is going to hand you a friend group. Clubs, your major and your dorm are how people find their crowd. People who wait for it to happen to them say BU feels lonely."
      ]
    },

    gettingIn: {
      preview: 'Very selective now. Test-optional. Early decision helps.',
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away now. It got a lot more selective over the last ten years, so treat it as a reach unless your grades are near the top.' },
        { title: 'Early decision matters.', text: "BU has two early decision rounds. If it's your first choice and the money works, applying ED can help." },
        { title: 'Tests are optional.', text: "BU is test-optional for the next few cycles. Send scores if they're strong. Check the current policy before you apply." },
        { title: 'You apply to a specific school.', text: 'You pick a college inside BU, like business, communication or engineering. Some are harder to get into than others.' }
      ]
    },

    who: {
      preview: 'Independent city people from all over, lots of international students',
      paragraphs: [
        "Students come from all over the country and the world. There's a big international crowd and lots of kids from the New York area, New Jersey and California. People tend to be independent and want a city more than a classic campus.",
        "Majors are all over the place: business, communication, film, health sciences, engineering, pre-med and more. Because BU is so big, you can find the artsy crowd, the finance crowd and the hockey crowd all on the same street."
      ]
    },

    knownFor: {
      preview: 'Comm Ave, hockey, communication and business, and getting harder to get into',
      points: [
        { title: 'Comm Ave', text: 'The whole campus runs along Commonwealth Avenue, with the Green Line B branch down the middle. It feels like a city neighborhood, not a campus.' },
        { title: 'Hockey', text: "BU is a hockey powerhouse. Games at Agganis Arena and the Beanpot against BC, Northeastern and Harvard are the big sports moments. There's no football team." },
        { title: 'Communication and business', text: 'The College of Communication and the Questrom business school are two of the programs people pick BU for. Health sciences and pre-med are big too.' },
        { title: 'Study abroad', text: 'BU runs a lot of its own study abroad programs, and plenty of students spend a semester away.' }
      ]
    },

    stereotypes: {
      preview: '"BU has no campus" is half true. "All rich kids" is half true.',
      items: [
        { said: "BU doesn't have a real campus.", verdict: 'half', text: "There's no big quad. It's a long strip of buildings on a busy street. But there's a riverfront walk, the BU Beach and pockets that feel like campus. If you want rolling lawns, it's not for you." },
        { said: "Everyone's a rich kid.", verdict: 'half', text: "It's an expensive private school and plenty of wealthy students go here. It's also big enough that you'll find people from every kind of background." },
        { said: "It's a party school.", verdict: 'half', text: "People go out, mostly in Allston. But there's no frat row running things and plenty of students are mostly studying. It's a city school with a social side, not a nonstop party." },
        { said: "It's everyone's backup school.", verdict: 'outdated', text: 'Maybe years ago. Now it turns away most applicants and plenty of people pick it first.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is not easy to get into. Boston is expensive. You need to put yourself out there.',
      myths: [
        { title: "Big school means you'll be just a number.", text: "Intro classes can be huge, but upper-level classes get small. Professors help if you show up to office hours." },
        { title: "You'll have the same campus life as a college town.", text: "The city is your campus. That's great for internships and things to do, but the social life is more spread out." }
      ],
      know: [
        { title: 'Dorm guest rules are strict.', text: 'The big dorms have a front desk and you sign guests in. People complain about it, so know it going in.' },
        { title: 'Boston is expensive.', text: 'Upperclassmen who move off campus pay Boston rent, and food and going out add up. The sticker price is not the whole cost.' },
        { title: "You don't need a car.", text: 'The Green Line runs right through campus and gets you anywhere in the city.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a city and independence. Rough if you want a classic campus.',
      love: ['You want to live in a real city', 'You like being independent and finding your own crowd', 'You want internships and things to do nearby', 'You love hockey'],
      struggle: ['You want a green quad and a classic campus', 'You want football Saturdays', 'You need a school that builds your social life for you']
    },

    people: {
      preview: 'The location is the best part. Cost and feeling lost in the crowd are the complaints.',
      plus: ['Living in Boston is the biggest perk', 'So many majors, clubs and people to choose from', 'Hockey games are a blast'],
      minus: ["It's expensive, and Boston rent adds up", 'Easy to feel lonely if you don't put yourself out there', 'The campus is one long busy street']
    }
  }
});
