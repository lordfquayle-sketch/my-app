// ---- AMI scoring: transparent, computed (components are EDITORIAL estimates, 0-100, higher = riskier) ----
const WEIGHTS = { fiscal: 0.25, fx: 0.25, debt: 0.25, political: 0.15, external: 0.10 }; // PROPOSED weights, not confirmed

type Components = { fiscal: number; fx: number; debt: number; political: number; external: number };
const compScore = (c: Components): number =>
  Math.round((c.fiscal * WEIGHTS.fiscal + c.fx * WEIGHTS.fx + c.debt * WEIGHTS.debt + c.political * WEIGHTS.political + c.external * WEIGHTS.external) * 10) / 10;

const heatInputs = [
  { country: 'Nigeria', flag: '🇳🇬', fiscal: 38, fx: 46, debt: 46, political: 74, external: 62 },
  { country: 'Ghana', flag: '🇬🇭', fiscal: 14, fx: 34, debt: 14, political: 16, external: 20 },
  { country: 'Kenya', flag: '🇰🇪', fiscal: 58, fx: 52, debt: 66, political: 80, external: 80 },
  { country: 'Ethiopia', flag: '🇪🇹', fiscal: 70, fx: 72, debt: 90, political: 99, external: 98 },
  { country: 'South Africa', flag: '🇿🇦', fiscal: 44, fx: 62, debt: 52, political: 82, external: 66 },
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
    updated: 'November 24, 2026 18:00 UTC (ZAR, NGN, oil, gold = Nov 23-24; GHS = Nov 18; KES = Nov 12; EGP = Nov 9; others carried; Ebola, Sudan, Ethiopia NOT refreshed)',
    overallScore: riskIndexValue,
    trend: 'WORSENING',
    drivers: ['Rand Back Past 17.50 After A Brief Rebound From A 2026 Low — Gold Swings From A 14-Month Low (+4.5% Monday, -2.7% Tuesday) — SA Credit Rating Reviews Friday', 'Naira Reported At 1,394.12, About 3% Weaker Than 13 Nov, As Interbank Turnover Falls 82% (Single Source) — CBN MPC Decision Today, Hold At 23% Widely Expected', 'Brent About $88.4, Lowest In Months, As Global Markets Sell Off — Dollar Retreats From Near A 20-Month Peak', 'Year-End Import Demand And Tight Central-Bank Stances Weigh On African Currencies; Ghana Policy Rate Cut To 11% Last Week'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 80, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 82, trend: '↑', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Nigeria', flag: '🇳🇬', alert: 'CBN DECIDES TODAY; NAIRA REPORTED AT 1,394.12. The CBN MPC (308th meeting) briefing is at 2pm WAT; the decision is not in my sources. BusinessDay and New Telegraph analysts expected a hold at 23%, citing election-related spending that threatens disinflation; Nairametrics noted inflation at a six-year low (14.06% in October) and asked whether a further cut is possible. Market data (dmarketforces, 24 Nov, single source): the naira dipped to N1,394.12 per dollar as interbank turnover fell 82%, about 3% weaker than the NFEM 1,353.97 on 13 Nov. The same source says Nigerian equities lost N515bn in the session and that year-end corporate and festive import demand is weighing on African currencies. Dangote IPO: SEC approval of the basis of allotment had not been announced in my latest source. Parallel rate last verified 1,435-1,441.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'RAND PAST 17.50; RATING REVIEWS FRIDAY. The rand rose about 0.9% to 17.43 on 23 Nov (Rateweb reference 17.4478; The National: R17.52 on Monday afternoon, +0.31% on the day) as gold and platinum bounced from a 14-month low, then fell about 0.7% on 24 Nov to roughly 17.54, per market reports. Economists cite a stronger dollar, a weaker trade account, less support from gold and platinum and higher oil import costs; coalition negotiations in the metros and Friday credit-rating reviews are the next domestic risks. The SARB held 7.25% on a 4-3 vote last week; RMB expects a hike on 28 Jan. FTSE/JSE financials were up about 1.7% on 23 Nov. The ANC polled 30.76% in the local elections.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Global Markets', flag: '🌍', alert: 'OIL LOWER, GOLD VOLATILE, EQUITIES WEAK. Brent futures were about $88.3-88.5 late on 24 Nov (about +2% on the day after $89.13 on the afternoon of 23 Nov, which was -3.7%); WTI about $81.5. Gold futures were about $3,551 late on 24 Nov (-2.7%) after a +4.5% Monday rebound to about $3,705 from a recent 14-month low; spot was cited at $3,616 early Tuesday. The dollar retreated from near a 20-month peak. Wall Street and Asian markets sold off on Monday. For African FX, weaker gold and platinum hurt South Africa, Ghana and Zambia, while lower oil helps importers.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', alert: 'POLICY RATE CUT TO 11% LAST WEEK; CEDI NOT REFRESHED. The Bank of Ghana cut its policy rate 300bp to 11% on 18 Nov as a rate alignment; inflation was 5.5% in October and the cedi about 11.73 on 18 Nov (down 10.6% YTD). I have no newer cedi quote. Lower gold prices are a risk to the gold-linked inflows that supported the currency earlier this year.', severity: 'LOW', color: '#00c48c' },
    { country: 'Not Refreshed', flag: '⚠️', alert: 'EBOLA, SUDAN, ETHIOPIA, EGYPT FX, KENYA. Ebola: last verified Congo government 11,042 cases and 5,387 deaths on 10 Nov. Egypt pound: last number 54.15 on 9 Nov; a 24 Nov report says it softened slightly in commercial windows. Kenya shilling 129.96 (12 Nov). Sudan and Ethiopia: last verified updates are from late October and early November. Treat these fields as stale.', severity: 'LOW', color: '#00c48c' },
  ],

  featuredSignal: {
    title: 'CBN DECISION TODAY, NAIRA REPORTED 1,394.12 — RAND PAST 17.50 — GOLD AND OIL SLIDE, BRENT ~$88.4 — SA RATING REVIEWS FRIDAY',
    body: 'November 24, 2026. The CBN announces its MPC decision at 2pm WAT; analysts expected a hold at 23%. One market source reports the naira at 1,394.12 per dollar, about 3% weaker than on 13 Nov, with interbank turnover down 82%; verify before relying on it. The rand rebounded to 17.43 on Monday then slipped back to about 17.54 as gold swung from a 14-month low (+4.5% Monday, -2.7% Tuesday to about $3,551). Brent fell to about $88.4. South Africa faces credit-rating reviews on Friday and coalition talks. The Bank of Ghana cut to 11% last week. Ebola, Sudan, Ethiopia and Egypt FX were not refreshed. 37 days to 31 Dec.',
    tag: 'NOVEMBER 24 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'November 24, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '350', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '176', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '205', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '195', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Mixed', status: 'WATCH', statusColor: '#f5a623', cds: 'n/a', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Ethiopia', flag: '🇪🇹', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '550', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'CBN TODAY: HOLD EXPECTED, NAIRA IS THE TEST', body: 'Analysts expected the MPC to hold at 23% given election spending risks, with inflation at 14.06%. The market variable is the reported move to 1,394 and the collapse in interbank turnover, which suggests thin liquidity rather than a clean price discovery. Watch for any FX-supply measures in the statement.', icon: '🏦' },
    { title: 'SOUTH AFRICA: FOUR THINGS BY FRIDAY', body: 'Rand 17.4-17.6, gold direction, coalition arithmetic in the metros, and credit-rating reviews on Friday (agency names not confirmed in my sources). The SARB next meets on 28 Jan; RMB expects +25bp.', icon: '🇿🇦' },
    { title: 'GOLD AND OIL: BOTH LOWER, BOTH VOLATILE', body: 'Gold is about 29% below its January record and swung more than 7% in two days. Brent is near $88. The dollar eased on Tuesday from a near 20-month high. A lower oil price helps importers; lower gold hurts South Africa, Ghana and Zambia.', icon: '📉' },
    { title: 'WHAT IS STALE', body: 'Ebola counts, Sudan, Ethiopia, Egypt FX (9 Nov), KES (12 Nov), GHS (18 Nov), ZMW, UGX and Dangote allotment status. Use the dates in each field.', icon: '⚠️' },
  ],

  insight1: {
    title: 'THE RAND IS NOW A GOLD-AND-DOLLAR TRADE: A 4.5% GOLD BOUNCE BOUGHT 0.9% OF RAND, AND A 2.7% GOLD DROP TOOK BACK 0.7%',
    body: 'The rand rose 0.9% on Monday as gold bounced 4.5% from a 14-month low, then gave back 0.7% on Tuesday as gold fell 2.7%. South African economists quoted by The National say the trade account has weakened sharply and receives much less support from gold and platinum, while the country pays more for oil. In a market where gold moves several percent a day, the rand follows. This is why domestic news (coalitions, rating reviews) matters less in the very short run than US yields, the dollar and precious metals.',
    conclusion: 'FOR THE NEXT WEEK, TREAT THE RAND AS A DERIVATIVE OF GOLD AND THE DOLLAR. THE DOMESTIC EVENT WITH THE MOST SENSITIVITY IS FRIDAY RATING REVIEWS.',
  },

  insight2: {
    title: 'A 3% NAIRA MOVE ON 82% LOWER TURNOVER SAYS MORE ABOUT LIQUIDITY THAN ABOUT VALUE',
    body: 'The reported move from 1,353.97 to 1,394.12 coincides with interbank turnover falling by 82%, which means a small number of trades set the price. Year-end corporate and festive import demand is cited as a driver across African currencies. Because the figure comes from one source and I could not confirm the official NFEM close, the right reading is a warning sign rather than a settled move. If the CBN signals FX supply or a stronger stance today, the rate could snap back.',
    conclusion: 'VERIFY THE NAIRA AGAINST THE CBN NFEM CLOSE BEFORE USING 1,394. THIN TRADING MAKES THE QUOTE FRAGILE.',
  },

  brief: {
    week: '48',
    title: 'TUESDAY NOVEMBER 24: CBN DECISION TODAY, NAIRA 1,394 (SINGLE SOURCE), RAND ~17.54, BRENT ~$88, GOLD ~$3,551, SA RATINGS FRIDAY',
    body: 'The CBN announces its MPC decision today (hold at 23% expected). One source puts the naira at 1,394.12, about 3% weaker than on 13 Nov, with turnover down 82%. The rand fell back to about 17.54 after a Monday rebound to 17.43; gold swung from a 14-month low (+4.5% Monday, -2.7% Tuesday to about $3,551); Brent about $88.4; the dollar retreated from near a 20-month peak. South Africa faces credit-rating reviews on Friday and ongoing coalition talks. The Bank of Ghana cut to 11% last week. Ebola, Sudan, Ethiopia, Egypt FX, KES and GHS were not refreshed. 37 days to 31 Dec.',
  },

  fxRates: {
    NGN: '1,394.12',
    GHS: '11.73',
    KES: '129.96',
    EGP: '54.15',
    XOF: '587.40',
    ZAR: '17.54',
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
    { time: '09:30:00', signal: 'FX. ZAR ~17.54 (24 Nov; 17.43 on 23 Nov; Rateweb ref 17.4478; The National R17.52 Mon pm) | NGN 1,394.12 (dmarketforces 24 Nov, SINGLE SOURCE, interbank turnover -82%; NFEM 13 Nov was 1,353.97) | STALE: GHS 11.73 (18 Nov), KES 129.96 (12 Nov), EGP 54.15 (9 Nov; reported slightly softer), ZMW 20.57 (29 Oct), UGX ~4,205 (22 Oct), XOF/XAF ~587.4, TZS 2,640, ETB ~161 | MAD, AOA, MZN unverified.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'COMMODITIES. Brent futures ~$88.3-88.5 late 24 Nov (23 Nov afternoon $89.13, -3.7%; earlier $91.39); WTI ~$81.5. Gold futures ~$3,551 late 24 Nov (-2.7%); 23 Nov ~$3,705 (+4.5%) off a 14-month low; spot $3,616 early 24 Nov. Dollar retreated from near a 20-month peak. US equities and Asian markets lower on Monday.', detail: 'HIGH', type: 'ALERT', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '09:00:00', signal: 'NIGERIA. CBN 308th MPC briefing 24 Nov 2pm WAT, decision pending in sources; analysts expect hold at 23% (election spending vs six-year-low inflation 14.06%). NGX lost N515bn on 24 Nov (dmarketforces). Dangote allotment: SEC approval not announced in latest source.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'SOUTH AFRICA. SARB held 7.25% on 4-3 (19 Nov); RMB expects +25bp 28 Jan. Credit-rating reviews Friday 27 Nov. Coalition talks in metros. JSE financials +1.7% on 23 Nov. Trade account weakening; gold/platinum support fading.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '08:30:00', signal: 'GHANA. BoG policy rate 11% (cut 300bp 18 Nov); inflation 5.5%; cedi 11.73 on 18 Nov; depreciation 10.6% YTD; gold slide a risk for inflows.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'GHS' },
    { time: '08:15:00', signal: 'EGYPT. Pound softened slightly in commercial windows on 24 Nov (no level in sources); last verified 54.15 on 9 Nov; CBE 17 Dec.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'EGP' },
    { time: '08:00:00', signal: 'NOT REFRESHED THIS CYCLE: Ebola counts (last Congo govt 11,042 cases / 5,387 deaths on 10 Nov), Kenya Ebola contacts, Sudan, Ethiopia, Senegal politics, Dangote allotment, KES after 12 Nov, EGP after 9 Nov. Treat related fields as stale.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'SOURCE NOTES: Naira 1,394.12 is single-source and thin-volume. Rand level varies 17.43-17.54 by source and time. Gold quote types differ (futures vs spot). Scores are computed from editorial component estimates, not indicator data; weights are proposals.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
  ],

  heatMap,

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,394.12', change: '-2.9% vs 13 Nov (single source)', stress: 'ELEVATED', ytd: '+3.5%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.73', change: '-10.6% YTD (BoG, 18 Nov)', stress: 'MODERATE', ytd: '-10.6%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.96', change: 'flat 3 weeks (12 Nov)', stress: 'LOW', ytd: '—', color: '#00c48c' },
    { code: 'EGP', country: 'Egypt', rate: '54.15', change: 'slightly softer (9 Nov, stale)', stress: 'ELEVATED', ytd: '-12%', color: '#f5a623' },
    { code: 'ZAR', country: 'South Africa', rate: '17.54', change: '-6.8% since 10 Nov', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '4,205', change: '-6.6% 30d (22 Oct, stale)', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '20.57', change: '-9% 90d (29 Oct, stale)', stress: 'ELEVATED', ytd: '—', color: '#f5a623' },
    { code: 'XOF', country: 'WAEMU', rate: '587.40', change: 'EUR peg', stress: 'LOW', ytd: '—', color: '#00c48c' },
  ],

  elections: [
    { country: 'Nigeria', flag: '🇳🇬', date: '24 Nov CBN MPC Today — Opposition Pact Planned', type: 'Central Bank / Politics', risk: 'MEDIUM', note: 'Hold at 23% expected. Naira reported 1,394.12 (single source). Dangote allotment pending.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: '27 Nov Credit Reviews — 28 Jan SARB', type: 'Ratings / Coalitions', risk: 'MEDIUM', note: 'Rand 17.54. Gold and platinum weak. Coalition talks in metros.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: 'BoG Cut To 11% (18 Nov)', type: 'Central Bank', risk: 'LOW', note: 'Cedi 11.73 (18 Nov), inflation 5.5%.', color: '#00c48c' },
    { country: 'United States', flag: '🇺🇸', date: 'Fed 8-9 Dec — Hike Priced', type: 'Central Bank', risk: 'HIGH', note: 'Dollar eased from near 20-month high on 24 Nov.', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', date: 'CBE 17 Dec', type: 'Central Bank', risk: 'LOW', note: 'Pound softer in commercial windows; last verified 54.15 (9 Nov).', color: '#00c48c' },
    { country: 'Ebola Response', flag: '🦠', date: 'Status Not Refreshed', type: 'Public Health', risk: 'CRITICAL', note: 'Last: Congo govt 11,042 cases / 5,387 deaths (10 Nov).', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Status Not Refreshed', type: 'Conflict', risk: 'CRITICAL', note: 'Last: drone strikes 25+ civilians 29-30 Oct.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.6bn', instrument: 'Dangote Refinery IPO', maturity: 'SEC APPROVAL STATUS NOT CONFIRMED — DEBUT DATE UNCONFIRMED', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: 'Policy rate 11%', instrument: 'Monetary Policy Rate', maturity: 'CUT 300BP 18 NOV', risk: 'LOW', color: '#00c48c' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$5.3bn', instrument: 'Saudi Deposits At CBE (maturing in October)', maturity: 'ROLLOVER STATUS NOT CONFIRMED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Conflict', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'NEW BOND 7.25%', instrument: 'Government Bond', maturity: 'US WANTS DEBT RESTRUCTURING WITHIN A YEAR', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q4 2026 — BRENT ~$88 VS $78 EST. BREAKEVEN', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring + $255m Lobito AfDB', instrument: 'Bilateral + Eurobond + AfDB', maturity: 'ZMW ~20.6 (29 OCT, STALE) — GOLD WEAKNESS', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', amount: 'Repo 7.25%', instrument: 'Policy Rate', maturity: 'HELD 4-3 — RATINGS 27 NOV — NEXT MPC 28 JAN', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '~$88 Brent (24 Nov)', fiscalBreakeven: '$92/bbl (est.)', breakevenNote: 'BELOW EST. BREAKEVEN — BRENT ~$88', trend: '↓', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '~$88 Brent', fiscalBreakeven: '$78/bbl (est.)', breakevenNote: 'ABOVE EST. BREAKEVEN +$10', trend: '↓', risk: 'MEDIUM' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '~$3,551/oz (24 Nov futures)', fiscalBreakeven: '$1,800/oz (est.)', breakevenNote: 'GOLD ~29% BELOW JAN RECORD — STILL ABOVE EST. BREAKEVEN', trend: '↓', risk: 'MEDIUM' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '~$12,950/t (26 Oct, stale)', fiscalBreakeven: '$5.50/lb (est.)', breakevenNote: 'COPPER NOT RE-CHECKED SINCE 26 OCT', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '~$3,551/oz (24 Nov futures)', fiscalBreakeven: '$1,600/oz (est.)', breakevenNote: 'GOLD AND PLATINUM WEAK — RAND 17.54', trend: '↓', risk: 'MEDIUM' },
    { country: 'DRC', flag: '🇨🇩', primary: 'Cobalt/Copper/Gold', exposure: 'VERY HIGH', gdpShare: '35%', revenueShare: '70%', price2026: 'Cobalt not re-checked', fiscalBreakeven: 'N/A', breakevenNote: 'EBOLA STATUS NOT REFRESHED (LAST 5,387 DEAD, 10 NOV)', trend: '↓', risk: 'CRITICAL' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Gas/Suez/Tourism', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '35%', price2026: 'EGP 54.15 (9 Nov, stale)', fiscalBreakeven: 'N/A', breakevenNote: 'POUND SOFTER 24 NOV — LEVEL NOT VERIFIED', trend: '→', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'STATUS NOT REFRESHED THIS CYCLE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA LAST 5,387 DEAD (10 NOV) — NOT REFRESHED', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 550, delta: '+98', bond: '-5.4pts', fx: '-0.9%', signal: 'STATUS NOT REFRESHED — DRONE WAR', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 195, delta: '+28', bond: '-0.6pts', fx: '-6.8%', signal: 'RAND 17.54 — GOLD SWINGS — RATINGS FRIDAY', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 350, delta: '+20', bond: '-1.0pts', fx: '-2.9%', signal: 'CBN TODAY — NAIRA 1,394 (SINGLE SOURCE) — NGX -N515BN', color: '#f5a623' },
    { country: 'KENYA', cds: 205, delta: '+35', bond: '-1.9pts', fx: '0.0%', signal: 'SHILLING FLAT 129.96 (12 NOV) — CPI 7.3%', color: '#f5a623' },
    { country: 'EGYPT', cds: 0, delta: 'N/A', bond: 'N/A', fx: '-1%', signal: 'POUND SOFTER 24 NOV — LEVEL NOT VERIFIED', color: '#f5a623' },
    { country: 'GHANA', cds: 176, delta: '-64', bond: '+5.2pts', fx: '-10.6%', signal: 'BOG 11% — CEDI 11.73 (18 NOV) — GOLD SLIDE', color: '#f5a623' },
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
    { date: 'Nov 23', NGN: 1353.97, GHS: 11.73, KES: 129.96, EGP: 54.15, ZAR: 17.43, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
    { date: 'Nov 24', NGN: 1394.12, GHS: 11.73, KES: 129.96, EGP: 54.15, ZAR: 17.54, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
  ],
}
