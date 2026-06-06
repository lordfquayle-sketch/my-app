export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 6, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'STABLE',
    drivers: ['SENEGAL PAYS BOTH COUPONS EARLY — €53.75m + $38.75m AHEAD OF SCHEDULE', 'IMF VISIT NOW WEEK OF JUNE 15 — NOT JUNE 8 — Timeline Shift', 'Ethiopia PP Landslide Confirmed — Pretoria Agreement "On Verge of Collapse" — Eritrea War Risk', 'WHO $518m Ebola Plan Launched — DRC 381 Confirmed 64 Dead — Uganda 16 Cases'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '↓', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 98, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'POSITIVE SIGNAL. Senegal paid both bond coupons EARLY — €53.75m on 2037 euro bonds AND $38.8m on 2031 dollar bonds — ahead of schedule, before IMF visit. Track record of payment intact. Bonds still at distressed levels but early payment signals commitment. IMF visit now confirmed for week of June 15, not June 8. Finance Minister Diba: hopes to reach agreement on key points by June 30. Sonko controls legislature 130/165 but three Pastef members joined Lo government — contradiction of Sonko\'s earlier declaration. Debt 132% GDP. Default window still Q4 2026 but payment track record is real.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'PP landslide confirmed — results due June 11. Pretoria Agreement "on verge of collapse" per Foreign Policy analysis. TPLF reinstated Debretsion. War with Eritrea also flagged as new risk — Abiy\'s push for Red Sea access driving Eritrean tensions. Ethiopia-Eritrea fought together against TPLF during Tigray War but now tensions spiking. Post-election window most dangerous in Horn since November 2020. Results June 11 — same day World Cup opens.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 deadline: 24 days. Weekend: four nations repatriation continuing. Mozambique 545 bused, Ghana 297 flown, Nigeria flights being organised, Malawi road transport. Petrol hike R1.50/litre now live. Household debt crisis confirmed: 41% of borrowers in default, R237bn overdue. Ramaphosa dispatching diplomatic envoys globally. Electoral Commission confirmed special votes for fall 2026 local polls. GNU under maximum compound stress.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'WHO/Africa CDC $518m six-month Ebola response plan launched June 5. DRC: 381 confirmed, 64 deaths. Ituri: 90% of confirmed cases. Uganda: 16 confirmed, 1 death. Plan: emergency coordination, surveillance, testing, infection prevention, clinical care, community engagement. June to November 2026. Bundibugyo — no vaccine, no treatment. Most serious Bundibugyo outbreak on record. World Cup begins June 11 — DRC fans banned from US travel.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 public hearings ongoing — June 30 deadline. Ghost of Gen-Z uprising building. Ruto state visit to SA concluded with 6 MoUs — 34 total bilateral accords. Eurobond $2bn Q2 rollover critical. Court case on US Ebola facility back in court next week. KES at 129.53. US-Kenya relations strained. Ruto managing five simultaneous crises.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SENEGAL PAYS BOTH COUPONS EARLY — PAYMENT TRACK RECORD INTACT — IMF VISIT NOW JUNE 15 — STRUCTURAL DEFAULT RISK REMAINS BUT JUNE CRISIS IS PARTIALLY DEFUSED',
    body: 'The most consequential positive surprise of the June cycle: Senegal has paid both bond coupons ahead of schedule. The €53.75m on the 2037 euro bonds and the $38.8m on the 2031 dollar bonds were both transferred to bondholders before the IMF visit. The IMF has clarified the visit will be the week of June 15, not June 8. Finance Minister Diba says Senegal hopes to reach agreement on key points by June 30. Three Pastef members joined the Lo government — directly contradicting Sonko\'s declaration that the party would not join. The political deadlock is more nuanced than it appeared. The structural risk remains — debt at 132% GDP, $9.7bn obligations this year, bonds at distressed levels, no IMF programme. But the payment track record is real and the June acute crisis has been partially defused. Meanwhile Ethiopia\'s Pretoria Agreement is described as "on the verge of collapse" by Foreign Policy with renewed Eritrea war risk also flagged. The World Cup opens June 11 — the same day Ethiopia\'s election results are due.',
    tag: 'JUNE 6 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'June 6, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SENEGAL PAYS BOTH COUPONS EARLY — €53.75m + $38.8m — IMF VISIT NOW JUNE 15', body: 'Bloomberg reports: Senegal paid the €53.75m coupon on 2037 euro bonds AND $38.8m on 2031 dollar bonds ahead of schedule — before the IMF visit. The IMF has clarified its visit will be week of June 15. Finance Minister Diba told parliament May 22 that Senegal hopes to reach IMF agreement on key points by June 30. Three Pastef members joined the Lo government — contradicting Sonko\'s blanket refusal. Early payment signals sovereign commitment. Bonds still at distressed levels — the structural financing gap remains. But the June acute default risk has been partially defused.', icon: '✅' },
    { title: 'ETHIOPIA: PRETORIA AGREEMENT "ON VERGE OF COLLAPSE" — ERITREA WAR RISK ADDED', body: 'Foreign Policy June 3 analysis: The 2022 Pretoria Agreement that ended the Tigray civil war is "on the verge of collapse." TPLF reinstated Debretsion as regional president in violation. New risk: tensions with Eritrea spiking over Abiy\'s push for Red Sea access. Ethiopia and Eritrea fought together against TPLF in 2020-2022 but are now in tension — Eritrea refusing to withdraw troops from Tigray. Two simultaneous conflict risks: TPLF reinstatement and Eritrea tensions. PP election landslide results due June 11 — same day World Cup opens.', icon: '⚔️' },
    { title: 'WHO $518M EBOLA PLAN — DRC 381 CONFIRMED — UGANDA 16 — WORLD CUP BEGINS JUNE 11', body: 'WHO/Africa CDC $518m six-month response plan launched June 5 — June to November. DRC: 381 confirmed, 64 deaths. Ituri: 90% of cases. Uganda: 16 confirmed, 1 death. Bundibugyo — no vaccine. Plan brings UNICEF, UNHCR, WFP, IFRC, FIND under unified One Response framework. Ebola vaccines fast-tracked — Research Professional News confirms trials accelerating. DRC Leopards in Belgium isolation bubble — first game vs Portugal Houston June 17. Fans still banned from US travel. World Cup June 11 opening coincides with Ethiopia election results.', icon: '🚨' },
    { title: 'SOUTH AFRICA: JUNE 30 — 24 DAYS — REPATRIATION CONTINUES — ELECTORAL COMMISSION CONFIRMS LOCAL POLLS', body: 'Four-nation repatriation continuing over weekend. Petrol hike R1.50/litre now live — first full week with new fuel costs. Household debt crisis: 41% borrowers in default, R237bn overdue. SARB hiking. Electoral Commission confirmed special votes will be available for fall 2026 local polls — scheduling underway. Ramaphosa dispatching diplomatic envoys globally post-xenophobia. June 30: 24 days. GNU under maximum compound stress — impeachment panel, xenophobia, petrol hike, household debt all active simultaneously.', icon: '🔥' },
  ],

  insight1: {
    title: 'SENEGAL\'S EARLY COUPON PAYMENT IS THE SOVEREIGN CREDIBILITY SIGNAL THE MARKET NEEDED — BUT IT IS NOT A RESOLUTION',
    body: 'Paying bond coupons ahead of schedule before an IMF visit is a deliberate credibility signal — Senegal is telling the market and the fund that it intends to honour its obligations and engage in good faith. The early payment also removes the acute June default risk that Oxford Economics, JPMorgan and Morgan Stanley were all pricing. The nuance in the political picture — three Pastef members joining the Lo government despite Sonko\'s declaration — suggests the political deadlock is more negotiable than it appeared. Finance Minister Diba aiming for IMF agreement by June 30 is an achievable target if the fuel subsidy reform can be structured in a way that passes through or around the Sonko-controlled legislature. The structural problem remains: $9.7bn in obligations this year, 132% debt-to-GDP, bonds at distressed levels. But the acute crisis has been defused for June. The structural crisis runs through Q4 2026.',
    conclusion: 'SENEGAL\'S EARLY PAYMENT DEFUSES THE JUNE ACUTE CRISIS. THE STRUCTURAL DEFAULT RISK REMAINS — $9.7BN OBLIGATIONS, 132% DEBT/GDP, BONDS AT DISTRESSED LEVELS. IMF AGREEMENT BY JUNE 30 IS NOW THE KEY MILESTONE TO WATCH.',
  },

  insight2: {
    title: 'THE ERITREA DIMENSION MAKES ETHIOPIA\'S POST-ELECTION RISK MORE COMPLEX THAN ANALYSTS PRICED',
    body: 'The standard post-election risk model for Ethiopia was: Abiy wins → launches war on TPLF as in 2020. The Foreign Policy analysis adds a new dimension: Eritrea is now also a potential conflict axis. Abiy\'s push for Red Sea access — which he has called "existential" for Ethiopia — directly threatens Eritrean sovereignty. Ethiopia and Eritrea fought together against the TPLF in 2020-2022 but the alliance has fractured over the access question. Eritrean troops remain in Tigray, supporting TPLF factions. The post-June 11 risk environment is not just Ethiopia vs TPLF — it is a potential triangular conflict involving Ethiopia, Eritrea, and the TPLF simultaneously. The Horn of Africa is carrying Ebola, a post-election war risk on two fronts, Somalia\'s constitutional crisis, and Sudan\'s ongoing collapse.',
    conclusion: 'THE ERITREA DIMENSION MAKES ETHIOPIA\'S POST-ELECTION RISK A TRIANGULAR CONFLICT SCENARIO, NOT A BILATERAL ONE. THE HORN OF AFRICA\'S COMPOUND RISK IS MORE COMPLEX THAN THE STANDARD ABIY-TPLF MODEL. WATCH ERITREA POSTURE AFTER JUNE 11.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 OPEN: SENEGAL PAYS EARLY, ETHIOPIA RESULTS JUNE 11, WORLD CUP OPENS, SA JUNE 30 24 DAYS',
    body: 'Week 24 opens with the June cycle\'s first positive surprise: Senegal paid both bond coupons early — €53.75m and $38.8m — ahead of schedule before the IMF visit, which has been pushed to June 15. Finance Minister Diba is targeting IMF agreement by June 30. Three Pastef members joined the Lo government despite Sonko\'s declaration — the political picture is more nuanced. The structural default risk remains but the acute June crisis is partially defused. Ethiopia\'s election results are due June 11 — the same day the World Cup opens. Foreign Policy confirms the Pretoria Agreement is on the verge of collapse and adds Eritrea as a new conflict axis. The WHO $518m Ebola plan launched yesterday with DRC at 381 confirmed cases. South Africa\'s June 30 deadline is 24 days away with four nations repatriating and petrol hike now live. Ghana remains the continental credit benchmark.',
  },

  fxRates: {
    NGN: '1,361.39',
    GHS: '11.75',
    KES: '129.53',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.29',
    ETB: '132.00',
    TZS: '2,650.00',
    UGX: '3,770.00',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'SENEGAL PAYS BOTH COUPONS EARLY. €53.75m on 2037 euro bonds + $38.8m on 2031 dollar bonds transferred ahead of schedule. Bloomberg confirmed. Track record intact. IMF visit now week of June 15. Diba: agreement on key points by June 30 target. Three Pastef members joined Lo government. Acute June default risk partially defused.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '09:15:00', signal: 'Ethiopia: PP landslide results due June 11. Pretoria Agreement "on verge of collapse" — Foreign Policy June 3. TPLF reinstated Debretsion. NEW RISK: Eritrea tensions spiking over Abiy\'s Red Sea access push. Eritrea troops in Tigray backing TPLF factions. Post-election triangular conflict risk: Ethiopia vs TPLF + Ethiopia-Eritrea tensions. Results June 11 same day World Cup opens.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:00:00', signal: 'WHO/Africa CDC $518m Ebola plan: DRC 381 confirmed 64 deaths, Ituri 90% of cases. Uganda 16 confirmed 1 death. June to November. UNICEF, UNHCR, WFP, IFRC, FIND under One Response. Ebola vaccines fast-tracked in trials. DRC Leopards in Belgium bubble — World Cup June 17 first game vs Portugal Houston.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'SA June 30: 24 days. Weekend repatriation continuing. Petrol hike R1.50/litre now fully live — first full week with new costs. Household debt: 41% in default, R237bn overdue. Electoral Commission confirms special votes for fall 2026 local polls. GNU dispatching diplomatic envoys globally.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Kenya Finance Bill 2026: hearings ongoing — June 30 deadline. Court case on US Ebola facility back next week. Eurobond $2bn Q2 rollover critical. 6 MoUs signed with SA this week — 34 total bilateral accords. KES at 129.53. Ruto managing five simultaneous crises entering second week of June.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Ebola vaccines fast-tracked: Research Professional News confirms accelerated trials. Bundibugyo strain had no approved vaccine — fast-track process underway. Timeline: months not weeks. Meaningfully changes medium-term containment prospects if trials succeed. Critical variable for H2 2026 East Africa macro outlook.', detail: 'MEDIUM', type: 'INFO', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Africa millionaires growing: Capgemini — Africans with $1m+ investable assets grew 4%+ in 2025. Senegal Societe Generale achieves record profit over 40bn CFA. Anna Mokgokong Tamasa Energy $1.35bn LNG deal Transnet Port Ngqura. Structural positive signals from African private sector amid acute sovereign risk environment.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 6 (weekend): NGN 1,361.39 | GHS 11.75 | KES 129.53 | EGP 52.22 | ZAR 16.29 | UGX 3,770 | ZMW 19.02. Markets closed Saturday — rates carrying from Friday. Senegal early coupon payment positive signal for XOF bond spreads Monday open. Watch Senegal bond prices on Monday for market reaction.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 62, fiscal: 56, fx: 42, debt: 58, political: 82, external: 56 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 38, fx: 48, debt: 38, political: 34, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 78, fx: 46, debt: 72, political: 99, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 90, fiscal: 92, fx: 80, debt: 94, political: 88, external: 86 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 95, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,361.39', change: '-13.79%', stress: 'LOW', ytd: '-3.20%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.75', change: '+9.81%', stress: 'MODERATE', ytd: '+6.53%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.29', change: '+3.58%', stress: 'MODERATE', ytd: '+3.58%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide confirmed. Results June 11 same day World Cup opens. Pretoria Agreement "on verge of collapse." Eritrea war risk added. Triangular conflict scenario: TPLF + Eritrea. Most dangerous Horn window since 2020.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies expected to sweep. Democratic legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 24 days. Electoral Commission confirmed special votes. Four nations evacuating. Petrol hike live. 41% borrowers in default. GNU maximum stress.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Dangote 700k bpd. Inflows +83.8%. Naira strengthening. Tinubu wins APC nomination for 2027. Civilian airstrike deaths unresolved. ISWAP active.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. Ruto SA state visit concluded. US-Kenya strained. Eurobond Q2 rollover. Court case Ebola facility next week.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.8m PAID EARLY', instrument: 'Bond Coupons', maturity: 'PAID AHEAD OF SCHEDULE', risk: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — IMF Visit June 15', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$82', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$82', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$82', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.2pts', fx: '-0.8%', signal: 'COUPONS PAID EARLY — IMF JUNE 15', color: '#f5a623' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+3.6%', signal: 'JUNE 30 — 24 DAYS — PETROL HIKE LIVE', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'RESULTS JUNE 11 — ERITREA RISK ADDED', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'FINANCE BILL JUNE 30 — EUROBOND Q2', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.8%', signal: 'DANGOTE 700K — TINUBU APC NOMINATION', color: '#00c48c' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+6.5%', signal: 'BENCHMARK — COMPLETES IMF PROGRAMME', color: '#00c48c' },
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
    { date: 'May 31', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 6', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
