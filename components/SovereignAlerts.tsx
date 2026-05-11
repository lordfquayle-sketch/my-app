import { content } from '@/app/content'

export default function SovereignAlerts() {
  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>TOP SOVEREIGN ALERTS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {content.sovereignAlerts.map((a, i) => (
          <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + a.color, borderRadius: '6px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>{a.flag}</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '12px', color: '#e8eef8', fontWeight: 700 }}>{a.country}</span>
              </div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: a.color, background: a.color + '22', padding: '2px 8px', borderRadius: '3px', border: '1px solid ' + a.color + '44' }}>{a.severity}</div>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#6b82a0', lineHeight: 1.5 }}>{a.alert}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
