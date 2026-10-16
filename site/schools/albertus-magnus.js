registerSchool({
  id: 'albertus-magnus',
  name: 'Albertus',
  nameSub: 'Albertus Magnus College',
  title: 'Albertus Magnus College',
  state: 'Connecticut',
  location: 'New Haven, CT · Prospect Hill',
  asOf: '2026',

  colors: {
    name: 'Falcons · Blue and white',
    swatches: ['#25408F', '#C9D6EE'],
    band: '#25408F',
    onBand: '#FFFFFF',
    onBandMuted: '#CBD6F0',
    stripe: '#C9D6EE',
    accent: '#25408F',
    accentOnDark: '#8FAAF0'
  },

  vibe: "A small Catholic college in a quiet part of New Haven with a lot of students from the area. Classes are small and it's friendly, and it's easy to get in.",
  flags: ['Very small', 'Catholic roots', 'Near Yale and downtown', 'Most get in'],
  facts: [
    { label: 'Setting', value: 'City edge' },
    { label: 'Undergrads', value: '~1,200' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    vibe: {
      preview: 'Small, friendly, quiet, Catholic roots',
      meters: {
        party:    { value: 2, note: 'Very low-key' },
        campus:   { value: 5, note: 'Small, with some old mansions' },
        spirit:   { value: 3, note: 'Small crowds, close teams' },
        pressure: { value: 4, note: 'Manageable, with lots of support' },
        career:   { value: 5, note: 'Business, nursing and education' },
        greek:    { value: 0, note: 'Not really a thing' },
        religion: { value: 4, note: 'Catholic, Dominican roots, not pushy' }
      }
    },

    social: {
      preview: 'Small and close. Nights out mean going into New Haven.',
      paragraphs: [
        "It's a very small school, so you'll know a lot of people fast. Friend groups form around dorms, teams and clubs.",
        "There isn't much of a party scene on campus. Students who want more head into New Haven, which has restaurants and nightlife.",
        "Many students are from the area, so weekends can be quiet."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are not needed.',
      points: [
        { title: "It's not hard to get in.", text: 'A majority of applicants are admitted.' },
        { title: 'Tests are not needed.', text: 'The college does not use test scores in admission. Confirm the current policy.' },
        { title: 'Merit aid is common.', text: 'Sticker price is not what most pay.' }
      ]
    },

    who: {
      preview: 'Local students, many first-gen, business and nursing majors',
      paragraphs: [
        "Many students are from Connecticut. Common majors include business, nursing, psychology and education.",
        "It fits people who want a small school with a lot of attention and don't need a big social scene."
      ]
    },

    knownFor: {
      preview: 'A small campus, Catholic roots and a Dominican history',
      points: [
        { title: 'Dominican roots', text: 'It was founded in 1925 by the Dominican Sisters and is a Catholic college.' },
        { title: 'Small classes', text: 'Classes are small, and professors know students personally.' },
        { title: 'Historic mansions', text: 'Some residence halls are in old mansions on campus.' }
      ]
    },

    stereotypes: {
      preview: '"Tiny" is true. "Very religious" is half true.',
      items: [
        { said: "It's tiny.", verdict: 'true', text: "Around 1,200 undergrads. You'll see the same faces every day." },
        { said: "It's very religious.", verdict: 'half', text: "It's Catholic, with a chapel and campus ministry. Students from all backgrounds go there, and most don't feel pressure." },
        { said: "It's a backup school.", verdict: 'half', text: "It's easy to get into, so some students use it as a safe choice. Others like the size and support." },
        { said: "There's nothing to do.", verdict: 'half', text: "Campus is quiet, but New Haven is close." }
      ]
    },

    mythsAndKnow: {
      preview: 'Tiny school, quiet campus, New Haven nearby.',
      myths: [
        { title: 'It is part of Yale.', text: 'It is a separate small college, not connected to Yale.' },
        { title: 'It is only for Catholics.', text: 'Students of all backgrounds attend.' }
      ],
      know: [
        { title: 'Expect a small community.', text: 'Everyone knows each other, which is good and bad.' },
        { title: 'Get out into New Haven.', text: 'Downtown has more to do than campus.' },
        { title: 'A car helps.', text: 'The campus is in a residential area, and a car makes it easier.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want small and supportive. Rough if you want big college energy.',
      love: ['You want small classes', 'You want a close community', 'You want to be near New Haven', 'You want support from professors'],
      struggle: ['You want big sports', 'You want a party scene', 'You want a lot of majors']
    },

    people: {
      preview: 'Closeness and support win. Size and quiet are the complaints.',
      plus: ['Small classes', 'Supportive faculty', 'Close to New Haven'],
      minus: ['Very small', 'Quiet campus life', 'Fewer majors and activities']
    }
  }
});
