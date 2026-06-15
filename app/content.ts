export const content = {
  riskIndex: '95',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 15, 2026 09:00 UTC',
    overallScore: 95,
    trend: 'WORSENING',
    drivers: ['Ebola DRC 676 Confirmed 136 Dead — Ituri 629 Cases 19 Health Zones — Accelerating', 'Senegal IMF Visit TODAY — Agreement Target End of June — Structural Wall Remains', 'Kenya Funding 90% Of Record KSh1.146trn Budget Deficit Via Domestic Borrowing — Crowding Out Risk', 'South Africa June 30 — 15 Days — SA-Ghana War Of Words — HRW Documents Xenophobia'],
    regions: [
      { region: 'East Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 90, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 76, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 98, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'ECDC June 12: DRC 676 confirmed cases, 136 confirmed deaths as of June 10. 41 new confirmed cases, 9 new deaths since June 11 update. Ituri: 629 confirmed from 19 health zones — 3 new health zones affected since last update. North Kivu: 44 confirmed from 9 health zones — 2 new health zones. South Kivu: 3 confirmed. Uganda: 19 confirmed, 2 deaths — Kampala and Wakiso. Contact tracing still below 90% threshold. ECDC update expected today June 15. No vaccine, no treatment. WHO $518m plan operational.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'IMF VISIT TODAY — June 15. Africanews June 4: Senegal "hopes to conclude an IMF agreement by the end of June." IMF staff held constructive discussions per Facebook post. Track record of payment intact — coupons paid early. Three Pastef members in Lo government. Structural risk: 132% debt/GDP, $9.7bn obligations 2026. Bonds rallied from 50.6c record low. Oxford Economics Venezuela/Lebanon classification stands until programme restored. Agreement by June 30 is the pivot.', severity: 'HIGH', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'June 30 — 15 days. SA-Ghana war of words escalating. HRW documented xenophobic attacks since April 2026 — vigilantes targeting African and Asian nationals with little police response. Bafana Bafana lost opener 2-0 vs Mexico (two red cards). Johannesburg mass shooting June 12: 12 dead including former Mr Malawi. Nigeria 5-year re-entry ban imposed. March and March faces legal constraints — cannot arrest migrants. Ramaphosa 5-point plan announced June 8. Household debt: 41% in default.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'The Africa Report: Kenya funding nearly 90% of record KSh1.146 trillion budget deficit through massive domestic borrowing — risking private-sector crowding out and "hiding debt through complex securitisation deals." Finance Bill 2026 due June 30 — 15 days. June 25 storming anniversary — 10 days. Schools close June 24-28 — same week. Eurobond $2bn Q2 rollover critical. US deploys medical team to Kenya as Ebola grows per ABC News.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election window: PP confirmed 457/547 seats, Abiy third term. Four days since results — no confirmed major Tigray military escalation yet. Pretoria Agreement "on verge of collapse." TPLF reinstated Debretsion. Eritrea Red Sea tensions. Watch continues. EAC-Germany partnership on regional health security and epidemic preparedness announced June 13 — regional context building.', severity: 'HIGH', color: '#f5a623' },
  ],

  featuredSignal: {
    title: 'EBOLA 676 CONFIRMED 136 DEAD — ITURI 629 CASES NOW IN 19 HEALTH ZONES — SENEGAL IMF TODAY — KENYA 90% DOMESTIC BORROWING CROWDING OUT — JUNE 30 IN 15 DAYS',
    body: 'June 15 — the week begins with four simultaneous escalations that define the June risk environment. Ebola has accelerated materially: 676 confirmed cases and 136 deaths as of June 10, with Ituri now at 629 confirmed cases spreading across 19 health zones — three new health zones affected since the last update, North Kivu now in 9 health zones up from 7. The trajectory is outpacing the WHO $518m response plan. Senegal\'s IMF team is in Dakar today — the fund held "constructive discussions" and Africanews confirms Senegal is hoping to conclude an agreement by end of June. The structural wall remains: 132% debt/GDP, $9.7bn obligations this year. Kenya\'s The Africa Report today reveals the government plans to fund nearly 90% of its record KSh1.146 trillion budget deficit through domestic borrowing — risking private-sector crowding and concealing debt through complex securitisation. Finance Bill 2026 is due in 15 days. South Africa has 15 days to June 30 with the SA-Ghana war of words escalating, HRW documenting systematic xenophobic attacks, and the Johannesburg shooting still under investigation.',
    tag: 'JUNE 15 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 15, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'EBOLA: 676 CONFIRMED 136 DEAD — ITURI 629 IN 19 HEALTH ZONES — ACCELERATING', body: 'ECDC June 12 update: DRC 676 confirmed cases, 136 confirmed deaths as of June 10. 41 new confirmed cases and 9 new deaths in 24 hours — acceleration. Ituri: 629 confirmed from 19 health zones — THREE new health zones affected since previous update. North Kivu: 44 confirmed from 9 health zones — TWO new health zones. South Kivu: 3 confirmed. 262 hospitalised in isolation. Uganda: 19 confirmed, 2 deaths. Contact tracing below 90% threshold. Armed groups still attacking responders. ECDC next update today June 15 — watch for further escalation signal.', icon: '🚨' },
    { title: 'SENEGAL IMF TODAY — CONSTRUCTIVE DISCUSSIONS — AGREEMENT TARGET END OF JUNE', body: 'IMF staff are in Dakar today for the week of June 15 visit. IMF Facebook post confirms "constructive discussions with Senegalese authorities." Africanews June 4: Senegal "hopes to conclude an agreement with the Bretton Woods Institution by the end of June." Finance Minister Diba confirmed this target to parliament. Three Pastef members in Lo government — political deadlock more nuanced than feared. Bonds rallied from 50.6c record low. Track record of payment intact — coupons paid early. Structural risk unchanged: 132% debt/GDP, $9.7bn obligations. Agreement by June 30 is the pivot signal for the debt trajectory.', icon: '⚖️' },
    { title: 'KENYA: 90% OF RECORD DEFICIT FUNDED THROUGH DOMESTIC BORROWING — CROWDING OUT RISK', body: 'The Africa Report June 15: Kenya plans to fund nearly 90% of its record KSh1.146 trillion budget deficit through massive domestic borrowing — risking private-sector crowding and "hiding debt through complex securitisation deals." CS Mbadi defending the 2026/27 budget amid public outcry over Finance Bill 2026. Bill due June 30 — 15 days. June 25 storming anniversary — 10 days. Schools closed June 24-28 — overlaps anniversary week. Eurobond $2bn Q2 rollover simultaneously. US deploys medical team to Kenya as Ebola continues to grow in Uganda.', icon: '🔥' },
    { title: 'SA-GHANA WAR OF WORDS + HRW DOCUMENTS SYSTEMATIC XENOPHOBIA — 15 DAYS TO JUNE 30', body: 'The Africa Report: "Xenophobia in South Africa: War of words with Ghana" — diplomatic tension escalating in both directions. HRW published documentation of xenophobic attacks since April 2026 — vigilantes targeting African and Asian nationals with little police response. Activist Mpho Makhubela (CoRMSA): "Vigilante groups feed off the country\'s frustrations and socioeconomic rights regression, unemployment, lack of efforts to address equity gaps." The Africa Report: xenophobia "will undermine South Africa\'s influence in Africa as well as continental and global institutions." June 30: 15 days.', icon: '🌍' },
  ],

  insight1: {
    title: 'EBOLA AT 676 CONFIRMED WITH THREE NEW ITURI HEALTH ZONES IS THE CLEAREST SIGNAL YET THAT CONTAINMENT IS FAILING',
    body: 'The addition of three new health zones in Ituri since the previous ECDC update — bringing the total to 19 — and two new health zones in North Kivu bringing that total to 9 — is the clearest quantitative signal yet that the containment perimeter is expanding, not contracting. In the 2018-2020 North Kivu outbreak, the spread to new health zones was the leading indicator of a trajectory that took two years and 2,286 deaths to resolve. The Bundibugyo strain has a 30-50% case fatality rate with no vaccine and no approved treatment. Contact tracing remains below the 90% threshold needed to stay ahead of transmission. The WHO\'s $518m plan is operational but the security environment in Ituri — where armed groups are actively attacking burial teams — makes conventional containment impossible. The ECDC June 15 update, due today, will determine whether the acceleration confirmed in the June 12 data continues into the second week of June.',
    conclusion: 'EBOLA AT 676 CONFIRMED WITH 3 NEW ITURI HEALTH ZONES IS A CONTAINMENT FAILURE SIGNAL. THE TRAJECTORY MIRRORS THE EARLY 2018-2020 OUTBREAK PATTERN. WATCH TODAY\'S ECDC UPDATE FOR CONFIRMATION OF CONTINUED ACCELERATION.',
  },

  insight2: {
    title: 'KENYA\'S 90% DOMESTIC BORROWING PLAN IS THE FISCAL ARCHITECTURE OF A GOVERNMENT THAT HAS RUN OUT OF EXTERNAL OPTIONS',
    body: 'A government that funds nearly 90% of its deficit through domestic borrowing has exhausted its external options. Kenya\'s Eurobond market access is available but at punishing spreads. The IMF programme is constrained. Concessional bilateral financing is limited. Domestic borrowing at this scale crowds out private sector credit — Kenya\'s banks are already absorbing government paper at the expense of SME lending, which employs the majority of the workforce. The "complex securitisation deals" reference in The Africa Report suggests the debt is being structured to reduce its visibility in official statistics — a classic late-cycle sovereign fiscal management signal. This arrives simultaneously with the Finance Bill 2026 (which taxes the digital economy, phones and crypto), the June 30 deadline, the June 25 storming anniversary, and a $2bn Eurobond rollover. Kenya is the most multi-dimensionally stressed sovereign on the continent right now.',
    conclusion: 'KENYA\'S 90% DOMESTIC BORROWING PLAN IS A FISCAL ARCHITECTURE SIGNAL THAT EXTERNAL OPTIONS ARE EXHAUSTED. PRIVATE SECTOR CROWDING, DEBT CONCEALMENT RISK AND THE SIMULTANEOUS FINANCE BILL + EUROBOND ROLLOVER MAKE KENYA THE MOST MULTI-DIMENSIONALLY STRESSED SOVEREIGN IN AFRICA.',
  },

  brief: {
    week: '25',
    title: 'WEEK 25 OPEN: EBOLA 676 CONFIRMED ACCELERATING, SENEGAL IMF TODAY, KENYA 90% DOMESTIC BORROWING, SA JUNE 30 15 DAYS',
    body: 'Week 25 opens with Ebola accelerating — 676 confirmed, 136 dead, Ituri now in 19 health zones with 3 new zones affected since the last update. Senegal\'s IMF team is in Dakar today for what is hoped to be a path to agreement by June 30 — constructive discussions confirmed. Kenya\'s fiscal architecture is under The Africa Report\'s lens: 90% of its record KSh1.146 trillion deficit to be funded domestically, crowding out private credit while the Finance Bill June 30 deadline is 15 days away and the June 25 anniversary is 10 days away. South Africa has 15 days to June 30 — the SA-Ghana war of words is escalating, HRW has documented systematic xenophobia, Johannesburg mass shooting is under investigation. ZAR holding at 16.28 — down 9.10% year-on-year (rand has strengthened). ECDC June 15 Ebola update due today.',
  },

  fxRates: {
    NGN: '1,360.73',
    GHS: '11.13',
    KES: '129.48',
    EGP: '52.22',
    XOF: '615.00',
    ZAR: '16.28',
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
    { time: '09:30:00', signal: 'Ebola ECDC June 12: DRC 676 confirmed 136 deaths as of June 10. 41 new cases, 9 new deaths in 24hrs. Ituri: 629 confirmed 19 health zones (3 NEW). North Kivu: 44 confirmed 9 health zones (2 NEW). Uganda: 19 confirmed, 2 deaths. Contact tracing below 90%. Armed groups attacking responders. ECDC update due TODAY June 15.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Senegal IMF visit TODAY — June 15. IMF confirmed "constructive discussions." Africanews: Senegal "hopes to conclude IMF agreement by end of June." Diba confirmed target to parliament. Bonds rallied. Structural risk: 132% debt/GDP, $9.7bn obligations. Oxford Economics Venezuela/Lebanon until programme restored. June 30 agreement is the pivot.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '09:00:00', signal: 'Kenya: Africa Report — funding nearly 90% of record KSh1.146trn budget deficit through domestic borrowing. Private-sector crowding risk. "Hiding debt through complex securitisation." Finance Bill June 30 — 15 days. June 25 anniversary — 10 days. Schools June 24-28. Eurobond Q2 $2bn rollover. US deploys medical team — Ebola risk growing. KES 129.48.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'KES' },
    { time: '08:45:00', signal: 'SA June 30 — 15 days. SA-Ghana "war of words" — The Africa Report. HRW documents xenophobic attacks since April — vigilantes vs African and Asian nationals, little police response. Johannesburg shooting 12 dead investigation ongoing. March and March legal constraints confirmed. Ramaphosa 5-point plan implementation gap exposed. Household debt 41% in default.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ethiopia: 4 days post-election — no confirmed major Tigray military escalation yet. PP 457/547 seats, Abiy third term. Pretoria Agreement collapsing. TPLF reinstated Debretsion. Eritrea Red Sea tensions. EAC-Germany regional health security partnership announced June 13. Post-election watch window continues.', detail: 'MEDIUM', type: 'INFO', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:15:00', signal: 'Somalia: Mogadishu ceasefire holding. Opposition "former president" narrative maintaining. Al-Shabaab Bay Region ongoing. No constitutional court. Jubaland + Puntland reject amendments. Structural crisis unresolved. EAC epidemic preparedness partnership includes Somalia region.', detail: 'MEDIUM', type: 'INFO', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Gold overtakes US Treasuries as world\'s largest reserve asset — 27% of global reserve holdings per Al Jazeera. Structural dollar weakness signal. Supports ZAR, GHS, and commodity-exporting sovereigns (Ghana gold, SA gold/platinum, Angola oil). Long-term positive for African commodity exporters.', detail: 'LOW', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 15: NGN 1,360.73 | GHS 11.13 (holding near 12-month average 11.05) | KES 129.48 | EGP 52.22 | ZAR 16.28 (down -9.10% YoY — rand has strengthened) | UGX 3,770 | ZMW 19.02. Gold as reserve asset overtaking US Treasuries supports commodity currency outlook. ZAR structural positive.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 65, fiscal: 56, fx: 42, debt: 58, political: 85, external: 60 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 36, fx: 48, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 97, fiscal: 90, fx: 74, debt: 96, political: 99, external: 98 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 97, fiscal: 76, fx: 48, debt: 70, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 82, fiscal: 84, fx: 72, debt: 86, political: 80, external: 78 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,360.73', change: '-13.02%', stress: 'LOW', ytd: '-3.10%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.13', change: '+8.51%', stress: 'ELEVATED', ytd: '+13.61%', color: '#ff3b3b' },
    { code: 'KES', country: 'Kenya', rate: '129.48', change: '-0.04%', stress: 'ELEVATED', ytd: '-0.93%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.28', change: '-9.10%', stress: 'LOW', ytd: '+9.10%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'ELEVATED', ytd: '-0.82%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP 457/547 — Abiy Third Term — Watch', type: 'General Election', risk: 'HIGH', note: '4 days post-results. No confirmed Tigray escalation yet. Pretoria Agreement collapsing. TPLF reinstated Debretsion. Eritrea Red Sea tensions. Post-election watch continues.', color: '#f5a623' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition calls Mohamud "former president." Al-Shabaab Bay Region active. No constitutional court. Structural crisis ongoing.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 15 days. SA-Ghana war of words. HRW documents systematic xenophobia. Johannesburg shooting investigation. Ramaphosa 5-point plan implementation gap.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: '5-year SA re-entry ban — diplomatic escalation. Air Peace backs evacuation. Dangote 700k bpd positive. 2027 risk building.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — 15 days. June 25 in 10 days. 90% domestic borrowing crowding out. Eurobond Q2 critical. US medical team deployed.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF VISIT TODAY — AGREEMENT TARGET JUNE 30', risk: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', amount: '$1.8bn', instrument: 'IMF Programme', maturity: 'Disbursement Frozen — Discussions Active', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 820, delta: '-130', bond: '+1.5pts', fx: '-0.5%', signal: 'IMF TODAY — AGREEMENT TARGET JUNE 30', color: '#f5a623' },
    { country: 'KENYA', cds: 192, delta: '+52', bond: '-2.6pts', fx: '-0.0%', signal: '90% DOMESTIC BORROWING + JUNE 30 15D', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+42', bond: '-2.1pts', fx: '+9.1%', signal: 'JUNE 30 — 15 DAYS — HRW DOCUMENTS', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+45', bond: '-2.3pts', fx: '-0.9%', signal: 'POST-ELECTION WATCH — 4 DAYS', color: '#f5a623' },
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'CEASEFIRE — OPPOSITION FIGHTS ON', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '+10', bond: '-0.3pts', fx: '-13.0%', signal: 'SA 5-YEAR BAN — DIPLOMATIC WATCH', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '+12', bond: '-0.4pts', fx: '+8.5%', signal: 'IMF COMPLETE — SA WAR OF WORDS', color: '#f5a623' },
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
    { date: 'Jun 2', NGN: 1364.68, GHS: 10.70, KES: 129.41, EGP: 52.22, ZAR: 16.24, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.36, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.31, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 5', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 6', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.57, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 7', NGN: 1361.39, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.60, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 8', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 9', NGN: 1360.73, GHS: 11.82, KES: 129.53, EGP: 52.22, ZAR: 16.52, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 10', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.58, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 11', NGN: 1360.73, GHS: 11.82, KES: 129.41, EGP: 52.22, ZAR: 16.56, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 12', NGN: 1360.73, GHS: 11.13, KES: 129.45, EGP: 52.22, ZAR: 16.26, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 15', NGN: 1360.73, GHS: 11.13, KES: 129.48, EGP: 52.22, ZAR: 16.28, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
