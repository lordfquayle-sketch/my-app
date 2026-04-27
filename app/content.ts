export const content = {
  riskIndex: '68',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '402', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Negative', status: 'TIGHTENING', statusColor: '#f5a623', cds: '221', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '146', fxPressure: 'MODERATE', liquidity: 'ADEQUATE' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '580', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '980', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Stable', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'MODERATE', liquidity: 'ADEQUATE' },
  ],

  whatMattersNow: [
    { title: 'FX CORRIDORS UNDER PRESSURE', body: 'Multiple African central banks intervening to defend FX bands. Watch for policy slippage and devaluation risk.', icon: '💱' },
    { title: 'LIQUIDITY REMAINS FRAGILE', body: 'System liquidity tight in NGN and GHS. Elevated T-bill rollover needs pose near-term refinancing risk.', icon: '💧' },
    { title: 'FISCAL AND DEBT SUSTAINABILITY', body: 'Rising debt servicing costs and external imbalances limit fiscal space across key markets.', icon: '📊' },
    { title: 'GLOBAL BACKDROP', body: 'Higher for longer rates and strong USD flow keeping EM risk premia elevated.', icon: '🌍' },
  ],

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
    NGN: '1384.03',
    GHS: '11.09',
    KES: '129.25',
    EGP: '52.62',
    XOF: '610.00',
    ZAR: '18.72',
    ETB: '130.00',
    TZS: '2680.00',
    UGX: '3680.00',
    MAD: '9.85',
    XAF: '610.00',
    ZMW: '19.13',
    AOA: '912.00',
    MZN: '63.80',
  },

  signals: [
    { time: '10:45:00', signal: 'Naira trades at 1,384 — CBN intervention pressure building as parallel market gap widens', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'NGN' },
    { time: '10:32:00', signal: 'Egyptian pound at 52.62 — IMF fiscal review delays adding to EGP stress', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'EGP' },
    { time: '10:18:00', signal: 'Zambian kwacha surges to 19.13 — significant strengthening from prior level', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'ZMW' },
    { time: '10:05:00', signal: 'Ghana cedi holds at 11.09 — relative stability but liquidity conditions remain tight', detail: 'MEDIUM', type: 'WARNING', tag: 'LIQUIDITY ALERT', country: 'GHS' },
    { time: '09:55:00', signal: 'South Africa rand at 18.72 — tracking global USD weakness, external support holding', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'ZAR' },
    { time: '09:42:00', signal: 'Kenya shilling stable at 129.25 — CBK hawkish stance containing FX volatility', detail: 'LOW', type: 'INFO', tag: 'POLICY SIGNAL', country: 'KES' },
    { time: '09:30:00', signal: 'Africa sovereign CDS spreads widening — Nigeria and Egypt leading deterioration', detail: 'HIGH', type: 'ALERT', tag: 'RISK SENTIMENT', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Frontier FX broad weakness persisting — USD strength keeping EM risk premia elevated', detail: 'MEDIUM', type: 'WARNING', tag: 'FX PRESSURE', country: 'AFRICA' },
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
