registerSchool({
  id: 'hult',
  name: 'Hult',
  nameSub: 'Business School',
  title: 'Hult Boston',
  state: 'Massachusetts',
  location: 'Boston, MA · Business school',
  asOf: '2026',

  colors: {
    name: 'Hult · Navy and blue',
    swatches: ['#001529', '#1F93FF'],
    band: '#001529',
    onBand: '#FFFFFF',
    onBandMuted: '#B9C4D0',
    stripe: '#1F93FF',
    accent: '#006BD6',
    accentOnDark: '#1F93FF'
  },

  vibe: "A small business school where the student body is mostly international and everything points toward global careers. It's more like a business program than a typical college.",
  flags: ['Business only', 'Very international', 'Small and pricey', 'No sports scene'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: 'Small' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Boston area; the T and buses cover the city", "points": ["The T and city buses cover the Boston area. Check the campus address for the closest stop.", "Boston Logan is the nearest major airport.", "You do not need a car in Boston."]},
    "living": {"preview": "Small international business school in Boston; housing is mostly on your own.", "housing": ["Hult is a small business school with limited campus housing.", "Most students find their own apartments in or near Boston.", "Boston rent is high, so budget carefully."], "food": ["There is not a traditional campus dining hall like at bigger colleges.", "Most students buy food themselves or eat out.", "Boston has a lot of restaurants, from cheap to expensive."]},
    vibe: {
      preview: 'Business-only, international, small, light on campus traditions',
      meters: {
        party:    { value: 3, note: 'Social events, but no classic campus party scene' },
        campus:   { value: 1, note: 'More of a city school than a campus' },
        spirit:   { value: 1, note: 'No teams to rally around' },
        pressure: { value: 5, note: 'Group projects and presentations all the time' },
        career:   { value: 8, note: 'The whole point of the school' },
        greek:    { value: 0, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friend groups from all over the world, plus the city',
      paragraphs: [
        "It's a small school, so you get to know people fast. A large share of students come from other countries, which means your friends and teammates can come from many different places.",
        "Don't expect football games or a quad. Social life is clubs, student events and getting out into the city.",
        "Hult undergrad is built around moving between campuses in different countries. That can be exciting, but it means your friend group changes as people rotate."
      ]
    },

    gettingIn: {
      preview: 'Fairly open admission. The main hurdles are cost and English.',
      points: [
        { title: "It's not hard to get in.", text: 'Most applicants who meet the requirements are admitted. This is not a selective-school game.' },
        { title: 'English skills matter.', text: 'Classes are taught in English, and international applicants usually need to show proof.' },
        { title: 'Check the details.', text: 'Requirements and campus options change, so confirm them on Hult\'s site for the year you apply.' }
      ]
    },

    who: {
      preview: 'Future business people who want to work abroad',
      paragraphs: [
        'Students who know they want business and want a global résumé. Many are from outside the US, so you may be one of the few Americans in a class.',
        "It fits people who like group work, travel and meeting a lot of new people. It's not a good fit if you want to explore different subjects, since the degrees are business."
      ]
    },

    knownFor: {
      preview: 'International classes, business focus, and moving between campuses',
      points: [
        { title: 'Global campuses', text: 'Hult has campuses in several countries, and undergrad students can spend time at more than one.' },
        { title: 'Business only', text: 'It is a business school. Your major will be some form of business.' },
        { title: 'Group projects', text: 'Classes are heavy on teamwork and presentations, usually with people from several countries.' }
      ]
    },

    stereotypes: {
      preview: '"Very international" is true. "Not a real college" is half true.',
      items: [
        { said: "Everyone is international.", verdict: 'true', text: 'The student body comes from all over the world. That is the draw for a lot of students.' },
        { said: "It's not a real college.", verdict: 'half', text: "It's accredited and gives real degrees. But there's no traditional campus life, so it feels different from most colleges." },
        { said: "It's all group projects.", verdict: 'true', text: "Teamwork is a huge part of the classes. If you hate group work, you'll notice." },
        { said: "It's super expensive for what you get.", verdict: 'half', text: "Tuition is high. Whether it's worth it depends on if you'll use the global setup." }
      ]
    },

    mythsAndKnow: {
      preview: 'Business only, high price, and campuses can change',
      myths: [
        { title: "It's a typical college.", text: "There's no football, no Greek life and no big campus. It's a business school first." },
        { title: 'It guarantees a job.', text: 'The school pushes careers, but you still have to apply, interview and network like anyone else.' }
      ],
      know: [
        { title: 'Check the campus plan.', text: 'Ask how much time you will spend in Boston and how much at other campuses.' },
        { title: "You don't need a car.", text: 'Boston has the T and plenty of walkable neighborhoods.' },
        { title: 'Cost is high.', text: 'Tuition is on the high side, plus housing in Boston. Ask about scholarships.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want global business. Rough if you want a classic campus.',
      love: ['You want a business degree with an international feel', 'You like group work and meeting new people', 'You are open to living in different countries'],
      struggle: ['You want big sports and school spirit', 'You are not sure about business', 'You want a traditional campus']
    },

    people: {
      preview: 'International mix wins. Price and lack of campus life are the complaints.',
      plus: ['Classmates from all over the world', 'Career-focused teaching', 'Small classes'],
      minus: ['High tuition', 'No classic campus life', 'Friend group can change with campus moves']
    }
  }
});
