registerSchool({
  id: 'olin',
  name: 'Olin',
  nameSub: 'College of Engineering',
  title: 'Olin College',
  state: 'Massachusetts',
  location: 'Needham, MA · Next door to Babson',
  asOf: '2026',

  colors: {
    name: 'Olin · Blue and navy',
    swatches: ['#009BDF', '#00458C', '#A7A9AC'],
    band: '#00458C',
    onBand: '#FFFFFF',
    onBandMuted: '#B5D3EE',
    stripe: '#009BDF',
    accent: '#00458C',
    accentOnDark: '#009BDF'
  },

  vibe: "A tiny engineering school where you build things from week one. Everyone knows everyone, classes are projects instead of lectures, and the whole place feels more like a workshop than a college.",
  flags: ['Very small', 'Engineering only', 'Hands-on projects', 'Merit aid shrank'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~350' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Club only' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Tiny, nerdy, collaborative, and always building something',
      meters: {
        party:    { value: 2,  note: 'Small dorm hangouts, not a party school' },
        campus:   { value: 6,  note: 'Small, modern and self-contained' },
        spirit:   { value: 6,  note: 'No teams, but people love the place' },
        pressure: { value: 7,  note: 'Heavy project load, not cutthroat' },
        career:   { value: 8,  note: 'Grads land good engineering jobs' },
        greek:    { value: 0,  note: 'No fraternities or sororities' },
        religion: { value: 1,  note: 'Secular' }
      }
    },

    social: {
      preview: 'One small community. You will know every face by October.',
      paragraphs: [
        "With only around 85 to 90 people per class, there's no hiding. You'll know basically everyone in your year and most people in the others. Some people love that. Others say it starts to feel small by junior year.",
        "Social life is mostly clubs, dorm hangouts, game nights and late nights in the shop. People bond by working on projects together, and a lot of friendships start on a team.",
        "If you want more people, Babson is right next door, and you can take classes at Babson, Wellesley and Brandeis after your first semester. Boston is a train or car ride away for weekends."
      ]
    },

    gettingIn: {
      preview: 'Very hard to get into, with a second round in person.',
      points: [
        { title: "It's very selective.", text: 'Olin gets around a thousand applications for under 100 spots. Admitted students usually have near-perfect grades in hard classes.' },
        { title: "There's a Candidates' Weekend.", text: 'Strong applicants are invited to campus in February or March for group design activities and interviews. It is a real part of the decision, so be yourself and work well with others.' },
        { title: 'Calculus and physics matter.', text: 'Olin expects a strong background in both. Take them in high school if you can.' },
        { title: 'Tests are optional for now.', text: 'Olin suspended its test requirement through the 2026-27 cycle. Check the current policy before you apply.' }
      ]
    },

    who: {
      preview: 'Makers and tinkerers who want to build, not just study',
      paragraphs: [
        "Kids who did robotics, took apart the toaster, or built something just to see if they could. People who like working on teams and don't mind showing work that isn't finished yet. Most majors are mechanical engineering, electrical and computer engineering, or a flexible general engineering degree with a concentration.",
        "It's not for someone who wants to sit in a lecture hall and just take tests. You'll present, get feedback, redo things and work in groups constantly. If that sounds fun, you'll probably love it."
      ]
    },

    knownFor: {
      preview: 'Project-based learning, a tiny size, and a strong rep with engineers',
      points: [
        { title: 'Learning by doing', text: 'Classes are built around design projects from the first semester. You spend a lot of time in the shop and the labs, not just doing problem sets.' },
        { title: 'SCOPE', text: 'Senior year, teams spend the year on a real engineering project for a company. It is basically a job with a client before you graduate.' },
        { title: 'A big name in engineering education', text: 'Olin is small, but schools and engineers around the country know it for rethinking how engineering is taught.' },
        { title: 'The neighbors', text: "Babson, Wellesley and Brandeis are partner schools. You can take business, liberal arts and other classes there that Olin doesn't offer." }
      ]
    },

    stereotypes: {
      preview: '"Everyone is a nerd" is true. "It used to be free" is outdated.',
      items: [
        { said: "Everyone's a huge nerd.", verdict: 'true', text: "Pretty much, and proud of it. People get excited about robots, code and weird side projects. That's a big part of why people pick it." },
        { said: 'There is no social life.', verdict: 'half', text: "There are no frat parties or big games. But the community is tight, and people do a lot together. It's just quieter and nerdier than most schools." },
        { said: "It's basically free.", verdict: 'outdated', text: 'Olin used to give every student a big merit scholarship. Starting with students who entered in 2026, it dropped to $10,000 a year. Look at the real cost.' },
        { said: "It's just a smaller MIT.", verdict: 'myth', text: "Both are hard, but they feel very different. Olin has no research university, no grad students and no big lectures. It's all undergrads working on projects." }
      ]
    },

    mythsAndKnow: {
      preview: 'Small means small. Check the real cost after the merit cut.',
      myths: [
        { title: "You can't take anything but engineering.", text: 'Olin requires arts, humanities and entrepreneurship classes, and you can take more at Babson, Wellesley and Brandeis.' },
        { title: 'A tiny school means a weak degree.', text: 'Employers and grad schools know Olin. Grads go into engineering, tech, startups and grad programs.' }
      ],
      know: [
        { title: "It's really small.", text: "Around 350 undergrads total. Visit and picture seeing the same people every day for four years before you commit." },
        { title: 'The merit scholarship changed.', text: 'New students now get $10,000 a year instead of half of tuition. Need-based aid still exists, so run the numbers.' },
        { title: "You'll want a way to get around.", text: "Campus is in the suburbs. Needham has a commuter rail stop, but it's not a walk-to-everything city school." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love to build. Rough if you want a big college scene.',
      love: ['You like hands-on projects more than lectures', 'You want professors who know your name', 'You like working on teams', 'You want to be around other people who love making things'],
      struggle: ['You want a big campus with lots of new faces', 'You want sports, game days or Greek life', "You're not sure you want engineering"]
    },

    people: {
      preview: 'The teaching and community win. Size and cost are the complaints.',
      plus: ['Professors are close and actually care about teaching', 'You build real things and leave with a portfolio', 'The community is tight and supportive'],
      minus: ['It can feel tiny and bubble-like after a couple of years', 'The workload is heavy and project deadlines stack up', 'The smaller merit scholarship makes it pricier than it used to be']
    }
  }
});
