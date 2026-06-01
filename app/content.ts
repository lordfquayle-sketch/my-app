export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 1, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['SA SANDF Contradicts Defence Minister — Army vs Government on June 30 Deployment', 'Ethiopia Voted Yesterday — Post-Election War Window Open — Results June 11', 'Africa CDC: DRC 1,077 Suspected Cases 129 Confirmed — Uganda 8 Confirmed', 'Senegal IMF Visit June 8 — 7 Days — JPMorgan 15% Haircut Priced'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 94, trend: '→', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'South Africa', flag: '🇿🇦', alert: 'GNU governance incoherence exposed: SANDF directly contradicted Defence Minister Motshekga on June 30 deployment. Three days after she publicly confirmed soldiers would deploy, SANDF issued statement calling those exact reports "false, unfounded, and deliberately misleading." Both statements on the record. SA government cannot coordinate its own security response 29 days before the most dangerous domestic political date since 2021. TWO movements confirmed for June 30: March and March + ATDF-ASA truckers. Police will deploy. Army unclear.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Voted yesterday June 1. PP sweep expected — held 485/502 seats in 2021, took 96% of seats. Results due June 11. Tigray excluded — TPLF reinstated Debretsion. Post-election war window on Tigray now open. Analysts: Abiy expected to launch operations against TPLF after election as in November 2020. Amhara and Oromia insurgencies also active. Regional powers — Egypt, UAE, Saudi, Turkey, Israel — all positioning for post-election Horn influence.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: '7 days to June 8 — IMF visit + €53.75m coupon due. $38.75m due June 10. JPMorgan: markets pricing 15% haircut + 5-year extension + 75% coupon on 2033 bonds. PM Lo declared "state of emergency." Debt 132% GDP. Sonko controls legislature 130/165. Dakar protests ongoing. Bonds at record distress. Default window Q4 2026–Q1 2027. Morgan Stanley and JPMorgan both pricing restructuring.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Africa CDC June 1: DRC 1,077 suspected (129 confirmed) 246 suspected deaths (18 confirmed). Uganda 8 confirmed cases, 1 death. 25% of 17 confirmed deaths have been children (Save the Children). Bundibugyo — no vaccine, no treatment. Tedros in DRC. US Kenya facility court-blocked. Outbreak in Ituri, Nord-Kivu, Sud-Kivu and Kampala simultaneously. Spreading faster than response.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Finance Bill 2026 due June 30 — Gen-Z flashpoint. Court blocked US Ebola facility — US-Kenya relations strained. Eurobond $2bn Q2 rollover critical. KES at 129.41. Ruto managing IMF, US, street and Finance Bill simultaneously. Africa Confidential: political arithmetic "less comfortable from street level" despite Ruto\'s 2027 confidence.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SA ARMY CONTRADICTS DEFENCE MINISTER ON JUNE 30 — GNU GOVERNANCE INCOHERENCE EXPOSED — ETHIOPIA POST-ELECTION WAR WINDOW OPEN — JUNE IS THE MOST DANGEROUS MONTH',
    body: 'June 1 opens with the most consequential governance failure signal yet in South Africa. Three days after Defence Minister Motshekga publicly confirmed soldiers would deploy on June 30 to preserve life and property, the SANDF issued a statement calling those exact reports "false, unfounded, and deliberately misleading." Both statements are on the record. South Africa\'s government cannot coordinate its own security response 29 days before the most dangerous domestic political date since July 2021. This is not a communications mishap — it is a structural GNU coherence failure that markets must price. Meanwhile, Ethiopia voted yesterday — the post-election war window on Tigray is now open and runs through the June 11 results announcement. Every major analyst has flagged post-election military operations against the TPLF as the expected outcome. Africa CDC confirms Uganda now has 8 confirmed Ebola cases. 25% of confirmed deaths have been children. Senegal\'s IMF visit is 7 days away with a €53.75m coupon due the same day. JPMorgan has quantified the restructuring: 15% haircut, 5-year extension, 75% coupon. June 2026 is the most dangerous sovereign risk month Africa has faced in this decade.',
    tag: 'JUNE 1 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 1, 2026',
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
    { title: 'SANDF CONTRADICTS DEFENCE MINISTER — BOTH STATEMENTS ON RECORD — GNU COHERENCE FAILURE', body: 'On Monday May 25 the Justice, Crime Prevention and Security Cluster confirmed soldiers AND police would deploy June 30. Defence Minister Motshekga publicly confirmed it. Three days later the SANDF issued a media statement: reports of deployment are "false, unfounded, and deliberately misleading." No directive issued, no preparations made. Both statements are on public record. South Africa\'s security architecture cannot agree on its own June 30 posture 29 days out. This is the clearest signal yet that GNU coherence is breaking down under compound pressure — xenophobia crisis, NHI defeat, US-SA relations, Charlotte Maxeke, municipal elections.', icon: '🚨' },
    { title: 'ETHIOPIA POST-ELECTION — WAR WINDOW OPEN — RESULTS JUNE 11', body: 'Ethiopia voted June 1. PP swept expected — 96% of seats in 2021, Tigray excluded. Results due June 11. The post-election war risk window is now live. Analysts are explicit: Abiy is expected to launch military operations against TPLF in Tigray after the election, as he did after the 2020 vote. TPLF has reinstated Debretsion, reinstalled pre-Pretoria officials, consolidated authority in 38 districts. Regional powers — Egypt, UAE, Saudi Arabia, Turkey, Israel — are all positioning for Horn influence in the post-election environment. The 10 days between June 1 and June 11 are the Horn of Africa\'s most dangerous window since November 2020.', icon: '⚔️' },
    { title: 'EBOLA: AFRICA CDC — 1,077 SUSPECTED 129 CONFIRMED — 25% OF DEATHS ARE CHILDREN', body: 'Africa CDC June 1: DRC 1,077 suspected (129 confirmed), 246 suspected deaths (18 confirmed). Uganda 8 confirmed, 1 death. Save the Children: 25% of DRC\'s 17 confirmed deaths are children. Outbreak in Ituri, Nord-Kivu, Sud-Kivu and Kampala. Bundibugyo — no vaccine, no treatment. US Kenya quarantine facility court-blocked. Tedros in DRC. MSF deploying. Spreading faster than response. Global health leaders meeting to coordinate. East/Central Africa macro repricing structural.', icon: '🔴' },
    { title: 'SENEGAL: 7 DAYS TO IMF + €53.75M COUPON — JPMORGAN 15% HAIRCUT QUANTIFIED', body: 'June 8: IMF team in Dakar + €53.75m coupon on 2037 euro bonds. June 10: $38.75m on 2031 dollar bonds. JPMorgan: 2033 bonds pricing 15% nominal haircut + 5-year maturity extension + coupon cut to 75%. Morgan Stanley also pricing restructuring. 2033 dollar bonds at record 50.6 cents. PM Lo declared "state of emergency." Debt 132% GDP. Sonko controls legislature 130/165. Dakar protests ongoing. No full cabinet. Barclays: IMF requires fuel subsidy removal — Sonko blocked that. Default window Q4 2026–Q1 2027.', icon: '⚠️' },
  ],

  insight1: {
    title: 'THE SANDF-MINISTER CONTRADICTION IS THE MOST IMPORTANT GNU GOVERNANCE SIGNAL OF THE YEAR',
    body: 'When a country\'s defence minister publicly confirms military deployment and the military itself publicly calls those reports false three days later — with both statements on the record — the government\'s internal coherence has broken down in the most consequential domain: security policy. This is not a communications error. The Justice, Crime Prevention and Security Cluster briefing on May 25 was an official government statement. Motshekga\'s confirmation was on record. The SANDF denial is also on record. South Africa\'s GNU is managing a xenophobia crisis, a retail bombing, a logistics sector shutdown threat, and a dual-movement June 30 countdown — while its own security institutions are contradicting each other publicly. For investors, this is not a June 30 risk. This is a GNU durability risk that arrives with municipal elections in fall 2026.',
    conclusion: 'THE SANDF-MINISTER CONTRADICTION IS A GNU DURABILITY SIGNAL, NOT JUST A JUNE 30 RISK. IT CONFIRMS THAT THE COALITION IS MANAGING COMPOUND DOMESTIC CRISES WITHOUT INTERNAL COHERENCE. WATCH ZAR AND SA SOVEREIGN SPREADS AS JUNE 30 APPROACHES.',
  },

  insight2: {
    title: 'ETHIOPIA\'S POST-ELECTION WINDOW IS THE HORN OF AFRICA\'S MOST DANGEROUS TEN DAYS SINCE 2020',
    body: 'The period between June 1 and June 11 — when results are announced — is structurally identical to the lead-up to the November 2020 Tigray War. Abiy has the electoral mandate. The TPLF has violated the Pretoria Agreement. Federal funding to Tigray has been withheld. The regional powers have pre-positioned. The only question is timing and trigger. If Abiy moves against Tigray in this window, the Horn faces: a new Tigray war; Ebola on Ethiopia\'s western border with Uganda; Somalia\'s constitutional crisis; and Sudan\'s ongoing collapse — all simultaneously. The compound humanitarian and macro risk would be without precedent in the post-Cold War African history. The Ebola outbreak in particular creates a new constraint: military operations in eastern DRC and western Ethiopia could destroy the contact tracing infrastructure that is already barely functioning.',
    conclusion: 'THE JUNE 1-11 WINDOW IS THE HORN OF AFRICA\'S MOST DANGEROUS PERIOD SINCE NOVEMBER 2020. POST-ELECTION WAR RISK ON TIGRAY IS EXPLICIT IN ALL MAJOR ANALYST ASSESSMENTS. WATCH ABIY\'S POSTURE IN THE COMING 10 DAYS.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23: JUNE OPENS — SA GNU INCOHERENCE, ETHIOPIA POST-ELECTION WAR WINDOW, SENEGAL 7 DAYS TO IMF, EBOLA 25% CHILD DEATHS',
    body: 'June 2026 opens as the most dangerous sovereign risk month Africa has faced in this decade. South Africa\'s GNU has publicly contradicted itself on June 30 security deployment — Defence Minister confirmed SANDF deployment, army called it false three days later, both on record. Ethiopia voted yesterday — post-election war risk window on Tigray now live through June 11 results. Africa CDC confirms Uganda at 8 Ebola cases; Save the Children flags 25% of DRC confirmed deaths are children. Senegal\'s IMF visit is 7 days away with €53.75m coupon due the same day — JPMorgan has quantified a 15% haircut and 5-year extension in current bond pricing. Kenya\'s Finance Bill Gen-Z ghost builds through public hearings with June 30 deadline. South Africa has 29 days to a dual-movement shutdown with no coherent government security response. Ghana remains the continental benchmark — the sole large sovereign entering June with an unambiguously positive trajectory.',
  },

  fxRates: {
    NGN: '1,354.23',
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
    { time: '09:30:00', signal: 'SA: SANDF contradicts Defence Minister Motshekga on June 30 deployment — three days after she confirmed soldiers would deploy, army called reports "false, unfounded, and deliberately misleading." Both statements on record. GNU security coherence failure 29 days from June 30.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:15:00', signal: 'Ethiopia: Voted June 1 — PP sweep expected. Results June 11. Post-election war window on Tigray NOW OPEN. TPLF reinstated Debretsion. Abiy expected to launch operations post-election per all major analysts. Egypt, UAE, Saudi, Turkey, Israel all positioning for Horn influence.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:00:00', signal: 'Africa CDC June 1: DRC 1,077 suspected (129 confirmed) 246 suspected deaths (18 confirmed). Uganda 8 confirmed, 1 death. Save the Children: 25% of DRC confirmed deaths are children. Bundibugyo — no vaccine, no treatment. Ituri, Nord-Kivu, Sud-Kivu, Kampala all active.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Senegal: 7 days to June 8 IMF visit + €53.75m coupon. June 10: $38.75m. JPMorgan: 15% haircut + 5yr extension + 75% coupon priced in 2033 bonds. Bonds at record 50.6c. PM Lo "state of emergency." Debt 132% GDP. Sonko controls legislature. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:30:00', signal: 'SA June 30: 29 days. March and March + ATDF-ASA truckers both confirmed. Police will deploy. Army denied. KZN arrested 4,722 undocumented since Jan 1. Woolworths Pretoria bombed. 800 Ghanaians registered for voluntary return. GNU has no clean compliance option.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Kenya: Finance Bill 2026 hearings ongoing — due June 30. Ghost of Gen-Z uprising. US-Kenya relations strained after court blocked Ebola facility. Eurobond $2bn Q2 rollover critical. KES at 129.41. Ruto managing IMF, US relations, Finance Bill and street simultaneously.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:00:00', signal: 'Nigeria: AfDB Annual Meetings 2026 underway — African leaders pitching energy and green projects. Tinubu government showcasing economic reform narrative. But civilian airstrike crisis (300+ dead), ISWAP activity and 2027 election risk building from multiple directions. NGN at 1,354.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'NGN' },
    { time: '07:45:00', signal: 'LIVE FX June 1: NGN 1,354.23 | GHS 10.70 | KES 129.41 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. ZAR firm on dollar weakness. GHS up 19.32% YoY — cedi surge intact. NGN down 13.56% YoY but stabilising. Ghana benchmark holds entering June.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 38, fx: 28, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 92, fiscal: 84, fx: 74, debt: 90, political: 98, external: 94 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 94, fiscal: 68, fx: 46, debt: 62, political: 99, external: 90 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,354.23', change: '-13.56%', stress: 'MODERATE', ytd: '-3.80%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '10.70', change: '-19.32%', stress: 'LOW', ytd: '+19.32%', color: '#00c48c' },
    { code: 'KES', country: 'Kenya', rate: '129.41', change: '+0.16%', stress: 'ELEVATED', ytd: '-1.10%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 1 VOTED — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep expected. Tigray excluded. TPLF reinstated Debretsion. Post-election war window on Tigray NOW OPEN. Regional powers positioning. Results June 11 — 10-day war risk window live.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 29 days. SANDF contradicted minister. TWO movements. GNU coherence failure on record. July 2021 risk. Police deploying, army unclear.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. AfDB pitch at Annual Meetings. Civilian crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. Court blocked US Ebola facility. Eurobond rollover. US-Kenya strained. Ruto managing five crises simultaneously.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 7 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'JPMORGAN 15% HAIRCUT — IMF 7 DAYS', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'VOTED — WAR WINDOW OPEN JUNE 11', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+35', bond: '-1.8pts', fx: '+3.5%', signal: 'GNU INCOHERENCE — JUNE 30 29 DAYS', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+45', bond: '-2.3pts', fx: '-0.4%', signal: 'FINANCE BILL + US EBOLA STRAIN', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+19.3%', signal: 'CEDI SURGE — CONTINENTAL BENCHMARK', color: '#00c48c' },
  ],
}
