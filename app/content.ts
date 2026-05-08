export const content = {
  riskIndex: '73',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '995', fxPressure: 'MODERATE', liquidity: 'WATCH' },
  ],

  whatMattersNow: [
    { title: 'DANGOTE UNVEILS 20,000MW POWER PLAN + $20BN DIVIDEND', body: 'Aliko Dangote announced a 20,000MW power generation programme at the IFC in Washington — dwarfing Nigeria\'s current 13,000MW installed capacity. Committed to $20bn in dividends to African investors from planned pan-African refinery listing. Biggest Nigeria corporate story of 2026.', icon: '⚡' },
    { title: 'SA DIPLOMATIC CRISIS — GHANA NOW INVOLVED', body: 'Ghana has summoned South Africa\'s envoy after a Ghanaian national was publicly challenged over immigration status. SA officially hosts 2.4m migrants. Nigeria repatriation flights underway. Exercise African Lion 2026 ends today — 5,000+ troops across Morocco, Ghana, Senegal, Tunisia.', icon: '🚨' },
    { title: 'KASAPREKO LAUNCHES GH¢700M IPO ON GSE', body: 'Kasapreko PLC launches GH¢700 million IPO on the Ghana Stock Exchange — the largest Ghanaian IPO of 2026. Mahama\'s Damang Mine delivers first gold to Bank of Ghana. Ghana capital markets showing post-restructuring recovery momentum.', icon: '🇬🇭' },
    { title: 'ANGOLA FACES DECLINING OIL OUTPUT + STEEP DEBT REPAYMENTS', body: 'Angola\'s 2026 debt repayment obligations coincide with declining oil production. OPEC+ output increase of 188,000 bpd in June adds downside risk to oil prices. Lower prices combined with lower output is the most dangerous combination for any commodity-dependent sovereign.', icon: '🛢️' },
  ],

  insight1: {
    title: 'DANGOTE\'S 20,000MW ANNOUNCEMENT CHANGES THE NIGERIA INVESTMENT THESIS',
    body: 'A 20,000MW power commitment from Dangote — combined with the refinery IPO, $20bn dividend promise, and Moody\'s B3 upgrade — fundamentally reframes Nigeria from a reform story into an industrial conglomerate thesis. MTN credits Nigeria for its strongest year in decades. Ralph Mupita takes home a record R99 million. The reform story is becoming a growth story.',
    conclusion: 'NIGERIA IS NO LONGER JUST A REFORM TRADE. IT IS BECOMING AN INDUSTRIAL TRANSFORMATION TRADE.',
  },

  insight2: {
    title: 'ANGOLA IS THE MOST UNDERAPPRECIATED SOVEREIGN RISK IN SOUTHERN AFRICA',
    body: 'Angola faces declining oil output against steep 2026 repayment obligations. OPEC+ output increase adds downside price pressure. The Namibia tanker hub via Dangote-Afreximbank is a structural hedge — but Angola\'s own balance sheet remains exposed. Lower oil prices plus lower output is the most dangerous combination for any commodity-dependent sovereign.',
    conclusion: 'ANGOLA CREDIT RISK IS UNDERPRICED RELATIVE TO ITS 2026 REPAYMENT PROFILE. WATCH AOA AND ANGOLA BONDS.',
  },

  brief: {
    week: '19',
    title: 'WEEK 19: THREE MACRO RISKS CONVERGING — DIPLOMATIC RUPTURE, CHINA TRADE PIVOT, OPEC+ SUPPLY SHIFT',
    body: 'African markets are at one of the most complex macro junctions of 2026. The SA diplomatic crisis has transitioned from rhetoric to real economic disruption — repatriation flights are now being organised, Ghana has summoned the SA envoy. China\'s tariff-free treatment for 53 nations reshapes trade architecture as US-Africa ties weaken. OPEC+ output increase introduces downside oil price risk just as Angola faces its most exposed repayment year. Together, these three forces tighten financial conditions, compress fiscal space and increase refinancing costs across African sovereigns. The divergence thesis remains: Nigeria and Ghana are outperforming; Kenya, Angola and South Africa face the sharpest pressure.',
  },

  fxRates: {
    NGN: '1365.89',
    GHS: '11.12',
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
    { time: '09:30:00', signal: 'Dangote unveils 20,000MW power plan and $20bn dividend commitment at IFC Washington — Nigeria industrial transformation thesis confirmed', detail: 'HIGH', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '09:15:00', signal: 'Ghana summons SA envoy — Ghanaian national publicly challenged over immigration status. SA diplomatic crisis now involves 3 West African nations', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'Kasapreko launches GH¢700m IPO on Ghana Stock Exchange — largest Ghanaian IPO of 2026. GSE capital markets recovery accelerating', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'GHS' },
    { time: '08:45:00', signal: 'Angola faces declining oil output + steep 2026 debt repayments — OPEC+ output increase adds downside oil price risk to already exposed balance sheet', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'AOA' },
    { time: '08:30:00', signal: 'Exercise African Lion 2026 ends today — 5,000+ troops from 40+ nations completed drills across Morocco, Ghana, Senegal, Tunisia', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Nigeria NGN at 1,365 — down 14.70% vs USD over past year. MTN credits Nigeria for strongest year in decades. Reform momentum holding', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:00:00', signal: 'Mahama\'s Damang Mine delivers first gold to Bank of Ghana — Ghana gold sector reform delivering. GHS holding at 11.12', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'GHS' },
    { time: '07:45:00', signal: 'Senegal remains highest acute distress risk in West Africa — rising borrowing costs, hidden liabilities, frozen IMF programme during political transition', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 192, delta: '+18', bond: '-0.9pts', fx: '-0.5%', signal: 'DIPLOMATIC CRISIS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+20', bond: '-1.0pts', fx: '-0.2%', signal: 'DEBT ROLLOVER', color: '#ff3b3b' },
    { country: 'ANGOLA', cds: 560, delta: '+15', bond: '-0.8pts', fx: '-0.6%', signal: 'OIL + DEBT RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+10', bond: '-0.5pts', fx: '-0.4%', signal: 'COST PRESSURE', color: '#f5a623' },
    { country: 'ZAMBIA', cds: 995, delta: '+5', bond: '-0.3pts', fx: '-0.2%', signal: 'RESTRUCTURING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'INDUSTRIAL STORY', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-12', bond: '+0.7pts', fx: '+0.3%', signal: 'IPO + RECOVERY', color: '#00c48c' },
  ],
}
