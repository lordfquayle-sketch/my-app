export const content = {
  riskIndex: '96',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 30, 2026 09:00 UTC',
    overallScore: 96,
    trend: 'WORSENING',
    drivers: ['SA KZN Truck Shutdown TODAY — N2/N3 Blocked — Woolworths Bombed Pretoria', 'TWO Movements Now Converging on June 30 — March and March + ATDF-ASA', 'Ethiopia Votes June 1 — TOMORROW — Post-Election War Risk Explicit', 'Senegal June 8 IMF Visit + €53.75m Coupon — 9 Days'],
    regions: [
      { region: 'East Africa', score: 96, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 93, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'KZN truck drivers blocking N2 and N3 TODAY — ATDF-ASA shutdown over foreign national employment. KZN police warned of disruptions. 4,722 undocumented foreign nationals arrested in KZN since Jan 1. Woolworths bombed at Menlyn Mall Pretoria May 28 1AM — US Embassy security alert issued. SAPS found secondary device. ATDF-ASA also announced its own SEPARATE June 30 shutdown — now TWO movements converging on same date. 31 days to zero hour.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Votes TOMORROW June 1. Abiy\'s PP holds 485/502 seats from 2021, expected to win 90%+. Tigray excluded — 38 districts suspended. TPLF reinstated Debretsion as regional president in violation of Pretoria Agreement. Africanews: "one of least competitive elections." Opposition barred from rallies. Analysts explicit: post-election war on Tigray expected as in November 2020. 50m+ registered voters.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: '9 days to June 8 — IMF visit + €53.75m coupon due. $38.75m due June 10. Dakar protests ongoing. PM Lo declared "state of emergency." Bonds at record distress — 2033 dollar at 50.6 cents. Morgan Stanley pricing restructuring. Debt 132% GDP. Sonko controls legislature 130/165. No full cabinet. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'MSF May 29: Ebola in Ituri, Nord-Kivu, Sud-Kivu — DRC health system under-resourced and strained by years of conflict. MSF mobilising teams alongside Ministry of Health. Tedros in DRC personally appealing for ceasefire. 1,205 cases, 263 deaths. DRC Leopards cleared for World Cup — fans still banned. No vaccine, no treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 public hearings ongoing — due June 30. Ghost of Gen-Z uprising. Taxes on phones, water, coal. Ruto offering PAYE relief under Ksh30,000. Eurobond $2bn Q2 rollover critical. Ebola border risk via Uganda. Africa Confidential: street arithmetic deteriorating despite Ruto\'s 2027 confidence.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SA TRUCKS BLOCKING N2/N3 TODAY — WOOLWORTHS BOMBED PRETORIA — TWO MOVEMENTS NOW CONVERGING ON JUNE 30 — ETHIOPIA VOTES TOMORROW',
    body: 'May 30 is the most operationally dangerous day in South Africa since the 2021 riots. KZN truck drivers are blocking the N2 and N3 highways today in a shutdown over foreign national employment — KZN police warned of disruptions, KZN Department of Transport is engaging national government. A Woolworths store at Menlyn Mall in Pretoria was bombed at 1AM on May 28 — the US Embassy issued a security alert, SAPS found a secondary device on the premises. The ATDF-ASA truck drivers forum has now announced its own separate national shutdown for June 30 — meaning TWO organised movements with mass-disruption capacity are now converging on the same date. March and March has 10 formal demands. ATDF-ASA has logistics sector leverage. The June 30 risk has doubled in severity in 24 hours. Ethiopia votes tomorrow — Tigray excluded, post-election war risk explicit in every major analyst assessment. Senegal\'s IMF visit and bond coupon collision is 9 days away. June 2026 is the most dangerous sovereign risk month Africa has seen in this decade.',
    tag: 'MAY 30 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 30, 2026',
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
    { title: 'KZN TRUCKS BLOCKING N2/N3 TODAY — WOOLWORTHS BOMBED PRETORIA — TWO MOVEMENTS FOR JUNE 30', body: 'ATDF-ASA truck drivers blocking N2 and N3 in KwaZulu-Natal today over foreign national employment — KZN police warned of N2/N3 road blockages. 4,722 undocumented foreign nationals arrested KZN since Jan 1. Woolworths at Menlyn Mall Pretoria bombed 1AM May 28 — US Embassy security alert, secondary device found. ATDF-ASA has now formally announced its own June 30 national shutdown — running parallel to March and March. Two separate movements with different leverage bases now both targeting June 30. The logistics and social risk on that date has doubled.', icon: '🚨' },
    { title: 'ETHIOPIA VOTES TOMORROW — TIGRAY EXCLUDED — POST-ELECTION WAR RISK', body: 'Ethiopia votes June 1. Abiy\'s Prosperity Party expected to sweep — held 485/502 seats after 2021, no campaign rallies held, only rally in Addis over by 8AM without Abiy appearing. Africanews: "one of least competitive elections." Opposition barred from rallies, some participating only to preserve licences. Tigray excluded — 38 districts suspended. TPLF reinstated Debretsion in violation of Pretoria Agreement. Every major analyst — Chatham House, Africa Practice, Voice of Africa — flags post-election war risk explicitly. Egypt, UAE, Saudi, Turkey, Israel all positioning for influence in Horn post-election.', icon: '⚔️' },
    { title: 'SENEGAL: 9 DAYS TO IMF VISIT + €53.75M COUPON — DAKAR PROTESTS ONGOING', body: 'June 8: IMF team in Dakar + €53.75m coupon on 2037 euro bonds. June 10: $38.75m on 2031 dollar bonds. Bloomberg: analysts expect payments to proceed but "tense political time." Dakar student protests for Sonko ongoing. No full cabinet. PM Lo declared "state of emergency." 2033 dollar bonds at record 50.6 cents. Morgan Stanley pricing restructuring. Sonko controls legislature 130/165 seats. Barclays: IMF requires fuel subsidy removal — exactly what Sonko\'s legislature blocked.', icon: '🔴' },
    { title: 'MSF IN DRC: EBOLA HEALTH SYSTEM "STRAINED FOR YEARS" — CONFLICT IMPEDES RESPONSE', body: 'MSF May 29 update: teams mobilising in Ituri alongside Ministry of Health. DRC health system "under-resourced and strained by years of conflict." MSF confirms case in Miti Murheza health zone, Kabare territory, South Kivu. Tedros personally in DRC appealing for ceasefire. 1,205 cases, 263 deaths. No vaccine, no treatment. WHO declared PHEIC. Global health leaders meeting to coordinate response. East/Central Africa macro repricing structural.', icon: '⚠️' },
  ],

  insight1: {
    title: 'TWO MOVEMENTS CONVERGING ON JUNE 30 DOUBLES THE SOUTH AFRICA SHUTDOWN RISK',
    body: 'The ATDF-ASA truck drivers announcing their own June 30 national shutdown — separate from March and March — changes the June 30 risk calculus fundamentally. March and March is a social movement with street mobilisation capacity. ATDF-ASA is a logistics sector organisation with the ability to block national freight arteries. The N2 and N3 are South Africa\'s primary logistics corridors — the same routes being blocked today in KZN. If both movements execute simultaneously on June 30, the economic disruption potential approaches the July 2021 scenario. The Menlyn Mall Woolworths bombing adds a third, harder-to-attribute threat vector. The GNU is managing a protest movement, a logistics shutdown threat, retail bombings, and a SANDF deployment decision — simultaneously, 31 days before zero hour.',
    conclusion: 'TWO MOVEMENTS ON JUNE 30 WITH DIFFERENT LEVERAGE BASES DOUBLES THE SHUTDOWN RISK. THE LOGISTICS SECTOR THREAT FROM ATDF-ASA COMBINED WITH MARCH AND MARCH\'S STREET CAPACITY IS THE MOST DANGEROUS COMBINATION SOUTH AFRICA HAS FACED SINCE JULY 2021.',
  },

  insight2: {
    title: 'ETHIOPIA\'S POST-ELECTION HOUR IS THE MOST DANGEROUS IN THE HORN SINCE THE 2020 WAR',
    body: 'The June 1 election result is not in doubt — what matters is what happens in the 72 hours after Abiy\'s landslide is declared. In November 2020, Abiy waited until after an election to launch the Tigray War. The TPLF has now reinstated the pre-Pretoria government, reappointed Debretsion, and is consolidating authority in 38 districts where polling has been suspended. The regional powers have positioned accordingly — Egypt, UAE, Saudi Arabia, Turkey and Israel are all pushing for influence in the Horn post-election. The Grand Ethiopian Renaissance Dam dispute with Egypt adds another layer. If Abiy moves against the TPLF after June 1, the Horn of Africa enters a generational compounding crisis: Ebola on Ethiopia\'s western border, Sudan\'s collapse to the northwest, Somalia\'s constitutional crisis to the east, and a new Tigray war at the centre.',
    conclusion: 'THE 72 HOURS AFTER ETHIOPIA\'S JUNE 1 RESULT ARE THE MOST DANGEROUS IN THE HORN OF AFRICA SINCE NOVEMBER 2020. WATCH ABIY\'S TIGRAY POSTURE IMMEDIATELY POST-ELECTION.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23 DAY 1: KZN TRUCKS BLOCKING N2/N3 TODAY, PRETORIA WOOLWORTHS BOMBED, ETHIOPIA VOTES TOMORROW, JUNE 30 NOW TWO MOVEMENTS',
    body: 'Week 23 opens on the most operationally dangerous day in South Africa since 2021. KZN truck drivers are blocking the N2 and N3 today over foreign national employment. A Woolworths in Pretoria was bombed at 1AM on May 28. The ATDF-ASA has announced its own June 30 national shutdown — two separate movements with different leverage bases now both targeting the same date. The GNU has 31 days and no clean solution. Ethiopia votes tomorrow — every major analyst flags post-election war risk on Tigray. Senegal\'s IMF-coupon collision is 9 days away. MSF is deploying to DRC as Ebola spreads across three provinces. Kenya\'s Finance Bill Gen-Z ghost is building through public hearings. Ghana — despite evacuating its citizens from South Africa — remains the continental credit benchmark. June 2026 is the most dangerous sovereign risk month in this cycle.',
  },

  fxRates: {
    NGN: '1,371.98',
    GHS: '10.70',
    KES: '129.03',
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
    { time: '09:30:00', signal: 'SA LIVE: KZN truck drivers blocking N2 and N3 TODAY — ATDF-ASA shutdown over foreign national employment. KZN police warned disruptions. KZN DoT engaging national government. 4,722 undocumented foreign nationals arrested in KZN since Jan 1.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'SA LIVE: Woolworths at Menlyn Mall Pretoria bombed 1AM May 28 — US Embassy security alert issued. SAPS found secondary device. Investigation ongoing. ATDF-ASA announces SEPARATE June 30 national shutdown — TWO movements now converging on June 30.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Ethiopia votes TOMORROW June 1. Abiy PP expected 90%+. Tigray excluded — 38 districts. TPLF reinstated Debretsion. Africanews: "one of least competitive elections." Post-election war on Tigray risk explicit in all major analyst assessments. Egypt, UAE, Saudi, Turkey, Israel all positioning in Horn.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:45:00', signal: 'Senegal: 9 days to June 8 IMF visit + €53.75m coupon. $38.75m due June 10. Dakar protests ongoing. PM Lo "state of emergency." 2033 dollar bonds at 50.6c record low. Morgan Stanley pricing restructuring. Sonko controls legislature. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'MSF May 29: Deploying to DRC Ituri alongside MoH. Ebola health system "strained for years by conflict." New case confirmed Miti Murheza, Kabare, South Kivu. Tedros in DRC. 1,205 cases, 263 deaths. No vaccine, no treatment. WHO PHEIC declared.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Kenya Finance Bill 2026 hearings continue. Standard Media: "ghost of Gen Z uprising." Taxes: phones, water, coal, plastics, credit card swipes. Due June 30. Ruto PAYE relief under Ksh30,000. Eurobond Q2 $2bn rollover critical. KES at 129.03.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:00:00', signal: 'South Africa: KZN Acting Commissioner Makoba: "monitoring indications of further planned protest action on 30 June 2026." KZN has arrested 4,722 undocumented foreign nationals since Jan 1. SANDF deployment warning already issued. GNU 31 days to June 30 with no viable compliance option.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '07:45:00', signal: 'LIVE FX May 30: NGN 1,371.98 | GHS 10.70 | KES 129.03 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. ZAR strong on dollar weakness. GHS significantly strengthened — now 10.70 vs 11.66 last week. NGN stable. Ghana benchmark holds.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 38, fx: 28, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 90, fiscal: 84, fx: 74, debt: 90, political: 96, external: 92 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 92, fiscal: 68, fx: 46, debt: 62, political: 99, external: 88 },
    { country: 'Senegal', flag: '🇸🇳', score: 98, fiscal: 99, fx: 88, debt: 98, political: 99, external: 92 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 92, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,371.98', change: '-13.51%', stress: 'MODERATE', ytd: '-3.80%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '10.70', change: '-19.32%', stress: 'LOW', ytd: '+19.32%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.03', change: '-0.36%', stress: 'ELEVATED', ytd: '-1.15%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 1, 2026 — TOMORROW', type: 'General Election', risk: 'CRITICAL', note: 'Tigray excluded — 38 districts. TPLF reinstated Debretsion. PP expected 90%+. Post-election war on Tigray explicit in all analyst assessments. Regional powers positioning: Egypt, UAE, Saudi, Turkey, Israel. GERD dispute active.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30: TWO movements — March and March + ATDF-ASA truckers. KZN N2/N3 blocked TODAY. Woolworths bombed Pretoria. SANDF warning issued. GNU 31 days, no compliance option.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP commander killed. Civilian casualty crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — Gen-Z ghost. Public hearings live. PAYE concession offered. Eurobond Q2 rollover. Ebola border risk.', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'IMF JUNE 8 + COUPON — 9 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+35', bond: '-1.8pts', fx: '+3.5%', signal: 'N2/N3 BLOCKED TODAY — 2 MOVEMENTS JUNE 30', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+45', bond: '-2.2pts', fx: '-0.9%', signal: 'VOTES TOMORROW — WAR RISK', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+42', bond: '-2.1pts', fx: '-0.4%', signal: 'FINANCE BILL JUNE 30 + EUROBOND', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+19.3%', signal: 'CEDI SURGE — BENCHMARK', color: '#00c48c' },
  ],
}
