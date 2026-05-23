export const content = {
  riskIndex: '88',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 23, 2026 09:00 UTC',
    overallScore: 88,
    trend: 'WORSENING',
    drivers: ['DRC World Cup Team 21-Day Isolation Order', 'HRW: New Wave Xenophobic Attacks SA', 'Ebola Bundibugyo No Vaccine Continental Spread Risk', 'Africa Day — AU 63rd Anniversary'],
    regions: [
      { region: 'East Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 84, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 96, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'US orders DRC World Cup team 21-day isolation bubble in Belgium before entry — or face denial. DRC cancelled Kinshasa training camp and public farewell. First World Cup since 1974. Ebola now confirmed in Ituri, Nord-Kivu, South Kivu. 670+ suspected cases, 160 deaths. Bundibugyo strain — no approved vaccine.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Human Rights Watch warns of new wave of xenophobic attacks — March and March movement targeting Zimbabweans, Cameroonians, Asian nationals across Johannesburg, Pretoria, Durban. Vigilante violence with little police response. AU African Commission condemns attacks. Deportations at 57,784 in 2025/26.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto Ksh10 diesel cut (to Ksh222.92) takes effect June-July. Strike called off. Ruto waives import duty on first 100,000 EVs. But structural fuel cost crisis unresolved — diesel still ~50% above pre-Iran war levels. Ebola border risk via Uganda remains elevated.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'Constitutional crisis deepening — President Mohamud term expired May 15. Parliament extended terms 4→5 years. Somali Future Council threatening parallel government. Puntland and Federal Member States restive. Al-Shabaab exploiting political vacuum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical — needs 15 trillion CFA francs ($25bn) for 2026-2028 debt obligations. IMF suspended. PM Sonko rejects restructuring. Internal government fractures and high-level resignations reported this week.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'EBOLA FORCES DRC WORLD CUP TEAM INTO 21-DAY ISOLATION — SOUTH AFRICA XENOPHOBIA CRISIS ESCALATES — CONTINENT AT COMPOUND RISK INTO AFRICA DAY',
    body: 'The Ebola crisis has now reached the FIFA World Cup. The US has ordered DRC\'s national team — in their first World Cup since 1974 — into a 21-day isolation bubble in Belgium or face denial of entry. DRC has cancelled its Kinshasa training camp and public farewell. The reputational and soft power cost to Africa is immense: the continent\'s flagship sporting moment is being managed as a biosecurity event. Simultaneously, Human Rights Watch has formally warned of a new wave of xenophobic attacks in South Africa — the March and March movement is targeting foreign nationals across Johannesburg, Pretoria and Durban with vigilante violence and little police response. The AU marks its 63rd anniversary on Africa Day with the continent carrying Ebola, xenophobia, constitutional crises and sovereign debt stress simultaneously. The compound risk has never been denser.',
    tag: 'MAY 23 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 23, 2026',
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
    { title: 'US ORDERS DRC WORLD CUP TEAM 21-DAY ISOLATION — EBOLA REACHES FIFA', body: 'White House World Cup Task Force director Andrew Giuliani confirms DRC must maintain a controlled bubble in Belgium for 21 days or risk being denied US entry. First game vs Portugal in Houston on June 17. DRC cancelled Kinshasa training camp and public sendoff. FIFA monitoring closely. The Ebola PHEIC is now reshaping global sport, not just regional trade and FDI.', icon: '🚨' },
    { title: 'HRW: NEW WAVE XENOPHOBIC ATTACKS ACROSS SOUTH AFRICA', body: 'Human Rights Watch formally warns of escalating vigilante attacks by March and March movement targeting Zimbabweans, Cameroonians and Asian nationals in Johannesburg, Pretoria and Durban. Police response described as insufficient. AU African Commission condemns attacks. Deportations up fourfold to 57,784. South Africa\'s social cohesion risk is compounding its political and fiscal stress.', icon: '🔥' },
    { title: 'AFRICA DAY — AU 63RD ANNIVERSARY IN ADDIS ABABA', body: 'African Union marks 63 years since OAU founding. Theme: "Sixty-three Years of Unity, Integration and Development." Celebrations at AU headquarters in Addis Ababa May 23-25. India-Africa Business Dialogue scheduled May 28-31. Continent\'s symbolic unity moment arrives against backdrop of Ebola, xenophobia, sovereign debt crisis and constitutional instability.', icon: '🌍' },
    { title: 'SOMALIA CONSTITUTIONAL CRISIS — PARALLEL GOVERNMENT THREAT REAL', body: 'Somali Future Council has formally signalled intent to establish a parallel political process after President Mohamud\'s term expired May 15 following controversial parliamentary term extension. Puntland and South-West State increasingly restive. Al-Shabaab exploiting the political vacuum. East Africa\'s security architecture under compound stress from Ebola and Somalia simultaneously.', icon: '⚖️' },
  ],

  insight1: {
    title: 'THE DRC WORLD CUP ISOLATION ORDER IS THE EBOLA SOFT POWER CRISIS MARKETS HAVE NOT PRICED',
    body: 'DRC being ordered into a 21-day isolation bubble before the World Cup is not just a health story — it is a sovereign branding crisis for Central Africa and a signal of how deeply Ebola has embedded itself into global institutional decision-making about Africa. Every airline route adjustment, every FDI committee that pauses an East Africa decision, every multinational that delays a Nairobi posting — these are the transmission mechanisms of the Ebola macro risk that do not show up in case counts. The Bundibugyo strain has no approved vaccine. The outbreak has now spread to three DRC provinces. Uganda has closed its border. The US has extended Title 42 to cover DRC, Uganda and South Sudan. The World Cup is less than a month away. The reputational and economic cost to the continent is compounding daily.',
    conclusion: 'THE DRC WORLD CUP ISOLATION ORDER MARKS EBOLA\'S ENTRY INTO GLOBAL SOFT POWER. EAST AND CENTRAL AFRICA FDI COMPRESSION IN H2 2026 IS NOW BASELINE, NOT TAIL RISK.',
  },

  insight2: {
    title: 'SOUTH AFRICA\'S XENOPHOBIA WAVE IS A GNU DURABILITY AND INVESTMENT CLIMATE SIGNAL',
    body: 'The HRW report published this week documents a systematic escalation — the March and March movement is operating across three major cities with vigilante violence and insufficient police response. This is not sporadic: it is organised. The AU African Commission has condemned the attacks. The backdrop is structural — 73% of South Africans report not trusting African foreign nationals. Deportations have quadrupled. Home Affairs Minister Schreiber is framing the crackdown as protecting social cohesion. The GNU is managing this alongside the NHI court defeat, US-SA relations at their lowest point, and municipal elections in the fall. For foreign investors, South Africa\'s operating environment risk is rising independently of its fiscal metrics.',
    conclusion: 'SOUTH AFRICA\'S XENOPHOBIA ESCALATION IS A GOVERNANCE AND INVESTMENT CLIMATE RISK THAT IS STRUCTURALLY DISTINCT FROM ITS FISCAL STORY. WATCH GNU COHESION AND MUNICIPAL ELECTION POSITIONING.',
  },

  brief: {
    week: '21',
    title: 'WEEK 21 CLOSE: EBOLA REACHES FIFA, SA XENOPHOBIA ESCALATES, AFRICA DAY AT COMPOUND RISK',
    body: 'Week 21 closes on Africa Day with the continent carrying more simultaneous macro risk vectors than at any point in the current cycle. The Ebola crisis has reached the FIFA World Cup — DRC\'s team ordered into 21-day isolation in Belgium or face US entry denial. The outbreak spans three DRC provinces with 670+ suspected cases, 160 deaths, and no approved vaccine. Human Rights Watch has formally warned of a new xenophobia wave in South Africa — vigilante attacks by March and March across Johannesburg, Pretoria and Durban. Somalia\'s constitutional crisis deepens as the opposition threatens a parallel government. Senegal\'s internal political fractures are now producing high-level resignations. Kenya\'s structural fuel crisis is partially defused but unresolved. The AU marks 63 years of unity in Addis Ababa this weekend against this backdrop. Ghana remains the only large African sovereign with an unambiguously positive trajectory.',
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
    { time: '09:30:00', signal: 'US orders DRC World Cup team into 21-day isolation bubble in Belgium before entry — or face denial. White House Task Force director Giuliani: "We cannot be clearer." First game vs Portugal Houston June 17. Kinshasa training camp and public sendoff cancelled.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'HRW warns of new wave xenophobic attacks in South Africa — March and March movement targeting Zimbabweans, Cameroonians, Asian nationals. Vigilante violence in Johannesburg, Pretoria, Durban. Police response insufficient. AU African Commission condemns attacks.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Africa Day — AU 63rd anniversary. Celebrations in Addis Ababa May 23-25. Theme: "63 Years of Unity, Integration and Development." India-Africa Business Dialogue May 28-31. Continent marks symbolic moment under compound macro stress.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Somalia constitutional crisis: Somali Future Council formally signals parallel government process after Mohamud term expired May 15. Puntland and South-West State restive. Al-Shabaab exploiting vacuum. East Africa security architecture under compound pressure.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Ebola: CDC confirms as of May 22 outbreak in Ituri and Nord-Kivu Provinces. Uganda border closed. US Title 42 covers DRC, Uganda, South Sudan. WHO: Bundibugyo fatality rate up to 50%, no approved vaccine. 670+ suspected cases, 160 deaths.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Kenya: Ruto Ksh10 diesel cut (to Ksh222.92) effective June-July. Transport strike called off. EV import duty waiver on first 100,000 units. Structural fuel cost crisis unresolved — diesel still ~50% above pre-Iran war levels.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:00:00', signal: 'Senegal: High-level government resignations reported. PM Sonko still rejecting IMF restructuring. $25bn needed for 2026-2028 obligations. Atlantic Council: sovereign default likely without reversal. CDS 850.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana GHS at 11.36 — continental benchmark for recovery holds into Africa Day. Fitch B/positive. GSE strongest African market YTD in hard currency. Only large African sovereign with unambiguously positive trajectory.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 60, fx: 55, debt: 60, political: 78, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 44, fx: 36, debt: 46, political: 35, external: 48 },
    { country: 'Kenya', flag: '🇰🇪', score: 84, fiscal: 80, fx: 76, debt: 88, political: 90, external: 88 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 82, fiscal: 68, fx: 72, debt: 62, political: 96, external: 80 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 94, fx: 84, debt: 92, political: 80, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 88, fiscal: 70, fx: 78, debt: 74, political: 68, external: 98 },
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
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Puntland restive. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'HIGH', note: 'Ebola PHEIC near border. Uganda-DRC closure reshaping regional movement. Abiy expected to win but instability risk elevated.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'NHI defeat. Xenophobia escalation. March and March movement. GNU durability test. US-SA relations lowest point.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Dangote refinery margin capture positive. But food inflation, IS threat and 2027 political risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Fuel crisis partially resolved. 4 dead in protests. Ebola border risk via Uganda. Eurobond rollover. Structural fiscal exposure unresolved.', color: '#ff3b3b' },
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
    { country: 'KENYA', cds: 192, delta: '+38', bond: '-1.9pts', fx: '-0.4%', signal: 'FUEL + EBOLA BORDER', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+22', bond: '-1.1pts', fx: '+0.1%', signal: 'XENOPHOBIA + GNU', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-10', bond: '+0.5pts', fx: '+0.2%', signal: 'REFINERY MARGINS', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
