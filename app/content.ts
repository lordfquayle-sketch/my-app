export const content = {
  riskIndex: '83',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 20, 2026 09:00 UTC',
    overallScore: 83,
    trend: 'EASING',
    drivers: ['SADC Extraordinary Summit Endorses Peace And Security Measures Amid SA Xenophobia Fallout', 'South Africa: Ngobese-Zuma Shooting, Two Nigerians Killed, Nigeria ECOWAS Threat — Week In Review', 'Zambia Election August 13 — 3 Weeks Away — Hichilema Under Maximum Compound Pressure', 'Ivory Coast And Ghana Remain Continental Credit Benchmarks — Africa Debt Markets Bifurcated'],
    regions: [
      { region: 'East Africa', score: 90, trend: '↓', color: '#ff3b3b' },
      { region: 'West Africa', score: 84, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 74, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 86, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'WEEK IN REVIEW: March and March leader Ngobese-Zuma shot and wounded July 16 — movement vowed bigger protests. Two Nigerian citizens killed: Emeka Iroegbu (allegedly Tshwane Metro Police) and Musa Yunana Joe (eMalahleni). Nigeria formally condemned Minister Ntshavheni\'s anti-Nigerian comments as hate speech — threatened ECOWAS and AU action. SADC extraordinary summit July 18-19 endorsed wide-ranging peace and security measures — directly relevant to xenophobia crisis affecting multiple SADC member states. 53,499 deported since June 14. December 31 ultimatum from movement for workplace quotas and mass deportations. Weekly Thursday marches continuing. ZAR at 16.30 — stable.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria-SA bilateral crisis at peak: hate speech condemnation, ECOWAS/AU threat, two citizens killed, 1,159 nationals in 53,499 deportees. US House passed a bill to cut foreign aid to Nigeria — a separate external pressure vector. 17 million facing severe hunger in northern Nigeria. ISSP active in Kebbi and Sokoto. 842 killed May 2026. World Bank $1.25bn pledge 2026-2032 positive. NGN at 1,377.96 — strengthening trend from June 2025 peak intact despite bilateral crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', alert: 'Zambia general election August 13 — 3 WEEKS AWAY. Hichilema under maximum compound pressure: slow reform delivery, 3 hours per day power cuts still reported, opposition consolidating. The Ivory Coast Eurobond success (5x oversubscribed) and Ghana IMF programme completion provide a stark contrast — showing what sustained fiscal discipline looks like, vs Zambia\'s post-restructuring political risk environment heading into polling day.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola DRC: 600+ confirmed deaths — entering 10th week since May 17 PHEIC declaration. No approved vaccine, no approved treatment. Contact tracing below 90%. France confirmed first European case. US travel restrictions on DRC nationals expanded. White House $1.4bn Congress ask outstanding. SA Health Department strengthening Ebola readiness. Third-largest outbreak in history — approaching structural endemic timeline rather than acute emergency.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', alert: 'AUSSOM US funding ended — mission described as "finished" by senior diplomat. 12,000-strong AU peacekeeping force faces existential funding gap. Al-Shabaab retook territory during Somalia\'s 2024-2025 constitutional crisis and is positioned to exploit the AUSSOM vacuum. Constitutional crisis: Mohamud vs opposition, Jubaland and Puntland reject amendments. No constitutional court. SADC extraordinary summit — which focused on SA xenophobia — does not address the AUSSOM Horn crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SADC EXTRAORDINARY SUMMIT ENDORSES SECURITY MEASURES — WEEK IN REVIEW: NGOBESE-ZUMA SHOT, NIGERIANS KILLED, NIGERIA ESCALATES — ZAMBIA 3 WEEKS TO ELECTION — AFRICA BIFURCATED',
    body: 'July 20 — the Sunday close of the most consequential week since the June 30 deadline. The SADC extraordinary summit on July 18-19 endorsed wide-ranging peace and security measures, with the xenophobia crisis affecting Ghana, Mozambique, Malawi, Zimbabwe, Nigeria, Uganda, Kenya and DRC nationals all framing the regional agenda. The week\'s dominant news: March and March leader Ngobese-Zuma was shot on July 16 — the movement vowed bigger protests. Two Nigerian citizens were killed in SA — Nigeria threatened ECOWAS and AU mechanisms. The US House passed a bill cutting foreign aid to Nigeria. 17 million face severe hunger in northern Nigeria. Zambia\'s election is 3 weeks away. Ebola enters its 10th week with no vaccine and no treatment. AUSSOM\'s funding gap remains unresolved. Senegal\'s constitutional crisis deepens. Africa\'s credit markets have bifurcated definitively: Ivory Coast 5x oversubscribed at 5.39%, Ghana\'s IMF programme complete — vs Senegal at 50.6c bonds, Ethiopia\'s defaulted Eurobond. Programme discipline is the dividing line.',
    tag: 'JULY 20 WEEKLY REVIEW',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'July 20, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SADC EXTRAORDINARY SUMMIT ENDORSES PEACE AND SECURITY MEASURES — XENOPHOBIA IN FRAME', body: 'The SADC extraordinary summit on July 18-19 endorsed wide-ranging measures to strengthen peace, security and democratic governance across the region. The xenophobia crisis directly affecting Ghana, Mozambique, Malawi, Zimbabwe, Nigeria and other nationals was a central frame for the discussions — multiple SADC member states have repatriated thousands of citizens from South Africa. The summit\'s endorsement of security cooperation frameworks and democratic governance standards is the regional institutional response to a crisis that has produced the largest continental evacuation in the post-apartheid era. The specific measures are being implemented through SADC\'s existing Organ on Politics, Defence and Security.', icon: '🌍' },
    { title: 'WEEK IN REVIEW: NGOBESE-ZUMA SHOT — NIGERIANS KILLED — NIGERIA ESCALATES — MOVEMENT VOWS BIGGER PROTESTS', body: 'The definitive week-ending summary: March and March leader Ngobese-Zuma shot and wounded July 16. Two Nigerian citizens killed in SA (Emeka Iroegbu, Musa Yunana Joe). Nigeria formally condemned SA minister\'s comments as hate speech — threatened ECOWAS and AU mechanisms — most serious SA-Nigeria crisis since 2019. US House passed a bill cutting foreign aid to Nigeria separately. 53,499 deported since June 14. December 31 ultimatum for workplace quotas and mass deportations. Weekly Thursday marches continuing. SADC extraordinary summit addressed the regional fallout. ZAR at 16.30, stable through the political turbulence.', icon: '🔥' },
    { title: 'ZAMBIA ELECTION AUGUST 13 — 3 WEEKS — HICHILEMA UNDER MAXIMUM COMPOUND PRESSURE', body: 'Zambia\'s general election is 3 weeks away. Hichilema enters the final stretch under maximum compound pressure: slow reform delivery, persistent 3-hour-per-day power cuts, opposition consolidating around a narrative of unmet promises. The ZMW is at 19.02 — down 32.91% year-to-date, the worst performing major African currency. The Ivory Coast and Ghana benchmarks — 5x oversubscribed Eurobond, completed IMF programme — provide a visible contrast to what sustained fiscal discipline can achieve. Zambia\'s post-restructuring political risk environment heading into an election is the most acute medium-term credit risk on the continent after Senegal and Somalia\'s security vacuum.', icon: '🗳️' },
    { title: 'AFRICA CREDIT MARKETS BIFURCATED — IVORY COAST/GHANA VS SENEGAL/ETHIOPIA — DISCIPLINE IS THE DIVIDING LINE', body: 'The structural lesson of July 2026: Africa\'s credit markets have definitively bifurcated. On one side — Ivory Coast ($1.3bn Eurobond, 5x oversubscribed, 5.39%, IMF $832.8m disbursed, Fitch BB) and Ghana (IMF programme completed, 3-year monitoring arrangement, Fitch B/positive, $12.3bn reserves, inflation 3.4%). On the other — Senegal (bonds at 50.6c, Venezuela/Lebanon category per Oxford Economics, constitutional rupture, IMF programme pending) and Ethiopia ($1bn Eurobond in default, Ad Hoc Committee standoff, TPLF conflict live). The programme discipline variable explains the gap more than any other single factor. Ivory Coast and Ghana invested in IMF credibility. Senegal and Ethiopia did not.', icon: '📊' },
  ],

  insight1: {
    title: 'THE SADC EXTRAORDINARY SUMMIT IS THE REGIONAL INSTITUTIONAL RESPONSE THE JUNE 30 CRISIS DEMANDED — BUT IT ARRIVED THREE WEEKS LATE',
    body: 'The SADC extraordinary summit\'s endorsement of peace and security measures is the correct institutional response to a xenophobia crisis that produced the largest intra-African displacement event since Rwanda. Six nations evacuated citizens simultaneously. Multiple SADC members suffered bilateral diplomatic crises with South Africa. The regional architecture — SADC\'s Organ on Politics, Defence and Security — was designed precisely for situations like this. But the summit took place three weeks after June 30, while 53,499 people were already deported, two Nigerians were killed, the March and March leader was shot, and Nigeria threatened multilateral action. The institutional response arrived after the acute phase. This is the characteristic failure of African regional bodies: the architecture exists, the meetings happen, the frameworks are endorsed — but the response timeline consistently lags the crisis timeline.',
    conclusion: 'THE SADC EXTRAORDINARY SUMMIT IS THE RIGHT RESPONSE TO THE SA XENOPHOBIA CRISIS — THREE WEEKS AFTER THE CRISIS PEAKED. THE REGIONAL INSTITUTIONAL ARCHITECTURE EXISTS. THE RESPONSE TIMELINE DOES NOT MATCH THE CRISIS TIMELINE. THIS IS THE DEFINING WEAKNESS OF AFRICAN REGIONAL GOVERNANCE.',
  },

  insight2: {
    title: 'ZAMBIA\'S ELECTION IN 3 WEEKS IS THE NEXT MAJOR AFRICAN SOVEREIGN RISK EVENT — AND IT ARRIVES IN THE WORST POSSIBLE MACRO ENVIRONMENT',
    body: 'Zambia enters its August 13 election with the ZMW as the worst-performing major African currency YTD at -32.91%, persistent electricity shortages, unmet reform promises, and an opposition that has effectively mobilised the gap between Hichilema\'s 2021 promises and 2026 delivery. The post-debt-restructuring period — which should have been the platform for fiscal consolidation and investor confidence building — has instead been consumed by political management of reform fatigue. The Ivory Coast contrast is devastating: both countries needed IMF support, both restructured debt, both committed to reform paths. Ivory Coast executed — 5x oversubscribed Eurobond, $832.8m IMF disbursement. Zambia enters an election with a currency that has lost a third of its value year-to-date. Three weeks to polling day.',
    conclusion: 'ZAMBIA\'S AUGUST 13 ELECTION IS THE NEXT MAJOR AFRICAN SOVEREIGN RISK EVENT. ZMW -32.91% YTD, PERSISTENT POWER CUTS, AND AN OPPOSITION MOBILISING AROUND UNMET PROMISES MAKE THIS THE MOST CONTESTED AND CREDIT-CONSEQUENTIAL AFRICAN ELECTION SINCE KENYA 2022.',
  },

  brief: {
    week: '29',
    title: 'WEEK 29 CLOSE: SADC SUMMIT, NGOBESE-ZUMA SHOT, NIGERIANS KILLED, NIGERIA ESCALATES, ZAMBIA 3 WEEKS, AFRICA BIFURCATED',
    body: 'Week 29 closes with South Africa\'s xenophobia crisis having produced the continent\'s most serious regional diplomatic rupture since apartheid: a SADC extraordinary summit, Nigeria threatening ECOWAS and AU mechanisms, two Nigerians killed, the movement\'s leader shot, and 53,499 deported in four weeks. The regional institutional response arrived three weeks after the peak. Zambia\'s election is 3 weeks away — ZMW at -32.91% YTD, the worst performing major African currency. Africa\'s credit markets have definitively bifurcated: Ivory Coast and Ghana benchmark discipline rewarded; Senegal and Ethiopia distress penalised. Ebola enters week 10 with 600+ deaths, no vaccine, no treatment. Somalia\'s AUSSOM faces existential funding gap. Ethiopia\'s TPLF conflict is live. Sudan\'s EU gold ban is in effect. The AES bloc has begun ICC withdrawal. And the next continental flashpoint — Zambia\'s election — is 3 weeks away.',
  },

  fxRates: {
    NGN: '1,377.96',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.71',
    ZAR: '16.30',
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
    { time: '09:30:00', signal: 'SADC extraordinary summit July 18-19: endorsed wide-ranging peace, security and democratic governance measures. Xenophobia crisis affecting Ghana, Mozambique, Malawi, Zimbabwe, Nigeria, Uganda, Kenya nationals central to agenda. SADC Organ on Politics, Defence and Security implementing frameworks. Regional institutional response — 3 weeks after June 30 peak.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '09:15:00', signal: 'SA week review: Ngobese-Zuma shot July 16 — movement vows bigger protests. Two Nigerians killed (Iroegbu, Joe). Nigeria hate speech condemnation — ECOWAS/AU threat. US House bill to cut Nigerian foreign aid. 53,499 deported since June 14. December 31 ultimatum. Weekly Thursday marches. ZAR 16.30 stable.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'ZAMBIA ELECTION AUGUST 13 — 3 WEEKS. Hichilema under maximum compound pressure. ZMW -32.91% YTD — worst major African currency. Persistent 3hr/day power cuts. Opposition consolidating. Post-restructuring political risk environment entering election. Ivory Coast/Ghana discipline contrast stark.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '08:45:00', signal: 'Africa credit bifurcation: DISCIPLINED — Ivory Coast ($1.3bn 5x Eurobond, IMF $832.8m, Fitch BB); Ghana (IMF complete, monitoring arrangement, $12.3bn reserves, inflation 3.4%). DISTRESSED — Senegal (bonds 50.6c, constitutional rupture, IMF pending); Ethiopia ($1bn Eurobond default, TPLF conflict). Programme discipline is the dividing variable.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT STRESS', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Ebola DRC: 600+ deaths — week 10. No vaccine, no treatment. Contact tracing below 90%. France European case. US travel restrictions expanded. SA Health Dept ramping readiness. White House $1.4bn Congress ask. Third-largest outbreak on record. Somalia: AUSSOM US funding ended — Al-Shabaab positioned. Sudan: EU gold ban in effect — 59,000 dead, 14m displaced.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Ethiopia: National Dialogue Conference ongoing. TPLF conflict live. Eurobond in open dispute. IMF 5th review complete. Senegal: Pastef constitutional reforms — Faye referendum no date. IMF Q3 programme at risk. Zimbabwe: Mnangagwa signed amendments — direct elections abolished. AES bloc begun ICC withdrawal.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ivory Coast demolitions displacing thousands in Abidjan — urban development vs housing rights tension. Morocco-France strategic partnership deepened during Macron visit to Rabat. BRVM West African exchange showing strong gains. Nigeria: World Bank $1.25bn pledge 2026-2032. 17m facing severe hunger northern Nigeria.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 20: NGN 1,377.96 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR 16.30 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.71 | ZMW 19.02. All rates stable from July 16. ZAR holding at 16.30 despite compound political stress. NGN strengthening trend from June 2025 1,579 peak continuing.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 90, fiscal: 62, fx: 46, debt: 62, political: 96, external: 90 },
    { country: 'Ghana', flag: '🇬🇭', score: 32, fiscal: 28, fx: 40, debt: 28, political: 28, external: 36 },
    { country: 'Kenya', flag: '🇰🇪', score: 70, fiscal: 66, fx: 52, debt: 72, political: 70, external: 68 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 94, fiscal: 72, fx: 74, debt: 92, political: 98, external: 94 },
    { country: 'South Africa', flag: '🇿🇦', score: 88, fiscal: 74, fx: 60, debt: 68, political: 94, external: 86 },
    { country: 'Senegal', flag: '🇸🇳', score: 88, fiscal: 86, fx: 80, debt: 90, political: 92, external: 86 },
    { country: 'Zambia', flag: '🇿🇲', score: 86, fiscal: 72, fx: 92, debt: 78, political: 88, external: 82 },
    { country: 'Ivory Coast', flag: '🇨🇮', score: 26, fiscal: 22, fx: 20, debt: 26, political: 24, external: 22 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,377.96', change: '-13.47%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '-9.58%', stress: 'LOW', ytd: '+9.58%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Sahel/WAEMU', rate: '574.71', change: '-6.62%', stress: 'MODERATE', ytd: '-6.62%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 3 WEEKS', type: 'General Election', risk: 'HIGH', note: 'Hichilema under maximum pressure. ZMW -32.91% YTD. Power cuts. Slow reform. Opposition consolidated. Most imminent major African election and most credit-consequential.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Movement Leader Shot', type: 'Municipal Elections', risk: 'CRITICAL', note: 'Ngobese-Zuma shot — bigger protests vowed. Two Nigerians killed. Nigeria ECOWAS/AU threat. 53,499 deported. December ultimatum. SADC summit addressed fallout. Weekly marches.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Mohamud vs opposition. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'CRITICAL', note: 'Pastef reforms June 30. Faye referendum no date. IMF Q3 at risk. Bonds rallied from 50.6c but constitutional rupture deepening.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Signed — Direct Elections Abolished', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Mnangagwa signed. Direct elections abolished. Term to 2030. Most consequential African democratic regression of decade — fait accompli.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'National Dialogue — TPLF Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'National Dialogue ongoing. TPLF conflict live. Eurobond in open dispute. US visa restrictions. IMF complete.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: 'Accountability Phase — Court Orders', type: 'Political Crisis', risk: 'HIGH', note: '431 Kenyans in 53,499 deportees. 120-day gender cabinet court order. Finance Bill law. Accountability pending.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee Standoff', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 — CONSTITUTIONAL RISK', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 3 WEEKS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Ivory Coast', flag: '🇨🇮', primary: 'Cocoa/Oil', exposure: 'MEDIUM', gdpShare: '12%', revenueShare: '30%', price2026: 'Cocoa $5,100/t', fiscalBreakeven: 'N/A', breakevenNote: 'DIVERSIFIED', trend: '↑', risk: 'LOW' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$73', fiscalBreakeven: '$70/bbl', breakevenNote: 'NEAR BREAKEVEN', trend: '↓', risk: 'HIGH' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.3pts', fx: '-9.6%', signal: 'LEADER SHOT — NIGERIANS KILLED — ECOWAS THREAT', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION 3 WEEKS — ZMW WORST AFRICA YTD', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 850, delta: '+30', bond: '-0.5pts', fx: '-6.6%', signal: 'CONSTITUTIONAL RUPTURE — IMF Q3 AT RISK', color: '#ff3b3b' },
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'AUSSOM FINISHED — ALSHABAAB VACUUM', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+40', bond: '-2.0pts', fx: '-0.9%', signal: 'TPLF LIVE — EUROBOND DISPUTE — DIALOGUE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-13.5%', signal: 'HATE SPEECH — ECOWAS THREAT — US AID CUT', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-8', bond: '+0.6pts', fx: '+10.8%', signal: 'IMF COMPLETE — MONITORING — BENCHMARK', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — IMF $832M — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.80, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.85, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.30, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.30, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
  ],
}
