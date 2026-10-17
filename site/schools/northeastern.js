registerSchool({
  id: 'northeastern',
  name: 'Northeastern',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Boston · Fenway / Huntington Ave',
  asOf: '2026',

  colors: {
    name: 'Huskies · Red and black',
    swatches: ['#D41B2C', '#000000'],
    band: '#0B0B0B',
    onBand: '#FFFFFF',
    onBandMuted: '#B9B9B9',
    stripe: '#D41B2C',
    accent: '#C8102E',
    accentOnDark: '#FF6B6B'
  },

  vibe: "A big, busy city school where most people are there to get hired. You'll work real jobs before you graduate, but your friend group moves around a lot.",
  flags: ['City campus', 'Career-focused', '5 years is normal', 'No car needed'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~20,000' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '5 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "On the T; Logan is a short ride away", "points": ["The Orange Line and Green Line E branch both stop at or near campus.", "Logan Airport is the closest major airport.", "You do not need a car. Check the school's rules on first-year cars."]},
    "traditions": {"preview": "The Beanpot hockey tournament in February", "items": ["The Beanpot is a yearly hockey tournament between Northeastern, BU, BC and Harvard, played in Boston."]},
    "living": {"preview": "Most first-years live on campus, then move to pricey off-campus apartments", "housing": ["Most first-years live on campus, usually in doubles or suites.", "Upperclassmen often move to apartments in Boston, and rent there is expensive.", "Co-op semesters mean some students sublet or move around a lot."], "food": ["There are several dining halls plus a lot of campus food spots.", "Students say the dining halls are decent, but they get repetitive.", "Plenty of cheap and good food is nearby in the city."]},
    vibe: {
      preview: 'Huge career focus, medium party scene, city campus',
      meters: {
        party:    { value: 5,  note: 'Spread out in off-campus apartments' },
        campus:   { value: 3,  note: 'Nice quad, surrounded by city' },
        spirit:   { value: 4,  note: 'Comes out for hockey' },
        pressure: { value: 7,  note: 'Competitive, mostly about jobs' },
        career:   { value: 10, note: 'The main reason people pick it' },
        greek:    { value: 3,  note: 'Around if you want it, easy to ignore' },
        religion: { value: 1,  note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Dorms freshman year, then apartments and small friend groups',
      paragraphs: [
        'Freshman year in the dorms is the most social it gets. After that, most people move into apartments in Mission Hill, Fenway and nearby neighborhoods, and the scene becomes small friend groups and apartment parties.',
        "Co-op is the big shake-up. Half your friends might be working full time while you're in class, then you swap. Some people love the reset. Others say it's hard to keep a group together.",
        'Boston fills in the gaps. Fenway Park is a walk away, the T gets you anywhere, and schools like BU and Berklee are close enough that social circles mix.'
      ]
    },

    gettingIn: {
      preview: "Very selective now. Apply early if it's your top pick.",
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away. Treat it as a reach unless your grades are near the top of your class.' },
        { title: 'Early application matters.', text: "It has early decision and early action rounds. If it's your first choice, applying early can help." },
        { title: 'Tests may be optional.', text: 'It has been test-optional in recent years. Check the current policy before you apply.' },
        { title: 'You might get NUin.', text: "Some admits spend their first semester at a partner campus, often abroad, then come to Boston in the spring. It's a real admission." }
      ]
    },

    who: {
      preview: 'Driven, career-minded, lots of business and engineering',
      paragraphs: [
        "Driven people who already have a rough idea of what job they want. Lots of business, engineering, computer science, health science and nursing students. There's a big international crowd and plenty of kids from New York, New Jersey and the rest of the Northeast.",
        'It\'s not a "figure yourself out for four years" school. Undecided students do fine, but they\'ll feel pressure to pick a direction sooner than at a liberal arts college.'
      ]
    },

    knownFor: {
      preview: 'Co-op, getting very hard to get into, and hockey',
      points: [
        { title: 'Co-op', text: "You alternate between classes and 4 to 6 month stretches working a real job, often paid. Most students do two or three. It's the whole identity of the school." },
        { title: 'A fast climb', text: 'Twenty years ago it was a backup school. Now it turns away most applicants.' },
        { title: 'Hockey', text: 'The Beanpot tournament against BU, BC and Harvard is the one time a year the whole school cares about sports.' }
      ]
    },

    stereotypes: {
      preview: '"Career-obsessed" is mostly true. "Safety school" is outdated.',
      items: [
        { said: "Everyone's obsessed with their career.", verdict: 'true', text: "It's the point of the school. People talk about co-op interviews the way other schools talk about parties. The upside is you leave with a real resume." },
        { said: "There's no school spirit.", verdict: 'half', text: "Football was cut in 2009, so there are no fall game days. Hockey brings people out, but day to day it's quieter than BC or UMass." },
        { said: "It's a safety school.", verdict: 'outdated', text: "True for your parents' generation. Today it's one of the harder schools in the state to get into." },
        { said: "It doesn't feel like a real campus.", verdict: 'half', text: "The center of campus has green space and is pretty nice. Walk a block away and you're in the city with no clear edge." }
      ]
    },

    mythsAndKnow: {
      preview: 'Plan for 5 years, Boston is expensive, no car needed',
      myths: [
        { title: "It's a 4-year school.", text: "Most people take 5 years because of co-op. There's a 4-year track with fewer co-ops. Plan for the cost of the extra year." },
        { title: 'Co-op hands you a job.', text: 'The school helps, but you apply and interview like anyone else. Your first co-op might not be your dream company.' }
      ],
      know: [
        { title: 'Your friend group will shift.', text: 'Co-op schedules split people up every few months. Clubs and roommates become the steady part.' },
        { title: 'Boston is expensive.', text: "Most upperclassmen live off campus, and rent nearby is high. The sticker price isn't the whole cost." },
        { title: "You don't need a car.", text: 'The Green Line E branch and the Orange Line both stop by campus.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a job lined up. Rough if you want tailgates.',
      love: ['You want work experience before you graduate', 'You want to live in a real city', "You're fine making your own social scene"],
      struggle: ['You want game days and tailgates', 'You want the same friend group all four years', 'You want time to explore before picking a path']
    },

    people: {
      preview: 'Co-op pays off. Cost and scattered social life are the complaints.',
      plus: ['Co-op pays off with real jobs and connections', 'Boston makes internships and free time easy', 'The campus is nicer than expected for a city school'],
      minus: ["It's expensive, and the fifth year adds up", 'Social life can feel scattered after year one', 'The career energy can feel draining']
    }
  }
});
