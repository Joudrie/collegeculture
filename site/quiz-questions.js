/* College Culture quiz: questions. Every question is optional.
   quick: true = part of the 25-question Quick quiz. The Deep quiz asks everything.
   type: 'scale' (1-5 slider), 'choice' (pick one), 'multi' (pick any), 'pick3' (pick up to 3).
   imp: true = also ask "How much does this matter?" (1-5). */
window.QUIZ_SECTIONS = [
  { id: 'home', title: 'Home and location', questions: [
    { id: 'distance', weight: 1.5, quick: true, type: 'choice', imp: true, text: 'How far from home do you want to be?', needsZip: true,
      options: [['home', 'Close enough to live at home'], ['hour', 'Under an hour'], ['three', '1 to 3 hours'], ['far', 'Far away'], ['any', "Doesn't matter"]] },
    { id: 'live', weight: 1.5, quick: true, type: 'choice', imp: true, text: 'Live on campus or commute?',
      options: [['campus', 'Live on campus'], ['commute', 'Commute from home'], ['unsure', 'Not sure yet']] },
    { id: 'homeOften', quick: true, type: 'choice', imp: true, text: 'How often do you want to go home?',
      options: [['weekends', 'Most weekends'], ['sometimes', 'Now and then'], ['rarely', 'Basically never']] },
    { id: 'setting', weight: 1.5, quick: true, type: 'choice', imp: true, text: 'What kind of place?',
      options: [['big-city', 'Big city'], ['small-city', 'Small city'], ['college-town', 'College town'], ['rural', 'Rural and outdoorsy']] },
    { id: 'getAround', weight: 0.6, type: 'choice', imp: true, text: 'How will you get around?',
      options: [['car', "I'll have a car"], ['transit', 'I want buses and trains'], ['walk', 'I want everything walkable']] },
    { id: 'nature', weight: 0.6, type: 'choice', imp: true, text: 'What do you want nearby?',
      options: [['ocean', 'The ocean'], ['mountains', 'Mountains'], ['both', 'Both'], ['none', "Don't care"]] }
  ] },
  { id: 'size', weight: 1.5, title: 'Size and feel', questions: [
    { id: 'size', quick: true, type: 'choice', imp: true, text: 'How big a school?',
      options: [['tiny', 'Tiny (under 2,000)'], ['small', 'Small (2,000 to 5,000)'], ['medium', 'Medium (5,000 to 15,000)'], ['big', 'Big (15,000+)']] },
    { id: 'campus', quick: true, type: 'scale', imp: true, text: 'Campus scene or downtown scene?', low: 'City blocks', high: 'Quad and trees' },
    { id: 'knowName', quick: true, type: 'scale', imp: true, text: 'Do you want professors to know your name?', low: "Don't care", high: 'Definitely' },
    { id: 'lectures', quick: true, type: 'choice', imp: true, text: 'Big lecture halls OK?',
      options: [['fine', "Fine with me"], ['some', 'Some is OK'], ['small', 'Small classes only']] },
    { id: 'traditions', weight: 0.6, type: 'scale', imp: true, text: 'How much do traditions and school pride matter?', low: 'Not at all', high: 'A lot' }
  ] },
  { id: 'academics', title: 'Academics', questions: [
    { id: 'areas', weight: 1.5, quick: true, type: 'pick3', text: 'What do you want to study? Pick up to 3.',
      options: [['business', 'Business'], ['engineering-cs', 'Engineering or computer science'], ['health-nursing', 'Health or nursing'], ['sciences', 'Sciences'], ['arts-design', 'Art or design'], ['music-theater', 'Music or theater'], ['communications-media', 'Communications or media'], ['education', 'Education'], ['social-sciences', 'Psychology or social sciences'], ['humanities', 'English, history or languages'], ['criminal-justice', 'Criminal justice'], ['trades-technical', 'Hands-on technical'], ['hospitality-culinary', 'Culinary or hospitality'], ['maritime', 'Maritime'], ['undecided', 'No idea yet']] },
    { id: 'pressure', weight: 1.5, quick: true, type: 'scale', imp: true, text: 'How hard do you want classes to be?', low: 'Chill', high: 'Intense' },
    { id: 'grades', quick: true, type: 'choice', text: 'Honestly, where are your grades?', help: 'Only used to label schools as reach, match or likely. It never hides a school.',
      options: [['top', 'Near the top of my class'], ['above', 'Above average'], ['average', 'About average'], ['working', 'Still figuring it out']] },
    { id: 'curriculum', type: 'choice', imp: true, text: 'Explore freely, or follow a set track?',
      options: [['open', 'Let me explore'], ['track', 'I know what I want'], ['either', 'Either']] },
    { id: 'career', quick: true, type: 'scale', imp: true, text: 'How much should school point you toward a job?', low: 'Learning for fun', high: 'Everything is career' },
    { id: 'internships', quick: true, type: 'scale', imp: true, text: 'How much do internships or co-op matter?', low: 'Not much', high: 'A lot' },
    { id: 'fiveYears', weight: 0.6, type: 'choice', imp: true, text: 'Would you do 5 years for more real work experience?',
      options: [['yes', 'Yes'], ['no', 'No, 4 years'], ['maybe', 'Maybe']] },
    { id: 'abroad', weight: 0.6, type: 'scale', imp: true, text: 'Do you want to study abroad?', low: 'No interest', high: 'Big part of it' }
  ] },
  { id: 'social', title: 'Social life', questions: [
    { id: 'party', weight: 1.5, quick: true, type: 'scale', imp: true, text: 'Saturday night, ideally:', low: 'Quiet hang', high: 'Big party' },
    { id: 'greek', quick: true, type: 'choice', imp: true, text: 'Fraternities and sororities?',
      options: [['want', 'I want them'], ['either', 'Fine either way'], ['no', "I'd rather not"]] },
    { id: 'weekends', quick: true, type: 'choice', imp: true, text: 'Weekends on campus:',
      options: [['busy', 'Need it busy'], ['quiet', "Fine if it's quiet"]] },
    { id: 'socialWhere', weight: 0.6, quick: true, type: 'choice', imp: true, text: 'Where should your social life happen?',
      options: [['campus', 'On campus'], ['city', 'Out in the city'], ['both', 'A mix']] }
  ] },
  { id: 'sports', title: 'Sports and spirit', questions: [
    { id: 'spirit', quick: true, type: 'scale', imp: true, text: 'School spirit and big games:', low: "Don't care", high: 'Everything' },
    { id: 'play', quick: true, type: 'choice', imp: true, text: 'Do you want to play a sport?',
      options: [['varsity', 'Varsity'], ['club', 'Club'], ['fun', 'Just for fun'], ['no', 'No']] },
    { id: 'd1', type: 'choice', imp: true, text: 'Do you want Division I sports?',
      options: [['yes', 'Yes'], ['no', "Doesn't matter"]] }
  ] },
  { id: 'values', title: 'Values', questions: [
    { id: 'religion', quick: true, type: 'choice', imp: true, text: 'Religion on campus:',
      options: [['want', 'I want a religious school'], ['either', 'Fine either way'], ['secular', 'I prefer secular']] },
    { id: 'womens', type: 'choice', text: "Open to a women's college?",
      options: [['yes', 'Yes'], ['no', 'No'], ['na', "Doesn't apply"]] },
    { id: 'activism', weight: 0.6, type: 'scale', imp: true, text: 'A campus known for activism and speaking up?', low: 'Not for me', high: 'Love that' }
  ] },
  { id: 'money', title: 'Money', questions: [
    { id: 'cost', weight: 1.5, quick: true, type: 'choice', imp: true, text: 'How much does cost matter?', help: 'Uses public vs private and in-state, not real prices.',
      options: [['cheapest', 'I need the cheapest option'], ['lot', 'It matters a lot'], ['some', 'Somewhat'], ['none', 'Not a factor']] },
    { id: 'aid', type: 'choice', text: 'Would you look at pricey schools that give big aid?', help: 'Many top private schools end up cheaper than state schools for lots of families.',
      options: [['yes', 'Yes'], ['no', 'No']] }
  ] },
  { id: 'type', title: 'School type', questions: [
    { id: 'specialty', quick: true, type: 'multi', text: 'Open to any of these specialty schools?', help: "Leave blank if you only want regular colleges.",
      options: [['art', 'Art school'], ['music', 'Music conservatory'], ['maritime-military', 'Maritime or military'], ['engineering', 'Engineering-only'], ['business', 'Business-only'], ['health', 'Health sciences'], ['online-adult', 'Adult or online-focused']] },
    { id: 'structure', type: 'choice', imp: true, text: 'Structured life with uniforms and a set schedule, or freedom?',
      options: [['structured', 'Structured'], ['freedom', 'Freedom'], ['either', 'Either']] },
    { id: 'known', weight: 0.6, type: 'scale', imp: true, text: 'Do you want a school most people have heard of?', low: "Don't care", high: 'Yes' }
  ] },
  { id: 'deeper', title: 'Going deeper', questions: [
    { id: 'winter', type: 'scale', imp: true, text: 'How do you feel about long, snowy winters?', low: 'Love snow', high: 'Get me out' },
    { id: 'cityAccess', type: 'scale', imp: true, text: 'How much do you want a big city close by for internships and jobs?', low: "Don't need it", high: 'Must have' },
    { id: 'research', type: 'scale', imp: true, text: 'Do you want to do research with professors?', low: 'Not for me', high: 'Big goal' },
    { id: 'business', type: 'choice', imp: true, text: 'Do you want to start your own business someday?',
      options: [['yes', 'Yes'], ['maybe', 'Maybe'], ['no', 'No']] },
    { id: 'workJob', type: 'choice', imp: true, text: 'Will you need to work a job during school?',
      options: [['yes', 'Yes, a lot'], ['some', 'Some'], ['no', 'No']] },
    { id: 'diversity', type: 'scale', imp: true, text: 'How much do you want a diverse campus?', low: "Doesn't matter", high: 'A lot' },
    { id: 'schoolKind', type: 'choice', imp: true, text: 'Small liberal arts college or bigger university?',
      options: [['liberal-arts', 'Liberal arts college'], ['university', 'University'], ['either', 'Either']] }
  ] },
  { id: 'vibe', title: 'Vibe and dealbreakers', questions: [
    { id: 'tags', weight: 0.6, quick: true, type: 'pick3', text: 'Pick up to 3 words for your ideal campus.',
      options: [['preppy', 'Preppy'], ['artsy', 'Artsy'], ['nerdy', 'Nerdy'], ['outdoorsy', 'Outdoorsy'], ['sporty', 'Sporty'], ['chill', 'Chill'], ['ambitious', 'Ambitious'], ['quirky', 'Quirky'], ['social', 'Social'], ['tight-knit', 'Tight-knit'], ['activist', 'Activist'], ['diverse', 'Diverse']] },
    { id: 'outdoors', weight: 0.6, quick: true, type: 'scale', imp: true, text: 'Hiking, skiing and outdoors stuff nearby?', low: "Don't care", high: 'Must have' },
    { id: 'miserable', type: 'multi', text: 'Anything that would make you miserable?',
      options: [['tiny-town', 'A tiny town'], ['no-parties', 'No parties'], ['huge-classes', 'Huge classes'], ['long-commute', 'A long commute'], ['religious-rules', 'Religious rules'], ['greek-heavy', 'Greek life everywhere'], ['big-city', 'Big city noise']] },
    { id: 'dealbreakers', quick: true, type: 'multi', text: 'Dealbreakers. These hide schools that fail them.',
      options: [['dorms', 'Must have dorms'], ['no-greek', 'No Greek life'], ['not-religious', 'Must not be religious'], ['d1', 'Must have D1 sports'], ['distance', 'Must be within my distance'], ['major', 'Must have my study area'], ['states', 'Must be in my states']] }
  ] }
];

window.QUIZ_CITIES = [
  ['boston', 'Boston', 42.360, -71.058], ['providence', 'Providence', 41.824, -71.413], ['worcester', 'Worcester', 42.263, -71.802],
  ['hartford', 'Hartford', 41.764, -72.685], ['new-haven', 'New Haven', 41.308, -72.928], ['springfield', 'Springfield', 42.101, -72.590],
  ['manchester', 'Manchester, NH', 42.996, -71.455], ['portland', 'Portland, ME', 43.661, -70.255], ['burlington', 'Burlington, VT', 44.476, -73.212],
  ['nyc', 'New York City', 40.713, -74.006]
];

window.QUIZ_STATES = [['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['DC','Washington, DC'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming']];
