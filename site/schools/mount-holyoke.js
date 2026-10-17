registerSchool({
  id: 'mount-holyoke',
  name: 'Mount Holyoke',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'South Hadley, MA · Quiet town, lakeside campus',
  asOf: '2026',

  colors: {
    name: 'Lyons · Dark and light blue',
    swatches: ['#004876', '#00A9E0'],
    band: '#004876',
    onBand: '#FFFFFF',
    onBandMuted: '#B3E3F5',
    stripe: '#00A9E0',
    accent: '#004876',
    accentOnDark: '#00A9E0'
  },

  vibe: "A women's college with a storybook campus, two lakes, and more traditions than you can count. It's quiet and close-knit, and the Five College bus is your ticket to a bigger scene.",
  flags: ["Women's college", 'Big on traditions', 'Quiet town', 'Five Colleges'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~2,200' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Almost everyone lives on campus, food is above average", "housing": ["Nearly all students live on campus.", "Dorms are a mix of older halls and a few apartment-style options.", "The campus is residential, in a quiet small town."], "food": ["There are several dining halls around campus.", "Students usually say the food is pretty good.", "South Hadley is small, but nearby towns have more options."]},
    vibe: {
      preview: 'Cozy, traditional, beautiful campus, low-key weekends',
      meters: {
        party:    { value: 2, note: 'Quiet on campus, people bus out to party' },
        campus:   { value: 10, note: 'Lakes, waterfalls and old stone buildings' },
        spirit:   { value: 6, note: 'Traditions, not game days' },
        pressure: { value: 6, note: 'Real work, but less cutthroat than you fear' },
        career:   { value: 6, note: 'Loyal alums and a solid career center' },
        greek:    { value: 0, note: 'No sororities' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Traditions and dorm life on campus, Five College trips for more',
      paragraphs: [
        'Social life here runs on traditions and your residence hall. M&Cs, milk and cookies served in the halls on weeknights, is a real hangout spot. Class colors and mascots get passed down, and Big/Little pairs connect first-years with older students.',
        'Weekends on campus are mellow. Movie nights, club events and small parties, not a big party scene. Students who want more take the free bus to Amherst College, UMass or Northampton.',
        "South Hadley itself is small and quiet. There's a little village area across the street with a few shops and places to eat, but you won't find a busy downtown. Your car-free life is the bus."
      ]
    },

    gettingIn: {
      preview: 'Selective, but more reachable than many top liberal arts schools',
      points: [
        { title: "It's selective.", text: 'Most applicants are not admitted, but it admits more of its pool than many schools with similar academics. Strong grades in hard classes matter most.' },
        { title: 'Tests are optional.', text: "Mount Holyoke went test-optional long before it was common. Most admitted students don't send scores. Check the current policy before you apply." },
        { title: 'Early decision is an option.', text: "If it's your clear first pick, applying early can help. It's binding, so only do it if you're sure." },
        { title: 'Aid can make it affordable.', text: "The sticker price is high, but many students get need-based aid. Use the net price calculator before you rule it out." }
      ]
    },

    who: {
      preview: 'Thoughtful, curious, a bit nerdy, and big on community',
      paragraphs: [
        "People who want a close community and don't mind a quieter social life. Lots of science and international relations students, plenty of writers and artists, and a big international crowd for a school this size.",
        "If you need a city or a loud weekend scene, you'll feel the quiet. If you like knowing everyone, loving your campus, and showing up for silly traditions, it fits."
      ]
    },

    knownFor: {
      preview: 'A beautiful campus, a long history, and lots of traditions',
      points: [
        { title: 'Old and proud of it', text: "Founded in 1837 by Mary Lyon, it's the oldest of the Seven Sisters women's colleges. Students know the history." },
        { title: 'Traditions', text: 'Mountain Day, M&Cs, Pangy Day, class colors and symbols. There is a tradition for almost every week of the year.' },
        { title: 'The campus', text: "It regularly shows up on lists of the prettiest campuses, and it's earned. Two lakes, a waterfall and big old trees." },
        { title: 'Five Colleges', text: 'You can take classes at Smith, Amherst and UMass, and the bus is free.' }
      ]
    },

    stereotypes: {
      preview: '"Nothing to do" is half true. "It\'s all tradition and no fun" is a myth.',
      items: [
        { said: "There's nothing to do.", verdict: 'half', text: "South Hadley is quiet, no question. On campus there's a lot going on, and the bus gets you to Amherst and Northampton." },
        { said: "It's Smith's little sister.", verdict: 'myth', text: "They're friendly rivals with different feels. Mount Holyoke is quieter and more tucked away. Some people love that." },
        { said: 'Everyone is super into traditions.', verdict: 'true', text: 'Most students jump in, and it is a big part of why people love the place. You can skip what you want, though.' },
        { said: 'Everyone is buried in work.', verdict: 'half', text: "Classes are real work. But the vibe is more supportive than competitive, and people study together." }
      ]
    },

    mythsAndKnow: {
      preview: "You're less isolated than it looks, but a car-free life means buses",
      myths: [
        { title: "You're stuck in South Hadley.", text: 'The free Five College bus runs to Amherst and Northampton. Lots of students take classes or hang out there.' },
        { title: 'It only cares about the past.', text: "The traditions are old, but the classes and the student body aren't. Science and global studies are strong here." }
      ],
      know: [
        { title: 'Mountain Day is a surprise.', text: "One fall morning the bells ring, classes are cancelled, and students head up the nearby mountain to the Summit House. Nobody knows the date ahead of time." },
        { title: 'The bus is your lifeline.', text: "If you don't have a car, learn the bus schedule early. Trips to Amherst or Northampton take a while." },
        { title: 'Winters are real.', text: "It's western Massachusetts. Bring a real coat and boots." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a cozy, traditional campus. Rough if you want a city.',
      love: ['You want a beautiful, quiet campus', 'You love traditions and community', 'You want small classes and close professors', 'You like having Five College options nearby'],
      struggle: ['You want a busy town outside the gates', 'You want big parties on campus', 'You hate relying on a bus', 'You want big-time sports']
    },

    people: {
      preview: 'The campus and community win. The quiet town is the complaint.',
      plus: ['The campus is stunning', 'Traditions make it feel like home', 'Professors are easy to get to know'],
      minus: ['South Hadley is very quiet', 'Getting off campus takes planning', "It's expensive without good aid"]
    }
  }
});
