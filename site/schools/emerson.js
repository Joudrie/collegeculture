registerSchool({
  id: 'emerson',
  name: 'Emerson',
  nameSub: 'College',
  state: 'Massachusetts',
  location: 'Boston, MA · On Boston Common',
  asOf: '2026',

  colors: {
    name: 'Lions · Purple and gold',
    swatches: ['#5F249F', '#FFB81C'],
    band: '#5F249F',
    onBand: '#FFFFFF',
    onBandMuted: '#D9C8EE',
    stripe: '#FFB81C',
    accent: '#5F249F',
    accentOnDark: '#B98CEB'
  },

  vibe: "A small arts and media school packed into a few buildings in downtown Boston. Everyone is making something, whether it's a film, a show or a podcast, and the city is your campus.",
  flags: ['No real quad', 'Film and media focus', 'Live on campus 3 yrs', 'Pricey'],
  facts: [
    { label: 'Setting', value: 'Downtown' },
    { label: 'Undergrads', value: '~4,000' },
    { label: 'Getting in', value: 'Selective' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "Small, city-based, dorms in downtown Boston, food is mostly off campus", "housing": ["Most first-years live in dorms right in downtown Boston.", "Dorms are mostly in city buildings, so rooms can feel small.", "Many students move to nearby apartments later."], "food": ["There is one main dining hall, and students often say it is just okay.", "Many students eat out or cook once they can.", "Downtown Boston has tons of places within walking distance."]},
    vibe: {
      preview: 'Creative, career-driven, very little traditional campus life',
      meters: {
        party:    { value: 4,  note: 'Small apartment parties, not a scene' },
        campus:   { value: 2,  note: 'Buildings on the Common, no quad' },
        spirit:   { value: 1,  note: 'Most people forget there are teams' },
        pressure: { value: 6,  note: 'Creative competition, not grades' },
        career:   { value: 8,  note: 'Hands-on from day one' },
        greek:    { value: 2,  note: 'A few groups, many are arts-based' },
        religion: { value: 1,  note: 'Very secular' }
      }
    },

    social: {
      preview: 'Your friends come from your productions, clubs and dorm floor',
      paragraphs: [
        "Social life runs through what you make. Student film crews, comedy troupes, the radio station, theater shows and the student TV channel are where most people find their people. Being on set together at 2am bonds you fast.",
        "You live in college dorms for your first three years, all within a few blocks of each other downtown. That keeps people close, but there's no big lawn where everyone hangs out. The Common and the Public Garden basically fill that role.",
        "Parties are small and mostly in dorm rooms or apartments. If you want more, Boston has a lot of other colleges, and Emerson kids mix with people from Berklee, Suffolk and others nearby."
      ]
    },

    gettingIn: {
      preview: 'Selective but not a long shot. Your portfolio or creative work matters.',
      points: [
        { title: "It's selective.", text: "A good chunk of applicants get turned away, but it's more reachable than the top Boston schools. Strong grades plus real interest in your field go a long way." },
        { title: 'Some majors want extra material.', text: 'Performing arts majors need an audition or portfolio, and some other programs ask for creative work. Check your major early so you are not scrambling.' },
        { title: 'Tests are optional.', text: "Most applicants apply without SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Show what you have made.', text: 'Short films, writing, theater, a podcast. Emerson cares a lot about what you have already done in your field.' }
      ]
    },

    who: {
      preview: 'Filmmakers, writers, actors, comedians and future media people',
      paragraphs: [
        "People who already know they want to work in film, TV, theater, writing, journalism, marketing or comedy. A lot of them have been making stuff since middle school. Students come from all over the country, not just New England.",
        "It's not a school for people still figuring out if they like the arts. Almost every major is in communication or the arts, so if you suddenly want to be an engineer or a pre-med, you'll have to transfer. The campus is also known for being very welcoming to LGBTQ students."
      ]
    },

    knownFor: {
      preview: 'Film, comedy, theater, the LA program and a strong alumni network',
      points: [
        { title: 'Film and media', text: 'The film and TV programs are the biggest draw. You get access to real equipment and student productions early.' },
        { title: 'Comedy', text: 'It has a comedy major, which is rare, and well-known stand-up and sketch groups on campus.' },
        { title: 'Emerson Los Angeles', text: "Juniors and seniors can spend a semester in Hollywood doing internships and living in Emerson's own building there." },
        { title: 'The alumni network', text: 'People joke about the "Emerson mafia" in entertainment. Alumni really do help each other get jobs.' }
      ]
    },

    stereotypes: {
      preview: '"All theater kids" is half true. "No campus" is mostly true.',
      items: [
        { said: "It's all theater kids.", verdict: 'half', text: 'Theater is big, but film, writing, journalism and marketing students outnumber them. The better line is "it\'s all creative kids."' },
        { said: "There's no campus.", verdict: 'half', text: "There's no quad or big lawn. It's a cluster of buildings on Boylston and Tremont Street. Boston Common is basically the front yard." },
        { said: 'Everyone is pretentious.', verdict: 'half', text: "Some people take their art very seriously and will tell you about it. Most are just passionate. You'll meet both." },
        { said: 'Nobody cares about sports.', verdict: 'true', text: "Emerson has Division III teams, but going to games isn't part of the culture. If you want big game days, this isn't it." }
      ]
    },

    mythsAndKnow: {
      preview: 'It is a real college with real jobs after. Downtown Boston costs a lot.',
      myths: [
        { title: 'An arts degree means no job.', text: "Emerson is built around careers in media and entertainment. Internships are a big deal and the network is strong. It's still a tough industry." },
        { title: "You'll be in LA the whole time.", text: 'The LA program is one semester. Your college life is mostly in Boston.' }
      ],
      know: [
        { title: 'You live on campus for three years.', text: 'New students are required to live in college housing for their first six semesters. That saves you from the Boston rental hunt early on.' },
        { title: "The academics are narrow on purpose.", text: "Almost everything is communication or the arts. If you want options outside that, this isn't the place." },
        { title: 'Downtown has city problems.', text: 'You are living in the middle of Boston. Noise, crowds and city stuff come with it.' },
        { title: 'Look at net price, not sticker price.', text: "Emerson is expensive. What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know your creative path. Rough if you want a classic campus.',
      love: ['You already know you want film, TV, theater, writing or comedy', 'You want to live in the middle of a big city', 'You want to start making real work freshman year', 'You want an accepting, artsy crowd'],
      struggle: ['You want a quad, football and tailgates', "You're not sure what you want to study", 'You want a big party scene']
    },

    people: {
      preview: 'Hands-on programs and the location win. Cost and no campus feel lose.',
      plus: ['You get your hands on equipment and real projects early', 'The location on Boston Common is hard to beat', 'Alumni connections in media are strong'],
      minus: ['It is expensive, and so is Boston', "There's no traditional campus feel", 'The creative competition can get intense']
    }
  }
});
