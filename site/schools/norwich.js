registerSchool({
  id: 'norwich',
  name: 'Norwich',
  nameSub: 'University',
  state: 'Vermont',
  location: 'Northfield, VT · Small town in the hills',
  asOf: '2026',

  colors: {
    name: 'Cadets · Maroon and gold',
    swatches: ['#892432', '#CBA761'],
    band: '#CBA761',
    onBand: '#4A0F1C',
    onBandMuted: '#5A1A28',
    stripe: '#892432',
    accent: '#892432',
    accentOnDark: '#CBA761'
  },

  vibe: "A small, rural military college where about half the school wears a uniform and the rest are regular students. The structure and the tight bonds are the whole point.",
  flags: ['Military school', 'Rural campus', 'Civilians welcome', 'Cold winters'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~2,600' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Structured, disciplined, close-knit, very small town',
      meters: {
        party:    { value: 3, note: 'Cadets have strict rules, civilians have more room' },
        campus:   { value: 7, note: 'Hilltop campus with mountain views' },
        spirit:   { value: 5, note: 'Hockey nights draw people' },
        pressure: { value: 6, note: 'Cadet life adds a lot on top of classes' },
        career:   { value: 7, note: 'Military and engineering paths are clear' },
        greek:    { value: 0, note: 'Not part of campus life' },
        religion: { value: 2, note: 'Secular school, chapel and groups exist' }
      }
    },

    social: {
      preview: 'Cadets live in a tight unit. Civilians have a more normal college life.',
      paragraphs: [
        'If you join the Corps of Cadets, you wear a uniform, follow a schedule and live with a group that becomes your whole circle. First-year cadets have the hardest time. People say the bonds you make are the best part.',
        'Civilian students take the same classes and live a more regular college life, with fewer rules. The two groups mix in class, on teams and in clubs, but their days look pretty different.',
        "Northfield is tiny. There's not much to do in town, so weekends mean campus events, sports, hiking and road trips to Montpelier or Burlington. A car helps."
      ]
    },

    gettingIn: {
      preview: 'Not super hard to get in. Cadet life is the real test.',
      points: [
        { title: "It's not hyper-competitive.", text: 'Most applicants are admitted. Solid grades usually get you in.' },
        { title: 'Cadet or civilian is your choice.', text: 'You pick at the start. Cadets also go through a tougher first year, so be sure you want it.' },
        { title: 'Tests may be optional.', text: 'Check the current policy before you apply.' }
      ]
    },

    who: {
      preview: 'Future officers, engineers, nurses and kids who like structure',
      paragraphs: [
        'People who like discipline, teamwork and a clear path. Many are headed to the military, but a lot of cadets never commission. Popular programs include engineering, nursing, architecture, cybersecurity and criminal justice.',
        "Students come from all over New England and beyond. It fits people who want to be pushed and don't mind a small place."
      ]
    },

    knownFor: {
      preview: 'The Corps of Cadets, ROTC history and hockey',
      points: [
        { title: 'Oldest private military college', text: 'Founded in 1819. It calls itself the birthplace of ROTC, and it is one of the six senior military colleges in the country.' },
        { title: 'Cadets and civilians', text: 'Both groups study side by side, but only cadets live under military rules.' },
        { title: 'Hockey', text: 'Home hockey games are the big social event of winter.' }
      ]
    },

    stereotypes: {
      preview: '"Strict" is true for cadets. "Everyone is military" is a myth.',
      items: [
        { said: "It's boot camp for four years.", verdict: 'half', text: 'First-year cadets have a rough, strict start. After that, life loosens up. Civilians do not live this way.' },
        { said: 'Everyone goes into the military.', verdict: 'myth', text: 'Many cadets do not commission, and civilians are a big part of the school.' },
        { said: "It's in the middle of nowhere.", verdict: 'true', text: "Northfield is small and quiet. You'll make your own fun." },
        { said: "It's only for engineers.", verdict: 'half', text: "Engineering is big, but there are many majors, including nursing and business." }
      ]
    },

    mythsAndKnow: {
      preview: 'Cadet and civilian are different lives. Winters are long.',
      myths: [
        { title: 'You have to serve after graduating.', text: 'Joining the Corps does not automatically mean military service. That depends on a commission or scholarship you take.' },
        { title: "It's all men.", text: 'The campus is co-ed and has been for decades.' }
      ],
      know: [
        { title: 'Choose cadet life on purpose.', text: "It's a big time commitment. Talk to current cadets before you decide." },
        { title: 'Bring winter gear.', text: 'Vermont winters are real and the campus sits on a hill.' },
        { title: 'A car helps.', text: 'The town is small and options are limited without a ride.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want structure. Rough if you want total freedom.',
      love: ['You want discipline and a clear path', 'You like tight groups and teamwork', 'You like the outdoors and small towns'],
      struggle: ['You want a big party scene', 'You hate being told when to wake up', 'You want a city nearby']
    },

    people: {
      preview: 'Bonds and leadership training win. Rules and isolation are the complaints.',
      plus: ['Strong friendships and a real sense of team', 'Leadership training that employers notice', 'Beautiful, hilly setting'],
      minus: ['Cadet rules can feel heavy', 'Small town with little to do', 'Social life is quieter than most colleges']
    }
  }
});
