export const content = {
  riskIndex: '87',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 22, 2026 09:00 UTC',
    overallScore: 87,
    trend: 'WORSENING',
    drivers: ['Uganda Closes DRC Border/Flights', 'Ebola 670 Cases 160 Deaths', 'Ruto Diesel Concession — Strike Called Off', 'Somalia Constitutional Crisis Deepening'],
    regions: [
      { region: 'East Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 95, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Uganda closes DRC border, suspends all flights and cross-border transport effective within 48hrs. WHO: 670 suspected cases, 160 deaths. Outbreak now in Ituri, Nord-Kivu AND South Kivu. WHO regional director warns "just one contact case puts all of us at risk." Bundibugyo strain — no approved vaccine.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto announces Ksh10 diesel cut for June-July cycle (to Ksh222.92) after 4 dead, 30 injured in transport strike. Strike called off. Ruto waives import duty on first 100,000 EVs. Current crisis framed as Iran-war global supply shock. Ksh28.19bn spent on fuel stabilisation since April.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'Parliament voted to extend presidential and parliamentary terms from 4 to 5 years in March — opposition calls it a constitutional coup. President Hassan Sheikh Mohamud term expired May 15. Somali Future Council threatening parallel political process. Crisis deepening.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Constitutional Court NHI defeat stands. Home Affairs Min Schreiber signals major immigration crackdown — deportations up from 14,589 (2020/21) to 57,784 (2025/26). Anti-immigrant protests by March and March movement. GNU under compound pressure.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM Sonko rejects restructuring, needs 15 trillion CFA francs ($25bn) to cover 2026-2028 obligations. Government internal tensions and high-level resignations reported.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'UGANDA CLOSES DRC BORDER AND SUSPENDS ALL FLIGHTS — EBOLA NOW IN THREE PROVINCES — EAST AFRICA TRANSPORT ARCHITECTURE FRACTURING',
    body: 'The Ebola crisis escalated sharply on May 22. Uganda has suspended all flights to and from DRC, halted cross-border buses, ferries and Semliki River transport for four weeks, and cancelled Martyrs Day celebrations. The outbreak has spread beyond Ituri Province into Nord-Kivu and South Kivu. WHO\'s regional director for Africa warned today that "just one contact case puts all of us at risk" — the Bundibugyo strain has no approved vaccine. Case count: 670 suspected, 160 deaths, 61 confirmed. Meanwhile Ruto has made a partial concession on fuel — a Ksh10 diesel cut for June-July — calling off next week\'s transport strike but leaving the structural problem unresolved. East Africa is now carrying an Ebola containment crisis, a fuel-driven political crisis, and a Somali constitutional crisis simultaneously. The compound risk is without precedent in the current cycle.',
    tag: 'MAY 22 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 22, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'UGANDA CLOSES DRC BORDER — ALL FLIGHTS AND TRANSPORT SUSPENDED', body: 'Uganda suspends flights, cross-border buses, ferries and weekly border markets following two confirmed Ebola cases (one Congolese national who died at Kibuli Hospital). President Museveni cancels Martyrs Day. Health PS Diana Atwine: "risk of further importation remains high." Outbreak now confirmed in three DRC provinces: Ituri, Nord-Kivu, South Kivu.', icon: '🚨' },
    { title: 'WHO WARNS: 670 CASES, 160 DEATHS — BUNDIBUGYO STRAIN HAS NO VACCINE', body: 'WHO Regional Director Mohamed Yakub Janabi warns against underestimating Ebola risk. "You just need one contact case to put all of us at risk." 670 suspected cases, 160 suspected deaths, 61 confirmed per DRC health ministry. Bundibugyo strain — rarer variant, no approved vaccine currently available. US entry restrictions cover DRC, Uganda and South Sudan.', icon: '🔴' },
    { title: 'RUTO DIESEL CONCESSION — STRIKE CALLED OFF, STRUCTURAL PROBLEM REMAINS', body: 'Ruto announces Ksh10 diesel reduction for June-July cycle (Nairobi price falls to Ksh222.92). Transport operators call off next week\'s strike. Ksh28.19bn spent on subsidies since April. Also waives import duty on first 100,000 EVs. But diesel still up ~50% since Iran war began Feb 28. Fuel pricing architecture remains unresolved.', icon: '🔥' },
    { title: 'SOMALIA CONSTITUTIONAL COUP — PARALLEL GOVERNMENT RISK RISING', body: 'President Hassan Sheikh Mohamud\'s term expired May 15 after parliament voted to extend terms from 4 to 5 years. Opposition Somali Future Council calls it a constitutional coup and has signalled formation of a parallel political process. Puntland and other Federal Member States restive. Al-Shabaab exploiting political vacuum.', icon: '⚖️' },
  ],

  insight1: {
    title: 'UGANDA BORDER CLOSURE IS THE EBOLA ESCALATION SIGNAL MARKETS HAVE NOT PRICED',
    body: 'Uganda\'s suspension of all flights and cross-border transport with DRC is the most significant Ebola containment escalation since the PHEIC declaration. Three DRC provinces now affected. The Bundibugyo strain has no approved vaccine — meaning ring vaccination, the tool that contained prior outbreaks, is unavailable. WHO\'s public warning today that a single contact case risks spreading the virus beyond DRC and Uganda is the clearest signal yet that international health authorities are alarmed. FDI decisions into East Africa are being repriced in real time. Airlines are adjusting capacity. The US Title 42 restrictions now cover Uganda in addition to DRC and South Sudan — the travel architecture around East Africa is fundamentally altered.',
    conclusion: 'THE UGANDA BORDER CLOSURE MARKS A NEW PHASE. EAST AFRICA FDI, TOURISM AND TRADE FLOWS FACE SUSTAINED COMPRESSION THROUGH H2 2026. UGX AND KES ARE THE HIGHEST-RISK CURRENCIES ON THE CONTINENT.',
  },

  insight2: {
    title: 'RUTO\'S DIESEL CONCESSION IS A POLITICAL SURVIVAL MOVE — THE FISCAL COST IS MOUNTING',
    body: 'Kenya has now spent Ksh28.19bn on fuel stabilisation across two pricing cycles while diesel prices remain near historic highs due to the Iran war and Strait of Hormuz disruptions. The Ksh10 per litre June-July cut brings diesel to Ksh222.92 — still 13% above pre-crisis levels. The EV import duty waiver is a structural signal but years from material impact. Ruto has demonstrated the same pattern as the 2024 Finance Bill reversal: concede under street pressure, manage the fiscal cost later. The Kenya sovereign credit story is the Ebola PHEIC, the fuel subsidy bill, and the Eurobond rollover — simultaneously. No other African sovereign is carrying this compound load.',
    conclusion: 'KENYA IS THE HIGHEST-RISK LARGE SOVEREIGN IN AFRICA IN THE CURRENT CYCLE. THE RUTO CONCESSION BUYS TIME BUT DOES NOT RESOLVE THE STRUCTURAL FISCAL AND POLITICAL EXPOSURE.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21 END: UGANDA CLOSES DRC BORDER, EBOLA IN THREE PROVINCES, RUTO CONCEDES ON DIESEL',
    body: 'Week 21 closes at maximum intensity. Uganda has suspended all flights and cross-border transport with DRC as Ebola spreads into three provinces — Ituri, Nord-Kivu and South Kivu. 670 suspected cases, 160 deaths. The Bundibugyo strain has no approved vaccine. WHO\'s regional director issued the starkest public warning yet: one contact case can spread it beyond current borders. In Kenya, Ruto has announced a Ksh10 diesel cut for the June-July cycle — transport operators called off next week\'s strike, but Ksh28.19bn has already been spent on stabilisation and the structural fuel cost problem remains. Somalia\'s constitutional crisis is deepening after the opposition declared Mohamud\'s extended term illegitimate. South Africa\'s immigration crackdown is accelerating with deportations up fourfold. Senegal\'s internal political tensions are fracturing the government. Ghana remains the continental benchmark. Everything else is in active deterioration.',
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
    { time: '09:30:00', signal: 'Uganda suspends all flights to/from DRC and cross-border transport effective within 48hrs. Martys Day celebrations cancelled. Outbreak confirmed in three DRC provinces. WHO: 670 suspected cases, 160 deaths, 61 confirmed.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Ruto announces Ksh10 diesel cut for June-July cycle (to Ksh222.92) at State House Mombasa. PSV operators call off next week\'s strike. Ksh28.19bn spent on subsidies. Import duty waived on first 100,000 EVs.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'WHO Regional Director Janabi: "You just need one contact case to put all of us at risk." Bundibugyo strain has no approved vaccine. US Title 42 restrictions now cover DRC, Uganda and South Sudan.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Somalia constitutional crisis: President Mohamud\'s term expired May 15 after parliament extended terms 4→5 years. Opposition Somali Future Council threatens parallel government process. Puntland restive.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'South Africa: Home Affairs Min Schreiber signals major immigration crackdown. Deportations up from 14,589 (2020/21) to 57,784 (2025/26). Anti-immigrant March and March protests. GNU managing compound pressures.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Senegal: Internal government fractures — high-level resignations reported. PM Sonko still rejects IMF restructuring. Needs 15 trillion CFA francs ($25bn) for 2026-2028 debt obligations. Default risk critical.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:00:00', signal: 'Ebola outbreak now confirmed in South Kivu — third DRC province affected. Previously concentrated in Ituri. Hard-to-access areas with active armed groups complicating containment. Africa CEO Forum Kigali concluded.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'Ghana GHS at 11.36 — continental benchmark for recovery holds. Fitch B/positive outlook. GSE strongest African market YTD in hard currency. Accra Reset health sovereignty agenda gaining traction.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Parliament extended terms 4→5 years in March. President term expired May 15. Opposition calls it constitutional coup. Parallel government process threatened by Somali Future Council.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. Uganda-DRC closure reshaping regional movement. Abiy expected to win but instability risk elevated.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'NHI court defeat. Immigration crackdown accelerating. GNU durability test. US-SA lowest point. President corruption allegations ongoing.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Dangote IPO positive but food inflation, IS threat and political risk building from multiple directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Fuel crisis partially defused by Ruto concession. 4 dead, 30 injured in protests. Ebola border risk. Eurobond rollover. Structural fiscal exposure unresolved.', color: '#ff3b3b' },
  ],heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 60, fx: 55, debt: 60, political: 78, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 44, fx: 36, debt: 46, political: 35, external: 48 },
    { country: 'Kenya', flag: '🇰🇪', score: 84, fiscal: 80, fx: 76, debt: 88, political: 90, external: 88 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 68, fx: 72, debt: 62, political: 92, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 94, fx: 84, debt: 92, political: 80, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 84, fiscal: 70, fx: 78, debt: 74, political: 68, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'MODERATE', ytd: '-5.18%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.20', change: '+0.90%', stress: 'MODERATE', ytd: '+0.70%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'ELEVATED', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
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
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+38', bond: '-1.9pts', fx: '-0.4%', signal: 'SHUTDOWN + DEBT', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+20', bond: '-1.0pts', fx: '+0.2%', signal: 'NHI DEFEAT + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-10', bond: '+0.5pts', fx: '+0.2%', signal: 'REFINERY MARGINS', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
  

}
