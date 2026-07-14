export const content = {
  riskIndex: '84',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 13, 2026 09:00 UTC',
    overallScore: 84,
    trend: 'EASING',
    drivers: ['South Africa: 53,499 Deported/Repatriated Since June 14 — 80%+ Malawian — Deaths On Road Home', 'Ebola DRC 600 Deaths — Jacob Zuma "Showing Middle Finger" To SA — SA-Ghana Diplomatic Row', 'March And March: Ramaphosa Given Until End Of Year — Workplace Quotas And Mass Deportations Demanded', 'All African World Cup Teams Eliminated — Ghana Colombia 1-0 July 3 — Quarterfinals July 9'],
    regions: [
      { region: 'East Africa', score: 92, trend: '↓', color: '#ff3b3b' },
      { region: 'West Africa', score: 84, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 70, trend: '↓', color: '#f5a623' },
      { region: 'Southern Africa', score: 82, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '↓', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: '53,499 foreign nationals deported or repatriated since June 14 — Justice Minister Kubayi announced Sunday. 80%+ Malawian, followed by Zimbabweans and Mozambicans. Also: 1,159 Nigerians, 939 Ugandans, 431 Kenyans, 86 Congolese. Deaths on the road home — bus crashes killed 15 Malawians near Nyamapanda May 5, 8 more near Louis Trichardt. Kassim Jaffati, 47, died on bus outside Musina. Malawi: 30,000 returned by July 6, Minister Chaponda called it worst crisis for Malawians in SA in years. Campaign gave Ramaphosa until end of 2026 for mass deportations AND workplace quotas. SA-Ghana diplomatic row: Ghanaian man reported killed.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola DRC: 600 confirmed deaths as of latest AFP/Reuters count — most serious Bundibugyo outbreak in history. Outbreak first declared May 17 — now 8 weeks old, approaching duration of sustained outbreak. France confirmed first European case. White House $1.4bn Congress ask. Africa CDC upgraded ask from $518m to $1.4bn. Contact tracing below 90% threshold. Free healthcare launched in Ituri. No approved vaccine, no approved treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa (Politics)', flag: '🇿🇦', alert: 'Jacob Zuma "showing the middle finger" to SA — minister in Ramaphosa government characterisation, following Zuma refusing to comply with State Capture Commission accountability processes. SA-Ghana diplomatic row erupted — claims that a Ghanaian man was killed during the xenophobia crackdown. Ghana has formally raised the matter. Adds to the Nigeria compensation demand (1,159 Nigerians deported/repatriated) and the multi-nation diplomatic fallout from the migration campaign.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election TPLF conflict remains live — US visa restrictions on hardliners in effect since June 18. IMF 5th ECF review completed — $468m unlocked. Eurobond in open dispute — private creditor talks collapsed May 27. Bilateral track resolved: China, France, OCC MoU. $1bn 6.625% Eurobond Ad Hoc Committee dispute ongoing. Horn compound risk at maximum — AUSSOM US funding ended (Somalia mission "finished" per senior diplomat). Abiy third term war risk active.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'AUSSOM US FUNDING ENDED. Senior diplomat: AU peacekeeping mission is "finished." 12,000-strong force protecting Mogadishu and combating Al-Shabaab faces immediate funding gap. Al-Shabaab retook territory during 2024-2025 political instability — now positioned to exploit AUSSOM collapse. Constitutional crisis: Mohamud calls himself legitimate president, opposition calls him "former." Jubaland and Puntland reject amendments. Structural crisis ongoing.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Constitutional rupture deepening — Pastef passed reforms June 30 banning Faye from leading party, creating new Constitutional Court, strengthening parliamentary resource oversight. Faye announced referendum — no date. IMF Q3 programme remains base case but governance architecture being redesigned in real time. Eurobond issuance planned. Bonds rallied from 50.6c record low. Structural risk unchanged: 132% debt/GDP.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: '53,499 DEPORTED FROM SOUTH AFRICA IN 4 WEEKS — 80% MALAWIAN — DEATHS ON ROAD HOME — EBOLA 600 DEAD — AUSSOM US FUNDING ENDED — CAMPAIGN GIVES RAMAPHOSA UNTIL YEAR END',
    body: 'The week of July 6-13 delivers the quantitative verdict on South Africa\'s "migration management" campaign: 53,499 foreign nationals deported or repatriated since June 14 — just four weeks. More than 80% are Malawian. Zimbabweans and Mozambicans follow. Also included: 1,159 Nigerians, 939 Ugandans, 431 Kenyans and 86 Congolese. The operation has not been without cost: bus crashes killed 23 Malawians on the road home and at least one man died of a medical emergency on a bus near Musina. Malawi\'s foreign minister called it the worst crisis affecting Malawians in South Africa in years and linked it directly to anti-immigration protests and the fear they generated among undocumented migrants. The campaign has now given Ramaphosa until the end of 2026 to achieve mass deportations AND enforce workplace quotas. The June 30 deadline has been replaced by a December 31 year-end ultimatum. Ebola has now claimed 600 lives in DRC. In Somalia, a senior diplomat confirms the US has ended AUSSOM funding — the 12,000-strong peacekeeping mission protecting Mogadishu and fighting Al-Shabaab is "finished." A SA-Ghana diplomatic row has erupted over claims a Ghanaian man was killed during the crackdown. Jacob Zuma is "showing the middle finger" to the Ramaphosa government. All African World Cup teams have been eliminated.',
    tag: 'JULY 13 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 13, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: '53,499 DEPORTED IN 4 WEEKS — 80% MALAWIAN — DEATHS ON ROAD HOME — YEAR-END ULTIMATUM', body: 'Justice Minister Kubayi: 53,499 processed for deportation or repatriation between June 14 and July 11. 80%+ Malawian, followed by Zimbabweans, Mozambicans, Nigerians (1,159), Ugandans (939), Kenyans (431), Congolese (86). Deaths: 15 Malawians killed in bus crash near Nyamapanda border post May 5, 8 more near Louis Trichardt two days later, Kassim Jaffati (47) died of medical emergency on bus near Musina. Malawi: 30,000 returned by July 6 — Minister Chaponda: worst crisis for Malawians in SA in years. Campaign declared: Ramaphosa given until December 31, 2026 for mass deportations AND workplace quotas. Kubayi: arrests of criminal deportees being made — process is orderly, lawful and humane.', icon: '🚨' },
    { title: 'EBOLA 600 DEAD — THIRD-LARGEST OUTBREAK ON RECORD — 8 WEEKS OLD', body: 'Ebola DRC has claimed 600 confirmed deaths — as the outbreak enters its 9th week since declaration on May 17. 1,000+ confirmed cases as of June 22. France confirmed first European case. White House $1.4bn Congress ask outstanding. Africa CDC upgraded ask from $518m to $1.4bn. Contact tracing below 90% target. Free healthcare launched across Ituri. No approved vaccine, no approved treatment for Bundibugyo strain. Third-largest Ebola outbreak in history — approaching the duration that makes it structural, not acute.', icon: '🔴' },
    { title: 'AUSSOM US FUNDING ENDED — SOMALIA PEACEKEEPING "FINISHED" PER SENIOR DIPLOMAT', body: 'The United States has ended its funding for AUSSOM — the African Union Support and Stabilisation Mission in Somalia. A senior diplomat described the mission as "finished." The 12,000-strong force has been the primary military architecture protecting Mogadishu and combating Al-Shabaab since AMISOM transitioned. Al-Shabaab retook significant territory during Somalia\'s 2024-2025 constitutional crisis. With AUSSOM funding gone, the mission faces an immediate existential threat. The AU has not announced alternative funding. This is the most significant Horn of Africa security architecture change since AMISOM\'s mandate transition.', icon: '💥' },
    { title: 'SA-GHANA DIPLOMATIC ROW — GHANAIAN MAN KILLED — ZUMA "SHOWING MIDDLE FINGER"', body: 'A diplomatic row has erupted between South Africa and Ghana over claims a Ghanaian man was killed during the xenophobia crackdown — Ghana has formally raised the matter with SA authorities. This adds to the Nigeria compensation demand (1,159 Nigerians in the 53,499) and the broader multi-nation diplomatic fallout. Separately, a minister in the Ramaphosa government characterised Jacob Zuma\'s continuing refusal to comply with State Capture Commission accountability processes as "showing the middle finger" to South Africa. The GNU\'s governance credibility is under dual domestic and international pressure simultaneously.', icon: '🔥' },
  ],

  insight1: {
    title: '53,499 IN 4 WEEKS IS THE LARGEST FORCED MIGRATION EVENT IN SUB-SAHARAN AFRICA THIS DECADE',
    body: 'Deporting or repatriating 53,499 people in 28 days — an average of 1,911 per day — is not a routine immigration enforcement operation. It is a mass displacement event. The 80%+ Malawian composition tells a specific story: the enforcement net was cast widest in the communities where informal settlement populations are largest, documentation rates are lowest, and political pressure from the movement was most acute. The deaths on the road home — bus crashes, medical emergencies, the man who died of heat on a bus near Musina — are the humanitarian cost that does not appear in the deportation statistics. Malawi\'s 30,000 returned citizens are arriving into an economy that was already struggling. Malawi\'s foreign minister calling this the worst crisis for Malawians in SA in years is the diplomatic signal: this has consequences for SA\'s SADC relationships that will outlast 2026. The December year-end ultimatum with workplace quota demands confirms the movement has succeeded in converting a political crisis into ongoing executive pressure.',
    conclusion: 'THE 53,499 DEPORTATION FIGURE IS THE LARGEST FORCED MIGRATION EVENT IN SUB-SAHARAN AFRICA THIS DECADE. IT HAS PRODUCED DEATHS, DIPLOMATIC FALLOUTS WITH GHANA AND NIGERIA, AND A DECEMBER YEAR-END ULTIMATUM WITH NEW DEMANDS. THE JUNE 30 CRISIS HAS NOT RESOLVED — IT HAS INSTITUTIONALISED.',
  },

  insight2: {
    title: 'THE AUSSOM FUNDING COLLAPSE IS THE MOST CONSEQUENTIAL HORN OF AFRICA SECURITY CHANGE IN A DECADE',
    body: 'The African Union Mission in Somalia (AMISOM/AUSSOM) has been the primary military architecture preventing Al-Shabaab from retaking Mogadishu since 2007. US funding has been the financial backbone of that mission. With the US ending its contribution and a senior diplomat declaring the mission "finished," the 12,000 troops currently deployed face a funding gap that the AU cannot fill from its own resources. Al-Shabaab demonstrated during Somalia\'s 2024-2025 constitutional crisis that it retakes territory whenever AUSSOM\'s attention is divided — the combination of AUSSOM\'s funding collapse and Somalia\'s unresolved constitutional crisis (Mohamud vs. opposition, Jubaland and Puntland rejecting amendments) creates an unprecedented security vacuum. The collapse of AUSSOM funding, coming simultaneously with the TPLF conflict in Ethiopia, Sudan\'s civil war, and Ebola in DRC/Uganda, represents the most dangerous convergence of security risks the Horn of Africa has faced since the height of the Somali civil war.',
    conclusion: 'AUSSOM US FUNDING COLLAPSE REMOVES THE PRIMARY MILITARY ARCHITECTURE PREVENTING AL-SHABAAB\'S RETURN TO MOGADISHU. WITH SOMALIA\'S CONSTITUTIONAL CRISIS UNRESOLVED AND THE HORN AT MAXIMUM COMPOUND RISK, THIS IS THE MOST CONSEQUENTIAL SINGLE SECURITY DECISION IN AFRICA IN 2026.',
  },

  brief: {
    week: '28',
    title: 'WEEK 28 CLOSE: 53,499 DEPORTED SA, EBOLA 600 DEAD, AUSSOM FINISHED, SA-GHANA ROW, ZUMA MIDDLE FINGER, YEAR-END ULTIMATUM',
    body: 'The week closes with South Africa\'s migration campaign producing its quantitative verdict: 53,499 deported or repatriated in four weeks, 80%+ Malawian, with deaths on the road home and a SA-Ghana diplomatic row over a Ghanaian man reportedly killed. The campaign has been extended: Ramaphosa given until December 31 for mass deportations AND workplace quotas. Ebola has claimed 600 lives — the 9th week of the outbreak with no vaccine, no treatment, and contact tracing below threshold. The United States has ended AUSSOM funding — Somalia\'s 12,000-strong peacekeeping mission is "finished" per a senior diplomat, creating an unprecedented security vacuum for Al-Shabaab to exploit. Jacob Zuma is "showing the middle finger" to the Ramaphosa government. All six African World Cup teams have been eliminated — Ghana fell to Colombia 1-0, Morocco beat Canada in the Round of 16, Algeria was eliminated earlier. Ivory Coast\'s 5x oversubscribed Eurobond confirms the credit bifurcation between disciplined and distressed sovereigns. Senegal\'s constitutional crisis deepens. Ethiopia\'s TPLF conflict is live.',
  },

  fxRates: {
    NGN: '1,579.00',
    GHS: '11.20',
    KES: '129.48',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.55',
    ETB: '158.00',
    TZS: '2,650.00',
    UGX: '3,645.50',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'SA: 53,499 deported/repatriated since June 14 — Kubayi Sunday announcement. 80%+ Malawian. 1,159 Nigerians, 939 Ugandans, 431 Kenyans. Deaths: 23 Malawians killed in bus crashes, 1 died on bus near Musina. Malawi 30,000 returned by July 6. Campaign gives Ramaphosa until December 31 — mass deportations + workplace quotas demanded.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Ebola DRC: 600 confirmed deaths — 9th week since May 17 declaration. 1,000+ confirmed cases as of June 22. France first European case. $1.4bn Congress ask outstanding. Africa CDC upgraded ask. Contact tracing below 90%. No vaccine, no treatment. Becoming structurally entrenched, not an acute outbreak.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'AUSSOM US FUNDING ENDED — Somalia peacekeeping mission "finished" per senior diplomat. 12,000-strong force facing existential funding gap. Al-Shabaab retook territory during 2024-2025 constitutional crisis — positioned to exploit vacuum. Most consequential Horn security change in a decade. AU cannot fill US funding gap from own resources.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'SA-Ghana diplomatic row: claims Ghanaian man killed during xenophobia crackdown — Ghana formally raised matter. Adds to Nigeria compensation demand (1,159 Nigerians in 53,499). Zuma "showing middle finger" to Ramaphosa government — State Capture compliance refusal. GNU domestic and international credibility under dual pressure.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Senegal: Constitutional rupture — Pastef reforms June 30 ban president from leading party, create new Constitutional Court, parliament controls natural resources. Faye referendum announced — no date. IMF Q3 programme base case but governance being redesigned. Eurobond planned. Bonds rallied from 50.6c. 132% debt/GDP unchanged.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'XOF' },
    { time: '08:15:00', signal: 'Ethiopia: TPLF conflict live — US visa restrictions in effect. IMF 5th review complete, $468m unlocked. Eurobond in open dispute — $1bn 6.625% Ad Hoc Committee standoff. Bilateral track resolved. Somalia AUSSOM collapse adds Horn compound risk. Zimbabwe: Mnangagwa signed constitutional amendments — direct elections abolished, term to 2030 now CONFIRMED.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'World Cup: All African teams eliminated. Ghana beaten Colombia 1-0 (July 3). Morocco beat Canada 3-0 (July 4) then lost to France in QF. Algeria eliminated earlier. Zambia election August 13 — 4 weeks away. Ivory Coast IMF + Eurobond benchmarks intact. World Bank $1.25bn Nigeria pledge. Sudan UN emergency session El-Obeid — 500,000 civilians at risk.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 13: NGN 1,579.00 | GHS 11.20 | KES 129.48 | EGP 52.22 | ZAR 16.55 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR holding near 16.55 despite mass deportation diplomatic fallout. Ivory Coast Eurobond success supporting XOF investor sentiment. Zambia ZMW at 19.02 — election risk building.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 88, fiscal: 62, fx: 46, debt: 62, political: 92, external: 84 },
    { country: 'Ghana', flag: '🇬🇭', score: 34, fiscal: 30, fx: 42, debt: 30, political: 30, external: 38 },
    { country: 'Kenya', flag: '🇰🇪', score: 72, fiscal: 68, fx: 54, debt: 74, political: 72, external: 70 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 72, fx: 74, debt: 94, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 82, fiscal: 72, fx: 42, debt: 66, political: 86, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 88, fx: 82, debt: 92, political: 94, external: 88 },
    { country: 'Somalia', flag: '🇸🇴', score: 99, fiscal: 88, fx: 82, debt: 78, political: 99, external: 99 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,579.00', change: '+16.4%', stress: 'HIGH', ytd: '-3.40%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.48', change: '+0.03%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.55', change: '-9.10%', stress: 'LOW', ytd: '+9.10%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal/Ivory Coast', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 4 Weeks Away', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, power cuts. Opposition consolidating. 4 weeks away — most imminent major African election.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Constitutional Crisis', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'US AUSSOM funding ended — mission "finished." Al-Shabaab positioned to exploit vacuum. Mohamud vs opposition. Jubaland + Puntland reject amendments. No constitutional court. Most dangerous Horn security moment in a decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'CRITICAL', note: 'Pastef reforms June 30. President banned from leading party. New Constitutional Court. Parliament controls natural resources. Faye referendum — no date. IMF Q3 outlook at risk.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'SIGNED — Direct Elections Abolished', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Mnangagwa signed constitutional amendments. Direct presidential elections now formally abolished. Term extended to 2030. Most consequential African democratic regression of decade — now fait accompli.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'TPLF conflict live. US visa restrictions. IMF 5th review complete. Eurobond in dispute. AUSSOM collapse adds Horn risk.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — December Ultimatum', type: 'Municipal Elections', risk: 'HIGH', note: '53,499 deported. SA-Ghana diplomatic row. Nigeria compensation demand. Deaths on road home. December 31 ultimatum for workplace quotas + mass deportations.', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', date: 'Accountability Phase — 120-Day Cabinet Order', type: 'Political Crisis', risk: 'HIGH', note: '431 Kenyans in 53,499. Court 120-day cabinet gender order. Finance Bill law. US disease surveillance pact.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee Standoff', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — CONSTITUTIONAL RISK ELEVATED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — Political Risk', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026 — Rolling', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Ivory Coast', flag: '🇨🇮', primary: 'Cocoa/Oil', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '30%', price2026: 'Cocoa $5,100/t', fiscalBreakeven: 'N/A', breakevenNote: 'DIVERSIFIED', trend: '↑', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$73', fiscalBreakeven: '$70/bbl', breakevenNote: 'NEAR BREAKEVEN', trend: '↓', risk: 'HIGH' },
  ],

  riskTable: [
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'AUSSOM FUNDING ENDED — MISSION FINISHED', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '-13', bond: '+0.6pts', fx: '+9.1%', signal: '53,499 DEPORTED — SA-GHANA ROW — DEC ULTIMATUM', color: '#f5a623' },
    { country: 'SENEGAL', cds: 850, delta: '+30', bond: '-0.5pts', fx: '-0.5%', signal: 'CONSTITUTIONAL RUPTURE — IMF Q3 AT RISK', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+40', bond: '-2.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT + EUROBOND DISPUTE + AUSSOM', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 600 DEAD — 9TH WEEK', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '+16.4%', signal: '1,159 IN SA DEPORTATIONS — COMPENSATION CLAIM', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 4 WEEKS AWAY', color: '#ff3b3b' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — IMF $832M — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.21, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 2', NGN: 1579.00, GHS: 11.20, KES: 129.48, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 6', NGN: 1579.00, GHS: 11.20, KES: 129.48, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 13', NGN: 1579.00, GHS: 11.20, KES: 129.48, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
