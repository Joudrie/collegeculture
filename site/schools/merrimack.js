registerSchool({
  id: 'merrimack',
  name: 'Merrimack',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'North Andover, MA · North of Boston',
  asOf: '2026',

  colors: {
    name: 'Warriors · Blue and gold',
    swatches: ['#003767', '#FFE000'],
    band: '#FFE000',
    onBand: '#003767',
    onBandMuted: '#4D4300',
    stripe: '#003767',
    accent: '#003767',
    accentOnDark: '#FFE000'
  },

  vibe: "A Catholic college north of Boston that has grown fast and is still building to keep up. It's social, sporty and centered on hockey, with a strong push to get you into a job or a master's degree.",
  flags: ['Growing fast', 'Hockey school', 'Housing is tight', 'Car helps'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~4,100' },
    { label: 'Getting in', value: 'Moderate' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Sporty, social, growing, hockey on Friday nights',
      meters: {
        party:    { value: 5, note: 'Dorm and apartment parties, some cliques' },
        campus:   { value: 7, note: 'Real campus, lots of new buildings' },
        spirit:   { value: 6, note: 'Hockey nights get loud' },
        pressure: { value: 4, note: 'Supportive, professors are reachable' },
        career:   { value: 7, note: 'Big push toward jobs and master\'s' },
        greek:    { value: 2, note: 'A few chapters, low-key' },
        religion: { value: 4, note: 'Catholic, present but not pushy' }
      }
    },

    social: {
      preview: 'Sports and dorm life drive it. Can feel cliquey if you don\'t join things.',
      paragraphs: [
        "Most of the social life happens on or right next to campus. Freshman dorms are where friend groups start, and a lot of upperclassmen live in college-run apartments just across the road. Hockey games at Lawler Arena are the big shared night out.",
        "Athletics are a big part of the scene, and students say it can feel cliquey, especially if you're not on a team or in a club. Greek life exists but it's small, so it doesn't run the weekend.",
        "North Andover is a quiet suburb. Boston is about 25 miles south, so people with cars get out more. Without one, you're relying on friends, rideshares or the train from a nearby town."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's moderately selective.", text: "A majority of applicants are admitted. Decent grades in solid classes put you in good shape." },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'There are early rounds.', text: 'It offers early action and early decision. Applying early can help, and you hear back sooner.' },
        { title: 'Applications have been booming.', text: "It gets far more applications than it used to. That hasn't made it hard to get into, but don't treat it as automatic." }
      ]
    },

    who: {
      preview: 'Sporty, social New Englanders headed for practical careers',
      paragraphs: [
        "A lot of students from Massachusetts and the rest of New England, many of them athletes or big sports fans. Business, education, criminology, psychology, health sciences and engineering are popular. It's a practical crowd that mostly wants a job at the end.",
        "It's a Catholic school run by the Augustinians. You'll see it in the chapel and some classes, but you don't need to be religious to fit in."
      ]
    },

    knownFor: {
      preview: 'Hockey, fast growth, and cheap or free master\'s degrees',
      points: [
        { title: 'Hockey', text: "Men's hockey plays in Hockey East against schools like BC, BU and UMass. Games at Lawler Arena are the loudest the campus gets." },
        { title: 'Fast growth', text: 'Enrollment has more than doubled since the early 2010s. New buildings, new programs and a jump to Division I athletics came with it.' },
        { title: 'Fellowships', text: 'Graduate fellowships let students work on campus or in schools while earning a master\'s with a big tuition discount, sometimes all of it. Lots of grads stay for a fifth year this way.' },
        { title: 'Division I', text: "Merrimack moved up from Division II and now plays most sports in the MAAC. It's still a newer Division I school." }
      ]
    },

    stereotypes: {
      preview: '"Hockey school" is true. "Backup school" is half true.',
      items: [
        { said: "It's a hockey school.", verdict: 'true', text: "Hockey is the sport people actually show up for. Big games are packed and loud, and it's the main source of school spirit." },
        { said: "It's a backup school.", verdict: 'half', text: "Some students applied to bigger names first. But it's grown a lot, and plenty of people pick it on purpose for the community and the fellowships." },
        { said: "It's cliquey.", verdict: 'half', text: "Students do say the scene can feel split into teams and friend groups. People who join clubs early say it feels like home." },
        { said: "Everyone is from Massachusetts.", verdict: 'half', text: "A lot of students are from Massachusetts and nearby states. You'll meet people from farther away, but it's very New England." }
      ]
    },

    mythsAndKnow: {
      preview: 'Housing is stretched. A car helps. Look at net price.',
      myths: [
        { title: "It's a tiny college.", text: "It used to be. With over 4,000 undergrads and more grad students, it's a mid-sized school now." },
        { title: "Division I means a big-time sports school.", text: "Hockey is big-time. Most other sports are new to Division I and draw smaller crowds." }
      ],
      know: [
        { title: 'Housing has been stretched.', text: "Growth outpaced dorms, so the college rents apartments across the road for hundreds of students. Two new residence halls are meant to help." },
        { title: 'A car helps.', text: "North Andover isn't very walkable and Boston is a drive. Check the school's current rules on first-year cars." },
        { title: 'Plan for the fifth year.', text: "If you might want a master's, look at the fellowships early. They can make the extra year cheap or free." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love hockey and community. Rough if you want a city.',
      love: ['You want a sporty campus with real game nights', 'You want a practical major and maybe a cheap master\'s', 'You like a school that is growing and changing', 'You want a campus near Boston, not in it'],
      struggle: ['You want a city right outside your door', "You don't care about sports at all", 'You want lots of space and quiet in your housing']
    },

    people: {
      preview: 'Hockey and community win. Housing and growing pains are the complaints.',
      plus: ['Hockey nights are a blast', 'Professors are easy to reach', 'The fellowship path to a master\'s is a real perk'],
      minus: ['Housing and growth feel stretched', 'Social scene can feel cliquey', 'Rising costs frustrate some students']
    }
  }
});
