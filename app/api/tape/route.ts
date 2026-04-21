export async function GET() {
  const now = new Date().toISOString().slice(11, 19)

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=Africa+economy+OR+Nigeria+OR+Ghana+OR+Kenya+bonds+OR+currency&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWSAPI_KEY}`
    )
    const data = await res.json()

    const tape = data.articles.map((a: any) => ({
      time: new Date(a.publishedAt).toISOString().slice(11, 19),
      type: a.title.toLowerCase().includes("crisis") || a.title.toLowerCase().includes("crash") ? "ALERT" :
            a.title.toLowerCase().includes("risk") || a.title.toLowerCase().includes("warning") ? "WARNING" : "INFO",
      message: a.title
    }))

    return Response.json(tape)
  } catch {
    return Response.json([
      { time: now, type: "ALERT", message: "Nigeria bond spreads widening beyond 9%" },
      { time: now, type: "WARNING", message: "Ghana FX volatility increasing intraday" },
      { time: now, type: "INFO", message: "Africa Risk Index holding at elevated levels" }
    ])
  }
}
