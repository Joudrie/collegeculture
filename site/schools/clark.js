registerSchool({
  id: 'clark',
  name: 'Clark',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Worcester, MA · Main South',
  asOf: '2026',

  colors: {
    name: 'Cougars · Scarlet and white',
    swatches: ['#E61E2E', '#C52026', '#FFFFFF', '#ADACA9'],
    band: '#C52026',
    onBand: '#FFFFFF',
    onBandMuted: '#FFE8E9',
    stripe: '#ADACA9',
    accent: '#A71A20',
    accentOnDark: '#FF7A7E'
  },

  vibe: "A small, quirky research university in a rough-around-the-edges part of Worcester. People are smart, a little offbeat and care a lot about causes. It's more late-night talks than big parties.",
  flags: ['Small and quirky', 'Activist energy', 'No Greek life', 'Gritty neighborhood'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~2,200' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, offbeat, progressive, low-key social scene',
      meters: {
        party:    { value: 3, note: 'House parties and dorm hangs, not a big scene' },
        campus:   { value: 5, note: 'Compact and green, city right outside' },
        spirit:   { value: 2, note: 'Sports are not the point here' },
        pressure: { value: 6, note: 'Real work, but not cutthroat' },
        career:   { value: 6, note: 'LEEP and the free fifth year help' },
        greek:    { value: 0, note: 'No frats or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Clubs, dorms and small friend groups. Find your people early.',
      paragraphs: [
        "It's a small school, so you'll see the same faces all the time. Social life is mostly clubs, dorm hangouts, shows, movie nights and the odd house party. Students say it's great once you have a group and slow if you don't join anything early.",
        "There's no Greek life. Weekends are low-key for a lot of people, and that's how they like it. If you want big tailgates and packed parties every Saturday, this isn't the place.",
        "Spree Day is the big tradition. One spring morning, classes get canceled without warning and the whole campus turns into an outdoor party with food, music and games. Worcester has other colleges, restaurants and shows nearby, and Boston is about an hour away."
      ]
    },

    gettingIn: {
      preview: 'Selective but doable with solid grades. Tests are optional.',
      points: [
        { title: "It's selective, not a long shot.", text: 'A good share of applicants get in. Strong grades in real classes matter most.' },
        { title: 'Tests are optional.', text: "Clark has been test-optional for over a decade. Check the current policy before you apply." },
        { title: 'Show who you are.', text: "It's small and leans toward curious, independent students. Essays that show what you care about help." },
        { title: 'Merit aid is common.', text: 'Like a lot of private schools, Clark gives many students scholarships. The sticker price is not what most people pay.' }
      ]
    },

    who: {
      preview: 'Curious, progressive, a bit nerdy, lots of psych and environment majors',
      paragraphs: [
        "Curious, independent people who don't need a classic college experience. Lots of psychology, geography, environmental science, political science and international development students, plus a game design crowd. Students lean progressive and many are into activism.",
        "It fits people who were a little different in high school and liked it. If you want to talk ideas until 2am, you'll find your crowd. If you want a big sports school with a party every weekend, you'll feel out of place."
      ]
    },

    knownFor: {
      preview: 'Psychology, geography, a free fifth year and Freud',
      points: [
        { title: 'Psychology and geography', text: "Freud gave his only U.S. lectures here in 1909, and psych is still one of the big majors. Clark's geography program is one of the oldest in the country." },
        { title: 'A free fifth year', text: 'Students with strong grades can stay a fifth year and earn a master\'s with no tuition for that year. It\'s one of the best perks the school has.' },
        { title: 'LEEP', text: "Clark's take on the liberal arts, built around internships, research and projects so you leave with real experience, not just classes." },
        { title: 'Main South', text: 'Clark has worked with its neighborhood for decades, including a partnership public school and housing programs. A lot of students volunteer locally.' }
      ]
    },

    stereotypes: {
      preview: '"Quirky" is true. "Unsafe" is half true.',
      items: [
        { said: "Everyone's a little weird.", verdict: 'true', text: "Students say it themselves, and they mean it as a compliment. People are into niche hobbies, odd majors and big ideas, and nobody makes fun of you for it." },
        { said: "It's super political.", verdict: 'true', text: "Students are vocal and organize a lot, from protests to labor campaigns. If you like that, great. If you don't, it can feel like a lot." },
        { said: "The neighborhood is dangerous.", verdict: 'half', text: "Main South is a lower-income area and students do get campus safety alerts. Most say it's fine if you use normal city sense, especially at night." },
        { said: "There's nothing to do.", verdict: 'half', text: "There's no big party or sports scene. Clubs, events and Worcester fill the gap if you go looking." }
      ]
    },

    mythsAndKnow: {
      preview: 'Program cuts are real. Housing and dining get complaints.',
      myths: [
        { title: "It's only for grad students.", text: 'Clark started as a grad school, but undergrads are most of the campus now and get small classes with real professors.' },
        { title: 'Small means limited.', text: 'Clark is small, but it runs research, a game design school and accelerated master\'s programs. Undergrads can get into research early.' }
      ],
      know: [
        { title: 'The school is cutting back.', text: 'Clark has been eliminating some majors and reducing faculty to fix its budget. Check that your intended major is still there and stable.' },
        { title: 'Housing and food get complaints.', text: 'Students regularly gripe about dorm space and dining. Go see it on a tour and ask current students.' },
        { title: 'Worcester is a real college town.', text: 'There are several colleges in the city, and the consortium lets you take classes at some of them.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you like ideas and causes. Rough if you want a big scene.',
      love: ['You want small classes and professors who know you', 'You care about activism, the environment or social justice', 'You want a free shot at a master\'s degree', "You're a bit offbeat and want to fit in by being yourself"],
      struggle: ['You want game days and big parties', "You want a pretty suburban campus", "You don't like politics in everyday conversation"]
    },

    people: {
      preview: 'Community and the free fifth year win. Budget cuts and housing are the complaints.',
      plus: ['Accepting, open-minded community', 'The free fifth year for a master\'s', 'Professors are easy to get to know'],
      minus: ['Cuts to programs and faculty make some students nervous', 'Housing and dining complaints', 'The neighborhood takes some getting used to']
    }
  }
});
