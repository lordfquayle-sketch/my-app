export default function About() {
  return (
    <div className="bg-black min-h-screen p-6">
      <p className="text-xs text-gray-500 mb-1">FIIFI TERMINAL</p>
      <h1 className="text-2xl font-bold text-white mb-8">About</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">
          <div className="border border-gray-800 p-6">
            <p className="text-xs text-gray-500 mb-4">ANALYST PROFILE</p>
            <h2 className="text-xl font-bold text-white mb-1">Lord Fiifi Quayle</h2>
            <p className="text-yellow-400 text-sm mb-6">Sovereign Risk Analyst — African Frontier Markets</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Lord Fiifi Quayle is a sovereign risk analyst focused on African frontier markets. His work centers on the interaction between currency dynamics, sovereign credit, and fiscal conditions, with an emphasis on identifying early signals of macro-financial stress.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              He is the developer of the African Risk Index, a model-driven system for tracking sovereign risk across the continent in real time.
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <p className="text-xs text-gray-500 mb-4">FOCUS AREAS</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Currency Dynamics",
                "Sovereign Credit",
                "Fiscal Conditions",
                "Early Stress Signals",
                "Frontier Markets",
                "Market Repricing"
              ].map((area, i) => (
                <div key={i} className="border border-gray-800 p-3">
                  <p className="text-green-400 text-sm">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-800 p-6">
            <p className="text-xs text-gray-500 mb-4">THE PRODUCT</p>
            <h3 className="text-white font-bold mb-2">African Risk Index</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A live, model-driven system tracking sovereign risk across Africa, with a focus on early stress signals before market repricing.
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <p className="text-xs text-gray-500 mb-4">SYSTEM STATUS</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Terminal</span>
                <span className="text-green-400">● LIVE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Risk Index</span>
                <span className="text-red-400">● ELEVATED</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FX Feed</span>
                <span className="text-green-400">● LIVE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">News Tape</span>
                <span className="text-green-400">● LIVE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
