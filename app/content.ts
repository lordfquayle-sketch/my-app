export const content = {
  riskIndex: '94',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 18, 2026 09:00 UTC',
    overallScore: 94,
    trend: 'STABLE',
    drivers: ['Senegal: Sonko Opens Door to IMF Debt Talks — Major Shift From Prior Opposition', 'World Cup: France Beats Senegal 3-1, SA Inflation Hits Two-Year High 4.5%', 'Zimbabwe Repatriates 660 From SA — Joins Ghana, Mozambique, Nigeria, Malawi', 'Mozambique Police Accused of Spy Networks Targeting Critics — Regional Governance Concern'],
    regions: [
      { region: 'East Africa', score: 97, trend: '→', color: '#ff3b3b' },
      { region: 'West Africa', score: 86, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 76, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'MAJOR SHIFT: Sonko tells RFI/France 24 (June 16) he is open to IMF debt talks — "we are not locked into fixed positions." Reverses his prior opposition as PM. IMF team in Dakar this week. Sonko re-elected Pastef leader with 589/598 votes — consolidating power as Speaker. Faye could invoke "exceptional powers" to govern by decree for 3 months if blocked. Senegal also considering international arbitration vs BP and Woodside over $2.8bn disputed cost recovery claims. Lost World Cup opener 3-1 to France.', severity: 'HIGH', color: '#f5a623' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Inflation hits nearly two-year high of 4.5% in May, up from 4% in April — driven by energy prices linked to Iran-Israel-US tensions. June 30: 12 days. Zimbabwean mother died after SA hospital demanded upfront payment — migrant healthcare crisis highlighted. Defence Department ordered by judge to explain "secrecy" over Cradock Four documentation — historical accountability issue resurfacing. Bafana drew 0-0 with... preparing for remaining group games.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zimbabwe/Malawi', flag: '🇿🇼', alert: 'Zimbabwe repatriates 660 nationals from South Africa as xenophobia tensions escalate — joining Ghana (297+), Mozambique (545+), Nigeria (268, 5-year ban), and Malawi in coordinated multi-nation evacuation. Malawi: police fired rubber bullets as women boarded buses home while men were taken to Lindela holding facility — gendered enforcement pattern emerging. Six-nation African evacuation from SA is now the largest coordinated continental response to a single xenophobia episode in years.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Mozambique', flag: '🇲🇿', alert: '"Mozambique Exposed" investigative series: police accused of systematic high-tech surveillance, abductions and targeted killings of journalists, opposition figures and critics. SERNIC criminal investigation unit alleged to function as political police. Political repression intensified over 18 months following disputed elections. Adds governance dimension to Mozambique\'s profile as a repatriation-recipient nation amid the SA xenophobia crisis.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Al Jazeera June 16: growing mistrust hampering Ebola containment efforts in DRC. Red Cross: "very difficult" to know true extent of spread. Senegalese World Cup fans affected by US visa rules — barred from traveling to support team in US-hosted matches. DRC Leopards based in Houston ahead of fixtures. Outbreak trajectory remains the dominant Central Africa risk factor.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'SONKO OPENS DOOR TO IMF TALKS — MAJOR SENEGAL POLICY REVERSAL — SIX NATIONS NOW EVACUATING FROM SOUTH AFRICA — SA INFLATION HITS TWO-YEAR HIGH',
    body: 'The most significant shift of the week: Ousmane Sonko, in his first major international interview since becoming Speaker of Senegal\'s National Assembly, told RFI and France 24 that he is open to IMF debt restructuring talks — a reversal of his consistent opposition while serving as Prime Minister. "We are not locked into fixed positions," he said, while warning that any solution which "sacrifices our options for systemic and structural change on the altar of short-term ratios" would not be accepted. This matters because Pastef controls 130 of 165 National Assembly seats — Sonko\'s tone shift materially improves the odds of a negotiated IMF path. Faye retains the option of "exceptional powers" to govern by decree for three months if blocked. Meanwhile South Africa\'s xenophobia crisis has triggered a sixth nation\'s evacuation — Zimbabwe repatriated 660 citizens, joining Ghana, Mozambique, Nigeria and Malawi. Inflation in South Africa hit a near two-year high of 4.5% in May, driven by energy costs linked to Iran-Israel-US tensions — compounding the cost-of-living pressures already fueling the unrest. June 30 is now 12 days away.',
    tag: 'JUNE 18 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'June 18, 2026',
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
    { title: 'SONKO OPENS DOOR TO IMF TALKS — REVERSES PRIOR OPPOSITION — POLITICAL CONSOLIDATION CONTINUES', body: 'In his first major international interview as Speaker, Sonko told RFI/France 24: "We didn\'t want a disorderly restructuring... but we accept that the state is a continuity. Today, we must assess developments as they unfold." This is a substantive softening from his position as PM, when he opposed IMF debt talks outright, arguing Senegal was meeting its obligations. Sonko was re-elected Pastef leader with 589 of 598 votes on June 14 — consolidating control of both party and parliament. Faye retains the option of invoking exceptional powers to govern by decree for three months if lawmakers loyal to Sonko block reforms. Senegal also weighing international arbitration against BP and Woodside over a disputed $2.8bn in oil and gas cost recovery claims.', icon: '⚖️' },
    { title: 'WORLD CUP: FRANCE BEATS SENEGAL 3-1, SOUTH AFRICA STRUGGLING IN GROUP STAGE', body: 'France defeated Senegal 3-1 at New York/New Jersey Stadium on June 16 — Sonko had called the symbolic rematch of Senegal\'s famous 2002 upset "Africa beating Africa" regardless of outcome given France\'s many Africa-origin players. Senegal captain Kalidou Koulibaly has vowed the team will bounce back. Ghana\'s Otto Addo/Queiroz era continues seeking a winning start. Tunisia replaced coach Sami Trabelsi-era management with Herve Renard after a heavy defeat. The tournament\'s African storylines are now as much about World Cup competitiveness as the political backdrop that shaped team preparation.', icon: '⚽' },
    { title: 'ZIMBABWE REPATRIATES 660 FROM SA — SIXTH NATION TO EVACUATE — GENDERED ENFORCEMENT PATTERN', body: 'Zimbabwe has repatriated 660 nationals from South Africa as xenophobia tensions escalate — the sixth African nation (after Ghana, Mozambique, Nigeria, Malawi) to conduct organised evacuations. In Malawi\'s case, police fired rubber bullets as women boarded buses home while men were separated and taken to the Lindela holding facility — suggesting differentiated enforcement by gender that will draw additional scrutiny. The scale of multi-national evacuation — now six countries — makes this the largest coordinated continental response to a South African xenophobia episode in the post-apartheid era.', icon: '🚌' },
    { title: 'SA INFLATION HITS TWO-YEAR HIGH 4.5% — ENERGY COSTS LINKED TO MIDDLE EAST TENSIONS', body: 'South Africa\'s annual inflation rate climbed to a nearly two-year high of 4.5% in May, up from 4% in April, driven by soaring energy prices linked to Iran-Israel-US tensions. This compounds the petrol levy hike (R1.50/litre, effective June 3) and adds a fresh inflationary vector entirely outside SA\'s domestic control. With SARB already at 7% and household debt default rates at 41%, the inflation print narrows the central bank\'s room to manoeuvre heading into the June 30 deadline window.', icon: '📈' },
  ],

  insight1: {
    title: 'SONKO\'S IMF REVERSAL IS THE MOST IMPORTANT SENEGAL SIGNAL SINCE THE EARLY COUPON PAYMENT',
    body: 'When the single most powerful legislative figure in a country — controlling 130 of 165 seats as both party leader and Speaker — shifts from active opposition to openness on the precise issue blocking IMF re-engagement, that is a structurally significant change. Sonko\'s position as PM was that Senegal was meeting its obligations and didn\'t need a "disorderly restructuring." His new framing — "we are not locked into fixed positions," "the state is a continuity" — preserves room to negotiate while keeping a credible threat ("if a solution sacrifices our options... we won\'t accept it"). This is a classic legislative-leader hedge: signal flexibility without ceding leverage. Combined with the early coupon payments and the ongoing IMF technical mission, Senegal\'s trajectory toward a negotiated agreement by June 30 looks more credible than it did a week ago. The BP/Woodside arbitration threat shows Senegal simultaneously trying to extract more value from its oil and gas contracts — a parallel fiscal lever.',
    conclusion: 'SONKO\'S OPENNESS TO IMF TALKS, COMBINED WITH EARLY COUPON PAYMENTS, MAKES A NEGOTIATED SENEGAL OUTCOME BY JUNE 30 MORE CREDIBLE THAN AT ANY POINT IN THE CRISIS. WATCH FOR FORMAL PASTEF PARTY POSITION ON RESTRUCTURING TERMS.',
  },

  insight2: {
    title: 'SIX NATIONS EVACUATING FROM SOUTH AFRICA IS A REGIONAL DIPLOMATIC CRISIS, NOT A DOMESTIC ONE',
    body: 'Ghana, Mozambique, Nigeria, Malawi, Zimbabwe — and the broader pattern suggests more will follow — represents an unprecedented continental response to a single country\'s internal security failure. This is no longer a story about South African domestic politics; it is a story about South Africa\'s standing within SADC, ECOWAS and the African Union. The Africa Report\'s framing of a "war of words with Ghana" plus Nigeria\'s 5-year re-entry ban plus now Zimbabwe\'s evacuation creates a pattern that African regional bodies cannot ignore much longer. Ramaphosa\'s 5-point plan addresses the domestic policy response, but it does nothing to repair the diplomatic damage already done. With 12 days to June 30, the risk is no longer only about violence at home — it is about South Africa\'s soft power and leadership credibility across the continent it has long sought to lead.',
    conclusion: 'SIX NATIONS EVACUATING CITIZENS FROM SOUTH AFRICA IS A CONTINENTAL DIPLOMATIC CRISIS THAT WILL OUTLAST JUNE 30 REGARDLESS OF HOW THE DOMESTIC SITUATION RESOLVES. WATCH FOR AU OR SADC FORMAL STATEMENTS IN THE COMING WEEK.',
  },

  brief: {
    week: '25',
    title: 'WEEK 25 CLOSE: SONKO OPENS IMF DOOR, SIX NATIONS EVACUATE SA, FRANCE BEATS SENEGAL, SA INFLATION TWO-YEAR HIGH',
    body: 'Week 25 closes with a significant Senegal pivot: Sonko, now consolidated as both Pastef leader (589/598 votes) and National Assembly Speaker, told international media he is open to IMF debt talks — a reversal from his position as PM. The IMF technical mission continues in Dakar. South Africa\'s xenophobia crisis has now triggered evacuations from six African nations, with Zimbabwe repatriating 660 citizens this week alongside Ghana, Mozambique, Nigeria and Malawi. SA inflation hit a near two-year high of 4.5% in May on energy costs linked to Middle East tensions, narrowing SARB\'s policy room heading into the June 30 deadline — now 12 days away. On the pitch, France beat Senegal 3-1 in a symbolic World Cup rematch of 2002. Mozambique faces fresh governance scrutiny over an investigative series alleging police-run surveillance and repression of critics. Ebola containment in DRC remains hampered by community mistrust per Al Jazeera and the Red Cross. Live FX: ZAR continuing to strengthen at 16.18, GHS at 11.20, KES steady at 129.54.',
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
    { time: '09:30:00', signal: 'Senegal: Sonko tells RFI/France 24 (June 16) he is open to IMF debt talks — reversal from PM-era opposition. "We are not locked into fixed positions." Re-elected Pastef leader 589/598 votes June 14. Faye retains exceptional decree powers option if blocked. Senegal weighing BP/Woodside arbitration over $2.8bn disputed costs.', detail: 'MEDIUM', type: 'INFO', tag: 'CREDIT UPDATE', country: 'XOF' },
    { time: '09:15:00', signal: 'South Africa: Inflation hits 4.5% in May — nearly two-year high, up from 4% in April. Driven by energy prices linked to Iran-Israel-US tensions. Compounds petrol levy hike and household debt crisis. SARB policy room narrowing. June 30: 12 days.', detail: 'HIGH', type: 'ALERT', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '09:00:00', signal: 'Zimbabwe repatriates 660 nationals from SA — sixth nation to evacuate after Ghana, Mozambique, Nigeria, Malawi. Malawi: police fired rubber bullets as women boarded buses, men taken to Lindela holding facility — gendered enforcement pattern. Largest coordinated continental evacuation response in years.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:45:00', signal: 'World Cup: France beat Senegal 3-1 (New York/NJ Stadium June 16) — symbolic rematch of 2002 upset. Sonko pre-match: "whichever team wins, Africa will have beaten Africa." Senegal captain Koulibaly vows bounce-back. Tunisia replaced coach with Herve Renard after heavy defeat. African storylines now competitive, not just political.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'Mozambique: "Mozambique Exposed" series alleges police-run high-tech surveillance, abductions, targeted killings of journalists and opposition. SERNIC accused of functioning as political police. 18 months of intensified repression since disputed elections. Governance concern compounds Mozambique\'s repatriation-recipient status amid SA crisis.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'Ebola DRC: Al Jazeera June 16 — growing community mistrust hampering containment. Red Cross: "very difficult" to know true spread extent. Senegalese World Cup fans barred from traveling to US matches under visa rules — Ebola-linked restrictions persist across multiple African nations\' tournament participation.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Sahel: ACLED June overview — JNIM overran Niger National Guard camp at Kirtachi, killed 12 soldiers, captured 7. Coordinated JNIM attack on Benin military positions at Koualou. Fuel-price protests spiked in Kenya (94+ PSV demonstrations) and Comoros amid Strait of Hormuz tension fallout on energy markets.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 18: NGN 1,357.03 | GHS 11.20 | KES 129.54 | EGP 52.22 | ZAR 16.18 (continuing to strengthen, -10.13% YoY) | XOF 569.32 | UGX 3,645.50. ZAR strength persists despite domestic political stress — gold/PGM exports and SARB credibility the structural drivers.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 64, fiscal: 56, fx: 40, debt: 58, political: 84, external: 58 },
    { country: 'Ghana', flag: '🇬🇭', score: 42, fiscal: 36, fx: 50, debt: 36, political: 32, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 96, fiscal: 90, fx: 74, debt: 96, political: 98, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 96, fiscal: 78, fx: 46, debt: 70, political: 98, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 78, fiscal: 82, fx: 68, debt: 84, political: 74, external: 76 },
    { country: 'Mali', flag: '🇲🇱', score: 97, fiscal: 88, fx: 85, debt: 85, political: 99, external: 94 },
    { country: 'Mozambique', flag: '🇲🇿', score: 90, fiscal: 78, fx: 70, debt: 80, political: 96, external: 82 },
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
    { country: 'Ethiopia', flag: '🇪🇹', date: 'PP Confirmed 457/547 — Abiy Third Term', type: 'General Election', risk: 'HIGH', note: 'Post-election watch ongoing. No confirmed major Tigray escalation reported. Pretoria Agreement collapsing. Eritrea tensions persist.', color: '#f5a623' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Constitutional Crisis — Ceasefire Holding', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'Ceasefire holding. Opposition calls Mohamud "former president." Al-Shabaab Bay Region active. No constitutional court.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Legitimacy void.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 12 days. Six nations now evacuating citizens. Inflation 4.5% two-year high. Defence Dept secrecy court order. Migrant healthcare crisis highlighted.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'HIGH', note: '268 nationals returned under 5-year SA ban. Dangote 700k bpd positive. Multi-vector security crisis ongoing.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30 — 12 days. 94+ PSV fuel-price demonstrations recorded by ACLED. Eurobond Q2 critical.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY', instrument: 'Bond Coupons', maturity: 'IMF TALKS OPENING — SONKO REVERSAL', risk: 'MEDIUM', color: '#f5a623' },
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
    { country: 'KENYA', cds: 192, delta: '+52', bond: '-2.6pts', fx: '+0.1%', signal: 'JUNE 30 12D — FUEL PROTESTS 94+', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+40', bond: '-2.0pts', fx: '+10.1%', signal: 'SIX NATIONS EVACUATING — INFLATION 4.5%', color: '#ff3b3b' },
    { country: 'SOMALIA', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'CEASEFIRE HOLDING — OPPOSITION ACTIVE', color: '#ff3b3b' },
    { country: 'MOZAMBIQUE', cds: 650, delta: '+30', bond: '-1.2pts', fx: '-0.5%', signal: 'POLICE SURVEILLANCE EXPOSE — GOVERNANCE RISK', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+40', bond: '-2.0pts', fx: '-0.9%', signal: 'POST-ELECTION WATCH — NO ESCALATION YET', color: '#f5a623' },
    { country: 'SENEGAL', cds: 780, delta: '-40', bond: '+0.8pts', fx: '-0.5%', signal: 'SONKO OPENS IMF DOOR — REVERSAL', color: '#f5a623' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE — JNIM ATTACKS', color: '#ff3b3b' },
    { country: 'GHANA', cds: 232, delta: '+8', bond: '-0.3pts', fx: '+8.8%', signal: 'IMF COMPLETE — WORLD CUP CAMPAIGN', color: '#f5a623' },
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
  ],
}
