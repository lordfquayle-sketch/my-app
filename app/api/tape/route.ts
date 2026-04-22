export async function GET() {
  const now = new Date().toISOString().slice(11, 19)

  try {
    const queries = [
      'Africa sovereign debt bonds crisis',
      'Africa currency FX devaluation',
      'IMF World Bank Africa loan',
      'Africa inflation fiscal deficit'
    ]

    const results = await Promise.all(
      queries.map(q =>
        fetch('https://newsapi.org/v2/everything?q=' + encodeURIComponent(q) + '&sortBy=publishedAt&pageSize=3&language=en&apiKey=' + process.env.NEWSAPI_KEY)
          .then(r => r.json())
      )
    )

    const articles = results.flatMap((r, qi) =>
      (r.articles || []).map((a) => {
        const title = a.title || ''
        const lower = title.toLowerCase()
        let type = 'INFO'
        if (lower.includes('crisis') || lower.includes('default') || lower.includes('crash') || lower.includes('collapse')) type = 'ALERT'
        else if (lower.includes('risk') || lower.includes('warning') || lower.includes('pressure') || lower.includes('stress') || lower.includes('deficit')) type = 'WARNING'
        return {
          time: new Date(a.publishedAt).toISOString().slice(11, 19),
          type,
          message: title,
          source: a.source?.name || ''
        }
      })
    )

    const seen = new Set()
    const unique = articles.filter(a => {
      if (seen.has(a.message)) return false
      seen.add(a.message)
      return true
    })

    unique.sort((a, b) => b.time.localeCompare(a.time))

    return Response.json(unique.slice(0, 15))
  } catch(e) {
    return Response.json([
      { time: now, type: 'ALERT', message: 'Nigeria bond spreads widening beyond 9%', source: 'Fiifi Terminal' },
      { time: now, type: 'WARNING', message: 'Ghana FX volatility increasing intraday', source: 'Fiifi Terminal' },
      { time: now, type: 'INFO', message: 'Africa Risk Index holding at elevated levels', source: 'Fiifi Terminal' }
    ])
  }
}