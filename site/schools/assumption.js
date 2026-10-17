registerSchool({
  id: 'assumption',
  name: 'Assumption',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Worcester, MA · West side, residential',
  asOf: '2026',

  colors: {
    name: 'Greyhounds · Blue and white',
    swatches: ['#004B87', '#FFFFFF', '#B6BFC5'],
    band: '#B6BFC5',
    onBand: '#003A69',
    onBandMuted: '#2E3A44',
    stripe: '#004B87',
    accent: '#004B87',
    accentOnDark: '#6CACE4'
  },

  vibe: "A small Catholic school on a quiet hill in a residential part of Worcester. Most people live on campus all four years, so it feels close and familiar, sometimes a little too familiar.",
  flags: ['Small and close', 'Catholic', 'Mostly New England', 'Easy to get in'],
  facts: [
    { label: 'Setting', value: 'City edge' },
    { label: 'Undergrads', value: '~1,800' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Mostly residential campus; food is decent and Worcester is nearby.", "housing": ["Most undergrads live on campus, especially early on.", "Housing is mostly dorms and suites, with apartments for older students.", "Some upperclassmen move off campus in Worcester."], "food": ["There is a main dining hall plus a few other spots.", "Residents usually need a meal plan.", "Worcester has plenty of restaurants a short ride away."]},
    vibe: {
      preview: 'Small, friendly, on-campus life, Catholic but not intense',
      meters: {
        party:    { value: 5, note: 'Dorms, townhouses and nearby houses' },
        campus:   { value: 6, note: 'Neat, quiet and self-contained' },
        spirit:   { value: 5, note: 'Football and hockey bring people out' },
        pressure: { value: 4, note: 'Manageable, nursing is the exception' },
        career:   { value: 6, note: 'Business and nursing lead to jobs' },
        greek:    { value: 0, note: 'No frats or sororities' },
        religion: { value: 6, note: 'Catholic and visible, not forced' }
      }
    },

    social: {
      preview: 'Almost everyone lives on campus. You will know a lot of faces.',
      paragraphs: [
        "Housing is guaranteed all four years and most students live on campus, so the social life stays close to home. Upperclassmen move into townhouse and apartment-style housing, and that's where a lot of weekends happen.",
        "There's no Greek life. People hang out with teammates, roommates and club friends. There's an on-campus pub for students who are 21. Some students say weekends get quiet when people go home, especially those from nearby.",
        "Worcester has restaurants, shows and other colleges, but you'll want a car or a ride since campus is in a residential area. Boston is about an hour east."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Nursing is tougher.', text: 'Nursing spots are limited, so expect stronger grades, especially in science.' },
        { title: 'Merit aid is common.', text: 'Most students get some kind of scholarship. The sticker price is not what most people pay.' }
      ]
    },

    who: {
      preview: 'Mostly New England, friendly, lots of business and nursing',
      paragraphs: [
        "A lot of students are from Massachusetts and the rest of New England. Some went to Catholic high schools, and you'll also meet plenty of people who aren't religious at all. The crowd is friendly, with a lot of athletes.",
        "Business, nursing, psychology, education and health science majors are common. It fits people who want a small school where professors know their name and who don't need a big city scene."
      ]
    },

    knownFor: {
      preview: 'Small classes, a growing nursing school, business and Rome',
      points: [
        { title: 'Nursing', text: 'The Froelich School of Nursing is newer but has grown fast. It has become one of the main reasons people choose Assumption.' },
        { title: 'Business', text: 'The Grenon School of Business is a big part of campus. Accounting, finance, marketing and management are popular.' },
        { title: 'A Catholic core', text: "The core curriculum includes philosophy and theology. It's part of the deal even if you're not Catholic." },
        { title: 'The Rome campus', text: 'Assumption runs its own small campus in Rome. Students can spend a semester there, and financial aid carries over.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone knows everyone" is true. "Super religious" is half true.',
      items: [
        { said: 'Everyone knows everyone.', verdict: 'true', text: "With around 2,000 students mostly living on campus, you'll recognize people everywhere. Great for community, rough if you want to blend in." },
        { said: "It's super religious.", verdict: 'half', text: "It's openly Catholic, with Mass, campus ministry and theology in the core. Day to day, plenty of students aren't religious and nobody forces anything." },
        { said: "It's a backup school.", verdict: 'half', text: "Some students did apply here as a safety. A lot of them say they ended up liking the small size and attention more than they expected." },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: 'Some students from nearby do. Campus is quieter some weekends, but plenty of people stay, especially upperclassmen in the townhouses.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is growing. A car helps.',
      myths: [
        { title: "It's still just a small college.", text: 'It became a university in 2020 and has added nursing, health science and graduate programs. New student enrollment has grown in recent years.' },
        { title: "You have to be Catholic.", text: "You don't. Students of any background or no religion go here. You'll just take some theology and philosophy." }
      ],
      know: [
        { title: 'Campus is in a quiet area.', text: "It's in a residential part of Worcester, not downtown. A car or a friend with a car makes life easier." },
        { title: 'Housing is guaranteed.', text: 'You can live on campus all four years, and most students do.' },
        { title: 'Expect some core classes.', text: 'Philosophy and theology are required. Some students love them, others just get through them.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and close. Rough if you want a big scene.',
      love: ['You want small classes and professors who know you', 'You want to study nursing or business', 'You like a close community where you see friends daily', 'You want to try a semester in Rome'],
      struggle: ['You want a big, diverse party scene', 'You want to be in the middle of a city', "You don't want any required theology or philosophy"]
    },

    people: {
      preview: 'Community and professors win. Food and quiet weekends are the complaints.',
      plus: ['Close, friendly community', 'Professors are easy to reach', 'Housing all four years'],
      minus: ['Dining gets mixed reviews', 'Can feel small and gossipy', 'Hard to get around without a car']
    }
  }
});
