registerSchool({
  id: 'amherst-college',
  name: 'Amherst',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Amherst, MA · Pioneer Valley college town',
  asOf: '2026',

  colors: {
    name: 'Mammoths · Purple and white',
    swatches: ['#470A77', '#FFFFFF'],
    band: '#470A77',
    onBand: '#FFFFFF',
    onBandMuted: '#D4C2EA',
    stripe: '#B9A3DB',
    accent: '#470A77',
    accentOnDark: '#C2A8F0'
  },

  vibe: "A small, very academic college where you pick all your own classes. It sits in a cozy college town right next to UMass, so you get a tiny school with a big school's stuff down the road.",
  flags: ['No required classes', 'Tiny classes', 'Five Colleges', 'Not UMass'],
  facts: [
    { label: 'Setting', value: 'College town' },
    { label: 'Undergrads', value: '~1,900' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'D-III NESCAC' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Nearly everyone lives on campus all four years; food is good for a small school", "housing": ["Students almost all live on campus.", "Rooms are mostly singles and doubles in older and newer halls.", "The campus is small and tight, so you'll know people fast."], "food": ["There is one main dining hall, and students generally like it.", "Meal plans are standard for residents.", "Downtown Amherst is a short walk for extra food options."]},
    vibe: {
      preview: 'Small, smart, intense, and you build your own schedule',
      meters: {
        party:    { value: 4, note: 'Small on-campus parties, UMass is the big scene' },
        campus:   { value: 8, note: 'Hilltop campus with big views of the hills' },
        spirit:   { value: 5, note: 'Peaks for the Williams game' },
        pressure: { value: 8, note: 'Hard classes, everyone was a top student' },
        career:   { value: 8, note: 'Strong in grad school, finance and law' },
        greek:    { value: 0, note: 'Banned since the 1980s' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Small and on campus, with UMass and Northampton for more',
      paragraphs: [
        "Social life is small-scale. Most weekends are dorm parties, team gatherings, club events and hanging out with friends. Sports teams are a big part of the scene, and people who aren't on a team sometimes say it can feel split.",
        "Everyone eats in one dining hall, Valentine, which people call Val. It means you see basically everyone every day. That's great for making friends and a little much when you're avoiding someone.",
        "When campus feels small, you have options. The free buses connect you to UMass, Smith and Mount Holyoke, and Northampton is a short ride for food, shows and coffee shops."
      ]
    },

    gettingIn: {
      preview: 'Very hard to get into. Most strong applicants get turned down.',
      points: [
        { title: "It's one of the hardest schools to get into.", text: "Amherst is a top-ranked liberal arts college. It turns away most applicants, including many with perfect grades." },
        { title: 'Tests have been optional.', text: "It has let students apply without SAT or ACT scores. Policies at top schools keep changing, so check before you apply." },
        { title: 'No legacy boost.', text: "Amherst stopped giving an admissions edge to children of alumni in 2021. Your parents' school doesn't matter here." },
        { title: 'The aid is strong.', text: "Amherst meets full need with grants instead of loans, for US and international students. Many families pay far less than the sticker price." }
      ]
    },

    who: {
      preview: 'Curious, driven people who like to argue about ideas',
      paragraphs: [
        "Students come from all over the country and the world, and the school has worked hard to bring in students from every income level. People are smart, opinionated and like to talk about big ideas, in class and at dinner.",
        "Economics, political science, math, English and the sciences are popular. There are a lot of athletes too, so you'll find both the late-night library crowd and the team crowd, and plenty of people who are both."
      ]
    },

    knownFor: {
      preview: 'The open curriculum, the Five Colleges, and the Williams rivalry',
      points: [
        { title: 'Open curriculum', text: "Other than one first-year seminar, there are no required classes outside your major. You build your own schedule, which is great if you know what you like." },
        { title: 'Five College Consortium', text: 'You can take classes at the other Five Colleges, including UMass, Smith and Mount Holyoke, borrow from their libraries and join some of their clubs.' },
        { title: 'Williams rivalry', text: 'Amherst and Williams have one of the oldest college rivalries in the country. The football game is the biggest date on the sports calendar.' },
        { title: 'The Mammoths', text: "The old mascot, Lord Jeff, was dropped in 2016. Students picked the Mammoths, after the mammoth skeleton in the campus natural history museum." }
      ]
    },

    stereotypes: {
      preview: '"Amherst is part of UMass" is a myth. "Super intense" is true.',
      items: [
        { said: "It's basically part of UMass.", verdict: 'myth', text: "Totally separate schools. UMass has over 20,000 undergrads. Amherst College has under 2,000. They just share a town and a bus system." },
        { said: "It's full of rich kids.", verdict: 'half', text: "There is wealth here. But Amherst gives big grant aid and has more students from lower-income families than a lot of similar schools." },
        { said: 'Everyone is super intense.', verdict: 'true', text: "Most people work hard and care a lot about grades and ideas. It's not cutthroat, but it's not laid-back either." },
        { said: "There's no social life.", verdict: 'half', text: "The scene is small and can feel repetitive. But there are parties and events, and UMass and Northampton are right there for more." }
      ]
    },

    mythsAndKnow: {
      preview: "No required classes, one dining hall, and UMass is down the street",
      myths: [
        { title: 'Open curriculum means easy.', text: "No. You skip requirements, not hard work. Classes are small and demanding, and you have to plan your own path." },
        { title: "You're stuck in a tiny bubble.", text: "Campus is small, but the Five Colleges give you thousands more classes, clubs and people within a free bus ride." }
      ],
      know: [
        { title: 'You need to plan your own classes.', text: "No one forces you to try different subjects. Talk to your advisor so you don't miss stuff you'd like." },
        { title: 'Everyone eats at Val.', text: "There's one main dining hall, so you'll see the same faces every day." },
        { title: 'Winters are cold.', text: "It's western Massachusetts. Expect snow and a lot of gray from December to March." },
        { title: "Boston isn't close.", text: "It's about two hours east. Most weekends you'll stay in the Valley." }
      ]
    },

    fit: {
      preview: 'Great if you want freedom and small classes. Rough if you want a big scene.',
      love: ['You want to choose all your own classes', 'You like small classes and close professors', 'You want a small school with big-school options nearby', 'You love debating ideas'],
      struggle: ['You want a big party scene on campus', 'You want lots of structure and requirements', 'You need a city nearby', 'You get tired of seeing the same people']
    },

    people: {
      preview: 'Freedom and professors are the wins. The small scene is the complaint.',
      plus: ['The open curriculum lets you study what you love', 'Professors really know you', 'Five College access makes it feel bigger'],
      minus: ['Social life can feel small and repetitive', 'The athlete and non-athlete scenes can split', 'Workload and pressure are heavy']
    }
  }
});
