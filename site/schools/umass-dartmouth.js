registerSchool({
  id: 'umass-dartmouth',
  name: 'UMass',
  title: 'UMass Dartmouth',
  nameSub: 'Dartmouth',
  state: 'Massachusetts',
  location: 'North Dartmouth, MA · Near New Bedford',
  asOf: '2026',

  colors: {
    name: 'Corsairs · Blue and gold',
    swatches: ['#003764', '#FEC24D', '#FF4613'],
    band: '#003764',
    onBand: '#FFFFFF',
    onBandMuted: '#A1C5E1',
    stripe: '#FF4613',
    accent: '#003764',
    accentOnDark: '#FEC24D'
  },

  vibe: "A quiet, affordable state school on the South Coast with a famous concrete campus. Classes are smaller than you'd expect, the ocean is close, and weekends can get very quiet.",
  flags: ['Concrete campus', 'Quiet weekends', 'Near the ocean', 'Good value'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~6,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Quiet, laid-back, affordable, with one-of-a-kind architecture',
      meters: {
        party:    { value: 3, note: 'Some parties, but a lot of people go home' },
        campus:   { value: 6, note: 'Brutalist concrete loop with woods and ponds' },
        spirit:   { value: 3, note: 'Small crowds at Division III games' },
        pressure: { value: 4, note: 'Manageable, nursing and engineering are harder' },
        career:   { value: 6, note: 'Solid local connections on the South Coast' },
        greek:    { value: 2, note: 'A few chapters, no big scene' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friendly during the week. Weekends depend on who stays.',
      paragraphs: [
        "Most students are from Massachusetts, and a lot live close enough to go home on weekends. That is the big complaint. Weekdays feel lively, and some weekends feel empty.",
        "The people who stay find each other through clubs, club sports, intramurals and their dorm. Freshmen live in the residence halls on campus, and upperclassmen move into campus apartments. A smaller school means you keep seeing the same faces, which helps.",
        "New Bedford and Fall River are short drives away for food and shopping, and the beaches in Dartmouth and Westport are close in the warm months. Boston and Providence are about an hour away. Having a car helps a lot."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Nursing is harder.', text: 'Nursing is one of the most popular majors and is more competitive than the school overall.' },
        { title: 'There is an honors college.', text: 'The Honors College adds smaller classes and extra opportunities for students who want them.' }
      ]
    },

    who: {
      preview: 'Mostly Mass kids, lots from the South Coast and nearby towns',
      paragraphs: [
        "Almost everyone is from Massachusetts, many from the South Coast, Cape Cod and the Boston suburbs. Lots of students are the first in their family to go to college, and many work part time.",
        "It fits laid-back people who want a real campus, smaller classes than a giant state school, and a lower price. Popular majors include nursing, business, engineering, computer science and marine science."
      ]
    },

    knownFor: {
      preview: 'The brutalist campus, marine science and a quiet rep',
      points: [
        { title: 'The architecture', text: 'The campus was designed by architect Paul Rudolph in the 1960s. It is all raw concrete in a loop around a central green. People either love it or call it a prison. It is famous among architecture fans.' },
        { title: 'Marine science', text: "The School for Marine Science and Technology is based in New Bedford, one of the country's top fishing ports. Students work on ocean and fisheries research." },
        { title: 'Nursing and business', text: 'Nursing and the Charlton College of Business are two of the biggest programs.' },
        { title: 'Suitcase school rep', text: "Students joke about how many people leave on Friday. It's a real thing, but it's not the whole story." }
      ]
    },

    stereotypes: {
      preview: '"Suitcase school" is true. "Looks like a prison" is half true.',
      items: [
        { said: 'Everyone goes home on weekends.', verdict: 'true', text: "A lot of students do. If you stay, weekends are quieter. The people who stay and join things say they still have a good time." },
        { said: 'The campus looks like a prison.', verdict: 'half', text: "It's a lot of gray concrete, and some people never warm up to it. Others think it's one of the coolest campuses in New England. Go see it." },
        { said: "It's in the middle of nowhere.", verdict: 'half', text: "Campus is surrounded by woods, and you'll want a car. But New Bedford and Fall River are close, and the ocean is right there." },
        { said: "It's just a backup school.", verdict: 'half', text: "Some students land here after other schools. Plenty pick it for the price, the size or marine science, and nobody cares once you're there." }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring a car if you can, and stay some weekends.',
      myths: [
        { title: 'There is nothing to do.', text: "There's less going on than at a big school, but clubs, events and the beaches give you plenty if you look for it." },
        { title: 'Small school means no opportunities.', text: 'Smaller classes make it easier to get to know professors, which helps with research and recommendations.' }
      ],
      know: [
        { title: 'A car helps a lot.', text: 'Public buses run to New Bedford and Fall River, but most students say a car makes life much easier.' },
        { title: 'Stay on some weekends.', text: 'Students who stick around and join things are the ones who say the social life is good.' },
        { title: 'The campus is a loop.', text: 'Buildings sit in a ring around the center. Everything is walkable, and the parking lots are on the outside.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want quiet and affordable. Rough if you want a big social scene.',
      love: ['You want a real campus at a public price', 'You like smaller classes and a calmer pace', 'You want marine science or to be near the ocean', 'You like weird, bold architecture'],
      struggle: ['You want a busy party scene every weekend', 'You want a city outside your door', "You don't have a car and hate being stuck on campus"]
    },

    people: {
      preview: 'Price and small classes win. Quiet weekends are the complaint.',
      plus: ['Affordable, especially for in-state students', 'Smaller classes and approachable professors', 'Close to the beach'],
      minus: ['Campus empties out on weekends', 'Hard to get around without a car', 'Some buildings feel old and gray']
    }
  }
});
