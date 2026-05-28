export const content = {
  riskIndex: '94',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 28, 2026 09:00 UTC',
    overallScore: 94,
    trend: 'WORSENING',
    drivers: ['WHO: DRC Faces Catastrophic Collision of Ebola and War — Ceasefire Appeal', 'Ghana Repatriates 295 Citizens from SA — Flights Accelerating', 'Senegal Bonds at Record Distress — 2033 at 50.6c — Restructuring Priced', 'Kenya Finance Bill 2026 Resurrects Ghost of Gen Z — Due June 30'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 90, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'WHO DG Tedros: eastern DRC faces a "catastrophic collision of disease and conflict." Ebola in Ituri outpacing response — insecurity, health facility attacks and population movement making contact tracing "nearly impossible." Tedros appeals for immediate ceasefire: "We cannot build community trust or isolate the sick while bombs are falling." Uganda formally closes border — only aid, food and cargo with strict health screening. Mandatory 21-day self-isolation for all DRC returnees. 1,198 cases, 255 deaths as of May 26.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Ghana repatriated 295 citizens from OR Tambo to Accra on Wednesday — chartered flight, voluntary programme. More Ghanaians than expected turned up at airport. Nigeria repatriation flights also being organised. March and March June 30 deadline: 33 days. South Africa acting Police Minister: 58 murders per day in Q1 2026 — "levels of violence still unacceptably high." Limpopo Commissioner raising alarms over violent crimes. GNU compound pressure intensifying.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Bond market at distressed levels. 2028 euro bond at 56.6 cents — second largest single-day fall in a decade. 2033 dollar bond at record low 50.6 cents. Morgan Stanley pricing restructuring. New PM Ahmadou Al Aminou Lo (ex-BCEAO) faces Sonko-controlled legislature of 130/165 seats. Debt 132% GDP. IMF frozen. Barclays: fuel subsidy removal is non-negotiable IMF condition — Sonko blocked exactly that. Default window: Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 described as resurrecting "ghost of Gen Z protests" — taxes on mobile phones, bottled water, coal, plastics, credit card swipes. Must pass by June 30. In 2024 the Finance Bill killed 50+, stormed parliament, forced Ruto to veto. Ruto offering PAYE relief for those earning under Ksh30,000 as pre-emptive concession. Africa Confidential: Ruto told allies he expects to win 2027 by 2-3 million votes — but street arithmetic is being tested by fuel prices AND Finance Bill simultaneously.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'TPLF reinstated Tigray government assembly — violating Pretoria Agreement. Refugees International: "dangerously close to war." Federal funds withheld. June election impossible in Tigray. Clashes ongoing since January. Ebola on western border. Horn of Africa carrying Ebola plus proto-war simultaneously.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'WHO CALLS FOR DRC CEASEFIRE TO STOP EBOLA — GHANA EVACUATES CITIZENS FROM SA — KENYA FINANCE BILL RESURRECTS GEN-Z GHOST — JUNE 30 IS THE CONTINENT\'S MOST DANGEROUS DATE',
    body: 'May 28 delivers three escalations that define the June risk environment. WHO Director-General Tedros has issued his most urgent statement yet: eastern DRC faces a "catastrophic collision of disease and conflict" — Ebola in Ituri is spreading faster than the response, insecurity is making contact tracing nearly impossible, and he has personally appealed for an immediate ceasefire. "We cannot build community trust or isolate the sick while bombs are falling." Uganda has formally closed its border — mandatory 21-day isolation for all DRC returnees. Ghana has now put its repatriation programme into action: 295 citizens flew from OR Tambo to Accra on Wednesday, with more flights being organised. More Ghanaians turned up than were registered — a signal of fear on the ground. Nigeria is organising its own flights. In Kenya, the Finance Bill 2026 is being described by analysts as resurrecting the "ghost of the Gen Z uprising" — taxes on mobile phones, bottled water and everyday goods, due June 30. Ruto is pre-emptively offering PAYE relief for the lowest earners but Africa Confidential reports his political arithmetic is being tested by fuel prices AND the Finance Bill simultaneously. June 30 is simultaneously South Africa\'s xenophobia deadline, Kenya\'s Finance Bill deadline, and Senegal\'s IMF readiness test. The continent has never had three tier-1 sovereign risk events converging on the same date.',
    tag: 'MAY 28 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 28, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'WHO: CATASTROPHIC COLLISION OF EBOLA AND WAR — CEASEFIRE APPEAL ISSUED', body: 'WHO DG Tedros on Wednesday: "Eastern DRC now faces a catastrophic collision of disease and conflict with the Ebola outbreak in Ituri province outpacing the response." Insecurity, attacks on health facilities and population movement making contact tracing "nearly impossible." Tedros appeals for immediate ceasefire: "We cannot build community trust or isolate the sick while bombs are falling. Stopping this Ebola transmission depends entirely on humanitarian access." Uganda formally closes border — 21-day mandatory isolation for DRC returnees. 10 million people in Ituri, North Kivu, South Kivu and Tanganyika facing acute hunger simultaneously.', icon: '🚨' },
    { title: 'GHANA REPATRIATES 295 CITIZENS FROM SA — MORE FLIGHTS COMING', body: '295 Ghanaians flew from OR Tambo International Airport to Accra on a chartered flight Wednesday — Ghana\'s voluntary repatriation programme in response to anti-immigrant tensions. Ghana High Commissioner Quashie at airport: more people turned up than were on the registered list. Nigeria organising its own repatriation flights. March and March June 30 deadline is 33 days away. South Africa acting Police Minister: 58 murders per day in Q1 2026 — violence "unacceptably high." Foreign nationals departing is itself a signal that the threat environment is being taken seriously.', icon: '🔥' },
    { title: 'KENYA FINANCE BILL 2026 — GEN-Z GHOST — TAXES ON PHONES, WATER, EVERYDAY GOODS', body: 'Kenya\'s Standard: Finance Bill 2026 "resurrects the ghost of the 2024 Gen Z uprising." Proposes taxes on mobile phones, bottled water, coal, plastic basins and credit card swipes — the same political profile as 2024 which killed 50+, stormed parliament, and forced Ruto to veto. Ruto is pre-emptively offering PAYE relief for those earning under Ksh30,000. But Africa Confidential reports Ruto told allies he expects to win 2027 by 2-3m votes despite street-level pressure from fuel prices AND Finance Bill simultaneously. Bill must pass by June 30 — exactly when SA hits its xenophobia deadline.', icon: '⚠️' },
    { title: 'SENEGAL: PM LO FACES STRUCTURAL IMPOSSIBILITY — BONDS AT RECORD DISTRESS', body: 'New PM Ahmadou Al Aminou Lo (ex-BCEAO chief) takes office with 2033 dollar bonds at record low 50.6 cents on the dollar. Morgan Stanley explicitly pricing restructuring. Allan Gray warns haircuts could be steeper than priced. Barclays: IMF will require fuel subsidy removal — the exact policy Sonko\'s legislature blocked. Sonko controls 130 of 165 National Assembly seats as Speaker. Faye cannot pass IMF-required reforms through a legislature his fired PM controls. Debt 132% GDP. Default window: Q4 2026–Q1 2027.', icon: '⚖️' },
  ],

  insight1: {
    title: 'TEDROS\'S CEASEFIRE APPEAL CONFIRMS EBOLA CONTAINMENT HAS FAILED AS A TECHNICAL EXERCISE',
    body: 'When the WHO Director-General personally appeals for an immediate military ceasefire to contain a disease outbreak, the standard public health response architecture has broken down. Tedros\'s statement today — that Ebola is spreading faster than the response, that contact tracing is nearly impossible under active conflict, that health facilities are being attacked — is a formal declaration that the conventional Ebola playbook cannot function in eastern DRC\'s security environment. The 2018-2020 North Kivu outbreak, which killed 2,286 people and took two years to contain, played out in similar conditions. The Bundibugyo strain has no vaccine and no treatment. With 10 million people facing acute hunger simultaneously in the affected provinces, the humanitarian-disease compound is the most dangerous outbreak environment since West Africa 2014-16. The ceasefire appeal will not be heeded immediately. That is the baseline.',
    conclusion: 'TEDROS\'S CEASEFIRE APPEAL IS THE SIGNAL THAT EBOLA CONTAINMENT IN EASTERN DRC HAS PASSED THE POINT WHERE TECHNICAL RESPONSE ALONE IS SUFFICIENT. THIS OUTBREAK WILL NOT BE CONTAINED QUICKLY. EAST AND CENTRAL AFRICA MACRO RISK REPRICING MUST NOW BE TREATED AS STRUCTURAL, NOT CYCLICAL.',
  },

  insight2: {
    title: 'GHANA\'S REPATRIATION FLIGHT IS THE CLEAREST SIGNAL YET THAT JUNE 30 IN SOUTH AFRICA IS REAL',
    body: 'When a government charters a plane to evacuate its citizens from a peer African country, it has made a formal sovereign risk assessment. Ghana\'s repatriation of 295 citizens from OR Tambo on Wednesday — with more turning up than registered — is the clearest market signal yet that the June 30 March and March deadline is being treated as a genuine physical threat, not political theatre. Nigeria is organising similar flights. This is not the behaviour of governments that believe the GNU will manage the situation quietly. The South African acting Police Minister\'s statement today — 58 murders per day in Q1 2026 — underlines that the baseline violence environment is already severe before the June 30 countdown expires. The GNU has no enforcement option that is both legal and effective. The risk window between now and June 30 is the most dangerous domestic political period in South Africa since July 2021.',
    conclusion: 'GHANA\'S EVACUATION FLIGHT CONFIRMS THE JUNE 30 THREAT IS REAL AND BEING PRICED BY SOVEREIGN GOVERNMENTS. WATCH ZAR VOLATILITY AND GNU COHESION IN THE NEXT 33 DAYS.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 MID: WHO CEASEFIRE APPEAL, GHANA EVACUATES SA, KENYA FINANCE BILL GEN-Z GHOST, SENEGAL BONDS AT RECORD LOW',
    body: 'Week 22 mid-point sees four simultaneous escalations. WHO Director-General Tedros has issued a ceasefire appeal for eastern DRC — saying the Ebola outbreak has reached a "catastrophic collision of disease and conflict" where contact tracing is nearly impossible under active armed conflict. Uganda has formally closed its border. Ghana repatriated 295 citizens from South Africa on Wednesday — more than expected showed up at OR Tambo. Nigeria is organising its own flights. The March and March June 30 deadline is 33 days away. Kenya\'s Finance Bill 2026 is being described as resurrecting the ghost of the 2024 Gen Z uprising — with taxes on phones, water and everyday goods due June 30, the same date as South Africa\'s deadline. Senegal\'s 2033 dollar bonds are at record lows of 50.6 cents; Morgan Stanley is explicitly pricing restructuring; the new PM faces a Sonko-controlled legislature that blocked the IMF conditions he must now deliver. June 30 is the most dangerous sovereign risk date on the African calendar. Ghana — despite running its own repatriation flights — remains the continental credit benchmark.',
  },

  fxRates: {
    NGN: '1370.31',
    GHS: '11.36',
    KES: '129.50',
    EGP: '53.12',
    XOF: '615.00',
    ZAR: '18.45',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3710.00',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'WHO DG Tedros: DRC faces "catastrophic collision of disease and conflict." Ebola outpacing response. Contact tracing "nearly impossible." Appeals for immediate ceasefire: "cannot isolate the sick while bombs are falling." Uganda border formally closed — 21-day mandatory isolation for DRC returnees.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Ghana repatriates 295 citizens from OR Tambo to Accra — chartered flight Wednesday. More turned up than registered. Nigeria organising repatriation flights. March and March June 30 deadline: 33 days. SA acting Police Minister: 58 murders/day Q1 2026 — "unacceptably high."', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Kenya Finance Bill 2026: Standard Media — "resurrects ghost of Gen Z uprising." Taxes on mobile phones, bottled water, coal, plastic basins, credit card swipes. Must pass June 30. 2024 Finance Bill killed 50+, stormed parliament. Ruto offering PAYE relief under Ksh30,000 as pre-emptive concession.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:45:00', signal: 'Senegal: 2033 dollar bonds at record low 50.6 cents. Morgan Stanley: restructuring now priced. PM Lo (ex-BCEAO) faces Sonko-controlled legislature 130/165 seats. Barclays: IMF requires fuel subsidy removal — Sonko blocked that. Debt 132% GDP. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'Africa Confidential May 28: Ruto told allies he expects 2027 win by 2-3 million vote margin — but "political arithmetic less comfortable from street level." Fuel prices from US-Iran war AND Finance Bill 2026 testing voters simultaneously. Finance Bill due June 30.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Ebola: WHO raised DRC risk to "very high", regional risk to "high." 10 million people in affected provinces facing acute hunger — Tedros: "hunger and disease are old companions, people weakened by hunger far more vulnerable." 1,198 cases 255 deaths as of May 26. No vaccine, no treatment.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ethiopia: TPLF-federal tensions at breaking point. Refugees International: "dangerously close to war." Ebola on western border. June election impossible in Tigray. Horn of Africa carrying simultaneous Ebola/proto-war/humanitarian crisis — most complex regional risk stack on continent.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '07:45:00', signal: 'Ghana: Repatriation flight underscores SA risk but domestic trajectory intact. Fitch B/positive. Inflation 3.4% — lowest since 1999. Reserves $12.3bn. GSE strongest African market YTD. Debt to 46% GDP by 2027. Continental credit benchmark — even while evacuating its own citizens from SA.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 40, fx: 34, debt: 42, political: 36, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 90, fiscal: 84, fx: 76, debt: 90, political: 96, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 88, fiscal: 68, fx: 76, debt: 62, political: 99, external: 84 },
    { country: 'Senegal', flag: '🇸🇳', score: 98, fiscal: 99, fx: 88, debt: 98, political: 98, external: 92 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 92, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '-1.30%', stress: 'ELEVATED', ytd: '+0.20%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'CRITICAL', note: 'TPLF reinstated Tigray government — violating Pretoria Agreement. Refugees International: "dangerously close to war." June election impossible in Tigray. Ebola on border.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 deadline — 33 days. Ghana evacuating citizens. 58 murders/day Q1. GNU no clean compliance option. July 2021 riot risk explicit.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP commander killed. State police bill under consideration. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill 2026 June 30 deadline — resurrects Gen-Z ghost. Ruto told allies 2-3m vote margin but street arithmetic deteriorating. Eurobond rollover. Ebola border risk.', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'RESTRUCTURING PRICED', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+42', bond: '-2.1pts', fx: '-0.5%', signal: 'FINANCE BILL + EUROBOND', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+30', bond: '-1.5pts', fx: '-1.3%', signal: 'JUNE 30 — EVACUATIONS LIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + ELECTION RISK', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE — EVACUATING SA', color: '#00c48c' },
  ],
}
