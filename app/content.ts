export const content = {
  riskIndex: '72',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 12, 2026 09:00 UTC',
    overallScore: 72,
    trend: 'WORSENING',
    drivers: ['Debt Refinancing Cliff', 'Political Risk', 'US-Africa Relations', 'FX Volatility'],
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
    { country: 'South Africa', flag: '🇿🇦', alert: 'Local election results awaited — GNU stability under scrutiny. US excluded SA from G20 meeting. 30% tariff on SA goods.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Large 2026 Eurobond payments — rollover risk elevated. William Ruto presidency described as vulnerable.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'August 2026 elections — slow reform, social pressure mounting. Only 3hrs power per day in some areas.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'US air strikes on IS-linked groups in northern Nigeria in Dec 2025. Nigeria entering election mode for 2027.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'US-AFRICA RELATIONS ARE THE MOST UNDERPRICED MACRO RISK OF 2026',
    body: 'The US excluded South Africa from its G20 meeting and applied a 30% tariff on SA goods. US-Nigeria relations strained after air strikes on IS-linked groups. US-Africa travel down 46% for Nigeria. Global aid budgets to Sub-Saharan Africa fell 16-28% in 2024. China is filling the vacuum with tariff-free treatment for 53 African nations. The geopolitical trade is clear — but markets are not pricing the full transition risk.',
    tag: 'WEEK 20 FEATURED SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 12, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'US-AFRICA RELATIONS DETERIORATING RAPIDLY', body: 'US excluded SA from G20 meeting. 30% tariff on SA goods. US aid to SSA fell 16-28%. US-Nigeria relations strained after air strikes. China filling vacuum with tariff-free access for 53 nations. The geopolitical reset is accelerating.', icon: '🌐' },
    { title: 'SOUTH AFRICA LOCAL ELECTION RESULTS', body: 'Yesterday\'s local elections are the first real test of the Government of National Unity since 2024. Results will indicate whether electoral realignment reflects a deeper shift. ZAR and SA bonds watching for GNU stability signal.', icon: '🗳️' },
    { title: 'ETHIOPIA GENERAL ELECTIONS IN JUNE', body: 'Ethiopia holds its first general election since 2021 in June — the first since the Tigray conflict ended. Some insecurity remains. Abiy Ahmed near-certain to win but legitimacy of process is being watched regionally.', icon: '🇪🇹' },
    { title: 'AFRICA OUTPACES ASIA IN GROWTH FOR FIRST TIME', body: 'Africa growth at 4.4% outpaces Asia at 4.1% in 2026 — first time in recent history. AfDB projects 4.2%. Driven by commodities, especially metals. But 12 countries still face inflation above 10%.', icon: '📈' },
  ],

  insight1: {
    title: 'THE US-AFRICA GEOPOLITICAL RESET IS THE MACRO STORY MARKETS ARE SLEEPING ON',
    body: 'South Africa excluded from the US G20 meeting. A 30% tariff on SA goods. US aid to SSA fell 16-28% in 2024. US air strikes in northern Nigeria. US-Africa travel down sharply. Meanwhile China has extended tariff-free treatment to 53 African nations. The geopolitical centre of gravity for Africa is shifting from Washington to Beijing — and the macro consequences for FX, credit and capital flows have not been priced.',
    conclusion: 'THE CHINA-AFRICA TRADE DEEPENING IS ACCELERATING AT PRECISELY THE MOMENT WASHINGTON IS STEPPING BACK. THIS IS A STRUCTURAL SHIFT, NOT A CYCLICAL ONE.',
  },

  insight2: {
    title: 'KENYA\'S WILLIAM RUTO IS THE MOST VULNERABLE SITTING PRESIDENT IN EAST AFRICA',
    body: 'The Africa Report describes Ruto\'s presidency as "vulnerable." Gen-Z protests have reshaped the political landscape. Large Eurobond payments in 2026 constrain fiscal space. CBK hawkish stance buying time but not solving structural problem. Ethiopia general elections in June add regional complexity. The path to 2027 elections is the narrowest of any major East African leader.',
    conclusion: 'KENYA POLITICAL AND CREDIT RISK ARE UNDERPRICED. WATCH KES AND KENYA BONDS THROUGH H2 2026.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20: US-AFRICA RESET, SA ELECTION RESULTS AND ETHIOPIA JUNE POLLS',
    body: 'Three macro themes define Week 20. First: the US-Africa geopolitical reset is accelerating — SA excluded from G20, 30% tariffs, aid cuts of 16-28%, air strikes in Nigeria — while China fills the vacuum with tariff-free access for 53 nations. Second: South Africa local election results are being counted — the first real test of the GNU since 2024. Third: Ethiopia heads to general elections in June, the first since 2021, as Zambia prepares for August polls. The political risk calendar for Africa in H2 2026 is the most loaded in a decade.',
  },

  fxRates: {
    NGN: '1356.83',
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
    { time: '09:30:00', signal: 'US excluded South Africa from G20 meeting — 30% tariff on SA goods, US aid to SSA fell 16-28%. China fills vacuum with 53-nation tariff-free deal', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:15:00', signal: 'South Africa local election results awaited — GNU stability under scrutiny. First real test since 2024 coalition formation', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Senegal sovereign default risk elevated — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit at 14% of GDP', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:45:00', signal: 'Ethiopia general elections scheduled for June — first since 2021 Tigray conflict. Abiy Ahmed near-certain to win but legitimacy being watched', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'ETB' },
    { time: '08:30:00', signal: 'Nigeria NGN at 1,356.83 — down 15.19% vs USD over past year. US air strikes on IS-linked groups in northern Nigeria adding geopolitical complexity', detail: 'MEDIUM', type: 'WARNING', tag: 'GEOPOLITICAL', country: 'NGN' },
    { time: '08:15:00', signal: 'Africa growth at 4.4% outpaces Asia at 4.1% in 2026 — first time in recent history. But 12 countries face inflation above 10%', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Kenya Ruto presidency described as vulnerable — Gen-Z movement reshaping politics ahead of large 2026 debt payments', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '07:45:00', signal: 'Zambia August polls approaching — Hichilema under pressure as slow reform fails to translate to livelihoods. 3hrs power/day in some areas', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 60, fiscal: 62, fx: 55, debt: 60, political: 55, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 52, fiscal: 55, fx: 48, debt: 58, political: 40, external: 60 },
    { country: 'Kenya', flag: '🇰🇪', score: 74, fiscal: 75, fx: 65, debt: 82, political: 75, external: 70 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 70, fiscal: 65, fx: 72, debt: 60, political: 85, external: 68 },
    { country: 'Senegal', flag: '🇸🇳', score: 85, fiscal: 90, fx: 80, debt: 88, political: 75, external: 82 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 72, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 68, debt: 78, political: 55, external: 77 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,356.83', change: '-15.19%', stress: 'MODERATE', ytd: '-6.11%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.27', change: '+26.50%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.76', change: '+5.66%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '+1.20%', stress: 'MODERATE', ytd: '+0.80%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: 'May 11, 2026', type: 'Local Elections — Results Pending', risk: 'HIGH', note: 'GNU stability under scrutiny. US-SA relations severely strained. ZAR watching for coalition signal.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'First since 2021 Tigray conflict. Abiy Ahmed near-certain to win. Regional legitimacy being watched.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day in some areas. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Preparing. Oil revenue decline a key fiscal and political risk ahead of polls.', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Ruto presidency described as vulnerable. Gen-Z movement reshaping political landscape.', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Nigeria entering election mode. Reform momentum vs food inflation will define electoral politics.', color: '#f5a623' },
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
    { country: 'SOUTH AFRICA', cds: 192, delta: '+18', bond: '-0.9pts', fx: '-0.5%', signal: 'ELECTION + US RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+22', bond: '-1.1pts', fx: '-0.2%', signal: 'DEBT ROLLOVER', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'ZAMBIA', cds: 995, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-5', bond: '+0.3pts', fx: '+0.1%', signal: 'REFORM HOLDING', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'RECOVERY', color: '#00c48c' },
  ],
}
