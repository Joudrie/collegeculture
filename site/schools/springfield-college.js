registerSchool({
  id: 'springfield-college',
  name: 'Springfield',
  nameSub: 'College',
  title: 'Springfield College',
  state: 'Massachusetts',
  location: 'Springfield, MA · Alden Street',
  asOf: '2026',

  colors: {
    name: 'Pride · Maroon and white',
    swatches: ['#862633', '#FFFFFF', '#FDD26E'],
    band: '#862633',
    onBand: '#FFFFFF',
    onBandMuted: '#EBD3D7',
    stripe: '#FDD26E',
    accent: '#862633',
    accentOnDark: '#E8909C'
  },

  vibe: "A small, sporty school where almost everyone is into fitness, health or coaching. Think future physical therapists and athletic trainers who also play a varsity sport.",
  flags: ['Very athletic', 'Health and sports majors', 'No Greek life', 'Small city campus'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 to 6 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Residential school, most people live on campus; food is average", "housing": ["Most students live on campus, especially early on.", "Dorms are mostly traditional with some apartment-style options.", "The campus is small and sporty, and people know each other."], "food": ["There's a main dining hall plus smaller spots.", "Students say it's average.", "Off-campus food nearby is limited, so it helps to have a car."]},
    vibe: {
      preview: 'Athletic, active, career-focused, team-centered social life',
      meters: {
        party:    { value: 6, note: 'Team houses and off-campus parties' },
        campus:   { value: 5, note: 'Compact, with a wooded East Campus' },
        spirit:   { value: 7, note: 'Lots of athletes, games draw friends' },
        pressure: { value: 6, note: 'PT and PA tracks are demanding' },
        career:   { value: 8, note: 'Programs lead straight to health jobs' },
        greek:    { value: 0, note: 'No frats or sororities' },
        religion: { value: 2, note: 'YMCA roots, not religious day to day' }
      }
    },

    social: {
      preview: 'Your team or your major is your friend group',
      paragraphs: [
        "A big chunk of students play a varsity or club sport, and teams are the center of social life. Friend groups, weekend plans and a lot of parties run through teams and off-campus houses near campus.",
        "If you're not an athlete, students say you'll want to join clubs, intramurals or work out at the gym to find your people. People bond over being active, so there's a lot to jump into.",
        "Springfield is a mid-size city, and most students stick close to campus. The Basketball Hall of Fame is in town, and Northampton and Amherst are a short drive north."
      ]
    },

    gettingIn: {
      preview: 'Most get in. The PT and PA tracks are harder.',
      points: [
        { title: "It's not hard to get in overall.", text: 'Most applicants are admitted. Solid grades will usually do it.' },
        { title: 'Some programs are competitive.', text: 'Physical therapy, physician assistant and occupational therapy tracks have limited spots and want strong grades, especially in science.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'No athletic scholarships.', text: "It's Division III, so aid comes from need and merit, not sports. Many students still get scholarships." }
      ]
    },

    who: {
      preview: 'Athletes and future PTs, trainers, coaches and teachers',
      paragraphs: [
        "People who love sports and want a career built around health or movement. Physical therapy, exercise science, athletic training, sport management, physical education and occupational therapy are huge. Lots of students played sports in high school and many still do.",
        "A lot of students come from New England and nearby states. It fits people who know they want a hands-on, helping career. If you're into the arts or want a big liberal arts scene, you'll be in the minority."
      ]
    },

    knownFor: {
      preview: 'The birthplace of basketball and a top health and sports focus',
      points: [
        { title: 'Basketball was invented here', text: 'James Naismith created the game on this campus in 1891. Volleyball was invented by a Springfield alum too. The school leans into it.' },
        { title: 'Health and movement careers', text: 'Physical therapy, athletic training, exercise science and occupational therapy are what the school is known for. Some programs go straight through to a graduate degree.' },
        { title: 'Humanics', text: 'The school\'s motto is "Spirit, Mind and Body." Humanics is the idea of educating the whole person to serve others. You\'ll hear the word a lot.' },
        { title: 'Winning teams', text: 'It has a long sports history and has won national titles, especially in men\'s volleyball and gymnastics.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is a jock" is mostly true. "Easy majors" is a myth.',
      items: [
        { said: "Everyone's a jock.", verdict: 'true', text: 'A large share of students are athletes, and even non-athletes tend to work out a lot. If you hate sports, this will feel like a strange place.' },
        { said: "The majors are basically gym class.", verdict: 'myth', text: 'PT, OT and athletic training mean anatomy, physiology and clinical hours. Students on those tracks work hard.' },
        { said: "Springfield isn't safe.", verdict: 'half', text: "The city has rough areas and students get safety alerts sometimes. Most say campus feels fine and they use normal city sense off campus." },
        { said: "It's a YMCA church school.", verdict: 'outdated', text: "It started as a YMCA training school more than a century ago. Today it's nonsectarian, and the YMCA roots show up mainly in the focus on service." }
      ]
    },

    mythsAndKnow: {
      preview: 'Some programs take 5 or 6 years. Check how you get into them.',
      myths: [
        { title: "It's only for athletes.", text: 'Athletes are a big group, but plenty of students are there for health science, psychology, social work or education.' },
        { title: 'You just play sports here.', text: 'The health programs have tough science requirements and clinical work. Plenty of students struggle with anatomy.' }
      ],
      know: [
        { title: 'Some degrees take longer.', text: 'Physical therapy and occupational therapy run as combined programs that go past four years. Plan for the cost of the extra years.' },
        { title: 'Ask how you stay in your program.', text: 'Some majors have grade requirements to move ahead. Ask what GPA you need and how many students make it.' },
        { title: 'Bring a car if you can.', text: "Campus isn't downtown, and getting around Springfield without a car is a hassle." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you live for sports and health. Rough if you hate the gym.',
      love: ['You want a career in PT, athletic training or coaching', 'You want to keep playing your sport in college', 'You like a team-centered social life', 'You want small classes with hands-on labs'],
      struggle: ['You are not into sports or fitness at all', 'You want a big city or a classic pretty campus', 'You want a wide range of arts and humanities majors']
    },

    people: {
      preview: 'Programs and community win. Campus and food are the complaints.',
      plus: ['Strong, career-focused health programs', 'Supportive, team-like community', 'Professors and coaches who know you'],
      minus: ['Dorms and dining get mixed reviews', 'Social life can center on athletes', 'The surrounding city is not a big draw']
    }
  }
});
