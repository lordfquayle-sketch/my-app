'use client'

import { useEffect, useState } from 'react'

export default function LiveTape() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/tape')
      const data = await res.json()
      setEvents(data)
    }
    fetchData()
    const interval = setInterval(fetchData, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[600px] overflow-hidden border border-gray-800 p-3 bg-black">
      <p className="text-xs text-gray-500 mb-2">LIVE MACRO TAPE</p>
      <div className="space-y-2">
        {events.map((e, i) => (
          <div key={i} className="text-sm">
            <span className="text-gray-500">[{e.time}]</span>{" "}
            <span className={e.type === "ALERT" ? "text-red-500" : e.type === "WARNING" ? "text-yellow-400" : "text-green-400"}>
              {e.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
