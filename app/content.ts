export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 23, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'WORSENING',
    drivers: ['Kenya Health Minister Found In Contempt — Ebola Facility Built Despite Court Orders — Sentencing Today', 'SA Spending R600m On June 30 Security — Police All 9 Provinces — SANDF Deployment If Overwhelmed', 'Four Political Activists Shot Dead In SA — Political Assassinations Ahead Of June 30', 'June 25 Anniversary TOMORROW — Schools Closed — Kenya Critical 24 Hours'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 92, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Kenya', flag: '🇰🇪', alert: 'CONTEMPT OF COURT. Justice Patricia Nyaundi Mande found Health Minister Aden Duale in contempt Monday — commissioned construction at Laikipia Air Base Ebola facility despite multiple court orders issued late May and early June to halt activities. Duale summoned to appear in court TODAY June 23 at 11am for mitigation and sentencing. Three people have died in Nanyuki protests against the facility — including a 17-year-old schoolboy. Facility was being built to house US nationals exposed to Ebola in DRC/Uganda. US-Kenya relations severely strained. June 25 anniversary TOMORROW. Finance Bill June 30 — 7 days.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'SA spending R600m to prepare for June 30 anti-immigration protests. Acting Police Minister Cachalia: "law enforcement will act decisively against any violence, intimidation, or criminality." Police heightened security across all nine provinces. KwaZulu-Natal, Gauteng, Eastern Cape, Western Cape identified as hotspots. SANDF deployment authorised if unrest exceeds police capacity. FOUR POLITICAL ACTIVISTS SHOT DEAD — KwaZulu-Natal political assassinations ongoing ahead of June 30. June 30: 7 days.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'JUNE 25 ANNIVERSARY TOMORROW — schools closed today. Gen-Z mobilisation building. Finance Bill 2026 still due June 30 — 7 days. Ruto\'s defusion strategy: reparations for 2,000 victims + PAYE relief. Finance Bill still contains phone excise duty, crypto taxes, digital economy levies — identical 2024 political profile. 2024 pattern: parliament stormed June 25, bill withdrawn June 28. Whether 2026 follows: the next 24 hours determine it.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'PP confirmed 438/501 seats — Abiy third term. US TPLF visa restrictions confirmed June 18 — Rubio cited direct ENDF clashes, hundreds of thousands displaced. TPLF "totalitarian control" draft legislation: mandatory mobilisation, expanded security powers, media regulation. Post-election conflict live. Eritrea Red Sea tensions. Pretoria Agreement functionally collapsed.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF discussions ongoing. Sonko opened door to debt talks June 16. Diba targets agreement June 30 — 7 days. Three Pastef members in Lo government. Bonds rallied from 50.6c. $9.7bn obligations 2026. June 30 agreement window closes in 7 days — agreement or extension is the binary. Oxford Economics Venezuela/Lebanon classification until programme restored.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'KENYA HEALTH MINISTER IN CONTEMPT — SENTENCED TODAY — SA R600M JUNE 30 SECURITY SPEND — FOUR ACTIVISTS SHOT DEAD — JUNE 25 IS TOMORROW',
    body: 'June 23 — one day before the June 25 storming anniversary. Kenya\'s Health Minister Aden Duale appears in the High Court today at 11am for sentencing after Justice Nyaundi Mande found him in contempt Monday — he commissioned construction of the US-backed Ebola quarantine facility at Laikipia Air Base despite multiple court orders issued in late May and early June to halt the project. Three people including a 17-year-old schoolboy have died in protests against the facility. Duale told parliament "we will not stop it" — and didn\'t. US-Kenya relations are severely strained entering the most politically charged day of the Kenyan calendar. In South Africa, the government is spending R600 million to prepare for June 30 — police deployed across all nine provinces with KwaZulu-Natal, Gauteng, Eastern Cape and Western Cape identified as hotspots. SANDF deployment is authorised if police are overwhelmed. Four political activists have been gunned down in what appears to be targeted political assassinations ahead of June 30. The June 30 countdown is 7 days. The June 25 anniversary is tomorrow.',
    tag: 'JUNE 23 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 23, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '780', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'KENYA HEALTH MINISTER IN CONTEMPT — SENTENCED TODAY 11AM — EBOLA FACILITY BUILT AGAINST COURT ORDERS', body: 'Justice Nyaundi Mande: Health Minister Duale found in contempt Monday for commissioning construction at Laikipia Air Base Ebola quarantine facility despite multiple court orders issued in late May and early June to halt the project. Duale summoned to appear today June 23 at 11am for mitigation and sentencing. The 50-bed facility was intended to house US nationals exposed to Ebola in DRC/Uganda. Three people — including a 17-year-old schoolboy — died in Nanyuki protests. Duale told parliament: "we will not stop it." Ruto: "gave the okay because it was an agreement with friends who have walked with Kenya for 30, 40 years." US-Kenya relations severely strained. Case brought by Law Society of Kenya and Katiba Institute.', icon: '⚖️' },
    { title: 'SA R600M JUNE 30 SECURITY SPEND — ALL 9 PROVINCES — SANDF AUTHORISED', body: 'South Africa spending R600 million to prepare for June 30 anti-immigration protests. Acting Police Minister Cachalia: "law enforcement will act decisively against any violence, intimidation, or criminality." Participants must not carry weapons. Police heightened across all nine provinces. KwaZulu-Natal, Gauteng, Eastern Cape, Western Cape identified as hotspots. SANDF deployment authorised if unrest exceeds police capacity. FOUR political activists gunned down — KwaZulu-Natal political assassinations ongoing. Cape Town artists and activists held "Phantsi, Afrophobia!" event — civil society pushing back. Civil society matters because the state\'s complicity with March and March has already been confirmed by academic analysis.', icon: '🚨' },
    { title: 'JUNE 25 TOMORROW — SCHOOLS CLOSED — KENYA CRITICAL 24 HOURS', body: 'Tomorrow is the second anniversary of the 2024 parliament storming — the day that killed at least 22 people, injured 300+, forced Ruto to withdraw the Finance Bill, and changed Kenya\'s political landscape permanently. Schools are closed today. Gen-Z is mobilised. Ruto\'s defusion strategy — reparations for 2,000 victims, PAYE relief — is being tested. The Finance Bill 2026 still contains phone excise duty, crypto taxes and digital economy levies. The 2024 calendar was: protests begin → escalate → parliament stormed June 25 → bill withdrawn June 28. If 2026 follows the same path, the next 24 hours are the most consequential in Ruto\'s presidency.', icon: '🔥' },
    { title: 'ZAR EASES TO 16.39 — RAND GIVING BACK SOME GAINS AS JUNE 30 APPROACHES', body: 'USD/ZAR moved to 16.39 as of June 22 — from the 16.18 low reached last week. The past week range: high 16.528 (June 19), low 16.1373 (June 16). The 50-day MA resistance is at 16.63 — a critical level for continued rand weakness. ZAR is still 10.7% stronger year-on-year. The slight weakening reflects the June 30 political risk premium building as the dual-movement deadline approaches. SARB at 7%, gold/PGM exports and fiscal discipline remain structural supports. The R600m security spend and SANDF deployment possibility are being absorbed by markets — for now.', icon: '📉' },
  ],

  insight1: {
    title: 'DUALE\'S CONTEMPT CONVICTION IS THE MOST SERIOUS GOVERNANCE FAILURE IN KENYA IN YEARS — AND IT ARRIVES THE DAY BEFORE JUNE 25',
    body: 'A sitting Cabinet Secretary being found in contempt of court for defying multiple judicial orders — and being summoned for sentencing the day before the anniversary of the most significant popular uprising in Kenya\'s democratic history — is not a coincidence of timing. It is a compounding signal. Duale\'s contempt relates to a facility that has already killed three people in protests, that the CDC itself opposed, that the Law Society and constitutional watchdog challenged, and that the courts twice ordered halted. Ruto\'s defence — "an agreement with friends who have walked with Kenya for 30, 40 years" — is the precise framing that Gen-Z rejected in 2024: foreign partnerships prioritised over domestic consent. The contempt conviction hands Gen-Z a specific, legally validated grievance the day before they are expected to mobilise. The Finance Bill is the stated cause. The Ebola facility contempt is the emotional accelerant.',
    conclusion: 'DUALE\'S CONTEMPT CONVICTION ARRIVING ON JUNE 24 — THE EVE OF THE JUNE 25 ANNIVERSARY — IS AN ACCELERANT FOR GEN-Z MOBILISATION. IT PROVIDES A SPECIFIC, COURT-VALIDATED GRIEVANCE ON TOP OF THE FINANCE BILL. WATCH NAIROBI TOMORROW.',
  },

  insight2: {
    title: 'SOUTH AFRICA\'S R600M JUNE 30 SECURITY SPEND IS THE PRICE OF THE MAY 25 UNION BUILDINGS MISTAKE',
    body: 'When the South African government invited March and March to the Union Buildings on May 25, legitimised their ultimatums on national television, and effectively incorporated their demands into Ramaphosa\'s five-point plan, it created a political dynamic that now requires R600 million in security spending and SANDF deployment authorisation to manage. The cost of legitimising an extralegal movement is that you cannot then simply withdraw the legitimacy — the movement interprets any security deployment as confirmation that their pressure works, and that June 30 is worth pushing further. Four political activists have already been killed in what appears to be targeted assassinations. The SANDF deployment authorisation signal — that police may be overwhelmed — is itself a political risk escalation: it tells March and March that the state expects to be tested.',
    conclusion: 'THE R600M JUNE 30 SECURITY SPEND IS THE DIRECT FISCAL COST OF THE UNION BUILDINGS LEGITIMISATION ERROR. SANDF DEPLOYMENT AUTHORISATION TELLS THE MOVEMENTS THAT THE STATE EXPECTS TO BE CHALLENGED. WATCH FOR MOVEMENT ANNOUNCEMENTS ON JUNE 24.',
  },

  brief: {
    week: '26',
    title: 'WEEK 26 TUESDAY: KENYA MINISTER CONTEMPT SENTENCED TODAY, SA R600M JUNE 30 SECURITY, FOUR ACTIVISTS SHOT, JUNE 25 TOMORROW',
    body: 'June 23 — the most dangerous Tuesday in Africa\'s 2026 political calendar. Kenya\'s Health Minister Duale faces sentencing today at 11am for contempt — building the US Ebola facility against court orders, days before the June 25 anniversary. South Africa is spending R600 million on June 30 security — police deployed across all nine provinces, SANDF authorised if overwhelmed. Four political activists were shot dead in KwaZulu-Natal in targeted assassinations ahead of June 30. The June 25 storming anniversary is tomorrow — schools are closed, Gen-Z is mobilised. Finance Bill June 30 is 7 days away. Senegal\'s IMF agreement window closes in 7 days. ZAR eased to 16.39 on June 30 risk premium. Ethiopia\'s post-election TPLF conflict remains live. Ebola at 894 confirmed, 200+ dead, only 12% contact tracing. The continent\'s most consequential week since the start of the decade is now fully underway.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.39',
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
    { time: '09:30:00', signal: 'Kenya CONTEMPT: Health Minister Duale found in contempt Monday — built Ebola facility at Laikipia Air Base despite multiple court orders. Summoned for sentencing TODAY at 11am. Three people including 17-year-old died in Nanyuki protests. US-Kenya relations severely strained. June 25 tomorrow. Finance Bill June 30 — 7 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:15:00', signal: 'SA June 30 — 7 DAYS. R600m security spend — police all 9 provinces. KZN, Gauteng, Eastern Cape, Western Cape hotspots. SANDF deployment authorised if overwhelmed. FOUR political activists shot dead — KZN assassinations. Acting Minister Cachalia: decisive action against violence. Cape Town "Phantsi, Afrophobia!" civil society pushback.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Kenya JUNE 25 TOMORROW. Schools closed today. Gen-Z mobilised. Ruto defusion: reparations + PAYE. Finance Bill still: phone excise, crypto taxes, digital economy levies. 2024 pattern: protests → parliament stormed June 25 → bill withdrawn June 28. 2026 calendar identical. Next 24 hours most consequential in Ruto presidency.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:45:00', signal: 'ZAR eases to 16.39 from 16.18 low — June 30 risk premium building. Past week range: high 16.528 (June 19), low 16.1373 (June 16). Critical 50-day MA resistance at 16.63. Still 10.7% stronger YoY. SARB 7%, gold/PGM exports remain structural supports. R600m security spend + SANDF deployment absorbed — for now.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ethiopia: PP 438/501 seats, Abiy third term. US TPLF visa restrictions confirmed. Hundreds of thousands displaced. Pretoria Agreement collapsed. Post-election conflict current situation. TPLF "totalitarian control" draft legislation active. Eritrea Red Sea tensions. Horn compound risk maximum.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Senegal: IMF discussions ongoing post-June 15 visit. Sonko open to IMF talks. Diba targets June 30 agreement — 7 days. Bonds rallied. Structural risk: 132% debt/GDP, $9.7bn obligations. June 30 agreement window closes in 7 days. Oxford Economics Venezuela/Lebanon classification until programme restored.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:00:00', signal: 'Libya: UN Envoy warns window for political action narrowing. Rwanda receives 170+ asylum seekers from Libya. Libya recovers 15 bodies of migrants east of Tripoli. Libya-Sudan-Niger migration corridor is the continent\'s most dangerous humanitarian corridor. Middle East war driving up bitumen costs for African road builders — infrastructure development impact.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 23: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.39 (easing from 16.18 — June 30 risk premium) | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR critical level: 16.63 (50-day MA) is resistance for further weakness. Watch ZAR and KES through June 25-30 window.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 88, fiscal: 60, fx: 42, debt: 60, political: 96, external: 72 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 99, fiscal: 90, fx: 74, debt: 96, political: 99, external: 99 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 78, fx: 52, debt: 70, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 74, fiscal: 78, fx: 64, debt: 80, political: 70, external: 72 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
    { country: 'Somalia', flag: '🇸🇴', score: 98, fiscal: 88, fx: 82, debt: 78, political: 99, external: 90 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'MODERATE', ytd: '-3.40%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.39', change: '-10.70%', stress: 'MODERATE', ytd: '+10.70%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Kenya', flag: '🇰🇪', date: 'JUNE 25 TOMORROW — FINANCE BILL JUNE 30 IN 7 DAYS', type: 'Political Crisis', risk: 'CRITICAL', note: 'Health Minister in contempt — sentenced today 11am. June 25 anniversary tomorrow. Schools closed. Gen-Z mobilised. Finance Bill due June 30. 2024 pattern identical calendar. Next 24 hours most consequential in Ruto presidency.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'June 30 — 7 Days — R600m Security', type: 'Municipal Elections', risk: 'CRITICAL', note: 'R600m security spend. All 9 provinces deployed. SANDF authorised. Four activists shot dead. June 30: 7 days. State complicity with vigilantes confirmed. Ramaphosa 5-point plan implementation gap.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 438/501 — Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions. Hundreds of thousands displaced. Pretoria Agreement collapsed. TPLF "totalitarian control" legislation. War risk current situation.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding in Mogadishu. Opposition calls Mohamud "former president." Al-Shabaab active. Somaliland Jerusalem embassy — Somalia furious.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension — Senate Vote Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed 200+ votes. Senate vote pending. Mnangagwa assent if passed. Ambassador to Eswatini and Mozambique dies.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — Security Crisis Escalating', type: 'General Election', risk: 'CRITICAL', note: '842 killed May 2026. Deaths up 90.1%. Multi-vector security collapse. 2027 election cycle absorbing political risk.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'IMF Agreement Target June 30 — 7 Days', type: 'Debt Crisis', risk: 'HIGH', note: 'Sonko open to IMF talks. Diba targets June 30. Bonds rallied. Structural risk unchanged. 7-day window closing.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF AGREEMENT TARGET JUNE 30 — 7 DAYS', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Final 7 Days', risk: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
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
    { country: 'KENYA', cds: 192, delta: '+58', bond: '-2.9pts', fx: '+0.1%', signal: 'MINISTER CONTEMPT SENTENCED TODAY — JUNE 25 TOMORROW', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+10.7%', signal: 'R600M SECURITY — 4 ACTIVISTS SHOT — JUNE 30 7D', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — US VISA SANCTIONS', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF AGREEMENT JUNE 30 — 7 DAYS', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-13.8%', signal: '842 DEAD MAY — SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 894 — 12% TRACING — $7.5BN RISK', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP ALIVE', color: '#00c48c' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'JNIM SECURITY COLLAPSE — NIAMEY AIRPORT', color: '#ff3b3b' },
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
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.24, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.36, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.58, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.14, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.42, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.53, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.30, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.42, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 23', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.39, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
