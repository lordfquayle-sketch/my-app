export const content = {
  riskIndex: '97',
  riskStatus: 'CRITICAL',

  riskMonitor: {
    updated: 'May 31, 2026 09:00 UTC',
    overallScore: 97,
    trend: 'WORSENING',
    drivers: ['Ethiopia Voting TODAY — Post-Election War Risk Live', 'Kenya Court Blocks US Ebola Facility — US-Kenya Relations Strained', 'JPMorgan: Markets Pricing 15% Haircut + 5yr Extension on Senegal Bonds', 'India-Africa Summit Closes — Ebola Dominated Agenda'],
    regions: [
      { region: 'East Africa', score: 98, trend: '↑', color: '#ff3b3b' },
      { region: 'West Africa', score: 94, trend: '↑', color: '#ff3b3b' },
      { region: 'North Africa', score: 72, trend: '→', color: '#ff3b3b' },
      { region: 'Southern Africa', score: 96, trend: '→', color: '#ff3b3b' },
      { region: 'Central Africa', score: 99, trend: '↑', color: '#ff3b3b' },
    ]
  },

  sovereignAlerts: [
    { country: 'Ethiopia', flag: '🇪🇹', alert: 'VOTING TODAY. Abiy\'s PP expected to sweep — held 485/502 seats in 2021. Results expected by June 11. Tigray excluded — 38 districts, TPLF reinstated Debretsion. Tigray, Amhara, Oromia all unstable. Expert Kjetil Tronvoll: "polls are primarily a symbolic exercise to confer legitimacy on the incumbent." Abiy expected to go to war with Tigray after election as in 2020. Egypt, UAE, Saudi, Turkey, Israel all positioning for post-election influence.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', alert: 'High Court Judge Patricia Nyaundi suspended US Ebola quarantine facility plan Friday — citing threat to life. Court issued halt on the day US officials said facility would begin operating. Kenyan doctors union "utterly disgusted." CDC officials strongly recommended AGAINST the plan — "furious" it will harm Ebola response staffing. US committing $13.5m to Kenya Ebola preparedness. Finance Bill 2026 hearings continue — June 30 deadline. Eurobond Q2 rollover critical.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'Senegal', flag: '🇸🇳', alert: 'JPMorgan: markets pricing 15% nominal haircut + 5-year maturity extension + coupon reduction to 75% of current level on 2033 bonds. "Increased likelihood of more adverse scenario." 8 days to June 8 IMF visit + €53.75m coupon. $38.75m due June 10. PM Lo declared "state of emergency." Debt 132% GDP. Sonko controls legislature 130/165. Morgan Stanley and JPMorgan both pricing restructuring.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'DRC/Uganda', flag: '🇨🇩', alert: 'MSF May 30: 125 confirmed cases (8 confirmed deaths), 906 suspected (223 deaths) as of May 29. Bundibugyo — 17th DRC Ebola outbreak since 1976. First cases started well before reporting — lack of surveillance caused delay. Health workers with "scant supplies" struggling to contain. Tedros in DRC. Uganda closed border. Italy scare tested negative. ECDC: EU/EEA risk very low. India-Africa Summit reaffirmed Ebola cooperation with Africa CDC.', severity: 'CRITICAL', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', alert: 'KZN trucking shutdown yesterday — N2/N3 blocked. Woolworths Menlyn Mall bombed May 28. TWO movements for June 30: March and March + ATDF-ASA. 30 days to zero hour. KZN: 4,722 undocumented foreign nationals arrested since Jan 1. GNU has no viable compliance option. SANDF deployment warning issued. Municipal elections fall 2026.', severity: 'CRITICAL', color: '#ff3b3b' },
  ],

  featuredSignal: {
    title: 'ETHIOPIA VOTES TODAY — KENYA COURT BLOCKS US EBOLA FACILITY — JPMORGAN PRICES 15% SENEGAL HAIRCUT — MAY 31 IS THE CONTINENT\'S MOST CONSEQUENTIAL DAY THIS YEAR',
    body: 'May 31 delivers the highest single-day density of consequential African sovereign risk events in this cycle. Ethiopia is voting today — Abiy\'s landslide is certain, but the 72 hours that follow are the most dangerous in the Horn since November 2020. Kenya\'s High Court blocked the US Ebola quarantine facility plan on Friday — on the very day it was due to begin operating — after a backlash from doctors, activists and CDC officials who were themselves furious at the plan. The ruling strains US-Kenya relations at the worst possible moment: Kenya needs US goodwill for Eurobond rollover and IMF positioning, while the Finance Bill Gen-Z deadline approaches. In Senegal, JPMorgan has now quantified what the bond market is pricing: a 15% nominal haircut, a 5-year maturity extension, and a coupon cut to 75% of current levels on the 2033 bonds. Both JPMorgan and Morgan Stanley are now explicitly pricing restructuring — 8 days before the IMF visits Dakar with a €53.75m coupon due. The India-Africa Forum Summit IV closes in New Delhi today, with Ebola dominating the health agenda and India committing to Africa CDC support. South Africa has 30 days to June 30 with two movements, a bombed retailer, and no compliance option.',
    tag: 'MAY 31 CRITICAL SIGNAL',
    color: '#ff3b3b',
    author: 'Lord Fiifi Quayle',
    date: 'May 31, 2026',
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
    { title: 'ETHIOPIA VOTING TODAY — RESULTS JUNE 11 — POST-ELECTION WAR WINDOW OPENS', body: 'Ethiopia\'s 7th general election underway today. Abiy\'s Prosperity Party expected to dominate — held 485/502 seats in 2021, took 96% of seats. Results expected June 11. Tigray excluded. TPLF reinstated Debretsion as regional president. Al Jazeera expert Kjetil Tronvoll: "polls are primarily a symbolic exercise to confer legitimacy on the incumbent." Government projects 10%+ economic growth for 2026 — but Tigray, Amhara, Oromia all unstable. Post-election war window opens today and runs through June 11 results. Egypt, UAE, Saudi, Turkey, Israel all positioning for post-election Horn influence.', icon: '⚔️' },
    { title: 'KENYA COURT BLOCKS US EBOLA FACILITY — CDC OFFICIALS FURIOUS — US-KENYA RELATIONS STRAINED', body: 'High Court Judge Patricia Nyaundi suspended Trump administration plan on Friday — the day it was due to begin operating — citing threat to life. Kenyan doctors union: "utterly disgusted by the government\'s willingness to trade national biosecurity for foreign aid." Law Society of Kenya opposed. CDC acting director Dr Bhattacharya reportedly advised against it. CDC source: some officers "furious" — plan will make Ebola response staffing harder. US committing $13.5m to Kenya Ebola preparedness. Case goes back to court next week. US-Kenya relations strained heading into Finance Bill and Eurobond rollover period.', icon: '🚨' },
    { title: 'JPMORGAN PRICES 15% HAIRCUT ON SENEGAL 2033 BONDS — 8 DAYS TO IMF VISIT', body: 'JPMorgan analysts: current market pricing on Senegal 2033 bonds implies a 5-year maturity extension, coupon rate reduction to 75% of current level, and 15% nominal haircut. Both JPMorgan and Morgan Stanley now explicitly pricing restructuring. 2033 dollar bonds at record low 50.6 cents. 8 days to June 8 — IMF visit + €53.75m coupon. $38.75m due June 10. PM Lo declared "state of emergency." Sonko controls legislature. Barclays: IMF requires fuel subsidy removal. Default window: Q4 2026–Q1 2027.', icon: '🔴' },
    { title: 'INDIA-AFRICA SUMMIT IV CLOSES TODAY — EBOLA DOMINATED HEALTH AGENDA', body: 'India-Africa Forum Summit IV closes in New Delhi today. AU joint press release confirmed: "both sides exchanged views on the evolving health situation in parts of Africa" — Ebola the dominant health agenda item. India reaffirmed solidarity and readiness to contribute to Africa CDC-led Ebola response. India has $80bn cumulative Africa investment since 1996. Key partners: Nigeria, South Africa, Angola, Egypt, Kenya, Senegal. Summit positioned India as an alternative multilateral partner as Western engagement weakens on the continent.', icon: '🌍' },
  ],

  insight1: {
    title: 'THE KENYA COURT RULING IS A GOVERNANCE SIGNAL THAT COMPOUNDS THE FINANCE BILL AND EUROBOND RISK',
    body: 'Kenya\'s High Court blocking the US Ebola facility on the day it was due to begin operating is not just a health story — it is a governance and US-Kenya relations story that arrives at the worst possible moment. Kenya needs US goodwill for IMF positioning, Eurobond rollover mechanics, and diplomatic cover as the Finance Bill Gen-Z deadline approaches. The CDC\'s own officials opposed the plan. The Kenyan doctors\' union called it a biosecurity trade-off for foreign aid. The Law Society challenged it constitutionally. The ruling confirms that Kenya\'s institutions can and will push back against executive decisions made without public consultation — the same dynamic that produced the 2024 Finance Bill parliament storming. The Finance Bill 2026 hearings are live. The June 30 deadline is 30 days away. Ruto is managing the US relationship, the IMF, the Eurobond, and the street — simultaneously.',
    conclusion: 'THE KENYA COURT EBOLA RULING COMPOUNDS RUTO\'S POLITICAL EXPOSURE HEADING INTO THE FINANCE BILL JUNE 30 DEADLINE. WATCH HOW THE US RESPONDS TO THE COURT SUSPENSION — AND WHETHER IT AFFECTS KENYAN EUROBOND ROLLOVER MECHANICS.',
  },

  insight2: {
    title: 'JPMORGAN\'S 15% HAIRCUT QUANTIFICATION MAKES SENEGAL\'S RESTRUCTURING INEVITABLE IN MARKET TERMS',
    body: 'When JPMorgan explicitly quantifies the restructuring terms the market is pricing — 15% nominal haircut, 5-year maturity extension, coupon cut to 75% — the question is no longer whether restructuring is priced but whether the government can avoid it. The mechanics remain locked: PM Lo needs to pass fuel subsidy reform through a Sonko-controlled legislature to unlock IMF re-engagement. The IMF arrives in 8 days. The coupon is due the same day. Senegal has paid its coupons since UEMOA membership — a missed payment would be the first default in the country\'s modern history. JPMorgan\'s "more adverse scenario" framing suggests that even if the coupon is paid, the structural path to debt sustainability requires negotiation that Sonko\'s legislature will resist. The June 8 IMF visit is simultaneously a diagnostic, a negotiation, and a sovereign credibility test.',
    conclusion: 'JPMORGAN\'S 15% HAIRCUT QUANTIFICATION IS THE MARKET\'S DEFINITIVE STATEMENT ON SENEGAL. DEFAULT OR RESTRUCTURING IN Q4 2026–Q1 2027 IS NOW THE BASE CASE IN BOTH WALL STREET MODELS.',
  },

  brief: {
    week: '23',
    title: 'WEEK 23 MID: ETHIOPIA VOTES, KENYA COURT BLOCKS US EBOLA FACILITY, JPMORGAN 15% SENEGAL HAIRCUT, INDIA-AFRICA SUMMIT CLOSES',
    body: 'Week 23 mid-point is the most consequential day in African sovereign risk this year. Ethiopia is voting today — results June 11, post-election war window on Tigray now open. Kenya\'s High Court blocked the US Ebola quarantine facility on the day it was due to begin operating — CDC officials were themselves furious at the plan, calling it harmful to Ebola response capacity. JPMorgan has now quantified Senegal\'s restructuring: 15% haircut, 5-year extension, 75% coupon — 8 days before the IMF arrives in Dakar with a €53.75m coupon due. The India-Africa Summit IV closes today in New Delhi, with Ebola dominating the health agenda and India positioning as an alternative multilateral partner. South Africa has 30 days to June 30 with two movements, a bombed retailer, and no GNU compliance option. MSF confirms 125 confirmed Ebola cases as of May 29 with the real extent unknown due to underreporting. Ghana remains the continental benchmark — the only large sovereign with an unambiguously positive trajectory.',
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
    { time: '09:30:00', signal: 'Ethiopia VOTING TODAY — polls open nationwide. Abiy PP expected sweep. Tigray excluded — 38 districts, TPLF reinstated Debretsion. Results June 11. Post-election war window on Tigray now live. Expert: "symbolic exercise to confer legitimacy on incumbent." Egypt, UAE, Saudi, Turkey, Israel all positioning for post-election Horn influence.', detail: 'HIGH', type: 'ALERT', tag: 'SECURITY RISK', country: 'ETB' },
    { time: '09:15:00', signal: 'Kenya High Court suspended US Ebola quarantine facility plan Friday — citing threat to life. Due to open same day. Kenyan doctors: "utterly disgusted." CDC officials recommended AGAINST the plan — "furious." US committing $13.5m to Kenya Ebola preparedness. Case back to court next week. US-Kenya relations strained entering Finance Bill + Eurobond window.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'KES' },
    { time: '09:00:00', signal: 'JPMorgan: markets pricing Senegal 2033 bonds at 5-year maturity extension + coupon to 75% current + 15% nominal haircut. "Increased likelihood of more adverse scenario." Morgan Stanley also pricing restructuring. 8 days to June 8 IMF visit + €53.75m coupon. Default window Q4 2026–Q1 2027.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'XOF' },
    { time: '08:45:00', signal: 'India-Africa Forum Summit IV closes today New Delhi. Joint AU-India press release: Ebola "evolving health situation" dominated health agenda. India committed to Africa CDC-led response. $80bn cumulative India Africa investment since 1996. India positioning as alternative multilateral partner as Western engagement weakens.', detail: 'MEDIUM', type: 'INFO', tag: 'GEOPOLITICAL', country: 'AFRICA' },
    { time: '08:30:00', signal: 'MSF May 30 update: 125 confirmed cases (8 confirmed deaths), 906 suspected (223 deaths) as of May 29. Bundibugyo — 17th DRC Ebola outbreak since 1976. Real extent unknown — lack of surveillance, underreporting. Health workers with scant supplies. Tedros in DRC. No vaccine, no treatment.', detail: 'HIGH', type: 'ALERT', tag: 'HEALTH RISK', country: 'AFRICA' },
    { time: '08:15:00', signal: 'South Africa: June 30 — 30 days. KZN N2/N3 blocked yesterday. Woolworths Menlyn Mall bombed May 28. TWO movements: March and March + ATDF-ASA. 4,722 undocumented arrested KZN since Jan 1. SANDF warning issued. GNU no compliance option. Municipal elections fall 2026.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:00:00', signal: 'Kenya Finance Bill 2026 hearings ongoing — due June 30. Ghost of Gen-Z uprising. Taxes on phones, water, coal, credit card swipes. Ruto PAYE relief under Ksh30,000. Eurobond $2bn Q2 rollover critical. Court Ebola ruling adds US-Kenya strain heading into June.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'KES' },
    { time: '07:45:00', signal: 'LIVE FX May 31: NGN 1,371.98 | GHS 10.70 | KES 129.03 | EGP 52.22 | ZAR 16.30 | UGX 3,770 | ZMW 19.02. ZAR strong on dollar weakness. GHS at 10.70 — cedi up 19.32% YoY vs dollar. Ghana continental benchmark intact entering June.', detail: 'LOW', type: 'INFO', tag: 'FX UPDATE', country: 'AFRICA' },
  ],

  heatMap: [
    { country: 'Nigeria', flag: '🇳🇬', score: 70, fiscal: 60, fx: 50, debt: 60, political: 88, external: 62 },
    { country: 'Ghana', flag: '🇬🇭', score: 36, fiscal: 38, fx: 28, debt: 40, political: 34, external: 42 },
    { country: 'Kenya', flag: '🇰🇪', score: 92, fiscal: 84, fx: 74, debt: 90, political: 98, external: 94 },
    { country: 'Egypt', flag: '🇪🇬', score: 66, fiscal: 68, fx: 64, debt: 66, political: 65, external: 68 },
    { country: 'South Africa', flag: '🇿🇦', score: 92, fiscal: 68, fx: 46, debt: 62, political: 99, external: 88 },
    { country: 'Senegal', flag: '🇸🇳', score: 99, fiscal: 99, fx: 88, debt: 99, political: 99, external: 94 },
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
    { country: 'Ethiopia', flag: '🇪🇹', date: 'June 1, 2026 — VOTING TODAY', type: 'General Election', risk: 'CRITICAL', note: 'Polls open. PP sweep expected. Tigray excluded. TPLF reinstated Debretsion. Results June 11. Post-election war window on Tigray now live. Regional powers: Egypt, UAE, Saudi, Turkey, Israel all positioning.', color: '#ff3b3b' },
    { country: 'Somalia', flag: '🇸🇴', date: 'Extended to 2027', type: 'Presidential Election', risk: 'CRITICAL', note: 'Mohamud term expired May 15. Somali Future Council threatening parallel government. Al-Shabaab exploiting vacuum.', color: '#ff3b3b' },
    { country: 'Zambia', flag: '🇿🇲', date: 'August 13, 2026', type: 'General Election', risk: 'HIGH', note: 'Hichilema under pressure. Slow reform, 3hrs power/day. Opposition consolidating. Outcome uncertain.', color: '#ff3b3b' },
    { country: 'South Africa', flag: '🇿🇦', date: 'Fall 2026', type: 'Municipal Elections', risk: 'CRITICAL', note: 'June 30 — 30 days. TWO movements. KZN trucks blocked N2/N3 yesterday. Woolworths bombed. SANDF warning. GNU no compliance option.', color: '#ff3b3b' },
    { country: 'Nigeria', flag: '🇳🇬', date: 'Early 2027', type: 'General Election', risk: 'CRITICAL', note: '300+ civilian airstrike deaths. ISWAP commander killed. Civilian casualty crisis unaddressed. Tier-1 election liability.', color: '#ff3b3b' },
    { country: 'Kenya', flag: '🇰🇪', date: '2027', type: 'General Election', risk: 'CRITICAL', note: 'Finance Bill June 30. Court blocked US Ebola facility — US-Kenya strain. Eurobond Q2 rollover. Ruto managing IMF, US, street simultaneously.', color: '#ff3b3b' },
  ],

  debtMaturities: [
    { country: 'Senegal', flag: '🇸🇳', amount: '€53.75m + $38.75m', instrument: 'Bond Coupons', maturity: 'June 8-10 2026 — 8 DAYS', risk: 'CRITICAL', color: '#ff3b3b' },
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
    { country: 'SENEGAL', cds: 950, delta: '+100', bond: '-5.6pts', fx: '-0.8%', signal: 'JPMORGAN 15% HAIRCUT — IMF JUNE 8', color: '#ff3b3b' },
    { country: 'ETHIOPIA', cds: 520, delta: '+50', bond: '-2.5pts', fx: '-0.9%', signal: 'VOTING TODAY — WAR RISK LIVE', color: '#ff3b3b' },
    { country: 'KENYA', cds: 192, delta: '+45', bond: '-2.3pts', fx: '-0.4%', signal: 'COURT BLOCKS US EBOLA — FINANCE BILL', color: '#ff3b3b' },
    { country: 'SOUTH AFRICA', cds: 198, delta: '+35', bond: '-1.8pts', fx: '+3.5%', signal: 'JUNE 30 — 30 DAYS — TWO MOVEMENTS', color: '#ff3b3b' },
    { country: 'MALI', cds: 920, delta: '+65', bond: '-3.0pts', fx: '-1.5%', signal: 'SECURITY COLLAPSE', color: '#ff3b3b' },
    { country: 'NIGERIA', cds: 415, delta: '+18', bond: '-0.8pts', fx: '-0.2%', signal: 'AIRSTRIKE + 2027 ELECTION RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 568, delta: '+5', bond: '-0.2pts', fx: '+4.3%', signal: 'OIL EXPORT BENEFIT', color: '#f5a623' },
    { country: 'GHANA', cds: 232, delta: '-15', bond: '+0.8pts', fx: '+19.3%', signal: 'CEDI SURGE — CONTINENTAL BENCHMARK', color: '#00c48c' },
  ],
}
