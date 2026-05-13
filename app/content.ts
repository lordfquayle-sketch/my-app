export const content = {
  riskIndex: '73',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 13, 2026 09:00 UTC',
    overallScore: 73,
    trend: 'WORSENING',
    drivers: ['US-Africa Relations', 'Debt Refinancing Cliff', 'Political Risk Calendar', 'Sahel Instability'],
    regions: [
      { region: 'East Africa', score: 70, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 65, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 79, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 63, trend: '↑', color: '#f5a623' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Local election results being counted — GNU stability under scrutiny. US 30% tariff, expelled ambassador, stopped aid.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Eurobond rollover risk elevated — Ruto presidency described as vulnerable. Gen-Z movement reshaping political landscape.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'August 13 elections approaching — slow reform, social pressure mounting. Hichilema under significant political pressure.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria entering 2027 election mode — NGN at 1,370, weakening. Reform momentum being tested by food inflation.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'AGOA RENEWAL IS THE TRADE LIFELINE AFRICA CANNOT AFFORD TO LOSE',
    body: 'The US House has moved to resurrect AGOA for one year as Trump demands a say in its terms. The Africa Growth and Opportunity Act is the primary trade architecture connecting African exporters to the US market. Its expiry or weakening would compound the already deteriorating US-Africa economic relationship — 30% tariffs on SA goods, stopped aid, expelled ambassador, US-Africa travel down sharply. African trade ministers are watching Washington closely.',
    tag: 'WEEK 20 FEATURED SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'May 13, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'AGOA RENEWAL — AFRICA\'S US TRADE LIFELINE AT RISK', body: 'US House moves to resurrect AGOA for one year as Trump demands conditions. Africa Growth and Opportunity Act is the primary US-Africa trade architecture. Its weakening compounds 30% SA tariffs, stopped aid and expelled ambassador.', icon: '🤝' },
    { title: 'ZAMBIA POLLS AUGUST 13 — HICHILEMA UNDER PRESSURE', body: 'Zambia heads to polls August 13 against backdrop of slow economic reform. Social pressure mounting as macro stabilisation fails to translate to livelihoods. Only 3hrs power per day in some areas. Opposition consolidating.', icon: '🗳️' },
    { title: 'SAHEL INSTABILITY SPREADING — MALI CAPITAL BLOCKADE', body: 'Al-Qaeda groups have imposed a partial blockade on Mali\'s capital since September 2025. Russian mercenary groups proving ineffective. Nigeria requested French security support in December. Sahel security vacuum widening.', icon: '⚔️' },
    { title: 'GULF STATES FILLING WESTERN VOID IN AFRICA', body: 'UAE, Saudi Arabia and Qatar expanding investments in logistics, agriculture and renewables. Djibouti: $12.7bn Saudi refinery. EU repositioning via Global Gateway. Africa summits expected with France, Italy, Turkey and Russia in 2026.', icon: '🏗️' },
  ],

  insight1: {
    title: 'AGOA IS THE MOST IMPORTANT US-AFRICA POLICY DECISION OF 2026',
    body: 'The Africa Growth and Opportunity Act connects African exporters to the US market with preferential access. Its renewal for only one year — with Trump demanding conditions — signals a transactional shift in US-Africa trade policy. Combined with 30% tariffs on SA goods, stopped aid, and a retreating diplomatic presence, the cumulative effect on African trade and capital flows is significant and underpriced by markets.',
    conclusion: 'WATCH AGOA TERMS CLOSELY. THE CONDITIONS TRUMP DEMANDS WILL DEFINE US-AFRICA TRADE FOR THE NEXT DECADE.',
  },

  insight2: {
    title: 'THE SAHEL SECURITY VACUUM IS AFRICA\'S MOST UNDERREPORTED MACRO RISK',
    body: 'Mali\'s capital under partial al-Qaeda blockade since September 2025. Russian mercenaries proving ineffective. Nigeria requesting French support in December. France withdrawing from West Africa. The security vacuum in the Sahel is creating spillover risks for West African sovereigns — trade disruption, refugee flows and fiscal pressure from security spending are not in credit spreads.',
    conclusion: 'SAHEL INSTABILITY IS A MACRO RISK TRANSMISSION CHANNEL. IT WILL SHOW UP IN WEST AFRICAN CREDIT BEFORE MARKETS PRICE IT.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20: AGOA, SAHEL SECURITY AND THE GULF STATES FILLING THE WESTERN VOID',
    body: 'Three structural shifts define the macro landscape this week. First: AGOA renewal for one year with Trump conditions signals a transactional reset in US-Africa trade — combined with 30% SA tariffs and stopped aid, the cumulative effect is significant. Second: the Sahel security vacuum is widening — Mali blockade, Russian mercenary failure, French withdrawal — with spillover risks for West African sovereigns that are not in credit spreads. Third: Gulf states — UAE, Saudi Arabia, Qatar — are systematically filling the void left by Western retreat, reshaping the financing architecture for African infrastructure and sovereign borrowing. The geopolitical map of Africa is being redrawn in real time.',
  },

  fxRates: {
    NGN: '1370.12',
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
    { time: '09:30:00', signal: 'US House moves to resurrect AGOA for one year — Trump demands conditions on Africa trade. SA 30% tariff, stopped aid, expelled ambassador compounding pressure', detail: 'HIGH', type: 'ALERT', tag: 'TRADE SIGNAL', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Nigeria NGN weakens to 1,370.12 — naira down from 1,356 last week. Food inflation pressuring CBN reform narrative ahead of 2027 elections', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'NGN' },
    { time: '09:00:00', signal: 'Zambia August 13 polls — Hichilema under pressure. Slow reform, 3hrs power/day, social pressure mounting. Opposition consolidating ahead of vote', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '08:45:00', signal: 'Mali capital under partial al-Qaeda blockade since September 2025 — Russian mercenaries ineffective. Nigeria requests French security support in December', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'XOF' },
    { time: '08:30:00', signal: 'Gulf states filling Western void — UAE, Saudi, Qatar expanding Africa investments. Djibouti $12.7bn Saudi refinery. Africa summits with France, Italy, Turkey, Russia in 2026', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '08:15:00', signal: 'South Africa local election results being counted — GNU stability test. US-SA relations at lowest point in decades. ZAR at 18.45 watching for coalition signal', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'Senegal sovereign default risk critical — PM Sonko rejects IMF restructuring. Hidden liabilities $8bn. Deficit 14% GDP. Default increasingly likely without policy reversal', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ethiopia June general elections — first since 2021 Tigray conflict. Abiy Ahmed near-certain to win but legitimacy of process being watched regionally', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'ETB' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 62, fx: 60, debt: 60, political: 58, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 52, fiscal: 55, fx: 48, debt: 58, political: 40, external: 60 },
    { country: 'Kenya', flag: '🇰🇪', score: 74, fiscal: 75, fx: 65, debt: 82, political: 75, external: 70 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 72, fiscal: 65, fx: 72, debt: 60, political: 88, external: 72 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 75, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 68, debt: 78, political: 55, external: 77 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.12', change: '-14.32%', stress: 'ELEVATED', ytd: '-6.11%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.27', change: '+26.50%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.76', change: '+5.66%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '+1.20%', stress: 'MODERATE', ytd: '+0.80%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: 'May 11, 2026', type: 'Local Elections — Results Counting', risk: 'HIGH', note: 'GNU stability under scrutiny. US-SA relations at lowest point in decades. Results shaping ZAR trajectory.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'First since 2021 Tigray conflict. Abiy Ahmed near-certain to win. Legitimacy of process being watched.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'September 2026', type: 'Parliamentary Elections', risk: 'LOW', note: 'Expected to proceed peacefully. Economic pressures and youth unemployment high on agenda.', color: '#00c48c' },
    { country: 'Angola', flag: '🇦🇴', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Preparing. Oil revenue decline a key fiscal and political risk ahead of polls.', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Ruto presidency described as vulnerable. Gen-Z movement reshaping political landscape.', color: '#f5a623' },
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
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+20', bond: '-1.0pts', fx: '-0.5%', signal: 'ELECTION + US RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+25', bond: '-1.2pts', fx: '-0.2%', signal: 'DEBT ROLLOVER', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+12', bond: '-0.6pts', fx: '-0.4%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '+8', bond: '-0.2pts', fx: '-0.3%', signal: 'NGN WEAKENING', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '-6', bond: '+0.3pts', fx: '+0.2%', signal: 'RECOVERY', color: '#00c48c' },
  ],
}
