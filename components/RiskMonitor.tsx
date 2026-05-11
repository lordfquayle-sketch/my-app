import { content } from '@/app/content'

export default function RiskMonitor() {
  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '4px' }}>LIVE AFRICA RISK MONITOR</div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463' }}>Updated {content.riskMonitor.updated}</div>
        </div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#ff3b3b', background: '#ff3b3b22', padding: '4px 10px', borderRadius: '4px', border: '1px solid #ff3b3b33' }}>
          TREND: {content.riskMonitor.trend}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '16px' }}>
        {content.riskMonitor.regions.map((r, i) => (
          <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', padding: '12px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0', marginBottom: '6px' }}>{r.region.toUpperCase()}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '24px', color: r.color }}>{r.score}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '14px', color: r.color }}>{r.trend}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #1a2d4a', paddingTop: '12px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0', marginBottom: '8px' }}>KEY RISK DRIVERS</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {content.riskMonitor.drivers.map((d, i) => (
            <div key={i} style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#f5a623', background: '#f5a62322', padding: '3px 8px', borderRadius: '3px', border: '1px solid #f5a62333' }}>{d}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
