export const content = {
  riskIndex: '99',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'June 4, 2026 21:00 UTC',
    overallScore: 99,
    trend: 'WORSENING',
    drivers: ['Oxford Economics: Senegal Sovereign Spreads Now In Venezuela/Lebanon Category', 'Ruto-Ramaphosa Summit — SA Dispatching Diplomatic Envoys — Ramaphosa Rejects Xenophobia Label', 'Spain Bans DRC World Cup Warm-Up vs Chile — Ebola Reaches European Football', 'FOUR Nations Now Repatriating Citizens From SA — Malawi Joins Ghana Nigeria Mozambique'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 96, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 99, trend: '↑', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Senegal', flag: '🇸🇳', alert: 'OXFORD ECONOMICS: "Sovereign spreads propel Senegal into the category of Venezuela and Lebanon." June 4 report questions whether Senegal can still convince markets it controls its financial trajectory. 3 days to June 8 — IMF visit + €53.75m coupon. $38.75m due June 10. JPMorgan: 15% haircut + 5yr extension + 75% coupon priced. $9.7bn obligations this year. Bonds at 50.6c. Sonko blocks Faye government. No IMF re-engagement path. Default window Q4 2026–Q1 2027.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'Ruto-Ramaphosa summit at Union Buildings June 4 — SA to dispatch diplomatic envoys to Africa and globally following xenophobic attacks. Ramaphosa rejected xenophobia label: "South Africans are not xenophobic. South Africans are Africans." Four nations now repatriating citizens: Ghana (297 flown), Mozambique (545 bused), Nigeria (2,000-4,000 planned), Malawi (announced). Nigeria warned against retaliatory attacks on SA businesses — previous incidents saw SA-owned stores looted in Nigeria. June 30: 25 days.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'Spain bans DRC World Cup warm-up vs Chile in La Línea de la Concepción — mayor Juan Franco signed decree citing Ebola fears and Andalusia health service recommendations. DRC coach Desabre offered to play behind closed doors. Ebola has now reached European football governance. DRC based in Belgium — isolation bubble intact. First game vs Portugal Houston June 17. 321 confirmed cases, no vaccine, no treatment.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'Post-election war window live — 6 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion in violation of Pretoria Agreement. Ruto-Ramaphosa summit in Pretoria signals continental diplomatic recalibration — Horn of Africa stability implications. All major analysts: post-election TPLF military operations expected. Most dangerous Horn window since November 2020.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'Ruto on three-day SA state visit June 3-5 — met Kenyan diaspora in SA over xenophobia concerns. KEDASA: no mass repatriation needed yet but government must remain alert. Finance Bill 2026 due June 30 — Gen-Z ghost building. US-Kenya strained. Eurobond Q2 rollover critical. KES at 129.53.', severity: 'HIGH', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'OXFORD ECONOMICS PUTS SENEGAL IN VENEZUELA/LEBANON CATEGORY — RUTO-RAMAPHOSA SUMMIT — SPAIN BANS DRC WORLD CUP MATCH — FOUR NATIONS EVACUATING FROM SA',
    body: 'June 4-5 delivers the most significant 48 hours in African sovereign risk this cycle. Oxford Economics has placed Senegal in the category of Venezuela and Lebanon by sovereign spreads — the most damning independent analytical verdict yet, published three days before the IMF arrives in Dakar with a €53.75m coupon due. Ruto met Ramaphosa at the Union Buildings on June 4 — South Africa announced it will dispatch diplomatic envoys to Africa and globally following the xenophobic attacks. Ramaphosa rejected the xenophobia label directly: "South Africans are not xenophobic." But four nations are now simultaneously repatriating citizens — Ghana (297 flown), Mozambique (545 bused), Nigeria (2,000-4,000 planned), Malawi (announced). Nigeria separately warned against retaliatory attacks on South African businesses. The Spanish mayor of La Línea banned DRC\'s World Cup warm-up match against Chile on June 9 — Ebola has now entered European football governance. DRC coach Desabre offered to play behind closed doors. The macro risk environment is now at its maximum point in the current cycle.',
    tag: 'JUNE 4-5 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'June 4, 2026',
  },

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '232', fxPressure: 'MODERATE', liquidity: 'STABLE' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'TIGHT' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '568', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '198', fxPressure: 'LOW', liquidity: 'TIGHT' },
    { country: 'Senegal', flag: '🇸🇳', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '950', fxPressure: 'HIGH', liquidity: 'TIGHT' },
  ],

  whatMattersNow: [
    { title: 'OXFORD ECONOMICS: SENEGAL SOVEREIGN SPREADS IN VENEZUELA/LEBANON CATEGORY', body: 'Oxford Economics June 4 report: "sovereign spreads propel Senegal into the category of Venezuela and Lebanon." The question is no longer whether Senegal can pay its June coupons — it is whether markets believe it controls its financial trajectory. Bloomberg data shows investors have lost 9.7% on Senegal bonds in three months. The JPMorgan restructuring model (15% haircut + 5yr extension + 75% coupon) is the market consensus. Morgan Stanley and Oxford Economics have now joined JPMorgan in explicitly pricing distress. 3 days to June 8 IMF visit. The visit is a diagnostic, not a rescue.', icon: '🚨' },
    { title: 'RUTO-RAMAPHOSA SUMMIT — SA DISPATCHING DIPLOMATIC ENVOYS — FOUR NATIONS EVACUATING', body: 'Ramaphosa told Ruto at the Union Buildings: SA will dispatch diplomatic envoys to Africa and globally following xenophobic attacks. Ramaphosa rejected xenophobia label — described challenge as continental migration issue requiring African-led solutions. Ruto: "Part of South Africa\'s challenge is that it is much more developed — it will always attract migration." Four nations now repatriating: Ghana 297 flown, Mozambique 545 bused, Nigeria 2,000-4,000 planned flights, Malawi announced. Nigeria warned against retaliatory attacks on SA businesses. June 30: 25 days.', icon: '🔥' },
    { title: 'SPAIN BANS DRC WORLD CUP WARM-UP — EBOLA REACHES EUROPEAN FOOTBALL GOVERNANCE', body: 'Mayor Juan Franco of La Línea de la Concepción signed decree banning DRC vs Chile June 9 match — citing Ebola fears and Andalusia health service recommendations. La Línea is a 10,000-capacity stadium near Gibraltar. DRC coach Desabre offered to play behind closed doors — no response yet. DRC played vs Denmark in Liege, Belgium June 3 — that match went ahead. The warm-up ban is the clearest signal yet that Ebola has embedded itself into European institutional decision-making about African nations.', icon: '⚽' },
    { title: 'MALAWI JOINS FOUR-NATION SA REPATRIATION — NIGERIA WARNS AGAINST REPRISALS', body: 'Malawi Foreign Affairs Ministry announced repatriation of citizens seeking to leave SA — road transport being arranged. Nigeria separately warned against retaliatory attacks on South African businesses: "previous outbreaks triggered diplomatic tensions and attacks on SA-owned stores." Nigeria is arranging flights for 2,000-4,000 nationals. Ghana processed over 800 at OR Tambo. Mozambique bused 545. The multi-nation repatriation operation is the largest coordinated African diplomatic response to xenophobia since 2019. June 30: 25 days.', icon: '🌍' },
  ],

  insight1: {
    title: 'OXFORD ECONOMICS PUTTING SENEGAL IN THE VENEZUELA/LEBANON CATEGORY IS THE TERMINAL ANALYTICAL VERDICT',
    body: 'Venezuela and Lebanon are the two most famous sovereign default cases of the past decade. Venezuela defaulted on $60bn+ of bonds in 2017. Lebanon defaulted in 2020 and has not restructured. Oxford Economics placing Senegal\'s sovereign spreads in this category is not a warning — it is a classification. The June 8 IMF visit arrives with this assessment on the table. The fund will be assessing whether the new PM Lo can deliver the fuel subsidy reform that Sonko\'s legislature controls. The answer — structurally — is no. Sonko has declared Pastef will not join the government. The legislature is in permanent opposition to the executive from within the same party. JPMorgan, Morgan Stanley and Oxford Economics are now all explicitly pricing restructuring. The only question is whether the IMF visit produces a credible roadmap that moves the needle. History with Venezuela and Lebanon suggests it will not.',
    conclusion: 'OXFORD ECONOMICS\' VENEZUELA/LEBANON CLASSIFICATION IS THE TERMINAL ANALYTICAL VERDICT ON SENEGAL. THE IMF VISIT IN 3 DAYS IS A DIAGNOSTIC. DEFAULT OR RESTRUCTURING IN Q4 2026 REMAINS THE BASE CASE.',
  },

  insight2: {
    title: 'THE RUTO-RAMAPHOSA SUMMIT IS THE MOST SIGNIFICANT BILATERAL ENGAGEMENT ON THE CONTINENT THIS YEAR',
    body: 'Ruto\'s three-day state visit to South Africa — in the middle of a xenophobia crisis that directly affects Kenyan nationals — is the highest-stakes bilateral engagement in Africa in 2026. The two largest economies in Sub-Saharan Africa are managing simultaneously: a xenophobia crisis affecting multiple SADC/EAC nations; a Kenyan Finance Bill that triggers June 30 in the same week as South Africa\'s xenophobia deadline; a US-Africa disengagement that both countries must navigate; and now SA dispatching diplomatic envoys globally. Ramaphosa\'s rejection of the xenophobia label and framing as a continental migration challenge is a diplomatic move — but it does not address the June 30 countdown. Ruto meeting the Kenyan diaspora in SA during the visit is the human dimension of the continental political architecture breaking down.',
    conclusion: 'THE RUTO-RAMAPHOSA SUMMIT SIGNALS THAT SOUTH AFRICA IS MOVING TO MANAGE THE XENOPHOBIA CRISIS THROUGH CONTINENTAL DIPLOMACY RATHER THAN DOMESTIC ENFORCEMENT. THAT STRATEGY HAS 25 DAYS TO WORK BEFORE JUNE 30.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23 CLOSE: OXFORD ECONOMICS SENEGAL = VENEZUELA/LEBANON, RUTO-RAMAPHOSA SUMMIT, SPAIN BANS DRC MATCH, FOUR NATIONS EVACUATING SA',
    body: 'Week 23 closes on the most consequential 48 hours in African sovereign risk this decade. Oxford Economics has placed Senegal in the Venezuela/Lebanon spread category — three days before the IMF arrives in Dakar with €53.75m coupon due. Ruto met Ramaphosa at the Union Buildings — SA announcing diplomatic envoys, Ramaphosa rejecting the xenophobia label, four nations (Ghana, Mozambique, Nigeria, Malawi) simultaneously evacuating citizens. Spain banned DRC\'s World Cup warm-up match vs Chile — Ebola has entered European football governance. Nigeria warned against retaliatory attacks on SA businesses. Ethiopia\'s post-election war window is live with 6 days to June 11 results. June 30 is 25 days away with two movements, a xenophobia crisis, a petrol hike, a household debt emergency and a presidential impeachment panel all simultaneously active. Ghana\'s fundamentals remain intact — the continental benchmark as everything else reaches maximum stress.',
  },

  fxRates: {
    NGN: '1,364.68',
    GHS: '11.75',
    KES: '129.53',
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
    { time: '09:30:00', signal: 'Oxford Economics June 4: "Sovereign spreads propel Senegal into the category of Venezuela and Lebanon." 3 days to IMF visit + €53.75m coupon. $38.75m June 10. JPMorgan, Morgan Stanley, Oxford Economics all pricing restructuring. 2033 bonds at 50.6c. $9.7bn obligations this year. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '09:15:00', signal: 'Ruto-Ramaphosa summit at Union Buildings June 4. SA to dispatch diplomatic envoys globally following xenophobic attacks. Ramaphosa: "South Africans are not xenophobic." Four nations evacuating: Ghana 297, Mozambique 545, Nigeria 2,000-4,000, Malawi announced. Nigeria warns against retaliatory attacks on SA businesses. June 30: 25 days.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '09:00:00', signal: 'Spain bans DRC World Cup warm-up vs Chile — mayor Franco signed decree, citing Ebola fears and Andalusia health service recommendations. La Línea de la Concepción near Gibraltar. DRC coach Desabre offered behind-closed-doors match. Ebola now embedded in European football governance decisions.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:45:00', signal: 'Ethiopia: Post-election war window — 6 days to June 11 results. PP sweep confirmed. TPLF reinstated Debretsion. Ruto-Ramaphosa continental diplomacy signal. All analysts: post-election TPLF operations expected. Egypt, UAE, Saudi, Turkey, Israel positioning. Most dangerous Horn window since 2020.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '08:30:00', signal: 'Malawi joins repatriation — MFA statement confirms nationals wanting to leave SA will receive assistance. Road transport being arranged. Ghana processed 800+ at OR Tambo. Mozambique bused 545. Multi-nation repatriation is largest coordinated African diplomatic response to xenophobia since 2019.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:15:00', signal: 'Ruto met Kenyan diaspora in SA (KEDASA) during state visit — no mass repatriation needed yet but government must stay alert. No Kenyans hurt in xenophobia chaos so far. Finance Bill due June 30 — Gen-Z ghost. KES at 129.53. Eurobond Q2 rollover critical.', detail: 'MEDIUM', type: 'INFO', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '08:00:00', signal: 'DRC Leopards played vs Denmark in Liege June 3 — Belgium match went ahead. Chile warm-up June 9 in Spain now banned. Isolation bubble intact — arrive Houston June 11. First game vs Portugal June 17. Fans still banned from US travel. Ebola has restructured Africa\'s entire World Cup presence.', detail: 'MEDIUM', type: 'INFO', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '07:45:00', signal: 'LIVE FX June 4: NGN 1,364.68 | GHS 11.75 | KES 129.53 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. All rates stable vs yesterday. ZAR holding at 16.30 despite SA at maximum political stress — dollar weakness structural support persists. Senegal XOF pegged, spread risk is bond not FX.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 44, fiscal: 38, fx: 50, debt: 40, political: 34, external: 44 },
    { country: 'Kenya', flag: '🇰🇪', score: 94, fiscal: 84, fx: 74, debt: 90, political: 99, external: 96 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 99, fiscal: 78, fx: 46, debt: 72, political: 99, external: 96 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
    { country: 'Mali', flag: '🇲🇱', score: 96, fiscal: 88, fx: 85, debt: 85, political: 99, external: 92 },
    { country: 'Uganda', flag: '🇺🇬', score: 94, fiscal: 70, fx: 78, debt: 74, political: 68, external: 99 },
  ],

  currencyStress: [
    { code: 'NGN', country: 'Nigeria', rate: '1,364.68', change: '-13.34%', stress: 'MODERATE', ytd: '-3.50%', color: '#f5a623' },
    { code: 'GHS', country: 'Ghana', rate: '11.75', change: '+9.81%', stress: 'MODERATE', ytd: '+6.53%', color: '#f5a623' },
    { code: 'KES', country: 'Kenya', rate: '129.53', change: '+0.31%', stress: 'ELEVATED', ytd: '-0.98%', color: '#ff3b3b' },
    { code: 'EGP', country: 'Egypt', rate: '52.22', change: '-4.32%', stress: 'HIGH', ytd: '-4.51%', color: '#ff3b3b' },
    { code: 'ZAR', country: 'South Africa', rate: '16.30', change: '+3.52%', stress: 'MODERATE', ytd: '+3.52%', color: '#f5a623' },
    { code: 'UGX', country: 'Uganda', rate: '3,770.00', change: '-1.62%', stress: 'ELEVATED', ytd: '-4.80%', color: '#ff3b3b' },
    { code: 'ZMW', country: 'Zambia', rate: '19.02', change: '-32.91%', stress: 'HIGH', ytd: '-32.91%', color: '#ff3b3b' },
    { code: 'XOF', country: 'Mali/Senegal', rate: '615.00', change: '-0.82%', stress: 'HIGH', ytd: '-0.82%', color: '#ff3b3b' },
  ],

  elections: [
    { country: 'Ethiopia', flag: '🇪🇹', date: 'Voted June 1 — Results June 11', type: 'General Election', risk: 'CRITICAL', note: 'PP sweep confirmed. Tigray excluded. TPLF reinstated Debretsion. Post-election war window LIVE — 6 days. Ruto-Ramaphosa summit adds continental diplomatic context. All analysts: TPLF operations expected.', color: '#ff3b3b' },
    { country: 'Guinea', flag: '🇬🇳', date: 'June 1 — Results Pending', type: 'Parliamentary + Municipal', risk: 'HIGH', note: '40 opposition parties dissolved. Boycotted. Doumbouya allies expected to sweep. Democratic legitimacy void.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Parallel government threat. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 25 days. Four nations evacuating. Ruto-Ramaphosa summit. Diplomatic envoys announced. Ramaphosa rejects xenophobia label. Household debt crisis. GNU at maximum stress.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP activity. Warning issued against SA reprisals. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Ruto on SA state visit. Finance Bill June 30. KEDASA meeting. US-Kenya strained. Eurobond Q2 rollover. Five simultaneous crises.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 3 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'VENEZUELA/LEBANON CATEGORY — IMF 3 DAYS', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+45', bond: '-2.3pts', fx: '+3.5%', signal: 'RUTO-RAMAPHOSA SUMMIT — 4 NATIONS EVACUATING', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+48', bond: '-2.4pts', fx: '-0.3%', signal: 'RUTO SA VISIT — FINANCE BILL JUNE 30', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'POST-ELECTION WAR WINDOW — 6 DAYS', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'SA REPRISAL WARNING ISSUED', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-5', bond: '+0.6pts', fx: '+6.5%', signal: 'GHS STABILISING — BENCHMARK', color: '#f5a623' },
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
    { date: 'Jun 3', NGN: 1364.68, GHS: 11.75, KES: 129.41, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
    { date: 'Jun 4', NGN: 1364.68, GHS: 11.75, KES: 129.53, EGP: 52.22, ZAR: 16.30, UGX: 3770, ZMW: 19.02, XOF: 615 },
  ],
}
