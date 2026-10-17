registerSchool({
  id: 'nichols',
  name: 'Nichols',
  nameSub: 'College',
  title: 'Nichols College',
  state: 'Massachusetts',
  location: 'Dudley, MA · Near the CT border',
  asOf: '2026',

  colors: {
    name: 'Bison · Green and black',
    swatches: ['#115740', '#000000', '#FFFFFF'],
    band: '#115740',
    onBand: '#FFFFFF',
    onBandMuted: '#C3D9CD',
    stripe: '#0B0B0B',
    accent: '#115740',
    accentOnDark: '#8ABF42'
  },

  vibe: "A small business college on a hill in rural Dudley, near the Connecticut line. It's career-focused, sporty and quiet, and almost everyone is here to get a job in business or sports.",
  flags: ['Business college', 'Rural campus', 'Lots of athletes', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~1,100' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Basically none' }
  ],

  sections: {
    "getThere": {"preview": "Small town; plan on a car or rides", "points": ["Dudley is a small town and public transit is limited.", "Worcester, Boston Logan and T.F. Green are the usual airport options.", "A car helps. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small residential campus; food is limited and the area is quiet.", "housing": ["Most students live on campus.", "Housing is mostly dorms and suites in a small, close community.", "Dudley is a small town, so there is little to rent nearby."], "food": ["There is one main dining hall and a few small spots.", "Residents typically need a meal plan, and variety can get repetitive.", "Off-campus food is mostly a short drive away."]},
    vibe: {
      preview: 'Business-minded, athletic, small and quiet',
      meters: {
        party:    { value: 3, note: 'Small parties, rare big ones' },
        campus:   { value: 6, note: 'Quiet hilltop, can feel isolated' },
        spirit:   { value: 5, note: 'Athletes are a big part of campus' },
        pressure: { value: 4, note: 'Manageable, practical classes' },
        career:   { value: 9, note: 'Career prep built into every year' },
        greek:    { value: 0, note: 'Not part of the scene' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Teams run the social scene. Weekends are quiet.',
      paragraphs: [
        "It's a small campus, so you know a lot of people quickly. Sports teams are the center of social life, and students say friend groups can feel cliquey if you're not an athlete.",
        "The party scene is small. Many students go home on weekends, and reviews say there isn't much to do on campus on a Saturday night. Homecoming and Spring Weekend are the big events.",
        "Dudley is rural. Worcester is about half an hour away, and Boston, Providence and Hartford are all reachable by car, but you'll want a ride."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Ask about merit aid.', text: "It's a private college, and scholarships are common. The sticker price is not what most people pay." }
      ]
    },

    who: {
      preview: 'Future business people, sport management majors and athletes',
      paragraphs: [
        "Mostly students from Massachusetts, Connecticut and the rest of New England. A big share play a varsity sport. Business, sport management, accounting, finance and criminal justice are the popular paths.",
        "People are practical and career-minded. It fits students who know they want business or sports and want a small school that pushes them toward a job."
      ]
    },

    knownFor: {
      preview: 'Business school, sport management and job prep',
      points: [
        { title: 'A business college', text: 'Nichols calls itself a business and leadership college, and the business school is accredited by AACSB, which only a small share of business schools worldwide have.' },
        { title: 'Professional Development Seminar', text: 'A required three-year program on things like resumes, internships, interviewing and networking. It starts freshman year.' },
        { title: 'Sport management', text: "One of the biggest majors. It's a natural fit for a campus full of athletes." },
        { title: 'Old school roots', text: 'It traces back to Nichols Academy, founded in Dudley in 1815.' }
      ]
    },

    stereotypes: {
      preview: '"Jock school" is half true. "Nothing to do" is mostly true.',
      items: [
        { said: "It's a jock school.", verdict: 'half', text: "A lot of students are athletes, and teams shape the social scene. Non-athletes say it can feel cliquey, but they do find their people." },
        { said: "There's nothing to do.", verdict: 'true', text: "Dudley is rural, and weekends on campus are quiet. People with cars go to Worcester or further." },
        { said: "It's only business.", verdict: 'half', text: 'Business is the core, but there are also majors like criminal justice, psychology and education. Most people still lean business.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: 'A lot of students do, since many live within driving distance. Athletes in season tend to stick around.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring a car if you can. The career stuff is required.',
      myths: [
        { title: 'Small school means no opportunities.', text: 'The school builds career prep into every year, and it reports strong job placement for grads. You still have to use it.' },
        { title: 'Easy to get in means easy classes.', text: 'Classes are small and professors notice who shows up and who does the work.' }
      ],
      know: [
        { title: 'A car helps a lot.', text: "It's rural. Getting to stores, Worcester or anywhere fun is much easier if you drive." },
        { title: 'The seminar is mandatory.', text: 'Professional Development Seminar is part of your schedule for three years, not an extra.' },
        { title: 'Join a team or a club early.', text: "Teams are where most friend groups form. If you don't play a sport, clubs are your way in." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want business and sports. Rough if you want a social scene.',
      love: ['You know you want business or sport management', 'You play a sport and want to keep playing', 'You want small classes and lots of career help', 'You like a quiet, rural campus'],
      struggle: ['You want a big party scene', 'You want a city nearby without driving', "You're not sure what you want to study"]
    },

    people: {
      preview: 'Career prep and small classes win. Isolation and weekends are the complaints.',
      plus: ['Career prep is built in', 'Small classes and approachable professors', 'Close community, especially on teams'],
      minus: ['Feels isolated without a car', 'Quiet weekends', 'Can feel cliquey for non-athletes']
    }
  }
});
