export const content = {
  riskIndex: '72',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 11, 2026 09:00 UTC',
    overallScore: 72,
    trend: 'WORSENING',
    drivers: ['Debt Refinancing Cliff', 'Political Risk', 'Oil Price Shock', 'FX Volatility'],
    regions: [
      { region: 'East Africa', score: 68, trend: '↑', color: '#f5a623' },
      { region: 'West Africa', score: 65, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 78, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 61, trend: '→', color: '#f5a623' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk rising — $8bn hidden liabilities, IMF programme suspended, deficit at 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Large 2026 Eurobond payments — rollover risk elevated. Gen-Z protests reshaping political landscape.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Local elections today — first real test of GNU since 2024. Diplomatic crisis with Nigeria and Ghana unresolved.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'August 2026 elections — slow reform, social pressure mounting. Only 3hrs power per day in some areas.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', alert: 'Declining oil output + steep 2026 debt repayments — most exposed oil-dependent sovereign', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'SENEGAL IS NOW THE HIGHEST SOVEREIGN DEFAULT RISK IN WEST AFRICA',
    body: 'The Court of Auditors has uncovered $8bn in hidden liabilities from the previous Sall administration. The IMF has suspended a $1.8bn lending package. The budget deficit stands at 14% of GDP and public debt exceeds 130% of GDP. PM Sonko has rejected IMF restructuring, citing fiscal sovereignty. Without a U-turn, rapid debt restructuring and renewed IMF lending, sovereign default appears increasingly likely.',
    tag: 'WEEK 20 FEATURED SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 11, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Stable', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SENEGAL DEFAULT RISK — THE HIDDEN LIABILITY CRISIS', body: 'Court of Auditors uncovers $8bn hidden liabilities. IMF suspends $1.8bn programme. Deficit at 14% of GDP. PM Sonko rejects restructuring. Sovereign default increasingly likely without policy reversal.', icon: '🚨' },
    { title: 'SOUTH AFRICA LOCAL ELECTIONS TODAY', body: 'First real test of the Government of National Unity since 2024. Results will signal whether electoral realignment reflects a deeper shift in voter behaviour. ZAR watching closely.', icon: '🗳️' },
    { title: 'DANGOTE MULTI-LISTING ARCHITECTURE', body: 'Cement listing targeting September London. Refinery IPO in June-July. Kenya investment vehicle on longer timeline. Dangote flew to Oslo to meet Norges Bank Investment Management CEO. Biggest African corporate story of 2026.', icon: '🏭' },
    { title: 'AFRICA OUTPACES ASIA IN 2026 GROWTH', body: 'For first time in recent history, Africa growth at 4.4% outpaces Asia at 4.1%. Driven by commodities — especially metals. Ghana cedi first annual gain vs dollar since 1994. Nigeria macro conditions improving after two painful years of reform.', icon: '📈' },
  ],

  insight1: {
    title: 'SENEGAL IS THE SOVEREIGN RISK STORY MARKETS ARE MISSING',
    body: 'While attention focuses on Kenya and Zambia, Senegal is quietly becoming the most acute default risk in West Africa. Hidden liabilities of $8bn, a suspended IMF programme, a 14% fiscal deficit and a PM who has publicly rejected restructuring — these are the ingredients of a debt crisis. The new Africa Credit Rating Agency launch in 2026 cannot come soon enough for Senegal.',
    conclusion: 'SENEGAL CREDIT IS MISPRICED. DEFAULT RISK IS NOT IN THE PRICE.',
  },

  insight2: {
    title: 'DANGOTE\'S MULTI-LISTING IS THE MOST SIGNIFICANT AFRICAN CAPITAL MARKETS EVENT OF THE DECADE',
    body: 'Cement targeting London in September. Refinery IPO in June-July. Kenya vehicle on longer timeline. Dangote is building a pan-African industrial conglomerate with global capital market access. The Oslo meeting with Norges Bank signals sovereign wealth fund interest. Abdul Samad Rabiu adding $8.88bn to wealth in four months on BUA Cement rally. African industrial capital is mobilising at scale.',
    conclusion: 'THE DANGOTE ARCHITECTURE IS A POSITION-SIZING EVENT FOR EVERY AFRICA-FOCUSED INVESTOR.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20: SENEGAL DEFAULT RISK, SA ELECTIONS AND THE DANGOTE MOMENT',
    body: 'Three stories define Week 20. First: Senegal is emerging as the highest acute default risk in West Africa — $8bn hidden liabilities, suspended IMF programme, 14% fiscal deficit, and a PM who has rejected restructuring. Second: South Africa local elections today offer the first real test of the GNU — results will shape ZAR and SA bond trajectory for the rest of 2026. Third: the Dangote multi-listing architecture — cement in London, refinery IPO, Kenya vehicle — represents the most significant African capital markets event of the decade. For the first time, African industrial capital is being mobilised at global scale from within the continent.',
  },

  fxRates: {
    NGN: '1360.55',
    GHS: '11.27',
    KES: '129.10',
    EGP: '52.76',
    XOF: '610.00',
    ZAR: '18.45',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3680.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Senegal sovereign default risk rising — $8bn hidden liabilities uncovered, IMF suspends $1.8bn programme, deficit at 14% of GDP', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '09:15:00', signal: 'South Africa local elections underway — first test of GNU since 2024. ZAR at 18.45, markets watching for GNU stability signal', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Dangote flies to Oslo — meets Norges Bank CEO to discuss pan-African industrial investment. Refinery IPO weeks away, cement London listing in September', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:45:00', signal: 'Africa outpaces Asia in 2026 growth — 4.4% vs 4.1%. First time in recent history. Ghana cedi first annual gain vs USD since 1994', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Nigeria NGN at 1,360 — naira down 15.19% vs USD over past year. Weekly range 1,357-1,373. CBN FX reforms holding', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:15:00', signal: 'Egypt EGP at 52.76 — weekly range 52.59-53.85. IMF programme providing support but Middle East conflict keeping external stress elevated', detail: 'MEDIUM', type: 'WARNING', tag: 'FX PRESSURE', country: 'EGP' },
    { time: '08:00:00', signal: 'Zambia polls in August — only 3hrs power per day in some areas. Slow reform momentum not translating to livelihoods. Hichilema under pressure', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '07:45:00', signal: 'Abdul Samad Rabiu adds $8.88bn to wealth in 4 months on BUA Cement 134% rally — but 2.31% free float limiting foreign investor access', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 58, fiscal: 62, fx: 55, debt: 60, political: 45, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 52, fiscal: 55, fx: 48, debt: 58, political: 40, external: 60 },
    { country: 'Kenya', flag: '🇰🇪', score: 72, fiscal: 75, fx: 65, debt: 82, political: 68, external: 70 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 68, fiscal: 65, fx: 72, debt: 60, political: 82, external: 58 },
    { country: 'Senegal', flag: '🇸🇳', score: 85, fiscal: 90, fx: 80, debt: 88, political: 75, external: 82 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 72, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 68, debt: 78, political: 55, external: 77 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.55', change: '-15.19%', stress: 'MODERATE', ytd: '-5.85%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.27', change: '+26.50%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.76', change: '+5.66%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '+1.20%', stress: 'MODERATE', ytd: '+0.80%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: 'May 11, 2026', type: 'Local Elections TODAY', risk: 'HIGH', note: 'First test of GNU since 2024. Diplomatic crisis with Nigeria and Ghana adds complexity. ZAR watching.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 2026', type: 'General Election', risk: 'HIGH', note: 'Slow economic reform. 3hrs power/day in some areas. Social pressure mounting on Hichilema.', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Preparing. Oil revenue decline a key fiscal and political risk ahead of polls.', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Gen-Z movement reshaping political landscape. Debt rollover risk creating fiscal constraints.', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Early preparations. Reform momentum vs food inflation tension will define electoral politics.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: 'Dec 2028', type: 'General Election', risk: 'LOW', note: 'Mahama in power. Post-restructuring recovery providing political stability.', color: '#00c48c' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'SUSPENDED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Bilateral', maturity: 'Q3-Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', trend: '↑', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+45', bond: '-2.1pts', fx: '-1.8%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '-0.4%', signal: 'ELECTION DAY', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+20', bond: '-1.0pts', fx: '-0.2%', signal: 'DEBT ROLLOVER', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'ZAMBIA', cds: 995, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-5', bond: '+0.3pts', fx: '+0.1%', signal: 'REFORM HOLD', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'RECOVERY', color: '#00c48c' },
  ],
}
