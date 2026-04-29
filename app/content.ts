export const content = {
  riskIndex: '71',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Negative', status: 'TIGHTENING', statusColor: '#f5a623', cds: '245', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '182', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '612', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '995', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Stable', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'ADEQUATE' },
  ],

  whatMattersNow: [
    { title: 'OIL PRICE SHOCK RIPPLING THROUGH AFRICA', body: 'US-Israel strikes on Iran sent oil prices surging. African oil importers facing higher import bills, wider fiscal deficits and accelerating FX pressure.', icon: '🛢️' },
    { title: 'BOND SPREADS WIDENING FAST', body: 'Egypt and Kenya face rising spreads amid large 2026 debt payments. Refinancing costs increasing. Credit stress building across frontier markets.', icon: '📈' },
    { title: 'NIGERIA SECURING EXTERNAL FINANCING', body: 'Nigeria borrowed $5bn from First Abu Dhabi Bank via total return swap. Eurobond appetite recovering but at higher yields.', icon: '💰' },
    { title: 'IMF PROGRAMME PROGRESS MIXED', body: 'Egypt IMF reviews progressing. Ghana and Zambia rebuilding after restructuring. Kenya facing rollover risks on external debt.', icon: '🏦' },
  ],

  insight1: {
    title: 'OIL SHOCK IS BEING UNDERPRICED IN AFRICAN CREDIT',
    body: 'The Middle East conflict has sent oil higher, but African sovereign spreads have not fully repriced. Oil importers — Egypt, Kenya, Ghana — face a triple stress of higher import bills, wider deficits and rising refinancing costs.',
    conclusion: 'SPREADS NEED TO WIDEN FURTHER. CREDIT IS LAGGING THE SHOCK.',
  },

  insight2: {
    title: 'NIGERIA IS DECOUPLING FROM WEST AFRICAN PEERS',
    body: 'Moody\'s upgrade to B3 and fresh external financing signal improving fundamentals. FX reforms are holding. But parallel market pressure and food inflation remain key risks to watch.',
    conclusion: 'NIGERIA IS THE REGION\'S BRIGHT SPOT — BUT FRAGILITY REMAINS.',
  },

  brief: {
    week: '18',
    title: 'AFRICAN SOVEREIGNS FACE A TRIPLE STRESS TEST IN 2026',
    body: 'Rising oil prices, large external debt payments and tightening global financial conditions are converging on African frontier markets. Egypt, Kenya and Ghana face the sharpest pressure. Nigeria is outperforming but not immune. The IMF remains the backstop — but its firepower is being tested.',
  },

  fxRates: {
    NGN: '1428.57',
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
    ZMW: '19.20',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:45:00', signal: 'Nigeria NGN at 1,428 — naira weakening as parallel market pressure persists post-CBN swap deal', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'NGN' },
    { time: '09:32:00', signal: 'Egypt EGP at 50.85 — pound stabilising post-IMF disbursement but fiscal risks remain elevated', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'EGP' },
    { time: '09:20:00', signal: 'Oil price shock rippling through African import bills — Egypt, Kenya, Ghana most exposed', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '09:10:00', signal: 'Nigeria secures $5bn from First Abu Dhabi Bank via total return swap — external financing improving', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '09:00:00', signal: 'Kenya bond spreads widening — large 2026 external debt payments creating refinancing pressure', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '08:48:00', signal: 'Ghana cedi at 11.10 — post-restructuring stability holding but liquidity remains tight', detail: 'MEDIUM', type: 'WARNING', tag: 'LIQUIDITY ALERT', country: 'GHS' },
    { time: '08:35:00', signal: 'South Africa rand at 18.50 — tracking global risk sentiment, external support holding', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'ZAR' },
    { time: '08:20:00', signal: 'IMF April 2026 Regional Outlook flags 3-decade productivity stagnation in sub-Saharan Africa', detail: 'MEDIUM', type: 'WARNING', tag: 'POLICY SIGNAL', country: 'AFRICA' },
  ],

  riskTable: [
    { country: 'EGYPT', cds: 612, delta: '+28', bond: '-1.4pts', fx: '-0.3%', signal: 'IMF DEPENDENCY', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+15', bond: '-0.9pts', fx: '-0.8%', signal: 'RESTRUCTURING', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+12', bond: '-0.6pts', fx: '-1.2%', signal: 'FX PRESSURE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+22', bond: '-1.1pts', fx: '-0.2%', signal: 'ROLLOVER RISK', color: '#f5a623' },
    { country: 'GHANA', cds: 245, delta: '+8', bond: '-0.4pts', fx: '-0.1%', signal: 'POST-RESTRUC', color: '#f5a623' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+5', bond: '-0.2pts', fx: '+0.1%', signal: 'STABLE WATCH', color: '#f5a623' },
    { country: 'IVORY COAST', cds: 395, delta: '+6', bond: '-0.2pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
