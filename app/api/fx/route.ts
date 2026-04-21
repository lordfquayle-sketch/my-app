export async function GET() {
  try {
    const res = await fetch('https://v6.exchangerate-api.com/v6/' + process.env.EXCHANGE_RATE_KEY + '/latest/USD')
    const data = await res.json()
    const rates = data.conversion_rates
    return Response.json({
      NGN: rates.NGN?.toFixed(2) || 'N/A',
      GHS: rates.GHS?.toFixed(2) || 'N/A',
      KES: rates.KES?.toFixed(2) || 'N/A',
      EGP: rates.EGP?.toFixed(2) || 'N/A',
      XOF: rates.XOF?.toFixed(2) || 'N/A',
      ZAR: rates.ZAR?.toFixed(2) || 'N/A',
    })
  } catch(e) {
    return Response.json({ NGN: 'N/A', GHS: 'N/A', KES: 'N/A', EGP: 'N/A', XOF: 'N/A', ZAR: 'N/A' })
  }
}