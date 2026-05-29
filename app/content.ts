export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 29, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'WORSENING',
    drivers: ['Ethiopia Votes June 1 — Tigray Excluded — War Risk Post-Election', 'Senegal June 8 IMF Visit + Bond Coupon — €53.75m Payment Due', 'Senegal Dakar Protests Erupt in Support of Sonko', 'Ebola: WHO ECDC Confirms 1,198 Cases 263 Deaths — DRC/Uganda'],
    regions: [
      { region: 'East Africa', score: 96, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 93, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Ethiopia votes June 1 — Abiy\'s Prosperity Party expected to win 90%+ but Tigray is entirely excluded from the election. NEBE suspended voting in 38 Tigray districts and 8 Amhara districts. TPLF reinstated Tigray government, consolidating authority in violation of Pretoria Agreement. Analysts: Abiy expected to go to war with Tigray forces again after the election, as he did in 2020. Chatham House: "build-up to election is overshadowed by Tigray and Amhara tensions, heightening fears that regional conflict could further escalate." 50 million+ registered to vote. Opposition fragmented and barred from holding comparable rallies.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Dakar protests erupted in support of Sonko after his dismissal — students and supporters took to streets. No new government fully constituted. Two critical coupon payments coming: €53.75m on June 8 (coinciding with IMF visit) and $38.75m on June 10. Bloomberg: while analysts expect payments to proceed, they come at "tense political time." Bonds at record distress — 2033 dollar notes at 50.6 cents. Morgan Stanley pricing restructuring. Debt 132% GDP. SBM Intelligence: "governance and economic stability concerns rising."', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'ECDC May 29 update: As of May 28 — 121 confirmed (17 deaths), 1,077 suspected (246 deaths). Uganda 7 confirmed, 1 death. Total: 1,205 cases, 263 deaths. WHO DG Tedros personally travelled to DRC May 26 — called for immediate ceasefire for humanitarian access. "Catastrophic collision of disease and conflict." Ebola in Ituri, Nord-Kivu, Sud-Kivu, Kampala. No vaccine, no treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 deadline — 32 days. Ghana repatriated 295 citizens. Nigeria flights being organised. 58 murders/day in Q1 2026. Three million foreign nationals in SA — 5.1% of population. GNU has no clean compliance option. Acting Police Minister: violence "unacceptably high." Municipal elections in fall. NHI defeat, Charlotte Maxeke crisis, US-SA relations at lowest point — compound pressure at maximum.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 — public hearings ongoing. Standard Media: "resurrects ghost of Gen Z uprising." Taxes on phones, water, everyday goods. Due June 30. Africa Confidential: Ruto told allies 2-3m vote margin in 2027 but "political arithmetic less comfortable from street level." Ruto offering PAYE relief under Ksh30,000 as pre-emptive concession. Eurobond $2bn Q2 rollover critical. Ebola border risk via Uganda.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'ETHIOPIA VOTES JUNE 1 WITH TIGRAY EXCLUDED — WAR RISK POST-ELECTION — SENEGAL JUNE 8 IMF VISIT WITH €53.75M COUPON DUE — JUNE IS THE CONTINENT\'S MOST DANGEROUS MONTH',
    body: 'May 29 crystallises the June risk architecture. Ethiopia votes June 1 with Tigray entirely excluded — the NEBE suspended polling in 38 Tigray districts as the TPLF consolidates authority in violation of the Pretoria Agreement. Analysts are explicit: Abiy is expected to go to war with Tigray forces after the election, as he did in 2020 following a similarly staged vote. Chatham House warns the build-up is "overshadowed by Tigray and Amhara tensions, heightening fears regional conflict could further escalate." Simultaneously, Senegal\'s June 8 IMF visit arrives on the same day a €53.75 million bond coupon is due — with $38.75 million more due two days later. Bloomberg says analysts expect payments to proceed but they arrive at a "tense political time" as Dakar protests for Sonko erupt and no full government has been constituted. The continent now faces Ebola, Ethiopian post-election war risk, Senegal\'s IMF-coupon collision, Kenya\'s Finance Bill, South Africa\'s June 30 xenophobia deadline, and Somalia\'s constitutional crisis — all within a 32-day window.',
    tag: 'MAY 29 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 29, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'ETHIOPIA VOTES JUNE 1 — TIGRAY EXCLUDED — POST-ELECTION WAR RISK EXPLICIT', body: 'Ethiopia holds general elections June 1 with Abiy\'s Prosperity Party expected to win 90%+. But Tigray is entirely excluded — NEBE suspended voting in 38 districts citing TPLF authority. TPLF reinstated 2020 government, Dr Debretsion named regional president. Analysts explicitly warn Abiy is expected to launch war on Tigray after the election as he did in November 2020. Chatham House: "build-up overshadowed by Tigray and Amhara tensions." 50 million+ registered voters. Opposition fragmented, barred from comparable rallies, some participating only to preserve their licences.', icon: '⚔️' },
    { title: 'SENEGAL: JUNE 8 IMF VISIT COLLIDES WITH €53.75M BOND COUPON — DAKAR PROTESTS LIVE', body: 'Bloomberg: Senegal faces €53.75m coupon on 2037 euro bonds on June 8 — the same day as IMF visit. $38.75m due on 2031 dollar bonds June 10. Analysts expect payments to proceed but arrive at "tense political time." Dakar protests erupted in support of Sonko after his dismissal — students and supporters on streets. No full government constituted yet. SBM Intelligence May 29: "governance and economic stability concerns rising." New PM Lo has declared economy in "state of emergency." Debt 132% GDP. Bonds at record distress.', icon: '🚨' },
    { title: 'EBOLA: TEDROS IN DRC — 1,205 CASES 263 DEATHS — ECDC CONFIRMS EU RISK VERY LOW', body: 'ECDC updated May 29: As of May 28 — 121 confirmed (17 deaths), 1,077 suspected (246 deaths) DRC. Uganda 7 confirmed, 1 dead. Total: 1,205 cases, 263 deaths. WHO DG Tedros personally travelled to DRC May 26 — first in-country visit by a WHO DG during this outbreak. Called for immediate ceasefire. Italy Milan scare tested negative. ECDC: risk to EU/EEA "very low." But East and Central Africa macro risk repricing is structural, not cyclical.', icon: '🔴' },
    { title: 'JUNE IS THE CONTINENT\'S MOST DANGEROUS MONTH — SIX SIMULTANEOUS TIER-1 RISK EVENTS', body: 'June 2026 carries: Ethiopia post-election war risk (June 1+); Senegal IMF visit + bond coupons (June 8-10); Kenya Finance Bill deadline (June 30); South Africa xenophobia deadline (June 30); Senegal IMF programme decision (June window); Somalia constitutional crisis (ongoing). No month in the current cycle has carried this density of simultaneous tier-1 sovereign risk events. Ghana remains the only large African sovereign with a positive outlook entering June.', icon: '🌍' },
  ],

  insight1: {
    title: 'ETHIOPIA\'S POST-ELECTION WAR RISK IS THE MOST UNDERPRICED MACRO RISK ON THE CONTINENT',
    body: 'The pattern is explicit in the historical record: in 2020, Abiy held an election, won decisively, then launched the Tigray War in November — a conflict that killed an estimated 600,000 people over two years. Analysts writing about the June 1 vote are now saying the same sequence is likely again. The TPLF has reinstated Dr Debretsion as regional president, reinstalled officials from the pre-Pretoria era, and consolidated authority in 38 districts where the NEBE has suspended polling. Abiy has the electoral mandate he needs after June 1. The Pretoria Agreement has effectively collapsed from the TPLF side. The conditions for a second Tigray War are present. The Horn of Africa is simultaneously carrying Ebola on Ethiopia\'s western border, Somalia\'s constitutional crisis, and Sudan\'s ongoing collapse. The compound risk is without historical parallel.',
    conclusion: 'ETHIOPIA\'S POST-JUNE 1 WAR RISK IS THE MOST UNDERPRICED MACRO RISK IN AFRICA. IF ABIY LAUNCHES OPERATIONS AGAINST TPLF AFTER THE ELECTION — AS ANALYSTS EXPECT — THE HORN OF AFRICA ENTERS A GENERATIONAL CRISIS.',
  },

  insight2: {
    title: 'SENEGAL\'S JUNE 8 IMF VISIT IS THE MOST CONSEQUENTIAL SOVEREIGN MEETING IN WEST AFRICA THIS DECADE',
    body: 'The mechanics of June 8 are extraordinary. An IMF team arrives in Dakar on the same day a €53.75 million bond coupon is due — with $38.75 million more payable 48 hours later. The new PM Lo has declared the economy in a "state of emergency." Dakar protests are active. No full cabinet has been constituted. Sonko controls the legislature from the Speaker\'s chair. The bonds are at record distress. Morgan Stanley is pricing restructuring. The IMF visit is both a liquidity test and a governance test simultaneously — the fund will be assessing whether the new administration can deliver the fuel subsidy reform and fiscal consolidation that Sonko blocked. If Lo cannot demonstrate legislative credibility with Sonko as Speaker, the IMF programme cannot resume. If the programme does not resume, the default window of Q4 2026–Q1 2027 becomes near-certain.',
    conclusion: 'JUNE 8 IS SENEGAL\'S SOVEREIGN MOMENT OF TRUTH. IMF RE-ENGAGEMENT REQUIRES FUEL SUBSIDY REFORM THROUGH A SONKO-CONTROLLED LEGISLATURE. IF THAT FAILS, DEFAULT IS THE BASE CASE.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 CLOSE: ETHIOPIA VOTES JUNE 1, SENEGAL IMF-COUPON COLLISION JUNE 8, EBOLA 1,205 CASES',
    body: 'Week 22 closes with June\'s risk architecture fully visible. Ethiopia votes June 1 with Tigray entirely excluded — the TPLF has reinstated its government and analysts are explicit that post-election war risk is high. Senegal\'s June 8 IMF visit collides with a €53.75m bond coupon — no full government constituted, Dakar protests live, bonds at record distress, PM Lo has declared the economy in a "state of emergency." ECDC confirms Ebola at 1,205 cases and 263 deaths as of May 28 — WHO DG Tedros personally visited DRC, called for ceasefire. South Africa\'s June 30 xenophobia deadline is 32 days away — Ghana has repatriated 295 citizens, Nigeria organising flights. Kenya\'s Finance Bill 2026 is due June 30 — ghost of Gen-Z uprising being invoked by analysts. June 2026 is the most dangerous sovereign risk month Africa has faced in this cycle. Ghana — despite its own SA evacuation flights — remains the continental credit benchmark.',
  },

  fxRates: {
    NGN: '1370.31',
    GHS: '11.36',
    KES: '129.50',
    EGP: '53.12',
    XOF: '615.00',
    ZAR: '18.45',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3710.00',
    MAD: '9.75',
    XAF: '615.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'Ethiopia votes June 1 — Tigray entirely excluded. NEBE suspended polls in 38 Tigray + 8 Amhara districts. TPLF reinstated Debretsion as regional president. Analysts: Abiy expected to go to war with Tigray after election as in 2020. Chatham House: "fears regional conflict could further escalate." 50m+ registered voters.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:15:00', signal: 'Senegal: June 8 — IMF visit + €53.75m 2037 euro bond coupon due. June 10 — $38.75m 2031 dollar bond due. Bloomberg: payments expected to proceed but "tense political time." Dakar protests live. No full cabinet constituted. PM Lo declares "state of emergency." Bonds at record distress. SBM Intel: governance concerns rising.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '09:00:00', signal: 'ECDC May 29: As of May 28 — 121 confirmed (17 deaths), 1,077 suspected (246 deaths) DRC. Uganda 7 confirmed, 1 dead. Total: 1,205 cases, 263 deaths. Tedros personally in DRC May 26 — first in-country visit. Ceasefire appeal issued. Risk to EU/EEA: "very low." East/Central Africa macro risk: structural repricing ongoing.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'South Africa: June 30 deadline — 32 days. Ghana repatriated 295 citizens. Nigeria flights being organised. 3 million foreign nationals in SA. GNU no clean compliance option. 58 murders/day Q1 2026. Municipal elections fall 2026. NHI defeat + Charlotte Maxeke + US-SA relations = maximum compound pressure.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Kenya Finance Bill 2026: public hearings ongoing. Taxes on phones, bottled water, coal, credit card swipes. Due June 30. Standard Media: "resurrects ghost of Gen Z uprising." Ruto offering PAYE relief under Ksh30,000. Africa Confidential: street arithmetic deteriorating despite Ruto\'s confidence. Eurobond Q2 rollover critical.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:15:00', signal: 'Angola: Illegal gold mine collapse death toll rises to 29 in Nambuangongo, Bengo Province. Illegal artisanal mining remains major governance and safety risk across Central/Southern Africa. AOA stable but Angola Eurobond Q3 rollover $1.8bn approaching.', detail: 'MEDIUM', type: 'INFO', tag: 'GOVERNANCE RISK', country: 'AOA' },
    { time: '08:00:00', signal: 'Senegal Dakar protests: students and Sonko supporters on streets after dismissal. No new PM named as of morning — SBM Intel May 29 note. Sonko controls legislature as Speaker. Faye has two power centres within Pastef to manage while IMF arrives in 10 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana: Continental benchmark. Fitch B/positive. Inflation 3.4% — lowest since 1999. Reserves $12.3bn. GSE strongest African market YTD in hard currency. Evacuating own citizens from SA but domestic trajectory intact. Only large sovereign entering June with unambiguously positive outlook.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 40, fx: 34, debt: 42, political: 36, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 90, fiscal: 84, fx: 76, debt: 90, political: 96, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 88, fiscal: 68, fx: 76, debt: 62, political: 99, external: 84 },
    { country: 'Senegal', flag: '🇸🇳', score: 98, fiscal: 99, fx: 88, debt: 98, political: 99, external: 92 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 92, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.45', change: '-1.30%', stress: 'ELEVATED', ytd: '+0.20%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 1, 2026', type: 'General Election', risk: 'CRITICAL', note: 'Tigray excluded — 38 districts suspended. TPLF reinstated government. Abiy expected to win 90%+ then go to war with TPLF post-election per analysts. Chatham House: "fears conflict could escalate." 50m+ registered voters.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 deadline — 32 days. Ghana evacuating citizens. 58 murders/day Q1. GNU no clean compliance option. July 2021 riot risk explicit.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP commander killed. State police bill pending. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — Gen-Z ghost. Ruto 2-3m margin confidence vs deteriorating street arithmetic. Eurobond Q2 rollover. Ebola border risk.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'IMF JUNE 8 + COUPON DUE', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+45', bond: '-2.2pts', fx: '-0.9%', signal: 'VOTES JUNE 1 — WAR RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+42', bond: '-2.1pts', fx: '-0.5%', signal: 'FINANCE BILL JUNE 30', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+30', bond: '-1.5pts', fx: '-1.3%', signal: 'JUNE 30 — EVACUATIONS LIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE — BENCHMARK', color: '#00c48c' },
  ],
}
