registerSchool({
  id: 'quinnipiac',
  name: 'Quinnipiac',
  nameSub: 'University',
  state: 'Connecticut',
  location: 'Hamden, CT · At the foot of Sleeping Giant',
  asOf: '2026',

  colors: {
    name: 'Bobcats · Navy and gold',
    swatches: ['#0C2340', '#FFB81C', '#418FDE'],
    band: '#FFB81C',
    onBand: '#0C2340',
    onBandMuted: '#2F3D55',
    stripe: '#418FDE',
    accent: '#0C2340',
    accentOnDark: '#FFB81C'
  },

  vibe: "A good-looking suburban campus next to a state park, full of nursing, health science and communications majors. It's social, a bit preppy, and hockey is a very big deal.",
  flags: ['Pretty campus', 'Health sciences', 'Hockey school', 'Car or shuttle'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~6,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Medium' }
  ],

  sections: {
    vibe: {
      preview: 'Social, polished, health-science heavy, hockey-crazy',
      meters: {
        party:    { value: 6, note: 'Off-campus houses and bars in Hamden and New Haven' },
        campus:   { value: 8, note: 'Clean, modern, with mountain views' },
        spirit:   { value: 7, note: 'Hockey games are the event' },
        pressure: { value: 6, note: 'Nursing and PA programs are demanding' },
        career:   { value: 7, note: 'Strong for health careers and media' },
        greek:    { value: 4, note: 'About a fifth of students, no Greek houses' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Busy and social. Off-campus houses and bars after freshman year.',
      paragraphs: [
        "Freshman year is on the main campus, and the dorms are where friend groups start. Clubs, intramurals and Greek life fill in the rest. People describe it as friendly and easy to meet people in your first year.",
        "Older students often live on the York Hill campus up the road or in houses in Hamden. A lot of the weekend scene moves to those houses and to bars in Hamden and New Haven.",
        "Hockey is the shared experience. Men's hockey won the national championship in 2023, and big games pack the arena on York Hill."
      ]
    },

    gettingIn: {
      preview: 'Most get in overall, but health programs are much harder',
      points: [
        { title: 'Overall, most get in.', text: 'A majority of applicants are admitted. Solid grades usually get you in.' },
        { title: 'Your program matters a lot.', text: 'Nursing, physician assistant and physical therapy tracks are far more competitive than the school overall. Treat those as a separate admission.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Ask about combined degrees.', text: 'Some health programs let you go straight from a bachelor\'s into a graduate degree. Check how long the track you want takes.' }
      ]
    },

    who: {
      preview: 'Future nurses and PAs, comms kids, and a lot of Northeast suburbs',
      paragraphs: [
        "Lots of nursing, health science, physician assistant, communications and business students. Most come from the Northeast, especially Connecticut, New York, New Jersey and Massachusetts. A big share are from out of state.",
        "It fits people who want a classic campus with a social scene, but in a manageable size. The health students are busy and serious. Everyone else tends to have a bit more free time."
      ]
    },

    knownFor: {
      preview: 'Health sciences, the Quinnipiac poll, hockey and the campus',
      points: [
        { title: 'Health sciences', text: 'Nursing, PA and physical therapy are the big draws, and there is a medical school on the North Haven campus.' },
        { title: 'The Quinnipiac poll', text: "If you've heard the name on the news, it's probably the poll. It surveys voters on politics and elections and gets quoted nationally." },
        { title: 'Hockey', text: "Men's hockey won the 2023 national championship, and women's hockey is strong too. It's Division I and the main sports identity." },
        { title: 'The campus', text: "The main campus sits across from Sleeping Giant State Park. It's one of the nicer-looking campuses in New England." }
      ]
    },

    stereotypes: {
      preview: '"Rich kids" is half true. "Party school" is overstated.',
      items: [
        { said: "Everyone's rich.", verdict: 'half', text: "It's expensive and draws a lot of students from well-off suburbs. Plenty of people are there on aid and loans, though." },
        { said: 'Everyone dresses the same.', verdict: 'true', text: "Students joke about it themselves. Expect a lot of the same jackets, boots and bags. It's a vibe, not a rule." },
        { said: "It's a party school.", verdict: 'half', text: "There's a real party and bar scene, but the health science students spend a lot of weekends studying. You can go either way." },
        { said: "It's a backup school.", verdict: 'half', text: "For the general admission, it's not hard to get in. For nursing and PA, it's competitive and some people pick it first." }
      ]
    },

    mythsAndKnow: {
      preview: "Three campuses, you'll want a car, and it's not cheap",
      myths: [
        { title: "It's in New Haven.", text: "It's in Hamden, a suburb about 15 to 20 minutes north. New Haven is close, but it's not a city campus." },
        { title: "The poll is a class or club.", text: "It's a professional polling institute run by the university. Some students work there, but most never touch it." }
      ],
      know: [
        { title: 'There are three campuses.', text: 'Mount Carmel is the main one, York Hill has upperclass housing and the arena, and North Haven has graduate health programs. Shuttles connect them.' },
        { title: 'A car helps.', text: "Shuttles cover the campuses and some local stops, but getting around Hamden and New Haven is easier if you drive." },
        { title: 'Health programs are intense.', text: 'Nursing and PA students have tough schedules and clinical hours. The social life looks different for them.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for health careers and a classic campus. Rough if you want a city.',
      love: ['You want a nursing or health science career', 'You want a pretty campus with hiking next door', 'You want a social scene and hockey nights', 'You want a mid-sized school'],
      struggle: ['You want a big, diverse city around you', 'You want a cheaper school', "You don't want a car and want to get off campus a lot"]
    },

    people: {
      preview: 'Campus and health programs win. Cost and the bubble are the complaints.',
      plus: ['The campus is beautiful and well kept', 'Strong health science programs', 'Hockey games are a blast'],
      minus: ["It's expensive", 'Can feel like a preppy bubble', 'Getting around without a car is annoying']
    }
  }
});
