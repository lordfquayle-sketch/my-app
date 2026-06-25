export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 25, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'STABLE',
    drivers: ['Kenya June 25 Anniversary — Nairobi Locked Down — Protests Underway — Finance Bill ALREADY SIGNED', 'Ruto Signed Finance Bill 2026 Into Law June 23 — 186 MPs Absent — Pre-empting Anniversary', 'South Africa June 30 — 5 Days — All Security Deployed — SANDF Authorised', 'Ebola DRC 1,003 Confirmed 254 Dead — Families Storm Centres — Contact Tracing 58%'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 92, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 80, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Kenya', flag: '🇰🇪', alert: 'JUNE 25 ANNIVERSARY TODAY — NAIROBI LOCKED DOWN. Ruto signed Finance Bill 2026 into law JUNE 23 — two days before the anniversary — first time a president signed before June 25 since taking office. 186 of 349 MPs absent for vote. 122 voted yes, 40 opposed. Protests today are commemorative — demanding accountability for 120+ deaths in 2024-2025 protests. Police blocked Thika Road, Kiambu Road, Jogoo Road, Outering Road, CBD access points, routes to JKIA. Matatus barred from CBD. Senators debating on national television. Whether protests stay peaceful determines June 30. Finance Bill June 30 is now moot — already law.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 — 5 DAYS. All security deployed — R600m operation across 9 provinces. SANDF authorised if police overwhelmed. Four activists shot dead KZN in targeted assassinations. PEPFAR $400m withdrawal warning from UNAIDS. HRW documented systematic xenophobia. Household debt 41% in default. Inflation 4.5% two-year high. Voter registration launched. GNU managing maximum compound crisis entering final 5-day window.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola DRC: 1,003 confirmed, 254 deaths. Contact tracing 58% (target 90-95%). Families storming quarantine centres, 150+ patient escapes. 2.95 million children at risk in 31 health zones. DRC introduced free healthcare ALL illnesses in Ituri to rebuild trust. Israel second suspected Ebola case after DRC travel. WHO isolation unit built in Bunia Central Prison — 2,000 inmates at risk. UNICEF $70.7m response — $20m unfunded. No vaccine, no approved treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'ISSP entered Nigeria — first operations in 6 years via Kebbi and Sokoto from Niger. "Lakurawa" militants confirmed as ISSP component. 842 killed May 2026 (deaths up 90.1%). Boko Haram + ISWAP + NW banditry + SW school abductions + ISSP. Sahel security collapse has crossed Africa\'s most consequential border. Nigerian Presidency rejected Peter Obi\'s call for Tinubu resignation amid compound security crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF agreement window closes in 5 days — June 30. Sonko opened door to debt talks June 16. Diba targets June 30 agreement. Bonds rallied from 50.6c. Three Pastef members in Lo government. $9.7bn obligations 2026. Structural risk unchanged. June 30 agreement or extension is the binary outcome.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'KENYA JUNE 25 — NAIROBI LOCKED DOWN — FINANCE BILL ALREADY SIGNED JUNE 23 — PROTESTS COMMEMORATIVE NOT BLOCKING — RUTO\'S PRE-EMPTIVE GAMBLE — SA JUNE 30 IN 5 DAYS',
    body: 'June 25, 2026 — the second anniversary of the day that changed Kenya forever. But the political landscape is fundamentally different from 2024. Ruto signed the Finance Bill 2026 into law on Tuesday June 23 — two days before the anniversary — the first time in his presidency he has signed before June 25. The bill passed with only 122 of 349 MPs voting yes, 40 opposing, and 186 absent — the largest parliamentary abstention in Kenyan legislative history. The absentees sent a political signal without voting no. Today\'s protests are not a bill-blocking event — the bill is already law. They are a commemoration of 120+ people killed in the 2024-2025 protests and a demand for accountability. Police have blocked all major Nairobi entry points since 6:40am — Thika Road, Kiambu Road, Jogoo Road, Outering Road, CBD access points, routes to JKIA. Matatus are barred from the CBD. Senators are debating on national television about what happened in 2024. The US Embassy issued a security advisory. Whether today passes peacefully is the determinative signal for South Africa\'s June 30 five days away.',
    tag: 'JUNE 25 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 25, 2026',
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
    { title: 'RUTO SIGNED FINANCE BILL 2026 INTO LAW JUNE 23 — PRE-EMPTIVE GAMBLE — 186 MPs ABSENT', body: 'President Ruto signed the Finance Bill 2026 into law at State House on June 23 — two days before the anniversary — the first time in his presidency he signed before June 25, in a deliberate pre-emptive move. 186 of 349 MPs were absent for the vote — the largest parliamentary abstention in Kenyan history on a Finance Bill. Of those present, 122 voted yes and 40 opposed. The 186 absentees sent a political signal without going on record as opposing the bill. Critics warn the bill: taxes digital and merchant service fees threatening cashless economy progress; the mitumba clothing import tax threatens millions of low-income earners; deemed dividend tax punishes reinvestment; 20% betting tax drives users to offshore platforms. The bill is already law. Today\'s protests cannot block it.', icon: '⚖️' },
    { title: 'NAIROBI LOCKED DOWN — ROADBLOCKS ALL MAJOR ENTRY POINTS — CBD DESERTED AT 9AM', body: 'As of 6:40am June 25: police mounted roadblocks on Thika Road, Kiambu Road, Jogoo Road, Outering Road, JKIA routes, and CBD access points. Matatus barred from entering CBD. Long-distance buses stopped at Uthiru 87 Junction. Traffic snarled on Thika Road. CBD largely deserted at 9am — Kenyatta Avenue and Moi Avenue empty. Families of victims marched to Parliament to lay flowers. Opposition Governor Orengo: "We invite all Kenyans to march to Parliament to demand justice." Gachagua warned Kenyans to stay indoors citing "intelligence" of planned goon deployment. US Embassy issued security advisory.', icon: '🚨' },
    { title: 'SOUTH AFRICA JUNE 30 — 5 DAYS — ALL SYSTEMS DEPLOYED — SANDF AUTHORISED', body: 'South Africa enters the final 5-day window before June 30 with all security systems deployed. R600m SAPS operation across all 9 provinces. SANDF deployment authorised if police overwhelmed. KZN, Gauteng, Eastern Cape, Western Cape as hotspots. Four political activists shot dead in targeted KZN assassinations ahead of June 30. UNAIDS warned PEPFAR $400m withdrawal will cost lives. Household debt 41% in default. Inflation 4.5% two-year high. Voter registration launched. GNU managing maximum compound crisis. ZAR at 16.39.', icon: '🔥' },
    { title: 'EBOLA 1,003 CONFIRMED — FREE HEALTHCARE ITURI — PRISON ISOLATION UNIT — ISRAEL SECOND CASE', body: 'DRC 1,003 confirmed, 254 deaths. Contact tracing 58% — target 90-95%. DRC introduced free healthcare for ALL illnesses in Ituri — trust-rebuilding response to patient escapes. WHO built isolation unit in Bunia Central Prison housing 2,000 inmates. UNICEF $70.7m response — $20m unfunded. Israel second suspected Ebola case after DRC travel at Tel Aviv Sheba Medical Centre. 2.95 million children at risk. 130+ children orphaned in Ituri. Children twice as likely to die as adults. No vaccine, no approved treatment.', icon: '🔴' },
  ],

  insight1: {
    title: 'RUTO\'S PRE-EMPTIVE SIGNING OF THE FINANCE BILL IS THE MOST POLITICALLY SOPHISTICATED MOVE OF HIS PRESIDENCY',
    body: 'Signing the Finance Bill 2026 into law on June 23 — before the June 25 anniversary — is a precisely calibrated political move. It transforms today\'s protests from a legislative-blocking action into a commemorative exercise. In 2024, the bill was unsigned when protesters stormed parliament — their pressure could directly stop the legislation. In 2026, the bill is already law before the anniversary arrives. The 186 MP absences are the parliamentary class reading the same political environment and choosing to not be on record — they didn\'t vote against Ruto, but they also didn\'t vote for him. The reparations fund ($15m for 1,100 people), the PAYE relief, the early signing — Ruto has deployed every available defusion tool. Whether it works depends on whether Gen-Z accepts the bill-as-law frame or escalates toward the broader accountability demands — 120+ deaths still without prosecutions, Ojwang\'s death, the disappeared.',
    conclusion: 'RUTO SIGNED THE FINANCE BILL BEFORE JUNE 25 — REMOVING THE LEGISLATIVE TRIGGER. TODAY\'S PROTESTS ARE COMMEMORATIVE, NOT BLOCKING. THE RISK HAS NOT BEEN ELIMINATED — IT HAS BEEN REFRAMED. WATCH WHETHER GEN-Z STAYS WITHIN THE COMMEMORATION FRAME OR ESCALATES TO BROADER ACCOUNTABILITY DEMANDS.',
  },

  insight2: {
    title: 'THE 186 MP ABSENCES ON THE FINANCE BILL VOTE ARE THE MOST IMPORTANT POLITICAL SIGNAL OF KENYA\'S JUNE 2026',
    body: 'When 186 of 349 MPs — more than half — decline to attend a vote on the government\'s flagship fiscal legislation, that is not absenteeism. It is a political statement expressed through absence. The Kenya Kwanza coalition passed the bill with 122 votes — barely a third of the house. The remaining two-thirds either voted against (40) or did not show up (186). The significance: Ruto\'s parliamentary majority is formal but not functional. His allies stayed home to avoid being associated with an unpopular bill while not forcing a defeat. This dynamic — where the president passes legislation with a rump parliament while the majority of lawmakers signal disapproval through absence — is precisely the dynamic that made the 2024 withdrawal inevitable. The 186 absences are the early warning signal for Ruto\'s 2027 electoral vulnerability.',
    conclusion: 'THE 186 MP ABSENCES ON FINANCE BILL 2026 ARE A FORMAL MAJORITY THAT IS NOT A FUNCTIONAL MANDATE. RUTO PASSED THE BILL BUT 186 MPs REFUSED TO ASSOCIATE THEMSELVES WITH IT. THIS IS THE DEFINING POLITICAL SIGNAL OF HIS SECOND TERM — WATCH HOW IT PLAYS INTO THE 2027 ELECTION CYCLE.',
  },

  brief: {
    week: '26',
    title: 'WEEK 26 JUNE 25: KENYA ANNIVERSARY TODAY — NAIROBI LOCKED DOWN — FINANCE BILL ALREADY SIGNED — SA JUNE 30 IN 5 DAYS',
    body: 'June 25 — Kenya\'s most politically charged day of the year. Ruto signed the Finance Bill 2026 on June 23 — before the anniversary — a pre-emptive gamble that transforms today\'s protests from bill-blocking to commemorative. 186 of 349 MPs were absent for the vote. Nairobi locked down since 6:40am — CBD deserted, all major roads blocked. Senators debating on national television. US Embassy issued security advisory. Opposition Governor Orengo called for march to Parliament to lay flowers. South Africa has 5 days to June 30 — R600m security operation, SANDF authorised, four activists assassinated in KZN. Ebola at 1,003 confirmed, 254 dead — free healthcare launched in Ituri, Israel second suspected case. ISSP entered Nigeria from Niger. Senegal\'s IMF window closes in 5 days. The continent is at its maximum risk density of the decade.',
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
    { time: '09:30:00', signal: 'Kenya JUNE 25: Nairobi locked down — police roadblocks Thika, Kiambu, Jogoo, Outering roads, CBD access, JKIA routes. Matatus barred. CBD deserted at 9am. Families marching to Parliament to lay flowers. Finance Bill ALREADY SIGNED June 23. Protests commemorative — accountability for 120+ deaths. Senators debating live. US Embassy security advisory issued.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:15:00', signal: 'Finance Bill 2026 signed June 23 — 186 of 349 MPs absent from vote. 122 voted yes, 40 opposed. Largest parliamentary abstention on Finance Bill in Kenya history. Bill already law — protests cannot block it. Ruto first time signed before June 25 in presidency — deliberate pre-emption. MPs signalled disapproval through absence without going on record.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'South Africa June 30 — 5 DAYS. R600m SAPS operation all 9 provinces. SANDF authorised. Four KZN activists assassinated. PEPFAR $400m UNAIDS warning. UNAIDS: 8m+ South Africans with HIV. Household debt 41% in default. Inflation 4.5%. ZAR 16.39 — 50-day MA resistance at 16.63.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'Ebola DRC: 1,003 confirmed 254 dead. Free healthcare ALL illnesses Ituri launched — trust-rebuilding. WHO isolation unit Bunia Central Prison (2,000 inmates). Israel second suspected case — Tel Aviv Sheba. UNICEF $70.7m — $20m unfunded. Contact tracing 58%. 2.95m children at risk. Families still storming centres. No vaccine, no approved treatment.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Senegal: IMF agreement window closes in 5 days — June 30. Sonko open to debt talks. Diba targets June 30. Bonds rallied from 50.6c. June 30 agreement or extension is the binary. Oxford Economics Venezuela/Lebanon until programme restored. Structural risk: 132% debt/GDP, $9.7bn obligations.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:15:00', signal: 'Nigeria: ISSP entered via Niger — first operations in 6 years Kebbi + Sokoto. Lakurawa confirmed as ISSP component. 842 killed May 2026. Nigerian Presidency rejected Peter Obi call for Tinubu resignation. Sahel security collapse has crossed most consequential African border. 2027 election cycle absorbing compound security risk.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '08:00:00', signal: 'World Cup: Kenya\'s June 25 demonstrations being monitored globally. Ghana preparing for next group match. DRC Leopards drew Portugal 1-1. Africa competing effectively on pitch — Morocco advanced. The tournament\'s Africa narrative: simultaneous global sporting success and continental political crisis at peak density.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 25: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.39 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. KES holding despite maximum political stress. ZAR at 16.39 — 50-day MA resistance 16.63. Markets watching Kenya June 25 protests and SA June 30 approach simultaneously.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 96, fiscal: 60, fx: 42, debt: 60, political: 96, external: 88 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 99, fiscal: 90, fx: 74, debt: 96, political: 99, external: 99 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 80, fx: 52, debt: 70, political: 99, external: 98 },
    { country: 'Senegal', flag: '🇸🇳', score: 72, fiscal: 76, fx: 62, debt: 78, political: 68, external: 70 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 92, fx: 94, debt: 90, political: 99, external: 96 },
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
    { country: 'Kenya', flag: '🇰🇪', date: 'JUNE 25 TODAY — FINANCE BILL SIGNED JUNE 23', type: 'Political Crisis', risk: 'CRITICAL', note: 'Nairobi locked down. Finance Bill already law — signed June 23. 186 MPs absent. Protests commemorative — accountability for 120+ deaths. Whether peaceful or escalating determines June 30 SA signal.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'June 30 — 5 Days', type: 'Municipal Elections', risk: 'CRITICAL', note: 'R600m security deployed. SANDF authorised. Four activists assassinated. PEPFAR warning. 41% borrowers in default. 5 days to deadline. Maximum compound stress.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — ISSP Active In Nigeria', type: 'General Election', risk: 'CRITICAL', note: 'ISSP first Nigeria operations in 6 years. 842 killed May. Tinubu resignation rejected. Multi-vector security at peak. 2027 election risk tier-1.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 438/501 — Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk current situation.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition "former president" narrative. Al-Shabaab active. US resumed airstrikes.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'IMF Agreement Target June 30 — 5 Days', type: 'Debt Crisis', risk: 'HIGH', note: 'Sonko open to IMF talks. Diba targets June 30 agreement. Bonds rallied. 5-day window closing.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension — Senate Vote Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed. Senate vote pending. Mnangagwa assent if passed.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF AGREEMENT TARGET JUNE 30 — 5 DAYS', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — 5 Days Left', risk: 'HIGH', color: '#f5a623' },
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
    { country: 'KENYA', cds: 192, delta: '+58', bond: '-2.9pts', fx: '+0.1%', signal: 'JUNE 25 TODAY — FINANCE BILL ALREADY LAW', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+10.7%', signal: 'JUNE 30 — 5 DAYS — ALL SYSTEMS DEPLOYED', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+40', bond: '-2.0pts', fx: '-13.8%', signal: 'ISSP ENTERS — 842 DEAD MAY — SECURITY PEAK', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — US SANCTIONS', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 1003 — FREE HEALTHCARE ITURI', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF AGREEMENT JUNE 30 — 5 DAYS', color: '#f5a623' },
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'SEXUAL VIOLENCE WEAPON OF WAR — UN REPORT', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP ALIVE', color: '#00c48c' },
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
    { date: 'Jun 24', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.39, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.39, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
