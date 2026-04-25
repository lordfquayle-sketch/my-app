export const content = {
  riskIndex: '68',
  riskStatus: 'ELEVATED',
  
  insight1: {
    title: 'MARKETS ARE MISPRICING DURATION RISK',
    body: 'Oil volatility is priced. Credit deterioration is not. Spreads are not fully reflecting funding stress across frontier sovereigns.',
    conclusion: 'EXPECT CREDIT TO CATCH DOWN.',
  },

  insight2: {
    title: 'FX IS THE FIRST WARNING SIGNAL',
    body: 'Currency weakness is outpacing bond repricing. This is not stable.',
    conclusion: 'FX MOVES FIRST. CREDIT FOLLOWS.',
  },

  brief: {
    week: '17',
    title: 'LIQUIDITY IS TIGHTENING FASTER THAN MARKETS ADMIT',
    body: 'African sovereign credit is entering a phase where funding conditions are deteriorating quietly while global markets remain distracted by oil and rates.',
  },

  fxRates: {
    NGN: '1357.00',
    GHS: '10.99',
    KES: '129.25',
    EGP: '51.97',
    XOF: '610.00',
    ZAR: '16.64',
    ETB: '130.00',
    TZS: '2680.00',
    UGX: '3680.00',
    MAD: '9.85',
    XAF: '610.00',
    ZMW: '27.50',
    AOA: '912.00',
    MZN: '63.80',
  },

  signals: [
    { time: '14:32', signal: 'GHANA 2030s → +42bps', detail: 'LIQUIDITY THIN', type: 'ALERT' },
    { time: '14:31', signal: 'NIGERIA NGN → -1.8%', detail: 'PARALLEL GAP WIDENS', type: 'ALERT' },
    { time: '14:30', signal: 'BRENT → -2.1%', detail: 'DEMAND FEARS', type: 'WARNING' },
    { time: '14:29', signal: 'KENYA CDS → +18bps', detail: 'FISCAL PRESSURE', type: 'WARNING' },
    { time: '14:28', signal: 'EGYPT 2027s → -0.9pts', detail: 'BUYING INTEREST', type: 'INFO' },
    { time: '14:27', signal: 'ZAMBIA KWACHA → -1.1%', detail: 'DOLLAR DEMAND', type: 'ALERT' },
    { time: '14:26', signal: 'SOUTH AFRICA 10Y → +9bps', detail: 'GLOBAL RATES PRESSURE', type: 'WARNING' },
    { time: '14:25', signal: 'IVORY COAST CDS → +6bps', detail: 'MODEST WIDENING', type: 'INFO' },
    { time: '14:24', signal: 'ANGOLA OIL LINK', detail: 'STRESS BUILDING', type: 'WARNING' },
    { time: '14:23', signal: 'FRONTIER FX', detail: 'BROAD WEAKNESS', type: 'ALERT' },
  ],

  riskTable: [
    { country: 'GHANA', cds: 875, delta: '+35', bond: '-1.2pts', fx: '-0.6%', signal: 'FUNDING STRESS', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 910, delta: '+28', bond: '-0.8pts', fx: '-1.8%', signal: 'FX DISLOCATION', color: '#ff3b3b' },
    { country: 'KENYA', cds: 720, delta: '+18', bond: '-0.5pts', fx: '-0.3%', signal: 'FISCAL PRESSURE', color: '#f5a623' },
    { country: 'EGYPT', cds: 640, delta: '-12', bond: '+0.6pts', fx: '+0.2%', signal: 'TEMPORARY RELIEF', color: '#00c48c' },
    { country: 'ZAMBIA', cds: 980, delta: '+22', bond: '-0.7pts', fx: '-1.1%', signal: 'EXTERNAL STRESS', color: '#ff3b3b' },
    { country: 'ANGOLA', cds: 560, delta: '+10', bond: '-0.3pts', fx: '-0.4%', signal: 'OIL LINK STRAIN', color: '#f5a623' },
    { country: 'IVORY COAST', cds: 410, delta: '+6', bond: '-0.2pts', fx: '-0.1%', signal: 'STABLE BUT WATCH', color: '#00c48c' },
  ],
}
