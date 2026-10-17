registerSchool({
  id: 'plymouth-state',
  name: 'Plymouth',
  nameSub: 'State University',
  state: 'New Hampshire',
  location: 'Plymouth, NH · Edge of the White Mountains',
  asOf: '2026',

  colors: {
    name: 'Panthers · Green and white',
    swatches: ['#135841', '#A0B8B0', '#FFFFFF'],
    band: '#135841',
    onBand: '#FFFFFF',
    onBandMuted: '#C5D8D0',
    stripe: '#A0B8B0',
    accent: '#135841',
    accentOnDark: '#7FCBA8'
  },

  vibe: "A small mountain-town school where skiing, hiking and being outside are a big part of life. It's laid back, easy to get into, and best for people who'd rather be on a trail than in a city.",
  flags: ['Ski Day off', 'Mountain town', 'Easy to get in', 'Need a car'],
  facts: [
    { label: 'Setting', value: 'Rural town' },
    { label: 'Undergrads', value: '~3,500' },
    { label: 'Getting in', value: 'Easy' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Tiny' }
  ],

  sections: {
    "getThere": {"preview": "Bus from Boston; a car makes life easier", "points": ["Concord Coach buses serve Plymouth, so check their schedule before you plan trips.", "Manchester-Boston Regional Airport and Logan are the main airport options.", "A car helps in a small town. Check the school's rules on first-year cars."]},
    "living": {"preview": "Residential small-town campus, most first-years live in dorms", "housing": ["First-years usually live on campus.", "Many students move off campus in town once they are older.", "Housing is mostly traditional dorms plus some apartment-style options."], "food": ["There is a main dining hall and a few smaller places.", "Students describe it as decent, not amazing.", "The town is small, so off-campus options are limited."]},
    vibe: {
      preview: 'Outdoorsy, chill and small, with real winters',
      meters: {
        party:    { value: 6, note: 'Off-campus parties, louder than the size suggests' },
        campus:   { value: 7, note: 'Compact campus with mountains all around' },
        spirit:   { value: 4, note: 'Small crowds, hockey and football draw some' },
        pressure: { value: 3, note: 'Relaxed, depends on the major' },
        career:   { value: 5, note: 'Strong in teaching, meteorology and a few others' },
        greek:    { value: 1, note: 'A handful of chapters, most people skip it' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and friendly. Outdoor stuff and house parties fill the weekends.',
      paragraphs: [
        "It's a small school in a small town, so you see the same faces everywhere. Friend groups come from your dorm, your team and the clubs. People describe it as friendly and low key.",
        "Weekends split two ways. Some people party at off-campus houses, and Plymouth does have a party reputation. Others spend the day skiing, hiking or climbing. A lot of people do both.",
        "The town is tiny. There's a main street with a few restaurants and coffee spots, and that's about it. Boston is around two hours south, so most fun happens on campus or in the mountains."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. Decent grades in a normal high school schedule will usually do it.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some programs ask for more.', text: 'A few programs, like nursing, can have extra steps or requirements. Look up your major before you apply.' }
      ]
    },

    who: {
      preview: 'New England kids who like the outdoors and want a small school',
      paragraphs: [
        "Mostly students from New Hampshire and Massachusetts, plus the rest of New England. A lot of skiers, snowboarders, hikers and athletes. It's a casual crowd. Flannel and boots are basically the uniform in winter.",
        "Popular areas include education, business, criminal justice, health and exercise science, and meteorology. People tend to be easygoing more than competitive."
      ]
    },

    knownFor: {
      preview: 'Skiing, meteorology, the cluster model, and a party rep',
      points: [
        { title: 'Skiing and the outdoors', text: "Several ski areas are within about half an hour, including Loon, Waterville Valley and Cannon. Every February classes are cancelled for Ski Day, with free lift tickets and buses to the mountain." },
        { title: 'Meteorology', text: "It's one of the few meteorology programs in New England, and students help run a weather center that lots of people check for forecasts." },
        { title: 'Cluster learning', text: 'The school organizes classes around a few big themes called clusters. Expect group projects that mix majors and work on real problems, starting in your first year.' },
        { title: 'Teaching', text: 'Plymouth started as a school for training teachers, and education is still one of its best-known programs.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone skis" is half true. "Just a party school" is half true too.',
      items: [
        { said: 'Everyone skis or snowboards.', verdict: 'half', text: "A lot of people do, and the school makes it easy with cheap season passes. But plenty of students never go, and that's fine." },
        { said: "It's a party school.", verdict: 'half', text: "There's a real off-campus party scene, and it has that reputation. It's also easy to have a quiet weekend outside if that's more your thing." },
        { said: "It's in the middle of nowhere.", verdict: 'true', text: "Plymouth is a small town. Beautiful, but if you want city stuff, you'll be driving a couple hours." },
        { said: 'Everyone is from New Hampshire.', verdict: 'half', text: "A lot of students are, but there's a big group from Massachusetts and the rest of New England too." }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring warm stuff and ideally a car. Clusters mean lots of group work.',
      myths: [
        { title: 'Small school means nothing to do.', text: "There are clubs, Division III sports, a ski club and an outdoor center that runs trips. It's quiet in town, not on campus." },
        { title: "You can't ski unless you're already good.", text: 'The outdoor center lends gear and runs programs for beginners. Lots of people learn here.' }
      ],
      know: [
        { title: 'Winters are long.', text: 'Expect snow from late fall into spring and real cold. Good boots matter more than you think.' },
        { title: 'A car helps a lot.', text: 'The mountains are close, but getting there, or getting home, is much easier if you drive.' },
        { title: 'Expect group projects.', text: "The cluster model means a lot of team-based work with people from other majors. If you hate group projects, know that going in." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love the outdoors. Rough if you want a city.',
      love: ['You ski, snowboard or hike and want mountains close by', 'You want a small school where people know you', 'You want to be a teacher or study weather', 'You like hands-on projects more than lectures'],
      struggle: ['You want a city or a lot of nightlife options', 'You hate cold and snow', 'You want big-time college sports']
    },

    people: {
      preview: 'Mountains and friendly people are the wins. Isolation is the complaint.',
      plus: ['The location is beautiful and great for the outdoors', 'Small classes and professors who know you', 'Ski Day and cheap ski passes'],
      minus: ['The town is small and gets old', 'Hard to get around without a car', 'Weekends can feel samey after a while']
    }
  }
});
