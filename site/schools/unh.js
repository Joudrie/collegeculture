registerSchool({
  id: 'unh',
  name: 'UNH',
  nameSub: 'New Hampshire',
  state: 'New Hampshire',
  location: 'Durham, NH · Small town near the Seacoast',
  asOf: '2026',

  colors: {
    name: 'Wildcats · Blue and white',
    swatches: ['#041E42', '#FFFFFF', '#BBBCBC'],
    band: '#041E42',
    onBand: '#FFFFFF',
    onBandMuted: '#B4C2D6',
    stripe: '#BBBCBC',
    accent: '#1F4E9A',
    accentOnDark: '#8FB4E8'
  },

  vibe: "A classic New England state school in a tiny college town. Big weekends, big hockey nights, and the ocean and mountains close by when you need a break.",
  flags: ['College town', 'Party rep', 'Hockey school', 'Cold winters'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~11,000' },
    { label: 'Getting in', value: 'Not too hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Medium' }
  ],

  sections: {
    "getThere": {"preview": "Amtrak Downeaster stops in Durham; Logan is the big airport", "points": ["The Amtrak Downeaster train stops in Durham, so you can get to Boston without a car.", "Boston Logan is the main airport. Manchester is another option.", "Plenty of students manage without a car, but Durham is small. Check the school's rules on first-year cars."]},
    "living": {"preview": "Most first-years live on campus; food is big-school dining, mostly decent.", "housing": ["First-years usually live on campus in traditional dorms.", "Lots of upperclassmen move to off-campus houses and apartments in Durham or nearby towns.", "Durham is small, so off-campus housing can get crowded and pricey."], "food": ["There are several dining halls, and students usually call them pretty good for a state school.", "Residents typically need a meal plan, at least in the first year.", "Downtown Durham has a few casual spots, but options are limited."]},
    vibe: {
      preview: 'Social, outdoorsy, real party scene, hockey on Saturday',
      meters: {
        party:    { value: 7, note: 'Busy weekends, parties and Greek houses' },
        campus:   { value: 8, note: 'Pretty, traditional, the town is the campus' },
        spirit:   { value: 7, note: 'Hockey nights get loud' },
        pressure: { value: 4, note: 'Work hard if you want, nobody forces it' },
        career:   { value: 6, note: 'Solid, depends a lot on your major' },
        greek:    { value: 5, note: 'Noticeable, but most people are not in it' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Dorms, Greek houses and apartment parties. Durham is the whole scene.',
      paragraphs: [
        "Durham is small. Main Street has a handful of restaurants, bars and pizza places, and that's about it. So the social life lives on campus and in the houses and apartments around it.",
        "Weekends are busy. Freshman year it's dorms and parties at Greek and off-campus houses. The bars are strict about being 21, so underclassmen mostly don't go. Plenty of people skip the party scene and do clubs, the outdoors club or the gym instead.",
        "When you need a change of scenery, Portsmouth is a short ride away and the campus has its own Amtrak stop. The Downeaster runs to Boston and to Portland, Maine, so getting out without a car is doable."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. If your grades are solid, you have a good shot.' },
        { title: 'Tests are optional.', text: "UNH went test-optional in 2020 and most applicants don't send scores. Check the current policy before you apply." },
        { title: 'Your major can matter.', text: 'Some programs, like nursing, are harder to get into than the school overall. Look at the program you want, not just the school.' },
        { title: 'Out-of-state is common.', text: "A lot of students come from Massachusetts and the rest of the Northeast. You won't be the only one who isn't from New Hampshire." }
      ]
    },

    who: {
      preview: 'Northeast kids who want a classic, social state school',
      paragraphs: [
        "Mostly kids from New Hampshire, Massachusetts and the rest of the Northeast. Lots of people who like being outside, skiing, hiking or going to the beach. A good number of athletes and hockey fans.",
        "People tend to be friendly and pretty laid back. The crowd is social, and most students try to balance a fun weekend with getting their work done by Monday."
      ]
    },

    knownFor: {
      preview: 'The party rep, Wildcat hockey, and ocean and outdoor stuff',
      points: [
        { title: 'Wildcat hockey', text: "Games at the Whittemore Center are the big night out for a lot of students. It's the closest thing UNH has to a religion." },
        { title: 'A party rep', text: "UNH has been on party school lists before and students still talk about it. It's real, but it's not all there is." },
        { title: 'Ocean and outdoors', text: 'Marine science, ocean engineering and environmental programs are strong, and the coast and the White Mountains are close.' },
        { title: 'The Dairy Bar', text: "A small campus restaurant in the old train depot. It's a campus classic for ice cream and snacks." }
      ]
    },

    stereotypes: {
      preview: '"Party school" is half true. "Everyone is from Mass" is close.',
      items: [
        { said: "It's a party school.", verdict: 'half', text: "Weekends are busy and the reputation is earned. But there's real work during the week, and plenty of people barely touch the party scene." },
        { said: "Everyone's from Massachusetts.", verdict: 'half', text: "Not everyone, but a lot of people are. New Hampshire kids are still the biggest group." },
        { said: "It's in the middle of nowhere.", verdict: 'half', text: "Durham is tiny and quiet. But Portsmouth is close, the beach is close, and the train gets you to Boston." },
        { said: 'Everyone is outdoorsy.', verdict: 'half', text: "Lots of people ski, hike or go to the beach. You don't need to, but you'll be around it." }
      ]
    },

    mythsAndKnow: {
      preview: "In-state isn't cheap. Winters are long. The train helps a lot.",
      myths: [
        { title: 'State school means cheap.', text: "New Hampshire gives its public colleges less money than most states, so in-state tuition is high for a public school. Don't assume it's the cheap option." },
        { title: "It's only parties.", text: "The party rep is loud, but UNH is a research university with strong science, engineering and nursing programs." }
      ],
      know: [
        { title: 'Winters are long.', text: "It gets cold and snowy from November into March. Pack real boots and a real coat." },
        { title: 'Durham is small.', text: 'Main Street takes about five minutes to walk. If you want a city at your door, this is not it.' },
        { title: "You don't need a car.", text: 'Campus buses are free, and the Amtrak stop on campus goes to Boston and Portland.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a classic college town. Rough if you want a city.',
      love: ['You want a traditional campus in a real college town', 'You like being outside, skiing, hiking or the beach', 'You want a social school with big game nights', 'You want a big school that still feels manageable'],
      struggle: ['You want a city with lots to do off campus', "You hate cold, snowy winters", 'You want a quiet, low-key weekend scene']
    },

    people: {
      preview: 'Pretty campus and fun weekends. Cost and the small town are the complaints.',
      plus: ['The campus is pretty and easy to walk', 'Hockey games and weekends are a lot of fun', 'The coast and mountains are close'],
      minus: ['Expensive for a public school', 'Durham has very little going on', 'Winters drag on']
    }
  }
});
