registerSchool({
  id: 'massart',
  name: 'MassArt',
  nameSub: 'Art and Design',
  state: 'Massachusetts',
  location: 'Boston, MA · Fenway / Huntington Ave',
  asOf: '2026',

  colors: {
    name: 'Mastodon · Black and blue',
    swatches: ['#000000', '#2FB3FF'],
    band: '#000000',
    onBand: '#FFFFFF',
    onBandMuted: '#B3B3B3',
    stripe: '#2FB3FF',
    accent: '#0070B0',
    accentOnDark: '#2FB3FF'
  },

  vibe: "A small public art school on Huntington Ave where everyone is making something, all the time. It's studio-heavy, a lot cheaper than most art schools, and the city is your quad.",
  flags: ['Portfolio required', 'Public art school', 'Studio-heavy', 'No real sports'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,700' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Intramurals' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'All art, all the time. Low party scene, low school spirit.',
      meters: {
        party:    { value: 3,  note: 'Small apartment hangouts, not big parties' },
        campus:   { value: 3,  note: 'A few buildings and dorms on one avenue' },
        spirit:   { value: 2,  note: 'No real teams. Pride is about the work.' },
        pressure: { value: 7,  note: 'Critiques and long studio hours' },
        career:   { value: 6,  note: 'Depends a lot on your major and portfolio' },
        greek:    { value: 0,  note: 'No fraternities or sororities' },
        religion: { value: 1,  note: 'Secular' }
      }
    },

    social: {
      preview: 'Your studio mates become your friends. Boston fills the rest.',
      paragraphs: [
        "Social life at MassArt mostly happens in studios. You spend so many hours next to the same people working on projects that they turn into your friends. Late nights in the studio are a big part of the culture.",
        "First-years usually live in the dorms on Huntington Ave, including a tall tower called the Treehouse. That's the easiest year to meet people. After that, a lot of students move into apartments around the city.",
        "MassArt is part of the Colleges of the Fenway, so you can use some resources at nearby schools. Weekends are more about gallery openings, shows and exploring Boston than campus parties."
      ]
    },

    gettingIn: {
      preview: 'Your portfolio matters most. Most applicants get in.',
      points: [
        { title: 'The portfolio is the big thing.', text: 'You submit art with your application, and it carries a lot of weight. Start building it early and show your best, most personal work.' },
        { title: "It's not super hard to get into.", text: 'Most applicants are admitted. Grades still count, but a strong portfolio does a lot of the work.' },
        { title: 'Tests are not required.', text: "MassArt doesn't require SAT or ACT scores. Check the current policy before you apply." },
        { title: 'In-state is a deal.', text: 'As a public school, Massachusetts residents pay much less than at private art schools. There is also a discount for some New England students.' }
      ]
    },

    who: {
      preview: 'Artists and designers who already know that is their thing',
      paragraphs: [
        'People who have been drawing, designing, filming or building things for years and want to do it seriously. Popular areas include illustration, animation, graphic design, industrial design, fashion, photography, film and art education.',
        "It fits people who are self-driven. Nobody hands you a social life or a game day. If you'd rather spend Saturday finishing a project than at a tailgate, you'll fit in."
      ]
    },

    knownFor: {
      preview: 'A public art school, solid design programs, and a good price',
      points: [
        { title: 'Being public', text: "It's a state school that's only about art and design. That's rare in the US, and it keeps the price far below most private art colleges." },
        { title: 'Studio first', text: 'First year is a foundation of drawing, 2D, 3D and time-based work before you dig into a major. After that, most of your time is in the studio.' },
        { title: 'Design programs', text: 'Graphic design, illustration, animation and industrial design have solid reputations, and Boston gives you places to intern.' },
        { title: 'Its own museum', text: 'The MassArt Art Museum on campus shows contemporary art and is free to visit.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone lives in the studio" is true. "Cheap art school" is half.',
      items: [
        { said: 'Everyone basically lives in the studio.', verdict: 'true', text: 'Studio classes are long, and projects eat your nights and weekends. Students say time management is the skill that matters most.' },
        { said: "It's the cheap art school.", verdict: 'half', text: "It's cheap for an art school, especially in-state. Supplies and Boston rent still add up, and out-of-state students pay a lot more." },
        { said: "There's no campus life.", verdict: 'half', text: "There's no quad and no sports scene. But the dorms, studios and shows give it a tight, if small, community." },
        { said: "It's just a backup for RISD.", verdict: 'myth', text: "Some applicants do apply to both, but plenty of students pick MassArt on purpose for the price, the city and the programs." }
      ]
    },

    mythsAndKnow: {
      preview: 'Supplies cost money, critiques are tough, no car needed',
      myths: [
        { title: 'Art school is easy.', text: "It's a different kind of hard. You'll put in long hours, and your work gets critiqued in front of the class." },
        { title: "An art degree means you won't get a job.", text: 'Design, animation and illustration grads find work. It depends a lot on your portfolio and how hard you hustle for internships.' }
      ],
      know: [
        { title: 'Budget for supplies.', text: 'Tuition is only part of it. Materials, software and equipment can get expensive depending on your major.' },
        { title: 'Get used to critique.', text: 'Classmates and professors will talk about your work openly. It can sting at first, but it is how you get better.' },
        { title: "You don't need a car.", text: 'The Green Line stops right by campus, and the Orange Line is a walk away.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if art is your life. Rough if you want a classic college experience.',
      love: ['You want to spend most of your time making art', 'You want an art school without private art school prices', 'You want to live in a real city', "You're self-driven and like working hard on projects"],
      struggle: ['You want sports, parties and school spirit', "You're not sure art is what you want to study", "You don't like having your work criticized"]
    },

    people: {
      preview: 'The price and the studios win. Workload and cost of living are the complaints.',
      plus: ['Much cheaper than most art schools, especially in-state', 'Lots of studio space and equipment', 'A creative, close community'],
      minus: ['The workload is heavy and sleep suffers', 'Aid is not as generous as at richer private schools', 'Boston rent and supplies add up']
    }
  }
});
