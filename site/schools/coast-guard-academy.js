registerSchool({
  id: 'coast-guard-academy',
  name: 'Coast Guard',
  nameSub: 'Academy',
  title: 'US Coast Guard Academy',
  state: 'Connecticut',
  location: 'New London, CT · On the Thames River',
  asOf: '2026',

  colors: {
    name: 'Bears · Blue and orange',
    swatches: ['#223C70', '#F2531B'],
    band: '#F2531B',
    onBand: '#0B1F3A',
    onBandMuted: '#3A1205',
    stripe: '#223C70',
    accent: '#223C70',
    accentOnDark: '#F58A4B'
  },

  vibe: "A military service academy, not a normal college. You wear a uniform, follow a strict schedule, graduate as an officer and owe the Coast Guard time after. Tuition is free, and so is the trade-off.",
  flags: ['Military school', 'Free tuition', 'Service required', 'Strict schedule'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Cadets', value: '~1,000' },
    { label: 'Getting in', value: 'Very selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Cadets live in barracks and eat together, all covered by the academy.", "housing": ["Cadets live in barracks on campus.", "The academy covers housing.", "Life is structured, and rooms are shared or tightly managed."], "food": ["Cadets eat together in a central dining hall.", "Meals are covered by the academy.", "Free time off campus is limited, so most food is what the academy serves."]},
    vibe: {
      preview: 'Structured, disciplined, close-knit, service first',
      meters: {
        party:    { value: 1, note: 'Rules are strict and time off is limited' },
        campus:   { value: 6, note: 'Small waterfront campus' },
        spirit:   { value: 5, note: 'Cadets show up for teams and the regiment' },
        pressure: { value: 9, note: 'Academics, military duties and physical standards' },
        career:   { value: 9, note: 'You graduate with a job as an officer' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 2, note: 'Not a religious school' }
      }
    },

    social: {
      preview: 'Your company is your world. Free time is limited and scheduled.',
      paragraphs: [
        "Cadets live in one building and are organized into companies. Your classmates become your friends because you do almost everything together, from training to meals.",
        "There are clubs and sports, but time is tight. Weekends and leave depend on your year and your standing, and first-years have the fewest privileges.",
        "There is no party scene like a normal college. Cadets say the bond is strong, but that you give up a lot of freedom."
      ]
    },

    gettingIn: {
      preview: 'Very selective. No congressional nomination needed.',
      points: [
        { title: "It's very hard to get into.", text: 'Strong grades, test scores, leadership and fitness all matter.' },
        { title: 'No nomination needed.', text: "Unlike other service academies, you don't need a congressional nomination." },
        { title: 'You owe service.', text: 'Graduates are commissioned as officers and owe years of active-duty service after graduation.' },
        { title: 'Swab Summer comes first.', text: 'New cadets go through a tough basic training before classes start.' }
      ]
    },

    who: {
      preview: 'Disciplined, athletic, service-minded and good with structure',
      paragraphs: [
        "People who want a challenge, a career in service and a direct path to an officer job. Many cadets are into engineering, science, management and the water.",
        "It fits people who handle structure well and want a team feel. If you want to choose your own schedule, this is the wrong place."
      ]
    },

    knownFor: {
      preview: 'Swab Summer, the tall ship Eagle and free tuition',
      points: [
        { title: 'Swab Summer', text: 'A tough seven-week basic training that new cadets go through before the school year.' },
        { title: 'The Eagle', text: 'The academy has a tall ship, the Eagle, that cadets train on.' },
        { title: 'Free education', text: 'There is no tuition. You pay with your service after graduation.' },
        { title: 'Smaller service academy', text: 'It is the smallest of the federal service academies, so everyone knows each other.' }
      ]
    },

    stereotypes: {
      preview: '"Easier than Annapolis" is a myth. "Strict" is true.',
      items: [
        { said: "It's the easy service academy.", verdict: 'myth', text: "It's smaller and has a different mission, but cadets still face tough academics and training." },
        { said: "It's super strict.", verdict: 'true', text: "Your day is scheduled, your room is inspected and your freedom is limited, especially as a first-year." },
        { said: "Everyone ends up on a boat.", verdict: 'half', text: "Many go to sea first, but some go to aviation or shore jobs. It depends on your performance and the needs of the service." },
        { said: "It's all military, no college life.", verdict: 'half', text: "You still have classes, clubs and sports, but the military side comes first." }
      ]
    },

    mythsAndKnow: {
      preview: 'You owe service. Freedom is limited. Think about it hard.',
      myths: [
        { title: 'You need a congressional nomination.', text: 'You do not. Admission is based on your application.' },
        { title: 'It is free so it is easy.', text: 'It costs you flexibility and years of service.' }
      ],
      know: [
        { title: 'Service is required.', text: 'After graduation, you serve as an officer for years.' },
        { title: 'Fitness matters.', text: 'You have to meet physical standards throughout.' },
        { title: 'Limited personal time.', text: 'Phones, leave and weekends are controlled, especially early on.' },
        { title: 'Talk to current cadets.', text: 'The academy has visit programs. Seeing it up close is worth it before you apply.' }
      ]
    },

    fit: {
      preview: 'Great if you want service and structure. Rough if you want freedom.',
      love: ['You want a leadership career', 'You want free tuition and a guaranteed job', 'You like structure and teamwork', 'You like the water'],
      struggle: ['You want a normal college social life', 'You do not like strict rules', 'You are not sure you want a military career']
    },

    people: {
      preview: 'Purpose and bonds win. Lack of freedom is the complaint.',
      plus: ['No tuition and a job after graduation', 'Strong bonds with classmates', 'Real leadership training'],
      minus: ['Very little free time', 'You owe years of service', 'Strict rules and little privacy']
    }
  }
});
