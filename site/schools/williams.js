registerSchool({
  id: 'williams', nameStyle: "classic",
  name: 'Williams',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Williamstown, MA · Berkshire mountains',
  asOf: '2026',

  colors: {
    name: 'Ephs · Purple and gold',
    swatches: ['#492872', '#FCD205', '#FFFFFF'],
    band: '#FCD205',
    onBand: '#2E1A4F',
    onBandMuted: '#4A3266',
    stripe: '#492872',
    accent: '#492872',
    accentOnDark: '#B9A2E0'
  },

  vibe: "A tiny, very academic school in a small town surrounded by mountains. Classes are small and hard, people are outdoorsy and sporty, and since there's nothing else around, campus is your whole world.",
  flags: ['Middle of nowhere', 'Tiny classes', 'Very outdoorsy', 'Long, snowy winters'],
  facts: [
    { label: 'Setting', value: 'Rural town' },
    { label: 'Undergrads', value: '~2,100' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'D-III NESCAC' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Remote Berkshires town; plan on a car or a ride", "points": ["Williamstown is far from cities and has no train. Public transit is limited.", "Albany is the closest major airport. Hartford and Boston are farther.", "Having a car helps if you want to leave town. Check the school's rules on first-year cars."]},
    "traditions": {"preview": "Mountain Day, a surprise day off every fall", "items": ["Mountain Day is a surprise day off in the fall when classes are canceled and people head outside."]},
    "living": {"preview": "Nearly everyone lives on campus; food is good and the town is tiny.", "housing": ["Almost all students live on campus all four years.", "Rooms are assigned by a housing lottery after first year.", "Most dorms are fairly nice, but you live in a small isolated town."], "food": ["Students eat in a handful of dining halls, and people generally like them.", "There is a meal plan for most residents.", "Williamstown has a few places to eat, but the options run out fast."]},
    vibe: {
      preview: 'Small, hard, sporty and outdoorsy, with the mountains all around',
      meters: {
        party:    { value: 5, note: 'Small on-campus parties, often team-run' },
        campus:   { value: 9, note: 'Old buildings with mountain views everywhere' },
        spirit:   { value: 6, note: 'Big for the Amherst rivalry' },
        pressure: { value: 8, note: 'Hard classes, lots of high achievers' },
        career:   { value: 8, note: 'Strong alumni network, big in finance and grad school' },
        greek:    { value: 0, note: 'Banned since the 1960s' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: "Everything happens on campus, because there's nowhere else to go.",
      paragraphs: [
        "Williamstown is a small town with a short main street, a couple of art museums and not much nightlife. So the social scene is on campus: parties in dorms and student houses, sports games, a cappella shows and club events. If you want a big city on weekends, this is the wrong school.",
        "First-years live in small groups called entries, with upperclass advisors living alongside them. Your entry is often your first friend group, and a lot of people stay close with theirs.",
        "Sports and the outdoors are a huge part of life. A big share of students play a varsity sport, and the Outing Club runs hiking, skiing and climbing trips. Mountain Day is the favorite tradition: one fall morning, classes get canceled and everyone hikes up a nearby mountain for donuts, cider and singing."
      ]
    },

    gettingIn: {
      preview: 'Very hard to get into. Most strong applicants get turned down.',
      points: [
        { title: "It's one of the hardest schools to get into.", text: 'Williams is often ranked the top liberal arts college in the country. Most applicants are turned away, including lots with perfect grades.' },
        { title: 'Tests have been optional.', text: "It has let students apply without SAT or ACT scores. Policies at top schools have been changing, so check the current rule before you apply." },
        { title: 'The aid is real.', text: "Williams meets full need with grants and no loans. A lot of families pay much less than the sticker price. Use the net price calculator." },
        { title: 'Early decision helps a bit.', text: "If it's truly your first choice, applying early decision can help. It's binding, so only do it if you're sure." }
      ]
    },

    who: {
      preview: 'Smart, sporty, outdoorsy people who like a small world',
      paragraphs: [
        "Students come from all over the country and the world. You'll find a lot of athletes, a lot of people who love hiking and skiing, and a lot of people who were at the top of their high school class.",
        "It's the kind of place where people do everything at once: a sport, a cappella, two clubs and a hard major. Economics, math, political science and art history are big. People are friendly, but the tiny size means everyone kind of knows everyone's business."
      ]
    },

    knownFor: {
      preview: 'Top liberal arts rankings, tutorials, Mountain Day and the Purple Cow',
      points: [
        { title: 'Rankings', text: 'Williams has sat at or near number one on liberal arts college rankings for years. That name carries weight, especially in the Northeast.' },
        { title: 'Tutorials and Winter Study', text: 'Tutorials are tiny classes where two students meet with a professor and take turns presenting papers. Winter Study is a short January term for one fun or unusual class.' },
        { title: 'Ephs and the Purple Cow', text: 'Students are Ephs, after founder Ephraim Williams. The mascot is a purple cow. The football rivalry with Amherst is one of the oldest in the country.' },
        { title: 'Art and sports', text: 'The Clark Art Institute and MASS MoCA are close by, and the art history program is famous. Williams also wins a lot in Division III sports.' }
      ]
    },

    stereotypes: {
      preview: '"Rich kids" is half true. "Jocks and nerds" is mostly true.',
      items: [
        { said: "It's full of rich kids.", verdict: 'half', text: "There's real wealth here, and you'll notice it. But Williams gives big grant-based aid, and lots of students are on financial aid or the first in their family to go to college." },
        { said: 'Everyone is a jock.', verdict: 'half', text: "A big chunk of students play a varsity sport, and teams shape the social scene. Plenty of people never play, though, and fit in fine." },
        { said: 'Everyone hikes and skis.', verdict: 'true', text: "The mountains are right there and people use them. Even people who weren't outdoorsy before often end up on a trail." },
        { said: "It's a boring bubble.", verdict: 'half', text: "It is a bubble, and there's not much in town. But there's a lot going on on campus, and people who like a close community love it." }
      ]
    },

    mythsAndKnow: {
      preview: "It's far from everything, winters are long, and campus is your world",
      myths: [
        { title: "Small school means fewer options.", text: "There are fewer classes than at a big university, but tons of clubs, sports and research chances, and you won't fight crowds to get them." },
        { title: 'Only people who can pay full price go.', text: "Not true. Williams meets full need without loans, and a lot of students get major aid." }
      ],
      know: [
        { title: "It's far from cities.", text: 'Boston and New York are both about three hours away. Going home or into a city takes planning.' },
        { title: 'Winter is long and cold.', text: "It's in the mountains, so it snows a lot. Good if you ski, rough if you hate cold." },
        { title: 'Classes are really small.', text: "You'll know your professors and they'll know you. You can't hide in the back." },
        { title: 'Everyone knows everyone.', text: "With about 2,000 students, gossip travels fast. Some people love that, some find it a lot." }
      ]
    },

    fit: {
      preview: "Great if you love small, outdoorsy and intense. Rough if you need a city.",
      love: ['You want tiny classes and close professors', 'You love hiking, skiing or sports', 'You want a tight community where you know everyone', 'You want a big-name school without a big school'],
      struggle: ['You want a city or nightlife nearby', 'You hate cold, snowy winters', 'You want to blend into a big crowd', 'You want Greek life or big game days']
    },

    people: {
      preview: 'Professors and the outdoors are the wins. Isolation is the complaint.',
      plus: ['Professors really get to know you', 'Beautiful campus in the mountains', 'Strong alumni network that answers emails'],
      minus: ['Very isolated, hard to get away', 'The small size can feel like high school', 'Workload is heavy and pressure is high']
    }
  }
});
