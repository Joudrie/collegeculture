registerSchool({
  id: 'uconn',
  name: 'UConn',
  nameSub: 'Storrs',
  state: 'Connecticut',
  location: 'Storrs, CT · Rural, quiet corner of the state',
  asOf: '2026',

  colors: {
    name: 'Huskies · Navy and white',
    swatches: ['#000E2F', '#FFFFFF', '#7C878E'],
    band: '#000E2F',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C2D6',
    stripe: '#7C878E',
    accent: '#013ECD',
    accentOnDark: '#7FA7FF'
  },

  vibe: "A big state school dropped into farm country, where basketball is basically a religion. Campus is its own little world, so most of your life happens right there.",
  flags: ['Rural campus', 'Basketball school', 'Bring a car if you can', 'Mostly in-state'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~21,000' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "getThere": {"preview": "Storrs is rural; buses help, but a car makes life easier", "points": ["Storrs is out in the country, with no train. Buses connect campus to nearby towns and Hartford.", "Bradley International near Hartford is the closest major airport.", "A car helps for off-campus trips. Check the school's rules on first-year cars."]},
    "living": {"preview": "Big campus, lots of living options; dining is well liked.", "housing": ["Many first-years live on campus in traditional dorms.", "Upperclassmen often choose apartments or move off campus around Storrs.", "Storrs is rural, so most people live close to campus."], "food": ["There are many dining halls, and people often say UConn dining is a highlight.", "Residents usually need a meal plan.", "Off-campus food near Storrs is limited, so a car or the campus bus helps."]},
    vibe: {
      preview: 'Huge school spirit, solid party scene, middle of nowhere',
      meters: {
        party:    { value: 6,  note: 'Dorms and off-campus apartments' },
        campus:   { value: 8,  note: 'Big, classic campus with farm views' },
        spirit:   { value: 10, note: 'Basketball runs the winter' },
        pressure: { value: 5,  note: 'Depends a lot on your major' },
        career:   { value: 6,  note: 'Strong in-state network' },
        greek:    { value: 3,  note: 'There if you want it, not the center' },
        religion: { value: 1,  note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Campus is the whole scene. Basketball nights are the peak.',
      paragraphs: [
        "There's not much in Storrs besides the school, so campus is where everything happens. Freshman dorms are social, and upperclassmen move into apartment complexes nearby where a lot of the partying happens.",
        "Basketball season is the high point. Students line up for games at Gampel Pavilion, and when the teams make deep tournament runs, the whole campus goes out to celebrate.",
        "Downtown Storrs, right next to campus, has restaurants and a few places to hang out, but it's small. Some students head home on weekends since most of them live in Connecticut, so Friday nights can feel quieter than you'd expect for a school this size."
      ]
    },

    gettingIn: {
      preview: 'Selective, and harder than it used to be. Tests are optional for now.',
      points: [
        { title: "It's selective.", text: 'About half of applicants get into the Storrs campus. Strong grades in hard classes matter most.' },
        { title: 'Tests are optional for now.', text: 'UConn has been test-optional, with the current pilot running through the fall 2026 cycle. Check the policy for your year before you apply.' },
        { title: 'Regional campuses are a real path in.', text: 'Some students start at a branch campus like Stamford or Waterbury, then switch to Storrs later. Check how that process works if you get that offer.' },
        { title: 'In-state is a big advantage on cost.', text: "Connecticut residents pay a lot less. Out-of-state tuition is much higher, so compare it to your own state school." }
      ]
    },

    who: {
      preview: 'Mostly Connecticut kids, sports fans, lots of nursing and business',
      paragraphs: [
        "Most students are from Connecticut, with plenty from New York, New Jersey and Massachusetts too. You'll probably run into people from your high school.",
        "Popular majors include nursing, business, engineering, psychology and health sciences. People are mostly down to earth and friendly. It's a big public school, so you can find almost any type of person if you look."
      ]
    },

    knownFor: {
      preview: 'Basketball titles, the Dairy Bar, and a huge farm-country campus',
      points: [
        { title: 'Basketball', text: 'The men won back-to-back national titles in 2023 and 2024 and made the title game again in 2026. The women have won more national titles than any other program, including 2025.' },
        { title: 'The Dairy Bar', text: "UConn has real cows, and the Dairy Bar on campus sells ice cream made from their milk. It's a must-do for students and visiting families." },
        { title: 'A big rural campus', text: 'Storrs is surrounded by farms and woods. It feels like a small town that happens to be a university.' },
        { title: 'Jonathan the Husky', text: "The mascot is a real husky named Jonathan. There's been a long line of them." }
      ]
    },

    stereotypes: {
      preview: '"Middle of nowhere" is true. "Party school" is mostly outdated.',
      items: [
        { said: 'Storrs is in the middle of nowhere.', verdict: 'true', text: "It really is rural. Hartford is about 30 minutes away, and Boston and New York are a couple of hours or more. Students joke about the cow smell, and they're not wrong." },
        { said: 'Everyone only cares about basketball.', verdict: 'half', text: "Basketball is a huge part of the culture, especially in winter. But plenty of students rarely go to games and nobody cares." },
        { said: "It's a wild party school.", verdict: 'outdated', text: 'That rep comes from the old Spring Weekend, which the school cracked down on after 2010. There are still parties, but it is not the chaos people remember.' },
        { said: "It's everyone's backup school.", verdict: 'half', text: "Lots of Connecticut kids apply as a safety, but it has gotten harder to get into. Don't assume you're in." }
      ]
    },

    mythsAndKnow: {
      preview: 'A car helps, weekends can be quiet, and in-state is a deal',
      myths: [
        { title: 'Big school means nothing gets personal.', text: 'Intro classes can be huge, but smaller programs and the honors program make it feel smaller. Clubs help a lot too.' },
        { title: "There's nothing to do.", text: "There's nothing to do in town, but campus has a ton of clubs, events and games. You have to look for it." }
      ],
      know: [
        { title: 'A car helps a lot.', text: "There are buses around campus and some to nearby towns, but getting anywhere bigger is much easier if you drive." },
        { title: 'Basketball tickets are a thing.', text: 'Student tickets for big games go fast. Learn how the system works early if you want in.' },
        { title: 'Weekends depend on who you know.', text: "Some in-state kids go home a lot. Join clubs or teams early so you're not stuck in an empty dorm." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want big school spirit. Rough if you need a city.',
      love: ['You want huge game-day energy', 'You want a classic big campus', "You're from Connecticut and want a strong school at in-state cost", 'You want lots of majors to choose from'],
      struggle: ['You want a city right outside your door', "You don't have a car and hate feeling stuck", 'You want a tiny school where everyone knows you']
    },

    people: {
      preview: 'Spirit and value are the pluses. Location is the big complaint.',
      plus: ['Basketball and school spirit are unmatched in New England', 'Good value for Connecticut residents', 'The campus is big and pretty'],
      minus: ['Storrs is isolated with not much in town', 'Some weekends feel empty', 'Big intro classes can feel impersonal']
    }
  }
});
