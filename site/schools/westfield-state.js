registerSchool({
  id: 'westfield-state',
  name: 'Westfield State',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Westfield, MA · Western Mass, near Springfield',
  asOf: '2026',

  colors: {
    name: 'Owls · Blue and white',
    swatches: ['#012169', '#33BBED', '#FFFFFF'],
    band: '#012169',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C4E0',
    stripe: '#33BBED',
    accent: '#1C6FB0',
    accentOnDark: '#33BBED'
  },

  vibe: "A mid-size state school in a small western Mass city, full of future cops, teachers and business majors. It's affordable and social, with a reputation for partying that's a bit bigger than the reality.",
  flags: ['Criminal justice hub', 'Western Mass', 'Party rep', 'Affordable'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~3,800' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Little to none' }
  ],

  sections: {
    vibe: {
      preview: 'Social, practical, laid back, louder rep than reality',
      meters: {
        party:    { value: 6, note: 'Off-campus house parties, bars downtown' },
        campus:   { value: 7, note: 'Real campus with room to spread out' },
        spirit:   { value: 4, note: 'Football draws the biggest crowds' },
        pressure: { value: 3, note: 'Relaxed, not competitive' },
        career:   { value: 6, note: 'Strong pipelines into policing and teaching' },
        greek:    { value: 1, note: 'Not part of campus life' },
        religion: { value: 1, note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Dorms and house parties. Quieter than the rumors say.',
      paragraphs: [
        'Freshman year is mostly dorm life on a real campus with green space and hills around it. Friend groups come from your floor, your team and your major, and criminal justice classes are big enough to feel like their own little world.',
        "Weekend social life happens at off-campus houses and apartments and at bars in downtown Westfield. Students describe it as fine, not wild. Some years there has been tension with neighbors over noise and late-night crowds downtown.",
        "Plenty of students are from Massachusetts and go home some weekends. Springfield is close, and the college towns of Northampton and Amherst are a short drive, which helps if you have a car."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. Steady grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Some majors have extra steps.', text: 'Programs like nursing can have their own requirements and limited spots. Check the program page early.' }
      ]
    },

    who: {
      preview: 'Mass kids, future cops and teachers, lots of athletes',
      paragraphs: [
        "Mostly students from Massachusetts, many from the middle and western part of the state. A big chunk want to go into law enforcement, corrections or teaching. Business, psychology, nursing and communications are popular too.",
        'People tend to be easygoing and practical. It fits someone who wants a normal college experience and a useful degree without paying private school prices.'
      ]
    },

    knownFor: {
      preview: 'Criminal justice, teacher training and a party reputation',
      points: [
        { title: 'Criminal justice', text: "It started the first criminal justice program in New England back in 1968. It's one of the most popular majors here, and the school runs a big criminal justice career fair every year." },
        { title: 'Teacher training', text: 'It was founded in 1839 by Horace Mann as a teachers school and says it was the first public coed college in the country. Education is still a major draw.' },
        { title: 'The party reputation', text: 'Around Massachusetts it has a name as a party school. Students say it\'s more about off-campus weekends than anything nonstop.' }
      ]
    },

    stereotypes: {
      preview: '"Party school" is half true. "Everyone\'s a future cop" is half true too.',
      items: [
        { said: "It's a party school.", verdict: 'half', text: "There's a real off-campus party scene and downtown bars. It's not nonstop, and plenty of students say weekends feel pretty normal." },
        { said: "Everyone's going to be a cop.", verdict: 'half', text: 'Criminal justice is huge here, so you will meet a lot of future officers. Education, business and nursing students are a big part of campus too.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: 'A lot of in-state students head home sometimes. Enough stay that campus does not empty out.' },
        { said: "It's in the middle of nowhere.", verdict: 'myth', text: "Westfield is a small city with a downtown, and Springfield, Northampton and Amherst are all close. It's far from Boston, not far from everything." }
      ]
    },

    mythsAndKnow: {
      preview: 'Bring a car if you can. Boston is two hours away.',
      myths: [
        { title: 'Party rep means easy classes.', text: 'Admission is open to a lot of people, but you still have to show up. Small classes mean professors notice who skips.' },
        { title: "It's basically UMass.", text: "It's a much smaller state university with smaller classes and a closer-knit campus. Different feel entirely." }
      ],
      know: [
        { title: 'A car helps a lot.', text: 'There are buses, but getting to Springfield, Northampton or home is way easier if you drive.' },
        { title: 'Boston is far.', text: "It's about two hours east. If you want Boston internships and weekends, this is not the spot." },
        { title: 'Off-campus behavior gets noticed.', text: 'Westfield is a real town with neighbors. Loud parties and late-night downtown crowds have caused friction before.' },
        { title: 'Look at net price, not sticker price.', text: "In-state cost is low to begin with, and state aid can bring it down more. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for criminal justice and a social, affordable campus. Rough if you want Boston.',
      love: ['You want to go into criminal justice or teaching', 'You want a real campus at a state school price', 'You want a social scene without huge-school size', 'You like western Mass and the outdoors'],
      struggle: ['You want a big city nearby', "You don't have a car and hate being stuck", 'You want a competitive academic crowd']
    },

    people: {
      preview: 'Friendly and affordable. Location and town relations are the complaints.',
      plus: ['Strong criminal justice program and connections', 'Friendly, easygoing students', 'Affordable for in-state students'],
      minus: ['Far from Boston', 'Hard to get around without a car', 'Some tension between students and the town']
    }
  }
});
