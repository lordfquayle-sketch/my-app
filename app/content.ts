export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 28, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['Gold At $4,088 All-Time High — South Africa Ghana Structural Windfall — ZAR Positive', 'Ebola Now Fastest-Growing Outbreak On Record — 47 DRC Health Zones — Uganda Countdown To Clear', 'Zambia Election August 13 — 16 Days — SADC Observer Mission Deployed — Campaigning Intensifying', 'DRC-Rwanda Border Crossing Reopens With Ebola Screening — Regional Connectivity Signal'],
    regions: [
      { region: 'East Africa', score: 90, trend: '↓', color: '#ff3b3b' },
      { region: 'West Africa', score: 80, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 76, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 80, trend: '↓', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'EBOLA NOW FASTEST-GROWING OUTBREAK ON RECORD. By end of July 2026, the Ebola epidemic has become the fastest-growing Ebola outbreak in history — surpassing the 2018-2020 North Kivu growth trajectory at equivalent timepoints. 47 of 140 DRC health zones now affected across five provinces: Ituri, North Kivu, South Kivu, Haut-Uélé and Tshopo. Most cases remain in Ituri. POSITIVE: Uganda discharged its last Ebola patient July 16 and has started the 42-day countdown to declaring the end of its outbreak — last confirmed case was June 21. Uganda separately managing isolated Marburg case in Kyegegwa (no new contacts symptomatic). DRC-Rwanda border crossing reopened with enhanced Ebola screening.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa/Ghana', flag: '🇿🇦', alert: 'GOLD AT $4,088 — ALL-TIME HIGH. Gold has reached $4,088 per troy ounce — the highest nominal price in history. This is an enormous structural positive for South Africa (gold is 8% of GDP, 40% of export revenue) and Ghana (gold is 15% of GDP, 35% of export revenue). At $4,088 vs fiscal breakeven of ~$1,600-1,800, both countries have substantial fiscal buffers. SA municipal funding freeze sparking local protests in affected towns — a domestic governance friction. But at $4,088 gold, SA\'s fiscal position is materially stronger than at any point in the xenophobia crisis period. ZAR structural support: strongest since early 2024.', severity: 'LOW', color: '#00c48c' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'ZAMBIA ELECTION AUGUST 13 — 16 DAYS. SADC Electoral Observation Mission deployed. Campaigning intensifying with rallies and policy pledges from both Hichilema\'s UPND and opposition parties. ZMW at 19.02 — -32.91% YTD, worst performing major African currency. Power cuts ongoing. Slow reform delivery narrative being exploited by opposition. The SADC SEOM deployment is the regional institutional framework for what will be one of the most contested African elections in years. Ivory Coast and Ghana benchmarks show what reform discipline delivers — Zambia\'s electorate is being asked to judge whether Hichilema delivered.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'SA municipal funding freeze sparking local protests in affected towns. AU multilateral pressure track live — Nigeria and Ghana pushing AU on xenophobia. ICC petition filed by Ghanaians rejected by SA as opportunistic. Ramaphosa impeachment panel (Phala Phala) sat. December 31 year-end ultimatum from movement for workplace quotas. Weekly Thursday marches ongoing. Ngobese-Zuma shot July 16. Gold at $4,088 is the strongest FX and fiscal support SA has had this year — ZAR near multi-year highs. PEPFAR-CDC expiring September.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', alert: 'Egypt urban inflation eased modestly to 14.3% — from around 16% previously. Markets reacting positively — EGP holding, financial sector sentiment improved. IMF programme on track. Suez Canal revenues still below pre-conflict Red Sea disruption levels but stabilising. Gold at $4,088 is mildly positive for Egypt given some gold production capacity. Egypt remains the continent\'s most complex macro story: FX unified, inflation falling, but external debt substantial and geopolitical exposure (Gaza, Sudan) persistent.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'GOLD AT $4,088 ALL-TIME HIGH — EBOLA NOW FASTEST-GROWING OUTBREAK ON RECORD — ZAMBIA 16 DAYS — UGANDA STARTS EBOLA COUNTDOWN — OIL REBOUNDS TO $88',
    body: 'July 28 opens with two simultaneously extraordinary signals: gold has reached $4,088 per troy ounce — the highest nominal gold price in history, a structural windfall for South Africa and Ghana at the most politically stressed moment of the year — and Ebola has become the fastest-growing outbreak on record by end of July, with 47 of 140 DRC health zones now affected across five provinces. Uganda provides the week\'s most positive public health signal: it discharged its last Ebola patient on July 16 and has started the 42-day countdown to declaring the end of its outbreak, with no confirmed case since June 21. The DRC-Rwanda border crossing has reopened with enhanced Ebola screening — a sign that regional connectivity is being managed rather than severed. Zambia\'s election is 16 days away with SADC\'s observer mission deployed and campaigning intensifying. Oil has rebounded to $88 Brent — partially reversing the US-Iran peace deal\'s benefit to South African consumers. Egypt\'s inflation eased to 14.3%. Tanzania faces international scrutiny over mass arrests. Mozambique is assessing Russia\'s counter-terrorism offer. This is week 11 of the Ebola outbreak — and the continent\'s compound risk environment is beginning, slowly, to show signs of managed de-escalation in some theatres.',
    tag: 'JULY 28 SIGNAL',
    color: '#00c48c',
    author: 'Lord Fiifi Quayle',
    date: 'July 28, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
  ],

  whatMattersNow: [
    { title: 'GOLD $4,088 ALL-TIME HIGH — SA AND GHANA STRUCTURAL WINDFALL AT WORST POLITICAL MOMENT', body: 'Gold has reached $4,088 per troy ounce — the highest nominal price in history. The geopolitical drivers: US-China tensions, dollar weakness, central bank reserve diversification (gold has now surpassed US Treasuries as the world\'s largest reserve asset class), and global uncertainty. For South Africa — 8% GDP, 40% export revenue from gold and PGMs — this is a massive fiscal positive. For Ghana — 15% GDP, 35% export revenue — this is the structural buffer that underpins its IMF programme compliance. At $4,088 vs SA fiscal breakeven of ~$1,600, the revenue surplus is enormous. Oil rebounding to $88 partially offsets the July 1 petrol price cut, but gold at record levels outweighs the oil impact for SA\'s fiscal position.', icon: '💰' },
    { title: 'EBOLA FASTEST-GROWING OUTBREAK ON RECORD — 47 HEALTH ZONES — UGANDA COUNTDOWN TO CLEAR', body: 'By end of July, Ebola has become the fastest-growing outbreak on record — surpassing 2018-2020 North Kivu at equivalent timepoints. 47 of 140 DRC health zones now affected across Ituri, North Kivu, South Kivu, Haut-Uélé and Tshopo. POSITIVE SIGNAL: Uganda discharged its last Ebola patient July 16 and has started the 42-day countdown — last confirmed case was June 21. If no new cases, Uganda will be declared clear in late August. The DRC-Rwanda border crossing reopened with enhanced Ebola screening — managed containment, not complete closure. Week 11 of the PHEIC. White House $1.4bn Congress ask outstanding. Africa CDC upgraded ask. No vaccine, no approved treatment.', icon: '🚨' },
    { title: 'ZAMBIA ELECTION 16 DAYS — SADC OBSERVER MISSION DEPLOYED — CAMPAIGNING INTENSIFYING', body: 'Zambia\'s August 13 general election is 16 days away. SADC has deployed its Electoral Observation Mission — the regional institutional endorsement of process legitimacy. Campaigning is intensifying with rallies and policy pledges from UPND and opposition camps. Hichilema\'s key vulnerabilities: ZMW down 32.91% YTD, persistent power cuts, slow reform delivery. Opposition\'s key weakness: no single consolidated candidate against Hichilema. The Ivory Coast/Ghana benchmarks provide a visible contrast — 5x oversubscribed Eurobond vs ZMW worst African performer. Whether Zambia\'s electorate judges Hichilema\'s reform path as on track or failed is the question of August 13.', icon: '🗳️' },
    { title: 'OIL REBOUNDS TO $88 BRENT — PARTIALLY REVERSES SA JULY 1 PETROL RELIEF — EGYPT INFLATION 14.3%', body: 'Brent crude has rebounded to $88.11 (WTI $82.35) from the mid-$70s that followed the US-Iran peace deal and Strait of Hormuz reopening. This partially reverses the R2.01/litre petrol price relief South African consumers received from July 1. Brent at $88 vs the post-deal $73 represents approximately 20% oil price rebound — which will flow into South Africa\'s August fuel price review. Egypt\'s urban inflation eased to 14.3% — a positive signal for Africa\'s most populous country and the continent\'s largest Arab economy. IMF programme on track.', icon: '📊' },
  ],

  insight1: {
    title: 'GOLD AT $4,088 IS THE MOST CONSEQUENTIAL COMMODITY PRICE SIGNAL FOR AFRICAN SOVEREIGN CREDIT IN YEARS',
    body: 'When gold reaches an all-time nominal high of $4,088 per troy ounce, the fiscal mathematics for Africa\'s gold-producing sovereigns changes fundamentally. South Africa\'s fiscal breakeven for gold is approximately $1,600/oz — at $4,088, it is receiving more than 2.5x its required price. Ghana\'s IMF programme was designed around $2,000-2,500/oz gold assumptions — at $4,088, the fiscal buffers are enormous. For South Africa specifically, the gold revenue surplus at $4,088 provides the fiscal space to absorb: PEPFAR replacement costs, December 31 deportation implementation, R600m June 30 security operation costs, and the compound governance pressures of the impeachment panel. The ZAR strengthens structurally when gold is at all-time highs — the currency\'s performance through June\'s xenophobia crisis was sustained precisely because gold and PGM exports provided the structural backbone. At $4,088, that backbone is stronger than it has ever been.',
    conclusion: 'GOLD AT $4,088 IS THE SINGLE MOST POSITIVE SOVEREIGN CREDIT DEVELOPMENT FOR SOUTH AFRICA AND GHANA IN YEARS. IT PROVIDES FISCAL SPACE, ZAR SUPPORT, AND EXTERNAL BALANCE BACKING AT THE EXACT MOMENT BOTH COUNTRIES FACE MAXIMUM POLITICAL AND DIPLOMATIC PRESSURE. THE COMMODITY WINDFALL IS THE STRUCTURAL COUNTERWEIGHT TO THE GOVERNANCE CRISIS.',
  },

  insight2: {
    title: 'EBOLA BECOMING THE FASTEST-GROWING OUTBREAK ON RECORD WHILE UGANDA STARTS ITS COUNTDOWN IS THE BIFURCATED RESPONSE SIGNAL',
    body: 'The simultaneous signals from the Ebola crisis are instructive. DRC: fastest-growing outbreak on record, 47 health zones, clinic attacks, no approved vaccine, contact tracing below 90%, health workers on strike over unpaid wages. Uganda: discharged its last patient, started the 42-day countdown, last confirmed case June 21. The difference is not geography — it is governance capacity and trust. Uganda\'s Ebola response benefited from two decades of health system investment following its own 2000 and 2017 Marburg outbreaks, community trust built through transparent communication, and functioning health infrastructure even in rural areas. DRC\'s response faces ongoing armed conflict, community distrust, health infrastructure collapse, and the world\'s largest displacement crisis compounding an already overwhelmed system. The bifurcated outcome confirms the structural lesson: public health outcomes in Africa\'s outbreak environment track governance capacity, not virology.',
    conclusion: 'THE BIFURCATED EBOLA OUTCOME — DRC FASTEST-GROWING ON RECORD, UGANDA COUNTING DOWN TO CLEAR — IS THE DEFINITIVE EVIDENCE THAT GOVERNANCE CAPACITY DETERMINES PUBLIC HEALTH OUTCOMES. DRC\'S CRISIS IS STRUCTURAL. UGANDA\'S SUCCESS IS STRUCTURAL. THE VACCINE GAP MATTERS LESS THAN THE TRUST AND INFRASTRUCTURE GAP.',
  },

  brief: {
    week: '31',
    title: 'WEEK 31 OPEN: GOLD $4,088 ALL-TIME HIGH, EBOLA FASTEST-GROWING ON RECORD, ZAMBIA 16 DAYS, UGANDA COUNTDOWN, OIL $88 REBOUND',
    body: 'Week 31 opens with gold at $4,088 — the highest nominal price in history, a structural windfall for South Africa and Ghana at the most politically stressed moment of the year. Ebola has become the fastest-growing outbreak on record by end of July, with 47 DRC health zones affected. Uganda discharged its last patient and started the 42-day countdown. DRC-Rwanda border reopened with screening. Zambia\'s election is 16 days away with SADC observers deployed. Oil rebounded to $88 Brent, partially reversing July 1 petrol relief. Egypt inflation eased to 14.3%. South Africa faces municipal funding freeze protests, AU/ICC multilateral pressure, December 31 ultimatum, and PEPFAR September expiry — but gold at $4,088 provides structural fiscal support. Ethiopia\'s Tigray conflict risk is live. Somalia\'s AUSSOM funding gap unresolved. Sudan RSF massacred 85 civilians July 23. Zimbabwe pushing 2037. DRC August 15 dialogue deadline in 18 days.',
  },

  fxRates: {
    NGN: '1,378.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.00',
    ETB: '158.50',
    TZS: '2,624.00',
    UGX: '3,674.80',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'GOLD AT $4,088 — ALL-TIME NOMINAL HIGH. Structural windfall for South Africa (8% GDP, 40% export revenue) and Ghana (15% GDP, 35% export revenue). SA fiscal breakeven ~$1,600/oz — $4,088 is 2.5x. ZAR structural support strongest since 2024. Partially offset by oil rebound to $88 Brent (WTI $82.35) — will feed into August fuel price review.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'ZAR' },
    { time: '09:15:00', signal: 'EBOLA FASTEST-GROWING OUTBREAK ON RECORD by end July. 47 of 140 DRC health zones across Ituri, North Kivu, South Kivu, Haut-Uélé, Tshopo. No vaccine, no treatment. Contact tracing below 90%. POSITIVE: Uganda discharged last patient July 16 — 42-day countdown started. Last Uganda case June 21. DRC-Rwanda border reopened with enhanced screening.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'ZAMBIA ELECTION AUGUST 13 — 16 DAYS. SADC Electoral Observation Mission deployed. Campaigning intensifying — rallies, policy pledges both sides. ZMW -32.91% YTD. Power cuts. Slow reform narrative. Ivory Coast/Ghana contrast: discipline rewarded. Hichilema\'s reform path vs opposition accountability argument. Most consequential African election in years.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '08:45:00', signal: 'OIL REBOUNDS: Brent $88.11 (↓8.96% from recent high), WTI $82.35. Partially reverses US-Iran peace deal oil benefit. SA August fuel price review will reflect $88 Brent. Egypt urban inflation eased to 14.3% — positive for Egypt macro trajectory. Tanzania under international scrutiny over mass arrests and political rally ban. Mozambique assessing Russia counter-terrorism offer.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'South Africa: municipal funding freeze sparks local protests. AU multilateral pressure track live. ICC petition filed, rejected. Ramaphosa impeachment panel sat. December 31 ultimatum. PEPFAR September. Weekly Thursday marches. Ngobese-Zuma shot July 16 — movement continues. But gold at $4,088 provides unprecedented fiscal support at worst political moment.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ethiopia: opposition warns open Tigray conflict. TPLF conflict live. US visa restrictions June 18. Zimbabwe: ZANU-PF pushing 2037 — opposition ConCourt challenge. Sudan: RSF massacred 85 civilians July 23. Somalia: AUSSOM funding gap unresolved. DRC: August 15 dialogue deadline — 18 days. Senegal: Faye-Sonko constitutional confrontation. Burkina Faso: internal coup fears.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'ICC Darfur: prosecutors may detail next steps in leadership cases this week — Sudan RSF atrocity documentation accelerating. AES bloc ICC withdrawal ongoing. Senegal first African Olympic event October. Nigeria CBN held 27.5%. World Bank $1.25bn Nigeria pledge. SADC Finance Ministers commit to deeper investment cooperation. Ivory Coast/Ghana continental benchmarks — programme discipline rewarded.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 28: NGN 1,378 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR ~16.00 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. Gold $4,088 provides ZAR structural support. Oil at $88 Brent up from mid-$70s. NGN strengthening trend from June 2025 1,579 peak intact. ZMW worst performing major African currency YTD at -32.91%.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 80, fiscal: 58, fx: 42, debt: 58, political: 86, external: 78 },
    { country: 'Ghana', flag: '🇬🇭', score: 22, fiscal: 18, fx: 34, debt: 18, political: 20, external: 22 },
    { country: 'Kenya', flag: '🇰🇪', score: 68, fiscal: 64, fx: 50, debt: 70, political: 68, external: 66 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 70, fx: 72, debt: 90, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 80, fiscal: 62, fx: 44, debt: 62, political: 86, external: 78 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 88, fiscal: 72, fx: 96, debt: 80, political: 90, external: 84 },
    { country: 'DRC', flag: '🇨🇩', score: 98, fiscal: 88, fx: 90, debt: 82, political: 96, external: 98 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,378.00', change: '-12.73%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.00', change: '-12.08%', stress: 'LOW', ytd: '+12.08%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 16 DAYS', type: 'General Election', risk: 'HIGH', note: 'SADC SEOM deployed. Campaigning intensifying. ZMW -32.91% YTD. Power cuts. Slow reform. Opposition consolidated. Most consequential African election in years. Gold at $4,088 indirectly positive for Zambia copper sector sentiment.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 18 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Tshisekedi dialogue announced. Red line: referendum bill. Ebola simultaneous. DRC-Rwanda border reopened with screening. August 15 is 18 days.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — AU/ICC Pressure Live', type: 'Municipal Elections', risk: 'HIGH', note: 'Municipal funding freeze protests. AU multilateral track. ICC petition rejected. Impeachment panel. December 31 ultimatum. Weekly marches. PEPFAR September. Gold $4,088 provides fiscal support.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns open Tigray conflict July 22. US TPLF visa restrictions. Hundreds displaced. Pretoria Agreement collapsed. War risk materialising.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: '2030 Signed — ZANU-PF Pushing 2037', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'ZANU-PF Harare pushing 2037 extension. Opposition ConCourt challenge. Each amendment creates platform for next. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Faye leads ECOWAS, endorsed Sall for UN SG, hosts first African Olympic event October. Constitutional confrontation with Sonko deepening. IMF Q3 at risk.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 16 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$88', fiscalBreakeven: '$92/bbl', breakevenNote: 'NEAR BREAKEVEN — OIL REBOUNDING', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$88', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN — OIL REBOUNDING', trend: '↑', risk: 'MEDIUM' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,088/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'ALL-TIME HIGH GOLD WINDFALL', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,088/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'ALL-TIME HIGH — MASSIVE FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Botswana', flag: '🇧🇼', primary: 'Diamonds/Copper', exposure: 'HIGH', gdpShare: '25%', revenueShare: '60%', price2026: '$3,200/oz gold equiv', fiscalBreakeven: 'N/A', breakevenNote: '2,492-CARAT DIAMOND + HIGH GOLD', trend: '↑', risk: 'LOW' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,088/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — RSF CANNOT FULLY BENEFIT', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 185, delta: '-13', bond: '+0.7pts', fx: '-12.1%', signal: 'GOLD $4,088 WINDFALL — AU/ICC PRESSURE — DEC ULTIMATUM', color: '#f5a623' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA FASTEST-GROWING ON RECORD — 47 ZONES', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION 16 DAYS — SADC SEOM DEPLOYED', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPPOSITION: OPEN CONFLICT WARNING IN TIGRAY', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ZANU-PF PUSHING 2037 — CONCOURT CHALLENGE', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+1.0pts', fx: '+10.8%', signal: 'GOLD $4,088 WINDFALL — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'NIGERIA', cds: 415, delta: '+30', bond: '-1.5pts', fx: '-12.7%', signal: 'CBN HOLDS 27.5% — OIL $88 NEAR BREAKEVEN', color: '#f5a623' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — GAS PIPELINE — BENCHMARK', color: '#00c48c' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.41, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.47, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.40, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.03, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 23', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.50, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 24', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 27', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
