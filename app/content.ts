export const content = {
  riskIndex: '77',
  riskStatus: 'HIGH',

  riskMonitor: {
    updated: 'May 18, 2026 09:00 UTC',
    overallScore: 77,
    trend: 'WORSENING',
    drivers: ['WHO Ebola PHEIC Declared', 'Kenya High Ebola Alert', 'Trump Nigeria Christian Violence Claims', 'SA Xenophobia Crisis Deepening'],
    regions: [
      { region: 'East Africa', score: 80, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 68, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 85, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'WHO declares Ebola outbreak a Public Health Emergency of International Concern. Kenya on high alert. East Africa trade and FDI flows at risk.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Trump cites Nigeria Christian violence as justification for military strikes. Atiku slams Tinubu\'s slow SA response. US-Nigeria relations under severe strain.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Xenophobia crisis deepening — Ghana evacuated 300, Nigeria slow to act per Atiku. SA president under pressure over corruption allegations. CNN: daughter of former leader luring men to fight for Russia.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Kenya on high Ebola alert following Uganda imported case. WHO PHEIC declared. Fuel approaching KSh300/litre. Eurobond rollover pressure intensifying.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'WHO DECLARES EBOLA PHEIC — EAST AFRICA MACRO RISK IS NOW A GLOBAL HEALTH EVENT',
    body: 'The World Health Organization has declared the Ebola outbreak in DRC and Uganda a Public Health Emergency of International Concern — the highest level of global health alert. Kenya is now on high Ebola alert. This transforms the outbreak from a regional health emergency into a global macro risk event. DRC and Uganda are key East African trade corridors. A PHEIC declaration triggers international travel advisories, border restrictions and FDI freezes. East African sovereign credit spreads are not pricing this. They should be.',
    tag: 'WEEK 21 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 18, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '425', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '235', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '185', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '575', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Uganda', flag: '🇺🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '330', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'WHO EBOLA PHEIC — HIGHEST GLOBAL HEALTH ALERT DECLARED', body: 'WHO declares DRC-Uganda Ebola outbreak a Public Health Emergency of International Concern. Kenya on high alert. 246 suspected cases, 65 deaths. Non-Zaire strain. International travel advisories, border restrictions and FDI freezes now possible across East Africa.', icon: '🚨' },
    { title: 'TRUMP CITES NIGERIA CHRISTIAN VIOLENCE — US-NIGERIA CRISIS DEEPENING', body: 'Trump cites violence in Nigeria targeting Christians as justification for US military strikes. CNN: reality is more nuanced — violence not limited to Christians. But the framing damages Nigeria\'s international standing and complicates US-Nigeria relations ahead of 2027 elections.', icon: '⚠️' },
    { title: 'ATIKU SLAMS TINUBU ON SA XENOPHOBIA RESPONSE', body: 'Former VP Atiku Abubakar publicly criticises Tinubu\'s "lethargy" on South Africa xenophobia crisis. Ghana evacuated 300 citizens decisively. Nigeria moved slowly despite citizens bearing brunt of attacks. Atiku calls for stronger travel advisory and evacuation plan.', icon: '🇳🇬' },
    { title: 'SA PRESIDENT UNDER PRESSURE — CORRUPTION AND RUSSIA LINKS', body: 'South Africa\'s president came to power on anticorruption mandate and could go now for stuffing cash in furniture. CNN: daughter of former SA leader accused of luring men to fight for Russia. SA political risk accumulating rapidly.', icon: '🇿🇦' },
  ],

  insight1: {
    title: 'THE WHO PHEIC IS THE SINGLE BIGGEST MACRO RISK EVENT FOR EAST AFRICA IN 2026',
    body: 'A WHO Public Health Emergency of International Concern triggers a cascade of international responses: travel advisories, border restrictions, FDI freezes, multilateral emergency funding reallocation and media attention that shapes investor sentiment. DRC and Uganda are key East African trade corridors. Kenya is now on high alert. Ethiopia is 6 weeks from its general election. Zambia is 12 weeks from its general election. The compound risk — Ebola PHEIC, political cycles, fuel price shocks and debt rollover — makes East Africa the highest-risk macro region on the continent right now.',
    conclusion: 'EAST AFRICA SOVEREIGN CREDIT IS MISPRICED. THE PHEIC DECLARATION SHOULD TRIGGER SPREAD WIDENING ACROSS THE REGION.',
  },

  insight2: {
    title: 'TRUMP\'S NIGERIA FRAMING IS A GEOPOLITICAL RISK TRANSMISSION CHANNEL',
    body: 'Trump citing Nigeria Christian violence as justification for US military strikes — even if the characterisation is disputed by CNN — creates a geopolitical narrative risk for Nigeria that is separate from the security reality. It damages Nigeria\'s international standing, complicates diplomatic relations, and provides domestic opposition with ammunition ahead of 2027 elections. Combined with Atiku\'s public criticism of Tinubu on the SA crisis, Nigerian political risk is building from multiple directions simultaneously.',
    conclusion: 'NIGERIA POLITICAL RISK IS UNDERPRICED FOR A COUNTRY 18 MONTHS FROM A GENERAL ELECTION. WATCH NGN AND NIGERIA CREDIT.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21: WHO EBOLA PHEIC, TRUMP-NIGERIA CRISIS AND SA POLITICAL DETERIORATION',
    body: 'Week 21 opens with three compounding crises. First: WHO declares Ebola in DRC-Uganda a global health emergency — Kenya on high alert, East African trade corridors at risk, FDI freeze possible. Second: Trump cites Nigeria Christian violence for military strikes, Atiku publicly slams Tinubu\'s slow SA response — Nigerian political risk building from multiple directions 18 months before a general election. Third: South Africa\'s president faces corruption allegations over cash in furniture, the daughter of a former leader is accused of recruiting for Russia — SA political risk is accumulating at a pace that ZAR and SA bonds are not pricing. Africa\'s compound risk environment has never been more complex.',
  },

  fxRates: {
    NGN: '1369.64',
    GHS: '11.36',
    KES: '129.10',
    EGP: '52.83',
    XOF: '610.00',
    ZAR: '18.16',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3695.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'WHO declares Ebola in DRC-Uganda a Public Health Emergency of International Concern — highest global health alert. Kenya on high Ebola alert. East Africa FDI and trade at risk.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'UGX' },
    { time: '09:15:00', signal: 'Trump cites Nigeria Christian violence as reason for US military strikes. CNN: reality more nuanced. US-Nigeria relations under severe strain ahead of 2027 elections.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'NGN' },
    { time: '09:00:00', signal: 'Atiku slams Tinubu\'s slow SA xenophobia response — Ghana evacuated 300, Nigeria moved sluggishly. Calls for stronger travel advisory and evacuation plan for Nigerians.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '08:45:00', signal: 'SA president faces corruption allegations — cash stuffed in furniture. CNN: daughter of former leader accused of luring men to fight for Russia. SA political risk accumulating.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'NGN at 1,369.64 — down 14.37% vs USD over past year. Weekly range 1,357-1,373. Monthly range 1,349-1,376. CBN rate cut approaching as balance of payments stabilises.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:15:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Without policy reversal, sovereign default increasingly likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:00:00', signal: 'Ghana GHS at 11.36 — post-Fitch upgrade B/positive outlook. GSE +54.6% YTD in USD. Strongest African equity market in hard currency. Recovery story intact.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
    { time: '07:45:00', signal: 'UGX at 3,695 — weakening as Ebola PHEIC declaration triggers risk-off sentiment on Uganda. DRC-Uganda trade corridor disruption risk elevated.', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'UGX' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 68, fiscal: 65, fx: 60, debt: 62, political: 82, external: 72 },
    { country: 'Ghana', flag: '🇬🇭', score: 46, fiscal: 48, fx: 40, debt: 50, political: 38, external: 52 },
    { country: 'Kenya', flag: '🇰🇪', score: 78, fiscal: 76, fx: 72, debt: 85, political: 78, external: 82 },
    { country: 'Egypt', flag: '🇪🇬', score: 72, fiscal: 76, fx: 76, debt: 70, political: 65, external: 72 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 65, fx: 75, debt: 62, political: 92, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Uganda', flag: '🇺🇬', score: 78, fiscal: 68, fx: 68, debt: 72, political: 65, external: 90 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 65, debt: 78, political: 55, external: 78 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,369.64', change: '-14.37%', stress: 'MODERATE', ytd: '-5.22%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'ELEVATED', ytd: '-1.20%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.83', change: '+5.53%', stress: 'HIGH', ytd: '-8.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.16', change: '+0.80%', stress: 'MODERATE', ytd: '+0.60%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,695.00', change: '-8.50%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Postponed to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'President\'s term expired May 15. Elections postponed. Opposition protests erupting. Constitutional crisis ongoing.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC declared — WHO emergency status adds regional security complexity ahead of polls.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'President faces corruption allegations. Daughter of former leader accused of Russian recruitment. GNU durability uncertain.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Trump framing, Atiku criticism, SA slow response — political risk building from multiple directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC alert. Fuel price shock. Debt rollover. Ruto described as vulnerable. Default path narrow.', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 185, delta: '+32', bond: '-1.6pts', fx: '-0.3%', signal: 'EBOLA + DEBT', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 425, delta: '+20', bond: '-1.0pts', fx: '-0.4%', signal: 'TRUMP + POLITICAL', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+18', bond: '-0.9pts', fx: '+0.2%', signal: 'CORRUPTION + GNU', color: '#ff3b3b' },
    { country: 'UGANDA', cds: 330, delta: '+28', bond: '-1.4pts', fx: '-0.5%', signal: 'EBOLA PHEIC', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 575, delta: '+5', bond: '-0.3pts', fx: '-0.1%', signal: 'FX STABILISING', color: '#f5a623' },
    { country: 'GHANA', cds: 235, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
