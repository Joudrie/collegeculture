registerSchool({
  id: 'keene-state',
  name: 'Keene State',
  nameSub: 'College',
  state: 'New Hampshire',
  location: 'Keene, NH · Steps from downtown',
  asOf: '2026',

  colors: {
    name: 'Owls · Red and white',
    swatches: ['#CE1126', '#FFFFFF', '#8F0022'],
    band: '#CE1126',
    onBand: '#FFFFFF',
    onBandMuted: '#FFE4E6',
    stripe: '#D9D9D6',
    accent: '#CE1126',
    accentOnDark: '#FF7A85'
  },

  vibe: "A small state college right next to a cute New England downtown. It's social, casual and easy to get into, and it still carries a party reputation from a riot that happened over a decade ago.",
  flags: ['Small campus', 'Walk to downtown', 'Party rep', 'Easy to get in'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~2,700' },
    { label: 'Getting in', value: 'Easy' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Small town, no train; a car really helps", "points": ["Keene has limited public transit and no train service to speak of.", "Manchester airport and Boston Logan are the main airport options, both a drive away.", "A car helps a lot here. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small town school; most first-years live on campus, food is okay.", "housing": ["First-years mostly live on campus in traditional dorms.", "Upperclassmen often move to apartments or houses in Keene.", "The campus is close to a small downtown, so living nearby is easy."], "food": ["There is a main dining hall, and students call the food okay.", "Residents usually need a meal plan.", "Downtown Keene has local restaurants and cafes within walking distance."]},
    vibe: {
      preview: 'Small, social and laid back, with a real downtown next door',
      meters: {
        party:    { value: 6, note: 'Off-campus parties, calmer than the old rep' },
        campus:   { value: 7, note: 'Pretty, compact, right by Main Street' },
        spirit:   { value: 4, note: 'No football, small but loyal crowds' },
        pressure: { value: 3, note: 'Relaxed, depends on the major' },
        career:   { value: 6, note: 'Teaching and safety majors lead to jobs' },
        greek:    { value: 2, note: 'A few chapters, under one in ten students' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and friendly. Downtown helps. Some people go home on weekends.',
      paragraphs: [
        "It's a small school, so you start knowing a lot of people fast. Friend groups come from your dorm, teams and clubs. Students describe it as friendly and relaxed.",
        "The best part is downtown Keene, a short walk from campus. Main Street has coffee shops, restaurants, a movie theater and events, so you're not stuck on campus.",
        "Partying mostly happens at off-campus houses. Since a lot of students are from New Hampshire and Massachusetts, some go home on weekends, which can make Sundays feel quiet."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Tests are optional.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. Solid grades in normal classes are usually enough.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores for most majors. Nursing and honors have had different rules, so check the current policy." },
        { title: 'Grades matter most.', text: 'Your high school GPA and the classes you took are the main things they look at.' }
      ]
    },

    who: {
      preview: 'Mostly New England kids who want small and casual',
      paragraphs: [
        "Most students come from New Hampshire, Massachusetts and the rest of New England. It's a casual, down-to-earth crowd, and a lot of people chose it because it's small and close to home.",
        "Big areas include education, safety and occupational health, psychology, film and business. You'll find future teachers, future safety managers and plenty of people still figuring it out."
      ]
    },

    knownFor: {
      preview: 'Pumpkin Fest, teaching, safety studies and a great downtown',
      points: [
        { title: 'Pumpkin Fest 2014', text: "Parties near campus during the city's pumpkin festival turned into a riot with arrests and injuries. It's still the first thing some people think of. The festival has since come back in a much smaller, family-focused form." },
        { title: 'Teaching', text: 'Keene started as a school for training teachers, and education is still one of its main programs.' },
        { title: 'Safety studies', text: "Its safety and occupational health major is one of the biggest on campus and pretty rare. It trains people to keep workplaces safe, and it leads to real jobs." },
        { title: 'Holocaust and genocide studies', text: 'Keene was one of the first colleges in the country to offer an undergrad major in it.' }
      ]
    },

    stereotypes: {
      preview: '"Riot school" is outdated. "Easy to get into" is true.',
      items: [
        { said: "It's the Pumpkin Fest riot school.", verdict: 'outdated', text: "That was 2014. The school and city cracked down hard after, and current students had nothing to do with it." },
        { said: "It's a party school.", verdict: 'half', text: "There are off-campus parties most weekends. It's a small school, though, and plenty of people skip that scene." },
        { said: 'Anyone can get in.', verdict: 'true', text: "Admission is easy. What you get out of it depends on what you put in." },
        { said: "There's nothing to do in Keene.", verdict: 'myth', text: "For a small city, downtown is pretty lively. It's not Boston, but there's more going on than people expect." }
      ]
    },

    mythsAndKnow: {
      preview: 'Downtown is a plus. Budgets are tight, so check your major.',
      myths: [
        { title: 'Keene is still out of control.', text: 'The 2014 riot was a one-time mess. Today the town and campus are calm and pretty safe.' },
        { title: 'Small school means no real majors.', text: "It's small, but programs like safety studies and education are well known and lead to jobs." }
      ],
      know: [
        { title: 'Check your major is stable.', text: "New Hampshire cut state college funding, and Keene has had layoffs. Ask how your program is doing before you commit." },
        { title: 'You can mostly walk.', text: 'Campus and downtown are close together. A car helps for trips home or to the mountains, but you can get by without one.' },
        { title: "There's no football team.", text: 'If big game days matter to you, this is not the place. Basketball and soccer are the main draws.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and walkable. Rough if you want big-time anything.',
      love: ['You want a small school where people know you', 'You want a real downtown within walking distance', 'You want to teach or work in safety', 'You want something low pressure'],
      struggle: ['You want big sports or a big-school feel', 'You want a big city', "You want a school name people know for academics"]
    },

    people: {
      preview: 'Downtown and the friendly vibe are the wins. Size and the old rep are the complaints.',
      plus: ['Downtown Keene is a short walk away', 'Small classes and professors who know you', 'Friendly, relaxed people'],
      minus: ['People still bring up Pumpkin Fest', 'Weekends can get quiet', 'Budget cuts have people worried about programs']
    }
  }
});
