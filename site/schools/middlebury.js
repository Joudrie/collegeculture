registerSchool({
  id: 'middlebury',
  name: 'Middlebury',
  nameSub: 'College',
  state: 'Vermont',
  location: 'Middlebury, VT · Champlain Valley town',
  asOf: '2026',

  colors: {
    name: 'Panthers · Blue and white',
    swatches: ['#0D395F', '#75A3CD', '#FFFFFF'],
    band: '#0D395F',
    onBand: '#FFFFFF',
    onBandMuted: '#C2D6EA',
    stripe: '#1F9F8B',
    accent: '#0D395F',
    accentOnDark: '#75A3CD'
  },

  vibe: "A small liberal arts college on a hill in rural Vermont, with mountain views from almost everywhere. Classes are tiny and hard, and on winter weekends half the school is on the slopes.",
  flags: ['Very small', 'Rural Vermont', 'No Greek life', 'Bring a winter coat'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~2,800' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Skiing' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Tiny, outdoorsy, academic, and everyone lives on campus',
      meters: {
        party:    { value: 5, note: 'Dorm and social house parties, no frats' },
        campus:   { value: 9, note: 'Stone buildings and mountain views' },
        spirit:   { value: 5, note: 'Small crowds, but people show up for friends' },
        pressure: { value: 7, note: 'Small classes mean you can\'t hide' },
        career:   { value: 6, note: 'Loyal alumni, but you have to reach out' },
        greek:    { value: 0, note: 'Fraternities were phased out decades ago' },
        religion: { value: 2, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Everything happens on campus. Social houses and dorm parties fill the weekends.',
      paragraphs: [
        "Almost everyone lives on campus all four years, and the town is small and quiet. So the college is your whole world. With under 3,000 students, you'll recognize most faces by sophomore year.",
        "There's no Greek life. Fraternities were phased out years ago, and coed social houses took their place. Weekends are a mix of social house parties, dorm parties, a cappella shows and hanging out in someone's suite.",
        "The outdoors fills the rest. The college runs its own ski area, the Snow Bowl, plus a cross-country ski center. Lots of people hike, ski or bike on weekends, and the Mountain Club is one of the biggest groups on campus."
      ]
    },

    gettingIn: {
      preview: 'Very selective. Early decision helps, and you might be a Feb.',
      points: [
        { title: "It's hard to get into.", text: 'Most applicants are turned away. Treat it as a reach unless your grades are near the top of your class.' },
        { title: 'Early decision matters.', text: "It has two binding early decision rounds. If it's your first choice, applying early can help." },
        { title: 'Tests may be optional.', text: 'It has been test-optional in recent years. Check the current policy before you apply.' },
        { title: 'You might be a Feb.', text: "Some students are admitted to start in February instead of September. Febs often take a gap semester first. It's a real admission, and Febs are known for being tight." }
      ]
    },

    who: {
      preview: 'Smart, outdoorsy, friendly people who like small classes',
      paragraphs: [
        "People who liked school, want to know their professors and don't mind being far from a city. Lots of students ski, hike or play a sport. A lot of them care about the environment, and many are into languages or international stuff.",
        "It fits people who want a small, close community. If you want a big city, huge sports crowds or lots of anonymity, it will feel very small very fast."
      ]
    },

    knownFor: {
      preview: 'Languages, the environment, skiing and the Febs',
      points: [
        { title: 'Languages', text: 'Middlebury is famous for teaching languages. Its summer Language Schools make students pledge to speak only the language they are learning, and lots of students study abroad.' },
        { title: 'Environmental studies', text: 'It has one of the oldest environmental studies programs in the country, and sustainability is a big part of campus life.' },
        { title: 'The Snow Bowl', text: 'The college owns a ski area in the Green Mountains. Students get cheap passes, and the ski team competes at the top level.' },
        { title: 'Febs', text: "Students who start in February graduate in February too, and celebrate by skiing down the Snow Bowl in their caps and gowns. Families come back for the full ceremony in May." }
      ]
    },

    stereotypes: {
      preview: '"Everyone skis" is half true. "In the middle of nowhere" is true.',
      items: [
        { said: "Everyone skis.", verdict: 'half', text: "A lot of people do, and the Snow Bowl makes it easy. But plenty of students never ski at all and just enjoy the view." },
        { said: "It's in the middle of nowhere.", verdict: 'true', text: "The town is small, and Burlington is about an hour's drive. If you want city life, you won't find it nearby." },
        { said: "Everyone wears Patagonia.", verdict: 'true', text: "Fleeces, puffy jackets and hiking boots are basically the uniform. It's practical when winter lasts this long." },
        { said: "Everyone's rich and preppy.", verdict: 'half', text: "There's real wealth on campus, and you'll notice it. But aid is need-based and plenty of students come from normal backgrounds." }
      ]
    },

    mythsAndKnow: {
      preview: 'Not just for skiers. Winters are long, and a car helps.',
      myths: [
        { title: "It's only for skiers.", text: 'Skiing is a big deal, but it is a full academic college first. Lots of people come for the classes and the professors.' },
        { title: 'Small means easy.', text: 'Classes are small and discussion-heavy, so you have to do the reading. Professors notice when you are not prepared.' }
      ],
      know: [
        { title: 'Winters are long.', text: 'Expect snow and cold from November into spring. Pack real winter gear.' },
        { title: 'There is a January term.', text: 'J-Term is a short winter term where you take one class. Lots of people use it for something fun or new.' },
        { title: 'A car helps.', text: 'Campus is walkable, but getting to the mountains or Burlington is easier with a car or a friend who has one.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love small classes and the outdoors. Rough if you need a city.',
      love: ['You want to know your professors well', 'You love skiing, hiking or the outdoors', 'You want to learn languages or study abroad', 'You want a small, close community'],
      struggle: ['You need a city nearby', 'You want big game days and Greek life', "You hate cold, dark winters"]
    },

    people: {
      preview: 'Great professors and a beautiful campus. The small, remote bubble is the complaint.',
      plus: ['Professors are close and easy to reach', 'The campus and mountains are beautiful', 'Language and study abroad options are great'],
      minus: ['The bubble can feel very small', 'It is far from any real city', 'There is noticeable wealth on campus']
    }
  }
});
