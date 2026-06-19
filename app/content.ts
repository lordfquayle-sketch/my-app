export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 19, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'WORSENING',
    drivers: ['US Imposes Visa Restrictions on TPLF Hardliners — Tigray Conflict Return Risk Confirmed', 'Zimbabwe National Assembly Passes Presidential Term Extension — Mnangagwa Constitutional Coup', 'AU Condemns Niger Niamey Airport Attack — Sahel Capital Infrastructure Now Targeted', 'World Cup: DRC Draw 1-1 With Portugal, Ghana Beat Panama 1-0 — Africa Competing'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 97, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'US VISA RESTRICTIONS ON TPLF HARDLINERS — confirmed June 18 by Secretary Rubio. State Dept: "Rising tensions between TPLF hardliners and the Ethiopian government have threatened to reignite conflict in northern Ethiopia." TPLF-aligned Tigray Security Forces engaged in direct clashes with ENDF earlier this year. Hundreds of thousands of civilians have already fled their homes for fear of conflict return. TPLF reinstated Debretsion, introduced draft legislation described as "blueprint for totalitarian control." US action confirms post-election war risk is no longer latent — it is live.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', alert: 'Zimbabwe National Assembly passed constitutional amendment bill to extend presidential term limit with more than 200 lawmakers voting in favour — securing the required two-thirds majority. Bill now goes to Senate which must also achieve two-thirds. If passed, heads to Mnangagwa for assent. Speaker Mudenda announced results following weeks of polarised debate. Zimbabwe is simultaneously repatriating 660 citizens from South Africa xenophobia crisis — a government that extends its leader\'s power while managing an external humanitarian crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Niger', flag: '🇳🇪', alert: 'Armed attack on Diori Hamani International Airport in Niamey Thursday — AU Commission condemned the attack, Chairperson Mahmoud Ali Youssouf commended swift response of Niger security forces in repelling assailants and securing the facility. Niamey airport is the primary civilian aviation hub and humanitarian logistics centre for Niger. Attack on capital-city aviation infrastructure is a major escalation in the Sahel security collapse — previously attacks were concentrated in rural and border zones. JNIM and ISSP both active in Niger.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 — 11 days. Municipal elections voter registration launched. KZN Hawks Head Leseja Senona testifies at the Madlanga Commission of Inquiry. Inflation at 4.5% two-year high. Six nations repatriating citizens. Madlanga Commission — separate accountability thread. Defence Dept secrecy court order re Cradock Four. GNU managing governance accountability, xenophobia, inflation and June 30 countdown simultaneously.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'June 30 Finance Bill deadline — 11 days. June 25 storming anniversary — 6 days. Schools close June 24. ACLED recorded 94+ PSV fuel-price demonstrations in May. Utumishi Girls Academy fire in Gilgil — government ordered nationwide boarding school infrastructure inspection. US travel restrictions affect Kenyan nationals applying for World Cup visas. KES at 129.54.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'US IMPOSES VISA RESTRICTIONS ON TPLF HARDLINERS — CONFIRMS POST-ELECTION WAR RISK IS LIVE — ZIMBABWE PARLIAMENT EXTENDS MNANGAGWA TERM — NIAMEY AIRPORT ATTACKED',
    body: 'June 19 delivers three simultaneous governance and security escalations that define the new Africa risk architecture. The US State Department has imposed visa restrictions on TPLF hardliners and their immediate families — Secretary Rubio stating directly that their actions threaten to "reignite conflict in northern Ethiopia and undermine peace and security across the entire region." Hundreds of thousands of civilians have already fled northern Ethiopia in anticipation of conflict. The TPLF-aligned Tigray Security Forces engaged in direct clashes with the ENDF earlier this year. The post-election war risk analysts flagged for months is now confirmed live by a US diplomatic action. In Zimbabwe, the National Assembly passed a constitutional amendment extending Mnangagwa\'s presidential term limit with 200+ votes — a two-thirds majority — the bill now heads to the Senate. A country simultaneously repatriating 660 citizens from South Africa\'s xenophobia crisis is consolidating power domestically. In Niger, armed forces attacked the Diori Hamani International Airport in Niamey — the first attack on a Sahel capital\'s primary aviation infrastructure. The AU condemned the attack. The World Cup continues: DRC drew 1-1 with Portugal, Ghana beat Panama 1-0 on a late winner from Yirenkyi.',
    tag: 'JUNE 19 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 19, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '780', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'US VISA RESTRICTIONS ON TPLF HARDLINERS — WAR RISK IN TIGRAY NOW CONFIRMED LIVE', body: 'Secretary Rubio announced June 18: visa restrictions on "hardline members of the TPLF and their immediate family members." State Dept: TPLF-aligned Tigray Security Forces engaged in direct clashes with the ENDF earlier this year. Hundreds of thousands of civilians have already fled northern Ethiopia. TPLF reinstated Debretsion, introduced draft legislation described as "blueprint for totalitarian control" including mandatory mobilisation, expanded security powers and new media regulation. US action is the clearest external confirmation that the post-election Tigray conflict risk — flagged since June 1 — is now actively materialising. The question is no longer if escalation is happening but how fast.', icon: '🚨' },
    { title: 'ZIMBABWE PARLIAMENT EXTENDS MNANGAGWA TERM — CONSTITUTIONAL AMENDMENT PASSES WITH 200+ VOTES', body: 'Zimbabwe\'s National Assembly passed the constitutional amendment bill to extend the presidential term limit — securing the required two-thirds majority with more than 200 lawmakers voting in favour. Speaker Jacob Mudenda announced results after weeks of polarised debate. Bill goes to Senate next, requiring another two-thirds vote, before heading to Mnangagwa for assent. Zimbabwe is simultaneously repatriating 660 citizens from South Africa and managing Western sanctions. A legislative supermajority extending the incumbent\'s rule while repatriating citizens from a xenophobia crisis is the defining political image of Zimbabwe in June 2026.', icon: '⚖️' },
    { title: 'NIAMEY AIRPORT ATTACKED — SAHEL CAPITAL INFRASTRUCTURE NOW TARGETED — AU CONDEMNS', body: 'Armed forces attacked the Diori Hamani International Airport in Niamey on Thursday — the first attack on a Sahel capital city\'s primary aviation infrastructure. AU Commission Chairperson Mahmoud Ali Youssouf condemned the attack and commended Niger\'s security forces for repelling the assailants and securing the facility. The attack represents a qualitative escalation in the Sahel security collapse — previously concentrated in rural and border zones, jihadist operations are now targeting capital-city infrastructure. Niamey airport is the primary civilian hub and humanitarian logistics gateway for Niger.', icon: '💥' },
    { title: 'WORLD CUP: DRC DRAW PORTUGAL 1-1, GHANA BEAT PANAMA 1-0 — AFRICA COMPETING', body: 'Major African World Cup results: DRC Leopards drew 1-1 with Portugal in their historic first World Cup match since 1974 — a remarkable result for a team that played in a Belgium isolation bubble and arrived in Houston under Ebola travel restrictions. Ghana\'s Black Stars beat Panama 1-0 on a late Yirenkyi goal in Toronto — dramatic last-minute winner. England beat Croatia 4-2 with Kane, Bellingham and Rashford goals. South Africa\'s Bafana drew their second group game after losing the opener 2-0 to Mexico. Cape Verde held Spain to a 0-0 draw — a landmark result for the debutants.', icon: '⚽' },
  ],

  insight1: {
    title: 'THE US TPLF VISA RESTRICTION IS THE MOST CONSEQUENTIAL HORN OF AFRICA DIPLOMATIC ACTION SINCE THE PRETORIA AGREEMENT',
    body: 'When the US State Department under Marco Rubio imposes visa restrictions on a specific armed faction, names them explicitly as a threat to regional stability, and cites direct military clashes with the national army as evidence — that is not a warning. It is an acknowledgement that the situation has already deteriorated beyond the pre-conflict threshold. The Pretoria Agreement was Washington\'s diplomatic achievement. The restrictions signal that Washington believes TPLF hardliners are actively undoing it. Combined with the TPLF reinstating Debretsion, introducing "totalitarian control" legislation, and engaging in direct ENDF clashes — the post-election Tigray window that every analyst flagged from June 11 is no longer a risk scenario. It is a current situation. The civilian displacement figure — hundreds of thousands already fled — is the humanitarian indicator that confirms the conflict is not theoretical.',
    conclusion: 'THE US TPLF VISA RESTRICTIONS CONFIRM THAT TIGRAY\'S POST-ELECTION CONFLICT RISK HAS TRANSITIONED FROM SCENARIO TO SITUATION. THE PRETORIA AGREEMENT IS FUNCTIONALLY COLLAPSED. WATCH FOR ENDF MILITARY POSITIONING IN THE COMING 72 HOURS.',
  },

  insight2: {
    title: 'THE NIAMEY AIRPORT ATTACK IS THE SAHEL SECURITY COLLAPSE CROSSING A NEW THRESHOLD',
    body: 'Every major security analyst tracking the Sahel has described the jihadist advance in terms of rural territory, border zones and transit corridors. The Niamey airport attack is different — it is an attack on capital-city infrastructure, the primary aviation hub of a country under junta rule, in a city of over 1 million people. JNIM and ISSP have been demonstrating their ability to project force — overrunning National Guard camps, attacking military positions in border towns, seizing weapons. The airport attack is the logical next step: demonstrating that the security forces of the AES junta states cannot even protect their own capital\'s infrastructure. The humanitarian implications are immediate — Niamey airport is the primary logistics gateway for international humanitarian operations in Niger. An airport that cannot be secured is an airport that cannot reliably receive aid.',
    conclusion: 'THE NIAMEY AIRPORT ATTACK MARKS THE SAHEL SECURITY COLLAPSE CROSSING FROM RURAL TO CAPITAL-CITY INFRASTRUCTURE. THIS IS A NEW THRESHOLD. THE HUMANITARIAN AND GOVERNANCE IMPLICATIONS FOR NIGER\'S JUNTA ARE SEVERE AND IMMEDIATE.',
  },

  brief: {
    week: '25',
    title: 'WEEK 25 CLOSE: US TPLF VISA RESTRICTIONS, ZIMBABWE TERM EXTENSION, NIAMEY AIRPORT ATTACKED, DRC DRAW PORTUGAL, GHANA WIN',
    body: 'Week 25 closes on June 19 with three simultaneous tier-1 escalations. The US imposed visa restrictions on TPLF hardliners — confirming the post-election Tigray conflict risk is now a live situation with hundreds of thousands of civilians already displaced. Zimbabwe\'s National Assembly passed a presidential term extension with 200+ votes — constitutional consolidation while repatriating 660 citizens from South Africa. Armed forces attacked Niamey\'s international airport — the Sahel security collapse has now reached capital-city aviation infrastructure. On the pitch: DRC drew 1-1 with Portugal in their historic World Cup return, Ghana beat Panama 1-0 on a late winner. South Africa has 11 days to June 30. Kenya has 11 days to the Finance Bill deadline and 6 days to the June 25 storming anniversary. Senegal\'s IMF talks are ongoing. ZAR at 16.18 — continuing to strengthen despite compound domestic stress.',
  },

  fxRates: {
    NGN: '1,357.03',
    GHS: '11.20',
    KES: '129.54',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.18',
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
    { time: '09:30:00', signal: 'US IMPOSES VISA RESTRICTIONS ON TPLF HARDLINERS — Rubio June 18. State Dept: TPLF-aligned forces clashed with ENDF earlier this year. Hundreds of thousands fled northern Ethiopia for fear of conflict return. TPLF reinstated Debretsion, introduced "totalitarian control" draft legislation. Post-election Tigray war risk confirmed live by US diplomatic action.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:15:00', signal: 'Zimbabwe National Assembly passes presidential term extension — 200+ votes, two-thirds majority. Speaker Mudenda announced results. Bill to Senate next, then Mnangagwa assent. Zimbabwe simultaneously repatriating 660 from SA xenophobia crisis. Constitutional consolidation while managing external humanitarian crisis.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'Niger: Armed attack on Diori Hamani International Airport, Niamey — AU condemns. AU Commission Chairperson Youssouf commended Niger security forces for repelling attack and securing facility. First attack on Sahel capital-city aviation infrastructure. JNIM and ISSP previously confined to rural and border zones. Humanitarian logistics hub threatened.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'World Cup: DRC draw Portugal 1-1 — historic first World Cup match since 1974 under Ebola travel restrictions and Belgium isolation bubble. Ghana beat Panama 1-0 late Yirenkyi goal in Toronto. Cape Verde 0-0 Spain — landmark debutant result. England beat Croatia 4-2. Africa competing effectively on the pitch.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'South Africa June 30 — 11 days. Municipal elections voter registration launched. KZN Hawks Head Senona testifies at Madlanga Commission. Inflation 4.5% two-year high. Six nations evacuating. Defence Dept court order re Cradock Four secrecy. GNU managing governance accountability and countdown simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Kenya: Finance Bill June 30 — 11 days. June 25 anniversary — 6 days. Schools close June 24. ACLED: 94+ PSV fuel demonstrations recorded May 2026. Utumishi Girls Academy fire — nationwide boarding school inspection ordered. Fuel protests largest spike since Strait of Hormuz blockade began. US travel restrictions affecting Kenyan fans.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:00:00', signal: 'Femi Otedola\'s First HoldCo completes $32.8m capital raise via private placement — First Bank of Nigeria consolidation. Johann Rupert crosses $20bn Bloomberg index — second African to reach that level. Axian Telecom lands €170m EBRD loan for two African markets. Structural positive signals from African private sector.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 19: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.18 (-10.13% YoY, rand strengthening) | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR structural strength persists — gold/PGM exports, SARB credibility. NGN continuing steady improvement from 1,579 June 2025 peak.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 64, fiscal: 56, fx: 40, debt: 58, political: 84, external: 58 },
    { country: 'Ghana', flag: '🇬🇭', score: 40, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 97, fiscal: 90, fx: 74, debt: 96, political: 99, external: 96 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 95, fiscal: 78, fx: 46, debt: 70, political: 97, external: 94 },
    { country: 'Senegal', flag: '🇸🇳', score: 76, fiscal: 80, fx: 66, debt: 82, political: 72, external: 74 },
    { country: 'Niger', flag: '🇳🇪', score: 98, fiscal: 88, fx: 85, debt: 85, political: 99, external: 96 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 90, fiscal: 78, fx: 80, debt: 84, political: 96, external: 88 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,357.03', change: '-13.83%', stress: 'LOW', ytd: '-3.40%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.54', change: '+0.07%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.18', change: '-10.13%', stress: 'LOW', ytd: '+10.13%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'MODERATE', ytd: '-7.43%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 457/547 — Post-Election Conflict LIVE', type: 'General Election', risk: 'CRITICAL', note: 'US visa restrictions on TPLF hardliners confirmed June 18. Hundreds of thousands fled northern Ethiopia. ENDF-TPLF clashes confirmed. Pretoria Agreement functionally collapsed. War risk is current situation, not scenario.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Term Extension Passed — Senate Next', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'National Assembly passed term extension with 200+ votes (2/3 majority). Senate vote next. Mnangagwa assent if passed. Repatriating 660 citizens from SA simultaneously.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition calls Mohamud "former president." Al-Shabaab active. No constitutional court.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Voter Registration Launched', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 11 days. Voter registration launched. Six nations evacuating. Inflation 4.5%. Madlanga Commission. Defence Dept court order.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027 — Finance Bill June 30 In 11 Days', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. June 25 anniversary 6 days. Schools June 24. 94+ fuel protests recorded. Boarding school fire — nationwide inspection.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF TALKS ACTIVE — SONKO OPEN TO DEAL', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Negotiations Active', risk: 'HIGH', color: '#f5a623' },
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
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'US TPLF VISA RESTRICTIONS — WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'NIGER', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'NIAMEY AIRPORT ATTACKED — AU CONDEMNS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+52', bond: '-2.6pts', fx: '+0.1%', signal: 'JUNE 25 IN 6 DAYS — JUNE 30 IN 11', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+40', bond: '-2.0pts', fx: '+10.1%', signal: 'JUNE 30 11 DAYS — VOTER REG LAUNCHED', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'TERM EXTENSION PASSED — SENATE NEXT', color: '#ff3b3b' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'SONKO OPEN TO IMF — TALKS ACTIVE', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE — JNIM ATTACKS', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.4pts', fx: '+8.8%', signal: 'BEAT PANAMA 1-0 — IMF COMPLETE', color: '#00c48c' },
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
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.18, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.18, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 19', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.18, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
