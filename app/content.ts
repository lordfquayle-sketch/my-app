export const content = {
  riskIndex: '89',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 25, 2026 09:00 UTC',
    overallScore: 89,
    trend: 'WORSENING',
    drivers: ['Ebola Confirmed Ituri/Nord-Kivu/Sud-Kivu + 5 Kampala Cases', 'Nigeria Civilian Airstrike Crisis — 300+ Dead in Two Months', 'Eswatini US Deportee Deal Under Legal Challenge', 'Africa Day — AU 63rd Under Compound Stress'],
    regions: [
      { region: 'East Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 78, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 84, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 97, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'CDC confirms as of May 24: Ebola in Ituri, Nord-Kivu AND Sud-Kivu provinces. Five cases now in Kampala. Ebola treatment centre in Rwampara burned by protesters demanding return of bodies. WHO warns violence impeding containment. DRC World Cup team in Belgium bubble — 21-day isolation order or US entry denied.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Civilian airstrike crisis: 100+ killed at Tumfa market, Zamfara (May 11) — second market massacre in a month after ~200 killed at Jilli, Yobe (April). Amnesty calls strikes unlawful. Atiku: Tinubu administration "overwhelmed, indifferent or dangerously incompetent." NAF has not issued a statement on Zamfara. 2027 election risk compounding.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Eswatini under legal scrutiny for US deportee deal — receiving Tanzanian, Sudanese and Somali nationals under $5.1m Trump administration agreement. Rights groups challenge constitutionality. Xenophobia wave continues. HRW report still generating regional condemnation. GNU under compound pressure on Africa Day.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'CS Mudavadi warns Kenyans to prepare for tougher times ahead. Ruto Ksh10 diesel cut effective June-July but structural fuel cost unresolved. Ebola border risk via Uganda — 5 confirmed Kampala cases. Kenya Economic Survey: growth slowed to 4.6% in 2025, slowest since pandemic recovery. Eurobond Q2 rollover critical.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — $25bn needed for 2026-2028 obligations. IMF frozen. PM Sonko rejects restructuring. Internal government fractures. Dakar 2026 Youth Olympics construction 95-96% complete — but sovereign fiscal crisis deepening around the event.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'EBOLA IN THREE DRC PROVINCES AND KAMPALA — NIGERIA CIVILIAN AIRSTRIKE CRISIS — AFRICA DAY 63 UNDER MAXIMUM COMPOUND STRESS',
    body: 'Africa Day 2026 arrives with the continent under the heaviest compound macro risk load in a generation. Ebola is now confirmed in three DRC provinces — Ituri, Nord-Kivu, Sud-Kivu — and has five cases in Kampala. A treatment centre was burned by protesters. WHO warns violence is actively impeding containment. Nigeria is in a civilian airstrike crisis: over 300 civilians killed in two separate market strikes in two months — Jilli in April (~200 dead) and Zamfara in May (100+ dead). Amnesty has called the strikes unlawful. The opposition is calling Tinubu incompetent. The NAF has not issued a statement on the latest incident. Eswatini is under legal and political challenge for its $5.1m US deportee deal. Kenya\'s Foreign Minister is warning of tougher times ahead. The AU marks 63 years of unity in Addis Ababa — but the continent\'s risk architecture has never been denser on this date.',
    tag: 'MAY 25 AFRICA DAY CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 25, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA NOW IN THREE DRC PROVINCES AND KAMPALA — TREATMENT CENTRE BURNED', body: 'CDC confirms as of May 24: Bundibugyo Ebola active in Ituri, Nord-Kivu and Sud-Kivu. Five cases now reported in Kampala, Uganda. Protesters in Rwampara burned the Ebola treatment centre demanding return of dead relatives\' bodies — WHO warned this violence is directly impeding containment. No approved vaccine. WHO risk level upgraded to "very high" within DRC. Travel architecture around East/Central Africa continues to fracture.', icon: '🚨' },
    { title: 'NIGERIA CIVILIAN AIRSTRIKE CRISIS — 300+ DEAD IN TWO MONTHS', body: 'Amnesty International: 100+ civilians killed at Tumfa market, Zamfara, May 11 — second mass-casualty market airstrike after ~200 killed at Jilli, Yobe in April. Amnesty calls both strikes unlawful. NAF has not commented on Zamfara. Atiku: Tinubu administration appears "overwhelmed, indifferent or dangerously incompetent." Pattern of civilian deaths from military strikes now a major 2027 election liability for Tinubu.', icon: '🔥' },
    { title: 'AFRICA DAY — AU 63RD ANNIVERSARY UNDER COMPOUND STRESS', body: 'AU marks 63 years since OAU founding in Addis Ababa. Theme: "63 Years of Unity, Integration and Development." India-Africa Business Dialogue and Exhibition follows May 28-31. The symbolism is sharp: Africa Day arrives with Ebola, civilian airstrikes, xenophobia, constitutional crises, and sovereign default risk active simultaneously across the continent.', icon: '🌍' },
    { title: 'ESWATINI US DEPORTEE DEAL UNDER LEGAL CHALLENGE — AFRICA\'S SOVEREIGNTY MOMENT', body: 'Eswatini receiving third-country nationals from US under secretive $5.1m Trump deal — Tanzanians, Sudanese, Somalis held at Matsapha maximum security prison. Rights groups have launched court challenge calling detention unconstitutional. Similar deals with Ghana, Rwanda, Uganda, Cameroon, Equatorial Guinea. Africa Day backdrop: continent\'s weakest sovereigns trading rights compliance for US payments.', icon: '⚖️' },
  ],

  insight1: {
    title: 'NIGERIA\'S CIVILIAN AIRSTRIKE PATTERN IS A STRUCTURAL 2027 ELECTION AND INVESTMENT RISK',
    body: 'Two market airstrikes in two months — Jilli (April, ~200 dead) and Zamfara (May, 100+ dead) — have created a pattern that Amnesty has now formally declared unlawful. The Nigerian Air Force has not issued a public statement on the Zamfara strike. The political opposition, led by Atiku, is framing this as evidence of government incompetence ahead of 2027. This matters for investors: Nigeria\'s investment thesis — built around Dangote refinery margins, CBN rate normalisation, and IPO pipeline — is being undercut by a security narrative that is becoming impossible to contain. The civilian casualty pattern from air operations, combined with ongoing banditry and IS activity, is the political liability that most directly threatens Tinubu\'s 2027 re-election positioning.',
    conclusion: 'NIGERIA\'S AIRSTRIKE CIVILIAN CASUALTY CRISIS IS NOW A TIER-1 POLITICAL RISK FOR 2027. WATCH HOW TINUBU RESPONDS — OR FAILS TO — IN THE COMING WEEKS.',
  },

  insight2: {
    title: 'EBOLA ENTERING KAMPALA CHANGES THE CONTINENTAL RISK CALCULUS',
    body: 'Five confirmed Ebola cases in Kampala — Uganda\'s capital of 4 million — represents a qualitative escalation beyond the eastern DRC containment zone. Kampala is a regional hub for East African business travel, NGO operations, and diplomatic activity. The burning of the Rwampara treatment centre signals community resistance that WHO has explicitly warned is impeding containment. With no approved vaccine for Bundibugyo strain, the response depends entirely on isolation, contact tracing, and community cooperation — all of which are now under active stress. The FDI, tourism, and trade compression this creates for East Africa will extend well beyond the outbreak\'s eventual end.',
    conclusion: 'FIVE KAMPALA CASES MARKS EBOLA\'S ENTRY INTO A MAJOR EAST AFRICAN CAPITAL. THE CONTAINMENT WINDOW IS NARROWING. UGX AND KES FACE SUSTAINED EXTERNAL PRESSURE THROUGH H2 2026.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 OPEN: AFRICA DAY 63 — EBOLA IN KAMPALA, NIGERIA AIRSTRIKE CRISIS, ESWATINI DEPORTEE DEAL',
    body: 'Week 22 opens on Africa Day with the continent carrying its heaviest compound risk load in the current cycle. Ebola is now confirmed in three DRC provinces and has reached Kampala — Uganda\'s capital. A treatment centre was burned by protesters, WHO warns containment is being actively impeded. Nigeria is in a civilian airstrike crisis with 300+ dead in two months at crowded markets — Amnesty has called the strikes unlawful and the opposition is calling Tinubu incompetent ahead of 2027. Eswatini\'s $5.1m US deportee deal is under legal challenge, illustrating how Africa\'s weaker sovereigns are trading rights compliance for Washington payments. Kenya\'s Foreign Minister is warning of tougher times ahead. Senegal\'s internal government fractures continue. The AU celebrates 63 years of unity in Addis Ababa — against this backdrop. Ghana remains the continental benchmark. The macro risk environment has never been denser on Africa Day.',
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
    { time: '09:30:00', signal: 'CDC May 24: Ebola confirmed in Ituri, Nord-Kivu AND Sud-Kivu provinces. Five cases now in Kampala. Treatment centre in Rwampara burned by protesters. WHO: violence impeding containment. Risk level upgraded to "very high" within DRC.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Nigeria: 100+ civilians killed at Tumfa market, Zamfara (May 11) — second mass-casualty market airstrike in a month after ~200 killed at Jilli, Yobe in April. Amnesty calls strikes unlawful. NAF silent on Zamfara. Atiku: Tinubu "overwhelmed, indifferent or dangerously incompetent."', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '09:00:00', signal: 'Africa Day — AU 63rd anniversary. Celebrations in Addis Ababa. India-Africa Business Dialogue May 28-31. Continent marks symbolic unity moment under simultaneous Ebola, airstrike, xenophobia, constitutional and sovereign debt crises.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Eswatini: US deportee deal under legal challenge — Tanzanians, Sudanese, Somalis held at Matsapha prison under $5.1m Trump administration agreement. Rights groups: detention unconstitutional. Africa Day backdrop — continent\'s weaker sovereigns trading rights for payments.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya: CS Mudavadi warns of tougher times ahead. Economic Survey 2026: GDP growth 4.6% in 2025 — slowest since pandemic recovery. Kenya fourth-largest Sub-Saharan economy at $136bn. Oil import dependency — every barrel above $80 felt at pump within weeks.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'KES' },
    { time: '08:15:00', signal: 'DRC World Cup team in Belgium bubble — 21-day isolation ordered by US or denied entry. First game vs Portugal Houston June 17. Kinshasa camp and public sendoff cancelled. Ebola reshaping Africa\'s soft power and sporting moment simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Senegal: Dakar 2026 Youth Olympics construction 95-96% complete. But PM Sonko still rejecting IMF restructuring. $25bn needed for 2026-2028 obligations. Internal government fractures producing resignations. Default risk critical.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana GHS 11.36 — continental benchmark holds on Africa Day. Fitch B/positive. GSE strongest African market YTD in hard currency. Only large African sovereign with unambiguously positive trajectory entering Week 22.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 44, fx: 36, debt: 46, political: 35, external: 48 },
    { country: 'Kenya', flag: '🇰🇪', score: 86, fiscal: 82, fx: 76, debt: 88, political: 90, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 82, fiscal: 68, fx: 72, debt: 62, political: 96, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 92, fiscal: 96, fx: 84, debt: 94, political: 82, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 90, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.20', change: '+0.90%', stress: 'MODERATE', ytd: '+0.70%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Puntland restive. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. Uganda-DRC closure. Kampala cases now confirmed. Abiy expected to win but regional instability elevated.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'NHI defeat. Xenophobia escalation. Eswatini deportee deal controversy. GNU durability test intensifying.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilians killed in airstrikes in two months. Amnesty calls strikes unlawful. Atiku positions against Tinubu. Civilian casualty crisis is now tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Mudavadi warns of tougher times. Fuel crisis partially resolved. Ebola border risk via Kampala. Growth slowing. Eurobond rollover critical.', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 850, delta: '+60', bond: '-2.8pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+40', bond: '-2.0pts', fx: '-0.5%', signal: 'EBOLA BORDER + DEBT', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE CRISIS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+22', bond: '-1.1pts', fx: '+0.1%', signal: 'XENOPHOBIA + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
