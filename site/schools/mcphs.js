registerSchool({
  id: 'mcphs',
  name: 'MCPHS',
  nameSub: 'Pharmacy & Health Sciences',
  state: 'Massachusetts',
  location: 'Boston, MA · Longwood Medical Area',
  asOf: '2026',

  colors: {
    name: 'Red the Cardinal · Cardinal and white',
    swatches: ['#97233F', '#FFFFFF'],
    band: '#97233F',
    onBand: '#FFFFFF',
    onBandMuted: '#EBC9D1',
    stripe: '#D2E0EF',
    accent: '#97233F',
    accentOnDark: '#F28AA3'
  },

  vibe: "A health sciences school in the middle of Boston's hospital district. People come here to become pharmacists, nurses and other health pros, and the workload makes that clear fast.",
  flags: ['Heavy workload', 'Health careers only', 'No real campus', 'Next to hospitals'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~3,500' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 to 6 years' },
    { label: 'Sports', value: 'Not a focus' },
    { label: 'Greek life', value: 'Small' }
  ],

  sections: {
    "living": {"preview": "City campus with some housing, many students live off campus", "housing": ["The school has some residence halls, mostly for first-years.", "A lot of students move to apartments around Boston.", "Housing is limited compared to bigger schools, so plan early."], "food": ["Campus food is simple, with a dining hall or cafe-style options.", "Students often eat out or cook.", "The Longwood and Fenway area has lots of cheap places."]},
    vibe: {
      preview: 'Study-heavy, career-focused, quiet social scene',
      meters: {
        party:    { value: 2,  note: 'Most nights are for studying' },
        campus:   { value: 2,  note: 'A few buildings among the hospitals' },
        spirit:   { value: 1,  note: 'Sports are not part of the identity' },
        pressure: { value: 9,  note: 'Science-heavy courses and GPA cutoffs' },
        career:   { value: 9,  note: 'Clear path into health jobs' },
        greek:    { value: 2,  note: 'Mostly professional groups' },
        religion: { value: 1,  note: 'Secular' }
      }
    },

    social: {
      preview: 'Study groups and clubs. You make your own fun in the city.',
      paragraphs: [
        'Students say the social scene is quieter than at a traditional college. Your friends are often the people in your program, and a lot of hanging out happens in study groups.',
        'There are dozens of clubs, cultural groups and professional organizations, including pharmacy and health fraternities. Getting involved early is the main way people find a group outside of class.',
        "MCPHS is part of the Colleges of the Fenway, so you can join some activities with nearby schools like Simmons, Wentworth and MassArt. Fenway, the museums and the rest of Boston are a short walk or T ride away."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Staying in your program is the hard part.',
      points: [
        { title: 'Admission is not the hard part.', text: 'Most applicants are admitted. Strong grades in science and math help, especially for pharmacy and nursing.' },
        { title: 'Pick your program carefully.', text: 'You apply to a specific program. Some, like pharmacy, take you straight through to a doctorate if you keep your grades up.' },
        { title: 'Tests may be optional.', text: "It has been test-optional in recent years. Check the current policy before you apply." },
        { title: 'Grades decide if you continue.', text: 'Many programs have GPA requirements to move on. Students who fall short may have to switch majors.' }
      ]
    },

    who: {
      preview: 'Future pharmacists, nurses and health pros who know their path',
      paragraphs: [
        "People who already know they want a health career. The big programs include pharmacy, nursing, dental hygiene, radiologic sciences and pre-med or pre-PA style health science tracks.",
        "It fits focused people who are fine trading some of the classic college experience for a direct path to a job. If you're not sure you want health care, a bigger school with more options is safer."
      ]
    },

    knownFor: {
      preview: 'Pharmacy, a Longwood location, and fast-track programs',
      points: [
        { title: 'Pharmacy', text: "It's one of the oldest pharmacy schools in the country, founded in 1823. Its PharmD program is the anchor of the school." },
        { title: 'Longwood location', text: 'The Boston campus sits among major hospitals and medical schools, which helps with clinical rotations and health jobs.' },
        { title: 'Accelerated programs', text: 'Some programs move fast, with classes year round. The Worcester and Manchester, NH campuses run accelerated tracks.' },
        { title: 'Health science variety', text: 'Beyond pharmacy, there are programs in nursing, dental hygiene, imaging, public health and more.' }
      ]
    },

    stereotypes: {
      preview: '"All you do is study" is mostly true. "Easy school" is a myth.',
      items: [
        { said: 'All you do is study.', verdict: 'true', text: 'The science courses are hard, and many programs have GPA cutoffs. Most students say their social life takes a back seat.' },
        { said: "It's easy because everyone gets in.", verdict: 'myth', text: 'Getting in is not hard. Staying in your program is. Some students switch majors after tough science courses.' },
        { said: "There's no campus life.", verdict: 'half', text: "There's no quad or sports scene, and it feels quieter than a normal college. Clubs and the city give you options if you look." },
        { said: "It's only for pharmacy.", verdict: 'outdated', text: 'Pharmacy is the history and still a big deal, but nursing and other health programs are a large part of the school now.' }
      ]
    },

    mythsAndKnow: {
      preview: 'Watch the GPA cutoffs, check program length, no car needed',
      myths: [
        { title: "It's just a pharmacy school.", text: 'Pharmacy is the biggest name, but there are many health programs, from nursing to dental hygiene.' },
        { title: "You're stuck if a program doesn't work out.", text: "You can switch to another health program. It may add time, so talk to an advisor early." }
      ],
      know: [
        { title: 'Program length varies.', text: 'Some degrees are 4 years. Pharmacy takes about 6 to finish the doctorate. Know what you are signing up for.' },
        { title: 'Expect a heavy load.', text: 'Chemistry, biology and anatomy come early and fast. Good study habits matter from week one.' },
        { title: "You don't need a car.", text: 'The Green Line E branch stops nearby, and Longwood is walkable to Fenway.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you know you want health care. Rough if you want a big college scene.',
      love: ['You know you want a health career', 'You want to be next to major hospitals', "You're focused and don't mind a heavy workload", 'You want to live in Boston'],
      struggle: ["You're not sure what you want to study", 'You want sports, parties and school spirit', 'You want a big, classic campus']
    },

    people: {
      preview: 'Career path and location win. Workload and quiet social life are the complaints.',
      plus: ['A direct path into health careers', 'Great location next to hospitals', 'Small classes in many programs'],
      minus: ['The workload is intense', 'The social scene can feel quiet', 'It is expensive, and Boston is too']
    }
  }
});
