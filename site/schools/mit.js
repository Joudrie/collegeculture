registerSchool({
  id: 'mit', nameStyle: "slab",
  name: 'MIT',
  nameSub: 'Institute of Technology',
  state: 'Massachusetts',
  location: 'Cambridge, MA · Kendall Square',
  asOf: '2026',

  colors: {
    name: 'Engineers · Cardinal red and silver gray',
    swatches: ['#750014', '#8B959E'],
    band: '#750014',
    onBand: '#FFFFFF',
    onBandMuted: '#B8C2CC',
    stripe: '#8B959E',
    accent: '#750014',
    accentOnDark: '#FF6B75'
  },

  vibe: "Brutally hard classes, weird and proud of it, and way more fun than people think. Everyone works hard, but they mostly work together.",
  flags: ['Reach for everyone', 'Very heavy workload', 'Tests required', 'Aid is huge'],
  facts: [
    { label: 'Setting', value: 'City' },
    { label: 'Undergrads', value: '~4,600' },
    { label: 'Getting in', value: 'Extremely hard' },
    { label: 'Usual length', value: '4 years' },
    { label: 'Sports', value: 'Division III' },
    { label: 'Greek life', value: 'Common (FSILGs)' }
  ],

  sections: {
    "getThere": {"preview": "Red Line to Kendall/MIT; Logan Airport is close", "points": ["The Red Line stops at Kendall/MIT, right next to campus.", "Logan Airport is the main airport and is reachable by the T.", "You do not need a car here. Check the school's rules on first-year cars."]},
    "traditions": {"preview": "Hacks, Pi Day decisions and the Brass Rat ring", "items": ["Hacks are clever, harmless pranks pulled off around campus, and they are a big part of MIT's culture.", "MIT has released many of its admissions decisions on Pi Day, March 14.", "Students get a class ring called the Brass Rat."]},
    "living": {"preview": "Everyone lives somewhere with its own culture; food is mixed, Cambridge helps", "housing": ["Undergrads mostly live on campus, and first-years are placed in a residence.", "Each dorm has its own personality, and people care a lot about it.", "Some students live in fraternities or sororities, or off campus later."], "food": ["Dining options are spread across dorms and campus, not one big hall.", "Many dorms have kitchens, so a lot of students cook.", "Cambridge and Kendall Square are right there for off-campus food."]},
    vibe: {
      preview: 'Intense work, quirky culture, strong dorm and frat life',
      meters: {
        party:    { value: 5, note: 'Mostly frats and living groups' },
        campus:   { value: 6, note: 'On the river, connected by long hallways' },
        spirit:   { value: 4, note: 'Pride in MIT, not in sports' },
        pressure: { value: 9, note: 'The workload is no joke' },
        career:   { value: 10, note: 'Recruiters come to you' },
        greek:    { value: 6, note: 'A big chunk of undergrads join one' },
        religion: { value: 1, note: 'Secular, groups exist if you look' }
      }
    },

    social: {
      preview: 'Your dorm or living group is your world. Problem sets are social.',
      paragraphs: [
        "Where you live shapes your whole social life. MIT dorms each have their own personality, from loud and artsy to quiet and studious, and students pick and defend them hard. Freshmen live on campus.",
        "A big chunk of students join a fraternity, sorority or independent living group, called FSILGs. Many have their own houses, often across the river in Boston, and that's where a lot of parties happen.",
        "The surprising part is how much of social life is working together. People do problem sets in groups late at night, and that's how a lot of friendships start. Harvard Square and Boston are close when you need a break."
      ]
    },

    gettingIn: {
      preview: 'One of the hardest admits anywhere. Strong math and tests matter.',
      points: [
        { title: "It's a reach for everyone.", text: 'Students with perfect scores and big awards get turned down every year. Apply, but have other schools you love.' },
        { title: 'SAT or ACT is required.', text: 'MIT brought back the requirement in 2022 because scores help it predict who will handle the math. Check the current policy before you apply.' },
        { title: 'Early action is not binding.', text: "You can apply early, hear back sooner, and still go somewhere else. It doesn't lock you in." },
        { title: 'Show what you build.', text: "MIT cares about what you've made, fixed or explored for fun. A project you actually care about beats a list of clubs you joined to look good." }
      ]
    },

    who: {
      preview: 'Builders, coders, math and science people, and lots of quirky ones',
      paragraphs: [
        "People who love figuring out how things work. Computer science is by far the biggest major, with lots of engineering, math, physics and biology too. Students come from all over the country and the world.",
        "Everyone is smart, so nobody needs to prove it. The culture rewards being curious and a little weird. If you've been the only kid in your school who gets excited about a hard problem, you'll find your people fast."
      ]
    },

    knownFor: {
      preview: 'Engineering and CS, hacks, startups, and a famous workload',
      points: [
        { title: 'Science and engineering', text: "It's one of the top places in the world for engineering, computer science and the hard sciences. Undergrads can do real research through a program called UROP." },
        { title: 'Hacks', text: "MIT pranks are called hacks, like famous ones that put a police car on top of the Great Dome. They're a big part of the school's identity." },
        { title: 'Startups and jobs', text: 'Kendall Square around campus is packed with tech and biotech companies. Internships and job offers come easier than almost anywhere.' },
        { title: 'The workload', text: 'Students joke that MIT is like drinking from a firehose. The classes move fast and the problem sets are long.' }
      ]
    },

    stereotypes: {
      preview: '"All nerds who never sleep" is half true. "No social life" is a myth.',
      items: [
        { said: "It's all nerds who never sleep.", verdict: 'half', text: "People are proudly nerdy, and late nights are common. But most students sleep, have hobbies, play sports and go out. The nerd part is a compliment there." },
        { said: "There's no social life.", verdict: 'myth', text: "Between dorm culture, FSILGs and clubs, there's plenty going on. It just happens around a heavy workload." },
        { said: "It's cutthroat.", verdict: 'myth', text: "The work is hard, but students collaborate on problem sets and help each other. Most people describe it as everyone versus the material, not versus each other." },
        { said: "It's only for engineers.", verdict: 'half', text: "Most students are in science, engineering or CS, and everyone takes core math and science classes. But there are strong programs in economics, music and the humanities too." }
      ]
    },

    mythsAndKnow: {
      preview: 'It can cost less than a state school. Freshman fall is pass/fail.',
      myths: [
        { title: 'Only rich families can afford it.', text: "MIT's aid is need-based and very generous. Tuition is free for many families earning under about $200,000, and families under about $100,000 typically pay nothing at all. Check the current rules." },
        { title: 'You need to be a genius to survive.', text: "Everyone there struggles at some point. Students who make it use office hours, study groups and the help MIT offers. Asking for help is normal." }
      ],
      know: [
        { title: 'Your first semester is pass/no record.', text: "Freshman fall grades don't show on your transcript, so you can adjust to the pace without wrecking your GPA." },
        { title: 'Majors have numbers.', text: 'Students call majors by course number, like Course 6 for computer science and electrical engineering. You will pick up the lingo fast.' },
        { title: 'Sports are Division III.', text: "There are lots of varsity teams and they're easy to join, but don't expect big game days." },
        { title: 'Look at net price, not sticker price.', text: "What families pay after aid varies a lot. Use the net price calculator on the school's website." }
      ]
    },

    fit: {
      preview: 'Great if you love hard problems. Rough if you hate math.',
      love: ['You love math, science or building things', 'You want to work hard with people who get it', 'You like quirky traditions and odd humor', 'You want research or startups as an undergrad'],
      struggle: ["You don't like math and science core classes", 'You want big-time college sports', 'You want a light workload and lots of free time']
    },

    people: {
      preview: 'Amazing people and opportunities. The workload is the big complaint.',
      plus: ['Classmates are brilliant and collaborative', 'Research and job opportunities are everywhere', 'Dorm and living group culture is strong'],
      minus: ['The workload can be exhausting', 'Stress and burnout come up a lot', 'Campus architecture is more concrete than pretty in spots']
    }
  }
});
