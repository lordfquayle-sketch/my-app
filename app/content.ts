export const content = {
  riskIndex: '91',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 26, 2026 09:00 UTC',
    overallScore: 91,
    trend: 'WORSENING',
    drivers: ['IRC: Ebola Could Be Deadliest Outbreak On Record — 1,010 Cases 231 Deaths', 'SA March and March June 30 Deadline — July 2021 Riot Risk', 'Ethiopia-TPLF War Risk Escalating Ahead of June Election', 'Ruto Calls AU Reform as Continent Fractures'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 78, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 88, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 98, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'IRC Watchlist Flash Alert May 26: Ebola could become deadliest outbreak on record without urgent international action. As of May 24: 1,010 suspected and confirmed cases, 231 deaths. Spread to Ituri, Nord-Kivu, Sud-Kivu and Kampala capitals Bunia, Goma now affected. Outbreak spreading faster than response. Global aid cuts have weakened frontline health systems. No approved vaccine or treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'March and March movement sets June 30 deadline for undocumented foreigners to leave South Africa — analysts warn of July 2021 riot risk. Burundian, DRC, Zimbabwean refugees sheltering outside Durban Home Affairs offices in fear. Ghana has written to AU. Nigeria offered to repatriate nationals. Kenya, Malawi, Lesotho, Zimbabwe warned citizens. Health and Finance Ministers to visit Charlotte Maxeke hospital over maladministration crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Ethiopia-TPLF war risk escalating ahead of June 2026 elections. TPLF reinstated Tigray government assembly — violating Pretoria Agreement. Refugees International: "conditions dangerously resembling humanitarian blockade of last war." Federal government withholding critical funding to Tigray. June election deadline for regional polls cannot be met. Ebola outbreak compounding Horn of Africa instability.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto chairs AU reform committee — calls for stronger African self-reliance and continental institutions independent of weakening multilateral systems. Structural pivot moment for Kenya foreign policy. Domestically: Ebola border risk via Kampala elevated, fuel structural crisis unresolved, Eurobond Q2 rollover critical. CS Mudavadi warned of tougher times ahead.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'Sovereign default risk critical. $25bn needed for 2026-2028 obligations. IMF frozen. PM Sonko rejects restructuring. Dakar 2026 Youth Olympics 95-96% complete — event proceeds while sovereign fiscal architecture collapses around it. Internal government fractures deepening.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'IRC: EBOLA COULD BE DEADLIEST OUTBREAK ON RECORD — SA JUNE 30 DEADLINE RISKS JULY 2021 REPEAT — ETHIOPIA ON BRINK',
    body: 'Three simultaneous escalations define May 26. First: the IRC issued a Watchlist Flash Alert today warning the Ebola outbreak in eastern DRC could become the deadliest on record without urgent international action. As of May 24: 1,010 suspected and confirmed cases, 231 deaths — now in Bunia, Goma, Kampala and Bukavu simultaneously. The outbreak is spreading faster than the response. Aid cuts have weakened health systems. No approved vaccine exists. Second: South Africa\'s March and March movement has set a June 30 deadline for undocumented foreigners to leave — analysts are explicitly warning of a repeat of the July 2021 riots that killed 354 people. Ghana has written to the AU. Nigeria is offering repatriation flights. Third: Refugees International warns Ethiopia is "dangerously close to war again" as the TPLF reinstates its government assembly ahead of June elections that cannot be organised on time. The Horn of Africa is carrying Ebola, proto-war in Ethiopia, and a xenophobia countdown in South Africa simultaneously. The compound risk is without precedent.',
    tag: 'MAY 26 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 26, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'IRC: EBOLA COULD BE DEADLIEST OUTBREAK ON RECORD — SPREADING FASTER THAN RESPONSE', body: 'IRC Watchlist Flash Alert issued May 26: eastern DRC Ebola could surpass all previous outbreaks without urgent international action. 1,010 suspected/confirmed cases, 231 deaths as of May 24. Now confirmed in Ituri (Bunia), Nord-Kivu (Goma), Sud-Kivu and Kampala. IRC VP Bob Kitchen: "Eastern DRC is confronting this outbreak more fragile and less prepared than during the 2018-2020 outbreak that killed more than 2,000 people — and with fewer resources." Aid cuts the structural accelerant. No vaccine, no treatment.', icon: '🚨' },
    { title: 'SA JUNE 30 DEADLINE — ANALYSTS WARN OF JULY 2021 RIOT REPEAT', body: 'March and March movement has formally set June 30 as deadline for undocumented foreigners to leave South Africa. Analysts explicitly comparing risk to July 2021 unrest that killed 354. Burundian and DRC refugees sheltering on pavements outside Durban Home Affairs offices. Ghana wrote to AU. Nigeria offering repatriation flights. Kenya, Malawi, Lesotho, Zimbabwe issued warnings to citizens. GNU government given until June 30 to act — or street enforcement begins.', icon: '🔥' },
    { title: 'ETHIOPIA ON BRINK — TPLF REINSTATES GOVERNMENT, WAR CONDITIONS RETURNING', body: 'Refugees International warns Ethiopia is "dangerously close to war again." TPLF reinstated Tigray\'s 2020 government assembly — directly violating Pretoria Agreement. Federal government withholding funding. June election impossible to organise in Tigray. Clashes between TPLF-TDF and Ethiopian federal forces ongoing since January. Eritrea reportedly supporting TPLF factions. Abiy-Sudan-RSF triangulation deepening regional instability. Ebola outbreak on Ethiopia\'s border compounds the Horn of Africa risk stack.', icon: '⚔️' },
    { title: 'RUTO CHAIRS AU REFORM COMMITTEE — CALLS FOR AFRICAN SELF-RELIANCE', body: 'President Ruto chaired the 4th Session of the Virtual Ad Hoc Oversight Committee on AU Institutional Reforms. Called for Africa to move beyond dependency — stronger continental institutions, domestic resource mobilisation, implementation of Agenda 2063. Backdrop: weakening multilateral systems, US withdrawal from global governance, and a continent simultaneously managing Ebola, xenophobia, and proto-war in the Horn. Africa\'s assertiveness is rising — but so is its internal fragility.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE IRC FLASH ALERT CHANGES THE EBOLA RISK BASELINE — THIS IS NO LONGER A CONTAINMENT STORY',
    body: 'The IRC\'s Watchlist Flash Alert, issued today, identifies three structural reasons this Ebola outbreak is uniquely dangerous: it is spreading faster than the response capacity; conflict and displacement are accelerating regional spread; and global aid cuts have weakened the frontline health systems needed to contain it. The IRC explicitly states eastern DRC is "more fragile and less prepared" than during the 2018-2020 outbreak that killed 2,286 people and took two years to contain. With 1,010 cases and 231 deaths in eleven days since declaration, the case acceleration rate is alarming. Goma — a city of 2 million and the commercial hub of eastern DRC — is now affected. If Ebola establishes sustained transmission in Goma, the regional and global risk calculus changes entirely.',
    conclusion: 'THE IRC FLASH ALERT MARKS A PHASE TRANSITION. EBOLA IS NO LONGER A CONTAINMENT STORY — IT IS A POTENTIAL GENERATIONAL OUTBREAK. EAST AND CENTRAL AFRICA MACRO RISK MUST BE REPRICED ACCORDINGLY.',
  },

  insight2: {
    title: 'SOUTH AFRICA\'S JUNE 30 DEADLINE IS THE MOST DANGEROUS DOMESTIC POLITICAL DATE ON THE CONTINENT',
    body: 'The July 2021 unrest — triggered by Jacob Zuma\'s imprisonment — killed 354 people, destroyed 200 shopping centres and caused R50bn in economic damage. Analysts are now explicitly drawing the comparison with the June 30 xenophobia deadline. The difference: 2021 was triggered by a single political event; 2026 is being organised as a movement with a pre-set date, social media mobilisation, and political figures in multiple provinces giving legitimacy to the threat. The GNU government is under pressure from multiple directions — NHI defeat, Charlotte Maxeke hospital crisis, US-SA relations, and now a June 30 deadline it cannot fully comply with. The ZAR and South African sovereign credit face a new short-term political risk event that markets have not priced.',
    conclusion: 'JUNE 30 IS THE MOST CONSEQUENTIAL DOMESTIC POLITICAL DATE IN SOUTH AFRICA IN YEARS. WATCH ZAR VOLATILITY AND GNU COHESION IN THE COMING FIVE WEEKS.',
  },

  brief: {
    week: '22',
    title: 'WEEK 22 DAY 2: IRC EBOLA FLASH ALERT, SA JUNE 30 DEADLINE, ETHIOPIA WAR RISK, RUTO AU REFORM',
    body: 'Week 22\'s second day brings four simultaneous escalations. The IRC issued a Watchlist Flash Alert warning Ebola in eastern DRC could become the deadliest outbreak on record — 1,010 cases, 231 deaths, now in Bunia, Goma, Kampala and Bukavu, spreading faster than response capacity. South Africa\'s March and March movement has set a June 30 deadline for undocumented foreigners to leave — analysts warn explicitly of a repeat of the July 2021 riots that killed 354. Ghana has written to the AU; Nigeria is offering repatriation flights. Ethiopia is on the brink — Refugees International warns the TPLF\'s reinstatement of the Tigray government assembly has created conditions resembling the lead-up to the 2020 war. Ruto chaired an AU reform committee calling for African self-reliance as the continent fractures simultaneously on multiple fronts. Ghana remains the only large African sovereign with an unambiguously positive trajectory. Everything else is in active and accelerating deterioration.',
  },

  fxRates: {
    NGN: '1370.31',
    GHS: '11.36',
    KES: '129.50',
    EGP: '53.12',
    XOF: '610.00',
    ZAR: '18.20',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3710.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'IRC Watchlist Flash Alert May 26: Ebola could be deadliest outbreak on record. 1,010 suspected/confirmed cases, 231 deaths as of May 24. Goma now affected. Spreading faster than response. Aid cuts weakened health systems. No vaccine. IRC VP: "more fragile than 2018-2020."', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'South Africa: March and March sets June 30 deadline for undocumented foreigners to leave. Analysts warn July 2021 riot risk. Refugees sheltering on Durban pavements. Ghana writes to AU. Nigeria offers repatriation. Kenya, Malawi, Lesotho, Zimbabwe warn citizens. GNU given 35 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Ethiopia: Refugees International warns "dangerously close to war again." TPLF reinstated Tigray government assembly — violating Pretoria Agreement. Federal government withholding Tigray funding. June election impossible. Clashes ongoing since January. Eritrea reportedly backing TPLF factions.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:45:00', signal: 'Ruto chairs AU Ad Hoc Reform Committee — calls for African self-reliance, continental institutional strength, domestic resource mobilisation. Backdrop: weakening multilateralism, US disengagement, simultaneous Ebola/xenophobia/war crises. Africa assertiveness rising alongside internal fragility.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'SA Charlotte Maxeke hospital: Health Min Motsoaledi and Finance Min Godongwana to visit — public protector found maladministration and underspending delayed repairs since 2021 fire. GNU managing compound domestic crises simultaneously heading into June 30 deadline.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ebola: Goma (Nord-Kivu capital, pop. 2mn) now confirmed affected. IRC: conflict and displacement accelerating regional spread. Ituri, Nord-Kivu, Sud-Kivu, Kampala — four simultaneous geographic fronts. WHO upgraded DRC risk to "very high." Global risk remains "high."', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Senegal: Dakar Youth Olympics 95-96% complete. But PM Sonko still rejecting IMF. $25bn needed 2026-2028. Internal government fractures continuing. Default risk critical — CDS 850. Atlantic Council: without reversal, sovereign default likely this cycle.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '07:45:00', signal: 'Ghana: Continental benchmark holds. Fitch B/positive. GSE strongest African market YTD. Inflation 3.4% in April — lowest since 1999. Reserves $12.3bn. Debt projected at 46% GDP by 2027. Only large sovereign with unambiguously positive trajectory entering June.', detail: 'LOW', type: 'INFO', tag: 'CREDIT UPDATE', country: 'GHS' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 72, fiscal: 60, fx: 55, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 38, fiscal: 40, fx: 34, debt: 42, political: 32, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 86, fiscal: 82, fx: 76, debt: 88, political: 90, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 70, fiscal: 72, fx: 74, debt: 68, political: 65, external: 70 },
    { country: 'South Africa', flag: '🇿🇦', score: 86, fiscal: 68, fx: 74, debt: 62, political: 99, external: 82 },
    { country: 'Senegal', flag: '🇸🇳', score: 92, fiscal: 96, fx: 84, debt: 94, political: 82, external: 88 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 90, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,370.31', change: '-14.37%', stress: 'ELEVATED', ytd: '-5.18%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.36', change: '-12.91%', stress: 'LOW', ytd: '+8.20%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.50', change: '-2.40%', stress: 'ELEVATED', ytd: '-1.50%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '53.12', change: '+6.40%', stress: 'HIGH', ytd: '-9.20%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '18.20', change: '+0.90%', stress: 'ELEVATED', ytd: '+0.70%', color: '#ff3b3b' },
    { code: 'UGX', country: 'Uganda', rate: '3,710.00', change: '-9.10%', stress: 'HIGH', ytd: '-5.40%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.11', change: '-32.63%', stress: 'HIGH', ytd: '-12.50%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '610.00', change: '0.00%', stress: 'ELEVATED', ytd: '0.00%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Terms extended 4→5 years. Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 2026', type: 'General Election', risk: 'CRITICAL', note: 'TPLF reinstated Tigray government — violating Pretoria Agreement. Refugees International: "dangerously close to war." Federal funds withheld. June election cannot be organised in Tigray. Ebola on border.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'March and March June 30 deadline — July 2021 riot risk. NHI defeat. Charlotte Maxeke crisis. GNU under compound pressure. ZAR vulnerable.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilians killed in airstrikes in two months. Amnesty calls strikes unlawful. Atiku positioning against Tinubu. Civilian casualty crisis is tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'HIGH', note: 'Ruto pushes AU reform. Fuel crisis partially resolved. Ebola border risk via Goma/Kampala. Eurobond Q2 rollover critical. Mudavadi warns tougher times ahead.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$1.1bn', instrument: 'Eurobond', maturity: 'Q4 2026', risk: 'MEDIUM', color: '#f5a623' },
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
    { country: 'SENEGAL', cds: 850, delta: '+60', bond: '-2.8pts', fx: '-2.1%', signal: 'DEFAULT RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+40', bond: '-2.0pts', fx: '-0.5%', signal: 'EBOLA GOMA + DEBT', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+28', bond: '-1.4pts', fx: '-0.3%', signal: 'JUNE 30 DEADLINE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE CRISIS', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 990, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT', color: '#f5a623' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '-0.1%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+0.4%', signal: 'FITCH UPGRADE', color: '#00c48c' },
  ],
}
