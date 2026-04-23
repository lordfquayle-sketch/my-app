'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, LineChart, Line } from 'recharts'

export default function Insights() {
  const [fx, setFx] = useState<any>({})
  const [history, setHistory] = useState<any[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState('GHS')

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

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch('/api/history?currency=' + selectedCurrency)
      const data = await res.json()
      setHistory(data)
    }
    fetchHistory()
  }, [selectedCurrency])

  const countries = [
    { code: 'NGN', country: 'Nigeria', flag: '🇳🇬', risk: 72, driver: 'FX + Debt' },
    { code: 'GHS', country: 'Ghana', flag: '🇬🇭', risk: 68, driver: 'Debt restructure' },
    { code: 'EGP', country: 'Egypt', flag: '🇪🇬', risk: 74, driver: 'IMF pressure' },
    { code: 'KES', country: 'Kenya', flag: '🇰🇪', risk: 61, driver: 'Fiscal deficit' },
    { code: 'XOF', country: 'Ivory Coast', flag: '🇨🇮', risk: 55, driver: 'Stable' },
    { code: 'ZAR', country: 'South Africa', flag: '🇿🇦', risk: 58, driver: 'Growth risk' },
    { code: 'ETB', country: 'Ethiopia', flag: '🇪🇹', risk: 65, driver: 'Conflict risk' },
    { code: 'TZS', country: 'Tanzania', flag: '🇹🇿', risk: 50, driver: 'Stable growth' },
    { code: 'UGX', country: 'Uganda', flag: '🇺🇬', risk: 57, driver: 'Fiscal pressure' },
    { code: 'MAD', country: 'Morocco', flag: '🇲🇦', risk: 48, driver: 'Resilient' },
    { code: 'XAF', country: 'Senegal', flag: '🇸🇳', risk: 52, driver: 'Oil transition' },
    { code: 'ZMW', country: 'Zambia', flag: '🇿🇲', risk: 70, driver: 'Debt restructure' },
    { code: 'AOA', country: 'Angola', flag: '🇦🇴', risk: 63, driver: 'Oil dependency' },
    { code: 'MZN', country: 'Mozambique', flag: '🇲🇿', risk: 66, driver: 'Gas + debt' },
  ]

  const fxData = countries.slice(0, 6).map(c => ({
    country: c.code,
    rate: Number(fx[c.code]) || 0,
  }))

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

  const historyCurrencies = ['GHS', 'NGN', 'KES', 'EGP', 'ZAR', 'MAD']

  return (
    <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 56px)', padding: '24px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#6b82a0', marginBottom: '4px' }}>FIIFI TERMINAL</div>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '28px', color: '#e8eef8', marginBottom: '4px' }}>Market Insights</h1>
      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#6b82a0', marginBottom: '32px' }}>Live African sovereign and currency intelligence — 14 markets</p>

      <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em' }}>30-DAY HISTORICAL FX TREND — USD/{selectedCurrency}</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {historyCurrencies.map(c => (
              <button key={c} onClick={() => setSelectedCurrency(c)} style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', padding: '4px 10px', borderRadius: '4px', border: '1px solid', borderColor: selectedCurrency === c ? '#1e6bff' : '#1a2d4a', background: selectedCurrency === c ? '#1e6bff22' : 'transparent', color: selectedCurrency === c ? '#1e6bff' : '#6b82a0', cursor: 'pointer' }}>{c}</button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="99%" height={200}>
          <LineChart data={history}>
            <XAxis dataKey="date" stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 8, fill: '#6b82a0' }} tickFormatter={d => d.slice(5)} />
            <YAxis stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 8, fill: '#6b82a0' }} />
            <Tooltip contentStyle={{ background: '#0a1628', border: '1px solid #1a2d4a', fontFamily: 'Space Mono', fontSize: 11 }} />
            <Line type="monotone" dataKey="rate" stroke="#1e6bff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>USD EXCHANGE RATES</div>
          <ResponsiveContainer width="99%" height={200}>
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
          <ResponsiveContainer width="99%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1a2d4a" />
              <PolarAngleAxis dataKey="metric" tick={{ fontFamily: 'Space Mono', fontSize: 9, fill: '#6b82a0' }} />
              <Radar dataKey="value" stroke="#1e6bff" fill="#1e6bff" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>COUNTRY RISK SCORES — 14 MARKETS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {countries.map((c, i) => (
            <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px' }}>{c.flag}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', color: '#e8eef8', fontWeight: 600 }}>{c.country}</span>
                </div>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '16px', fontWeight: 700, color: getRiskColor(c.risk) }}>{c.risk}</span>
              </div>
              <div style={{ background: '#0a1628', borderRadius: '4px', height: '3px', marginBottom: '6px' }}>
                <div style={{ background: getRiskColor(c.risk), height: '3px', borderRadius: '4px', width: c.risk + '%' }} />
              </div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0' }}>{c.driver}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#00c48c', marginTop: '4px' }}>
                {fx[c.code] ? Number(fx[c.code]).toFixed(2) : '...'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
