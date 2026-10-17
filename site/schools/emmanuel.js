registerSchool({
  id: 'emmanuel',
  name: 'Emmanuel',
  nameSub: 'College',
  title: 'Emmanuel College',
  state: 'Massachusetts',
  location: 'Boston, MA · Fenway / Longwood',
  asOf: '2026',

  colors: {
    name: 'Saints · Blue and gold',
    swatches: ['#1F4B7E', '#F2B90B'],
    band: '#1F4B7E',
    onBand: '#FFFFFF',
    onBandMuted: '#C9D3E0',
    stripe: '#F2B90B',
    accent: '#1F4B7E',
    accentOnDark: '#F2B90B'
  },

  vibe: "A small Catholic college with a real green quad, tucked between Fenway Park and the Longwood hospitals. It feels like a little campus with a huge city and a bunch of top hospitals right outside the gate.",
  flags: ['Small campus', 'Next to hospitals', 'Catholic', 'Quiet weekends'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~1,800' },
    { label: 'Getting in', value: 'Most get in' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'None' }
  ],

  sections: {
    "getThere": {"preview": "Green Line and Orange Line nearby in Boston", "points": ["Campus is in the Longwood area, close to Green Line and Orange Line stops and city buses.", "Logan Airport is the main airport and is reachable by the T.", "You do not need a car in Boston. Check the school's rules on first-year cars."]},
    "living": {"preview": "Small city school; many live on campus, food mixed with Boston options", "housing": ["Many students live on campus in residence halls.", "Campus is in Boston's Longwood area, so it's urban.", "Upperclassmen often move off campus, and Boston rent is high."], "food": ["There's a main dining hall on campus.", "Students call it okay.", "The area around campus has lots of places to eat."]},
    vibe: {
      preview: 'Small and close-knit, strong for health and science, Boston for fun',
      meters: {
        party:    { value: 3, note: 'Low-key on campus, people go out in the city' },
        campus:   { value: 6, note: 'Real quad, small footprint' },
        spirit:   { value: 3, note: 'Small crowds at Division III games' },
        pressure: { value: 5, note: 'Heavier for nursing and pre-med' },
        career:   { value: 8, note: 'Everyone does an internship' },
        greek:    { value: 0, note: 'No fraternities or sororities' },
        religion: { value: 4, note: 'Catholic roots, not pushed on you' }
      }
    },

    social: {
      preview: 'Small dorm community, then Boston and the other Fenway schools',
      paragraphs: [
        "With about 1,800 undergrads, you will recognize a lot of faces fast. Friend groups form in the dorms, on teams and in clubs. Students often describe it as close-knit, but some say it can feel like high school because everyone knows everyone.",
        "There isn't much of a party scene on campus, and students say the dorm rules are on the strict side. Most nights out happen in the city: Fenway, Kenmore Square, and friends at bigger schools nearby.",
        "Emmanuel is part of the Colleges of the Fenway with Simmons, MassArt, MCPHS and Wentworth. You can take classes, join clubs and play intramurals with those students, which makes the school feel bigger than it is."
      ]
    },

    gettingIn: {
      preview: 'Most applicants get in. Tests are optional.',
      points: [
        { title: "It's not super hard to get into.", text: 'Most people who apply are admitted. Solid grades in core classes go a long way.' },
        { title: 'Tests are optional.', text: "You don't have to send SAT or ACT scores. Check the current policy before you apply." },
        { title: 'There are a lot of ways to apply.', text: 'Early decision, early action and regular rounds, plus rolling admission later. Applying early gives you an answer sooner.' },
        { title: 'Merit aid is common.', text: 'Many students get scholarships. The sticker price is not what most families pay.' }
      ]
    },

    who: {
      preview: 'Future nurses, doctors and scientists, plus business and education',
      paragraphs: [
        "A lot of students are here for biology, nursing, neuroscience, psychology and pre-med, because the Longwood Medical Area is a short walk away. Business, education and political science students are a solid chunk too. Many are from Massachusetts and nearby states.",
        "It fits people who want a small school where professors know them, but don't want to be stuck in the middle of nowhere. Emmanuel was a women's college until 2001, and it still has more women than men."
      ]
    },

    knownFor: {
      preview: 'Longwood hospitals next door, required internships, Merck on campus',
      points: [
        { title: 'The location', text: "Boston's biggest hospitals and research centers are steps away. Students intern at places like Dana-Farber, Boston Children's and Brigham and Women's." },
        { title: 'Required internships', text: 'Every student does an internship as part of the core curriculum. Career advisors help you find one.' },
        { title: 'A drug company on campus', text: 'Merck has a research building on land it leases from the college. That deal helped pay for new dorms and buildings.' },
        { title: 'Colleges of the Fenway', text: 'Five small schools share classes, clubs and events, so you get some big-school options at a small school.' }
      ]
    },

    stereotypes: {
      preview: '"Pre-med school" is half true. "Super religious" is a myth.',
      items: [
        { said: "It's basically a pre-med and nursing school.", verdict: 'half', text: 'Health and science majors are a big part of the school and get the most attention. There are plenty of business, education, politics and art students too.' },
        { said: "Everyone is super religious.", verdict: 'myth', text: "It's a Catholic college with Mass and campus ministry if you want them. Most students say faith is your choice and nobody pushes it." },
        { said: "There's no social life.", verdict: 'half', text: "On campus it's quiet, especially on weekends. People who use Boston and the other Fenway schools find plenty to do." },
        { said: "It's a backup for the big Boston schools.", verdict: 'half', text: "Some students did apply to BU or Northeastern first. A lot of them say they ended up liking the small classes and the location." }
      ]
    },

    mythsAndKnow: {
      preview: 'Housing all four years, Green Line nearby, nursing is demanding',
      myths: [
        { title: 'Small school means no opportunities.', text: 'The internship requirement and the hospitals next door give you more real experience than a lot of bigger schools.' },
        { title: 'You need to be Catholic.', text: 'You do not. Students of all faiths and no faith go here.' }
      ],
      know: [
        { title: 'Housing is available all four years.', text: "That's rare in Boston. Students do complain that some dorms are crowded or dated, and the rules can be strict." },
        { title: "You don't need a car.", text: 'The Green Line and buses are close by, and Fenway Park and the MFA are walkable.' },
        { title: 'Nursing and pre-med take real work.', text: 'Science-heavy majors have tough classes. Talk to students in your major before you commit.' },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you want health care in Boston. Rough if you want big parties.',
      love: ['You want a career in health care or science', 'You want small classes in a big city', 'You like knowing a lot of people on campus', 'You want internships starting early'],
      struggle: ['You want a big party scene on campus', 'You want big-time sports and school spirit', 'You want a school where nobody knows your business']
    },

    people: {
      preview: 'Location and internships win. Housing rules and quiet weekends are the complaints.',
      plus: ['The location next to the hospitals is hard to beat', 'Professors know your name', 'Required internships build a real resume'],
      minus: ['Dorm rules feel strict to some students', 'Weekends on campus can be quiet', 'Some facilities feel dated']
    }
  }
});
