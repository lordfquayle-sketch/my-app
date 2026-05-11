import { content } from '@/app/content'

export default function ElectionTracker() {
  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>ELECTION TRACKER — 2026-2028</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {content.elections.map((e, i) => (
          <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + e.color, borderRadius: '6px', padding: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>{e.flag}</span>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#e8eef8', fontWeight: 700 }}>{e.country}</div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0' }}>{e.type}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#e8eef8', background: '#1a2d4a', padding: '3px 8px', borderRadius: '4px' }}>{e.date}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: e.color, background: e.color + '22', padding: '3px 8px', borderRadius: '3px', border: '1px solid ' + e.color + '44' }}>{e.risk} RISK</div>
              </div>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#6b82a0', lineHeight: 1.5 }}>{e.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
