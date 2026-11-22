// ---- AMI scoring: transparent, computed (components are EDITORIAL estimates, 0-100, higher = riskier) ----
const WEIGHTS = { fiscal: 0.25, fx: 0.25, debt: 0.25, political: 0.15, external: 0.10 }; // PROPOSED weights, not confirmed

type Components = { fiscal: number; fx: number; debt: number; political: number; external: number };
const compScore = (c: Components): number =>
  Math.round((c.fiscal * WEIGHTS.fiscal + c.fx * WEIGHTS.fx + c.debt * WEIGHTS.debt + c.political * WEIGHTS.political + c.external * WEIGHTS.external) * 10) / 10;

const heatInputs = [
  { country: 'Nigeria', flag: '🇳🇬', fiscal: 38, fx: 40, debt: 46, political: 74, external: 62 },
  { country: 'Ghana', flag: '🇬🇭', fiscal: 14, fx: 34, debt: 14, political: 16, external: 20 },
  { country: 'Kenya', flag: '🇰🇪', fiscal: 58, fx: 52, debt: 66, political: 80, external: 80 },
  { country: 'Ethiopia', flag: '🇪🇹', fiscal: 70, fx: 72, debt: 90, political: 99, external: 98 },
  { country: 'South Africa', flag: '🇿🇦', fiscal: 44, fx: 58, debt: 52, political: 82, external: 66 },
  { country: 'Egypt', flag: '🇪🇬', fiscal: 58, fx: 62, debt: 66, political: 48, external: 58 },
  { country: 'Sudan', flag: '🇸🇩', fiscal: 98, fx: 99, debt: 96, political: 99, external: 99 },
  { country: 'DRC', flag: '🇨🇩', fiscal: 88, fx: 90, debt: 82, political: 99, external: 99 },
];
const heatMap = heatInputs.map((c) => ({ ...c, score: compScore(c) }));
const riskIndexValue = Math.round(heatMap.reduce((a, c) => a + c.score, 0) / heatMap.length); // mean of country scores

