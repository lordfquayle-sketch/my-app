export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 22, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'WORSENING',
    drivers: ['Nigeria Violence May 2026: 842 Dead 279 Abducted 156 Incidents — Deaths Up 90.1%', 'SA State Complicity Analysis: 151 Xenophobia Incidents 2025, 22 First 5 Months 2026 — Governance Failing', 'Kenya Schools Close Tomorrow — June 25 Anniversary In 3 Days — Finance Bill 8 Days', 'Somaliland Opens Embassy In Jerusalem — Regional Diplomatic Architecture Shift'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 97, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nextier Nigeria Violent Conflicts Database: 842 people killed and 279 abducted in 156 violent incidents across Nigeria in May 2026. Deaths up 90.1% vs May 2025. Violent incidents up 51.5%. Kidnappings up 19.7%. Most dangerous single month in years. Multi-vector: Boko Haram Borno, ISWAP Lake Chad, banditry northwest, school abductions southwest, Zamfara civilian airstrikes ongoing. 2027 election cycle beginning to absorb political risk. Dangote and inflows positive but security crisis sharply worsening.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'State complicity analysis published today: SA government convened May 25 meeting with March and March at Union Buildings — legitimising vigilante groups. 151 xenophobia incidents in 2025. 22 verified incidents in first five months of 2026. 14 of those violent attacks. Analysis: state\'s complicity with gangs and vigilantes is threatening its ability to govern. June 30: 8 days. Bafana drew 1-1 with Czech Republic — Mokoena late penalty saved the point. Schools close in Kenya tomorrow. June 25 is 3 days away.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Schools closing tomorrow June 23/24 ahead of the June 25 storming anniversary — 3 days away. Finance Bill 2026 due June 30 — 8 days. Ruto\'s defusion strategy: reparations for 2,000 victims + PAYE relief offer. But Finance Bill still contains phone excise duty, crypto taxes, digital economy levies — same political profile as 2024. Gen-Z watching. KES at 129.54. 90% of record budget deficit funded through domestic borrowing per The Africa Report.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'PP confirmed 438 of 501 seats (allAfrica June 22). Abiy third term confirmed. Post-election conflict with TPLF live — US visa restrictions on hardliners confirmed June 18. Hundreds of thousands displaced in northern Ethiopia. Eritrea tensions — Red Sea access. Analysts: Ethiopia remains deeply divided, security challenges mounting. Pretoria Agreement on verge of collapse. Horn of Africa compound risk at maximum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF discussions ongoing. Sonko opened door to debt talks June 16. Diba targets agreement June 30 — 8 days. Three Pastef members in Lo government. Bonds rallied from 50.6c. $9.7bn obligations 2026. The June 30 window closes in 8 days — agreement or extension of talks is the binary outcome. Oxford Economics Venezuela/Lebanon classification stands until programme restored.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'NIGERIA MAY 2026: 842 DEAD 90% SURGE — SA STATE COMPLICITY WITH VIGILANTES CONFIRMED — KENYA JUNE 25 IN 3 DAYS — JUNE 30 TWIN DEADLINES 8 DAYS',
    body: 'June 22 — the final Monday before Africa\'s most consequential week of the decade. Nigeria\'s Nextier database has confirmed May 2026 as the country\'s most violent month in years: 842 people killed and 279 abducted in 156 violent incidents — deaths up 90.1% and incidents up 51.5% versus May 2025. This is the security backdrop behind which Africa\'s largest economy is managing a 2027 election cycle. In South Africa, a major academic analysis published today confirms what was suspected: the state is complicit with the xenophobia movements. The government\'s May 25 meeting with March and March at the Union Buildings legitimised vigilante groups, broadcast their ultimatums on national television, and created a politics of fragmentation. The analysis: 151 xenophobia incidents in 2025, 22 verified in the first five months of 2026, 14 of them violent. June 30 is 8 days away. In Kenya, schools close tomorrow ahead of the June 25 storming anniversary — now 3 days away. Bafana Bafana drew 1-1 with the Czech Republic in a dramatic last-minute Mokoena penalty — the point may prove critical. Somaliland opened its first overseas embassy in Jerusalem — a diplomatic architecture shift with regional implications.',
    tag: 'JUNE 22 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 22, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '780', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'NIGERIA MAY 2026: 842 KILLED 279 ABDUCTED — DEATHS UP 90.1% — WORST MONTH IN YEARS', body: 'Nextier Nigeria Violent Conflicts Database: 842 people killed and 279 abducted in 156 violent incidents in May 2026. Deaths up 90.1% vs May 2025. Violent incidents up 51.5%. Kidnappings up 19.7%. Multi-vector simultaneously: Boko Haram Borno, ISWAP Lake Chad, northwest banditry, southwest school abductions, Zamfara civilian airstrike deaths. Analyst verdict (Jamilu Musa, Chukwuma Okoli): lack of strong evaluation methods makes it hard to understand how peacebuilding processes work — significant funding from governments and development groups not translating into results. The 360-person Boko Haram rescue was a tactical success in a month of strategic security deterioration.', icon: '🚨' },
    { title: 'SA STATE COMPLICITY: MEETING MARCH AND MARCH AT UNION BUILDINGS LEGITIMISED VIGILANTES', body: 'Academic analysis published today (The Conversation / DefenceWeb): South Africa\'s government convened a May 25 meeting with March and March leadership at the Union Buildings — the official seat of government — granting vigilante groups access to the highest political office. Analysis: "Their words are broadcast on national television and radio stations. Their ultimatums come to represent legitimate political demands. The state may temporarily quell crises. But it emboldens these groups to carry on." 151 xenophobia incidents 2025, 22 verified first five months 2026, 14 violent. "The state\'s complicity with gangs and vigilantes is threatening its ability to govern." June 30: 8 days.', icon: '⚖️' },
    { title: 'KENYA JUNE 25 IN 3 DAYS — SCHOOLS CLOSING — FINANCE BILL 8 DAYS', body: 'Schools close tomorrow June 23/24 ahead of the June 25 storming anniversary. Three days to the most politically charged date on Kenya\'s calendar. Ruto\'s defusion strategy: reparations for 2,000 victims + PAYE relief. But Finance Bill 2026 still contains phone excise duty, crypto taxes, digital economy levies — the same political profile that triggered 2024. Kalonzo: "Ruto learnt nothing." Gen-Z mobilisation building. ACLED: 94+ PSV fuel demonstrations recorded May. Finance Bill due June 30 — 8 days. Identical calendar to 2024. The test begins Wednesday.', icon: '🔥' },
    { title: 'BAFANA DRAW 1-1 WITH CZECH REPUBLIC — MOKOENA LATE PENALTY — STILL ALIVE', body: 'South Africa salvaged a 1-1 draw against Czech Republic through a late Teboho Mokoena penalty after the Czech Republic had led. Sithole and Zwane were both suspended (red cards vs Mexico). The draw keeps Bafana alive in Group A — they need results in their final group game. A South African World Cup exit would remove the GNU\'s most powerful soft power asset entering the final week of the June 30 crisis. Mokoena\'s penalty is politically and symbolically significant beyond football.', icon: '⚽' },
  ],

  insight1: {
    title: 'NIGERIA\'S MAY 2026 VIOLENCE DATA IS THE MOST ALARMING SECURITY SIGNAL FROM AFRICA\'S LARGEST ECONOMY THIS DECADE',
    body: 'A 90.1% year-on-year surge in deaths and a 51.5% increase in violent incidents in a single month is not a spike — it is a structural deterioration. Nigeria has managed multiple simultaneous security crises for over a decade, but the May 2026 data suggests the vectors are no longer just holding steady — they are amplifying. The northwest banditry crisis, the Boko Haram/ISWAP northeast insurgency, the southwest school abductions, and the civilian airstrike deaths in Zamfara and Yobe are all expanding simultaneously. The 2027 election cycle will begin absorbing political risk within months — historically Nigeria\'s worst security periods have corresponded with election run-up periods. Dangote at 700,000 bpd and foreign inflows at +83.8% are real structural positives. But they exist in a security environment that is deteriorating faster than the fiscal environment is improving.',
    conclusion: 'NIGERIA\'S MAY 2026 SECURITY DATA — 842 DEAD, 90.1% SURGE — IS THE MOST ALARMING SINGLE-MONTH FIGURE IN YEARS. THE MULTI-VECTOR SIMULTANEOUS DETERIORATION, ENTERING A 2027 ELECTION CYCLE, IS A TIER-1 SOVEREIGN RISK SIGNAL.',
  },

  insight2: {
    title: 'THE UNION BUILDINGS MEETING WITH MARCH AND MARCH IS THE SOUTH AFRICAN STATE\'S MOST CONSEQUENTIAL ERROR OF JUNE 2026',
    body: 'When a government invites a vigilante movement to the official seat of executive power, broadcasts their ultimatums on national television, and allows their demands to become political benchmarks, it has fundamentally changed the relationship between state authority and extralegal enforcement. The analysis published today is explicit: granting March and March access to the Union Buildings legitimised them. The state\'s National Action Plan on Racism and Xenophobia "contains almost no plan." The government has addressed the rise of these political formations with education and public events — not with law enforcement. Ramaphosa\'s 5-point plan, announced June 8, is structurally sound — but it was preceded by a May 25 meeting that undermined its authority by treating the movement as a legitimate political interlocutor. Eight days to June 30.',
    conclusion: 'THE UNION BUILDINGS MEETING WITH MARCH AND MARCH LEGITIMISED VIGILANTISM AT THE HIGHEST POLITICAL LEVEL. THE ACADEMIC ANALYSIS PUBLISHED TODAY CONFIRMS THAT THE STATE\'S COMPLICITY IS STRUCTURAL, NOT INCIDENTAL. WITH 8 DAYS TO JUNE 30, THIS IS THE GOVERNANCE FAILURE THAT CANNOT BE UNDONE BY POLICY ANNOUNCEMENTS.',
  },

  brief: {
    week: '26',
    title: 'WEEK 26 MONDAY: NIGERIA 842 DEAD MAY 2026, SA STATE COMPLICITY CONFIRMED, KENYA JUNE 25 IN 3 DAYS, BAFANA DRAW 1-1',
    body: 'The final Monday before Africa\'s most consequential week opens with Nigeria\'s worst security month in years — 842 dead, 279 abducted, 156 violent incidents, deaths up 90.1%. A major academic analysis published today confirms South Africa\'s state is complicit with the xenophobia movements — the May 25 Union Buildings meeting with March and March legitimised vigilante ultimatums. June 30 is 8 days away, June 25 is 3 days away, and schools in Kenya close tomorrow. Bafana drew 1-1 with Czech Republic through a late Mokoena penalty — still alive in Group A. Ethiopia\'s post-election conflict is live with US TPLF visa restrictions confirmed. Somaliland opened its first overseas embassy in Jerusalem. Senegal\'s IMF agreement window closes in 8 days. Ebola at 894 confirmed, 200+ dead, 12% contact tracing — worst-on-record trajectory. This is the most dangerous week in African sovereign risk since the start of the decade.',
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
    { time: '09:30:00', signal: 'Nigeria May 2026: 842 killed, 279 abducted, 156 violent incidents — Nextier database. Deaths up 90.1% vs May 2025. Incidents up 51.5%. Kidnappings up 19.7%. Worst month in years. Multi-vector: Borno, Lake Chad, NW banditry, SW abductions, Zamfara airstrikes. 2027 election cycle beginning to absorb political risk.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '09:15:00', signal: 'SA state complicity analysis (The Conversation / DefenceWeb): May 25 Union Buildings meeting with March and March legitimised vigilantes. 151 xenophobia incidents 2025, 22 in first 5 months 2026, 14 violent. "State\'s complicity with gangs and vigilantes threatening its ability to govern." National Action Plan "contains almost no plan." June 30: 8 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Kenya: Schools closing June 23/24. June 25 storming anniversary — 3 DAYS. Finance Bill June 30 — 8 days. Ruto defusion: reparations 2,000 victims + PAYE offer. But bill still contains phone excise, crypto, digital economy taxes — identical 2024 profile. Kalonzo: "Ruto learnt nothing." Gen-Z mobilisation building. Critical week begins Wednesday.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:45:00', signal: 'Bafana draw 1-1 Czech Republic — Mokoena late penalty salvages point. Sithole and Zwane suspended (red cards vs Mexico). Group A still alive. SA World Cup campaign critical to GNU soft power during June 30 crisis window. Mokoena goal politically significant beyond football.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ethiopia: PP confirmed 438/501 seats — Abiy third term. US TPLF visa restrictions confirmed June 18. Hundreds of thousands displaced northern Ethiopia. Eritrea tensions. Pretoria Agreement collapsing. Post-election conflict current situation — not scenario. Horn compound risk at maximum.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Somaliland opens first overseas embassy — in Jerusalem. Regional diplomatic architecture shift. Implications: Somalia federal government furious, Israel diplomatic normalisation with Horn sub-states, US Trump administration context. Somaliland-Jerusalem relationship signals new geopolitical axis.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ebola: 894 confirmed, 200+ deaths. 12% contact tracing. $518m plan has <$100m secured. 4 weeks to fund or $1.5bn ask. Unchecked: $7.5bn. 20,000+ cases projected in 3 months. Africa CDC: Africa cannot rely on foreign partners for health. Worst-on-record trajectory confirmed. DRC ADF ramping violence in Ituri amid outbreak.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 22: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.18 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. Markets open Monday. ZAR structural strength persists — 10.13% YoY gain (rand strengthened). Watch ZAR and KES this week as June 25-30 deadline window opens.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 88, fiscal: 60, fx: 42, debt: 60, political: 96, external: 72 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 97, fiscal: 90, fx: 74, debt: 96, political: 99, external: 96 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 96, fiscal: 78, fx: 46, debt: 70, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 74, fiscal: 78, fx: 64, debt: 80, political: 70, external: 72 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
    { country: 'Somalia', flag: '🇸🇴', score: 98, fiscal: 88, fx: 82, debt: 78, political: 99, external: 90 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'MODERATE', ytd: '-3.40%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.18', change: '-10.13%', stress: 'LOW', ytd: '+10.13%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Kenya', flag: '🇰🇪', date: 'Finance Bill June 30 — June 25 In 3 Days', type: 'Political Crisis', risk: 'CRITICAL', note: 'June 25 anniversary — 3 days. Schools closing. Finance Bill June 30 — 8 days. Ruto defusion strategy being tested. Gen-Z mobilisation building. Identical 2024 calendar. Critical week begins Wednesday.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'June 30 — 8 Days — State Complicity Confirmed', type: 'Municipal Elections', risk: 'CRITICAL', note: 'State complicity with vigilantes confirmed by academic analysis. 151 xenophobia incidents 2025. Union Buildings meeting legitimised March and March. June 30: 8 days. Bafana drew 1-1.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 438/501 — Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions confirmed. Hundreds of thousands displaced. Eritrea tensions. Pretoria Agreement collapsing. War risk current situation.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Somaliland Jerusalem Embassy', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Somaliland opens first overseas embassy in Jerusalem. Somalia federal government furious. Ceasefire holding in Mogadishu. Al-Shabaab active.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension — Senate Vote Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed with 200+ votes. Senate vote pending. Mnangagwa assent if passed.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — Security Crisis Escalating', type: 'General Election', risk: 'CRITICAL', note: '842 killed May 2026. Deaths up 90.1%. 2027 election cycle beginning. Multi-vector security collapse accelerating.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'IMF Agreement Target June 30 — 8 Days', type: 'Debt Crisis', risk: 'HIGH', note: 'Sonko open to IMF talks. Diba targets June 30 agreement. Bonds rallied. Structural risk unchanged. 8-day window closing.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF AGREEMENT TARGET JUNE 30 — 8 DAYS', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Final 8 Days', risk: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
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
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-13.8%', signal: '842 DEAD MAY — DEATHS UP 90.1%', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+52', bond: '-2.6pts', fx: '+0.1%', signal: 'JUNE 25 IN 3 DAYS — JUNE 30 IN 8', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+42', bond: '-2.1pts', fx: '+10.1%', signal: 'STATE COMPLICITY CONFIRMED — JUNE 30 8D', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — US VISA SANCTIONS', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF AGREEMENT JUNE 30 — 8 DAYS', color: '#f5a623' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 894 — ADF ITURI VIOLENCE', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP ALIVE', color: '#00c48c' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'JNIM SECURITY COLLAPSE', color: '#ff3b3b' },
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
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
