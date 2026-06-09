export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 9, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'STABLE',
    drivers: ['Nigeria Rescues 360 Boko Haram Hostages — Mandara Mountains — 2 Infants Dead', 'Ebola ECDC June 5: Uganda 19 Confirmed 8 in Kampala — DRC 381 Confirmed 64 Dead', 'March and March: Wants to Arrest Migrants but Law Says No — June 30 21 Days', 'World Cup Opens THURSDAY — Ethiopia Results THURSDAY — Horn Convergence 2 Days'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '↓', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '↓', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria army rescues 360 Boko Haram hostages — men, women, children — from Mandara Mountains, southern Borno State. Intelligence-led operation, Joint Task Force Operation HADIN KAI, Special Forces, Sector 1. Victims seized from Ngoshe axis and multiple communities. Two infants "succumbed to exhaustion" due to terrain difficulty. Atiku commended rescue. Peter Obi condemned ethnic profiling. Separate school abduction in Oyo State — gunmen seized dozens of students and teachers from Baptist Nursery and Primary School June 2. Nigeria security crisis is multi-vector and escalating.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'ECDC June 5: DRC 381 confirmed 64 deaths, Uganda 19 confirmed 2 deaths. Eight Uganda cases in Kampala, one in Wakiso. Three new Uganda cases June 5 — all contacts of confirmed cases. Ituri: 359 confirmed from 17 health zones. North Kivu: 19 confirmed from 7 health zones. South Kivu: 3 confirmed. WHO $518m plan operational. Contact tracing at 45% — needs 90%+ to stay ahead. Vaccine candidates in fast-track production. DRC Leopards arrive Houston Thursday for June 17 opener.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'March and March: wants to arrest migrants but law says no — legal constraints on June 30 actions being exposed. Ramaphosa 5-point crackdown announced Sunday — biometric register, employer jailing, deportation courts, green ID phase-out, Traffic Registration Number closure. SARB hiked rates 25bps to 7% May 28 — first hike since 2023. ZAR at 16.30 — highest since March. June 30: 21 days.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Results THURSDAY June 11 — 2 days. Same day World Cup opens. PP landslide expected. Pretoria Agreement "on verge of collapse." TPLF reinstated Debretsion. Eritrea tensions — Red Sea access. Triangular conflict scenario. Post-election war risk window opens Thursday. Most dangerous Horn window since 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Bonds rallying from 50.6c record low. IMF visit week of June 15. Finance Minister Diba targeting agreement June 30. Three Pastef members joined Lo government. Acute default risk partially defused. $9.7bn obligations 2026. Structural risk remains. IMF agreement by June 30 is the key milestone.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'NIGERIA RESCUES 360 BOKO HARAM HOSTAGES — EBOLA REACHES KAMPALA DISTRICT OF WAKISO — MARCH AND MARCH FACES LEGAL CONSTRAINTS — WORLD CUP + ETHIOPIA IN 2 DAYS',
    body: 'June 9 opens with Nigeria\'s most significant counter-terrorism hostage rescue in years. The army freed 360 men, women and children from a Boko Haram hideout in the Mandara Mountains of Borno State — but two infants died of exhaustion during the extraction. The operation was intelligence-led using unmanned aerial systems, SIGINT, HUMINT and long-range reconnaissance. Separately, gunmen abducted students and teachers from a Baptist school in Oyo State on June 2 — the multi-vector security crisis continues. In Ebola news, the ECDC June 5 update shows Uganda at 19 confirmed cases with 8 in Kampala and 1 in Wakiso district — the spread within Uganda is intensifying. South Africa\'s March and March is discovering its June 30 agenda faces legal constraints — it wants to arrest migrants but lacks legal authority. Ramaphosa\'s 5-point plan is actively narrowing the vigilante space. The World Cup and Ethiopia\'s election results are both Thursday — two days away.',
    tag: 'JUNE 9 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 9, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'NIGERIA: 360 BOKO HARAM HOSTAGES RESCUED — 2 INFANTS DEAD — MANDARA MOUNTAINS', body: 'Nigerian Army announces rescue of 360 men, women and children from Boko Haram JAS faction hideout in Mandara Mountains, southern Borno. Operation HADIN KAI + Special Forces + Sector 1. UAV systems, SIGINT, HUMINT, long-range reconnaissance. Two infants died of exhaustion during extraction. Atiku commended the mission. Army: "major operational success and significant setback for the terrorist group." Separate: gunmen abducted students and teachers from Baptist Nursery and Primary School, Oyo State, June 2. Nigeria\'s security crisis is multi-vector — Boko Haram north, ISWAP Lake Chad, school abductions southwest.', icon: '🛡️' },
    { title: 'EBOLA: UGANDA 19 CONFIRMED — WAKISO DISTRICT NOW AFFECTED — KAMPALA SPREADING', body: 'ECDC June 5: Uganda 19 confirmed cases, 2 deaths. 8 cases in Kampala, 1 in Wakiso district — Kampala neighbouring. 7 cases local transmission, 5 travel-linked to DRC. Three new cases June 5 — all contacts of confirmed cases. DRC: 381 confirmed, 64 deaths. Ituri 359 confirmed 17 health zones. Contact tracing at 45% — needs 90%+ to stay ahead of transmission. WHO $518m plan operational. Vaccine candidates fast-tracked. DRC Leopards arrive Houston Thursday.', icon: '🔴' },
    { title: 'SA: MARCH AND MARCH FACES LEGAL CONSTRAINTS — LAW SAYS NO TO CITIZEN ARRESTS', body: 'Scrolla: "March and March wants to arrest migrants but the law says no." Ramaphosa explicitly warned Sunday: "Only authorised government officials may act against violations of immigration law. No other person is allowed to confront someone in the street to demand proof of nationality." The Ramaphosa crackdown is systematically narrowing the legal space for vigilante action. June 30: 21 days. Movement now faces choice: comply within law (limited impact) or act illegally (trigger state response). ZAR at 16.30 — SARB 7% rate, highest since March.', icon: '⚖️' },
    { title: 'WORLD CUP + ETHIOPIA RESULTS IN 2 DAYS — THURSDAY JUNE 11 — HORN CONVERGENCE', body: 'Thursday June 11: World Cup 2026 opens Mexico City — first game Mexico vs Canada 17:00 local. Ethiopia election results — PP landslide, post-election war risk on TPLF and Eritrea goes live. DRC Leopards arrive Houston ahead of June 17 game vs Portugal. Contact tracing at 45% in DRC — Ebola containment fragile. Somalia combat ongoing. The world\'s biggest sporting event begins on the same day East Africa\'s most dangerous political week opens. The contrast between sport and crisis is Africa\'s 2026 global moment.', icon: '⚽' },
  ],

  insight1: {
    title: 'NIGERIA\'S BOKO HARAM RESCUE AND OGUN SCHOOL ABDUCTION ON THE SAME WEEK IS THE SECURITY PARADOX OF 2026',
    body: 'The 360-person Boko Haram rescue from the Mandara Mountains is the Nigerian army\'s most significant counter-terrorism success in years — intelligence-led, multi-capability, technically sophisticated. It demonstrates real operational capacity. But on the same week, gunmen abducted dozens of students and teachers from a Baptist school in Oyo State — a different threat vector, a different geography, a different armed actor. Nigeria\'s security crisis is not one crisis — it is multiple simultaneous crises: Boko Haram in Borno, ISWAP in Lake Chad, banditry in the northwest, school abductions in the southwest, civilian airstrike deaths in Zamfara and Yobe. The Dangote structural positive and the 360-person rescue are real. But they exist alongside a security environment that is fragmenting across multiple vectors simultaneously as the 2027 election cycle approaches.',
    conclusion: 'NIGERIA\'S 360-PERSON RESCUE IS REAL AND SIGNIFICANT — BUT IT COEXISTS WITH A MULTI-VECTOR SECURITY CRISIS THAT IS SIMULTANEOUSLY EXPANDING ACROSS FIVE DIFFERENT CONFLICT THEATRES. THE 2027 ELECTION RISK REMAINS TIER-1.',
  },

  insight2: {
    title: 'MARCH AND MARCH\'S LEGAL CONSTRAINTS ARE RAMAPHOSA\'S BEST TOOL FOR DEFUSING JUNE 30',
    body: 'The Ramaphosa crackdown is cleverly designed: by establishing that only authorised state officials may enforce immigration law, it makes any March and March attempt to physically detain or confront migrants illegal — punishable under the same laws Ramaphosa is pledging to enforce. The movement is now in a bind: it can march and demonstrate (legal, political pressure), but it cannot arrest or detain (illegal, triggers state response). The five-point plan gives the movement something to hold the government to — biometric register, employer jailing, deportation courts. These are precisely what the movement has demanded. If Ramaphosa moves visibly on implementation before June 30, the movement\'s argument for street action weakens. The 21-day window is tight but not impossible.',
    conclusion: 'RAMAPHOSA\'S LEGAL FRAMEWORK — "ONLY OFFICIALS MAY ACT" — IS THE KEY TOOL FOR DEFUSING JUNE 30. IF THE GOVERNMENT DEMONSTRATES VISIBLE IMPLEMENTATION OF THE 5-POINT PLAN, MARCH AND MARCH\'S CASE FOR STREET ACTION WEAKENS. THE 21-DAY EXECUTION TEST BEGINS NOW.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 DAY 3: NIGERIA 360 HOSTAGES RESCUED, EBOLA WAKISO, MARCH AND MARCH LEGAL CONSTRAINTS, WORLD CUP + ETHIOPIA THURSDAY',
    body: 'Week 24\'s third day brings Nigeria\'s biggest counter-terrorism rescue of 2026 — 360 Boko Haram hostages freed from the Mandara Mountains, two infants died in the operation. Ebola has spread to Wakiso district adjacent to Kampala — Uganda at 19 confirmed, contact tracing at 45%. March and March is discovering its June 30 agenda faces legal constraints — citizen arrests are illegal under SA law. Ramaphosa\'s 5-point plan is narrowing the vigilante space. ZAR at 16.30 — SARB rate hike to 7% providing support. Thursday is the continent\'s most consequential day in years: World Cup opens Mexico City, Ethiopia election results announced, DRC Leopards arrive Houston. Senegal bonds continue to rally. Ghana remains the continental benchmark. Two days to go.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.82',
    KES: '129.53',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.30',
    ETB: '132.00',
    TZS: '2,650.00',
    UGX: '3,770.00',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Nigeria: Army rescues 360 Boko Haram hostages — Mandara Mountains, southern Borno. JAS faction. UAV, SIGINT, HUMINT, long-range recon. 2 infants died of exhaustion during extraction. Atiku commended. Separate: school abduction Oyo State June 2. Multi-vector security crisis: Borno, Lake Chad, NW banditry, SW abductions, Zamfara civilian airstrikes.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '09:15:00', signal: 'Ebola ECDC June 5: Uganda 19 confirmed 2 deaths — 8 Kampala, 1 Wakiso (neighbouring district). 3 new cases June 5 all contacts of confirmed. DRC: 381 confirmed 64 deaths. Ituri 359 from 17 health zones. Contact tracing 45% — needs 90%+. WHO $518m operational. Vaccine candidates fast-tracked.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'SA: March and March wants to arrest migrants but law says no — Ramaphosa warned only officials may act, citizen arrests illegal. Movement faces choice: legal demonstration (limited) or illegal action (triggers state response). 5-point plan narrows vigilante space. June 30: 21 days. ZAR at 16.30 — SARB 7% rate.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'THURSDAY JUNE 11 — 2 DAYS: World Cup opens Mexico City 17:00 local — Mexico vs Canada. Ethiopia results — PP landslide + post-election war risk live. DRC Leopards arrive Houston ahead of June 17 vs Portugal. Somalia combat ongoing. Horn of Africa compound risk at maximum same day World Cup begins.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya: Finance Bill 2026 — June 25 storming anniversary in 16 days. Opposition formally rejected. Kalonzo: "Ruto learnt nothing." Gen-Z watching. Finance Bill June 30 deadline same as SA xenophobia. Eurobond Q2 $2bn rollover critical. KES 129.53. US-Kenya strained. Five crises simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Senegal: Bonds continue rallying. IMF visit week June 15. Diba targets agreement June 30. Acute default risk defused. Structural risk remains: 132% debt/GDP, $9.7bn obligations. Oxford Economics Venezuela/Lebanon classification stands until programme restored. Royal Air Maroc launches nonstop Casablanca-LA route ahead of World Cup.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:00:00', signal: 'Somalia: Mogadishu combat between government and opposition militias ongoing. Al-Shabaab Somali Special Forces raiding Bay Region positions separately. Double-front security challenge: political violence in Mogadishu + Al-Shabaab in Bay Region simultaneously. UK donors alarmed. AUSSOM mandate under pressure.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 9: NGN 1,360.73 | GHS 11.82 | KES 129.53 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. ZAR 16.30 — near highest since March, supported by SARB 25bps hike to 7% May 28, strong PGM/gold export revenues, fiscal discipline. NGN strengthening trend continues. GHS stable.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 56, fx: 42, debt: 58, political: 85, external: 60 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 46, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 94, fiscal: 76, fx: 44, debt: 70, political: 94, external: 92 },
    { country: 'Senegal', flag: '🇸🇳', score: 84, fiscal: 86, fx: 74, debt: 88, political: 82, external: 80 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.82', change: '+15.83%', stress: 'MODERATE', ytd: '+5.47%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Results THURSDAY June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide. Results same day World Cup opens. Pretoria Agreement collapsing. Eritrea tensions. Post-election war window opens Thursday. Most dangerous Horn window since 2020. 2 days away.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Active Crisis — Mogadishu Combat', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Mogadishu combat ongoing. Al-Shabaab Bay Region raids. Double-front security crisis. UK donors alarmed. AUSSOM under pressure.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'June 30 — 21 days. March and March faces legal constraints. Ramaphosa 5-point plan narrowing vigilante space. SARB 7%. ZAR near March high.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: '360 hostages rescued. But school abduction Oyo June 2. Multi-vector security crisis. Dangote 700k bpd positive. 2027 risk building from all directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. June 25 storming anniversary in 16 days. Opposition rejected bill — "Ruto learnt nothing." Eurobond Q2 rollover critical.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.8m PAID EARLY', instrument: 'Bond Coupons', maturity: 'PAID — BONDS RALLYING', risk: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — IMF June 15', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'MOGADISHU COMBAT + AL-SHABAAB BAY', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'RESULTS THURSDAY — WAR RISK 2 DAYS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'FINANCE BILL JUNE 30 — 16 DAYS TO ANN.', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+38', bond: '-1.9pts', fx: '+3.5%', signal: 'JUNE 30 — 21 DAYS — LEGAL CONSTRAINTS', color: '#f5a623' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'BONDS RALLY — IMF JUNE 15', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.0%', signal: '360 RESCUED — MULTI-VECTOR SECURITY', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+5.5%', signal: 'IMF PROGRAMME COMPLETE — BENCHMARK', color: '#00c48c' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 20', NGN: 1370.31, GHS: 13.10, KES: 129.50, EGP: 53.90, ZAR: 18.45, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 23', NGN: 1370.31, GHS: 12.50, KES: 129.50, EGP: 53.20, ZAR: 18.35, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 25', NGN: 1370.31, GHS: 12.20, KES: 129.50, EGP: 53.12, ZAR: 18.30, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 27', NGN: 1371.98, GHS: 11.66, KES: 129.50, EGP: 52.80, ZAR: 17.80, UGX: 3745, ZMW: 19.05, XOF: 613 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 29', NGN: 1371.85, GHS: 11.10, KES: 129.10, EGP: 52.35, ZAR: 16.80, UGX: 3765, ZMW: 19.03, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'May 31', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 6', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 7', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
