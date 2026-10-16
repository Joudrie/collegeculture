registerSchool({
  id: 'dean',
  name: 'Dean',
  nameSub: 'College',
  title: 'Dean College',
  state: 'Massachusetts',
  location: 'Franklin, MA · Downtown, on the train line',
  asOf: '2026',

  colors: {
    name: 'Bulldogs · Cardinal and orange',
    swatches: ['#7C1D2D', '#FFA029'],
    band: '#7C1D2D',
    onBand: '#FFFFFF',
    onBandMuted: '#EBCDD1',
    stripe: '#FFA029',
    accent: '#7C1D2D',
    accentOnDark: '#FFA029'
  },

  vibe: "A small, supportive college in a suburban town, split between serious dancers and theater kids on one side and athletes and business majors on the other. It's built for students who want a lot of help and attention, not a big anonymous university.",
  flags: ['Very small', 'Dance and theater', 'Lots of support', 'Easy to get in'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~1,100' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '2 or 4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, hands-on, artsy and sporty at the same time',
      meters: {
        party:    { value: 4, note: 'Some off-campus parties, small scale' },
        campus:   { value: 6, note: 'Compact campus right in downtown Franklin' },
        spirit:   { value: 4, note: 'Football and shows draw friends and family' },
        pressure: { value: 3, note: 'Supportive academics, intense in dance' },
        career:   { value: 6, note: 'Practical majors and industry connections' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and tight. Your major or team is your crew.',
      paragraphs: [
        "With about a thousand students, it's easy to know everyone. Social life splits along your main thing: dancers and theater students spend huge hours together in the studio, and athletes stick with their teams. People say the two crowds support each other, with dancers performing at games and athletes showing up to shows.",
        "Most students live on campus, which keeps things more active than you'd expect for a school this size. Still, it's a small town, so weekends are campus events, small hangouts and trips out.",
        "The commuter rail stop is right next to campus, so Boston is about an hour away without a car. That's a big deal for a small-town school."
      ]
    },

    gettingIn: {
      preview: 'Most people get in. Dance and theater need an audition.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Dean looks at more than your GPA, and it takes students who had a rough time in high school.' },
        { title: 'Dance and theater mean auditions.', text: "Getting into the school is easy. Getting into the dance or theater programs depends on your audition. If you don't make it, you can come in with another major and try again later." },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Apply early for money.', text: 'Dean has early action deadlines in the fall and gives a scholarship for applying early. Check the current amounts on its website.' }
      ]
    },

    who: {
      preview: 'Dancers, theater kids, athletes and students who want extra support',
      paragraphs: [
        "Three big groups: performing arts students who came for dance or theater, athletes, and students who want a smaller, more supportive start to college. Lots of people are from Massachusetts and the rest of New England, with dancers coming from farther away.",
        "Plenty of students here didn't love high school or have a learning difference, and Dean is set up for that. Popular majors include dance, theater, arts and entertainment management, sport management, business and psychology."
      ]
    },

    knownFor: {
      preview: 'Dance, theater, and the Arch learning support program',
      points: [
        { title: 'Dance', text: 'The dance program is the school\'s claim to fame. It offers associate, bachelor\'s and BFA options, and dancers say the training is serious.' },
        { title: 'Theater', text: 'Acting, musical theater, technical theater and theater studies, all on a stage-heavy campus.' },
        { title: 'Arch Learning Community', text: 'A program for students with diagnosed learning disabilities: small cohort classes, coaching and special advising. It costs extra on top of tuition.' },
        { title: 'Arts and entertainment management', text: 'For people who want to work behind the scenes in music, theater, events or media.' }
      ]
    },

    stereotypes: {
      preview: '"Two-year school" is outdated. "Everyone dances" is half true.',
      items: [
        { said: "It's a two-year school.", verdict: 'outdated', text: "It used to be Dean Junior College. Now it gives bachelor's degrees in lots of majors, though associate degrees are still an option." },
        { said: "It's where you go if your grades weren't great.", verdict: 'half', text: "Dean does take students with lower grades and gives them a lot of support. That's a feature, not a joke. Plenty of students come for dance or theater and could have gone elsewhere." },
        { said: 'Everyone is a dancer or a theater kid.', verdict: 'half', text: "The performing arts crowd is big and visible. There are also many athletes and business and sport management majors." },
        { said: "There's nothing to do in Franklin.", verdict: 'half', text: "Franklin is a quiet suburb. But the train to Boston leaves from right next to campus, so you're not stuck." }
      ]
    },

    mythsAndKnow: {
      preview: 'Support is the point. Dance is a serious commitment.',
      myths: [
        { title: 'Easy to get in means easy classes.', text: "Classes are small and supportive, but dance and theater majors work long hours, and professors notice if you check out." },
        { title: 'You need a car.', text: "The commuter rail stop is basically on campus. A car helps for some things, but you can get to Boston without one." }
      ],
      know: [
        { title: 'Arch costs extra.', text: "If you need learning support, Arch is a real draw, but it has its own yearly fee. Ask for the current price." },
        { title: "Check whether you're doing 2 or 4 years.", text: "Some programs are associate degrees and some are bachelor's. Make sure the path you pick matches your plans." },
        { title: 'Auditions matter.', text: 'For dance and theater, your audition decides your program. Prepare for it like it counts, because it does.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want dance, theater or a supportive start. Rough if you want a big school.',
      love: ['You want serious dance or theater training', 'You want small classes and a lot of help', 'You have a learning difference and want real support', 'You want Boston access without living in the city'],
      struggle: ['You want a big school with big-time sports', 'You want a party school', "You want a name that impresses people at first glance"]
    },

    people: {
      preview: 'Support and the arts win. Small size and small town are the complaints.',
      plus: ['Professors and staff really invest in you', 'Strong dance and theater community', 'Train to Boston right next to campus'],
      minus: ['Small, so it can feel like high school', 'Franklin is quiet', 'Expensive if you need Arch on top of tuition']
    }
  }
});
