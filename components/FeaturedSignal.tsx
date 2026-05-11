import { content } from '@/app/content'

export default function FeaturedSignal() {
  const s = content.featuredSignal
  return (
    <div style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1e35 100%)', border: '1px solid #ff3b3b33', borderLeft: '4px solid #ff3b3b', borderRadius: '8px', padding: '24px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#ff3b3b', background: '#ff3b3b22', padding: '4px 10px', borderRadius: '4px', border: '1px solid #ff3b3b33' }}>{s.tag}</div>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463' }}>{s.date}</div>
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '16px', color: '#e8eef8', marginBottom: '10px', letterSpacing: '0.05em' }}>{s.title}</div>
      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: '#6b82a0', lineHeight: 1.7, marginBottom: '12px' }}>{s.body}</p>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463' }}>— {s.author}</div>
    </div>
  )
}
