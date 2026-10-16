registerSchool({
  id: 'harvard',
  name: 'Harvard',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Cambridge, MA · Harvard Square',
  asOf: '2026',

  colors: {
    name: 'Crimson · Crimson and black',
    swatches: ['#A51C30', '#1E1E1E'],
    band: '#A51C30',
    onBand: '#FFFFFF',
    onBandMuted: '#F7D6DA',
    stripe: '#1E1E1E',
    accent: '#A51C30',
    accentOnDark: '#F2777F'
  },

  vibe: "Old brick, famous name, and a campus full of people who are very good at a lot of things. It's busier and more normal than the legend, but everyone is doing three things at once.",
  flags: ['Reach for everyone', 'Aid is huge', 'Tests required', 'Live on campus'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~7,100' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Social clubs', value: 'Final clubs' }
  ],

  sections: {
    vibe: {
      preview: 'Packed schedules, strong house life, famous everything',
      meters: {
        party:    { value: 5, note: 'Dorm parties, house events, final clubs' },
        campus:   { value: 9, note: 'Harvard Yard and the river houses' },
        spirit:   { value: 5, note: 'Huge for The Game, quiet otherwise' },
        pressure: { value: 8, note: 'Busy and competitive, not cutthroat in class' },
        career:   { value: 9, note: 'The name opens a lot of doors' },
        greek:    { value: 3, note: 'Final clubs matter more than Greek life' },
        religion: { value: 2, note: 'Secular, lots of groups if you look' }
      }
    },

    social: {
      preview: 'Freshman Yard, then your House. Clubs are your real social life.',
      paragraphs: [
        "Freshmen live together in and around Harvard Yard and eat in one big dining hall, so it's easy to meet people. After freshman year you get sorted into one of 12 upperclass Houses, and that becomes your home base for the next three years. Almost everyone lives on campus all four years.",
        "Clubs are where friend groups really form. A lot of the popular ones make you \"comp,\" which means a trial period or application to get in. Getting rejected from a club freshman year is normal and stings more than people expect.",
        "Parties are mostly dorm and House events, with final clubs as the exclusive, invite-only layer on top. Plenty of students say final clubs barely matter to their social life. Boston is a short T ride away when Cambridge gets small."
      ]
    },

    gettingIn: {
      preview: "One of the hardest schools in the country to get into. Tests count again.",
      points: [
        { title: "It's a reach for everyone.", text: 'Even students with perfect grades and scores get turned down every year. Apply, but never count on it.' },
        { title: 'SAT or ACT is required.', text: 'Harvard brought back the testing requirement after its test-optional years. Check the current policy before you apply.' },
        { title: 'Early action has rules.', text: "Harvard's early round is restrictive early action. It's not binding, but it limits where else you can apply early. Read the fine print." },
        { title: "Grades aren't enough.", text: 'Almost every applicant has top grades. What stands out is something you went deep on, and essays that sound like a real person.' }
      ]
    },

    who: {
      preview: 'High achievers from everywhere, lots of future doctors, lawyers and consultants',
      paragraphs: [
        "People who were the top of their high school and are used to being busy. Students come from every state and a lot of countries, and from a much wider range of backgrounds than people assume.",
        "Economics, computer science and government are popular, and lots of students are pre-med or headed to law school, consulting or finance. There's also a real crowd of writers, artists and performers. Most people are friendly once you get past the nervous first few weeks."
      ]
    },

    knownFor: {
      preview: 'The name, the money, The Game, and a lot of famous alumni',
      points: [
        { title: 'The name', text: "It's probably the most famous college in the world. Saying you go there changes how people react, which is why some students just say \"I go to school in Boston.\"" },
        { title: 'Huge resources', text: "It has the biggest endowment of any university. That pays for big financial aid, research money for undergrads, and funding for summer programs." },
        { title: 'The Game', text: 'The yearly football game against Yale is the one sports event nearly everyone goes to, whether or not they care about football.' },
        { title: 'Harvard Square', text: 'Cafes, bookstores and a T stop right outside the gates. It feels like a small town inside a city.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is cocky" is half true. "Everyone is rich" is half true.',
      items: [
        { said: 'Harvard kids are cocky.', verdict: 'half', text: "Some are. Most are more nervous than cocky, and lots of them feel like they're the one person who got in by accident. Being around so many high achievers humbles people fast." },
        { said: "Everyone's rich.", verdict: 'half', text: "There's a lot of wealth on campus, and you'll notice it. But a big share of students are on aid, and many pay little or nothing." },
        { said: "It's easy once you're in.", verdict: 'half', text: "Grades skew high, and grade inflation is a real debate there. But the workload is heavy, and the pressure comes from everyone doing a lot outside class too." },
        { said: "It's all stuffy old-money tradition.", verdict: 'outdated', text: "The buildings are old and some traditions are too. The student body today is far more mixed than the movies make it look." }
      ]
    },

    mythsAndKnow: {
      preview: 'It can cost less than a state school. Clubs are competitive.',
      myths: [
        { title: 'Only rich families can afford it.', text: "Harvard's aid is need-based and very generous. Tuition is free for many families earning up to about $200,000, and families under about $100,000 typically pay nothing at all. Check the current rules." },
        { title: "Once you're in, you're set for life.", text: "The name helps a lot, but you still have to do the work, find internships and build relationships. Nobody hands you a job." }
      ],
      know: [
        { title: 'It might be cheaper than your state school.', text: "For a lot of families, Harvard costs less than a public university. Run the net price calculator before you rule it out." },
        { title: 'Clubs can reject you.', text: 'Many groups have a comp or application process. Get rejected from one, try another. Everyone goes through it.' },
        { title: "You don't pick your House.", text: 'Upperclass Houses are assigned after freshman year. You can apply with a group of friends, but you can\'t choose which one.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want to do a lot and meet everyone. Rough if you need calm.',
      love: ['You like being busy with classes, clubs and projects at once', 'You want to meet people from everywhere', 'You want a classic campus inside a real city', 'You want big resources and connections'],
      struggle: ['You hate competing to get into clubs', 'You need a slow, low-pressure pace', 'You want a big sports and tailgate scene every weekend']
    },

    people: {
      preview: 'Amazing people and resources. Pressure and exclusive clubs are the complaints.',
      plus: ['Classmates are fascinating and do impressive things', 'The House system gives you a real home base', 'Aid and funding are generous'],
      minus: ['The pressure to do everything can burn you out', 'Comp culture and final clubs can feel exclusive', 'The name follows you, sometimes awkwardly']
    }
  }
});
