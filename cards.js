// Educational cards, merged from bronnen/2026-11-kaarten-*.md (research with sources and quotes).
// Loaded after data.js. Positions are dollar ranges inside Musk's bar.
(function (D) {
  D.sources = D.sources.concat([
  {
    "id": "oecd-tw26",
    "text": "OECD, Taxing Wages 2026 (2025 data), overview and Box 1",
    "url": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/04/taxing-wages-2026_d1f39986/3a5169ef-en.pdf"
  },
  {
    "id": "crs-stepup",
    "text": "Congressional Research Service, IF11812, Capital Gains Tax: step-up basis at death",
    "url": "https://www.congress.gov/crs_external_products/IF/PDF/IF11812/IF11812.2.pdf"
  },
  {
    "id": "cnbc-musk-11bn",
    "text": "CNBC, 'Elon Musk says he will pay over $11 billion in taxes this year', 20 Dec 2021",
    "url": "https://www.cnbc.com/2021/12/20/elon-musk-says-he-will-pay-over-11-billion-in-taxes-this-year.html"
  },
  {
    "id": "forbes-profile-musk",
    "text": "Forbes Real-Time Billionaires, Elon Musk profile, 25 Nov 2026",
    "url": "https://www.forbes.com/profile/elon-musk/"
  },
  {
    "id": "yahoo-bloomberg-musk-stakes",
    "text": "Yahoo Finance, How much of Elon Musk's wealth is in Tesla and SpaceX (Bloomberg and SEC figures), Nov 2026",
    "url": "https://finance.yahoo.com/markets/stocks/articles/much-elon-musk-wealth-tesla-000537126.html"
  },
  {
    "id": "forbes-xai-800b",
    "text": "Forbes, Musk first person worth $800 billion after SpaceX acquired xAI, 3 Feb 2026",
    "url": "https://www.forbes.com/sites/mattdurot/2026/02/03/elon-musk-just-became-the-first-person-ever-worth-800-billion-after-spacex-acquired-xai/"
  },
  {
    "id": "wikipedia-wealth-musk",
    "text": "Wikipedia, Wealth of Elon Musk (citing Forbes, 12 Mar 2012)",
    "url": "https://en.wikipedia.org/wiki/Wealth_of_Elon_Musk"
  },
  {
    "id": "cnbc-musk-richest-2021",
    "text": "CNBC, Elon Musk is now the richest person in the world, 7 Jan 2021",
    "url": "https://www.cnbc.com/2021/01/07/elon-musk-is-now-the-richest-person-in-the-world-passing-jeff-bezos-.html"
  },
  {
    "id": "fortune-bloomberg-400b",
    "text": "Fortune (Bloomberg), Musk's net worth tops $400 billion, 11 Dec 2024",
    "url": "https://fortune.com/2024/12/11/elon-musk-net-worth-tops-400-billion-historic-first-richest-man-alive-spacex-tesla/"
  },
  {
    "id": "forbes-end-2025",
    "text": "Forbes, Elon Musk's Net Worth Ends 2025 At $726 Billion, 31 Dec 2025",
    "url": "https://www.forbes.com/sites/tylerroush/2025/12/31/elon-musks-net-worth-ends-2025-at-726-billion-more-valuable-than-belgium-oracle-more/"
  },
  {
    "id": "tesla-proxy-2026",
    "text": "Tesla, Form DEF 14A (2026 proxy statement), Ownership of Securities, SEC",
    "url": "https://www.sec.gov/Archives/edgar/data/0001318605/000110465926116700/tm267596-1_def14a.htm"
  },
  {
    "id": "gibsondunn-delaware-2018",
    "text": "Gibson Dunn, Delaware reinstates Musk pay package, 19 Dec 2025",
    "url": "https://www.gibsondunn.com/delaware-reinstates-musk-pay-package-slashes-345-million-fee-award/"
  },
  {
    "id": "cnbc-tesla-pay-2025",
    "text": "CNBC, Tesla shareholders approve Musk pay package, 6 Nov 2025",
    "url": "https://www.cnbc.com/2025/11/06/tesla-shareholders-musk-pay.html"
  },
  {
    "id": "cnbc-spacex-ipo",
    "text": "CNBC, SpaceX IPO live updates, 12 Jun 2026",
    "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"
  },
  {
    "id": "npr-spacex-ipo",
    "text": "NPR, SpaceX blasts off with a record-breaking IPO, 11 Jun 2026",
    "url": "https://www.npr.org/2026/06/11/nx-s1-5853199/spacex-is-poised-for-blastoff-with-an-ipo-likely-to-break-records"
  },
  {
    "id": "forbes-below-700b",
    "text": "Forbes, Elon Musk's wealth sinks below $700 billion as SpaceX rout extends, 27 Jul 2026",
    "url": "https://www.forbes.com/sites/tylerroush/2026/07/27/elon-musks-wealth-sinks-below-700-billion-as-spacex-rout-extends/"
  },
  {
    "id": "jpost-bloomberg-trillionaire-again",
    "text": "Jerusalem Post (Bloomberg Billionaires Index), Musk is a trillionaire again, Oct 2026",
    "url": "https://www.jpost.com/business-and-innovation/banking-and-finance/article-910759"
  },
  {
    "id": "forbes-1987",
    "text": "Forbes, 'From Rockefeller To Musk: The Wealth Boom That's Leading To The First Trillionaire' (11 Jun 2026)",
    "url": "https://www.forbes.com/sites/chasewithorn/2026/06/11/from-rockefeller-to-musk-the-wealth-boom-thats-leading-to-the-first-trillionaire/"
  },
  {
    "id": "forbes-pr-2026",
    "text": "Forbes, 40th Annual World's Billionaires List (10 Mar 2026)",
    "url": "https://www.forbes.com/sites/pr/2026/03/10/forbes-40th-annual-worlds-billionaires-list-elon-musk-is-worlds-richest-person-ever-recorded/"
  },
  {
    "id": "ap-forbes-2026",
    "text": "AP via ABC15, 'Forbes 2026 World's Billionaires list is here' (Mar 2026)",
    "url": "https://www.abc15.com/world/forbes-2026-worlds-billionaires-list-is-here-some-rankings-may-surprise-you"
  },
  {
    "id": "bloomberg-2018",
    "text": "Fortune (Bloomberg), 'Jeff Bezos is the richest person in modern history' (16 Jul 2018)",
    "url": "https://fortune.com/2018/07/16/jeff-bezos-richest-man/"
  },
  {
    "id": "bloomberg-2025-b",
    "text": "Bloomberg Billionaires Index year-end report (31 Dec 2025), as reported by Irish Examiner",
    "url": "https://www.irishexaminer.com/business/economy/arid-41768318.html"
  },
  {
    "id": "ubs-2026",
    "text": "UBS Global Wealth Report 2026 (30 Jun 2026), as reported by The Star / Reuters",
    "url": "https://www.thestar.com.my/news/world/2026/06/30/nearly-one-million-people-worldwide-became-millionaires-in-2025-ubs-report-finds"
  },
  {
    "id": "wir-2026",
    "text": "World Inequality Lab, World Inequality Report 2026 (Dec 2025), as reported by Irish Examiner",
    "url": "https://www.irishexaminer.com/news/arid-41757617.html"
  },
  {
    "id": "zucman-2026",
    "text": "Gabriel Zucman, LSE slides 2026 (own estimates)",
    "url": "https://gabriel-zucman.eu/files/Zucman2026SlidesLSE.pdf"
  },
  {
    "id": "wapo-38bn",
    "text": "Washington Post, 'Elon Musk's business empire is built on $38 billion in government funding', 26 Feb 2025 (copy as House Judiciary exhibit)",
    "url": "https://www.congress.gov/119/meeting/house/117956/documents/HMKP-119-JU00-20250226-SD003.pdf"
  },
  {
    "id": "spacecom-cots-2006",
    "text": "Space.com, 'SpaceX, Rocketplane Kistler Win NASA COTS Competition', 18 Aug 2006",
    "url": "https://www.space.com/news/060818_nasa_cots_wrap.html"
  },
  {
    "id": "spacecom-crs-2008",
    "text": "Space.com, 'NASA Taps SpaceX, Orbital Sciences to Haul Cargo to Space Station', 23 Dec 2008",
    "url": "https://www.space.com/6257-nasa-taps-spacex-orbital-sciences-haul-cargo-space-station.html"
  },
  {
    "id": "spaceflightnow-cctcap-2014",
    "text": "Spaceflight Now, NASA commercial crew awards, 16 Sep 2014",
    "url": "https://spaceflightnow.com/news/n1409/16cctcap/"
  },
  {
    "id": "nasa-hls-2021",
    "text": "NASA, 'As Artemis Moves Forward, NASA Picks SpaceX to Land Next Americans on Moon', 16 Apr 2021",
    "url": "https://www.nasa.gov/news-release/as-artemis-moves-forward-nasa-picks-spacex-to-land-next-americans-on-moon/"
  },
  {
    "id": "defensenews-nssl-2025",
    "text": "Defense News, 'Space Force issues $13.5 billion in contracts to 3 launch firms', 4 Apr 2025",
    "url": "https://www.defensenews.com/space/2025/04/04/space-force-issues-135-billion-in-contracts-to-3-launch-firms"
  },
  {
    "id": "cnbc-tesla-repay-2013",
    "text": "CNBC, 'Tesla Repays $465 Million Loan from Federal Program', 22 May 2013",
    "url": "https://www.cnbc.com/id/100759230"
  },
  {
    "id": "tesla-10k-2024",
    "text": "Tesla Form 10-K FY2024, revenue by source (automotive regulatory credits $2,763M in 2024, $1,790M in 2023)",
    "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828025003063/R31.htm"
  },
  {
    "id": "tesla-10k-2025",
    "text": "Tesla Form 10-K FY2025 (automotive regulatory credits $1,993M in 2025, down 28%)",
    "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm"
  },
  {
    "id": "irs-clean-vehicle-credit",
    "text": "IRS, Credits for new clean vehicles purchased in 2023 or after",
    "url": "https://www.irs.gov/credits-deductions/credits-for-new-clean-vehicles-purchased-in-2023-or-after"
  },
  {
    "id": "sciam-nevada-2014",
    "text": "Scientific American, 'Elon Musk's Tesla Picks Nevada to Host Battery Gigafactory', 5 Sep 2014",
    "url": "https://www.scientificamerican.com/article/elon-musk-s-tesla-picks-nevada-to-host-battery-gigafactory/"
  },
  {
    "id": "who-malaria-factsheet",
    "text": "WHO, Malaria fact sheet.",
    "url": "https://www.who.int/news-room/fact-sheets/detail/malaria"
  },
  {
    "id": "unicef-malaria-vaccine-price",
    "text": "UNICEF, Gavi and UNICEF announce equitable pricing deal for malaria vaccine, 24 Nov 2025.",
    "url": "https://www.unicef.org/press-releases/gavi-and-unicef-announce-equitable-pricing-deal-malaria-vaccine-protect-7-million"
  },
  {
    "id": "unicef-vaccine-cost-2024",
    "text": "UNICEF, Costs of Fully Vaccinating a Child, 2024.",
    "url": "https://www.unicef.org/media/161751/file/Standard%20costs%20of%20fully%20vaccinating%20a%20child_UNICEF_2024.pdf.pdf"
  },
  {
    "id": "gavi-about",
    "text": "Gavi, About our Alliance.",
    "url": "https://www.gavi.org/our-alliance/about"
  },
  {
    "id": "gavi-protecting-our-future",
    "text": "Gavi, Protecting our future: Gavi 6.0 investment opportunity.",
    "url": "https://www.gavi.org/investing-gavi/resource-mobilisation-process/protecting-our-future"
  },
  {
    "id": "globalfund-results",
    "text": "The Global Fund, Results Report 2026.",
    "url": "https://www.theglobalfund.org/en/results/"
  },
  {
    "id": "globalfund-investment-case",
    "text": "The Global Fund, Eighth Replenishment investment case.",
    "url": "https://www.theglobalfund.org/en/investment-case/"
  },
  {
    "id": "kff-pepfar",
    "text": "KFF, The Trump Administration's Foreign Aid Review: Status of PEPFAR.",
    "url": "https://www.kff.org/global-health-policy/the-trump-administrations-foreign-aid-review-status-of-pepfar/"
  },
  {
    "id": "ceres2030-summary",
    "text": "Ceres2030, Sustainable Solutions to End Hunger: Summary Report, 2020.",
    "url": "https://www.bmz.de/resource/blob/48066/ceres2030-summary.pdf"
  },
  {
    "id": "who-drinking-water",
    "text": "WHO, Drinking-water fact sheet.",
    "url": "https://www.who.int/news-room/fact-sheets/detail/drinking-water"
  },
  {
    "id": "who-sanitation",
    "text": "WHO, Sanitation fact sheet.",
    "url": "https://www.who.int/news-room/fact-sheets/detail/sanitation"
  }
]);

  D.chapters = D.chapters.concat([
    { title: 'Why so little tax?', from: 16.8e9, to: 34.6e9, cards: [
  {
    "title": "Your pay is taxed before you see it",
    "html": "Wages are taxed as you earn them. The OECD says a single Belgian without children, on the average wage, loses 52.5% of labour costs to tax and social contributions. The OECD average is 35.1% (2025). [[oecd-tw26]]"
  },
  {
    "title": "A rising share price is not income",
    "html": "A fortune held in shares grows when the price rises. That gain is on paper only. US law does not treat it as income unless and until the owner sells. No sale, no income, no tax. [[propublica]]"
  },
  {
    "title": "Borrowing instead of selling",
    "html": "Owners can borrow against their shares instead of selling them. A loan is not income, because it must be repaid. ProPublica noted Tesla had disclosed that Musk pledged some 92 million shares as collateral. [[propublica]]"
  },
  {
    "title": "Death resets the tax value",
    "html": "In the US, inherited assets get a new tax value: the market price on the day of death. The gain built up during life is never subject to income tax. Heirs pay only on later growth. Estate tax can still apply. [[crs-stepup]]"
  },
  {
    "title": "Buy, borrow, die",
    "html": "Edward McCaffery's catchphrase for the strategy: buy assets, borrow against them, die. ProPublica says experts across the political spectrum see the step-up at death as a flaw in the tax code. [[propublica]]"
  },
  {
    "title": "Musk's 'true tax rate': 3.27%",
    "html": "ProPublica compared taxes with wealth growth. From 2014 to 2018 Musk's wealth rose $13.9 billion and he paid $455 million in federal income tax: 3.27%. The 25 richest Americans: 3.4%. In 2018 he paid no federal income tax. [[propublica]]"
  },
  {
    "title": "Fair point: Musk paid a lot in 2021",
    "html": "In December 2021 Musk tweeted that he would pay over $11 billion in taxes that year. He had exercised stock options, and the gain on those is taxed as income. Tax does come due when gains are cashed in. [[cnbc-musk-11bn]]"
  },
  {
    "title": "A typical household paid 14%",
    "html": "ProPublica set this against ordinary earners. The median US household earned about $70,000 a year and paid 14% in federal taxes. The bases differ: income for them, wealth growth for the rich. [[propublica]]"
  },
  {
    "title": "Billionaires: 0 to 0.5% of wealth",
    "html": "The EU Tax Observatory studied billionaires worldwide. It found effective tax rates equal to 0% to 0.5% of their wealth. In the US it appears closer to 0.5%, in France closer to 0%. [[gter]]"
  },
  {
    "title": "Another estimate: 0.3% of wealth",
    "html": "Gabriel Zucman's 2024 report for the G20 puts the current effective tax rate of billionaires at 0.3% of their wealth. Rates on wealth and rates on pay measure different things. [[zucman]]"
  },
  {
    "title": "The 2% idea in plain numbers",
    "html": "Zucman proposed a minimum tax of 2% of wealth a year for billionaires. Those already paying that much in income tax would owe nothing extra. He estimates $200 to $250 billion a year from about 3,000 people. [[zucman]]"
  }
] },
    { title: 'Where does it come from?', from: 56e9, to: 138e9, cards: [
  {
    "title": "Most of it is stock, not cash",
    "html": "Musk's fortune is mostly stock. Forbes says most of it sits in SpaceX and, to a lesser extent, Tesla. That makes it hard to turn into cash. It is value on paper, not money in a bank account. [[forbes-profile-musk]] [[yahoo-bloomberg-musk-stakes]]"
  },
  {
    "title": "Net worth is shares times share price",
    "html": "Net worth is shares owned times the share price. It is an estimate, not income. When the price moves, the estimate moves with it. [[forbes-profile-musk]]"
  },
  {
    "title": "SpaceX is the biggest piece",
    "html": "By Bloomberg's count, his SpaceX shares were worth about $859 billion in early November 2026 and his Tesla shares about $251 billion. Both counts include restricted shares, so together they exceed estimates of his net worth. [[yahoo-bloomberg-musk-stakes]] In February 2026 SpaceX took over his AI company, xAI. [[forbes-xai-800b]]"
  },
  {
    "title": "From $2 billion to $185 billion",
    "html": "Forbes first listed Musk as a billionaire in 2012, at $2 billion. CNBC put him near $27 billion at the start of 2020 and above $185 billion in January 2021. CNBC credits Tesla's stock and his pay package. [[wikipedia-wealth-musk]] [[cnbc-musk-richest-2021]]"
  },
  {
    "title": "End of 2024 and end of 2025",
    "html": "A SpaceX share sale in December 2024 valued the company near $350 billion. Bloomberg put Musk at $439.2 billion, the first person past $400 billion. Forbes had him at $726 billion at the end of 2025. [[fortune-bloomberg-400b]] [[forbes-end-2025]]"
  },
  {
    "title": "A 2018 award is now 41% of his Tesla shares",
    "html": "In 2018 Tesla granted Musk an award of options tied to targets. A court voided it, then Delaware's Supreme Court reinstated it on 19 December 2025. As of 30 September 2026, 286.4 million of his 699.6 million Tesla shares came from it. [[tesla-proxy-2026]] [[gibsondunn-delaware-2018]]"
  },
  {
    "title": "The 2025 award can pay out in 12 steps",
    "html": "On 6 November 2025 Tesla shareholders approved a new award, with 75% support. Over 423 million shares arrive in 12 tranches, only if Tesla hits milestones. The first needs a $2 trillion market value. The last needs $8.5 trillion. [[cnbc-tesla-pay-2025]] [[tesla-proxy-2026]]"
  },
  {
    "title": "SpaceX goes public",
    "html": "SpaceX listed on the Nasdaq on 12 June 2026. The IPO price was $135, valuing the company at $1.77 trillion. Before, its value came from private share sales. Now a market price sets it every trading day. [[cnbc-spacex-ipo]] [[npr-spacex-ipo]]"
  },
  {
    "title": "The listing made him a trillionaire",
    "html": "On 12 June 2026, Bloomberg put Musk's fortune at $1.1 trillion. Forbes also called him the world's first trillionaire. No money moved. His SpaceX shares were now priced by a market. [[bloomberg-trillion]] [[forbes-profile-musk]]"
  },
  {
    "title": "Paper wealth can fall as fast as it rises",
    "html": "Share prices drive the total. On 27 July 2026 Forbes reported his wealth below $700 billion as SpaceX stock fell. On 5 October, Bloomberg saw it jump about $65 billion in one day, back to $1.04 trillion. [[forbes-below-700b]] [[jpost-bloomberg-trillionaire-again]]"
  },
  {
    "title": "Rankings count it differently",
    "html": "Rankings do not agree. Bloomberg leaves out Musk's restricted stock in Tesla and SpaceX. Forbes lists unvested 2018 Tesla stock as a possible extra 8%. This page uses Forbes: $816.9 billion on 25 November 2026. [[yahoo-bloomberg-musk-stakes]] [[forbes-profile-musk]]"
  },
  {
    "title": "Turning shares into cash means selling",
    "html": "To get cash from shares, you have to sell them. In late 2021 Musk sold $14 billion of Tesla stock and said he would pay over $11 billion in tax. Over 98% of his wealth is still SpaceX and Tesla stock. [[cnbc-musk-11bn]] [[jpost-bloomberg-trillionaire-again]]"
  },
  {
    "title": "He can also borrow against shares",
    "html": "Owners can borrow against shares instead of selling. Tesla's 2026 proxy says 207.5 million of Musk's Tesla shares are pledged as collateral for personal debt. Tesla's policy caps the loan at $3.5 billion or 25% of the pledged value, whichever is lower. [[tesla-proxy-2026]] [[yahoo-bloomberg-musk-stakes]]"
  }
] },
    { title: 'How did we get here?', from: 140e9, to: 213e9, cards: [
  {
    "title": "In 1987, Forbes found 140 billionaires",
    "html": "Forbes published its first world list of billionaires in 1987. It found 140 of them. Together they were worth $295 billion. That was the whole club, on the entire planet. [[forbes-1987]]"
  },
  {
    "title": "Today Forbes tracks 3,316 billionaires",
    "html": "On 25 November 2026, Forbes' real-time list counts 3,316 billionaires. Together they are worth about $19.6 trillion. That is 24 times as many people as in 1987 and about 66 times the money, before inflation. [[forbes-rt]] [[forbes-1987]]"
  },
  {
    "title": "One man now outweighs the whole 1987 club",
    "html": "Elon Musk is worth $816.9 billion. That is almost three times the $295 billion of all 140 billionaires on Forbes' first list. These are plain dollars, not adjusted for inflation. [[forbes-rt]] [[forbes-1987]]"
  },
  {
    "title": "Forbes' March list: a record 3,428 billionaires",
    "html": "In March 2026 Forbes counted a record 3,428 billionaires, worth $20.1 trillion together. A year earlier that total was $16.1 trillion. The group's wealth jumped by about $4 trillion in a year. [[forbes-pr-2026]] [[ap-forbes-2026]]"
  },
  {
    "title": "The richest person keeps getting richer",
    "html": "Bill Gates briefly passed $100 billion in 1999. In 2018, Bloomberg put Jeff Bezos above $150 billion. In March 2026, Forbes valued Elon Musk at $839 billion. Today, Forbes says $816.9 billion. [[bloomberg-2018]] [[ap-forbes-2026]] [[forbes-rt]]"
  },
  {
    "title": "In 2025, the richest 500 gained $2.2 trillion",
    "html": "Bloomberg says the world's 500 richest people added a record $2.2 trillion in 2025. Their combined wealth reached $11.9 trillion. About a quarter of that gain went to just eight billionaires. [[bloomberg-2025-b]]"
  },
  {
    "title": "Meanwhile, the middle did not keep up",
    "html": "UBS says global personal wealth rose 10.8% in 2025. But median wealth, which shows the middle of the scale, fell in most countries. Growth at the top is not growth for everyone. [[ubs-2026]]"
  },
  {
    "title": "Who owns the world's wealth?",
    "html": "The World Inequality Report 2026 says the richest 10% of people own about 75% of global wealth. The poorest half of humanity owns about 2%. [[wir-2026]]"
  },
  {
    "title": "The very top pulled further ahead",
    "html": "Since 1995, the top 0.001%'s share of global wealth grew from almost 4% to more than 6%. That is fewer than 60,000 people. Together they hold about three times what the bottom half owns. [[wir-2026]]"
  },
  {
    "title": "Top fortunes grow far faster than average",
    "html": "Economist Gabriel Zucman estimates that, after inflation, the wealth of the top 0.0001% grew 7.5% a year from 1987 to 2026. Average wealth per adult grew 2.5%. Average income per adult grew 1.4%. [[zucman-2026]]"
  }
] },
    { title: 'Public money, private fortune', from: 692e9, to: 768e9, cards: [
  {
    "title": "At least $38 billion in public money",
    "html": "The Washington Post counted at least $38 billion in government contracts, loans, subsidies and tax credits for Musk's companies since 2003. Contracts pay for services delivered. The count leaves out classified work, so the true total is probably higher. [[wapo-38bn]]"
  },
  {
    "title": "Most of it arrived in the last five years",
    "html": "Nearly two-thirds of the money was promised in the past five years. In 2024 alone, governments committed at least $6.3 billion, the highest year so far. Another 52 ongoing contracts could pay $11.8 billion more over the next few years. [[wapo-38bn]]"
  },
  {
    "title": "NASA backed SpaceX before it reached orbit",
    "html": "In 2006, NASA gave SpaceX $278 million in seed money to develop the Dragon capsule. No SpaceX rocket had reached orbit yet. In late 2008, NASA signed a $1.6 billion deal for 12 cargo flights. SpaceX's president later said NASA's support was vital. [[spacecom-cots-2006]] [[spacecom-crs-2008]] [[wapo-38bn]]"
  },
  {
    "title": "NASA paid in steps, even when SpaceX ran late",
    "html": "NASA paid SpaceX in installments for milestones reached, and covered some engineering work. A 2011 government watchdog report found SpaceX missed milestone deadlines by up to two years. NASA kept the money flowing anyway. [[wapo-38bn]]"
  },
  {
    "title": "Astronaut flights and the Moon lander",
    "html": "In 2014, NASA picked SpaceX to fly astronauts to the space station, for $2.6 billion. Boeing got $4.2 billion for a rival capsule. In 2021, NASA awarded SpaceX $2.89 billion to build a Moon lander. That deal is firm fixed-price and pays per milestone. [[spaceflightnow-cctcap-2014]] [[nasa-hls-2021]]"
  },
  {
    "title": "The Pentagon is a big customer too",
    "html": "The Post counted $7.6 billion from the Defense Department to SpaceX. In April 2025, the Space Force assigned SpaceX $5.9 billion to fly 28 national security missions. A classified spy-satellite deal, reported at $1.8 billion, is not public. These are payments for launches. [[wapo-38bn]] [[defensenews-nssl-2025]]"
  },
  {
    "title": "Tesla's $465 million loan, paid back early",
    "html": "In 2010, the US Energy Department lent Tesla $465 million. The money helped build the Model S and buy a factory in California. Tesla went public six months later. It repaid the loan in 2013, less than four years after borrowing. [[wapo-38bn]] [[cnbc-tesla-repay-2013]]"
  },
  {
    "title": "Tesla also sells emissions credits to rivals",
    "html": "Carmakers that miss zero-emission targets can buy credits from those that beat them. Tesla is the biggest seller. The Post counted $11.4 billion of such sales from 2014 to early 2025. The government does not pay Tesla directly. Rival carmakers do. [[wapo-38bn]]"
  },
  {
    "title": "Credits decided Tesla's first profitable year",
    "html": "Credits brought Tesla $1.6 billion in 2020. Without them, the Post found, Tesla would have lost over $700 million that year. It reported an $862 million profit instead. Credit income since: $1.8 billion in 2023, $2.8 billion in 2024, $2.0 billion in 2025. [[wapo-38bn]] [[tesla-10k-2024]] [[tesla-10k-2025]]"
  },
  {
    "title": "Buyers got a $7,500 tax credit",
    "html": "Buyers of many electric cars, including Teslas, could claim a federal credit of up to $7,500. That money goes to the buyer, but experts say it helped Tesla's sales. Musk said Tesla did not need it. The credit ended for cars acquired after 30 September 2025. [[wapo-38bn]] [[irs-clean-vehicle-credit]]"
  },
  {
    "title": "States bid for the Tesla factory",
    "html": "In 2014, Nevada offered Tesla about $1.25 billion in tax breaks over 20 years for a battery factory, more than double what Tesla asked. New York gave Musk's SolarCity $750 million, but hiring fell well short of what the state expected. [[sciam-nevada-2014]] [[wapo-38bn]]"
  },
  {
    "title": "Paid for work, but with a head start",
    "html": "SpaceX says it earned its contracts by delivering, and its reusable rockets cut launch costs for NASA and the Pentagon. Public money did not guarantee success. But it was there early on, when the companies needed it most. [[wapo-38bn]]"
  }
] }
  ]);

  var blocks = {
  "1": [
    {
      "title": "Malaria kills 610,000 people a year",
      "html": "In 2024, malaria killed an estimated 610,000 people [[who-malaria]]. In Africa, about three in four of those deaths were children under five. Untreated, the deadliest form can kill within 24 hours [[who-malaria-factsheet]]."
    },
    {
      "title": "A malaria vaccine for under $3 a dose",
      "html": "A deal between Gavi and UNICEF cuts the price of the R21 malaria vaccine to $2.99 a dose. Once it takes effect, nearly 7 million more children can be fully vaccinated over five years [[unicef-malaria-vaccine-price]]."
    },
    {
      "title": "Malaria is learning to beat our tools",
      "html": "Drug resistance is confirmed or suspected in at least 8 African countries. Resistance to the insecticide on bed nets is confirmed in 48 countries, weakening the nets [[who-malaria]]."
    }
  ],
  "2": [
    {
      "title": "What it costs to vaccinate one child",
      "html": "UNICEF estimates that fully vaccinating a child under two against eleven diseases costs about $73 on average, delivery included. In Gavi-priced countries the range runs from $46 to $130 [[unicef-vaccine-cost-2024]]."
    },
    {
      "title": "1.3 billion children immunised since 2000",
      "html": "Gavi says it has helped immunise over 1.3 billion children since 2000, preventing more than 23 million future deaths. These are Gavi's own estimates [[gavi-about]]."
    },
    {
      "title": "What Gavi's next five years aim to do",
      "html": "For 2026 to 2030, Gavi aims to protect 500 million children and save at least 8 million lives. It projects at least $100 billion in economic benefits for the countries it works with [[gavi-protecting-our-future]]."
    }
  ],
  "3": [
    {
      "title": "72 million lives saved since 2002",
      "html": "The Global Fund says the health programs it supports have saved 72 million lives since 2002. That is the Fund's own estimate, from its Results Report 2026 [[globalfund-results]]."
    },
    {
      "title": "26.9 million people on HIV treatment",
      "html": "In 2025, 26.9 million people were on lifesaving HIV treatment in countries where the Global Fund invests [[globalfund-results]]. Its appeal for 2027 to 2029 aims to save 23 million more lives [[globalfund-investment-case]]."
    },
    {
      "title": "TB treatment now reaches 79% of patients",
      "html": "The Global Fund's 2026 results report says TB treatment coverage reached 79% in 2024, up from 44% in 2010 [[globalfund-results]]."
    }
  ],
  "4": [
    {
      "title": "Where the 2026 appeal is aimed",
      "html": "The biggest plans: $4.1 billion for the Occupied Palestinian Territory, $2.9 billion for Sudan to reach 20 million people, and $2.8 billion for the Syria regional plan [[un-gho]]."
    },
    {
      "title": "Last year's appeal got only $12 billion",
      "html": "The 2025 appeal received only $12 billion, the lowest funding in a decade [[un-gho]]. The 2026 appeal asks for $33 billion, almost three times as much."
    },
    {
      "title": "135 million people in 50 countries",
      "html": "The 2026 appeal aims to reach 135 million people in 50 countries [[un-gho]]. That works out to roughly $245 per person for a year of help (our calculation)."
    }
  ],
  "5": [
    {
      "title": "USAID worked in about 130 countries",
      "html": "In 2024, USAID provided assistance in about 130 countries and managed more than $35 billion. Humanitarian aid was its largest sector that year [[crs]]."
    },
    {
      "title": "Most US HIV aid ran through USAID",
      "html": "USAID handled 60% of PEPFAR's bilateral HIV aid in 2023. In 2025, 71% of the HIV-related awards KFF analysed were terminated, and the freeze initially stopped all PEPFAR services [[kff-pepfar]]."
    },
    {
      "title": "A modelled toll of the cuts: 14 million deaths",
      "html": "A Lancet study modelled that steep USAID cuts, if they last, could mean over 14 million extra deaths by 2030 (range 8.5 to 19.7 million). It is a forecast, not a count [[lancet]]."
    }
  ],
  "6": [
    {
      "title": "What $33 billion a year would buy",
      "html": "Ceres2030 says extra spending on farming would fund farmer groups, training for young people, climate-resilient crops, irrigation, and storage and processing so crops do not spoil [[ceres2030-summary]]."
    },
    {
      "title": "What it could achieve, on paper",
      "html": "Ceres2030 estimates the extra public spending would keep 490 million people from going hungry and roughly double the incomes of 545 million small producers. It is a modelled estimate [[ceres2030-summary]]."
    },
    {
      "title": "90 million more hungry than in 2020",
      "html": "FAO says 90 million more people face hunger than in 2020. The global share dipped from 8.5% to 8.2% in 2024. In Africa, 307 million people are food insecure [[fao]]."
    }
  ],
  "7": [
    {
      "title": "A million deaths a year from dirty water",
      "html": "WHO estimates about 1 million people die each year from diarrhoea caused by unsafe water, sanitation and hand hygiene. It says 395,000 deaths of children under five could be avoided each year [[who-drinking-water]]."
    },
    {
      "title": "Half an hour a day just to fetch water",
      "html": "In parts of sub-Saharan Africa and Central and Southern Asia, many people spend over 30 minutes a day collecting water, and women and girls mostly do it. 2.1 billion people still lack safely managed drinking water [[jmp]]."
    },
    {
      "title": "What a toilet changes",
      "html": "WHO links unsafe sanitation to 564,000 deaths, mostly from diarrhoea, and says it worsens stunting. A 2026 WHO study estimates $14 in benefits per $1 spent on climate-resilient basic sanitation in 132 countries [[who-sanitation]]."
    }
  ]
};
  D.spending.forEach(function (s, i) { s.cards = blocks[String(i + 1)] || []; });
})(window.DATA);
