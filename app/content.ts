export const content = {
  riskIndex: '78',
  riskStatus: 'HIGH',

  riskMonitor: {
    updated: 'May 19, 2026 09:00 UTC',
    overallScore: 78,
    trend: 'WORSENING',
    drivers: ['Ebola PHEIC Bundibugyo No Vaccine', 'Mali Defence Minister Killed', 'US-Nigeria ISIL Joint Operation', 'Sahel Security Collapse'],
    regions: [
      { region: 'East Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 72, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 78, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 88, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Bundibugyo Ebola PHEIC — 300+ cases, 88 deaths, NO approved vaccine or treatment. Kenya moderate importation risk. 6 Americans exposed in DRC.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Mali', flag: '🇲🇱', alert: 'Al-Qaeda kills Mali defence minister — top Moscow ally. Russian mercenaries forced to retreat. JNIM "unprecedented" attack. Sahel security collapse accelerating.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'US-Nigeria joint operation kills key ISIL leader in Borno State. Post reporters: IS fighters on offensive in northwest Nigeria despite December airstrikes.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ebola moderate importation risk declared. Preparedness team formed. Surveillance at all entry points. Eurobond rollover pressure intensifying.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'BUNDIBUGYO EBOLA WITH NO VACCINE IS THE WORST-CASE PHEIC SCENARIO',
    body: 'The WHO PHEIC declaration covers an Ebola outbreak caused by the Bundibugyo strain — one of only three times this variant has ever been reported. There are no approved vaccines or treatments. The two previous Bundibugyo outbreaks resulted in only 55 and 57 cases respectively. This outbreak already has 300+ suspected cases and 88 deaths. Combined with cross-border spread to Uganda, six Americans exposed in DRC, and intense population movement in the region — this is the most serious Ebola outbreak since 2018-2020. The macro consequences for East and Central African trade, FDI and sovereign credit are not priced.',
    tag: 'WEEK 21 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 19, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '420', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '235', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '185', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '570', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '195', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Mali', flag: '🇲🇱', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '920', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'BUNDIBUGYO EBOLA PHEIC — NO VACCINE, NO TREATMENT', body: 'WHO PHEIC covers Bundibugyo strain — only third time ever reported. No approved vaccines or treatments. 300+ cases, 88 deaths. Cross-border spread to Uganda confirmed. Kenya on moderate alert. 6 Americans exposed. Population movement in Ituri making containment extremely difficult.', icon: '🚨' },
    { title: 'MALI DEFENCE MINISTER KILLED — RUSSIAN MERCENARIES RETREAT', body: 'Al-Qaeda-linked JNIM fighters kill Mali defence minister, a top Moscow ally, in an "unprecedented" attack. Russian mercenaries forced to retreat — highlighting the Mali-Russia partnership\'s failure. This is the most significant security event in the Sahel in 2026.', icon: '⚔️' },
    { title: 'US-NIGERIA JOINT OPERATION KILLS ISIL LEADER IN BORNO', body: 'US and Nigerian forces conduct joint operation killing ISIL commander deemed a global terrorist since 2023. Washington Post: IS fighters still on offensive in northwest Nigeria despite December Trump airstrikes. Security situation more complex than the headline suggests.', icon: '🇳🇬' },
    { title: 'POPE LEO XIV DENOUNCES WAR — CRITICISES TRUMP', body: 'New Pope Leo XIV sheds previous image, denounces war in Middle East and responds assertively to Trump criticism. Significant geopolitical signal from the Vatican with implications for Catholic-majority African nations watching US-Africa relations deteriorate.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE MALI DEFENCE MINISTER ASSASSINATION IS THE SAHEL\'S MOST SIGNIFICANT MACRO EVENT OF 2026',
    body: 'JNIM killing Mali\'s defence minister and forcing Russian mercenaries to retreat exposes the complete failure of the Mali-Russia security partnership. Wagner Group was the cornerstone of the AES juntas\' security architecture across Mali, Burkina Faso and Niger. Its failure in Mali signals that Russian mercenary presence cannot stabilise these states. The security vacuum will deepen, jihadist expansion will accelerate, and spillover risks to coastal West African sovereigns — Senegal, Ivory Coast, Ghana, Nigeria — will increase. These risks are not in credit spreads.',
    conclusion: 'SAHEL SECURITY COLLAPSE IS A MACRO RISK TRANSMISSION CHANNEL FOR WEST AFRICAN SOVEREIGNS. WATCH IVORY COAST AND GHANA CREDIT SPREADS.',
  },

  insight2: {
    title: 'BUNDIBUGYO EBOLA IS DIFFERENT FROM 2018-2020 — THE MARKETS ARE NOT PRICING THE DISTINCTION',
    body: 'The 2018-2020 DRC Ebola outbreak used an approved vaccine (Merck\'s rVSV-ZEBOV) that proved highly effective. This outbreak uses the Bundibugyo strain, for which there is no approved vaccine or treatment. The two previous Bundibugyo outbreaks were small — 55 and 57 cases. This one already has 300+ cases in a region with intense population movement, active conflict, and poor infrastructure. The absence of a vaccine changes the containment calculus entirely. East and Central African sovereign credit needs to price a 6-12 month outbreak scenario. It is not doing so.',
    conclusion: 'BUNDIBUGYO EBOLA IS NOT PRICED. THE NO-VACCINE REALITY CHANGES THE OUTBREAK DURATION AND SCALE ASSUMPTIONS.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21: BUNDIBUGYO PHEIC, MALI SECURITY COLLAPSE AND US-NIGERIA JOINT OPS',
    body: 'Three security and health events are simultaneously reshaping Africa\'s macro risk landscape. First: Bundibugyo Ebola PHEIC with no approved vaccine — 300+ cases, 88 deaths, cross-border spread to Uganda, 6 Americans exposed — this is the most serious Ebola outbreak since 2018-2020 and the first without an effective vaccine. Second: JNIM kills Mali\'s defence minister and forces Russian mercenaries to retreat — the Sahel-Russia security partnership has failed, the security vacuum will deepen, and spillover risks to coastal West Africa are building. Third: US-Nigeria joint operations kill ISIL leaders in Borno but IS remains on offensive in northwest Nigeria — the security picture is more complex than the diplomatic signal suggests. Africa\'s compound risk environment is at its most intense of 2026.',
  },

  fxRates: {
    NGN: '1368.13',
    GHS: '11.36',
    KES: '129.10',
    EGP: '52.83',
    XOF: '610.00',
    ZAR: '18.16',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3700.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Bundibugyo Ebola PHEIC — 300+ cases, 88 deaths, NO approved vaccine or treatment. Third time strain ever reported. Cross-border spread to Uganda. 6 Americans exposed in DRC.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'JNIM kills Mali defence minister — top Moscow ally. Russian mercenaries forced to retreat. Unprecedented JNIM attack exposes failure of Mali-Russia security partnership.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'XOF' },
    { time: '09:00:00', signal: 'US-Nigeria joint operation kills ISIL commander in Borno — deemed global terrorist since 2023. IS still on offensive in northwest Nigeria despite December Trump airstrikes.', detail: 'MEDIUM', type: 'WARNING', tag: 'GEOPOLITICAL', country: 'NGN' },
    { time: '08:45:00', signal: 'Kenya declares moderate Ebola importation risk — preparedness team formed, surveillance at all entry points. KES at 129.10. Eurobond rollover pressure intensifying.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'KES' },
    { time: '08:30:00', signal: 'NGN at 1,368.13 — mid-market rate. Weekly range 1,357-1,373. Down 14.37% vs USD over past year. US-Nigeria joint op signal positive for security but IS still active.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:15:00', signal: 'UGX weakening to 3,700 — Ebola PHEIC risk-off. DRC-Uganda trade corridor disruption risk elevated. Kampala screening at all hospitals underway.', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'UGX' },
    { time: '08:00:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Atlantic Council: without reversal, sovereign default likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana GHS at 11.36 — Fitch B/positive outlook intact. GSE strongest African market in hard currency YTD. Post-restructuring recovery story remains the continent\'s cleanest.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 62, fx: 58, debt: 62, political: 78, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 45, fiscal: 48, fx: 38, debt: 50, political: 38, external: 50 },
    { country: 'Kenya', flag: '🇰🇪', score: 78, fiscal: 76, fx: 72, debt: 85, political: 78, external: 85 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 74, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 65, fx: 72, debt: 62, political: 90, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Mali', flag: '🇲🇱', score: 95, fiscal: 88, fx: 85, debt: 85, political: 98, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 80, fiscal: 68, fx: 72, debt: 72, political: 65, external: 92 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,368.13', change: '-14.37%', stress: 'MODERATE', ytd: '-5.22%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'ELEVATED', ytd: '-1.20%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.83', change: '+5.53%', stress: 'HIGH', ytd: '-8.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.16', change: '+0.80%', stress: 'MODERATE', ytd: '+0.60%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,700.00', change: '-8.80%', stress: 'ELEVATED', ytd: '-5.10%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '+0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Postponed to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'President\'s term expired May 15. Opposition protests ongoing. Constitutional crisis unfolding.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. Abiy expected to win but Bundibugyo outbreak adds regional complexity.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform. 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'President corruption allegations. GNU durability test. US-SA relations at lowest point.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'IS still active in northwest despite joint ops. Political risk building from multiple directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ebola moderate risk. Fuel price shock. Debt rollover. Ruto vulnerable. Default path narrow.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'SUSPENDED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'DEFENCE MIN KILLED', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 850, delta: '+50', bond: '-2.5pts', fx: '-2.0%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 185, delta: '+30', bond: '-1.5pts', fx: '-0.3%', signal: 'EBOLA + DEBT', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 195, delta: '+15', bond: '-0.8pts', fx: '+0.2%', signal: 'CORRUPTION + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 570, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'FX STABILISING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 420, delta: '-8', bond: '+0.4pts', fx: '+0.1%', signal: 'JOINT OPS SIGNAL', color: '#00c48c' },
    { country: 'GHANA', cds: 235, delta: '-12', bond: '+0.7pts', fx: '+0.3%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
