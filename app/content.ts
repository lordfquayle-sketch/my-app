export const content = {
  riskIndex: '70',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Stable', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'TIGHTENING', statusColor: '#f5a623', cds: '245', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '612', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '995', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '192', fxPressure: 'LOW', liquidity: 'ADEQUATE' },
  ],

  whatMattersNow: [
    { title: 'LABOUR DAY — MARKETS THIN ACROSS AFRICA', body: 'May 1 public holiday across most African markets. Liquidity thin. Key risk events resume Tuesday. Watch for position adjustments at open.', icon: '📅' },
    { title: 'NIGERIA DECOUPLING FROM PEERS', body: 'Moody\'s B3 upgrade and $5bn Abu Dhabi financing signal improving fundamentals. NGN FX reforms holding. Naira at 1,342 — strengthened significantly from 2025 highs above 1,600.', icon: '🇳🇬' },
    { title: 'KENYA ROLLOVER RISK BUILDING', body: 'Large external debt payments due in 2026. Eurobond refinancing costs rising. CBK holding rates at 12.75% to defend the shilling. Fiscal space remains constrained.', icon: '⚠️' },
    { title: 'AFRICAN CURRENCIES BROADLY STRONGER IN 2026', body: 'Most sub-Saharan currencies have appreciated year-to-date driven by FX reforms, tighter monetary policy and renewed investor confidence. USD weakness also supporting.', icon: '💱' },
  ],

  insight1: {
    title: 'NIGERIA IS THE REGION\'S BRIGHT SPOT — BUT WATCH THE PARALLEL MARKET',
    body: 'Moody\'s upgrade to B3, $5bn external financing, and FX reform momentum are positive signals. But food inflation at a 5-month high and parallel market pressure remain key risks. The reform story is real — but fragility has not disappeared.',
    conclusion: 'NIGERIA IS OUTPERFORMING. THE QUESTION IS HOW DURABLE THIS IS.',
  },

  insight2: {
    title: 'KENYA IS THE MARKET TO WATCH IN Q2 2026',
    body: 'Large Eurobond payments, rising refinancing costs, and a constrained fiscal position make Kenya the highest near-term rollover risk in East Africa. CBK\'s hawkish stance is buying time — but not solving the structural problem.',
    conclusion: 'KENYA CREDIT STRESS IS UNDERPRICED. SPREADS SHOULD WIDEN FROM HERE.',
  },

  brief: {
    week: '18',
    title: 'AFRICAN SOVEREIGNS: DIVERGENCE IS THE STORY OF 2026',
    body: 'The uniform stress of 2023-2024 is giving way to divergence. Nigeria is outperforming on reform momentum. Ghana and Zambia are rebuilding post-restructuring. Kenya faces near-term rollover risk. Egypt is stabilising under IMF support. South Africa is holding. The signal for investors: country selection matters more than ever in African credit.',
  },

  fxRates: {
    NGN: '1342.62',
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
    { time: '08:00:00', signal: 'Labour Day — African markets closed. Thin liquidity. Key risk events resume Tuesday May 5.', detail: 'LOW', type: 'INFO', tag: 'MARKET HOURS', country: 'AFRICA' },
    { time: '07:45:00', signal: 'Nigeria NGN at 1,342 — naira has strengthened significantly from 2025 highs above 1,600. FX reforms holding.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '07:30:00', signal: 'Zambian kwacha at 18.97 — ZMW down 32.63% vs USD over past year. Restructuring progress noted.', detail: 'MEDIUM', type: 'WARNING', tag: 'CREDIT STRESS', country: 'ZMW' },
    { time: '07:15:00', signal: 'Kenya faces large 2026 Eurobond payments — rollover risk elevated. CBK holding rates at 12.75%.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '07:00:00', signal: 'African currencies broadly stronger YTD — FX reforms, tight monetary policy and USD weakness supporting.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '06:45:00', signal: 'Nigeria $5bn Abu Dhabi total return swap — external financing improving. Moody\'s B3 upgrade confirmed.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '06:30:00', signal: 'Ghana post-restructuring outlook cautiously optimistic — debt to GDP projected at 60% by end 2026.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
    { time: '06:15:00', signal: 'Egypt IMF programme on track — early 2026 review disbursements unlocked. EGP stabilising at 50.85.', detail: 'MEDIUM', type: 'INFO', tag: 'POLICY SIGNAL', country: 'EGP' },
  ],

  riskTable: [
    { country: 'ZAMBIA', cds: 995, delta: '+15', bond: '-0.9pts', fx: '-0.8%', signal: 'RESTRUCTURING', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+22', bond: '-1.1pts', fx: '-0.2%', signal: 'ROLLOVER RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 612, delta: '-8', bond: '+0.4pts', fx: '+0.1%', signal: 'IMF SUPPORT', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '+8', bond: '-0.4pts', fx: '-0.1%', signal: 'POST-RESTRUC', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-12', bond: '+0.6pts', fx: '+0.3%', signal: 'REFORM MOMENTUM', color: '#00c48c' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+5', bond: '-0.2pts', fx: '+0.1%', signal: 'STABLE', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 395, delta: '+3', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
