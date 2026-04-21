'use client'

import { useEffect, useState } from 'react'

export default function FXPanel() {
  const [fx, setFx] = useState<any>({ NGN: '1580.00', GHS: '15.20', KES: '129.50', EGP: '50.20', XOF: '610.00', ZAR: '18.50' })

  useEffect(() => {
    const fetchFX = async () => {
      const res = await fetch('/api/fx')
      const data = await res.json()
      if (data.NGN !== 'N/A') setFx(data)
    }
    fetchFX()
    const interval = setInterval(fetchFX, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-gray-800 p-4 bg-black">
      <p className="text-xs text-gray-500 mb-4">AFRICA RISK INDEX</p>
      <h1 className="text-5xl font-bold text-red-500">68</h1>
      <p className="text-yellow-400 mb-4">ELEVATED</p>
      <div className="text-sm text-gray-400 mb-6">
        Driven by FX pressure and widening sovereign spreads.
      </div>
      <p className="text-xs text-gray-500 mb-2">LIVE FX RATES (USD)</p>
      <div className="space-y-2">
        {[['NGN','Nigeria'],['GHS','Ghana'],['KES','Kenya'],['EGP','Egypt'],['XOF','Ivory Coast'],['ZAR','South Africa']].map(([code, name]) => (
          <div key={code} className="flex justify-between text-sm">
            <span className="text-gray-400">USD/{code}</span>
            <span className="text-green-400">{Number(fx[code]).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
