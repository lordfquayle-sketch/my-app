export const content = {
  riskIndex: '98',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 4, 2026 09:00 UTC',
    overallScore: 98,
    trend: 'WORSENING',
    drivers: ['US Slashes Africa Visa Processing Centres 50→20 — Structural US-Africa Rupture', 'SA Household Debt Crisis — R237bn Overdue, 41% Credit-Active in Default — SARB Hikes', 'Ebola 321 Confirmed Cases — Fortress Strategy Will Fail Per WHO — 4 Days to IMF Senegal', 'AfDB Governors Endorse Accelerated Reform of Africa Financial Architecture'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 95, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'HOUSEHOLD DEBT CRISIS CONFIRMED. Eighty20 Q1 2026: overdue debt R237bn (+5.6% QoQ), 35.5% of loans in arrears, 41% of credit-active consumers in default on at least one loan. GDP growth 1.6%, unemployment 32.7%. SARB hiked rates 25bps — warns three further hikes possible. Q2 bringing oil above $100/bbl and two of SA\'s largest ever fuel hikes. June 30 xenophobia deadline 26 days. Mozambican repatriation ongoing. Impeachment panel sitting. June is shaping as the worst month for SA household finances in a decade.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Africa (US Policy)', flag: '🌍', alert: 'US slashes Africa visa processing centres from ~50 to 20 — effective in June. 30 embassies/consulates lose full visa processing capability. Citizens in non-hub countries must travel to one of 20 approved sites — formidable travel costs and delays. Driven by Trump immigration crackdown + Ebola outbreak disruptions + $15,000 bond requirement already in place. Structural US-Africa engagement rupture. FDI, academic, business and diaspora flows all affected. 20 hubs include Lagos, Nairobi, Accra, Johannesburg, Dakar, Kinshasa.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇴', alert: '4 days to June 8 — IMF visit + €53.75m coupon. $38.75m due June 10. JPMorgan: $9.7bn obligations this year. Senegal paid March bonds ahead of deadline — track record intact. But Sonko blocks Faye government, Pastef 130/165 seats, no IMF re-engagement path. Bonds at record distress. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'CDC June 1: 321 confirmed Ebola cases in DRC. WHO warns "fortress strategy will fail — lessons from the past." Bundibugyo — no vaccine, no treatment. Ituri, Nord-Kivu, Sud-Kivu, Kampala active. US paused all visa services at embassies in hardest-hit countries — appointments cancelled. Global travel architecture around Africa tightening.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election war window live — 7 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion in violation of Pretoria Agreement. US Ambassador: Ethiopian Airlines now global competitor — soft power signal. Post-election war risk on Tigray explicit in all major analyst assessments. Horn of Africa most dangerous window since 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'US SLASHES AFRICA VISA CENTRES 50→20 — SA 41% OF BORROWERS IN DEFAULT — EBOLA FORTRESS STRATEGY WILL FAIL — JUNE 4 DEFINES THE NEW US-AFRICA ARCHITECTURE',
    body: 'June 4 delivers the structural signal that will define US-Africa relations for the decade. The Trump State Department is slashing African visa processing centres from nearly 50 to just 20 — effective in June. Citizens in 30 countries will have to travel to an approved hub to access US visa services, at formidable cost and delay. The move combines the immigration crackdown, the Ebola outbreak disruptions, and the existing $15,000 bond requirement into a single structural US-Africa disengagement signal. Simultaneously, South Africa\'s Eighty20 Q1 2026 Credit Stress Report — released yesterday — confirms the household debt crisis is accelerating: R237bn overdue, 35.5% of loans in arrears, 41% of credit-active consumers in default, SARB hiking rates with three more possible, and Q2 bringing oil above $100/bbl and two of the largest fuel hikes in history. WHO has warned that an Ebola "fortress strategy will fail" — citing lessons from past outbreaks. The AfDB governors have endorsed accelerated reform of Africa\'s financial architecture — the continent\'s own institutional response to US and Western disengagement. Senegal\'s IMF visit is 4 days away.',
    tag: 'JUNE 4 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 4, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'US SLASHES AFRICA VISA CENTRES 50→20 — STRUCTURAL US-AFRICA DISENGAGEMENT SIGNAL', body: 'Trump State Department cutting African visa processing from ~50 to 20 hubs effective June. Internal AP memo confirms: 30 embassies/consulates lose full visa processing. Citizens in non-hub countries face formidable travel costs and delays. $15,000 bond requirement already in place. Ebola disruptions already paused services at hardest-hit countries. 20 retained hubs: Lagos, Nairobi, Accra, Johannesburg, Dakar, Kinshasa, Kampala, Kigali, Addis Ababa, Luanda, Monrovia, Lomé, Abidjan, Dar es Salaam, Djibouti, Malabo, Port Louis, Praia, Cape Town, Yaoundé. FDI, academic, business and diaspora flows structurally disrupted.', icon: '🚨' },
    { title: 'SA HOUSEHOLD DEBT CRISIS — R237BN OVERDUE — 41% IN DEFAULT — SARB HIKES RATES', body: 'Eighty20 Q1 2026 Credit Stress Report: R2.7 trillion total outstanding loans (+R41bn QoQ). Overdue debt R237bn (+5.6% QoQ, +14% YoY). 35.5% of loans in arrears. 41% of credit-active consumers in default on at least one loan. Defaulters up 400,000 people. SARB hiked 25bps — warns three further hikes possible. Q2 headwinds: oil above $100/bbl, two of SA\'s largest ever fuel hikes, electricity tariffs +8.76%, inflation climbing to 4%. Report warns: "end of a recent run of positive economic news." June petrol hike R1.50/litre compounds this.', icon: '🔥' },
    { title: 'WHO: EBOLA FORTRESS STRATEGY WILL FAIL — 321 CONFIRMED CASES — LESSONS FROM PAST', body: 'WHO warns against an "Ebola fortress strategy" — citing lessons from past outbreaks where isolation without community engagement failed. Community trust is key. CDC June 1: 321 confirmed cases in DRC. US paused visa services at embassies in hardest-hit countries — all appointments cancelled. Applicants in DRC, Uganda, South Sudan cannot schedule interviews. Bundibugyo strain — no vaccine, no treatment. Ituri, Nord-Kivu, Sud-Kivu, Kampala all active. WHO DG Tedros called for ceasefire for humanitarian access.', icon: '⚠️' },
    { title: 'AFDB GOVERNORS ENDORSE REFORM OF AFRICA FINANCIAL ARCHITECTURE — CONTINENT SELF-RELIANCE PUSH', body: 'AfDB 2026 Annual Meetings in Nairobi: governors endorsed the Four Cardinal Points and called for accelerated reform of Africa\'s financial architecture. AfDB President Adesina: Africa must reduce dependence on external financing systems that are being deliberately withdrawn. India-Africa Business Dialogue closed. MCB $1bn trade finance facility launched. The institutional counter to US disengagement is accelerating — but timelines are measured in years, not months.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE US VISA CENTRE SLASH IS THE MOST CONSEQUENTIAL US-AFRICA POLICY DECISION SINCE AGOA',
    body: 'Cutting Africa visa processing from ~50 to 20 centres is not an administrative efficiency measure — it is a structural signal that the US is withdrawing from African engagement across multiple dimensions simultaneously. Combined with the $15,000 bond requirement, Ebola travel bans, Title 42 entry restrictions, the Kenya Ebola facility controversy, deportee deals with African states, and now the visa centre slash, the pattern is clear: the Trump administration is systematically reducing the US footprint in Africa and raising the cost of African access to the US. The FDI, academic exchange, business travel and diaspora remittance flows that underpin multiple African economies — Ghana, Nigeria, Kenya, Ethiopia above all — will be structurally disrupted. The AfDB governors calling for African financial architecture reform is the institutional acknowledgement that this disengagement is permanent, not cyclical.',
    conclusion: 'THE US VISA CENTRE SLASH COMPLETES A STRUCTURAL US-AFRICA DISENGAGEMENT PATTERN THAT HAS BEEN BUILDING SINCE JANUARY 2025. THE CONTINENT MUST NOW PRICE THE ABSENCE OF THE US AS A RELIABLE PARTNER INTO SOVEREIGN RISK MODELS.',
  },

  insight2: {
    title: 'SOUTH AFRICA\'S HOUSEHOLD DEBT CRISIS IS THE FISCAL FLOOR THAT MAKES JUNE 30 INEVITABLE',
    body: 'The Eighty20 Q1 2026 report reveals the structural economic reality underneath the June 30 political crisis: 41% of credit-active South Africans are already in default. Overdue debt is up 14% year-on-year. SARB is hiking rates with three more possible. And Q2 brings oil above $100/bbl, the largest fuel hikes in history, and electricity tariffs up 8.76%. The March and March and ATDF-ASA movements are not simply political — they are economic desperation movements. The xenophobia narrative is the political expression of household financial collapse. Ruto\'s Kenya and Ramaphosa\'s South Africa are both managing political crises that have household debt and fuel costs as their structural economic driver. The June 30 countdown is not separable from the Eighty20 data.',
    conclusion: 'SOUTH AFRICA\'S HOUSEHOLD DEBT CRISIS IS THE STRUCTURAL FLOOR BENEATH THE JUNE 30 POLITICAL RISK. 41% OF BORROWERS IN DEFAULT IS NOT A POLITICAL PROBLEM — IT IS A MACRO PROBLEM THAT WILL OUTLAST ANY SINGLE DEADLINE.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23 CLOSE: US SLASHES AFRICA VISA CENTRES, SA HOUSEHOLD DEBT CRISIS, EBOLA FORTRESS WARNING, AFDB REFORM CALL',
    body: 'Week 23 closes with four structural signals that define the new Africa macro environment. The US is cutting African visa processing centres from ~50 to 20 — a structural US-Africa disengagement completing a pattern of withdrawals that includes travel bans, bond requirements, Ebola restrictions and deportee deals. South Africa\'s Eighty20 Q1 2026 report confirms the household debt crisis: R237bn overdue, 41% of borrowers in default, SARB hiking with more to come. WHO warns the Ebola fortress strategy will fail — 321 confirmed cases, no vaccine. The AfDB governors have endorsed accelerated reform of Africa\'s financial architecture — the institutional response to Western withdrawal. Senegal\'s IMF visit is 4 days away. Ethiopia\'s post-election war window is live with 7 days to results. South Africa has 26 days to June 30. Ghana\'s GHS has reversed sharply — 11.75 from 10.70. The macro environment entering the second week of June is the most dangerous in Africa this decade.',
  },

  fxRates: {
    NGN: '1,364.68',
    GHS: '11.75',
    KES: '129.53',
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
    { time: '09:30:00', signal: 'US cuts Africa visa processing centres ~50→20 effective June. AP memo: 20 retained hubs — Lagos, Nairobi, Accra, Joburg, Dakar, Kinshasa, Kampala, Kigali, Addis, Luanda, Monrovia, Lomé, Abidjan, Dar es Salaam, Djibouti, Malabo, Port Louis, Praia, Cape Town, Yaoundé. Citizens in 30 non-hub countries face formidable travel costs for US visa.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '09:15:00', signal: 'SA Eighty20 Q1 2026: overdue debt R237bn (+5.6% QoQ, +14% YoY). 35.5% of loans in arrears. 41% of credit-active consumers in default on at least one loan. Defaulters up 400,000. SARB hiked 25bps — warns 3 more possible. Q2: oil above $100/bbl, two largest fuel hikes in history, electricity +8.76%.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'WHO: "Ebola fortress strategy will fail — lessons from the past." Community trust key to containment. CDC June 1: 321 confirmed cases DRC. US paused visa services at hardest-hit country embassies — all appointments cancelled. Bundibugyo — no vaccine, no treatment. Ituri, Nord-Kivu, Sud-Kivu, Kampala active.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Senegal: 4 days to June 8 IMF visit + €53.75m coupon. $38.75m June 10. JPMorgan $9.7bn obligations this year. March payment made ahead of deadline — track record intact. Sonko blocks Faye government. No IMF re-engagement path. Bonds at 50.6c. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'AfDB Annual Meetings Nairobi: governors endorse Four Cardinal Points — accelerated reform of Africa financial architecture. Adesina: Africa must reduce external financing dependence. MCB $1bn trade finance facility launched. Institutional counter to US disengagement — measured in years not months.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Ethiopia: Post-election war window — 7 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion. US Ambassador: Ethiopian Airlines now global competitor — soft power signal amid hard security risk. Post-election TPLF operations expected per all major analysts.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'SA June 30: 26 days. Repatriation of Mozambican nationals ongoing. Petrol hike now live — R1.50/litre levy increase. Household debt crisis confirmed by Eighty20. SARB hiking. June 30 movement is economic desperation + political organisation combined. GNU under maximum compound stress.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX June 4: NGN 1,364.68 | GHS 11.75 (reversed from 10.70) | KES 129.53 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. GHS reversal holds. NGN stable. KES slightly up. ZAR holding despite compound SA political and household stress. Dollar weakness structural support.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 44, fiscal: 38, fx: 50, debt: 40, political: 34, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 99, fiscal: 78, fx: 46, debt: 72, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,364.68', change: '-13.34%', stress: 'MODERATE', ytd: '-3.50%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.75', change: '+9.81%', stress: 'MODERATE', ytd: '+6.53%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war window LIVE — 7 days. Ethiopian Airlines named global competitor. All analysts: TPLF operations expected post-election.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. ECOWAS monitoring. Doumbouya allies expected to sweep. Democratic legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 26 days. Household debt crisis confirmed. Petrol hike live. 41% borrowers in default. SARB hiking. Two movements. GNU coherence failing.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. Civilian crisis unaddressed. State police bill pending. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. 2 dead in Ebola protests. US-Kenya strained. US visa centres slashed — 20 hubs. Eurobond Q2 rollover. Five simultaneous crises.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 4 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: '$9.7BN WALL — IMF 4 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+3.5%', signal: '41% BORROWERS DEFAULT — JUNE 30 26D', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'FINANCE BILL + US VISA SLASH', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW 7 DAYS', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+6.5%', signal: 'GHS REVERSAL — MONITOR', color: '#f5a623' },
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
  ],
}
