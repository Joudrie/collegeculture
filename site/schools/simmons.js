registerSchool({
  id: 'simmons',
  name: 'Simmons',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Boston, MA · Fenway',
  asOf: '2026',

  colors: {
    name: 'Sharks · Blue and white',
    swatches: ['#003A70', '#2B7BBB', '#BADCED'],
    band: '#003A70',
    onBand: '#FFFFFF',
    onBandMuted: '#BADCED',
    stripe: '#BADCED',
    accent: '#003A70',
    accentOnDark: '#BADCED'
  },

  vibe: "A small women's college on the Fenway, with coed grad schools attached. It's serious about careers, especially nursing and health, and the social life is quiet on campus and lives in Boston.",
  flags: ["Women's undergrad", 'Nursing heavy', 'Quiet on campus', 'Boston at the door'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, career-minded, quiet on campus, very liberal',
      meters: {
        party:    { value: 2, note: 'People go to other schools or the city' },
        campus:   { value: 5, note: 'Small and pretty, split into two parts' },
        spirit:   { value: 2, note: 'Division III, small crowds' },
        pressure: { value: 6, note: 'Nursing is demanding' },
        career:   { value: 8, note: 'Built around jobs since day one' },
        greek:    { value: 0, note: 'No sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and quiet. Your friends come from your dorm, clubs and the city.',
      paragraphs: [
        "There's very little partying on campus. Students describe the scene as quiet, and people who want parties usually head to friends at bigger Boston schools.",
        "With under 2,000 undergrads, you'll see the same people a lot. Some students love how close it feels. Others say it can be cliquey and that it takes effort to find your group. Clubs and your dorm floor are the main ways in.",
        "Simmons is part of the Colleges of the Fenway with Emmanuel, MassArt, MCPHS and Wentworth, so you can take classes and join activities with those students. The Museum of Fine Arts, the Gardner Museum and Fenway Park are all a short walk."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's not super hard to get into.", text: 'Most people who apply are admitted. Nursing can be more competitive than other majors.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Check who the undergrad college is for.', text: "The undergrad program is a women's college. Simmons publishes its own policy on who is eligible, so read it on the admission site." },
        { title: 'Merit aid is common.', text: 'Many students get scholarships. The sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Future nurses and health workers, plus activists and planners',
      paragraphs: [
        "A lot of students are in nursing and other health programs. Psychology, biology, communications, social work and political science are popular too. Many are from New England.",
        "Students describe the campus as very liberal and pretty outspoken. It fits people who already have a career in mind and want a small school in a big city. If you want a classic big-campus experience, it's probably not it."
      ]
    },

    knownFor: {
      preview: 'Nursing, a career focus since 1899, and the Fenway location',
      points: [
        { title: 'Nursing and health', text: 'Nursing is one of the biggest majors. The Longwood hospitals are close, which helps with clinical placements.' },
        { title: 'Career focus from the start', text: 'Simmons was founded in 1899 to help women get real jobs. That practical focus is still the identity of the school.' },
        { title: 'Big grad schools', text: 'Simmons has well-known graduate programs in library science and social work, and a large online grad side. Undergrads are a smaller part of the whole.' },
        { title: 'A campus that is changing', text: 'Dorms and classes are on two campuses split by Brookline Avenue. A big new residence building on the main campus is set to open around early 2027.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is a nurse" is half true. "No social life" is mostly true on campus.',
      items: [
        { said: "Everyone is a nursing major.", verdict: 'half', text: "Nursing is huge here and shapes the school. Plenty of students study psychology, biology, communications, politics and more." },
        { said: "There's no social life.", verdict: 'half', text: "On campus it's quiet and there are no sororities. Students who use Boston and the other Fenway schools have a lot more going on." },
        { said: "Everyone is very political.", verdict: 'half', text: "It's a very liberal campus and students care about activism. Not everyone is an activist, but you'll notice the energy." },
        { said: "It's a library school.", verdict: 'myth', text: 'Library science is a famous grad program, not an undergrad thing. Most undergrads are in health, science and social sciences.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Two campuses for now, Boston is pricey, no car needed',
      myths: [
        { title: 'Small means few options.', text: 'Colleges of the Fenway cross-registration and Boston internships open up a lot more than the size suggests.' },
        { title: "It's only for people who want to be nurses.", text: 'Nursing is the biggest name, but there are dozens of other majors.' }
      ],
      know: [
        { title: 'Housing is changing.', text: "Older dorms are on a separate residence campus a short walk away. A new building is planned to bring students onto the main campus. Ask what housing looks like for your year." },
        { title: "You don't need a car.", text: 'The Green Line and buses are close by, and most of what you need is walkable.' },
        { title: 'Nursing is a heavy load.', text: 'Clinicals and science classes take a lot of time. Plan your schedule and job hours around that.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: "Great if you want a career-focused women's college in Boston. Rough if you want parties.",
      love: ["You want a small women's college in a real city", 'You want a career in nursing or health', 'You want small classes and professors who know you', 'You care about activism and social issues'],
      struggle: ['You want a big party scene on campus', 'You want big games and school spirit', 'You want a large, busy campus']
    },

    people: {
      preview: 'Small classes and location win. Quiet social life and old dorms are the complaints.',
      plus: ['Small classes and supportive professors', 'The Fenway location is hard to beat', 'Strong career prep, especially in health'],
      minus: ['Social life on campus is quiet and can feel cliquey', 'Older dorms are dated while construction finishes', "It's expensive before aid"]
    }
  }
});
