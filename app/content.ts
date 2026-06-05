export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 5, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['WHO/Africa CDC Launch $518m Ebola Response Plan — 381 Confirmed 64 Dead DRC, Uganda 16 Cases', 'SA-Kenya Sign 6 MoUs — Ruto State Visit Closes — 34 Total Bilateral Accords', 'Dangote Refinery Hits 700,000 BPD — Exceeds Nameplate — Nigeria Inflows +83.8%', 'Senegal IMF Visit TOMORROW — €53.75m Coupon Due — Venezuela/Lebanon Category'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 94, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 98, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'WHO and Africa CDC launch $518m six-month Ebola response plan today. June to November 2026. DRC: 381 confirmed cases, 64 deaths — Ituri accounts for 90% of confirmed cases. Uganda: 16 confirmed cases, 1 death. Bundibugyo strain — no approved vaccine, no treatment. Most serious Bundibugyo outbreak on record. Plan covers emergency coordination, surveillance, testing, infection prevention, clinical care, community engagement. Tedros: "We cannot afford to let it escalate."', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF VISIT TOMORROW — June 8. €53.75m coupon due same day. $38.75m due June 10. Oxford Economics: "Sovereign spreads in Venezuela/Lebanon category." JPMorgan: 15% haircut + 5yr extension + 75% coupon priced. $9.7bn obligations this year. Bonds at 50.6c record low. Sonko blocks Faye government, Pastef 130/165 seats. No path to IMF re-engagement. Track record of payment intact but structural wall is real. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Ruto state visit closes today — SA and Kenya signed 6 new MoUs (trade, maritime, skills, gender, arts, sport) — 34 total bilateral accords. SA dispatching diplomatic envoys globally post-xenophobia. Four nations repatriating: Ghana 297, Mozambique 545, Nigeria 2,000-4,000, Malawi announced. June 30: 24 days. SA Electoral Commission confirms special votes for local polls — municipal elections fall 2026.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election war window live — 5 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion in violation of Pretoria Agreement. All major analysts: post-election military operations against TPLF expected. Most dangerous Horn window since November 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Dangote Refinery breaks nameplate capacity — 700,000 bpd in performance test vs 650,000 capacity. Exports 353,000 bpd in April, half flowing to African countries. Nigeria foreign inflows +83.8% Q1 2026. Naira strengthened — NGN at 1,361. Zenith Bank Jim Ovia stake at $643m as naira firms. World Cup begins June 11 — Nigeria group stage critical. Structural positive signal amid ongoing security and election risks.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'WHO LAUNCHES $518M EBOLA PLAN TODAY — SENEGAL IMF TOMORROW — DANGOTE BREAKS 700,000 BPD — JUNE 5 IS THE INFLECTION POINT BETWEEN CRISIS AND RESPONSE',
    body: 'June 5 is the first day since the Ebola PHEIC declaration that the response architecture matches the scale of the crisis. WHO Director-General Tedros and Africa CDC launched a $518 million six-month response plan today — covering June to November 2026 — with DRC at 381 confirmed cases and 64 deaths, Ituri accounting for 90% of cases, and Uganda at 16 confirmed. Tedros was direct: "We cannot afford to let it escalate." The plan brings governments, UNICEF, UNHCR, WFP, IFRC and FIND under a unified One Response framework. Meanwhile Senegal faces its sovereign moment of truth tomorrow — IMF visit with €53.75m coupon due the same day, with Oxford Economics having placed it in the Venezuela/Lebanon spread category. Nigeria offers the week\'s positive counterweight: Dangote Refinery broke its nameplate capacity hitting 700,000 bpd in a performance test, foreign inflows jumped 83.8% in Q1, and the naira has firmed. The Kenya-SA state visit concluded with 6 MoUs and 34 total bilateral accords. June 5 is the inflection point — the question is whether the response is fast enough.',
    tag: 'JUNE 5 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 5, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'WHO/AFRICA CDC LAUNCH $518M EBOLA RESPONSE PLAN — DRC 381 CONFIRMED 64 DEAD', body: 'WHO DG Tedros and Africa CDC launched the joint $518m six-month continental response plan today — June to November 2026. DRC: 381 confirmed cases, 64 deaths. Ituri: 90% of confirmed cases, 76% of deaths. Uganda: 16 confirmed cases, 1 death. Plan: emergency coordination, surveillance, laboratory testing, infection prevention, clinical care, community engagement. UNICEF, UNHCR, WFP, IFRC and FIND involved. Africa CDC and WHO establishing joint financial tracking mechanism. Tedros: "Containing Ebola depends on political commitment, sustained financing, and the trust and engagement of communities."', icon: '🚨' },
    { title: 'SENEGAL IMF VISIT TOMORROW — €53.75M COUPON DUE SAME DAY — SOVEREIGN MOMENT OF TRUTH', body: 'IMF team arrives Dakar June 8 — same day as €53.75m coupon on 2037 euro bonds. $38.75m due June 10. Oxford Economics placed Senegal in Venezuela/Lebanon spread category June 4. JPMorgan, Morgan Stanley, Oxford Economics all pricing restructuring. 2033 bonds at 50.6c record low. $9.7bn obligations this year. Sonko declared Pastef will not join Faye government — Pastef controls legislature 130/165. Track record of payment intact — Senegal paid March bonds ahead of deadline. The June 8 visit is a diagnostic, not a rescue.', icon: '⚖️' },
    { title: 'DANGOTE BREAKS 700,000 BPD — NIGERIA INFLOWS +83.8% — NAIRA AT 1,361', body: 'Dangote Refinery hit 700,000 bpd in a performance test by process licensors — exceeding nameplate capacity of 650,000 bpd. April exports: 353,000 bpd, half to African countries. Plan to expand to 1.4m bpd within 30 months. Nigeria foreign inflows jumped 83.8% in Q1 2026 to $10.37bn. NGN at 1,361 — strengthening from 1,579 peak in June 2025. Zenith Bank Jim Ovia stake at $643m. Kasapreko Ghana IPO GH¢700m closes ahead of June 17 listing. Structural positive signals from West Africa\'s two largest economies.', icon: '📈' },
    { title: 'SA-KENYA 6 MOUS — 34 TOTAL BILATERAL ACCORDS — RUTO STATE VISIT CLOSES', body: 'Kenya and South Africa signed 6 new MoUs at end of Ruto\'s three-day state visit: trade, maritime transport, skills development, gender equality, arts and culture, and sport. Total bilateral accords now 34. Trade between SA and Kenya: R9.3bn in 2016 to R10.5bn in 2025. SA Electoral Commission confirms special votes for local polls — municipal elections confirmed for fall 2026. SA dispatching diplomatic envoys globally. Four nations still repatriating citizens. June 30: 24 days.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE $518M EBOLA PLAN IS THE FIRST RESPONSE INFRASTRUCTURE THAT MATCHES THE SCALE OF THE CRISIS',
    body: 'Every major Ebola outbreak in history has been contained — but the timeframe and death toll depended on funding speed, community trust and health system resilience. The 2018-2020 North Kivu outbreak killed 2,286 people over two years in exactly the same conflict environment. The WHO is explicit that this plan draws on those lessons. The $518m over six months is credible — but funding appeals historically achieve partial fulfilment. Tedros said today that "misinformation is almost as dangerous as the virus itself, and spreads just as fast" — community engagement is the central pillar of the plan, not just medical infrastructure. The burning of treatment centres, the community resistance in Mongbwalu, and the political instability in eastern DRC are all factors that the $518m cannot fully solve. But the plan\'s existence, scope and institutional backing change the trajectory.',
    conclusion: 'THE $518M WHO/AFRICA CDC PLAN IS THE FIRST RESPONSE INFRASTRUCTURE PROPORTIONATE TO THE EBOLA THREAT. FUNDING FULFILMENT SPEED AND COMMUNITY ENGAGEMENT EXECUTION WILL DETERMINE WHETHER THIS OUTBREAK IS CONTAINED IN 2026 OR EXTENDS INTO 2027.',
  },

  insight2: {
    title: 'DANGOTE AT 700,000 BPD IS NIGERIA\'S MOST IMPORTANT STRUCTURAL ECONOMIC SIGNAL THIS DECADE',
    body: 'The Dangote Refinery hitting 700,000 bpd in a performance test — exceeding its nameplate capacity — combined with 83.8% Q1 foreign inflow growth and a naira that has strengthened from 1,579 to 1,361 in twelve months is the most concentrated positive data package Nigeria has produced in a decade. The refinery\'s April exports of 353,000 bpd — half to African countries — represent a structural shift in Nigeria\'s role in the continental energy architecture. The plan to expand to 1.4m bpd within 30 months would make Dangote the largest refinery globally. The structural positive is real — but it sits alongside 300+ civilian airstrike deaths, ISWAP activity and a 2027 election cycle that is building political risk from multiple directions simultaneously.',
    conclusion: 'DANGOTE AT 700,000 BPD AND NIGERIA INFLOWS +83.8% IS THE MOST IMPORTANT STRUCTURAL POSITIVE SIGNAL FROM AFRICA\'S LARGEST ECONOMY IN A DECADE. THE INVESTMENT CASE IS MULTI-LAYERED — BUT THE SECURITY AND POLITICAL RISK CONTEXT REMAINS TIER-1.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23 FRIDAY: WHO $518M EBOLA PLAN, SENEGAL IMF TOMORROW, DANGOTE 700K BPD, SA-KENYA 6 MOUS',
    body: 'Week 23 closes on Friday June 5 with the first major response infrastructure matching the Ebola crisis scale. WHO and Africa CDC launched a $518m six-month plan today — DRC at 381 confirmed cases, Uganda at 16. Senegal faces its sovereign moment of truth tomorrow — IMF visit with €53.75m coupon due the same day, bonds in the Venezuela/Lebanon spread category per Oxford Economics. Nigeria provides the week\'s structural positive: Dangote Refinery exceeded its nameplate capacity hitting 700,000 bpd, foreign inflows jumped 83.8% in Q1, the naira has strengthened to 1,361. South Africa and Kenya signed 6 new MoUs closing Ruto\'s state visit — 34 total bilateral accords. June 30 is 24 days away with four nations repatriating citizens and the GNU\'s diplomatic envoy strategy its only remaining tool. Ghana\'s fundamentals remain intact. The World Cup begins June 11 — one week from today.',
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
    { time: '09:30:00', signal: 'WHO/Africa CDC launch $518m six-month Ebola response plan — June to November 2026. DRC: 381 confirmed, 64 deaths. Ituri: 90% of confirmed cases. Uganda: 16 confirmed, 1 death. Bundibugyo — no vaccine. Tedros: "We cannot afford to let it escalate." UNICEF, UNHCR, WFP, IFRC and FIND involved.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Senegal: IMF visit TOMORROW June 8 + €53.75m coupon due. $38.75m June 10. Oxford Economics: Venezuela/Lebanon spread category. JPMorgan 15% haircut priced. $9.7bn obligations this year. Bonds at 50.6c. Sonko blocks Faye government. Track record intact. Diagnostic not rescue. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '09:00:00', signal: 'Dangote Refinery: 700,000 bpd in performance test — exceeds 650,000 nameplate. April exports 353,000 bpd, half to African countries. Plan to expand to 1.4m bpd in 30 months. Nigeria foreign inflows +83.8% Q1 2026 to $10.37bn. NGN at 1,361 — up from 1,579 peak June 2025.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:45:00', signal: 'SA-Kenya: Ruto state visit closes — 6 new MoUs signed (trade, maritime, skills, gender, arts, sport) — 34 total bilateral accords. SA dispatching diplomatic envoys globally. June 30: 24 days. SA Electoral Commission confirms special votes for fall 2026 local polls.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ethiopia: Post-election war window — 5 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion. All analysts: post-election TPLF operations expected. Horn of Africa most dangerous window since 2020. World Cup begins same day as Ethiopia results — June 11.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Patrice Motsepe weighing CAF exit to pursue SA presidency — African Wealth Briefing. Motsepe is ANC-aligned, Ramaphosa\'s brother-in-law, and third-richest South African. Presidential ambitions would reshape SA political landscape ahead of 2029 elections. GNU durability signal.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: '49 Niger travellers died of thirst in Sahara Desert after truck breakdown returning from Mali. Route Niger-Mali is one of West Africa\'s most dangerous migration corridors. Ongoing security collapse in Mali and Niger Sahel zone — AES junta states creating humanitarian corridors vacuum.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 5: NGN 1,361.39 (strengthening — was 1,579 June 2025) | GHS 11.75 | KES 129.53 | EGP 52.22 | ZAR 16.29 | UGX 3,770 | ZMW 19.02. NGN continues structural strengthening trend. ZAR firm at 16.29 on dollar weakness. GHS stable at 11.75.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 58, fx: 44, debt: 58, political: 85, external: 58 },
    { country: 'Ghana', flag: '🇬🇭', score: 44, fiscal: 38, fx: 50, debt: 40, political: 34, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 78, fx: 46, debt: 72, political: 99, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
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
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war window LIVE — 5 days. World Cup starts same day as results. All analysts: TPLF operations expected.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies expected to sweep. Democratic legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 24 days. Electoral Commission confirms special votes. Four nations evacuating. SA dispatching diplomatic envoys. GNU under maximum compound stress.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Dangote 700k bpd positive. Inflows +83.8%. Naira strengthening. But civilian airstrike deaths and ISWAP activity building 2027 risk.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. SA-Kenya 6 MoUs signed. Ruto state visit closes. Eurobond Q2 rollover. Five simultaneous crises.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — TOMORROW', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'VENEZUELA/LEBANON — IMF TOMORROW', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+3.6%', signal: 'JUNE 30 — 24 DAYS — ENVOYS DISPATCHED', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'FINANCE BILL JUNE 30 + 6 MOUS SA', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW — 5 DAYS', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE — 49 DEAD SAHARA', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+6.5%', signal: 'KASAPREKO IPO — GHS STABLE', color: '#f5a623' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.8%', signal: 'DANGOTE 700K BPD — INFLOWS +83.8%', color: '#00c48c' },
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
  ],
}
