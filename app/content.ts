export const content = {
  riskIndex: '76',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 15, 2026 09:00 UTC',
    overallScore: 76,
    trend: 'WORSENING',
    drivers: ['Kigali CEO Forum Signals', 'Nigeria Debt Servicing Alarm', 'SA Flood Death Toll Rising', 'Senegal Default Contagion'],
    regions: [
      { region: 'East Africa', score: 70, trend: '→', color: '#f5a623' },
      { region: 'West Africa', score: 75, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 68, trend: '↑', color: '#f5a623' },
    ]
  },

  sovereignAlerts: [
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Tinubu warns debt servicing to consume 50% of 2026 revenue ($11.6bn). Fiscal space evaporating as 2027 election spending looms.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Western Cape flood death toll rises to 10; 90,000 displaced. National disaster response struggling with infrastructure collapse.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Rwanda', flag: '🇷🇼', alert: 'Africa CEO Forum opens in Kigali. Focus on private sector scaling vs. sovereign debt constraints. 2,000+ delegates attending.', severity: 'MEDIUM', color: '#00c48c' },
    { country: 'Morocco', flag: '🇲🇦', alert: 'Government projects 5.3% GDP growth for 2026 driven by agricultural recovery. Outlier in regional fiscal distress.', severity: 'LOW', color: '#00c48c' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF remains sidelined; default risk contagion spreading to regional bond markets as PM maintains hardline stance.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'NIGERIA’S DEBT TRAP: 50% REVENUE TO SERVICE INTEREST IN 2026',
    body: 'President Tinubu’s admission that debt servicing will swallow $11.6bn (nearly half of projected revenue) in 2026 is the final wake-up call for markets. With food inflation unanchored and the NGN volatile, the fiscal "straightjacket" is tightening. This leaves zero room for the social spending needed to pacify the electorate ahead of 2027. The macro-political collision is no longer a tail risk; it is the baseline.',
    tag: 'MAY 15 FEATURED SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 15, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'CRITICAL', statusColor: '#ff3b3b', cds: '445', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '240', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '185', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '575', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '205', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'DEFAULT RISK', statusColor: '#ff3b3b', cds: '870', fxPressure: 'HIGH', liquidity: 'CRITICAL' },
  ],

  whatMattersNow: [
    { title: 'KIGALI AFRICA CEO FORUM — PRIVATE SECTOR VS DEBT', body: 'The 2026 forum in Kigali highlights a stark divide: a vibrant private sector ready to scale vs. sovereign balance sheets crippled by debt. Tinubu and other leaders are pitching "potential" while markets focus on "solvency".', icon: '🌍' },
    { title: 'SOUTH AFRICA FLOOD DISASTER — 10 DEAD, 90K DISPLACED', body: 'The Western Cape disaster has escalated. 10 confirmed dead. Infrastructure damage is estimated in the billions of Rand. National disaster status is now testing the coalition government\'s coordination.', icon: '🌊' },
    { title: 'NIGERIA REVENUE ALARM — $11.6BN DEBT BILL', body: 'Nearly 50% of 2026 revenue is now committed to debt servicing. This creates a massive fiscal gap that will likely be filled by further borrowing or aggressive tax enforcement, both politically toxic.', icon: '📉' },
    { title: 'MOROCCO GROWTH OUTLIER — 5.3% TARGET', body: 'In a sea of regional stress, Morocco stands out with a 5.3% growth projection for 2026. Agricultural recovery and industrial exports are the primary drivers of this resilience.', icon: '📈' },
  ],

  insight1: {
    title: 'THE KIGALI SIGNAL: AFRICA’S "GREAT DIVIDE" IS WIDENING',
    body: 'The Africa CEO Forum in Kigali (May 14-15) showcases the continent’s duality. On one hand, 2,000+ executives are discussing digital transformation and cross-border trade (AfCFTA). On the other, the host region’s sovereigns are drowning in interest payments. The "Kigali Signal" is clear: the private sector is decoupling from sovereign risk, but the latter remains a heavy anchor on growth. Investors are now picking winners (Morocco, Rwanda) and avoiding laggards (Nigeria, Senegal).',
    conclusion: 'SELECTIVE RESILIENCE IS THE NEW THEME. SOVEREIGN SOLVENCY IS THE PRIMARY FILTER.',
  },

  insight2: {
    title: 'SOUTH AFRICA’S CLIMATE RISK IS NOW A FISCAL RISK',
    body: 'The Western Cape floods (10 dead, 90k displaced) are no longer just a weather event; they are a fiscal shock. The cost of rebuilding infrastructure in the Cape, combined with existing logistics and energy crises, will force a reallocation of the 2026 budget. With the ZAR under pressure and CDS spreads widening to 205bps, the "National Disaster" is now a macro-stability concern.',
    conclusion: 'CLIMATE ADAPTATION COSTS ARE BECOMING A MAJOR CREDIT NEGATIVE FOR SOUTH AFRICA.',
  },

  brief: {
    week: '20',
    title: 'WEEK 20 CLOSE: THE FISCAL REALITY CHECK',
    body: 'We close Week 20 with a brutal reality check. Nigeria’s $11.6bn debt bill and South Africa’s climate disaster have pushed the regional Risk Index to 76. While the Africa CEO Forum in Kigali offers a vision of a prosperous future, the immediate path is blocked by sovereign insolvency and environmental shocks. Morocco remains the sole bright spot with 5.3% growth. The theme for May 15 is clear: the margin for error in African macro-management has effectively hit zero.',
  },

  fxRates: {
    NGN: '1375.50',
    GHS: '11.35',
    KES: '129.50',
    EGP: '52.80',
    XOF: '612.00',
    ZAR: '18.65',
    ETB: '135.00',
    TZS: '2660.00',
    UGX: '3695.00',
    MAD: '9.70',
    XAF: '612.00',
    ZMW: '19.25',
    AOA: '920.00',
    MZN: '64.10',
  },

  signals: [
    { time: '09:30:00', signal: 'Tinubu confirms $11.6bn debt servicing bill for 2026; nearly 50% of projected revenue. Markets price in fiscal tightening.', detail: 'HIGH', type: 'ALERT', tag: 'FISCAL RISK', country: 'NGN' },
    { time: '09:15:00', signal: 'Western Cape flood death toll hits 10. 90,000 people displaced. Infrastructure damage assessment underway.', detail: 'HIGH', type: 'ALERT', tag: 'CLIMATE', country: 'ZAR' },
    { time: '09:00:00', signal: 'Africa CEO Forum Kigali: Leaders call for private sector to lead growth amid sovereign debt constraints.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Morocco projects 5.3% GDP growth for 2026. Strong agricultural recovery and industrial output cited.', detail: 'LOW', type: 'INFO', tag: 'GROWTH', country: 'MAD' },
    { time: '08:30:00', signal: 'Senegal bond spreads widen as IMF program remains suspended. Contagion risk to regional XOF markets.', detail: 'HIGH', type: 'WARNING', tag: 'DEBT', country: 'SN' },
    { time: '08:15:00', signal: 'Nigeria NGN weakens to 1,375.50 as FX demand for debt servicing intensifies.', detail: 'MEDIUM', type: 'WARNING', tag: 'FX', country: 'NGN' },
    { time: '08:00:00', signal: 'Rwanda RDB CEO highlights cross-border investment as key to 2026 resilience at Kigali forum.', detail: 'LOW', type: 'INFO', tag: 'TRADE', country: 'RWA' },
    { time: '07:45:00', signal: 'Zambia ZMW hits 19.25. Power crisis and election spending concerns weighing on currency.', detail: 'MEDIUM', type: 'WARNING', tag: 'FX', country: 'ZMW' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 85, fx: 68, debt: 80, political: 85, external: 72 },
    { country: 'Ghana', flag: '🇬🇭', score: 50, fiscal: 52, fx: 45, debt: 55, political: 38, external: 58 },
    { country: 'Kenya', flag: '🇰🇪', score: 75, fiscal: 78, fx: 68, debt: 84, political: 78, external: 72 },
    { country: 'Egypt', flag: '🇪🇬', score: 73, fiscal: 76, fx: 78, debt: 70, political: 62, external: 74 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 70, fx: 75, debt: 65, political: 92, external: 75 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 95, fx: 85, debt: 95, political: 80, external: 88 },
    { country: 'Zambia', flag: '🇿🇲', score: 78, fiscal: 82, fx: 75, debt: 90, political: 78, external: 72 },
    { country: 'Angola', flag: '🇦🇴', score: 72, fiscal: 75, fx: 70, debt: 80, political: 58, external: 78 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,375.50', change: '-15.50%', stress: 'CRITICAL', ytd: '-7.20%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.35', change: '+25.80%', stress: 'LOW', ytd: '+7.80%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.50%', stress: 'MODERATE', ytd: '-1.50%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.80', change: '+5.50%', stress: 'HIGH', ytd: '-8.50%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.65', change: '-1.20%', stress: 'HIGH', ytd: '-2.10%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.25', change: '-33.10%', stress: 'HIGH', ytd: '-13.20%', color: '#ff3b3b' },
    { code: 'AOA', country: 'Angola', rate: '920.00', rate: '920.00', change: '-9.10%', stress: 'MODERATE', ytd: '-5.80%', color: '#f5a623' },
    { code: 'ETB', country: 'Ethiopia', rate: '135.00', change: '-20.10%', stress: 'HIGH', ytd: '-10.50%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'May 16, 2026', type: 'Opposition Protest', risk: 'CRITICAL', note: 'Protests scheduled for tomorrow in Mogadishu. Security forces on high alert.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'MEDIUM', note: 'Regional stability concerns rising as election month approaches.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Power crisis and inflation fueling opposition momentum.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'September 2026', type: 'Parliamentary Elections', risk: 'LOW', note: 'Succession preparation and growth resilience providing stability.', color: '#00c48c' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Fiscal crisis narrowing the path for incumbent reforms.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$3.5bn', instrument: 'Eurobond + IMF', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'SUSPENDED', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$11.6bn', instrument: 'Interest Servicing', maturity: 'FY 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic + External', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 870, delta: '+75', bond: '-3.2pts', fx: '-2.5%', signal: 'DEFAULT CONTAGION', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 445, delta: '+38', bond: '-1.5pts', fx: '-0.9%', signal: 'DEBT SERVICING ALARM', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 205, delta: '+32', bond: '-1.8pts', fx: '-1.2%', signal: 'FLOOD DISASTER', color: '#ff3b3b' },
    { country: 'KENYA', cds: 185, delta: '+28', bond: '-1.4pts', fx: '-0.5%', signal: 'DEBT STRAIN', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 1015, delta: '+32', bond: '-1.1pts', fx: '-0.8%', signal: 'CURRENCY STRESS', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 575, delta: '+3', bond: '-0.2pts', fx: '-0.1%', signal: 'WATCHFUL', color: '#f5a623' },
    { country: 'GHANA', cds: 240, delta: '-11', bond: '+0.6pts', fx: '+0.4%', signal: 'STABLE RECOVERY', color: '#00c48c' },
  ],
}
