export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 24, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['Ebola DRC 1,003 Confirmed 254 Dead — Families Storm Quarantine Centres — 150+ Patient Escapes', 'UNAIDS: US PEPFAR Withdrawal $400m From SA — 17% Of HIV Response — Could Cost Lives', 'UN: Sudan Sexual Violence Unprecedented — 546 Incidents 838 Verified Victims — Weapon Of War', 'ISSP Claims First Nigeria Operations In 6 Years — Kebbi Sokoto — Sahel Expanding Into Nigeria'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 96, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 82, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'EBOLA 1,003 CONFIRMED 254 DEAD. DRC Ministry of Health June 22: 1,003 cumulative confirmed cases, 254 confirmed deaths. Contact tracing at only 58% — WHO target 90-95%. Families storming quarantine centres to remove patients. Over 150 patient escapes from facilities since late May. 2.95 million children at risk across 31 health zones. Children account for 15% of cases but 25% of deaths — twice as likely to die as adults. 130+ children orphaned in Ituri. DRC introduces free healthcare for ALL illnesses in Ituri. Burial team attacked Mongbwalu June 17 — 5 health workers taken hostage. Israel: second suspected Ebola case after DRC travel.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'UNAIDS WARNING TODAY: US PEPFAR withdrawal of $400m annually — 17% of SA HIV response — could cost lives and reverse years of progress. 8+ million people living with HIV in SA. UNAIDS chief Byanyima: "urged the US to reconsider or implement a gradual transition." SA does not rely on US for HIV drugs but US funded prevention programmes critical. JUNE 25 ANNIVERSARY TODAY. June 30: 6 days. R600m security deployed. SANDF authorised. Four activists shot dead KZN. GNU compound stress at absolute maximum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Sudan', flag: '🇸🇩', alert: 'UN REPORT: Sexual violence used as weapon of war in Sudan conflict — "unprecedented" scale and brutality. 546 verified incidents of conflict-related sexual violence, 838+ verified victims, mostly women and girls. Actual figure far higher due to underreporting. Violence spread alongside conflict and displacement routes. RSF drone strikes continuing — 30+ civilians killed in El Obeid including funeral mourners. UN Security Council raised alarm over escalating Sudan conflict.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'ISSP ENTERS NIGERIA. ACLED June 2026: Islamic State Sahel Province claimed first operations in Nigeria in more than six years — attack killed 10 soldiers in Kebbi state (March 24) and 7 soldiers in Sokoto state (May 16). ISSP entered Nigeria through Kebbi and Sokoto via Niger border. Local "Lakurawa" militants now confirmed as ISSP integral component. ISSP had not operated in Nigeria since October 2019. Combined with 842 killed in May, Boko Haram, ISWAP Lake Chad, NW banditry — Nigeria\'s security environment is the most dangerous since the height of the 2014-2015 Boko Haram emergency.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'JUNE 25 TODAY — second anniversary of 2024 parliament storming. Schools closed. Gen-Z mobilised. Health Minister Duale sentenced for contempt over Ebola facility. Finance Bill 2026 due June 30 — 6 days. Ruto defusion strategy: reparations + PAYE. Whether protests stay peaceful or escalate today is the determinative signal for June 30.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'EBOLA 1,003 CASES 254 DEAD FAMILIES STORMING QUARANTINE CENTRES — UNAIDS: PEPFAR WITHDRAWAL WILL COST LIVES — UN: SUDAN SEXUAL VIOLENCE UNPRECEDENTED — ISSP ENTERS NIGERIA — JUNE 25 IS TODAY',
    body: 'June 24 is the most densely packed sovereign risk day of the year. Ebola has crossed 1,000 confirmed cases — 1,003 cases, 254 deaths — with families storming quarantine centres to remove patients, over 150 escapes from facilities since late May, and contact tracing at only 58%. DRC has announced free healthcare for all illnesses across Ituri in a desperate attempt to rebuild community trust. UNICEF confirmed 2.95 million children at risk across 31 health zones. UNAIDS chief Winnie Byanyima warned today that the US withdrawal of $400 million in annual PEPFAR funding from South Africa — 17% of the country\'s entire HIV response — could cost lives and reverse years of progress among the 8 million South Africans living with HIV. The UN\'s new Sudan report describes the use of sexual violence as a weapon of war as "unprecedented" — 546 verified incidents, 838+ victims, actual figure far higher. ISSP has claimed its first Nigeria operations in six years, entering through Kebbi and Sokoto from Niger. The "Lakurawa" militants are confirmed as an ISSP component. June 25 — the second anniversary of the 2024 parliament storming — is today in Kenya. June 30 is 6 days away in both Kenya and South Africa.',
    tag: 'JUNE 24 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 24, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '780', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA 1,003 CONFIRMED 254 DEAD — FAMILIES STORM QUARANTINE CENTRES — 150+ PATIENT ESCAPES', body: 'DRC Ministry of Health June 22: 1,003 cumulative confirmed cases, 254 deaths. Contact tracing at 58% — WHO target 90-95%. Families storming quarantine centres to remove patients. Over 150 patient escapes since late May — patients fleeing in search of food, distrust of facilities. Burial team attacked Mongbwalu June 17 — 5 health workers taken hostage accused of spreading Ebola. 2.95 million children at risk in 31 health zones — children account for 25% of deaths despite 15% of cases. 130+ orphaned in Ituri. DRC introduces free healthcare for ALL illnesses in Ituri. Israel: second suspected Ebola case after DRC travel being tested at Tel Aviv Sheba Medical Centre. CFR: 26% — Bundibugyo 2007/2012 outbreaks had 30-50% CFR. No vaccine, no approved treatment.', icon: '🚨' },
    { title: 'UNAIDS: PEPFAR WITHDRAWAL $400M FROM SA WILL COST LIVES — 17% OF HIV RESPONSE GONE', body: 'UNAIDS Executive Director Winnie Byanyima warned today that the US decision to withdraw HIV and AIDS funding from South Africa could cost lives and reverse years of progress. The US contributed approximately $400m annually through PEPFAR — roughly 17% of South Africa\'s total HIV response funding. SA does not rely on US funding for HIV drugs, but US contributions were critical to prevention programmes. 8+ million South Africans live with HIV — the largest HIV burden of any nation. Byanyima urged the US to reconsider or implement a gradual transition. The withdrawal comes amid deteriorating US-SA relations — Trump has alleged "white genocide" in SA, a claim widely discredited. UCT/Wits model: 150,000-295,000 additional infections by 2028 without replacement.', icon: '🔴' },
    { title: 'UN: SUDAN SEXUAL VIOLENCE UNPRECEDENTED — 546 INCIDENTS 838 VICTIMS — RSF WEAPON OF WAR', body: 'New UN report: sexual violence being used as a weapon of war in Sudan at "unprecedented" scale and brutality. 546 verified incidents of conflict-related sexual violence, 838+ verified victims, mostly women and girls. Actual number far higher due to underreporting. Violence spread alongside conflict and displacement routes — systematically used to terrorise and traumatise civilians. Compounds RSF drone strikes which killed 30+ including funeral mourners in El Obeid, renewed attacks on Khartoum International Airport. UN Security Council raised alarm over escalating Sudan conflict this week. Sudan civil war entering third year.', icon: '⚠️' },
    { title: 'ISSP ENTERS NIGERIA — FIRST OPERATIONS IN 6 YEARS — KEBBI AND SOKOTO FROM NIGER BORDER', body: 'ACLED June 2026 overview: Islamic State Sahel Province claimed its first operations in Nigeria in more than six years — attacks in Kebbi state (March 24, 10 soldiers killed) and Sokoto state (May 16, 7 soldiers killed). ISSP entered through the Niger-Nigeria border. The local "Lakurawa" militants operating across the Niger-Nigeria border are now confirmed as an ISSP integral component. ISSP had not operated in Nigeria since October 2019. Combined with Boko Haram (Borno), ISWAP (Lake Chad), northwest banditry, southwest school abductions, and 842 killed in May — Nigeria\'s security environment has never been more multi-vectored. The Sahel security collapse has crossed into Africa\'s most populous country.', icon: '💥' },
  ],

  insight1: {
    title: 'EBOLA AT 1,003 WITH FAMILIES STORMING QUARANTINE CENTRES IS THE STRUCTURAL BREAKDOWN THE WHO FEARED MOST',
    body: 'The WHO\'s community engagement strategy — the centrepiece of the $518m response plan — is based on one premise: if communities trust the health response, they will submit to isolation, contact tracing, and safe burials. When families storm quarantine centres to remove patients, that premise has failed. The 150+ patient escapes since late May are not isolated incidents — they are a systemic community rejection of the response architecture. DRC\'s introduction of free healthcare for all illnesses in Ituri is the most important policy move of the outbreak: it addresses the most immediate driver of flight (patients leaving facilities in search of food and other treatment) and signals state commitment. But it arrives with contact tracing at 58%, 1,003 confirmed cases, families removing patients from isolation, and health workers being taken hostage. The response is accelerating — but so is the outbreak.',
    conclusion: 'EBOLA AT 1,003 WITH COMMUNITY BREAKDOWN — FAMILIES STORMING CENTRES, 150+ PATIENT ESCAPES, HEALTH WORKERS HOSTAGE — IS THE WHO\'S WORST-CASE COMMUNITY TRUST SCENARIO MATERIALISING. FREE HEALTHCARE IN ITURI IS THE RIGHT MOVE. BUT IT MAY ARRIVE TOO LATE TO CHANGE THE TRAJECTORY.',
  },

  insight2: {
    title: 'ISSP ENTERING NIGERIA IS THE SAHEL SECURITY COLLAPSE CROSSING ITS MOST CONSEQUENTIAL BORDER',
    body: 'The Islamic State Sahel Province has systematically expanded its operational footprint since 2019: Mali, Burkina Faso, Niger, and now Nigeria. The Niger-Nigeria border — which runs through Kebbi and Sokoto states — was always the most consequential breach point. Nigeria has 220 million people, Africa\'s largest economy, the continent\'s most complex multi-vector security environment, and a 2027 election cycle that is beginning to generate political volatility. ISSP\'s entry through "Lakurawa" — local militants whose ISSP affiliation was previously unclear — confirms that jihadist expansion uses local proxies before claiming operations. The six-year gap between ISSP\'s previous Nigeria operations and today reflects a period of capacity building, not absence. The 17 soldiers killed in Kebbi and Sokoto in March and May are the opening salvo. The Sahel security collapse has now formally entered Africa\'s most consequential state.',
    conclusion: 'ISSP ENTERING NIGERIA IS THE SAHEL SECURITY COLLAPSE\'S MOST CONSEQUENTIAL EXPANSION EVENT. WITH 220 MILLION PEOPLE, AFRICA\'S LARGEST ECONOMY AND A 2027 ELECTION CYCLE, NIGERIA\'S SECURITY ENVIRONMENT IS NOW THE CONTINENT\'S MOST DANGEROUS CONVERGENCE POINT.',
  },

  brief: {
    week: '26',
    title: 'WEEK 26 JUNE 24: EBOLA 1003 FAMILIES STORM CENTRES, UNAIDS PEPFAR WARNING, UN SUDAN SEXUAL VIOLENCE UNPRECEDENTED, ISSP ENTERS NIGERIA, JUNE 25 TODAY KENYA',
    body: 'June 24 is the densest sovereign risk day of 2026. Ebola has crossed 1,000 confirmed cases with 254 deaths — families storming quarantine centres, 150+ patient escapes, 2.95 million children at risk, DRC introducing free healthcare across Ituri in response. UNAIDS warned today that the US withdrawal of $400m in annual PEPFAR funding from South Africa — 17% of its HIV response — will cost lives among 8 million HIV-positive South Africans. The UN confirmed Sudan is using sexual violence as a weapon of war at unprecedented scale — 546 verified incidents. ISSP has entered Nigeria for the first time in six years through Kebbi and Sokoto. June 25 — Kenya\'s storming anniversary — is today. June 30 is 6 days away in both Kenya and South Africa. Senegal\'s IMF agreement window closes in 6 days. Algeria beat Ivory Coast in the World Cup. Germany beat Ivory Coast. The continent is at its maximum risk density of the decade.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.39',
    ETB: '158.00',
    TZS: '2,650.00',
    UGX: '3,645.50',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.02',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Ebola DRC June 22: 1,003 confirmed, 254 deaths. Contact tracing 58% (target 90-95%). Families storming quarantine centres — patients removed. 150+ patient escapes since late May. 2.95m children at risk in 31 health zones — 25% of deaths despite 15% of cases. DRC: free healthcare ALL illnesses in Ituri. Health workers taken hostage Mongbwalu June 17. Israel second suspected case.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'UNAIDS WARNING June 24: US PEPFAR withdrawal $400m annually from SA — 17% of SA HIV response. Chief Byanyima: "could cost lives and reverse years of progress." 8m+ South Africans living with HIV. SA does not rely on US for drugs but prevention programmes critical. Urged US to reconsider or gradual transition. UCT/Wits: 150,000-295,000 additional infections by 2028 without replacement.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'JUNE 25 TODAY — KENYA. Second anniversary of 2024 parliament storming. Schools closed. Gen-Z mobilised. Duale sentenced for contempt (Ebola facility). Finance Bill June 30 — 6 days. Ruto defusion: reparations + PAYE. Protests peaceful or escalating today is the determinative June 30 signal.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:45:00', signal: 'Sudan UN report: sexual violence weapon of war — "unprecedented" scale and brutality. 546 verified incidents, 838+ victims, mostly women and girls. Actual far higher. Spread alongside conflict and displacement routes. RSF drone strikes ongoing including El Obeid funeral strike. UN Security Council alarm. Sudan entering third year of civil war.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'ISSP ENTERS NIGERIA — first operations in 6 years. Kebbi state March 24: 10 soldiers killed. Sokoto state May 16: 7 soldiers killed. ISSP entered via Niger-Nigeria border. "Lakurawa" militants confirmed as ISSP component. Last ISSP Nigeria operation October 2019. Nigeria security: Boko Haram + ISWAP + NW banditry + SW abductions + ISSP now. Sahel security collapse has crossed Africa\'s most consequential border.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '08:15:00', signal: 'South Africa June 30 — 6 DAYS. R600m security deployed all 9 provinces. SANDF authorised. PEPFAR warning from UNAIDS today. Four activists shot KZN. June 25 anniversary in Kenya running simultaneously. ZAR at 16.39 — 10.7% stronger YoY — holding despite compound crisis.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'World Cup: Algeria beat Burkina Faso 2-0 first World Cup win since 1982. Germany beat Ivory Coast 2-1. Morocco beat Japan. DRC Leopards preparing for next group game. Ghana alive. SA needs results to advance. Africa has 6 teams competing effectively — tournament narrative split between on-pitch success and off-pitch crisis.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 24: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.39 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR holding at 16.39 — 50-day MA resistance at 16.63. June 30 risk premium building. KES holding despite maximum political stress. Watch both KES and ZAR through June 25-30 window.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 96, fiscal: 60, fx: 42, debt: 60, political: 96, external: 88 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 99, fiscal: 90, fx: 74, debt: 96, political: 99, external: 99 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 80, fx: 52, debt: 70, political: 99, external: 98 },
    { country: 'Senegal', flag: '🇸🇳', score: 74, fiscal: 78, fx: 64, debt: 80, political: 70, external: 72 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 92, fx: 94, debt: 90, political: 99, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'MODERATE', ytd: '-3.40%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.39', change: '-10.70%', stress: 'MODERATE', ytd: '+10.70%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Kenya', flag: '🇰🇪', date: 'JUNE 25 TODAY — FINANCE BILL JUNE 30 IN 6 DAYS', type: 'Political Crisis', risk: 'CRITICAL', note: 'June 25 anniversary TODAY. Schools closed. Duale contempt sentenced. Finance Bill June 30 — 6 days. Today determines whether protests escalate to June 30 level.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'June 30 — 6 Days', type: 'Municipal Elections', risk: 'CRITICAL', note: 'R600m security deployed. SANDF authorised. PEPFAR $400m withdrawal. UNAIDS warning. June 30: 6 days. GNU compound stress absolute maximum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 438/501 — Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk current situation.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027 — ISSP Now Active', type: 'General Election', risk: 'CRITICAL', note: 'ISSP first operations in 6 years — Kebbi + Sokoto. 842 killed May. Boko Haram + ISWAP + ISSP + NW banditry + SW abductions. Most dangerous security environment since 2015.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition calls Mohamud "former president." Al-Shabaab active. US resumed airstrikes in Somalia after brief lull.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'IMF Agreement Target June 30 — 6 Days', type: 'Debt Crisis', risk: 'HIGH', note: 'Sonko open to IMF talks. Diba targets June 30 agreement. Bonds rallied. Structural risk unchanged. 6-day window closing.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension — Senate Vote Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed 200+ votes. Senate vote pending. Mnangagwa assent if passed.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF AGREEMENT TARGET JUNE 30 — 6 DAYS', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Final 6 Days', risk: 'HIGH', color: '#f5a623' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
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
    { country: 'DRC/UGANDA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA 1003 — FAMILIES STORM CENTRES', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+58', bond: '-2.9pts', fx: '+0.1%', signal: 'JUNE 25 TODAY — FINANCE BILL 6 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+10.7%', signal: 'PEPFAR $400M WARNING — JUNE 30 6D', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+40', bond: '-2.0pts', fx: '-13.8%', signal: 'ISSP ENTERS NIGERIA — SAHEL CROSSES', color: '#ff3b3b' },
    { country: 'SUDAN', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'SEXUAL VIOLENCE WEAPON OF WAR — UN', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — US SANCTIONS', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'IMF AGREEMENT JUNE 30 — 6 DAYS', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP COMPETING', color: '#00c48c' },
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
    { date: 'Jun 1', NGN: 1354.23, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.24, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.36, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.58, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.14, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.42, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.53, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.30, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.42, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 23', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.39, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 24', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.39, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
