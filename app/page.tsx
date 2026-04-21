import LiveTape from '@/components/LiveTape'

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-black min-h-screen">
      <div className="border border-gray-800 p-4">
        <p className="text-xs text-gray-500">AFRICA RISK INDEX</p>
        <h1 className="text-5xl font-bold text-red-500">68</h1>
        <p className="text-yellow-400">ELEVATED</p>
        <div className="mt-4 text-sm text-gray-400">
          Driven by FX pressure and widening sovereign spreads.
        </div>
      </div>
      <div className="col-span-2">
        <LiveTape />
      </div>
    </div>
  )
}
