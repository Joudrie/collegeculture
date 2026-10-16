registerSchool({
  id: 'wentworth',
  name: 'Wentworth',
  nameSub: 'Institute of Technology',
  state: 'Massachusetts',
  location: 'Boston, MA · Fenway / Mission Hill',
  asOf: '2026',

  colors: {
    name: 'Leopards · Black and gold',
    swatches: ['#000000', '#FFCB05'],
    band: '#000000',
    onBand: '#FFFFFF',
    onBandMuted: '#BDBDBD',
    stripe: '#FFCB05',
    accent: '#8A6A00',
    accentOnDark: '#FFCB05'
  },

  vibe: "A hands-on school for people who want to build things: buildings, machines, software, products. You spend a lot of time in labs and studios, and you'll work two real co-op jobs before you graduate.",
  flags: ['Hands-on majors', 'Co-op required', 'Mostly guys', 'Heavy workload'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~3,900' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Barely any' }
  ],

  sections: {
    vibe: {
      preview: 'Practical, busy, career-first, quiet on-campus social life',
      meters: {
        party:    { value: 3, note: 'Small apartment parties, Boston does the rest' },
        campus:   { value: 4, note: 'A compact quad in the middle of the city' },
        spirit:   { value: 3, note: 'Small crowds, hockey gets some love' },
        pressure: { value: 7, note: 'Studio and lab work eats your time' },
        career:   { value: 9, note: 'Two required co-ops, strong local network' },
        greek:    { value: 1, note: 'Not part of the culture' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friends come from your major. The city fills the rest.',
      paragraphs: [
        "Most of your friends will be people in your major. You'll spend late nights together in the same studio or lab, and those groups get close. Meeting people outside your program takes more effort.",
        "On-campus parties are not a big thing. Students say free time goes to homework, intramurals, clubs and exploring Boston. Fenway Park and the Museum of Fine Arts are a short walk.",
        "Wentworth is part of the Colleges of the Fenway with Emmanuel, MassArt, MCPHS and Simmons. You can take some classes and join some activities with those schools, which helps widen your circle."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Your major choice matters.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Decent grades, especially in math and science, will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'You pick a program.', text: "Wentworth is built around specific majors, so it helps to know roughly what you want to study when you apply." }
      ]
    },

    who: {
      preview: 'Builders and tinkerers who want a job, not a theory degree',
      paragraphs: [
        "People who'd rather make something than write a paper about it. Architecture, construction management, engineering, computer science and design are the big programs. Most students are from New England.",
        "The student body is around three-quarters male. Some majors, like interior design, lean the other way, but engineering classes are mostly guys. If that matters to you, know it going in."
      ]
    },

    knownFor: {
      preview: 'Required co-op, architecture and construction, and job placement',
      points: [
        { title: 'Required co-op', text: 'Every student does two full-time co-op semesters, usually junior and senior year. Summer classes keep most people on a four-year track.' },
        { title: 'Architecture and construction', text: "These are some of the school's best-known programs, and Boston's building and design firms hire a lot of Wentworth grads." },
        { title: 'Getting hired', text: "Grads tend to leave with real experience on their resume. That's the main selling point." }
      ]
    },

    stereotypes: {
      preview: '"All guys" is mostly true. "Just a trade school" is outdated.',
      items: [
        { said: "It's all guys.", verdict: 'half', text: "Not all, but around three out of four students are men. It varies a lot by major." },
        { said: "It's basically a trade school.", verdict: 'outdated', text: 'It started as a technical training school over 100 years ago. Today it gives bachelor\'s and master\'s degrees in engineering, architecture, computer science and more.' },
        { said: 'Nobody has a social life.', verdict: 'half', text: "The workload is heavy and on-campus parties are rare. People still have fun, it just looks more like small groups and exploring the city." },
        { said: "It's Northeastern's little sibling.", verdict: 'myth', text: "They're neighbors and both do co-op, but Wentworth is smaller, more hands-on and much easier to get into. It's its own thing." }
      ]
    },

    mythsAndKnow: {
      preview: 'Co-op is required, the workload is real, and you need no car',
      myths: [
        { title: 'Co-op means an extra year.', text: 'Not usually. Summer classes are built in, so most students still finish in about four years.' },
        { title: "It's only for engineers.", text: 'Architecture, interior design, industrial design, construction management, business and computer science are all big here.' }
      ],
      know: [
        { title: 'The workload is heavy.', text: 'Students say studio and lab projects take up a lot of nights and weekends. Plan for it.' },
        { title: 'Co-op is not optional.', text: "You have to complete two co-op semesters to graduate. The school helps, but you still apply and interview." },
        { title: "You don't need a car.", text: 'The Orange Line at Ruggles and the Green Line E branch are both close by.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want to build things and get hired. Rough if you want a party school.',
      love: ['You want to learn by building, not just reading', 'You want work experience before you graduate', 'You want to live in Boston', 'You already know roughly what field you want'],
      struggle: ['You want a big party scene', 'You want to explore a lot of subjects before picking', 'You want a balanced gender ratio in every class']
    },

    people: {
      preview: 'Co-op and hands-on classes win. Workload and social life are the complaints.',
      plus: ['Co-op leads to real jobs', 'Hands-on classes with lots of lab and studio time', 'Great Boston location'],
      minus: ['The workload can take over your life', 'Social life is quieter than at bigger schools', 'Mostly guys, depending on your major']
    }
  }
});
