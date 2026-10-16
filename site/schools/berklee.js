registerSchool({
  id: 'berklee',
  name: 'Berklee',
  nameSub: 'College of Music',
  state: 'Massachusetts',
  location: 'Boston, MA · Back Bay / Mass Ave',
  asOf: '2026',

  colors: {
    name: 'Mingus the Jazz Cat · Red and gray',
    swatches: ['#D81118', '#25353C'],
    band: '#25353C',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C2C7',
    stripe: '#D81118',
    accent: '#D81118',
    accentOnDark: '#F2626A'
  },

  vibe: 'A music school spread across buildings in the Back Bay where everyone plays, writes or produces something. The scene is intense and creative, and your network starts on day one.',
  flags: ['Audition required', 'No real campus', 'Expensive', 'Music all day'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~7,500' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Jam sessions, not parties. Huge creative energy, no sports.',
      meters: {
        party:    { value: 4,  note: 'Shows and jam sessions more than parties' },
        campus:   { value: 2,  note: 'Buildings on Mass Ave and Boylston St' },
        spirit:   { value: 2,  note: 'No teams. People rally around shows.' },
        pressure: { value: 8,  note: 'Talented peers and constant comparison' },
        career:   { value: 7,  note: 'Big network, but music careers are hustle' },
        greek:    { value: 0,  note: 'Not part of the culture' },
        religion: { value: 1,  note: 'Secular' }
      }
    },

    social: {
      preview: 'You meet people by playing with them. The city is the campus.',
      paragraphs: [
        'Most friendships come from music. You join ensembles, form bands, write songs with people and play shows together. If you put yourself out there, it is easy to find collaborators.',
        "There's no quad. Berklee is a set of buildings around Massachusetts Avenue and Boylston Street, with dorms on Mass Ave. Many students move into apartments after the first year, and Boston rent is high.",
        "Weekends often mean going to shows, playing gigs or recording. The Boston Conservatory at Berklee, which covers dance, theater and classical music, is part of the same school, and Berklee is a short walk from Northeastern and BU."
      ]
    },

    gettingIn: {
      preview: 'Your audition is what matters most. Tests are optional.',
      points: [
        { title: 'You have to audition.', text: 'Applicants do an audition and interview. Your playing, ear and musicianship matter more than your GPA.' },
        { title: "It's selective.", text: "Less than half of applicants get in. It's not Juilliard-level hard, but you need real skill on your instrument or voice." },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Try a summer program.', text: 'Many students say a Berklee summer program is a good way to see if the school fits before you commit.' }
      ]
    },

    who: {
      preview: 'Players, singers, songwriters and producers who live for music',
      paragraphs: [
        "People who have been playing for years and want to make music their life. You'll find jazz players, pop singers, songwriters, producers, film scoring nerds and future music business people. There are a lot of international students.",
        "It fits people who are driven and good at networking. Nobody hands you a career. The students who do well are the ones who play with everyone, take gigs and start projects of their own."
      ]
    },

    knownFor: {
      preview: 'Contemporary music, famous alumni, and the Boston Conservatory',
      points: [
        { title: 'Contemporary music', text: "Started as a jazz school and now covers pop, rock, hip hop, songwriting, production, film scoring, music business and more. It's not a classical conservatory." },
        { title: 'Famous alumni', text: 'Lots of well-known musicians, producers and Grammy winners studied here, including Quincy Jones and Charlie Puth.' },
        { title: 'Boston Conservatory', text: 'Berklee merged with the Boston Conservatory in 2016. It covers classical music, dance and musical theater.' },
        { title: 'Production and tech', text: 'Studios, music production and engineering programs are a big draw. Getting time in the best rooms can be competitive.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is insanely good" is true. "Just a jazz school" is outdated.',
      items: [
        { said: 'Everyone there is insanely good.', verdict: 'true', text: "The level is high, and you'll meet people better than you. Some students find it motivating. Others say it messes with their confidence at first." },
        { said: "It's just a jazz school.", verdict: 'outdated', text: 'Jazz is the history. Today pop, songwriting, production and film scoring are just as big.' },
        { said: 'Half the students drop out to go on tour.', verdict: 'half', text: 'Some famous people did leave early, and that story gets repeated a lot. Most students stay and finish.' },
        { said: "The degree doesn't matter, only the connections.", verdict: 'half', text: 'Most music jobs care about your skills and who you know more than your diploma. The people you meet are a big part of what you pay for.' }
      ]
    },

    mythsAndKnow: {
      preview: "It's expensive, ensembles are rated, and you need to hustle",
      myths: [
        { title: 'Getting in means you made it.', text: "Berklee gives you skills and a network. You still have to build a career, and the music business is tough." },
        { title: 'It only cares about performers.', text: 'Plenty of students study production, music business, songwriting, film scoring or music therapy and barely perform.' }
      ],
      know: [
        { title: 'It is expensive.', text: 'Tuition is high and Boston is pricey. Students talk a lot about debt, so look hard at aid before you commit.' },
        { title: 'Ensembles are placed by rating.', text: 'Your audition and placement tests decide which ensembles you can join at first. Students complain it is not perfect.' },
        { title: "You don't need a car.", text: 'The Green Line stops at Hynes Convention Center, right by the main buildings.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if music is your whole life. Rough if you want a normal college.',
      love: ['Music is what you want to do with your life', 'You want to play with talented people every day', 'You want to live in the middle of Boston', "You're good at starting projects and meeting people"],
      struggle: ['You want a campus, sports and a classic college experience', 'You get discouraged when others are better than you', 'Cost is a big worry for your family']
    },

    people: {
      preview: 'The people and network win. Cost is the big complaint.',
      plus: ['Talented, motivated classmates', 'A huge network in the music world', 'Lots of chances to perform, record and collaborate'],
      minus: ['It is very expensive', 'Competition can feel intense', 'No real campus or school spirit']
    }
  }
});
