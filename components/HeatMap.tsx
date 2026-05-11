import { content } from '@/app/content'

export default function HeatMap() {
  const getColor = (score: number) => {
    if (score >= 75) return '#ff3b3b'
    if (score >= 60) return '#f5a623'
    return '#00c48c'
  }

  return (
    <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>SOVEREIGN HEAT MAP — RISK DIMENSIONS</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Mono, monospace', fontSize: '10px', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1a2d4a' }}>
              {['COUNTRY', 'OVERALL', 'FISCAL', 'FX', 'DEBT', 'POLITICAL', 'EXTERNAL'].map(h => (
                <th key={h} style={{ padding: '8px', color: '#6b82a0', textAlign: 'left', fontWeight: 400 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.heatMap.map((c, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #0f1e35' }}>
                <td style={{ padding: '10px 8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{c.flag}</span>
                    <span style={{ color: '#e8eef8', fontWeight: 700 }}>{c.country}</span>
                  </div>
                </td>
                {[c.score, c.fiscal, c.fx, c.debt, c.political, c.external].map((val, j) => (
                  <td key={j} style={{ padding: '10px 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: getColor(val) + '33', border: '1px solid ' + getColor(val) + '66', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: getColor(val), fontWeight: 700, fontSize: '11px' }}>{val}</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
        {[['#ff3b3b', 'HIGH RISK (75+)'], ['#f5a623', 'ELEVATED (60-74)'], ['#00c48c', 'MODERATE (<60)']].map(([color, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '8px', color: '#6b82a0' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
