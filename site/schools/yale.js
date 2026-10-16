registerSchool({
  id: 'yale',
  name: 'Yale',
  nameSub: 'University',
  state: 'Connecticut',
  location: 'New Haven, CT · Downtown',
  asOf: '2026',

  colors: {
    name: 'Bulldogs · Yale blue and white',
    swatches: ['#00356B', '#286DC0', '#FFFFFF'],
    band: '#00356B',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C9E0',
    stripe: '#286DC0',
    accent: '#00356B',
    accentOnDark: '#7FB2F0'
  },

  vibe: "An Ivy where the whole thing is built around your residential college, so it feels smaller and warmer than you'd expect. People work hard, but they also sing, act, write and start things nonstop.",
  flags: ['Extremely hard to get in', 'Residential colleges', 'Big arts scene', 'City campus'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~6,800' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Football' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Intense but friendly, very artsy, life centered on your college',
      meters: {
        party:    { value: 5, note: 'Suite parties and events, not a party school' },
        campus:   { value: 9, note: 'Gothic stone buildings in the middle of the city' },
        spirit:   { value: 6, note: 'Huge for The Game, quiet otherwise' },
        pressure: { value: 8, note: 'Everyone was top of their class' },
        career:   { value: 8, note: 'The name opens doors, especially law and finance' },
        greek:    { value: 2, note: 'A few chapters, most people skip it' },
        religion: { value: 2, note: 'Secular, with active chaplain and faith groups' }
      }
    },

    social: {
      preview: 'Your residential college is your home base. Clubs fill the rest.',
      paragraphs: [
        "Before you even arrive, you're placed into one of the residential colleges. Each one has its own dining hall, courtyard, traditions and staff. You live there most of your four years, and it's where a lot of your friendships start.",
        "The rest of social life runs through extracurriculars. A cappella, theater, the Yale Daily News, debate, sports and cultural groups take up huge amounts of time. People are serious about their stuff, and the scene is built around it.",
        "Weekends are suite parties, shows, college events and some frat parties. There are also secret societies for seniors, which get more attention from outsiders than they do on campus. New Haven has good food, and New York is about two hours away by train."
      ]
    },

    gettingIn: {
      preview: 'One of the hardest schools in the country to get into. Aid is generous.',
      points: [
        { title: "It's extremely hard to get into.", text: 'Almost everyone who applies is turned down, including lots of kids with perfect grades. Treat it as a reach no matter who you are.' },
        { title: 'Early action has a catch.', text: "Yale uses single-choice early action. It isn't binding, but it limits where else you can apply early. Read the rules before you pick it." },
        { title: 'Tests are back.', text: 'Yale now requires SAT or ACT scores. Check the current policy before you apply, since it has changed a few times.' },
        { title: 'Aid is very generous.', text: 'Yale covers full demonstrated need, and many families pay far less than the sticker price. Run the net price calculator before you rule it out.' }
      ]
    },

    who: {
      preview: 'Driven, creative people who are into a lot of things at once',
      paragraphs: [
        "People who were the top student and also ran three clubs, acted in the play and played an instrument. Students come from all over the country and the world, and the aid means it is not only wealthy kids.",
        "It leans humanities and arts more than some Ivies, with big history, political science, economics and English crowds. STEM is strong too. The common thread is people who like to talk about ideas and care a lot about whatever they're into."
      ]
    },

    knownFor: {
      preview: 'Residential colleges, theater and arts, and the Harvard rivalry',
      points: [
        { title: 'Residential colleges', text: 'The whole undergrad experience is organized around them. Think Hogwarts houses with less magic and more dining hall debates.' },
        { title: 'Theater and the arts', text: 'Dozens of student shows a year, famous a cappella groups and a well-known drama school next door. A lot of actors and writers came out of here.' },
        { title: 'Harvard vs Yale', text: 'The Game is the football matchup every November. It alternates between New Haven and Cambridge, and it is the biggest social weekend of the year.' },
        { title: 'Pizza', text: "New Haven pizza is a whole thing. You'll be asked to pick a side between the famous spots in Wooster Square." }
      ]
    },

    stereotypes: {
      preview: '"Artsy Ivy" is true. "Little brother to Harvard" is a myth.',
      items: [
        { said: "It's the artsy, theater-kid Ivy.", verdict: 'true', text: "The arts and performance scene is huge and people take it seriously. You don't have to be a theater kid, but you'll know a lot of them." },
        { said: "It's just Harvard's little brother.", verdict: 'myth', text: 'They are peers. Different vibe, not a different tier. Yale students mostly roll their eyes at this one, except during The Game.' },
        { said: 'New Haven is dangerous.', verdict: 'half', text: "Like any city, some areas have real problems, and you should use normal city sense at night. Downtown around campus is busy, lively and full of students." },
        { said: 'It runs on secret societies.', verdict: 'half', text: "They exist and some are famous. They're for a small number of seniors, and most people's social life has nothing to do with them." }
      ]
    },

    mythsAndKnow: {
      preview: "It's not just for rich kids. Your residential college matters a lot.",
      myths: [
        { title: "You can't afford it.", text: 'The sticker price is huge, but the aid is some of the best in the country. Lots of families pay much less than they expect.' },
        { title: 'Everyone is competing against each other.', text: "The work is hard, but people describe it as collaborative. The pressure mostly comes from inside your own head." }
      ],
      know: [
        { title: 'Your college is random.', text: "You don't pick your residential college. You get placed, and almost everyone ends up loving theirs." },
        { title: "You don't need a car.", text: 'Campus is walkable, New Haven has its own train station, and New York and Boston are both reachable by train.' },
        { title: 'Everyone was a star in high school.', text: "Being average here can feel weird at first. That's normal, and it fades." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love ideas and the arts. Rough if you want a sports school.',
      love: ['You want a small-feeling community inside a big name', 'You do theater, music, writing or anything creative', 'You like long conversations about ideas', 'You want a city around you without a huge city'],
      struggle: ['You want big-time sports every weekend', 'You want a laid-back academic pace', "You'd rather blend in than be around very intense people"]
    },

    people: {
      preview: 'Students love their colleges and the people. Stress is the complaint.',
      plus: ['Residential colleges make it feel like home', 'Amazing range of things to get involved in', 'Generous aid and a name that opens doors'],
      minus: ['Stress and burnout are real', 'The town and campus can feel like two separate worlds', 'Some clubs and groups are hard to get into too']
    }
  }
});
