export const content = {
  riskIndex: '85',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 16, 2026 09:00 UTC',
    overallScore: 85,
    trend: 'STABLE',
    drivers: ['March And March Leader Ngobese-Zuma Shot — Movement Vows Bigger Protests In Response', 'Two Nigerian Citizens Killed In SA — Nigeria Formally Condemns "Hate Speech" Against Nigerians', 'ZAR Recovers To 16.30 — NGN Back To 1,378 — Major FX Reversal From Last Week\'s Spike', 'AES Bloc Burkina Faso Mali Niger Begin ICC Withdrawal — Africa Institutional Architecture Fragmenting'],
    regions: [
      { region: 'East Africa', score: 92, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 88, trend: '→', color: '#f5a623' },
      { region: 'North Africa', score: 76, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 88, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '↓', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'MARCH AND MARCH LEADER SHOT. Ngobese-Zuma was shot and wounded — specific circumstances and location under investigation. The movement has vowed bigger protests in response to the shooting. TWO NIGERIAN CITIZENS KILLED: Emeka Iroegbu allegedly killed by Tshwane Metro Police during xenophobia crackdown; Musa Yunana Joe killed outside his shop in eMalahleni. Nigeria formally condemned SA Minister Ntshavheni\'s comments linking Nigerians to drug crime as "hate speech" — Abuja warned it may pursue regional and international action. Nigeria-SA diplomatic crisis has escalated from compensation demand to hate speech condemnation. 53,499 deported since June 14. December year-end ultimatum from movement. ZAR at 16.30 — recovered from 18.68 spike.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria formally condemned SA minister Ntshavheni\'s comments linking Nigerians to drug crime as "hate speech" — warning it may pursue regional and international action including ECOWAS and AU mechanisms. Emeka Iroegbu allegedly killed by Tshwane Metro Police. Musa Yunana Joe killed outside his shop in eMalahleni. This is now the most serious Nigeria-SA bilateral crisis since the 2019 xenophobia wave. 17 million facing severe hunger in northern Nigeria — food security dimension of the security crisis deepening. ISSP active in Kebbi and Sokoto. 842 killed May 2026.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'AES Bloc', flag: '🌍', alert: 'Burkina Faso, Mali and Niger — the AES (Alliance of Sahel States) junta bloc — have initiated the ICC withdrawal process. This is a significant institutional signal: three African states simultaneously leaving the International Criminal Court in protest of what they characterise as Western judicial imperialism. Follows the AU\'s 2016 mass withdrawal threat. The AES withdrawal removes three major conflict theatres (Burkina Faso jihadist crisis, Mali JNIM/Wagner operations, Niger ISSP/JNIM) from ICC jurisdiction at exactly the moment when atrocity documentation is most urgent.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Ebola DRC: 600+ confirmed deaths, 1,000+ confirmed cases — 9th week since May 17 PHEIC declaration. SA Health Department ramping up Ebola readiness — cross-border risk protocols being strengthened. No approved vaccine, no approved treatment. Contact tracing below 90%. Free healthcare across Ituri launched. France first European case confirmed. White House $1.4bn Congress ask outstanding. US travel restrictions on DRC nationals expanded.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', alert: 'EU gold import ban now in effect. World\'s worst humanitarian emergency: 59,000 killed, 14 million displaced, 33.7 million needing urgent aid. RSF controls ~70% of Darfur. El Fasher under imminent threat. US imposed second round of chemical weapons sanctions. UN Security Council emergency session held. The institutional response has escalated but the RSF\'s gold transit through UAE and Gulf intermediaries may limit practical impact of EU ban.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'MARCH AND MARCH LEADER SHOT — TWO NIGERIANS KILLED IN SA — NIGERIA DECLARES SA MINISTER\'S COMMENTS "HATE SPEECH" — ZAR RECOVERS TO 16.30 — AES ICC WITHDRAWAL BEGINS',
    body: 'July 16 delivers the most consequential single day for SA-Nigeria relations since apartheid. The March and March leader Ngobese-Zuma has been shot and wounded — the movement has immediately vowed bigger protests in response. Two Nigerian citizens have been killed: Emeka Iroegbu allegedly by Tshwane Metro Police during the crackdown, and Musa Yunana Joe outside his shop in eMalahleni. Nigeria has formally condemned SA Minister Ntshavheni\'s comments linking Nigerians to drug crime as "hate speech" — with Abuja warning it may pursue action through ECOWAS and the AU. This escalates from the compensation demand and formal protest of the past two weeks into a potential multilateral institutional response. The ZAR has recovered sharply from the 18.68 spike to 16.30 — and NGN is back to 1,378, suggesting last week\'s spikes were partly data/technical rather than fundamental. The AES bloc — Burkina Faso, Mali and Niger — has begun ICC withdrawal proceedings simultaneously. The continent\'s institutional architecture is fragmenting from multiple directions at once: AUSSOM funded out, ICC being abandoned by the AES, and the AU unable to mount adequate response to Sudan, Ebola or the Horn security vacuum.',
    tag: 'JULY 16 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 16, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Sudan', flag: '🇸🇩', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '0', fxPressure: 'CRITICAL', liquidity: 'NONE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'MARCH AND MARCH LEADER SHOT — MOVEMENT VOWS BIGGER PROTESTS — TWO NIGERIANS KILLED', body: 'Ngobese-Zuma — the co-founder and most public face of March and March — was shot and wounded. Specific circumstances and location are under investigation. The movement immediately vowed bigger protests in response to the shooting — interpreting it as an attempt to silence them. Two Nigerian citizens have also been killed: Emeka Iroegbu allegedly by Tshwane Metro Police during the xenophobia crackdown, and Musa Yunana Joe killed outside his business in eMalahleni. The shooting of the movement\'s leader, combined with two Nigerian fatalities linked to the crackdown, creates the most explosive combination of political and diplomatic triggers since the June 30 deadline itself.', icon: '🚨' },
    { title: 'NIGERIA CONDEMNS SA HATE SPEECH — WARNS ECOWAS AND AU ACTION — BILATERAL CRISIS PEAK', body: 'Nigeria formally condemned Minister Ntshavheni\'s comments linking Nigerians to drug crime as "hate speech" — the Foreign Affairs Ministry issued a formal statement warning that Abuja may pursue regional and international action including through ECOWAS and AU mechanisms. This is the most serious diplomatic escalation in the Nigeria-SA crisis. The sequence: June 12 — Nigeria 5-year re-entry ban controversy; June compensation demand; now July formal hate speech condemnation with threat of multilateral action. Nigeria is Africa\'s most populous country and largest economy. If it activates ECOWAS mechanisms against South Africa over treatment of its citizens, the implications for SA\'s continental standing and SADC relationships are severe.', icon: '🔥' },
    { title: 'ZAR RECOVERS TO 16.30 — NGN BACK TO 1,378 — LAST WEEK\'S SPIKES PARTLY TECHNICAL', body: 'Live FX July 16: USD/ZAR approximately 16.30 (recovered from 18.68 spike), USD/NGN 1,377-1,381 (recovered from 1,579 spike). The sharp FX moves of July 14 appear to have been partly technical — possible data anomalies, thin liquidity, or short-term position unwinding rather than pure fundamental repricing. ZAR at 16.30 is consistent with its June average. NGN at 1,378 is consistent with its strengthening trend from the 1,579 June 2025 peak. The fundamental picture has not dramatically changed from last week — but the spikes were alarming enough to warrant investigation. GHS at 11.47, KES at 129.42, XOF at 574.71, UGX at 3,674.', icon: '📊' },
    { title: 'AES BLOC BEGINS ICC WITHDRAWAL — BURKINA FASO MALI NIGER — INSTITUTIONAL FRAGMENTATION', body: 'Burkina Faso, Mali and Niger — the AES bloc — have simultaneously initiated withdrawal proceedings from the International Criminal Court. The stated justification is protest against Western judicial overreach. The practical consequence: three of the most active jihadist conflict theatres in the world — Burkina Faso\'s AES/JNIM/ISSP crisis, Mali\'s Wagner-backed FAMA operations, Niger\'s post-coup security collapse — are being removed from ICC jurisdiction at exactly the moment when atrocity documentation is most needed. Follows AUSSOM\'s US funding collapse. The multilateral architecture that sustained African peace and security for two decades is fragmenting simultaneously from multiple directions.', icon: '⚖️' },
  ],

  insight1: {
    title: 'THE SHOOTING OF NGOBESE-ZUMA IS THE MOST DANGEROUS SINGLE DEVELOPMENT IN THE SA XENOPHOBIA CRISIS YET',
    body: 'The shooting of a protest movement leader — regardless of who is responsible — transforms the political dynamics in a specific and dangerous way. If the shooter is linked to pro-foreigner groups or state actors, it validates the movement\'s narrative of repression and martyrdom, dramatically increasing recruitment and mobilisation capacity. If the shooter is linked to rival anti-immigration factions or opportunistic criminality, the movement still gets the political benefit of presenting itself as under attack. Ngobese-Zuma has 1.7 million Facebook followers and is the most recognisable face of March and March. The immediate vow to hold bigger protests is the predictable and correct political response — and it means the July 17 Thursday march will be the largest and most emotionally charged since the June 30 deadline. The December year-end ultimatum now has a martyrdom narrative attached to it.',
    conclusion: 'THE NGOBESE-ZUMA SHOOTING IS THE MOST DANGEROUS SINGLE DEVELOPMENT IN THE SA XENOPHOBIA CRISIS SINCE THE JUNE 2 MOSSEL BAY KILLINGS. IT GIVES THE MOVEMENT A MARTYRDOM NARRATIVE AND DRAMATICALLY INCREASES THE THURSDAY JULY 17 MARCH\'S LIKELY SIZE AND INTENSITY.',
  },

  insight2: {
    title: 'NIGERIA\'S THREAT TO ACTIVATE ECOWAS AND AU MECHANISMS AGAINST SOUTH AFRICA IS UNPRECEDENTED AND CONSEQUENTIAL',
    body: 'Nigeria has never formally threatened to activate ECOWAS or AU mechanisms against a fellow African state over the treatment of its citizens. This is new diplomatic territory. ECOWAS does not have specific mechanisms for protecting member states\' citizens in non-ECOWAS countries — but the AU does have the right to intervene in cases of grave violations of human rights under the Constitutive Act. Whether Nigeria actually follows through with formal AU or ECOWAS resolutions against South Africa would depend on diplomatic developments, but the threat itself is a sovereign signal that Abuja is treating the deaths of Emeka Iroegbu and Musa Yunana Joe as a matter of state — not just bilateral diplomacy. South Africa\'s continental leadership aspirations — SADC chair, AU reform advocate — are directly threatened by a Nigeria-led multilateral response.',
    conclusion: 'NIGERIA\'S ECOWAS/AU THREAT IS UNPRECEDENTED IN AFRICAN DIPLOMATIC HISTORY AND DIRECTLY THREATENS SA\'S CONTINENTAL LEADERSHIP ASPIRATIONS. IF NIGERIA FORMALLY ACTIVATES AU MECHANISMS, THE IMPLICATIONS FOR SA\'S SADC RELATIONSHIPS, AU STANDING AND ZAR RISK PREMIUM ARE SEVERE.',
  },

  brief: {
    week: '29',
    title: 'WEEK 29 WEDNESDAY: NGOBESE-ZUMA SHOT MOVEMENT VOWS BIGGER PROTESTS, TWO NIGERIANS KILLED, NIGERIA ECOWAS THREAT, ZAR 16.30 RECOVERY, AES ICC WITHDRAWAL',
    body: 'The week\'s most consequential Wednesday. March and March leader Ngobese-Zuma has been shot and wounded — the movement vowed bigger protests immediately. Two Nigerian citizens have been killed in SA (Emeka Iroegbu allegedly by Tshwane Metro Police, Musa Yunana Joe outside his shop). Nigeria formally condemned SA minister\'s comments as "hate speech" and threatened ECOWAS and AU action — the most serious bilateral diplomatic escalation between the two countries since apartheid. ZAR recovered from the 18.68 spike to 16.30 — last week\'s moves appear partly technical. NGN back to 1,378. AES bloc — Burkina Faso, Mali, Niger — began ICC withdrawal simultaneously. SA Health Department ramping up Ebola readiness. Ebola at 600+ deaths, 9th week. Sudan EU gold ban in effect. Somalia AUSSOM funding ended. Senegal constitutional crisis deepening. Zambia election August 13 — 4 weeks away. Ghana and Ivory Coast remain continental benchmarks.',
  },

  fxRates: {
    NGN: '1,378.00',
    GHS: '11.47',
    KES: '129.42',
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
    { time: '09:30:00', signal: 'MARCH AND MARCH LEADER NGOBESE-ZUMA SHOT AND WOUNDED. Movement immediately vows bigger protests. TWO NIGERIANS KILLED: Emeka Iroegbu (allegedly Tshwane Metro Police) + Musa Yunana Joe (outside his shop, eMalahleni). Most explosive combination of political and diplomatic triggers since June 30 deadline.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Nigeria formally condemns SA minister Ntshavheni\'s comments linking Nigerians to drug crime as "hate speech." Abuja warns it may pursue action through ECOWAS and AU mechanisms. Most serious Nigeria-SA bilateral crisis since 2019 xenophobia wave. Nigerian citizens killed in SA crackdown — state accountability demanded.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '09:00:00', signal: 'FX REVERSAL: ZAR recovered to 16.30 from 18.68 spike. NGN back to 1,378 from 1,579. GHS at 11.47, KES 129.42, XOF 574.71, UGX 3,674. Last week\'s spikes appear partly technical — thin liquidity, data anomalies, position unwinding. Fundamental picture consistent with June averages. Watch ZAR today given Ngobese-Zuma shooting.', detail: 'HIGH', type: 'ALERT', tag: 'FX UPDATE', country: 'AFRICA' },
    { time: '08:45:00', signal: 'AES bloc (Burkina Faso, Mali, Niger) begins simultaneous ICC withdrawal proceedings. Protest against Western judicial overreach. Removes three active jihadist conflict theatres from ICC jurisdiction — exactly when atrocity documentation is most needed. AUSSOM funded out. ICC abandoned by AES. AU institutional architecture fragmenting from multiple directions simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Ebola DRC: 600+ confirmed deaths, 9th week. SA Health Dept ramping up readiness — cross-border protocols strengthened. US travel restrictions on DRC nationals expanded. France first European case. $1.4bn Congress ask. No vaccine, no treatment. Contact tracing below 90%. Sudan: EU gold ban in effect. 59,000 dead, 14m displaced. RSF controls ~70% Darfur.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Somalia: AUSSOM US funding ended — mission "finished." Al-Shabaab positioned to exploit vacuum. Ethiopia: National Dialogue Conference ongoing. TPLF conflict live. Eurobond in dispute. Senegal: Constitutional rupture — Pastef reforms vs Faye. IMF Q3 programme at risk. Zambia: August 13 election — 4 weeks away. ZMW at 19.02, significant pressure.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Nigeria: 17 million facing severe hunger in northern Nigeria — food security dimension of security crisis. ISSP active Kebbi/Sokoto. 842 killed May 2026. World Bank $1.25bn pledge to Nigeria 2026-2032. Ivory Coast: $1.3bn Eurobond 5x oversubscribed — continental benchmark. Ghana IMF programme complete. Kenya-US disease surveillance pact operational.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 16: NGN 1,378.00 | GHS 11.47 | KES 129.42 | EGP 52.22 | ZAR 16.30 (recovered from 18.68 spike) | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.71 | ZMW 19.02. NGN strengthening trend from 1,579 June 2025 peak intact. ZAR recovery confirms last week\'s spike was partly technical.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 92, fiscal: 62, fx: 46, debt: 62, political: 96, external: 90 },
    { country: 'Ghana', flag: '🇬🇭', score: 34, fiscal: 30, fx: 42, debt: 30, political: 30, external: 38 },
    { country: 'Kenya', flag: '🇰🇪', score: 72, fiscal: 68, fx: 54, debt: 74, political: 72, external: 70 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 72, fx: 74, debt: 94, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 90, fiscal: 74, fx: 62, debt: 68, political: 96, external: 88 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Somalia', flag: '🇸🇴', score: 99, fiscal: 88, fx: 82, debt: 78, political: 99, external: 99 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,378.00', change: '-13.47%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.42', change: '-0.04%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '-9.58%', stress: 'LOW', ytd: '+9.58%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal/Ivory Coast', rate: '574.71', change: '-6.62%', stress: 'MODERATE', ytd: '-6.62%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 4 Weeks Away', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Power cuts. Opposition consolidating. ZMW stress at 32.91% YTD weakening. Most imminent major African election.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Ngobese-Zuma Shot', type: 'Municipal Elections', risk: 'CRITICAL', note: 'Movement leader shot — bigger protests vowed. Two Nigerians killed. Nigeria ECOWAS/AU threat. 53,499 deported. December ultimatum. Weekly Thursday marches. Most dangerous moment since June 30.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. Mohamud vs opposition. No constitutional court. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'CRITICAL', note: 'Pastef reforms June 30. President banned from party. New Constitutional Court. Parliament controls natural resources. IMF Q3 at risk.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Signed — Direct Elections Abolished', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Mnangagwa signed. Direct elections formally abolished. Term to 2030. Most consequential African democratic regression of decade.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'National Dialogue — TPLF Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'National Dialogue ongoing. TPLF conflict live. Eurobond in dispute. IMF complete. US visa restrictions.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: 'Accountability Phase', type: 'Political Crisis', risk: 'HIGH', note: '431 Kenyans deported from SA. Court 120-day gender order on cabinet. Finance Bill law. Reparations pending.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee Standoff', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — CONSTITUTIONAL RISK', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — Political Risk', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN IN EFFECT', trend: '↓', risk: 'CRITICAL' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$73', fiscalBreakeven: '$70/bbl', breakevenNote: 'NEAR BREAKEVEN', trend: '↓', risk: 'HIGH' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.3pts', fx: '-9.6%', signal: 'NGOBESE-ZUMA SHOT — NIGERIANS KILLED — ECOWAS THREAT', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '-13.5%', signal: 'HATE SPEECH CONDEMNATION — 2 CITIZENS KILLED IN SA', color: '#ff3b3b' },
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EU GOLD BAN — WORLD\'S WORST HUM. EMERGENCY', color: '#ff3b3b' },
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'AUSSOM FINISHED — ALSHABAAB VACUUM', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 600 DEAD — US TRAVEL RESTRICTIONS', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 850, delta: '+30', bond: '-0.5pts', fx: '-6.6%', signal: 'CONSTITUTIONAL RUPTURE — IMF Q3 AT RISK', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 4 WEEKS', color: '#ff3b3b' },
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
    { date: 'Jul 14', NGN: 1378.00, GHS: 11.45, KES: 129.48, EGP: 52.22, ZAR: 16.90, UGX: 3672.00, ZMW: 19.02, XOF: 573.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.30, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
  ],
}
