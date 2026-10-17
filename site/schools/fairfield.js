registerSchool({
  id: 'fairfield',
  name: 'Fairfield',
  nameSub: 'University',
  state: 'Connecticut',
  location: 'Fairfield, CT · Near the beach',
  asOf: '2026',

  colors: {
    name: 'Stags · Red and white',
    swatches: ['#C8102E', '#FFFFFF'],
    band: '#F3F3F3',
    onBand: '#8E0C1C',
    onBandMuted: '#6B4A4F',
    stripe: '#C8102E',
    accent: '#B00E26',
    accentOnDark: '#FF7A8A'
  },

  vibe: "A Jesuit school a few minutes from the beach and about an hour from New York. It's polished, social and a bit preppy, and a lot of people come from New York, New Jersey and Connecticut.",
  flags: ['Beach town', 'Jesuit', 'Preppy reputation', 'Selective'],
  facts: [
    { label: 'Setting', value: 'Suburban' },
    { label: 'Undergrads', value: '~5,400' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Metro-North and Amtrak nearby; New York is on the line", "points": ["Metro-North and Amtrak serve the area, so New York is reachable by train.", "Airports nearby include Bridgeport, Westchester, and the New York airports.", "A car helps off campus. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly residential; lots of students live near the beach after first year.", "housing": ["Most undergrads live on campus, especially early on.", "Many upperclassmen move to off-campus houses near the beach.", "Campus housing is a mix of dorms and apartment-style options."], "food": ["There is a main dining hall plus several other spots on campus.", "Residents typically need a meal plan.", "The town has plenty of restaurants, and New York City is within reach by train."]},
    vibe: {
      preview: 'Social, polished, close to the beach, Jesuit roots',
      meters: {
        party:    { value: 7, note: 'Beach houses and off-campus parties' },
        campus:   { value: 8, note: 'Clean, pretty and close to the water' },
        spirit:   { value: 5, note: 'Basketball games draw a crowd' },
        pressure: { value: 6, note: 'Solid work, strong business school' },
        career:   { value: 7, note: 'Business and nursing pipelines' },
        greek:    { value: 0, note: 'No national fraternities or sororities' },
        religion: { value: 4, note: 'Jesuit, but most students are not very religious about it' }
      }
    },

    social: {
      preview: 'Beach houses, off-campus parties and a lot of weekend travel',
      paragraphs: [
        "A lot of the social life is off-campus. Many students rent houses near the beach, especially as juniors and seniors, and that's where parties happen.",
        "The school doesn't have national fraternities or sororities, so social groups form around dorms, clubs and teams. Some students say it feels close. Others say it can be cliquey.",
        "New York is about an hour away by train, so lots of people go home or into the city on weekends."
      ]
    },

    gettingIn: {
      preview: 'Selective. Tests are optional.',
      points: [
        { title: "It's hard to get into.", text: 'It turns away most applicants. Strong grades and a good course load matter.' },
        { title: 'Tests are optional.', text: 'Check the current policy before you apply.' },
        { title: 'Apply early if it is your top pick.', text: 'It has early rounds that can help your chances.' }
      ]
    },

    who: {
      preview: 'Northeast kids, business and nursing majors, lots of preppy style',
      paragraphs: [
        "A lot of students come from New York, New Jersey, Connecticut and Massachusetts. Many are business, nursing, communications and STEM students.",
        "It fits students who want a classic college experience with a beach nearby. Community service is a real part of the culture, thanks to the Jesuit mission."
      ]
    },

    knownFor: {
      preview: 'The beach, business school, and Jesuit values',
      points: [
        { title: 'Beach location', text: 'The beach is a short ride away, and it shapes the social scene in warm months.' },
        { title: 'Dolan School of Business', text: 'Business is a big draw, and many students go into finance and accounting.' },
        { title: 'Jesuit mission', text: 'Service and social justice are a big theme, and there are lots of volunteer options.' },
        { title: 'Basketball', text: 'Stags basketball is the main athletics event on campus.' }
      ]
    },

    stereotypes: {
      preview: '"Preppy" is true. "Rich kids" is half true.',
      items: [
        { said: "It's preppy.", verdict: 'true', text: "You'll see a lot of quarter-zips, Patagonia and matching sets. Not everyone, but enough that it's the first thing people say." },
        { said: "Everyone is rich.", verdict: 'half', text: "Many families are well off, and the school has a reputation for it. There are plenty of students on aid, but they're not the loudest voices." },
        { said: "It's just a party school.", verdict: 'half', text: "Parties are a part of it, especially near the beach. But classes are real, and the business school is strong." },
        { said: "It's very religious.", verdict: 'myth', text: "It's Jesuit, so there's a chapel and required classes in theology and philosophy. Most students aren't very religious." }
      ]
    },

    mythsAndKnow: {
      preview: 'Beach housing is pricey. Tests are optional.',
      myths: [
        { title: 'It is right on the beach.', text: 'It is close, a short ride away, but not on the sand. You usually need a car or a bike.' },
        { title: 'It is easy to get in.', text: 'It used to be easier. Now it turns away most applicants.' }
      ],
      know: [
        { title: 'Core classes are required.', text: 'There is a set of core classes including philosophy and religious studies.' },
        { title: 'Off-campus housing is common.', text: 'Many upperclassmen live in houses near the beach, and prices are high.' },
        { title: 'A car helps.', text: 'The train station is close, but a car makes the area easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a social, polished school near NYC. Rough if you want something edgy.',
      love: ['You want beach and campus together', 'You like business or nursing', 'You want a close-knit student body', 'You want an hour-long trip to NYC'],
      struggle: ['You want a very diverse student body', 'You want a big city around you', 'You want a quirky, alt crowd']
    },

    people: {
      preview: 'Location and community win. The bubble and cost are the complaints.',
      plus: ['Beautiful location', 'Strong business and nursing programs', 'Service and community feel'],
      minus: ['Expensive, and the area is pricey', 'The student body can feel similar', 'Core requirements take space in your schedule']
    }
  }
});
