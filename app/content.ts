export const content = {
  riskIndex: '88',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 23, 2026 09:00 UTC',
    overallScore: 88,
    trend: 'WORSENING',
    drivers: ['Sudan RSF Massacre 85 Civilians — Village Attack — UN Says Country At Catastrophic Breaking Point', 'ZANU-PF Now Pushing Mnangagwa Term To 2037 — Days After 2030 Extension Signed Into Law', 'Ethiopia Opposition Warns Government Steering Tigray Toward Open Conflict — Post-Election War Risk Live', 'Mauritania 144 Migrants Dead Or Missing — Gambia Boat Spent 25 Days Stranded At Sea'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 84, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 88, trend: '↑', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Sudan', flag: '🇸🇩', alert: 'RSF MASSACRE: At least 85 civilians killed in a paramilitary attack on a central Sudanese village — residents directly accuse the Rapid Support Forces commanded by Mohamed Hamdan Dagalo. The UN warns Sudan is at a "catastrophic breaking point" with intense fighting now compounded by severe flooding. 59,000 civilians killed since April 2023. 14 million displaced. 33.7 million needing urgent humanitarian assistance. EU gold ban now in effect. US second round of chemical weapons sanctions imposed. Sudan civil war entering its most intense phase since 2024.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', alert: 'ZANU-PF NOW PUSHING 2037. Barely days after Mnangagwa signed the Constitutional Amendment No. 3 Act extending his term to 2030 and postponing elections to 2030, ZANU-PF Harare Province is already pushing to extend his presidency to 2037 — an additional 7 years. Harare Province chairperson Masimirembwa: "We still want him for an additional seven years, from 2030 to 2037." Opposition parties have filed applications at the Constitutional Court seeking to overturn the 2030 amendment. The pattern: each amendment creates the platform for the next one. Zimbabwe\'s democratic regression is accelerating, not stabilising.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'OPPOSITION WARNS OPEN CONFLICT IN TIGRAY. Ethiopian opposition parties warned July 22 that the government is steering the Tigray region back toward open conflict — the clearest external signal yet that the post-election TPLF war risk flagged since June 11 is materialising. US imposed visa restrictions on TPLF hardliners June 18. Hundreds of thousands have been displaced. National Dialogue Conference ongoing. TPLF reinstated Debretsion. Pretoria Agreement collapsed. Most dangerous Horn of Africa moment since November 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Mauritania', flag: '🇲🇷', alert: 'MIGRATION DISASTER. UNHCR: 144 migrants dead or missing after maritime tragedies off Mauritania\'s coast July 14-18. Boat from The Gambia heading to Spain\'s Canary Islands ran out of fuel and was stranded at sea for 25 days. Two children survived their July 18 rescue but lost their entire families at sea. 387 people were rescued across three disembarkations. The Atlantic route to the Canary Islands is seeing sharp traffic increase — desperate migration from the Sahel security collapse and West African food insecurity (645 million globally hungry, two-thirds of Africans cannot afford a healthy diet).', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Burkina Faso', flag: '🇧🇫', alert: 'COUP FEARS SIGNAL DEEP REGIME TENSION. Burkina Faso\'s military ruler Captain Ibrahim Traoré warned internal rivals against plotting a coup — the warning itself reveals deep factionalism within the junta. This comes as the AES bloc (Burkina Faso, Mali, Niger) has initiated ICC withdrawal proceedings and Mali suffered one of its deadliest ambushes (50 soldiers killed July 22). Internal regime instability in Burkina Faso adds a new fragility vector to the AES security architecture.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'RSF MASSACRES 85 CIVILIANS IN SUDAN — ZANU-PF PUSHES FOR 2037 — ETHIOPIA OPEN CONFLICT WARNING — MAURITANIA 144 DEAD — BURKINA FASO COUP FEARS',
    body: 'July 23 delivers the heaviest single day of simultaneous crisis signals since June 30. In Sudan, RSF paramilitary forces massacred at least 85 civilians in a central village — the UN describes Sudan as at a "catastrophic breaking point" with fighting compounded by severe flooding. In Zimbabwe, barely days after Mnangagwa signed the 2030 extension into law, ZANU-PF Harare Province is already pushing to extend his rule to 2037 — opposition parties have filed Constitutional Court challenges. In Ethiopia, opposition parties formally warned July 22 that the government is steering Tigray toward open conflict — the clearest external validation yet of the post-election war risk. In Mauritania, 144 migrants are dead or missing after a boat from Gambia spent 25 days stranded at sea trying to reach the Canary Islands. Burkina Faso\'s military ruler warned internal coup plotters — revealing regime fractures in the AES bloc. Kenya\'s lawyers launched a nationwide court boycott over judicial corruption. Against this backdrop: ZAR at 16.48, NGN at 1,378, markets stable. The continent\'s compound risk environment is worsening.',
    tag: 'JULY 23 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 23, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Sudan', flag: '🇸🇩', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '0', fxPressure: 'CRITICAL', liquidity: 'NONE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SUDAN RSF MASSACRES 85 CIVILIANS — UN: COUNTRY AT CATASTROPHIC BREAKING POINT', body: 'RSF paramilitary forces attacked a central Sudanese village, killing at least 85 civilians — residents directly accuse the Rapid Support Forces commanded by Hemeti. The UN warns Sudan is at a "catastrophic breaking point" with intense fighting now compounded by severe flooding. This is the latest in a systematic pattern of RSF civilian targeting that has produced 59,000 deaths, 14 million displaced, and 33.7 million in urgent need. The EU gold ban on Sudan is now in effect targeting RSF funding. The US imposed second-round chemical weapons sanctions. Sudan\'s civil war is entering its most intense phase since 2024 with no peace process in sight.', icon: '🚨' },
    { title: 'ZANU-PF PUSHES MNANGAGWA TO 2037 — DAYS AFTER 2030 EXTENSION SIGNED', body: 'Barely days after Mnangagwa signed Constitutional Amendment No. 3 extending his term to 2030, ZANU-PF Harare Province chairperson Masimirembwa publicly called for his retention until 2037 — saying the province would table a resolution at the party\'s next conference. The logic: each amendment creates the platform for the next. Opposition parties have filed Constitutional Court applications to overturn the 2030 amendment. Factionalism within ZANU-PF has intensified with rival camps: the 2037 push is also designed to close off VP Chiwenga\'s presidential ambitions. Zimbabwe\'s democratic regression is accelerating.', icon: '⚠️' },
    { title: 'ETHIOPIA: OPPOSITION WARNS GOVERNMENT STEERING TIGRAY TO OPEN CONFLICT', body: 'Ethiopian opposition parties formally warned July 22 that the government is steering the Tigray region back toward open conflict — the clearest external analytical signal since the US imposed visa restrictions on TPLF hardliners on June 18. The warning follows: TPLF reinstating Debretsion, introducing "totalitarian control" draft legislation, direct clashes with ENDF forces, and hundreds of thousands of civilians fleeing northern Ethiopia. The National Dialogue Conference launched simultaneously. Opposition warning + US sanctions + civilian displacement = post-election conflict is materialising.', icon: '💥' },
    { title: 'MAURITANIA 144 DEAD OR MISSING — GAMBIA BOAT 25 DAYS AT SEA — CHILDREN ORPHANED', body: 'UNHCR: 144 migrants dead or missing after maritime tragedies off Mauritania July 14-18. A boat from The Gambia carrying 160 people heading for Spain\'s Canary Islands ran out of fuel and was stranded at sea for 25 days. On July 18, rescuers found 38 survivors and 143 dead or missing. Two children survived their rescue but lost their entire families at sea. 387 people were rescued across three operations. The Atlantic route to the Canary Islands is seeing sharp traffic increases driven by the Sahel security collapse, food insecurity (645 million globally hungry, two-thirds of Africans can\'t afford a healthy diet) and desperation.', icon: '🔴' },
  ],

  insight1: {
    title: 'THE ZANU-PF 2037 PUSH IS THE MOST CONSEQUENTIAL SIGNAL YET THAT ZIMBABWE\'S DEMOCRATIC REGRESSION HAS NO PLANNED STOPPING POINT',
    body: 'When a ruling party\'s provincial structure publicly pushes to extend the incumbent\'s rule to 2037 — before the ink is dry on the 2030 extension — it confirms a pattern rather than an event. Each constitutional amendment creates the normalisation effect that makes the next one easier. The 2028→2030 extension was justified as allowing "Vision 2030" to be completed. The 2030→2037 push is being justified on liberation war credentials. The next extension will have its own justification. The MDC challenges at the Constitutional Court — the only remaining democratic mechanism — face a court whose composition ZANU-PF has influenced over years of governance. Opposition to the 2037 push is analytically correct but politically powerless. Zimbabwe has structurally removed the mechanism by which citizens could replace their president and is now iterating on how long the incumbent stays.',
    conclusion: 'THE ZANU-PF 2037 PUSH CONFIRMS THAT ZIMBABWE\'S DEMOCRATIC REGRESSION HAS NO PLANNED STOPPING POINT. EACH EXTENSION CREATES THE PRECEDENT FOR THE NEXT. THE CONSTITUTIONAL COURT CHALLENGE IS THE ONLY REMAINING MECHANISM. ITS OUTCOME WILL DEFINE WHETHER ANY DEMOCRATIC CHECK ON EXECUTIVE POWER REMAINS IN ZIMBABWE.',
  },

  insight2: {
    title: 'THE 144 MAURITANIA DEAD ARE THE HUMAN COST OF THE SAHEL SECURITY COLLAPSE THAT DOESN\'T APPEAR IN AFRICA\'S RISK INDICES',
    body: 'When a boat from Gambia spends 25 days stranded at sea trying to reach the Canary Islands, and two children are pulled from it having lost their entire families, that is not a migration statistic. It is the biographical endpoint of a chain that begins with the Sahel\'s security collapse — JNIM overrunning villages, ISSP expanding from Mali into Nigeria, Burkina Faso\'s coup removing the last civilian check on security policy, Niger\'s junta closing the EU border cooperation frameworks, food insecurity affecting two-thirds of the continent\'s population, and UN funding gaps leaving only 34% of the $348m Sahel humanitarian target funded. The Atlantic route is seeing sharp traffic increases because the alternative — staying — is being made impossible by converging security, economic and governance failures across West Africa. The 144 dead off Mauritania are the leading indicator of the failure of every other story in this terminal.',
    conclusion: 'THE 144 MAURITANIAN DEAD ARE THE LEADING HUMAN INDICATOR OF THE COMPOUND FAILURE ACROSS WEST AFRICA. THE ATLANTIC ROUTE IS SEEING SHARP TRAFFIC INCREASES BECAUSE STAYING IS IMPOSSIBLE. MALI 50 DEAD IN AMBUSH, BURKINA FASO COUP FEARS, NIGER AIRPORT ATTACK, FOOD INSECURITY, UN FUNDING GAPS — ALL CULMINATE AT MAURITANIA\'S COAST.',
  },

  brief: {
    week: '30',
    title: 'WEEK 30 THURSDAY: RSF MASSACRES 85 IN SUDAN, ZANU-PF PUSHES 2037, ETHIOPIA OPEN CONFLICT WARNING, MAURITANIA 144 DEAD, BURKINA FASO COUP FEARS',
    body: 'Week 30\'s heaviest single day. RSF massacred at least 85 civilians in central Sudan — the UN describes Sudan as at a catastrophic breaking point with fighting and flooding compounding. ZANU-PF Harare Province is already pushing Mnangagwa\'s term to 2037, days after the 2030 extension was signed into law. Ethiopian opposition parties formally warned the government is steering Tigray toward open conflict. In Mauritania, 144 migrants are dead or missing — a Gambia boat spent 25 days stranded at sea. Burkina Faso\'s military ruler warned internal coup plotters, revealing junta fractures. Kenya\'s lawyers launched a nationwide court boycott. DRC\'s August 15 dialogue deadline is 23 days away. Zambia\'s election is 21 days away. Uganda manages simultaneous Ebola and Marburg. Senegal\'s Faye endorsed Sall for UN SG in a landmark U-turn. ZAR at 16.48, NGN at 1,378 — markets stable despite compound escalation.',
  },

  fxRates: {
    NGN: '1,378.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.48',
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
    { time: '09:30:00', signal: 'SUDAN RSF MASSACRE: 85 civilians killed in central Sudanese village — residents directly accuse RSF. UN: country at "catastrophic breaking point" — intense fighting + severe flooding. 59,000 dead since April 2023, 14m displaced, 33.7m needing urgent aid. EU gold ban in effect. US second chemical weapons sanctions. Most intense phase since 2024.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'ZIMBABWE: ZANU-PF Harare Province pushes Mnangagwa term to 2037 — days after 2030 extension signed. Masimirembwa: "We still want him for an additional seven years, from 2030 to 2037." Opposition filed Constitutional Court applications to overturn 2030 amendment. ZANU-PF factionalism: 2037 push also closes off VP Chiwenga\'s presidential ambitions. Each amendment creates platform for next.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'ETHIOPIA: Opposition parties warn July 22 — government steering Tigray toward open conflict. Confirms post-election war risk. US TPLF visa restrictions June 18. Hundreds of thousands displaced. Pretoria Agreement collapsed. TPLF reinstated Debretsion, introduced totalitarian control draft legislation, clashed directly with ENDF. National Dialogue Conference running parallel.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:45:00', signal: 'MAURITANIA: 144 migrants dead or missing — UNHCR July 21. Two incidents July 14-18. Gambia boat (160 people) to Canary Islands ran out of fuel — 25 days stranded at sea. July 18: 38 survivors, 143 dead or missing. Two children orphaned. 387 total rescued. Atlantic route traffic sharply increasing — Sahel security collapse, food insecurity driving mass departure.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'BURKINA FASO: Military ruler Traoré warns internal coup plotters — reveals deep junta factionalism. AES bloc (Burkina, Mali, Niger) ICC withdrawal ongoing. Mali 50 soldiers killed in ambush July 22. Internal regime instability in Burkina adds new fragility vector to AES architecture. Kenya: Lawyers nationwide court boycott — judicial corruption and case backlogs.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Food insecurity context: UN FAO State of Food Security 2026 — 645 million globally hungry, two-thirds of Africans cannot afford a healthy diet, more than half experienced moderate or severe food insecurity. Progress made but far too slow. Conflict, climate shocks and declining humanitarian funding threaten progress. Provides structural context for Mauritania migration disaster.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Zambia election August 13 — 21 days. DRC August 15 dialogue deadline — 23 days. South Africa: AU multilateral pressure track live, Ramaphosa impeachment panel sat, December 31 ultimatum. Uganda: Ebola + Marburg simultaneous — unprecedented. Senegal: Faye-Sall UN SG endorsement — Sonko reaction watch. Somalia: AUSSOM funding gap unresolved.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 23: NGN 1,378.00 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR 16.48 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. All rates stable. Markets absorbing Sudan massacre, ZANU-PF 2037 push, Ethiopia conflict warning, Mauritania disaster without major FX dislocation. ZAR structural support from gold/PGM exports intact.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 84, fiscal: 60, fx: 44, debt: 60, political: 90, external: 82 },
    { country: 'Ghana', flag: '🇬🇭', score: 28, fiscal: 24, fx: 38, debt: 24, political: 24, external: 28 },
    { country: 'Kenya', flag: '🇰🇪', score: 72, fiscal: 66, fx: 52, debt: 74, political: 74, external: 70 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 72, fx: 74, debt: 92, political: 99, external: 98 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 98, fiscal: 78, fx: 84, debt: 84, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
    { country: 'DRC', flag: '🇨🇩', score: 96, fiscal: 86, fx: 88, debt: 80, political: 94, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,378.00', change: '-13.47%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.48', change: '-8.74%', stress: 'LOW', ytd: '+8.74%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 21 DAYS', type: 'General Election', risk: 'HIGH', note: 'Hichilema under maximum pressure. ZMW -32.91% YTD. Power cuts. Slow reform. Opposition consolidated. 3 weeks to polling day. Most imminent major African election.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 23 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 cancelled July 22 protests — Tshisekedi dialogue announced. August 15 deadline. Red line: referendum bill enactment. Truce not resolution. June 12 saw live ammunition.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: government steering Tigray toward open conflict. US TPLF visa restrictions June 18. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk materialising.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: '2030 Signed — Now Pushing 2037', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'ZANU-PF Harare pushing 2037 extension days after 2030 signed into law. Opposition filed ConCourt challenge. Factionalism: 2037 push closes off Chiwenga\'s ambitions. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — AU Pressure Live', type: 'Municipal Elections', risk: 'CRITICAL', note: 'Ramaphosa impeachment panel sat. AU multilateral track live. 53,499 deported. December 31 ultimatum. Weekly marches. SA-Nigeria-Ghana crises compound.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Faye endorsed Sall for UN SG — major U-turn. Sonko reaction watch. Constitutional reforms deepening Faye-Sonko confrontation. IMF Q3 programme at risk.', color: '#f5a623' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Mohamud vs opposition. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 21 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — RSF PRIMARY FUNDING CUT', trend: '↓', risk: 'CRITICAL' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'GAS PIPELINE — NEW REVENUE STREAM', trend: '↑', risk: 'LOW' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'RSF MASSACRE 85 CIVILIANS — CATASTROPHIC BREAKING POINT', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPPOSITION: OPEN CONFLICT WARNING IN TIGRAY', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ZANU-PF NOW PUSHING 2037 — CONCOURTCHALLENGE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.3pts', fx: '-8.7%', signal: 'IMPEACHMENT PANEL — AU PRESSURE — DEC ULTIMATUM', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 21 DAYS — ZMW WORST AFRICA', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-30', bond: '+0.3pts', fx: '-6.6%', signal: 'FAYE BACKS SALL UN SG — SONKO REACTION WATCH', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-10', bond: '+0.8pts', fx: '+10.8%', signal: 'DEATH PENALTY ABOLISHED — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN EUROBOND — GAS PIPELINE BENEFICIARY', color: '#00c48c' },
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
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.80, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.85, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.30, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 23', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
