export const content = {
  riskIndex: '72',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '995', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
  ],

  whatMattersNow: [
    { title: 'NIGERIA-SOUTH AFRICA DIPLOMATIC CRISIS', body: 'Anti-migrant violence in South Africa targeting Nigerian and Ghanaian businesses. Nigeria summoned SA High Commissioner. Tony Elumelu calls on Abuja to act. Bilateral relations under severe strain.', icon: '🚨' },
    { title: 'KENYA FLOODING ADDS TO SOVEREIGN STRESS', body: 'At least 18 dead in Kenya floods and landslides. Infrastructure damage compounding fiscal pressure. Government faces competing demands on constrained budget amid large debt payments in 2026.', icon: '🌊' },
    { title: 'EGYPT POUND UNDER PRESSURE AGAIN', body: 'USD/EGP at 53.55 — up 5.66% YTD. EGP hit 54.69 high on April 7. IMF programme providing support but Middle East conflict keeping external pressures elevated.', icon: '🇪🇬' },
    { title: 'WEST AFRICA GROWTH HOLDING AT 4.2%', body: 'PwC projects West Africa GDP growth at 4.2% in 2026. Nigeria growing at 3.98% driven by services, finance and ICT. Ghana at 5.5% growth — post-restructuring recovery accelerating.', icon: '📈' },
  ],

  insight1: {
    title: 'SOUTH AFRICA GEOPOLITICAL RISK IS BEING UNDERPRICED',
    body: 'Anti-migrant violence targeting Nigerian and Ghanaian businesses signals deep structural tensions. Nigeria has summoned the SA High Commissioner. Tony Elumelu has gone public. This is no longer a diplomatic abstraction — it is a live bilateral crisis with economic consequences for intra-African trade and investment flows.',
    conclusion: 'SOUTH AFRICA POLITICAL RISK PREMIUM NEEDS TO WIDEN. WATCH ZAR AND SA BONDS.',
  },

  insight2: {
    title: 'GHANA IS THE AFRICAN RECOVERY STORY OF 2026',
    body: 'Ghana cedi saw its first annual gain vs dollar since at least 1994. GDP growth at 5.5%. Debt restructuring with bilateral and commercial creditors largely complete. Foreign creditors returning. Gold sector reforms supporting the cedi. Debt-to-GDP projected at 60% by end 2026.',
    conclusion: 'GHANA IS THE CLEANEST POST-RESTRUCTURING STORY ON THE CONTINENT. BUY THE RECOVERY.',
  },

  brief: {
    week: '19',
    title: 'INTRA-AFRICAN TENSIONS ARE NOW A MACRO RISK FACTOR',
    body: 'The anti-migrant violence in South Africa targeting Nigerian and Ghanaian nationals is no longer just a political story — it is becoming a macro risk event. Nigeria has summoned the SA High Commissioner. Tony Elumelu has intervened publicly. If this escalates, it threatens intra-African trade flows, remittance channels and the broader African Continental Free Trade Area narrative. Markets are not pricing this. They should be.',
  },

  fxRates: {
    NGN: '1360.17',
    GHS: '11.10',
    KES: '129.10',
    EGP: '53.55',
    XOF: '610.00',
    ZAR: '18.45',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3680.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '18.97',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Nigeria summons SA High Commissioner over anti-migrant violence — bilateral crisis escalating. Tony Elumelu demands Abuja act.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:15:00', signal: 'Egypt EGP at 53.55 — up 5.66% YTD. Hit 54.69 high on April 7. Middle East conflict keeping external pressure elevated.', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'EGP' },
    { time: '09:00:00', signal: 'Kenya flooding kills 18 — infrastructure damage adding fiscal pressure as government faces large 2026 debt payments.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'KES' },
    { time: '08:45:00', signal: 'Nigeria NGN at 1,360 — naira strengthening. Down 14.32% vs USD over past year. CBN FX reforms holding.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:30:00', signal: 'Ghana GDP at 5.5% growth in Q3 2025 — strongest performer in West Africa. Post-restructuring recovery accelerating.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'GHS' },
    { time: '08:15:00', signal: 'West Africa growth projected at 4.2% in 2026 — Nigeria 3.98%, Ghana 5.5%. Reform momentum supporting outlook.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '08:00:00', signal: 'South Africa local elections approaching — first real test of sentiment since GNU formation in 2024. ZAR watching political risk.', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'Exercise African Lion 2026 underway — 5,000+ troops across Morocco, Ghana, Senegal, Tunisia until May 8. US AFRICOM deepening Africa ties.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
  ],

  riskTable: [
    { country: 'KENYA', cds: 182, delta: '+25', bond: '-1.3pts', fx: '-0.2%', signal: 'FLOOD + DEBT RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+18', bond: '-0.8pts', fx: '-1.2%', signal: 'FX PRESSURE', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'RESTRUCTURING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-5', bond: '+0.3pts', fx: '+0.2%', signal: 'REFORM HOLDING', color: '#f5a623' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+12', bond: '-0.6pts', fx: '-0.4%', signal: 'POLITICAL RISK', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '-8', bond: '+0.5pts', fx: '+0.3%', signal: 'RECOVERY STORY', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 395, delta: '+2', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
