export const content = {
  riskIndex: '80',
  riskStatus: 'HIGH',

  riskMonitor: {
    updated: 'May 20, 2026 09:00 UTC',
    overallScore: 80,
    trend: 'WORSENING',
    drivers: ['US Ebola Travel Restrictions', 'Nairobi Transport Shutdown', 'SA NHI Court Ruling', 'American Tests Positive DRC'],
    regions: [
      { region: 'East Africa', score: 86, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 70, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 92, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'US implements Ebola travel restrictions and entry bans effective May 18. American tests positive in DRC. CDC enhanced screening at all US entry points. 513 cases, 131 deaths.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Nairobi paralysed by nationwide transport shutdown — diesel at KSh242 after 23.5% hike. 4 dead in protests. Ruto coalition under same Gen-Z forcing function as 2024 reversal.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Constitutional Court strikes down NHI certificate-of-need provisions — major policy setback for Ramaphosa government. GNU durability test intensifying.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Dangote Refinery captures Atlantic-basin reroute margins from Middle East conflict. Nigeria benefits from oil price premium. But food inflation and 2027 election risk building.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'US EBOLA TRAVEL RESTRICTIONS EFFECTIVE — NAIROBI TRANSPORT SHUTDOWN — EAST AFRICA IS IN A COMPOUND CRISIS',
    body: 'Three events in 48 hours define the East Africa macro risk moment. First: the US has implemented Ebola travel restrictions and entry bans effective May 18 — an American testing positive in DRC triggered Title 42 restrictions. Second: Nairobi is paralysed by a nationwide transport shutdown after Kenya\'s diesel hit KSh242 — a 23.5% hike. Third: South Africa\'s Constitutional Court has struck down NHI provisions, creating a major policy setback for Ramaphosa. East Africa is carrying the highest compound sovereign risk on the continent. Markets are not pricing this.',
    tag: 'MAY 20 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 20, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'US IMPLEMENTS EBOLA TRAVEL RESTRICTIONS — AMERICAN TESTS POSITIVE', body: 'CDC implements enhanced travel screening and entry restrictions effective May 18. Title 42 Order suspending entry from countries with Ebola. American testing positive in DRC is the trigger. 513 cases, 131 deaths. 9 health zones in Ituri Province confirmed. Global travel architecture now reshaping around Africa.', icon: '🚨' },
    { title: 'NAIROBI TRANSPORT SHUTDOWN — DIESEL KSH242 AFTER 23.5% HIKE', body: 'Nairobi paralysed by nationwide transport shutdown over record diesel prices. KSh242 per litre after Friday\'s 23.5% hike. Ruto coalition faces same Gen-Z forcing function as 2024 reversal and 2025 Ojwang protests. 4 already dead in earlier protests.', icon: '🔥' },
    { title: 'SA CONSTITUTIONAL COURT STRIKES DOWN NHI PROVISIONS', body: 'South Africa\'s ConCourt removes central pillar of National Health Insurance implementation. Major policy setback for Ramaphosa government. GNU coalition managing competing demands. US-SA relations at lowest point in decades. GNU durability test intensifying.', icon: '⚖️' },
    { title: 'KAGAME CRITICISES SANCTIONS AT AFRICA CEO FORUM KIGALI', body: 'Rwanda\'s Kagame argues sanctions are applied unfairly — governed by power dynamics not justice. Ruto, Tinubu among presidents in attendance. Africa CEO Forum signals continent\'s growing assertiveness in challenging Western policy frameworks.', icon: '🌍' },
  ],

  insight1: {
    title: 'US EBOLA TRAVEL RESTRICTIONS CHANGE THE FDI AND TRADE CALCULUS FOR EAST AFRICA',
    body: 'The US implementing Title 42 entry restrictions linked to Ebola creates a new layer of macro risk for East and Central Africa. FDI decisions are already being delayed. Business travel is being reconsidered. Airlines are adjusting capacity. The IEA forecasts the oil market undersupplied through October. Kenya\'s diesel at KSh242 is the live transmission case for how the Middle East conflict and Ebola PHEIC compound simultaneously into a sovereign fiscal crisis. Nairobi\'s transport shutdown is not a protest — it is a systemic economic disruption signal.',
    conclusion: 'EAST AFRICA FDI FLOWS WILL CONTRACT IN H2 2026 AS EBOLA TRAVEL RESTRICTIONS AND POLITICAL INSTABILITY COMPOUND. WATCH KES AND KENYA CREDIT.',
  },

  insight2: {
    title: 'DANGOTE REFINERY IS NIGERIA\'S STRATEGIC HEDGE AGAINST MIDDLE EAST OIL VOLATILITY',
    body: 'The Africa Intelligence Brief identifies Dangote Refinery as capturing Atlantic-basin reroute margins from Middle East conflict disruption. Nigeria benefits on both sides — as an oil producer from higher prices, and through the refinery from rerouted refining margins. This is the structural case for Nigeria\'s outperformance: not just FX reform, but an emerging industrial hedge against the geopolitical oil price premium. Combined with CBN rate cuts approaching and the IPO pipeline, Nigeria\'s investment thesis is becoming multi-layered in a way that no other African sovereign can match.',
    conclusion: 'NIGERIA IS THE ONLY AFRICAN SOVEREIGN WITH A CREDIBLE MULTI-LAYER INVESTMENT THESIS IN 2026. THE DANGOTE REFINERY MARGIN CAPTURE IS THE NEWEST LAYER.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21 MID: US EBOLA RESTRICTIONS, NAIROBI SHUTDOWN AND SA NHI COURT RULING',
    body: 'Week 21 reaches peak intensity. The US has implemented Ebola travel restrictions and Title 42 entry bans after an American tested positive in DRC — this reshapes global travel and FDI architecture around East Africa. Nairobi is paralysed by a transport shutdown over diesel at KSh242 after a 23.5% Friday hike — Ruto\'s coalition faces the same Gen-Z forcing function that produced the 2024 political reversal. South Africa\'s Constitutional Court has struck down NHI provisions — a major Ramaphosa policy defeat as the GNU manages competing coalition demands. Meanwhile the Africa CEO Forum in Kigali signals Africa\'s growing assertiveness: Kagame, Ruto and Tinubu all pushing back on Western policy frameworks. The macro risk environment has never been denser. Ghana remains the continental benchmark for recovery. Everything else requires urgent reassessment.',
  },

  fxRates: {
    NGN: '1370.31',
    GHS: '11.36',
    KES: '129.50',
    EGP: '53.12',
    XOF: '610.00',
    ZAR: '18.20',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3710.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'US implements Ebola Title 42 entry restrictions effective May 18 — American tests positive in DRC. CDC enhanced screening at all US entry points. 513 cases, 131 deaths, 9 health zones.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Nairobi paralysed by nationwide transport shutdown — diesel KSh242 after 23.5% hike Friday. Ruto coalition faces Gen-Z forcing function same as 2024 reversal. 4 dead in prior protests.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'SA Constitutional Court strikes down NHI certificate-of-need provisions — major Ramaphosa policy defeat. GNU managing competing coalition demands. US-SA relations at lowest in decades.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'Dangote Refinery capturing Atlantic-basin reroute margins from Middle East conflict — Nigeria benefits on oil price and refining margin simultaneously. IPO weeks away.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:30:00', signal: 'Kagame, Ruto, Tinubu at Africa CEO Forum Kigali — Kagame criticises Western sanctions as power-driven not justice-driven. African sovereign assertiveness rising.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:15:00', signal: 'EGP at 53.12 — up 6.40% YTD. High 54.69 on April 7. IEA: oil market undersupplied through October. Egypt benefits on export side from Middle East conflict premium.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'EGP' },
    { time: '08:00:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Atlantic Council: without reversal, sovereign default likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana GHS at 11.36 — Fitch B/positive outlook. GSE strongest African market YTD in hard currency. Accra Reset health sovereignty agenda gaining traction across continent.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 60, fx: 55, debt: 60, political: 78, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 44, fx: 36, debt: 46, political: 35, external: 48 },
    { country: 'Kenya', flag: '🇰🇪', score: 84, fiscal: 80, fx: 76, debt: 88, political: 90, external: 88 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 68, fx: 72, debt: 62, political: 92, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 94, fx: 84, debt: 92, political: 80, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 84, fiscal: 70, fx: 78, debt: 74, political: 68, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'MODERATE', ytd: '-5.18%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.20', change: '+0.90%', stress: 'MODERATE', ytd: '+0.70%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'ELEVATED', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Postponed to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'President term expired May 15. Opposition protests ongoing. Constitutional crisis unfolding in Mogadishu.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. US travel restrictions reshaping regional movement. Abiy expected to win.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'NHI court defeat. GNU durability test. US-SA lowest point. President corruption allegations ongoing.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Dangote IPO positive but food inflation, IS threat and political risk building from multiple directions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Transport shutdown. Fuel protests 4 dead. Ebola risk. Eurobond rollover. Ruto coalition under siege.', color: '#ff3b3b' },
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
    { country: 'KENYA', cds: 192, delta: '+38', bond: '-1.9pts', fx: '-0.4%', signal: 'SHUTDOWN + DEBT', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+20', bond: '-1.0pts', fx: '+0.2%', signal: 'NHI DEFEAT + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-10', bond: '+0.5pts', fx: '+0.2%', signal: 'REFINERY MARGINS', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
