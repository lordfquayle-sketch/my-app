export const content = {
  riskIndex: '98',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 3, 2026 09:00 UTC',
    overallScore: 98,
    trend: 'WORSENING',
    drivers: ['SA Petrol Tax R1.50/litre Hike TODAY — Xenophobia Deaths + Fuel Cost Compound', 'Mossel Bay Suspect Arrested — Teen Killer Named — Repatriation Underway', 'Senegal IMF Visit 5 Days — JPMorgan: $9.7bn Obligations This Year', 'GHS Reversal — Cedi Weakens to 11.75 From 10.70 — Stress Upgraded'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 95, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'COMPOUND CRISIS DEEPENS. Petrol tax hike R1.50/litre effective TODAY June 3 — fuel levy up from R1.10 to R2.60. Petrol 93 up ~R1.04/litre. Diesel relief partially offsets. Xenophobia: 23-year-old suspect arrested for stabbing death of teen Nhlamulo Sambo in Mossel Bay Kwanonqaba township. Mozambique repatriation of 500+ nationals underway. SA Western Cape storms hitting — additional disruption to logistics. June 30 deadline: 27 days. GNU managing fuel hike + xenophobia deaths + impeachment panel + storms simultaneously.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF visit in 5 days — June 8. JPMorgan: Senegal owes $9.7bn in interest and amortisation THIS YEAR, $7.8bn in 2027, $8.7bn in 2028. Total 3-year obligation: $26.2bn. March payment of €380m + $33m made ahead of deadline — track record of payment intact. But June 8 €53.75m coupon + June 10 $38.75m are next tests. Sonko blocks Faye government. Pastef 130/165 seats. No IMF re-engagement path. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto: Kenya screening 3,000 travellers daily for Ebola — no confirmed cases. Finance Bill 2026 public hearings continuing — due June 30. US-Kenya relations strained after 2 killed in Ebola facility protests. Eurobond $2bn Q2 rollover critical. Court case on Ebola facility back next week. KES at 129.41. Ruto managing five simultaneous crises.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election war window live — 8 days to June 11 results. PP sweep confirmed from June 1 vote. TPLF reinstated Debretsion in violation of Pretoria Agreement. All major analysts: post-election military operations against TPLF expected. US Ambassador says Ethiopian Airlines no longer a regional airline — now a global competitor. Regional powers: Egypt, UAE, Saudi, Turkey, Israel positioning for Horn influence.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Four DRC nurses who had Ebola recovered — positive signal. But outbreak ongoing in Ituri, Nord-Kivu, Sud-Kivu and Kampala. Ebola case count revised downward as testing improved — better distinction of confirmed vs suspected. Bundibugyo strain — no vaccine, no treatment. WHO: community trust key to containment. Tedros called for ceasefire. Spreading faster than response.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SA PETROL TAX R1.50/LITRE TODAY + XENOPHOBIA DEATHS + IMPEACHMENT PANEL — GNU MANAGING MOST COMPOUND CRISIS IN AFRICA — SENEGAL $9.7BN OBLIGATIONS THIS YEAR — GHS REVERSAL',
    body: 'June 3 opens with South Africa\'s most compound governance day in democratic history. The petrol fuel levy rises R1.50/litre today — petrol 93 up ~R1.04/litre — arriving the day after five Mozambicans were confirmed killed in Mossel Bay xenophobic attacks. The Ramaphosa impeachment panel is sitting. The SANDF has contradicted the Defence Minister. Two movements are targeting June 30 — 27 days away. Western Cape storms are hitting logistics. A 23-year-old suspect has been arrested for the stabbing of teen Nhlamulo Sambo in Mossel Bay. The repatriation of 500+ Mozambican nationals is underway. In Senegal, JPMorgan has now quantified the full debt obligation: $9.7 billion in interest and amortisation this year alone — making the March payment of €380m look small against the structural wall. Senegal\'s track record of payment is intact — but with Sonko blocking Faye\'s government and the IMF arriving in 5 days, the structural path to sustainability is closed. In a notable FX reversal, the GHS has weakened sharply from 10.70 to 11.75 — the cedi giving back recent gains, changing the currency stress picture.',
    tag: 'JUNE 3 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 3, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SA PETROL TAX R1.50/LITRE HIKE TODAY — FUEL LEVY R1.10 → R2.60 — COMPOUND TIMING', body: 'Effective June 3: South African fuel levy increases R1.50/litre as 50% of pandemic-era tax relief is withdrawn. Petrol 93 up ~R1.04/litre at the pump. Diesel gets partial relief on international oil prices — but petrol drivers face higher costs. July likely to bring another hike. This arrives 24 hours after five Mozambicans were killed in xenophobic attacks — the compound signal for consumers, transporters and the GNU is stark. The xenophobia movement cites economic frustration and foreign national employment — a petrol hike the same week adds direct economic pressure.', icon: '🔥' },
    { title: 'MOSSEL BAY: SUSPECT ARRESTED FOR TEEN KILLING — MOZAMBICAN REPATRIATION LIVE', body: 'SA police arrested 23-year-old suspect in connection with stabbing death of teenager Nhlamulo Sambo in Mossel Bay Kwanonqaba township — killing linked to xenophobia unrest. Mozambican government repatriation of 500+ sheltered nationals in Western Cape now underway. 300 returned by own means Saturday. 7 total Mozambican deaths — 5 from attacks, 2 in road accident fleeing. Western Cape storms adding logistics disruption to repatriation process. June 30: 27 days.', icon: '🚨' },
    { title: 'SENEGAL: $9.7BN OBLIGATIONS THIS YEAR — IMF 5 DAYS AWAY — TRACK RECORD INTACT BUT WALL IS REAL', body: 'JPMorgan quantified Senegal\'s full 2026 obligation: $9.7bn in interest and amortisation. $7.8bn in 2027. $8.7bn in 2028. Total 3-year wall: $26.2bn. March €380m + $33m payment was made ahead of deadline — Senegal has maintained payment track record throughout the crisis. June 8 €53.75m coupon is manageable. But the structural financing gap — with IMF frozen, regional market access limited, and Sonko blocking government — is unbridgeable without IMF re-engagement. IMF arrives June 8 to assess "readiness of incoming authorities."', icon: '⚖️' },
    { title: 'GHS REVERSAL — CEDI WEAKENS TO 11.75 FROM 10.70 — STRESS UPGRADED', body: 'USD/GHS jumped from 10.70 to 11.746 as of June 3 04:55 UTC — the cedi has given back recent gains sharply. This reverses the 19.3% YoY appreciation narrative and changes Ghana\'s FX stress profile. The move may reflect repatriation of SA-based Ghanaian workers, dollar demand, or broader EM volatility. Ghana\'s fundamentals — Fitch B/positive, $12.3bn reserves, inflation 3.4% — remain intact. But the GHS spike is the most significant single-day FX move on the continent this week and must be monitored.', icon: '📉' },
  ],

  insight1: {
    title: 'SOUTH AFRICA\'S JUNE 3 IS THE MOST COMPOUND GOVERNANCE DAY IN ITS DEMOCRATIC HISTORY',
    body: 'No democratic government in Africa is managing the simultaneous combination that South Africa faces today: a petrol tax hike taking effect; xenophobic killings under active investigation; a presidential impeachment panel sitting for the first time; a dual-movement national shutdown 27 days away; a public military-minister contradiction on record; an ongoing repatriation operation for Mozambican nationals; Western Cape storm disruptions; and Bafana Bafana at the World Cup following a visa blunder that embarrassed the government globally. Each of these would be a major governance test in isolation. Together they represent the most compound domestic political environment in South Africa since 1994. The GNU was designed to provide stability — instead it has accumulated crises faster than it can manage them.',
    conclusion: 'SOUTH AFRICA\'S GNU IS FAILING THE COMPOUND STRESS TEST OF JUNE 2026. THE ZAR IS HOLDING ON DOLLAR WEAKNESS BUT THE POLITICAL RISK SCORE IS AT MAXIMUM. WATCH GNU COHESION AS JUNE 30 APPROACHES WITH 27 DAYS REMAINING.',
  },

  insight2: {
    title: 'SENEGAL\'S $9.7BN 2026 OBLIGATION IS THE CLEAREST EXPRESSION OF WHY DEFAULT IS INEVITABLE WITHOUT IMF',
    body: 'The JPMorgan figure — $9.7bn in interest and amortisation this year — contextualises everything about the Senegal crisis. The March payment of €380m + $33m was a rounding error against this wall. The June 8 coupon of €53.75m is manageable. But the full year requires $9.7bn in a country with suspended IMF access, bonds trading at 50 cents, regional market dependence for short-term paper, and a legislature controlled by a Speaker in open opposition to the president. Senegal paid its March bonds by drawing on BCEAO reserves and regional market rollovers. That strategy cannot fund $9.7bn annually for three years. The IMF\'s June 8 visit is not a negotiation — it is a diagnostic. The question is not whether Senegal can pay June coupons. The question is whether it can pay $9.7bn this year without IMF support.',
    conclusion: 'SENEGAL\'S $9.7BN 2026 OBLIGATION MAKES THE DEFAULT OR RESTRUCTURING TIMELINE INEVITABLE WITHOUT IMF RE-ENGAGEMENT. THE JUNE 8 VISIT IS A DIAGNOSTIC, NOT A RESOLUTION. DEFAULT WINDOW Q4 2026–Q1 2027 REMAINS BASE CASE.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23: SA PETROL TAX HIKE + XENOPHOBIA DEATHS + IMPEACHMENT, SENEGAL $9.7BN WALL, GHS REVERSAL, ETHIOPIA 8 DAYS TO RESULTS',
    body: 'Week 23 third day delivers South Africa\'s most compound governance moment in democratic history. Petrol fuel levy up R1.50/litre today — arriving 24 hours after five Mozambicans confirmed killed in Mossel Bay xenophobic attacks. Ramaphosa impeachment panel sitting. SANDF-minister contradiction on record. June 30 deadline 27 days away. In Senegal, JPMorgan has quantified the full structural wall: $9.7bn obligations this year, $26.2bn over three years — with IMF frozen and Sonko blocking Faye\'s government. Track record of payment is intact but the financing architecture is collapsing. GHS reversed sharply from 10.70 to 11.75 today — the most significant single-day FX move on the continent this week. Ethiopia\'s post-election war window on Tigray is live — 8 days to June 11 results. Ruto is screening 3,000 travellers daily for Ebola with no confirmed Kenya cases. Ghana\'s fundamentals remain intact despite the cedi move.',
  },

  fxRates: {
    NGN: '1,364.68',
    GHS: '11.75',
    KES: '129.41',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.30',
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
    { time: '09:30:00', signal: 'SA: Petrol fuel levy up R1.50/litre EFFECTIVE TODAY — levy from R1.10 to R2.60. Petrol 93 up ~R1.04/litre. Diesel partial relief. July likely further hike. Arrives 24 hours after 5 Mozambicans killed in xenophobic attacks. Compound signal for consumers, GNU and June 30 movement.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:15:00', signal: 'SA: 23-year-old suspect arrested for stabbing death of teen Nhlamulo Sambo — Mossel Bay Kwanonqaba township, linked to xenophobia unrest. Mozambican repatriation of 500+ sheltered nationals underway in Western Cape. Western Cape storms disrupting logistics. June 30: 27 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'FX ALERT: GHS reverses sharply — 11.746 as of June 3 04:55 UTC vs 10.70 yesterday. Cedi gives back recent gains. Dollar demand or EM volatility driver. Ghana fundamentals intact — Fitch B/positive, $12.3bn reserves, inflation 3.4%. But GHS stress upgraded from LOW to MODERATE. Monitoring required.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'GHS' },
    { time: '08:45:00', signal: 'Senegal: JPMorgan — $9.7bn interest + amortisation obligations in 2026. $7.8bn in 2027. $8.7bn in 2028. Total 3-year wall $26.2bn. March €380m + $33m paid ahead of deadline — track record intact. June 8 IMF visit + €53.75m coupon: 5 days. Sonko blocks Faye government. No IMF re-engagement path.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'Kenya: Ruto confirms screening 3,000 travellers daily for Ebola — no confirmed cases in Kenya. Finance Bill 2026 hearings ongoing — June 30. Ebola facility court case back next week. US-Kenya strained. Eurobond Q2 $2bn rollover critical. 2 killed in Ebola facility protests remain uninvestigated.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Ethiopia: Post-election war window — 8 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion. US Ambassador notes Ethiopian Airlines now global competitor — soft power positive amid hard security risk. Post-election TPLF operations expected per all analysts.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'DRC Ebola: Four nurses recovered — positive signal. Case count revised downward as testing improved. Bundibugyo — no vaccine. Tedros: community trust key to containment. WHO risk: DRC very high, regional high, global high. Kenya screening 3,000/day. ECDC: EU/EEA very low. Uganda 8 confirmed.', detail: 'MEDIUM', type: 'INFO', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 3: NGN 1,364.68 | GHS 11.75 (REVERSAL — was 10.70) | KES 129.41 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. GHS move is biggest single-day Africa FX story this week. ZAR holding despite SA political crisis — dollar weakness structural support.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 38, fx: 48, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 68, fx: 46, debt: 62, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,364.68', change: '-13.34%', stress: 'MODERATE', ytd: '-3.50%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.75', change: '+9.81%', stress: 'MODERATE', ytd: '+6.53%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.41', change: '+0.16%', stress: 'ELEVATED', ytd: '-1.10%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war window LIVE — 8 days to results. Regional powers positioning.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1, 2026 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Opposition boycotted. ECOWAS monitoring. Doumbouya allies expected to sweep. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 27 days. Petrol hike today. 5 Mozambicans killed. Suspect arrested. Repatriation underway. GNU at maximum compound stress.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. Civilian crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. 2 killed in Ebola protests. US-Kenya strained. Eurobond Q2 rollover. Ruto managing five crises.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 5 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: '$9.7BN 2026 WALL — IMF 5 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+42', bond: '-2.1pts', fx: '+3.5%', signal: 'PETROL HIKE TODAY + JUNE 30 27 DAYS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.4%', signal: '2 DEAD EBOLA PROTESTS — FINANCE BILL', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW — 8 DAYS', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-8', bond: '+0.5pts', fx: '+9.8%', signal: 'GHS REVERSAL — MONITOR', color: '#f5a623' },
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
  ],
}
