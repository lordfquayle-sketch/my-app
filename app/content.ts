export const content = {
  riskIndex: '72',
  riskStatus: 'ELEVATED',

  // LIVE AFRICA RISK MONITOR
  riskMonitor: {
    updated: 'May 9, 2026 09:30 UTC',
    overallScore: 72,
    trend: 'WORSENING',
    drivers: ['FX Volatility', 'Debt Refinancing', 'Political Risk', 'Oil Price Shock'],
    regions: [
      { region: 'East Africa', score: 68, trend: '↑', color: '#f5a623' },
      { region: 'West Africa', score: 65, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 78, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 61, trend: '→', color: '#f5a623' },
    ]
  },

  // TOP SOVEREIGN ALERTS
  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'Anti-migrant diplomatic crisis — Ghana and Nigeria relations severely strained', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Large 2026 Eurobond refinancing — rollover risk elevated. Flood damage adding fiscal pressure.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'August 2026 elections — slow reform progress, social pressure mounting', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', alert: 'EGP at 53.55 — Middle East conflict keeping external pressure elevated', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Angola', flag: '🇦🇴', alert: 'Declining oil output + steep 2026 debt repayments — most exposed oil sovereign', severity: 'MEDIUM', color: '#f5a623' },
  ],

  // FEATURED MACRO SIGNAL
  featuredSignal: {
    title: 'AFRICA DEBT CLOCK IS TICKING',
    body: '40% of African countries are at debt distress risk. Interest payments absorbing 15% of public revenue. G20 Common Framework has resolved only 7% of distressed debt. AfDB raises Africa growth to 4.3% — but growth is not outrunning debt accumulation for most frontier sovereigns.',
    tag: 'WEEK 19 SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 9, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '995', fxPressure: 'MODERATE', liquidity: 'WATCH' },
  ],

  whatMattersNow: [
    { title: 'AFRICA GROWTH AT 4.3% IN 2026 — DIVERGENCE IS THE STORY', body: 'African Development Bank projects Africa growing 4.3% in 2026. East Africa leads at 5.8%. West Africa slows to 4.4%. Southern Africa lags at 2.0%. Weaker USD aiding disinflation.', icon: '📈' },
    { title: 'NIGERIA GDP UP 30% — CURRENCY ADJUSTMENT IS THE DRIVER', body: 'Nigeria GDP rises to $377bn — reflects currency rebase not structural growth. Dangote 20,000MW power plan and refinery IPO are medium-term catalysts.', icon: '🇳🇬' },
    { title: 'SA LOCAL ELECTIONS — FIRST TEST OF GNU SINCE 2024', body: 'South Africa local elections offer first real test of national sentiment since GNU formation. Zambia polls in August. Political risk rising across continent.', icon: '🗳️' },
    { title: '40% OF AFRICAN COUNTRIES AT DEBT DISTRESS RISK', body: 'UN report: Africa debt-to-GDP at 63%. Interest payments absorbing 15% of public revenue. G20 Common Framework has resolved only 7% of distressed debt.', icon: '⚠️' },
  ],

  insight1: {
    title: 'AFRICA GROWTH STORY IS REAL — BUT THE DEBT STORY IS ALSO REAL',
    body: 'AfDB projects 4.3% growth in 2026 — above global average. But UN data shows 40% of African countries at debt distress risk, with interest payments absorbing 15% of public revenue. Growth is happening. So is debt stress.',
    conclusion: 'GROWTH WITHOUT DEBT RELIEF IS A TREADMILL. WATCH REFINANCING COSTS IN H2 2026.',
  },

  insight2: {
    title: 'NIGERIA 30% GDP JUMP IS A STATISTICAL EVENT — NOT A STRUCTURAL ONE',
    body: 'Nigeria GDP rising to $377bn reflects naira rebase after FX unification — not fundamental transformation. Oil dependency persists. Food inflation elevated. FX volatility structural.',
    conclusion: 'DO NOT CONFUSE CURRENCY ADJUSTMENT WITH ECONOMIC TRANSFORMATION.',
  },

  brief: {
    week: '19',
    title: 'WEEK 19 CLOSE: AFRICA GROWING — BUT DEBT CLOCK IS TICKING',
    body: 'AfDB raises Africa growth to 4.3% for 2026. Weaker USD aiding disinflation. But 40% of African countries remain at debt distress risk. Nigeria and Ghana outperforming. Kenya, Zambia and Angola face sharpest structural pressures.',
  },

  fxRates: {
    NGN: '1356.66',
    GHS: '11.27',
    KES: '129.10',
    EGP: '53.55',
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

  // SOVEREIGN HEAT MAP
  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 58, fiscal: 62, fx: 55, debt: 60, political: 45, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 52, fiscal: 55, fx: 48, debt: 58, political: 40, external: 60 },
    { country: 'Kenya', flag: '🇰🇪', score: 72, fiscal: 75, fx: 65, debt: 82, political: 68, external: 70 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 68, fiscal: 65, fx: 72, debt: 60, political: 82, external: 58 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 72, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 68, debt: 78, political: 55, external: 77 },
    { country: 'Ivory Coast', flag: '🇨🇮', score: 48, fiscal: 50, fx: 45, debt: 52, political: 42, external: 51 },
  ],

  // CURRENCY STRESS DASHBOARD
  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,356.66', change: '-14.70%', stress: 'MODERATE', ytd: '-4.8%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.27', change: '+8.20%', stress: 'LOW', ytd: '+3.2%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.2%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '53.55', change: '+5.66%', stress: 'HIGH', ytd: '-8.4%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '+1.20%', stress: 'MODERATE', ytd: '+0.8%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.5%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.2%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.8%', color: '#ff3b3b' },
  ],

  // ELECTION TRACKER
  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 2026', type: 'General Election', risk: 'HIGH', note: 'Slow economic reform. Social pressure mounting. Incumbent under pressure.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'May 2026', type: 'Local Elections', risk: 'HIGH', note: 'First test of GNU since 2024. Diplomatic crisis adding political complexity.', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Preparing. Oil revenue decline a key fiscal and political risk.', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Preparing. Debt rollover risk and protest history create political volatility.', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Early preparations underway. Reform momentum vs food inflation tension.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: 'Dec 2028', type: 'General Election', risk: 'LOW', note: 'Mahama in power. Post-restructuring recovery providing political stability.', color: '#00c48c' },
  ],

  // DEBT MATURITY CALENDAR
  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Bilateral', maturity: 'Q3-Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: '$0.5bn', instrument: 'Restructured', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
  ],

  // COMMODITY EXPOSURE MATRIX
  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', trend: '↑', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  signals: [
    { time: '09:30:00', signal: 'AfDB raises Africa 2026 growth to 4.3% — East Africa leads at 5.8%. Weaker USD aiding disinflation. West Africa slows to 4.4%.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Nigeria GDP rises 30% to $377bn — reflects naira rebase not structural growth. Oil dependency and food inflation remain key risks.', detail: 'MEDIUM', type: 'WARNING', tag: 'MACRO RISK', country: 'NGN' },
    { time: '09:00:00', signal: '40% of African countries at debt distress risk — UN report. Interest payments absorbing 15% of public revenue.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'AFRICA' },
    { time: '08:45:00', signal: 'South Africa local elections approaching — first test of GNU since 2024. ZAR watching political risk closely.', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ghana GDP at $114.71bn — up 3.2%. Gold, oil and cocoa exports supporting recovery. IMF-backed reforms stabilising growth.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'GHS' },
    { time: '08:15:00', signal: 'Kenya GDP at $136.46bn — up 7.9%. But debt rollover risk remains elevated for 2026. Flood damage adding fiscal pressure.', detail: 'MEDIUM', type: 'WARNING', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '08:00:00', signal: 'NGN at 1,356.66 — down 15.54% vs USD over past year. Weekly range 1,357-1,373. CBN FX reforms holding.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '07:45:00', signal: 'Zambia polls in August — slow economic reform, social pressure mounting as macro stabilisation not translating to livelihoods.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '-0.4%', signal: 'ELECTION RISK', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'KENYA', cds: 182, delta: '+18', bond: '-0.9pts', fx: '-0.1%', signal: 'ROLLOVER RISK', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-5', bond: '+0.3pts', fx: '+0.1%', signal: 'REBASE STORY', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'RECOVERY INTACT', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 395, delta: '+2', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
