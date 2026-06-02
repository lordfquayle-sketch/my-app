export const content = {
  riskIndex: '98',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 2, 2026 09:00 UTC',
    overallScore: 98,
    trend: 'WORSENING',
    drivers: ['5 Mozambicans Killed in SA Xenophobic Attacks — Mossel Bay — First Deaths Officially Linked', 'Kenya: 2 Shot Dead in Protests Against US Ebola Facility', 'Sonko Declares Pastef Will NOT Join Faye Government — Senegal Political Deadlock', 'Guinea Parliamentary Elections — 40 Opposition Parties Dissolved Pre-Vote'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 95, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'FIRST DEATHS CONFIRMED. 5 Mozambicans killed in xenophobic attacks in Mossel Bay over the weekend — first deaths officially linked to anti-migrant protests sweeping SA. Around 800 Mozambicans caught up in violence — 55 shacks torched, some while people were inside. 300 returned home by own means Saturday. 500+ sheltered in Western Cape pending repatriation. SA teenager also killed. Mozambique government issued formal statement. Mayor Kotze: "people have been murdered, houses burned and families displaced." June 30 deadline — 28 days. GNU coherence failing.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'TWO PEOPLE SHOT DEAD in protests against planned US Ebola quarantine facility. High Court had already suspended the facility Friday. Protests turned deadly over the weekend. Kenyan doctors called it a biosecurity trade-off for foreign aid. US-Kenya relations severely strained entering Finance Bill June 30 deadline and Eurobond Q2 rollover. KES at 129.41. Ebola case count revised downward as DRC testing improved — four nurses recovered.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'POLITICAL DEADLOCK DEEPENS. Sonko declares Pastef will NOT join President Faye\'s newly announced government — raises prospect of permanent standoff between presidency and parliament. Pastef holds commanding 130/165 majority as Speaker. 6 days to June 8 — IMF visit + €53.75m coupon. JPMorgan 15% haircut priced. Debt 132% GDP. IMF negotiations structurally blocked. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', alert: 'Parliamentary and municipal elections held June 1 — completing return to constitutional order after Doumbouya\'s December 2025 presidential win. But 40 opposition parties including UFDG, RPG and UFR dissolved by government in March. Opposition boycotted, civil society condemned. Poor turnout linked to post-Tabaski timing. Provisional results expected within days. ECOWAS monitoring. Democratic legitimacy deeply compromised.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Voted June 1 — results due June 11. Post-election war window on Tigray live — 9 days. PP sweep confirmed. TPLF reinstated Debretsion in violation of Pretoria Agreement. All major analysts flag post-election military operations against TPLF as expected. Egypt, UAE, Saudi, Turkey, Israel all positioning for Horn influence.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'FIRST DEATHS IN SA XENOPHOBIA — 5 MOZAMBICANS KILLED MOSSEL BAY — KENYA 2 DEAD IN EBOLA FACILITY PROTESTS — SENEGAL SONKO BLOCKS GOVERNMENT — JUNE 2 IS THE CONTINENT\'S MOST DANGEROUS DAY THIS YEAR',
    body: 'June 2 delivers the most consequential single day in African sovereign risk since the start of this cycle. South Africa has its first confirmed deaths from the xenophobia wave — five Mozambicans killed in Mossel Bay, 55 shacks torched, 800 nationals caught in the violence. A South African teenager was also killed. The Mozambican government has issued a formal statement. The mayor of Mossel Bay called it a scene of murder, arson and displacement. This is no longer a threatened crisis — it is an active one, 28 days before the June 30 deadline. In Kenya, two people were shot dead during protests against the US Ebola quarantine facility — protests that broke out even after the High Court already suspended the plan. US-Kenya relations are now severely strained with the Finance Bill June 30 deadline and Eurobond rollover approaching. In Senegal, Sonko has declared Pastef will not join Faye\'s newly announced government — turning the constitutional standoff into a permanent political deadlock with the IMF arriving in 6 days. Guinea held parliamentary elections after dissolving 40 opposition parties. June 2, 2026 is the most dangerous day on the African sovereign risk calendar this decade.',
    tag: 'JUNE 2 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 2, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: '5 MOZAMBICANS KILLED IN SA XENOPHOBIC ATTACKS — MOSSEL BAY — FIRST OFFICIAL DEATHS', body: 'Mozambique government confirmed five nationals killed in xenophobic attacks in Mossel Bay over the weekend — first deaths officially linked to anti-migrant protests sweeping South Africa. 800 Mozambicans caught in violence. 55 shacks torched including some with people inside. One Mozambican resident: "We were still inside when people started burning down our house." 300 returned home Saturday by own means. 500+ sheltered in Western Cape. SA police confirmed 2 deaths, investigating others. SA teenager also killed. Mayor Kotze: "people have been murdered, houses burned, families displaced." Repatriation underway. June 30: 28 days.', icon: '🚨' },
    { title: 'KENYA: 2 SHOT DEAD IN PROTESTS AGAINST US EBOLA FACILITY — US-KENYA RELATIONS CRITICAL', body: 'Two people killed in protests against the planned US Ebola quarantine facility in Kenya — protests that erupted even after the High Court had already suspended the plan. Kenyan doctors called it a biosecurity trade-off for foreign aid. CDC officials had themselves recommended against the plan. US committing $13.5m to Kenya Ebola preparedness. US-Kenya diplomatic relations severely strained — arriving at worst moment: Finance Bill June 30 deadline, Eurobond $2bn Q2 rollover, IMF positioning all require US goodwill. Ebola case count revised down as DRC testing improved. Four nurses recovered.', icon: '🔥' },
    { title: 'SENEGAL: SONKO DECLARES PASTEF WILL NOT JOIN FAYE GOVERNMENT — PERMANENT DEADLOCK', body: 'Sonko has stated Pastef will not join President Faye\'s newly announced government — converting the constitutional rupture into a permanent political deadlock. Pastef holds 130/165 National Assembly seats. Sonko is Speaker. Faye\'s executive has no legislative support from his own party. IMF arrives in 6 days — any programme requires fuel subsidy reform through a legislature whose Speaker is now openly in opposition to the president. JPMorgan: 15% haircut + 5yr extension + 75% coupon priced. Default window Q4 2026–Q1 2027.', icon: '⚖️' },
    { title: 'GUINEA PARLIAMENTARY ELECTIONS — 40 OPPOSITION PARTIES DISSOLVED — LEGITIMACY VOID', body: 'Guinea held parliamentary and municipal elections June 1 — first legislative vote since Doumbouya\'s December 2025 presidential win. But government dissolved 40 opposition parties in March — including UFDG, RPG and UFR. Opposition boycotted. Civil society condemned process. Poor turnout. ECOWAS monitoring but results expected to deliver Doumbouya allies a commanding majority. Democratic legitimacy deeply compromised. West Africa now has Guinea in authoritarian consolidation alongside Mali and Burkina Faso junta states.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE MOSSEL BAY KILLINGS MARK THE TRANSITION FROM THREATENED CRISIS TO ACTIVE CRISIS IN SOUTH AFRICA',
    body: 'Five confirmed deaths in Mossel Bay — houses burned with people inside, 800 nationals displaced, one South African teenager also killed — is not a protest incident. It is a xenophobic massacre, and it has happened 28 days before the June 30 deadline when two organised movements are planning a national shutdown. The Mozambican government has formally condemned the attacks. South African police have confirmed two deaths and are investigating more. The mayor of Mossel Bay has called it murder and arson. This is now an active crisis, not a threatened one. The GNU has lost its most important narrative — that it can manage the June 30 risk through dialogue and deterrence. The Ramaphosa impeachment panel sits. The army contradicted the minister. Now foreign nationals are being killed. The ZAR, GNU cohesion and South Africa\'s standing with its African neighbours are all under simultaneous acute pressure.',
    conclusion: 'THE MOSSEL BAY KILLINGS ARE THE DEFINING MOMENT OF SOUTH AFRICA\'S JUNE CRISIS. THE TRANSITION FROM THREATENED TO ACTIVE XENOPHOBIC VIOLENCE 28 DAYS BEFORE JUNE 30 CHANGES THE RISK CALCULUS ENTIRELY. WATCH ZAR, GNU COHESION AND SADC RESPONSE.',
  },

  insight2: {
    title: 'SONKO\'S REFUSAL TO JOIN FAYE\'S GOVERNMENT MAKES SENEGAL\'S IMF RE-ENGAGEMENT STRUCTURALLY IMPOSSIBLE',
    body: 'When the leader of a party that holds 130 of 165 parliamentary seats publicly refuses to join the executive — six days before the IMF arrives — the government\'s ability to pass any legislation is structurally zero. The IMF requires fuel subsidy removal as a condition for programme resumption. Sonko blocked that as PM. He now blocks it as Speaker in permanent opposition to Faye\'s executive. Faye cannot govern. The IMF cannot re-engage. The coupon payments on June 8 and 10 may proceed — analysts expect this — but the structural path to debt sustainability is closed. JPMorgan\'s 15% haircut is the market\'s verdict. Senegal is heading for restructuring or default in Q4 2026.',
    conclusion: 'SONKO\'S DECLARATION OF OPPOSITION TO FAYE\'S GOVERNMENT IS THE FINAL CONFIRMATION THAT SENEGAL\'S IMF RE-ENGAGEMENT IS STRUCTURALLY IMPOSSIBLE UNDER CURRENT POLITICAL MECHANICS. DEFAULT OR RESTRUCTURING IN Q4 2026 IS THE BASE CASE.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23: 5 MOZAMBICANS KILLED SA, 2 DEAD KENYA EBOLA PROTESTS, SONKO BLOCKS FAYE, GUINEA ELECTIONS COMPROMISED',
    body: 'Week 23 mid-point delivers the most dangerous single day in African sovereign risk this decade. South Africa has its first confirmed xenophobia deaths — five Mozambicans killed in Mossel Bay, 55 shacks torched, 800 nationals displaced, 28 days before June 30. In Kenya two people were shot dead protesting against the US Ebola facility — even after the court had already suspended it — US-Kenya relations now severely strained entering the Finance Bill and Eurobond window. Sonko has declared Pastef will not join Faye\'s government — converting the Senegal constitutional rupture into permanent deadlock six days before the IMF arrives with €53.75m coupon due. Guinea held elections after dissolving 40 opposition parties — democratic legitimacy void. Ethiopia\'s post-election war window on Tigray remains live with results due June 11. Ghana remains the sole large African sovereign with an unambiguously positive trajectory. June 2026 is the most dangerous sovereign risk month Africa has faced in this decade — and it is only two days old.',
  },

  fxRates: {
    NGN: '1,364.68',
    GHS: '10.70',
    KES: '129.41',
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
    { time: '09:30:00', signal: 'SA: 5 Mozambicans killed in xenophobic attacks in Mossel Bay — first deaths officially linked to anti-migrant protests. 55 shacks torched some with people inside. 800 Mozambicans displaced. SA teenager also killed. Mayor: "people murdered, houses burned." Mozambique formal condemnation. Repatriation underway. June 30: 28 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Kenya: 2 people shot dead in protests against US Ebola facility — even after High Court suspended plan. Kenyan doctors: "biosecurity trade-off for foreign aid." CDC recommended against plan. US-Kenya relations severely strained entering Finance Bill June 30 + Eurobond $2bn Q2 rollover window.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '09:00:00', signal: 'Senegal: Sonko declares Pastef will NOT join Faye government — permanent political deadlock. Pastef 130/165 seats. Sonko controls legislature as Speaker in open opposition to president. IMF arrives in 6 days. JPMorgan: 15% haircut priced. No path to IMF re-engagement. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:45:00', signal: 'Guinea: Parliamentary + municipal elections June 1 — 40 opposition parties dissolved pre-vote. UFDG, RPG, UFR all dissolved. Opposition boycotted. Poor turnout. ECOWAS monitoring. Doumbouya allies expected to sweep. Democratic legitimacy void. West Africa: Guinea joins Mali + Burkina Faso in authoritarian consolidation.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Ethiopia: Post-election war window live — 9 days to June 11 results. PP sweep confirmed from June 1 vote. TPLF reinstated Debretsion. All major analysts: post-election operations against TPLF expected. Egypt, UAE, Saudi, Turkey, Israel positioning. Most dangerous Horn window since Nov 2020.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Ebola: DRC case count revised downward as testing improved — confirmed cases better distinguished from suspected. Four nurses recovered. Bundibugyo fatality rate up to 50%. No vaccine, no treatment. Kenya all-16 suspects negative. Uganda 8 confirmed. Italy scare negative. ECDC: EU/EEA risk very low.', detail: 'MEDIUM', type: 'INFO', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Ramaphosa impeachment panel: Rise Mzansi MP Makashule Gana elected chairperson — first sitting in SA democratic history. ANC retains 1/3+ seats — removal unlikely. But process compounds June 30 deadline, Mossel Bay deaths, Bafana visa blunder and SANDF-minister contradiction simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX June 2: NGN 1,364.68 (CBN official) | GHS 10.70 | KES 129.41 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. NGN strengthened from 1,371 — naira holding. GHS 10.70 — cedi up 19.3% YoY. ZAR firm on dollar weakness despite SA political crisis.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 38, fx: 28, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 98, fiscal: 68, fx: 46, debt: 62, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,364.68', change: '-13.34%', stress: 'MODERATE', ytd: '-3.50%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '10.70', change: '+1.65%', stress: 'LOW', ytd: '+19.32%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.41', change: '+0.16%', stress: 'ELEVATED', ytd: '-1.10%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war window LIVE — 9 days. Regional powers positioning. Most dangerous Horn window since Nov 2020.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1, 2026', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved pre-vote. UFDG, RPG, UFR all dissolved. Opposition boycotted. ECOWAS monitoring. Doumbouya allies expected to sweep. Democratic legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 28 days. 5 Mozambicans killed Mossel Bay. Ramaphosa impeachment panel sits. SANDF contradiction. TWO movements. GNU coherence failing.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. Civilian crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: '2 killed in Ebola facility protests. Finance Bill June 30. US-Kenya strained. Eurobond Q2 rollover. Ruto managing five crises simultaneously.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 6 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'SONKO BLOCKS GOVT — IMF 6 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+42', bond: '-2.1pts', fx: '+3.5%', signal: '5 DEAD MOSSEL BAY — JUNE 30 28 DAYS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.4%', signal: '2 DEAD EBOLA PROTESTS — FINANCE BILL', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW LIVE', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+19.3%', signal: 'CEDI SURGE — CONTINENTAL BENCHMARK', color: '#00c48c' },
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
  ],
}
