export async function GET() {
  const now = new Date().toISOString().slice(11, 19)
  try {
    const res = await fetch('https://newsapi.org/v2/everything?q=Africa+sovereign+debt+currency+bonds+IMF&sortBy=publishedAt&pageSize=10&language=en&apiKey=' + process.env.NEWSAPI_KEY)
    const data = await res.json()
    if (!data.articles || data.articles.length === 0) throw new Error('No articles')
    const tape = data.articles.map((a: any) => {
      const title = a.title || ''
      const lower = title.toLowerCase()
      let type = 'INFO'
      let tag = 'MACRO NEWS'
      let detail = 'LOW'
      if (lower.includes('crisis') || lower.includes('default') || lower.includes('crash')) { type = 'ALERT'; tag = 'CREDIT STRESS'; detail = 'HIGH' }
      else if (lower.includes('debt') || lower.includes('risk') || lower.includes('pressure')) { type = 'WARNING'; tag = 'RISK SIGNAL'; detail = 'MEDIUM' }
      else if (lower.includes('imf') || lower.includes('policy') || lower.includes('rate')) { type = 'INFO'; tag = 'POLICY SIGNAL'; detail = 'LOW' }
      return { time: new Date(a.publishedAt).toISOString().slice(11, 19), type, tag, detail, signal: title, source: a.source?.name || 'News', country: 'AFRICA' }
    })
    return Response.json(tape)
  } catch {
    return Response.json([
      { time: now, type: 'ALERT', tag: 'CREDIT STRESS', detail: 'HIGH', signal: '40% of African countries at debt distress risk — UN report 2026', source: 'Fiifi Terminal', country: 'AFRICA' },
      { time: now, type: 'WARNING', tag: 'FX PRESSURE', detail: 'MEDIUM', signal: 'Nigeria NGN at 1,356 — CBN FX reforms holding but volatility elevated', source: 'Fiifi Terminal', country: 'NGN' },
      { time: now, type: 'ALERT', tag: 'POLITICAL RISK', detail: 'HIGH', signal: 'South Africa local elections — first test of GNU since 2024', source: 'Fiifi Terminal', country: 'ZAR' },
      { time: now, type: 'INFO', tag: 'MACRO UPDATE', detail: 'LOW', signal: 'AfDB raises Africa 2026 growth to 4.3% — East Africa leads at 5.8%', source: 'Fiifi Terminal', country: 'AFRICA' },
    ])
  }
}
