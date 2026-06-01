export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 2, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['Ramaphosa Impeachment Panel Sits For First Time In SA Democratic History', 'Bafana World Cup Departure Delayed — SAFA Visa Blunder — US-SA Relations Signal', 'Kenya Confirms 16 Ebola Suspects Negative — No Cases In Country', 'Ethiopia Post-Election War Window Live — Results June 11'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 94, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 97, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'Ramaphosa impeachment panel sits for first time in SA democratic history — 31-member committee elects chairperson. Established after Constitutional Court in May compelled parliament to consider Phala Phala misconduct allegations — $500,000+ hidden in farm sofa. ANC retains over one-third of seats so two-thirds threshold for removal unlikely. But panel process adds compound pressure: June 30 deadline 28 days away, SANDF-minister contradiction on record, Bafana visa blunder embarrassing government globally, xenophobia escalation ongoing.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Bafana Bafana World Cup departure to Mexico delayed — SAFA administrative visa blunder left 20+ players and technical staff without visas. Sports Minister McKenzie: "We are being made to look like fools." Deputy minister: "heads must roll." SAFA said most visas resolved by Monday — chartered flight departing today. First game vs Mexico at Estadio Azteca June 11. Warm-up vs Jamaica in Mexico Friday. US visa delays for SA nationals amid US-SA tensions adds diplomatic dimension.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Voted June 1. Results due June 11. Post-election war window on Tigray now live — 9 days to results. PP sweep expected. TPLF reinstated Debretsion in violation of Pretoria Agreement. All major analysts flag post-election military operations against TPLF as expected outcome. Egypt, UAE, Saudi, Turkey, Israel positioning for Horn influence. 10-day war risk window is the most dangerous in the Horn since November 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Positive signal: Kenya confirms all 16 Ebola suspected cases are negative as of May 29. PS Muthoni: "We do not have any confirmed cases of Ebola within our borders." But Finance Bill 2026 due June 30 — Gen-Z ghost building through public hearings. Eurobond Q2 rollover critical. US-Kenya relations strained after court blocked Ebola facility. KES at 129.41.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: '6 days to June 8 — IMF visit + €53.75m coupon. $38.75m due June 10. JPMorgan: 15% haircut + 5-year extension + 75% coupon priced in 2033 bonds. Bonds at record 50.6 cents. PM Lo declared "state of emergency." Debt 132% GDP. Sonko controls legislature 130/165. Dakar protests ongoing. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'RAMAPHOSA IMPEACHMENT PANEL SITS — BAFANA VISA BLUNDER EXPOSES US-SA RIFT — KENYA ALL 16 EBOLA SUSPECTS NEGATIVE — SOUTH AFRICA\'S COMPOUND CRISIS DEEPENS',
    body: 'June 2 delivers South Africa\'s most consequential governance day since the formation of the GNU. For the first time in democratic history, a parliamentary impeachment panel is sitting to consider allegations against a sitting president — Ramaphosa\'s Phala Phala farm scandal, in which $500,000+ was hidden in a sofa and foreign workers were allegedly unlawfully detained after the theft. The Constitutional Court compelled parliament to proceed in May after it blocked the inquiry in 2022. The ANC retains sufficient seats to prevent a two-thirds removal vote — but the panel process itself is a governance signal that compounds every other pressure on the GNU: June 30 deadline 28 days away, SANDF-minister public contradiction on record, and now the Bafana Bafana visa blunder. Twenty-plus players and staff were stranded without US visas due to a SAFA administrative failure — the sports minister publicly called it embarrassing and said heads must roll. The US embassy delayed processing is being read in some quarters as a reflection of the broader US-SA diplomatic chill. Kenya has confirmed all 16 Ebola suspected cases are negative — the one clear positive signal of the day. Senegal\'s IMF visit is 6 days away.',
    tag: 'JUNE 2 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 2, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'RAMAPHOSA IMPEACHMENT PANEL — FIRST IN SA DEMOCRATIC HISTORY — 31-MEMBER COMMITTEE SITS', body: 'The 31-member parliamentary impeachment panel elected its chairperson today — the first such committee in South Africa\'s democratic history. Established after the Constitutional Court in May compelled parliament to revisit its 2022 decision to block the Phala Phala inquiry. The ANC retained over one-third of National Assembly seats in 2024 — two-thirds required for removal. Ramaphosa unlikely to be removed. But the process itself is a GNU durability signal: a president managing Phala Phala impeachment proceedings, June 30 xenophobia deadline, NHI court defeat, US-SA relations and municipal elections simultaneously.', icon: '⚖️' },
    { title: 'BAFANA BAFANA VISA BLUNDER — SAFA ADMINISTRATIVE FAILURE — US-SA RIFT SIGNAL', body: 'Bafana Bafana\'s World Cup departure to Mexico delayed after SAFA administrative blunder left 20+ players and staff without US visas. Sports Minister McKenzie on X: "We are being made to look like fools. I need a report and action must be taken." Deputy minister: "heads must roll." SAFA says most visas procured by Monday, chartered flight departing today. First game vs Mexico at Estadio Azteca June 11. Warm-up vs Jamaica Friday. US embassy visa processing delays for South African nationals being read in diplomatic circles as a reflection of the broader US-SA chill.', icon: '🔥' },
    { title: 'KENYA: ALL 16 EBOLA SUSPECTS NEGATIVE — NO CONFIRMED CASES IN COUNTRY', body: 'Kenya\'s Ministry of Health PS Muthoni confirmed June 1: all 16 Ebola suspected cases identified in Kenya have tested negative as of May 29. "We do not have any confirmed cases of Ebola Virus Disease within our borders." This is a significant positive signal — Kenya borders Uganda where 8-9 confirmed cases have been identified. Active surveillance is ongoing. The Finance Bill court battles and Eurobond rollover remain the dominant Kenya risk stories, but the Ebola all-clear removes one major compound risk.', icon: '✅' },
    { title: 'SENEGAL: 6 DAYS TO IMF VISIT + €53.75M COUPON — BONDS AT RECORD DISTRESS', body: 'June 8: IMF team Dakar + €53.75m coupon on 2037 euro bonds. June 10: $38.75m on 2031 dollar bonds. JPMorgan: 15% haircut + 5yr extension + 75% coupon priced in 2033 bonds. 2033 dollar bonds at record 50.6 cents. PM Lo declared "state of emergency." Sonko controls legislature 130/165. Barclays: IMF requires fuel subsidy removal — Sonko\'s legislature blocked exactly that. Dakar protests ongoing. Default window Q4 2026–Q1 2027.', icon: '🚨' },
  ],

  insight1: {
    title: 'THE RAMAPHOSA IMPEACHMENT PANEL MAKES SOUTH AFRICA\'S GNU THE MOST COMPOUND-STRESSED GOVERNMENT IN AFRICA',
    body: 'No other government on the continent is simultaneously managing: an active presidential impeachment process; a dual-movement national shutdown deadline 28 days away; a public SANDF-minister contradiction on security deployment; a World Cup visa blunder that exposed administrative failure to a global audience; a NHI court defeat; US relations at their lowest point in decades; a retail bombing under investigation; and municipal elections in the fall. The GNU was designed to provide stability after the 2024 electoral realignment. Instead it has become the most compound-stressed executive in Africa. The Ramaphosa impeachment process will not remove him — but it will consume parliamentary bandwidth, fracture ANC-GNU partner relations, and give the opposition a platform for months. The June 30 countdown runs in parallel.',
    conclusion: 'SOUTH AFRICA\'S GNU IS THE MOST COMPOUND-STRESSED EXECUTIVE IN AFRICA. THE RAMAPHOSA IMPEACHMENT PANEL, JUNE 30 DEADLINE, SANDF CONTRADICTION AND BAFANA BLUNDER HAVE ALL LANDED IN THE SAME WEEK. WATCH ZAR AND GNU COHESION AS JUNE ACCELERATES.',
  },

  insight2: {
    title: 'KENYA\'S EBOLA ALL-CLEAR IS SIGNIFICANT — BUT THE FINANCE BILL IS THE REAL JUNE 30 RISK',
    body: 'Kenya confirming all 16 Ebola suspects are negative is a meaningful positive — it removes the most acute health risk from a country that borders Uganda, manages a major regional aviation hub, and is already under compound fiscal and political pressure. But the dominant June 30 Kenya risk is not Ebola — it is the Finance Bill 2026. Public hearings are live. The bill proposes taxes on mobile phones, bottled water, coal and credit card swipes — the same political profile that produced the 2024 parliament storming, 60+ deaths and Ruto\'s veto. Ruto is offering PAYE relief for lower earners as a pre-emptive concession but Africa Confidential notes his street arithmetic is deteriorating. The Eurobond $2bn Q2 rollover and the court battle over the US Ebola facility add two more pressure vectors. Kenya is managing more simultaneous tier-1 risk events than at any point in the Ruto era.',
    conclusion: 'KENYA\'S EBOLA ALL-CLEAR IS A GENUINE POSITIVE. BUT THE FINANCE BILL JUNE 30 DEADLINE IS THE DOMINANT RISK — AND IT IS BUILDING, NOT RECEDING, THROUGH PUBLIC HEARINGS.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23: RAMAPHOSA IMPEACHMENT PANEL SITS, BAFANA VISA BLUNDER, KENYA EBOLA ALL-CLEAR, SENEGAL 6 DAYS TO IMF',
    body: 'Week 23 second day delivers South Africa\'s most consequential governance convergence since the GNU formation. The Ramaphosa impeachment panel sits for the first time in democratic history — Constitutional Court compelled parliament in May after the 2022 block. Removal unlikely given ANC seat arithmetic but the process compounds every other GNU pressure. Bafana Bafana\'s World Cup departure was delayed by a SAFA visa administrative failure — the sports minister publicly called it embarrassing, the deputy minister demanded heads roll, the US embassy delay adding a diplomatic dimension. Kenya confirmed all 16 Ebola suspects are negative — the one clear positive from the week. Senegal\'s IMF visit is 6 days away with €53.75m coupon due the same day. Ethiopia\'s post-election war window is live — results June 11. South Africa\'s June 30 dual-movement deadline is 28 days away. Ghana remains the continental benchmark.',
  },

  fxRates: {
    NGN: '1,370.24',
    GHS: '10.70',
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
    { time: '09:30:00', signal: 'SA: Ramaphosa impeachment panel sits for first time in democratic history — 31-member committee elects chairperson. ConCourt compelled parliament in May. ANC retains 1/3+ seats — removal unlikely. But process compounds June 30 deadline, SANDF contradiction, Bafana blunder and xenophobia simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'SA: Bafana Bafana World Cup departure delayed — SAFA visa blunder left 20+ players without US visas. McKenzie: "We are being made to look like fools." Deputy minister: "heads must roll." Most visas resolved — chartered flight to Mexico today. First game vs Mexico June 11 Estadio Azteca.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Kenya POSITIVE: All 16 Ebola suspected cases confirmed NEGATIVE as of May 29. PS Muthoni: "We do not have any confirmed cases within our borders." Active surveillance ongoing. Kenya borders Uganda (8-9 confirmed). Ebola all-clear removes one major compound risk — Finance Bill June 30 remains dominant.', detail: 'LOW', type: 'INFO', tag: 'HEALTH RISK', country: 'KES' },
    { time: '08:45:00', signal: 'Senegal: 6 days to June 8 IMF visit + €53.75m coupon. $38.75m June 10. JPMorgan 15% haircut + 5yr extension + 75% coupon priced. 2033 bonds at 50.6c. PM Lo "state of emergency." Debt 132% GDP. Sonko controls legislature. Dakar protests live. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'Ethiopia: Post-election war window on Tigray LIVE — 9 days to June 11 results. PP sweep expected. TPLF reinstated Debretsion in violation of Pretoria Agreement. All major analysts flag post-election military operations as expected. Egypt, UAE, Saudi, Turkey, Israel positioning for Horn influence.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'South Africa: June 30 — 28 days. Impeachment panel + Bafana blunder + SANDF contradiction + xenophobia dual movement all active simultaneously. GNU managing most compound domestic crisis of any African government. ZAR at 16.30 — holding despite political stress on dollar weakness.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'MCB (Mauritius Commercial Bank) launches $1bn trade finance facility June 1 — targeted at AfCFTA implementation, SMEs in agriculture, manufacturing, logistics. India-Africa Business Dialogue closed. AfDB Annual Meetings governors endorse reform of Africa financial architecture. Positive structural signals amid acute risk environment.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 2: NGN 1,370.24 | GHS 10.70 | KES 129.41 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. NGN slight weakening from 1,354 last week — naira volatility returning. GHS holding at 10.70 — cedi up 19.32% YoY. ZAR firm. Ghana benchmark intact.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 52, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 38, fx: 28, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 90, fiscal: 84, fx: 74, debt: 90, political: 96, external: 90 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 96, fiscal: 68, fx: 46, debt: 62, political: 99, external: 90 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.24', change: '-13.56%', stress: 'MODERATE', ytd: '-3.80%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '10.70', change: '+1.65%', stress: 'LOW', ytd: '+19.32%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.41', change: '+0.16%', stress: 'ELEVATED', ytd: '-1.10%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep expected. Tigray excluded. TPLF reinstated Debretsion. Post-election war window on Tigray LIVE — 9 days to results. Regional powers positioning. Most dangerous Horn window since Nov 2020.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 28 days. Ramaphosa impeachment panel sits. Bafana visa blunder. SANDF contradiction. TWO movements. GNU most compound-stressed government in Africa.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. Airstrike crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — Gen-Z ghost. Ebola all-clear positive. Eurobond Q2 rollover. US-Kenya strained. Ruto managing five crises simultaneously.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 6 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'JPMORGAN 15% HAIRCUT — IMF 6 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+38', bond: '-1.9pts', fx: '+3.5%', signal: 'IMPEACHMENT + JUNE 30 — 28 DAYS', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW LIVE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+40', bond: '-2.0pts', fx: '-0.4%', signal: 'FINANCE BILL JUNE 30 — EBOLA CLEAR', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+19.3%', signal: 'CEDI SURGE — CONTINENTAL BENCHMARK', color: '#00c48c' },
  ],

  fxHistory: [
    {
      date: 'May 19',
      NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69,
      ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610
    },
    {
      date: 'May 20',
      NGN: 1370.31, GHS: 13.10, KES: 129.50, EGP: 53.90,
      ZAR: 18.45, UGX: 3710, ZMW: 19.11, XOF: 610
    },
    {
      date: 'May 22',
      NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50,
      ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610
    },
    {
      date: 'May 23',
      NGN: 1370.31, GHS: 12.50, KES: 129.50, EGP: 53.20,
      ZAR: 18.35, UGX: 3710, ZMW: 19.11, XOF: 610
    },
    {
      date: 'May 25',
      NGN: 1370.31, GHS: 12.20, KES: 129.50, EGP: 53.12,
      ZAR: 18.30, UGX: 3710, ZMW: 19.11, XOF: 610
    },
    {
      date: 'May 26',
      NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00,
      ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612
    },
    {
      date: 'May 27',
      NGN: 1371.98, GHS: 11.66, KES: 129.50, EGP: 52.80,
      ZAR: 17.80, UGX: 3745, ZMW: 19.05, XOF: 613
    },
    {
      date: 'May 28',
      NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50,
      ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615
    },
    {
      date: 'May 29',
      NGN: 1371.85, GHS: 11.10, KES: 129.10, EGP: 52.35,
      ZAR: 16.80, UGX: 3765, ZMW: 19.03, XOF: 615
    },
    {
      date: 'May 30',
      NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22,
      ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615
    },
    {
      date: 'May 31',
      NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22,
      ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615
    },
    {
      date: 'Jun 1',
      NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22,
      ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615
    },
    {
      date: 'Jun 2',
      NGN: 1370.24, GHS: 10.70, KES: 129.41, EGP: 52.22,
      ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615
    },
  ],
}
