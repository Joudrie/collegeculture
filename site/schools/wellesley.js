registerSchool({
  id: 'wellesley',
  name: 'Wellesley',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Wellesley, MA · Suburb west of Boston',
  asOf: '2026',

  colors: {
    name: 'Blue · Wellesley blue and navy',
    swatches: ['#0142A4', '#0C2142', '#FFFFFF'],
    band: '#0142A4',
    onBand: '#FFFFFF',
    onBandMuted: '#C9DAF5',
    stripe: '#091A36',
    accent: '#0142A4',
    accentOnDark: '#8DB4F2'
  },

  vibe: "A women's college with a gorgeous lakeside campus in a quiet, wealthy suburb. Classes are hard, people are driven and close, and for a big night out most students head into Boston or Cambridge.",
  flags: ["Women's college", 'Hard grading', 'Social life off campus', 'MIT cross-registration'],
  facts: [
    { label: 'Setting', value: 'Suburb' },
    { label: 'Undergrads', value: '~2,400' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Commuter rail to Boston; Logan is the airport", "points": ["The Framingham/Worcester commuter rail line has stops in Wellesley.", "Logan Airport is the closest major airport.", "You can get by without a car. Check the school's rules on first-year cars."]},
    "traditions": {"preview": "The Scream Tunnel on Marathon Monday", "items": ["During the Boston Marathon, students line the course in a loud crowd known as the Scream Tunnel, and runners know it from far away."]},
    "living": {"preview": "Almost everyone lives on campus all four years, food is good", "housing": ["Almost all students live on campus for all four years.", "Dorms are a mix of older halls and newer buildings.", "Campus is residential and pretty, but Wellesley is a quiet town."], "food": ["Food is served in several dining halls spread around campus.", "Students usually say it is better than average.", "The town has a few restaurants, and Boston is a train ride away."]},
    vibe: {
      preview: 'Academic, close-knit and beautiful, with the fun often in Boston',
      meters: {
        party:    { value: 3, note: 'Quiet on campus, people go to Boston and MIT' },
        campus:   { value: 10, note: 'Lake, woods and old stone buildings' },
        spirit:   { value: 6, note: 'Big on traditions more than sports' },
        pressure: { value: 8, note: 'Hard classes, tough grading' },
        career:   { value: 8, note: 'The alumnae network is famous' },
        greek:    { value: 1, note: 'No sororities, but a few old societies' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Close friends and traditions on campus, parties in Boston',
      paragraphs: [
        "On campus, social life is mostly friends, dorm events, clubs and traditions. It's quieter than a big co-ed school, and people are honest that weekend parties usually happen somewhere else.",
        "A free college bus runs to MIT, Cambridge and Boston on weekends, and the commuter rail stops in town. Lots of students take classes, join clubs or go to parties at MIT and Harvard. If you're not willing to travel for fun, the weekends can feel slow.",
        "Traditions are a big deal. Students cheer on runners at the Boston Marathon from the Scream Tunnel, seniors race in Hooprolling, and Lake Day brings everyone out to Lake Waban. Wellesley also has a few old societies, which are social and interest groups that some people join instead of Greek life."
      ]
    },

    gettingIn: {
      preview: 'Very selective. Most applicants are turned down.',
      points: [
        { title: "It's hard to get into.", text: "Wellesley is one of the top-ranked liberal arts colleges. Most applicants don't get in, so treat it as a reach." },
        { title: "Check who can apply.", text: "It's a women's college. The admissions website explains exactly who is eligible, so read it before you apply." },
        { title: 'Tests have been optional.', text: "It has let students apply without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Aid is strong.', text: "Wellesley meets full need for admitted students. Many families pay much less than the sticker price. Use the net price calculator." }
      ]
    },

    who: {
      preview: 'Driven, outspoken students with big plans',
      paragraphs: [
        "Students come from all over the US and the world, and a lot of them were leaders in high school. People are ambitious, opinionated and serious about school, but also really supportive of each other.",
        "Economics, political science, computer science, neuroscience and the sciences are popular. Many students aim for law school, med school, grad school or big jobs in Boston, New York and DC."
      ]
    },

    knownFor: {
      preview: 'Famous alumnae, the network, MIT classes and a stunning campus',
      points: [
        { title: 'Famous alumnae', text: 'Hillary Clinton and Madeleine Albright both went to Wellesley, along with lots of leaders in business, science and journalism.' },
        { title: 'The network', text: 'Alumnae are famously loyal. Students say they really do answer emails and help with internships and jobs.' },
        { title: 'Cross-registration', text: "You can take classes at MIT, plus Babson, Olin and Brandeis. Some students basically double-dip with MIT's course list." },
        { title: 'The campus', text: "The campus wraps around Lake Waban, with woods, trails and old stone buildings. People call it one of the most beautiful campuses in the country." }
      ]
    },

    stereotypes: {
      preview: '"No social life" is half true. "Super academic" is true.',
      items: [
        { said: 'Everyone studies all the time.', verdict: 'true', text: "The work is heavy and grading is known to be tough. Most people take school very seriously." },
        { said: "There's no social life.", verdict: 'half', text: "On campus it's quiet, and parties are rare. But people have close friends, lots of clubs and traditions, and go into Boston or to MIT for more." },
        { said: "It's a school for rich, preppy kids.", verdict: 'half', text: "The town is wealthy and some students are too. But Wellesley gives big aid, and many students are on financial aid or the first in their family to go to college." },
        { said: "Everyone wants to be a politician.", verdict: 'half', text: "There are a lot of future lawyers and policy people, thanks to famous alumnae. But just as many are going into science, tech, medicine and business." }
      ]
    },

    mythsAndKnow: {
      preview: 'Boston is a bus ride away, grading is tough, and the network is real',
      myths: [
        { title: "You'll be stuck in the suburbs.", text: "Campus is in a quiet town, but the college bus and commuter rail get you to Boston and Cambridge without a car." },
        { title: "A women's college means a small, limited world.", text: "With cross-registration at MIT and other schools, plus Boston nearby, you can find a much bigger world if you go out and look." }
      ],
      know: [
        { title: 'Plan your weekends.', text: "The bus schedule shapes your social life. If you want to go out, you'll be planning trips into the city." },
        { title: 'Grading is tough.', text: "Getting an A takes real work. Don't expect high school grades to come easily." },
        { title: 'The town is quiet.', text: "Wellesley is a wealthy suburb with shops and cafes, but no college nightlife." },
        { title: 'Traditions matter.', text: "From the Marathon Scream Tunnel to Hooprolling, traditions are a big part of feeling at home here." }
      ]
    },

    fit: {
      preview: 'Great if you want serious academics and a close community. Rough if you want parties on campus.',
      love: ["You want a women's college with a strong support system", 'You love hard classes and smart discussions', 'You want a beautiful, peaceful campus', 'You want access to MIT and Boston too'],
      struggle: ['You want a big party scene on campus', "You don't want to travel for a night out", 'You want an easy grading curve', 'You want big-time sports']
    },

    people: {
      preview: 'The network and the campus are the wins. Quiet weekends are the complaint.',
      plus: ['The alumnae network is incredible', 'Close friends and a supportive community', 'The campus is gorgeous'],
      minus: ['Weekends on campus can be slow', 'Heavy workload and tough grading', 'Getting into Boston takes planning']
    }
  }
});
