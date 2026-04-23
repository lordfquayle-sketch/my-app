let cachedRates: any = null
let lastFetch: number = 0
const CACHE_DURATION = 6 * 60 * 60 * 1000

export async function GET() {
  const now = Date.now()

  if (cachedRates && (now - lastFetch) < CACHE_DURATION) {
    return Response.json(cachedRates)
  }

  try {
    const res = await fetch(
      'https://v6.exchangerate-api.com/v6/' + process.env.EXCHANGE_RATE_KEY + '/latest/USD'
    )
    const data = await res.json()
    const rates = data.conversion_rates

    cachedRates = {
      NGN: rates.NGN?.toFixed(2) || 'N/A',
      GHS: rates.GHS?.toFixed(2) || 'N/A',
      KES: rates.KES?.toFixed(2) || 'N/A',
      EGP: rates.EGP?.toFixed(2) || 'N/A',
      XOF: rates.XOF?.toFixed(2) || 'N/A',
      ZAR: rates.ZAR?.toFixed(2) || 'N/A',
      ETB: rates.ETB?.toFixed(2) || 'N/A',
      TZS: rates.TZS?.toFixed(2) || 'N/A',
      UGX: rates.UGX?.toFixed(2) || 'N/A',
      MAD: rates.MAD?.toFixed(2) || 'N/A',
      XAF: rates.XAF?.toFixed(2) || 'N/A',
      ZMW: rates.ZMW?.toFixed(2) || 'N/A',
      AOA: rates.AOA?.toFixed(2) || 'N/A',
      MZN: rates.MZN?.toFixed(2) || 'N/A',
    }
    lastFetch = now

    return Response.json(cachedRates)
  } catch {
    return Response.json(cachedRates || { NGN: 'N/A', GHS: 'N/A', KES: 'N/A', EGP: 'N/A', XOF: 'N/A', ZAR: 'N/A', ETB: 'N/A', TZS: 'N/A', UGX: 'N/A', MAD: 'N/A', XAF: 'N/A', ZMW: 'N/A', AOA: 'N/A', MZN: 'N/A' })
  }
}
