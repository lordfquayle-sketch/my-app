export const content = {
  riskIndex: '71',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Stable', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'TIGHTENING', statusColor: '#f5a623', cds: '245', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '612', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '995', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '192', fxPressure: 'LOW', liquidity: 'ADEQUATE' },
  ],

  whatMattersNow: [
    { title: 'MIDDLE EAST CONFLICT DRIVING INFLATION SHOCK', body: 'World Bank projects SSA median inflation rising to 4.8% in 2026 due to Middle East spillovers. Oil importers — Egypt, Kenya, Ghana — face higher import bills widening fiscal deficits.', icon: '🛢️' },
    { title: 'AFRICA DEBT CLIFF APPROACHING', body: 'Angola, Kenya and Nigeria all hit refinancing inflection points in 2026. Ghana and Zambia restructuring consolidation ongoing. G20 Common Framework under pressure — has reduced only 7% of distressed debt.', icon: '⚠️' },
    { title: 'NIGERIA REFORM STORY HOLDING', body: 'FX unification, fuel subsidy removal and tax reforms showing through in 2026. Eurobond appetite recovering. But budget deficit remains large and food inflation at 5-month high.', icon: '🇳🇬' },
    { title: 'KENYA DEFAULT PATH REMAINS NARROW', body: 'Capital Economics warns path to avoiding default remains narrow. Protests signal weak political capital for fiscal repair. CBK rate cuts approaching — Nigeria likely to join rate cutting cycle.', icon: '🔴' },
  ],

  insight1: {
    title: 'AFRICA IN 2026 IS AT LEAST FOUR DIFFERENT ECONOMIES',
    body: 'Frontier East and West Africa growing at 5.5-7%. Diversified anchors Egypt, Morocco, Kenya at 4-5%. Oil-linked Nigeria, Angola, Algeria performing with oil prices. Restructuring cases Ethiopia, Ghana, Zambia still fragile. Country selection matters more than ever in African credit.',
    conclusion: 'THE UNIFORM STRESS OF 2023-2024 IS GONE. DIVERGENCE IS THE TRADE.',
  },

  insight2: {
    title: 'KENYA IS THE HIGHEST NEAR-TERM SOVEREIGN RISK IN EAST AFRICA',
    body: 'Debt at 68% of GDP. Large external refinancing needs. CBK hawkish but cutting cycle approaching. Protests signal political constraints on fiscal repair. Capital Economics says default path remains narrow. Spreads are not fully reflecting this risk.',
    conclusion: 'KENYA CREDIT IS UNDERPRICED. WATCH FOR SPREAD WIDENING IN Q2-Q3 2026.',
  },

  brief: {
    week: '19',
    title: 'WORLD BANK CUTS AFRICA GROWTH FORECAST — MIDDLE EAST SHOCK IS THE DRIVER',
    body: 'The World Bank has revised down Sub-Saharan Africa growth projections by 0.3 percentage points for 2026. Middle East conflict spillovers, high debt service burdens and structural weaknesses are limiting growth. Inflation projected to rise to 4.8%. The signal: external shocks are compounding pre-existing structural vulnerabilities. The markets most exposed are oil importers with large refinancing needs — Kenya, Egypt and Ghana.',
  },

  fxRates: {
    NGN: '1375.74',
    GHS: '11.10',
    KES: '129.10',
    EGP: '50.85',
    XOF: '610.00',
    ZAR: '18.50',
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
    { time: '09:15:00', signal: 'World Bank cuts SSA 2026 growth by 0.3pp — Middle East conflict spillovers and high debt service cited as key drivers', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'Nigeria NGN at 1,375 — naira down 4.8% YTD vs USD. FX reforms holding but parallel market pressure persists', detail: 'MEDIUM', type: 'WARNING', tag: 'FX PRESSURE', country: 'NGN' },
    { time: '08:48:00', signal: 'Kenya sovereign default path remains narrow — Capital Economics flags weak political capital for fiscal repair post-protests', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '08:35:00', signal: 'SSA median inflation projected at 4.8% in 2026 — up from 3.7% in 2025. Middle East oil shock driving upside pressure', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '08:20:00', signal: 'Ghana cedi stable at 11.10 — post-restructuring resilience holding. Debt-to-GDP projected to fall to 60% by end 2026', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
    { time: '08:05:00', signal: 'Egypt IMF programme on track — USD 8bn EFF+RSF underwriting stability. EGP at 50.85, inflation easing', detail: 'MEDIUM', type: 'INFO', tag: 'POLICY SIGNAL', country: 'EGP' },
    { time: '07:50:00', signal: 'South Africa structural growth problem persists — power, logistics, fiscal constraints. SARB rate cut cycle continuing', detail: 'MEDIUM', type: 'WARNING', tag: 'MACRO RISK', country: 'ZAR' },
    { time: '07:35:00', signal: 'G20 Common Framework under pressure — has reduced only 7% of distressed African debt. Zambia, Ghana restructuring ongoing', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'AFRICA' },
  ],

  riskTable: [
    { country: 'KENYA', cds: 182, delta: '+25', bond: '-1.3pts', fx: '-0.2%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+12', bond: '-0.8pts', fx: '-0.5%', signal: 'RESTRUCTURING', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 612, delta: '-5', bond: '+0.3pts', fx: '+0.1%', signal: 'IMF SUPPORT', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '+6', bond: '-0.3pts', fx: '-0.1%', signal: 'POST-RESTRUC', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-8', bond: '+0.4pts', fx: '-0.3%', signal: 'REFORM HOLD', color: '#00c48c' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+4', bond: '-0.2pts', fx: '+0.2%', signal: 'STRUCTURAL WEAK', color: '#f5a623' },
    { country: 'IVORY COAST', cds: 395, delta: '+3', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
