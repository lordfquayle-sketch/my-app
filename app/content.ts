export const content = {
  riskIndex: '74',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 14, 2026 09:00 UTC',
    overallScore: 74,
    trend: 'WORSENING',
    drivers: ['SA Diplomatic Crisis Deepening', 'Nigeria Military Strikes', 'Sudan War Escalating', 'Nairobi Summit Signals'],
    regions: [
      { region: 'East Africa', score: 72, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 68, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 65, trend: '↑', color: '#f5a623' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'National disaster declared over severe weather. Ghana evacuating 300 citizens. Nigeria 130 repatriation requests. SA court blocks repeat asylum applications.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Over 100 civilians killed in Zamfara State military airstrike on Tumfa market. Amnesty International calls for investigation. Military denies civilian casualties.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', alert: 'UN warns Sudan war entering deadlier phase. Armed drones leading cause of civilian deaths. Conflict spreading across multiple regions.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'At least 11 arrested as police disperse protesters near Africa Forward Summit. Kisumu county flooding forces residents to flee.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'NIGERIA MILITARY STRIKES KILLING CIVILIANS — THE MACRO SIGNAL MARKETS ARE IGNORING',
    body: 'Over 100 civilians killed in a Nigerian military airstrike on Tumfa market in Zamfara State. A second strike in Niger State killed 13. Amnesty International is calling for an investigation. The military denies civilian casualties. This is happening as Nigeria prepares for 2027 elections, with food inflation already elevated and the NGN weakening. Military overreach killing civilians is a political risk transmission channel — it will show up in the reform narrative before markets price it.',
    tag: 'WEEK 20 FEATURED SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 14, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '425', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '195', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'NAIROBI AFRICA-FRANCE SUMMIT — MACRON DRAWS BACKLASH', body: 'Emmanuel Macron\'s debt-relief and Pan-Africanism comments at the Nairobi summit drew sharp criticism. Ruto called for win-win Africa-France partnership built on sovereign equality. 24 presidents, 5 prime ministers attended. UN Secretary-General Guterres highlighted Africa\'s leadership. The summit signals France\'s attempt to re-engage Africa after years of retreat.', icon: '🤝' },
    { title: 'NIGERIA CIVILIAN AIRSTRIKE — 100+ DEAD IN ZAMFARA', body: 'Nigerian military airstrike hit Tumfa market in Zamfara State killing 100+ civilians. A second strike in Niger State killed 13. Amnesty International calling for investigation. Military denies civilian casualties. Banditry and jihadist insurgency driving escalating military operations.', icon: '⚔️' },
    { title: 'SOUTH AFRICA DECLARES NATIONAL DISASTER OVER WEATHER', body: 'South Africa declares national disaster over severe weather as Western Cape floods kill three. Simultaneously managing xenophobic crisis with Ghana evacuating 300 citizens, Nigeria 130 repatriation requests. Malawi receiving mass returnees. SA court blocks repeat asylum applications.', icon: '🌊' },
    { title: 'SUDAN WAR ENTERING DEADLIER PHASE — UN WARNING', body: 'UN warns Sudan war entering deadlier phase. Armed drones now leading cause of civilian deaths. Attacks spreading across multiple regions. Chad airstrikes kill dozens of Nigerians near the border. Sahel-Sudan security corridor deteriorating rapidly.', icon: '🚨' },
  ],

  insight1: {
    title: 'NIGERIA\'S CIVILIAN AIRSTRIKE CRISIS IS A 2027 ELECTION RISK EVENT',
    body: 'The Zamfara market strike killing 100+ civilians and the Niger State strike killing 13 are not just humanitarian crises — they are political risk transmission channels. Nigeria is 18 months from a general election. Food inflation is elevated. The NGN is weakening. Military overreach killing civilians in the North — the region most critical to any presidential coalition — will feed into opposition narratives and complicate Tinubu\'s reform story. Amnesty International\'s call for investigation internationalises the risk.',
    conclusion: 'NIGERIA POLITICAL RISK PREMIUM SHOULD WIDEN. THE 2027 ELECTION PATH IS BECOMING MORE COMPLEX.',
  },

  insight2: {
    title: 'THE NAIROBI SUMMIT IS FRANCE\'S LAST SERIOUS ATTEMPT TO STAY RELEVANT IN AFRICA',
    body: 'Macron\'s Africa Forward Summit in Nairobi — 24 presidents, 5 prime ministers, UN Secretary-General — is France\'s most ambitious Africa re-engagement attempt since military withdrawals from Mali, Burkina Faso and Niger. But Ruto\'s framing — sovereign equality, not aid or charity — signals that African leaders are redefining the terms. Macron\'s debt-relief comments drew backlash. The summit is a signal, not a solution. France\'s structural retreat from Francophone Africa continues regardless.',
    conclusion: 'FRANCE IS REPOSITIONING BUT NOT REVERSING ITS AFRICA RETREAT. THE GEOPOLITICAL VACUUM REMAINS REAL.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20 CLOSE: NIGERIA AIRSTRIKES, SA CRISIS AND THE NAIROBI SUMMIT',
    body: 'Three events define the close of Week 20. First: Nigeria\'s military killed 100+ civilians in Zamfara and 13 in Niger State — Amnesty International is calling for an investigation and this is now an international political risk event for a government 18 months from elections. Second: South Africa has declared a national disaster over severe weather while simultaneously managing the worst xenophobic crisis in years — Ghana evacuating 300 citizens, Nigeria 130 repatriation requests. Third: the Nairobi Africa-France Summit drew backlash for Macron\'s comments but Ruto\'s framing — sovereign equality, not aid — signals a new African negotiating posture. The continent\'s macro risk environment is intensifying on multiple fronts simultaneously.',
  },

  fxRates: {
    NGN: '1363.43',
    GHS: '11.27',
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
    { time: '09:30:00', signal: 'Nigeria military airstrike kills 100+ civilians in Zamfara Tumfa market. Second strike kills 13 in Niger State. Amnesty International calls for investigation.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '09:15:00', signal: 'South Africa declares national disaster over severe weather. Ghana evacuates 300 citizens. Nigeria 130 repatriation requests. Malawi mass returnees amid xenophobic crisis.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'UN warns Sudan war entering deadlier phase — armed drones leading cause of civilian deaths. Attacks spreading across multiple regions. Chad airstrikes kill Nigerians.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Nairobi Africa-France Summit — Macron debt-relief comments draw backlash. Ruto calls for sovereign equality not aid. 24 presidents, 5 PMs, UN SG Guterres attended.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '08:30:00', signal: 'At least 11 arrested as police disperse protesters near Africa Forward Summit venues in Nairobi. Kisumu county flooding forces residents to flee.', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Uganda Museveni sworn in for seventh term. Janet Museveni absent from inauguration amid prolonged public absence. Calls for value addition over raw exports.', detail: 'LOW', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Rwanda exports to China surge 92% as demand rises — China-Africa trade deepening as US-Africa relations deteriorate. AGOA renewal still uncertain.', detail: 'MEDIUM', type: 'INFO', tag: 'TRADE SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'Nigeria NGN at 1,363.43 — average 1,458 over past year, high 1,600 in May 2025, low 1,338 in Feb 2026. CBN reforms holding but political risk rising.', detail: 'MEDIUM', type: 'WARNING', tag: 'FX UPDATE', country: 'NGN' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 68, fiscal: 65, fx: 62, debt: 60, political: 82, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 52, fiscal: 55, fx: 48, debt: 58, political: 40, external: 60 },
    { country: 'Kenya', flag: '🇰🇪', score: 74, fiscal: 75, fx: 65, debt: 82, political: 75, external: 70 },
    { country: 'Egypt', flag: '🇪🇬', score: 74, fiscal: 78, fx: 80, debt: 72, political: 65, external: 75 },
    { country: 'South Africa', flag: '🇿🇦', score: 75, fiscal: 65, fx: 72, debt: 60, political: 90, external: 72 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Zambia', flag: '🇿🇲', score: 76, fiscal: 80, fx: 70, debt: 88, political: 75, external: 70 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 68, debt: 78, political: 55, external: 77 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,363.43', change: '-14.80%', stress: 'ELEVATED', ytd: '-6.11%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.27', change: '+26.50%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.76', change: '+5.66%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.50', change: '+1.50%', stress: 'MODERATE', ytd: '+1.20%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'May 16, 2026', type: 'Opposition Protest', risk: 'HIGH', note: 'Somali opposition plans May 16 protest in Mogadishu over president\'s term extension. Security risk elevated.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'First since 2021 Tigray conflict. Abiy Ahmed near-certain to win but legitimacy being watched regionally.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'September 2026', type: 'Parliamentary Elections', risk: 'LOW', note: 'Crown Prince Moulay El Hassan appointed to senior Royal Armed Forces coordinating role. Succession preparation underway.', color: '#00c48c' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Civilian airstrike crisis complicating Tinubu reform narrative. Opposition building coalition. Path to 2027 narrowing.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'MEDIUM', note: 'Ruto presidency described as vulnerable. Gen-Z protests. Debt rollover constraining fiscal space.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'SUSPENDED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Bilateral', maturity: 'Q3-Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', trend: '↑', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', trend: '↑', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 425, delta: '+18', bond: '-0.9pts', fx: '-0.5%', signal: 'CIVILIAN STRIKES', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 195, delta: '+22', bond: '-1.1pts', fx: '-0.6%', signal: 'CRISIS + WEATHER', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+25', bond: '-1.2pts', fx: '-0.2%', signal: 'DEBT + PROTEST', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+12', bond: '-0.6pts', fx: '-0.4%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '-6', bond: '+0.3pts', fx: '+0.2%', signal: 'RECOVERY', color: '#00c48c' },
  ],
}
