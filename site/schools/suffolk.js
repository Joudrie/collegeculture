registerSchool({
  id: 'suffolk',
  name: 'Suffolk',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Boston, MA · Beacon Hill / State House',
  asOf: '2026',

  colors: {
    name: 'Rams · Blue and gold',
    swatches: ['#15284B', '#BC912C'],
    band: '#BC912C',
    onBand: '#15284B',
    onBandMuted: '#3B2E0A',
    stripe: '#15284B',
    accent: '#15284B',
    accentOnDark: '#BC912C'
  },

  vibe: "A small school spread across a few buildings in downtown Boston, right next to the State House and Boston Common. The city is your campus, and a lot of people are here for law, business or politics.",
  flags: ['No real campus', 'Downtown Boston', 'Lots of commuters', 'Easy to get in'],
  facts: [
    { label: 'Setting', value: 'Downtown city' },
    { label: 'Undergrads', value: '~4,300' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "City school with dorms downtown; many commute or move off campus", "housing": ["Dorms are in downtown Boston buildings, not a traditional green campus.", "Many students live off campus or commute.", "Boston rent is high, so students often share apartments."], "food": ["There is no big campus food scene since the school is in the middle of the city.", "Students mix meal plans with eating out around Beacon Hill and downtown.", "Boston has endless places to eat, but it costs money."]},
    vibe: {
      preview: 'Urban, independent, career-minded, light on school spirit',
      meters: {
        party:    { value: 4, note: 'Bars and apartments, not a campus scene' },
        campus:   { value: 2, note: 'Buildings downtown, the Common is the quad' },
        spirit:   { value: 2, note: 'Small crowds at games' },
        pressure: { value: 4, note: 'Manageable, depends on your major' },
        career:   { value: 7, note: 'Internships at the State House and downtown firms' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs and your dorm are everything. Commuters have it harder.',
      paragraphs: [
        "There's no quad where everyone hangs out, so you don't bump into people by accident. Friend groups form in the dorms freshman year, in clubs and in classes. Students who join things say they found their people. Students who don't say it can feel lonely.",
        "A big chunk of students commute, and they say it's tough to build a social life when you leave right after class. If you live in the dorms, you have a much easier time.",
        "The upside is the location. Boston Common, Downtown Crossing, the North End and the T are all a few minutes' walk. Weekends are about going out in the city, not staying on campus."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Merit aid is common.', text: 'Like a lot of private schools, Suffolk gives many students scholarships. The sticker price is not what most people pay.' }
      ]
    },

    who: {
      preview: 'City kids, future lawyers, politics nerds and business majors',
      paragraphs: [
        "People who want to be in the middle of a city and don't need a classic campus. Lots of business, government, criminal justice, communications and pre-law students. Many are from Massachusetts, and there's a sizable international crowd.",
        "It fits independent people. Nobody is going to plan your social life for you, and a lot of students work part time or do internships while they're in school."
      ]
    },

    knownFor: {
      preview: 'Suffolk Law, the political poll, and a downtown location',
      points: [
        { title: 'Suffolk Law', text: 'The law school is right next door and has a lot of alumni working in Massachusetts courts and government. Undergrads interested in law see it up close.' },
        { title: 'The Suffolk poll', text: "Suffolk's political research center runs election polls you may hear about on the news. Students can get involved." },
        { title: 'Next to the State House', text: 'Government and politics students can intern at the State House and nearby offices without getting on a train.' },
        { title: 'Business school', text: 'The Sawyer Business School is a big part of the undergrad population. Accounting, finance and marketing are popular.' }
      ]
    },

    stereotypes: {
      preview: '"No campus" is true. "Everyone commutes" is half true.',
      items: [
        { said: "It doesn't have a campus.", verdict: 'true', text: "Not a traditional one. It's a group of buildings on and around Tremont Street. Boston Common is basically the front lawn." },
        { said: "It's a commuter school.", verdict: 'half', text: "Lots of students commute, and it shapes the social scene. Plenty of others live in the dorms and have a normal college experience." },
        { said: "There's no school spirit.", verdict: 'true', text: "There's no football team, and Division III games don't draw big crowds. People bond over clubs and the city, not sports." },
        { said: "It's only for future lawyers.", verdict: 'myth', text: 'The law school gets attention, but most undergrads are in business, communications, government and the sciences.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Housing gets tight after freshman year. Boston is expensive.',
      myths: [
        { title: 'Easy to get in means an easy school.', text: 'Admission is open to a lot of people, but classes still take work. Small class sizes mean professors notice who shows up.' },
        { title: "There's nothing to do.", text: "There's less to do on campus. Off campus, you're in the middle of one of the best college cities in the country." }
      ],
      know: [
        { title: 'Upperclass housing is limited.', text: 'Students say dorm options shrink after the first year or two, and Boston rent is high. Plan ahead.' },
        { title: "You don't need a car.", text: 'Park Street and Government Center stations are a short walk. A car is mostly a parking headache.' },
        { title: 'Get involved early.', text: 'Without a central campus, clubs and student groups are how people meet. The ones who join early tend to be happiest.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want downtown Boston. Rough if you want a campus bubble.',
      love: ['You want to live in the middle of a real city', 'You want internships in law, politics or business', "You're independent and fine building your own social life", 'You want small classes where professors know you'],
      struggle: ['You want a green quad and a campus bubble', 'You want big games and school spirit', "You're commuting and want a big social scene"]
    },

    people: {
      preview: 'Location and small classes win. Community and housing are the complaints.',
      plus: ['The location is hard to beat', 'Small classes and approachable professors', 'Real internship access downtown'],
      minus: ['Community can feel weak, especially for commuters', 'Housing and dining are pricey and some buildings are dated', 'Little school spirit']
    }
  }
});
