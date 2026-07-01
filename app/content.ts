export const content = {
  riskIndex: '88',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 1, 2026 09:00 UTC',
    overallScore: 88,
    trend: 'EASING',
    drivers: ['June 30 Passed — Only Isolated Incidents — 15,000+ In Durban Peacefully — July 2021 Repeat Avoided', 'Ngobese-Zuma Declares "Every Thursday For 6 Months We March" — Movement Continues Beyond June 30', 'SA Petrol Down R2.01/Litre From Today — US-Iran Peace Deal Oil Drop Offsets Full Levy Return', 'March and March: "If Anyone Is To Blame For These Protests — It Is The Government"'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 74, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 82, trend: '↓', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'JUNE 30 VERDICT: Only isolated incidents — July 2021 repeat avoided. 15,000+ marched in Durban CBD without incident. Looting arrests made in pockets of criminality — Hammarsdale tuckshop break-in was most visible incident. Angry amabutho wanted bloodshed but were contained. In Johannesburg CBD several suspected foreign nationals were confronted — a small group was shielded from assault and escorted to safety by intervening bystanders. SAPS contrast with 2021 noted: proactive, heavily funded mobilisation vs reactive chaos. Ngobese-Zuma: "Every Thursday for the next six months we are marching until they are gone." Movement is sustained. POSITIVE: Petrol falls R2.01/litre from TODAY — US-Iran peace deal oil drop absorbs full levy return.', severity: 'HIGH', color: '#f5a623' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola remains third-largest outbreak on record — 1,000+ confirmed cases. France confirmed first European case. White House seeking $1.4bn from Congress. Africa CDC upgraded ask from $518m to $1.4bn. Contact tracing at 58% — target 90-95%. Free healthcare launched in Ituri. No approved vaccine, no approved treatment. The health emergency continues independent of South Africa\'s political news cycle.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', alert: 'Senate approved constitutional amendments June 24 — direct presidential elections ABOLISHED, term extended to 2030, elections postponed. Only Mnangagwa signature needed. AU and Western governments yet to formally respond. Most consequential African democratic regression of the decade. Signature expected imminently.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election TPLF conflict remains live — US visa restrictions on hardliners in effect since June 18. Hundreds of thousands displaced in northern Ethiopia. Pretoria Agreement collapsed. ENDF-TPLF clashes confirmed. Eritrea Red Sea tensions. Abiy third term — war risk from day one of new mandate. Horn compound risk at maximum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF Q3 2026 programme now base case following inconclusive June visit. Eurobond issuance planned — first since 2025. Sonko opened door to debt talks June 16. Bonds rallied from 50.6c record low. Structural risk unchanged: 132% debt/GDP, $9.7bn obligations 2026. Engagement active, resolution deferred to Q3.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'JUNE 30 VERDICT: ONLY ISOLATED INCIDENTS — JULY 2021 NOT REPEATED — NGOBESE-ZUMA DECLARES WEEKLY MARCHES FOR 6 MONTHS — PETROL DOWN R2.01 TODAY — MOVEMENT CONTINUES',
    body: 'July 1, 2026 — the morning after South Africa\'s most consequential June since the end of apartheid. The verdict is in: June 30 passed with only isolated incidents. More than 15,000 people marched in the Durban CBD without incident, carrying traditional weapons and cowshields. Angry amabutho from Durban hostels wanted bloodshed — and did not get it. In Johannesburg CBD, several people suspected of being foreign nationals were confronted by the crowd — a small group was shielded from assault by intervening bystanders who escorted them to safety. Police arrested suspects in connection with looting and attempted looting in pockets of criminality, including a tuckshop break-in in Hammarsdale. The contrast with July 2021 — 350 dead, R50 billion in damage — was stark, and attributed explicitly to the SAPS\'s shift from reactive chaos to proactive, heavily funded mobilisation. But the movement is not done. Ngobese-Zuma declared: "Every Thursday for the next six months we are marching until they are gone." June 30 was the beginning, not the end. On a more positive economic note: petrol falls R2.01 per litre from today — the US-Iran peace deal and Strait of Hormuz reopening sent global oil into the mid-$70s, more than absorbing the return of the full fuel levy. The most acute cost-of-living pressure on South African households eases from this morning.',
    tag: 'JULY 1 POST-JUNE 30 VERDICT',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'July 1, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'JUNE 30 VERDICT: ONLY ISOLATED INCIDENTS — 15,000 DURBAN PEACEFUL — JULY 2021 NOT REPEATED', body: 'The June 30 demonstrations concluded relatively peacefully. 15,000+ marched in Durban CBD — carrying traditional weapons, cowshields and knobkieries — without incident. Angry amabutho from Durban hostels wanted to see bloodshed; they did not. In Johannesburg CBD, suspected foreign nationals were confronted by protesters — a small group was shielded from assault by bystanders who intervened and escorted them to safety. Looting arrests were made — a tuckshop break-in in Hammarsdale was the most visible looting incident. SAPS contrast with July 2021 is explicit in reporting: proactive, heavily funded mobilisation vs reactive chaos. The government\'s R600m security operation, SANDF authorisation, royal appeals, 9,500+ deportations, and consistent messaging about the day\'s legal status all contributed.', icon: '✅' },
    { title: 'NGOBESE-ZUMA: "EVERY THURSDAY FOR THE NEXT SIX MONTHS WE ARE MARCHING" — MOVEMENT CONTINUES', body: 'March and March founder Ngobese-Zuma declared June 30 the beginning, not the end: "Every Thursday for the next six months we are marching until they are gone." She framed the day\'s events as the start of sustained pressure and placed responsibility firmly on the government: "If anyone must shoulder any blame for the 30 June protests, it\'s the government." This transforms the June 30 narrative from a deadline that passed to an ongoing weekly mobilisation campaign. The movement\'s announced Thursday march cadence will be the key variable to watch entering July-December 2026. Whether it actually mobilises consistent crowds — given that the Cape Town march drew only 60 people — is the empirical test of the declaration.', icon: '⚠️' },
    { title: 'SA PETROL DOWN R2.01/LITRE FROM TODAY — US-IRAN PEACE DEAL ABSORBS FULL LEVY RETURN', body: 'From midnight July 1: petrol 93 down R2.01/litre to R25.94. Petrol 95 down R1.96/litre to R26.10. Diesel 0.05% sulphur down R3.14/litre to R24.78. Diesel 0.005% sulphur down R3.59/litre to R25.17. Illuminating paraffin down R5.23/litre. The US-Iran memorandum of understanding and Strait of Hormuz reopening sent global Brent crude into the mid-$70s from the $101+ peak in April-May. Despite the full reinstatement of the General Fuel Levy (R1.50/litre for petrol), global over-recoveries more than absorb the tax. This is the single most significant positive economic development for South African households since the mid-year crisis began — arriving the day after June 30.', icon: '📉' },
    { title: 'JUNE 30 AFTERMATH — WHAT COMES NEXT — WEEKLY MARCHES, MUNICIPAL ELECTIONS, PEPFAR', body: 'The June 30 political crisis has not resolved — it has evolved. Weekly Thursday marches declared. Municipal elections in fall 2026 approaching — parties that exploited anti-immigrant sentiment (ActionSA, MK) now have a mobilised base to activate. Ramaphosa\'s 5-point plan must now move from announcement to implementation — biometric register, deportation courts, employer jailing all pending. PEPFAR-CDC funding expires September — UCT/Wits model: 150,000-295,000 additional HIV infections by 2028 without replacement. Household debt: 41% of borrowers in default, R237bn overdue. June 30 passed. The structural conditions remain entirely unresolved.', icon: '🔥' },
  ],

  insight1: {
    title: 'JUNE 30 PASSING PEACEFULLY IS A GOVERNANCE SUCCESS — BUT THE WEEKLY MARCH DECLARATION MEANS THE CRISIS HAS TRANSFORMED, NOT ENDED',
    body: 'South Africa avoided the July 2021 repeat. The R600 million security operation, the SANDF authorisation, Ramaphosa\'s appeal to traditional monarchs, the 9,500+ deportations, the government\'s consistent messaging that June 30 had no legal status, and crucially the SAPS\'s shift to proactive planning all contributed to an outcome that surprised many analysts who had priced much higher violence risk. But Ngobese-Zuma\'s declaration of weekly Thursday marches for six months is not a concession — it is an escalation of the campaign\'s ambition. The movement has now announced a long-term mobilisation strategy that runs directly into the fall 2026 municipal elections. Political parties that backed the protests — ActionSA explicitly, MK implicitly — now have a weekly mobilisation framework to activate. The June 30 crisis as a discrete event is over. The xenophobia movement as an ongoing political force has just declared its next phase.',
    conclusion: 'JUNE 30 PASSED WITHOUT MASS VIOLENCE — A GENUINE GOVERNANCE SUCCESS. BUT NGOBESE-ZUMA\'S WEEKLY MARCH DECLARATION TRANSFORMS THE CRISIS FROM A DEADLINE INTO AN ONGOING CAMPAIGN. THE MUNICIPAL ELECTIONS IN FALL 2026 ARE NOW THE NEXT FOCAL POINT FOR THIS MOVEMENT.',
  },

  insight2: {
    title: 'THE R2.01/LITRE PETROL DROP IS THE MOST CONSEQUENTIAL POSITIVE ECONOMIC SIGNAL FOR SA HOUSEHOLDS IN 2026',
    body: 'The June cost-of-living crisis for South African households was shaped by two simultaneous forces: the political xenophobia crisis and the fuel price surge that followed the US-Iran conflict and Strait of Hormuz closure in early 2026. Petrol hit historic highs in April-May as Brent crude surged past $101. The US-Iran memorandum of understanding and the Strait of Hormuz reopening sent global oil back into the mid-$70s. Despite the full reinstatement of the fuel levy — R1.50/litre for petrol — the global over-recovery more than absorbs the tax, producing a net R2.01/litre decrease from today. At R25.94/litre for 93 unleaded, fuel remains structurally more expensive than March 2026 pre-conflict levels (because the tax cushion that existed then is now gone), but the immediate pressure on transport, logistics and consumer spending eases materially. This is the right economic signal at the right political moment — the day after June 30.',
    conclusion: 'THE R2.01/LITRE PETROL DROP FROM JULY 1 IS THE SINGLE MOST IMPORTANT POSITIVE ECONOMIC DEVELOPMENT FOR SA HOUSEHOLDS IN 2026. IT DIRECTLY ADDRESSES ONE OF THE TWO STRUCTURAL GRIEVANCES FUELLING THE MOVEMENT. WATCH WHETHER FUEL RELIEF REDUCES MARCH AND MARCH MOBILISATION CAPACITY.',
  },

  brief: {
    week: '27',
    title: 'JULY 1 POST-JUNE 30: SOUTH AFRICA PASSES THE TEST — ONLY ISOLATED INCIDENTS — PETROL DOWN R2.01 — WEEKLY MARCHES DECLARED — MOVEMENT CONTINUES',
    body: 'July 1 opens with South Africa\'s verdict on its most consequential June in decades: the test was passed, but the movement continues. June 30 produced only isolated incidents — 15,000 marched peacefully in Durban, angry amabutho who wanted bloodshed did not get it, foreign nationals were confronted in Johannesburg and protected by bystanders. The SAPS\'s proactive approach contrasted sharply with the reactive chaos of July 2021. Ngobese-Zuma declared weekly Thursday marches for six months — the movement has not ended, it has transformed into a sustained campaign heading into fall 2026 municipal elections. Petrol fell R2.01/litre from midnight — the US-Iran peace deal and Strait of Hormuz reopening delivering the biggest fuel price relief in a year, directly on the morning after June 30. Ebola remains the third-largest outbreak on record. Ethiopia\'s TPLF conflict is live. Zimbabwe\'s Mnangagwa awaits only his signature on constitutional amendments abolishing direct elections. Senegal\'s IMF programme is deferred to Q3. Ghana remains the continental benchmark. The most consequential month in African sovereign risk this decade has closed — the structural conditions that produced it remain entirely unresolved.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.55',
    ETB: '158.00',
    TZS: '2,650.00',
    UGX: '3,645.50',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'JUNE 30 VERDICT: Only isolated incidents — July 2021 repeat avoided. 15,000+ marched Durban CBD peacefully. Looting arrests made — Hammarsdale tuckshop most visible incident. Angry amabutho contained. Johannesburg CBD: foreign nationals confronted by protesters — small group shielded from assault by intervening bystanders. SAPS proactive approach vs 2021 reactive chaos: a governance success.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Ngobese-Zuma post-June 30: "Every Thursday for the next six months we are marching until they are gone." "If anyone must shoulder any blame for these protests — it is the government." Movement declares sustained campaign — weekly march cadence heading into fall 2026 municipal elections. ActionSA, MK Party have mobilised base to activate.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'SA PETROL DOWN R2.01/LITRE FROM TODAY. Petrol 93: R25.94/litre. Petrol 95: R26.10. Diesel 0.05%: R24.78. Diesel 0.005%: R25.17. Illuminating paraffin: -R5.23. US-Iran peace deal + Strait of Hormuz reopening drove Brent into mid-$70s — global over-recovery more than absorbs full fuel levy reinstatement. Biggest household cost relief in 2026.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '08:45:00', signal: 'Ebola: 1,000+ confirmed — third-largest outbreak on record. France first European case. White House $1.4bn Congress ask. Contact tracing 58%. Free healthcare Ituri. No vaccine, no treatment. Crisis continues independent of SA political news cycle.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Zimbabwe: Mnangagwa signature pending — direct elections abolished, term to 2030. Ethiopia: TPLF conflict live, US visa restrictions in effect. Senegal: Q3 2026 IMF programme base case, eurobond planned. Nigeria: ISSP active, second SA evacuation wave completed. Somalia: ceasefire holding. Continental compound risk ongoing.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:15:00', signal: 'SA June 30 aftermath: Ramaphosa 5-point plan must now move from announcement to implementation — biometric register, deportation courts, employer jailing all pending. PEPFAR-CDC expires September. Household debt: 41% in default. Municipal elections fall 2026 approaching. Weekly march cadence declared by movement for 6 months.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'World Cup: Ghana advancing, Morocco advancing, Senegal eliminated. DRC Leopards exited group stage. Africa\'s World Cup continues — Ebola context created by travel restrictions and fan bans. Algeria, Morocco, Ghana still competing. SA exit 92nd-minute Canada goal June 28. Africa has 3 teams in Round of 16.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 1: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.55 (slight weakening on ZAR on July 1 open — markets absorbing June 30 outcome and weekly march declaration) | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR 2026 average 16.43 — current rate near average. Petrol drop from today structurally positive for rand.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 88, fiscal: 60, fx: 42, debt: 60, political: 92, external: 82 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 32, fx: 44, debt: 32, political: 28, external: 38 },
    { country: 'Kenya', flag: '🇰🇪', score: 78, fiscal: 74, fx: 60, debt: 80, political: 78, external: 76 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 82, fiscal: 72, fx: 44, debt: 66, political: 84, external: 82 },
    { country: 'Senegal', flag: '🇸🇳', score: 68, fiscal: 72, fx: 58, debt: 74, political: 62, external: 66 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 96, fiscal: 78, fx: 82, debt: 84, political: 99, external: 92 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'MODERATE', ytd: '-3.40%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.55', change: '-9.10%', stress: 'LOW', ytd: '+9.10%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 Municipal Elections', type: 'Municipal Elections', risk: 'HIGH', note: 'June 30 passed with only isolated incidents. Weekly Thursday marches declared for 6 months. Petrol down R2.01 today. Municipal elections approaching — movement has declared sustained campaign. 5-point plan implementation pending. PEPFAR September.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Mnangagwa Signature Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Senate approved June 24. Direct elections abolished. Term to 2030. Elections postponed. Only signature needed. AU response absent.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions in effect. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk active. Horn maximum risk.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — ISSP Active', type: 'General Election', risk: 'CRITICAL', note: 'ISSP first operations in 6 years. 842 killed May. Multi-vector security peak. 2027 election risk tier-1. Second SA evacuation completed.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: 'Accountability Phase — Finance Bill Law', type: 'Political Crisis', risk: 'HIGH', note: 'June 25 contained — 355 arrested. Finance Bill law. Reparations Sh2bn implementation pending. Accountability for 120+ deaths next test.', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Q3 2026 IMF Programme Expected', type: 'Debt Crisis', risk: 'HIGH', note: 'IMF June visit no deal. Q3 programme base case. Eurobond planned. Bonds rallied. Structural risk unchanged.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'Q3 2026 IMF PROGRAMME EXPECTED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Q3 Expected', risk: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026 — Rolling', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$77', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$77', fiscalBreakeven: '$78/bbl', breakevenNote: 'NEAR BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$77', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 198, delta: '-25', bond: '+1.2pts', fx: '+9.1%', signal: 'JUNE 30 PASSED — WEEKLY MARCHES DECLARED — PETROL -R2.01', color: '#f5a623' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 1000+ — THIRD-LARGEST ON RECORD', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ELECTIONS ABOLISHED — SIGNATURE PENDING', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — WAR RISK ACTIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-13.8%', signal: 'ISSP ACTIVE — MULTI-VECTOR SECURITY PEAK', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF Q3 EXPECTED — EUROBOND PLANNED', color: '#f5a623' },
    { country: 'KENYA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '+0.1%', signal: 'JUNE 25 CONTAINED — ACCOUNTABILITY PHASE', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-8', bond: '+0.6pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP R16 — BENCHMARK', color: '#00c48c' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 20', NGN: 1370.31, GHS: 13.10, KES: 129.50, EGP: 53.90, ZAR: 18.45, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 23', NGN: 1370.31, GHS: 12.50, KES: 129.50, EGP: 53.20, ZAR: 18.35, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 25', NGN: 1370.31, GHS: 12.20, KES: 129.50, EGP: 53.12, ZAR: 18.30, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 27', NGN: 1371.98, GHS: 11.66, KES: 129.50, EGP: 52.80, ZAR: 17.80, UGX: 3745, ZMW: 19.05, XOF: 613 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 29', NGN: 1371.85, GHS: 11.10, KES: 129.10, EGP: 52.35, ZAR: 16.80, UGX: 3765, ZMW: 19.03, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.21, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.19, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.40, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.41, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.46, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 24', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.66, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 26', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.60, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 29', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.41, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
