import Image from 'next/image'

export default function About() {
  return (
    <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 56px)', padding: '24px' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#6b82a0', marginBottom: '4px' }}>FIIFI TERMINAL</div>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '28px', color: '#e8eef8', marginBottom: '32px' }}>About</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', overflow: 'hidden' }}>
            <Image
              src="/profile.jpeg"
              alt="Lord Fiifi Quayle"
              width={400}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'top' }}
            />
            <div style={{ padding: '16px' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#e8eef8', marginBottom: '4px' }}>Lord Fiifi Quayle</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#f5a623', letterSpacing: '0.1em' }}>SOVEREIGN RISK ANALYST</div>
            </div>
          </div>

          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '12px' }}>SYSTEM STATUS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Terminal', status: 'LIVE', color: '#00c48c' },
                { label: 'Risk Index', status: 'ELEVATED', color: '#ff3b3b' },
                { label: 'FX Feed', status: 'LIVE', color: '#00c48c' },
                { label: 'News Tape', status: 'LIVE', color: '#00c48c' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#6b82a0' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, boxShadow: '0 0 6px ' + item.color }} />
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: item.color }}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>ANALYST PROFILE</div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', color: '#e8eef8', lineHeight: 1.8, marginBottom: '16px' }}>
              Lord Fiifi Quayle is a sovereign risk analyst focused on African frontier markets. His work centers on the interaction between currency dynamics, sovereign credit, and fiscal conditions, with an emphasis on identifying early signals of macro-financial stress.
            </p>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', color: '#e8eef8', lineHeight: 1.8 }}>
              He is the developer of the African Risk Index, a model-driven system for tracking sovereign risk across the continent in real time.
            </p>
          </div>

          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>FOCUS AREAS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {['Currency Dynamics', 'Sovereign Credit', 'Fiscal Conditions', 'Early Stress Signals', 'Frontier Markets', 'Market Repricing'].map((area, i) => (
                <div key={i} style={{ background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#00c48c' }}>▸ {area}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>THE PRODUCT</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#e8eef8', marginBottom: '8px' }}>African Risk Index</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7 }}>
              A live, model-driven system tracking sovereign risk across Africa, with a focus on early stress signals before market repricing.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
