registerSchool({
  id: 'uri',
  name: 'URI',
  nameSub: 'Rhode Island',
  state: 'Rhode Island',
  location: 'Kingston, RI · Near the beaches',
  asOf: '2026',

  colors: {
    name: 'Rams · Keaney blue, navy and white',
    swatches: ['#75B2DD', '#002147', '#FFFFFF'],
    band: '#002147',
    onBand: '#FFFFFF',
    onBandMuted: '#B7CCE0',
    stripe: '#75B2DD',
    accent: '#1F6FA8',
    accentOnDark: '#75B2DD'
  },

  vibe: "A classic state school with a hilly campus in a quiet small town, ten minutes from the beach. Social life is big, especially once people move to beach houses, but plenty of students are grinding in nursing, pharmacy and engineering.",
  flags: ['Beach town', 'Bring a car', 'Big off-campus scene', 'Rural-ish campus'],
  facts: [
    { label: 'Setting', value: 'Small town' },
    { label: 'Undergrads', value: '~14,000' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Big sport', value: 'Basketball' },
    { label: 'Greek life', value: 'Sizable' }
  ],

  sections: {
    vibe: {
      preview: 'Social, outdoorsy, beachy, with some serious majors mixed in',
      meters: {
        party:    { value: 8, note: 'Mostly off campus in Narragansett' },
        campus:   { value: 8, note: 'Real campus with a big quad' },
        spirit:   { value: 6, note: 'Basketball games bring people out' },
        pressure: { value: 4, note: 'Depends a lot on your major' },
        career:   { value: 6, note: 'Strong in nursing, pharmacy, engineering' },
        greek:    { value: 6, note: 'A real part of social life' },
        religion: { value: 2, note: 'Groups exist, low key overall' }
      }
    },

    social: {
      preview: 'Dorms first, then beach houses "down the line" in Narragansett',
      paragraphs: [
        "Freshman and sophomore year, life is on campus in Kingston. Dorms, the quad, clubs, Greek life and dining halls are where friend groups form. Kingston itself is quiet and doesn't have much nightlife.",
        'A lot of upperclassmen move "down the line" to rental houses in Narragansett, a beach town a short drive away. That is where most of the parties happen, including daytime ones on nice weekends. Local police take noise and party complaints seriously, and arrests make the news.',
        "Early fall and late spring are peak beach season. Winter is quieter and colder, and the campus can feel a bit isolated if you don't have a car."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Some majors are harder.',
      points: [
        { title: "It's not hard to get into.", text: 'Most applicants are admitted. Decent grades in solid classes put you in good shape.' },
        { title: 'Some programs are tougher.', text: 'Nursing and pharmacy are more competitive than the university overall. If you want one of those, aim higher on grades and apply early.' },
        { title: 'Tests are optional.', text: 'Most applicants apply without SAT or ACT scores. Check the current policy before you apply.' },
        { title: 'Out-of-state costs more.', text: "It's a public school, so Rhode Island residents pay much less. There are regional discounts for some New England majors, so check if you qualify." }
      ]
    },

    who: {
      preview: 'Rhode Islanders, lots of New Englanders, outdoorsy and social',
      paragraphs: [
        'A mix of Rhode Island kids and a lot of students from Massachusetts, Connecticut, New York and New Jersey. People tend to be laid back, outdoorsy and social. Surfing, fishing and beach days are normal hobbies here.',
        "Under the beach vibe there's a serious crowd. Nursing, pharmacy, engineering and marine science students work hard, and they often have a different college experience than the people living down the line."
      ]
    },

    knownFor: {
      preview: 'The beach, pharmacy and nursing, ocean science and basketball',
      points: [
        { title: 'The beach', text: "Narragansett's beaches are a short drive from campus. It's the first thing most people mention." },
        { title: 'Pharmacy and nursing', text: 'Two of the biggest and best-known programs. Pharmacy is a six-year PharmD you can enter right out of high school.' },
        { title: 'Ocean science', text: "URI's oceanography school sits on Narragansett Bay. Marine biology and ocean engineering are big draws." },
        { title: 'Basketball', text: 'The Rams play Division I in the Atlantic 10, and men\'s games at the Ryan Center are the main sports event.' }
      ]
    },

    stereotypes: {
      preview: '"Beach party school" is half true. "Safety school" is mostly fair.',
      items: [
        { said: "It's just a beach party school.", verdict: 'half', text: 'The party scene is real, especially in Narragansett. But plenty of students spend their weekends studying for pharmacy or nursing exams.' },
        { said: "It's the safety school.", verdict: 'half', text: "A lot of New Englanders apply as a backup. That says more about admissions than the school. Several programs are genuinely strong." },
        { said: "It's a dry campus, so there are no parties.", verdict: 'myth', text: 'Campus rules on alcohol are strict, so the parties just moved off campus. They did not go away.' },
        { said: 'Everyone has a car.', verdict: 'half', text: "Not everyone, but a lot of upperclassmen do. Kingston is rural-ish, and getting to the beach or Providence is easier with one." }
      ]
    },

    mythsAndKnow: {
      preview: "It's a real university, not a resort. A car really helps.",
      myths: [
        { title: 'You live on the beach all four years.', text: "Most freshmen live in dorms in Kingston. Beach houses come later, and the leases often end before summer." },
        { title: 'Kingston is a college town with lots to do.', text: "It's a small village. Most of the fun is on campus, in Narragansett or in Providence, about 40 minutes away." }
      ],
      know: [
        { title: 'Bring a car if you can.', text: 'There are buses, but they are limited. A car makes beach trips, grocery runs and getting to Providence much easier.' },
        { title: 'The campus is hilly.', text: "You'll walk up and down a lot between classes. Good shoes help, especially in winter." },
        { title: 'Off-campus life has rules.', text: 'Narragansett police and the town keep an eye on student rentals. Big parties can mean fines or worse.' },
        { title: 'Look at net price, not sticker price.', text: "In-state and out-of-state costs are very different. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want a classic campus near the ocean. Rough if you want a city.',
      love: ['You want a big, classic state school campus', 'You love the beach and the outdoors', 'You want nursing, pharmacy, engineering or marine science', 'You want an active social life'],
      struggle: ['You want a city right outside your door', "You don't want to deal with not having a car", 'You want a quiet, low-key social scene']
    },

    people: {
      preview: 'Beach life and a pretty campus win. Isolation and parking lose.',
      plus: ['The beach is close and the campus is nice', 'People are friendly and laid back', 'Strong programs in health and ocean science'],
      minus: ["Kingston is quiet and far from a city", 'Hard to get around without a car', 'The party reputation follows you']
    }
  }
});
