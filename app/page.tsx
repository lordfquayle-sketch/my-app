'use client'

import { useEffect, useState } from 'react'
import LiveTape from '@/components/LiveTape'
import FXPanel from '@/components/FXPanel'

const defaultSignals = [
  { time: '14:32', signal: 'GHANA 2030s → +42bps', detail: 'LIQUIDITY THIN', type: 'ALERT' },
  { time: '14:31', signal: 'NIGERIA NGN → -1.8%', detail: 'PARALLEL GAP WIDENS', type: 'ALERT' },
  { time: '14:30', signal: 'BRENT → -2.1%', detail: 'DEMAND FEARS', type: 'WARNING' },
  { time: '14:29', signal: 'KENYA CDS → +18bps', detail: 'FISCAL PRESSURE', type: 'WARNING' },
  { time: '14:28', signal: 'EGYPT 2027s → -0.9pts', detail: 'BUYING INTEREST', type: 'INFO' },
  { time: '14:27', signal: 'ZAMBIA KWACHA → -1.1%', detail: 'DOLLAR DEMAND', type: 'ALERT' },
  { time: '14:26', signal: 'SOUTH AFRICA 10Y → +9bps', detail: 'GLOBAL RATES PRESSURE', type: 'WARNING' },
  { time: '14:25', signal: 'IVORY COAST CDS → +6bps', detail: 'MODEST WIDENING', type: 'INFO' },
  { time: '14:24', signal: 'ANGOLA OIL LINK', detail: 'STRESS BUILDING', type: 'WARNING' },
  { time: '14:23', signal: 'FRONTIER FX', detail: 'BROAD WEAKNESS', type: 'ALERT' },
]

const riskTable = [
  { country: 'GHANA', cds: 875, delta: '+35', bond: '-1.2pts', fx: '-0.6%', signal: 'FUNDING STRESS', color: '#ff3b3b' },
  { country: 'NIGERIA', cds: 910, delta: '+28', bond: '-0.8pts', fx: '-1.8%', signal: 'FX DISLOCATION', color: '#ff3b3b' },
  { country: 'KENYA', cds: 720, delta: '+18', bond: '-0.5pts', fx: '-0.3%', signal: 'FISCAL PRESSURE', color: '#f5a623' },
  { country: 'EGYPT', cds: 640, delta: '-12', bond: '+0.6pts', fx: '+0.2%', signal: 'TEMPORARY RELIEF', color: '#00c48c' },
  { country: 'ZAMBIA', cds: 980, delta: '+22', bond: '-0.7pts', fx: '-1.1%', signal: 'EXTERNAL STRESS', color: '#ff3b3b' },
  { country: 'ANGOLA', cds: 560, delta: '+10', bond: '-0.3pts', fx: '-0.4%', signal: 'OIL LINK STRAIN', color: '#f5a623' },
  { country: 'IVORY COAST', cds: 410, delta: '+6', bond: '-0.2pts', fx: '-0.1%', signal: 'STABLE BUT WATCH', color: '#00c48c' },
]

