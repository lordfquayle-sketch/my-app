export const content = {
  riskIndex: '75',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'May 16, 2026 09:00 UTC',
    overallScore: 75,
    trend: 'WORSENING',
    drivers: ['Ebola Spreads to Uganda', 'Somalia Political Crisis', 'Dangote East Africa Refinery', 'France Reset Attempt'],
    regions: [
      { region: 'East Africa', score: 75, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 66, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 78, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Uganda', flag: '🇺🇬', alert: 'Uganda confirms first Ebola death imported from DRC — outbreak spreading beyond Congo border. East Africa regional health risk elevated.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'President\'s term expired May 15 before election postponement to 2027 — opposition protests erupting. Constitutional crisis unfolding in Mogadishu.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $8bn hidden liabilities, IMF suspended, PM rejects restructuring, deficit 14% of GDP', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'GDP only 1.3% in 2026 — most impacted by US tariffs in Africa. SWIFT ban risk evaluation ongoing. GNU durability test approaching.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Diesel may hit KSh300/litre — fuel price shock compounding debt rollover pressure and Ruto political vulnerability.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'EBOLA CROSSES INTO UGANDA — EAST AFRICA HEALTH AND MACRO RISK IS NOW REGIONAL',
    body: 'Uganda has confirmed its first Ebola death from a case imported from DRC\'s Ituri province. This is the signal that transforms the DRC outbreak from a local health emergency into a regional macro risk event. Uganda is a key East African trade corridor. DRC-Uganda border crossing is one of the busiest in Central-East Africa. Mining mobility in Mongwalu and Armed Democratic Forces insurgent activity are both accelerating potential spread. If this reaches Kampala or crosses into South Sudan, the macro consequences for East African trade, FDI and sovereign credit will be significant.',
    tag: 'MAY 16 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 16, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '235', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '182', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '575', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Uganda', flag: '🇺🇬', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '320', fxPressure: 'MODERATE', liquidity: 'WATCH' },
  ],

  whatMattersNow: [
    { title: 'EBOLA SPREADS TO UGANDA — REGIONAL HEALTH EMERGENCY', body: 'Uganda confirms first Ebola death imported from DRC Ituri. 246 suspected cases, 65 deaths in outbreak. Non-Zaire strain. Mining mobility and ADF insurgent activity accelerating spread risk. DRC-Uganda border is one of Africa\'s busiest trade corridors.', icon: '🚨' },
    { title: 'SOMALIA CONSTITUTIONAL CRISIS — PRESIDENT\'S TERM EXPIRED', body: 'Somalia President Hassan Sheikh Mohamud\'s term ended May 15. Elections postponed to 2027. Opposition protests erupting in Mogadishu. Constitutional legitimacy crisis unfolding in one of East Africa\'s most fragile states.', icon: '⚠️' },
    { title: 'DANGOTE EAST AFRICA REFINERY — MOMBASA CONFIRMED', body: 'Dangote confirms Mombasa as preferred site for $17bn East Africa refinery, modelled on the Lagos mega-project. This would be transformative for Kenya\'s energy security and fiscal position. Dangote crosses $35bn wealth and jumps to 65th richest globally.', icon: '🏭' },
    { title: 'FRANCE RESET IN AFRICA — MACRON CALLS FOR FUNDAMENTAL RESET', body: 'Macron at Nairobi Africa Forward summit calls for fundamental reset in Africa-France relations. France trying to rebrand amid fading ties with former colonies after military withdrawals from Mali, Burkina Faso, Niger, Chad, Senegal and Côte d\'Ivoire.', icon: '🤝' },
  ],

  insight1: {
    title: 'SOMALIA\'S CONSTITUTIONAL CRISIS IS EAST AFRICA\'S MOST UNDERREPORTED MACRO RISK',
    body: 'President Hassan Sheikh Mohamud\'s term expired on May 15 before an extension and postponement of elections to 2027. Opposition protests are erupting. Somalia has a history of political transitions triggering security escalation and humanitarian crises. This is happening simultaneously with the Ebola outbreak crossing into Uganda, Kenya\'s fuel price shock approaching KSh300/litre, and the DRC-Uganda border under health emergency. East Africa is facing a compound macro risk event that markets are not pricing.',
    conclusion: 'EAST AFRICA FACES A COMPOUND RISK EVENT: EBOLA, SOMALIA CRISIS, KENYA FUEL SHOCK. WATCH REGIONAL CREDIT SPREADS.',
  },

  insight2: {
    title: 'DANGOTE\'S MOMBASA CONFIRMATION CHANGES KENYA\'S ENERGY SECURITY THESIS',
    body: 'Dangote\'s confirmation of Mombasa as preferred site for his $17bn East Africa refinery — modelled on the Lagos mega-project — is transformative for Kenya\'s sovereign balance sheet. Kenya currently imports refined petroleum products, creating a structural current account drain and FX vulnerability. A domestic refinery would reduce import bills, strengthen KES, and create fiscal space. This is the most significant positive signal for Kenya\'s medium-term macro outlook in 2026.',
    conclusion: 'DANGOTE MOMBASA REFINERY IS A STRUCTURAL POSITIVE FOR KENYA CREDIT — BUT IT IS 5-7 YEARS AWAY. THE NEAR-TERM ROLLOVER RISK REMAINS.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21 OPENS: EBOLA CROSSES TO UGANDA, SOMALIA CRISIS AND DANGOTE MOMBASA',
    body: 'Week 21 opens with three interconnected East Africa stories. First: Ebola has crossed into Uganda — the outbreak is now a regional health emergency with macro risk implications for the DRC-Uganda trade corridor and East African FDI flows. Second: Somalia\'s constitutional crisis is unfolding as the president\'s term expired and elections were postponed to 2027 — opposition protests are erupting in Mogadishu. Third: Dangote has confirmed Mombasa as the preferred site for his $17bn East Africa refinery — a structural positive for Kenya\'s energy security that is 5-7 years away. The compound risk environment in East Africa has never been more complex.',
  },

  fxRates: {
    NGN: '1369.60',
    GHS: '11.36',
    KES: '129.10',
    EGP: '52.83',
    XOF: '610.00',
    ZAR: '18.16',
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
    { time: '09:30:00', signal: 'Uganda confirms first Ebola death imported from DRC — outbreak crosses border. 246 suspected cases, 65 deaths in Ituri. DRC-Uganda trade corridor at risk.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'UGX' },
    { time: '09:15:00', signal: 'Somalia president\'s term expired May 15 — elections postponed to 2027. Opposition protests erupting in Mogadishu. Constitutional crisis unfolding in fragile state.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'Dangote confirms Mombasa as preferred $17bn East Africa refinery site — modelled on Lagos mega-project. Crosses $35bn wealth, 65th richest globally.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'KES' },
    { time: '08:45:00', signal: 'Macron calls for fundamental reset in Africa-France relations at Nairobi summit. France trying to rebrand after military withdrawals from 6 Francophone African nations.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya diesel approaching KSh300/litre — fuel price shock compounding debt rollover pressure. KES at 129.10. Ruto political vulnerability rising ahead of 2027 elections.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO RISK', country: 'KES' },
    { time: '08:15:00', signal: 'NGN at 1,369.60 — down 14.42% vs USD over past year. Average 1,457 over past year, high 1,600 in May 2025, low 1,338 in February 2026. CBN rate cut approaching.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '08:00:00', signal: 'Senegal default risk critical — PM Sonko rejects IMF restructuring, $8bn hidden liabilities, 14% fiscal deficit. Without policy reversal, sovereign default increasingly likely.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'EGP at 52.83 — up 5.53% YTD vs USD. High of 54.69 on April 7. Low of 46.68 on February 16. Middle East conflict keeping external pressure elevated on Egyptian pound.', detail: 'MEDIUM', type: 'WARNING', tag: 'FX UPDATE', country: 'EGP' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 60, fiscal: 62, fx: 55, debt: 60, political: 68, external: 55 },
    { country: 'Ghana', flag: '🇬🇭', score: 46, fiscal: 48, fx: 40, debt: 50, political: 38, external: 52 },
    { country: 'Kenya', flag: '🇰🇪', score: 76, fiscal: 76, fx: 68, debt: 85, political: 78, external: 74 },
    { country: 'Egypt', flag: '🇪🇬', score: 72, fiscal: 76, fx: 78, debt: 70, political: 65, external: 72 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 65, fx: 75, debt: 62, political: 90, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 92, fx: 82, debt: 90, political: 78, external: 85 },
    { country: 'Uganda', flag: '🇺🇬', score: 68, fiscal: 65, fx: 60, debt: 70, political: 62, external: 80 },
    { country: 'Angola', flag: '🇦🇴', score: 70, fiscal: 72, fx: 65, debt: 78, political: 55, external: 78 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,369.60', change: '-14.42%', stress: 'MODERATE', ytd: '-5.26%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.10', change: '-2.10%', stress: 'ELEVATED', ytd: '-1.20%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.83', change: '+5.53%', stress: 'HIGH', ytd: '-8.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.16', change: '+1.20%', stress: 'MODERATE', ytd: '+0.80%', color: '#f5a623' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,680.00', change: '-8.20%', stress: 'ELEVATED', ytd: '-4.50%', color: '#ff3b3b' },
    { code: 'ETB', country: 'Ethiopia', rate: '132.00', change: '-18.50%', stress: 'HIGH', ytd: '-9.80%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Postponed to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'President\'s term expired May 15. Elections postponed. Opposition protests erupting. Constitutional crisis unfolding.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola crossing into Uganda raises regional security concerns. Abiy Ahmed expected to win but legitimacy watched.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'GNU durability test. US-SA relations at lowest in decades. SWIFT risk evaluation ongoing.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Civilian airstrike crisis complicating reform narrative. Dangote IPO a potential positive catalyst.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ruto presidency vulnerable. Fuel price shock. Debt rollover. Default path narrow.', color: '#ff3b3b' },
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
    { country: 'KENYA', cds: 182, delta: '+30', bond: '-1.5pts', fx: '-0.3%', signal: 'FUEL + DEBT SHOCK', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+22', bond: '-1.1pts', fx: '+0.2%', signal: 'TARIFF + GNU RISK', color: '#ff3b3b' },
    { country: 'ANGOLA', cds: 555, delta: '+15', bond: '-0.8pts', fx: '-0.4%', signal: 'OIL + DEBT STRESS', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 575, delta: '+5', bond: '-0.3pts', fx: '-0.1%', signal: 'FX STABILISING', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-10', bond: '+0.5pts', fx: '+0.2%', signal: 'IPO + RATE CUT', color: '#00c48c' },
    { country: 'GHANA', cds: 235, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
