registerSchool({
  id: 'umass-lowell',
  name: 'UMass',
  nameSub: 'Lowell',
  state: 'Massachusetts',
  location: 'Lowell, MA · Old mill city on the Merrimack',
  asOf: '2026',

  colors: {
    name: 'River Hawks · Blue and red',
    swatches: ['#1257D1', '#C8102E', '#000000'],
    band: '#1257D1',
    onBand: '#FFFFFF',
    onBandMuted: '#D9E6FF',
    stripe: '#5ADBFF',
    accent: '#1257D1',
    accentOnDark: '#5ADBFF'
  },

  vibe: "A practical, hands-on state school in an old mill city. People come for engineering, nursing and business at a good price, and hockey nights are when the whole place shows up.",
  flags: ['Good value', 'Lots of commuters', 'Hockey town', 'Campus in 3 parts'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~12,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Hockey' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    vibe: {
      preview: 'Career-minded, low-key social scene, big on hockey',
      meters: {
        party:    { value: 4, note: 'House parties exist, not a party school' },
        campus:   { value: 4, note: 'Three campuses split by the river' },
        spirit:   { value: 6, note: 'Hockey games pack the Tsongas Center' },
        pressure: { value: 5, note: 'Engineering and nursing are tough' },
        career:   { value: 7, note: 'Co-ops and strong local hiring' },
        greek:    { value: 2, note: 'A few chapters, easy to ignore' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Fine if you live on campus and join things. Quiet if you commute.',
      paragraphs: [
        "A lot of students commute or go home on weekends, so the scene depends on where you live. Freshmen in the dorms say people leave doors open and it's easy to meet your floor. Commuters who leave right after class have a harder time.",
        "Hockey is the big social event. Games at the Tsongas Center, right by the East Campus dorms, draw a loud student section. Clubs, club sports and campus events fill in the rest. The party scene is small house parties, not a giant weekend culture.",
        "Lowell itself is a working city, not a college town. There are cheap restaurants, a downtown with some bars and coffee shops, and the commuter rail gets you to Boston in under an hour."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Some majors are harder.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Solid grades in a normal college prep schedule will usually do it.' },
        { title: 'Tests are optional.', text: "You can apply with or without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Your major matters.', text: 'Nursing and some engineering and science programs are more competitive than the school overall.' },
        { title: 'There is an honors college.', text: 'The Honors College adds smaller classes and honors housing for students who want more of a challenge.' }
      ]
    },

    who: {
      preview: 'Mostly Mass kids, lots of engineers, nurses and first-gen students',
      paragraphs: [
        "Almost everyone is from Massachusetts, a lot of them from the Merrimack Valley and southern New Hampshire area. Many are the first in their family to go to college, and plenty work part time.",
        "It fits people who are focused on getting a solid degree and a job without huge debt. The crowd leans toward engineering, computer science, nursing, health sciences and business, and it skews a bit more male because of all the engineers."
      ]
    },

    knownFor: {
      preview: 'Engineering, nursing, hockey and a good price',
      points: [
        { title: 'Engineering', text: "It started as Lowell's textile and tech school, and engineering is still the backbone. It's one of the few places in the country with a plastics engineering major." },
        { title: 'Nursing and health', text: 'Nursing is one of the most popular and competitive programs, with clinical placements at hospitals around the region.' },
        { title: 'Hockey', text: 'The River Hawks play Division I hockey in Hockey East and made the Frozen Four in 2013. Games are the best night out on campus.' },
        { title: 'Value', text: "In-state tuition is a fraction of private school prices, and the degree carries weight with employers around Boston." }
      ]
    },

    stereotypes: {
      preview: '"Commuter school" is half true. "Just a backup" is outdated.',
      items: [
        { said: "It's a commuter school.", verdict: 'half', text: "A lot of students do commute, and it shows on weekends. But thousands live on campus, and the dorms are where most friend groups start." },
        { said: "It's just a backup to UMass Amherst.", verdict: 'outdated', text: "Some people do end up here after Amherst, but plenty pick it first for engineering, nursing or the price. Nobody cares once you're there." },
        { said: "It's all engineering nerds.", verdict: 'half', text: "Engineering and STEM are a big part of the school. But business, nursing, criminal justice, music and the arts are here too." },
        { said: 'Lowell is sketchy.', verdict: 'half', text: "Like any city, some areas are rougher than others. Campus and downtown are fine with normal city sense. It's not the scary place some people make it sound like." }
      ]
    },

    mythsAndKnow: {
      preview: 'The campus is split in three. Shuttles are your friend.',
      myths: [
        { title: 'Cheap means a weak education.', text: 'The programs are solid, especially engineering and nursing, and local employers hire from here all the time.' },
        { title: "There's nothing to do.", text: "It's quieter than a big college town, but hockey, clubs and campus events keep people busy if you show up." }
      ],
      know: [
        { title: 'Campus is in three parts.', text: 'North, South and East campuses are spread across the city and the river. Free shuttles connect them, or you walk a lot.' },
        { title: 'Get hockey tickets early.', text: 'Student tickets for big games go fast. Students say hockey is the easiest way to feel school spirit.' },
        { title: 'Live on campus if you can.', text: 'Students who live in the dorms say the social life is much better than for those who commute.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for practical, career-focused students. Rough if you want a party bubble.',
      love: ['You want engineering, nursing or business without big debt', 'You want hockey games with a real crowd', "You're from Mass and want to stay close to home", 'You like a school that is focused on getting you a job'],
      struggle: ['You want a classic college town', 'You want a big party scene', 'You want everyone to stay on campus on weekends']
    },

    people: {
      preview: 'Price and programs win. Weekends and the split campus are the complaints.',
      plus: ['Strong programs for the price', 'Hockey games are a blast', 'Professors and co-ops connect you to real jobs'],
      minus: ['Campus empties out on some weekends', 'Getting between the three campuses takes time', 'Commuters can feel left out']
    }
  }
});
