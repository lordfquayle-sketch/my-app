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
    { title: 'SA-AFRICA DIPLOMATIC CRISIS ESCALATING', body: 'Nigeria preparing repatriation flights for 130+ nationals. Kenya High Commission issues advisory note. At least 2 Nigerians and 4 Ethiopians killed. Ramaphosa condemned attacks but cautioned foreigners. Intra-African trade flows at risk.', icon: '🚨' },
    { title: 'CHINA DROPS TARIFFS ON 53 AFRICAN NATIONS', body: 'China extends tariff-free treatment to Africa\'s 20 largest economies including Nigeria, South Africa, Egypt, Kenya. Only Eswatini excluded. Significant shift in trade architecture as US-Africa travel drops 46% for Nigeria under tighter visa rules.', icon: '🇨🇳' },
    { title: 'OPEC+ RAISES OUTPUT — AFRICA OIL DYNAMICS SHIFT', body: '7 OPEC+ members agree to add 188,000 bpd in June. Nigeria benefits from Iran war-driven price surge. Dangote Refinery partnering with Afreximbank for Namibia tanker hub to cut Persian Gulf reliance.', icon: '🛢️' },
    { title: 'EGYPT PROPERTY COSTS RISING 15%', body: 'New Urban Communities Authority fees could push project costs up 15%. Talaat Moustafa warning adds to Egypt cost pressures. EGP at 53.55 with Middle East conflict keeping external stress elevated.', icon: '🏗️' },
  ],

  insight1: {
    title: 'THE SA CRISIS IS AN INTRA-AFRICAN TRADE RISK EVENT',
    body: 'The anti-migrant violence in South Africa has moved beyond a political story. Nigeria is preparing repatriation flights. Kenya has issued an official advisory. At least 6 African nationals killed. This threatens remittance channels, business operations and the AfCFTA narrative. Markets are treating this as noise. It is not noise — it is a structural risk to intra-African economic integration.',
    conclusion: 'ZAR AND SA BONDS FACE A POLITICAL RISK PREMIUM THAT IS NOT YET PRICED.',
  },

  insight2: {
    title: 'CHINA\'S TARIFF MOVE IS THE MOST SIGNIFICANT AFRICA TRADE EVENT OF 2026',
    body: 'China extending tariff-free treatment to 53 African nations — including Nigeria, Egypt, South Africa and Kenya — is a strategic masterstroke timed precisely as US-Africa relations deteriorate under tighter visa rules and transactional Trump policies. This reshapes African export architecture and deepens Sino-African economic integration at exactly the moment Washington is pulling back.',
    conclusion: 'THE GEOPOLITICAL TRADE IS CLEAR: CHINA IS FILLING THE VACUUM. WATCH YUAN-DENOMINATED AFRICAN TRADE FLOWS.',
  },

  brief: {
    week: '19',
    title: 'THREE MACRO RISKS CONVERGING ON AFRICAN MARKETS THIS WEEK',
    body: 'First: the South Africa diplomatic crisis is escalating with repatriation flights now being organised — this is no longer a political abstraction. Second: China\'s tariff-free treatment for 53 African nations reshapes the trade architecture at exactly the moment US-Africa ties are weakening. Third: OPEC+ output increase of 188,000 bpd in June will test African oil revenue assumptions — Nigeria benefits from the Iran war premium, but Angola faces declining output against steep 2026 repayment obligations. The convergence of these three factors makes this one of the more complex macro environments African sovereigns have faced in 2026.',
  },

  fxRates: {
    NGN: '1360.17',
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
    { time: '09:30:00', signal: 'Nigeria preparing repatriation flights — 130+ nationals registered. Kenya issues advisory note. SA diplomatic crisis deepening.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:15:00', signal: 'China extends tariff-free treatment to 53 African nations — Nigeria, Egypt, South Africa, Kenya among 20 largest economies covered.', detail: 'MEDIUM', type: 'INFO', tag: 'TRADE SIGNAL', country: 'AFRICA' },
    { time: '09:00:00', signal: 'OPEC+ adds 188,000 bpd in June — Nigeria reaping Iran war oil premium. Dangote-Afreximbank Namibia tanker hub announced.', detail: 'MEDIUM', type: 'INFO', tag: 'OIL SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'Egypt EGP at 53.55 — Talaat Moustafa warns new fees push property costs up 15%. External pressure from Middle East persisting.', detail: 'HIGH', type: 'WARNING', tag: 'FX PRESSURE', country: 'EGP' },
    { time: '08:30:00', signal: 'Equity Bank sweeps 10 categories at Kenya Banking Awards — James Mwangi CEO of Year. Bright spot amid Kenya macro stress.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'KES' },
    { time: '08:15:00', signal: 'US-Africa travel drops sharply — Nigeria down 46.4%, Zimbabwe down 70%. Trade and diaspora flows under pressure from Trump visa policy.', detail: 'MEDIUM', type: 'WARNING', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ghana GHS at 11.12 — cedi holding post-restructuring gains. First annual gain vs USD since 1994 confirmed. Recovery story intact.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'GHS' },
    { time: '07:45:00', signal: 'Senegal flagged as highest acute distress risk in West Africa — rising borrowing costs, hidden liabilities, frozen IMF programme.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 192, delta: '+18', bond: '-0.9pts', fx: '-0.6%', signal: 'POLITICAL RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+22', bond: '-1.1pts', fx: '-0.2%', signal: 'DEBT ROLLOVER', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+15', bond: '-0.7pts', fx: '-0.8%', signal: 'FX + COST PRESSURE', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'RESTRUCTURING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-6', bond: '+0.3pts', fx: '+0.1%', signal: 'OIL PREMIUM', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-10', bond: '+0.6pts', fx: '+0.2%', signal: 'RECOVERY INTACT', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 395, delta: '+3', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
