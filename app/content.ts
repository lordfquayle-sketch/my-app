export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 12, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'WORSENING',
    drivers: ['Johannesburg Mass Shooting — 12 Dead Including Malawian National — Manhunt for 10+ Suspects', 'Bafana Lose 2-0 to Mexico — Two Red Cards — Both Players Miss Czech Republic Match', '268 Nigerians Return From SA Today — 5-Year Re-Entry Ban Imposed Over Illegal Stay', 'Sudan Drone Strikes Kill 30+ Civilians — El Obeid Deadliest — RSF Attributed'],
    regions: [
      { region: 'East Africa', score: 99, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 92, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 78, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'JOHANNESBURG MASS SHOOTING: 12 dead, 9 injured in attack on informal settlement near Johannesburg — manhunt for 10+ suspects ongoing. Victims include Malawian national Tadeo Banda (former Mr Malawi). This is the THIRD major xenophobia-linked violent incident in two weeks after Mossel Bay killings. Separately: Bafana lost 2-0 to Mexico in World Cup opener — Sithole and Zwane both shown red cards, both suspended for Czech Republic match. Government urged team to stay focused. Western Cape flood recovery ongoing — long-term. June 30: 18 days.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: '268 Nigerians returning from South Africa today amid xenophobia tensions — State Foreign Minister receiving them. South Africa has imposed a 5-year re-entry ban on the 268 returnees over illegal stay — diplomatic escalation. This follows Ghana 297, Mozambique 545+, Malawi repatriations. Nigeria-SA relations strained further — previous xenophobia waves triggered retaliatory attacks on SA businesses in Nigeria, warning already issued.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', alert: 'Drone strikes across Sudan killed 30+ civilians and 5 soldiers — Emergency Lawyers Group. Deadliest in El Obeid, North Kordofan: 23 civilians killed, 19 injured — attributed to RSF. Initial strike on residential areas killed 5, injured 12. Second strike targeted MOURNERS AT FUNERAL — killed 4, injured 7. South Kordofan Delling: 5 soldiers killed. Renewed drone activity Khartoum North. Sudan civil war compounding — West Africa Sahel crisis (Mali, Niger, Burkina Faso) now has a North African parallel in Sudan.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Schools to close for mid-term break June 24-28 — government announced. This is the SAME WEEK as the June 25 storming anniversary — schools closure may reduce youth mobilisation capacity OR free up students for protests, depending on interpretation. CS Mbadi defending tough 2026/27 budget amid economic pressures. Finance Bill 2026 due June 30 — 18 days. Eurobond Q2 rollover critical.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election window: PP confirmed 457/547 seats, Abiy third term. 24 hours since results — no major Tigray escalation reported yet but window remains live. Pretoria Agreement "on verge of collapse" per Foreign Policy. Eritrea tensions over Red Sea access ongoing. Watch continues for Abiy posture signals.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'JOHANNESBURG MASS SHOOTING KILLS 12 — BAFANA LOSE OPENER WITH TWO RED CARDS — 268 NIGERIANS RETURN UNDER 5-YEAR BAN — SUDAN DRONE STRIKES HIT FUNERAL MOURNERS',
    body: 'June 12 delivers four simultaneous crises across the continent. A mass shooting at an informal settlement near Johannesburg killed 12 people and injured 9 — among the dead is Malawian national Tadeo Banda, the former Mr Malawi. A manhunt for more than 10 suspects is underway. This is the third major xenophobia-adjacent violent incident in two weeks, following the Mossel Bay killings. On the football pitch, Bafana Bafana lost their World Cup opener 2-0 to Mexico — Hugo Broos said his players were overwhelmed by the occasion, and two red cards to Sithole and Zwane mean both miss the Czech Republic match. The government urged the team to remain focused. Diplomatically, 268 Nigerians are returning home from South Africa today amid the xenophobia crisis — but South Africa has imposed a 5-year re-entry ban on these returnees over illegal stay, a significant escalation in the bilateral relationship. And in Sudan, drone strikes attributed to the RSF killed more than 30 civilians and 5 soldiers — the deadliest in El Obeid, where a second strike deliberately targeted mourners gathered at a funeral for the first attack\'s victims, killing 4 more and injuring 7. The North African Sahel crisis is intensifying in parallel with West Africa\'s.',
    tag: 'JUNE 12 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 12, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'ELEVATED', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'JOHANNESBURG MASS SHOOTING — 12 DEAD INCLUDING FORMER MR MALAWI — MANHUNT ONGOING', body: 'Attack on informal settlement near Johannesburg left 12 dead, 9 injured. Manhunt for 10+ suspects underway. Victims include Malawian national Tadeo Banda — former Mr Malawi titleholder. This is the third major xenophobia-adjacent violent incident in two weeks following Mossel Bay (5 Mozambicans killed). The pattern of violence against foreign nationals in informal settlements is escalating ahead of June 30. Police "more resources deployed" to the incident. The death toll and international profile of the victim (Malawi pageant winner) will draw additional diplomatic attention from Malawi, which is already repatriating citizens.', icon: '🚨' },
    { title: 'BAFANA LOSE 2-0 TO MEXICO — TWO RED CARDS — BOTH PLAYERS OUT VS CZECH REPUBLIC', body: 'South Africa lost their World Cup opener 2-0 to Mexico in Mexico City. Coach Hugo Broos: players "overwhelmed by the occasion." Red cards shown to Siphephelo Sithole and Themba Zwane disrupted the game plan — both suspended for the next match against the Czech Republic. Deputy Government Spokesperson William Baloyi urged the team to remain focused and confident, saying SA "remains proud" and believes recovery is possible in remaining fixtures. The defeat arrives the same week as the Johannesburg shooting — a difficult news cycle for the GNU\'s soft power World Cup moment.', icon: '⚽' },
    { title: '268 NIGERIANS RETURN FROM SA — 5-YEAR RE-ENTRY BAN IMPOSED — DIPLOMATIC ESCALATION', body: 'State Foreign Minister receiving 268 Nigerians returning from South Africa today amid the xenophobia crisis. South Africa has slammed a 5-year ban on these 268 returnees over illegal stay — converting a humanitarian repatriation into a punitive diplomatic action. This follows the pattern of Ghana (297), Mozambique (545+), and Malawi repatriations — but the 5-year ban is a new escalation specific to Nigeria. Given Nigeria\'s prior warning against retaliatory attacks on SA businesses, this ban could inflame tensions further. Watch for Nigerian government response in coming days.', icon: '🔥' },
    { title: 'SUDAN: DRONE STRIKES KILL 30+ — FUNERAL MOURNERS DELIBERATELY TARGETED IN EL OBEID', body: 'Emergency Lawyers Group: drone strikes across Sudan killed at least 30 civilians and 5 soldiers. El Obeid, North Kordofan, deadliest: 23 civilians killed, 19 injured — attributed to RSF. Initial strike on residential neighbourhoods killed 5, injured 12. A SECOND STRIKE deliberately targeted mourners gathered at a cemetery during the funeral for the first attack\'s victims — killing 4 more, injuring 7. South Kordofan Delling: 5 soldiers killed. Renewed drone activity reported in Khartoum North. The deliberate targeting of funeral mourners is a war crimes-level escalation in the Sudan civil war, which continues to compound the broader Sahel security collapse alongside Mali, Niger and Burkina Faso.', icon: '💥' },
  ],

  insight1: {
    title: 'THE JOHANNESBURG SHOOTING IS THE THIRD ESCALATION IN A PATTERN THAT RAMAPHOSA\'S 5-POINT PLAN CANNOT YET ADDRESS',
    body: 'Twelve people dead in an attack on an informal settlement near Johannesburg — including a Malawian national with international profile — is the third major violent incident targeting or affecting foreign nationals in South Africa in two weeks, following the Mossel Bay killings of five Mozambicans. Ramaphosa\'s 5-point plan announced on June 8 — biometric register, employer jailing, deportation courts — is structurally sound but takes months to implement: the register requires building, the courts require establishing, the Traffic Registration Number regulations are due "within 3 months." None of these measures can prevent an attack on an informal settlement happening now. The gap between policy announcement and operational capacity is exactly the period — 18 days to June 30 — when violence is escalating. The Johannesburg shooting will draw international attention from Malawi, compounding the diplomatic pressure already building from Mozambique, Ghana and now Nigeria.',
    conclusion: 'THE JOHANNESBURG SHOOTING CONFIRMS THE EXECUTION GAP IN RAMAPHOSA\'S 5-POINT PLAN — POLICY ANNOUNCED JUNE 8, IMPLEMENTATION MONTHS AWAY, VIOLENCE ESCALATING NOW. 18 DAYS TO JUNE 30 WITH NO OPERATIONAL TOOLS YET DEPLOYED.',
  },

  insight2: {
    title: 'THE 5-YEAR NIGERIA RE-ENTRY BAN CONVERTS A HUMANITARIAN STORY INTO A DIPLOMATIC ESCALATION',
    body: 'Repatriating citizens during a xenophobia crisis is a humanitarian act by the receiving country (Nigeria) and, at minimum, a neutral act by the sending country (South Africa). South Africa imposing a 5-year re-entry ban on the 268 returnees over illegal stay converts this into something else: a punitive measure applied during a period of acute bilateral tension, applied specifically to Nigerian nationals at a moment when Nigeria has already warned against retaliatory attacks on SA businesses following prior xenophobia waves. Whether intended as routine immigration enforcement or not, the ban will be read in Abuja as South Africa adding insult to the xenophobia crisis. Nigeria\'s government response in the coming 48-72 hours — formal protest, summoning the SA ambassador, or silence — will indicate whether this becomes a genuine diplomatic incident or is absorbed quietly.',
    conclusion: 'THE 5-YEAR NIGERIA RE-ENTRY BAN IS A DIPLOMATIC ESCALATION RISK AT THE WORST POSSIBLE MOMENT FOR SA-NIGERIA RELATIONS. WATCH ABUJA\'S RESPONSE IN THE NEXT 48-72 HOURS — AND ANY SIGNS OF RETALIATORY ACTION AGAINST SA BUSINESSES IN NIGERIA.',
  },

  brief: {
    week: '24',
    title: 'WEEK 24 FRIDAY: JOHANNESBURG SHOOTING 12 DEAD, BAFANA LOSE OPENER, 268 NIGERIANS RETURN UNDER 5-YEAR BAN, SUDAN FUNERAL STRIKE',
    body: 'Week 24 closes with South Africa absorbing multiple simultaneous shocks. A mass shooting near Johannesburg killed 12 — including the former Mr Malawi — the third major xenophobia-adjacent violent incident in two weeks. Bafana Bafana lost their World Cup opener 2-0 to Mexico with two red cards, both players suspended for the Czech Republic match. 268 Nigerians returned home today under a new 5-year SA re-entry ban — a diplomatic escalation following the Ghana, Mozambique and Malawi repatriations. In Sudan, RSF-attributed drone strikes killed 30+ civilians, with a second strike deliberately targeting funeral mourners in El Obeid — a war-crimes-level escalation that adds a North African dimension to the Sahel crisis. Ethiopia\'s post-election window remains live 24 hours after Abiy\'s confirmed third term, with no major Tigray escalation reported yet. Kenya schools close June 24-28 — the same week as the June 25 storming anniversary. South Africa: 18 days to June 30. ZAR strengthened to 16.26 — GHS weakened sharply to 11.13.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.13',
    KES: '129.45',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.26',
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
    { time: '09:30:00', signal: 'Johannesburg mass shooting: 12 dead, 9 injured at informal settlement. Manhunt for 10+ suspects. Victims include Malawian national Tadeo Banda (former Mr Malawi). Third xenophobia-adjacent violent incident in 2 weeks after Mossel Bay (5 Mozambicans killed). Police deploying more resources. International attention from Malawi expected.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Bafana lose World Cup opener 2-0 to Mexico, Mexico City. Broos: players "overwhelmed by occasion." Red cards Sithole + Zwane — both suspended vs Czech Republic. Govt spokesperson Baloyi: SA "remains proud," urges focus for recovery. Difficult news cycle alongside Johannesburg shooting.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '09:00:00', signal: '268 Nigerians return from SA today amid xenophobia — State Foreign Minister receiving them. SA imposes 5-YEAR RE-ENTRY BAN on returnees over illegal stay — diplomatic escalation following Ghana 297, Mozambique 545+, Malawi repatriations. Nigeria had warned against SA business reprisals. Watch Abuja response 48-72hrs.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '08:45:00', signal: 'Sudan: Drone strikes kill 30+ civilians, 5 soldiers — Emergency Lawyers Group. El Obeid North Kordofan deadliest: 23 civilians dead, 19 injured, RSF attributed. SECOND STRIKE targeted funeral MOURNERS — 4 dead, 7 injured. South Kordofan Delling: 5 soldiers dead. Khartoum North renewed activity. War-crimes-level escalation.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Kenya: Schools close June 24-28 for mid-term break — government announced. Same week as June 25 storming anniversary. CS Mbadi defending tough 2026/27 budget. Finance Bill due June 30 — 18 days. Eurobond Q2 rollover critical. KES 129.45.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Ethiopia: 24 hours since PP 457/547 seats confirmed, Abiy third term. No major Tigray escalation reported yet — post-election window remains live. Pretoria Agreement "on verge of collapse" per Foreign Policy. Eritrea Red Sea tensions ongoing. Continued watch on Abiy posture signals.', detail: 'MEDIUM', type: 'INFO', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:00:00', signal: 'Liberia: $19.2m cocaine shipment bust at international airport — major drug trafficking interdiction. North West SA: R25m tender for Biesiesvlei Wastewater Treatment Plant declared invalid by Special Tribunal — governance/corruption signal. South Africa Western Cape flood recovery long-term ongoing.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 12: NGN 1,360.73 | GHS 11.13 (sharp weakening from 11.82 — down to June 2025 low levels) | KES 129.45 | EGP 52.22 | ZAR 16.26 (strengthening — ZAR/USD up 9.33% YoY) | UGX 3,770 | ZMW 19.02. GHS move is significant — now near 12-month average of 11.05. ZAR continuing to strengthen despite SA domestic crisis stack.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 68, fiscal: 56, fx: 42, debt: 58, political: 90, external: 64 },
    { country: 'Ghana', flag: '🇬🇭', score: 44, fiscal: 36, fx: 54, debt: 36, political: 32, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 96, fiscal: 84, fx: 74, debt: 90, political: 99, external: 98 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 97, fiscal: 76, fx: 48, debt: 70, political: 99, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 84, fiscal: 86, fx: 74, debt: 88, political: 82, external: 80 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Sudan', flag: '🇸🇩', score: 98, fiscal: 90, fx: 92, debt: 88, political: 99, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.13', change: '+8.51%', stress: 'ELEVATED', ytd: '+13.61%', color: '#ff3b3b' },
    { code: 'KES', country: 'Kenya', rate: '129.45', change: '+0.21%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.26', change: '+9.33%', stress: 'LOW', ytd: '+9.33%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP Confirmed 457/547 — Abiy Third Term', type: 'General Election', risk: 'CRITICAL', note: '24hrs post-results. No major Tigray escalation reported yet but window live. Pretoria Agreement collapsing. Eritrea tensions ongoing. Continued watch.', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', date: 'Active Civil War — Escalating', type: 'Civil War', risk: 'CRITICAL', note: 'Drone strikes kill 30+ civilians. Funeral mourners deliberately targeted El Obeid. RSF attributed. War-crimes-level escalation. North African parallel to West Africa Sahel crisis.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding but opposition calls Mohamud "former president." No constitutional court. Jubaland + Puntland reject amendments.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 18 days. Johannesburg shooting 12 dead. Bafana lost opener. Nigeria 5-year ban diplomatic escalation. Ramaphosa 5-point plan implementation gap exposed.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: '268 nationals return from SA under 5-year ban — diplomatic escalation. Watch Abuja response. Dangote 700k bpd. Multi-vector security crisis ongoing.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — 18 days. Schools close June 24-28 — overlaps June 25 anniversary. Eurobond Q2 critical. Tough 2026/27 budget defended.', color: '#ff3b3b' },
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
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'FUNERAL STRIKE — 30+ DEAD — RSF', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+42', bond: '-2.1pts', fx: '+9.3%', signal: 'JOBURG SHOOTING 12 DEAD — JUNE 30 18D', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WINDOW — 24HRS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '+0.2%', signal: 'SCHOOLS CLOSE JUNE 24-28 — JUNE 30 18D', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '+10', bond: '-0.3pts', fx: '-13.0%', signal: '5-YEAR SA BAN — DIPLOMATIC ESCALATION', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'IMF MONDAY — AGREEMENT JUNE 30', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '+12', bond: '-0.4pts', fx: '+8.5%', signal: 'GHS WEAKENS SHARPLY — MONITOR', color: '#f5a623' },
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
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
