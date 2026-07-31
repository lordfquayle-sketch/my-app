export const content = {
  riskIndex: '88',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 31, 2026 09:00 UTC',
    overallScore: 88,
    trend: 'WORSENING',
    drivers: ['Hormuz Crisis Re-Escalates — US Strikes Iran July 30 — IRGC Hits Two Tankers July 31 — Brent $90+', 'Ebola DRC Healthcare Workers Strike At Bunia Treatment Centre — Response Architecture Collapsing', 'Nigeria Reserves Hit 17-Year High $50.12bn — Chad Joins ICC Withdrawal — Kenya Nationwide Blackout', 'Gold $4,157 — Cocoa $5,169 — Copper $6.42 — Commodity Markets Pricing Maximum Geopolitical Risk'],
    regions: [
      { region: 'East Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 82, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 88, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Global/Africa', flag: '🌍', alert: 'HORMUZ CRISIS RE-ESCALATED. US struck Iran directly July 30 (Day 152) — hitting dozens of IRGC targets, first direct US-Iran strikes since the June pause broke. Brent settled +7.91% on July 30. July 31: IRGC struck and halted two oil tankers attempting Hormuz transit, four others turned back. Iran: "As long as US hostilities continue, the Strait of Hormuz will remain closed." The June 17 MoU that reopened the strait has definitively collapsed under a second, harder escalation cycle. Shipping rerouting via Cape of Good Hope. Africa impact: oil importers face $90+ Brent; oil exporters (Nigeria, Angola) benefit but at instability risk; SA August fuel review will reflect $90+ oil, reversing July 1 R2.01/litre relief.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', alert: 'EBOLA HEALTHCARE WORKERS STRIKE AT BUNIA. Healthcare workers at the Ebola treatment centre in Bunia — the epicentre of the outbreak in Ituri province — have gone on strike. Al Jazeera confirmed July 28. Workers are striking over unpaid wages, PPE shortages, and deteriorating working conditions. This is potentially the most catastrophic single operational event of the outbreak: the treatment centre that is managing the highest case load in the outbreak\'s epicentre has now had its staff walk off the job. Without healthcare workers, the Bunia treatment centre cannot isolate, treat or discharge Ebola patients. The response architecture is collapsing at its most critical node.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'NIGERIA RESERVES HIT 17-YEAR HIGH — $50.12BN. Nigeria\'s external reserves reached $50.12 billion — the highest level in 17 years, since the oil boom era of 2008-2009. This reflects: CBN\'s tight monetary policy (27.5% rate), FX unification reducing parallel market pressure, Dangote Refinery producing 700,000 bpd reducing fuel import costs, and elevated oil prices ($90 Brent). The reserve milestone is the single most important positive Nigeria macro signal of 2026. NGN has strengthened from 1,579 in June 2025 to 1,363 today — a 13.7% appreciation. Nigeria\'s macro trajectory is the most improved of any major African economy this year.', severity: 'LOW', color: '#00c48c' },
    { country: 'Chad/ICC', flag: '🇹🇩', alert: 'CHAD JOINS ICC WITHDRAWAL. Chad has become the fifth African country in recent months to begin ICC withdrawal proceedings — joining Burkina Faso, Mali, Niger (AES bloc) and the earlier partial process. The withdrawal pattern reflects: US pressure on ICC (Trump administration hostile to ICC), growing African narrative of selective justice, and the AES bloc\'s coordinated institutional exit. The ICC has simultaneously been tasked with Darfur genocide investigation — the paradox of expanding jurisdiction in Sudan at the same moment the African institutional base is eroding.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'KENYA NATIONWIDE BLACKOUT. Power restored to several parts of Kenya after a widespread blackout left large areas without electricity overnight. The cause is under investigation. Kenya\'s grid stability has been an ongoing concern — the Finance Bill 2026 included electricity sector provisions. KES at 129.04. Growth forecast lowered to 4.3% for 2026. The blackout adds infrastructure fragility to an already stressed economic environment.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'HORMUZ RE-ESCALATES — US STRIKES IRAN — IRGC HITS TANKERS — EBOLA HEALTHCARE WORKERS STRIKE BUNIA — NIGERIA RESERVES $50BN 17-YEAR HIGH — CHAD ICC WITHDRAWAL',
    body: 'July 31 is the most consequential single day since June 30. The Strait of Hormuz crisis has re-escalated catastrophically: the US struck Iran directly on July 30 for the first time since the June pause collapsed, hitting dozens of IRGC targets. On July 31, the IRGC struck and halted two oil tankers attempting to transit the Strait, with four others turning back. Iran declared the Strait will remain closed as long as US hostilities continue. The June 17 MoU that briefly reopened the waterway has definitively collapsed. Brent settled up 7.91% on July 30 — the commodity spike to $90+ that the terminal tracked this week is now explained by the Hormuz re-escalation. Meanwhile, healthcare workers at the Ebola treatment centre in Bunia — the outbreak\'s epicentre — have gone on strike over unpaid wages and PPE shortages. The treatment centre at the heart of the fastest-growing Ebola outbreak on record is now without staff. In contrast, Nigeria has reached a 17-year high in external reserves at $50.12 billion — the most important positive macro signal from Africa\'s largest economy this year. Chad has joined the AES bloc and others in ICC withdrawal proceedings. Kenya suffered a nationwide blackout. The Hormuz crisis, Ebola healthcare strike, Nigeria reserves milestone, and Chad ICC withdrawal are the four defining signals of July 31 2026.',
    tag: 'JULY 31 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 31, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '220', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Sudan', flag: '🇸🇩', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '0', fxPressure: 'CRITICAL', liquidity: 'NONE' },
  ],

  whatMattersNow: [
    { title: 'HORMUZ CRISIS DAY 152 — US STRIKES IRAN — IRGC HITS TANKERS — STRAIT EFFECTIVELY CLOSED', body: 'Day 152 of the Hormuz crisis: the US struck Iran directly on July 30 — hitting dozens of IRGC targets in the most significant direct US-Iran military engagement since the June 17 MoU pause broke. Brent settled up 7.91%. July 31: the IRGC struck and halted two oil tankers attempting to transit the strait under US military air escort, with four others turning back. Iran stated the strait "will remain closed" as long as US hostilities continue. Shipping operators rerouting via Cape of Good Hope. The Africa implications: SA August fuel review will reflect $90+ Brent, reversing July 1 R2.01/litre relief; Nigeria and Angola benefit from higher oil prices; gas pipeline investments become more strategic; Cape of Good Hope rerouting adds 14-21 days to shipping times for goods passing through SA ports.', icon: '🚨' },
    { title: 'EBOLA HEALTHCARE WORKERS STRIKE AT BUNIA — TREATMENT CENTRE EPICENTRE LOSES STAFF', body: 'Healthcare workers at the Ebola treatment centre in Bunia — the Ituri province epicentre of the fastest-growing Ebola outbreak on record — have gone on strike. Workers cited unpaid wages, PPE shortages, and deteriorating conditions. Al Jazeera confirmed the strike July 28. The Bunia treatment centre is the most critical single node in the Ebola response architecture — it manages the highest case load in the outbreak\'s worst-affected province. Without healthcare workers, it cannot isolate, treat or discharge patients. The strike, if sustained, will cause isolated patients to flee (as has already happened 150+ times), allow community transmission to accelerate from the epicentre, and collapse the fragile contact tracing architecture built around Bunia. This is the most dangerous single operational development of the outbreak.', icon: '🔴' },
    { title: 'NIGERIA RESERVES $50.12BN — 17-YEAR HIGH — MOST IMPORTANT POSITIVE MACRO SIGNAL OF 2026', body: 'Nigeria\'s external reserves reached $50.12 billion — the highest in 17 years, matching levels last seen during the 2008-2009 oil boom. The drivers: CBN tight monetary policy (27.5% rate) reducing speculative FX pressure; Dangote Refinery at 700,000 bpd reducing fuel import costs and dollar outflows; elevated oil prices ($90 Brent) boosting export revenues; FX unification reducing parallel market demand. NGN has strengthened from 1,579 in June 2025 to 1,363 today — 13.7% appreciation. Nigeria\'s macro trajectory is the single most improved of any major African economy in 2026. The reserves milestone provides a substantial buffer against the compound security crisis (ISSP in Kebbi/Sokoto, Boko Haram, ISWAP) and the SA diplomatic friction.', icon: '📈' },
    { title: 'CHAD ICC WITHDRAWAL — FIFTH AFRICAN COUNTRY — AES BLOC PATTERN EXPANDS', body: 'Chad has joined the ICC withdrawal proceedings — becoming the fifth African country in recent months to initiate the process after Burkina Faso, Mali, Niger (AES bloc) and earlier proceedings. The withdrawal pattern reflects multiple forces: US Trump administration hostile to ICC jurisdiction, growing African narrative of selective Western judicial targeting, and the AES bloc\'s coordinated institutional exit from multilateral frameworks. The paradox: the ICC has simultaneously been tasked with its most significant African investigation — the Sudan Darfur genocide case, with prosecutors now able to link crimes to RSF leadership — at exactly the moment the continental institutional base supporting its legitimacy is eroding. Sudan\'s impunity architecture vs Sudan\'s accountability architecture are in direct conflict.', icon: '⚖️' },
  ],

  insight1: {
    title: 'THE HORMUZ RE-ESCALATION ON DAY 152 IS THE SINGLE MOST IMPORTANT GLOBAL EVENT FOR AFRICAN SOVEREIGN CREDIT SINCE THE CRISIS BEGAN IN FEBRUARY',
    body: 'The Strait of Hormuz crisis that began in February 2026 has oscillated between acute and managed — the June 17 MoU pause briefly restored the "managed" characterisation. The July 30 US strikes on Iran and the July 31 IRGC tanker strikes confirm the MoU has definitively collapsed and the second escalation cycle is harder and more dangerous than the first. For Africa, the Hormuz crisis is simultaneously the most important external driver of inflation (oil prices), trade costs (Cape of Good Hope rerouting adds weeks to shipping), food security (fertiliser exports from Gulf disrupted), and geopolitical alignment pressure (choosing between US and Iran relationships). The Cape of Good Hope rerouting — which routes global shipping past South Africa rather than through the Red Sea — is a structural positive for SA port revenues and logistics. But $90+ Brent feeding into SA\'s August fuel review will partially reverse the July 1 consumer relief. The Hormuz situation is the master variable behind every commodity price in this terminal.',
    conclusion: 'THE HORMUZ RE-ESCALATION ON DAY 152 — US DIRECT STRIKES ON IRAN, IRGC TANKER HITS, STRAIT EFFECTIVELY CLOSED AGAIN — IS THE SINGLE MOST IMPORTANT EXTERNAL EVENT FOR AFRICAN SOVEREIGN CREDIT. IT DRIVES INFLATION, TRADE COSTS, FOOD SECURITY AND GEOPOLITICAL ALIGNMENT SIMULTANEOUSLY. OIL EXPORTERS BENEFIT; OIL IMPORTERS SUFFER; SA SITS IN BOTH CATEGORIES.',
  },

  insight2: {
    title: 'THE BUNIA EBOLA HEALTHCARE WORKER STRIKE IS THE MOST DANGEROUS SINGLE OPERATIONAL EVENT OF THE OUTBREAK',
    body: 'The 2018-2020 North Kivu Ebola outbreak — which was eventually contained after 2,286 deaths — faced many of the same challenges as the current Bundibugyo outbreak: community resistance, armed group attacks on health workers, patient escapes, and contact tracing below threshold. What ultimately enabled containment in North Kivu was a sustained, paid, functional healthcare workforce that could maintain isolation facilities. When those workers strike over unpaid wages and PPE shortages at the outbreak\'s single most critical treatment facility — the Bunia centre in Ituri — the entire containment architecture loses its operational foundation. Patients in isolation will leave. New patients will not enter. Contact tracing referrals will have nowhere to go. The White House $1.4bn Congress ask, Africa CDC\'s $1.4bn upgraded response plan, and all of the institutional frameworks are worthless if the person holding the PPE suit at the Bunia treatment centre has not been paid and has walked off the job.',
    conclusion: 'THE BUNIA HEALTHCARE WORKER STRIKE IS THE MOST DANGEROUS SINGLE OPERATIONAL EVENT OF THE FASTEST-GROWING EBOLA OUTBREAK ON RECORD. ALL INSTITUTIONAL FRAMEWORKS ARE WORTHLESS WITHOUT PAID, PRESENT HEALTHCARE WORKERS AT THE EPICENTRE. THIS IS AN IMMEDIATE OPERATIONAL CRISIS REQUIRING EMERGENCY WAGE PAYMENT — NOT ANOTHER PLEDGING CONFERENCE.',
  },

  brief: {
    week: '31',
    title: 'WEEK 31 CLOSE JULY 31: HORMUZ DAY 152 RE-ESCALATED US STRIKES IRAN IRGC HITS TANKERS, EBOLA HEALTHCARE WORKERS STRIKE BUNIA, NIGERIA RESERVES $50BN 17YR HIGH, CHAD ICC WITHDRAWAL',
    body: 'Week 31 closes on the most consequential Friday since June 30. The Hormuz crisis has re-escalated to its most dangerous phase — US struck Iran July 30, IRGC hit two tankers July 31, Iran declared strait closed. Brent $90+. The Ebola treatment centre in Bunia — the outbreak\'s epicentre — has lost its healthcare workforce to a strike over unpaid wages and PPE shortages. Nigeria\'s external reserves hit $50.12bn, a 17-year high — the most important positive macro signal of 2026. Chad joined the ICC withdrawal proceedings — fifth African country, AES bloc pattern expanding. Kenya suffered a nationwide blackout. South Africa\'s ZAR at 16.62, NGN at 1,363. Gold at $4,157 new ATH. Commonwealth Games in Glasgow — SA 7th in medal table. Zambia election 13 days away. DRC August 15 dialogue deadline in 15 days. The continent enters August at maximum compound risk density.',
  },

  fxRates: {
    NGN: '1,363.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.62',
    ETB: '158.50',
    TZS: '2,624.00',
    UGX: '3,674.80',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'HORMUZ DAY 152 RE-ESCALATED. US struck Iran directly July 30 — dozens of IRGC targets. Brent +7.91%. July 31: IRGC struck and halted 2 oil tankers attempting Hormuz transit under US air escort, 4 others turned back. Iran: "Strait will remain closed as long as US hostilities continue." June 17 MoU definitively collapsed. Shipping rerouting Cape of Good Hope. Brent $90+ feeds SA August fuel review — July 1 relief partially reversed.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '09:15:00', signal: 'EBOLA: Healthcare workers strike at Bunia treatment centre — epicentre of fastest-growing outbreak on record. Workers citing unpaid wages, PPE shortages. Al Jazeera confirmed July 28. Bunia is the single most critical operational node — highest case load in Ituri. Without staff: patients flee, transmission accelerates from epicentre, contact tracing collapses. Most dangerous single operational event of the outbreak.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'NIGERIA RESERVES $50.12BN — 17-YEAR HIGH. Highest since 2008-2009 oil boom. Drivers: CBN 27.5% rate, Dangote 700k bpd reducing import costs, $90 Brent, FX unification. NGN strengthened 13.7% from 1,579 to 1,363 since June 2025. Most improved major African economy macro trajectory 2026. Reserves buffer against compound security crisis (ISSP, Boko Haram) and SA diplomatic friction.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'CHAD ICC WITHDRAWAL — 5th African country. Joins Burkina Faso, Mali, Niger (AES bloc) in proceedings. US hostile to ICC, growing African selective-justice narrative, AES coordinated exit. Paradox: ICC simultaneously tasked with Sudan Darfur genocide case — can link crimes to RSF leadership — as African institutional base erodes.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya: Nationwide blackout — power restored to several parts after widespread outage overnight. Grid stability concern. Growth forecast 4.3% 2026. KES 129.04. Zambia: August 13 election — 13 DAYS. Copper $6.42 provides support. ZMW -32.91% YTD. DRC: August 15 dialogue deadline — 15 days. C64 truce holding — red line: referendum bill enactment. Ebola epicentre healthcare strike simultaneous.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'COMMODITIES (July 29-30 confirmed): Gold $4,157 (ATH ↑2.99%), Brent $90.34 (↑7.43% July 29 — now higher on July 30-31 Hormuz escalation), Copper $6.42 (↑1.50%), Silver $59.04 (↑3.04%), Cocoa $5,169. Gold at $4,157 vs SA breakeven $1,600 — massive fiscal windfall. Angola at $90+ comfortably above $78 breakeven. Nigeria at $90 near $92 breakeven — approaching positive territory.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:00:00', signal: 'SA: Vigilante-police handover model operational in Johannesburg. December 31 ultimatum. Weekly marches. AU/ICC multilateral pressure. Nigeria-SA de-escalation agreed July 29 — coexisting with street deterioration. Gold $4,157 provides fiscal buffer. Commonwealth Games: SA 7th in medal table, 16 medals 4 golds. Zimbabwe ZANU-PF pushing 2037. Ethiopia Tigray conflict risk live. Somalia AUSSOM funding gap. Sudan genocide finding + ICC leadership linkage.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX July 31 (July 29 confirmed): ZAR 16.62 | NGN 1,363 | GHS 11.47 | KES 129.04 | EGP 52.22 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02 | MAD 9.75. Hormuz re-escalation will pressure ZAR via oil prices in August review. Gold at $4,157 provides structural ZAR floor. NGN 1,363 vs 1,579 June 2025 — 13.7% appreciation sustained. ZMW -32.91% YTD — worst major African currency entering August election.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 50, fx: 38, debt: 52, political: 80, external: 72 },
    { country: 'Ghana', flag: '🇬🇭', score: 18, fiscal: 14, fx: 30, debt: 14, political: 16, external: 18 },
    { country: 'Kenya', flag: '🇰🇪', score: 70, fiscal: 64, fx: 52, debt: 72, political: 70, external: 68 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 70, fx: 72, debt: 90, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 58, fx: 44, debt: 60, political: 84, external: 76 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 86, fiscal: 70, fx: 96, debt: 78, political: 88, external: 82 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,363.00', change: '-13.68%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.62', change: '-8.36%', stress: 'LOW', ytd: '+8.36%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 13 DAYS', type: 'General Election', risk: 'HIGH', note: 'SADC SEOM deployed. Copper $6.42 ↑. ZMW -32.91% YTD. Power cuts. Slow reform. 13 days to polling day. Most consequential African election in years. Hormuz re-escalation adding global macro pressure.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 15 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Ebola healthcare workers strike at Bunia — epicentre crisis. Tshisekedi dialogue. Red line: referendum bill. 15 days.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Vigilante-Police Nexus', type: 'Municipal Elections', risk: 'HIGH', note: 'Vigilante-police handover model operational. Nigeria-SA de-escalation agreed but street level deteriorating. December 31 ultimatum. Weekly marches. Gold $4,157 fiscal buffer. Hormuz adding August fuel price pressure.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: steering Tigray to open conflict. US TPLF visa restrictions. Hundreds displaced. War risk materialising.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: '2030 Signed — ZANU-PF Pushing 2037', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'ZANU-PF Harare pushing 2037. Opposition ConCourt challenge. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. Constitutional crisis ongoing. Hormuz re-escalation may affect Turkish Somalia mandate renewal (Erdogan submitted bill for 2-year extension).', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', date: 'UN Genocide Finding — ICC Leadership Linkage', type: 'Civil War', risk: 'CRITICAL', note: 'UN probe finds genocide. ICC links Darfur crimes to RSF leadership. 85 civilians massacred July 23. EU gold ban. US chemical weapons sanctions. 59,000 dead. 14m displaced.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY — $53.75m + $38.8m', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 13 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026 — OIL $90+ POSITIVE', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$90+', fiscalBreakeven: '$92/bbl', breakevenNote: 'NEAR BREAKEVEN — RESERVES $50BN ATH', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$90+', fiscalBreakeven: '$78/bbl', breakevenNote: 'WELL ABOVE BREAKEVEN — POSITIVE', trend: '↑', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,157/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'NEW ATH — ENORMOUS FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$6.42/lb', fiscalBreakeven: '$5.50/lb', breakevenNote: 'ABOVE BREAKEVEN — ELECTION RISK', trend: '↑', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,157/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'NEW ATH — HORMUZ ADDS OIL PRESSURE', trend: '↑', risk: 'LOW' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'CAPE REROUTING — PORT REVENUE +', trend: '↑', risk: 'LOW' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,157/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — GENOCIDE FINDING — ICC', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'HORMUZ/GLOBAL', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'US STRIKES IRAN DAY 152 — IRGC HITS TANKERS — $90+ OIL', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA BUNIA HEALTHCARE WORKERS STRIKE — EPICENTRE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.5pts', fx: '-13.7%', signal: 'RESERVES $50BN 17YR HIGH — MOST IMPROVED AFRICA MACRO', color: '#00c48c' },
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'UN GENOCIDE FINDING — ICC DARFUR LEADERSHIP', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION 13 DAYS — COPPER UP — ZMW WORST AFRICA', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '+5', bond: '-0.3pts', fx: '-8.4%', signal: 'GOLD $4,157 BUFFER — VIGILANTE NEXUS — DEC ULTIMATUM', color: '#f5a623' },
    { country: 'GHANA', cds: 220, delta: '-20', bond: '+1.2pts', fx: '+10.8%', signal: 'GOLD $4,157 ATH WINDFALL — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPEN CONFLICT WARNING — TPLF WAR RISK LIVE', color: '#ff3b3b' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.41, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.47, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.40, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.03, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 23', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.50, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 24', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 27', NGN: 1361.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.75, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 29', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 30', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 31', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
