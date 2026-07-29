export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 29, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['Nigeria-SA Diplomatic De-Escalation — Abuja Talks — Pretoria Pledges Prosecutions, Abuja Compiles Compensation', 'US Overhauls Visa Processing Across Africa — Applicants In 24+ Countries Must Travel To Regional Centres', 'Brent Oil Drops To $83 — Gold Eases To $4,037 — Commodity Price Adjustment Underway', 'World Summit Opens Addis Ababa July 29-30 — World Assembly Of Peoples — Ethiopia Platform Moment'],
    regions: [
      { region: 'East Africa', score: 88, trend: '↓', color: '#f5a623' },
      { region: 'West Africa', score: 78, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '↓', color: '#f5a623' },
      { region: 'Southern Africa', score: 78, trend: '↓', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa/Nigeria', flag: '🇿🇦', alert: 'DIPLOMATIC DE-ESCALATION. Nigeria and South Africa have agreed to de-escalate bilateral tensions following Abuja talks. Pretoria pledged to prosecute those responsible for attacks on foreign nationals and reiterated its opposition to xenophobia, racism and discrimination. Abuja is compiling compensation claims for Nigerians who fled or lost assets — formalising what was previously a diplomatic demand into a structured claims process. SA says attacks are not state-sponsored. This is the most significant diplomatic development in the Nigeria-SA crisis since the escalation began in June. The AU multilateral track (Nigeria and Ghana pushing AU), ICC petition, and December 31 year-end ultimatum all continue in parallel — but the bilateral track has now formally de-escalated.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'United States/Africa', flag: '🌍', alert: 'US OVERHAULS VISA PROCESSING ACROSS AFRICA. Sweeping changes requiring visa applicants in more than two dozen African countries to travel to regional centres for routine US visa interviews — consolidating processing away from individual country embassies. This is a significant structural change affecting travel, business, and people-to-people ties between the US and Africa at exactly the moment US-Africa relations are strained by: DRC travel restrictions (Ebola), Nigeria-SA tensions, Somalia AUSSOM funding ended, PEPFAR cuts, and the Nigeria foreign aid bill passed by the US House. The regional centre model reduces embassy capacity per country.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola DRC remains the fastest-growing outbreak on record — 47 health zones, five provinces. 1,000+ deaths. No approved vaccine for Bundibugyo strain. No approved treatment. Contact tracing below 90%. Uganda 42-day countdown ongoing — last confirmed case June 21, target clear date late August. Marburg: Uganda isolated Kyegegwa case (1.5-year-old died, no new contacts symptomatic). DRC-Rwanda border reopened with enhanced Ebola screening. White House $1.4bn Congress ask outstanding.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Morocco/AfDB', flag: '🇲🇦', alert: 'AfDB approved €205m ($234m) loan to extend Morocco\'s high-speed rail network along one of the country\'s busiest transport corridors. AfDB President Adesina: "rare bright spot amid regional turmoil." Morocco is preparing to co-host the 2030 FIFA World Cup (with Spain and Portugal) and is investing $20bn in infrastructure and tourism. Morocco-France strategic partnership deepened during Macron visit to Rabat. Nigeria-Morocco Atlantic Gas Pipeline formally approved. Morocco is emerging as Africa\'s most consequential infrastructure story of 2026.', severity: 'LOW', color: '#00c48c' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Kenya growth forecast lowered to 4.3% for 2026 — reflecting fiscal consolidation and economic drag from Gen-Z protests. The Finance Bill 2026 is now law (signed June 23) but its implementation faces ongoing political resistance. Finance Bill 2026 dragged investment sentiment. 431 Kenyans in SA deportees. Court 120-day gender cabinet order running. US-Kenya disease surveillance pact operational. KES at 129.04.', severity: 'MEDIUM', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'NIGERIA-SA DE-ESCALATION — ABUJA TALKS — PROSECUTIONS PLEDGED — COMPENSATION CLAIMS FORMALISED — US OVERHAULS AFRICA VISA PROCESSING — BRENT $83 GOLD $4,037',
    body: 'July 29 delivers the most positive diplomatic development in the Nigeria-SA crisis since escalation began in June: after talks in Abuja, Nigeria and South Africa have agreed to de-escalate, with Pretoria pledging to prosecute those responsible for attacks on foreign nationals and Abuja formalising its compensation claims process. SA reiterated that attacks are not state-sponsored and restated its opposition to xenophobia and discrimination. This de-escalation arrives alongside a significant US structural change: Washington is overhauling visa processing across more than two dozen African countries, requiring applicants to travel to regional centres — a consolidation that will affect travel, business and people-to-people ties. Commodity markets are adjusting: Brent fell to $83.38 (down 5.64%), WTI to $78.43, and gold eased to $4,037 from the $4,088 all-time high. The AfDB approved €205m for Morocco\'s high-speed rail. Kenya\'s growth was revised down to 4.3%. A World Summit opens in Addis Ababa today — the World Assembly of Peoples convening July 29-30. Zambia\'s election is 15 days away.',
    tag: 'JULY 29 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'July 29, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
  ],

  whatMattersNow: [
    { title: 'NIGERIA-SA DE-ESCALATION — ABUJA TALKS — PROSECUTIONS PLEDGED — COMPENSATION FORMALISED', body: 'After talks in Abuja, Nigeria and South Africa have agreed to de-escalate bilateral tensions. Pretoria pledged to prosecute those responsible for attacks on foreign nationals, reiterated its opposition to xenophobia and discrimination, and acknowledged Nigerian concerns about the treatment of its citizens. Abuja is now compiling a structured set of compensation claims for Nigerians who fled or lost assets — converting the diplomatic demand into a formal legal process. SA stated attacks are not state-sponsored. This is the most significant bilateral de-escalation since the crisis began with the June 12 deportations and the 5-year re-entry ban. The AU multilateral track, ICC petition and December 31 ultimatum all continue — but the most dangerous bilateral flashpoint has been formally defused.', icon: '✅' },
    { title: 'US OVERHAULS AFRICA VISA PROCESSING — 24+ COUNTRIES AFFECTED — REGIONAL CENTRE MODEL', body: 'The United States is making sweeping changes to visa processing across more than two dozen African countries — requiring applicants to travel to regional centres for routine interview appointments, rather than attending their local US embassy or consulate. This consolidation reduces per-country interview capacity and increases the burden on applicants who must now travel, sometimes across borders, for routine processing. It arrives at a moment of acute US-Africa friction: DRC travel restrictions (Ebola), PEPFAR cuts to South Africa, Somalia AUSSOM funding ended, Nigeria foreign aid bill passed by US House, and now a wholesale restructuring of the visa processing architecture that affects the continent\'s ability to send students, workers and tourists to the United States.', icon: '🔴' },
    { title: 'BRENT $83 GOLD $4,037 — COMMODITY ADJUSTMENT AFTER LAST WEEK\'S HIGHS', body: 'Brent crude fell to $83.38 (down 5.64%), WTI to $78.43 (down 5.06%), while Gold eased to $4,037 (down 0.92%) from the all-time high of $4,088. [The Rio Times](https://www.riotimesonline.com/africa-intelligence-brief-tuesday-july-28-2026/?claude-citation-92607552-70b8-4a04-b0a3-daf60ecbc792=70337d27-a79e-4024-9d1f-84a4aaf4d3ca) Cocoa held at $5,189. The commodity adjustment is significant for: Nigeria and Angola (oil near breakeven at $83-$88 vs $78-$92 fiscal breakevens), South Africa and Ghana (gold at $4,037 still provides enormous fiscal buffer vs $1,600-$1,800 breakeven). The Brent decline partially restores the petrol price relief South African consumers received on July 1 — the R2.01/litre cut was based on mid-$70s oil, $83 Brent is slightly above the threshold for that relief.', icon: '📊' },
    { title: 'AFDB €205M MOROCCO HIGH-SPEED RAIL — MOROCCO $20BN 2030 WORLD CUP INVESTMENT', body: 'The African Development Bank announced approval of a €205m loan to extend Morocco\'s high-speed rail network along one of the country\'s busiest transport corridors. [The Rio Times](https://www.riotimesonline.com/africa-intelligence-brief-tuesday-july-28-2026/?claude-citation-92607552-70b8-4a04-b0a3-daf60ecbc792=356eab11-3925-42a5-8f5e-248319fb1987) Morocco is investing $20bn in infrastructure and tourism ahead of co-hosting the 2030 FIFA World Cup with Spain and Portugal. Morocco-France strategic partnership deepened. Nigeria-Morocco Gas Pipeline approved. AfDB President Adesina called the rail project "a rare bright spot amid regional turmoil." Morocco is the continent\'s most consequential infrastructure story of 2026 — combining Gulf investment, European partnerships, African Union leadership, and 2030 World Cup hosting.', icon: '🚄' },
  ],

  insight1: {
    title: 'THE NIGERIA-SA DE-ESCALATION IS GENUINE BUT FRAGILE — THE STRUCTURAL CONDITIONS THAT PRODUCED THE CRISIS REMAIN ENTIRELY UNRESOLVED',
    body: 'The Abuja talks producing a commitment to prosecute attackers and formalise compensation claims is a genuine diplomatic achievement. It removes the most dangerous bilateral escalation vector — Nigeria\'s ECOWAS/AU mechanism threat — from the immediate agenda. But the structural conditions are unchanged: 53,499 people deported in four weeks, two Nigerian citizens killed (one allegedly by Tshwane Metro Police), March and March is still conducting weekly Thursday marches, the December 31 year-end ultimatum for workplace quotas and mass deportations is still in effect, and the movement\'s leader Ngobese-Zuma was shot on July 16. The prosecutions Pretoria pledged will face a justice system that historically under-prosecutes xenophobic violence. The compensation claims Abuja is compiling face a bilateral process with no established framework or precedent. De-escalation on the bilateral diplomatic track does not resolve the domestic political crisis that will run until December 31 and beyond.',
    conclusion: 'THE NIGERIA-SA DE-ESCALATION IS A GENUINE BILATERAL ACHIEVEMENT THAT REMOVES THE ECOWAS/AU MECHANISM THREAT FROM THE IMMEDIATE AGENDA. BUT THE STRUCTURAL CONDITIONS — WEEKLY MARCHES, DECEMBER 31 ULTIMATUM, PEPFAR SEPTEMBER, IMPEACHMENT PANEL — ARE ENTIRELY UNCHANGED. THE CRISIS HAS DE-ESCALATED DIPLOMATICALLY WHILE REMAINING POLITICALLY UNRESOLVED.',
  },

  insight2: {
    title: 'THE US AFRICA VISA RESTRUCTURING IS THE MOST CONSEQUENTIAL US-AFRICA RELATIONS CHANGE SINCE AGOA',
    body: 'Requiring visa applicants from more than two dozen African countries to travel to regional centres is not an administrative change — it is a structural reduction in America\'s accessibility as a destination for African citizens. Combined with DRC travel restrictions (Ebola), PEPFAR cuts to South Africa, Somalia AUSSOM funding ended, the Nigeria foreign aid bill, and the broader USAID restructuring, the visa change is part of a pattern of US withdrawal from its previous Africa engagement architecture. The students who cannot afford to travel to a regional centre for an interview will not come to American universities. The business travellers who face uncertain processing timelines will redirect to European or Gulf partners. The soft power cost of America\'s Africa disengagement is being paid in the currency of people-to-people relationships — the hardest to rebuild once broken.',
    conclusion: 'THE US AFRICA VISA RESTRUCTURING IS NOT AN ADMINISTRATIVE CHANGE — IT IS A STRUCTURAL REDUCTION IN US ACCESSIBILITY AT THE EXACT MOMENT AFRICA NEEDS CONTINUED INTERNATIONAL ENGAGEMENT. COMBINED WITH PEPFAR CUTS, AUSSOM FUNDING END AND USAID RESTRUCTURING, IT CONFIRMS A SYSTEMATIC US WITHDRAWAL FROM ITS AFRICA ENGAGEMENT ARCHITECTURE.',
  },

  brief: {
    week: '31',
    title: 'WEEK 31 TUESDAY: NIGERIA-SA DE-ESCALATION ABUJA TALKS, US OVERHAULS AFRICA VISA PROCESSING, BRENT $83 GOLD $4,037, AFDB MOROCCO RAIL, KENYA GROWTH 4.3%',
    body: 'Week 31\'s second day delivers the most positive diplomatic signal of the July crisis cycle: Nigeria and South Africa agreed to de-escalate after Abuja talks — Pretoria pledging prosecutions, Abuja formalising compensation claims. The structural conditions of the xenophobia crisis remain unchanged but the bilateral flashpoint has been defused. Simultaneously, the US is restructuring visa processing across 24+ African countries — requiring regional centre travel, reducing per-country accessibility. Brent fell to $83, gold eased to $4,037 — still vastly above SA/Ghana fiscal breakevens. AfDB approved €205m for Morocco\'s high-speed rail. Kenya\'s growth forecast was cut to 4.3%. Ebola remains the fastest-growing outbreak on record with 47 DRC health zones — Uganda\'s 42-day countdown continues. Zambia\'s election is 15 days away. World Summit opened in Addis Ababa. December 31 ultimatum in SA remains live. Senegal\'s constitutional crisis deepens. Ethiopia\'s Tigray conflict risk is live.',
  },

  fxRates: {
    NGN: '1,378.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.00',
    ETB: '158.50',
    TZS: '2,624.00',
    UGX: '3,674.80',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'NIGERIA-SA DE-ESCALATION. Abuja talks: Pretoria pledges prosecutions of attackers, reiterates opposition to xenophobia, SA says attacks not state-sponsored. Abuja formalises compensation claims for Nigerians who fled or lost assets. Most significant bilateral de-escalation since crisis began in June. AU multilateral track, ICC petition, December 31 ultimatum all continue in parallel.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'US OVERHAULS AFRICA VISA PROCESSING — sweeping changes requiring applicants in 24+ African countries to travel to regional centres for routine visa interviews. Reduces per-country accessibility. Arrives amid: DRC travel restrictions (Ebola), PEPFAR cuts, AUSSOM funding ended, Nigeria aid bill, USAID restructuring. Pattern of systematic US Africa disengagement confirmed.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '09:00:00', signal: 'COMMODITIES: Brent $83.38 (↓5.64%), WTI $78.43 (↓5.06%), Gold $4,037 (↓0.92% from $4,088 ATH). Cocoa $5,189. SA and Ghana still benefit enormously — gold at $4,037 vs $1,600-1,800 fiscal breakeven. Nigeria: oil at $83 approaching $92/bbl fiscal breakeven — pressure rebuilding. Angola: oil $83 above $78 breakeven — still in positive territory.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:45:00', signal: 'AfDB approves €205m ($234m) Morocco high-speed rail extension. Morocco investing $20bn in infrastructure/tourism for 2030 World Cup. Nigeria-Morocco Gas Pipeline approved. Morocco-France strategic partnership deepened. AfDB Adesina: "rare bright spot amid regional turmoil." Morocco emerging as Africa\'s most consequential 2026 infrastructure story.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'MAD' },
    { time: '08:30:00', signal: 'Kenya growth forecast lowered to 4.3% for 2026 — fiscal consolidation + Gen-Z protest drag. Finance Bill 2026 is law but investment sentiment affected. 431 Kenyans in SA deportees. 120-day gender cabinet order. US-Kenya disease surveillance pact operational. KES 129.04. World Summit opens Addis Ababa July 29-30 — World Assembly of Peoples convening.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'KES' },
    { time: '08:15:00', signal: 'Ebola DRC: fastest-growing outbreak on record — 47 health zones, 5 provinces, 1,000+ deaths. Uganda 42-day countdown ongoing — last case June 21, target clear date late August. Zambia: August 13 election — 15 DAYS. SADC SEOM deployed. Campaigning intensifying. ZMW -32.91% YTD. Ethiopia: Tigray conflict risk live. Somalia: AUSSOM gap unresolved. Sudan: RSF 85 civilians massacred July 23.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'SA traveller management system mandatory from July 1 — digital customs declarations replace paper for all entering/leaving. Domestic fiscal: municipal funding freeze sparking local protests. PEPFAR-CDC September expiry. Ramaphosa impeachment panel ongoing. Weekly Thursday marches. December 31 ultimatum. ZAR ~16.00 — gold $4,037 structural support intact despite easing from ATH.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX July 29: NGN 1,378 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR ~16.00 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. Commodity adjustment: Brent $83, Gold $4,037. ZAR structural support from gold remains strong even at $4,037. NGN strengthening trend from June 2025 peak intact. ZMW worst performing major African currency YTD at -32.91%.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 76, fiscal: 58, fx: 42, debt: 58, political: 82, external: 74 },
    { country: 'Ghana', flag: '🇬🇭', score: 20, fiscal: 16, fx: 32, debt: 16, political: 18, external: 20 },
    { country: 'Kenya', flag: '🇰🇪', score: 68, fiscal: 64, fx: 50, debt: 70, political: 68, external: 66 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 70, fx: 72, debt: 90, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 60, fx: 42, debt: 60, political: 82, external: 74 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 88, fiscal: 72, fx: 96, debt: 80, political: 90, external: 84 },
    { country: 'Morocco', flag: '🇲🇦', score: 22, fiscal: 18, fx: 20, debt: 22, political: 20, external: 24 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,378.00', change: '-12.73%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.00', change: '-12.08%', stress: 'LOW', ytd: '+12.08%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 15 DAYS', type: 'General Election', risk: 'HIGH', note: 'SADC SEOM deployed. Campaigning intensifying. ZMW -32.91% YTD. Power cuts. Slow reform narrative. 15 days to polling day. Most consequential African election in years.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 17 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Tshisekedi dialogue. Red line: referendum bill. Ebola simultaneous. DRC-Rwanda border reopened with screening. 17 days.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Bilateral De-Escalation', type: 'Municipal Elections', risk: 'HIGH', note: 'Nigeria-SA de-escalation agreed. But: weekly marches, December 31 ultimatum, impeachment panel, PEPFAR September, municipal funding freeze protests all continue. Structural conditions unresolved.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: government steering Tigray to open conflict. US TPLF visa restrictions. Hundreds displaced. Pretoria Agreement collapsed. War risk materialising.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: '2030 Signed — ZANU-PF Pushing 2037', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'ZANU-PF Harare pushing 2037. Opposition ConCourt challenge. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Faye leads ECOWAS, endorsed Sall for UN SG, hosts first African Olympic event October. Constitutional confrontation with Sonko deepening. IMF Q3 at risk.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 15 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$83', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN — OIL PRESSURE REBUILDING', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$83', fiscalBreakeven: '$78/bbl', breakevenNote: 'ABOVE BREAKEVEN — MARGIN TIGHTENING', trend: '↓', risk: 'MEDIUM' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,037/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'NEAR ATH — ENORMOUS FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'AFDB RAIL — GAS PIPELINE — 2030 WC', trend: '↑', risk: 'LOW' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,037/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'NEAR ATH — MASSIVE FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,037/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — RSF CANNOT FULLY BENEFIT', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 185, delta: '-13', bond: '+0.7pts', fx: '-12.1%', signal: 'NIGERIA DE-ESCALATION — STILL: DEC ULTIMATUM LIVE', color: '#f5a623' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA FASTEST-GROWING ON RECORD — 47 ZONES', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 15 DAYS — SADC SEOM', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPEN CONFLICT WARNING — TIGRAY WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+20', bond: '-1.0pts', fx: '-12.7%', signal: 'SA DE-ESCALATION AGREED — OIL $83 NEAR BREAKEVEN', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+1.0pts', fx: '+10.8%', signal: 'GOLD $4,037 WINDFALL — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'MOROCCO', cds: 120, delta: '-10', bond: '+0.5pts', fx: '+1.2%', signal: 'AFDB €205M RAIL — $20BN 2030 WC INVESTMENT', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — GAS PIPELINE BENEFICIARY', color: '#00c48c' },
  ],

  fxHistory: [
    { date: 'May 19', NGN: 1370.31, GHS: 13.27, KES: 129.50, EGP: 54.69, ZAR: 18.20, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 22', NGN: 1370.31, GHS: 12.80, KES: 129.50, EGP: 53.50, ZAR: 18.40, UGX: 3710, ZMW: 19.11, XOF: 610 },
    { date: 'May 26', NGN: 1371.98, GHS: 11.90, KES: 129.50, EGP: 53.00, ZAR: 18.10, UGX: 3730, ZMW: 19.08, XOF: 612 },
    { date: 'May 28', NGN: 1371.98, GHS: 11.40, KES: 129.20, EGP: 52.50, ZAR: 17.20, UGX: 3758, ZMW: 19.04, XOF: 615 },
    { date: 'May 30', NGN: 1354.23, GHS: 10.70, KES: 129.03, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.41, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.47, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.40, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.03, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 23', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.50, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 24', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 27', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 29', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
