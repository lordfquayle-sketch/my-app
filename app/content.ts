export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 7, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['Somalia: Heavy Fighting Erupts Mogadishu — Election Crisis Turns Violent', 'PEPFAR Cuts Already Costing Lives — SA Faces 150,000-295,000 Extra HIV Infections by 2028', 'World Cup Opens Thursday June 11 — Ethiopia Results Same Day — Horn Convergence', 'Senegal Bonds Rally on Early Payment — IMF Visit June 15 — June 30 Agreement Target'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 98, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Somalia', flag: '🇸🇴', alert: 'ACTIVE COMBAT IN MOGADISHU. Heavy gunfire and explosions erupted Wednesday evening — government security forces vs opposition-allied militias in Howlwadaag and Abdiasis districts. Mortars, anti-tank weapons, small arms. Critical infrastructure damaged. Residential blocks burning. Thousands of residents fled. UK: "deeply concerned by reports of violence." International donors alarmed. Crisis driven by constitutional amendments extending Mohamud\'s term — opponents call it illegal. Al-Shabaab exploiting political vacuum. Most severe Mogadishu political violence since parliamentary changes enacted.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'PEPFAR cuts already costing lives per NPR June 7. UCT/Wits model: 150,000-295,000 additional HIV infections by 2028 without PEPFAR replacement, 56,000+ additional deaths. PEPFAR-CDC funding retained but may only last until September. National Health Department commissioned study. SA government must decide whether to cover $620m-$1.4bn in PEPFAR services 2025-2028. June 30 deadline: 23 days. Household debt crisis. Petrol hike live. GNU compound stress at maximum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Election results due June 11 — same day World Cup opens. PP landslide expected. Pretoria Agreement "on verge of collapse." TPLF reinstated Debretsion. Eritrea tensions spiking over Red Sea access push. Mogadishu fighting deepens Horn of Africa compound risk — Ethiopia, Somalia, and Ebola all simultaneously active. Most dangerous Horn window since 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'POSITIVE: Bonds rallied on early coupon payment news — 2033 notes moved up from 50.6c record low. IMF visit now week of June 15. Finance Minister Diba targeting agreement on key points by June 30. Three Pastef members joined Lo government despite Sonko\'s declaration. Track record of payment intact. Structural risk remains: debt 132% GDP, $9.7bn obligations this year. IMF agreement by June 30 is the key milestone.', severity: 'HIGH', color: '#f5a623' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'WHO $518m plan operational. DRC: 381 confirmed, 64 deaths. Uganda: 16 confirmed, 1 death. Ebola vaccines fast-tracked in trials — Bundibugyo strain. World Cup begins June 11 — DRC Leopards in Belgium isolation bubble, first game vs Portugal Houston June 17. DRC fans banned from US travel. $518m plan brings UNICEF, UNHCR, WFP, IFRC, FIND under One Response framework. Containment depends on community trust and ceasefire.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'MOGADISHU ERUPTS — HEAVY FIGHTING GOVERNMENT VS OPPOSITION — PEPFAR CUTS ALREADY KILLING PEOPLE IN SA — JUNE 11 WORLD CUP PLUS ETHIOPIA RESULTS PLUS HORN CONVERGENCE',
    body: 'June 7 opens with the Horn of Africa\'s most dangerous 24-hour period since the 2020 Tigray War launch. Mogadishu has erupted — heavy gunfire, mortars and anti-tank fire between government forces and opposition militias in Howlwadaag and Abdiasis districts. Critical infrastructure damaged, residential blocks burning, thousands fled. The UK has expressed deep concern. International donors are alarmed. The constitutional crisis over Mohamud\'s term extension — which opponents call a coup — has turned into active urban combat. Al-Shabaab is positioned to exploit the vacuum. In South Africa, NPR today confirmed PEPFAR cuts are already costing lives — and a UCT/Wits model commissioned by the National Health Department confirms between 150,000 and 295,000 additional HIV infections by 2028 without replacement funding, plus at least 56,000 additional deaths. PEPFAR-CDC funding may only last until September. On Thursday June 11, the World Cup opens and Ethiopia\'s election results are announced simultaneously — the Horn\'s most consequential convergence this decade.',
    tag: 'JUNE 7 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 7, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'MOGADISHU COMBAT — GOVERNMENT VS OPPOSITION MILITIAS — MORTARS AND ANTI-TANK FIRE', body: 'Heavy fighting erupted Wednesday evening in Mogadishu\'s Howlwadaag and Abdiasis districts — government security forces vs opposition-allied militias. Mortars, anti-tank weapons, small arms fire. Critical infrastructure damaged. Residential blocks burning. Thousands fled. UK: "deeply concerned." International donors alarmed. ICG had warned this was coming: constitutional amendments extending Mohamud\'s term have now triggered armed resistance. Al-Shabaab — which retook territory from the government in 2024-2025 — is positioned to exploit the political vacuum. Most severe Mogadishu political violence since the parliamentary changes.', icon: '🚨' },
    { title: 'PEPFAR CUTS ALREADY KILLING PEOPLE IN SA AND MOZAMBIQUE — 295,000 EXTRA HIV INFECTIONS BY 2028', body: 'NPR June 7: health care providers in South Africa and Mozambique say PEPFAR cancellations/redirections have already endangered vulnerable people and cost lives. UCT/Wits model commissioned by SA National Health Department: 150,000-295,000 additional HIV infections by 2028 without PEPFAR replacement, 56,000+ additional deaths. PEPFAR-USAID funding cancelled. PEPFAR-CDC funding retained but may only last until September. SA government must cover $620m-$1.4bn to fill gap. This compounds the household debt crisis, petrol hike, xenophobia and June 30 deadline.', icon: '🔴' },
    { title: 'JUNE 11 TRIPLE CONVERGENCE — WORLD CUP OPENS + ETHIOPIA RESULTS + HORN RISK PEAK', body: 'Thursday June 11 is the most consequential day on the African risk calendar this decade. World Cup 2026 opens in Mexico City at 17:00 local — first game Mexico vs Canada. Ethiopia election results announced — PP landslide expected, post-election war risk on TPLF and Eritrea goes live. DRC Leopards arrive in Houston ahead of June 17 game vs Portugal — in isolation bubble. Mogadishu fighting active. Ebola containment ongoing. Somalia, Ethiopia, and DRC all in active crisis on the same day the world\'s biggest sporting event begins.', icon: '⚽' },
    { title: 'SENEGAL BOND RALLY ON EARLY PAYMENT — IMF JUNE 15 — AGREEMENT TARGET JUNE 30', body: 'Senegal 2033 bonds rallied from 50.6c record low after early coupon payment confirmed. Acute default risk partially defused. IMF visit confirmed for week of June 15. Finance Minister Diba: agreement on key points by June 30 is the target. Three Pastef members joined Lo government despite Sonko\'s declaration — political picture more nuanced than feared. Structural risk remains: 132% debt/GDP, $9.7bn obligations 2026. But June acute crisis managed. Watch Senegal bond prices Monday open for sustained rally signal.', icon: '📈' },
  ],

  insight1: {
    title: 'MOGADISHU COMBAT IS THE SIGNAL THAT SOMALIA\'S CONSTITUTIONAL CRISIS HAS ENTERED ITS MOST DANGEROUS PHASE',
    body: 'Somalia\'s political crises have a pattern: they begin with constitutional disputes, escalate through parliamentary manoeuvring, and eventually find expression in armed confrontation between rival security units in Mogadishu. The December 2024 clash between federal forces and Jubaland troops near the Kenyan border was a warning. The June 4-5 fighting in Howlwadaag and Abdiasis is the escalation. The constitutional amendments extending Mohamud\'s term — which opponents describe as illegal — have now triggered active urban combat. Al-Shabaab reversed its territorial losses in 2024-2025 precisely because the government was distracted by political disputes. The international donors funding AUSSOM — the AU mission fighting Al-Shabaab — are already alarmed. The UK has expressed deep concern. If the political violence continues, AUSSOM\'s mandate becomes harder to sustain and Al-Shabaab\'s operational space expands.',
    conclusion: 'MOGADISHU COMBAT MARKS SOMALIA\'S CONSTITUTIONAL CRISIS ENTERING ITS ARMED PHASE. THE RISK TO AUSSOM MANDATE, AL-SHABAAB EXPLOITATION AND REGIONAL STABILITY IS NOW ACUTE. WATCH UK AND INTERNATIONAL DONOR RESPONSE IN THE COMING 48 HOURS.',
  },

  insight2: {
    title: 'THE PEPFAR CRISIS IN SOUTH AFRICA IS THE SLOW-MOVING SOVEREIGN HEALTH EMERGENCY THAT WILL OUTLAST JUNE 30',
    body: 'The June 30 xenophobia deadline is getting all the political attention — but the PEPFAR crisis is the more structurally consequential threat to South Africa\'s long-term sovereign health architecture. UCT and Wits researchers have now quantified what the National Health Department commissioned them to find: PEPFAR cancellation means 150,000-295,000 additional HIV infections by 2028 and 56,000+ additional deaths. The cost to replace these services: $620m-$1.4bn. South Africa, which already has 41% of credit-active borrowers in default and household debt at R237bn overdue, must now decide whether to absorb this fiscal burden. PEPFAR-CDC funding may only last until September — meaning the government has three months to find a replacement architecture. This is a compound health-fiscal crisis that will run long after June 30.',
    conclusion: 'THE PEPFAR CRISIS IN SOUTH AFRICA IS A SLOW-MOVING HEALTH EMERGENCY THAT WILL OUTLAST THE JUNE 30 POLITICAL DEADLINE. THE $620M-$1.4BN REPLACEMENT COST ARRIVES AT THE WORST POSSIBLE MOMENT FOR SA HOUSEHOLD AND SOVEREIGN FINANCES.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 DAY 1: MOGADISHU COMBAT, PEPFAR KILLS ALREADY IN SA, JUNE 11 WORLD CUP + ETHIOPIA RESULTS + HORN PEAK',
    body: 'Week 24 opens with Mogadishu in active combat — government forces vs opposition militias with mortars and anti-tank fire, the worst Mogadishu political violence since the parliamentary changes. NPR confirms PEPFAR cuts are already costing lives in South Africa and Mozambique — UCT/Wits modelling commissioned by the National Health Department projects 150,000-295,000 additional HIV infections by 2028 and 56,000+ deaths. Thursday June 11 is the week\'s focal point: World Cup opens, Ethiopia election results announced, DRC Leopards arrive in Houston — the Horn of Africa\'s most dangerous convergence since 2020. Senegal\'s bonds rallied on early coupon payment — the acute June default risk partially defused, IMF visit June 15, agreement target June 30. South Africa has 23 days to June 30. Ghana completed its IMF programme and remains the continental benchmark.',
  },

  fxRates: {
    NGN: '1,361.39',
    GHS: '11.75',
    KES: '129.53',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.29',
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
    { time: '09:30:00', signal: 'Somalia ACTIVE COMBAT: Heavy fighting erupted Mogadishu — Howlwadaag and Abdiasis districts. Government security forces vs opposition militias. Mortars, anti-tank weapons, small arms. Critical infrastructure damaged. Residential blocks burning. Thousands fled. UK: "deeply concerned." Donors alarmed. Al-Shabaab positioned to exploit vacuum.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'PEPFAR: NPR June 7 confirms cuts already costing lives in SA and Mozambique. UCT/Wits model: 150,000-295,000 additional HIV infections SA by 2028, 56,000+ deaths. PEPFAR-USAID cancelled. PEPFAR-CDC may only last until September. Replacement cost: $620m-$1.4bn. SA must decide within 3 months.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'June 11 CONVERGENCE: World Cup opens Mexico City 17:00. Ethiopia election results announced — PP landslide + post-election war risk goes live. DRC Leopards arrive Houston ahead of June 17 vs Portugal. Somalia, Ethiopia, DRC all in active crisis same day as World Cup opening.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Senegal: Bonds rally from 50.6c record low on early coupon payment news. IMF visit June 15. Diba targets agreement June 30. Three Pastef members joined Lo government. Acute default risk partially defused. Structural risk remains: 132% debt/GDP, $9.7bn obligations 2026.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:30:00', signal: 'South Africa: June 30 — 23 days. PEPFAR crisis adds compound health-fiscal emergency to xenophobia + household debt + petrol hike + impeachment panel. PEPFAR-CDC may only last until September. GNU must decide on $620m-$1.4bn replacement. ZAR holding at 16.29 on dollar weakness.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ethiopia: Results June 11. PP landslide confirmed. Pretoria Agreement "on verge of collapse." Eritrea tensions spiking over Red Sea access. Mogadishu fighting adds Horn compound risk. Most dangerous Horn of Africa window since November 2020. Convergence with World Cup opening creates global attention moment.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'Ivory Coast beat France 2-1 in World Cup warm-up — Amad Diallo and Guéla Doué scored. Kenya Finance Bill 2026: public hearings ongoing, June 30 deadline. Court case on US Ebola facility back this week. Eurobond Q2 $2bn rollover critical. Ruto managing five simultaneous crises.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'KES' },
    { time: '07:45:00', signal: 'LIVE FX June 7 (weekend): NGN 1,361.39 | GHS 11.75 | KES 129.53 | EGP 52.22 | ZAR 16.29 | UGX 3,770 | ZMW 19.02. Weekend rates carrying. Markets open Monday — watch Senegal bond spreads for sustained rally on early coupon payment. ZAR 2026 YTD average: 16.43 — currently below, indicating relative rand strength.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 56, fx: 42, debt: 58, political: 82, external: 56 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 46, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 80, fx: 46, debt: 72, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 90, fx: 78, debt: 92, political: 86, external: 84 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 95, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,361.39', change: '-13.79%', stress: 'LOW', ytd: '-3.20%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.75', change: '+9.81%', stress: 'MODERATE', ytd: '+6.53%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.29', change: '+3.58%', stress: 'MODERATE', ytd: '+3.58%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Results June 11 — THURSDAY', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide. Results same day World Cup opens. Pretoria Agreement "on verge of collapse." Eritrea tensions. Mogadishu combat adds Horn compound risk. Post-election triangular conflict risk live.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — ACTIVE COMBAT', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mogadishu combat June 4-5 — mortars, anti-tank, small arms. UK concerned. Donors alarmed. Al-Shabaab exploiting vacuum. Constitutional crisis turned armed. Most severe Mogadishu violence since parliamentary changes.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies expected to sweep. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 23 days. PEPFAR crisis adds compound health-fiscal emergency. Xenophobia. Petrol hike. Household debt. GNU maximum stress. PEPFAR-CDC expires September.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Tinubu wins APC nomination. Dangote 700k bpd. Inflows +83.8%. Airstrike crisis unresolved. 2027 risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. Court on Ebola facility this week. Eurobond Q2 rollover. Five crises simultaneously.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.8m PAID EARLY', instrument: 'Bond Coupons', maturity: 'PAID — RALLY IN PROGRESS', risk: 'HIGH', color: '#f5a623' },
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
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ACTIVE COMBAT MOGADISHU', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+3.6%', signal: 'PEPFAR CRISIS + JUNE 30 — 23 DAYS', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'RESULTS JUNE 11 + WAR RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'FINANCE BILL JUNE 30', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'BONDS RALLY — IMF JUNE 15', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.8%', signal: 'DANGOTE 700K — APC NOMINATION', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+6.5%', signal: 'IMF PROGRAMME COMPLETE — BENCHMARK', color: '#00c48c' },
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
  ],
}