export const content = {
  riskIndex: String(riskIndexValue),
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'November 19, 2026 18:00 UTC (ZAR approx pre-decision; GHS = Nov 18; NGN = Nov 13; KES = Nov 12; EGP = Nov 9; others carried; gold, Ebola NOT refreshed)',
    overallScore: riskIndexValue,
    trend: 'WORSENING',
    drivers: ['SARB Holds 7.25% On A 4-3 Vote (Three For A 25bp Hike) — "A Pause For Now" — Rand Around 17.25, Next MPC 28 Jan 2027', 'Bank Of Ghana Cuts Policy Rate 300bp To 11% From 14% As A Rate Alignment — Inflation 5.5%, Cedi 11.73, Down 10.6% YTD', 'Nigeria Inflation 14.06%, Naira 1,353.97 Official And 1,435-1,441 Parallel — CBN MPC 24 Nov, Opposition Pact 23 Nov, Dangote Allotment Pending', 'Dollar Firm On Fed Hike Bets — Oil About $92 After Easing — Gold, Ebola, Sudan, Ethiopia Not Refreshed This Cycle'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 76, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'SARB HOLDS AT 7.25% ON A 4-3 SPLIT; RAND ABOUT 17.25. The MPC kept the repo rate at 7.25% (prime 10.75%) with four members for no change and three for a 25bp hike. Governor Kganyago: "we decided to pause for now" and the bank "will not hesitate to raise rates if needed"; the committee judges policy moderately restrictive after two hikes this year (May, September). Statement points: near-term inflation above 5%; more than a third of inflation comes from transport; oil has eased but remains elevated; global food inflation is accelerating; growth is seen rising to about 2% over the forecast period from just over 1%; El Niño severity unclear, with a better read by January. Kganyago said capital flows back toward emerging markets from the US matter more than local election outcomes. The meeting was held without the latest inflation-expectations survey. RMB expects a 25bp hike at the next meeting on 28 Jan 2027. A Bloomberg poll had 19 of 20 economists expecting a hold; the rand traded around 17.25 per dollar before the decision (exact post-decision level not in my sources). October CPI was 5.2%.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', alert: 'BANK OF GHANA CUTS POLICY RATE 300BP TO 11%. The 133rd MPC (16-18 Nov) cut the policy rate to 11% from 14%, calling it a "rate alignment" because market rates had already fallen below 14%; it ends a pause that lasted through the May, July and September meetings and takes the rate below the old 12.5% floor of 2006-2011. Inflation rose to 5.5% in October (5.2% in September). The average bank lending rate fell to 15.75-15.8% in October from 22.2% a year earlier. The cedi was about 11.73 per dollar on 18 Nov; BoG data show cumulative depreciation of 10.6% in 2026, and Fitch Solutions sees it ending 2027 near 12.8. Analysts at Databank had expected a hold.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'INFLATION 14.06%; PARALLEL SPREAD ABOUT 6%; POLITICS HEATING UP. October CPI 14.06% (September 14.63%; October 2025 18.97%), m/m 0.43%, food 19.13%, core 10.78%, on a new 2024 base. Latest official rate I have is NFEM 1,353.97 on 13 Nov; parallel 1,435-1,441 (Aboki, BDC 1,440), one aggregator 1,390; reserves $54.87bn (12 Nov). Upcoming: opposition Democracy Renewal Pact on 23 Nov to field a single candidate, CBN MPC on 24 Nov. Dangote IPO: SEC approval of the basis of allotment was still not announced as of 16 Nov; trading about 27 Nov to 8 Dec; demand N5.85tn-N6.4tn against N2.15tn. Nothing newer verified in this cycle.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Global / Oil', flag: '🛢️', alert: 'DOLLAR FIRM, OIL EASED BUT ELEVATED. The latest oil level I have is about $92 (Bloomberg/Moneyweb, 18 Nov), with Hormuz attacks still producing spikes. Hot US inflation data and expected Fed hikes (possibly 50bp in December; meeting 8-9 Dec) keep the dollar strong, which is the main driver of emerging-market currencies this month. Gold and copper not refreshed.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt / Kenya', flag: '🌍', alert: 'EGYPT: POUND LAST SEEN 54.15 (9 NOV); BANQUE DU CAIRE IPO DONE. October urban inflation 12.7%, core 13.1%; CBE meets 17 Dec. KENYA: shilling 129.96 (CBK, 12 Nov), flat three weeks; October CPI 7.3%. Neither was refreshed this cycle.', severity: 'LOW', color: '#00c48c' },
  ],

  featuredSignal: {
    title: 'SARB HOLDS 7.25% ON A 4-3 SPLIT — RAND ABOUT 17.25 — BANK OF GHANA CUTS 300BP TO 11% — NIGERIA INFLATION 14.06%, CBN 24 NOV — DOLLAR FIRM',
    body: 'November 19, 2026. The SARB held the repo rate at 7.25% but three of seven members wanted a 25bp hike; the governor called it a pause for now and RMB expects a hike on 28 Jan. The rand traded around 17.25 per dollar before the decision. The Bank of Ghana cut its policy rate by 300bp to 11% on 18 Nov as a rate alignment with market yields, with inflation at 5.5% and the cedi near 11.73. Nigeria: inflation 14.06%, official naira 1,353.97 (13 Nov), parallel 1,435-1,441, CBN MPC on 24 Nov. The dollar stays firm on Fed hike bets; oil is about $92. Gold, Ebola, Sudan and Ethiopia were not refreshed. 42 days to 31 Dec.',
    tag: 'NOVEMBER 19 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'November 19, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '350', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '176', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '205', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Mixed', status: 'WATCH', statusColor: '#f5a623', cds: 'n/a', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Ethiopia', flag: '🇪🇹', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '550', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SARB: THE SPLIT IS THE SIGNAL', body: 'A 4-3 hold means the committee is divided on pace rather than direction ("the direction of travel is very clear"). Together with RMB expecting +25bp on 28 Jan, markets are likely to price a further hike unless oil and the rand cooperate. The main data between now and then: Q4 inflation prints, December fuel price changes, and the Fed on 8-9 Dec.', icon: '🏦' },
    { title: 'GHANA: A TECHNICAL CUT, A RISKY CURRENCY', body: 'The governor says the 300bp cut aligns the policy rate with market rates that had already fallen, so effective easing is smaller than the headline. With inflation edging up to 5.5% and the cedi down 10.6% this year, the test is whether the cedi stays near 11.7 with the policy rate at 11%. Fitch Solutions projects 12.8 by end-2027.', icon: '🇬🇭' },
    { title: 'NIGERIA: THREE DATES IN SIX DAYS', body: '23 Nov: opposition single-candidate pact. 24 Nov: CBN MPC (my reading is a hold, which is an inference). Late Nov or early Dec: Dangote first trade once the SEC clears allotment. The naira and parallel premium (about 6%) are the market variables.', icon: '🗳️' },
    { title: 'WHAT IS STALE', body: 'Gold, copper, Ebola, Sudan, Ethiopia, Kenya Ebola contacts and Egypt after 9 Nov. NGN is 13 Nov, KES is 12 Nov. Use the source dates in each field.', icon: '⚠️' },
  ],

  insight1: {
    title: 'SOUTH AFRICA: THE SARB WENT HAWKISH IN TONE WHILE HOLDING, AND SAID THE RAND IS A GLOBAL-FLOWS STORY',
    body: 'Three of seven members voting for a hike is the most hawkish outcome a hold can have. Kganyago explicitly rejected the local-election explanation for the rand: the weakness reflects money leaving the United States in the other direction, and rising US rate expectations, and he said an investor worrying about local election outcomes is "analysing the wrong thing". The bank also noted that more than a third of inflation comes from transport and that growth is expected to improve from just over 1% to about 2%. Combined with the October CPI of 5.2% and a 3% target, the base case for 28 Jan is a hike unless fuel prices and the rand ease. The SARB did not have the latest inflation-expectations survey, which adds uncertainty to the current stance.',
    conclusion: 'HOLD NOW, HIKE LIKELY IN JANUARY UNLESS OIL AND THE RAND HELP. THE SPLIT VOTE AND THE GOVERNOR WORDING ARE THE EVIDENCE.',
  },

  insight2: {
    title: 'GHANA AND SOUTH AFRICA MOVED IN OPPOSITE DIRECTIONS THIS WEEK, BUT BOTH CENTRAL BANKS ARE RESPONDING TO THE SAME GLOBAL BACKDROP',
    body: 'Ghana cut by 300bp and South Africa held with three votes to hike, yet both statements stress external uncertainty. The difference is domestic: Ghana disinflation (5.5% against an 8% target midpoint) and falling market yields let the BoG align its rate with money-market rates, while South Africa faces a 5.2% inflation print and a weak rand. The practical read for the terminal is that country differentiation is rising: Ghana and Kenya (flat shilling, inflation 7.3%) look steadier on currency, while South Africa carries the most FX stress among the larger economies. The cedi is still down 10.6% this year, so Ghana has its own vulnerability.',
    conclusion: 'DOMESTIC INFLATION AND CURRENCY STRENGTH EXPLAIN THE POLICY DIVERGENCE, BUT FX STRESS IS HIGHEST WHERE A LARGE EXTERNAL FINANCING NEED MEETS A WEAK DOLLAR BACKDROP.',
  },

  brief: {
    week: '47',
    title: 'THURSDAY NOVEMBER 19: SARB HOLDS 7.25% 4-3, RAND ~17.25, BANK OF GHANA CUTS TO 11%, NIGERIA INFLATION 14.06%, CBN MPC 24 NOV',
    body: 'The SARB held at 7.25% with a 4-3 vote (three for a 25bp hike) and warned it will not hesitate to raise rates; RMB expects a hike on 28 Jan. The rand traded near 17.25 before the decision. The Bank of Ghana cut its policy rate 300bp to 11% on 18 Nov as a rate alignment; cedi 11.73, inflation 5.5%. Nigeria: inflation 14.06%, official naira 1,353.97 (13 Nov), parallel 1,435-1,441; opposition pact 23 Nov, CBN MPC 24 Nov, Dangote allotment pending. The dollar is firm on Fed hike bets; oil about $92. Gold, Ebola, Sudan and Ethiopia not refreshed. 42 days to 31 Dec.',
  },

  fxRates: {
    NGN: '1,353.97',
    GHS: '11.73',
    KES: '129.96',
    EGP: '54.15',
    XOF: '587.40',
    ZAR: '17.25',
    ETB: '161.00',
    TZS: '2,640.00',
    UGX: '4,205.00',
    MAD: '9.75',
    XAF: '587.40',
    ZMW: '20.57',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'FX. ZAR ~17.25 (pre-decision headline, 19 Nov; exact post-decision close not in sources; 18 Nov ~17.00; 13 Nov 16.93) | GHS 11.73 (18 Nov market data; BoG: depreciation 10.6% YTD) | NGN 1,353.97 (NFEM 13 Nov, no newer; parallel 1,435-1,441) | KES 129.96 (12 Nov) | EGP 54.15 (9 Nov, stale) | STALE: ZMW 20.57 (29 Oct), UGX ~4,205 (22 Oct), XOF/XAF ~587.4, TZS 2,640, ETB ~161 | MAD, AOA, MZN unverified.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'SARB (19 Nov). Repo 7.25%, prime 10.75%; vote 4 hold / 3 for +25bp; "pause for now"; policy moderately restrictive after hikes in May and September; next MPC 28 Jan 2027; RMB expects +25bp then; growth to ~2% from just over 1%; inflation above 5% near term; transport >1/3 of inflation; no inflation-expectations survey available; Bloomberg poll 19 of 20 expected hold.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'BANK OF GHANA (18 Nov). Policy rate 11% from 14% (-300bp), realignment to market rates; ends pause since March; below old 12.5% floor; Oct inflation 5.5% (Sep 5.2%); average lending rate 15.75-15.8% (22.2% a year ago); cedi depreciation 10.6% YTD; Fitch Solutions: cedi 12.8 by end-2027.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'GHS' },
    { time: '08:45:00', signal: 'NIGERIA. CPI 14.06% (Sep 14.63%); m/m 0.43%; food 19.13%; core 10.78%. Reserves $54.87bn (12 Nov). Opposition Democracy Renewal Pact 23 Nov; CBN MPC 24 Nov. Dangote: SEC approval of allotment basis pending (not announced as of 16 Nov); trading ~27 Nov to 8 Dec; demand N5.85tn-N6.4tn.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:30:00', signal: 'GLOBAL. Dollar firm: hot US PPI and CPI, Fed hike (possibly 50bp) priced for 8-9 Dec. Oil about $92 (18 Nov), Hormuz attacks continue. Gold and copper not refreshed.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:15:00', signal: 'EGYPT/KENYA. Egypt: Oct urban inflation 12.7%, core 13.1%; CBE 17 Dec; Banque du Caire IPO completed. Kenya: shilling 129.96; CPI 7.3%.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'EGP' },
    { time: '08:00:00', signal: 'NOT REFRESHED THIS CYCLE: gold, copper, Ebola counts (last: Congo government 11,042 cases / 5,387 deaths on 10 Nov), Kenya contact release, Sudan, Ethiopia, Egypt FX after 9 Nov, NGN after 13 Nov. Treat related fields as stale.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'SOURCE NOTES: ZAR level is approximate. Scores are computed from editorial component estimates, not indicator data; weights are proposals. Nigeria parallel varies 1,390-1,441 by source.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
  ],

  heatMap,

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,353.97', change: '-0.5% w/w (13 Nov)', stress: 'MODERATE', ytd: '+6.4%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.73', change: '-10.6% YTD (BoG)', stress: 'MODERATE', ytd: '-10.6%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.96', change: 'flat 3 weeks (12 Nov)', stress: 'LOW', ytd: '—', color: '#00c48c' },
    { code: 'EGP', country: 'Egypt', rate: '54.15', change: 'recovering (9 Nov, stale)', stress: 'ELEVATED', ytd: '-12%', color: '#f5a623' },
    { code: 'ZAR', country: 'South Africa', rate: '17.25', change: '-5.5% since 10 Nov', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '4,205', change: '-6.6% 30d (22 Oct, stale)', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '20.57', change: '-9% 90d (29 Oct, stale)', stress: 'ELEVATED', ytd: '—', color: '#f5a623' },
    { code: 'XOF', country: 'WAEMU', rate: '587.40', change: 'EUR peg', stress: 'LOW', ytd: '—', color: '#00c48c' },
  ],

  elections: [
    { country: 'Nigeria', flag: '🇳🇬', date: '23 Nov Opposition Pact — 24 Nov CBN MPC', type: 'Politics / Central Bank', risk: 'MEDIUM', note: 'Inflation 14.06%. Naira 1,353.97, parallel 1,435-1,441. Dangote allotment pending.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: '28 Jan 2027 SARB MPC — Hike Expected By RMB', type: 'Central Bank / Coalitions', risk: 'MEDIUM', note: 'Held 7.25% on 4-3. Rand ~17.25. ANC 30.76% in local elections; metro coalitions.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: 'BoG Cut To 11% (18 Nov)', type: 'Central Bank', risk: 'LOW', note: 'Cedi 11.73, down 10.6% YTD. Inflation 5.5%.', color: '#00c48c' },
    { country: 'United States', flag: '🇺🇸', date: 'Fed 8-9 Dec — Hike Priced', type: 'Central Bank', risk: 'HIGH', note: 'Possible 50bp. Dollar strong.', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', date: 'CBE 17 Dec', type: 'Central Bank', risk: 'LOW', note: 'Pound recovered; S&P expects a hold.', color: '#00c48c' },
    { country: 'Ebola Response', flag: '🦠', date: 'Status Not Refreshed', type: 'Public Health', risk: 'CRITICAL', note: 'Last: Congo govt 11,042 cases / 5,387 deaths (10 Nov).', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Status Not Refreshed', type: 'Conflict', risk: 'CRITICAL', note: 'Last: drone strikes 25+ civilians 29-30 Oct.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.6bn', instrument: 'Dangote Refinery IPO', maturity: 'SEC APPROVAL PENDING — DEBUT ~27 NOV TO 8 DEC', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: 'Policy rate 11%', instrument: 'Monetary Policy Rate', maturity: 'CUT 300BP 18 NOV — LENDING RATES FALLING', risk: 'LOW', color: '#00c48c' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$5.3bn', instrument: 'Saudi Deposits At CBE (maturing in October)', maturity: 'ROLLOVER STATUS NOT CONFIRMED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Conflict', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'NEW BOND 7.25%', instrument: 'Government Bond', maturity: 'US WANTS DEBT RESTRUCTURING WITHIN A YEAR', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q4 2026 — BRENT ~$92 VS $78 EST. BREAKEVEN', risk: 'LOW', color: '#00c48c' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring + $255m Lobito AfDB', instrument: 'Bilateral + Eurobond + AfDB', maturity: 'ZMW ~20.6 (29 OCT, STALE)', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: 'Repo 7.25%', instrument: 'Policy Rate', maturity: 'HELD 4-3 — NEXT MPC 28 JAN 2027', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '~$92 Brent (18 Nov)', fiscalBreakeven: '$92/bbl (est.)', breakevenNote: 'AT EST. BREAKEVEN — BONNY LIGHT $96.93 (WK TO 13 NOV)', trend: '↓', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '~$92 Brent', fiscalBreakeven: '$78/bbl (est.)', breakevenNote: 'ABOVE EST. BREAKEVEN +$14', trend: '↓', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,800/oz (est.)', breakevenNote: 'GOLD PRICE STALE', trend: '→', risk: 'MEDIUM' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '~$12,950/t (26 Oct, stale)', fiscalBreakeven: '$5.50/lb (est.)', breakevenNote: 'COPPER NOT RE-CHECKED SINCE 26 OCT', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,600/oz (est.)', breakevenNote: 'RAND ~17.25 — FUEL INFLATION 42.9% Y/Y', trend: '↓', risk: 'MEDIUM' },
    { country: 'DRC', flag: '🇨🇩', primary: 'Cobalt/Copper/Gold', exposure: 'VERY HIGH', gdpShare: '35%', revenueShare: '70%', price2026: 'Cobalt not re-checked', fiscalBreakeven: 'N/A', breakevenNote: 'EBOLA STATUS NOT REFRESHED (LAST 5,387 DEAD, 10 NOV)', trend: '↓', risk: 'CRITICAL' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Gas/Suez/Tourism', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '35%', price2026: 'EGP 54.15 (9 Nov)', fiscalBreakeven: 'N/A', breakevenNote: 'REMITTANCES $13BN Q1 — POUND RECOVERING', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'STATUS NOT REFRESHED THIS CYCLE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA LAST 5,387 DEAD (10 NOV) — NOT REFRESHED', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 550, delta: '+98', bond: '-5.4pts', fx: '-0.9%', signal: 'STATUS NOT REFRESHED — DRONE WAR', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 192, delta: '+25', bond: '-0.5pts', fx: '-5.5%', signal: 'SARB HOLD 4-3 — RAND ~17.25 — CPI 5.2%', color: '#f5a623' },
    { country: 'NIGERIA', cds: 350, delta: '+20', bond: '-1.0pts', fx: '-0.5%', signal: 'CPI 14.06% — NAIRA 1,353.97 — CBN 24 NOV', color: '#f5a623' },
    { country: 'KENYA', cds: 205, delta: '+35', bond: '-1.9pts', fx: '0.0%', signal: 'SHILLING FLAT 129.96 — CPI 7.3%', color: '#f5a623' },
    { country: 'EGYPT', cds: 0, delta: 'N/A', bond: 'N/A', fx: '+3%', signal: 'POUND RECOVERING — BANQUE DU CAIRE IPO DONE', color: '#f5a623' },
    { country: 'GHANA', cds: 176, delta: '-64', bond: '+5.2pts', fx: '-10.6%', signal: 'BOG CUT TO 11% — CPI 5.5% — CEDI 11.73', color: '#f5a623' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.72, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.15, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.22, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.22, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.20, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.20, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.18, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.15, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.12, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.10, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.08, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.41, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.47, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.40, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.45, KES: 129.10, EGP: 52.22, ZAR: 16.03, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.44, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.44, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 27', NGN: 1361.00, GHS: 11.43, KES: 129.04, EGP: 52.22, ZAR: 16.75, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1363.00, GHS: 11.43, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 29', NGN: 1363.00, GHS: 11.43, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 30', NGN: 1363.00, GHS: 11.42, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 1', NGN: 1363.00, GHS: 11.41, KES: 129.04, EGP: 52.22, ZAR: 16.52, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 3', NGN: 1363.00, GHS: 11.66, KES: 129.04, EGP: 52.22, ZAR: 16.55, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 5', NGN: 1363.00, GHS: 11.72, KES: 129.04, EGP: 52.22, ZAR: 16.32, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 7', NGN: 1363.00, GHS: 11.69, KES: 129.04, EGP: 52.22, ZAR: 16.14, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 10', NGN: 1363.00, GHS: 11.60, KES: 129.04, EGP: 52.10, ZAR: 16.20, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 12', NGN: 1363.00, GHS: 11.75, KES: 129.04, EGP: 51.80, ZAR: 16.20, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 14', NGN: 1363.00, GHS: 11.46, KES: 129.04, EGP: 51.60, ZAR: 16.20, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 15', NGN: 1363.00, GHS: 11.30, KES: 129.04, EGP: 51.40, ZAR: 16.18, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 16', NGN: 1363.00, GHS: 10.90, KES: 129.04, EGP: 51.20, ZAR: 16.17, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 17', NGN: 1363.00, GHS: 10.95, KES: 129.04, EGP: 51.00, ZAR: 16.17, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 18', NGN: 1359.00, GHS: 11.05, KES: 129.04, EGP: 50.80, ZAR: 16.16, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 22', NGN: 1363.00, GHS: 11.08, KES: 129.04, EGP: 50.60, ZAR: 16.16, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 24', NGN: 1363.00, GHS: 11.20, KES: 129.04, EGP: 50.40, ZAR: 16.16, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 25', NGN: 1347.00, GHS: 11.05, KES: 129.50, EGP: 50.30, ZAR: 16.01, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Aug 29', NGN: 1347.00, GHS: 11.05, KES: 129.50, EGP: 50.20, ZAR: 16.01, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Aug 31', NGN: 1347.00, GHS: 11.05, KES: 129.50, EGP: 50.28, ZAR: 16.18, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Sep 1', NGN: 1347.00, GHS: 11.05, KES: 129.50, EGP: 50.22, ZAR: 16.17, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Sep 7', NGN: 1363.64, GHS: 11.05, KES: 129.42, EGP: 50.22, ZAR: 16.17, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Sep 14', NGN: 1320.00, GHS: 11.20, KES: 129.50, EGP: 50.20, ZAR: 16.17, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Sep 16', NGN: 1325.78, GHS: 11.30, KES: 129.28, EGP: 50.20, ZAR: 16.23, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Sep 21', NGN: 1325.78, GHS: 11.30, KES: 129.28, EGP: 50.20, ZAR: 16.23, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Oct 7', NGN: 1329.15, GHS: 11.79, KES: 129.82, EGP: 52.31, ZAR: 16.64, UGX: 4074.89, ZMW: 19.89, XOF: 586.88 },
    { date: 'Oct 13', NGN: 1335.50, GHS: 11.70, KES: 129.70, EGP: 52.66, ZAR: 16.49, UGX: 4139.48, ZMW: 19.90, XOF: 586.32 },
    { date: 'Oct 20', NGN: 1333.65, GHS: 11.65, KES: 129.85, EGP: 54.00, ZAR: 16.39, UGX: 4169.01, ZMW: 20.04, XOF: 584.40 },
    { date: 'Oct 22', NGN: 1344.40, GHS: 11.66, KES: 129.91, EGP: 55.35, ZAR: 16.50, UGX: 4205.00, ZMW: 20.37, XOF: 584.40 },
    { date: 'Oct 23', NGN: 1361.84, GHS: 11.66, KES: 129.91, EGP: 55.30, ZAR: 16.51, UGX: 4205.00, ZMW: 20.37, XOF: 585.50 },
    { date: 'Oct 26', NGN: 1367.61, GHS: 11.66, KES: 129.91, EGP: 56.28, ZAR: 16.61, UGX: 4205.00, ZMW: 20.37, XOF: 585.50 },
    { date: 'Oct 27', NGN: 1357.00, GHS: 11.66, KES: 129.91, EGP: 56.25, ZAR: 16.64, UGX: 4205.00, ZMW: 20.37, XOF: 587.40 },
    { date: 'Oct 28', NGN: 1352.87, GHS: 11.66, KES: 129.91, EGP: 56.13, ZAR: 16.61, UGX: 4205.00, ZMW: 20.37, XOF: 587.40 },
    { date: 'Oct 29', NGN: 1346.91, GHS: 11.62, KES: 129.95, EGP: 56.06, ZAR: 16.65, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Oct 30', NGN: 1346.26, GHS: 11.62, KES: 130.00, EGP: 56.06, ZAR: 16.71, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 1', NGN: 1346.26, GHS: 11.62, KES: 130.00, EGP: 55.79, ZAR: 16.71, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 5', NGN: 1346.79, GHS: 11.62, KES: 130.00, EGP: 53.93, ZAR: 16.55, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 9', NGN: 1349.35, GHS: 11.62, KES: 130.00, EGP: 54.15, ZAR: 16.38, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 10', NGN: 1350.86, GHS: 11.70, KES: 130.00, EGP: 54.15, ZAR: 16.52, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 11', NGN: 1364.00, GHS: 11.70, KES: 129.96, EGP: 54.15, ZAR: 16.52, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 13', NGN: 1353.97, GHS: 11.71, KES: 129.96, EGP: 54.15, ZAR: 16.93, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 18', NGN: 1353.97, GHS: 11.73, KES: 129.96, EGP: 54.15, ZAR: 17.00, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 19', NGN: 1353.97, GHS: 11.73, KES: 129.96, EGP: 54.15, ZAR: 17.25, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
  ],
}
