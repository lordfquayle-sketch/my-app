export const content = {
  riskIndex: '74',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 15, 2026 09:30 UTC',
    overallScore: 74,
    trend: 'WORSENING',
    drivers: ['Ebola Outbreak DRC', 'Dangote IPO De-Risked', 'Ghana Fitch Upgrade', 'SA GDP Only 1.3%'],
    regions: [
      { region: 'East Africa', score: 72, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 66, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 75, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC', flag: '🇨🇩', alert: 'Ebola outbreak declared in Ituri province — 246 suspected cases, 65 deaths, non-Zaire strain. Cases near Uganda and South Sudan border.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'GDP only 1.3% in 2026 — most impacted by US tariffs in Africa. 35% US tariffs, expelled ambassador, SWIFT risk evaluation ongoing.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Path to avoiding default remains narrow — Capital Economics. Eurobond rollover pressure intensifying through H2 2026.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Botswana', flag: '🇧🇼', alert: 'Botswana inflation tripled to 10.3% in April from 4.2% in March — highest since December 2022. Shock inflation spike flagged.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'DANGOTE REJECTS NNPC — THE IPO IS NOW STRUCTURALLY DE-RISKED',
    body: 'Aliko Dangote has publicly refused the NNPC\'s bid to raise its stake in the $20bn Lekki refinery. This locks in the equity structure ahead of the planned IPO subscription window and materially de-risks the prospectus by removing ambiguity about state shareholder presence. Norway\'s $1.9 trillion sovereign wealth fund acquiring 5% of Patrice Motsepe\'s ARM on the same day signals that global institutional capital is building African exposure at scale. The Dangote IPO, the Ghana Fitch upgrade, and Norwegian sovereign wealth fund buying ARM — these three signals arriving on the same day define the week.',
    tag: 'MAY 15 FEATURED SIGNAL',
    color: '#00c48c',
    author: 'Lord Fiifi Quayle',
    date: 'May 15, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Improving', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '235', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '575', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA OUTBREAK IN DRC ITURI — 246 CASES, 65 DEATHS', body: 'Africa CDC declares Ebola outbreak in DRC\'s Ituri province. Non-Zaire strain. Cases in Mongwalu and Rwampara, with suspected cases in Bunia near Uganda border. Mining mobility and ADF insurgent activity flagged as primary spread risks. Cross-border coordination with Uganda and South Sudan underway.', icon: '🚨' },
    { title: 'DANGOTE REJECTS NNPC + NORWAY BUYS ARM', body: 'Dangote refuses NNPC bid to raise stake in $20bn Lekki refinery, locking equity structure ahead of IPO. Norway\'s $1.9tn sovereign wealth fund buys 5% of ARM. Ghana gets Fitch upgrade to B. Three positive African capital market signals in one day.', icon: '💰' },
    { title: 'FITCH UPGRADES GHANA TO B — POSITIVE OUTLOOK', body: 'Fitch upgrades Ghana sovereign rating from B- to B with positive outlook, reflecting fiscal consolidation and currency stabilisation post-restructuring. GSE +66% YTD in cedi, +54.6% in USD — strongest African equity market in hard currency. Ghana is the continent\'s recovery story of 2026.', icon: '🇬🇭' },
    { title: 'SOUTH AFRICA GDP ONLY 1.3% — US TARIFFS MOST IMPACTED IN AFRICA', body: 'Allianz Country Risk: SA GDP growth at 1.3% in 2026, up from 1.1% in 2025. Most impacted African economy by US 35% tariffs. Government debt at 78% of GDP. GNU coalition holding but durability uncertain ahead of fall municipal elections.', icon: '📊' },
  ],

  insight1: {
    title: 'THE DRC EBOLA OUTBREAK IS THE MACRO RISK NOBODY IS PRICING TODAY',
    body: 'Africa CDC has declared a new Ebola outbreak in DRC\'s Ituri province with 246 suspected cases and 65 deaths. Non-Zaire strain — potentially more transmissible. Cases confirmed near Bunia, the provincial capital near Uganda border. Mining-related mobility in Mongwalu and ADF insurgent activity are primary spread risks. The 2018-2020 DRC Ebola outbreak lasted two years and killed 2,287 people. If this outbreak spreads to Uganda and South Sudan, the macro consequences for East African trade, FDI and sovereign risk will be significant and are not in current credit spreads.',
    conclusion: 'DRC EBOLA OUTBREAK IS AN EMERGING MACRO RISK TRANSMISSION CHANNEL FOR EAST AFRICA. WATCH SPREAD TRAJECTORY CLOSELY.',
  },

  insight2: {
    title: 'GHANA IS NOW THE MOST CREDIBLE SOVEREIGN CREDIT RECOVERY STORY IN AFRICA',
    body: 'Fitch upgrades Ghana to B with positive outlook. GSE +54.6% YTD in USD — strongest African market in hard currency. Cedi first annual gain vs dollar since 1994. Debt-to-GDP falling toward 60% by end 2026. Post-restructuring fiscal consolidation is delivering. The France-Africa summit in Nairobi saw African leaders push back on excessive sovereign risk premiums — Ghana\'s Fitch upgrade is the first evidence that ratings agencies are beginning to respond. Ghana is the template for what successful African debt restructuring looks like.',
    conclusion: 'GHANA IS THE CLEANEST AFRICAN CREDIT RECOVERY STORY. THE FITCH UPGRADE IS THE BEGINNING, NOT THE END, OF SPREAD COMPRESSION.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20 CLOSE: EBOLA, IPO DE-RISKING AND GHANA UPGRADE — A WEEK OF DIVERGENCE',
    body: 'Week 20 closes with the sharpest divergence signal of the year. On one side: DRC Ebola outbreak with 246 cases and 65 deaths near Uganda border, Senegal default risk critical, SA GDP at 1.3% under US tariff pressure, Botswana inflation tripling to 10.3% in one month. On the other: Dangote rejects NNPC locking IPO equity structure, Norway\'s $1.9tn sovereign wealth fund buys Motsepe\'s ARM, Fitch upgrades Ghana to B with positive outlook, GSE up 54.6% YTD in USD. Africa in 2026 is not one story — it is at least six. Country selection is everything. The divergence trade has never been clearer.',
  },

  fxRates: {
    NGN: '1369.17',
    GHS: '11.36',
    KES: '129.10',
    EGP: '52.90',
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
    { time: '09:30:00', signal: 'Africa CDC declares Ebola outbreak in DRC Ituri — 246 suspected cases, 65 deaths, non-Zaire strain. Near Uganda border. ADF insurgent activity flagged as spread risk.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Dangote rejects NNPC bid to raise stake in $20bn refinery — IPO equity structure locked in. Subscription window opening soon. Prospectus materially de-risked.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '09:00:00', signal: 'Fitch upgrades Ghana sovereign rating from B- to B, positive outlook — fiscal consolidation and currency stabilisation driving upgrade. GSE +54.6% YTD in USD.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
    { time: '08:45:00', signal: 'Norway $1.9tn sovereign wealth fund acquires 5% of Patrice Motsepe\'s ARM — global institutional capital building African exposure at scale.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'ZAR' },
    { time: '08:30:00', signal: 'South Africa GDP at 1.3% in 2026 — most impacted African economy by US 35% tariffs. Government debt at 78% GDP. GNU durability uncertain ahead of fall municipal elections.', detail: 'HIGH', type: 'WARNING', tag: 'MACRO RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Botswana inflation tripled to 10.3% in April 2026 from 4.2% in March — highest since December 2022. Shock inflation spike requires immediate policy response.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Senegal sovereign default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Atlantic Council: without reversal, default likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'NGN at 1,369.17 — down 14.35% vs USD over past year. Weekly range 1,357-1,373. Nigeria approaching CBN rate-cutting cycle as balance of payments stabilises.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 60, fiscal: 62, fx: 55, debt: 60, political: 68, external: 55 },
    { country: 'Ghana', flag: '🇬🇭', score: 48, fiscal: 50, fx: 42, debt: 52, political: 38, external: 55 },
    { country: 'Kenya', flag: '🇰🇪', score: 75, fiscal: 75, fx: 65, debt: 85, political: 75, external: 72 },
    { country: 'Egypt', flag: '🇪🇬', score: 72, fiscal: 76, fx: 78, debt: 70, political: 65, external: 72 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 65, fx: 75, debt: 62, political: 90, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Zambia', flag: '🇿🇲', score: 74, fiscal: 78, fx: 68, debt: 85, political: 72, external: 68 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 65, debt: 78, political: 55, external: 78 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,369.17', change: '-14.35%', stress: 'MODERATE', ytd: '-5.26%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'MODERATE', ytd: '-1.20%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.90', change: '+5.44%', stress: 'HIGH', ytd: '-8.40%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.50', change: '+1.50%', stress: 'MODERATE', ytd: '+1.20%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '915.00', change: '-8.40%', stress: 'MODERATE', ytd: '-5.20%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'First since 2021 Tigray conflict. Abiy Ahmed near-certain to win. DRC Ebola near Uganda border adds regional risk.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'GNU durability test. Allianz: outcome will be major support indicator for coalition stability.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'September 2026', type: 'Parliamentary Elections', risk: 'LOW', note: 'Crown Prince elevated in Royal Armed Forces. Political transition preparation underway.', color: '#00c48c' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Civilian airstrike crisis complicating reform narrative. Dangote IPO a potential positive catalyst.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ruto presidency described as vulnerable. Default risk path narrow. Gen-Z movement reshaping politics.', color: '#ff3b3b' },
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
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', trend: '→', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+22', bond: '-1.1pts', fx: '-0.5%', signal: 'TARIFF + SWIFT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 182, delta: '+25', bond: '-1.2pts', fx: '-0.2%', signal: 'DEFAULT PATH NARROW', color: '#ff3b3b' },
    { country: 'ANGOLA', cds: 555, delta: '+15', bond: '-0.8pts', fx: '-0.4%', signal: 'OIL + DEBT STRESS', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 575, delta: '+6', bond: '-0.3pts', fx: '-0.2%', signal: 'FX STABILISING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-10', bond: '+0.5pts', fx: '+0.2%', signal: 'IPO + RATE CUT', color: '#00c48c' },
    { country: 'GHANA', cds: 235, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
