registerSchool({
  id: 'sacred-heart',
  name: 'Sacred Heart',
  nameSub: 'University',
  state: 'Connecticut',
  location: 'Fairfield, CT · Suburban campus',
  asOf: '2026',

  colors: {
    name: 'Pioneers · Red and white',
    swatches: ['#CD1041', '#8A8D8F', '#1A1718'],
    band: '#CD1041',
    onBand: '#FFFFFF',
    onBandMuted: '#FFE9EE',
    stripe: '#1A1718',
    accent: '#CD1041',
    accentOnDark: '#FF7A93'
  },

  vibe: "A mid-sized Catholic school close to New York with a big sports scene and a lot of Division I teams. It's friendly and social, with a strong pull toward business, nursing and health programs.",
  flags: ['Division I sports', 'Catholic school', 'Near NYC', 'Greek life is small'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~6,500' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division I' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Metro-North and I-95 corridor; a car helps", "points": ["Fairfield has Metro-North service on the New Haven line, and local buses run in the area.", "Westchester County, LaGuardia, JFK and Bradley are the usual airport options.", "A car makes campus life easier. Check the school's rules on first-year cars."]},
    "living": {"preview": "Lots of students live on campus; food has many options, suburban area", "housing": ["Many students live on campus, especially first-years.", "Housing includes traditional dorms and apartment-style options for older students.", "Some students live in nearby houses and apartments."], "food": ["There are several places to eat on campus, not just one hall.", "Students say the food is fine, with decent variety.", "Fairfield has restaurants nearby, but a car or ride helps."]},
    vibe: {
      preview: 'Friendly, sporty, career-minded, Catholic roots',
      meters: {
        party:    { value: 6, note: 'Off-campus houses and apartments' },
        campus:   { value: 6, note: 'Large, suburban and mostly modern' },
        spirit:   { value: 6, note: 'Hockey, football and basketball have fans' },
        pressure: { value: 5, note: 'Manageable if you stay on top of it' },
        career:   { value: 7, note: 'Business, nursing and health pipelines' },
        greek:    { value: 3, note: 'Around, not the main scene' },
        religion: { value: 3, note: 'Catholic, but not pushy' }
      }
    },

    social: {
      preview: 'Sports, off-campus houses and weekend trips home or to NYC',
      paragraphs: [
        "Sports are a big part of the social scene. With Division I teams, there are games to go to, and lots of students are athletes. Friend groups often start from teams, dorms and clubs.",
        "Off-campus housing is a big deal for upperclassmen, and parties move there. Greek life exists but is small compared to many schools.",
        "A lot of students are from the Northeast, so weekends can be quieter when people go home. New York is about an hour away."
      ]
    },

    gettingIn: {
      preview: 'Selective but not extreme. Tests may be optional.',
      points: [
        { title: "It's moderately selective.", text: 'Solid grades will give you a real shot. Some programs, like nursing and physical therapy, are harder to get into.' },
        { title: 'Check the test policy.', text: 'It has been test-optional in recent years. Confirm before you apply.' },
        { title: 'Merit aid is common.', text: 'Sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Northeast kids, athletes, business and health majors',
      paragraphs: [
        "A lot of students come from Connecticut, New York, New Jersey and Massachusetts. Popular majors include business, nursing, health sciences, communications and psychology.",
        "It fits people who want a friendly, active campus with sports and a path toward a job."
      ]
    },

    knownFor: {
      preview: 'Division I sports, health programs and a fast-growing campus',
      points: [
        { title: 'Division I teams', text: 'Many teams compete at the top level, including football at the FCS level.' },
        { title: 'Health programs', text: 'Nursing, physical therapy and other health fields are a big draw.' },
        { title: 'Jack Welch College of Business', text: 'Business is a big part of the school, and it has a lot of majors.' },
        { title: 'Big growth', text: 'The school has grown a lot over the past couple of decades, with new buildings and programs.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is outdated. "Jock school" is half true.',
      items: [
        { said: "It's a jock school.", verdict: 'half', text: "Lots of students play sports, and teams matter. But there are plenty of non-athletes with their own friend groups." },
        { said: "It's a commuter school.", verdict: 'outdated', text: "Some students commute, but a large share live on campus now." },
        { said: "It's a backup for Fairfield.", verdict: 'half', text: "People compare the two because they're in the same town. Some students choose Sacred Heart first for specific programs or athletics." },
        { said: "It's very religious.", verdict: 'myth', text: "It's Catholic, and there are campus ministry and a few required classes. Most students don't feel much pressure about it." }
      ]
    },

    mythsAndKnow: {
      preview: 'Big school feel, lots of majors, check program requirements.',
      myths: [
        { title: 'It is a small Catholic school.', text: 'It is one of the larger private schools in the state, with thousands of students.' },
        { title: 'It is just for athletes.', text: 'Athletics are a big piece, but most students are not on teams.' }
      ],
      know: [
        { title: 'Some programs are competitive.', text: 'Getting into nursing or other health programs can be harder than general admission.' },
        { title: 'Off-campus housing is common.', text: 'Many upperclassmen move into apartments or houses nearby.' },
        { title: 'A car helps.', text: 'The campus is suburban, and a car makes errands easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want sports and a job-focused degree. Rough if you want a big city.',
      love: ['You want Division I sports', 'You want a health or business degree', 'You want to be near NYC', 'You like a friendly, active campus'],
      struggle: ['You want a city setting', 'You want a very alternative crowd', 'You want a huge Greek scene']
    },

    people: {
      preview: 'Friendly people and sports win. Size and feel are the complaints.',
      plus: ['Strong health and business programs', 'Real school spirit through sports', 'Friendly campus'],
      minus: ['Suburban, not much nearby', 'Can feel like a lot of the same kind of student', 'Cost adds up']
    }
  }
});
