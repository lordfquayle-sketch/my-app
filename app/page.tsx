'use client'

import { useEffect, useState } from 'react'
import LiveTape from '@/components/LiveTape'
import FXPanel from '@/components/FXPanel'
import { content } from '@/app/content'

export default function Home() {
  const [blink, setBlink] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('signals')

  useEffect(() => {
    const b = setInterval(() => setBlink(v => !v), 800)
    return () => clearInterval(b)
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
          <FXPanel riskIndex={content.riskIndex} riskStatus={content.riskStatus} manualFx={content.fxRates} />
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
                {content.signals.map((s, i) => (
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
                  {content.riskTable.map((r, i) => (
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
              {[content.insight1, content.insight2].map((insight, i) => (
                <div key={i} style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#1e6bff', letterSpacing: '0.1em', marginBottom: '10px', fontWeight: 700 }}>{insight.title}</div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7, marginBottom: '12px' }}>{insight.body}</p>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8', borderTop: '1px solid #1a2d4a', paddingTop: '10px' }}>{insight.conclusion}</div>
                </div>
              ))}
              <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>WEEKLY MACRO BRIEF — WEEK {content.brief.week}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#f5a623', marginBottom: '10px' }}>{content.brief.title}</div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7 }}>{content.brief.body}</p>
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
