registerSchool({
  id: 'elms',
  name: 'Elms',
  nameSub: 'College',
  title: 'Elms College',
  state: 'Massachusetts',
  location: 'Chicopee, MA · Next to Springfield',
  asOf: '2026',

  colors: {
    name: 'Blazers · Green and gold',
    swatches: ['#004731', '#C3A250'],
    band: '#004731',
    onBand: '#FFFFFF',
    onBandMuted: '#C9D8CF',
    stripe: '#C3A250',
    accent: '#004731',
    accentOnDark: '#C3A250'
  },

  vibe: "A tiny Catholic college where a lot of people are there to become nurses, teachers or social workers. It's quiet, friendly and focused on getting you into a job, not on throwing parties.",
  flags: ['Very small', 'Nursing heavy', 'Lots of commuters', 'Catholic roots'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~1,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Small and fairly quiet; many students commute, food is basic.", "housing": ["The school is small, and a good share of students commute.", "There is on-campus housing, mostly traditional dorms.", "Expect a quiet campus compared with a big residential school."], "food": ["There is a smaller dining setup, not a big variety.", "Students usually call the food okay.", "Chicopee and nearby Springfield have restaurants, but you will probably want a car."]},
    vibe: {
      preview: 'Small, quiet, career-focused, everyone knows everyone',
      meters: {
        party:    { value: 2, note: 'Small get-togethers, not a party school' },
        campus:   { value: 5, note: 'Compact campus in a residential area' },
        spirit:   { value: 3, note: 'Small crowds, mostly friends of players' },
        pressure: { value: 6, note: 'Nursing is demanding, other majors less so' },
        career:   { value: 8, note: 'Built around jobs like nursing and teaching' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 5, note: 'Catholic identity is visible, not forced' }
      }
    },

    social: {
      preview: 'Close-knit and calm. Commuters and weekends make it quieter.',
      paragraphs: [
        "With around a thousand undergrads, you will recognize most faces within a few weeks. Students describe it as close-knit and friendly. Friend groups form in the dorms, on teams and inside your major, especially nursing, where you spend a lot of time with the same people.",
        "A big share of students commute, and a lot of the people who live on campus are from nearby. That means weekends can get quiet. Campus runs events like movie nights and trips, but if you want a busy party scene, this is not it.",
        "Springfield is right next door, so there's more to do if you have a car: restaurants, the Basketball Hall of Fame, concerts and a casino downtown for when you're older. Boston is about an hour and a half east."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Apply any time.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Solid grades will usually get you in.' },
        { title: 'Applications are rolling.', text: "There's no single deadline, and you hear back fairly fast. If you want nursing, apply early and ask how getting into the major works." },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Almost everyone gets aid.', text: "Most students get financial aid or scholarships, so the sticker price is not what most families pay." }
      ]
    },

    who: {
      preview: 'Future nurses, teachers and social workers, mostly from nearby',
      paragraphs: [
        "Mostly students from western Massachusetts and nearby Connecticut. Plenty of them work part time while they're in school.",
        "The biggest group is nursing students, followed by people going into education, social work, psychology, biology and business. People tend to be practical and focused on a specific career rather than figuring it out as they go."
      ]
    },

    knownFor: {
      preview: 'Nursing, teaching and social work, at a small Catholic school',
      points: [
        { title: 'Nursing', text: "This is the program most people know Elms for. Students say it's well regarded locally and gives you real clinical experience, and it's also a lot of work." },
        { title: 'Education and social work', text: 'Two other big programs that lead straight to jobs, many of them in the local area.' },
        { title: 'Catholic roots', text: 'The college was founded by the Sisters of St. Joseph of Springfield. There is a chapel and Mass on campus, but you do not have to be Catholic to go here.' },
        { title: 'Small classes', text: 'Classes are small and professors know who you are. Students mention this more than anything else.' }
      ]
    },

    stereotypes: {
      preview: '"All nursing majors" is half true. "Girls\' school" is outdated.',
      items: [
        { said: "It's basically a nursing school.", verdict: 'half', text: "Nursing is the biggest and best-known program, and it shapes the whole place. There are other majors too, but you will meet a lot of future nurses." },
        { said: "It's still a women's college.", verdict: 'outdated', text: 'Elms started as a college for women and went coed decades ago. Most students are still women, but guys are a regular part of campus.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: "Lots of students commute or live close by, so weekends are quiet. Athletes and people from farther away do stick around." },
        { said: "Catholic means it's strict.", verdict: 'myth', text: "The Catholic side is part of the school's identity, but students from any background or none go here. Nobody is checking if you went to Mass." }
      ]
    },

    mythsAndKnow: {
      preview: 'Nursing takes over your life. A car makes everything easier.',
      myths: [
        { title: 'Small school means easy classes.', text: "Small classes mean you can't hide. Nursing in particular has tough science courses and clinicals, and students say it's a grind." },
        { title: "There's nothing around.", text: "Chicopee itself is quiet, but Springfield is minutes away and the rest of the Pioneer Valley is close by car." }
      ],
      know: [
        { title: 'Bring a car if you can.', text: 'Public transit around Chicopee is limited. Clinicals, jobs and weekend plans are much easier with your own ride.' },
        { title: 'Dorms and food are the main complaints.', text: 'Students say some dorms feel dated and the dining hall gets old fast.' },
        { title: 'Get involved to find your people.', text: "On a campus this small with lots of commuters, clubs and teams are how you avoid feeling isolated." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know you want nursing or teaching. Rough if you want a big scene.',
      love: ['You already know you want to be a nurse, teacher or social worker', 'You want professors who know your name', 'You want to stay close to home', 'You like a calm, small community'],
      struggle: ['You want a big party scene', "You want big-time sports and packed games", "You're not sure what you want to study yet"]
    },

    people: {
      preview: 'Small classes and strong nursing win. Quiet weekends and dorms are the complaints.',
      plus: ['Professors are approachable and actually help', 'Nursing and education lead to real jobs', 'Friendly, low drama community'],
      minus: ['Weekends can feel empty', 'Dorms and dining are the weak spots', 'Not much to do without a car']
    }
  }
});
