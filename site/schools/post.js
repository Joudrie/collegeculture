registerSchool({
  id: 'post',
  name: 'Post',
  nameSub: 'University',
  title: 'Post University',
  state: 'Connecticut',
  location: 'Waterbury, CT · Small city campus',
  asOf: '2026',

  colors: {
    name: 'Eagles · Purple and orange',
    swatches: ['#4B2178', '#FF8200'],
    band: '#FF8200',
    onBand: '#2A0F47',
    onBandMuted: '#4A2300',
    stripe: '#4B2178',
    accent: '#5B2A8C',
    accentOnDark: '#FF9E3D'
  },

  vibe: "A small campus in Waterbury attached to a very large online program. The on-campus side is small and friendly, with lots of athletes and a focus on business, equine studies and career programs.",
  flags: ['Big online program', 'Small campus', 'Division II sports', 'Most get in'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: 'Small' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, athletic, practical, friendly',
      meters: {
        party:    { value: 3, note: 'Low-key and small' },
        campus:   { value: 5, note: 'Small campus in Waterbury' },
        spirit:   { value: 4, note: 'Athletes make up a big share' },
        pressure: { value: 4, note: 'Manageable with small classes' },
        career:   { value: 6, note: 'Business and career programs' },
        greek:    { value: 0, note: 'Not a thing' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Teams, clubs and dorm life on a small campus',
      paragraphs: [
        "The on-campus group is small, so friend groups form around teams, dorms and clubs. A lot of students are athletes, and sports are a big part of social life.",
        "Waterbury is a small city. There are things nearby, but most people say a car helps.",
        "The online side of the school is much bigger than the campus. It doesn't affect daily life, but it does mean the school is not like a typical residential college."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants are admitted.' },
        { title: 'Test scores are not the focus.', text: 'The school does not make test scores the main thing. Check the current policy.' },
        { title: 'Merit aid is common.', text: 'Sticker price is not what most students pay.' }
      ]
    },

    who: {
      preview: 'Athletes, business majors and students who want a small school',
      paragraphs: [
        "Many students are from Connecticut and the Northeast. Business, equine studies, criminal justice and sports management are popular.",
        "It fits people who want a small school, close attention and a career-focused program."
      ]
    },

    knownFor: {
      preview: 'Online programs, equine studies and a small campus',
      points: [
        { title: 'Online school', text: 'It has a very large online student body compared to its campus.' },
        { title: 'Equine studies', text: 'Horse programs are a signature on the campus side.' },
        { title: 'Baldrige School of Business', text: 'Business is a central part of the school.' }
      ]
    },

    stereotypes: {
      preview: '"Online school" is half true. "Easy" is half true.',
      items: [
        { said: "It's an online school.", verdict: 'half', text: "Online is a huge part of the university, but the campus is real and has a residential group." },
        { said: "It's easy.", verdict: 'half', text: "Admission is open, and classes are small. You still have to show up and do the work." },
        { said: "It's all athletes.", verdict: 'half', text: "Athletes are a big share, but not all." },
        { said: "There's nothing to do.", verdict: 'half', text: "Campus is small and quiet, and Waterbury is a modest city." }
      ]
    },

    mythsAndKnow: {
      preview: 'Small campus, big online side, and a car helps.',
      myths: [
        { title: 'It is only online.', text: 'There is a real campus with dorms and teams.' },
        { title: 'It is a big school.', text: 'The on-campus population is small.' }
      ],
      know: [
        { title: 'Ask about the campus side.', text: 'When you tour, ask about the on-campus experience specifically.' },
        { title: 'Sports are a big part.', text: 'Many students play on teams.' },
        { title: 'A car helps.', text: 'Waterbury has limited public transit.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and career-focused. Rough if you want a big college feel.',
      love: ['You want small classes', 'You play a sport', 'You like horses or business', 'You want personal attention'],
      struggle: ['You want a big campus', 'You want a big party scene', 'You want a city around you']
    },

    people: {
      preview: 'Attention and sports win. Size and quiet are the complaints.',
      plus: ['Small classes', 'Athletics are a big deal', 'Unique equine program'],
      minus: ['Small campus', 'Quiet social life', 'Feels different from a typical college']
    }
  }
});
