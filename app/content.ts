export const content = {
  riskIndex: '82',
  riskStatus: 'ELEVATED',

  riskMonitor: {
    updated: 'August 3, 2026 09:00 UTC',
    overallScore: 82,
    trend: 'EASING',
    drivers: ['Zambia Election August 13 — 10 Days — Final Stretch Hichilema vs Mundubile', 'Zimbabwe Bracing For Anti-Constitutional Amendment Protests — Opposition Mobilising Against 2030 Extension', 'Commonwealth Games Concluded — Chad le Clos 21st Medal Most Decorated Athlete In Games History', 'SA $30bn Contradiction — Exports Goods To Africa Expels Her Citizens — Structural Economic Critique'],
    regions: [
      { region: 'East Africa', score: 88, trend: '→', color: '#f5a623' },
      { region: 'West Africa', score: 78, trend: '↓', color: '#f5a623' },
      { region: 'North Africa', score: 82, trend: '→', color: '#f5a623' },
      { region: 'Southern Africa', score: 82, trend: '→', color: '#f5a623' },
      { region: 'Central Africa', score: 98, trend: '→', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Zambia', flag: '🇿🇲', alert: 'ELECTION 10 DAYS — FINAL STRETCH. Hichilema (UPND, 15-party alliance) vs Mundubile (Tonse-Pamodzi Alliance). Hichilema macro case: inflation 24%→6.5%, $12bn mining investment, $6.5bn reserves, $13bn debt restructured. Mundubile counter: cost of living, 4 years power cuts, press freedom concerns — "big English" macro. ZANU-PF reportedly backing Mundubile after SADC SEOM 2021 episode. Market analysts: little threat to Hichilema. Copper at $6.42 provides fiscal support. ZMW -32.91% YTD. SADC SEOM deployed. Hichilema: "They will cry after August 13." Mundubile: promises to repeal cyber laws, give mines to youth.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'Zimbabwe', flag: '🇿🇼', alert: 'ANTI-CONSTITUTIONAL AMENDMENT PROTESTS IMMINENT. Zimbabwe is bracing for protests against the constitutional amendments that abolished direct presidential elections and extended Mnangagwa\'s term to 2030. Opposition parties have filed ConCourt applications. ZANU-PF Harare Province pushing extension to 2037. FDI surged to $965m per mid-term budget review — Finance Minister Ncube: "staying course on economic reforms." But the constitutional regression is accelerating in parallel with the economic positive signals. AU and Western governments have not formally condemned. The anti-amendment protests will be the first major democratic challenge to the Mnangagwa amendment since the National Assembly and Senate votes.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Uganda', flag: '🇺🇬', alert: 'KIZZA BESIGYE COLLAPSED IN COURT. Uganda opposition leader Kizza Besigye — who faces treason charges — reportedly collapsed in a Kampala court and is described as "unconscious" in hospital. Besigye has been in detention since his abduction from Nairobi in November 2024 and has faced deteriorating health conditions in custody. This is a major political signal in East Africa\'s most authoritarian-leaning democracy. Uganda is also managing: simultaneous Ebola (42-day countdown — last case June 21) and Marburg (isolated Kyegegwa case, no new contacts). Museveni government faces international pressure over Besigye\'s treatment.', severity: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'SA $30BN CONTRADICTION. The Africa Report published a major structural critique: South Africa exports $30bn in goods to African markets annually while simultaneously expelling the citizens of those markets. The critique — "Export goods to Africa, then expel her children" — captures the economic illogic of the xenophobia campaign viewed from a trade perspective. Gold at $4,054 provides structural fiscal support. ZAR at 16.55. December 31 year-end ultimatum live. Hormuz oil at $90+ will drive August fuel price increase. Commonwealth Games: SA finished strongly. Chad le Clos made history. Cultural boycott emerging from Tyla-Nigeria incident.', severity: 'HIGH', color: '#f5a623' },
    { country: 'DRC', flag: '🇨🇩', alert: 'Ebola remains the fastest-growing outbreak on record — 47 health zones across 5 provinces. Healthcare workers struck at Bunia treatment centre (last confirmed July 28). Uganda 42-day countdown to Ebola clear — last case June 21, target late August. DRC August 15 dialogue deadline in 12 days — C64 truce holding, red line: referendum bill enactment. Congo (Brazzaville) had a Mpox case confirmed recently — another hemorrhagic concern in the region. Kenya: northern frontier cross-border ambush reported — security concern.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'ZAMBIA 10 DAYS TO ELECTION — ZIMBABWE PROTESTS IMMINENT — BESIGYE COLLAPSED IN COURT — SA $30BN CONTRADICTION — CHAD LE CLOS 21ST MEDAL',
    body: 'August 3 — the first Monday of August, the continent\'s most consequential month of 2026. Zambia\'s election is 10 days away: Hichilema is favoured but Mundubile is mounting a credible final stretch on cost-of-living and power cuts, with ZANU-PF reportedly backing him. Zimbabwe is bracing for anti-constitutional amendment protests — the first major democratic challenge to Mnangagwa\'s 2030 extension since it was signed into law. Uganda opposition leader Kizza Besigye has collapsed in court and is hospitalised, in what is a deeply concerning signal about conditions in his detention. South Africa faces a $30bn structural contradiction — exporting goods to African markets while expelling the citizens of those same markets. The Commonwealth Games concluded with Chad le Clos becoming the most decorated athlete in Games history with 21 medals (7 gold, 5 silver, 9 bronze), a remarkable positive signal for South Africa at its most diplomatically stressed moment. ZAR at 16.55, gold at $4,054. DRC August 15 dialogue deadline in 12 days. Ebola Bunia healthcare workers struck. Hormuz Day 155 — oil at $90+ feeding into SA August fuel review.',
    tag: 'AUGUST 3 SIGNAL',
    color: '#f5a623',
    author: 'Lord Fiifi Quayle',
    date: 'August 3, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '380', fxPressure: 'LOW', liquidity: 'IMPROVING' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '220', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '192', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '185', fxPressure: 'LOW', liquidity: 'STABLE' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '380', fxPressure: 'HIGH', liquidity: 'TIGHT' },
    { country: 'Ivory Coast', flag: '🇨🇮', outlook: 'Positive', status: 'STABLE', statusColor: '#00c48c', cds: '180', fxPressure: 'LOW', liquidity: 'IMPROVING' },
  ],

  whatMattersNow: [
    { title: 'ZAMBIA 10 DAYS — HICHILEMA VS MUNDUBILE FINAL STRETCH — ZANU-PF BACKING OPPOSITION', body: 'Ten days to Zambia\'s August 13 election. Hichilema\'s UPND alliance (15 parties) anchors on macro stability. Mundubile\'s Tonse-Pamodzi Alliance runs on grassroots discontent. The latest development: ZANU-PF is reportedly backing Mundubile — an ideological statement against Hichilema who backed SADC SEOM\'s critical findings on Zimbabwe\'s 2023 election. This gives the Zambia election a regional dimension: Hichilema\'s re-election would validate democratic accountability in SADC. Mundubile\'s win would vindicate ZANU-PF\'s narrative. Market analysts see little threat to Hichilema\'s presidency — but the race is tighter than headline polling suggests.', icon: '🗳️' },
    { title: 'ZIMBABWE ANTI-AMENDMENT PROTESTS IMMINENT — OPPOSITION MOBILISING AGAINST 2030 EXTENSION', body: 'Zimbabwe is bracing for anti-constitutional amendment protests — the first major democratic mobilisation since the National Assembly and Senate voted to abolish direct presidential elections and extend Mnangagwa\'s term to 2030. Opposition parties (MDC-Alliance and others) have filed ConCourt applications and are now mobilising street protests. The protests arrive alongside: ZANU-PF Harare Province already pushing for 2037 extension; Zimbabwe\'s mid-term budget review showing FDI surging to $965m and Finance Minister Ncube vowing to "stay the course." The economic positive and the democratic regression are running in the same country simultaneously.', icon: '🔥' },
    { title: 'CHAD LE CLOS: 21ST MEDAL — MOST DECORATED ATHLETE IN COMMONWEALTH GAMES HISTORY', body: 'South African swimmer Chad le Clos became the most decorated athlete in Commonwealth Games history at Glasgow 2026, winning his 21st medal — a bronze in the men\'s 4x100m medley relay with Pieter Coetzé, Michael Houlie and Ruard van Renen. Le Clos surpassed Australian Emma McKeon\'s record of 20 medals. His Glasgow 2026 tally: silver (mixed 4x100 medley), bronze (men\'s 4x100 freestyle relay), bronze (men\'s 4x100 medley relay). Total career tally: 7 gold, 5 silver, 9 bronze across Delhi 2010, Glasgow 2014, Gold Coast 2018, Birmingham 2022 and Glasgow 2026. His record is a positive national signal for South Africa at its most diplomatically stressed moment — the Commonwealth Games soft power positive amid the xenophobia crisis.', icon: '🥇' },
    { title: 'SA $30BN CONTRADICTION — EXPORTS $30BN TO AFRICA, EXPELS HER CITIZENS', body: 'The Africa Report published a structural critique that captures the economic illogic of South Africa\'s xenophobia campaign from a trade perspective. South Africa exports approximately $30 billion in goods to African markets annually — its largest trading partners include Zimbabwe, Mozambique, Zambia, Nigeria and Ghana — the same countries whose citizens it is deporting in numbers exceeding 53,499 since June 14. The economic logic of trade interdependence and the political logic of migration management are in direct contradiction. The workers being deported are also the consumers of South African goods and the remittance senders who support communities in countries that buy South African exports. The $30bn contradiction is the structural argument that will outlast the December 31 ultimatum.', icon: '📊' },
  ],

  insight1: {
    title: 'ZIMBABWE\'S ANTI-AMENDMENT PROTESTS ARE THE MOST CONSEQUENTIAL DEMOCRATIC TEST IN SOUTHERN AFRICA SINCE ZAMBIA\'S 2021 ELECTION',
    body: 'When citizens mobilise to protest a constitutional amendment that abolished their right to directly elect their president, they are asserting the most fundamental democratic principle: that the people, not the legislature, are the source of executive legitimacy. Zimbabwe\'s opposition has filed ConCourt challenges and is now adding street mobilisation to the legal challenge. The ZANU-PF response will be the critical variable: if protests are suppressed with violence, Zimbabwe faces the same international condemnation pattern that preceded the November 2017 military coup against Mugabe. If protests proceed peacefully and the ConCourt considers the challenges seriously, Zimbabwe\'s democratic regression may be slowed. If the AU and Western governments continue to stay silent — as they have since the amendments were signed — they are effectively endorsing the precedent. The entire SADC democratic architecture depends on what happens in Zimbabwe in the coming weeks.',
    conclusion: 'ZIMBABWE\'S ANTI-AMENDMENT PROTESTS ARE THE MOST CONSEQUENTIAL DEMOCRATIC TEST IN SOUTHERN AFRICA SINCE ZAMBIA 2021. THE SUPPRESSION OR TOLERANCE OF THESE PROTESTS WILL DEFINE WHETHER THE SADC DEMOCRATIC ARCHITECTURE CAN SURVIVE THE ZIMBABWE PRECEDENT. AU AND WESTERN GOVERNMENT SILENCE IS THE ENABLING CONDITION FOR CONTINUED REGRESSION.',
  },

  insight2: {
    title: 'THE SA $30BN CONTRADICTION IS THE STRUCTURAL ARGUMENT THAT OUTLASTS THE XENOPHOBIA POLITICAL CYCLE',
    body: 'Political cycles of xenophobia — and South Africa has experienced several since 2008 — typically end when the immediate trigger event passes, the diplomatic pressure recedes, and economic life normalises. The $30bn contradiction identified by The Africa Report is different because it is structural. South Africa\'s economic integration with the African continent — through trade, investment, remittances, and people-to-people links — is deep and growing. The industries that produce the goods exported to African markets (mining, manufacturing, agriculture, financial services) depend on the labour, the consumers, and the business relationships that migration creates and sustains. Deporting 53,499 people in a month does not solve the unemployment problem that March and March mobilises around — because the formal and informal economic linkages those people represent are also being severed. The political logic of the campaign is comprehensible. The economic logic is self-defeating.',
    conclusion: 'THE SA $30BN CONTRADICTION CONFIRMS THAT THE XENOPHOBIA CAMPAIGN IS ECONOMICALLY SELF-DEFEATING IN THE MEDIUM TERM. POLITICAL CYCLES OF MIGRATION SUPPRESSION ALWAYS END — THE TRADE AND INVESTMENT INTERDEPENDENCE THAT MAKES THEM SELF-DEFEATING ALWAYS REMAINS. THE DECEMBER 31 ULTIMATUM WILL PASS; THE $30BN TRADE RELATIONSHIP WILL NOT.',
  },

  brief: {
    week: '32',
    title: 'WEEK 32 MONDAY AUGUST 3: ZAMBIA 10 DAYS, ZIMBABWE PROTESTS IMMINENT, BESIGYE COLLAPSED, SA $30BN CONTRADICTION, CHAD LE CLOS 21ST MEDAL',
    body: 'Week 32 opens with August\'s defining political events converging simultaneously. Zambia\'s election is 10 days away — Hichilema favoured, Mundubile mounting a credible final stretch with ZANU-PF backing. Zimbabwe is bracing for anti-constitutional amendment protests — the first major democratic challenge to Mnangagwa\'s 2030 extension. Uganda opposition leader Besigye collapsed in court. South Africa faces the structural $30bn trade contradiction — exporting to the same African markets it is expelling citizens from. The Commonwealth Games concluded with Chad le Clos making history as the most decorated athlete (21 medals). Gold at $4,054, ZAR at 16.55. Ebola at 47 DRC health zones. Uganda 42-day countdown. DRC August 15 dialogue deadline in 12 days. Nigeria reserves $50.12bn 17-year high. Hormuz Day 155 — oil at $90+ feeding SA August fuel review. The month that defines 2026\'s trajectory is underway.',
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
    { time: '09:30:00', signal: 'ZAMBIA ELECTION 10 DAYS. Hichilema (UPND) vs Mundubile (Tonse-Pamodzi). Hichilema macro case: inflation 6.5%, $12bn mining investment, $6.5bn reserves, debt restructured. Mundubile: cost of living, power cuts, press freedom. ZANU-PF reportedly backing Mundubile. Hichilema: "They will cry after August 13." SADC SEOM deployed. Market analysts: little threat to presidency. ZMW -32.91% YTD.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
    { time: '09:15:00', signal: 'ZIMBABWE: Bracing for anti-constitutional amendment protests. Opposition mobilising against 2030 extension and abolition of direct elections. ConCourt applications filed. ZANU-PF Harare pushing 2037. Mid-term budget: FDI $965m, staying course on reforms. Democratic regression and economic positive running simultaneously. First major democratic challenge since amendments signed.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'AFRICA' },
    { time: '09:00:00', signal: 'UGANDA: Kizza Besigye reportedly collapsed in court — described as "unconscious" in hospital. Faces treason charges, detained since abduction from Nairobi November 2024. Deteriorating health in custody. Major political signal in Uganda\'s authoritarian environment. Museveni government faces international pressure. Uganda also: Ebola 42-day countdown, Marburg isolated Kyegegwa case.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'UGX' },
    { time: '08:45:00', signal: 'SA $30BN CONTRADICTION (The Africa Report): SA exports $30bn in goods to African markets annually — Zimbabwe, Mozambique, Zambia, Nigeria, Ghana — same countries whose citizens are being deported. Economic integration vs political migration management in direct contradiction. Tyla removed Nigeria from world tour. Multi-nation Abuja diplomats meeting. December 31 ultimatum live. Weekly marches.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'COMMONWEALTH GAMES CONCLUDED — Glasgow 2026. Chad le Clos: 21st medal (bronze, men\'s 4x100m medley relay) — most decorated athlete in Games history, surpassing Emma McKeon\'s 20. 7 gold, 5 silver, 9 bronze across 5 editions (Delhi, Glasgow, Gold Coast, Birmingham, Glasgow). Peter Coetzé: backstroke sweep, Games and African record. South Africa: strong overall performance entering end of Games.', detail: 'LOW', type: 'INFO', tag: 'GEOPOLITICAL', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ebola DRC: fastest-growing outbreak on record — 47 health zones, 5 provinces. Bunia healthcare workers struck. Uganda 42-day countdown — last case June 21, target late August. DRC August 15 dialogue deadline — 12 days. C64 truce holding. Red line: referendum bill. Kenya northern frontier cross-border ambush. Somalia AUSSOM funding gap. Sudan genocide finding ICC leadership. Ethiopia TPLF conflict risk.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'AFRICA' },
    { time: '08:00:00', signal: 'Gold $4,054 (Aug 1 confirmed). ZAR 16.5488 (Investing.com confirmed). Hormuz Day 155 — US struck Iran July 30, IRGC hit tankers July 31, strait effectively closed. Oil $90+. SA August fuel review will drive petrol price increase — July 1 R2.01/litre relief substantially reversed. Nigeria reserves $50.12bn 17-year high. WAFCON 2026 ongoing. Senegal first African Olympic event October.', detail: 'MEDIUM', type: 'INFO', tag: 'MARKET FLOW', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX August 3: ZAR 16.5488 (Investing.com current) | NGN ~1,363 | GHS 11.47 | KES 129.04 | EGP 52.22 | ETB 158.50 | UGX 3,674.80 | TZS 2,624.00 | XOF 574.92 | ZMW 19.02. Gold $4,054 (Aug 1). UBS 2026 gold forecast: $5,200 target still stands. ZAR 52-week range: 15.6417 to 18.3681 — near middle of range. ZMW -32.91% YTD worst major African currency.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 68, fiscal: 50, fx: 38, debt: 52, political: 74, external: 68 },
    { country: 'Ghana', flag: '🇬🇭', score: 24, fiscal: 20, fx: 34, debt: 20, political: 26, external: 24 },
    { country: 'Kenya', flag: '🇰🇪', score: 68, fiscal: 64, fx: 52, debt: 70, political: 68, external: 66 },
    { country: 'Ethiopia', flag: '🇪🇹', score: 96, fiscal: 70, fx: 72, debt: 90, political: 99, external: 96 },
    { country: 'South Africa', flag: '🇿🇦', score: 76, fiscal: 58, fx: 44, debt: 60, political: 82, external: 74 },
    { country: 'Sudan', flag: '🇸🇩', score: 99, fiscal: 98, fx: 99, debt: 96, political: 99, external: 98 },
    { country: 'Zambia', flag: '🇿🇲', score: 84, fiscal: 68, fx: 94, debt: 76, political: 86, external: 80 },
    { country: 'Zimbabwe', flag: '🇿🇼', score: 96, fiscal: 72, fx: 82, debt: 80, political: 99, external: 88 },
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
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026 — 10 DAYS', type: 'General Election', risk: 'HIGH', note: 'Hichilema (UPND) vs Mundubile (Tonse-Pamodzi). ZANU-PF reportedly backing Mundubile. Hichilema favoured. Copper $6.42. ZMW -32.91% YTD. SADC SEOM deployed. Most consequential SADC election of 2026.', color: '#ff3b3b' },
    { country: 'DRC', flag: '🇨🇩', date: 'August 15 Dialogue Deadline — 12 Days', type: 'Constitutional Crisis', risk: 'HIGH', note: 'C64 truce until August 15. Tshisekedi dialogue. Ebola Bunia healthcare workers struck. Red line: referendum bill. 12 days.', color: '#f5a623' },
    { country: 'Zimbabwe', flag: '🇿🇼', date: 'Anti-Amendment Protests Imminent', type: 'Constitutional Amendment', risk: 'CRITICAL', note: 'Bracing for anti-amendment protests. ZANU-PF Harare pushing 2037. ConCourt challenges filed. Mid-term budget: FDI $965m. Democratic regression + economic positive running simultaneously.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026 — $30bn Contradiction', type: 'Municipal Elections', risk: 'HIGH', note: '$30bn trade contradiction — exports to markets it expels citizens from. Tyla Nigeria boycott. December 31 ultimatum. Weekly marches. Gold $4,054 fiscal buffer. Hormuz August fuel pressure. Commonwealth Games success.', color: '#f5a623' },
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Open Conflict Warning — TPLF Live', type: 'General Election', risk: 'CRITICAL', note: 'Opposition warns July 22: steering Tigray to open conflict. US TPLF visa restrictions. Hundreds displaced. War risk materialising.', color: '#ff3b3b' },
    { country: 'Uganda', flag: '🇺🇬', date: 'Besigye Hospitalised — Ebola Countdown', type: 'Political Crisis', risk: 'HIGH', note: 'Kizza Besigye collapsed in court — unconscious in hospital. Faces treason charges since Nairobi abduction November 2024. Ebola 42-day countdown. Marburg isolated case.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'AUSSOM Finished — Turkish Renewal Being Considered', type: 'Constitutional Crisis', risk: 'CRITICAL', note: 'AUSSOM US funding ended. Al-Shabaab positioned. Erdogan considering 2-year Turkish Somalia mandate renewal. Constitutional crisis: Mohamud vs opposition.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Ethiopia', flag: '🇪🇹', amount: '$1.0bn', instrument: 'Eurobond 6.625%', maturity: 'Defaulted — Ad Hoc Committee — War Risk Escalating', risk: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', amount: 'PAID EARLY — €53.75m + $38.8m', instrument: 'Bond Coupons', maturity: 'IMF Q3 2026 — FAYE-SONKO CONSTITUTIONAL RISK', risk: 'HIGH', color: '#f5a623' },
    { country: 'Zambia', flag: '🇿🇲', amount: 'Post-Restructuring', instrument: 'Bilateral + Eurobond', maturity: 'Election August 13 — 10 DAYS', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'Angola', flag: '🇦🇴', amount: '$1.8bn', instrument: 'Eurobond', maturity: 'Q3 2026 — OIL $90+ POSITIVE', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Egypt', flag: '🇪🇬', amount: '$1.4bn', instrument: 'IMF Repurchase', maturity: 'Q3 2026', risk: 'HIGH', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', amount: '$2.2bn', instrument: 'Domestic Bond Rollovers', maturity: 'Q3 2026', risk: 'MEDIUM', color: '#f5a623' },
    { country: 'Ivory Coast', flag: '🇨🇮', amount: '$1.3bn', instrument: 'Eurobond 5.39% 15yr', maturity: 'ISSUED — BENCHMARK CREDIT', risk: 'LOW', color: '#00c48c' },
    { country: 'Ghana', flag: '🇬🇭', amount: '$0.8bn', instrument: 'Post-Restructuring Bilateral', maturity: 'Q3-Q4 2026', risk: 'LOW', color: '#00c48c' },
  ],

  commodityExposure: [
    { country: 'Nigeria', flag: '🇳🇬', primary: 'Oil/Gas', exposure: 'HIGH', gdpShare: '8%', revenueShare: '65%', price2026: '$90+', fiscalBreakeven: '$92/bbl', breakevenNote: 'NEAR BREAKEVEN — RESERVES $50BN 17YR HIGH', trend: '↑', risk: 'MEDIUM' },
    { country: 'Angola', flag: '🇦🇴', primary: 'Oil', exposure: 'VERY HIGH', gdpShare: '45%', revenueShare: '80%', price2026: '$90+', fiscalBreakeven: '$78/bbl', breakevenNote: 'WELL ABOVE BREAKEVEN — OIL POSITIVE', trend: '↑', risk: 'LOW' },
    { country: 'Ghana', flag: '🇬🇭', primary: 'Gold/Oil/Cocoa', exposure: 'MEDIUM', gdpShare: '15%', revenueShare: '35%', price2026: '$4,054/oz', fiscalBreakeven: '$1,800/oz', breakevenNote: 'NEAR ATH — ENORMOUS FISCAL BUFFER', trend: '↑', risk: 'LOW' },
    { country: 'Zambia', flag: '🇿🇲', primary: 'Copper', exposure: 'VERY HIGH', gdpShare: '12%', revenueShare: '70%', price2026: '$6.42/lb', fiscalBreakeven: '$5.50/lb', breakevenNote: 'ABOVE BREAKEVEN — ELECTION RISK', trend: '↑', risk: 'MEDIUM' },
    { country: 'South Africa', flag: '🇿🇦', primary: 'Gold/Platinum', exposure: 'HIGH', gdpShare: '8%', revenueShare: '40%', price2026: '$4,054/oz', fiscalBreakeven: '$1,600/oz', breakevenNote: 'NEAR ATH — HORMUZ OIL PRESSURE AUG', trend: '↑', risk: 'LOW' },
    { country: 'Zimbabwe', flag: '🇿🇼', primary: 'Gold/Platinum/Lithium', exposure: 'HIGH', gdpShare: '15%', revenueShare: '40%', price2026: '$4,054/oz', fiscalBreakeven: 'N/A', breakevenNote: 'GOLD ATH + FDI $965M — AMENDMENT PROTESTS', trend: '↑', risk: 'HIGH' },
    { country: 'Morocco', flag: '🇲🇦', primary: 'Phosphates/Tourism', exposure: 'MEDIUM', gdpShare: '8%', revenueShare: '25%', price2026: 'Stable', fiscalBreakeven: 'N/A', breakevenNote: 'WAFCON + 2030 WC + GAS PIPELINE + CAPE REROUTING', trend: '↑', risk: 'LOW' },
  ],

  riskTable: [
    { country: 'ZAMBIA', cds: 380, delta: '+20', bond: '-1.0pts', fx: '-32.9%', signal: 'ELECTION 10 DAYS — FINAL STRETCH — ZANU-PF BACKING OPP', color: '#ff3b3b' },
    { country: 'ZIMBABWE', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'ANTI-AMENDMENT PROTESTS IMMINENT — 2030 CHALLENGED', color: '#ff3b3b' },
    { country: 'DRC', cds: 0, delta: 'N/A', bond: 'N/A', fx: 'N/A', signal: 'EBOLA FASTEST-GROWING — BUNIA STRIKE — AUG 15 DEADLINE', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 185, delta: '+5', bond: '-0.3pts', fx: '-8.5%', signal: '$30BN CONTRADICTION — CHAD LE CLOS 21ST MEDAL', color: '#f5a623' },
    { country: 'ETHIOPIA', cds: 520, delta: '+65', bond: '-3.3pts', fx: '-0.9%', signal: 'OPEN CONFLICT WARNING — TPLF WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 380, delta: '-35', bond: '+1.5pts', fx: '-13.7%', signal: 'RESERVES $50BN — $30BN SA TRADE CONTRADICTION', color: '#00c48c' },
    { country: 'GHANA', cds: 220, delta: '-20', bond: '+1.2pts', fx: '+10.8%', signal: 'LGBTQ+ BILL — GOLD $4,054 WINDFALL — IMF COMPLETE', color: '#f5a623' },
    { country: 'IVORY COAST', cds: 180, delta: '-25', bond: '+1.5pts', fx: '+1.2%', signal: '$1.3BN EUROBOND — GAS PIPELINE — WAFCON ADVANCING', color: '#00c48c' },
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
  ],
}
