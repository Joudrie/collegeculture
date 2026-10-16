registerSchool({
  id: 'montserrat',
  name: 'Montserrat',
  nameSub: 'College of Art',
  state: 'Massachusetts',
  location: 'Beverly, MA · Downtown Beverly',
  asOf: '2026',

  colors: {
    name: 'Art school · Teal and green',
    swatches: ['#0F576E', '#A5AF3A'],
    band: '#0F576E',
    onBand: '#FFFFFF',
    onBandMuted: '#CFE3EA',
    stripe: '#A5AF3A',
    accent: '#0F576E',
    accentOnDark: '#74CBC8'
  },

  vibe: "A tiny art college in downtown Beverly, north of Boston. Everyone is making something, classes are in studios, and you can get to Boston by train.",
  flags: ['Art school', 'Small town', 'Portfolio matters', 'Train to Boston'],
  facts: [
    { label: 'Setting', value: 'Small city' },
    { label: 'Undergrads', value: '~400' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'None' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Creative, small, studio-heavy, laid-back',
      meters: {
        party:    { value: 3, note: 'Small gatherings and shows' },
        campus:   { value: 3, note: 'Buildings spread around downtown Beverly' },
        spirit:   { value: 2, note: 'Art shows over sports' },
        pressure: { value: 6, note: 'Lots of studio hours and critiques' },
        career:   { value: 5, note: 'Creative careers take hustle' },
        greek:    { value: 0, note: 'None' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Close friends from studio, art shows and trips to Boston',
      paragraphs: [
        "With so few students, you will know most people. Friend groups form in studio classes and in the residence halls. Critiques and late nights in the studio bring people close fast.",
        "Social life is low-key. Gallery openings, student shows and small hangouts are more common than big parties.",
        "Beverly has a walkable downtown with cafes and shops, and the commuter rail gets you into Boston. Many students use it to see museums and meet other art students."
      ]
    },

    gettingIn: {
      preview: 'Portfolio matters most. Most applicants get in.',
      points: [
        { title: 'Your portfolio is the key.', text: 'Admission is mostly about your artwork and potential. Start collecting your best pieces early.' },
        { title: "It's not super hard to get in.", text: 'Most applicants are admitted if they show real interest and effort.' },
        { title: 'Check the current requirements.', text: 'Portfolio and test rules can change. Look at the school website for the year you apply.' }
      ]
    },

    who: {
      preview: 'Creative kids who want to make art every day',
      paragraphs: [
        'People who love drawing, painting, design, photography or making things. Many are from Massachusetts and nearby states, and most were the "art kid" in high school.',
        "It fits people who want a small, supportive place. If you want a huge campus or a mix of every subject, you'd be bored."
      ]
    },

    knownFor: {
      preview: 'Small size, art majors, and a downtown campus',
      points: [
        { title: 'Art-only', text: 'Every major here is art or design. The whole campus runs on it.' },
        { title: 'Downtown Beverly', text: 'The buildings are around the middle of town, not on a closed-off campus.' },
        { title: 'Study abroad', text: 'The school runs travel programs for art students in places like Japan, Ireland and Spain.' }
      ]
    },

    stereotypes: {
      preview: '"Everyone is an artist" is true. "No future" is half true.',
      items: [
        { said: "Everyone is an artist.", verdict: 'true', text: "That's the point. Every major is art or design, so your classmates are all makers." },
        { said: "You can't get a job with an art degree.", verdict: 'half', text: 'Creative careers exist in design, illustration, animation, photography and more. They take portfolio work and hustle.' },
        { said: "It's tiny and everyone knows each other.", verdict: 'true', text: 'With a few hundred students, that is basically how it works.' },
        { said: "It's not a real college.", verdict: 'myth', text: 'It gives accredited bachelor degrees, with academic classes alongside studio work.' }
      ]
    },

    mythsAndKnow: {
      preview: 'It is a small town, a heavy studio load, and supplies cost money',
      myths: [
        { title: 'Art school is easy.', text: 'Studio hours, critiques and deadlines take real effort.' },
        { title: 'You are in Boston.', text: 'Beverly is on the North Shore. You can take the train to Boston, but you are not living in the city.' }
      ],
      know: [
        { title: 'Art supplies add up.', text: 'Materials and equipment cost extra. Ask what to budget for your major.' },
        { title: 'Build your portfolio.', text: 'Start before you apply and keep going. It will matter for jobs too.' },
        { title: 'Check the train.', text: 'The commuter rail runs from Beverly to Boston. Look at the schedule before you count on it.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want to make art with a small group. Rough if you want big campus life.',
      love: ['You live to make art', 'You like small classes and close faculty', 'You want a calm, walkable town'],
      struggle: ['You want sports and big events', 'You want lots of different majors', 'You want to be in a big city every day']
    },

    people: {
      preview: 'Community and focus win. Size and cost are the complaints.',
      plus: ['Small classes and creative classmates', 'Time and space to make work', 'Easy train access to Boston'],
      minus: ['Very small, limited social scene', 'Art supplies and tuition cost a lot', 'Not much outside art']
    }
  }
});
