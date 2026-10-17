registerSchool({
  id: 'lesley',
  name: 'Lesley',
  nameSub: 'University',
  state: 'Massachusetts',
  location: 'Cambridge, MA · Porter Square',
  asOf: '2026',

  colors: {
    name: 'Lynx · Green and gray',
    swatches: ['#00965E', '#004C45', '#B1B3B3'],
    band: '#00965E',
    onBand: '#000000',
    onBandMuted: '#071812',
    stripe: '#004C45',
    accent: '#004C45',
    accentOnDark: '#00B2A9'
  },

  vibe: "A small, artsy, practical school in Cambridge where people come to become teachers, artists and counselors. The undergrad scene is tiny and quiet, but you're a few stops from Boston on the Red Line.",
  flags: ['Tiny undergrad', 'Artsy crowd', 'Red Line access', 'Quiet social life'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,400' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Small residential base in a busy area; food is okay and options are nearby.", "housing": ["Some students live in campus residence halls near Harvard Square.", "A lot of students find apartments in the Boston area or commute.", "Housing in Cambridge is expensive, so ask about costs."], "food": ["Campus dining is small, so many students eat out or cook.", "Residents may be required to have a meal plan.", "Cambridge has a huge range of places to eat, from cheap to pricey."]},
    vibe: {
      preview: 'Creative, low-key, small, very little partying',
      meters: {
        party:    { value: 2, note: 'Small get-togethers, not a party school' },
        campus:   { value: 4, note: 'A few small campuses, old houses' },
        spirit:   { value: 1, note: 'Few people follow the teams' },
        pressure: { value: 4, note: 'Hands-on, depends on the program' },
        career:   { value: 6, note: 'Classroom and studio time early' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 1, note: 'Secular' }
      }
    },

    social: {
      preview: 'Small and friendly. You build your own scene, often off campus.',
      paragraphs: [
        "The undergrad population is tiny, and a lot of Lesley's students are grad or online students you'll never see. That means a small, close crowd. Students describe it as open-minded and welcoming, and also pretty quiet.",
        "There are very few parties, especially if you're not on a team. Friend groups form in dorms, studios, classes and clubs. Most people hang out in small groups, make art, or head into Harvard Square and Boston.",
        "The location is the big plus. Porter Square has a Red Line stop, Harvard Square is a short walk, and Boston is about 15 minutes away. If you want more social life, the city has it, but you have to go find it."
      ]
    },

    gettingIn: {
      preview: 'Most people who apply get in. Art students need a portfolio.',
      points: [
        { title: "It's easy to get into.", text: 'The large majority of applicants are admitted. Decent grades will usually get you in.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'Art and design needs a portfolio.', text: "If you're applying for a BFA, plan to show your work. Check the program's portfolio requirements early." },
        { title: 'Merit aid is common.', text: 'Like most small private schools, Lesley gives a lot of students scholarships. The sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Future teachers, artists and counselors who like small and creative',
      paragraphs: [
        "People who already know they want to teach, make art or help people. Education, art and design, psychology and counseling are the big areas. Students are often described as creative, open-minded and a little different, in a good way.",
        "Most undergrads are women, and a lot of students come from Massachusetts and New England. It fits people who want a small, supportive place in a city more than a big campus experience."
      ]
    },

    knownFor: {
      preview: 'Teacher training, art and design, and counseling programs',
      points: [
        { title: 'Teacher education', text: "Training teachers is what Lesley has done since it started. Education students get into real classrooms early and often." },
        { title: 'Art and design', text: 'The College of Art and Design grew out of the old Art Institute of Boston. It offers BFAs in things like illustration, animation, photography and design.' },
        { title: 'Counseling and expressive therapies', text: 'Lesley is well known for graduate programs in counseling and art, music and drama therapy. Undergrads interested in those fields can start building toward them.' },
        { title: 'A big grad and online side', text: 'Most of Lesley\'s students are grad or online students. The undergrad college is a small slice of the university.' }
      ]
    },

    stereotypes: {
      preview: '"Harvard neighbor" is true. "Everyone teaches" is half true.',
      items: [
        { said: "Everyone's going to be a teacher.", verdict: 'half', text: "Education is a huge part of the school, but plenty of students are in art, psychology, counseling and other majors." },
        { said: "There's no social life.", verdict: 'half', text: "There's barely a party scene and campus can feel quiet. People who join clubs and use the city say they found their people." },
        { said: "It's an art school.", verdict: 'half', text: "Part of it is. The College of Art and Design is a real art school inside the university, but it's only one piece of Lesley." },
        { said: "It's basically a Harvard neighbor.", verdict: 'true', text: "Geographically, yes. Harvard Square is a short walk away. Academically and socially, the two are separate worlds." }
      ]
    },

    mythsAndKnow: {
      preview: 'Small school, city location. Ask how the cutbacks affect your major.',
      myths: [
        { title: "It's a campus in the middle of Cambridge.", text: "It's split across a few small campuses near Porter and Harvard Square, mostly old buildings and Victorian houses. There's no big quad." },
        { title: 'Small school means no sports.', text: 'Lesley has Division III teams. Home games are played off campus in Lexington, so few students go.' }
      ],
      know: [
        { title: 'The school has been cutting back.', text: 'Lesley has dealt with falling enrollment, cut some majors and laid off faculty in recent years. Ask how stable your program is before you commit.' },
        { title: "You don't need a car.", text: 'The Red Line at Porter Square gets you to Harvard Square and Boston fast. Parking in Cambridge is a pain anyway.' },
        { title: 'Dorms are old.', text: 'Students say the residence halls are dated. Some are converted houses, which can be charming or cramped.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great for future teachers and artists. Rough if you want a big campus life.',
      love: ['You already know you want to teach, make art or counsel', 'You want small classes and professors who know you', 'You want a city on the Red Line', "You're creative and like a quiet, open-minded crowd"],
      struggle: ['You want parties and big game days', 'You want a classic campus with a quad', "You're unsure what you want to study and want lots of options"]
    },

    people: {
      preview: 'Location and small classes win. Social life and cutbacks are the complaints.',
      plus: ['Cambridge location is excellent', 'Small classes and caring professors', 'Hands-on training in classrooms and studios'],
      minus: ['Undergrad social life is thin', 'Cutbacks and turnover worry some students', 'Dorms and facilities feel dated']
    }
  }
});
