import { content } from '@/app/content'

export default function CurrencyStress() {
  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>CURRENCY STRESS DASHBOARD</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        {content.currencyStress.map((c, i) => (
          <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderLeft: '3px solid ' + c.color, borderRadius: '6px', padding: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8', fontWeight: 700 }}>USD/{c.code}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: c.color, background: c.color + '22', padding: '2px 6px', borderRadius: '3px' }}>{c.stress}</div>
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '9px', color: '#6b82a0', marginBottom: '8px' }}>{c.country}</div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '16px', color: '#e8eef8', fontWeight: 700, marginBottom: '6px' }}>{c.rate}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>1Y CHANGE</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: c.change.startsWith('+') ? '#00c48c' : '#ff3b3b' }}>{c.change}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#2d4463' }}>YTD</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: c.ytd.startsWith('+') ? '#00c48c' : '#ff3b3b' }}>{c.ytd}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
