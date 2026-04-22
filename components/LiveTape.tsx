'use client'

import { useEffect, useState } from 'react'

interface TapeEvent {
  time: string
  type: string
  message: string
  source: string
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

  const colors: Record<string, {text: string, bg: string, border: string}> = {
    ALERT: { text: '#ff3b3b', bg: '#2d0f0f', border: '#ff3b3b33' },
    WARNING: { text: '#f5a623', bg: '#2d1f0a', border: '#f5a62333' },
    INFO: { text: '#00c48c', bg: '#0a2d20', border: '#00c48c33' },
  }

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
        {events.map((e, i) => {
          const c = colors[e.type] || colors.INFO
          return (
            <div key={i} style={{padding:'14px 16px',background:c.bg,border:'1px solid ' + c.border,borderLeft:'3px solid ' + c.text,borderRadius:'6px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px'}}>
                <div style={{fontFamily:'Space Mono,monospace',fontSize:'9px',color:c.text,letterSpacing:'0.1em'}}>{e.type}</div>
                <div style={{fontFamily:'Space Mono,monospace',fontSize:'9px',color:'#2d4463'}}>{e.source} · {e.time}</div>
              </div>
              <div style={{fontFamily:'Syne,sans-serif',fontSize:'13px',color:'#e8eef8',lineHeight:1.5}}>{e.message}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
