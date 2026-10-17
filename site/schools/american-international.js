registerSchool({
  id: 'american-international',
  name: 'AIC',
  nameSub: 'American International College',
  title: 'American International College',
  state: 'Massachusetts',
  location: 'Springfield, MA · State Street',
  asOf: '2026',

  colors: {
    name: 'Yellow Jackets · Black and gold',
    swatches: ['#1A1919', '#FFB81C'],
    band: '#1A1919',
    onBand: '#FFFFFF',
    onBandMuted: '#C2C2C2',
    stripe: '#FFB81C',
    accent: '#8A5A00',
    accentOnDark: '#FFB81C'
  },

  vibe: "A small college in the middle of Springfield where a lot of students are training for health careers like nursing and therapy. Classes are small, athletes are everywhere, and many students are the first in their family to go to college.",
  flags: ['Small school', 'City campus', 'Health science heavy', 'Check its finances'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~1,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Sports', value: 'Division II' }
  ],

  sections: {
    "living": {"preview": "Small campus with both residents and commuters; food is basic.", "housing": ["Many students live on campus, though a good number commute.", "Housing is mostly traditional dorms and some apartment-style options.", "The campus is in Springfield, so the neighborhood matters when you visit."], "food": ["Dining is small, with a main dining hall and a few other spots.", "Residents usually need a meal plan.", "Springfield has local restaurants, but many students stick to campus."]},
    vibe: {
      preview: 'Small, athletic, health-career focused, quiet social scene',
      meters: {
        party:    { value: 3, note: 'Small parties, mostly through teams' },
        campus:   { value: 4, note: 'Compact campus inside the city' },
        spirit:   { value: 5, note: 'Hockey and football get people out' },
        pressure: { value: 5, note: 'Nursing and health programs are demanding' },
        career:   { value: 7, note: 'Lots of majors lead to a license or job' },
        greek:    { value: 1, note: 'Not a real part of campus life' },
        religion: { value: 1, note: 'Secular today' }
      }
    },

    social: {
      preview: 'Teams and small friend groups. Campus can feel quiet.',
      paragraphs: [
        "With around a thousand undergrads, you'll recognize a lot of faces fast. A big share of students play a sport, and teams are the main social groups. If you're not an athlete, clubs and your dorm are how you'll meet people.",
        "There isn't a big party scene. Some students commute or go home on weekends, so campus can get quiet. People who get involved say it feels close. People who don't say it can feel empty.",
        "The campus sits in a city neighborhood a short drive from downtown Springfield. Restaurants, the riverfront and hockey games downtown are close, but most students say a car makes life a lot easier."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Health programs have extra requirements.',
      points: [
        { title: "It's not hard to get into.", text: 'Most people who apply are admitted. Steady grades are usually enough.' },
        { title: 'Tests are not the focus.', text: "SAT and ACT scores have not been required in recent years. Check the current policy before you apply." },
        { title: 'Nursing and health are different.', text: 'Programs like nursing can have higher grade and science requirements than the college overall. Ask about them directly.' },
        { title: 'Aid is a big deal here.', text: 'Nearly every student gets some kind of financial aid. Fill out the FAFSA and compare the real offer.' }
      ]
    },

    who: {
      preview: 'Future nurses and therapists, athletes and first-gen students',
      paragraphs: [
        "Lots of students from western Massachusetts and Connecticut, plus a solid group from other states and countries. Nursing, health sciences, psychology, criminal justice, education and business are popular. Many students are the first in their family to go to college.",
        "It fits people who want small classes and a clear path into a job, especially in health care. It's not for someone looking for a big campus, a famous name or a busy party scene."
      ]
    },

    knownFor: {
      preview: 'Nursing and health sciences, hockey, and small classes',
      points: [
        { title: 'Health sciences', text: 'Nursing and the School of Health Sciences are a big part of the school. Many students plan to go into nursing, therapy or other health jobs.' },
        { title: 'Hockey', text: 'The men\'s team played Division I for years, won Atlantic Hockey titles and upset top-seeded St. Cloud State in the 2019 NCAA tournament. It moved to Division II starting in 2025-26.' },
        { title: 'Small classes', text: 'Professors know your name. That helps if you need support, and it means you can\'t hide in the back.' },
        { title: 'Old school, new name', text: 'It started in 1885 as a French Protestant college in Lowell, moved to Springfield in 1888 and became American International College in 1905.' }
      ]
    },

    stereotypes: {
      preview: '"Jock school" is half true. "Nothing to do" is half true.',
      items: [
        { said: "It's a jock school.", verdict: 'half', text: "A large share of students are athletes, and teams drive the social scene. Plenty of students are there for nursing and other programs and never play a sport." },
        { said: "There's nothing to do.", verdict: 'half', text: "Campus is quiet, especially on weekends. Springfield has more going on than people think, but you'll need to go looking for it." },
        { said: "Anyone can get in.", verdict: 'half', text: "Most applicants are admitted. The hard part is finishing, especially in nursing and the sciences, where the work is real." },
        { said: "It's still a Division I hockey school.", verdict: 'outdated', text: "It was for more than 25 years. The team moved down to Division II after the 2024-25 season, so the big-time matchups are mostly in the past." }
      ]
    },

    mythsAndKnow: {
      preview: 'Small does not mean easy. Ask about money and accreditation.',
      myths: [
        { title: "Small means you'll coast.", text: 'Small classes mean professors notice who shows up. Nursing and health programs have tough science classes and licensing exams.' },
        { title: "It's an international school.", text: "The name is old. Most students are from New England and nearby states, though there's a real international group too." }
      ],
      know: [
        { title: 'Check its financial health.', text: "In fall 2026, its accreditor asked AIC to show in January 2027 why it should not be put on probation over money problems. It is still accredited. Ask admissions where things stand before you commit." },
        { title: 'A car helps.', text: 'Campus is in a city neighborhood a few miles from downtown. You can use buses, but most students say a car is easier.' },
        { title: 'Get involved early.', text: 'With a small student body and lots of commuters and athletes, clubs and teams are how people find their group.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a health career in a small school. Rough if you want a big scene.',
      love: ['You want nursing or another health career', 'You want small classes and professors who know you', 'You play a sport and want to keep playing', 'You want to stay close to home in western Mass'],
      struggle: ['You want a big campus with a busy social life', 'You want a quiet, leafy college town', "You'd rather not worry about a school's finances"]
    },

    people: {
      preview: 'Small classes and support win. Quiet campus and finances are the worries.',
      plus: ['Small classes and approachable professors', 'Clear paths into health care jobs', 'A tight community if you get involved'],
      minus: ['Campus can feel quiet and empty on weekends', 'The surrounding area is not a college town', 'Recent money troubles make some families nervous']
    }
  }
});
