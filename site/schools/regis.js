registerSchool({
  id: 'regis',
  name: 'Regis',
  nameSub: 'College',
  title: 'Regis College',
  state: 'Massachusetts',
  location: 'Weston, MA · West of Boston',
  asOf: '2026',

  colors: {
    name: 'Pride · Crimson and gold',
    swatches: ['#A52238', '#F4A518'],
    band: '#F4A518',
    onBand: '#2B0A10',
    onBandMuted: '#5A1420',
    stripe: '#A52238',
    accent: '#A52238',
    accentOnDark: '#F4A518'
  },

  vibe: "A small Catholic college on a big green campus in a quiet suburb. A lot of people are here for nursing and health careers, and weekends can be pretty calm.",
  flags: ['Nursing school feel', 'Small campus', 'Quiet weekends', 'Catholic roots'],
  facts: [
    { label: 'Setting', value: 'Suburb' },
    { label: 'Undergrads', value: '~1,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, health-focused, low-key social life',
      meters: {
        party:    { value: 2, note: 'Small gatherings, people go elsewhere' },
        campus:   { value: 7, note: 'Big, green and quiet for its size' },
        spirit:   { value: 3, note: 'Small crowds, friendly ones' },
        pressure: { value: 6, note: 'Nursing keeps people busy' },
        career:   { value: 8, note: 'Built around health jobs' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 4, note: 'Catholic and visible, not forced' }
      }
    },

    social: {
      preview: 'Close-knit and friendly, but a lot of people leave on weekends',
      paragraphs: [
        "It's small enough that you'll recognize most people fast. Students describe it as friendly and low drama. Friend groups form on your floor, in your major and on sports teams.",
        "Weekends are the weak spot. A lot of students are from nearby and go home, and some students say it can feel like a commuter school. Clubs run events, but if you want parties, people usually head to friends at other schools.",
        "Boston is about 12 miles away. A school shuttle connects to the Green Line at Riverside, so the city is doable. Having a car still makes life a lot easier."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are not used.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Solid grades in a regular college prep schedule should be enough.' },
        { title: "Tests don't count.", text: "Regis says SAT and ACT scores are not required and not considered. Check the current policy before you apply." },
        { title: 'Apply early if you can.', text: 'There is a fall early action deadline and rolling admission after that. Earlier is better for aid and housing.' },
        { title: 'Nursing can be its own thing.', text: 'Ask how nursing admission and progression work. Health programs often have grade requirements to stay in the major.' }
      ]
    },

    who: {
      preview: 'Future nurses and health workers, mostly from the area',
      paragraphs: [
        "A lot of nursing and health science students, plus people in majors like psychology, business and communication. Many are from Massachusetts and nearby states, and a good number commute.",
        "It fits people who already know they want a hands-on health career and want small classes while they get there. If you want a big, lively campus scene, you'll probably feel it's too quiet."
      ]
    },

    knownFor: {
      preview: 'Nursing, a pretty campus, and going coed in 2007',
      points: [
        { title: 'Nursing', text: "The nursing school is the main draw. It's well regarded and demanding, and there are graduate nursing programs on the same campus." },
        { title: 'A women\'s college until 2007', text: 'Regis was a Catholic women\'s college for about 80 years before admitting men in 2007.' },
        { title: 'The campus', text: 'About 130 acres of lawns, trees and older buildings in Weston, one of the quieter suburbs west of Boston.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone\'s a nurse" is half true. "Empty on weekends" is mostly true.',
      items: [
        { said: "Everyone's a nursing major.", verdict: 'half', text: "Nursing is the biggest name, and health majors are everywhere. There are other majors too, but the school's identity is health care." },
        { said: 'The campus empties out on weekends.', verdict: 'true', text: "A lot of students go home or go out with friends at other schools. If you stay, it's quiet. Plan ahead and find your people." },
        { said: "It's still basically a women's college.", verdict: 'half', text: "It's been coed since 2007. More women than men still enroll, which is common at nursing-heavy schools." },
        { said: 'Weston means everyone is rich.', verdict: 'myth', text: "The town is one of the wealthiest around. The students are a regular mix, and plenty commute from nearby towns." }
      ]
    },

    mythsAndKnow: {
      preview: "You don't have to be Catholic. Nursing is hard. A car helps.",
      myths: [
        { title: 'You have to be Catholic.', text: 'The school was founded by the Sisters of St. Joseph and the Catholic side is visible, but students of any background attend and nothing is forced.' },
        { title: 'Small school means easy classes.', text: 'Nursing and health programs are demanding. Expect real workloads and clinical hours.' }
      ],
      know: [
        { title: 'A car helps a lot.', text: 'The shuttle gets you to the T, but errands, jobs and clinical placements are easier if you drive.' },
        { title: 'Make your own weekends.', text: 'Join clubs or a team early so you have people around when campus is quiet.' },
        { title: 'Professors know your name.', text: "Classes are small, so getting help is easy. It's also hard to hide." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want nursing in a small place. Rough if you want a party school.',
      love: ['You want to be a nurse or work in health care', 'You want small classes and a pretty, safe campus', 'You want Boston nearby without living in it'],
      struggle: ['You want a big party scene', 'You want big-time sports and game days', "You don't have a car and hate relying on shuttles"]
    },

    people: {
      preview: 'Nursing and small classes get praise. Quiet weekends get complaints.',
      plus: ['Strong nursing program with caring faculty', 'Small, close community', 'Beautiful campus close to Boston'],
      minus: ['Weekends feel empty', 'Not much to do on campus at night', 'Nursing can feel rigid and stressful']
    }
  }
});
