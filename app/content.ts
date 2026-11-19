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
  { country: 'South Africa', flag: '🇿🇦', fiscal: 44, fx: 56, debt: 52, political: 82, external: 66 },
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
    updated: 'November 18, 2026 09:00 UTC (ZAR = Nov 18 AM approx; NGN, GHS = Nov 13; KES = Nov 12; EGP = Nov 9; ZMW, UGX, XOF carried; gold, Ebola NOT refreshed)',
    overallScore: riskIndexValue,
    trend: 'WORSENING',
    drivers: ['SA October CPI 5.2%, Highest Since May 2024 (Fuel Inflation 42.9%) — Rand Weakens Past 17 Per Dollar — SARB Decides Thursday, Hold At 7.25% Expected', 'Nigeria October Inflation 14.06% (Food 19.13%, Core 10.78%) — Naira 1,353.97 Official, Parallel 1,435-1,441 — CBN MPC 24 Nov — Opposition Single-Candidate Pact 23 Nov', 'Brent About $92 On Ample Supply Even As Hormuz Attacks Continue — Fed Hike Expectations Keep The Dollar Firm', 'Dangote IPO Allotment Awaits SEC (Not Announced As Of 16 Nov) — Debut About 27 Nov To 8 Dec; Egypt Banque du Caire Completes Largest Egyptian IPO'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 80, trend: '↑', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'CPI 5.2%, HIGHEST SINCE MAY 2024; RAND PAST 17; SARB THURSDAY. Stats SA: October CPI 5.2% (September 4.5%), +0.7% m/m; core 4.2% (4.0%); transport 15.2% y/y (2.1 points of the headline); fuel +11.8% m/m and 42.9% y/y (27.9% in September, highest since August 2022); goods 5.3%, services 5.0%; food only 1.4%; CPI ex-fuel 3.8%. It was the eighth month above the 3% target and matched the Bloomberg median of 15 economists. PSG sees 5.3-5.4% in November and 5.1% in December (2026 average about 4.3%). The rand weakened past 17 per dollar on the print (Bloomberg, 8:03 UTC), versus 16.93 on Friday and about 16.35 on 10 Nov. Most economists expect the SARB MPC to hold at 7.25% on Thursday 19 Nov (its sixth and final meeting of 2026), weighing expected Fed hikes on the rand against oil retreating to about $92; some analysts see room to cut in 2027. The US has moved to remove South Africa and Rwanda from AGOA; coalition talks continue after the ANC fell to 30.76% in local elections.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'OCTOBER INFLATION 14.06%; DANGOTE ALLOTMENT PENDING. NBS (new 2024 base): headline 14.06% (September 14.63%; October 2025 18.97%), m/m +0.43% (0.06% in September), food 19.13% y/y (19.59%) but -0.75% m/m, core 10.78% y/y and -0.53% m/m, urban 14.84%, rural 12.17%. Food and non-alcoholic beverages contributed 5.63 points of the headline. The print landed just above the 13.6-14.0% forecasts. NFEM official rate 1,353.97 on 13 Nov (no newer print found); parallel 1,435-1,441 (Aboki, Proshare BDC 1,440), one aggregator 1,390; gross reserves $54.87bn (12 Nov). CBN MPC meets 24 Nov. Opposition parties plan to sign a Democracy Renewal Pact on 23 Nov to field a single candidate against Tinubu. Dangote refinery IPO: SEC approval of the basis of allotment, targeted 17 Nov, had not been announced as of 16 Nov; the SEC is reportedly holding it until it is satisfied small investors were not squeezed out. Demand is reported at N5.85tn (about 4m applicants, THEWILL) or N6.4tn (other estimates) against a N2.15tn base. Trading is due within about 10 days of approval (about 27 Nov) or by 8 Dec under the earlier timetable. Dangote Cement shelved its London listing.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Oil / Dollar', flag: '🛢️', alert: 'BRENT ABOUT $92; DOLLAR FIRM ON FED HIKE BETS. Moneyweb/Bloomberg (18 Nov) puts oil at around $92 a barrel amid ample supply, after about $95 on 12 Nov and $91.49 on 10 Nov. Hormuz attacks and Saudi energy-site strikes continue to cause spikes. The dollar posted its strongest week since October on a hot US PPI and expectations of Fed hikes (possibly 50bp in December). Africa.com notes the week belonged to local markets: Egypt completed the largest public offering in its market history (Banque du Caire), Ghana set a roughly $10bn home-funded budget plan, and South Africa and Rwanda lose AGOA. Gold not re-checked.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', alert: 'INFLATION 5.5%; BOG DECISION TODAY. October inflation rose to 5.5%, an 11-month high. The Bank of Ghana decides on 18 Nov (result not in my sources). Cedi 11.71 on the interbank market on 13 Nov; forex bureaus sold at 12.35. Ghana unveiled a roughly $10bn budget plan funded at home.', severity: 'LOW', color: '#00c48c' },
    { country: 'Egypt / Kenya', flag: '🌍', alert: 'EGYPT: IPO MILESTONE, POUND LAST SEEN 54.15. Banque du Caire completed the largest public offering in Egypt market history. The pound recovered sharply from record lows in the week to 13 Nov (diaspora remittances $13bn in Q1 FY26/27); last verified quote 54.11/54.20 on 9 Nov. October urban inflation 12.7%, core 13.1%; CBE meets 17 Dec. KENYA: shilling flat at 129.96 (CBK, 12 Nov) for a third week; October CPI 7.3%.', severity: 'LOW', color: '#00c48c' },
  ],

  featuredSignal: {
    title: 'SA CPI 5.2% HIGHEST SINCE MAY 2024, RAND PAST 17 — SARB THURSDAY — NIGERIA INFLATION 14.06% — BRENT ~$92 — DANGOTE ALLOTMENT PENDING',
    body: 'November 18, 2026. South Africa October inflation rose to 5.2% from 4.5%, the highest since May 2024, driven by fuel (up 11.8% in a month and 42.9% y/y); the rand weakened past 17 per dollar and the SARB decides tomorrow with a hold at 7.25% expected. Nigeria published October inflation of 14.06% (food 19.13%, core 10.78%) on a new 2024 base; the naira is 1,353.97 officially and 1,435-1,441 in the parallel market, with the CBN meeting on 24 Nov and opposition parties due to sign a single-candidate pact on 23 Nov. Brent is about $92 even as shipping attacks continue; the dollar stays firm on Fed hike bets. Dangote IPO allotment awaits SEC approval. Gold and Ebola were not refreshed. 43 days to 31 Dec.',
    tag: 'NOVEMBER 18 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'November 18, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '350', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '176', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '205', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '190', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Mixed', status: 'WATCH', statusColor: '#f5a623', cds: 'n/a', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Ethiopia', flag: '🇪🇹', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '550', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SARB TOMORROW: HOLD, BUT THE LANGUAGE MATTERS', body: 'Inflation is now 5.2%, above the 3% target and outside the new 1-point tolerance band, but the SARB model runs were finished on September data, so the October print should not change the decision. Services inflation of 5.0% is the item analysts say the committee will flag. A hold at 7.25% with hawkish wording is the base case; the rand above 17 raises the cost of any dovish tilt.', icon: '🏦' },
    { title: 'NIGERIA: LOWER HEADLINE, HIGHER MONTHLY', body: 'Headline inflation fell to 14.06% but monthly inflation rose to 0.43% from 0.06%, so the pace of price increases quickened even as the base effect pulled the year-on-year rate lower. Core fell 0.53% m/m. With the CBN meeting on 24 Nov and the naira drifting toward 1,360 officially, the committee has to weigh disinflation against currency and reserve trends.', icon: '📊' },
    { title: 'DANGOTE: THE SEC IS THE GATE', body: 'The SEC is reviewing the retail split before clearing the basis of allotment. Once cleared: announcement one business day later, refunds within five business days, trading about 10-15 business days after allotment. Demand estimates range from N5.85tn to N6.4tn; the offer is 4.1bn shares at N525 (N2.15tn).', icon: '📈' },
    { title: 'WHAT IS STALE TODAY', body: 'Gold, copper, Ebola counts, Sudan, Ethiopia, Kenya Ebola contacts and the BoG decision were not refreshed. EGP is last seen on 9 Nov and NGN on 13 Nov. Use the source dates shown in each field.', icon: '⚠️' },
  ],

  insight1: {
    title: 'SOUTH AFRICA INFLATION IS A FUEL STORY, AND THE RAND AT 17 IS A GLOBAL RATES STORY — THE SARB IS CAUGHT BETWEEN THEM',
    body: 'Fuel accounts for most of the October jump: fuel prices rose 11.8% in a month and are up 42.9% from a year earlier, while food inflation is only 1.4% and CPI excluding fuel is 3.8%. That is a supply shock rather than broad demand pressure, which argues against more hikes. Meanwhile the rand weakened past 17 because US inflation surprised and Fed hike bets rose, not because of domestic inflation. A pause lets the SARB see the effect of its September 25bp hike; the risk is that a weak rand passes through into goods prices, which already rose to 5.3% from 4.1%. PSG expects 5.3-5.4% in November before relief from lower oil and the temporary fuel-levy cut.',
    conclusion: 'THE INFLATION SPIKE IS NARROW (FUEL) BUT THE RAND WEAKNESS IS GLOBAL. A HOLD IS LIKELY; THE KEY SIGNAL IS WHETHER THE SARB TREATS THE RAND AS AN INFLATION RISK.',
  },

  insight2: {
    title: 'NIGERIA DISINFLATION IS REAL ON A YEAR-ON-YEAR BASIS, BUT THE MONTHLY SERIES IS TURNING UP',
    body: 'Headline inflation has fallen from 18.97% a year ago to 14.06%, and core is 10.78%. But monthly headline inflation accelerated to 0.43% in October, the NBS itself noting a higher rate of increase in average prices than in September, and food prices fell more slowly (-0.75% versus -1.55%). The index also moved to a 2024 base, so comparisons across the rebasing need care. Add a softer naira, reserves slipping below $55bn and seasonal import demand, and the 24 Nov CBN meeting looks like a hold rather than a cut, in my reading. That is an inference, not a forecast from the bank.',
    conclusion: 'YEAR-ON-YEAR INFLATION IS FALLING WHILE MONTH-ON-MONTH TURNED HIGHER. TREAT THE 24 NOV MPC AS A LIKELY HOLD AND WATCH THE NAIRA AND RESERVES.',
  },

  brief: {
    week: '47',
    title: 'WEDNESDAY NOVEMBER 18: SA CPI 5.2%, RAND PAST 17, SARB TOMORROW, NIGERIA INFLATION 14.06%, BRENT ~$92, DANGOTE ALLOTMENT PENDING',
    body: 'South Africa October inflation rose to 5.2% (core 4.2%; fuel +42.9% y/y), the highest since May 2024; the rand weakened past 17 per dollar and the SARB decides on 19 Nov with a hold at 7.25% expected. Nigeria October inflation 14.06% (food 19.13%, core 10.78%; m/m 0.43%); naira 1,353.97 official (13 Nov), parallel 1,435-1,441; CBN MPC 24 Nov; opposition single-candidate pact 23 Nov. Brent about $92; the dollar remains firm on Fed hike bets. Dangote allotment awaits SEC approval (debut about 27 Nov to 8 Dec). Ghana inflation 5.5%, BoG decision today. Egypt Banque du Caire IPO done; South Africa and Rwanda lose AGOA. Gold and Ebola not refreshed. 43 days to 31 Dec.',
  },

  fxRates: {
    NGN: '1,353.97',
    GHS: '11.71',
    KES: '129.96',
    EGP: '54.15',
    XOF: '587.40',
    ZAR: '17.00',
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
    { time: '09:30:00', signal: 'FX. ZAR ~17.00 (Bloomberg 18 Nov 8:03 UTC: weakened past 17 after CPI; 13 Nov close 16.93; no exact print) | NGN 1,353.97 NFEM 13 Nov (no newer; parallel 1,435-1,441, BDC 1,440; aggregator 1,390) | GHS 11.71 (13 Nov) | KES 129.96 (CBK 12 Nov) | EGP 54.15 (9 Nov, stale) | STALE: ZMW 20.57 (29 Oct), UGX ~4,205 (22 Oct), XOF/XAF ~587.4, TZS 2,640, ETB ~161 | MAD, AOA, MZN unverified.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'SOUTH AFRICA CPI (18 Nov). Headline 5.2% (Sep 4.5%; consensus 5.2%), m/m 0.7%, core 4.2%, transport 15.2% y/y, fuel +11.8% m/m / 42.9% y/y, goods 5.3%, services 5.0%, food 1.4%, CPI ex-fuel 3.8%. PSG: 5.3-5.4% Nov, 5.1% Dec, 2026 average ~4.3%. SARB MPC 19 Nov: hold at 7.25% expected by most economists; final meeting of 2026.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'NIGERIA CPI (released 16 Nov). Headline 14.06% (Sep 14.63%; Oct 2025 18.97%); m/m 0.43% (Sep 0.06%); food 19.13% y/y, -0.75% m/m; core 10.78% y/y, -0.53% m/m; urban 14.84%, rural 12.17%; new 2024 CPI base. CBN MPC 24 Nov. Opposition Democracy Renewal Pact (single candidate) 23 Nov.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'OIL/DOLLAR. Oil about $92 (Moneyweb/Bloomberg 18 Nov), ample supply; Hormuz attacks and Saudi site strikes continue; dollar posted strongest week since October on hot PPI; Fed hike (possibly 50bp) priced for December; Fed meets 8-9 Dec. Gold and copper not refreshed.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:30:00', signal: 'DANGOTE IPO. SEC approval of basis of allotment targeted 17 Nov, not announced as of 16 Nov; SEC reportedly reviewing retail allocation. Demand N5.85tn (~4m applicants, THEWILL) / N6.4tn (other estimates). Refunds within 5 business days; trading 10-15 business days after allotment (about 27 Nov to 8 Dec). Dangote Cement shelved London listing. Banque du Caire completed the largest Egyptian public offering.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:15:00', signal: 'GHANA/KENYA/EGYPT. Ghana Oct CPI 5.5% (11-month high); BoG decision 18 Nov, result not in sources; Ghana budget plan ~$10bn funded at home. Kenya shilling 129.96 flat three weeks; CPI 7.3%. Egypt: pound recovered from record lows; remittances $13bn Q1; core inflation 13.1%; CBE 17 Dec.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'GHS' },
    { time: '08:00:00', signal: 'NOT REFRESHED THIS CYCLE: gold, copper, Ebola counts (last: Congo government 11,042 cases / 5,387 deaths on 10 Nov), WHO 12 Nov briefing outcome, Kenya contact release, Sudan, Ethiopia, BoG decision, SA unemployment aftermath. Treat related fields as stale.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'SOURCE NOTES: ZAR level approximate (Bloomberg wording). NGN last print 13 Nov. Dangote demand figures vary by source. Nigeria parallel rate varies 1,390-1,441 by source. Scores are computed from editorial component estimates, not indicator data; weights are proposals.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
  ],

  heatMap,

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,353.97', change: '-0.5% w/w (13 Nov)', stress: 'MODERATE', ytd: '+6.4%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.71', change: '-0.4% w/w (13 Nov)', stress: 'MODERATE', ytd: '-10.6%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.96', change: 'flat 3 weeks (12 Nov)', stress: 'LOW', ytd: '—', color: '#00c48c' },
    { code: 'EGP', country: 'Egypt', rate: '54.15', change: 'recovering (9 Nov, stale)', stress: 'ELEVATED', ytd: '-12%', color: '#f5a623' },
    { code: 'ZAR', country: 'South Africa', rate: '17.00', change: '-4.2% since 10 Nov', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '4,205', change: '-6.6% 30d (22 Oct, stale)', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '20.57', change: '-9% 90d (29 Oct, stale)', stress: 'ELEVATED', ytd: '—', color: '#f5a623' },
    { code: 'XOF', country: 'WAEMU', rate: '587.40', change: 'EUR peg', stress: 'LOW', ytd: '—', color: '#00c48c' },
  ],

  elections: [
    { country: 'South Africa', flag: '🇿🇦', date: '19 Nov SARB MPC — Hold Expected', type: 'Central Bank / Coalitions', risk: 'MEDIUM', note: 'CPI 5.2%, rand past 17. ANC 30.76% in local elections; metro coalition talks. AGOA removal announced.', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', date: '23 Nov Opposition Pact — 24 Nov CBN MPC', type: 'Politics / Central Bank', risk: 'MEDIUM', note: 'Inflation 14.06%. Naira 1,353.97, parallel 1,435-1,441. Dangote allotment pending.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: '18 Nov BoG Decision', type: 'Central Bank', risk: 'LOW', note: 'Inflation 5.5%, 11-month high. Cedi 11.71.', color: '#00c48c' },
    { country: 'United States', flag: '🇺🇸', date: 'Fed 8-9 Dec — Hike Priced', type: 'Central Bank', risk: 'HIGH', note: 'Possible 50bp. Dollar strong.', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', date: 'CBE 17 Dec', type: 'Central Bank', risk: 'LOW', note: 'Pound recovered; Banque du Caire IPO done; S&P expects a hold.', color: '#00c48c' },
    { country: 'Ebola Response', flag: '🦠', date: 'Status Not Refreshed', type: 'Public Health', risk: 'CRITICAL', note: 'Last: Congo govt 11,042 cases / 5,387 deaths (10 Nov).', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Status Not Refreshed', type: 'Conflict', risk: 'CRITICAL', note: 'Last: drone strikes 25+ civilians 29-30 Oct.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.6bn', instrument: 'Dangote Refinery IPO', maturity: 'SEC APPROVAL PENDING — DEBUT ~27 NOV TO 8 DEC', risk: 'LOW', color: '#00c48c' },
    { country: 'Egypt', flag: '🇪🇬', amount: 'Banque du Caire IPO', instrument: 'Equity Offering', maturity: 'LARGEST EGYPTIAN PUBLIC OFFERING COMPLETED', risk: 'LOW', color: '#00c48c' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$5.3bn', instrument: 'Saudi Deposits At CBE (maturing in October)', maturity: 'ROLLOVER STATUS NOT CONFIRMED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Conflict', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'NEW BOND 7.25%', instrument: 'Government Bond', maturity: 'US WANTS DEBT RESTRUCTURING WITHIN A YEAR', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q4 2026 — BRENT ~$92 VS $78 EST. BREAKEVEN', risk: 'LOW', color: '#00c48c' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring + $255m Lobito AfDB', instrument: 'Bilateral + Eurobond + AfDB', maturity: 'ZMW ~20.6 (29 OCT, STALE)', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: 'NEW 4-YEAR BOND GH¢4.46bn', instrument: 'Government Bond', maturity: 'GHS 11.71 — CPI 5.5% — $10BN BUDGET PLAN', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '~$92 Brent', fiscalBreakeven: '$92/bbl (est.)', breakevenNote: 'AT EST. BREAKEVEN — BONNY LIGHT $96.93 (WK TO 13 NOV)', trend: '↓', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '~$92 Brent', fiscalBreakeven: '$78/bbl (est.)', breakevenNote: 'ABOVE EST. BREAKEVEN +$14', trend: '↓', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,800/oz (est.)', breakevenNote: 'GOLD PRICE STALE', trend: '→', risk: 'MEDIUM' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '~$12,950/t (26 Oct, stale)', fiscalBreakeven: '$5.50/lb (est.)', breakevenNote: 'COPPER NOT RE-CHECKED SINCE 26 OCT', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,600/oz (est.)', breakevenNote: 'FUEL INFLATION 42.9% — RAND PAST 17', trend: '↓', risk: 'MEDIUM' },
    { country: 'DRC', flag: '🇨🇩', primary: 'Cobalt/Copper/Gold', exposure: 'VERY HIGH', gdpShare: '35%', revenueShare: '70%', price2026: 'Cobalt not re-checked', fiscalBreakeven: 'N/A', breakevenNote: 'EBOLA STATUS NOT REFRESHED (LAST 5,387 DEAD, 10 NOV)', trend: '↓', risk: 'CRITICAL' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Gas/Suez/Tourism', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '35%', price2026: 'EGP 54.15 (9 Nov)', fiscalBreakeven: 'N/A', breakevenNote: 'REMITTANCES $13BN Q1 — POUND RECOVERING', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'STATUS NOT REFRESHED THIS CYCLE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA LAST 5,387 DEAD (10 NOV) — NOT REFRESHED', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 550, delta: '+98', bond: '-5.4pts', fx: '-0.9%', signal: 'STATUS NOT REFRESHED — DRONE WAR', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 190, delta: '+23', bond: '-0.4pts', fx: '-4.2%', signal: 'CPI 5.2% — RAND PAST 17 — SARB 19 NOV', color: '#f5a623' },
    { country: 'NIGERIA', cds: 350, delta: '+20', bond: '-1.0pts', fx: '-0.5%', signal: 'CPI 14.06% — NAIRA 1,353.97 — DANGOTE PENDING', color: '#f5a623' },
    { country: 'KENYA', cds: 205, delta: '+35', bond: '-1.9pts', fx: '0.0%', signal: 'SHILLING FLAT 129.96 — CPI 7.3%', color: '#f5a623' },
    { country: 'EGYPT', cds: 0, delta: 'N/A', bond: 'N/A', fx: '+3%', signal: 'POUND RECOVERING — BANQUE DU CAIRE IPO DONE', color: '#f5a623' },
    { country: 'GHANA', cds: 176, delta: '-64', bond: '+5.2pts', fx: '-0.4%', signal: 'CPI 5.5% — BOG TODAY — CEDI 11.71', color: '#f5a623' },
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
    { date: 'Nov 18', NGN: 1353.97, GHS: 11.71, KES: 129.96, EGP: 54.15, ZAR: 17.00, UGX: 4205.00, ZMW: 20.57, XOF: 587.40 },
  ],
}
