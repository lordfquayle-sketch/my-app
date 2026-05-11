import { content } from '@/app/content'

export default function DebtMaturity() {
  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>DEBT MATURITY CALENDAR — 2026</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Mono, monospace', fontSize: '10px', minWidth: '500px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1a2d4a' }}>
              {['COUNTRY', 'AMOUNT', 'INSTRUMENT', 'MATURITY', 'RISK'].map(h => (
                <th key={h} style={{ padding: '8px', color: '#6b82a0', textAlign: 'left', fontWeight: 400 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.debtMaturities.map((d, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #0f1e35' }}>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{d.flag}</span>
                    <span style={{ color: '#e8eef8', fontWeight: 700 }}>{d.country}</span>
                  </div>
                </td>
                <td style={{ padding: '10px 8px', color: '#e8eef8', fontWeight: 700 }}>{d.amount}</td>
                <td style={{ padding: '10px 8px', color: '#6b82a0' }}>{d.instrument}</td>
                <td style={{ padding: '10px 8px', color: '#f5a623' }}>{d.maturity}</td>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: d.color, background: d.color + '22', padding: '3px 8px', borderRadius: '3px', display: 'inline-block' }}>{d.risk}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
