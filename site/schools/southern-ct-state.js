registerSchool({
  id: 'southern-ct-state',
  name: 'Southern',
  nameSub: 'Southern Connecticut State',
  state: 'Connecticut',
  location: 'New Haven, CT · Westville, near Hamden',
  asOf: '2026',

  colors: {
    name: 'Owls · Blue and white',
    swatches: ['#003399', '#00ADEB', '#FFFFFF'],
    band: '#003399',
    onBand: '#FFFFFF',
    onBandMuted: '#BFD0F2',
    stripe: '#00ADEB',
    accent: '#003399',
    accentOnDark: '#4FC6F2'
  },

  vibe: "An affordable state school in New Haven where a lot of people are training for jobs that help other people: teaching, nursing, social work. Friendly and diverse, with a big commuter crowd, so the campus is busy on weekdays and calmer on weekends.",
  flags: ['Lots of commuters', 'Affordable', 'Nursing and teaching', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~7,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Lots of commuters, but you can live on campus; New Haven helps on food", "housing": ["Many students commute, and campus is not as residential as some schools.", "There are residence halls for students who want to live on campus.", "Some students live off campus in New Haven or nearby towns."], "food": ["The campus has dining options, and students can use meal plans.", "Students say the food is okay, like most school dining.", "New Haven nearby has lots of famous food, including pizza."]},
    vibe: {
      preview: 'Practical, diverse, low pressure, half commuter',
      meters: {
        party:    { value: 3, note: 'Some house parties, not a scene' },
        campus:   { value: 5, note: 'Real campus, split by a city street' },
        spirit:   { value: 3, note: 'Loyal fans, small crowds' },
        pressure: { value: 4, note: 'Nursing is tough, most else is manageable' },
        career:   { value: 7, note: 'Lots of majors that lead to a license' },
        greek:    { value: 2, note: 'A handful of chapters' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Clubs and dorm friends during the week. Many people head home Friday.',
      paragraphs: [
        "A big share of students commute from around Connecticut, and only about a quarter of undergrads live on campus. That means the campus is busy from Monday to Thursday and a lot quieter on weekends.",
        "If you live in the dorms, your floor, your team and a club or two are where friends come from. The school runs a lot of commuter events too, like lunches and lounges, so commuters aren't left out.",
        "New Haven is right there. Downtown has pizza, music venues and Yale's museums, and the free state bus pass for CT state university students makes getting around easier."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Nursing is the hard part.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Solid grades and a finished application go a long way.' },
        { title: 'Some majors are competitive.', text: 'Nursing is limited and harder to get into than the school overall. If that is your plan, look up its requirements early.' },
        { title: 'Tests may be optional.', text: 'Check the current SAT and ACT policy on the admissions site before you apply.' },
        { title: 'In-state is the deal.', text: "Most students are from Connecticut and pay in-state tuition. Out-of-state costs more, though regional tuition discounts may apply." }
      ]
    },

    who: {
      preview: 'Mostly Connecticut kids, lots of first-gen and working students',
      paragraphs: [
        "Mostly Connecticut students, many from the New Haven area. It's one of the more diverse campuses in the state, and a lot of students are the first in their family at college or work jobs while in school.",
        "People pick it for teaching, nursing, social work, exercise science, psychology and business. The vibe is down to earth. Nobody cares where you went to high school."
      ]
    },

    knownFor: {
      preview: 'Teaching, nursing, social work, and being cheap for Connecticut',
      points: [
        { title: 'Started as a teachers college', text: 'It opened in 1893 to train teachers, and education is still one of its biggest strengths.' },
        { title: 'Nursing and health', text: 'Nursing grads have a strong track record on the licensing exam. Public health and exercise science are popular too.' },
        { title: 'Social work', text: 'A well-known program in Connecticut, from the bachelor\'s level up.' },
        { title: 'Affordable', text: "In-state tuition is low compared to most schools in New England, and you're in a real city." }
      ]
    },

    stereotypes: {
      preview: '"Suitcase school" is half true. "Just a backup" is unfair.',
      items: [
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: "A lot of students commute or live close, so weekends are quiet. Residents who stay find stuff to do, but it's not a big weekend scene." },
        { said: "It's just everyone's backup school.", verdict: 'myth', text: "Plenty of people pick it on purpose for nursing, teaching or the price. It's a smart money move, not a consolation prize." },
        { said: "New Haven isn't safe.", verdict: 'half', text: "Like any city, some areas are rougher than others. Campus has its own police and most students say they feel fine. Use normal city sense at night." },
        { said: 'Everyone wants to be a teacher or nurse.', verdict: 'half', text: "Those are huge here, but there's also business, psych, communication, sciences and more." }
      ]
    },

    mythsAndKnow: {
      preview: "Not the same as Yale's neighborhood. A car or bus pass helps.",
      myths: [
        { title: "It's basically next to Yale.", text: "Both are in New Haven, but Southern is a few miles west of downtown. It's a separate world." },
        { title: 'A state school means huge classes.', text: "Most classes are small to medium. You won't sit in a 400-person lecture hall." }
      ],
      know: [
        { title: 'The campus is split.', text: 'Fitch Street runs between the academic side and the dorm side. It is a short walk, but you will cross it a lot.' },
        { title: 'Housing is available all four years.', text: 'If you want to live on campus, you can. Most people still choose to commute.' },
        { title: 'Parking is a topic.', text: 'With this many commuters, lots fill up. Leave early for morning classes.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a practical degree for less. Rough if you want a party campus.',
      love: ['You want to teach, nurse or do social work', 'You want a degree without big debt', 'You want to stay close to home', 'You like a diverse, low-drama campus'],
      struggle: ['You want a big weekend party scene', 'You want big-time sports', 'You want a campus where almost everyone lives there']
    },

    people: {
      preview: 'Good value and caring professors. Quiet weekends and parking get complaints.',
      plus: ['Affordable for the degree you get', 'Professors are easy to reach', 'Strong programs for teaching, nursing and social work'],
      minus: ['Weekends on campus can feel empty', 'Parking and commuting are a hassle', 'Some offices and paperwork move slowly']
    }
  }
});
