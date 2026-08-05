export const content = {
  riskIndex: '88',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'August 5, 2026 09:00 UTC',
    overallScore: 88,
    trend: 'WORSENING',
    drivers: ['Ceuta Crisis: 80,000 Crossed Morocco-Spain Border — 67-80+ Dead — EU-Africa Migration Emergency', 'Ethiopia Tigray: Renewed Fighting — Hundreds Civilians Displaced — Federal Forces vs Regional Armed Group', 'Dangote IPO: Africa\'s Largest Ever Stock Market Listing $5bn — October Target — Pan-African Exchanges', 'SA Petrol Down Only 52c From Today — Hormuz Oil $90+ Limits Relief — Diesel Actually Increases'],
    regions: [
      { region: 'East Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 82, trend: '↑', color: '#f5a623' },
      { region: 'North Africa', score: 90, trend: '↑', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 80, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Morocco/EU', flag: '🇲🇦', alert: 'CEUTA CRISIS — DEADLIEST MIGRATION EVENT IN EUROPE IN YEARS. An estimated 80,000 people crossed the Morocco-Spain border into Ceuta in late July 2026 — 67 to 80+ dead from drowning and stampede. 800 unaccompanied minors stranded. Social media disinformation and trafficking networks triggered the mass rush. Spain installed a 500m containment barrier in the sea. Most migrants have returned to Morocco per Spanish interior ministry. Morocco blamed misinformation and trafficking networks. EU-Africa migration architecture under maximum stress. The Ceuta crisis is the single largest migration event in EU history and has directly implicated Morocco — Africa\'s most strategically important North African partner — in Europe\'s migration emergency at the moment Morocco is co-hosting the 2030 World Cup and leading WAFCON 2026.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'TIGRAY RENEWED FIGHTING CONFIRMED. Hundreds of civilians displaced in Ethiopia\'s Tigray region following renewed fighting between federal forces and a regional armed group. This confirms the opposition party warning of July 22: the government was steering Tigray toward open conflict. US visa restrictions on TPLF hardliners confirmed June 18. National Dialogue Conference ongoing as parallel political track. TPLF reinstated Debretsion, introduced "totalitarian control" legislation, clashed directly with ENDF. Pretoria Agreement collapsed. The Horn of Africa\'s worst conflict risk since November 2020 is now materialising.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', alert: 'DANGOTE IPO — AFRICA\'S LARGEST EVER STOCK MARKET LISTING. Dangote Refinery is preparing an IPO seeking to raise approximately $5 billion — expected to conclude in October 2026. The listing would be Africa\'s largest-ever stock market IPO. Plans to use funds to expand the Lagos refinery (currently at 700,000 bpd) and build a similar facility in Kenya. Investor interest reported across several African stock exchanges. This comes alongside: Nigeria reserves $50.12bn 17-year high, NGN strengthened 13.7% from June 2025 peak, CBN 27.5% rate, and Nigeria-SA de-escalation agreed. Nigeria\'s macro trajectory is the single most improved of any major African economy in 2026.', severity: 'LOW', color: '#00c48c' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'SA PETROL DOWN ONLY 52C/LITRE FROM TODAY. From August 5: petrol 93 and 95 down 52 cents per litre. Diesel UP by more than R1/litre. Illuminating paraffin also more expensive. The smaller-than-expected cut reflects: $90+ Brent from Hormuz re-escalation (offsetting lower international petrol crack spreads), slightly weaker rand during review period, and the effective reversal of the July 1 R2.01/litre relief. Diesel users — trucks, generators, agriculture — are facing significant cost increases. The August fuel review is a negative for SA\'s cost-of-living environment entering the December 31 ultimatum period. ZAR at 16.55. Zambia election 8 days away.', severity: 'MEDIUM', color: '#f5a623' },
    { country: 'DRC', flag: '🇨🇩', alert: 'UN OPENS MAJOR EBOLA TREATMENT CENTRE. A new UN treatment centre has opened at the heart of the DRC Ebola outbreak — the most significant operational infrastructure development since the outbreak began. This comes after the Bunia healthcare workers struck (July 28) over unpaid wages and PPE shortages. The new UN centre aims to provide paid, PPE-equipped treatment capacity independent of the strained DRC government health system. Ebola remains the fastest-growing outbreak on record — 47 health zones, 5 provinces. Uganda 42-day countdown continues. DRC August 15 dialogue deadline in 10 days.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'CEUTA: 80,000 CROSSED MOROCCO-SPAIN BORDER 80 DEAD — TIGRAY RENEWED FIGHTING HUNDREDS DISPLACED — DANGOTE $5BN IPO — SA PETROL 52C CUT — UN EBOLA CENTRE OPENS',
    body: 'August 5 is the most signal-dense single day since July 31. The Ceuta migration crisis has produced the largest and deadliest mass border crossing in EU history: an estimated 80,000 people breached the Morocco-Spain frontier in late July, with 67-80+ dead from drowning and stampede, 800 unaccompanied minors stranded, and Spain installing a 500m sea barrier. Social media disinformation triggered the rush. Morocco blamed trafficking networks. The crisis has implicated Africa\'s most strategically important North African partner — Morocco — at the moment it is co-hosting the 2030 World Cup and leading WAFCON. Ethiopia\'s Tigray has seen renewed fighting — confirming the opposition warning of July 22. Hundreds of civilians displaced. In Nigeria, Dangote Refinery is preparing Africa\'s largest-ever IPO: $5 billion, October target, pan-African exchanges. South Africa\'s petrol drops only 52 cents from today — not the hoped-for R2 cut — Hormuz oil at $90+ limits relief, and diesel actually increases. The UN opened a major Ebola treatment centre in DRC. Zambia\'s election is 8 days away. DRC August 15 dialogue deadline is 10 days away.',
    tag: 'AUGUST 5 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'August 5, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '360', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '220', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Morocco', flag: '🇲🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '120', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'CEUTA: 80,000 CROSSED — 80 DEAD — EU\'S LARGEST MIGRATION CRISIS — MOROCCO IMPLICATED', body: 'An estimated 80,000 people breached the Morocco-Spain border into Ceuta in late July 2026 — the largest mass border crossing in EU history. At least 67 died on the Spanish side and 11 on the Moroccan side from drowning and being crushed in stampedes. 800 unaccompanied minors are stranded. Social media disinformation — false claims that Spain had opened its borders — triggered the rush. Morocco blamed misinformation and trafficking networks. Spain installed a 500m sea containment barrier. French and Italian borders were tightened. Most migrants have returned to Morocco. The crisis has directly implicated Morocco — Africa\'s most strategically important North African partner — at the moment it is co-hosting the 2030 World Cup, leading WAFCON 2026, and benefitting from the AfDB €205m rail loan. The EU-Morocco partnership, essential for migration management, is now under maximum strain.', icon: '🚨' },
    { title: 'TIGRAY RENEWED FIGHTING — HUNDREDS DISPLACED — OPPOSITION WARNING CONFIRMED', body: 'Hundreds of civilians were displaced in Ethiopia\'s Tigray region following renewed fighting between federal forces and a regional armed group — confirmed August 3. This directly confirms the Ethiopian opposition parties\' July 22 warning that the government was steering Tigray toward open conflict. The sequence: TPLF reinstated Debretsion → introduced "totalitarian control" draft legislation → direct ENDF clashes confirmed → US TPLF visa restrictions June 18 → opposition warning July 22 → renewed fighting confirmed August 3. Pretoria Agreement has collapsed. National Dialogue Conference is running as a parallel political track. The Horn of Africa\'s most dangerous security escalation since November 2020 Tigray war is now materialising. AUSSOM\'s funding gap in Somalia compounds the Horn compound risk.', icon: '💥' },
    { title: 'DANGOTE $5BN IPO — AFRICA\'S LARGEST EVER — OCTOBER TARGET — PAN-AFRICAN EXCHANGES', body: 'Dangote Refinery is preparing what could become Africa\'s largest-ever stock market listing — seeking to raise approximately $5 billion through an IPO expected to conclude in October 2026. The company plans to use the funds to expand the Lagos refinery (currently at 700,000 bpd, eliminating Nigeria\'s fuel import dependency) and build a similar refinery in Kenya. Investor interest reported across multiple African stock exchanges. The IPO arrives alongside Nigeria\'s 17-year reserve high ($50.12bn), NGN strengthened 13.7%, CBN 27.5%, and the Nigeria-SA de-escalation agreement. The Dangote IPO would be the most significant capital markets event in African history if it proceeds at the $5bn target.', icon: '📈' },
    { title: 'SA PETROL DOWN ONLY 52C — DIESEL UP R1+ — HORMUZ LIMITS AUGUST RELIEF', body: 'From August 5: South African motorists pay 52 cents less per litre for both 93 and 95 unleaded petrol, following the latest monthly fuel price adjustment announced by the Department of Mineral and Petroleum Resources. [Time Out](https://www.timeout.com/durban/news/good-news-and-bad-news-at-the-pumps-this-month-080426?claude-citation-138d043b-7348-4774-a79d-825b121572e6=20a3d3c4-efc1-48dc-8c14-fddfecc4fc19) Petrol drivers will see welcome relief on August 5, but a drop closer to 40 to 80 cents per litre rather than the R2.00+ drops teased earlier — for fleet operators on diesel, the early-month price drop has effectively evaporated. [AutoTrader](https://www.autotrader.co.za/cars/news-and-advice/automotive-news/updated-august-fuel-price-outlook-(south-africa-2026)/17475?claude-citation-138d043b-7348-4774-a79d-825b121572e6=646954d4-dfd7-4ff0-9ec6-f7436a9a6e87) The 52c cut vs the July 1 R2.01/litre cut reflects: Hormuz crisis drove Brent to $90+, almost entirely offsetting global petrol market softening. Diesel increases will hit trucking, agriculture and generator users entering the December 31 ultimatum period.', icon: '⛽' },
  ],

  insight1: {
    title: 'THE CEUTA CRISIS IS THE MOST CONSEQUENTIAL SINGLE MIGRATION EVENT IN EU-AFRICA RELATIONS SINCE THE 2015 MEDITERRANEAN CRISIS',
    body: 'The 2015 Mediterranean refugee crisis — 1.3 million crossings, over 3,700 dead — fundamentally reshaped European politics, accelerated Brexit, enabled the rise of far-right governments across Europe, and produced the 2016 EU-Turkey deal that outsourced EU border management. The 2026 Ceuta crisis is different in scale (80,000 in a single breach) but similar in political consequence. It has exposed the foundational vulnerability of the EU\'s North African border management architecture: the entire system depends on Morocco\'s willingness to control the border, and when social media disinformation (or deliberate Moroccan pressure) breaks that willingness, there is no EU fallback. Spain\'s far-right Vox party is already exploiting the crisis, as reported by France 24. The EU-Morocco partnership — which underpins migration management, gas supply (Nigeria-Morocco pipeline goes through Morocco), and 2030 World Cup — is now under strain at exactly the moment Africa needs it most.',
    conclusion: 'THE CEUTA CRISIS IS THE SINGLE MOST CONSEQUENTIAL EU-AFRICA MIGRATION EVENT SINCE 2015. IT EXPOSES THE STRUCTURAL DEPENDENCY ON MOROCCAN COOPERATION FOR EU BORDER MANAGEMENT. THE POLITICAL FALLOUT — FAR-RIGHT EXPLOITATION, EU-MOROCCO PARTNERSHIP STRAIN — WILL OUTLAST THE IMMEDIATE CRISIS AND AFFECT AFRICA-EU RELATIONS FOR YEARS.',
  },

  insight2: {
    title: 'DANGOTE\'S $5BN IPO IS THE MOST IMPORTANT AFRICAN CAPITAL MARKETS EVENT IN HISTORY — AND IT ARRIVES AT AFRICA\'S WORST DIPLOMATIC MOMENT',
    body: 'If Dangote Refinery successfully raises $5 billion through a pan-African IPO in October 2026, it would be the largest capital markets event in African history. The significance extends beyond the transaction itself: a $5bn listing that attracts investment across multiple African stock exchanges would demonstrate that African capital markets can absorb major industrial-scale transactions without going to London or New York. The Dangote Refinery at 700,000 bpd has already eliminated Nigeria\'s fuel import dependency — the IPO would fund expansion to a scale that could supply surrounding West African markets. Combined with Nigeria reserves at $50.12bn, NGN strengthened 13.7%, and the Nigeria-Morocco Gas Pipeline approved, the Dangote IPO is the capstone of Nigeria\'s most impressive macro quarter in years — even as the bilateral crisis with South Africa, the security crisis from ISSP, and the 2027 election cycle all compound simultaneously.',
    conclusion: 'THE DANGOTE $5BN IPO IS THE SINGLE MOST IMPORTANT AFRICAN CAPITAL MARKETS EVENT IN HISTORY IF IT PROCEEDS. IT ARRIVES ALONGSIDE NIGERIA\'S STRONGEST MACRO QUARTER IN YEARS. THE SIMULTANEOUS SECURITY CRISIS, SA DIPLOMATIC FRICTION, AND 2027 ELECTION CYCLE CONFIRM THAT MACRO PROGRESS AND POLITICAL RISK CAN CO-EXIST IN AFRICA\'S MOST COMPLEX SOVEREIGN.',
  },

  brief: {
    week: '32',
    title: 'WEEK 32 WEDNESDAY AUGUST 5: CEUTA 80,000 CROSSED 80 DEAD EU CRISIS, TIGRAY RENEWED FIGHTING, DANGOTE $5BN IPO, SA PETROL 52C, UN EBOLA CENTRE OPENS, ZAMBIA 8 DAYS',
    body: 'August 5 opens with the EU\'s largest migration crisis since 2015 — 80,000 people crossed Morocco-Spain into Ceuta, 80 dead, 800 unaccompanied minors, Spain\'s sea barrier installed. Morocco\'s strategic partnerships (2030 World Cup, WAFCON, gas pipeline, AfDB rail) are now under EU political pressure. Tigray renewed fighting confirmed — opposition July 22 warning validated, hundreds displaced. Dangote Refinery announces Africa\'s largest-ever IPO: $5bn, October, pan-African exchanges. SA petrol drops only 52c from today — Hormuz $90+ oil limits relief, diesel increases. UN opened major Ebola treatment centre in DRC after Bunia healthcare workers struck. Zambia election 8 days away. DRC August 15 dialogue deadline in 10 days. Uganda 42-day Ebola countdown. Ethiopia TPLF war risk materialising. ZAR at 16.55. Gold $4,054. Nigeria reserves $50.12bn.',
  },

  fxRates: {
    NGN: '1,363.00',
    GHS: '11.47',
    KES: '129.04',
    EGP: '52.22',
    XOF: '574.92',
    ZAR: '16.55',
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
    { time: '09:30:00', signal: 'CEUTA MIGRATION CRISIS — EU\'s largest migration event in history. 80,000 crossed Morocco-Spain border late July. 67-80+ dead (drowning and stampede). 800 unaccompanied minors stranded. Social media disinformation triggered rush. Spain installed 500m sea barrier. Morocco blamed trafficking networks. EU-Morocco partnership under strain. Far-right parties exploiting across Europe. France, Italy tightened border controls.', detail: 'HIGH', type: 'ALERT', tag: 'GEOPOLITICAL', country: 'MAD' },
    { time: '09:15:00', signal: 'ETHIOPIA TIGRAY: Renewed fighting confirmed August 3 — hundreds of civilians displaced following federal forces clashes with regional armed group. Directly confirms opposition July 22 warning. TPLF reinstated Debretsion, introduced totalitarian control legislation, clashed with ENDF. Pretoria Agreement collapsed. Most dangerous Horn security moment since November 2020. AUSSOM Somalia gap compounds Horn compound risk.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:00:00', signal: 'DANGOTE IPO: Nigeria Dangote Refinery preparing Africa\'s largest-ever stock market listing — seeking $5bn, IPO expected October. Plans to expand Lagos refinery (700k bpd) and build similar in Kenya. Pan-African exchanges investor interest. Most significant African capital markets event in history if proceeds. Alongside: Nigeria reserves $50.12bn 17yr high, NGN +13.7% from June 2025, CBN 27.5%, SA de-escalation.', detail: 'LOW', type: 'INFO', tag: 'MARKET FLOW', country: 'NGN' },
    { time: '08:45:00', signal: 'SA FUEL AUGUST 5: Petrol 93 and 95 down 52c/litre — smaller than expected. Diesel up R1+/litre. Illuminating paraffin up. Hormuz crisis ($90+ Brent) almost entirely offset petrol market softening. July 1 R2.01/litre relief substantially reversed. Diesel increases hit trucking, agriculture, generators. December 31 ultimatum cost-of-living environment deteriorating. ZAR 16.55.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'ZAR' },
    { time: '08:30:00', signal: 'DRC EBOLA: UN opened major treatment centre at heart of outbreak. Responds to Bunia healthcare workers strike (July 28). Fastest-growing outbreak on record — 47 health zones, 5 provinces. Uganda 42-day countdown — last case June 21, target late August. DRC August 15 dialogue deadline — 10 days. C64 truce holding. Red line: referendum bill enactment.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'ZAMBIA ELECTION AUGUST 13 — 8 DAYS. Hichilema (UPND) vs Mundubile (Tonse-Pamodzi). Final stretch campaigning. ZMW -32.91% YTD. Copper $6.42. SADC SEOM deployed. ZANU-PF reportedly backing Mundubile. Hichilema favoured. Zimbabwe: anti-amendment protests expected. New debate over Tinubu credentials ahead of 2027 Nigeria polls. Benin\'s new Senate faces legitimacy questions. Sudan food shortages + cholera deepening.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '08:00:00', signal: 'INTERPOL: AI now drives 55% of reported cybercrimes across Africa — financial losses doubled since 2024 to $484m. AI-generated synthetic identities bypass biometric security, enable fraud at scale. Phishing, ransomware, mobile money fraud accelerating. Governance risk for Africa\'s digital financial infrastructure. Zimbabwe O-level pass rate drops to 3% (from 5.87% in 2025). SA Durban water crisis turns deadly. SA farmers dump rotting fruit near homes.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO SIGNAL', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX August 5: ZAR 16.55 | NGN ~1,363 | GHS 11.47 | KES 129.04 | EGP 52.22 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. Gold $4,054 (Aug 1). Hormuz oil $90+ feeding SA August fuel review. ZAR neutral on technicals — 52-week range 15.6417-18.3681. ZMW -32.91% YTD worst major African currency entering election week.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 64, fiscal: 48, fx: 36, debt: 50, political: 72, external: 64 },
    { country: 'Ghana', flag: '🇬🇭', score: 24, fiscal: 20, fx: 34, debt: 20, political: 26, external: 24 },
    { country: 'Morocco', flag: '🇲🇦', score: 52, fiscal: 38, fx: 34, debt: 40, political: 62, external: 58 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 98, fiscal: 70, fx: 72, debt: 90, political: 99, external: 98 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 58, fx: 44, debt: 60, political: 82, external: 74 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 82, fiscal: 66, fx: 94, debt: 74, political: 84, external: 78 },
    { country: 'DRC', flag: '🇨🇩', score: 98, fiscal: 88, fx: 90, debt: 82, political: 96, external: 98 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,363.00', change: '-13.68%', stress: 'LOW', ytd: '-2.90%', color: '#00c48c' },
    { code: 'GHS', country: 'Ghana', rate: '11.47', change: '+11.50%', stress: 'MODERATE', ytd: '+10.80%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.04', change: '-0.19%', stress: 'MODERATE', ytd: '-0.93%', color: '#f5a623' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.55', change: '-8.50%', stress: 'LOW', ytd: '+8.50%', color: '#00c48c' },
    { code: 'UGX', country: 'Uganda', rate: '3,674.80', change: '-1.92%', stress: 'ELEVATED', ytd: '-1.92%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'WAEMU', rate: '574.92', change: '-6.59%', stress: 'MODERATE', ytd: '-6.59%', color: '#f5a623' },
  ],

  elections: [
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 8 DAYS', type: 'General Election', risk: 'HIGH', note: 'Final stretch. Hichilema vs Mundubile. ZANU-PF backing Mundubile. Hichilema favoured. Copper $6.42. ZMW -32.91% YTD. SADC SEOM deployed. 8 days to polling day.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 10 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Tshisekedi dialogue. UN Ebola centre opened. Red line: referendum bill. 10 days. Bunia healthcare workers struck July 28.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Tigray Renewed Fighting — War Risk Materialising', type: 'General Election', risk: 'CRITICAL', note: 'Renewed fighting August 3 — hundreds displaced. Confirms July 22 opposition warning. TPLF-ENDF clashes. Pretoria Agreement collapsed. National Dialogue parallel. Horn of Africa most dangerous moment since 2020.', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Anti-Amendment Protests Imminent', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Bracing for anti-amendment protests. 2030 extension signed. ZANU-PF Harare pushing 2037. ConCourt challenges filed. FDI $965m mid-term positive. Democratic regression accelerating.', color: '#ff3b3b' },
    { country: 'Morocco', flag: '🇲🇦', date: 'Ceuta Crisis — EU Partnership Under Strain', type: 'Migration Crisis', risk: 'HIGH', note: '80,000 crossed border — 80 dead. EU-Morocco partnership under strain. Spain sea barrier installed. 2030 World Cup, WAFCON, gas pipeline, AfDB rail all at risk from EU political fallout.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — Petrol 52c Cut Today', type: 'Municipal Elections', risk: 'HIGH', note: 'Petrol down 52c from today — smaller than expected. Diesel up R1+. December 31 ultimatum. Weekly marches. $30bn trade contradiction. Gold $4,054 fiscal buffer. Nigeria reserves $50.12bn.', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Dangote IPO October — 2027 Election Cycle', type: 'General Election', risk: 'MEDIUM', note: 'Dangote $5bn IPO October — Africa\'s largest ever. New debate over Tinubu credentials ahead of 2027. Reserves $50.12bn. NGN +13.7%. Macro strongest in years.', color: '#f5a623' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — Tigray War Risk Now Active', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY — €53.75m + $38.8m', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 8 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026 — OIL $90+ POSITIVE', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Nigeria', flag: '🇳🇬', amount: '$5bn', instrument: 'Dangote Refinery IPO', maturity: 'OCTOBER 2026 — LARGEST EVER AFRICAN LISTING', risk: 'LOW', color: '#00c48c' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$90+', fiscalBreakeven: '$92/bbl', breakevenNote: 'NEAR BREAKEVEN — RESERVES $50BN — DANGOTE IPO', trend: '↑', risk: 'LOW' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$90+', fiscalBreakeven: '$78/bbl', breakevenNote: 'WELL ABOVE BREAKEVEN — OIL POSITIVE', trend: '↑', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,054/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'NEAR ATH — ENORMOUS FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$6.42/lb', fiscalBreakeven: '$5.50/lb', breakevenNote: 'ABOVE BREAKEVEN — ELECTION RISK DOMINATES', trend: '↑', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,054/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'NEAR ATH — PETROL 52C CUT HORMUZ CONSTRAINED', trend: '↑', risk: 'LOW' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'CEUTA CRISIS — EU PARTNERSHIP STRAIN — 2030 WC', trend: '↓', risk: 'MEDIUM' },
    { country: 'Sudan', flag: '🇸🇩', primary: 'Gold', exposure: 'VERY HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,054/oz', fiscalBreakeven: 'N/A', breakevenNote: 'EU BAN — GENOCIDE FINDING — ICC LEADERSHIP', trend: '↓', risk: 'CRITICAL' },
  ],

  riskTable: [
    { country: 'MOROCCO/EU', cds: 120, delta: '+20', bond: '-0.5pts', fx: '+0.5%', signal: 'CEUTA 80,000 80 DEAD — EU PARTNERSHIP STRAIN', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+80', bond: '-4.0pts', fx: '-0.9%', signal: 'TIGRAY RENEWED FIGHTING — WAR RISK MATERIALISING', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION 8 DAYS — FINAL STRETCH', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA — UN CENTRE OPENS — AUG 15 DIALOGUE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 360, delta: '-55', bond: '+2.0pts', fx: '-13.7%', signal: 'DANGOTE $5BN IPO — RESERVES $50BN — STRONGEST MACRO', color: '#00c48c' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '+5', bond: '-0.3pts', fx: '-8.5%', signal: 'PETROL 52C CUT TODAY — DIESEL UP — GOLD $4,054', color: '#f5a623' },
    { country: 'GHANA', cds: 220, delta: '-20', bond: '+1.2pts', fx: '+10.8%', signal: 'GOLD $4,054 WINDFALL — IMF COMPLETE — BENCHMARK', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN EUROBOND — GAS PIPELINE — BENCHMARK', color: '#00c48c' },
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
    { date: 'Jul 6', NGN: 1370.00, GHS: 11.35, KES: 129.50, EGP: 52.22, ZAR: 16.41, UGX: 3660.00, ZMW: 19.02, XOF: 570.00 },
    { date: 'Jul 13', NGN: 1378.00, GHS: 11.42, KES: 129.48, EGP: 52.22, ZAR: 16.47, UGX: 3670.00, ZMW: 19.02, XOF: 572.00 },
    { date: 'Jul 16', NGN: 1378.00, GHS: 11.47, KES: 129.42, EGP: 52.22, ZAR: 16.40, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 18', NGN: 1378.00, GHS: 11.47, KES: 129.10, EGP: 52.22, ZAR: 16.03, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 20', NGN: 1377.96, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.48, UGX: 3674.80, ZMW: 19.02, XOF: 574.71 },
    { date: 'Jul 22', NGN: 1376.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.46, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 27', NGN: 1361.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.75, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 28', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 29', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 30', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Jul 31', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.62, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 1', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.52, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 3', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.55, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
    { date: 'Aug 5', NGN: 1363.00, GHS: 11.47, KES: 129.04, EGP: 52.22, ZAR: 16.55, UGX: 3674.80, ZMW: 19.02, XOF: 574.92 },
  ],
}
