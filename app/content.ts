export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 10, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'WORSENING',
    drivers: ['Ebola DRC 550 Confirmed 101 Deaths — 35 New Cases in 24 Hours — Armed Groups Attacking Burial Teams', 'Somalia: Mogadishu Violence Subsides But Opposition Rejects Mohamud — "Former President" — Fight Continues', 'Somali Referee Dropped From World Cup After US Visa Denial — Ebola Travel Architecture Deepens', 'WORLD CUP TOMORROW + ETHIOPIA RESULTS TOMORROW — JUNE 11 HORN CONVERGENCE 1 DAY'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'ECDC June 9: DRC 550 confirmed cases, 101 confirmed deaths. 35 new confirmed cases in previous 24 hours, 10 new deaths. Ituri: 518 confirmed from 17 health zones. North Kivu: 29 confirmed from 7 health zones. South Kivu: 3 confirmed. Uganda: 19 confirmed, 2 deaths. Burial team attacked at Nyamurongo cemetery in Bunia — 2 people seriously injured, 2 vehicles damaged. DRC government: armed groups actively hindering response in Ituri. 309 hospitalised in isolation. Contact tracing still below 90% threshold. Vaccine candidates in trials.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'Mogadishu violence subsided after 2 days — government declared Abdiaziz and Hawlwadag districts calm. But opposition formally rejects Mohamud\'s rule and vows to fight on — calling him "former president." No constitutional court to resolve dispute. Two federal states (Jubaland, Puntland) reject constitutional amendments. Somali referee Omar Artan dropped from World Cup after US visa denied — Ebola entry restrictions affecting all Somali nationals. Opposition rejected Mohamud\'s dialogue offer twice. Structural crisis ongoing.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'RESULTS TOMORROW June 11 — same day World Cup opens. PP landslide expected. Post-election war window goes live tomorrow. Pretoria Agreement "on verge of collapse." TPLF reinstated Debretsion. Eritrea tensions — Red Sea access. Triangular conflict scenario: TPLF + Eritrea. Abiy expected to launch operations against TPLF post-election as in 2020. Most dangerous Horn window since November 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 — June 25 storming anniversary in 15 days. June 30 deadline in 20 days. Opposition rejected bill — Kalonzo: "Ruto learnt nothing." Gen-Z mobilisation building. Eurobond $2bn Q2 rollover critical. KES at 129.53. US-Kenya strained. Finance Bill 2026 includes phone excise duty, crypto taxes, digital economy levies — politically identical profile to 2024.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 — 20 days. Ramaphosa 5-point crackdown announced. March and March faces legal constraints — cannot arrest migrants. ZAR at 16.30 — near highest since March, SARB 7%. Household debt: 41% in default, R237bn overdue. PEPFAR crisis: $620m-$1.4bn gap, PEPFAR-CDC expires September. Petrol hike live. Biometric register announced but implementation months away.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'EBOLA 550 CONFIRMED 101 DEAD — ARMED GROUPS ATTACK BURIAL TEAMS — SOMALI REFEREE BANNED FROM WORLD CUP — JUNE 11 IS THE MOST CONSEQUENTIAL DAY IN AFRICA THIS DECADE',
    body: 'June 10 — one day before the most consequential convergence in African geopolitics this decade. Ebola has reached 550 confirmed cases and 101 deaths with 35 new cases in 24 hours — the DRC government is explicitly naming armed groups as actively hindering the response, including an attack on a burial team in Bunia that seriously injured two responders. A Somali referee, Omar Artan, has been dropped from the World Cup after being denied a US entry visa — the Ebola travel architecture is now shaping who can participate in the world\'s biggest sporting event from Africa. Tomorrow June 11: the World Cup opens in Mexico City, Ethiopia\'s election results are announced, DRC Leopards arrive in Houston. Somalia\'s Mogadishu violence has subsided but the opposition formally rejects Mohamud\'s presidency and vows to continue the fight — calling him "former president," with no constitutional court to resolve the dispute. Kenya\'s Finance Bill anniversary clock is ticking — 15 days to the June 25 storming anniversary. South Africa has 20 days to June 30.',
    tag: 'JUNE 10 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 10, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA: 550 CONFIRMED 101 DEATHS — ARMED GROUPS ATTACKING BURIAL TEAMS IN BUNIA', body: 'DRC Ministry of Health June 8 update: 550 confirmed cases, 101 confirmed deaths. 35 new cases in previous 24 hours, 10 new deaths. Ituri: 518 confirmed from 17 health zones — most affected province. North Kivu: 29 confirmed, 7 health zones. South Kivu: 3 confirmed. 309 in isolation. Uganda: 19 confirmed, 2 deaths. Armed groups actively hindering response — burial team attacked at Nyamurongo cemetery, Bunia: 2 responders seriously injured, 2 vehicles destroyed. DRC government "expressed concern over armed groups hindering health response." Mistrust and resistance hampering Ebola response per Reuters.', icon: '🚨' },
    { title: 'SOMALIA: VIOLENCE SUBSIDES BUT OPPOSITION REJECTS MOHAMUD — "FORMER PRESIDENT"', body: 'Mogadishu fighting ended after 2 days — government declared order restored. But: opposition formally rejects Mohamud\'s rule and vows to fight on. Opposition leaders call him "former president." No constitutional court to resolve dispute. Jubaland and Puntland federal states reject amendments. Mohamud formed new political party — Jubaland and Puntland absent. Opposition rejected dialogue offer twice. Structural crisis: Mohamud says provisional constitution "era set yesterday" — opposition says May 15 was his last day. Ceasefire is not resolution.', icon: '⚔️' },
    { title: 'SOMALI REFEREE DROPPED FROM WORLD CUP — US VISA DENIED — EBOLA SHAPES SPORT', body: 'FIFA confirmed Somali referee Omar Artan dropped from the 2026 World Cup after US entry denied — linked to Ebola-related travel restrictions on East African nationals. This is the second Africa-specific World Cup casualty of the Ebola crisis — after Spain\'s ban on DRC\'s warm-up match in La Línea. The US travel architecture is now actively removing African officials from a tournament co-hosted by the US. The soft power cost of the Ebola response to the African continent is accumulating in real time.', icon: '⚽' },
    { title: 'JUNE 11 TOMORROW — WORLD CUP + ETHIOPIA RESULTS — HORN OF AFRICA AT ZERO HOUR', body: 'June 11: World Cup 2026 opens Mexico City 17:00 local — Mexico vs Canada. Ethiopia election results announced — PP landslide confirmed, post-election war risk on TPLF and Eritrea goes live. DRC Leopards arrive Houston for June 17 first game vs Portugal. Somalia opposition vows continued fight. Ebola containment fragile — 35 new cases yesterday. The world\'s biggest sporting event opens as the Horn of Africa enters its most dangerous political week since 2020. The contrast is Africa\'s defining geopolitical image of 2026.', icon: '🌍' },
  ],

  insight1: {
    title: 'EBOLA AT 550 CONFIRMED WITH ARMED GROUPS ATTACKING RESPONDERS IS THE WHO\'S WORST-CASE SCENARIO',
    body: 'The 2018-2020 North Kivu Ebola outbreak — which killed 2,286 people over two years — was defined by exactly this dynamic: armed groups attacking health workers, community resistance to body-handling protocols, and contact tracing that never reached the 90% threshold needed to stay ahead of transmission. The Bundibugyo strain is different — more transmissible in some contexts, no approved vaccine — but the structural containment failures are identical. A burial team attacked in Bunia with two responders seriously injured and vehicles destroyed is not an isolated incident: it is a pattern. The DRC government naming armed groups as actively hindering the response is significant — it is an official acknowledgement that the security environment is incompatible with conventional outbreak response. The WHO\'s $518m plan cannot buy security. The ceasefire appeal has not been heeded. Contact tracing is still below 90%. Thirty-five new cases in 24 hours is acceleration, not containment.',
    conclusion: 'EBOLA AT 550 CONFIRMED WITH ARMED GROUP ATTACKS ON RESPONDERS REPLICATES THE STRUCTURAL CONDITIONS OF THE 2018-2020 OUTBREAK THAT KILLED 2,286. THE DIFFERENCE IS NO VACCINE. THE TRAJECTORY IS NOT CONTAINMENT. WATCH FOR WHO RISK LEVEL UPGRADE.',
  },

  insight2: {
    title: 'THE SOMALI REFEREE BAN AND THE DRC FAN BAN ARE THE TWO MOST CONSEQUENTIAL SOFT POWER MOMENTS OF AFRICA\'S WORLD CUP',
    body: 'The 2026 World Cup was supposed to be Africa\'s moment — Morocco\'s semi-final in 2022 had raised expectations for a sub-Saharan breakthrough, DRC qualified for their first tournament since 1974, and the continent had six teams in the tournament. Instead: DRC\'s fans cannot travel to the US. A Somali referee has been barred from officiating. DRC\'s warm-up match was banned in Spain. The tournament begins tomorrow and the dominant Africa narrative is not football — it is Ebola, travel bans, and the US\'s immigration enforcement architecture intersecting with sport. This is the soft power cost that does not appear in sovereign risk models but is being absorbed into global perceptions of Africa\'s institutional reliability, political stability, and accessibility as an investment destination.',
    conclusion: 'THE SOMALI REFEREE BAN AND DRC FAN BAN ARE NOT FOOTBALL STORIES — THEY ARE SOVEREIGN RISK STORIES. THE GLOBAL PERCEPTION OF AFRICA BEING SHAPED BY THE 2026 WORLD CUP IS DEFINED BY EXCLUSION AND CRISIS, NOT FOOTBALL PERFORMANCE.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 EVE: EBOLA 550 CONFIRMED 101 DEAD ARMED GROUPS ATTACKING, SOMALIA CEASEFIRE BUT CRISIS DEEPENS, SOMALI REFEREE WORLD CUP BANNED, JUNE 11 TOMORROW',
    body: 'The eve of the continent\'s most consequential day delivers maximum risk density. Ebola has 550 confirmed cases and 101 deaths — 35 new in 24 hours, armed groups attacking burial teams in Bunia, contact tracing below threshold. Somalia\'s Mogadishu ceasefire is not a resolution — the opposition calls Mohamud "former president" and vows to fight on, Jubaland and Puntland reject his rule, there is no constitutional court to adjudicate. A Somali referee has been dropped from the World Cup after US visa denial — the second Africa-specific casualty of the Ebola travel architecture after the DRC fan ban. Tomorrow June 11: World Cup opens Mexico City, Ethiopia results announced, DRC Leopards arrive Houston. Kenya\'s Finance Bill clock — 15 days to the June 25 2024 storming anniversary. South Africa\'s June 30 countdown: 20 days. Senegal\'s IMF visit this week. Ghana remains the continental benchmark.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.82',
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
    { time: '09:30:00', signal: 'Ebola ECDC June 9: DRC 550 confirmed 101 deaths. 35 new cases in 24 hours, 10 new deaths. Ituri 518 from 17 health zones. Uganda 19 confirmed, 2 deaths. Burial team attacked Nyamurongo cemetery Bunia — 2 injured, 2 vehicles destroyed. Armed groups actively hindering response. DRC government: "concern over armed groups." 309 in isolation.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Somalia: Mogadishu violence subsided after 2 days — government declares order restored. But opposition rejects Mohamud\'s rule, calls him "former president," vows to fight on. No constitutional court. Jubaland + Puntland reject amendments. Dialogue offer rejected twice. Structural crisis ongoing.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'Somali referee Omar Artan dropped from World Cup 2026 after US visa denied — linked to Ebola travel restrictions. Second Africa World Cup casualty after DRC fan travel ban. US entry restrictions removing African officials from World Cup. Soft power cost accumulating in real time.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:45:00', signal: 'JUNE 11 TOMORROW: World Cup opens Mexico City 17:00 local — Mexico vs Canada. Ethiopia results — PP landslide + post-election war risk live. DRC Leopards arrive Houston. Somalia opposition active. Ebola containment fragile. Horn of Africa compound risk at maximum same day World Cup begins.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya Finance Bill 2026: June 25 storming anniversary in 15 days. June 30 deadline in 20 days. Opposition Kalonzo: "Ruto learnt nothing." Gen-Z watching. Bill includes phone excise, crypto taxes, digital economy levies. Eurobond Q2 $2bn rollover critical. KES 129.53. Five simultaneous crises.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Senegal: IMF visit this week — June 15. Bonds rallying from 50.6c record low. Finance Minister Diba targets agreement June 30. Three Pastef members in Lo government. Acute default risk defused. Structural risk: 132% debt/GDP, $9.7bn obligations 2026. Oxford Economics Venezuela/Lebanon classification stands.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '08:00:00', signal: 'SA June 30 — 20 days. March and March cannot legally arrest migrants — Ramaphosa warned only officials may act. ZAR 16.30 near highest since March. SARB 7%. Household debt: 41% in default. PEPFAR-CDC expires September. 5-point plan announced but implementation months away.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX June 10: NGN 1,360.73 | GHS 11.82 | KES 129.53 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. ZAR near highest since March — SARB 7%, PGM/gold export revenues, fiscal discipline. NGN strengthening trend. Markets open — watch Senegal bond spreads for IMF visit week rally continuation.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 56, fx: 42, debt: 58, political: 85, external: 60 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 46, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 96, fiscal: 84, fx: 74, debt: 90, political: 99, external: 98 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 94, fiscal: 76, fx: 44, debt: 70, political: 94, external: 92 },
    { country: 'Senegal', flag: '🇸🇳', score: 84, fiscal: 86, fx: 74, debt: 88, political: 82, external: 80 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.82', change: '+15.83%', stress: 'MODERATE', ytd: '+5.47%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Results JUNE 11 — TOMORROW', type: 'General Election', risk: 'CRITICAL', note: 'PP landslide. Results same day World Cup opens. Pretoria Agreement collapsing. Eritrea tensions. Post-election war window goes live TOMORROW. Most dangerous Horn window since 2020.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Active Crisis — Ceasefire Not Resolution', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Mogadishu violence subsided. Opposition calls Mohamud "former president," vows to fight on. Jubaland + Puntland reject amendments. No constitutional court. Somali referee banned from World Cup. Structural crisis ongoing.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies sweep expected. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'HIGH', note: 'June 30 — 20 days. March and March legal constraints. Ramaphosa 5-point plan. ZAR near March high. SARB 7%. 20 days to manage compound crisis.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: 'Tinubu APC nomination. Dangote 700k bpd. 360 Boko Haram rescued. Multi-vector security crisis. 2027 risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. June 25 storming anniversary in 15 days. Kalonzo: "Ruto learnt nothing." Gen-Z watching. Eurobond Q2 rollover critical.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.8m PAID EARLY', instrument: 'Bond Coupons', maturity: 'PAID — IMF VISIT THIS WEEK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — IMF June 15', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'CEASEFIRE — OPPOSITION "FORMER PRESIDENT"', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'RESULTS TOMORROW — WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'JUNE 25 IN 15 DAYS — JUNE 30 IN 20', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+35', bond: '-1.8pts', fx: '+3.5%', signal: 'JUNE 30 — 20 DAYS — ZAR NEAR HIGH', color: '#f5a623' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'BONDS RALLY — IMF THIS WEEK', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.2pts', fx: '-13.0%', signal: 'DANGOTE + 360 RESCUED — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
