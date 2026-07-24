export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 24, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['Ebola DRC Crosses 1,000 Deaths — Attacks On Clinics Continuing — Week 10 Since PHEIC', 'ICC Petition Filed By Two Ghanaians Over SA Xenophobia — SA Rejects As Opportunistic', 'Nigeria CBN Holds Rate At 27.5% — Tight Money Policy Entrenched — Inflation Anchor Priority', 'Botswana 2,492-Carat Diamond — Second Largest Ever Found — Positive Structural Signal'],
    regions: [
      { region: 'East Africa', score: 92, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 82, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 84, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'EBOLA CROSSES 1,000 DEATHS. The Ebola outbreak in eastern DRC has now killed more than 1,000 people amid ongoing attacks on clinics. This is the third-largest Ebola outbreak in history — only the 2014-2016 West Africa (28,616 cases, 11,310 deaths) and 2018-2020 North Kivu (3,481 cases, 2,286 deaths) were larger. Week 10 since the May 17 PHEIC declaration. No approved vaccine for Bundibugyo strain. No approved treatment. Contact tracing below 90% threshold. France first European case confirmed. White House $1.4bn Congress ask outstanding. Uganda simultaneously managing a Marburg case in Kyegegwa (1.5-year-old died) — unprecedented dual hemorrhagic fever burden.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'ICC PETITION FILED — SA REJECTS AS OPPORTUNISTIC. Two Ghanaian nationals filed a petition at the International Criminal Court to probe anti-migrant violence in South Africa — arguing the violence amounts to crimes against humanity and accusing SA of failing to prevent and punish those responsible. SA Department of International Relations spokesperson Chrispin Phiri dismissed it as "opportunistic," saying South Africa maintains full confidence in its domestic legal framework. This is the ICC escalation track running parallel to: Nigeria ECOWAS/AU threat, SADC extraordinary summit, AU multilateral pressure from Nigeria and Ghana. ZAR approximately 16.00 — slightly stronger from July 20\'s 16.53.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'CBN HOLDS RATE AT 27.5%. Nigeria\'s central bank held its key rate at 27.5% — entrenching the tight monetary policy cycle introduced by Governor Cardoso. Inflation at around 33% — gradually declining from its 2024 peak above 34%. The 27.5% rate is 650bps above the pre-reform rate from early 2023 and reflects the CBN\'s commitment to rebuilding monetary credibility and anchoring inflation expectations post-FX unification. Hold signal: CBN sees inflation still too high to ease. Watch the next inflation print — a sustained decline below 30% may open the easing cycle.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Botswana', flag: '🇧🇼', alert: 'BOTSWANA 2,492-CARAT DIAMOND CONFIRMED. Lucara Diamond Corp confirmed recovery of a 2,492-carat rough diamond from the Karowe Mine — the second-largest diamond ever found, the largest in over a century. President Masisi presented the stone at a viewing ceremony. The diamond is larger than the palm of a hand, weighs approximately half a kilogram, and is described as high quality and found intact. A previous Karowe diamond sold for $63m in 2016. Botswana\'s Debswana arrangement gives the government revenue sharing from Karowe and De Beers. This is a structural positive for Botswana\'s sovereign fiscal position.', severity: 'LOW', color: '#00c48c' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Ethiopian opposition parties warned July 22 that the government is steering Tigray toward open conflict — the clearest external signal yet of post-election war risk materialising. US visa restrictions on TPLF hardliners in effect since June 18. Hundreds of thousands displaced. Pretoria Agreement collapsed. National Dialogue Conference ongoing as parallel political track. TPLF reinstated Debretsion, passed "totalitarian control" draft legislation, engaged in direct ENDF clashes.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'EBOLA DRC CROSSES 1,000 DEATHS — ICC PETITION OVER SA XENOPHOBIA FILED — SA REJECTS — CBN HOLDS 27.5% — BOTSWANA 2,492 CARAT DIAMOND — SENEGAL HOSTS FIRST AFRICAN OLYMPIC EVENT OCTOBER',
    body: 'July 24 delivers a dense mix of crisis escalation and structural positives. The Ebola outbreak in DRC has now killed more than 1,000 people — the third-largest outbreak in history, still with no approved vaccine for the Bundibugyo strain, ongoing clinic attacks, and Uganda simultaneously managing an isolated Marburg case. Two Ghanaian nationals filed an ICC petition to probe South African anti-migrant violence as crimes against humanity — South Africa rejected it as "opportunistic." Nigeria\'s CBN held rates at 27.5%, entrenching tight monetary policy as the primary inflation anchor in Africa\'s largest economy. Botswana confirmed the world\'s second-largest diamond at 2,492 carats — a structural positive for one of the continent\'s strongest sovereigns. Morocco\'s youth rallied outside a Casablanca courthouse for a detained rapper. Senegal announced it will host the first-ever Olympic event on African soil in October. AES bloc (Burkina Faso, Mali, Niger) jointly bid for the 2032 Africa Cup of Nations. The compound risk environment remains elevated — but the continent continues to demonstrate structural resilience alongside crisis.',
    tag: 'JULY 24 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'July 24, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Botswana', flag: '🇧🇼', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '120', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA DRC CROSSES 1,000 DEATHS — CLINIC ATTACKS CONTINUE — WEEK 10 SINCE PHEIC', body: 'The Ebola outbreak in eastern DRC has now killed more than 1,000 people — the third-largest outbreak in history by deaths. Week 10 since the May 17 PHEIC declaration. Attacks on clinics are continuing — the same structural breakdown that defined the 2018-2020 North Kivu outbreak. No approved vaccine for Bundibugyo strain. No approved treatment. Contact tracing below 90% threshold. France first European case. White House $1.4bn Congress ask outstanding. Africa CDC upgraded ask from $518m to $1.4bn. Uganda simultaneously managing Marburg (1.5-year-old died, Kyegegwa). The 1,000-death milestone marks the transition from acute outbreak to structural endemic — the response architecture must now plan for months, not weeks.', icon: '🚨' },
    { title: 'ICC PETITION FILED OVER SA XENOPHOBIA — CRIMES AGAINST HUMANITY CLAIM — SA REJECTS', body: 'Two Ghanaian nationals filed a formal petition to the ICC to probe anti-migrant violence in South Africa — arguing the violence amounts to crimes against humanity and accusing SA of failing to prevent and punish perpetrators. SA Department of International Relations rejected the petition as "opportunistic," saying it maintains full confidence in its domestic legal framework. The ICC petition is the most escalatory legal instrument deployed against South Africa over the xenophobia crisis — running alongside: Nigeria ECOWAS/AU multilateral threat, Ghana ICC petition, SADC extraordinary summit, and the AU multilateral pressure track. SA now faces simultaneous domestic political (impeachment panel, weekly marches, December ultimatum) and international legal (ICC petition) pressure.', icon: '⚖️' },
    { title: 'NIGERIA CBN HOLDS 27.5% — TIGHT MONEY ENTRENCHED — INFLATION ANCHOR PRIORITY', body: 'Nigeria\'s central bank held its key rate at 27.5% — the third consecutive hold at this elevated level. Governor Cardoso has made monetary credibility the CBN\'s primary objective since the 2023 FX unification. Inflation is approximately 33% — gradually declining from its 2024 peak above 34%. The 27.5% rate is 650bps above the 2023 reform-era starting point. Hold signal: inflation still too high to ease. The tight money policy is working — NGN has strengthened from 1,579 in June 2025 to approximately 1,378 today, a 12.7% appreciation. But 27.5% also constrains SME credit access in an economy where 17 million face severe hunger in the north and security costs are at their highest in years. Watch the next inflation print.', icon: '📊' },
    { title: 'BOTSWANA 2,492-CARAT DIAMOND — SECOND LARGEST EVER — LUCARA KAROWE MINE', body: 'Lucara Diamond Corp confirmed the recovery of a 2,492-carat rough diamond from the Karowe Mine in central Botswana — the second-largest diamond ever found from a mine and the largest in 119 years (since the 3,106-carat Cullinan in 1905). President Masisi held the stone at the presidential office viewing ceremony. Described as high quality, found intact by X-ray technology. A previous Karowe diamond sold for $63m in 2016. Botswana government receives revenue sharing from Karowe and De Beers Debswana arrangements. This is a structural positive for Botswana — a Moody\'s A3-rated sovereign, one of Africa\'s strongest, with among the continent\'s highest governance indicators. The diamond story is the kind of structural positive that Africa\'s compound crisis environment occasionally produces.', icon: '💎' },
  ],

  insight1: {
    title: 'EBOLA CROSSING 1,000 DEATHS IS A STRUCTURAL MILESTONE — THE RESPONSE MUST NOW PLAN FOR ENDEMIC MANAGEMENT, NOT OUTBREAK CONTAINMENT',
    body: 'The 2018-2020 North Kivu Ebola outbreak — which killed 2,286 people over two years — was eventually contained when contact tracing improved significantly, vaccine deployment expanded, and community trust was painstakingly rebuilt. The current Bundibugyo outbreak has now killed 1,000+ people in 10 weeks. It has no approved vaccine, no approved treatment, a contact tracing rate of 58% (target 90%+), ongoing clinic attacks, and Uganda simultaneously managing Marburg. The $518m WHO response plan has secured less than $100m. Africa CDC has upgraded the ask to $1.4bn. When an outbreak crosses 1,000 deaths with these structural characteristics, the operational response must shift from containment to endemic management — sustained investment, parallel health system strengthening, community trust building over months, and acceptance that containment may not be achievable on a weeks-based timeline. The White House\'s $1.4bn Congress ask is the right scale of response. Its approval timeline is the critical variable.',
    conclusion: 'THE 1,000-DEATH MILESTONE MARKS THE TRANSITION FROM ACUTE OUTBREAK TO STRUCTURAL ENDEMIC. THE RESPONSE ARCHITECTURE MUST PLAN FOR MONTHS, NOT WEEKS. THE WHITE HOUSE $1.4BN CONGRESS ASK IS THE RIGHT SCALE — ITS APPROVAL TIMELINE IS THE CRITICAL VARIABLE.',
  },

  insight2: {
    title: 'THE ICC PETITION IS THE MOST ESCALATORY LEGAL INSTRUMENT DEPLOYED AGAINST SOUTH AFRICA — AND SA\'S REJECTION IS PROCEDURALLY CORRECT BUT POLITICALLY INSUFFICIENT',
    body: 'South Africa\'s domestic legal framework rejection of the ICC petition is procedurally the right response — the ICC is a court of last resort for cases where domestic jurisdictions have failed or are unwilling to act. SA can credibly argue its courts remain functional and its police and prosecutors can address xenophobia violence. But this procedural correctness does not address the political reality: the petition was filed because two Ghanaian nationals — citizens of a country whose government is simultaneously pushing the AU to address SA\'s xenophobia — believe the domestic legal framework has already failed. The ICC may reject the petition for procedural reasons. But its filing is part of a multilateral pressure architecture — ECOWAS/AU threat from Nigeria, SADC extraordinary summit, Ghana ICC petition — that is building institutional momentum against South Africa\'s xenophobia campaign. SA faces a battle not just in its own courts but in the court of African institutional opinion.',
    conclusion: 'SA\'S ICC REJECTION IS PROCEDURALLY CORRECT BUT POLITICALLY INSUFFICIENT. THE PETITION IS PART OF A MULTILATERAL PRESSURE ARCHITECTURE THAT NOW SPANS ECOWAS, AU, SADC AND THE ICC SIMULTANEOUSLY. SA FACES INSTITUTIONAL PRESSURE ON FOUR SIMULTANEOUS TRACKS — AND THE DECEMBER 31 ULTIMATUM ADDS A DOMESTIC FIFTH.',
  },

  brief: {
    week: '30',
    title: 'WEEK 30 CLOSE: EBOLA 1,000 DEATHS, ICC PETITION SA XENOPHOBIA, CBN 27.5%, BOTSWANA DIAMOND, SENEGAL FIRST AFRICAN OLYMPIC EVENT',
    body: 'Week 30 closes with Ebola crossing 1,000 deaths in DRC — the third-largest outbreak in history, entering an endemic management phase with no vaccine, no treatment, ongoing clinic attacks, and Uganda managing Marburg simultaneously. Two Ghanaians filed an ICC petition over SA xenophobia — crimes against humanity claim, SA rejected it as opportunistic. Nigeria\'s CBN held at 27.5% — tight money entrenched as inflation anchor. Botswana confirmed the world\'s second-largest diamond at 2,492 carats. Senegal will host the first-ever Olympic event on African soil in October. AES bloc bid jointly for 2032 AFCON. Sudan RSF massacred 85 civilians July 23. Zimbabwe ZANU-PF pushes Mnangagwa to 2037. Ethiopia opposition warned of open Tigray conflict. Mauritania 144 dead migrants. Zambia election 20 days away. DRC August 15 dialogue deadline. The continent\'s compound risk environment remains elevated — structural resilience and acute crisis coexisting across the same geography.',
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
    { time: '09:30:00', signal: 'EBOLA DRC CROSSES 1,000 DEATHS — more than 1,000 killed amid attacks on clinics. Third-largest outbreak in history. Week 10 since May 17 PHEIC. No vaccine, no treatment, contact tracing below 90%. Uganda simultaneously managing Marburg. White House $1.4bn Congress ask outstanding. $518m plan has <$100m secured. Endemic management phase now.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'ICC PETITION filed by two Ghanaian nationals to probe SA xenophobia as crimes against humanity — accuses SA of failing to prevent and punish perpetrators. SA rejects as "opportunistic" — cites domestic legal framework confidence. ICC petition now runs alongside ECOWAS/AU threat, SADC summit, Ghana AU push — multilateral institutional pressure architecture against SA on four simultaneous tracks.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Nigeria CBN holds rate at 27.5% — third consecutive hold. Tight money entrenched. Inflation ~33%, declining from 34%+ peak. NGN strengthened 12.7% from 1,579 to 1,378 since June 2025 reform. Hold signal: inflation still too high to ease. Watch next inflation print for easing cycle signal. SA-Nigeria bilateral crisis (hate speech, ECOWAS threat, two Nigerians killed) continues independently.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '08:45:00', signal: 'BOTSWANA: 2,492-carat diamond confirmed — Lucara Karowe Mine. Second-largest ever found, largest in 119 years. President Masisi presented it. High quality, found intact. Previous Karowe diamond sold $63m 2016. Government revenue sharing via Debswana. Moody\'s A3 Botswana — Africa\'s strongest sovereign credit. Structural positive for Africa\'s resource wealth narrative.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Senegal to host FIRST OLYMPIC EVENT ON AFRICAN SOIL in October — announcement from Dakar. Faye endorsed Sall for UN SG July 20. AES bloc (Burkina Faso, Mali, Niger) jointly bid for 2032 AFCON. Morocco youth rallied for detained rapper outside Casablanca courthouse. Positive Africa soft power signals running alongside compound crisis.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Ethiopia: opposition warned July 22 of open Tigray conflict. Zambia: August 13 election — 20 days. DRC: August 15 dialogue deadline — 22 days. Zimbabwe: ZANU-PF pushing 2037. Sudan: RSF massacred 85 civilians July 23. Burkina Faso: coup fear signal from Traoré. Somalia: AUSSOM funding gap unresolved. Mauritania: 144 migrants dead or missing.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Uganda Olympian set on fire by boyfriend — gender-based violence case generating major public anger. Kenya lawyers nationwide court boycott — judicial corruption. South Africa: PEPFAR-CDC expiry September. SA Ramaphosa impeachment panel sat — first in SA democratic history. December 31 movement ultimatum for workplace quotas. Ivory Coast and Ghana: continental benchmarks intact.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 24: NGN 1,378 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR ~16.00 (MTFX confirmed 16.028 July 18; ZAR/KES 7.6811 confirms ZAR near 16.00 given KES at 129.04) | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. ZAR slightly stronger than July 20\'s 16.53. NGN trend: 1,378 down from 1,579 June 2025 — 12.7% appreciation.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 82, fiscal: 58, fx: 42, debt: 58, political: 88, external: 80 },
    { country: 'Ghana', flag: '🇬🇭', score: 26, fiscal: 22, fx: 36, debt: 22, political: 22, external: 26 },
    { country: 'Kenya', flag: '🇰🇪', score: 70, fiscal: 66, fx: 52, debt: 72, political: 70, external: 68 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 72, fx: 74, debt: 92, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 88, fiscal: 72, fx: 56, debt: 66, political: 94, external: 88 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
    { country: 'Botswana', flag: '🇧🇼', score: 14, fiscal: 12, fx: 10, debt: 12, political: 14, external: 16 },
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
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 20 DAYS', type: 'General Election', risk: 'HIGH', note: 'Hichilema under maximum pressure. ZMW -32.91% YTD. Power cuts. Opposition consolidated. 20 days to polling day. Most imminent major African election and most credit-consequential.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 22 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 cancelled July 22 protests — Tshisekedi dialogue announced. August 15 deadline. Ebola outbreak simultaneous. Truce not resolution. Red line: referendum bill enactment.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — ICC Petition Filed', type: 'Municipal Elections', risk: 'CRITICAL', note: 'ICC petition filed — SA rejects as opportunistic. AU multilateral track live. Ramaphosa impeachment panel sat. 53,499 deported. December 31 ultimatum. Weekly marches. PEPFAR September.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: government steering Tigray to open conflict. US TPLF visa restrictions. Hundreds displaced. Pretoria Agreement collapsed. War risk materialising.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: '2030 Signed — ZANU-PF Pushing 2037', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'ZANU-PF Harare pushing 2037 extension days after 2030 signed. Opposition ConCourt challenge. Each amendment creates platform for next. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Olympic Event Oct — Referendum TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Senegal hosts first African Olympic event October. Faye backed Sall for UN SG. Constitutional confrontation with Sonko ongoing. IMF Q3 at risk.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 20 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Botswana', flag: '🇧🇼', primary: 'Diamonds/Copper', exposure: 'HIGH', gdpShare: '25%', revenueShare: '60%', price2026: '$3,200/oz', fiscalBreakeven: 'N/A', breakevenNote: '2,492-CARAT DISCOVERY — POSITIVE', trend: '↑', risk: 'LOW' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — RSF FUNDING CUT', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'DRC/UGANDA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 1,000 DEATHS — CLINIC ATTACKS — MARBURG', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.3pts', fx: '-12.1%', signal: 'ICC PETITION — REJECTED — AU/ECOWAS/SADC PRESSURE', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPPOSITION: OPEN CONFLICT WARNING IN TIGRAY', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 20 DAYS', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-12.7%', signal: 'CBN HOLDS 27.5% — ICC PETITION CO-FILED', color: '#f5a623' },
    { country: 'SENEGAL', cds: 820, delta: '-30', bond: '+0.3pts', fx: '-6.6%', signal: 'FIRST AFRICAN OLYMPIC EVENT OCT — IMF Q3', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-10', bond: '+0.8pts', fx: '+10.8%', signal: 'ICC PETITION CO-FILER — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'BOTSWANA', cds: 120, delta: '-15', bond: '+1.0pts', fx: '+2.5%', signal: '2,492-CARAT DIAMOND — SECOND LARGEST EVER FOUND', color: '#00c48c' },
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
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.53, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 23', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.50, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 24', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.00, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
