export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'July 22, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['DRC C64 Opposition Cancels July 22 Protest — Tshisekedi Announces National Dialogue — Crisis Defused', 'Faye Backs Macky Sall For UN Secretary-General — Major U-Turn In Senegal\'s Deep Political Divisions', 'Mali: 50 Soldiers Killed In Northern Ambush — Deadliest Single Incident Since Kidal 2023', 'Ebola DRC Week 10 — 600+ Deaths — Uganda Simultaneously Managing Marburg — Unprecedented'],
    regions: [
      { region: 'East Africa', score: 91, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 82, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 70, trend: '↓', color: '#f5a623' },
      { region: 'Southern Africa', score: 84, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '↓', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'DRC', flag: '🇨🇩', alert: 'CONSTITUTIONAL CRISIS DEFUSED — FOR NOW. DRC opposition coalition C64 cancelled their planned July 22 nationwide protests after President Tshisekedi announced the launch of a national dialogue. C64 — named for Article 64 of the constitution granting citizens the right to resist unconstitutional seizures of power — had demanded Tshisekedi\'s resignation and accuses him of using a referendum framework to remove term limits and seek a third term. The cancellation is a truce, not a resolution. C64 has given the government and the churches until August 15 to convene talks. Red line: enactment of the June referendum bill. June 12 demonstrations saw live ammunition, hundreds arrested, opposition leader Fayulu bloodied. The Ebola outbreak and eastern DRC M23 conflict continue simultaneously.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'MAJOR POLITICAL U-TURN. Faye endorsed Macky Sall\'s bid to become the next UN Secretary-General — the foreign ministry announced Monday July 20. Faye met Sall at the Presidential Palace on July 17 in "a cordial and respectful republican atmosphere." Sall governed Senegal 2012-2024. He is one of five candidates to succeed Guterres (term ends December 31). Faye instructed government to "fully mobilize" support — "this is now Senegal\'s candidacy in the service of Africa." The endorsement is remarkable given Faye\'s administration has frequently criticised Sall\'s record — it reflects state continuity over political division. Sall returned to Dakar July 14 for first public visit since handing power.', severity: 'HIGH', color: '#f5a623' },
    { country: 'Mali', flag: '🇲🇱', alert: 'DEADLY AMBUSH IN NORTHERN MALI — 50 SOLDIERS KILLED. A deadly ambush in northern Mali left at least 50 Malian soldiers dead — one of the single deadliest incidents for FAMA in the Sahel campaign since the fall of Kidal in November 2023. France 24 confirmed the ambush July 22. This arrives within days of Malian and Russian forces\' recapture of Anefis (100 militants killed) — the tactical success-to-catastrophic setback cycle that has characterised the Wagner-FAMA partnership. JNIM continues to demonstrate the ability to mass forces for large ambushes while dispersing from counterattacks.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'ZAR at 16.46, NGN at 1,376 — stable from last week. SA-Ghana and SA-Nigeria diplomatic crises continue with AU multilateral pressure track now live. Nigeria and Ghana formally pushing AU to address anti-migrant protests. Movement leader Ngobese-Zuma shot July 16 — movement continues weekly Thursday marches. 53,499 deported since June 14. December 31 year-end ultimatum. Ramaphosa impeachment panel (Phala Phala) sat this week — first in SA democratic history.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Uganda/DRC', flag: '🇺🇬', alert: 'Ebola DRC entering week 10 — 600+ confirmed deaths. Uganda simultaneously managing Marburg case in Kyegegwa (1.5-year-old child died). Two simultaneous hemorrhagic fever outbreaks in one country is unprecedented. Africa CDC capacity already stretched. Uganda has had 19+ confirmed Ebola cases in Kampala and Wakiso. No contacts of the Marburg case have developed symptoms. The double outbreak is the most complex African public health situation since the 2014-2016 West Africa Ebola crisis.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'DRC PROTESTS CANCELLED — TSHISEKEDI DIALOGUE — FAYE BACKS SALL FOR UN SG — MALI 50 SOLDIERS KILLED — WEEK 10 EBOLA PLUS MARBURG IN UGANDA',
    body: 'July 22 — a day of simultaneous escalation and defusing across the continent. In DRC, the C64 opposition cancelled their planned nationwide protests after Tshisekedi announced a national dialogue — the first genuine defusing of a crisis that has seen live ammunition at June 12 protests, Martin Fayulu bloodied, and hundreds arrested. The truce lasts until August 15. In Senegal, Faye made a remarkable political U-turn: endorsing his predecessor and political adversary Macky Sall\'s bid to become the next UN Secretary-General — meeting him at the Presidential Palace on July 17 in what both sides described as a "cordial and respectful republican atmosphere." Africa\'s most divided political relationship has produced its most consequential diplomatic gesture. In Mali, a deadly ambush killed at least 50 soldiers in the north — one of the single deadliest incidents since Kidal. This arrives days after the tactical success of recapturing Anefis. Uganda enters an unprecedented week managing both Ebola (19+ cases, Kampala and Wakiso) and Marburg (Kyegegwa) simultaneously. Ebola is in week 10 with 600+ deaths. Ramaphosa\'s impeachment panel sat this week — the first in South African democratic history. ZAR at 16.46, NGN at 1,376 — markets stable.',
    tag: 'JULY 22 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'July 22, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '820', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'DRC: C64 CANCELS JULY 22 PROTESTS — TSHISEKEDI DIALOGUE OFFER — AUGUST 15 DEADLINE', body: 'C64 cancelled its July 22 nationwide protest after Tshisekedi announced the launch of a national dialogue. The decision, reached after hours of sometimes heated internal debate among coalition members, reflects goodwill toward the churches\' mediation request. The postponement is not a truce — C64 gave the government and the churches until August 15 to convene talks. Red lines: enactment of the June referendum bill (which could lift term limits), or any government action C64 characterises as provocation. The coalition remains fractured: Seth Kikuni and Katumbi-linked figures criticised the decision to cancel. C64 leaders include Fayulu, Katumbi, Kabund and Sesanga. June 12 saw live ammunition and hundreds arrested. The crisis is defused for 24 days.', icon: '⚖️' },
    { title: 'FAYE BACKS SALL FOR UN SECRETARY-GENERAL — MOST CONSEQUENTIAL SENEGALESE POLITICAL GESTURE IN YEARS', body: 'Faye met Macky Sall at the Presidential Palace on July 17, 2026 — in what the presidency described as "a cordial and respectful republican atmosphere." Faye decided Senegal will "fully support" Sall\'s candidacy, calling it "Senegal\'s candidacy in the service of Africa." Sall is one of five candidates to succeed Guterres (term ends December 31). The endorsement is politically remarkable given Faye\'s administration has frequently criticised Sall\'s record and Sonko spent years in jail during Sall\'s presidency. The state continuity principle has overridden the political division. If Sall becomes UN SG, it would be Africa\'s first holder of the office since Boutros Boutros-Ghali (1992-1996) and could reshape Africa\'s relationship with the UN system.', icon: '🌍' },
    { title: 'MALI: 50 SOLDIERS KILLED IN NORTHERN AMBUSH — WAGNER-FAMA TACTICAL CYCLE', body: 'A deadly ambush in northern Mali killed at least 50 Malian soldiers — one of the single deadliest incidents for FAMA since the fall of Kidal in November 2023. France 24 confirmed the attack July 22. This arrives days after FAMA and Russian forces recaptured Anefis (100 militants killed) — illustrating the Wagner-FAMA tactical paradox: dramatic local successes followed by devastating ambushes that reverse the narrative within days. JNIM continues to demonstrate operational resilience. The Sahel security trajectory remains one of strategic deterioration despite tactical government wins. Nigeria: foreign fighters joining jihadist groups — a new vector in Nigeria\'s insurgency compound.', icon: '💥' },
    { title: 'RAMAPHOSA IMPEACHMENT PANEL SAT — FIRST IN SA DEMOCRATIC HISTORY — PHALA PHALA', body: 'The parliamentary panel assessing the impeachment case against Ramaphosa over the Phala Phala farm scandal has sat — the first such impeachment proceeding in South Africa\'s democratic history. The panel is reviewing whether Ramaphosa violated his oath of office in connection with the concealment of the theft of foreign currency hidden in furniture at his Phala Phala game farm. The panel\'s proceedings run concurrent to the xenophobia crisis, the AU multilateral pressure track, the SA-Nigeria bilateral dispute, the March and March weekly marches, and the December 31 year-end ultimatum. GNU governance credibility faces simultaneous domestic and international pressure.', icon: '⚖️' },
  ],

  insight1: {
    title: 'THE FAYE-SALL HANDSHAKE IS THE MOST CONSEQUENTIAL AFRICAN DIPLOMATIC GESTURE OF 2026 — AND ITS DOMESTIC IMPLICATIONS ARE SEVERE',
    body: 'Ousmane Sonko spent years in jail during Macky Sall\'s presidency. Faye was elected precisely because he represented the anti-Sall wave that swept Senegal in March 2024. His administration has repeatedly criticised Sall\'s governance record — the debt concealment, the resource management, the democratic backsliding. That Faye now endorses Sall for the highest position in the UN system — instructing his government to "fully mobilize" support — is a state continuity decision that subordinates political grievance to national and continental interest. The domestic implications are severe: Sonko, who controls 130 of 165 National Assembly seats, has not endorsed this decision. His Pastef party\'s reaction will determine whether the Faye-Sall rapprochement deepens the Faye-Sonko constitutional confrontation. If Sonko interprets the Sall endorsement as Faye moving toward the political centre — and away from Pastef — the constitutional rupture may accelerate.',
    conclusion: 'THE FAYE-SALL ENDORSEMENT IS A STATE CONTINUITY DECISION THAT SUBORDINATES POLITICAL DIVISION TO CONTINENTAL AMBITION. ITS DOMESTIC RISK: SONKO MAY INTERPRET IT AS FAYE BREAKING FROM PASTEF. WATCH FOR SONKO\'S FORMAL REACTION AND WHETHER THE PASTEF NATIONAL ASSEMBLY MAJORITY USES IT AS AMMUNITION IN THE CONSTITUTIONAL CONFRONTATION.',
  },

  insight2: {
    title: 'THE DRC\'S AUGUST 15 DIALOGUE DEADLINE IS THE MOST IMPORTANT DATE ON THE CENTRAL AFRICAN CALENDAR AFTER ZAMBIA\'S AUGUST 13 ELECTION',
    body: 'August 15 is the date by which C64 expects the DRC government and the churches to convene genuine national dialogue on the constitutional reform question. The cancellation of July 22\'s protests was a significant concession by an opposition that had publicly committed to the largest demonstration since Tshisekedi\'s re-election. The August 15 deadline creates a compressed four-week window in which the government must demonstrate good faith — while simultaneously managing the Ebola outbreak, the eastern DRC M23 conflict, and a UN Security Council presidency rotation (DRC held the July rotating presidency). If the dialogue does not materialize by August 15, C64 will almost certainly re-mobilise — and the next demonstration will be larger, angrier, and without the churches\' restraining influence. The DRC constitutional crisis is defused for 24 days.',
    conclusion: 'THE DRC DIALOGUE DEADLINE OF AUGUST 15 IS THE MOST IMPORTANT DATE IN CENTRAL AFRICAN POLITICS AFTER ZAMBIA\'S AUGUST 13 ELECTION. IF TSHISEKEDI DOES NOT CONVENE TALKS BY THEN, C64 RE-MOBILISES WITH GREATER FORCE. FOUR WEEKS OF DIPLOMATIC SPACE HAVE BEEN PURCHASED — NOT A RESOLUTION.',
  },

  brief: {
    week: '30',
    title: 'WEEK 30 TUESDAY: DRC PROTESTS CANCELLED DIALOGUE ANNOUNCED, FAYE BACKS SALL FOR UN SG, MALI 50 SOLDIERS KILLED, RAMAPHOSA IMPEACHMENT PANEL, EBOLA WEEK 10 PLUS MARBURG',
    body: 'Week 30\'s second day delivers a mix of defusing and escalation. DRC\'s C64 cancelled July 22 protests after Tshisekedi announced national dialogue — truce until August 15. Faye endorsed Macky Sall for UN Secretary-General in a landmark political U-turn — first public meeting between the two since Faye took power. Mali suffered one of its deadliest ambushes since Kidal — 50 soldiers killed in the north, days after recapturing Anefis. Ramaphosa\'s impeachment panel sat — the first in South African democratic history. Uganda simultaneously manages Ebola (19+ cases, Kampala/Wakiso) and Marburg (Kyegegwa) — unprecedented. ZAR at 16.46, NGN at 1,376 — stable. Zambia election 3 weeks away. Senegal\'s Faye leads ECOWAS while managing constitutional crisis at home and now a Sall endorsement that may inflame Sonko. The continent\'s compound risk environment remains elevated even as individual crises show signs of managed de-escalation.',
  },

  fxRates: {
    NGN: '1,376.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.46',
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
    { time: '09:30:00', signal: 'DRC: C64 cancels July 22 nationwide protests — Tshisekedi announces national dialogue. Opposition gave government + churches until August 15 to convene talks. Red line: enactment of referendum bill. Truce is not resolution — coalition fractured, critics call cancellation a mistake. June 12 saw live ammunition, Fayulu bloodied, hundreds arrested.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '09:15:00', signal: 'SENEGAL: Faye endorses Macky Sall for UN Secretary-General — July 20 announcement after July 17 meeting at Presidential Palace. Major U-turn: Faye\'s administration frequently criticised Sall\'s record, Sonko jailed under Sall. Faye: "fully mobilize support — Senegal\'s candidacy in service of Africa." Sall one of 5 candidates to succeed Guterres (term ends Dec 31). Domestic risk: Sonko reaction could deepen constitutional confrontation.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'XOF' },
    { time: '09:00:00', signal: 'MALI: 50 soldiers killed in northern ambush — France 24 July 22. One of deadliest single incidents since Kidal fall November 2023. Arrives days after Anefis recapture (100 militants killed). Wagner-FAMA tactical paradox: local successes followed by devastating ambushes. JNIM operational resilience confirmed. Nigeria: foreign fighters joining jihadist groups — new vector.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'SA RAMAPHOSA IMPEACHMENT PANEL sat this week — first in South African democratic history. Phala Phala farm scandal review. Simultaneous: xenophobia crisis, AU multilateral pressure, SA-Nigeria dispute, weekly marches, December 31 ultimatum. GNU governance credibility under maximum compound stress.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Uganda: simultaneously managing Ebola (19+ cases Kampala/Wakiso) and Marburg (Kyegegwa, 1.5yr-old died). Two hemorrhagic fever outbreaks in one country — unprecedented. Ebola DRC week 10 — 600+ deaths. Africa CDC capacity stretched. No approved vaccine for Bundibugyo Ebola or Marburg. Contact tracing below 90%. France European Ebola case confirmed.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'South Africa: ZAR 16.46, NGN 1,376 — stable. AU multilateral track live — Nigeria and Ghana pushing AU on anti-migrant protests. 53,499 deported since June 14. December 31 ultimatum. Ngobese-Zuma shot July 16. Weekly Thursday marches. SA-Ghana diplomatic row. Nigeria compensation demand. PEPFAR September.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'Zambia election August 13 — 3 weeks. ZMW -32.91% YTD. Hichilema under maximum pressure. Ethiopia: TPLF conflict live, national dialogue ongoing. Somalia: AUSSOM funding ended. Sudan: EU gold ban in effect. Ivory Coast PDCI opposition leaders released — political gesture ahead of 2026 election cycle. Faye-Sall Senegal candidacy for UN SG vs 4 others.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX July 22: NGN 1,376 | GHS 11.47 | KES 129.04 | EGP 52.22 | ZAR 16.46 | XOF 574.92 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | ZMW 19.02. All rates stable. Africa Intelligence Brief ticker confirms ZAR 16.46 (-0.21%), NGN 1,376 (+0.02%). Markets absorbed DRC dialogue news, Faye-Sall endorsement and Mali ambush without major FX dislocation.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 84, fiscal: 60, fx: 44, debt: 60, political: 90, external: 82 },
    { country: 'Ghana', flag: '🇬🇭', score: 28, fiscal: 24, fx: 38, debt: 24, political: 24, external: 28 },
    { country: 'Kenya', flag: '🇰🇪', score: 70, fiscal: 66, fx: 52, debt: 72, political: 70, external: 68 },
    { country: 'DRC', flag: '🇨🇩', score: 96, fiscal: 86, fx: 88, debt: 80, political: 96, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 86, fiscal: 72, fx: 58, debt: 66, political: 92, external: 84 },
    { country: 'Senegal', flag: '🇸🇳', score: 84, fiscal: 82, fx: 78, debt: 86, political: 88, external: 82 },
    { country: 'Uganda', flag: '🇺🇬', score: 96, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
    { country: 'Mali', flag: '🇲🇱', score: 98, fiscal: 88, fx: 86, debt: 86, political: 99, external: 96 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,376.00', change: '-13.47%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.46', change: '-8.85%', stress: 'LOW', ytd: '+8.85%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 3 WEEKS', type: 'General Election', risk: 'HIGH', note: 'Hichilema under maximum pressure. ZMW -32.91% YTD. Power cuts. Opposition consolidated. 3 weeks to polling day. Most imminent major African election.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 cancelled July 22 protests — Tshisekedi announced dialogue. August 15 deadline for government + churches to convene talks. Red line: referendum bill enactment. Truce is not resolution.', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — AU Pressure Live', type: 'Municipal Elections', risk: 'CRITICAL', note: 'Ramaphosa impeachment panel sat. AU multilateral track live. 53,499 deported. December 31 ultimatum. Weekly marches. SA-Nigeria-Ghana crises compound.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Security Vacuum', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. No constitutional court. Most dangerous Horn security moment in decade.', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', date: 'Constitutional Referendum — Date TBD', type: 'Constitutional Referendum', risk: 'HIGH', note: 'Faye backs Sall for UN SG — major U-turn. Sonko reaction could deepen constitutional confrontation. Pastef constitutional reforms June 30. IMF Q3 programme at risk.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Signed — Direct Elections Abolished', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Mnangagwa signed. Direct elections abolished. Term to 2030. Most consequential African democratic regression of decade.', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'National Dialogue Ongoing', type: 'General Election', risk: 'CRITICAL', note: 'National Dialogue ongoing. TPLF conflict live. Eurobond in dispute. US visa restrictions. IMF complete.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee Standoff', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO RISK CONTINUES', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 3 WEEKS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$73', fiscalBreakeven: '$92/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$73', fiscalBreakeven: '$78/bbl', breakevenNote: 'BELOW BREAKEVEN', trend: '↓', risk: 'HIGH' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$3,200/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$9,800/t', fiscalBreakeven: '$7,500/t', breakevenNote: 'ABOVE BREAKEVEN', trend: '→', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$3,200/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'STRONG BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'DRC', flag: '🇨🇩', primary: 'Cobalt/Copper/Gold', exposure: 'VERY HIGH', gdpShare: '35%', revenueShare: '70%', price2026: 'Cobalt $32,000/t', fiscalBreakeven: 'N/A', breakevenNote: 'MINERAL WEALTH — GOVERNANCE RISK', trend: '↑', risk: 'HIGH' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'GAS PIPELINE — NEW REVENUE STREAM', trend: '↑', risk: 'LOW' },
  ],

  riskTable: [
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.2pts', fx: '-1.5%', signal: '50 SOLDIERS KILLED NORTHERN AMBUSH', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+25', bond: '-1.3pts', fx: '-8.9%', signal: 'IMPEACHMENT PANEL SAT — AU PRESSURE LIVE', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'C64 TRUCE — AUGUST 15 DIALOGUE DEADLINE', color: '#f5a623' },
    { country: 'SENEGAL', cds: 820, delta: '-30', bond: '+0.3pts', fx: '-6.6%', signal: 'FAYE BACKS SALL FOR UN SG — U-TURN', color: '#f5a623' },
    { country: 'UGANDA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA + MARBURG SIMULTANEOUSLY — UNPRECEDENTED', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION AUGUST 13 — 3 WEEKS — ZMW WORST', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '-10', bond: '+0.8pts', fx: '+10.8%', signal: 'DEATH PENALTY ABOLISHED — IMF COMPLETE', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN 5X EUROBOND — PDCI LEADERS RELEASED', color: '#00c48c' },
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
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.30, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 21', NGN: 1378.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
