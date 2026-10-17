registerSchool({
  id: 'university-of-hartford',
  name: 'Hartford',
  nameSub: 'University of Hartford',
  title: 'University of Hartford',
  state: 'Connecticut',
  location: 'West Hartford, CT · Suburban campus',
  asOf: '2026',

  colors: {
    name: 'Hawks · Scarlet and white',
    swatches: ['#DA1A32', '#FFFFFF'],
    band: '#DA1A32',
    onBand: '#FFFFFF',
    onBandMuted: '#FFF5F7',
    stripe: '#231F20',
    accent: '#C0162C',
    accentOnDark: '#FF7A93'
  },

  vibe: "A mid-sized campus just outside Hartford, best known for The Hartt School of music, theater and dance. Creative kids and engineering kids share a pretty big suburban campus.",
  flags: ['Arts school inside', 'Suburban campus', 'Lots of commuters', 'Moved down to Division III'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~4,200' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mix of residents and commuters, food is decent", "housing": ["Most first-years live on campus, but there are also commuters.", "Housing includes traditional dorms and apartment-style options.", "The campus is suburban, so many students stay close."], "food": ["There is a main dining hall and a few other spots.", "Students say it is average to decent.", "West Hartford center has a lot of restaurants nearby."]},
    vibe: {
      preview: 'Creative, laid back, suburban, strong performing arts',
      meters: {
        party:    { value: 4, note: 'Dorm and off-campus parties, low-key' },
        campus:   { value: 7, note: 'Big, green campus with a lot of space' },
        spirit:   { value: 3, note: 'Smaller crowds since the move to Division III' },
        pressure: { value: 5, note: 'Depends on your major' },
        career:   { value: 5, note: 'Strong in arts, engineering and health' },
        greek:    { value: 2, note: 'Present, not a big deal' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Arts events, clubs and dorm life on a big suburban campus',
      paragraphs: [
        "Social life is a mix. The Hartt School puts on concerts, shows and recitals all the time, and many students go to those. Other friend groups form around dorms, clubs and teams.",
        "The campus is spread out, and a lot of students commute. People say you need to put effort into meeting friends, especially if you live off campus.",
        "Hartford and West Hartford are close, with restaurants and things to do, but you usually need a car or a ride."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Arts programs need an audition.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted. Solid grades will usually do it.' },
        { title: 'Arts programs need auditions.', text: 'Music, theater and dance students audition for The Hartt School.' },
        { title: 'Merit aid is common.', text: 'Many students get scholarships, so sticker price is not what most pay.' }
      ]
    },

    who: {
      preview: 'Musicians, actors, engineers and a lot of commuters',
      paragraphs: [
        "A mix of performing arts students, engineering students, business majors and health science students. A lot of students are from Connecticut and the Northeast.",
        "It fits people who want a mid-sized school, a creative energy and a campus that isn't packed."
      ]
    },

    knownFor: {
      preview: 'The Hartt School and a pretty campus',
      points: [
        { title: 'The Hartt School', text: 'Its music, theater and dance programs are well known and bring in students from all over.' },
        { title: 'Engineering', text: 'The engineering school is also a draw for students who want hands-on programs.' },
        { title: 'Sports shift', text: 'The school moved its teams from Division I to Division III, which changed the sports scene.' }
      ]
    },

    stereotypes: {
      preview: '"Artsy" is true. "Dead campus on weekends" is half true.',
      items: [
        { said: "It's full of music and theater kids.", verdict: 'half', text: "The Hartt School is a big part of the identity, but most students aren't in it." },
        { said: "It's dead on weekends.", verdict: 'half', text: "Many students go home, and the commuter share makes it quiet. Events still happen, and residents say there is something to do if you look." },
        { said: "It's a backup school.", verdict: 'half', text: "It's easier to get into than some nearby schools, but plenty of students pick it for the arts or engineering." },
        { said: "The campus is too spread out.", verdict: 'true', text: "It's big and walking between buildings takes time, especially in winter." }
      ]
    },

    mythsAndKnow: {
      preview: 'Auditions, a quiet weekend scene and a move to Division III.',
      myths: [
        { title: 'It is only for performing arts.', text: 'The arts are a big piece, but there are also strong programs in engineering, business, health and more.' },
        { title: 'It is in downtown Hartford.', text: 'It is in West Hartford, a quieter suburb next to the city.' }
      ],
      know: [
        { title: 'Check your program.', text: 'Arts and some health programs have extra requirements.' },
        { title: 'A car helps.', text: 'Public transit exists, but a car makes the area easier.' },
        { title: 'Weekends can be quiet.', text: 'Many students go home, so you may want to plan activities with friends.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for artists and engineers who like space. Rough if you want a packed campus.',
      love: ['You want a strong performing arts program', 'You want a roomy suburban campus', 'You want a mid-sized school', 'You like a chill vibe'],
      struggle: ['You want a big sports scene', 'You want a busy weekend campus', 'You want a city around you']
    },

    people: {
      preview: 'Arts and space win. Quiet weekends are the complaint.',
      plus: ['Hartt School talent and events', 'Roomy campus', 'Merit aid is common'],
      minus: ['Weekends can be quiet', 'Campus is spread out', 'Sports scene is smaller than before']
    }
  }
});
