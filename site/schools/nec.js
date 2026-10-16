registerSchool({
  id: 'nec',
  name: 'NEC',
  nameSub: 'New England Conservatory',
  state: 'Massachusetts',
  location: 'Boston, MA · Fenway / Huntington Ave',
  asOf: '2026',

  colors: {
    name: 'Conservatory · Brown and gold',
    swatches: ['#3A3329', '#EAAA00'],
    band: '#3A3329',
    onBand: '#FFFFFF',
    onBandMuted: '#D9CDB8',
    stripe: '#EAAA00',
    accent: '#93660D',
    accentOnDark: '#EAAA00'
  },

  vibe: "A small music conservatory where everyone is serious about their instrument. You'll practice a lot, perform a lot, and live next door to Symphony Hall.",
  flags: ['Music only', 'Audition to get in', 'Practice-heavy', 'Small campus'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~400' },
    { label: 'Getting in', value: 'Audition' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Music-obsessed, small, focused, with concerts every night',
      meters: {
        party:    { value: 2, note: 'Low-key, everyone has early rehearsals' },
        campus:   { value: 2, note: 'A few buildings on Huntington Ave' },
        spirit:   { value: 1, note: 'Pride is about concerts, not teams' },
        pressure: { value: 8, note: 'Practice, juries and auditions never stop' },
        career:   { value: 6, note: 'Music careers are tough, but you build real connections' },
        greek:    { value: 0, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Your friends are your ensemble, roommates and practice room neighbors',
      paragraphs: [
        "It's a small school, so you know your whole department. Friend groups form around ensembles, studios and who you practice next to. A lot of the social life is going to each other's concerts.",
        "Nobody goes to a football game, and the party scene is low-key. Most people have rehearsal or a lesson early, and practice takes up a lot of free time.",
        "The location helps. Symphony Hall and Jordan Hall are close, and a lot of Boston's colleges are a short walk or train ride away."
      ]
    },

    gettingIn: {
      preview: 'The audition is the whole thing. Grades matter less.',
      points: [
        { title: 'You have to audition.', text: 'Your performance is the main thing that decides if you get in. Prepare early.' },
        { title: "It's selective.", text: 'Many applicants audition and a lot of them are very strong. Treat it as a reach unless you are already at a high level.' },
        { title: 'Academics count too.', text: 'You still need a solid high school record, and you take liberal arts classes alongside music.' }
      ]
    },

    who: {
      preview: 'Serious musicians who have been training for years',
      paragraphs: [
        'People who have played or sung seriously for most of their lives. Students come from all over the US and the world. Most are in classical performance, and there is also jazz and contemporary improvisation.',
        "It fits people who want to be around peers who work as hard as they do. If you're not sure music is the plan, this is a hard place to figure it out."
      ]
    },

    knownFor: {
      preview: 'Jordan Hall, classical training, and a lot of concerts',
      points: [
        { title: 'Jordan Hall', text: 'The main concert hall is known for its acoustics. Students play there all the time.' },
        { title: 'Classical training', text: "It's one of the best-known music schools in the country, and its alumni show up in orchestras and jazz groups around the world." },
        { title: 'Cross-registration', text: 'Students can often take classes at nearby colleges, which helps if you want something outside music.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone practices all the time" is mostly true.',
      items: [
        { said: "Everyone practices constantly.", verdict: 'true', text: 'Practice rooms are busy early and late. Hours of practice are part of the deal.' },
        { said: "It's super competitive and cutthroat.", verdict: 'half', text: 'There is pressure, and spots in ensembles matter. Many students say the community is supportive though.' },
        { said: "It's only for classical musicians.", verdict: 'myth', text: 'Classical is the core, but jazz, contemporary improvisation and other programs are big too.' },
        { said: "You can't have a normal social life.", verdict: 'half', text: 'Your time is tight, but people find friends, hang out and explore Boston.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is a music school. Cost and career odds are real questions.',
      myths: [
        { title: "It's a regular college with a music major.", text: 'It is a conservatory. Music comes first, and academics are in support of it.' },
        { title: 'A degree here guarantees a music job.', text: 'It helps with training and connections. Music jobs are still hard to land.' }
      ],
      know: [
        { title: 'Prepare your audition early.', text: 'Auditions have specific repertoire requirements. Check what yours needs well in advance.' },
        { title: 'Scholarships matter.', text: 'Many students get significant aid. Ask about it when you apply.' },
        { title: "You don't need a car.", text: 'The T and walking get you around.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if music is your life. Rough if you are unsure.',
      love: ['You want to be around serious musicians', 'You love performing a lot', 'You are fine with a small, quiet campus'],
      struggle: ['You want a regular college experience', 'You are not sure music is your path', 'You want sports and school spirit']
    },

    people: {
      preview: 'Talent and training win. Pressure and a narrow focus are the complaints.',
      plus: ['Surrounded by incredibly talented peers', 'Concerts and performing opportunities', 'Great Boston location'],
      minus: ['Pressure can be intense', 'Narrow focus on music', 'Little campus life outside music']
    }
  }
});
