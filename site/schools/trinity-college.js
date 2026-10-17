registerSchool({
  id: 'trinity-college',
  name: 'Trinity',
  nameSub: 'College, Hartford',
  state: 'Connecticut',
  location: 'Hartford, CT · South of downtown',
  asOf: '2026',

  colors: {
    name: 'Bantams · Blue and gold',
    swatches: ['#003057', '#FFCD00', '#866D4B'],
    band: '#003057',
    onBand: '#FFFFFF',
    onBandMuted: '#BFC8D3',
    stripe: '#866D4B',
    accent: '#003057',
    accentOnDark: '#FFCD00'
  },

  vibe: "A small, old-school liberal arts college with a gorgeous Gothic campus, set inside a city that's had a rough few decades. Social life is close-knit, sporty and a bit preppy, and what you do with Hartford is up to you.",
  flags: ['Small school', 'Preppy reputation', 'Greek life exists', 'Real city outside'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~2,200' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Squash' },
    { label: 'Greek life', value: 'Medium' }
  ],

  sections: {
    "getThere": {"preview": "City buses in Hartford; Bradley Airport is close", "points": ["CT Transit buses run through Hartford, and Amtrak and CTrail stop at Union Station downtown.", "Bradley International Airport is the closest major airport.", "A car is useful for getting around Hartford. Check the school's rules on first-year cars."]},
    "living": {"preview": "Mostly residential, most people live on campus; Hartford is nearby", "housing": ["Most students live on campus for most of their time here.", "Housing includes traditional dorms and some apartment-style options.", "Campus is small, so everything is close."], "food": ["There is a main dining hall, and students say it's fine.", "Meal plans are normal for residents.", "Hartford has food nearby, but students often get a ride."]},
    vibe: {
      preview: 'Small, social, athletic and a little preppy',
      meters: {
        party:    { value: 7, note: 'Frats, sports teams and Vernon Street on weekends' },
        campus:   { value: 8, note: 'The Long Walk is one of the prettiest spots in New England' },
        spirit:   { value: 5, note: 'Small crowds, loyal ones, big for squash and football' },
        pressure: { value: 6, note: 'Real work, small classes, hard to hide' },
        career:   { value: 7, note: 'Strong alumni network, lots of finance' },
        greek:    { value: 5, note: 'Around a fifth of students join' },
        religion: { value: 2, note: 'Episcopal roots, secular today, chapel still central' }
      }
    },

    social: {
      preview: 'Everyone knows everyone. Weekends center on campus parties.',
      paragraphs: [
        "With around 2,200 students, you'll know a lot of faces fast. Most people live on campus all four years, so the social scene stays on campus too. Sports teams, Greek organizations and friend groups from freshman year are the main hubs.",
        "Weekends lean social. Fraternities, sororities, co-ed societies and team houses throw a lot of the parties, and Vernon Street is where much of it happens. If you don't drink or don't want that scene, people say you'll need to look a little harder, but clubs and smaller groups are there.",
        "Hartford has music venues, restaurants and the riverfront, plus internships at the state capitol and insurance companies. A lot of students stay on campus anyway. The ones who get out into the city tend to say it was worth it."
      ]
    },

    gettingIn: {
      preview: 'Selective. Tests are optional. Early decision helps.',
      points: [
        { title: "It's selective.", text: 'Most applicants are turned down. Good grades in hard classes matter most.' },
        { title: 'Tests are optional.', text: "You don't need SAT or ACT scores to apply. Check the current policy before you apply." },
        { title: 'Early decision can help.', text: "Like a lot of small New England colleges, it has early decision rounds. If it's your top pick, applying early can help." },
        { title: 'Ask about aid.', text: 'The sticker price is high. Financial aid can change that a lot, so run the numbers.' }
      ]
    },

    who: {
      preview: 'Athletes, preppy New Englanders and a growing mix of everyone else',
      paragraphs: [
        "There's a real crowd from New England and New York prep schools, and a lot of varsity athletes. That's the group outsiders picture. There's also a growing number of students from public schools, from abroad and on financial aid.",
        "Popular majors include economics, political science, history and the sciences. People who do well here tend to like small classes, a close campus and a social scene where you see the same people all the time."
      ]
    },

    knownFor: {
      preview: 'Squash, the Long Walk, and being a classic New England college',
      points: [
        { title: 'Squash', text: 'The men\'s squash team ran one of the longest winning streaks in college sports history. It is the school\'s signature team.' },
        { title: 'The Long Walk', text: 'A row of Collegiate Gothic buildings facing a huge green quad. It looks like a movie set for "old New England college."' },
        { title: 'A college in a capital city', text: "It's in Hartford, the state capital. That means internships in government, insurance and nonprofits, plus community work that a rural campus can't offer." },
        { title: 'NESCAC', text: "It plays in the same athletic conference as Williams, Amherst and Middlebury, and gets compared to them a lot." }
      ]
    },

    stereotypes: {
      preview: '"Preppy and rich" is half true. "Unsafe campus" is mostly a myth.',
      items: [
        { said: "Everyone's rich and preppy.", verdict: 'half', text: "There's a visible preppy crowd, and that reputation is earned. But plenty of students are on aid and don't fit the image at all." },
        { said: 'Greek life runs everything.', verdict: 'half', text: "About a fifth of students join, and their parties are a big part of weekends. You don't have to join to have a social life." },
        { said: "The campus isn't safe.", verdict: 'myth', text: "Campus has its own security and feels like a typical college campus. The surrounding neighborhood has real economic challenges, so use the same common sense you would in any city." },
        { said: "It's a party school.", verdict: 'half', text: 'Weekends are social and drinking is common. Weekdays, people work hard in small classes where professors notice if you slack.' }
      ]
    },

    mythsAndKnow: {
      preview: "Hartford is more than its reputation. It's a small bubble, for better and worse.",
      myths: [
        { title: "There's nothing to do in Hartford.", text: "There are museums, music, restaurants and a lot of internship options. Students who look for it usually find more than they expected." },
        { title: "It's only for prep school kids.", text: "That crowd is visible, but the student body is more mixed than the stereotype, and the school is working to widen it." }
      ],
      know: [
        { title: "It's a bubble.", text: 'Most people live and party on campus. Great if you like that, tough if you want variety.' },
        { title: 'A car helps.', text: "Hartford has buses and a train station, but getting around the region and to Boston or New York is easier if you drive." },
        { title: 'Professors know you.', text: 'Classes are small. You get real attention, and skipping gets noticed.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and social. Rough if you want a big, varied scene.',
      love: ['You want a small school with a classic campus', 'You play a sport or want a social, athletic crowd', 'You want internships in a real city', 'You like knowing everyone'],
      struggle: ["You don't want Greek life or a drinking scene anywhere near you", 'You want a big school with lots of different scenes', 'You want a college town feel right outside the gates']
    },

    people: {
      preview: 'The campus and close community win. The bubble and the scene split people.',
      plus: ['The campus is beautiful', 'Small classes and professors who know you', 'Strong alumni network'],
      minus: ['The social scene can feel narrow', 'Gap between campus and the city around it', 'Expensive without good aid']
    }
  }
});
