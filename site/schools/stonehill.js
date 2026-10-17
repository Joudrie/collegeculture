registerSchool({
  id: 'stonehill', nameStyle: "classic",
  name: 'Stonehill',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Easton, MA · South of Boston',
  asOf: '2026',

  colors: {
    name: 'Skyhawks · Purple and gold',
    swatches: ['#582C83', '#9F7D23'],
    band: '#582C83',
    onBand: '#FFFFFF',
    onBandMuted: '#D9C9EA',
    stripe: '#9F7D23',
    accent: '#582C83',
    accentOnDark: '#C9A54A'
  },

  vibe: "A small Catholic college on a big, pretty campus in the suburbs south of Boston. Almost everyone lives on campus, people know each other, and the athletics just moved up to Division I.",
  flags: ['Small and tight-knit', 'Live-on campus', 'Car helps', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~2,500' },
    { label: 'Getting in', value: 'Moderate' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division I' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Not on the T; a car helps a lot", "points": ["Easton has no subway. Check the school for shuttle or train options.", "Logan Airport and T.F. Green in Rhode Island are the main airport options.", "A car is really useful here. Check the school's rules on first-year cars."]},
    "living": {"preview": "Residential campus where most students live on campus", "housing": ["Most students live on campus, and it is a residential school.", "Housing is a mix of traditional rooms and apartment-style options.", "Easton is quiet, so having a car helps."], "food": ["There is a main dining hall and a few smaller spots.", "Students say it is fine but not great.", "Off-campus food options nearby are limited."]},
    vibe: {
      preview: 'Small, friendly, campus-centered, sporty',
      meters: {
        party:    { value: 4, note: 'Dorm and suite parties, nothing huge' },
        campus:   { value: 9, note: 'Big, green, old estate grounds' },
        spirit:   { value: 5, note: 'Growing since the move to Division I' },
        pressure: { value: 5, note: 'Real work, not cutthroat' },
        career:   { value: 6, note: 'Internships help, Boston is a drive away' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 5, note: 'Catholic, Mass on campus, not required' }
      }
    },

    social: {
      preview: 'Everyone lives on campus. Fun if you plug in, quiet if you don\'t.',
      paragraphs: [
        "Most students live on campus, so the social scene is the dorms, the upperclass suites and whatever's happening that weekend. It's small enough that you'll see the same faces all the time. People call it friendly. Some call it a bubble.",
        "There's no Greek life, so sports teams and clubs fill that role. Students say athletes are a big part of the social scene. If you're not on a team, clubs, campus jobs and your hall are how you find people.",
        "Weekends can be quiet. Easton is a sleepy suburb and there isn't much to walk to. Boston is under an hour away, but it's much easier if you or a friend has a car."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. No test scores at all.',
      points: [
        { title: "It's moderately selective.", text: "A majority of applicants are admitted, but not everyone. Solid grades in real classes matter most." },
        { title: "Don't send test scores.", text: "Stonehill is test-blind. It won't look at SAT or ACT scores even if you send them. Check the current policy before you apply." },
        { title: 'Early decision is an option.', text: "If it's your first choice, there's a binding early decision round. Check the dates on the school's site." },
        { title: 'Merit aid is common.', text: 'Like most private colleges its size, Stonehill gives a lot of students scholarships. The sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'New England kids who want a classic, small, residential college',
      paragraphs: [
        "Lots of students from Massachusetts and the rest of New England who want the classic small-college thing: a pretty campus, small classes and professors who know your name. Business, psychology, communication and pre-health are popular, and a new nursing program is just getting started.",
        "It's a Catholic school run by the same religious order that founded Notre Dame. You'll see it in the chapel, service trips and some required classes, but you don't have to be Catholic and plenty of students aren't very religious."
      ]
    },

    knownFor: {
      preview: 'A beautiful campus, community feel, and a new Division I push',
      points: [
        { title: 'The campus', text: "It's built on an old family estate with a lot of open space and trees. People are often surprised by how big and green it is for a school this small." },
        { title: 'Community', text: 'Small classes and a mostly residential campus mean people get to know each other. Students talk a lot about feeling known.' },
        { title: 'Division I sports', text: 'Stonehill left Division II and joined the Northeast Conference in 2022. It finished the move to full Division I status recently, and athletics are a bigger deal now.' },
        { title: 'Service', text: 'Volunteering and service trips are a big part of campus life, which ties back to its Catholic roots.' }
      ]
    },

    stereotypes: {
      preview: '"It\'s a bubble" is true. "Nothing to do" is half true.',
      items: [
        { said: "It's a bubble.", verdict: 'true', text: "Small school, everyone lives on campus, suburban town. You'll know a lot of people, and they'll know your business too." },
        { said: "There's nothing to do on weekends.", verdict: 'half', text: "There's less going on than at a big school, and Easton is quiet. People who join things and have friends with cars say they're never bored." },
        { said: "Athletes run the social scene.", verdict: 'half', text: "With no Greek life and lots of varsity athletes, teams are a big part of the party scene. Clubs and campus events give everyone else a way in." },
        { said: "It's just a backup for bigger Boston schools.", verdict: 'half', text: "Some students did apply to bigger names first. A lot of them say they ended up liking the smaller, closer community more than they expected." }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring a car if you can. Look at net price, not sticker price.',
      myths: [
        { title: 'It\'s too small to have real sports.', text: "It's Division I now, playing schools like Duquesne and Central Connecticut. Crowds are small, but it's the real thing." },
        { title: "You have to be very religious.", text: "The Catholic identity is real and visible, but nobody checks. Students of all backgrounds and beliefs go here." }
      ],
      know: [
        { title: 'A car helps a lot.', text: "Easton isn't walkable and Boston is a drive. Check the school's current rules on first-year cars." },
        { title: 'You stay on campus.', text: 'Almost 90% of students live on campus, and housing is guaranteed for all four years.' },
        { title: 'Sports are changing.', text: "The move to Division I is new, so the athletic scene is still building. Expect it to keep growing." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a close campus. Rough if you want a city.',
      love: ['You want a small school where people know you', 'You want a pretty, classic campus', 'You want to live on campus all four years', 'You like a mix of sports and community'],
      struggle: ['You want a city right outside your door', 'You want a big party or Greek scene', "You don't want any religious presence on campus"]
    },

    people: {
      preview: 'Community and campus win. Quiet weekends are the complaint.',
      plus: ['Small classes and professors who know you', 'The campus is beautiful', 'Easy to feel like you belong'],
      minus: ['Weekends can feel slow', "It's a bubble, and the town is quiet", 'Hard to get around without a car']
    }
  }
});
