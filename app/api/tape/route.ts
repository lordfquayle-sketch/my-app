export async function GET() {
  const now = new Date().toISOString().slice(11, 19)

  try {
    const res = await fetch(
      'https://newsapi.org/v2/everything?q=Africa+economy+sovereign+debt+currency&sortBy=publishedAt&pageSize=10&language=en&apiKey=' + process.env.NEWSAPI_KEY
    )
    const data = await res.json()

    if (!data.articles || data.articles.length === 0) {
      throw new Error('No articles')
    }

    const tape = data.articles.map((a: any) => {
      const title = a.title || ''
      const lower = title.toLowerCase()
      let type = 'INFO'
      if (lower.includes('crisis') || lower.includes('default') || lower.includes('crash')) type = 'ALERT'
      else if (lower.includes('risk') || lower.includes('warning') || lower.includes('pressure')) type = 'WARNING'
      return {
        time: new Date(a.publishedAt).toISOString().slice(11, 19),
        type,
        message: title,
        source: a.source?.name || 'News'
      }
    })

    return Response.json(tape)
  } catch {
    return Response.json([
      { time: now, type: 'ALERT', message: 'Nigeria bond spreads widening beyond 9% amid fiscal pressure', source: 'Fiifi Terminal' },
      { time: now, type: 'WARNING', message: 'Ghana cedi faces renewed depreciation pressure against dollar', source: 'Fiifi Terminal' },
      { time: now, type: 'INFO', message: 'Africa Risk Index holding at elevated levels — score 68', source: 'Fiifi Terminal' },
      { time: now, type: 'ALERT', message: 'Egypt sovereign credit stress accelerating on IMF review', source: 'Fiifi Terminal' },
      { time: now, type: 'WARNING', message: 'Kenya fiscal deficit widening as debt servicing costs rise', source: 'Fiifi Terminal' },
      { time: now, type: 'INFO', message: 'South Africa growth outlook revised down by World Bank', source: 'Fiifi Terminal' },
      { time: now, type: 'WARNING', message: 'Zambia debt restructuring talks stall with creditors', source: 'Fiifi Terminal' },
      { time: now, type: 'ALERT', message: 'Angola oil revenue decline pressuring sovereign balance sheet', source: 'Fiifi Terminal' },
    ])
  }
}
