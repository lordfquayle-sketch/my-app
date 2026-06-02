'use client'
import { useEffect, useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Cell } from 'recharts'
import { content } from '@/app/content'
import HeatMap from '@/components/HeatMap'
import CurrencyStress from '@/components/CurrencyStress'
import ElectionTracker from '@/components/ElectionTracker'
import DebtMaturity from '@/components/DebtMaturity'
import CommodityMatrix from '@/components/CommodityMatrix'

export default function Insights() {
  const [history, setHistory] = useState<{date:string,value:number}[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState('GHS')

  useEffect(() => {
    const fxHist = content.fxHistory as any[]
    const data = fxHist.map((entry) => ({
      date: entry.date,
      value: Number(entry[selectedCurrency]) || 0,
    }))
    setHistory(data)
  }, [selectedCurrency])

  const fxData = [
    { country: 'NGN', rate: Number(content.fxRates.NGN) },
    { country: 'GHS', rate: Number(content.fxRates.GHS) },
    { country: 'KES', rate: Number(content.fxRates.KES) },
    { country: 'EGP', rate: Number(content.fxRates.EGP) },
    { country: 'ZAR', rate: Number(content.fxRates.ZAR) },
    { country: 'UGX', rate: Number(content.fxRates.UGX) },
    { country: 'ZMW', rate: Number(content.fxRates.ZMW) },
    { country: 'XOF', rate: Number(content.fxRates.XOF) },
  ]

  const colors = ['#1e6bff','#00c48c','#f5a623','#ff3b3b','#a78bfa','#34d399','#fb923c','#60a5fa']

  const historyCurrencies = ['GHS','NGN','KES','EGP','ZAR','MAD']

  const yDomain: [number,number] =
    selectedCurrency === 'GHS' ? [9,14] :
    selectedCurrency === 'NGN' ? [1300,1450] :
    selectedCurrency === 'KES' ? [127,132] :
    selectedCurrency === 'EGP' ? [50,56] :
    selectedCurrency === 'ZAR' ? [14,20] :
    selectedCurrency === 'MAD' ? [9,11] :
    [0,2000]

  const radarData = [
    { metric: 'FX Stress', value: 72 },
    { metric: 'Debt Risk', value: 85 },
    { metric: 'Political', value: 90 },
    { metric: 'External', value: 68 },
    { metric: 'Fiscal', value: 78 },
  ]

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh', padding: '24px', fontFamily: 'Space Mono, monospace' }}>

      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '4px' }}>FIIFI TERMINAL</div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>Market Insights</h1>
        <div style={{ fontSize: '11px', color: '#6b82a0', marginTop: '4px' }}>Live African sovereign and currency intelligence</div>
      </div>

      <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
        <div style={{ fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>
          30-DAY HISTORICAL FX TREND — USD/{selectedCurrency}
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {historyCurrencies.map(c => (
            <button key={c} onClick={() => setSelectedCurrency(c)} style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '1px solid',
              cursor: 'pointer',
              background: selectedCurrency === c ? '#1e6bff' : 'transparent',
              color: selectedCurrency === c ? '#ffffff' : '#6b82a0',
              borderColor: selectedCurrency === c ? '#1e6bff' : '#2d4463',
            }}>
              {c}
            </button>
          ))}
        </div>
        <ResponsiveContainer width="99%" height={200}>
          <LineChart data={history}>
            <XAxis dataKey="date" stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 8, fill: '#6b82a0' }} />
            <YAxis stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 8, fill: '#6b82a0' }} domain={yDomain} />
            <Tooltip contentStyle={{ background: '#0a1628', border: '1px solid #1a2d4a', fontFamily: 'Space Mono', fontSize: '10px' }} />
            <Line type="monotone" dataKey="value" stroke="#1e6bff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>USD EXCHANGE RATES</div>
          <ResponsiveContainer width="99%" height={200}>
            <BarChart data={fxData}>
              <XAxis dataKey="country" stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 10, fill: '#6b82a0' }} />
              <YAxis stroke="#2d4463" tick={{ fontFamily: 'Space Mono', fontSize: 10, fill: '#6b82a0' }} />
              <Tooltip contentStyle={{ background: '#0a1628', border: '1px solid #1a2d4a', fontFamily: 'Space Mono' }} />
              <Bar dataKey="rate" radius={[4,4,0,0]}>
                {fxData.map((_,i) => <Cell key={i} fill={colors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>AFRICA RISK RADAR</div>
          <ResponsiveContainer width="99%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1a2d4a" />
              <PolarAngleAxis dataKey="metric" tick={{ fontFamily: 'Space Mono', fontSize: 9, fill: '#6b82a0' }} />
              <Radar dataKey="value" stroke="#1e6bff" fill="#1e6bff" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <HeatMap />
      <CurrencyStress />
      <ElectionTracker />
      <DebtMaturity />
      <CommodityMatrix />

    </div>
  )
}
