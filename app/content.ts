export const content = {
  riskIndex: '79',
  riskStatus: 'HIGH',

  riskMonitor: {
    updated: 'May 19, 2026 09:00 UTC',
    overallScore: 79,
    trend: 'WORSENING',
    drivers: ['Ebola 513 Cases 131 Deaths', 'Kenya Fuel Protests 4 Dead', 'Africa Health Sovereignty Crisis', 'US Donor Support Halved'],
    regions: [
      { region: 'East Africa', score: 84, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 70, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 78, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 90, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola PHEIC escalating — 513 suspected cases, 131 deaths. Uganda 2 cases, 1 death. No vaccine or treatment. US donor support slashed 50%.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: '4 killed, 30 injured in nationwide fuel cost protests. Security deployed across country. Eurobond rollover pressure intensifying. Ruto government under siege.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Mali', flag: '🇲🇱', alert: 'Al-Qaeda kills defence minister, forces Russian mercenaries to retreat — Sahel security collapse accelerating. JNIM unprecedented attack.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'US-Nigeria joint ISIL operation + Trump Christian violence framing + Atiku criticism — political risk building from multiple directions ahead of 2027 elections.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'KENYA FUEL PROTESTS KILLING CITIZENS — RUTO GOVERNMENT NOW FACES EXISTENTIAL POLITICAL RISK',
    body: '4 people killed and 30 injured in nationwide Kenya protests over rising fuel costs. Security forces deployed across the country. This is happening simultaneously with Ebola PHEIC escalating to 513 cases, Eurobond rollover pressure intensifying, and the Ruto presidency already described as vulnerable. The fuel protest deaths create a Gen-Z protest moment that could crystallise opposition ahead of 2027 elections. Kenya sovereign credit is not pricing the compound political and fiscal risk it is now carrying.',
    tag: 'MAY 19 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 19, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '420', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '235', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '188', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '570', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '195', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA 513 CASES 131 DEATHS — PHEIC ESCALATING', body: 'DRC Bundibugyo Ebola now at 513 suspected cases and 131 deaths. Uganda confirms 2 cases and 1 death. No vaccine or treatment. US donor support slashed 50% under Trump cuts. Africa importing 90%+ of health commodities. Health sovereignty agenda accelerating.', icon: '🚨' },
    { title: 'KENYA FUEL PROTESTS — 4 DEAD, 30 INJURED', body: 'Nationwide Kenya protests over rising fuel costs kill 4 and injure 30. Security deployed across country. Ruto government faces Gen-Z-style political crystallisation moment. Eurobond rollover and default path narrow simultaneously.', icon: '🔥' },
    { title: 'AFRICA HEALTH SOVEREIGNTY — US DONOR SUPPORT HALVED', body: 'Trump cuts slash US health support to Africa by 50%. Africa importing 90%+ of vaccines and medicines. Health emergencies surged from 153 to 242 outbreaks between 2022-2024. Ghana\'s Accra Reset and Africa Health Security Agenda launched in response.', icon: '💊' },
    { title: 'MALI DEFENCE MINISTER KILLED — SAHEL COLLAPSE', body: 'JNIM kills Mali defence minister, forces Russian mercenaries to retreat. Unprecedented attack in epicentre of global terrorism. Mali-Russia security partnership has failed. Sahel security vacuum deepening with spillover risks to coastal West Africa.', icon: '⚔️' },
  ],

  insight1: {
    title: 'KENYA IS NOW CARRYING THE HIGHEST COMPOUND SOVEREIGN RISK ON THE CONTINENT',
    body: 'Consider what Kenya is simultaneously managing: Eurobond rollover of $2bn in Q2 2026 with a narrow default path; Ebola PHEIC with moderate importation risk; fuel price protests killing citizens; a president described as vulnerable; Gen-Z movement with demonstrated capacity to force political change; and US donor support to health halved. No other African sovereign is carrying this combination of fiscal, political, health and security risks simultaneously. KES at 129.10 and Kenya credit spreads are not pricing this compound risk.',
    conclusion: 'KENYA IS THE SINGLE HIGHEST-RISK SOVEREIGN IN EAST AFRICA RIGHT NOW. SPREADS MUST WIDEN.',
  },

  insight2: {
    title: 'AFRICA\'S HEALTH SOVEREIGNTY MOMENT IS A STRUCTURAL MACRO SHIFT',
    body: 'The Ebola PHEIC with no vaccine and US donor support halved is forcing a fundamental rethink of Africa\'s health financing architecture. Ghana\'s Accra Reset, the Africa Health Security Agenda, domestic vaccine manufacturing targets — these are not just health policy responses. They are fiscal policy responses. Higher taxes on tobacco and alcohol, pooled procurement, domestic pharma investment — these have direct implications for fiscal space, inflation and sovereign credit in the countries that implement them.',
    conclusion: 'AFRICA\'S HEALTH SOVEREIGNTY PIVOT WILL SHOW UP IN FISCAL DATA BEFORE IT SHOWS UP IN POLICY DOCUMENTS. WATCH GHANA FIRST.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21: EBOLA 513 CASES, KENYA PROTESTS 4 DEAD AND AFRICA HEALTH SOVEREIGNTY',
    body: 'Week 21 delivers the most intense compound risk signal of 2026. Ebola has escalated to 513 suspected cases and 131 deaths — Uganda confirmed 2 cases and 1 death — with no vaccine or treatment and US donor support halved under Trump cuts. Kenya\'s fuel protests have killed 4 people and injured 30, crystallising political opposition to Ruto simultaneously with his Eurobond rollover crisis. Mali\'s defence minister was killed by al-Qaeda, forcing Russian mercenaries to retreat and exposing the failure of the Sahel-Russia security partnership. Africa\'s macro risk environment has never been this dense with simultaneous crises. The divergence trade remains: Ghana is the continental recovery story. Everything else requires careful risk assessment.',
  },

  fxRates: {
    NGN: '1370.31',
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
    { time: '09:30:00', signal: 'Ebola escalates to 513 suspected cases, 131 deaths in DRC. Uganda 2 cases, 1 death. No vaccine or treatment. US donor support slashed 50% under Trump cuts.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: '4 killed, 30 injured in Kenya nationwide fuel cost protests. Security deployed across country. Ruto government faces existential political risk moment.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'Africa imports 90%+ of health commodities — health emergencies surged 153 to 242 outbreaks 2022-2024. Ghana Accra Reset and Africa Health Sovereignty Agenda launched in response.', detail: 'HIGH', type: 'WARNING', tag: 'MACRO RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'JNIM kills Mali defence minister, forces Russian mercenaries to retreat — Mali-Russia security partnership has failed. Sahel security vacuum deepening.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'XOF' },
    { time: '08:30:00', signal: 'NGN at 1,370.31 — down 14.37% vs USD over past year. Average 1,455.88 over past year. US-Nigeria joint ISIL ops signal positive but IS still on offensive in northwest.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:15:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Without policy reversal, sovereign default increasingly likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:00:00', signal: 'Ghana GHS at 11.36 — Fitch B/positive outlook. GSE strongest African market YTD in hard currency. Post-restructuring recovery story remains continental benchmark.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
    { time: '07:45:00', signal: 'UGX at 3,700 — Ebola PHEIC risk-off. DRC-Uganda trade corridor disruption. Kampala screening underway. Uganda 2 cases 1 death confirmed.', detail: 'HIGH', type: 'ALERT', tag: 'FX PRESSURE', country: 'UGX' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 62, fx: 58, debt: 62, political: 80, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 44, fiscal: 46, fx: 38, debt: 48, political: 36, external: 50 },
    { country: 'Kenya', flag: '🇰🇪', score: 82, fiscal: 78, fx: 72, debt: 88, political: 88, external: 86 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 74, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 65, fx: 72, debt: 62, political: 90, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 94, fx: 84, debt: 92, political: 80, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 82, fiscal: 68, fx: 75, debt: 72, political: 65, external: 95 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'MODERATE', ytd: '-5.18%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'ELEVATED', ytd: '-1.20%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.83', change: '+5.53%', stress: 'HIGH', ytd: '-8.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.16', change: '+0.80%', stress: 'MODERATE', ytd: '+0.60%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,700.00', change: '-8.80%', stress: 'ELEVATED', ytd: '-5.10%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Postponed to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'President term expired May 15. Opposition protests ongoing. Constitutional crisis unfolding.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. Bundibugyo outbreak adds regional complexity to poll.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'President corruption allegations. GNU durability test. US-SA relations lowest point.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Trump framing, Atiku criticism, SA slow response — political risk building from multiple directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Fuel protests killing citizens. Ebola risk. Debt rollover. Ruto described as vulnerable. Default path narrow.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↑', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+55', bond: '-2.5pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 188, delta: '+35', bond: '-1.8pts', fx: '-0.3%', signal: 'PROTEST + DEBT', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'DEFENCE MIN KILLED', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 195, delta: '+18', bond: '-0.9pts', fx: '+0.2%', signal: 'CORRUPTION + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 570, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'FX STABILISING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 420, delta: '-8', bond: '+0.4pts', fx: '+0.1%', signal: 'JOINT OPS + IPO', color: '#00c48c' },
    { country: 'GHANA', cds: 235, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
