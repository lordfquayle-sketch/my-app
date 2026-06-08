export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 8, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'STABLE',
    drivers: ['Ramaphosa Announces 5-Point Immigration Crackdown — Biometric Population Register — June 30 22 Days', 'Kenya Opposition Formally Rejects Finance Bill 2026 — Kalonzo: "Ruto Learnt Nothing"', 'Somalia Mogadishu Fighting Ongoing — UK Deeply Concerned — Al-Shabaab Exploiting Vacuum', 'World Cup Opens Thursday June 11 + Ethiopia Results Same Day — 3 Days'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 97, trend: '↓', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'RAMAPHOSA RESPONDS. Five-point immigration crackdown announced Sunday night: (1) Jail employers hiring undocumented workers. (2) Dedicated immigration courts for faster deportations. (3) Biometric Intelligent Population Register for every person in SA — foundation for Digital ID. (4) Phase out green ID book — enabled identity theft. (5) Traffic Registration Number loophole closed — Transport to issue new regs within 3 months. Employment Services Amendment Bill approved by Cabinet — quotas on foreign nationals in sectors. Warned: "only authorised officials may act." June 30: 22 days. March and March + ATDF-ASA watching.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Opposition formally rejects Finance Bill 2026. Kalonzo Musyoka: "The Finance Bill 2026 is further proof that the Ruto regime has learnt nothing and forgotten everything from the June 25 Revolution that nearly overthrew his regime." Coalition: "tax more, borrow more." Finance Bill 2026 has fewer increases than 2024 but reintroduces phone excise duty and taxes digital economy — crypto, content creators, card payments. Due June 30. Excise duty on phones applies regardless of VAT exemption retained. Gen-Z watching.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'Mogadishu fighting ongoing — heavy gunfire, mortars, anti-tank fire between government and opposition militias in Howlwadaag and Abdiasis districts. UK "deeply concerned." International donors alarmed. Al-Shabaab exploiting political vacuum — retook territory in 2024-2025 during previous political crises. Constitutional crisis: Mohamud term extension opposed as illegal. Opposition threatening parallel government process.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Results Thursday June 11 — 3 days. Same day World Cup opens. PP landslide expected. Pretoria Agreement "on verge of collapse." TPLF reinstated Debretsion. Eritrea tensions — Red Sea access dispute. Triangular conflict scenario: Ethiopia vs TPLF + Ethiopia vs Eritrea. Most dangerous Horn window since 2020. Results June 11 will trigger post-election posture assessment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Bonds rallied on early coupon payment. IMF visit week of June 15. Finance Minister Diba targeting agreement June 30. Three Pastef members joined Lo government despite Sonko\'s declaration. Structural risk remains: 132% debt/GDP, $9.7bn obligations 2026. IMF agreement by June 30 is the key milestone — Oxford Economics Venezuela/Lebanon classification stands until programme is restored.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'RAMAPHOSA ANNOUNCES 5-POINT IMMIGRATION CRACKDOWN — BIOMETRIC REGISTER FOR EVERY SA RESIDENT — 22 DAYS TO JUNE 30 — KENYA OPPOSITION FORMALLY REJECTS FINANCE BILL',
    body: 'June 8 marks the GNU\'s formal response to the June 30 crisis. Ramaphosa addressed the nation Sunday night with a five-point immigration crackdown: jail employers hiring undocumented workers; dedicated deportation courts; a biometric Intelligent Population Register for every person in South Africa as the foundation for a Digital ID; phase out the green ID book which enabled identity theft; and close the Traffic Registration Number loophole. He warned that only authorised officials may act — directly addressing March and March vigilantism. The Employment Services Amendment Bill approved by Cabinet will empower the labour minister to set sector quotas on foreign national employment. This is the most comprehensive immigration policy response South Africa has announced in decades. Whether it arrives in time — and is credible enough — to defuse June 30 is the question. In Kenya, opposition leader Kalonzo formally rejected the Finance Bill 2026, calling it proof the Ruto regime "learnt nothing" from the 2024 uprising. The Finance Bill 2026 has fewer tax increases than 2024 but reintroduces the phone excise duty and taxes the digital economy — crypto, content creators, card payments. Due June 30 — same day as South Africa\'s xenophobia deadline.',
    tag: 'JUNE 8 CRITICAL SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'June 8, 2026',
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
    { title: 'RAMAPHOSA 5-POINT CRACKDOWN — BIOMETRIC REGISTER — EMPLOYER JAILING — GREEN ID PHASED OUT', body: 'Sunday night national address: (1) Jail employers who hire undocumented workers — Employment Services Amendment Bill approved by Cabinet. (2) Dedicated immigration courts for faster deportations — phased relocation of refugee reception centres to border posts starting Tshwane this year. (3) Biometric Intelligent Population Register for every SA resident — Digital ID foundation. (4) Phase out green barcoded ID book — enabled identity theft and criminal syndicates. (5) Traffic Registration Number loophole closed — Transport regs within 3 months. Sector quotas on foreign national employment in specific sectors. Warned vigilante action illegal.', icon: '🇿🇦' },
    { title: 'KENYA OPPOSITION FORMALLY REJECTS FINANCE BILL 2026 — "RUTO LEARNT NOTHING"', body: 'Kalonzo Musyoka Wiper Democratic Movement: "The Finance Bill 2026 is further proof that the Ruto regime has learnt nothing and forgotten everything from the June 25 Revolution that nearly overthrew his regime." Coalition statement: "tax more, borrow more" policy. Finance Bill 2026 reintroduces phone excise duty (VAT exemption retained but separate from excise duty), taxes crypto users, digital marketplace earners, content creators, card payment transactions. Extends residential rental income tax 7.5% → 10%. Due June 30 — 22 days. Gen-Z mobilisation risk building.', icon: '🔥' },
    { title: 'SOMALIA: MOGADISHU ACTIVE COMBAT — AL-SHABAAB EXPLOITING VACUUM', body: 'Mogadishu fighting between government and opposition militias ongoing — heavy gunfire, mortars, anti-tank weapons. UK "deeply concerned." International donors alarmed. Al-Shabaab retook territory during 2024-2025 political crises — positioned to exploit this vacuum again. AUSSOM mandate under pressure. Constitutional crisis: Mohamud term extension called illegal by opposition. Opposition threatening parallel government. Five Zimbabwean nationals swept off Addo bridge in Eastern Cape — separate incident underscoring migration vulnerability.', icon: '🚨' },
    { title: 'JUNE 11 IN 3 DAYS — WORLD CUP OPENS + ETHIOPIA RESULTS — HORN CONVERGENCE', body: 'Thursday June 11: World Cup 2026 opens Mexico City — first game Mexico vs Canada. Ethiopia election results announced — PP landslide expected, post-election war risk on TPLF and Eritrea goes live. DRC Leopards arrive Houston for June 17 opener vs Portugal — in isolation bubble, fans still banned. Mogadishu fighting active. Somalia, Ethiopia, DRC all in active crisis same day World Cup opens. The geopolitical significance of Africa in the 2026 World Cup moment is being defined by Ebola, conflict and constitutional crisis — not football alone.', icon: '⚽' },
  ],

  insight1: {
    title: 'RAMAPHOSA\'S 5-POINT PLAN IS THE GNU\'S MOST CREDIBLE RESPONSE TO DATE — BUT IT ARRIVES WITH 22 DAYS TO GO',
    body: 'The substance of Ramaphosa\'s announcement is more comprehensive than analysts expected. The biometric Intelligent Population Register — effectively a digital ID for every person in South Africa — is a structural solution to the identity fraud problem that underlies much of the immigration exploitation. Jailing employers is a demand that March and March has made explicitly. Dedicated courts for faster deportations addresses the backlog directly. The phasing out of the green ID book closes a genuine loophole. The Employment Services Amendment Bill with sector quotas on foreign nationals addresses the core labour market grievance. The question is not whether these measures are right — they are — but whether a government with 41% of its borrowers in default, a household debt crisis, a PEPFAR emergency, a presidential impeachment panel, and a petrol hike can execute all five simultaneously in 22 days. The credibility of the announcement will be tested by execution speed, not by policy design.',
    conclusion: 'RAMAPHOSA\'S 5-POINT PLAN IS STRUCTURALLY CREDIBLE — THE MOST COMPREHENSIVE IMMIGRATION POLICY RESPONSE IN DECADES. BUT EXECUTION SPEED IN 22 DAYS DETERMINES WHETHER JUNE 30 IS DEFUSED OR IGNITES. WATCH MARCH AND MARCH\'S FORMAL RESPONSE.',
  },

  insight2: {
    title: 'KENYA\'S FINANCE BILL 2026 OPPOSITION REJECTION FOLLOWS THE EXACT PATTERN OF 2024 — THE JUNE 30 PARALLEL IS NOT COINCIDENTAL',
    body: 'In 2024, the Finance Bill was introduced in May, opposed by civil society and opposition through June, and triggered mass protests that stormed parliament on June 25 — two days before the June 30 fiscal deadline. In 2026, the Finance Bill was released April 30, the opposition has now formally rejected it, Kalonzo is using the language of "revolution," and the deadline is June 30 — the same day as South Africa\'s xenophobia deadline. The 2026 Bill has fewer tax increases than 2024 — Bowmans legal analysis notes this reflects Ruto\'s intention to ease concerns ahead of 2027 elections. But the reintroduction of the phone excise duty and the digital economy taxes are politically identical to 2024. The Gen-Z movement — which produced the 2024 protests — is watching. Two years and six days after the parliament storming, the same dynamics are building.',
    conclusion: 'KENYA\'S FINANCE BILL 2026 IS FOLLOWING THE EXACT POLITICAL PATTERN OF 2024. THE JUNE 30 DEADLINE IS THE CRITICAL DATE. WATCH GEN-Z MOBILISATION IN THE COMING 22 DAYS — THE PARLIAMENTARY STORMING ANNIVERSARY IS JUNE 25.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 DAY 2: RAMAPHOSA 5-POINT CRACKDOWN, KENYA OPPOSITION REJECTS FINANCE BILL, SOMALIA ONGOING, JUNE 11 IN 3 DAYS',
    body: 'Week 24\'s second day opens with South Africa\'s most comprehensive immigration policy response in decades. Ramaphosa announced five measures Sunday night: jail employers, deportation courts, biometric population register, phase out green ID, close traffic number loophole. June 30 is 22 days away. Kenya\'s opposition formally rejected the Finance Bill 2026 — Kalonzo called it proof Ruto "learnt nothing" from the 2024 revolution. Somalia\'s Mogadishu combat is ongoing with Al-Shabaab exploiting the vacuum. June 11 is three days away: World Cup opens, Ethiopia results announced, DRC Leopards arrive Houston — the Horn\'s most consequential convergence this decade. Senegal\'s bonds are rallying — IMF visit June 15, agreement target June 30. Live FX: NGN holding 1,360, GHS at 11.815, ZAR firm.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.82',
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
    { time: '09:30:00', signal: 'Ramaphosa 5-point immigration crackdown — Sunday night national address. (1) Jail employers hiring undocumented workers. (2) Dedicated deportation courts. (3) Biometric Intelligent Population Register — Digital ID foundation. (4) Phase out green ID book. (5) Traffic Registration Number loophole closed within 3 months. Sector employment quotas. Warned vigilantism illegal. June 30: 22 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Kenya: Opposition formally rejects Finance Bill 2026. Kalonzo: "Ruto learnt nothing from June 25 Revolution." Bill reintroduces phone excise duty, taxes crypto, content creators, card payments, extends rental tax 7.5%→10%. Due June 30. 2024 pattern: bill introduced May → opposed June → protests June 25 → storming June 25 → withdrawal June 28. 2026 calendar identical.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'Somalia: Mogadishu combat ongoing — government vs opposition militias. UK "deeply concerned." Al-Shabaab exploiting vacuum. AUSSOM mandate under pressure. Constitutional crisis: Mohamud term extension called illegal. Donors alarmed. Five Zimbabwean nationals swept off Addo bridge Eastern Cape — migration vulnerability on multiple fronts.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'June 11 — 3 days: World Cup opens Mexico City. Ethiopia election results. DRC Leopards arrive Houston. PP landslide + post-election war risk vs TPLF and Eritrea goes live. Mogadishu fighting active. Ebola ongoing. Horn of Africa compound risk at maximum same day World Cup begins.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Senegal: Bonds rallying from 50.6c record low. IMF visit week of June 15. Diba targets agreement June 30. Three Pastef members joined Lo government. Acute default risk partially defused. Structural risk remains: 132% debt/GDP, $9.7bn obligations 2026. Oxford Economics Venezuela/Lebanon classification stands until IMF programme restored.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:15:00', signal: 'SA: PEPFAR-CDC funding may only last until September. UCT/Wits model: 150,000-295,000 additional HIV infections by 2028. SA must cover $620m-$1.4bn. Compound health-fiscal emergency running parallel to June 30 political crisis. GNU managing six simultaneous crises.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '08:00:00', signal: 'Kenya Finance Bill 2026 — Bowmans legal analysis: fewer increases than 2024 reflects Ruto\'s intent to ease concerns ahead of 2027. But phone excise duty reintroduced — VAT exemption retained but excise duty is separate instrument. Digital economy taxes: crypto, content creators, freelancers, card swipes. Gen-Z watching. June 25 storming anniversary in 17 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '07:45:00', signal: 'LIVE FX June 8: NGN 1,360.73 | GHS 11.82 (slight weakening from 11.75) | KES 129.53 | EGP 52.22 | ZAR 16.29 | UGX 3,770 | ZMW 19.02. NGN down -13.02% YoY — strengthening trend from 1,564 peak June 2025 intact. GHS slightly softer. ZAR firm on dollar weakness. Markets open — watch Senegal bond spreads for sustained rally.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 56, fx: 42, debt: 58, political: 82, external: 56 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 46, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 96, fiscal: 78, fx: 46, debt: 72, political: 96, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 86, fiscal: 88, fx: 76, debt: 90, political: 84, external: 82 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 95, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.82', change: '+15.83%', stress: 'MODERATE', ytd: '+5.47%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.29', change: '+3.58%', stress: 'MODERATE', ytd: '+3.58%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Results June 11 — 3 DAYS', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide expected. Results same day World Cup opens. Pretoria Agreement collapsing. Eritrea tensions. Post-election triangular conflict risk. Most dangerous Horn window since 2020.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Active Crisis — Mogadishu Combat', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Active combat Mogadishu — government vs opposition militias. UK concerned. Al-Shabaab exploiting vacuum. Mohamud term extension called illegal. Donors alarmed.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies sweep expected. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'Ramaphosa 5-point crackdown announced. June 30 — 22 days. Biometric register announced. Green ID phased out. Employer jailing. March and March watching.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Tinubu wins APC nomination. Dangote 700k bpd. Inflows +83.8%. Airstrike crisis unresolved. 2027 risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill 2026 June 30. Opposition formally rejected — "Ruto learnt nothing." June 25 storming anniversary in 17 days. Gen-Z watching. Eurobond Q2 rollover critical.', color: '#ff3b3b' },
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
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ACTIVE COMBAT MOGADISHU', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'OPPOSITION REJECTS FINANCE BILL', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+40', bond: '-2.0pts', fx: '+3.6%', signal: 'RAMAPHOSA 5-POINT PLAN — JUNE 30 22D', color: '#f5a623' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'RESULTS JUNE 11 — WAR RISK 3 DAYS', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'BONDS RALLY — IMF JUNE 15', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.0%', signal: 'DANGOTE 700K — APC NOMINATION', color: '#00c48c' },
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
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