export default function Home() {
  const [blink, setBlink] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('signals')
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    const b = setInterval(() => setBlink(v => !v), 800)
    return () => clearInterval(b)
  }, [])

  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await fetch('/api/content')
        const data = await res.json()
        if (data && Object.keys(data).length > 0) setContent(data)
      } catch (e) {
        console.error(e)
      }
    }
    loadContent()
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Fiifi Terminal — Africa Macro Intelligence',
        text: 'Live sovereign risk, FX and macro signals for African markets.',
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const signalColor: Record<string, string> = {
    ALERT: '#ff3b3b',
    WARNING: '#f5a623',
    INFO: '#00c48c',
  }

  const riskIndex = content?.riskIndex || '68'
  const riskStatus = content?.riskStatus || 'ELEVATED'
  const manualFx = content?.fxRates || {}
  const insight1 = content?.insight1 || { title: 'MARKETS ARE MISPRICING DURATION RISK', body: 'Oil volatility is priced. Credit deterioration is not.', conclusion: 'EXPECT CREDIT TO CATCH DOWN.' }
  const insight2 = content?.insight2 || { title: 'FX IS THE FIRST WARNING SIGNAL', body: 'Currency weakness is outpacing bond repricing. This is not stable.', conclusion: 'FX MOVES FIRST. CREDIT FOLLOWS.' }
  const brief = content?.brief || { title: 'LIQUIDITY IS TIGHTENING FASTER THAN MARKETS ADMIT', body: 'African sovereign credit is entering a phase where funding conditions are deteriorating quietly.', week: '17' }

  return (
    <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 88px)' }}>
      <div style={{ background: '#0a1628', borderBottom: '1px solid #1a2d4a', padding: '20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00c48c', boxShadow: '0 0 8px #00c48c', opacity: blink ? 1 : 0.2, transition: 'opacity 0.3s' }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em' }}>AFRICA MACRO INTELLIGENCE</span>
            </div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(20px, 4vw, 32px)', color: '#e8eef8', marginBottom: '4px' }}>REAL-TIME SOVEREIGN RISK</h1>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#6b82a0' }}>FX · CREDIT · MACRO FLOWS · FRONTIER MARKETS</p>
          </div>
          <button onClick={handleShare} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', padding: '8px 16px', background: '#1e6bff22', border: '1px solid #1e6bff', borderRadius: '6px', color: '#1e6bff', cursor: 'pointer' }}>
            {copied ? 'COPIED!' : '↗️ SHARE'}
          </button>
        </div>
      </div>

      <div style={{ padding: '16px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        <div style={{ minWidth: 0 }}>
          <FXPanel riskIndex={riskIndex} riskStatus={riskStatus} manualFx={manualFx} />
        </div>

        <div style={{ minWidth: 0, gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', gap: '2px', marginBottom: '16px', background: '#0a1628', borderRadius: '8px', padding: '4px', border: '1px solid #1a2d4a' }}>
            {[['signals', 'SIGNAL STREAM'], ['risk', 'RISK TABLE'], ['insights', 'MACRO INSIGHTS'], ['tape', 'NEWS TAPE']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)} style={{ flex: 1, fontFamily: 'Space Mono, monospace', fontSize: '9px', padding: '8px 4px', borderRadius: '6px', border: 'none', background: activeTab === key ? '#1e6bff22' : 'transparent', color: activeTab === key ? '#1e6bff' : '#6b82a0', cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.2s' }}>
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'signals' && (
            <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>LIVE SIGNAL LAYER — AFRICAN MARKETS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {defaultSignals.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + signalColor[s.type], borderRadius: '6px' }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463', whiteSpace: 'nowrap' }}>{s.time}</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8', flex: 1 }}>{s.signal}</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: signalColor[s.type], whiteSpace: 'nowrap' }}>{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '16px', overflowX: 'auto' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>SOVEREIGN RISK — RANKED BY REAL-TIME DETERIORATION</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Mono, monospace', fontSize: '10px', minWidth: '500px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1a2d4a' }}>
                    {['COUNTRY', 'CDS', 'Δ24H', 'BOND', 'FX', 'SIGNAL'].map(h => (
                      <th key={h} style={{ padding: '8px', color: '#6b82a0', textAlign: 'left', fontWeight: 400 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {riskTable.map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #0f1e35' }}>
                      <td style={{ padding: '10px 8px', color: '#e8eef8', fontWeight: 700 }}>{r.country}</td>
                      <td style={{ padding: '10px 8px', color: '#e8eef8' }}>{r.cds}</td>
                      <td style={{ padding: '10px 8px', color: r.delta.startsWith('+') ? '#ff3b3b' : '#00c48c' }}>{r.delta}</td>
                      <td style={{ padding: '10px 8px', color: r.bond.startsWith('-') ? '#ff3b3b' : '#00c48c' }}>{r.bond}</td>
                      <td style={{ padding: '10px 8px', color: r.fx.startsWith('-') ? '#ff3b3b' : '#00c48c' }}>{r.fx}</td>
                      <td style={{ padding: '10px 8px', color: r.color, fontSize: '9px' }}>{r.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'insights' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[insight1, insight2].map((insight, i) => (
                <div key={i} style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#1e6bff', letterSpacing: '0.1em', marginBottom: '10px', fontWeight: 700 }}>{insight.title}</div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7, marginBottom: '12px' }}>{insight.body}</p>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8', borderTop: '1px solid #1a2d4a', paddingTop: '10px' }}>{insight.conclusion}</div>
                </div>
              ))}
              <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>WEEKLY MACRO BRIEF — WEEK {brief.week}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#f5a623', marginBottom: '10px' }}>{brief.title}</div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7 }}>{brief.body}</p>
              </div>
            </div>
          )}

          {activeTab === 'tape' && <LiveTape />}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a2d4a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>POWERED BY LORD FIIFI QUAYLE ©️ 2026</div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>AFRICA MACRO INTELLIGENCE · REAL-TIME SOVEREIGN RISK</div>
        <button onClick={handleShare} style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', padding: '6px 12px', background: 'transparent', border: '1px solid #1a2d4a', borderRadius: '4px', color: '#6b82a0', cursor: 'pointer' }}>
          {copied ? 'COPIED!' : '↗️ SHARE TERMINAL'}
        </button>
      </div>
    </div>
  )
}
