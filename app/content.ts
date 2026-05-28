export const content = {
  riskIndex: '94',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 28, 2026 09:00 UTC',
    overallScore: 94,
    trend: 'WORSENING',
    drivers: ['Senegal Bonds at Record Lows — 2033 Notes at 50.6 Cents — Morgan Stanley Prices Restructuring', 'Ebola 1,198 Cases 255 Deaths — Debt 132% of GDP Compound', 'Kenya Finance Bill 2026 Due June 30 — Gen-Z Flashpoint Risk', 'SA March and March 33 Days — July 2021 Countdown'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 88, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 98, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'Bond market collapse. 2028 euro bond fell 5.6 cents on the euro — second largest daily decline in a decade — bid at 56.6 cents. Dollar bonds down nearly 4 cents — 2033 notes at record low 50.6 cents. Both euro and dollar debt now at deeply distressed levels. Morgan Stanley pricing higher restructuring odds. New PM Ahmadou Al Aminou Lo (ex-BCEAO chief) faces Sonko-controlled legislature, 132% debt/GDP, suspended $1.8bn IMF programme. Barclays: IMF will require fuel subsidy removal. Fuel overrun risk: 1.39 trillion CFA ($2bn) if oil hits $115/bbl.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'As of May 26: 121 confirmed (17 deaths), 1,077 suspected (238 deaths) in DRC. Uganda: 7 confirmed, 1 death. Total: 1,198 cases, 255 deaths. Three Uganda cases linked to DRC travel. Italy Milan scare tested negative — but Italy now screening all Uganda/DRC returnees at Malpensa and Fiumicino. Origin: patient-zero died in Bunia, family transported body 80km to Mongbwalu, bumpy road cracked coffin. No vaccine, no treatment. WHO: spreading faster than response.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Kenya Finance Bill 2026 released April 30 — must pass by June 30. Gen-Z flashpoint risk: 2024 Finance Bill protests killed 60+, stormed parliament. Auditor General flagged Eurobond proceeds diversion — Sh30bn used for domestic debt vs agreed purpose. Eurobond $2bn Q2 rollover critical. Ebola border risk — Uganda 7 confirmed. Ruto conceded on diesel but Finance Bill is the next political tripwire.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'March and March June 30 deadline: 33 days. GNU has no clean compliance option. Refugees on Durban pavements. Ghana wrote to AU. Nigeria offering repatriation. Analysts explicitly warn July 2021 repeat — 354 dead, R50bn damage. Charlotte Maxeke maladministration confirmed. Municipal elections in fall. SAHPRA cracking down on unregulated weight-loss jabs — separate governance signal.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'TPLF reinstated Tigray government assembly — violating Pretoria Agreement. Refugees International: "dangerously close to war." Federal funding withheld. June election impossible in Tigray. Ebola on western border. Clashes with federal forces ongoing since January. Horn of Africa carrying simultaneous Ebola/constitutional crisis/proto-war stack.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SENEGAL BOND MARKET COLLAPSE — 2033 NOTES AT RECORD 50.6 CENTS — MORGAN STANLEY PRICES RESTRUCTURING — NEW PM INHERITS 132% DEBT/GDP AND SONKO-CONTROLLED LEGISLATURE',
    body: 'Senegal\'s bond market has collapsed. The 2028 euro-denominated bond suffered its second largest single-day decline in nearly a decade on Tuesday — falling 5.6 cents on the euro to 56.6 cents. Dollar bonds dropped nearly 4 cents — 2033 notes now trade at record lows of 50.6 cents on the dollar. Both instruments are at deeply distressed levels. Morgan Stanley has explicitly said investors are now pricing higher odds of restructuring. The political mechanics make IMF re-engagement structurally difficult: new PM Ahmadou Al Aminou Lo (former BCEAO chief, a technocrat Faye needs for credibility) faces a legislature controlled by Sonko, who was fired for blocking IMF talks and refusing to raise fuel prices. Barclays has stated the IMF will require fuel subsidy removal as a condition — the exact policy Sonko used parliament to block. Senegal\'s debt stands at 132% of GDP. The $1.8bn IMF programme is suspended. The IMF has said its next staff visit timing depends on "availability and readiness of incoming authorities." Meanwhile Kenya\'s Finance Bill 2026 is due June 30 — and the Gen-Z movement that stormed parliament in 2024 is watching. The June 30 date is now simultaneously the most dangerous political deadline in both West and East Africa.',
    tag: 'MAY 28 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 28, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SENEGAL BONDS AT DISTRESSED LEVELS — MORGAN STANLEY PRICES RESTRUCTURING', body: '2028 euro bond at 56.6 cents — second largest single-day fall in a decade. 2033 dollar bond at record low 50.6 cents. Investors have lost 9.7% over three months vs 0.1% average for JPM EMBI Africa peers. Morgan Stanley: higher restructuring odds now priced. Allan Gray: if only foreign-currency debt restructured and local currency is not, "realised haircuts could be steeper than currently priced." New PM Lo (ex-BCEAO) is technocrat — but faces Sonko-controlled National Assembly and a fuel subsidy crisis Barclays says IMF will demand be resolved.', icon: '🚨' },
    { title: 'KENYA FINANCE BILL 2026 — JUNE 30 DEADLINE — GEN-Z FLASHPOINT', body: 'Kenya Finance Bill 2026 released April 30, must pass by June 30. In 2024 the Finance Bill triggered protests that killed 60+, stormed parliament, and forced Ruto to veto the bill. Auditor General has separately flagged that Sh30bn of 2025 Eurobond proceeds were diverted to domestic debt — a contractual breach. Eurobond $2bn Q2 rollover is the immediate fiscal cliff. Ruto already made one concession (diesel cut). The Finance Bill is the next political tripwire — arriving exactly when South Africa\'s xenophobia countdown expires.', icon: '🔥' },
    { title: 'EBOLA: 1,198 CASES 255 DEATHS — ORIGIN CONFIRMED: CRACKED COFFIN IN MONGBWALU', body: 'As of May 26: 121 confirmed, 1,077 suspected, 255 total deaths across DRC and Uganda. Origin now established: patient-zero died in Bunia, family transported body 80km to Mongbwalu — bumpy roads cracked the coffin, exposing the corpse. Provincial lab missed Ebola (tested wrong strain), samples sent 1,800km to Kinshasa to confirm — causing critical delay. Mongbwalu alone: 322 suspected cases, 88 deaths. 100km from Uganda border. Gold miners and cross-border traders the primary transmission vectors. No vaccine, no treatment.', icon: '⚠️' },
    { title: 'SENEGAL: NEW PM LO FACES STRUCTURAL IMPOSSIBILITY — SONKO CONTROLS LEGISLATURE', body: 'PM Ahmadou Al Aminou Lo is a former head of Senegal\'s BCEAO branch — the right profile for IMF re-engagement. But the constitutional mechanics are impossible: Sonko leads Pastef which holds 130 of 165 seats and now controls the National Assembly as Speaker. Any IMF programme requiring fuel price reform must pass through a legislature whose Speaker was fired for blocking exactly that policy. The IMF has said timing of next visit depends on "readiness of incoming authorities." That readiness test is effectively a test of whether Faye can govern against Sonko — from within the same party.', icon: '⚖️' },
  ],

  insight1: {
    title: 'SENEGAL\'S BOND MARKET IS PRICING A RESTRUCTURING THE GOVERNMENT HAS NOT YET ANNOUNCED',
    body: 'When sovereign bonds trade at 50 cents on the dollar, the market is not pricing risk — it is pricing default. Senegal\'s 2033 dollar bonds are there. The mechanics are clear: 132% debt to GDP, $1.8bn IMF programme suspended, fuel subsidy overrun risk of $2bn if oil hits $115/bbl, a new PM with no legislative majority, and a legislature controlled by the man fired for blocking the IMF conditions. Morgan Stanley has explicitly stated the market is now pricing higher restructuring odds. Allan Gray has warned of steeper-than-expected haircuts. Barclays has stated fuel subsidy removal is a non-negotiable IMF condition. The Sonko-Faye rupture has not opened a path to IMF re-engagement — it has made the path structurally more complex by creating two competing power centres within the same governing party. Senegal\'s sovereign default window is Q4 2026 to Q1 2027.',
    conclusion: 'SENEGAL\'S 2033 BONDS AT 50.6 CENTS IS THE MARKET\'S VERDICT. DEFAULT IS NOW THE BASE CASE, NOT THE TAIL RISK. RESTRUCTURING TIMELINE: Q4 2026–Q1 2027.',
  },

  insight2: {
    title: 'JUNE 30 IS THE MOST DANGEROUS DATE IN AFRICA — SIMULTANEOUSLY SENEGAL, KENYA, AND SOUTH AFRICA',
    body: 'Three of Africa\'s most consequential sovereign risk events all expire on or around June 30, 2026. In South Africa, March and March\'s deadline for undocumented foreigners to leave — with July 2021 riot risk explicitly flagged by analysts. In Kenya, the Finance Bill 2026 must pass — the same political trigger that killed 60+ and stormed parliament in 2024. In Senegal, the IMF has linked its next visit to the "readiness of incoming authorities" — and the new PM\'s first test will be whether he can move fuel subsidy reform through a Sonko-controlled National Assembly before the fiscal position deteriorates further. These are not coincident risks — they are a compound. The continent\'s political calendar has converged on a single month.',
    conclusion: 'JUNE 30 IS A COMPOUND SOVEREIGN RISK DATE WITHOUT PRECEDENT IN THE CURRENT CYCLE. WATCH ZAR, KES AND XOF SIMULTANEOUSLY IN THE COMING 33 DAYS.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 MID: SENEGAL BONDS COLLAPSE, KENYA FINANCE BILL TRIPWIRE, EBOLA ORIGIN CONFIRMED',
    body: 'Week 22 mid-point delivers the bond market verdict on the Senegal constitutional rupture — and it is devastating. The 2033 dollar note trades at a record low of 50.6 cents. Morgan Stanley is pricing restructuring. The new PM Lo (ex-BCEAO) has the right profile for IMF re-engagement but faces a Sonko-controlled legislature that blocked the exact fuel subsidy reform Barclays says the IMF will require. Separately, Kenya\'s Finance Bill 2026 must pass by June 30 — the same political tripwire that produced the 2024 parliament storming and 60+ deaths. South Africa\'s March and March deadline is 33 days away. These three sovereign risk events all converge on the same date. Ebola\'s origin is now confirmed — a cracked coffin transported 80km from Bunia to Mongbwalu caused the cascade; 1,198 cases and 255 deaths as of May 26. The IRC warns the outbreak could be the deadliest on record. Ghana remains the continental benchmark. June 2026 is shaping up as the most dangerous sovereign risk month Africa has faced in this decade.',
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
    { time: '09:30:00', signal: 'Senegal bond collapse: 2028 euro bond at 56.6 cents (-5.6c, second largest daily drop in decade). 2033 dollar bond at record low 50.6 cents (-4c). Morgan Stanley: higher restructuring odds now priced. Investors -9.7% over 3 months vs 0.1% average for EMBI Africa peers. Both instruments at deeply distressed levels.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '09:15:00', signal: 'Kenya Finance Bill 2026 due June 30 — Gen-Z flashpoint risk. 2024 Finance Bill protests: 60+ killed, parliament stormed, Ruto vetoed bill. Auditor General: Sh30bn Eurobond proceeds diverted to domestic debt — contractual breach. Eurobond $2bn Q2 rollover critical. Finance Bill is next political tripwire.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'Ebola May 26: 121 confirmed (17 dead), 1,077 suspected (238 dead) DRC. Uganda 7 confirmed, 1 dead. Total: 1,198 cases, 255 deaths. Origin: cracked coffin transported 80km Bunia→Mongbwalu. Mongbwalu: 322 suspected, 88 deaths, 100km from Uganda border. Gold miners primary transmission vector.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Senegal: PM Lo (ex-BCEAO chief) faces structural impossibility — Sonko controls 130/165 National Assembly seats as Speaker. Barclays: IMF will require fuel subsidy removal — Sonko\'s legislature blocked that exact policy. IMF: next visit depends on "readiness of incoming authorities." Debt 132% GDP. Default window: Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'South Africa: March and March June 30 deadline — 33 days. Refugees on Durban pavements. July 2021 riot risk explicitly flagged by analysts — 354 dead, R50bn damage, 200 shopping centres. Ghana wrote to AU. Nigeria offering repatriation flights. GNU has no clean compliance option.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ethiopia: TPLF reinstated Tigray government — violates Pretoria Agreement. Refugees International: "dangerously close to war." Federal funds withheld. June election impossible in Tigray. Eritrea backing TPLF factions. Ebola on western border. Horn of Africa at compound risk peak.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'Nigeria: State police bill under consideration — addition to 300,000+ national police overwhelmed by violence. Tinubu confirmed ISWAP commander Abubakar Mainok killed in joint AFRICOM operation Lake Chad. Civilian airstrike crisis (300+ dead) still unaddressed. 2027 election risk building.', detail: 'MEDIUM', type: 'INFO', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '07:45:00', signal: 'Ghana: Continental benchmark holds. Fitch B/positive. Inflation 3.4% April — lowest since 1999. Reserves $12.3bn. GSE strongest African market YTD. Debt to 46% GDP by 2027. India-Africa Business Dialogue opens today in Nairobi. Only large sovereign entering June with unambiguously positive trajectory.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 38, fiscal: 40, fx: 34, debt: 42, political: 32, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 88, fiscal: 84, fx: 76, debt: 90, political: 92, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 86, fiscal: 68, fx: 74, debt: 62, political: 99, external: 82 },
    { country: 'Senegal', flag: '🇸🇳', score: 98, fiscal: 99, fx: 88, debt: 98, political: 98, external: 92 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 92, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '+0.90%', stress: 'ELEVATED', ytd: '+0.70%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'CRITICAL', note: 'TPLF reinstated Tigray government — violating Pretoria Agreement. Refugees International: "dangerously close to war." June election impossible in Tigray. Federal funds withheld. Ebola on border.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'March and March June 30 deadline — 33 days. July 2021 riot risk. Charlotte Maxeke confirmed. GNU under maximum compound pressure.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. State police bill under consideration. ISWAP commander killed. Atiku positioning. Tier-1 election liability building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill 2026 due June 30 — Gen-Z flashpoint. Eurobond $2bn Q2 rollover. Auditor General Eurobond breach. Ebola border risk. Ruto conceded diesel — Finance Bill is next tripwire.', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'BONDS AT DISTRESSED — RESTRUCTURING PRICED', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+42', bond: '-2.1pts', fx: '-0.5%', signal: 'FINANCE BILL + EUROBOND', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+28', bond: '-1.4pts', fx: '-0.5%', signal: 'JUNE 30 DEADLINE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + ISWAP', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
