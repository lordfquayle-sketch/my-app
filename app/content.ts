export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 11, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'WORSENING',
    drivers: ['Ethiopia PP Wins 457/547 Seats — Abiy Confirmed Third Term — Post-Election War Risk Live', 'World Cup Opens TODAY — South Africa vs Mexico Mexico City — Bafana vs El Tri', 'ZAR Weakens to 16.56 — Rand Gives Up May Gains On Dollar Strength', 'Kenya June 25 Anniversary In 14 Days — Finance Bill Gen-Z Clock Ticking'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'RESULTS: PP wins all 24 constituencies declared so far. NEBE confirms PP secured 457 of 547 seats — commanding majority. Abiy confirmed third term. Tigray excluded — 38 districts. TPLF reinstated Debretsion in violation of Pretoria Agreement. Post-election war risk on Tigray and Eritrea now live. Foreign Policy: "Pretoria Agreement on verge of collapse." All major analysts: Abiy expected to launch operations against TPLF post-election. AU observer mission noted improvements but highlighted ongoing security challenges.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'BAFANA BAFANA OPEN THE WORLD CUP TODAY vs Mexico, Mexico City — 16 years after 2010. Hugo Broos\' squad arrives as underdogs. Stale 0-0 vs Nicaragua, 1-1 draw with Jamaica in warm-ups. ZAR weakened to 16.56 — rand gives up May gains on dollar strength. June 30: 19 days. Ramaphosa 5-point crackdown announced. March and March faces legal constraints. SARB hiked to 7%. Household debt crisis: 41% in default.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'June 25 storming anniversary in 14 days. Finance Bill 2026 June 30 deadline in 19 days. Opposition formally rejected — Kalonzo: "Ruto learnt nothing." Gen-Z mobilisation building. Finance Bill 2026: phone excise duty, crypto taxes, digital economy levies, rental income tax hike. KES at 129.41. Eurobond $2bn Q2 rollover critical. Nanyuki Ebola facility protests: 1 dead June 9 (Al Jazeera), 2 dead previously.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'DRC Leopards arrive Houston ahead of June 17 opener vs Portugal. Fans banned from US travel. Ebola: 550 confirmed, 101 deaths. 35 new cases in 24 hours. Armed groups attacking burial teams in Bunia. Ituri: 518 confirmed from 17 health zones. Uganda: 19 confirmed, Kampala and Wakiso affected. WHO $518m plan operational. Contact tracing still below 90% threshold.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF visit THIS WEEK — June 15. Bonds rallied from 50.6c record low. Finance Minister Diba targeting agreement June 30. Three Pastef members in Lo government. Early coupon payment confirmed — track record intact. Structural risk remains: 132% debt/GDP, $9.7bn obligations 2026. Oxford Economics Venezuela/Lebanon classification stands until programme restored.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'ETHIOPIA PP WINS 457 SEATS — ABIY CONFIRMED — POST-ELECTION WAR RISK LIVE — WORLD CUP OPENS — BAFANA BAFANA VS MEXICO TODAY — JUNE 11 IS AFRICA\'S DEFINING DAY OF 2026',
    body: 'June 11 is Africa\'s defining day of 2026. Ethiopia\'s National Election Board confirms the Prosperity Party has won 457 of 547 seats — Abiy Ahmed is confirmed for a third term. Tigray was excluded, the Pretoria Agreement is on the verge of collapse, and the TPLF has reinstated Debretsion. The post-election war risk on Tigray and Eritrea is now live. Every major analyst has flagged military operations against the TPLF as the expected post-election outcome. On the same day, South Africa opens the 2026 World Cup against Mexico in Mexico City — 16 years after Tshabalala\'s screamer in 2010. Bafana Bafana arrive as underdogs with Hugo Broos frustrated by warm-up results. The ZAR has weakened from 16.30 to 16.56 on dollar strength. DRC\'s Leopards have arrived in Houston for their first World Cup since 1974. Kenya\'s Finance Bill clock is ticking — 14 days to the June 25 anniversary. Africa has never had its geopolitical and sporting moments converge so sharply in a single day.',
    tag: 'JUNE 11 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 11, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'ETHIOPIA: PP WINS 457/547 SEATS — ABIY THIRD TERM CONFIRMED — POST-ELECTION WAR RISK LIVE', body: 'NEBE: PP won all 24 constituencies declared in early count. Final tally: 457 of 547 seats. Abiy Ahmed confirmed for third five-year term. Parliament officially confirmed him as PM. Tigray excluded — 38 districts. AU observer mission noted improvements in electoral administration but highlighted ongoing security challenges. TPLF reinstated Debretsion in violation of Pretoria Agreement. Eritrea tensions over Red Sea access. Foreign Policy: "Pretoria Agreement on verge of collapse." Post-election war risk on TPLF is now the live watch signal. Watch Abiy\'s posture in the coming 72 hours.', icon: '⚔️' },
    { title: 'WORLD CUP OPENS — BAFANA BAFANA VS MEXICO — SOUTH AFRICA\'S MOMENT', body: 'South Africa faces Mexico in Mexico City today — 9PM CAT kick-off — the opening match of the 2026 World Cup, exactly 16 years after Tshabalala\'s goal in Johannesburg. Hugo Broos\' side arrives as underdogs: 3 draws and 2 defeats in warm-ups, stale 0-0 vs Nicaragua, 1-1 behind closed doors vs Jamaica. Mexico unbeaten in 8 friendlies in 2026. DRC Leopards in Houston for June 17 vs Portugal. Africa has 6 teams in the 48-team expanded tournament — the continent\'s biggest World Cup presence in history. Bafana Bafana\'s squad features mainly domestic-based players with Lyle Foster leading attack.', icon: '⚽' },
    { title: 'ZAR WEAKENS TO 16.56 — RAND GIVES UP MAY GAINS ON DOLLAR STRENGTH', body: 'USD/ZAR moved to 16.563 as of June 10 10:55 UTC — from 16.30 held through most of June. The rand is giving up gains made on dollar weakness as the USD strengthens. 2026 ZAR average: 16.43. High: 18.22 (July 2025). Low: 15.73 (Jan 2026). The SARB 7% rate provides structural support. June 30 xenophobia deadline in 19 days — any escalation risk adds political pressure on the currency. Household debt crisis: 41% in default, R237bn overdue.', icon: '📉' },
    { title: 'KENYA JUNE 25 IN 14 DAYS — FINANCE BILL GEN-Z CLOCK TICKING — EUROBOND ROLLOVER CRITICAL', body: 'June 25 is the second anniversary of the 2024 parliament storming — the most politically charged date on Kenya\'s calendar. The Finance Bill 2026 is due June 30. Opposition rejected it formally. Kalonzo: "Ruto learnt nothing." In 2024: bill introduced May → protests June → storming June 25 → withdrawal June 28. In 2026: identical calendar. Nanyuki Ebola facility protests already showed willingness to confront police. Gen-Z mobilisation building. Eurobond $2bn Q2 rollover simultaneous pressure. Ruto managing five crises.', icon: '🔥' },
  ],

  insight1: {
    title: 'ABIY\'S THIRD TERM MANDATE IS THE PLATFORM FOR POST-ELECTION TIGRAY OPERATIONS — WATCH THE NEXT 72 HOURS',
    body: 'The pattern from 2020 is precise: Abiy won the election, secured his mandate, and within months launched the Tigray War that killed an estimated 600,000 people. The TPLF has provided every precondition for a repeat: reinstating the pre-Pretoria government, reappointing Debretsion, consolidating authority in 38 districts where NEBE suspended polling. The Eritrea dimension adds a new axis — Abiy\'s Red Sea ambitions create tensions with Asmara that could produce a three-way conflict. Foreign Policy has described the Pretoria Agreement as "on the verge of collapse." The 72 hours after the results announcement are the highest-risk window. What Abiy says about Tigray in his first post-election public statement will determine the immediate trajectory. Any military positioning signal from federal forces near Tigray in the coming days is the escalation indicator.',
    conclusion: 'THE 72 HOURS AFTER ABIY\'S THIRD TERM CONFIRMATION ARE THE HORN OF AFRICA\'S MOST DANGEROUS SINCE NOVEMBER 2020. WATCH ABIY\'S FIRST POST-ELECTION STATEMENT ON TIGRAY — AND ANY FEDERAL FORCE MOVEMENTS NEAR THE TIGRAY BORDER.',
  },

  insight2: {
    title: 'SOUTH AFRICA OPENING THE WORLD CUP ON THE SAME DAY AS ITS JUNE 30 COUNTDOWN — THE POLITICAL ECONOMY OF BAFANA\'S MOMENT',
    body: 'The symbolism is acute. South Africa — which is managing a xenophobia crisis, a presidential impeachment panel, a household debt emergency, a PEPFAR health crisis, and a dual-movement June 30 deadline — opens the world\'s biggest sporting event today. The World Cup is the GNU\'s most powerful soft power asset: a unified national narrative that crosses political lines. A good Bafana result tonight could briefly move the political weather. But the structural problems — 41% of borrowers in default, PEPFAR-CDC expiring September, 19 days to June 30 — are not changed by a football result. The ZAR at 16.56, slightly weaker than its May levels, reflects the political risk premium building as June 30 approaches. The game matters. But the calendar matters more.',
    conclusion: 'BAFANA\'S WORLD CUP CAMPAIGN IS THE GNU\'S MOST IMPORTANT SOFT POWER MOMENT OF 2026. A STRONG RESULT TONIGHT COULD SHIFT THE POLITICAL WEATHER. BUT THE JUNE 30 STRUCTURAL CRISIS RUNS INDEPENDENT OF FOOTBALL. WATCH BOTH THE SCORE AND THE RAND.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 THURSDAY: ETHIOPIA ABIY THIRD TERM CONFIRMED, WORLD CUP OPENS, BAFANA VS MEXICO, ZAR 16.56',
    body: 'June 11 — Africa\'s defining day of 2026. Ethiopia\'s PP has won 457 of 547 seats — Abiy confirmed for a third term, post-election war risk on Tigray and Eritrea is live. The World Cup opens in Mexico City today — South Africa vs Mexico at 9PM CAT, 16 years after Tshabalala\'s goal. DRC Leopards arrive Houston for June 17. ZAR has weakened to 16.56 from 16.30 on dollar strength. Kenya\'s Finance Bill deadline clock: 14 days to June 25 anniversary, 19 days to June 30. Senegal\'s IMF visit is Monday June 15. South Africa\'s June 30 xenophobia deadline is 19 days away. Ebola stands at 550 confirmed cases, 101 deaths. The continent has never had its geopolitical and sporting moments converge so sharply.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.82',
    KES: '129.41',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.56',
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
    { time: '09:30:00', signal: 'Ethiopia RESULTS: PP wins 457/547 seats — commanding majority. Abiy confirmed third five-year term. Parliament officially confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war risk on Tigray + Eritrea NOW LIVE. Watch Abiy\'s first statement on Tigray in next 72 hours.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:15:00', signal: 'WORLD CUP OPENS TODAY — South Africa vs Mexico, Mexico City, 9PM CAT. Bafana Bafana underdogs — Hugo Broos frustrated with warm-up results. DRC Leopards in Houston for June 17 vs Portugal. Africa has 6 teams in expanded 48-team tournament. Bafana\'s opening result will influence political weather in SA amid June 30 crisis.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'ZAR weakens to 16.56 from 16.30 — rand gives up May gains on dollar strength. 2026 ZAR average 16.43. SARB 7% provides structural support. June 30 in 19 days adds political risk premium. Household debt: 41% in default, R237bn overdue. PEPFAR-CDC expiring September adds compound pressure.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'ZAR' },
    { time: '08:45:00', signal: 'Kenya: June 25 storming anniversary in 14 days. Finance Bill 2026 June 30. Opposition rejected — Kalonzo: "Ruto learnt nothing." Gen-Z mobilisation building. Identical calendar to 2024. Eurobond $2bn Q2 rollover simultaneous. Nanyuki protests: 1+ dead. US-Kenya relations strained. KES at 129.41.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:30:00', signal: 'Ebola: 550 confirmed 101 deaths. 35 new cases in 24 hours. Armed groups attacking burial teams Bunia. Uganda 19 confirmed — Kampala + Wakiso. Contact tracing below 90%. WHO $518m plan operational. DRC Leopards in Houston. Fans banned. Somali referee banned. Ebola has reshaped Africa\'s World Cup presence.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Senegal: IMF visit Monday June 15. Bonds rallying. Diba targets June 30 agreement. Three Pastef members in Lo government. Acute default risk defused. Structural risk: 132% debt/GDP, $9.7bn obligations. South Africa cartel meth labs found on farms — Mexico cartel networks expanding into SA ahead of World Cup per Al Jazeera.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:00:00', signal: 'Somalia: Ceasefire holding — Abdiaziz and Hawlwadag calm. But opposition calls Mohamud "former president" and vows to fight on. Al-Shabaab Bay Region operations ongoing. No constitutional court to resolve dispute. Jubaland + Puntland reject amendments. Structural crisis ongoing.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 11: NGN 1,360.73 | GHS 11.82 | KES 129.41 | EGP 52.22 | ZAR 16.56 (weakening from 16.30) | UGX 3,770 | ZMW 19.02. ZAR move is most significant — dollar strength unwinding May rand gains. Watch Bafana result impact on ZAR sentiment tonight.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 56, fx: 42, debt: 58, political: 85, external: 60 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 46, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 96, fiscal: 84, fx: 74, debt: 90, political: 99, external: 98 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 94, fiscal: 76, fx: 52, debt: 70, political: 94, external: 92 },
    { country: 'Senegal', flag: '🇸🇳', score: 84, fiscal: 86, fx: 74, debt: 88, political: 82, external: 80 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.82', change: '+15.83%', stress: 'MODERATE', ytd: '+5.47%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.41', change: '+0.06%', stress: 'ELEVATED', ytd: '-0.87%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.56', change: '+1.91%', stress: 'MODERATE', ytd: '+1.91%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'RESULTS TODAY — PP 457/547 SEATS', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide confirmed. Abiy third term. Post-election war risk on Tigray + Eritrea LIVE. Pretoria Agreement collapsing. Watch Abiy\'s next 72 hours.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire but opposition calls Mohamud "former president." Al-Shabaab Bay Region active. No constitutional court. Jubaland + Puntland reject amendments.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'June 30 — 19 days. Bafana opens World Cup today. ZAR 16.56. Ramaphosa 5-point plan. March and March legal constraints. 41% borrowers in default.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Tinubu APC nomination. Dangote 700k bpd. Multi-vector security crisis. 2027 risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. June 25 in 14 days. Kalonzo: "Ruto learnt nothing." Gen-Z mobilising. Eurobond Q2 critical.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF VISIT MONDAY JUNE 15', risk: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
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
    { country: 'ETHIOPIA', cds: 520, delta: '+55', bond: '-2.8pts', fx: '-0.9%', signal: 'ABIY THIRD TERM — WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '+0.1%', signal: 'JUNE 25 IN 14 DAYS — JUNE 30 IN 19', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+38', bond: '-1.9pts', fx: '+1.9%', signal: 'JUNE 30 — 19 DAYS — WORLD CUP TODAY', color: '#f5a623' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'IMF MONDAY — AGREEMENT JUNE 30', color: '#f5a623' },
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'CEASEFIRE — OPPOSITION FIGHTS ON', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.0%', signal: 'DANGOTE 700K — WORLD CUP GROUP STAGE', color: '#00c48c' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+5.5%', signal: 'IMF PROGRAMME COMPLETE — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 6', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 7', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.29, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
