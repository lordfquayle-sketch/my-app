export const content = {
  riskIndex: '93',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 27, 2026 09:00 UTC',
    overallScore: 93,
    trend: 'WORSENING',
    drivers: ['Senegal Constitutional Rupture — Sonko Elected Speaker Defying President Faye', 'Ebola Reaches Europe — Two Suspected Italy Cases (Tested Negative)', 'Ebola 1,018 Cases 234 Deaths — 7 Uganda Confirmed', 'SA March and March June 30 Deadline — 34 Days'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 88, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 98, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'Constitutional rupture. President Faye fired PM Sonko May 22 and dissolved cabinet. Parliament defied him May 26 — elected Sonko as National Assembly Speaker with 132 votes. Faye named new PM Monday. Two power centres now operating from the same Pastef party. Fuel subsidy bill could overrun budget by 1.15 trillion CFA ($2bn) if oil hits $115/bbl. IMF frozen. $25bn needed 2026-2028. Supporters rallied outside Sonko home after firing.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'As of May 25: 105 confirmed cases (10 deaths), 906 suspected cases (223 deaths). Uganda: 7 confirmed, 1 death. Total 1,018 cases, 234 deaths as of May 25. Two suspected Italian cases (aid workers returning from Uganda) tested NEGATIVE — but Italy now screening all Uganda/DRC returnees. Bundibugyo strain — no vaccine, no treatment. Outbreak spreading faster than response.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'March and March June 30 deadline now 34 days away. Refugees sheltering on Durban pavements. Analysts explicitly warn of July 2021 repeat — 354 killed, R50bn damage. Ghana wrote to AU. Nigeria offering repatriation flights. Health Min Motsoaledi and Finance Min Godongwana visited Charlotte Maxeke hospital — maladministration and underspending confirmed. GNU under maximum compound pressure.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto pushed AU reform and self-reliance agenda. Ebola border risk elevated — Uganda 7 confirmed cases, driver who transported first Ugandan patient confirmed positive. Fuel structural crisis unresolved. Eurobond Q2 rollover critical. Mudavadi warned of tougher times ahead. Kenya growth 4.6% in 2025 — slowest since pandemic recovery.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'TPLF reinstated Tigray government assembly — violating Pretoria Agreement. Refugees International: "dangerously close to war." Federal funds withheld from Tigray. June election impossible to organise. Clashes ongoing since January. Eritrea reportedly backing TPLF factions. Horn of Africa security architecture under compound stress.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SENEGAL CONSTITUTIONAL RUPTURE — SONKO ELECTED SPEAKER DEFYING FAYE — EBOLA REACHES EUROPE AS SCARE — CONTINENT AT HISTORIC COMPOUND RISK',
    body: 'May 27 marks a historic inflection in African sovereign risk. In Senegal, the rupture between President Faye and ousted PM Sonko has produced a constitutional standoff without precedent: parliament elected Sonko as National Assembly Speaker with 132 votes just days after Faye fired him. Two power centres now operate from the same party — Pastef holds 130 of 165 seats. Faye has named a new PM but Sonko controls the legislature. This is the most dangerous intra-government rupture in West Africa since the Mali coups. Simultaneously, Ebola reached Europe as a scare: two Italian aid workers returning from Uganda were hospitalised in Milan with haemorrhagic fever symptoms — both tested negative, but Italy has activated full Ebola screening protocols at Malpensa and Fiumicino airports. The outbreak stands at 1,018 cases and 234 deaths with Uganda confirming 7 cases. A driver who transported Uganda\'s first confirmed patient has now tested positive. The global travel architecture around East and Central Africa is tightening by the day.',
    tag: 'MAY 27 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 27, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SENEGAL: PARLIAMENT ELECTS SONKO SPEAKER — CONSTITUTIONAL STANDOFF WITH FAYE', body: 'President Faye fired Sonko on May 22 and dissolved the entire cabinet after months of tensions over debt crisis management and Sonko\'s "excessive personalisation" of Pastef. Parliament defied him May 26 — reinstated Sonko as MP and elected him National Assembly Speaker with 132 votes (he was sole candidate). Faye named new PM Monday. Fuel subsidy overrun risk: 1.15 trillion CFA ($2bn) if oil hits $115/bbl. $25bn needed for 2026-2028 obligations. IMF frozen. Default risk critical. Two power centres, one party — unprecedented.', icon: '🚨' },
    { title: 'EBOLA REACHES EUROPE — ITALY MILAN SCARE — TESTS NEGATIVE BUT PROTOCOLS ACTIVATED', body: 'Two Italian aid workers (31M, 33F) returning from three months in Uganda hospitalised in isolation at Sacco Hospital Milan with fever, vomiting, nausea, neurological symptoms. Feared Ebola. Italy activated full screening protocols at Malpensa and Fiumicino. Tests returned NEGATIVE — likely bacterial infection or cerebral malaria. But the scare confirms the global transmission risk is real: Italy now screens all Uganda/DRC returnees. Airport health surveillance expanding across Europe.', icon: '🔴' },
    { title: 'EBOLA: 1,018 CASES 234 DEATHS — DRIVER OF UGANDA\'S FIRST PATIENT NOW POSITIVE', body: 'As of May 25: 105 confirmed (10 deaths), 906 suspected (223 deaths) in DRC. Uganda: 7 confirmed, 1 death. New case: driver who transported Uganda\'s first confirmed patient has now tested positive — contact tracing chain breaking down. Outbreak in Ituri, Nord-Kivu, Sud-Kivu and Kampala simultaneously. No vaccine, no treatment. WHO: spreading faster than response. Italy scare now accelerating European screening measures.', icon: '⚠️' },
    { title: 'SOUTH AFRICA: 34 DAYS TO JUNE 30 DEADLINE — GNU UNDER MAXIMUM PRESSURE', body: 'March and March June 30 deadline is now 34 days away. Burundian, DRC, Zimbabwean refugees sheltering on Durban pavements outside Home Affairs offices. Analysts explicitly comparing to July 2021 — 354 dead, R50bn damage, 200 shopping centres destroyed. GNU government has no clean compliance option: full enforcement would be illegal, non-enforcement emboldens the movement. Charlotte Maxeke hospital maladministration confirmed by ministers on site. GNU managing simultaneously: xenophobia, NHI defeat, US-SA relations, municipal elections.', icon: '🔥' },
  ],

  insight1: {
    title: 'SENEGAL\'S SONKO-FAYE RUPTURE IS THE MOST DANGEROUS WEST AFRICAN POLITICAL CRISIS SINCE THE MALI COUPS',
    body: 'The constitutional mechanics of what has happened in Senegal are extraordinary. President Faye and Speaker Sonko are from the same party — Pastef — which controls 130 of 165 parliamentary seats. The party\'s founder and most powerful figure now controls the legislature and is in direct confrontation with the party\'s president. Sonko\'s record is instructive: he opposed IMF restructuring, revoked 71 mining licences, and confronted BP over gas contracts. His fuel price obstruction may cost the state 1.15 trillion CFA francs in subsidy overruns. The new PM Faye has named inherits a $25bn debt obligation, a frozen IMF programme, and a parliament controlled by his predecessor. The IMF cannot resume disbursements without government coherence. Sovereign default in 2026 is now the baseline scenario, not the tail risk.',
    conclusion: 'SENEGAL IS NOW IN A CONSTITUTIONAL AND FISCAL DOUBLE CRISIS. THE SONKO-AS-SPEAKER OUTCOME MAKES IMF RE-ENGAGEMENT STRUCTURALLY IMPOSSIBLE IN THE NEAR TERM. DEFAULT RISK HAS NEVER BEEN HIGHER.',
  },

  insight2: {
    title: 'THE MILAN EBOLA SCARE CHANGES THE EUROPEAN AND GLOBAL PERCEPTION OF AFRICA RISK',
    body: 'The two Italian aid workers tested negative — but the damage to Africa\'s risk perception is already done. Italy has activated airport screening at Malpensa and Fiumicino for all Uganda and DRC returnees. The scare dominated European news cycles for 24 hours. Every airline operating routes to East and Central Africa is reassessing. Every multinational with staff in Kampala, Nairobi or Bunia is reviewing duty-of-care protocols. Every NGO with field teams in eastern DRC is on heightened alert. The actual test results do not undo the signal. Seven confirmed Uganda cases — including a driver whose contact-tracing chain has now broken — is the live transmission risk that makes further European scares a matter of when, not if. The macro risk to East Africa FDI, tourism and humanitarian funding is accelerating.',
    conclusion: 'THE MILAN SCARE MARKS EBOLA\'S ENTRY INTO EUROPEAN PUBLIC CONSCIOUSNESS. AFRICA\'S FDI AND TRAVEL RISK PREMIUM IS BEING REPRICED IN REAL TIME ACROSS GLOBAL INSTITUTIONAL FRAMEWORKS.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 MID: SENEGAL CONSTITUTIONAL RUPTURE, EBOLA REACHES EUROPE, SA 34 DAYS TO DEADLINE',
    body: 'Week 22 mid-point is the most consequential 24 hours in African sovereign risk this year. Senegal has entered a constitutional standoff: parliament elected fired PM Sonko as National Assembly Speaker with 132 votes, directly defying President Faye. Two power centres now operate from Pastef — the same party. The new PM inherits a $25bn debt crisis with the IMF frozen and the legislature controlled by his predecessor. Ebola reached Europe as a scare: two Italian aid workers from Uganda hospitalised in Milan tested negative, but Italy activated full airport screening. Seven Uganda confirmed cases — including a new case in a driver whose contact chain has broken. The outbreak stands at 1,018 cases and 234 deaths. South Africa is 34 days from the March and March June 30 deadline — analysts warn of July 2021 repeat. Ethiopia is on the brink of war. Kenya\'s Eurobond rollover is approaching. Ghana remains the sole unambiguously positive large sovereign. The compound risk on May 27 is without precedent in this cycle.',
  },

  fxRates: {
    NGN: '1370.31',
    GHS: '11.36',
    KES: '129.50',
    EGP: '53.12',
    XOF: '610.00',
    ZAR: '18.20',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3710.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Senegal: Parliament elects fired PM Sonko as National Assembly Speaker — 132 votes, sole candidate. Faye named new PM. Two power centres from same party. Fuel overrun risk 1.15 trillion CFA. IMF frozen. $25bn needed 2026-2028. Constitutional standoff unprecedented in West Africa.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'XOF' },
    { time: '09:15:00', signal: 'Ebola Italy scare: Two aid workers (31M, 33F) returning from Uganda hospitalised in Milan with haemorrhagic fever symptoms. Tests returned NEGATIVE. But Italy activates full Ebola screening at Malpensa and Fiumicino airports. All Uganda/DRC returnees now screened. European protocols escalating.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'Ebola May 25 update: 105 confirmed (10 dead), 906 suspected (223 dead) DRC. Uganda 7 confirmed, 1 dead. Total 1,018 cases, 234 deaths. Driver who transported Uganda\'s first patient now positive — contact chain breaking. Ituri, Nord-Kivu, Sud-Kivu, Kampala all active. No vaccine, no treatment.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'South Africa: June 30 deadline now 34 days away. Refugees on Durban pavements. GNU no clean compliance option. Charlotte Maxeke hospital maladministration confirmed. Analysts warn July 2021 riot risk — 354 dead, R50bn damage. Ghana wrote to AU. Nigeria offering repatriation flights.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ethiopia-TPLF: Refugees International warns "dangerously close to war." TPLF reinstated Tigray government — violating Pretoria Agreement. Federal funds withheld. June election cannot be organised. Eritrea backing TPLF factions. Ebola on Ethiopia\'s western border compounds Horn risk.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Senegal: Faye fired Sonko May 22 over debt crisis management — fuel subsidy obstruction, IMF restructuring refusal, excessive party personalisation. Sonko revoked 71 mining licences, confronted BP over gas contracts during tenure. Now controls legislature. New PM inherits fiscal crisis without IMF lifeline.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:00:00', signal: 'Nigeria: Joint Nigeria-AFRICOM operations killed 175 ISWAP fighters including commander Abubakar Mainok (Abu-Bilal Al-Minuki). Lake Chad island operations. Tinubu confirms kill. But civilian airstrike crisis (300+ dead in two months) remains unaddressed. 2027 election risk building.', detail: 'MEDIUM', type: 'INFO', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '07:45:00', signal: 'Ghana: Continental benchmark holds. Fitch B/positive. Inflation 3.4% April — lowest since 1999. Reserves $12.3bn. GSE strongest African market YTD in hard currency. Debt to 46% GDP by 2027. Only large sovereign entering June with unambiguously positive trajectory.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 38, fiscal: 40, fx: 34, debt: 42, political: 32, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 86, fiscal: 82, fx: 76, debt: 88, political: 90, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 86, fiscal: 68, fx: 74, debt: 62, political: 99, external: 82 },
    { country: 'Senegal', flag: '🇸🇳', score: 96, fiscal: 98, fx: 86, debt: 96, political: 98, external: 90 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 92, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.20', change: '+0.90%', stress: 'ELEVATED', ytd: '+0.70%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'HIGH', ytd: '0.00%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'CRITICAL', note: 'TPLF reinstated Tigray government — violating Pretoria Agreement. Refugees International: "dangerously close to war." June election impossible in Tigray. Federal funds withheld. Ebola on border.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'March and March June 30 deadline — 34 days. July 2021 riot risk. NHI defeat. Charlotte Maxeke confirmed maladministration. GNU under maximum compound pressure.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilians killed in airstrikes in two months. ISWAP commander killed jointly with AFRICOM. Civilian airstrike crisis unaddressed. Atiku positioning. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ruto AU reform push. Ebola border risk — Uganda 7 confirmed. Eurobond Q2 rollover critical. Growth slowest since pandemic recovery. Mudavadi warns tougher times.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↑', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+75', bond: '-3.2pts', fx: '-2.5%', signal: 'CONSTITUTIONAL RUPTURE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+40', bond: '-2.0pts', fx: '-0.5%', signal: 'EBOLA BORDER + EUROBOND', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+28', bond: '-1.4pts', fx: '-0.3%', signal: 'JUNE 30 DEADLINE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE CRISIS', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
