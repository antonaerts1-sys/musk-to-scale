// Alle cijfers, teksten en bronnen van de pagina.
// Onderzoek achter elk cijfer: bronnen/2026-11-onderzoek-*.md
// Bedragen in USD. Euro omgerekend aan ECB-referentiekoers 24/11/2026: 1 EUR = 1.0963 USD.
// `at` = positie in de balk, uitgedrukt in dollars vanaf het begin van Musks balk.

window.DATA = {
  asOf: '25 November 2026',
  netWorth: 816.9e9, // Forbes Real-Time, 25 Nov 2026, 06:50 UTC

  tokens: {
    yearsOfWork: '15 million'   // 816.9e9 / 52,800 = 15.5 million years
  },

  // Rhythm, in screens: a new text at least every 4.5 screens, never closer than 1.7.
  rhythm: { maxScreens: 4.5, minScreens: 1.7 },

  // Base numbers for the computed progress cards (all sourced below).
  base: {
    wage: 52800,          // typical full-time gross pay, Belgium [[statbel]]
    lifetime: 2060000,    // Belgian working life [[eurostat]]
    population: 11867634, // Belgium, 1 Jan 2026 [[statbel-pop]]
    oda: 2.72e9,          // Belgian development aid 2025 [[oda]]
    health: 51.3e9,       // RIZIV budget 2026 [[riziv]]
    malariaGap: 5.4e9,    // WHO malaria funding gap per year [[who-malaria]]
    perDay: 521.4e6       // Musk's average gain per day in 2025 [[bloomberg-2025]]
  },

  // Income per person a year, 2025 (World Bank, GNI per capita, Atlas method) [[wb-gni]]
  income: { lic: 811, bdi: 240, mwi: 600, ner: 750, moz: 570, sle: 830, ssf: 1610, ind: 2760 },
  people: { lic: 767490169, poor: 816938142 },

  // Progress lines fill long silences in the bar. Each line is used once, in
  // order; "min" holds a line back until the bar has reached that amount.
  // When the lines run out, the silence gets only a quiet counter.
  progress: {
    look: [
      { t: "That is a year of income for {nLic} people in the world's poorest countries, where income averages $811 per person. [[wb-gni]]" },
      { race: { name: 'Burundi, a whole year', usd: 3.36e9 }, min: 3.4e9, t: 'More than the whole economy of Burundi produces in a year. 14.4 million people live there. [[wb-gdp]]' },
            { min: 4e9, t: 'In Burundi, income is about $240 per person a year. This stretch is a year of income for {nBdi} people, many times the whole country. [[wb-gni]]' },
      { t: 'Saving $1,000 a day, this stretch alone would take you {saveYears} years.' },
      { race: { name: 'Sierra Leone, all income for a year', usd: 7.32e9 }, min: 7.4e9, t: 'More than all 8.8 million people in Sierra Leone earn in a year together, at about $830 each. [[wb-gni]]' },
      { race: { name: 'Malawi, a whole year', usd: 14.92e9 }, min: 14.92e9, t: 'Past the whole yearly economy of Malawi: $14.9 billion, for 22 million people. [[wb-gdp]]' },
      { t: 'Half of humanity lives on less than about <span class="nc">$9</span> a day, even after adjusting for local prices. [[wb-median]]' },
      { t: 'A year of income in Niger is about $750. This stretch would pay that to {nNer} people. [[wb-gni]]' },
      { race: { name: 'Haiti, a whole year', usd: 32.08e9 }, min: 32.1e9, t: 'More than Haiti produces in a year: $32 billion, for 11.9 million people. [[wb-gdp]]' },
      { t: 'In 2025 he gained this much in about {gainDays} days. [[bloomberg-2025]]' },
      { t: 'Across sub-Saharan Africa, income averages $1,610 per person a year. This is a year of income for {nSsf} people. [[wb-gni]]' },
      { race: { name: 'Uganda, a whole year', usd: 61.99e9 }, min: 62e9, t: 'Past the whole yearly economy of Uganda: $62 billion, for 51 million people. [[wb-gdp]]' },
      { t: 'It would close the malaria funding gap for {nMalaria} years. [[who-malaria]]' },
      { t: 'At the average income in Mozambique, $570 a year, you would need {nMoz} years to earn this. [[wb-gni]]' },
      { race: { name: 'DR Congo, a whole year', usd: 91.03e9 }, min: 91.1e9, t: 'You have now passed the entire yearly economy of the DR Congo: $91 billion, for 113 million people. [[wb-gdp]]' },
      { t: 'Split over all 767 million people in the 25 low-income countries, this stretch is {perLic} each. [[wb-gdp]]' },
      { race: { name: 'Ethiopia, a whole year', usd: 126.36e9 }, min: 126.4e9, t: 'More than Ethiopia produces in a year: $126 billion, for 135 million people. [[wb-gdp]]' },
      { t: 'In India, income is about $2,760 per person a year. This is a year of income for {nInd} people. [[wb-gni]]' },
      { race: { name: 'Kenya, a whole year', usd: 135.94e9 }, min: 136e9, t: 'Past the whole yearly economy of Kenya: $136 billion, for 58 million people. [[wb-gdp]]' }
    ],
    spend: [
      { t: 'Every pixel you scroll through this dark block is {perPx} put to work.' },
      { t: 'Each dark block is drawn to scale, like everything else on this page.' },
      { t: 'And he still has {leftHere}.' },
      { min: 332e9, t: 'That is {pctSpent} of his fortune.' },
      { t: 'Not one of these blocks would stop him being the richest person on Earth.' },
      { race: { name: 'Nigeria, a whole year', usd: 290.79e9, basis: 'spent' }, min: 523e9, t: "That is more than Nigeria, Africa's most populous country, produces in a year: $291 billion, for 238 million people. [[wb-gdp]]" }
    ],
    tail: [
      { race: { name: 'Bangladesh, a whole year', usd: 456.32e9 }, t: 'You have now scrolled past more than Bangladesh produces in a year: $456 billion, for 176 million people. [[wb-gdp]]' },
      { t: 'Saving $1,000 a day, the part you scrolled would take {saveYears} years.' },
      { race: { name: 'All 25 low-income countries, a year', usd: 642.67e9 }, min: 700e9, t: 'More than all 25 low-income countries produce in a year, together: $643 billion, for 767 million people. [[wb-gdp]]' },
      { t: 'In 2025 he gained this much in about {gainDays} days. [[bloomberg-2025]]' },
      { t: 'Split over all 817 million people in extreme poverty, his whole fortune would be about $1,000 each. [[wb-poverty]]' }
    ]
  },

  // Chapters of short explainer cards, spread evenly over their range of the bar.
  chapters: [
    { title: 'What a number this big means', from: 646e9, to: 688e9, cards: [
      { title: 'Count it out loud', html: 'One dollar per second, day and night, no breaks. A million takes 11.6 days. A billion takes 31.7 years. His fortune would take about 25,900 years.' },
      { title: 'Spend a million a day', html: 'If he spent $1 million every single day and earned nothing more, the money would last about 2,240 years.' },
      { title: 'Save a thousand a day', html: 'Put $1,000 aside every day. To reach his fortune you would need about 2.2 million years.' },
      { title: 'Share it with everyone', html: 'Split evenly over all 8.2 billion people on Earth, it comes to about $100 each. [[wb-pip]] For one person, it is all of that at once.' },
      { title: 'A million is not a billion', html: 'A million dollars is a square of 32 by 32 pixels. A billion is a block of {blockDims}. This bar holds 817 of those blocks.' }
    ] }
  ],

  calibration: [
    { usd: 1000, label: '$1,000. That is this one pixel.', value: '1 px' },
    { usd: 28800, label: "A year on Belgium's minimum wage, before tax [[cnt]]", value: '~$28,800' },
    { usd: 52800, label: 'A year of pay for a typical full-time worker in Belgium, before tax [[statbel]]', value: '~$52,800' },
    { usd: 395000, label: 'An average house in Belgium [[fednot]]', value: '~$395,000' },
    { usd: 2060000, label: 'A whole working life in Belgium: 35.7 years of typical pay [[eurostat]]', value: '~$2.06 million' },
    { usd: 1e9, label: 'One billion dollars. Keep this block in mind.', value: '$1,000,000,000', inside: '{blockLen}' }
  ],

  story: [
    { at: 0.6e9, type: 'note', title: 'Every 10 pixels you scroll is {perTen}.',
      html: 'That is {livesPerTen} Belgian working lives, gone in a flick of your thumb. [[eurostat]]' },

    { at: 2.72e9, type: 'milestone', icon: 'heart', title: "Belgium's development aid", value: '$2.72 billion, all of 2025',
      html: 'Everything Belgium spent on aid to other countries in a year. [[oda]]' },

    { at: 4.2e9, type: 'square', usd: 2060000, label: 'Remember the working life? Here it is again, inside his fortune.' },

    { at: 6.6e9, type: 'milestone', icon: 'utensils', title: 'The famine plan he asked for', value: '$6.6 billion, 2021',
      html: '<p>In late 2021 the UN World Food Programme asked billionaires for $6.6 billion to keep 42 million people from famine for a year. Musk answered on Twitter. [[fortune-2021]]</p>' },

    { at: 7.8e9, type: 'note', title: 'What happened next',
      posts: [
        { who: 'Elon Musk', meta: '@elonmusk · 31 October 2021', text: 'If WFP can describe on this Twitter thread exactly how $6B will solve world hunger, I will sell Tesla stock right now and do it.' },
        { who: 'David Beasley, head of the WFP', meta: 'reply', text: '$6B will not solve world hunger, but it WILL prevent geopolitical instability, mass migration and save 42 million people on the brink of starvation.' }
      ],
      html: '<p>WFP published the plan. [[wfp]] A few weeks later Musk gave away about $5.7 billion in Tesla shares. In 2022 Bloomberg reported that the gift went to his own foundation. [[fortune-2022]] [[beasley]]</p>' },

    { at: 9.0e9, type: 'milestone', icon: 'crown', title: 'The richest person in Belgium', value: 'Eric Wittouck, $9.0 billion',
      html: 'You just scrolled past his entire fortune. [[forbes-be]]' },

    { at: 12e9, type: 'note', title: "OK, we're almost at the end now." },
    { at: 13.6e9, type: 'note', title: 'Just kidding.', html: "You're {here} of the way. Keep scrolling." },

    { at: 16.338e9, type: 'milestone', icon: 'landmark', title: 'A 2% tax', value: '$16.3 billion a year',
      html: 'A yearly 2% tax on this one fortune would raise about this much. That is the rate economists proposed to the G20. [[zucman]]' },

    { at: 25e9, type: 'note', viz: 'people', title: '817 million people live on less than <span class="nc">$3</span> a day.',
      html: 'Every dot is a million people. What you have scrolled so far would give each of them {perPoor}. [[wb-poverty]]' },

    { at: 35e9, type: 'milestone', icon: 'globe', title: "USAID's yearly budget", value: 'more than $35 billion, 2024 [[crs]]',
      html: `<p>In February 2025, while leading DOGE, Musk wrote that "USAID is a criminal organization." [[hill]] By July 2025 the agency had effectively shut down. [[time]]</p><p>A study in The Lancet estimates the aid cuts could cause about 14 million extra deaths by 2030, 4.5 million of them children under five. [[lancet]]</p>` },

    { at: 44e9, type: 'milestone', icon: 'x', title: 'Twitter', value: '$44 billion, 2022',
      html: 'What he paid for the platform he later renamed X. [[twitter]]' },

    { at: 51.3e9, type: 'milestone', icon: 'pill', title: 'Belgian health insurance, for a year', value: '$51.3 billion, 2026',
      html: 'The entire 2026 budget for public health insurance in Belgium: every doctor visit, hospital stay and medicine it reimburses. [[riziv]]' },

    { at: 55.1e9, type: 'milestone', icon: 'crown', title: 'All 18 Belgian billionaires, combined', value: '$55.1 billion',
      html: 'Every billionaire in Belgium, put together. [[forbes-be]]' },

    { at: 75e9, type: 'note', title: 'Half a billion dollars a day.',
      html: 'In 2025 alone his fortune grew by $190 billion, about $521 million a day. [[bloomberg-2025]] That is a year of income for about 640,000 people in the world\'s poorest countries. Every single day. [[wb-gni]]' },

    { at: 110e9, type: 'note', title: 'Still him.', html: 'Nothing else is happening in this bar. It is just one person.' },

    { at: 139e9, type: 'milestone', icon: 'crown', title: 'Jeff Bezos, 2020', value: '$139 billion',
      html: 'The fortune the original version of this page drew in 2020. It took a long scroll then. [[original]]' },

    { at: 160e9, type: 'note', title: 'He was worth even more in June.',
      html: 'On 12 June 2026, the day SpaceX went public, he became the first person in history worth a trillion dollars. [[bloomberg-trillion]] He has slipped below that since. [[forbes-rt]]' },

    { at: 202.9e9, type: 'milestone', icon: 'crown', title: 'Mark Zuckerberg', value: '$202.9 billion',
      html: 'His entire fortune, on the same day. [[forbes-rt]]' },

    { at: 214e9, type: 'note', title: "Let's put it to use.",
      html: 'The next stretch of the bar is spent on things the world already knows how to fix and has priced. Each dark block is drawn to scale. Watch how much bar is left afterwards.' }
  ],

  // Jump menu: where each part of the story starts (in dollars along the bar)
  nav: [
    { name: 'Amounts you know', at: 0 },
    { name: 'Why so little tax?', at: 16.338e9 },
    { name: 'Where does it come from?', at: 55.1e9 },
    { name: 'How did we get here?', at: 139e9 },
    { name: 'Spend it on the world', at: 214e9 },
    { name: 'Still his', at: 645e9 },
    { name: 'Public money, private fortune', at: 690e9 },
    { name: 'What can you do?', section: 'act' }
  ],

  spendStart: 232e9,
  spending: [
    { icon: 'bug', kicker: 'Malaria · 5 years', title: "Close the malaria funding gap until 2030", usd: 27e9, cost: '$5.4 billion a year x 5 = $27 billion',
      html: '<p>Malaria killed 610,000 people in 2024. In Africa, about three in four were children under five. The WHO says funding falls about $5.4 billion a year short of what is needed. [[who-malaria]]</p>' },

    { icon: 'syringe', kicker: 'Vaccines · 2026-2030', title: "Pay Gavi's full vaccine budget", usd: 11.9e9, cost: '$11.9 billion',
      html: '<p>Gavi asked for $11.9 billion to vaccinate 500 million children and save at least 8 million lives in 2026-2030. Donors came up short. [[gavi]]</p>' },

    { icon: 'pill', kicker: 'AIDS, TB, malaria · 2027-2029', title: 'Fully fund the Global Fund', usd: 18e9, cost: '$18 billion',
      html: '<p>The Global Fund asked for $18 billion, which it says would save 23 million lives. Donors pledged $12.64 billion. [[globalfund]]</p>' },

    { icon: 'users', kicker: 'Humanitarian aid · 2026', title: "Fund the UN's entire humanitarian appeal", usd: 33e9, cost: '$33 billion',
      html: '<p>For 135 million people in 50 countries hit by war, disaster and hunger. In 2025, donors gave $12 billion, the lowest in a decade. [[un-gho]]</p>' },

    { icon: 'globe', kicker: 'Foreign aid · 1 year', title: "Restore USAID's budget for a year", usd: 35e9, cost: '$35 billion',
      html: '<p>One year of what the agency managed before the 2025 cuts. [[crs]]</p>' },

    { icon: 'utensils', kicker: 'Hunger · 5 years', title: 'Invest in ending hunger', usd: 165e9, cost: '$33 billion a year x 5 = $165 billion',
      html: '<p>About 673 million people went hungry in 2024. [[fao]] Researchers estimated it takes an extra $33 billion a year, mostly invested in small farms, to end hunger by 2030. [[ceres]] This pays for five of those years.</p>' },

    { icon: 'droplet', kicker: 'Water and toilets · 1 year', title: 'A year of building safe water and sanitation for everyone', usd: 114e9, cost: '$114 billion',
      html: '<p>2.1 billion people lack safely managed drinking water and 3.4 billion lack safe sanitation. [[jmp]] The World Bank estimated the building cost of reaching everyone at about $114 billion a year until 2030. [[worldbank-water]] This is one full year of it.</p>' }
  ],

  tail: [
    { at: 645e9, type: 'note', title: 'All of that: {spent}.',
      html: 'Malaria, vaccines, AIDS and TB, every UN humanitarian appeal, a year of USAID, five years against hunger, a year of water and toilets for the world.' },
    { at: 690e9, type: 'note', viz: 'drain', title: 'And he would still have {remaining}.',
      html: 'Everything in this bar that is not dark red. That is still more than Jeff Bezos ($371.7 billion). [[forbes-rt]] He would still be the richest person on Earth.' },
    { at: 770e9, type: 'note', title: 'Almost there. This time for real.' }
  ],

  outro: `<p>You just scrolled past {barPx} pixels. On a normal screen, that bar is about {barMetres} metres long.</p>
<p>Nobody earns this by working. On a typical Belgian wage, it would take about {yearsOfWork} years.</p>
<p>We could have funded malaria, vaccines, AIDS and TB treatment, all of the UN's humanitarian aid, a year of USAID, five years against hunger and a year of clean water for the world, and he would still be the richest person alive.</p>
<p>No single person needs this much. And no society needs to let it pile up like this.</p>`,

  peers: {
    lede: 'Ten tech fortunes, all measured by Forbes at the same moment. [[forbes-rt]] We zoomed out: here, only the length of the bar counts. Musk alone is worth more than the Google founders and Mark Zuckerberg combined.',
    list: [
      { name: 'Elon Musk', company: 'Tesla, SpaceX', usd: 816.9e9, musk: true },
      { name: 'Jeff Bezos', company: 'Amazon', usd: 371.7e9 },
      { name: 'Larry Page', company: 'Google', usd: 231.8e9 },
      { name: 'Sergey Brin', company: 'Google', usd: 213.4e9 },
      { name: 'Mark Zuckerberg', company: 'Meta', usd: 202.9e9 },
      { name: 'Michael Dell', company: 'Dell Technologies', usd: 186.3e9 },
      { name: 'Steve Ballmer', company: 'Microsoft', usd: 155.2e9 },
      { name: 'Larry Ellison', company: 'Oracle', usd: 147.8e9 },
      { name: 'Jensen Huang', company: 'Nvidia', usd: 135.5e9 },
      { name: 'Bill Gates', company: 'Microsoft', usd: 119.6e9 },
      { name: 'A Belgian working life', company: 'for scale', usd: 2.06e6, value: '$2.06 million: too small to see' }
    ],
    note: 'Forbes Real-Time Billionaires, 25 November 2026, 06:50 UTC. Fortunes move by billions every day.'
  },

  actions: [
    { primary: true, title: 'Give 10%',
      html: `<p>You are not a billionaire, but your money still goes far. Giving What We Can asks people to pledge at least 10% of their income to the charities that do the most good. More than 11,000 people in 122 countries have. [[gwwc]]</p><p>Not ready? A trial pledge lets you pick your own percentage, for six months to five years.</p><p>The best charities save a life for roughly $3,000 to $5,500, according to GiveWell. [[givewell]] In Belgium, Effectief Geven can make some of these gifts tax-deductible; check the conditions. [[eabelgium]]</p>`,
      link: 'https://www.givingwhatwecan.org/pledge', linkText: 'Take the pledge' },

    { title: 'Back a billionaire tax',
      html: `<p>Billionaires pay the equivalent of 0 to 0.5% of their wealth in tax each year. [[gter]] Between 2014 and 2018, Musk's "true tax rate" was 3.27%, by ProPublica's count. [[propublica]]</p><p>Economist Gabriel Zucman proposed a simple fix to the G20: every billionaire pays at least 2% of their wealth a year. About 3,000 people worldwide, raising $200 to $250 billion a year. [[zucman]] For Musk alone, that is about $16 billion a year.</p><p>The G20 agreed in 2024 that the very richest should be "effectively taxed", without a rate. [[g20]] France's parliament voted the 2% tax down in October 2025. [[france]] It will only happen if voters ask for it. Tell your representatives.</p>`,
      link: 'https://taxobservatory.world//www-site/uploads/2024/06/Zucman-Report-Executive-Summary-EN.pdf', linkText: 'Read the proposal' },

    { title: 'Share this page',
      html: '<p>Most people underestimate how rich the richest are. Scale is the point. Send this to one person who has never scrolled through a billion dollars.</p>',
      share: true, linkText: 'Share the link' }
  ],

  method: `One pixel is $1,000. The bar is {barT} pixels {thickWord}, so each pixel you scroll {dirWord} is {perPx}. Musk's net worth is the Forbes Real-Time estimate of {netWorthFull} on {asOf}; it moves by billions a day. Belgian amounts are converted from euros at the ECB reference rate of 24 November 2026, 1 EUR = 1.0963 USD. [[ecb]] The euro switch converts every amount at that same rate, including older figures; amounts in international dollars (adjusted for local prices) and quotes stay in dollars. Belgian pay is Statbel's latest full-time median gross monthly wage (October 2022) including double holiday pay, excluding the end-of-year bonus. Lengths assume a standard screen of 96 pixels per inch. Costs are shown with their own time span: per year, per period, or one-off.`,

  sources: [
    { id: 'forbes-rt', text: 'Forbes Real-Time Billionaires, snapshot 25 November 2026, 06:50 UTC.', url: 'https://www.forbes.com/real-time-billionaires/' },
    { id: 'bloomberg-trillion', text: 'Bloomberg Law, "Elon Musk becomes world\'s first trillionaire after SpaceX IPO", 12 June 2026.', url: 'https://news.bloomberglaw.com/banking-law/elon-musk-becomes-worlds-first-trillionaire-after-spacex-ipo' },
    { id: 'bloomberg-2025', text: 'Bloomberg Billionaires Index, year-end 2025 report: "Elon Musk saw the largest increase, with his fortune jumping $190.3 billion to $622.7 billion" (via TBS News).', url: 'https://www.tbsnews.net/world/global-economy/worlds-500-richest-add-record-22tn-2025-wealth-gap-widens-1327366' },
    { id: 'statbel', text: 'Statbel, Overview of Belgian wages and salaries (October 2022): median gross monthly wage of full-time employees EUR 3,728. Annualised x 12.92 incl. double holiday pay.', url: 'https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries' },
    { id: 'cnt', text: 'National Labour Council (CNT/NAR), guaranteed average minimum monthly income EUR 2,189.81 from April 2026, x 12.', url: 'https://cnt-nar.be/sites/default/files/press_releases/nl/2026-03-24-N_1.pdf' },
    { id: 'fednot', text: 'Fednot, Property barometer Q3 2026: average house price EUR 360,613 (January to September 2026).', url: 'https://www.fednot.be/nl/nieuws/vastgoedbarometer-3de-trimester-2026-afkoelende-markt-prijzen-nog-lichtjes-in-de-lift/' },
    { id: 'eurostat', text: 'Eurostat, Duration of working life, Belgium, 2025: 35.7 years. Multiplied by the average full-time gross annual wage (EUR 52,662, Statbel 2022 incl. holiday pay).', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsi_dwl_a?geo=BE&lang=en' },
    { id: 'statbel-pop', text: 'Statbel, Structure of the population: 11,867,634 inhabitants on 1 January 2026.', url: 'https://statbel.fgov.be/en/themes/population/structure-population' },
    { id: 'wb-gni', text: 'World Bank, World Development Indicators: GNI per capita, Atlas method (current US$), 2025 (updated 11 November 2026). Burundi 240, Madagascar 560, Mozambique 570, Malawi 600, Niger 750, Sierra Leone 830, India 2,760, sub-Saharan Africa 1,610, low-income countries 811. This is national income divided by everyone, children included, not a wage.', url: 'https://data.worldbank.org/indicator/NY.GNP.PCAP.CD' },
    { id: 'wb-gdp', text: 'World Bank, World Development Indicators: GDP (current US$) and population, 2025 (updated 11 November 2026). Burundi $3.36 bn, 14.4 m; Malawi $14.9 bn, 22.2 m; Haiti $32.1 bn, 11.9 m; Uganda $62.0 bn, 51.4 m; DR Congo $91.0 bn, 112.8 m; Ethiopia $126.4 bn, 135.5 m; Kenya $135.9 bn, 57.5 m; Nigeria $290.8 bn, 237.5 m; Bangladesh $456.3 bn, 175.7 m; the 25 low-income countries $642.7 bn, 767.5 m.', url: 'https://data.worldbank.org/indicator/NY.GDP.MKTP.CD' },
    { id: 'wb-poverty', text: 'World Bank, Poverty and Inequality Platform (release September 2026): 816,938,142 people below the $3.00-a-day line (2021 PPP), 2025 nowcast.', url: 'https://pip.worldbank.org/' },
    { id: 'wb-median', text: 'Our calculation on World Bank Poverty and Inequality Platform data: the line at which half the world falls below it is about $9.20 a day in 2024 (2021 PPP, income or consumption per person).', url: 'https://pip.worldbank.org/' },
    { id: 'beasley', text: 'Reason, 6 November 2021: in a tweet responding to Musk, WFP chief David Beasley wrote "$6B will not solve world hunger, but it WILL prevent geopolitical instability, mass migration and save 42 million people on the brink of starvation."', url: 'https://reason.com/2021/11/06/united-nations-official-suggests-elon-musk-donation-could-solve-global-hunger-kinda/' },
    { id: 'wb-pip', text: 'World Bank, Poverty and Inequality Platform: world population 8,210,628,561 (2025 nowcast).', url: 'https://pip.worldbank.org/' },
    { id: 'ecb', text: 'European Central Bank, euro reference rate USD, 24 November 2026: 1.0963.', url: 'https://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?startPeriod=2026-11-01&endPeriod=2026-11-25' },
    { id: 'oda', text: 'OECD preliminary ODA data 2025 for Belgium, USD 2.72 billion (0.37% of GNI), as reported by VRT NWS / Belga, 9 April 2026.', url: 'https://www.vrt.be/vrtnws/nl/2026/04/09/ontwikkelingshulp-daalt-wereldwijd-met-bijna-een-kwart-zegt-oes/' },
    { id: 'forbes-be', text: 'Forbes World\'s Billionaires 2026: 18 Belgians worth USD 55.1 billion combined; richest Eric Wittouck at USD 9.0 billion (VRT NWS, 10-11 March 2026).', url: 'https://www.vrt.be/vrtnws/en/2026/03/11/18-belgians-on-forbes-billionaires-list-richest-belgian-is-wort.consumer/' },
    { id: 'riziv', text: 'RIZIV/INAMI, the health insurance budget amounts to EUR 46.775 billion in 2026.', url: 'https://www.inami.fgov.be/nl/nieuws/de-begroting-van-de-ziekteverzekering-bedraagt-46-775-miljard-euro-in-2026' },
    { id: 'fortune-2021', text: 'Fortune, 1 November 2021: Musk says he will sell Tesla stock if WFP can explain how $6 billion would solve world hunger.', url: 'https://fortune.com/2021/11/01/elon-musk-net-worth-tesla-shares-hunger-tweet-world-food-program/' },
    { id: 'wfp', text: 'World Food Programme, "WFP\'s plan to support 42 million people on the brink of famine": "US$6.6 billion is needed to avert catastrophe", November 2021.', url: 'https://www.wfp.org/stories/wfps-plan-support-42-million-people-brink-famine' },
    { id: 'fortune-2022', text: 'Fortune, 12 December 2022, citing Bloomberg: the $5.7 billion of Tesla shares Musk gave in November 2021 went to the Musk Foundation.', url: 'https://fortune.com/2022/12/12/elon-musk-gave-5-7-billion-to-charity-last-year-where-it-went-was-a-mystery-until-now/' },
    { id: 'crs', text: 'Congressional Research Service, "U.S. Agency for International Development: An Overview" (IF10261, September 2025): "USAID managed more than $35 billion in combined appropriations" in FY2024.', url: 'https://www.everycrsreport.com/files/2025-09-05_IF10261_675e6d431c41d3c7bcbda03dda2ee4dd857e4c3e.html' },
    { id: 'hill', text: 'The Hill, 3 February 2025: Musk calls USAID "a criminal organization".', url: 'https://thehill.com/homenews/administration/5122128-musk-calls-usaid-a-criminal-organization-that-should-die/' },
    { id: 'time', text: 'Time, on the end of DOGE: USAID "was effectively shut down in July 2025."', url: 'https://time.com/7336327/doge-disbanded-elon-musk/' },
    { id: 'lancet', text: 'Cavalcanti et al., The Lancet 406 (2025): 14,051,750 additional deaths (uncertainty interval 8.5 to 19.7 million) by 2030, including 4,537,157 children under five. A forecast model.', url: 'https://doi.org/10.1016/S0140-6736(25)01186-9' },
    { id: 'twitter', text: 'Reuters timeline: Musk completed his $44 billion acquisition of Twitter on 27 October 2022.', url: 'https://uk.investing.com/news/stock-market-news/timeline-musk-takes-ownership-of-twitter-2801091' },
    { id: 'original', text: 'Matt Korostoff, "Wealth, shown to scale" (2020), which drew Jeff Bezos at $139 billion.', url: 'https://eattherichtextformat.github.io/1-pixel-wealth/' },
    { id: 'zucman', text: 'Gabriel Zucman, report for the Brazilian G20 presidency (June 2024): a 2% minimum tax on billionaires "would raise $200-$250 billion per year globally from about 3,000 individuals".', url: 'https://taxobservatory.world//www-site/uploads/2024/06/Zucman-Report-Executive-Summary-EN.pdf' },
    { id: 'who-malaria', text: 'WHO, World Malaria Report 2025: 610,000 deaths in 2024; USD 3.9 billion invested against a USD 9.3 billion target, a projected shortfall of about USD 5.4 billion.', url: 'https://www.who.int/news/item/04-12-2025-new-tools-saved-a-million-lives-from-malaria-last-year-but-progress-under-threat-as-drug-resistance-rises' },
    { id: 'gavi', text: 'Gavi, the Vaccine Alliance: US$ 11.9 billion targeted budget for 2026-2030, to protect 500 million children and save at least 8 million lives.', url: 'https://www.gavi.org/news/media-room/world-leaders-recommit-immunisation-amid-global-funding-shortfall' },
    { id: 'globalfund', text: 'The Global Fund, Eighth Replenishment: "needs US$18 billion to save 23 million lives between 2027 and 2029"; final outcome US$12.64 billion (February 2026).', url: 'https://www.theglobalfund.org/en/news/2026/2026-02-18-global-fund-board-welcomes-final-eighth-replenishment-outcome/' },
    { id: 'un-gho', text: 'UN News, Global Humanitarian Overview 2026: $33 billion to reach 135 million people in 50 countries; $12 billion received in 2025.', url: 'https://news.un.org/en/story/2025/12/1166526' },
    { id: 'fao', text: 'FAO, The State of Food Security and Nutrition in the World 2025: 8.2% of the world population, about 673 million people, faced hunger in 2024.', url: 'https://www.fao.org/newsroom/detail/sofi-2025--fao-calls-for-urgent--coordinated-and-inclusive-action-to-end-global-hunger/en' },
    { id: 'ceres', text: 'Ceres2030 (IISD, IFPRI, Cornell), 2020: an extra $33 billion a year to end hunger by 2030.', url: 'https://www.ifpri.org/blog/big-costs-bigger-rewards-how-33-billion-in-spending-each-year-can-help-end-hunger-sustainably-2030' },
    { id: 'jmp', text: 'WHO/UNICEF Joint Monitoring Programme, August 2025: 2.1 billion people lack safely managed drinking water, 3.4 billion lack safely managed sanitation.', url: 'https://www.who.int/news/item/26-08-2025-1-in-4-people-globally-still-lack-access-to-safe-drinking-water---who--unicef' },
    { id: 'worldbank-water', text: 'World Bank (Hutton, 2016): achieving SDG targets 6.1 and 6.2 costs "about $114 billion per year", capital costs only.', url: 'https://blogs.worldbank.org/en/water/can-we-really-put-price-meeting-global-targets-drinking-water-and-sanitation' },
    { id: 'gwwc', text: 'Giving What We Can, the 10% Pledge: 11,494 people in 122 countries (November 2026).', url: 'https://www.givingwhatwecan.org/pledge' },
    { id: 'givewell', text: 'GiveWell, "How much does it cost to save a life?": "typically estimated an average cost between $3,000 and $5,500" (2024 version).', url: 'https://www.givewell.org/how-much-does-it-cost-to-save-a-life' },
    { id: 'eabelgium', text: 'EA Belgium, September 2025: more effective charities now tax-deductible in Belgium via the King Baudouin Foundation.', url: 'https://eabelgium.org/articles/more-effective-charities-now-tax-deductible-in-belgium/' },
    { id: 'gter', text: 'EU Tax Observatory, Global Tax Evasion Report 2024: "Global billionaires have effective tax rates equivalent to 0% to 0.5% of their wealth."', url: 'https://taxobservatory.world//www-site/uploads/2023/10/Executive_Summary_English.pdf' },
    { id: 'propublica', text: 'ProPublica, "The Secret IRS Files", June 2021: Musk\'s true tax rate 2014-2018 was 3.27% (federal income taxes paid divided by growth in wealth).', url: 'https://www.propublica.org/article/the-secret-irs-files-trove-of-never-before-seen-records-reveal-how-the-wealthiest-avoid-income-tax' },
    { id: 'g20', text: 'G20 Rio de Janeiro Leaders\' Declaration, November 2024: "we will seek to engage cooperatively to ensure that ultra-high-net-worth individuals are effectively taxed" (via EY).', url: 'https://taxnews.ey.com/news/2024-2143-g20-leaders-stress-importance-of-progressive-taxation-and-reiterate-their-commitment-to-beps-20' },
    { id: 'france', text: 'LCP, 31 October 2025: the French National Assembly rejects the "taxe Zucman", 228 votes to 172.', url: 'https://lcp.fr/actualites/budget-2026-la-taxe-zucman-rejetee-par-l-assemblee-nationale-413632' }
  ]
};
