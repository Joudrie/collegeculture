registerSchool({
  id: 'franklin-pierce',
  name: 'Franklin Pierce',
  nameSub: 'University',
  state: 'New Hampshire',
  location: 'Rindge, NH · Rural, near Mount Monadnock',
  asOf: '2026',

  colors: {
    name: 'Ravens · Crimson and gray',
    swatches: ['#6D6E71', '#6F1931'],
    band: '#6D6E71',
    onBand: '#FFFFFF',
    onBandMuted: '#F5F5F5',
    stripe: '#6F1931',
    accent: '#6F1931',
    accentOnDark: '#E8909F'
  },

  vibe: "A small school in the woods of southern New Hampshire. It is quiet and friendly, with a lot of athletes, and a mountain right nearby. If you want a city, this is the opposite.",
  flags: ['Very rural', 'Small campus', 'Need a car', 'Lots of athletes'],
  facts: [
    { label: 'Setting', value: 'Rural' },
    { label: 'Undergrads', value: '~1,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division II' },
    { label: 'Greek life', value: 'Minimal' }
  ],

  sections: {
    vibe: {
      preview: 'Quiet, outdoorsy, close-knit, sports-friendly',
      meters: {
        party:    { value: 4, note: 'Small gatherings, not much around campus' },
        campus:   { value: 7, note: 'Real campus in the woods, by a lake' },
        spirit:   { value: 4, note: 'Teams get support from friends and classmates' },
        pressure: { value: 3, note: 'Small and supportive' },
        career:   { value: 5, note: 'Practical majors, small local network' },
        greek:    { value: 1, note: 'Not a big part of campus' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Friendly and small. Weekends depend on you having a plan and a ride.',
      paragraphs: [
        "With around 1,500 undergrads, people know each other fast. Athletes are a big share of the student body, so teams and teammates often become a friend group. Clubs and dorm events fill in the rest.",
        "Rindge is a tiny town. There is almost nothing within walking distance, so weekends can be slow. Students who stay do movie nights, game nights and small parties, or drive to Keene and farther.",
        "If you like hiking and being outside, it is a plus. Mount Monadnock is one of the most hiked mountains in the country, and it is a short drive away."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Check the test policy.',
      points: [
        { title: "It's not hard to get into.", text: 'The large majority of applicants are admitted. A solid transcript puts you in good shape.' },
        { title: 'Scholarships are common.', text: 'The sticker price is high, but most students get aid from the school.' },
        { title: 'Check the current test policy.', text: 'Policies can change. Look at the admissions page before you apply.' }
      ]
    },

    who: {
      preview: 'Athletes, small-school fans and people who like the outdoors',
      paragraphs: [
        "Mostly students from New England, with a lot of kids from New Hampshire, Massachusetts and Connecticut. A good chunk are athletes. Many chose it for a small school where they would get playing time.",
        "Popular majors include business, marketing, psychology, education, communications and health sciences. People are generally laid back and friendly."
      ]
    },

    knownFor: {
      preview: 'Small size, Division II teams, and a mountain next door',
      points: [
        { title: 'Named after a president', text: 'Franklin Pierce was the 14th US president and from New Hampshire.' },
        { title: 'Division II athletics', text: 'The Ravens play in Division II, which is a higher level than many small New England schools.' },
        { title: 'The setting', text: 'The campus sits in the woods near Mount Monadnock, with lakes and trails around.' },
        { title: 'Other locations', text: 'The university has smaller centers in Manchester and Lebanon, NH for some programs.' }
      ]
    },

    stereotypes: {
      preview: '"Middle of nowhere" is true. "Only athletes" is a myth.',
      items: [
        { said: "It's in the middle of nowhere.", verdict: 'true', text: 'Rindge is rural. You will want a car, and you will notice the quiet.' },
        { said: 'Everyone is an athlete.', verdict: 'myth', text: 'Athletes are a big group, but not the whole school. Plenty of students are not on a team.' },
        { said: "It's a safety school.", verdict: 'half', text: 'Admission is not tough, so some students are here as a backup. Others pick it on purpose for the size and the location.' },
        { said: 'Everyone goes home on weekends.', verdict: 'half', text: 'Some do, especially local students. Many athletes and out-of-state students stay.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Plan for a car and a cold winter. Look at the net price.',
      myths: [
        { title: 'Small means boring.', text: 'It is quiet, but there are clubs, teams and outdoor stuff. It just takes some effort to find your group.' },
        { title: 'It is only a sports school.', text: 'Sports are a big part, but the academics are mostly practical programs like business and education.' }
      ],
      know: [
        { title: 'You need a car.', text: 'Public transit is basically not an option. Having a car or a friend with one matters.' },
        { title: 'Winters are long.', text: 'It gets cold and snowy. Pack for it.' },
        { title: 'Classes are small.', text: "Professors know you, which helps. It also means it's hard to skip." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and outdoorsy. Rough if you want a city.',
      love: ['You want a small school where people know you', 'You play a sport and want real playing time', 'You like hiking and the outdoors', 'You want practical majors without pressure'],
      struggle: ['You want a big city or nightlife', 'You do not have a car', 'You want a big, diverse crowd']
    },

    people: {
      preview: 'Friendly and quiet. Isolation is the main complaint.',
      plus: ['Small classes and supportive professors', 'Beautiful setting in the woods', 'Athletes can get real playing time'],
      minus: ['Very isolated', 'Not much to do on weekends', 'Cold, long winters']
    }
  }
});
