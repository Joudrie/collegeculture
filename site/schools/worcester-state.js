registerSchool({
  id: 'worcester-state',
  name: 'Worcester State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Worcester, MA · West side neighborhood',
  asOf: '2026',

  colors: {
    name: 'Lancers · Royal blue and gold',
    swatches: ['#003087', '#FFB81C'],
    band: '#003087',
    onBand: '#FFFFFF',
    onBandMuted: '#C2CDEA',
    stripe: '#FFB81C',
    accent: '#003087',
    accentOnDark: '#FFB81C'
  },

  vibe: "A small, affordable state school on a compact campus in a quiet part of Worcester. Most students commute, a lot of them are going into health careers, and it's a calm place to get a practical degree.",
  flags: ['Mostly commuters', 'Affordable', 'Health sciences', 'Quiet campus'],
  facts: [
    { label: 'Setting', value: 'City edge' },
    { label: 'Undergrads', value: '~4,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Basically none' }
  ],

  sections: {
    vibe: {
      preview: 'Quiet, practical, commuter-heavy, low pressure',
      meters: {
        party:    { value: 3, note: 'Small get-togethers, not a party school' },
        campus:   { value: 5, note: 'Small and tidy, in a residential area' },
        spirit:   { value: 3, note: 'Small crowds at games' },
        pressure: { value: 4, note: 'Health majors work hard, others less so' },
        career:   { value: 7, note: 'Nursing and health programs lead to jobs' },
        greek:    { value: 0, note: 'Not part of campus life' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Small and friendly if you live there. Quiet if you commute.',
      paragraphs: [
        "About two thirds of undergrads commute, so campus can empty out after classes and on weekends. The students who live on campus tend to know each other, and dorms, clubs and teams are where friend groups form.",
        "The Wellness Center is a real hangout. It's a big, newer gym and athletics building, and a lot of social life runs through sports, fitness classes and intramurals.",
        "Campus is on the west side of Worcester in a residential neighborhood, so there's not much right outside the gates. Downtown Worcester has restaurants, concerts and WooSox games, and with a car or a ride it's close."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid high school grades usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Nursing is more competitive.', text: 'Popular health programs can have higher bars and limited spots. If that is your plan, apply early and ask how admission to the major works.' },
        { title: 'In-state cost is low.', text: 'Massachusetts residents pay much less than at private schools, and state aid can cover a lot for lower and middle income families.' }
      ]
    },

    who: {
      preview: 'Central Mass locals, future nurses and health workers',
      paragraphs: [
        "Mostly students from Worcester and Central Massachusetts, many living at home to save money. A lot of people work part time, and many are the first in their family to go to college.",
        "Nursing and health sciences are a big draw, along with psychology, business, education, biology and communication sciences. It fits people who want a solid, affordable degree and don't need a big social scene."
      ]
    },

    knownFor: {
      preview: 'Nursing and health programs, low cost, and the Worcester colleges',
      points: [
        { title: 'Nursing and health sciences', text: 'Nursing has a strong local reputation, and the school has programs in fields like occupational therapy and speech-language pathology. Worcester has a lot of hospitals for clinical placements.' },
        { title: 'Being affordable', text: "It's one of the cheaper ways to get a four-year degree in the state, especially if you live at home." },
        { title: 'Colleges of Worcester Consortium', text: "Students can cross-register for some classes at other Worcester colleges, which opens up options a small school can't offer alone." },
        { title: 'The Wellness Center', text: 'A big athletics and fitness building that opened in 2016. It is the nicest building on campus and gets used a lot.' }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is true. "Nothing to do" is half true.',
      items: [
        { said: "It's a commuter school.", verdict: 'true', text: "Most undergrads commute. If you live on campus, it's a smaller, tighter crowd, and you'll want to get involved to meet people." },
        { said: "There's nothing to do on weekends.", verdict: 'half', text: "Campus is quiet on weekends. Worcester has plenty going on, but you need a car or a ride to make the most of it." },
        { said: "It's just WPI's or Holy Cross's cheaper neighbor.", verdict: 'myth', text: "It's a different kind of school with its own strengths, especially in health. Plenty of students pick it on purpose." },
        { said: "Everyone is a nursing major.", verdict: 'half', text: 'Nursing and health majors are a big part of campus. There are also lots of business, psych, education and science students.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Small campus, mostly commuters, a car helps',
      myths: [
        { title: 'Worcester is a rough city.', text: "That reputation is outdated. Worcester has grown a lot, with a busy downtown, a minor league ballpark and lots of college students." },
        { title: 'A state school means big classes.', text: 'Classes are mostly small. Professors usually know your name.' }
      ],
      know: [
        { title: 'A car helps.', text: 'Campus is in a residential neighborhood away from downtown. Buses exist, but a car or friends with one makes life easier.' },
        { title: 'Greek life is not really a thing.', text: 'If you want a frat and sorority scene, look elsewhere. Clubs and teams fill that role here.' },
        { title: 'Use the consortium.', text: 'Cross-registering at other Worcester colleges can get you classes your major does not offer.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want an affordable health degree. Rough if you want a party campus.',
      love: ['You want nursing or a health science career', 'You want to save money and maybe live at home', 'You like a small, low drama campus'],
      struggle: ['You want a big party or Greek scene', 'You want a busy campus on weekends', "You don't have a car and want to explore the city"]
    },

    people: {
      preview: 'Price and health programs win. Quiet campus life is the complaint.',
      plus: ['Affordable for Massachusetts students', 'Strong nursing and health programs', 'Small classes and helpful professors'],
      minus: ['Campus is quiet with so many commuters', 'Not much within walking distance', 'Little school spirit']
    }
  }
});
