registerSchool({
  id: 'mass-maritime',
  name: 'Mass Maritime',
  nameSub: 'Maritime Academy',
  state: 'Massachusetts',
  location: 'Buzzards Bay, MA · On the Cape Cod Canal',
  asOf: '2026',

  colors: {
    name: 'Buccaneers · Blue and gold',
    swatches: ['#072040', '#CFB888', '#78A1BB'],
    band: '#072040',
    onBand: '#FFFFFF',
    onBandMuted: '#B7C4D4',
    stripe: '#CFB888',
    accent: '#072040',
    accentOnDark: '#CFB888'
  },

  vibe: "A small state school run like a ship. You wear a uniform, live by regiment rules and spend part of the year at sea. It's strict, but a lot of grads walk straight into good-paying jobs.",
  flags: ['Uniforms and rules', 'Time at sea', 'Job-focused', 'Mostly residential'],
  facts: [
    { label: 'Setting', value: 'Coastal town' },
    { label: 'Undergrads', value: '~1,400' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "living": {"preview": "Regimental school, most students live on campus, food is basic", "housing": ["Most students live on campus, especially those in the regiment.", "Rooms are often shared and rules are stricter than at other schools.", "Buzzards Bay is small, so campus is where life happens."], "food": ["Students mostly eat in the campus dining hall.", "Students say the food is okay.", "Off-campus options are limited and you may need a ride."]},
    vibe: {
      preview: 'Structured, tight-knit, career-driven, right on the water',
      meters: {
        party:    { value: 3,  note: 'Regiment rules keep it in check' },
        campus:   { value: 7,  note: 'Right on the water at the canal' },
        spirit:   { value: 7,  note: 'Pride in the regiment, not the teams' },
        pressure: { value: 7,  note: 'Rules, inspections and license exams' },
        career:   { value: 10, note: 'The whole point of going' },
        greek:    { value: 0,  note: 'No fraternities or sororities' },
        religion: { value: 1,  note: 'Public and secular' }
      }
    },

    social: {
      preview: 'Your company and your class are your people',
      paragraphs: [
        "Almost everyone lives on campus and belongs to the Regiment of Cadets, so you're grouped into companies and spend a lot of time with the same people. Going through orientation and sea term together builds tight friendships fast.",
        "Freshmen have it the toughest. The regiment has rules for how you dress, keep your room and spend your time, and upperclassmen run a lot of it. Life gets more relaxed as you move up.",
        "Weekends are quieter than at a big school. People hang out with their company, play sports, sail, or head home or up to Boston. Cape Cod is right there in the warm months."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Some majors fill up first.',
      points: [
        { title: "It's not hard to get into.", text: 'Most people who apply are admitted. Solid grades in math and science help, especially for the engineering majors.' },
        { title: 'Apply early.', text: 'There is an early action deadline in November, and after that admission depends on space in each major. Popular programs can fill.' },
        { title: 'Know what you signed up for.', text: 'Admissions wants people who understand the regiment and the uniform. Visit an open house before you apply.' },
        { title: 'Check the test policy.', text: 'Policies have changed in recent years. Look at the current rules on the admissions site.' }
      ]
    },

    who: {
      preview: 'Hands-on, disciplined people who want a job at the end',
      paragraphs: [
        "People who like structure, or at least don't mind it, and want a clear path to work. Many want to work on ships, in power plants, in emergency management or in shipping and logistics. Plenty grew up near the water or have family in the military or the trades. Most are from Massachusetts and the rest of New England.",
        "It's not for someone who wants to sleep in, skip class and find themselves. If you hate being told what to wear or when to clean your room, the first year will be rough."
      ]
    },

    knownFor: {
      preview: 'Sea term, the regiment, and grads who get hired',
      points: [
        { title: 'Sea term', text: 'Cadets on the license track sail for weeks each winter on the training ship, standing watches and doing real work on board. Other majors do co-ops instead.' },
        { title: 'The regiment', text: 'Uniforms, formations, ranks and a summer orientation that is demanding by design. There is no military service required unless you choose a commissioning program.' },
        { title: 'Getting hired', text: 'The school reports very high job placement, and marine engineering and marine transportation grads are known for strong starting pay.' },
        { title: 'Licenses', text: 'Marine engineering and marine transportation students train to sit for a Coast Guard license, which lets them work as officers on ships.' }
      ]
    },

    stereotypes: {
      preview: '"It\'s basically the military" is half true. "Big money" is mostly true.',
      items: [
        { said: "It's basically the military.", verdict: 'half', text: "It looks like it, with uniforms and ranks. But it's a state university, and you don't owe any military service unless you sign up for it." },
        { said: 'Grads make a lot of money.', verdict: 'true', text: 'Many do, especially those who go to sea as licensed officers. The tradeoff is months away from home on some jobs.' },
        { said: 'Freshman year is miserable.', verdict: 'half', text: "It's the hardest year by far, with strict rules and little free time. Most people say it gets much better after that, and some say it was worth it." },
        { said: "It's only for people who want to be sailors.", verdict: 'myth', text: 'Majors like emergency management, energy systems, facilities engineering and maritime business lead to jobs on land.' }
      ]
    },

    mythsAndKnow: {
      preview: 'No military obligation. Some majors never go to sea for long.',
      myths: [
        { title: 'You have to join the Navy after.', text: "There's no service requirement. Some grads choose the military or the reserves, but most go straight to civilian jobs." },
        { title: 'Everyone spends months at sea.', text: 'License-track majors do the most time at sea. Other majors spend much less time at sea and do co-ops instead.' }
      ],
      know: [
        { title: 'Orientation is intense.', text: 'New cadets go through a demanding orientation before classes start. It covers drill, safety, firefighting and water survival.' },
        { title: 'Your time is not all yours.', text: 'Regiment duties, inspections and formations take real hours each week, especially as a freshman.' },
        { title: 'The student body skews male.', text: "It's more balanced than it used to be, but women are still a minority on campus. Worth knowing when you visit." },
        { title: 'Look at net price, not sticker price.', text: "In-state tuition is lower than at private schools, but uniforms and sea term add costs. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want structure and a job. Rough if you want freedom.',
      love: ['You want a clear path to a good-paying job', 'You like structure and teamwork', 'You want to work on ships or with big machines', "You're fine trading free time for a payoff later"],
      struggle: ['You hate rules, uniforms and inspections', "You're not sure what you want to do yet", 'You want a big, loose social scene']
    },

    people: {
      preview: 'Jobs and friendships win. Rules and freshman year are the complaints.',
      plus: ['Graduates get hired, often fast and for good pay', 'Sea term and the regiment build close friendships', 'Hands-on training you can use on day one of a job'],
      minus: ['Freshman year rules feel petty to a lot of people', 'Not much to do in Buzzards Bay in the winter', "Little room to switch paths if engineering or the sea isn't for you"]
    }
  }
});
