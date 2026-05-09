export const content = {
  riskIndex: '72',
  riskStatus: 'ELEVATED',

  pressureMap: [
    { country: 'Nigeria', flag: '🇳🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '415', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Ghana', flag: '🇬🇭', outlook: 'Stable', status: 'STABLE', statusColor: '#00c48c', cds: '245', fxPressure: 'MODERATE', liquidity: 'IMPROVING' },
    { country: 'Kenya', flag: '🇰🇪', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '182', fxPressure: 'MODERATE', liquidity: 'WATCH' },
    { country: 'Egypt', flag: '🇪🇬', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '580', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'South Africa', flag: '🇿🇦', outlook: 'Negative', status: 'STRESSED', statusColor: '#ff3b3b', cds: '192', fxPressure: 'ELEVATED', liquidity: 'WATCH' },
    { country: 'Zambia', flag: '🇿🇲', outlook: 'Cautious', status: 'WATCH', statusColor: '#f5a623', cds: '995', fxPressure: 'MODERATE', liquidity: 'WATCH' },
  ],

  whatMattersNow: [
    { title: 'AFRICA GROWTH AT 4.3% IN 2026 — DIVERGENCE IS THE STORY', body: 'African Development Bank projects Africa growing 4.3% in 2026. East Africa leads at 5.8%, driven by Ethiopia and Kenya. West Africa slows to 4.4%. Southern Africa lags at 2.0%. Weaker USD aiding disinflation across the continent.', icon: '📈' },
    { title: 'NIGERIA GDP UP 30% — CURRENCY ADJUSTMENT IS THE DRIVER', body: 'Nigeria\'s GDP rises nearly 30% to $377bn — but this reflects currency rebase, not real structural growth. Oil dependency, food inflation and FX volatility remain key risks. Services, finance and ICT driving real output gains.', icon: '🇳🇬' },
    { title: 'SA LOCAL ELECTIONS — FIRST TEST OF GNU SINCE 2024', body: 'South Africa\'s local elections offer first real test of national sentiment since the Government of National Unity formation. Zambia heads to polls in August. Angola, Kenya and Nigeria begin 2027 election preparations. Political risk rising across the continent.', icon: '🗳️' },
    { title: '40% OF AFRICAN COUNTRIES AT DEBT DISTRESS RISK', body: 'UN report: Africa\'s debt-to-GDP at 63% in 2025. Interest payments absorbing nearly 15% of public revenue. Around 40% of African countries in over-indebtedness or at high risk. G20 Common Framework has resolved only 7% of distressed debt.', icon: '⚠️' },
  ],

  insight1: {
    title: 'AFRICA\'S GROWTH STORY IS REAL — BUT THE DEBT STORY IS ALSO REAL',
    body: 'African Development Bank projects 4.3% growth in 2026 — above global average. But UN data shows 40% of African countries at debt distress risk, with interest payments absorbing 15% of public revenue. These two stories are not contradictory. Growth is happening. So is debt stress. The question is whether growth is fast enough to outrun the debt accumulation. For most frontier sovereigns, the answer is no.',
    conclusion: 'GROWTH WITHOUT DEBT RELIEF IS A TREADMILL. WATCH REFINANCING COSTS IN H2 2026.',
  },

  insight2: {
    title: 'NIGERIA\'S 30% GDP JUMP IS A STATISTICAL EVENT — NOT A STRUCTURAL ONE',
    body: 'Nigeria\'s GDP rising nearly 30% to $377bn reflects the naira rebase after FX unification — not a fundamental transformation of productive capacity. Oil dependency persists. Food inflation remains elevated. FX volatility is structural. The Dangote refinery and 20,000MW power plan are real catalysts — but they are medium-term stories. The near-term picture is more nuanced than the headline number suggests.',
    conclusion: 'THE GDP NUMBER IS REAL. THE STRUCTURAL CHALLENGES BEHIND IT ARE ALSO REAL. DO NOT CONFUSE CURRENCY ADJUSTMENT WITH ECONOMIC TRANSFORMATION.',
  },

  brief: {
    week: '19',
    title: 'WEEK 19 CLOSE: AFRICA GROWING — BUT DEBT CLOCK IS TICKING',
    body: 'African Development Bank raises Africa growth forecast to 4.3% for 2026. Weaker USD is aiding disinflation. East Africa leads growth at 5.8%. But the structural picture is more complex: 40% of African countries remain at debt distress risk, interest payments are absorbing 15% of public revenue, and the G20 Common Framework has resolved only 7% of distressed debt. The divergence between growth leaders and debt-stressed sovereigns will define African credit in H2 2026. Nigeria and Ghana are outperforming. Kenya, Zambia and Angola face the sharpest structural pressures.',
  },

  fxRates: {
    NGN: '1356.66',
    GHS: '11.27',
    KES: '129.10',
    EGP: '53.55',
    XOF: '610.00',
    ZAR: '18.45',
    ETB: '132.00',
    TZS: '2650.00',
    UGX: '3680.00',
    MAD: '9.75',
    XAF: '610.00',
    ZMW: '19.11',
    AOA: '915.00',
    MZN: '63.80',
  },

  signals: [
    { time: '09:30:00', signal: 'AfDB raises Africa 2026 growth to 4.3% — East Africa leads at 5.8%. Weaker USD aiding disinflation. West Africa slows to 4.4%.', detail: 'MEDIUM', type: 'INFO', tag: 'MACRO UPDATE', country: 'AFRICA' },
    { time: '09:15:00', signal: 'Nigeria GDP rises 30% to $377bn — but reflects naira rebase not structural growth. Oil dependency and food inflation remain key risks.', detail: 'MEDIUM', type: 'WARNING', tag: 'MACRO RISK', country: 'NGN' },
    { time: '09:00:00', signal: '40% of African countries at debt distress risk — UN report. Interest payments absorbing 15% of public revenue. G20 Common Framework resolves only 7% of distressed debt.', detail: 'HIGH', type: 'ALERT', tag: 'CREDIT STRESS', country: 'AFRICA' },
    { time: '08:45:00', signal: 'South Africa local elections approaching — first test of GNU since 2024. ZAR watching political risk closely.', detail: 'MEDIUM', type: 'WARNING', tag: 'POLITICAL RISK', country: 'ZAR' },
    { time: '08:30:00', signal: 'Ghana GDP at $114.71bn — up 3.2%. Gold, oil and cocoa exports supporting recovery. IMF-backed reforms stabilising growth.', detail: 'LOW', type: 'INFO', tag: 'MACRO UPDATE', country: 'GHS' },
    { time: '08:15:00', signal: 'Kenya GDP at $136.46bn — up 7.9%. Services, finance and tech driving growth. But debt rollover risk remains elevated for 2026.', detail: 'MEDIUM', type: 'WARNING', tag: 'CREDIT STRESS', country: 'KES' },
    { time: '08:00:00', signal: 'NGN at 1,356.66 — down 15.54% vs USD over past year. Weekly range 1,357-1,373. CBN FX reforms holding but volatility elevated.', detail: 'MEDIUM', type: 'INFO', tag: 'FX UPDATE', country: 'NGN' },
    { time: '07:45:00', signal: 'Zambia polls in August — slow economic reform, social pressure mounting as macro stabilisation not translating to livelihoods.', detail: 'HIGH', type: 'ALERT', tag: 'POLITICAL RISK', country: 'ZMW' },
  ],

  riskTable: [
    { country: 'SOUTH AFRICA', cds: 192, delta: '+15', bond: '-0.8pts', fx: '-0.4%', signal: 'ELECTION RISK', color: '#ff3b3b' },
    { country: 'ZAMBIA', cds: 995, delta: '+10', bond: '-0.5pts', fx: '-0.3%', signal: 'POLL + DEBT RISK', color: '#ff3b3b' },
    { country: 'EGYPT', cds: 580, delta: '+8', bond: '-0.4pts', fx: '-0.3%', signal: 'FX PRESSURE', color: '#f5a623' },
    { country: 'KENYA', cds: 182, delta: '+18', bond: '-0.9pts', fx: '-0.1%', signal: 'ROLLOVER RISK', color: '#f5a623' },
    { country: 'NIGERIA', cds: 415, delta: '-5', bond: '+0.3pts', fx: '+0.1%', signal: 'REBASE STORY', color: '#00c48c' },
    { country: 'GHANA', cds: 245, delta: '-8', bond: '+0.4pts', fx: '+0.2%', signal: 'RECOVERY INTACT', color: '#00c48c' },
    { country: 'IVORY COAST', cds: 395, delta: '+2', bond: '-0.1pts', fx: '0.0%', signal: 'STABLE', color: '#00c48c' },
  ],
}
