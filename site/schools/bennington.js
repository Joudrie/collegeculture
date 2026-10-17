registerSchool({
  id: 'bennington',
  name: 'Bennington',
  nameSub: 'College',
  state: 'Vermont',
  location: 'Bennington, VT · Hilltop campus',
  asOf: '2026',

  colors: {
    name: 'No official colors · Cream and rust',
    swatches: ['#E8E1D0', '#B5472B'],
    band: '#E8E1D0',
    onBand: '#1F1F1F',
    onBandMuted: '#4A4A4A',
    stripe: '#B5472B',
    accent: '#A33A20',
    accentOnDark: '#E8805F'
  },

  vibe: "A tiny, artsy college where you design your own course of study. No required classes, no grades by default, and a lot of freedom if you can handle it.",
  flags: ['Design your own major', 'Tiny', 'Arts and writing', 'Rural'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~700' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'No varsity' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Rural Vermont; plan on a car or rides", "points": ["Public transit is very limited in Bennington.", "Albany International Airport in New York is the closest major airport.", "A car helps a lot. Check the school's rules on first-year cars."]},
    "living": {"preview": "Tiny and fully residential; food is homey, campus is remote.", "housing": ["Almost everyone lives on campus in small houses.", "The house system gives dorm life a small, close feel.", "Students tend to stay on campus, and the town is small."], "food": ["There is a main dining hall with a small, familiar crowd.", "Students usually call the food decent.", "Bennington is a small town, so off-campus options are limited."]},
    vibe: {
      preview: 'Artsy, independent, tiny, very self-directed',
      meters: {
        party:    { value: 3, note: 'House gatherings and campus events' },
        campus:   { value: 7, note: 'Hilltop campus, woods and views' },
        spirit:   { value: 1, note: 'No varsity teams to cheer for' },
        pressure: { value: 6, note: 'Pressure comes from you, not a grade curve' },
        career:   { value: 5, note: 'Field Work Term gives you real experience' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Almost everyone lives on campus. Houses are the social hub.',
      paragraphs: [
        'Nearly everyone lives on campus in houses, and each house has its own personality. With so few students, you get to know a lot of people quickly.',
        'The social scene is performances, student-run events, shows and parties. Creative people tend to hang out with creative people.',
        'The town is small and quiet. There is not much to do off campus, so students make their own fun.'
      ]
    },

    gettingIn: {
      preview: 'Fairly selective. Your portfolio and voice matter.',
      points: [
        { title: 'It cares about you, not just stats.', text: 'Essays, your interests and your creative work matter. Strong grades help.' },
        { title: 'Tests are optional.', text: 'You do not need SAT or ACT scores. Check the current policy.' },
        { title: 'Aid is a big part of it.', text: 'The sticker price is high, but many students get scholarships.' }
      ]
    },

    who: {
      preview: 'Creative, independent, curious and a little unconventional',
      paragraphs: [
        'Writers, artists, musicians, dancers, thinkers and students who want to build their own path. Many say they did not fit a traditional high school mold.',
        "It fits self-starters. If you need someone to tell you what to do each week, you'll struggle."
      ]
    },

    knownFor: {
      preview: 'The Plan Process, narrative evaluations and the arts',
      points: [
        { title: 'The Plan', text: 'Instead of a standard major, you design your own program with faculty advisors.' },
        { title: 'Narrative evaluations', text: 'Professors write detailed feedback in place of regular grades. Students can ask for grades if they need them for other schools.' },
        { title: 'Field Work Term', text: 'Every year students take time off campus for an internship or project.' }
      ]
    },

    stereotypes: {
      preview: '"Artsy and weird" is half true. "No work" is a myth.',
      items: [
        { said: 'Everyone is an artist.', verdict: 'half', text: 'The arts are huge, but there are also science, language and social science students.' },
        { said: "There's no work.", verdict: 'myth', text: 'No required classes means you pick the work. Done right, it is a lot.' },
        { said: "It's super expensive.", verdict: 'half', text: 'The sticker price is high. Many students get aid, so check net price.' },
        { said: "It's really isolated.", verdict: 'true', text: 'Small town, small campus. You will rely on the community.' }
      ]
    },

    mythsAndKnow: {
      preview: 'No grades is not no standards. Plan how you will use the freedom.',
      myths: [
        { title: 'You can skip hard classes.', text: 'You design your plan, but advisors push you to do real work.' },
        { title: 'Nobody can use a Bennington degree.', text: 'Graduates go on to grad school and careers. You do have to explain the plan system.' }
      ],
      know: [
        { title: 'It is very small.', text: 'Classes are tiny and you will know everyone. That is great until it is not.' },
        { title: 'You need self-discipline.', text: 'Freedom is the whole deal. Some students find it overwhelming.' },
        { title: 'Winters are long.', text: 'It is a quiet rural campus, so expect cold and quiet.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want freedom. Rough if you need structure.',
      love: ['You want to design your own education', 'You like tiny classes and close professors', 'You are creative and independent'],
      struggle: ['You want football and school spirit', 'You like clear requirements', 'You want a big social scene']
    },

    people: {
      preview: 'Freedom and community win. Cost and isolation are the complaints.',
      plus: ['Real freedom to shape your studies', 'Close ties with professors', 'Creative, supportive community'],
      minus: ['Expensive sticker price', 'Very small and isolated', 'Not much structure if you struggle without it']
    }
  }
});
