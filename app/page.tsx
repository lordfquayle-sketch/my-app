import LiveTape from '@/components/LiveTape'
import FXPanel from '@/components/FXPanel'

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-black min-h-screen">
      <div>
        <FXPanel />
      </div>
      <div className="col-span-2">
        <LiveTape />
      </div>
    </div>
  )
}
