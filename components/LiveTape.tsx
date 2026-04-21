'use client'

import { useEffect, useState } from 'react'

interface TapeEvent {
  time: string
  type: string
  message: string
}

export default function LiveTape() {
  const [events, setEvents] = useState<TapeEvent[]>([])
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/tape')
      const data = await res.json()
      setEvents(data)
      setLastUpdated(new Date().toISOString().slice(11,19) + ' UTC')
    }
    fetchData()
    const interval = setInterval(fetchData, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{padding:'24px'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'24px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#00c48c',boxShadow:'0 0 8px #00c48c'}} />
          <span style={{fontFamily:'Space Mono,monospace',fontSize:'10px',letterSpacing:'0.15em',color:'#6b82a0'}}>LIVE MACRO TAPE</span>
        </div>
        <span style={{fontFamily:'Space Mono,monospace',fontSize:'9px',color:'#2d4463'}}>UPDATED {lastUpdated}</span>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
        {events.map((e, i) => (
          <div key={i} style={{padding:'14px 16px',background:'#0a1628',border:'1px solid #1a2d4a',borderRadius:'6px'}}>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'9px',color:'#6b82a0',marginBottom:'4px'}}>[{e.time}] {e.type}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'13px',color:'#e8eef8',lineHeight:1.5}}>{e.message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
