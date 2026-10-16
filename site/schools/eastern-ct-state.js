registerSchool({
  id: 'eastern-ct-state',
  name: 'Eastern',
  nameSub: 'Eastern Connecticut State',
  title: 'Eastern Connecticut State',
  state: 'Connecticut',
  location: 'Willimantic, CT · Small town',
  asOf: '2026',

  colors: {
    name: 'Warriors · Navy and burgundy',
    swatches: ['#002649', '#7C2128'],
    band: '#E6EAF0',
    onBand: '#002649',
    onBandMuted: '#3A4F6B',
    stripe: '#7C2128',
    accent: '#7C2128',
    accentOnDark: '#E58BA5'
  },

  vibe: "A small, affordable state school in a small town in eastern Connecticut. Most first-years live on campus, classes are small, and it's friendly and low-key.",
  flags: ['Small town', 'Mostly residential', 'Affordable', 'Most get in'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~3,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Friendly, small, affordable, a real campus feel',
      meters: {
        party:    { value: 4, note: 'Low-key, mostly student-run' },
        campus:   { value: 6, note: 'Compact, wooded and easy to walk' },
        spirit:   { value: 4, note: 'Baseball and softball have a following' },
        pressure: { value: 4, note: 'Manageable for most majors' },
        career:   { value: 5, note: 'Education, business and science' },
        greek:    { value: 1, note: 'Small if present at all' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Dorm life, clubs and sports on a compact campus',
      paragraphs: [
        "Most first-years live on campus, so the dorms are where friends happen. There are more than 90 clubs, and students get to know each other quickly.",
        "Willimantic is a small town, so there isn't a lot of nightlife nearby. Students make their own fun, or go to UConn, Hartford or Providence.",
        "A car makes a big difference for weekends and errands."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's not hard to get in.", text: 'The large majority of applicants are admitted. Solid grades will usually do it.' },
        { title: 'Tests are optional.', text: 'Check the current policy before you apply.' },
        { title: 'In-state cost is lower.', text: 'As a public school, it costs less for Connecticut residents.' }
      ]
    },

    who: {
      preview: 'Mostly Connecticut kids, many first-gen, lots of education and business majors',
      paragraphs: [
        "Most students are from Connecticut. Many are the first in their family to go to college. Popular majors include business, education, psychology and the sciences.",
        "It fits people who want a small school, a manageable price and a campus where professors know them."
      ]
    },

    knownFor: {
      preview: 'Baseball, softball and a small campus',
      points: [
        { title: 'Baseball and softball', text: 'Both teams have won multiple Division III national championships.' },
        { title: 'Sustainable energy', text: 'It has an energy institute and a campus fuel cell.' },
        { title: 'Small classes', text: 'Classes are small, and professors know your name.' }
      ]
    },

    stereotypes: {
      preview: '"Middle of nowhere" is half true. "Backup school" is half true.',
      items: [
        { said: "It's in the middle of nowhere.", verdict: 'half', text: "Willimantic is a small town. You can find food and a few things to do, but most big stuff is a drive away." },
        { said: "It's a backup school.", verdict: 'half', text: "Some students pick it as a safe choice. Many choose it for the price and size." },
        { said: "It's a commuter school.", verdict: 'myth', text: "Most first-years live on campus, and a majority of full-time students do." },
        { said: "It's boring.", verdict: 'half', text: "It's quiet. If you join clubs and teams, you'll find stuff to do." }
      ]
    },

    mythsAndKnow: {
      preview: 'You will want a car. Clubs are how you make friends.',
      myths: [
        { title: 'Easy to get in means no value.', text: 'Small classes and low cost are a real draw for many students.' },
        { title: 'There is nothing to do.', text: 'There is less than a bigger school, but clubs and events fill the calendar.' }
      ],
      know: [
        { title: 'Join something early.', text: 'Clubs are how people find friends.' },
        { title: 'A car helps.', text: 'Public transit is limited, and you will want a car for weekends.' },
        { title: 'Housing is mostly on campus.', text: 'Many students live on campus for most of their time.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and affordable. Rough if you want a city or a big party scene.',
      love: ['You want a small campus', 'You want a lower price', 'You want professors who know you', 'You like a low-key vibe'],
      struggle: ['You want a city', 'You want a big sports scene', 'You want a busy nightlife']
    },

    people: {
      preview: 'Price and small classes win. Small town is the complaint.',
      plus: ['Low cost for CT residents', 'Small classes', 'Most people live on campus'],
      minus: ['Small town with little nearby', 'You may need a car', 'Quiet on weekends']
    }
  }
});
