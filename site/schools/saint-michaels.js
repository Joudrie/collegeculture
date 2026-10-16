registerSchool({
  id: 'saint-michaels',
  name: "Saint Michael's",
  nameSub: 'College',
  state: 'Vermont',
  location: 'Colchester, VT · Just outside Burlington',
  asOf: '2026',

  colors: {
    name: 'Purple Knights · Purple and gold',
    swatches: ['#55318C', '#D6C682'],
    band: '#D6C682',
    onBand: '#2E1654',
    onBandMuted: '#4A2C7A',
    stripe: '#55318C',
    accent: '#55318C',
    accentOnDark: '#B9A0E6'
  },

  vibe: "A small Catholic liberal arts college near Burlington where people know your name. Friendly, outdoorsy and tight-knit, with a lot of service work.",
  flags: ['Small and friendly', 'Near Burlington', 'Catholic roots', 'Ski and hike culture'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~1,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, outdoorsy, friendly, easygoing party scene',
      meters: {
        party:    { value: 4, note: 'House parties and Burlington nights' },
        campus:   { value: 7, note: 'Green campus with mountain views' },
        spirit:   { value: 4, note: 'Small crowds, hockey is the draw' },
        pressure: { value: 5, note: 'Solid workload, friendly professors' },
        career:   { value: 6, note: 'Internships in the Burlington area' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 4, note: 'Catholic school, but not pushy' }
      }
    },

    social: {
      preview: 'Small friend groups, outdoor trips, and Burlington on weekends',
      paragraphs: [
        'It is small enough that you will run into the same people all the time. Friend groups form fast in the dorms and on teams. Clubs and service trips are a big part of how people meet.',
        'Outdoors is a huge part of the culture. Skiing, hiking and the lake are all close, and the outing club is popular.',
        'Burlington is a short drive away for restaurants, shows and bars. Most students say a car or a friend with one makes weekends easier.'
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's not super hard to get in.", text: 'Most applicants are admitted. Decent grades usually do it.' },
        { title: 'Tests may be optional.', text: 'Check the current policy before you apply.' },
        { title: 'Aid is common.', text: 'Like many private colleges, it gives scholarships to many students. The sticker price is not what most pay.' }
      ]
    },

    who: {
      preview: 'Friendly, outdoorsy, service-minded kids from the Northeast',
      paragraphs: [
        'Lots of students from New England, New York and New Jersey. Many played sports in high school and like being outside. Popular majors include business, psychology, biology and education.',
        "It fits people who want a small place where professors know them. If you want anonymity or a big city, it's going to feel small."
      ]
    },

    knownFor: {
      preview: 'Student rescue squad, outdoor life, and a small-college feel',
      points: [
        { title: 'Fire and Rescue', text: 'Students run an emergency squad that responds to calls in the area. It is a big point of pride.' },
        { title: 'Edmundite roots', text: 'The school was founded by a Catholic order. Service and social justice are part of the culture.' },
        { title: 'Location', text: 'You get mountains, a lake and a real small city close by.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone skis" is half true. "Super Catholic" is mostly a myth.',
      items: [
        { said: 'Everyone skis and hikes.', verdict: 'half', text: 'Lots of people do, and it shapes the culture. You can also get by without being outdoorsy.' },
        { said: "It's very religious.", verdict: 'myth', text: 'The Catholic roots are real, with a chapel and service work. Most students do not describe it as pushy.' },
        { said: "It's a small bubble.", verdict: 'true', text: 'It is tiny. Everyone knows everyone, which many love and some outgrow.' },
        { said: 'Everyone is from the Northeast.', verdict: 'half', text: 'A big share are, but there are students from many places.' }
      ]
    },

    mythsAndKnow: {
      preview: 'A car helps. Winters are long. Small means small.',
      myths: [
        { title: 'You have to be Catholic.', text: 'Students of all backgrounds go here.' },
        { title: "It's in Burlington.", text: 'It is in Colchester, a short drive from the city. You need a ride or the shuttle.' }
      ],
      know: [
        { title: 'A car helps.', text: 'Burlington is close but not walkable.' },
        { title: 'Winters are cold.', text: 'Bring real boots.' },
        { title: 'Get involved early.', text: 'Clubs and teams are how people find their group.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a small, outdoorsy school. Rough if you want a big scene.',
      love: ['You like small classes and close professors', 'You love the outdoors', 'You want service and community'],
      struggle: ['You want a big campus', 'You want football and tailgates', 'You want a city at your doorstep']
    },

    people: {
      preview: 'Community and location win. Size and cost are the complaints.',
      plus: ['Close relationships with professors', 'Mountains and lake nearby', 'Friendly, welcoming community'],
      minus: ['It can feel too small by junior year', 'Private school cost', 'Limited nightlife without a car']
    }
  }
});
