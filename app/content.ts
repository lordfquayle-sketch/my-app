export const content = {
  riskIndex: '92',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 30, 2026 09:00 UTC',
    overallScore: 92,
    trend: 'STABLE',
    drivers: ['JUNE 30 IS TODAY — Government Declares Normal Working Day — Protests Largely Peaceful So Far', 'Eastern Cape Police: No Damage Or Looting Reported — Marches Proceeding Across All 9 Provinces', 'Ramaphosa Welcomes Peaceful Assurances — Warns Violence Not Justified Under Any Circumstances', 'Zimbabweans Stranded Overnight At Bedfordview Consulate — Children Slept In Cold Awaiting Buses'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '↓', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'JUNE 30 IS TODAY. Government declared it a normal working day — schools, businesses, public services operating as usual. Marches proceeding across all 9 provinces — Soweto (Thokoza Park), Daveyton, Durban (King Dinuzulu Park to South Beach), Western Cape Legislature, Eastern Cape. Eastern Cape police commissioner: no damage or looting reported as of Tuesday morning — police fully prepared and monitoring. Ramaphosa welcomed assurances marches would stay peaceful, warned violence not justified under any circumstances. March and March founder Ngobese-Zuma rejects xenophobia label: "standing up for what\'s right." Minister Kubayi: rhetoric moderated over weekend following government warnings. Zimbabweans at Bedfordview consulate slept outside overnight in the cold awaiting buses to Beitbridge — Salvation Army aid worker broke down describing children\'s conditions.', severity: 'HIGH', color: '#f5a623' },
    { country: 'South Africa (FX)', flag: '🇿🇦', alert: 'ZAR at 16.40-16.42 — holding near highest since early March. Traded in range 16.40-16.66 over the past week. SARB Governor Kganyago: early signs of second-round inflation effects, policymakers need to act. May inflation hit 4.5% — steepest since July 2024. US-Iran peace deal eased some global inflation pressure via oil prices, though Kganyago warns oil unlikely to return to pre-conflict levels and fertiliser costs may spill into food prices at harvest. Market has priced June 30 as a contained, non-systemic event — no FX shock despite the political intensity of the day.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', alert: '271 Nigerians set for fresh evacuation from South Africa today — federal government resuming evacuation flights. Joins the six-nation pattern: Ghana, Mozambique, Nigeria (now twice), Malawi, Zimbabwe. This second Nigerian evacuation wave underscores that the repatriation crisis continues even as June 30 itself passes relatively calmly on the ground.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola remains the third-largest outbreak on record — 1,000+ confirmed cases. France first European case confirmed. White House seeking $1.4bn from Congress. Africa CDC upgraded ask from $518m to $1.4bn. Contact tracing at 58% — target 90-95%. No approved vaccine, no approved treatment for Bundibugyo strain. The health crisis continues independent of South Africa\'s political news cycle.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zimbabwe/Ethiopia/Senegal', flag: '🌍', alert: 'Zimbabwe: Mnangagwa signature pending on constitutional amendments — direct presidential elections abolished, term extended to 2030. Ethiopia: post-election TPLF conflict remains live, US visa restrictions in effect. Senegal: IMF Q3 2026 programme now base case following inconclusive June visit, eurobond issuance planned. All three situations continue to develop independent of the South Africa news cycle dominating today.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'JUNE 30 HAS ARRIVED — PROTESTS PEACEFUL SO FAR — GOVERNMENT DECLARES NORMAL WORKING DAY — ZIMBABWEANS SLEPT IN THE COLD AT BEDFORDVIEW — ZAR HOLDS NEAR MARCH HIGHS',
    body: 'June 30 has arrived in South Africa, and as of Tuesday morning the outcome looks far closer to the contained scenario than the catastrophic one. The South African government declared the day a normal working day — schools, businesses and public services operating as usual — and as marches proceeded across all nine provinces, from Soweto\'s Thokoza Park to Daveyton to Durban\'s King Dinuzulu Park to the Western Cape Legislature, the Eastern Cape police commissioner reported no incidents of damage or looting. Ramaphosa welcomed assurances that the protests would remain peaceful while warning that violence would not be justified under any circumstances. March and March founder Jacinta Ngobese-Zuma rejected the xenophobia label directly: "You can\'t label us as xenophobic for standing up for what\'s right." Minister Kubayi noted that rhetoric had moderated over the weekend following government warnings. But for the migrants this crisis is actually about, the human cost remains severe: Zimbabweans gathered outside the Bedfordview consulate slept on the street overnight in the cold, with many not knowing exactly where the buses taking them home would even stop — a Salvation Army aid worker broke down describing the children who spent the night out in the open. Nigeria is resuming a second evacuation wave of 271 citizens today. ZAR is holding at 16.40, near its highest level since early March — the market has priced today as a contained, non-systemic event.',
    tag: 'JUNE 30 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'June 30, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'JUNE 30 GROUND TRUTH: PROTESTS PEACEFUL SO FAR, NO LOOTING OR DAMAGE REPORTED', body: 'As of Tuesday morning, Eastern Cape police commissioner Lieutenant General Vuyisile Ncata reported no incidents of damage or looting by anti-illegal immigration protesters, with police fully prepared to monitor protests across the province. Marches were proceeding in Soweto (Thokoza Park, where organisers asked political parties not to distribute campaign material — "this is not about politics, it\'s about South Africa"), Daveyton, Durban (March and March route from King Dinuzulu Park to South Beach), and outside the Western Cape Legislature where crowds continued to grow. About 500 protesters had already conducted a "dress rehearsal" march from Orange Farm to Sebokeng in the Vaal on Saturday, peacefully. This pattern — large media buildup, smaller and largely orderly actual turnout — has now repeated multiple times through June.', icon: '✅' },
    { title: 'ZIMBABWEANS SLEPT OUTSIDE BEDFORDVIEW CONSULATE OVERNIGHT — CHILDREN IN THE COLD', body: 'Outside the Zimbabwe Consulate in Bedfordview, Zimbabwean men, women and children waiting for transport home spent the night on the street in the cold. A Salvation Army aid worker assessing food needs in the area broke down describing the many children who slept outside overnight. Most people did not know exactly where the buses taking them home would stop — one man told News24 he believed they were headed to Beitbridge but was not certain. This is the human reality underlying the political story: regardless of how peacefully the marches themselves proceed, thousands of migrants and their children have already experienced real hardship and fear as a direct consequence of the June 30 mobilisation, deadline or no legal deadline.', icon: '🚌' },
    { title: 'RAMAPHOSA: GOVERNMENT WELCOMES PEACEFUL ASSURANCES, WARNS AGAINST VIOLENCE', body: 'President Ramaphosa said the government welcomed assurances that planned protests would remain peaceful, while warning that violence would not be justified under any circumstances. Minister Mmamoloko Kubayi, who chairs the Inter-Ministerial Committee on Migration, told Al Jazeera that rhetoric had moderated over the weekend following government warnings, that organisers had stressed marches must remain peaceful, and flagged concerns that pamphlets were being circulated without organisers\' knowledge — illustrating the diffuse, leaderless nature of parts of the movement: "There is no single structure that says, \'This is what we are doing.\'" March and March founder Ngobese-Zuma rejected the xenophobia label, framing the movement as standing up for South Africans rather than against foreigners.', icon: '🇿🇦' },
    { title: 'ZAR HOLDS NEAR MARCH HIGHS — MARKET PRICES JUNE 30 AS CONTAINED', body: 'USD/ZAR is trading around 16.40-16.42, close to its highest level since early March, having ranged between 16.40 and 16.66 over the past week. SARB Governor Kganyago flagged early signs of second-round inflation effects following May\'s 4.5% inflation print — the steepest since July 2024 — and signalled the central bank may need to act further, though the US-Iran peace deal has eased some pressure by stabilising oil flows. The currency\'s stability through the most politically intense week of the year — Kenya\'s June 25 anniversary, Zimbabwe\'s constitutional amendments, Bafana\'s World Cup elimination, and now June 30 itself — confirms that markets assessed the South African political risk as containable rather than systemic.', icon: '📊' },
  ],

  insight1: {
    title: 'JUNE 30 PASSING WITHOUT MASS VIOLENCE VALIDATES THE GNU\'S MULTI-PRONGED DEFUSION STRATEGY',
    body: 'Every tool the GNU deployed over the past three weeks appears to have contributed to today\'s relatively contained outcome: Ramaphosa\'s 5-point immigration crackdown signalled the state was acting on the movement\'s core grievance; the appeal to traditional monarchs added moral authority in communities where state legitimacy is weakest; 9,500+ deportations from Durban alone gave the movement a tangible concession; R600 million in security spending and SANDF authorisation provided credible deterrence; and the government\'s consistent, repeated messaging that June 30 carried no legal weight — reinforced by declaring it a normal working day — denied the deadline its claimed authority. The March and March Cape Town march drawing only 60 people on June 20 was the leading indicator that street mobilisation capacity was far smaller than the movement\'s viral social media presence suggested. None of this erases the underlying conditions — unemployment above 30%, household debt at 41% default, genuine grievances about service pressure — but the acute crisis appears to have been managed rather than ignited.',
    conclusion: 'JUNE 30 PASSING WITHOUT MASS VIOLENCE IS A GENUINE GOVERNANCE SUCCESS FOR THE GNU, ACHIEVED THROUGH A COMBINATION OF CONCESSION, DETERRENCE, MORAL AUTHORITY AND CONSISTENT MESSAGING. THE UNDERLYING ECONOMIC AND SOCIAL CONDITIONS THAT PRODUCED THE MOVEMENT REMAIN ENTIRELY UNRESOLVED.',
  },

  insight2: {
    title: 'THE HUMAN COST OF JUNE 30 WAS REAL EVEN WITHOUT MASS VIOLENCE — AND IT WILL OUTLAST THE DEADLINE',
    body: 'A peaceful protest day, by the narrow metric of looting and property damage, is not the same as a day without harm. Thousands of Zimbabweans, Malawians, Mozambicans and Nigerians spent the final days before June 30 living in genuine fear, sleeping outside consulates, separated from their belongings and sometimes their families, uncertain whether buses would arrive or where they would go. Children slept outside in winter cold in Bedfordview. The Congolese asylum seeker interviewed by NPR, in bureaucratic limbo for 15 years after fleeing violence, told her own children to run and hide if protesters came — because she had concluded there was nothing else she could do. These costs do not appear in any CDS spread, currency chart or risk index, but they are the substantive human reality of the crisis the terminal has tracked since early June. June 30 passing without a riot is good news for South Africa\'s sovereign risk profile. It does not undo the harm already inflicted.',
    conclusion: 'THE HUMAN COST OF THE JUNE 30 CRISIS — FEAR, DISPLACEMENT, FAMILY SEPARATION, CHILDREN SLEEPING OUTSIDE IN WINTER — WAS REAL AND SUBSTANTIAL REGARDLESS OF WHETHER THE PROTESTS THEMSELVES TURNED VIOLENT. THIS HUMANITARIAN DIMENSION WILL CONTINUE TO REQUIRE ATTENTION AFTER THE POLITICAL NEWS CYCLE MOVES ON.',
  },

  brief: {
    week: '27',
    title: 'WEEK 27 JUNE 30: THE DAY ITSELF — PEACEFUL SO FAR, ZIMBABWEANS IN THE COLD, ZAR HOLDS, NIGERIA SECOND EVACUATION WAVE',
    body: 'June 30 has arrived and, as of Tuesday morning, the outcome looks considerably more contained than the worst-case scenarios priced through most of June. The government declared a normal working day; Eastern Cape police reported no looting or damage; marches in Soweto, Daveyton, Durban and outside the Western Cape Legislature proceeded with growing but largely peaceful crowds. Ramaphosa welcomed peaceful assurances while warning against violence. The human cost remains real: Zimbabweans slept outside the Bedfordview consulate overnight in the cold, children among them, many unsure where their buses would even take them. Nigeria began a second evacuation wave of 271 citizens today. ZAR is holding near its highest level since early March at 16.40, confirming markets priced this as a contained political event rather than a systemic shock. Elsewhere, Ebola remains the third-largest outbreak on record, Zimbabwe\'s constitutional amendments await only Mnangagwa\'s signature, Ethiopia\'s post-election TPLF conflict remains live, and Senegal\'s IMF programme has shifted to a Q3 2026 base case. The most consequential month in African sovereign risk this decade closes today with South Africa bruised but not broken.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.40',
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
    { time: '09:30:00', signal: 'JUNE 30 GROUND TRUTH: Eastern Cape police — no incidents of damage or looting reported Tuesday morning. Marches proceeding Soweto, Daveyton, Durban, Western Cape Legislature across all 9 provinces. Government declared normal working day — schools, businesses, public services operating as usual. Crowds growing but largely peaceful.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Ramaphosa welcomed assurances protests would remain peaceful, warned violence not justified under any circumstances. Minister Kubayi: rhetoric moderated over weekend following government warnings. March and March founder Ngobese-Zuma rejects xenophobia label — "standing up for what\'s right." No single structure controls all organising — pamphlets circulating without organisers\' knowledge.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Zimbabweans at Bedfordview consulate slept outside overnight in the cold awaiting buses — children among them. Salvation Army aid worker broke down describing conditions. Many unsure where buses would stop — believed headed to Beitbridge. Human cost of crisis real regardless of protest violence levels today.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'Nigeria resumes evacuation — 271 nationals set for fresh evacuation from South Africa today, second wave after the 268 returned June 12 under a 5-year re-entry ban. Six-nation evacuation pattern (Ghana, Mozambique, Nigeria x2, Malawi, Zimbabwe) continues even as June 30 itself passes with relative calm on the ground.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '08:30:00', signal: 'ZAR holds 16.40-16.42 — near highest since early March, range 16.40-16.66 past week. SARB Kganyago: early signs of second-round inflation effects, may need to act further. May inflation 4.5% — steepest since July 2024. US-Iran peace deal eased some pressure but oil unlikely to return to pre-conflict levels, fertiliser costs may hit food prices at harvest.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ebola: 1,000+ confirmed, third-largest outbreak on record. France first European case. White House $1.4bn Congress ask. Contact tracing 58%. No vaccine, no treatment. Crisis continues independent of South Africa news cycle. Zimbabwe: Mnangagwa signature pending on constitutional amendments abolishing direct presidential elections.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ethiopia post-election TPLF conflict remains live, US visa restrictions in effect since June 18. Senegal: Q3 2026 IMF programme now base case, eurobond issuance planned. Kenya: post-June 25 accountability phase, reparations fund implementation pending. Nigeria: ISSP active, multi-vector security crisis ongoing.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 30: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.40 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR near highest since early March, holding through June 30 itself — market confirms June 30 priced as contained event. Most consequential month in African sovereign risk this decade closes with no major FX dislocation.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 90, fiscal: 60, fx: 42, debt: 60, political: 94, external: 84 },
    { country: 'Ghana', flag: '🇬🇭', score: 38, fiscal: 34, fx: 46, debt: 34, political: 30, external: 40 },
    { country: 'Kenya', flag: '🇰🇪', score: 80, fiscal: 76, fx: 62, debt: 82, political: 80, external: 78 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 88, fiscal: 78, fx: 48, debt: 68, political: 88, external: 90 },
    { country: 'Senegal', flag: '🇸🇳', score: 70, fiscal: 74, fx: 60, debt: 76, political: 64, external: 68 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 96, fiscal: 78, fx: 82, debt: 84, political: 99, external: 92 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'MODERATE', ytd: '-3.40%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.40', change: '-7.57%', stress: 'LOW', ytd: '+7.57%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: 'June 30 — TODAY', type: 'Anti-Immigration Protests', risk: 'HIGH', note: 'June 30 is today. Protests proceeding peacefully so far per Eastern Cape police. No looting or damage reported. Government declared normal working day. Ramaphosa welcomed peaceful assurances. Risk level eased from CRITICAL but situation remains fluid through the day.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Mnangagwa Signature Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Senate approved June 24. Direct elections abolished. Term to 2030. Only signature needed. AU response absent. Most consequential African democratic regression of decade.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions in effect. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk active.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — ISSP Active', type: 'General Election', risk: 'CRITICAL', note: 'ISSP first operations in 6 years. 842 killed May. Second SA evacuation wave today (271). Multi-vector security peak.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition "former president." Al-Shabaab active. Structural crisis ongoing.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: 'June 25 Contained — Accountability Phase', type: 'Political Crisis', risk: 'HIGH', note: '355 arrested June 25. No storming. Finance Bill law. Reparations fund Sh2bn implementation pending. Risk eased from peak.', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Q3 2026 IMF Programme Base Case', type: 'Debt Crisis', risk: 'HIGH', note: 'IMF June visit no deal. Q3 programme expected. Eurobond planned. Bonds rallied. Structural risk unchanged.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'Q3 2026 IMF PROGRAMME EXPECTED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Q3 Expected', risk: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
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
    { country: 'SOUTH AFRICA', cds: 198, delta: '-20', bond: '+1.0pts', fx: '+7.6%', signal: 'JUNE 30 PEACEFUL SO FAR — RISK EASING', color: '#f5a623' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 1000+ — THIRD-LARGEST ON RECORD', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ELECTIONS ABOLISHED — SIGNATURE PENDING', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — WAR RISK ACTIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+38', bond: '-1.9pts', fx: '-13.8%', signal: 'ISSP ACTIVE — SECOND SA EVACUATION TODAY', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF Q3 EXPECTED — EUROBOND PLANNED', color: '#f5a623' },
    { country: 'KENYA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '+0.1%', signal: 'JUNE 25 CONTAINED — ACCOUNTABILITY PHASE', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'IMF COMPLETE — CONTINENTAL BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 13', NGN: 1360.73, GHS: 11.13, KES: 129.46, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 14', NGN: 1360.73, GHS: 11.13, KES: 129.47, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.21, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.19, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.40, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.41, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.46, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 24', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.20, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 26', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.60, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 29', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
