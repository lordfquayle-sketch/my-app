import { content } from '@/app/content'

export default function CommodityMatrix() {
  const riskColor = (risk: string) => {
    if (risk === 'HIGH') return '#ff3b3b'
    if (risk === 'MEDIUM') return '#f5a623'
    return '#00c48c'
  }

  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>COMMODITY EXPOSURE MATRIX</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Mono, monospace', fontSize: '10px', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1a2d4a' }}>
              {['COUNTRY', 'COMMODITY', 'EXPOSURE', 'GDP SHARE', 'REVENUE', '2026 PRICE', 'TREND', 'RISK'].map(h => (
                <th key={h} style={{ padding: '8px', color: '#6b82a0', textAlign: 'left', fontWeight: 400 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.commodityExposure.map((c, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #0f1e35' }}>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{c.flag}</span>
                    <span style={{ color: '#e8eef8', fontWeight: 700 }}>{c.country}</span>
                  </div>
                </td>
                <td style={{ padding: '10px 8px', color: '#6b82a0' }}>{c.primary}</td>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: riskColor(c.risk), background: riskColor(c.risk) + '22', padding: '2px 6px', borderRadius: '3px', display: 'inline-block' }}>{c.exposure}</div>
                </td>
                <td style={{ padding: '10px 8px', color: '#e8eef8' }}>{c.gdpShare}</td>
                <td style={{ padding: '10px 8px', color: '#e8eef8' }}>{c.revenueShare}</td>
                <td style={{ padding: '10px 8px', color: '#00c48c' }}>{c.price2026}</td>
                <td style={{ padding: '10px 8px', color: c.trend === '↑' ? '#00c48c' : c.trend === '↓' ? '#ff3b3b' : '#f5a623', fontSize: '14px' }}>{c.trend}</td>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: riskColor(c.risk), background: riskColor(c.risk) + '22', padding: '2px 6px', borderRadius: '3px', display: 'inline-block' }}>{c.risk}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
