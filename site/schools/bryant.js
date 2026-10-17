registerSchool({
  id: 'bryant',
  name: 'Bryant',
  nameSub: 'University',
  state: 'Rhode Island',
  location: 'Smithfield, RI · 20 min from Providence',
  asOf: '2026',

  colors: {
    name: 'Bulldogs · Black and gold',
    swatches: ['#000000', '#B4975A'],
    band: '#222020',
    onBand: '#FFFFFF',
    onBandMuted: '#CBBC8E',
    stripe: '#B4975A',
    accent: '#826E38',
    accentOnDark: '#B4975A'
  },

  vibe: "A self-contained suburban campus full of future business people. It's friendly, polished and pretty career-focused, and most of life happens on campus.",
  flags: ['Business school', 'Suburban bubble', 'Division I sports', 'Car helps'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~3,300' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Mostly residential campus; food is decent and the area is quiet.", "housing": ["Most students live on campus for much of their time here.", "Housing includes traditional dorms and apartment-style options for older students.", "The campus is in suburban Smithfield, so it can feel isolated without a car."], "food": ["There is a main dining hall and some other places to eat on campus.", "Residents usually need a meal plan.", "Off-campus food is mostly chains and a short drive away."]},
    vibe: {
      preview: 'Career-focused, on-campus social life, nice self-contained campus',
      meters: {
        party:    { value: 5, note: 'Campus parties and townhouse nights' },
        campus:   { value: 8, note: 'Big, green and everything in one place' },
        spirit:   { value: 5, note: 'Division I, crowds come for big games' },
        pressure: { value: 5, note: 'Busy, not cutthroat' },
        career:   { value: 9, note: 'Internships and recruiting are the point' },
        greek:    { value: 3, note: 'A few chapters, no Greek houses' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Almost everyone lives on campus. Social life stays there too.',
      paragraphs: [
        "Most students live in campus housing all four years, so the social scene is on campus. Freshman dorms are where friend groups start, and upperclass townhouses are where a lot of weekend parties happen.",
        "Smithfield is a quiet suburb, so there isn't a college town to wander into. People with cars head into Providence for food and nights out, and the school runs shuttles too.",
        "Clubs, sports and business groups fill the week. Greek life exists but it's small, with no houses, so it's one option among many and not the center of things."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's fairly accessible.", text: "Around two thirds of applicants get in. Good grades in a solid schedule should put you in range." },
        { title: 'Tests are optional.', text: "Most applicants don't send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Early rounds help.', text: "There are early action and early decision options. If it's your top pick, applying early can help." },
        { title: 'Merit aid is common.', text: "Lots of students get scholarships, so don't rule it out because of the sticker price." }
      ]
    },

    who: {
      preview: 'Business-minded, social, mostly from the Northeast',
      paragraphs: [
        "Most students come from New England, New York and New Jersey. The crowd leans business-minded, outgoing and pretty put-together. A lot of people already know they want finance, marketing, accounting or something nearby.",
        "There's more than business, though. The school also has arts and sciences majors and health programs, including a physician assistant program. Those students exist, they're just outnumbered."
      ]
    },

    knownFor: {
      preview: 'Business programs, job placement, and a nice suburban campus',
      points: [
        { title: 'Business', text: "It started as a business school and that's still its identity. Finance, accounting, marketing and management are the big names." },
        { title: 'Getting hired', text: 'The school puts a lot of energy into internships and job placement, and companies in Boston, Providence and New York recruit here.' },
        { title: 'Division I sports', text: "Bryant plays most sports in the America East and football in the CAA. Men's basketball has made the NCAA tournament in recent years." },
        { title: 'The Archway', text: "Students avoid walking through the archway on the main green until graduation. There are worn paths around it to prove it." }
      ]
    },

    stereotypes: {
      preview: '"Everyone is a business major" is mostly true. "Middle of nowhere" is half.',
      items: [
        { said: "Everyone's a business major.", verdict: 'true', text: "Most students are in the business school. If you're not, you'll still hear a lot about internships and recruiting." },
        { said: "It's in the middle of nowhere.", verdict: 'half', text: "Smithfield is quiet and suburban. But Providence is about 20 minutes away, so it's not as isolated as it sounds." },
        { said: 'Everyone dresses like they have an interview.', verdict: 'half', text: "There's a polished look and business clubs do dress up. On a normal day it's hoodies and leggings like anywhere else." },
        { said: "There's nothing to do on weekends.", verdict: 'half', text: "Since almost everyone lives on campus, there's usually something going on. It's just smaller than a big state school scene." }
      ]
    },

    mythsAndKnow: {
      preview: "It's more than a business school. A car helps a lot.",
      myths: [
        { title: "You can only study business.", text: 'There are arts and sciences majors and health programs too. They are smaller, but real.' },
        { title: "It's the same as Bentley.", text: "They're both business-focused, but Bentley is closer to Boston. Bryant has a bigger suburban campus and plays Division I sports." }
      ],
      know: [
        { title: 'A car helps.', text: "Smithfield doesn't have much within walking distance. Shuttles help, but driving makes getting to Providence or home much easier." },
        { title: 'You live on campus.', text: 'Housing is available all four years and most people use it. That keeps the community tight.' },
        { title: 'Career prep starts early.', text: "Expect resume workshops and internship talk from your first year. If that excites you, great. If not, it can feel like a lot." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a business career. Rough if you want a city.',
      love: ['You already want a business career', 'You want a safe, self-contained campus', 'You like a small school with Division I sports', 'You want help landing internships'],
      struggle: ['You want to live in a city', "You're unsure business is for you", 'You want a huge party scene']
    },

    people: {
      preview: 'Career help and campus life win. Location and sameness get criticized.',
      plus: ['Career services and internships are strong', 'The campus is clean and easy to live on', 'People are friendly and involved'],
      minus: ["There's not much to do off campus without a car", 'The business focus can feel one-note', 'Students can seem pretty similar']
    }
  }
});
