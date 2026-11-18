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
  { country: 'South Africa', flag: '🇿🇦', fiscal: 44, fx: 50, debt: 52, political: 82, external: 66 },
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
    updated: 'November 16, 2026 09:00 UTC (ZAR, NGN, GHS, KES = Nov 12-13; EGP = Nov 9; ZMW, UGX, XOF carried; oil, gold, Ebola NOT refreshed since Nov 12)',
    overallScore: riskIndexValue,
    trend: 'WORSENING',
    drivers: ['Dollar At 19-Month High, US Producer Prices Biggest Annual Gain In Four Years, Fed Hike (Possibly 50bp) Priced For December — Rand Hits Seven-Month Low 16.93', 'Nigeria October CPI Due Today (Sept 14.63%, Forecasts 13.6-14.0%) — Naira 1,353.97, Parallel 1,435-1,441, Reserves $54.87bn', 'SA CPI Wednesday (BER 5.1%), SARB Thursday (Hold Expected) — Coalition Noise After ANC 30.76% — Ghana CPI 5.5%, BoG Decision 18 Nov', 'Dangote Allotment Approval 17 Nov, Announcement 18 Nov — CBN MPC 24 Nov — Egypt Pound Recovered, CBE 17 Dec'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 78, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 78, trend: '↑', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'RAND AT SEVEN-MONTH LOW 16.93; CPI WEDNESDAY, SARB THURSDAY. The rand fell about 3.7% in a week, from about 16.35 on 10 Nov (before US CPI) to 16.975 intraday on 13 Nov, its weakest since April; Trading Economics shows 16.93 and local reports a close near 16.92. Drivers: the dollar at a 19-month high, US producer prices posting the largest annual gain in four years and a possible 50bp Fed hike in December; CHS Capital calls the rand a liquid proxy for emerging-market selling. Domestic noise adds to it: post-election coalition talks and concern about the government of national unity. October CPI is due Wednesday 18 Nov (BER forecast 5.1% versus 4.5% in September) and the SARB decides Thursday 19 Nov (BER expects a hold after the 25bp September hike to 7.25%). September mining output was expected to contract again after -12.7% y/y in August. Q3 unemployment was 33.7%.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'OCTOBER CPI DUE TODAY; NAIRA 1,353.97; PARALLEL SPREAD ABOUT 6%. NBS publishes October inflation today (September 14.63%, food 19.59%); forecasts are 13.59% (Cowry-style survey cited by dmarketforces) and 13.99% (BusinessDay model), though market surveys showed food prices jumping in October. The naira fell N10.50 on Wednesday to 1,364, its sharpest daily fall since 22 Oct, then recovered to close Friday at 1,353.50; the NFEM average was 1,353.97 (-0.53% w/w from 1,346.79). Parallel quotes: 1,435-1,441 (Aboki, Proshare BDC 1,440; spread 6.35%), one report 1,408, and an aggregator 1,390, so verify the source. Gross reserves fell to $54.87bn (12 Nov) from $55.06bn; Bonny Light $96.93. Seasonal import demand and corporate FX payments are rising. CBN meets 24 Nov; Dangote IPO allotment approval 17 Nov and announcement 18 Nov, NGX listing about 8 Dec.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', alert: 'INFLATION 5.5%, HIGHEST IN 11 MONTHS; BOG DECIDES 18 NOV. October inflation rose to 5.5%. The cedi was GH¢11.70-11.72 on the interbank market on Friday versus 11.67 a week earlier (about -0.4%); forex bureaus sold at 12.35. The Bank of Ghana decides on Wednesday 18 Nov. Gold Board dollar sales continued earlier this month ($1.011bn reported by 10 Nov). Gold and oil were not re-checked this cycle.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', alert: 'POUND RECOVERED SHARPLY FROM RECORD LOWS; NO LEVEL AFTER 9 NOV. Reuters-style weekly outlook says the pound recovered sharply from record lows in the week to 13 Nov on stronger liquidity, including diaspora remittances of $13bn in Q1 FY2026/27 and easing inflation (October urban 12.7%, core 13.1%). The last quote I verified was 54.11/54.20 on 9 Nov. The CBE meets 17 Dec; S&P expects a hold.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'SHILLING FLAT AT 129.96 FOR THREE WEEKS. The CBK rate was KSh129.96 on 12 Nov, unchanged for a third straight week; the shilling firmed against the pound (172.72) and euro (144.38). October CPI was 7.3% (highest since July 2023, just under the 7.5% band ceiling). Ebola status (9 cases, 2 deaths as of last check) was not refreshed.', severity: 'LOW', color: '#00c48c' },
  ],

  featuredSignal: {
    title: 'RAND AT SEVEN-MONTH LOW 16.93 ON FED HIKE BETS — NIGERIA CPI TODAY — NAIRA 1,353.97, PARALLEL 1,435-1,441 — GHANA CPI 5.5% — SA CPI WEDNESDAY, SARB THURSDAY',
    body: 'November 16, 2026. A strong dollar (19-month high), the largest annual rise in US producer prices in four years and a possible 50bp Fed hike in December pushed the rand to a seven-month low of 16.93 on 13 Nov, about 3.7% weaker than on 10 Nov. Nigeria publishes October inflation today (September 14.63%; forecasts 13.6-14.0%); the official naira rate is 1,353.97 and the parallel rate 1,435-1,441 with reserves at $54.87bn. Ghana inflation rose to 5.5% and the Bank of Ghana decides on 18 Nov; SA CPI is due 18 Nov and the SARB decides 19 Nov. Verified FX: ZAR 16.93, NGN 1,353.97, GHS 11.71, KES 129.96. Oil, gold and Ebola were not refreshed since 12 Nov. 45 days to 31 Dec.',
    tag: 'NOVEMBER 16 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'November 16, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '350', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '176', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '205', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '188', fxPressure: 'HIGH', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Mixed', status: 'WATCH', statusColor: '#f5a623', cds: 'n/a', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Ethiopia', flag: '🇪🇹', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '550', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'THE DOLLAR LEG IS DRIVING AFRICAN FX', body: 'The dollar rose against every G10 currency except the Swiss franc last week and posted its strongest week since October. Rising odds of a December Fed hike (possibly 50bp) pushed the rand to a seven-month low, the naira and cedi softer, while the Kenyan shilling and Egyptian pound held up. Frontier FX with deeper managed-regime anchors (KES, EGP) moved least this week.', icon: '💵' },
    { title: 'THIS WEEK: FIVE DATED EVENTS', body: 'Mon 16 Nov: Nigeria October CPI. Tue 17 Nov: Dangote IPO allotment approval (proposed). Wed 18 Nov: SA October CPI, Bank of Ghana decision, Dangote allotment announcement. Thu 19 Nov: SARB decision. Then 24 Nov CBN MPC, 8-9 Dec Fed, 17 Dec CBE.', icon: '🗓️' },
    { title: 'NIGERIA: CPI MATTERS FOR THE NOV 24 CBN MEETING', body: 'A print near 13.6-14.0% would be the lowest in this cycle and support the easing path, but food prices and a softer naira are risks. The official-parallel gap of about 6% is the widest in weeks.', icon: '📊' },
    { title: 'SOUTH AFRICA: CPI AND COALITIONS', body: 'The SARB meets as the rand sits near 17 and BER sees October inflation rising to 5.1%, so a hold with hawkish language is the base case. ANC announced its coalition picks (headline) while the DA and ActionSA sparred over metros; the political premium in the rand is a mix of global and local factors.', icon: '🗳️' },
  ],

  insight1: {
    title: 'A TRIPLE US SIGNAL HIT THE RAND: HOT CPI, HOT PPI, HAWKISH FED SPEAK, AND IT FELL 3.7% IN FOUR SESSIONS',
    body: 'Between 10 and 13 Nov the rand went from about 16.35 to 16.975 as US consumer prices surprised on 10 Nov, producer prices posted the biggest annual rise in four years on 13 Nov, and Fed officials hinted at a possibly 50bp December hike. CHS Capital called the rand a liquid proxy for emerging-market selling, meaning it trades as the cheapest EM hedge when risk turns. The move is therefore more about global positioning than South African fundamentals, though the post-election political noise leaves little cushion. The SARB meeting on 19 Nov is a risk event for a different reason: a hold with hawkish language could help, while any dovish signal could add pressure.',
    conclusion: 'THE RAND MOVE IS MOSTLY A GLOBAL RATE-SHOCK RESPONSE. TREAT 17.00 AS THE NEXT LEVEL TO WATCH AND SA CPI ON WEDNESDAY AS THE FIRST LOCAL TEST.',
  },

  insight2: {
    title: 'NIGERIA PARALLEL-MARKET QUOTES RANGE FROM 1,390 TO 1,441 DEPENDING ON THE SOURCE, WHICH IS ITSELF A DATA-QUALITY WARNING',
    body: 'On 14-15 Nov, Aboki Forex quoted 1,435-1,441 and Proshare BDC data showed 1,440 (a 6.35% spread to the official 1,353.97), while a different aggregator quoted 1,380-1,390 and one report had 1,408. The terminal previously showed 1,375-1,390 for weeks; that range appears to have understated the street rate relative to dealer and BDC data in recent days. Use the BDC average (1,440) for spread calculations and show the range with sources. The spread has widened from 6.20% to 6.35% as official-window demand rises on seasonal imports and corporate payments, even as reserves ease to $54.87bn.',
    conclusion: 'REPORT THE PARALLEL RATE AS A RANGE WITH SOURCES. THE BDC AVERAGE (1,440) AND DEALER QUOTES AGREE ON A 6% SPREAD; THE LOWER AGGREGATOR NUMBERS DO NOT.',
  },

  brief: {
    week: '47',
    title: 'MONDAY NOVEMBER 16: RAND SEVEN-MONTH LOW 16.93, NIGERIA CPI TODAY, NAIRA 1,353.97, GHANA CPI 5.5%, SA CPI AND SARB THIS WEEK',
    body: 'The dollar hit a 19-month high and the rand a seven-month low (16.93) as US producer prices posted the largest annual gain in four years and a possible 50bp Fed hike in December moved into pricing. Nigeria publishes October inflation today (September 14.63%; forecasts 13.6-14.0%); the naira is 1,353.97 officially and 1,435-1,441 in the parallel market; reserves are $54.87bn. Ghana inflation 5.5%, BoG decision 18 Nov; cedi 11.71. Kenyan shilling flat at 129.96. Egypt pound recovered sharply (last verified 54.15 on 9 Nov). SA CPI 18 Nov, SARB 19 Nov. Dangote allotment approval 17 Nov and announcement 18 Nov. CBN MPC 24 Nov. Oil, gold and Ebola figures are not refreshed since 12 Nov. 45 days to 31 Dec.',
  },

  fxRates: {
    NGN: '1,353.97',
    GHS: '11.71',
    KES: '129.96',
    EGP: '54.15',
    XOF: '587.40',
    ZAR: '16.93',
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
    { time: '09:30:00', signal: 'FX. ZAR 16.93 (Fri 13 Nov close per Trading Economics; Reuters 16.975 at 1405 GMT, seven-month low; local close ~16.92) | NGN 1,353.97 NFEM Fri 13 Nov (-0.53% w/w; Wed 11 Nov 1,364 after -N10.50; parallel 1,435-1,441 Aboki, BDC 1,440 Proshare; one report 1,408; aggregator 1,390) | GHS 11.70-11.72 interbank (bureaus 12.35) | KES 129.96 (CBK 12 Nov) | EGP 54.15 (9 Nov, stale; reported recovered since) | STALE: ZMW 20.57 (29 Oct), UGX ~4,205 (22 Oct), XOF/XAF ~587.4, TZS 2,640, ETB ~161 | MAD, AOA, MZN unverified.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'US/GLOBAL. Dollar at a 19-month high; US PPI largest annual gain in four years; Fed December hike (possibly 50bp) priced; dollar strongest week since October; Ethereum and crypto sold off on hike odds. US Treasury yields higher. Bonny Light $96.93 (week to 13 Nov, -2.0%). Brent and gold NOT re-checked since 12 Nov.', detail: 'HIGH', type: 'ALERT', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '09:00:00', signal: 'NIGERIA. October CPI due 16 Nov (Sept 14.63%, food 19.59%; forecasts 13.59% / 13.99%). Reserves $54.87bn (12 Nov) from $55.06bn. NGX ASI 252,269 (+62.1% YTD), market cap ~N163.8trn. October T-bill auction cleared 16.99-17.29%. CBN intervened about $2.5bn in October. MPC 24 Nov. Dangote: allotment approval 17 Nov, announcement 18 Nov, listing ~8 Dec.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'SOUTH AFRICA. CPI 18 Nov (BER 5.1% vs 4.5%); SARB 19 Nov (hold expected after Sept hike to 7.25%). Mining output Aug -12.7% y/y; Sept data due. Q3 unemployment 33.7%. Rand 16.93, nearing 17.00 (weakest since April). SA sold R900m inflation-linked bonds at auction 13 Nov. ANC announced coalition picks (headline). AGOA removal announced earlier (effective date unconfirmed).', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '08:30:00', signal: 'GHANA/KENYA/EGYPT. Ghana Oct CPI 5.5% (11-month high); BoG decision 18 Nov; cedi 11.70-11.72. Kenya shilling 129.96 flat three weeks; Oct CPI 7.3%. Egypt: pound recovered sharply from record lows; remittances $13bn in Q1 FY26/27; Oct urban 12.7%, core 13.1%; CBE 17 Dec.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'GHS' },
    { time: '08:15:00', signal: 'NOT REFRESHED THIS CYCLE: Brent and gold (last: Brent about $95 on 12 Nov after $91.49 low on 10 Nov), Ebola (last: Congo government 11,042 cases / 5,387 deaths on 10 Nov; WHO briefing 12 Nov outcome unknown), Kenya contact release, Dangote allotment, Sudan and Ethiopia developments. Treat the commodity and Ebola fields as stale.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:00:00', signal: 'CALENDAR. 16 Nov Nigeria CPI | 17 Nov Dangote approval (proposed) | 18 Nov SA CPI, BoG decision, Dangote announcement | 19 Nov SARB | 24 Nov CBN MPC | 8-9 Dec Fed | 8 Dec Dangote listing (target) | 17 Dec CBE | 31 Dec year-end.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'SOURCE NOTES: Nigeria parallel-rate range is source-dependent (1,390-1,441). Rand levels vary by source (16.92-16.975). Scores are computed from editorial component estimates, not indicator data. Weights are proposals, not confirmed.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
  ],

  heatMap,

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,353.97', change: '-0.5% w/w', stress: 'MODERATE', ytd: '+6.4%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.71', change: '-0.4% w/w', stress: 'MODERATE', ytd: '-10.6%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.96', change: 'flat 3 weeks', stress: 'LOW', ytd: '—', color: '#00c48c' },
    { code: 'EGP', country: 'Egypt', rate: '54.15', change: 'recovering (9 Nov, stale)', stress: 'ELEVATED', ytd: '-12%', color: '#f5a623' },
    { code: 'ZAR', country: 'South Africa', rate: '16.93', change: '-3.7% since 10 Nov', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '4,205', change: '-6.6% 30d (22 Oct, stale)', stress: 'HIGH', ytd: '—', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '20.57', change: '-9% 90d (29 Oct, stale)', stress: 'ELEVATED', ytd: '—', color: '#f5a623' },
    { code: 'XOF', country: 'WAEMU', rate: '587.40', change: 'EUR peg', stress: 'LOW', ytd: '—', color: '#00c48c' },
  ],

  elections: [
    { country: 'Nigeria', flag: '🇳🇬', date: '16 Nov CPI — 17-18 Nov Dangote — 24 Nov CBN MPC', type: 'Macro / Capital Markets', risk: 'MEDIUM', note: 'Naira 1,353.97, parallel 1,435-1,441. Reserves $54.87bn.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: '18 Nov CPI — 19 Nov SARB', type: 'Macro / Coalitions', risk: 'MEDIUM', note: 'Rand 16.93, seven-month low. Hold expected. Coalition talks after ANC 30.76%.', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', date: '18 Nov BoG Decision', type: 'Central Bank', risk: 'LOW', note: 'Inflation 5.5%, 11-month high. Cedi 11.71.', color: '#00c48c' },
    { country: 'United States', flag: '🇺🇸', date: 'Fed 8-9 Dec — Hike Priced', type: 'Central Bank', risk: 'HIGH', note: 'Possible 50bp. Dollar at 19-month high.', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', date: 'CBE 17 Dec', type: 'Central Bank', risk: 'LOW', note: 'Pound recovered; remittances $13bn Q1. S&P expects a hold.', color: '#00c48c' },
    { country: 'Ebola Response', flag: '🦠', date: 'Status Not Refreshed', type: 'Public Health', risk: 'CRITICAL', note: 'Last: Congo govt 11,042 cases / 5,387 deaths (10 Nov).', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Status Not Refreshed', type: 'Conflict', risk: 'CRITICAL', note: 'Last: drone strikes 25+ civilians 29-30 Oct.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.6bn', instrument: 'Dangote Refinery IPO', maturity: 'APPROVAL 17 NOV — ANNOUNCEMENT 18 NOV — LISTING ~8 DEC', risk: 'LOW', color: '#00c48c' },
    { country: 'South Africa', flag: '🇿🇦', amount: 'R900m', instrument: 'Inflation-Linked Bond Auction (13 Nov)', maturity: 'SOLD 13 NOV — RAND 16.93 — SARB 19 NOV', risk: 'LOW', color: '#00c48c' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$5.3bn', instrument: 'Saudi Deposits At CBE (maturing in October)', maturity: 'ROLLOVER STATUS NOT CONFIRMED — POUND RECOVERED', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Conflict', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'NEW BOND 7.25%', instrument: 'Government Bond', maturity: 'US WANTS DEBT RESTRUCTURING WITHIN A YEAR', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q4 2026 — BRENT NOT RE-CHECKED', risk: 'LOW', color: '#00c48c' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring + $255m Lobito AfDB', instrument: 'Bilateral + Eurobond + AfDB', maturity: 'ZMW ~20.6 (29 OCT, STALE)', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: 'NEW 4-YEAR BOND GH¢4.46bn', instrument: 'Government Bond', maturity: 'GHS 11.71 — CPI 5.5% — BOG 18 NOV', risk: 'MEDIUM', color: '#f5a623' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: 'Bonny Light $96.93 (wk to 13 Nov)', fiscalBreakeven: '$92/bbl (est.)', breakevenNote: 'BONNY LIGHT ABOVE EST. BREAKEVEN — BRENT NOT RE-CHECKED', trend: '↔️', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: 'Brent ~$95 (12 Nov, stale)', fiscalBreakeven: '$78/bbl (est.)', breakevenNote: 'ABOVE EST. BREAKEVEN — STALE PRICE', trend: '↔️', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,800/oz (est.)', breakevenNote: 'GOLD PRICE STALE', trend: '→', risk: 'MEDIUM' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '~$12,950/t (26 Oct, stale)', fiscalBreakeven: '$5.50/lb (est.)', breakevenNote: 'COPPER NOT RE-CHECKED SINCE 26 OCT', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: 'Gold not re-checked', fiscalBreakeven: '$1,600/oz (est.)', breakevenNote: 'MINING OUTPUT FALLING — RAND 16.93', trend: '↓', risk: 'MEDIUM' },
    { country: 'DRC', flag: '🇨🇩', primary: 'Cobalt/Copper/Gold', exposure: 'VERY HIGH', gdpShare: '35%', revenueShare: '70%', price2026: 'Cobalt not re-checked', fiscalBreakeven: 'N/A', breakevenNote: 'EBOLA STATUS NOT REFRESHED (LAST 5,387 DEAD, 10 NOV)', trend: '↓', risk: 'CRITICAL' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Gas/Suez/Tourism', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '35%', price2026: 'EGP 54.15 (9 Nov)', fiscalBreakeven: 'N/A', breakevenNote: 'REMITTANCES $13BN Q1 — POUND RECOVERING', trend: '↑', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'STATUS NOT REFRESHED THIS CYCLE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA LAST 5,387 DEAD (10 NOV) — NOT REFRESHED', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 550, delta: '+98', bond: '-5.4pts', fx: '-0.9%', signal: 'STATUS NOT REFRESHED — DRONE WAR', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 188, delta: '+21', bond: '-0.2pts', fx: '-3.7%', signal: 'RAND 16.93 SEVEN-MONTH LOW — CPI 18 NOV — SARB 19 NOV', color: '#f5a623' },
    { country: 'NIGERIA', cds: 350, delta: '+20', bond: '-1.0pts', fx: '-0.5%', signal: 'CPI TODAY — NAIRA 1,353.97 — RESERVES $54.87BN', color: '#f5a623' },
    { country: 'KENYA', cds: 205, delta: '+35', bond: '-1.9pts', fx: '0.0%', signal: 'SHILLING FLAT 129.96 — CPI 7.3%', color: '#f5a623' },
    { country: 'EGYPT', cds: 0, delta: 'N/A', bond: 'N/A', fx: '+3%', signal: 'POUND RECOVERING — REMITTANCES $13BN', color: '#f5a623' },
    { country: 'GHANA', cds: 176, delta: '-64', bond: '+5.2pts', fx: '-0.4%', signal: 'CPI 5.5% — BOG 18 NOV — CEDI 11.71', color: '#f5a623' },
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
  ],
}
