'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function Insights() {
  const [fx, setFx] = useState<any>({ NGN: 0, GHS: 0, KES: 0, EGP: 0, XOF: 0, ZAR: 0 })

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

  const chartData = [
    { country: 'Nigeria', currency: 'NGN', rate: Number(fx.NGN) },
    { country: 'Ghana', currency: 'GHS', rate: Number(fx.GHS) },
    { country: 'Kenya', currency: 'KES', rate: Number(fx.KES) },
    { country: 'Egypt', currency: 'EGP', rate: Number(fx.EGP) },
    { country: 'Ivory Coast', currency: 'XOF', rate: Number(fx.XOF) },
    { country: 'South Africa', currency: 'ZAR', rate: Number(fx.ZAR) },
  ]

  const colors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899']

  return (
    <div className="bg-black min-h-screen p-6">
      <p className="text-xs text-gray-500 mb-1">FIIFI TERMINAL</p>
      <h1 className="text-2xl font-bold text-white mb-1">Market Insights</h1>
      <p className="text-gray-500 text-sm mb-8">Live African currency rates vs USD</p>

      <div className="border border-gray-800 p-4 mb-6">
        <p className="text-xs text-gray-500 mb-4">USD EXCHANGE RATES — AFRICA</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="currency" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #374151' }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
              {chartData.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {chartData.map((item, i) => (
          <div key={i} className="border border-gray-800 p-4">
            <p className="text-xs text-gray-500">{item.country}</p>
            <p className="text-2xl font-bold" style={{ color: colors[i] }}>
              {Number(item.rate).toFixed(2)}
            </p>
            <p className="text-xs text-gray-600">USD/{item.currency}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
