export const content = {
  riskIndex: '89',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 2, 2026 09:00 UTC',
    overallScore: 89,
    trend: 'STABLE',
    drivers: ['Senegal: Pastef Passes Constitutional Reform Limiting Presidential Powers — Sonko vs Faye — Referendum Announced', 'Nigeria Seeks Compensation From South Africa For Citizens Who Fled — Diplomatic Escalation Continues', 'Algeria Legislative Elections Today — Reform vs Stability Debate — Turnout Critical Signal', 'Nigeria Borno Boko Haram Attack Lassa Secondary School — South Sudan UN Convoy Attack'],
    regions: [
      { region: 'East Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 74, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 80, trend: '↓', color: '#f5a623' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'CONSTITUTIONAL RUPTURE DEEPENS. Pastef — Sonko\'s party — passed sweeping constitutional reform in the National Assembly on June 30: limits presidential powers, bans president from leading a political party, strengthens parliamentary oversight, requires government to inform parliament on natural resource exploitation deals, creates new 9-member Constitutional Court replacing 7-member Constitutional Council, limits president\'s power to dissolve National Assembly. Opposition MPs walked out after one was forcibly removed. Protesters attempted to storm parliament — tear gas deployed. Faye announced referendum but set no date. Presidential coalition leader Aminata Touré: "parliament is being used to weaken the president." This transforms the Sonko-Faye confrontation from a personal dispute into a constitutional power struggle — and deepens the governance uncertainty the IMF is trying to navigate.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Nigeria seeks compensation from South Africa for citizens who fled. Nigerian officials documenting losses — businesses, homes, other assets abandoned by nationals fleeing anti-migrant protests. More than 600 Nigerians already evacuated, hundreds more expected. Nigeria maintains some affected nationals were legally resident in SA. Compensation claims to be addressed through diplomatic channels. This is a major escalation: converting a humanitarian repatriation into a formal bilateral compensation claim. Watch Abuja-Pretoria diplomatic response in coming days.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Algeria', flag: '🇩🇿', alert: 'Legislative elections being held today — Algeria National People\'s Assembly vote amid debates over political reform, turnout and stability. Tebboune\'s FLN/National Liberation Front alliance expected to dominate. Opposition fragmented. Turnout is the key signal — low participation would indicate deepening public disengagement from a political system with limited pluralism. Algeria is Morocco\'s strategic rival; parliamentary composition affects Western Sahara diplomacy and Sahel security cooperation architecture.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'Boko Haram attacks secondary school in Lassa, Borno State. Confirms the pattern of the May 2026 violence spike — 842 killed, incidents up 51.5%. ISSP entered Nigeria from Niger in March-May. Boko Haram continues attacking education infrastructure — pattern since 2014 that has never been fully broken. South Sudan: UN convoy attacked in Jonglei State, multiple dead, UN "deeply saddened," calls for investigation. Continental security environment deteriorating across multiple theatres simultaneously.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Post-June 30: voluntary repatriations continuing in Cape Town. Weekly Thursday march cadence declared by Ngobese-Zuma for 6 months. Nigeria seeking compensation — diplomatic escalation. Petrol now R2.01/litre lower from July 1. PEPFAR-CDC funding expires September. Municipal elections fall 2026. Ramaphosa 5-point plan implementation pending. June 30 passed, structural conditions unresolved.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'SENEGAL: PASTEF PASSES CONSTITUTIONAL REFORM TO LIMIT PRESIDENTIAL POWERS — SONKO TURNS SPEAKERSHIP INTO LEGISLATIVE COUP AGAINST FAYE — NIGERIA SEEKS SA COMPENSATION — ALGERIA VOTES',
    body: 'July 2 opens with Senegal\'s constitutional crisis taking a dramatic new turn. Pastef — Sonko\'s party, which controls 130 of 165 National Assembly seats — used its parliamentary majority to pass sweeping constitutional reforms that limit presidential powers: banning Faye from leading a political party, strengthening parliamentary oversight over natural resource deals, creating a new Constitutional Court, and restricting his ability to dissolve the assembly. Opposition MPs walked out after one was forcibly removed by gendarmes. Fifty protesters — mostly from Macky Sall\'s APR party — attempted to storm the parliament building and were repelled by tear gas. Faye has announced a national referendum but set no date. The presidential coalition leader described it as parliament being "used to weaken the president." This is Sonko deploying his parliamentary supermajority not just to block Faye\'s economic agenda — but to structurally diminish the presidency itself. The Senegal political situation is now the most consequential constitutional confrontation on the continent. Nigeria\'s compensation demand from South Africa converts the xenophobia humanitarian crisis into a formal bilateral legal claim. Algeria is voting in legislative elections today. Boko Haram attacked a school in Lassa, Borno.',
    tag: 'JULY 2 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'July 2, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '415', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '198', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '850', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'SENEGAL: PASTEF PASSES CONSTITUTIONAL REFORM — BANS PRESIDENT FROM LEADING PARTY — REFERENDUM ANNOUNCED', body: 'Senegal\'s National Assembly passed sweeping constitutional reforms on June 30 — proposed by Pastef, Sonko\'s party. Key changes: president banned from leading a political party or coalition; strengthened parliamentary oversight over natural resource exploitation agreements; new 9-member Constitutional Court created; limits on president\'s power to dissolve the National Assembly; stricter controls on executive decisions between election and proclamation of results. Opposition boycotted after one MP was forcibly removed. Fifty APR protesters attempted to storm parliament — tear gas deployed. Presidential coalition leader Aminata Touré: "parliament is being used to weaken the president." Faye announced referendum — no date set. Sonko has converted his parliamentary supermajority into a constitutional weapon against the president who fired him.', icon: '⚖️' },
    { title: 'NIGERIA SEEKS COMPENSATION FROM SOUTH AFRICA — FORMAL BILATERAL CLAIM', body: 'Nigeria has formally stated it will seek compensation from South Africa for citizens who abandoned businesses, homes and other assets while fleeing anti-migrant protests. Nigerian officials are documenting losses. More than 600 Nigerians already evacuated, hundreds more expected. Nigeria maintains some of those affected were legally resident in South Africa — disputing claims that all repatriated nationals were undocumented. The compensation claim will be addressed through diplomatic channels. This is a significant escalation: converting the humanitarian repatriation crisis into a formal bilateral legal and diplomatic claim. Watch for SA government\'s formal response and whether it is addressed at SADC or AU level.', icon: '🚨' },
    { title: 'ALGERIA LEGISLATIVE ELECTIONS TODAY — TURNOUT IS THE KEY SIGNAL', body: 'Algeria\'s National People\'s Assembly elections are being held today amid debates over reform, turnout and political stability. Tebboune\'s FLN-led coalition expected to dominate in a political system with limited genuine pluralism. The key variable is turnout — Algeria\'s 2021 parliamentary elections produced the country\'s lowest-ever recorded turnout at approximately 23%, signalling profound public disengagement from electoral politics. A repeat low turnout would reinforce the legitimacy deficit of the Algerian political system. Algeria\'s parliamentary composition affects Western Sahara diplomacy, Sahel security cooperation with Mali and Niger, and EU-Algeria energy relations.', icon: '🗳️' },
    { title: 'NIGERIA BORNO BOKO HARAM SCHOOL ATTACK — SOUTH SUDAN UN CONVOY KILLED', body: 'Boko Haram attacked a secondary school in Lassa, northeastern Borno State — continuing the pattern of education infrastructure targeting that has characterised the insurgency since 2014. This follows May 2026\'s 842 killed (up 90.1% YoY) and ISSP\'s confirmed entry through Kebbi and Sokoto. South Sudan: the UN is deeply saddened by Monday\'s attack on a humanitarian convoy in Jonglei State — multiple fatalities, investigation called for. The simultaneous deterioration of security in Nigeria\'s northeast and South Sudan\'s Jonglei State underscores the breadth of the continental security collapse, now spanning the Sahel, Horn, and Central/East African flashpoints simultaneously.', icon: '💥' },
  ],

  insight1: {
    title: 'SONKO\'S CONSTITUTIONAL REFORM IS THE MOST CONSEQUENTIAL POLITICAL MOVE IN SENEGAL SINCE INDEPENDENCE — AND IT DEEPENS THE IMF CRISIS',
    body: 'Ousmane Sonko has converted the National Assembly speakership — which he acquired after being fired as prime minister — into a constitutional weapon. The reforms passed June 30 do not just block Faye\'s agenda: they structurally diminish the presidency by banning the head of state from leading a political party, strengthening parliamentary oversight over natural resource deals (directly targeting the BP/Woodside situation), creating a new Constitutional Court that Pastef will influence, and limiting presidential dissolution powers. The opposition\'s characterisation of this as an "institutional coup" is analytically precise — Sonko is using a parliamentary supermajority to redesign the constitutional architecture in Pastef\'s favour. The IMF implications are severe: Faye signed the coupons, dispatched the Finance Minister, and is targeting the IMF agreement — but Sonko\'s parliament has now passed constitutional changes that further constrain presidential authority over economic policy. The governance architecture the IMF is trying to negotiate with is being restructured in real time.',
    conclusion: 'SONKO\'S CONSTITUTIONAL REFORMS TRANSFORM THE SENEGAL CRISIS FROM A POLITICAL DISPUTE INTO A STRUCTURAL CONSTITUTIONAL CONFRONTATION. THE IMF IS NOW TRYING TO NEGOTIATE AN ECONOMIC PROGRAMME WITH A GOVERNMENT WHOSE CONSTITUTIONAL ARCHITECTURE IS BEING REDESIGNED BY THE OPPOSITION LEGISLATURE. Q3 2026 PROGRAMME TIMELINE UNDER INCREASED RISK.',
  },

  insight2: {
    title: 'NIGERIA\'S COMPENSATION DEMAND FROM SOUTH AFRICA IS A SOVEREIGN ASSERTION THAT CHANGES THE POST-JUNE 30 DIPLOMATIC LANDSCAPE',
    body: 'Every xenophobia crisis in South Africa\'s post-apartheid history has been managed diplomatically through quiet bilateral channels — repatriations arranged, protests expressed, life eventually normalised. Nigeria\'s formal compensation claim is categorically different. It converts the June 2026 crisis into a legal-diplomatic matter with documentation, formal channels and ongoing accountability. The claim that some of the 600+ Nigerians who evacuated were legal residents — not undocumented migrants — is the critical legal distinction: if South Africa\'s enforcement actions affected legally-resident foreign nationals, those actions may constitute violations of bilateral agreements and potentially international law. The SA government\'s formal response, and whether Nigeria pursues this through ECOWAS, AU or direct bilateral mechanisms, will determine whether this becomes a brief diplomatic friction or a sustained diplomatic rupture that outlasts the June 30 crisis itself.',
    conclusion: 'NIGERIA\'S COMPENSATION DEMAND CONVERTS THE JUNE 30 HUMANITARIAN CRISIS INTO A FORMAL BILATERAL LEGAL CLAIM. IF LEGALLY-RESIDENT NIGERIANS WERE AFFECTED BY SA\'S ENFORCEMENT ACTIONS, THERE ARE POTENTIAL VIOLATIONS OF BILATERAL AGREEMENTS. WATCH FOR SA\'S FORMAL RESPONSE AND NIGERIA\'S CHOSEN ESCALATION PATHWAY.',
  },

  brief: {
    week: '28',
    title: 'WEEK 28 OPEN: SENEGAL CONSTITUTIONAL COUP BY PASTEF, NIGERIA SEEKS SA COMPENSATION, ALGERIA VOTES, BORNO SCHOOL ATTACK',
    body: 'Week 28 opens with Senegal\'s political crisis entering its most dangerous constitutional phase yet. Pastef used its National Assembly supermajority to pass reforms that ban President Faye from leading a political party, strengthen parliamentary oversight over natural resource deals, create a new Constitutional Court, and limit his dissolution powers. Opposition boycotted, protesters stormed parliament and were dispersed with tear gas. Faye announced a referendum with no date. The governance architecture the IMF is trying to negotiate with is being redesigned in real time. Nigeria has formally demanded compensation from South Africa for citizens who fled, with documentation of losses ongoing — converting the humanitarian crisis into a bilateral legal claim. Algeria holds legislative elections today — turnout is the key signal. Boko Haram attacked a school in Lassa, Borno. South Sudan: UN convoy attacked in Jonglei. SA post-June 30: weekly Thursday marches declared, repatriations continuing, petrol R2.01/litre lower from yesterday. Ebola remains the third-largest outbreak on record. Ethiopia\'s TPLF conflict live.',
  },

  fxRates: {
    NGN: '1,579.00',
    GHS: '11.20',
    KES: '129.48',
    EGP: '52.22',
    XOF: '569.32',
    ZAR: '16.55',
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
    { time: '09:30:00', signal: 'Senegal: Pastef passed constitutional reform June 30 — bans president from leading a political party, strengthens parliament oversight of natural resource deals, creates new Constitutional Court (9 members vs current 7), limits presidential dissolution powers. Opposition boycotted, 50 protesters stormed parliament — tear gas. Faye announces referendum — no date. Sonko deploys parliamentary supermajority as constitutional weapon against president who fired him.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'XOF' },
    { time: '09:15:00', signal: 'Nigeria seeks compensation from South Africa for citizens who fled anti-migrant protests — businesses, homes, assets abandoned. 600+ evacuated, hundreds more expected. Nigeria: some affected nationals were legally resident in SA. Formal documentation ongoing. Compensation through diplomatic channels. Converts humanitarian crisis into formal bilateral legal claim.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'NGN' },
    { time: '09:00:00', signal: 'Algeria: Legislative elections TODAY. NPA vote amid reform vs stability debate. FLN-led coalition expected to dominate. Turnout is the key signal — 2021 elections produced record-low ~23% turnout. Affects Western Sahara diplomacy, Sahel security cooperation, EU-Algeria energy relations.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Nigeria Borno: Boko Haram attacks secondary school in Lassa — education infrastructure targeting pattern continues. South Sudan Jonglei: UN convoy attacked — multiple killed, UN "deeply saddened," investigation called. Continental security deteriorating across multiple simultaneous theatres.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'NGN' },
    { time: '08:30:00', signal: 'South Africa post-June 30: voluntary repatriations continuing Cape Town. Nigeria seeking compensation — diplomatic escalation. Weekly Thursday marches declared by Ngobese-Zuma for 6 months. Petrol R2.01/litre lower from July 1. PEPFAR September expiry. Municipal elections fall 2026 approaching.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ebola: third-largest outbreak on record — 1,000+ confirmed. France first European case. Al Jazeera: local healthcare workers say situation has improved in DRC. Contact tracing remains below 90% target. No vaccine, no treatment. White House $1.4bn Congress ask outstanding.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Zimbabwe: Mnangagwa signature on constitutional amendments still pending — direct elections abolished, term to 2030. Ethiopia: TPLF post-election conflict live — US visa restrictions in effect, hundreds of thousands displaced. Kenya: court gives Ruto 120 days to fix gender imbalance in cabinet. Kenya-US sign major disease surveillance pact.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 2: NGN 1,579.00 (NOTE: Sharp NGN weakening — reverting toward previous 2025-level peak, check if CBN-related or data error) | GHS 11.20 | KES 129.48 | EGP 52.22 | ZAR 16.55 | UGX 3,645.50 | ZMW 19.02 | XOF 569.32. ZAR slightly softer at 16.55 vs 16.40 yesterday. Senegal constitutional reform has no immediate XOF impact (pegged currency) but bond spreads will be key to watch.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 90, fiscal: 62, fx: 44, debt: 62, political: 94, external: 86 },
    { country: 'Ghana', flag: '🇬🇭', score: 34, fiscal: 30, fx: 42, debt: 30, political: 26, external: 36 },
    { country: 'Kenya', flag: '🇰🇪', score: 76, fiscal: 72, fx: 58, debt: 78, political: 76, external: 74 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 68, fx: 74, debt: 72, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 78, fiscal: 70, fx: 42, debt: 64, political: 80, external: 78 },
    { country: 'Senegal', flag: '🇸🇳', score: 92, fiscal: 90, fx: 84, debt: 94, political: 96, external: 90 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 96, fiscal: 78, fx: 82, debt: 84, political: 99, external: 92 },
    { country: 'DRC', flag: '🇨🇩', score: 99, fiscal: 88, fx: 90, debt: 82, political: 96, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,579.00', change: '+16.4%', stress: 'HIGH', ytd: '-3.40%', color: '#ff3b3b' },
    { code: 'GHS', country: 'Ghana', rate: '11.20', change: '+8.81%', stress: 'MODERATE', ytd: '+12.40%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.48', change: '+0.03%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.55', change: '-9.10%', stress: 'LOW', ytd: '+9.10%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,645.50', change: '-3.31%', stress: 'ELEVATED', ytd: '-3.31%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '569.32', change: '-7.43%', stress: 'HIGH', ytd: '-7.43%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Algeria', flag: '🇩🇿', date: 'TODAY — July 2, 2026', type: 'Legislative Elections', risk: 'MEDIUM', note: 'National People\'s Assembly elections today. FLN-led coalition expected to dominate. Turnout is key signal — 2021 record-low ~23%. Affects Western Sahara diplomacy, Sahel security cooperation, EU energy relations.', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'CRITICAL', note: 'Pastef passed reforms June 30 — bans president from leading party, strengthens parliament, new Constitutional Court, limits dissolution power. Faye announces referendum — no date. Sonko deploying supermajority as constitutional weapon.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Mnangagwa Signature Pending', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Senate approved June 24. Direct elections abolished. Term to 2030. Only signature needed. AU response absent.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Post-Election Conflict Live', type: 'General Election', risk: 'CRITICAL', note: 'US TPLF visa restrictions in effect. Hundreds of thousands displaced. Pretoria Agreement collapsed. War risk active.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 Municipal Elections', type: 'Municipal Elections', risk: 'HIGH', note: 'June 30 passed — weekly marches declared. Nigeria seeking compensation. Petrol R2.01 lower. PEPFAR September. Municipal elections approaching. Weekly Thursday march cadence.', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, power cuts. Opposition consolidating. Outcome uncertain. 6 weeks away.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: 'Accountability Phase — Cabinet Gender Order', type: 'Political Crisis', risk: 'HIGH', note: 'Court gives Ruto 120 days to fix gender imbalance in cabinet. Finance Bill law. Reparations implementation pending. Kenya-US disease surveillance pact signed.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — CONSTITUTIONAL REFORM COMPLICATES TIMELINE', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Q3 Outlook Worsened', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', amount: '$2.0bn', instrument: 'Eurobond', maturity: 'Q2 2026 — Rolling', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$2.1bn', instrument: 'Eurobond', maturity: 'Q2 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q2-Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$77', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$77', fiscalBreakeven: '$78/bbl', breakevenNote: 'NEAR BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Kenya', flag: '🇰🇪', primary: 'Tea/Coffee', exposure: 'MEDIUM', gdpShare: '5%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'NON-COMMODITY', trend: '→', risk: 'MEDIUM' },
    { country: 'Egypt', flag: '🇪🇬', primary: 'Oil/Gas/Tourism', exposure: 'MEDIUM', gdpShare: '10%', revenueShare: '30%', price2026: '$77', fiscalBreakeven: '$70/bbl', breakevenNote: 'ABOVE BREAKEVEN', trend: '↓', risk: 'MEDIUM' },
  ],

  riskTable: [
    { country: 'SENEGAL', cds: 850, delta: '+30', bond: '-0.5pts', fx: '-0.5%', signal: 'PASTEF CONSTITUTIONAL COUP — IMF OUTLOOK WORSENED', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+35', bond: '-1.8pts', fx: '+16.4%', signal: 'COMPENSATION DEMAND SA — BORNO SCHOOL ATTACK', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA THIRD-LARGEST — IMPROVING SLOWLY', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ELECTIONS ABOLISHED — SIGNATURE PENDING', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+60', bond: '-3.0pts', fx: '-0.9%', signal: 'TPLF CONFLICT LIVE — WAR RISK ACTIVE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '-13', bond: '+0.6pts', fx: '+9.1%', signal: 'POST-JUNE 30 — WEEKLY MARCHES — PETROL RELIEF', color: '#f5a623' },
    { country: 'KENYA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '+0.1%', signal: 'CABINET GENDER ORDER — US SURVEILLANCE PACT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-8', bond: '+0.6pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP R16 — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.16, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.21, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 16', NGN: 1357.50, GHS: 11.15, KES: 129.50, EGP: 52.22, ZAR: 16.19, UGX: 3700, ZMW: 19.02, XOF: 590 },
    { date: 'Jun 17', NGN: 1357.20, GHS: 11.18, KES: 129.52, EGP: 52.22, ZAR: 16.40, UGX: 3650, ZMW: 19.02, XOF: 575 },
    { date: 'Jun 18', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.44, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 20', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.46, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 22', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 24', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.66, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 25', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.27, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 26', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.60, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 29', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.41, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jun 30', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.40, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 1', NGN: 1357.03, GHS: 11.20, KES: 129.54, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
    { date: 'Jul 2', NGN: 1579.00, GHS: 11.20, KES: 129.48, EGP: 52.22, ZAR: 16.55, UGX: 3645.50, ZMW: 19.02, XOF: 569.32 },
  ],
}
