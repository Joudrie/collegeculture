registerSchool({
  id: 'endicott',
  name: 'Endicott',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Beverly, MA · On the ocean',
  asOf: '2026',

  colors: {
    name: 'Gulls · Navy and green',
    swatches: ['#00325D', '#007C57', '#FFFFFF'],
    band: '#00325D',
    onBand: '#FFFFFF',
    onBandMuted: '#B5C6D8',
    stripe: '#007C57',
    accent: '#007C57',
    accentOnDark: '#00AF6E'
  },

  vibe: "A small, social college on a gorgeous stretch of ocean north of Boston. It's career-focused in a hands-on way, since everyone has to do internships, and the campus feels more like a resort than a school.",
  flags: ['Oceanfront campus', 'Internships required', 'Small and social', 'No Greek life'],
  facts: [
    { label: 'Setting', value: 'Coastal suburb' },
    { label: 'Undergrads', value: '~3,400' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Mostly residential, on the coast, lots of students stay on campus", "housing": ["Most students live on campus, especially in the first years.", "Housing is a mix of traditional dorms and apartments.", "The campus is small and close to the water."], "food": ["There is one main dining hall plus a few smaller options.", "Students say it is okay and gets repetitive.", "Beverly and nearby towns have restaurants, but you may want a car."]},
    vibe: {
      preview: 'Beachy, friendly, career-minded, a little cliquey',
      meters: {
        party:    { value: 5, note: 'Picks up for upperclassmen and off campus' },
        campus:   { value: 10, note: 'Private beaches and ocean views from dorms' },
        spirit:   { value: 5, note: 'Football, hockey and lacrosse draw crowds' },
        pressure: { value: 4, note: 'Manageable, more practical than academic' },
        career:   { value: 9, note: 'Three required internships' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and friendly. Gets better as you get older.',
      paragraphs: [
        "It's a small campus, so you'll recognize most people quickly. Freshman year is dorms, the dining hall and the beach when the weather is good. Some students say groups form fast and can feel a bit cliquey, a little like high school.",
        "There isn't a traditional party scene, and there's no Greek life. Upperclassmen say it opens up once you're a junior or senior and know people with houses or apartments off campus. Sports teams are a big part of the social picture.",
        "Downtown Beverly has restaurants and a train stop, Salem is a short drive, and Boston is a commuter rail ride away. People with cars get out more."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Some programs are more competitive.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Solid grades and a clear interest in the school go a long way.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some majors are tougher.', text: 'Programs like nursing can be more competitive than the school overall. Check what your major asks for.' },
        { title: 'Ask about aid.', text: "It's a private school with a private-school price. Compare aid offers carefully." }
      ]
    },

    who: {
      preview: 'Social, sporty, career-focused New Englanders',
      paragraphs: [
        "A lot of students are from Massachusetts and the rest of New England. Many play a sport, and a lot are into practical majors like business, nursing, sport management and education.",
        "People tend to be outgoing and focused on getting a job, more than on deep academic debates. If you want to try a career before you commit to it, this place is set up for that."
      ]
    },

    knownFor: {
      preview: 'Required internships, the beach campus, and job outcomes',
      points: [
        { title: 'Required internships', text: 'Every bachelor\'s student does three: two short ones early on and a full semester-long one senior year. It is the core of the school.' },
        { title: 'The campus', text: 'It sits right on Massachusetts Bay with its own beaches. Some upperclassman dorms are steps from the sand.' },
        { title: 'Getting jobs', text: "All that internship experience means students graduate with a real resume, and the school leans hard on that reputation." },
        { title: 'A fast glow-up', text: 'It started as a small two-year women\'s college. It has grown into a full co-ed college with graduate programs.' }
      ]
    },

    stereotypes: {
      preview: '"Beach school" is true. "Girls\' junior college" is outdated.',
      items: [
        { said: "It's a beach school.", verdict: 'true', text: "The ocean is right there, and people love it. That doesn't mean nobody works. The internships keep people busy." },
        { said: "It's a big party school.", verdict: 'half', text: "There's drinking and fun, but no Greek life and not much of a traditional party scene on campus. It picks up off campus later on." },
        { said: "It's a women's junior college.", verdict: 'outdated', text: 'It was founded as a two-year women\'s college. It has been a four-year school for decades and co-ed since 1994.' },
        { said: 'It feels like high school.', verdict: 'half', text: 'Small size means everyone knows each other, and some say groups form fast. Others love that tight-knit feel.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Internships are a real time commitment. Winters on the ocean are cold.',
      myths: [
        { title: 'The internships are a formality.', text: "They're a real commitment, and the senior one is a full semester of work. What you get out of them depends on how hard you chase good placements." },
        { title: "It's in the middle of nowhere.", text: 'Beverly is a real town with a downtown and train service, and Boston is close.' }
      ],
      know: [
        { title: 'Plan your summers and senior year.', text: 'The early internships often happen over breaks, and senior year includes a full internship semester.' },
        { title: 'Winters are windy.', text: "The ocean views are amazing in September. In February, the wind off the water is no joke." },
        { title: 'A car helps.', text: 'The commuter rail gets you to Boston, but getting around the North Shore is easier with a car.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want hands-on career prep by the ocean. Rough if you want a big scene.',
      love: ['You want work experience before you graduate', 'You want a beautiful, small campus', 'You play a sport or like a sporty crowd', 'You want Boston close but not on top of you'],
      struggle: ['You want Greek life or a big party school', 'You want a big, diverse crowd', 'You want a heavy academic or research focus']
    },

    people: {
      preview: 'The campus and internships win. Small size and cost are the complaints.',
      plus: ['The campus and beaches are stunning', 'Internships give you a real resume', 'Friendly, close-knit community'],
      minus: ['Social scene can feel cliquey', 'Limited party scene for underclassmen', 'Pricey for what some expect']
    }
  }
});
