'use client'

import { useEffect, useState } from 'react'
import { content } from '@/app/content'

export default function Ticker() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date().toUTCString().slice(17, 25) + ' UTC')
    }, 1000)
    return () => clearInterval(tick)
  }, [])

  const pairs = Object.entries(content.fxRates)
  const items = pairs.map(([code, rate]) => 'USD/' + code + ' ' + rate).join('   |   ')

  return (
    <div style={{ background: '#0a1628', borderBottom: '1px solid #1a2d4a', height: '32px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#1e6bff', padding: '0 16px', borderRight: '1px solid #1a2d4a', whiteSpace: 'nowrap' }}>LIVE</div>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'ticker 40s linear infinite', fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', paddingLeft: '100%' }}>
          {items}   |   {items}
        </div>
      </div>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463', padding: '0 16px', borderLeft: '1px solid #1a2d4a', whiteSpace: 'nowrap' }}>{time}</div>
      <style>{'@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }'}</style>
    </div>
  )
}
