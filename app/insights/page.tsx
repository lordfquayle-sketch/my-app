'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts'

export default function Insights() {
  const [fx, setFx] = useState<any>({ NGN: 1580, GHS: 11.05, KES: 129.5, EGP: 50.2, XOF: 610, ZAR: 18.5 })

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

  const fxData = [
    { country: 'NGN', rate: Number(fx.NGN) },
    { country: 'GHS', rate: Number(fx.GHS) },
    { country: 'KES', rate: Number(fx.KES) },
    { country: 'EGP', rate: Number(fx.EGP) },
    { country: 'XOF', rate: Number(fx.XOF) },
    { country: 'ZAR', rate: Number(fx.ZAR) },
  ]

  const riskData = [
    { country: 'Nigeria', score: 72, flag: '🇳🇬', driver: 'FX + Debt' },
    { country: 'Ghana', score: 68, flag: '🇬🇭', driver: 'Debt restructure' },
    { country: 'Egypt', score: 74, flag: '🇪🇬', driver: 'IMF pressure' },
    { country: 'Kenya', score: 61, flag: '🇰🇪', driver: 'Fiscal deficit' },
    { country: 'Ivory Coast', score: 55, flag: '🇨🇮', driver: 'Stable' },
    { country: 'South Africa', score: 58, flag: '🇿🇦', driver: 'Growth risk' },
  ]

  const radarData = [
    { metric: 'FX Stress', value: 78 },
    { metric: 'Debt Risk', value: 65 },
    { metric: 'Fiscal', value: 70 },
    { metric: 'Growth', value: 45 },
    { metric: 'Political', value: 60 },
    { metric: 'External', value: 72 },
  ]

  const colors = ['#ff3b3b', '#f5a623', '#00c48c', '#1e6bff', '#a855f7', '#ec4899']

  const getRiskColor = (score: number) => {
    if (score >= 70) return '#ff3b3b'
    if (score >= 60) return '#f5a623'
    return '#00c48c'
  }

  return (
    <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 56px)', padding: '24px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#6b82a0', marginBottom: '4px' }}>FIIFI TERMINAL</div>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '28px', color: '#e8eef8', marginBottom: '4px' }}>Market Insights</h1>
      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#6b82a0', marginBottom: '32px' }}>Live African sovereign and currency intelligence</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>

        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>USD EXCHANGE RATES</div>
          <ResponsiveContainer width="99%" height={220}>
            <BarChart data={fxData}>
              <XAxis dataKey="country" stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 10, fill: '#6b82a0' }} />
              <YAxis stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 10, fill: '#6b82a0' }} />
              <Tooltip contentStyle={{ background: '#0a1628', border: '1px solid #1a2d4a', fontFamily: 'Space Mono', fontSize: 11 }} />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                {fxData.map((_, i) => <Cell key={i} fill={colors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>AFRICA RISK RADAR</div>
          <ResponsiveContainer width="99%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1a2d4a" />
              <PolarAngleAxis dataKey="metric" tick={{ fontFamily: 'Space Mono', fontSize: 9, fill: '#6b82a0' }} />
              <Radar dataKey="value" stroke="#1e6bff" fill="#1e6bff" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>COUNTRY RISK SCORES</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {riskData.map((c, i) => (
            <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>{c.flag}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#e8eef8', fontWeight: 600 }}>{c.country}</span>
                </div>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '18px', fontWeight: 700, color: getRiskColor(c.score) }}>{c.score}</span>
              </div>
              <div style={{ background: '#0a1628', borderRadius: '4px', height: '4px', marginBottom: '8px' }}>
                <div style={{ background: getRiskColor(c.score), height: '4px', borderRadius: '4px', width: c.score + '%' }} />
              </div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0' }}>{c.driver}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
