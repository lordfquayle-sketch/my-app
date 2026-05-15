export const content = {
  riskIndex: '74',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 15, 2026 09:00 UTC',
    overallScore: 74,
    trend: 'WORSENING',
    drivers: ['SA SWIFT Ban Risk', 'Nigeria Rate Cut Signal', 'World Bank Growth Downgrade', 'Debt Refinancing Cliff'],
    regions: [
      { region: 'East Africa', score: 72, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 68, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 65, trend: '↑', color: '#f5a623' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'SA government evaluating risk of SWIFT ban — most alarming development in SA sovereign risk in years. US tariffs, expelled ambassador, stopped aid compounding pressure.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria to join SSA rate-cutting cycle — CBN easing approaching as reforms stabilise balance of payments. But civilian airstrike crisis and food inflation remain political risks.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Capital Economics: path to avoiding default remains narrow. Protests erupted again near Africa Forward Summit. Debt rollover pressure intensifying.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', alert: 'Oil sector struggling — lower prices, fragile fiscal position, steep 2026 debt repayments. Most exposed oil-dependent sovereign.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SOUTH AFRICA EVALUATING SWIFT BAN RISK — THE MOST ALARMING SOVEREIGN SIGNAL OF THE WEEK',
    body: 'Capital Economics reports that South Africa\'s government is evaluating the risk of being banned from the SWIFT messaging system. This would be an unprecedented sovereign isolation event for a G20 member and the continent\'s most sophisticated financial market. Combined with US 30% tariffs, expelled ambassador, stopped aid and the xenophobic crisis driving African evacuations — the SA sovereign risk premium is being rebuilt in real time. ZAR and SA bonds are not fully pricing this.',
    tag: 'WEEK 20 CLOSING SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 15, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '420', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SA SWIFT BAN RISK — UNPRECEDENTED SOVEREIGN ISOLATION SIGNAL', body: 'South Africa\'s government is evaluating the risk of being banned from SWIFT. This would isolate SA from the global financial system and trigger a sovereign crisis. Combined with US tariffs, expelled ambassador and xenophobic crisis — SA risk premium is being rebuilt.', icon: '🚨' },
    { title: 'NIGERIA JOINING SSA RATE-CUTTING CYCLE', body: 'Capital Economics: Nigeria will soon join the SSA rate-cutting club. CBN monetary policy success in reforms and stronger balance of payments position. But budget deficit reforms have fallen short. Rate cuts approaching as inflation declines.', icon: '📉' },
    { title: 'WORLD BANK DOWNGRADES AFRICA GROWTH — INFLATION RISING', body: 'World Bank revises SSA growth down 0.3pp to 4.1% for 2026. Median inflation rising to 4.8% — up from 3.7% in 2025. Middle East conflict spillovers driving upside inflation pressure. High debt service crowding out development spending.', icon: '📊' },
    { title: 'ANGOLA OIL SECTOR STRUGGLING — FISCAL STRESS BUILDING', body: 'Angola\'s oil sector struggling with lower prices and fragile fiscal position despite multinational investment announcements. OPEC+ output increase in June adds downside price risk. Steep 2026 debt repayments against declining output is the most dangerous combination.', icon: '🛢️' },
  ],

  insight1: {
    title: 'SOUTH AFRICA SWIFT BAN RISK CHANGES THE SOVEREIGN RISK CALCULUS ENTIRELY',
    body: 'A SWIFT ban on South Africa would be without precedent for a G20 member. It would cut SA banks off from international dollar clearing, freeze cross-border payments, and trigger capital flight at a scale the rand and SA bonds cannot absorb. The fact that SA\'s government is evaluating this risk — rather than dismissing it — signals the severity of the US-SA diplomatic rupture. This is not priced. ZAR at 18.50 and SA 10-year yields are not reflecting a SWIFT ban scenario.',
    conclusion: 'SA SWIFT BAN RISK IS THE TAIL RISK NOBODY IS PRICING. IT SHOULD BE IN EVERY AFRICA CREDIT SCENARIO ANALYSIS.',
  },

  insight2: {
    title: 'NIGERIA RATE CUTS + DANGOTE IPO = THE MOST INTERESTING AFRICA INVESTMENT SETUP OF 2026',
    body: 'Nigeria is approaching a CBN rate-cutting cycle as inflation declines and the balance of payments strengthens. Simultaneously, the Dangote refinery IPO is weeks away and the cement London listing targets September. Rate cuts reduce borrowing costs and boost equity valuations. The IPO unlocks global capital for Africa\'s largest industrial group. These two catalysts arriving together create the most compelling Nigeria investment setup since the Tinubu reform shock of 2023.',
    conclusion: 'NIGERIA RATE CUT + DANGOTE IPO IS A POSITION-SIZING EVENT. THE SETUP IS BUILDING.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20 FINAL: SA SWIFT RISK, NIGERIA RATE CUTS AND WORLD BANK GROWTH DOWNGRADE',
    body: 'Week 20 closes with three defining signals. First: South Africa is evaluating SWIFT ban risk — an unprecedented sovereign isolation scenario that is not priced in ZAR or SA bonds. Second: Nigeria is approaching a CBN rate-cutting cycle as reforms stabilise the balance of payments — arriving simultaneously with the Dangote IPO, creating the most compelling Nigeria investment setup since 2023. Third: the World Bank has revised SSA growth down 0.3pp to 4.1%, with inflation rising to 4.8% due to Middle East spillovers. The divergence between Africa\'s growth leaders and its debt-stressed sovereigns has never been wider. Country selection is everything.',
  },

  fxRates: {
    NGN: '1369.17',
    GHS: '11.36',
    KES: '129.10',
    EGP: '52.76',
    XOF: '610.00',
    ZAR: '18.50',
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
    { time: '09:30:00', signal: 'South Africa evaluating SWIFT ban risk — Capital Economics flags unprecedented sovereign isolation scenario. ZAR and SA bonds not pricing tail risk.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'ZAR' },
    { time: '09:15:00', signal: 'Nigeria to join SSA rate-cutting cycle — CBN monetary reforms stabilising balance of payments. Dangote IPO weeks away. Rate cut + IPO = most compelling Nigeria setup since 2023.', detail: 'MEDIUM', type: 'INFO', tag: 'POLICY SIGNAL', country: 'NGN' },
    { time: '09:00:00', signal: 'World Bank downgrades SSA growth to 4.1% for 2026 — down 0.3pp. Inflation rising to 4.8%. Middle East conflict spillovers driving upside price pressure across continent.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Angola oil sector struggling — lower prices, fragile fiscal position, steep 2026 debt repayments. Multinational investment announcements not yet translating to output recovery.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'AOA' },
    { time: '08:30:00', signal: 'Kenya path to avoiding default remains narrow — Capital Economics. Protests near Africa Forward Summit. Debt rollover pressure intensifying through H2 2026.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '08:15:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Without policy reversal, default increasingly likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:00:00', signal: 'NGN at 1,369.17 — GHS at 11.36, strongest African currency story of 2026. Cedi first annual gain vs USD since 1994. Post-restructuring recovery intact.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '07:45:00', signal: 'AfDB: Africa GDP growth 4.3% in 2026, 4.5% in 2027. 12 of 20 fastest-growing economies globally are African. FDI rebounded 75% to $97bn in 2024.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 65, fx: 58, debt: 60, political: 72, external: 58 },
    { country: 'Ghana', flag: '🇬🇭', score: 50, fiscal: 52, fx: 45, debt: 55, political: 40, external: 58 },
    { country: 'Kenya', flag: '🇰🇪', score: 75, fiscal: 75, fx: 65, debt: 85, political: 75, external: 72 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 65, fx: 75, debt: 62, political: 92, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 75, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 72, fiscal: 74, fx: 68, debt: 80, political: 55, external: 80 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,369.17', change: '-14.35%', stress: 'MODERATE', ytd: '-5.26%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.76', change: '+5.66%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.50', change: '+1.50%', stress: 'ELEVATED', ytd: '+1.20%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'May 16, 2026', type: 'Opposition Protest', risk: 'HIGH', note: 'Somali opposition protest in Mogadishu over president\'s term. Security risk elevated in capital.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'First since 2021 Tigray conflict. Abiy Ahmed near-certain to win but legitimacy being watched.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'September 2026', type: 'Parliamentary Elections', risk: 'LOW', note: 'Crown Prince Moulay El Hassan elevated in Royal Armed Forces. Succession preparation underway.', color: '#00c48c' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Civilian airstrike crisis complicating reform narrative. Opposition building. Path narrowing.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ruto presidency vulnerable. Default risk narrow. Gen-Z movement reshaping political landscape.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'SUSPENDED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Bilateral', maturity: 'Q3-Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.2pts', fx: '-0.6%', signal: 'SWIFT BAN RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+28', bond: '-1.4pts', fx: '-0.2%', signal: 'DEFAULT PATH NARROW', color: '#ff3b3b' },
    { country: 'ANGOLA', cds: 560, delta: '+18', bond: '-0.9pts', fx: '-0.5%', signal: 'OIL + DEBT STRESS', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+12', bond: '-0.6pts', fx: '-0.4%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'NIGERIA', cds: 420, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'RATE CUT + IPO', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-10', bond: '+0.5pts', fx: '+0.3%', signal: 'RECOVERY LEADER', color: '#00c48c' },
  ],
}
