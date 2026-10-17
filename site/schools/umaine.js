registerSchool({
  id: 'umaine',
  name: 'UMaine',
  nameSub: 'University of Maine',
  state: 'Maine',
  location: 'Orono, ME · Small town next to Bangor',
  asOf: '2026',

  colors: {
    name: 'Black Bears · Dark blue and light blue',
    swatches: ['#082E58', '#79BDE8', '#FFFFFF'],
    band: '#79BDE8',
    onBand: '#082E58',
    onBandMuted: '#1D426B',
    stripe: '#082E58',
    accent: '#082E58',
    accentOnDark: '#79BDE8'
  },

  vibe: "Maine's big state school, out on its own in a small town. Hockey nights are huge, winters are long, and it's one of the cheaper flagships in New England if you're from out of state.",
  flags: ['Hockey town', 'Very cold', 'Far from cities', 'Good merit aid'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~9,500' },
    { label: 'Getting in', value: 'Easy' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Some' }
  ],

  sections: {
    "living": {"preview": "First-years live on campus; food is solid for a big state school.", "housing": ["Most first-years live on campus in traditional dorms.", "Many upperclassmen move to apartments in Orono and nearby towns.", "Orono is small, so off-campus choices are limited but affordable."], "food": ["There are a few dining halls, and students usually say the food is pretty good.", "Residents typically need a meal plan.", "Downtown Orono has a handful of casual places, nothing huge."]},
    vibe: {
      preview: 'Outdoorsy, social and cold, with hockey at the center',
      meters: {
        party:    { value: 6, note: 'Easy to find, mostly off campus' },
        campus:   { value: 7, note: 'Big classic campus, woods and a river nearby' },
        spirit:   { value: 7, note: 'Hockey at the Alfond is the big night' },
        pressure: { value: 4, note: 'Engineering is tough, most majors are relaxed' },
        career:   { value: 6, note: 'Engineering and forestry have strong job links' },
        greek:    { value: 4, note: 'Present and recruits early, not everything' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Campus is the social scene. Hockey games are the highlight.',
      paragraphs: [
        "Since Orono is a small town, campus is where everything happens. Dorms are where most people meet friends at first, then clubs, teams and Greek life. There are a couple hundred student groups.",
        "Hockey is the big event. The student section at the Alfond on a Friday night in winter is loud and packed, and people plan their weekends around it. There's also a party scene that's easy to find if you want it.",
        "Off campus, options are limited. Bangor is about 10 minutes away for stores and restaurants, and Acadia National Park is about an hour. Portland is about two hours and Boston is about four."
      ]
    },

    gettingIn: {
      preview: 'Almost everyone who applies gets in. The money is the real story.',
      points: [
        { title: "It's easy to get into.", text: 'Nearly all applicants are admitted. Some majors, like nursing and engineering, can be pickier.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Out-of-state deals.', text: "The Flagship Match program lets students from several nearby states pay about what their own state's flagship charges. Which states count and the amounts change, so check the current rules." },
        { title: 'Honors College.', text: 'There is an Honors College for students who want smaller classes and a thesis. Ask admissions how to get in.' }
      ]
    },

    who: {
      preview: 'Mainers, plus lots of New Englanders chasing the price',
      paragraphs: [
        "A lot of students are from Maine, often from small towns. There's also a big and growing group from Massachusetts, New Hampshire, Connecticut and nearby states, many of them drawn by the out-of-state discounts.",
        "Engineering, nursing, business, biology, forestry and marine science are big. It's an outdoorsy, practical crowd. People hike, fish, ski and don't mind the cold, or at least learn not to."
      ]
    },

    knownFor: {
      preview: 'Hockey, engineering, forestry, ocean science and the cold',
      points: [
        { title: 'Hockey', text: 'UMaine has won two men\'s national titles, in 1993 and 1999, and the team has been good again lately. The Alfond is one of the loudest rinks around.' },
        { title: 'Engineering', text: "Engineering is one of the biggest draws, and the school has a well-known research center for composites and big 3D printing." },
        { title: 'Forestry and marine science', text: "It's one of the oldest forestry schools in the country, and it has a marine research center on the Maine coast." },
        { title: 'Price for out-of-staters', text: "With merit aid and the Flagship Match, a lot of New England students pay less here than at their own state school." }
      ]
    },

    stereotypes: {
      preview: '"Freezing and in the middle of nowhere" is true. "Backup school" is half.',
      items: [
        { said: "It's freezing and it never ends.", verdict: 'true', text: "Winters are long, dark and very cold. Snow can stick around into April. Bring real gear." },
        { said: "It's in the middle of nowhere.", verdict: 'half', text: "Orono is small and far from big cities. But Bangor is right there, and the outdoors is a big plus if you like it." },
        { said: "It's just a backup school.", verdict: 'half', text: "Plenty of people apply as a safety. A lot of them end up picking it for the price, hockey or a specific program." },
        { said: 'Everyone is from Maine.', verdict: 'outdated', text: "A lot of students are, but the out-of-state share has grown a lot. You'll meet plenty of people from around New England." }
      ]
    },

    mythsAndKnow: {
      preview: 'Merit aid is big. Bring a warm coat and maybe a car.',
      myths: [
        { title: "Out-of-state means you can't afford it.", text: "UMaine gives a lot of merit aid to out-of-state students. Run the numbers before you rule it out." },
        { title: "There's nothing to do.", text: "Campus is busy, there's hockey all winter, and the outdoors is right there. It's the town that's quiet, not the school." }
      ],
      know: [
        { title: 'Getting home takes a while.', text: "If you're from southern New England, it's a long drive or a bus ride. Flying home means going through Bangor's small airport." },
        { title: 'A car is useful.', text: 'Local buses connect Orono and Bangor, but trips to the coast, mountains or home are much easier with a car.' },
        { title: 'Get hockey tickets early.', text: 'Big games fill up fast, and students plan their weekends around them.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love the outdoors and hockey. Rough if you need a city.',
      love: ['You want a big school with real school spirit', 'You love snow, woods and the outdoors', 'You want engineering, forestry or marine science', "You're from out of state and want a good deal"],
      struggle: ['You hate the cold', 'You want a city close by', 'You want to get home easily on weekends']
    },

    people: {
      preview: 'Hockey, nature and price are the wins. Cold and distance are the complaints.',
      plus: ['Hockey nights at the Alfond', 'Great value, especially with merit aid', 'Outdoors and Acadia close by'],
      minus: ['Winters are long and brutal', 'Orono has limited food and nightlife', 'Far from home for most out-of-staters']
    }
  }
});
