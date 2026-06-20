export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 20, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'WORSENING',
    drivers: ['Ebola 894 Confirmed 200+ Dead — Africa CDC: Only 12% Contacts Monitored — Worst On Record Risk', 'Africa CDC Chief: Continent Must Fund Own Ebola Response — Cannot Rely on Foreign Partners', 'Kenya Announces Reparations for 2,000 Protest Victims — Pre-emptive Move Before June 25 Anniversary', 'South Africa June 30 — 10 Days — Six Nations Evacuated — Voter Registration Launched'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 97, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'AFRICA CDC June 19: 894 confirmed cases, 200+ deaths since May 15. Up to 35,000 contacts identified — but only 12% are being monitored. Director-General Kaseya: "We are just following 12% of our people. This is a major indicator for us. It means we don\'t know the magnitude of this outbreak so far." $518m plan has secured less than $100m. If funding not secured in 4 weeks: ask rises to $1.5bn. If outbreak unchecked: could reach $7.5bn. Worst-ever Ebola outbreak risk confirmed as base case by Africa CDC. Outbreak detected weeks late — actual case count likely higher than reported.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Kenya announces reparations for nearly 2,000 protest victims — government will compensate those who suffered human rights abuses during demonstrations. Pre-emptive move 5 days before the June 25 storming anniversary. Finance Bill 2026 still due June 30 — 10 days. Opposition formally rejected it. Schools close June 24. Ruto\'s concession strategy: offer reparations + PAYE relief for lower earners to defuse Gen-Z mobilisation. Whether it works by June 25 is the live question. KES 129.54.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 — 10 DAYS. Municipal voter registration launched — fall 2026 elections confirmed. Africa CDC chief warns Africa cannot rely on foreign partners for health — Ramaphosa signed the $518m Ebola response plan foreword. Inflation at 4.5% two-year high. Six nations evacuated citizens. Johannesburg mass shooting investigation ongoing. PEPFAR-CDC expiring September. GNU managing maximum compound stress entering the final 10 days.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'US visa restrictions on TPLF hardliners confirmed June 18 — Rubio cited direct ENDF-TPLF clashes, hundreds of thousands displaced. TPLF draft legislation: mandatory mobilisation, expanded security powers, new media regulation — described as "blueprint for totalitarian control." Post-election conflict is a current situation. Watch continues for formal ENDF positioning signals.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF technical discussions ongoing following week of June 15 visit. Sonko opened door to debt talks June 16. Finance Minister Diba targeting agreement by June 30 — 10 days. Three Pastef members in Lo government. Early coupons paid. Bonds rallying from 50.6c record low. Structural risk unchanged: 132% debt/GDP, $9.7bn obligations 2026. June 30 agreement is the key pivot.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'AFRICA CDC: EBOLA 894 CONFIRMED 200 DEAD — ONLY 12% CONTACTS MONITORED — WORST OUTBREAK ON RECORD RISK — AFRICA MUST FUND OWN HEALTH RESPONSE — KENYA REPARATIONS BEFORE JUNE 25',
    body: 'June 20 opens with the most consequential Ebola statement since the outbreak began. Africa CDC Director-General Jean Kaseya, speaking in Addis Ababa on June 19, confirmed 894 cases and more than 200 deaths since May 15 — with up to 35,000 contacts identified but only 12% being monitored. "We don\'t know the magnitude of this outbreak so far," he said directly. The $518m six-month response plan has secured less than $100m — if full funding is not secured within four weeks, the ask rises to $1.5bn, and if the outbreak goes unchecked it could cost $7.5bn. The CDC modelling projects 20,000+ cases in the next three months if measures are not immediately taken — which would make this the worst Ebola outbreak on record, approaching the 2014-2016 West Africa outbreak of 28,000 cases. Kaseya issued a structural warning: Africa cannot continue to rely on foreign partners for its health needs. The continent produces less than 1% of its vaccine needs. On the political front, Kenya announced reparations for nearly 2,000 protest victims — a pre-emptive move five days before the June 25 storming anniversary. South Africa has 10 days to June 30.',
    tag: 'JUNE 20 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 20, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '780', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA 894 CONFIRMED 200 DEAD — 12% CONTACT TRACING — WORST ON RECORD RISK — $7.5BN IF UNCHECKED', body: 'Africa CDC DG Kaseya June 19 (AP/ABC News): 894 confirmed cases, 200+ deaths since May 15. Up to 35,000 contacts — only 12% monitored. "$518m plan has less than $100m secured. In 4 weeks if not funded: $1.5bn ask. If unchecked: $7.5bn." CDC modelling: 20,000+ cases in next 3 months if measures not taken immediately — would rival 2014-2016 West Africa outbreak (28,000 cases, worst ever). Case count likely higher — outbreak detected weeks late. Only 12% contact monitoring: "We don\'t know the magnitude of this outbreak so far." Burial teams insufficient, PPE shortages, community resistance, armed group attacks on responders all continuing.', icon: '🚨' },
    { title: 'AFRICA CANNOT RELY ON FOREIGN PARTNERS FOR HEALTH — KASEYA STRUCTURAL WARNING', body: 'Africa CDC DG Kaseya in Addis Ababa: "The continent cannot continue to rely on foreign partners for its health needs." Africa produces less than 1% of its vaccine needs and 3% of its medicine — both sourced from abroad. Continent projected to reach 2.5 billion people by 2050. The PEPFAR cuts, US withdrawal from WHO (then re-engagement), and now the Ebola funding gap are all expressions of the same structural reality: African health systems are dependent on external financing that is being withdrawn. Kaseya called for African governments to invest their own funds in both the Ebola response and vaccine development.', icon: '🌍' },
    { title: 'KENYA REPARATIONS FOR 2,000 PROTEST VICTIMS — PRE-EMPTIVE MOVE BEFORE JUNE 25', body: 'Kenya government announces it will begin compensating nearly 2,000 people who suffered human rights abuses during the 2024 protests — a significant pre-emptive concession five days before the June 25 storming anniversary. The reparations signal is intended to defuse Gen-Z mobilisation. Combined with Ruto\'s PAYE relief offer for lower earners, the government is trying to separate the Finance Bill 2026 from the 2024 emotional memory. Whether it works: the Finance Bill 2026 still reintroduces phone excise duty, crypto taxes and digital economy levies — the same political profile that triggered 2024. The June 25 test will determine if the strategy succeeded.', icon: '⚖️' },
    { title: 'SOUTH AFRICA JUNE 30 — 10 DAYS — VOTER REGISTRATION LAUNCHED — GNU FINAL STRETCH', body: 'Municipal elections voter registration officially launched — fall 2026 elections confirmed on schedule despite the compound crisis. June 30 is 10 days away. March and March and ATDF-ASA have both June 30 as their declared shutdown deadline. Ramaphosa\'s 5-point plan was announced June 8 — implementation gap persists. Six nations have evacuated citizens. Inflation at 4.5% two-year high. Household debt: 41% in default. PEPFAR-CDC expires September. ZAR at 16.18 — continuing to strengthen despite the compound domestic stress stack, driven by gold/PGM exports and SARB credibility.', icon: '🔥' },
  ],

  insight1: {
    title: 'THE 12% CONTACT TRACING FIGURE IS THE SINGLE MOST IMPORTANT NUMBER IN AFRICA\'S 2026 HEALTH CRISIS',
    body: 'Epidemiologists require 90% contact tracing coverage to stay ahead of an exponentially spreading outbreak. At 12%, Africa CDC is acknowledging publicly that it has lost the ability to track the outbreak\'s actual size. The 894 confirmed cases is a floor, not a ceiling — the actual case count is higher by an unknown multiplier because the outbreak was detected weeks late and contact tracing has never been adequate. This is the structural reality that makes the $7.5 billion worst-case scenario credible: 12% coverage means 88% of the transmission chain is invisible to responders. The 2018-2020 North Kivu outbreak, which killed 2,286 people, was eventually contained only when contact tracing improved significantly above 90%. The current Bundibugyo outbreak has no vaccine, no approved treatment, and 12% contact coverage across a conflict zone. The Africa CDC\'s call for African governments to finance their own response is structurally correct — but the timeline for building that capacity is years, not weeks.',
    conclusion: 'THE 12% CONTACT TRACING FIGURE CONFIRMS THAT EBOLA\'S ACTUAL SCALE IS UNKNOWN AND UNKNOWABLY LARGER THAN CONFIRMED CASES. THE $7.5BN WORST-CASE AND 20,000+ CASE PROJECTIONS ARE CREDIBLE. WATCH THE FUNDING MOBILISATION IN THE NEXT 4 WEEKS AS THE CRITICAL VARIABLE.',
  },

  insight2: {
    title: 'KENYA\'S REPARATIONS OFFER IS RUTO\'S MOST SOPHISTICATED POLITICAL MOVE YET — BUT THE TEST IS JUNE 25',
    body: 'Announcing reparations for nearly 2,000 protest victims five days before the June 25 anniversary is a precise political intervention. It signals accountability without conceding on the Finance Bill itself. It gives Gen-Z activists something tangible — their peers will be compensated — while keeping the legislative agenda intact. Combined with the PAYE relief for lower earners, Ruto is trying to create emotional and fiscal separation between the 2024 uprising and the 2026 Finance Bill. The strategic logic is sound: if people feel heard (reparations), and if the Bill is visibly less aggressive than 2024 (fewer increases), the June 25 anniversary might pass as a commemoration rather than a mobilisation. But the failure mode is also clear: if Gen-Z reads the reparations as validation that 2024 worked, they may conclude 2026 requires the same approach. June 25 will be the test.',
    conclusion: 'KENYA\'S REPARATIONS OFFER IS A SOPHISTICATED PRE-EMPTIVE CONCESSION DESIGNED TO DEFUSE JUNE 25 MOBILISATION. IT COULD WORK IF GEN-Z READS IT AS ACCOUNTABILITY. IT COULD BACKFIRE IF GEN-Z READS IT AS CONFIRMATION THAT PROTEST WORKS. JUNE 25 IS 5 DAYS AWAY.',
  },

  brief: {
    week: '26',
    title: 'WEEK 26 OPEN: EBOLA 894 CONFIRMED 12% TRACING WORST ON RECORD, AFRICA CANNOT RELY ON FOREIGN HEALTH, KENYA REPARATIONS, SA 10 DAYS TO JUNE 30',
    body: 'Week 26 opens with Africa CDC\'s most alarming Ebola statement yet: 894 confirmed cases, 200+ deaths, only 12% of 35,000 contacts monitored. The continent does not know the true magnitude of the outbreak. The $518m plan has less than $100m secured — if not funded in 4 weeks the ask rises to $1.5bn, if unchecked to $7.5bn. CDC modelling projects 20,000+ cases in 3 months. Director-General Kaseya delivered the structural warning: Africa cannot rely on foreign partners for its health needs. Kenya announced reparations for 2,000 protest victims — a pre-emptive concession 5 days before the June 25 storming anniversary. South Africa has 10 days to June 30 with voter registration launched and six nations having evacuated citizens. Senegal\'s IMF discussions are ongoing with a June 30 agreement target. Ethiopia\'s post-election conflict risk is live — US TPLF visa restrictions confirmed Friday. ZAR holding at 16.18. Ghana beat Panama in the World Cup. The continent\'s most dangerous week since the start of the decade continues.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.18',
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
    { time: '09:30:00', signal: 'Africa CDC DG Kaseya June 19: Ebola 894 confirmed, 200+ deaths since May 15. 35,000 contacts — ONLY 12% MONITORED. "$518m plan has under $100m secured. 4 weeks to fund or ask rises to $1.5bn. If unchecked: $7.5bn." CDC: 20,000+ cases projected in 3 months if action not taken — worst on record risk. Africa must fund own health response — produces less than 1% of vaccine needs.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Kenya: Government announces reparations for nearly 2,000 protest victims — compensation for human rights abuses during 2024 demonstrations. Pre-emptive move 5 days before June 25 anniversary. Finance Bill 2026 still due June 30 — 10 days. Combined with PAYE relief — Ruto\'s defusion strategy. June 25 is the test.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'South Africa June 30 — 10 DAYS. Municipal voter registration launched. Inflation 4.5% two-year high. Six nations evacuated citizens. PEPFAR-CDC expires September. Household debt 41% in default. GNU entering final 10-day window before the dual-movement deadline. ZAR holding at 16.18.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'Ethiopia: US TPLF visa restrictions confirmed Friday — Rubio cited ENDF clashes, hundreds of thousands displaced. TPLF "totalitarian control" draft legislation: mandatory mobilisation, expanded security powers, media regulation. Post-election conflict current situation. Abiy posture signals the critical watch variable.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:30:00', signal: 'Senegal: IMF discussions ongoing post-June 15 visit. Sonko open to IMF debt talks (June 16). Diba targets agreement June 30 — 10 days. Three Pastef members in Lo government. Bonds rallied from 50.6c. $9.7bn obligations 2026. June 30 agreement is the pivot signal for Senegal\'s debt trajectory.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:15:00', signal: 'Zimbabwe: Senate must now vote on presidential term extension bill — two-thirds majority required again. If passed, goes to Mnangagwa for assent. Zimbabwe repatriated 660 from SA. AU condemned Niamey airport attack. Niger junta under pressure from two directions: jihadist escalation to capital AND AES governance legitimacy crisis.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'World Cup: South Africa preparing for Czech Republic match — must win after 2-0 opener loss to Mexico (two red cards Sithole, Zwane). DRC drew Portugal 1-1 — historic since 1974. Ghana beat Panama 1-0 late winner. Cape Verde drew Spain 0-0. Africa competing effectively. Tournament narrative: competitiveness on pitch vs crisis off it.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 20: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.18 (-10.13% YoY — rand strengthened) | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR structural strength: gold/PGM exports, SARB 7%, fiscal discipline. Africa CDC warning may affect Uganda UGX and DRC-linked regional flows.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 64, fiscal: 56, fx: 40, debt: 58, political: 84, external: 58 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 96, fiscal: 90, fx: 74, debt: 96, political: 98, external: 96 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 95, fiscal: 78, fx: 46, debt: 70, political: 97, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 74, fiscal: 78, fx: 64, debt: 80, political: 70, external: 72 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 80, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'LOW', ytd: '-3.40%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.18', change: '-10.13%', stress: 'LOW', ytd: '+10.13%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 457/547 — Post-Election Conflict LIVE', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions confirmed June 18. ENDF clashes confirmed. Hundreds of thousands displaced. TPLF "totalitarian control" legislation. War risk current situation.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension — Senate Vote Next', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed with 200+ votes. Senate next — two-thirds majority required. Mnangagwa assent if passed. Repatriated 660 from SA.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition calls Mohamud "former president." Al-Shabaab active. No constitutional court.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Voter Registration Launched', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 10 DAYS. Voter registration launched. Dual movements. Six nations evacuated. Inflation 4.5%. PEPFAR September. 41% borrowers in default.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027 — Finance Bill June 30 In 10 Days', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — 10 days. June 25 anniversary 5 days. Reparations announced for 2,000 victims. Schools June 24. Ruto defusion strategy being tested.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF AGREEMENT TARGET JUNE 30', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Discussions Active', risk: 'HIGH', color: '#f5a623' },
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
    { country: 'DRC/UGANDA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 894 — 12% TRACING — $7.5BN RISK', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'US TPLF SANCTIONS — WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+52', bond: '-2.6pts', fx: '+0.1%', signal: 'JUNE 25 IN 5 DAYS — REPARATIONS ANNOUNCED', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+40', bond: '-2.0pts', fx: '+10.1%', signal: 'JUNE 30 — 10 DAYS — VOTER REG LAUNCHED', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF AGREEMENT TARGET JUNE 30', color: '#f5a623' },
    { country: 'NIGER', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'AIRPORT ATTACK — SAHEL CAPITAL TARGETED', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.8%', signal: 'DANGOTE 700K — WORLD CUP GROUP STAGE', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'BEAT PANAMA — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.24, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.36, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.58, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.18, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.18, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
