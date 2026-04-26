'use client'

import { useEffect, useState } from 'react'
import LiveTape from '@/components/LiveTape'
import { content } from '@/app/content'

export default function Home() {
  const [blink, setBlink] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('signals')
  const [time, setTime] = useState('')

  useEffect(() => {
    const b = setInterval(() => setBlink(v => !v), 800)
    return () => clearInterval(b)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date()
      setTime(now.toUTCString().slice(0, 25) + ' UTC')
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'Fiifi Terminal', text: 'Live Africa Macro Intelligence', url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const signalColor: Record<string, string> = { ALERT: '#ff3b3b', WARNING: '#f5a623', INFO: '#00c48c' }
  const impactColor: Record<string, string> = { HIGH: '#ff3b3b', MEDIUM: '#f5a623', LOW: '#00c48c' }

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #0a1628 0%, #050d1a 100%)', borderBottom: '1px solid #1a2d4a', padding: '32px 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', maxWidth: '1400px', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00c48c', boxShadow: '0 0 8px #00c48c', opacity: blink ? 1 : 0.2, transition: 'opacity 0.3s' }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em' }}>AFRICA MACRO INTELLIGENCE</span>
            </div>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 52px)', color: '#e8eef8', lineHeight: 1.1, marginBottom: '4px' }}>REAL-TIME</h1>
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 52px)', color: '#00c48c', lineHeight: 1.1, marginBottom: '12px' }}>SOVEREIGN RISK</h1>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', color: '#6b82a0', maxWidth: '500px' }}>Actionable intelligence. Unrivalled clarity. Timed for advantage.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <button onClick={handleShare} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', padding: '8px 16px', background: '#1e6bff22', border: '1px solid #1e6bff', borderRadius: '6px', color: '#1e6bff', cursor: 'pointer' }}>
              {copied ? 'COPIED!' : '↗️ SHARE'}
            </button>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>{time}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px' }}>

        {/* 3 COLUMN GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '24px' }}>

          {/* COLUMN 1: AFRICA RISK PRESSURE MAP */}
          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#1e6bff', fontWeight: 700 }}>1</span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.1em' }}>AFRICA RISK PRESSURE MAP</span>
            </div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#2d4463', marginBottom: '16px' }}>Real-time sovereign risk positioning across key African markets.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {content.pressureMap.map((c, i) => (
                <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + c.statusColor, borderRadius: '6px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '14px' }}>{c.flag}</span>
                      <div>
                        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', color: '#e8eef8', fontWeight: 700 }}>{c.country}</div>
                        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0' }}>Outlook: {c.outlook}</div>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: c.statusColor, background: c.statusColor + '22', padding: '3px 8px', borderRadius: '3px', border: '1px solid ' + c.statusColor + '44' }}>{c.status}</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    <div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>CDS (5Y)</div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: c.statusColor, fontWeight: 700 }}>{c.cds} bps</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>FX PRESSURE</div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: c.fxPressure === 'HIGH' ? '#ff3b3b' : c.fxPressure === 'ELEVATED' ? '#f5a623' : '#00c48c', fontWeight: 700 }}>{c.fxPressure}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>LIQUIDITY</div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: c.liquidity === 'TIGHT' ? '#ff3b3b' : c.liquidity === 'WATCH' ? '#f5a623' : '#00c48c', fontWeight: 700 }}>{c.liquidity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', padding: '10px', background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', display: 'flex', justifyContent: 'space-around' }}>
              {[['#ff3b3b', 'STRESSED'], ['#f5a623', 'TIGHTENING'], ['#00c48c', 'STABLE']].map(([color, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#6b82a0' }}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463', marginTop: '8px' }}>Source: Fiifi Terminal Risk Engine</div>
          </div>

          {/* COLUMN 2: WHAT MATTERS NOW */}
          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#1e6bff', fontWeight: 700 }}>2</span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.1em' }}>WHAT MATTERS NOW</span>
            </div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#2d4463', marginBottom: '16px' }}>Key macro and market drivers shaping sovereign risk and flows.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {content.whatMattersNow.map((item, i) => (
                <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '16px' }}>{item.icon}</span>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#1e6bff', fontWeight: 700, letterSpacing: '0.05em' }}>{item.title}</div>
                  </div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', color: '#6b82a0', lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '16px', padding: '14px', background: '#050d1a', border: '1px solid #1e6bff33', borderRadius: '6px', cursor: 'pointer' }} onClick={() => setActiveTab('risk')}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#1e6bff' }}>VIEW MACRO DASHBOARD →</div>
            </div>
          </div>

          {/* COLUMN 3: LIVE SIGNAL LAYER */}
          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#1e6bff', fontWeight: 700 }}>3</span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.1em' }}>LIVE SIGNAL LAYER</span>
            </div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#2d4463', marginBottom: '16px' }}>Real-time market alerts and signals as they happen.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {content.signals.map((s, i) => (
                <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + signalColor[s.type], borderRadius: '6px', padding: '10px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: signalColor[s.type], background: signalColor[s.type] + '22', padding: '2px 6px', borderRadius: '3px' }}>{s.tag}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>{s.country}</span>
                    </div>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>{s.time}</span>
                  </div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', color: '#e8eef8', lineHeight: 1.4, marginBottom: '4px' }}>{s.signal}</div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: impactColor[s.detail] }}>Impact: {s.detail}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '12px', padding: '14px', background: '#050d1a', border: '1px solid #1e6bff33', borderRadius: '6px', cursor: 'pointer' }} onClick={() => setActiveTab('signals')}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#1e6bff' }}>VIEW ALL SIGNALS →</div>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '2px', marginBottom: '16px', background: '#050d1a', borderRadius: '8px', padding: '4px' }}>
            {[['signals', 'SIGNAL STREAM'], ['risk', 'RISK TABLE'], ['insights', 'MACRO INSIGHTS'], ['tape', 'NEWS TAPE']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)} style={{ flex: 1, fontFamily: 'Space Mono, monospace', fontSize: '9px', padding: '8px 4px', borderRadius: '6px', border: 'none', background: activeTab === key ? '#1e6bff22' : 'transparent', color: activeTab === key ? '#1e6bff' : '#6b82a0', cursor: 'pointer', letterSpacing: '0.05em', transition: 'all 0.2s' }}>
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'signals' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {content.signals.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + signalColor[s.type], borderRadius: '6px' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463', whiteSpace: 'nowrap' }}>{s.time}</span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: signalColor[s.type], background: signalColor[s.type] + '22', padding: '2px 6px', borderRadius: '3px', whiteSpace: 'nowrap' }}>{s.tag}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#e8eef8', flex: 1 }}>{s.signal}</span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: impactColor[s.detail], whiteSpace: 'nowrap' }}>Impact: {s.detail}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'risk' && (
            <div style={{ overflowX: 'auto' }}>
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
                <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#1e6bff', letterSpacing: '0.1em', marginBottom: '10px', fontWeight: 700 }}>{insight.title}</div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7, marginBottom: '12px' }}>{insight.body}</p>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8', borderTop: '1px solid #1a2d4a', paddingTop: '10px' }}>{insight.conclusion}</div>
                </div>
              ))}
              <div style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>WEEKLY MACRO BRIEF — WEEK {content.brief.week}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#f5a623', marginBottom: '10px' }}>{content.brief.title}</div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7 }}>{content.brief.body}</p>
              </div>
            </div>
          )}

          {activeTab === 'tape' && <LiveTape />}
        </div>

        {/* PHILOSOPHY FOOTER */}
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '24px', marginBottom: '24px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(16px, 3vw, 24px)', color: '#e8eef8', marginBottom: '8px' }}>
            "This terminal follows capital, not headlines."
          </div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0' }}>
            POWERED BY FIIFI TERMINAL RISK ENGINE · LORD FIIFI QUAYLE ©️ 2026
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid #1a2d4a', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>{time}</div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>POWERED BY FIIFI TERMINAL RISK ENGINE</div>
        <button onClick={handleShare} style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', padding: '6px 12px', background: 'transparent', border: '1px solid #1a2d4a', borderRadius: '4px', color: '#6b82a0', cursor: 'pointer' }}>
          {copied ? 'COPIED!' : '↗️ SHARE TERMINAL'}
        </button>
      </div>

    </div>
  )
}
