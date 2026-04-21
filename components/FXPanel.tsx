'use client'

import { useEffect, useState } from 'react'

export default function FXPanel() {
  const [fx, setFx] = useState<any>({ NGN: '...', GHS: '...', KES: '...' })

  useEffect(() => {
    const fetchFX = async () => {
      const res = await fetch('/api/fx')
      const data = await res.json()
      setFx(data)
    }
    fetchFX()
    const interval = setInterval(fetchFX, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-gray-800 p-4 bg-black">
      <p className="text-xs text-gray-500 mb-4">AFRICA RISK INDEX</p>
      <h1 className="text-5xl font-bold text-red-500">68</h1>
      <p className="text-yellow-400 mb-6">ELEVATED</p>
      <div className="mt-4 text-sm text-gray-400 mb-6">
        Driven by FX pressure and widening sovereign spreads.
      </div>
      <p className="text-xs text-gray-500 mb-2">LIVE FX RATES (USD)</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">USD/NGN</span>
          <span className="text-green-400">{Number(fx.NGN).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">USD/GHS</span>
          <span className="text-green-400">{Number(fx.GHS).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">USD/KES</span>
          <span className="text-green-400">{Number(fx.KES).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
