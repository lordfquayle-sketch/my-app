export async function GET() {
  const now = new Date().toISOString().slice(11, 19)

  try {
    const res = await fetch(
      'https://newsapi.org/v2/everything?q=Africa+sovereign+debt+currency+bonds+IMF+fiscal&sortBy=publishedAt&pageSize=10&language=en&apiKey=' + process.env.NEWSAPI_KEY
    )
    const data = await res.json()

    if (!data.articles || data.articles.length === 0) throw new Error('No articles')

    const tape = data.articles.map((a: any) => {
      const title = a.title || ''
      const lower = title.toLowerCase()
      let type = 'INFO'
      let tag = 'MACRO NEWS'
      let detail = 'LOW'

      if (lower.includes('crisis') || lower.includes('default') || lower.includes('crash') || lower.includes('collapse') || lower.includes('devaluation')) {
        type = 'ALERT'; tag = 'CREDIT STRESS'; detail = 'HIGH'
      } else if (lower.includes('risk') || lower.includes('warning') || lower.includes('pressure') || lower.includes('deficit') || lower.includes('debt')) {
        type = 'WARNING'; tag = 'RISK SIGNAL'; detail = 'MEDIUM'
      } else if (lower.includes('fx') || lower.includes('currency') || lower.includes('exchange')) {
        type = 'WARNING'; tag = 'FX PRESSURE'; detail = 'MEDIUM'
      } else if (lower.includes('imf') || lower.includes('world bank') || lower.includes('policy')) {
        type = 'INFO'; tag = 'POLICY SIGNAL'; detail = 'LOW'
      }

      return {
        time: new Date(a.publishedAt).toISOString().slice(11, 19),
        type,
        tag,
        detail,
        signal: title,
        source: a.source?.name || 'News',
        country: 'AFRICA'
      }
    })

    return Response.json(tape)
  } catch {
    return Response.json([
      { time: now, type: 'ALERT', tag: 'FX PRESSURE', detail: 'HIGH', signal: 'Naira trades at 1,384 — CBN intervention pressure building', source: 'Fiifi Terminal', country: 'NGN' },
      { time: now, type: 'WARNING', tag: 'LIQUIDITY ALERT', detail: 'MEDIUM', signal: 'Ghana cedi holds at 11.09 — liquidity conditions remain tight', source: 'Fiifi Terminal', country: 'GHS' },
      { time: now, type: 'ALERT', tag: 'CREDIT STRESS', detail: 'HIGH', signal: 'Egypt pound at 52.62 — IMF fiscal review delays adding stress', source: 'Fiifi Terminal', country: 'EGP' },
      { time: now, type: 'INFO', tag: 'MARKET FLOW', detail: 'MEDIUM', signal: 'Zambian kwacha at 19.13 — significant strengthening noted', source: 'Fiifi Terminal', country: 'ZMW' },
    ])
  }
}
