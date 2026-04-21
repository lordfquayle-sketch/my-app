import LiveTape from '@/components/LiveTape'
import FXPanel from '@/components/FXPanel'

export default function Home() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: '1px',
      background: '#1a2d4a',
      minHeight: 'calc(100vh - 56px)',
    }}>
      <div style={{ background: '#050d1a' }}>
        <FXPanel />
      </div>
      <div style={{ background: '#050d1a' }}>
        <LiveTape />
      </div>
    </div>
  )
}
