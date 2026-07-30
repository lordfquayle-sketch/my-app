export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 30, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['Gold Surges To $4,157 — Brent Spikes To $90 — Commodity Markets In Major Risk-On Move', 'UN Probe Finds Genocide In Sudan — ICC Links Darfur Crimes To Leadership — International Justice Escalates', 'SA Anti-Migrant Groups Seize Foreign Nationals In Johannesburg And Hand To Police — Crisis Continues', 'Tanzania Arrests 130 — Mali Faces Jihadist Surge — 2026 Commonwealth Games Glasgow SA 7th Medal Table'],
    regions: [
      { region: 'East Africa', score: 88, trend: '↓', color: '#f5a623' },
      { region: 'West Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Sudan', flag: '🇸🇩', alert: 'UN GENOCIDE FINDING. A UN probe has found genocide in Sudan — the first formal international legal characterisation of the conflict\'s nature. ICC officials can now formally link Darfur crimes to leadership — ICC prosecutors announced Sunday July 27. RSF massacred 85 civilians in central Sudan July 23. EU gold ban in effect targeting RSF funding. Sudan\'s Democratic Bloc renewed its call for inclusive intra-Sudanese dialogue. International mechanism (UN, AU, EU, Arab League, IGAD) sponsoring consultative process. Sudan civil war entering third year — 59,000 killed, 14 million displaced, 33.7 million needing urgent aid.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'JOHANNESBURG: Anti-migrant groups seized foreign nationals on the streets and handed them to police on Sunday July 27 — a new operational model where vigilante groups work alongside rather than against police, with SA police accepting the transfers. This is a significant escalation of the enforcement architecture that was the subject of the Ramaphosa 5-point plan. Nigeria confirmed two citizens were killed in the escalating violence. Nigeria-SA de-escalation talks July 29 agreed prosecutions and compensation — but the street-level enforcement model continues. ZAR at 16.62. December 31 ultimatum. Weekly Thursday marches.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Commodities', flag: '🌍', alert: 'COMMODITY SURGE. Gold at $4,157 (up 2.99% on July 29) — new all-time high territory. Brent crude at $90.34 (up 7.43%) — oil has reversed the US-Iran peace deal decline and is back at levels last seen during the April-May Hormuz crisis. Copper at $6.42 (up 1.50%). Silver at $59.04 (up 3.04%). This surge is simultaneous positive and negative for Africa: gold at $4,157 is an enormous fiscal windfall for SA and Ghana; oil at $90 reverses SA\'s July 1 petrol relief and will feed into August fuel price review; Nigeria at $90 oil is near its fiscal breakeven; Angola at $90 is back above breakeven. Commodity markets are pricing geopolitical risk.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Tanzania', flag: '🇹🇿', alert: 'Tanzania arrests 130 — international scrutiny intensifying over mass arrests and political rally ban that was reintroduced. Tanzania has been under international pressure over democratic backsliding. The 130 arrests follow a pattern of pre-election suppression of opposition. Tanzania has a general election in the coming months — the arrest wave signals Samia Suluhu Hassan\'s government is tightening control ahead of the electoral period. TZS at 2,624 — holding.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'Zambia election August 13 — 14 DAYS. SADC Electoral Observation Mission deployed. Campaigning at peak intensity. ZMW at 19.02 — -32.91% YTD. Power cuts ongoing. Copper at $6.42 (up 1.50%) provides some fiscal support but the ZMW weakness reflects structural concerns. Hichilema\'s reform narrative vs opposition accountability challenge. Most consequential African election in years.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'GOLD $4,157 NEW HIGH — BRENT $90 — COMMODITY SURGE — UN FINDS GENOCIDE IN SUDAN — ICC LINKS DARFUR TO LEADERSHIP — JOHANNESBURG VIGILANTES HAND MIGRANTS TO POLICE',
    body: 'July 30 opens with a simultaneous commodity surge and international justice escalation that define Africa\'s most consequential Thursday since June 30. Gold has reached $4,157 — a new all-time high — while Brent crude has spiked to $90.34, up 7.43% on July 29. Copper is at $6.42, silver at $59.04. The commodity surge is a mixed signal for Africa: gold at $4,157 provides enormous fiscal windfalls for South Africa and Ghana; oil at $90 reverses the SA petrol relief from July 1 and pushes Nigeria\'s oil price back toward its $92 fiscal breakeven. In Sudan, a UN probe has formally found genocide — the first such characterisation, arriving alongside the ICC\'s confirmation that prosecutors can now link Darfur crimes to leadership. In Johannesburg, anti-migrant vigilante groups seized foreign nationals and handed them to police on Sunday — a new operational model that runs parallel to the Nigeria-SA de-escalation talks. Nigeria confirmed two more citizens were killed. Tanzania arrested 130 amid intensifying scrutiny over political suppression. Mali faces a jihadist surge. The 2026 Commonwealth Games are underway in Glasgow — South Africa sits 7th in the medal table. Zambia\'s election is 14 days away.',
    tag: 'JULY 30 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 30, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Sudan', flag: '🇸🇩', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '0', fxPressure: 'CRITICAL', liquidity: 'NONE' },
  ],

  whatMattersNow: [
    { title: 'GOLD $4,157 NEW ATH — BRENT $90 — COMMODITY SURGE — SA AND GHANA WINDFALL', body: 'Gold reached $4,157 on July 29 (up 2.99%) — a new all-time high territory above the previous $4,088 peak. Brent crude spiked to $90.34 (up 7.43%) — oil has reversed the US-Iran peace deal decline and is back near Hormuz-crisis levels. Copper at $6.42 (up 1.50%), Silver $59.04 (up 3.04%). For South Africa: gold at $4,157 vs $1,600 fiscal breakeven is an enormous buffer; but $90 Brent will trigger fuel price increases in the August review, partially reversing the July 1 R2.01/litre cut. For Ghana: gold at $4,157 vs $1,800 breakeven is a structural windfall. Nigeria at $90 Brent approaches its $92 fiscal breakeven. Angola above $78 breakeven comfortably. The commodity surge appears to be pricing renewed geopolitical risk — potentially linked to Sudan genocide finding, ICC Darfur escalation, and broader Middle East tensions.', icon: '📈' },
    { title: 'UN FINDS GENOCIDE IN SUDAN — ICC LINKS DARFUR CRIMES TO LEADERSHIP', body: 'A UN probe has formally found genocide in Sudan — the most consequential international legal characterisation of the conflict since the civil war began in April 2023. ICC officials announced Sunday July 27 that prosecutors can now formally link Darfur crimes to leadership — potentially including RSF commander Mohamed Hamdan Dagalo (Hemeti). RSF massacred 85 civilians in central Sudan July 23. EU gold ban targeting RSF funding is in effect. The genocide finding and ICC leadership linkage arriving simultaneously creates the most serious international legal pressure on the RSF since the conflict began. Sudan\'s Democratic Bloc renewed calls for inclusive dialogue. International mechanism (UN, AU, EU, Arab League, IGAD) sponsoring the process.', icon: '⚖️' },
    { title: 'SA JOHANNESBURG: VIGILANTES SEIZE MIGRANTS AND HAND TO POLICE — NEW ENFORCEMENT MODEL', body: 'Anti-migrant groups in Johannesburg seized foreign nationals on the street on Sunday July 27 and handed them to South African police — who accepted the transfers. This is a new operational model that effectively deputises vigilante groups as enforcers, with police as the receiving mechanism. It directly contradicts Ramaphosa\'s repeated warnings that "only authorised officials may act" and the government\'s stated opposition to vigilantism. Nigeria confirmed two more citizens were killed. The Nigeria-SA de-escalation agreed July 29 (prosecutions, compensation) runs parallel to this street-level deterioration. The gap between diplomatic de-escalation and ground-level reality is the defining tension of the SA crisis entering the December 31 countdown.', icon: '🚨' },
    { title: 'TANZANIA ARRESTS 130 — MALI JIHADIST SURGE — COMMONWEALTH GAMES SA 7TH', body: 'Tanzania arrested 130 people amid intensifying international scrutiny over political suppression and a reintroduced rally ban — a pre-election crackdown pattern ahead of Tanzania\'s upcoming general election. Mali faces a jihadist surge in its north and centre — 50 soldiers killed in a July 22 ambush, continuing the devastating toll despite the recapture of Anefis. Positive: South Africa is competing strongly at the 2026 Commonwealth Games in Glasgow — sitting 7th in the medal table on Day 7 with 16 medals including 4 golds. Sinesipho Dambile (world No. 5 in 200m), Aiden Smith (shot put), Khanyisa Chawane (netball captain) among the key competitors today.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE UN GENOCIDE FINDING IN SUDAN COMBINED WITH ICC LEADERSHIP LINKAGE IS THE MOST CONSEQUENTIAL INTERNATIONAL LEGAL DEVELOPMENT IN AFRICA IN A DECADE',
    body: 'International law uses specific legal thresholds for a reason: genocide requires proof of intent to destroy, in whole or in part, a national, ethnic, racial or religious group. A UN probe finding genocide is not a news cycle moment — it is a formal legal determination that triggers specific obligations on member states (the Responsibility to Protect), specific ICC jurisdiction claims (genocide is one of the Rome Statute\'s core crimes), and specific liability exposure for named perpetrators. The simultaneous ICC announcement that prosecutors can link Darfur crimes to leadership — potentially including Hemeti — means the most powerful armed actor in the Sudan conflict now faces potential personal criminal liability. The EU gold ban, US chemical weapons sanctions, and now genocide finding and ICC leadership linkage represent the most coordinated international pressure on the RSF since the war began. Whether it translates into changed RSF behaviour depends on whether Hemeti believes he can be reached by international enforcement. His ability to exit Sudan — to the UAE, to Kenya, to other Gulf-friendly states — is the enforcement gap.',
    conclusion: 'THE UN GENOCIDE FINDING AND ICC DARFUR LEADERSHIP LINKAGE ARE THE MOST CONSEQUENTIAL INTERNATIONAL LEGAL DEVELOPMENTS IN AFRICA IN A DECADE. THEY CLOSE THE IMPUNITY GAP FOR RSF LEADERSHIP IN THEORY. THE ENFORCEMENT GAP — HEMETI\'S ABILITY TO OPERATE OUTSIDE ICC REACH — REMAINS THE CRITICAL VARIABLE.',
  },

  insight2: {
    title: 'JOHANNESBURG VIGILANTES HANDING MIGRANTS TO POLICE CONFIRMS THE STATE-VIGILANTE NEXUS THAT ACADEMIC ANALYSIS DOCUMENTED IN JUNE',
    body: 'When The Conversation published its academic analysis on July 2 documenting that the May 25 Union Buildings meeting with March and March had legitimised vigilante groups, the mechanism was theoretical. On July 27, vigilante groups in Johannesburg seized foreign nationals and handed them to South African police — who accepted the transfers without apparent objection. This is the theoretical mechanism made operational. The state-vigilante nexus is no longer an academic characterisation: it is a documented enforcement practice in which civilian groups apprehend migrants and use SAPS as the receiving institution. Ramaphosa\'s warning that "only authorised officials may act" has been operationally bypassed — not by confrontation, but by collaboration. The Johannesburg model, if it spreads, transforms the December 31 ultimatum from a political deadline into an ongoing enforcement architecture that does not require the movement to march or the state to formally authorise it.',
    conclusion: 'THE JOHANNESBURG VIGILANTE-POLICE HANDOVER MODEL CONFIRMS THE STATE-VIGILANTE NEXUS IS NOW OPERATIONAL, NOT THEORETICAL. IF IT SPREADS BEYOND JOHANNESBURG, THE DECEMBER 31 ULTIMATUM BECOMES AN ONGOING ENFORCEMENT ARCHITECTURE RATHER THAN A DISCRETE POLITICAL DEADLINE.',
  },

  brief: {
    week: '31',
    title: 'WEEK 31 THURSDAY: GOLD $4,157 ATH BRENT $90, UN GENOCIDE SUDAN ICC LEADERSHIP LINKAGE, JOHANNESBURG VIGILANTES HAND MIGRANTS TO POLICE, ZAMBIA 14 DAYS, TANZANIA 130 ARRESTED',
    body: 'Week 31\'s Thursday delivers the continent\'s most signal-dense day since July 24. Gold has reached $4,157 — a new all-time high — while Brent spiked to $90.34, up 7.43%, reversing the post-Hormuz oil relief. The commodity surge provides enormous fiscal windfalls for SA and Ghana but will drive fuel price increases in SA\'s August review. A UN probe formally found genocide in Sudan — the most consequential international legal characterisation since the war began. ICC prosecutors can now link Darfur crimes to leadership. In Johannesburg, vigilante groups seized foreign nationals and handed them to police — a new operational model that confirms the state-vigilante nexus. Nigeria confirmed two more citizens killed. Tanzania arrested 130. Mali faces a jihadist surge. Zambia\'s election is 14 days away. South Africa is 7th at the Glasgow Commonwealth Games. The Nigeria-SA de-escalation agreed July 29 coexists with deteriorating ground-level conditions.',
  },

  fxRates: {
    NGN: '1,363.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.62',
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
    { time: '09:30:00', signal: 'COMMODITY SURGE: Gold $4,157 (↑2.99% — new ATH), Brent $90.34 (↑7.43% — back to Hormuz-crisis levels), WTI $82.35, Copper $6.42 (↑1.50%), Silver $59.04 (↑3.04%). SA and Ghana enormous gold fiscal windfall. Nigeria: oil $90 near $92 breakeven. Angola: above $78 breakeven. SA August fuel review will reflect $90 Brent — July 1 R2.01/litre cut partially reversed.', detail: 'HIGH', type: 'ALERT', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '09:15:00', signal: 'UN GENOCIDE FINDING: Sudan probe finds genocide — first formal international legal characterisation of conflict. ICC links Darfur crimes to leadership — prosecutors can now formally name RSF leadership. RSF massacred 85 civilians July 23. EU gold ban in effect. US chemical weapons sanctions (second round). Sudan\'s Democratic Bloc calls for inclusive dialogue. International mechanism active (UN, AU, EU, Arab League, IGAD).', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'JOHANNESBURG: Anti-migrant vigilante groups seized foreign nationals Sunday July 27 and handed them to SAPS — who accepted transfers. New state-vigilante nexus operational model. Nigeria confirmed two citizens killed. Nigeria-SA de-escalation talks July 29 coexist with deteriorating ground-level enforcement. ZAR at 16.62. December 31 ultimatum. Weekly Thursday marches.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'Tanzania: 130 arrested — international scrutiny over mass arrests and rally ban reintroduced. Pre-election suppression pattern ahead of Tanzania\'s general election. Mali: jihadist surge — 50 soldiers killed July 22 ambush, Anefis recaptured but broader trajectory of state retreat continues. Burkina Faso: coup fear signal from Traoré persists. Sahel security collapse ongoing.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Zambia election August 13 — 14 DAYS. SADC SEOM deployed. Copper at $6.42 (↑1.50%) provides some fiscal support. ZMW -32.91% YTD — worst major African currency. Power cuts. Slow reform narrative. Campaigning at peak intensity. DRC August 15 dialogue deadline — 16 days. Ebola DRC fastest-growing outbreak on record — 47 health zones. Uganda 42-day countdown.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '08:15:00', signal: 'Commonwealth Games Glasgow 2026: South Africa 7th in medal table — 16 medals, 4 golds. Day 7: Sinesipho Dambile (200m semi-final, world No. 5), Aiden Smith (shot put final), Khanyisa Chawane (netball vs England). Gold $4,157 provides SA fiscal backing even as xenophobia crisis runs simultaneously. Soft power positive alongside structural crisis.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '08:00:00', signal: 'Ethiopia: Tigray open conflict warning active. Somalia: AUSSOM funding gap. Zimbabwe: ZANU-PF pushing 2037. Senegal: Faye leads ECOWAS, constitutional confrontation with Sonko. Senegal hosts first African Olympic event October. Nigeria-Morocco Gas Pipeline ECOWAS intergovernmental agreement signed Freetown July 20. Africa Intelligence Brief July 29: JSE Top 40 102,328 (+0.49%), NGX 30 4,649 (+0.60%).', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 30 (July 29 confirmed): ZAR 16.62 (↓0.30%) | NGN 1,363 (↑0.01%) | GHS 11.47 | KES 129.04 | EGP 52.22 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. NGN 1,363 — slightly stronger than 1,378 last week, CBN management evident. ZAR 16.62 — slight weakening from 16.00 but gold at $4,157 provides structural floor. ZMW worst African currency YTD at -32.91%.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 78, fiscal: 58, fx: 42, debt: 58, political: 82, external: 76 },
    { country: 'Ghana', flag: '🇬🇭', score: 18, fiscal: 14, fx: 30, debt: 14, political: 16, external: 18 },
    { country: 'Kenya', flag: '🇰🇪', score: 66, fiscal: 62, fx: 48, debt: 68, political: 66, external: 64 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 70, fx: 72, debt: 90, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 58, fx: 44, debt: 60, political: 84, external: 76 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 86, fiscal: 70, fx: 96, debt: 78, political: 88, external: 82 },
    { country: 'Tanzania', flag: '🇹🇿', score: 76, fiscal: 60, fx: 52, debt: 64, political: 86, external: 72 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,363.00', change: '-13.68%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.62', change: '-8.36%', stress: 'LOW', ytd: '+8.36%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 14 DAYS', type: 'General Election', risk: 'HIGH', note: 'SADC SEOM deployed. Copper $6.42 (↑1.50%). ZMW -32.91% YTD. Power cuts. 14 days to polling day. Most consequential African election in years.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 16 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Tshisekedi dialogue. Red line: referendum bill. Ebola fastest-growing on record. 47 health zones. 16 days.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Vigilante-Police Nexus Active', type: 'Municipal Elections', risk: 'CRITICAL', note: 'Johannesburg vigilantes handing migrants to police — new enforcement model. Nigeria-SA de-escalation coexists with ground deterioration. December 31 ultimatum. ICC petition. AU pressure.', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', date: 'UN Genocide Finding — ICC Leadership Linkage', type: 'Civil War', risk: 'CRITICAL', note: 'UN probe finds genocide. ICC links Darfur crimes to leadership. RSF massacred 85 civilians July 23. EU gold ban. US sanctions. 59,000 dead. 14m displaced. Most consequential international legal development in Africa in a decade.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: steering Tigray to open conflict. US TPLF visa restrictions. Hundreds displaced. War risk materialising.', color: '#ff3b3b' },
    { country: 'Tanzania', flag: '🇹🇿', date: 'Upcoming Election — 130 Arrested', type: 'General Election', risk: 'HIGH', note: 'Tanzania arrests 130 amid international scrutiny over political suppression. Rally ban reintroduced. Pre-election crackdown pattern.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Olympic Event Oct — Referendum TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Faye leads ECOWAS. Backed Sall for UN SG. First African Olympic event October. Constitutional confrontation with Sonko ongoing. IMF Q3 at risk.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 14 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$90', fiscalBreakeven: '$92/bbl', breakevenNote: 'NEAR BREAKEVEN — OIL BACK TO HORMUZ LEVELS', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$90', fiscalBreakeven: '$78/bbl', breakevenNote: 'COMFORTABLY ABOVE BREAKEVEN', trend: '↑', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,157/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'NEW ATH — ENORMOUS FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$6.42/lb', fiscalBreakeven: '$5.50/lb', breakevenNote: 'ABOVE BREAKEVEN — COPPER RISING', trend: '↑', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,157/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'NEW ATH — MASSIVE FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'AFDB RAIL + GAS PIPELINE + 2030 WC', trend: '↑', risk: 'LOW' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,157/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — GENOCIDE FINDING — ICC RISK', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'UN GENOCIDE FINDING — ICC DARFUR LEADERSHIP', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '+5', bond: '-0.3pts', fx: '-8.4%', signal: 'VIGILANTE-POLICE NEXUS — GOLD $4,157 FISCAL BUFFER', color: '#f5a623' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 14 DAYS — COPPER ↑', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPEN CONFLICT WARNING — TIGRAY WAR RISK', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+20', bond: '-1.0pts', fx: '-13.7%', signal: 'SA DE-ESCALATION — OIL $90 NEAR BREAKEVEN', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+1.0pts', fx: '+10.8%', signal: 'GOLD $4,157 NEW ATH WINDFALL — IMF COMPLETE', color: '#00c48c' },
    { country: 'ANGOLA', cds: 280, delta: '-10', bond: '+0.5pts', fx: '-2.1%', signal: 'OIL $90 ABOVE $78 BREAKEVEN — IMPROVING', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — GAS PIPELINE BENEFICIARY', color: '#00c48c' },
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
    { date: 'Jul 27', NGN: 1361.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.75, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 29', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 30', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
