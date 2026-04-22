'use client'
import { useEffect, useState } from 'react'
export default function Ticker() {
  const [fx, setFx] = useState({})
  const [time, setTime] = useState('')
  useEffect(() => {
    const fetchFX = async () => {
      const res = await fetch('/api/fx')
      const data = await res.json()
      if (data.NGN !== 'N/A') setFx(data)
    }
    fetchFX()
    const interval = setInterval(fetchFX, 60000)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date().toUTCString().slice(17, 25) + ' UTC')
    }, 1000)
    return () => clearInterval(tick)
  }, [])
  const pairs = ['NGN','GHS','KES','EGP','ZAR','ETB','MAD','ZMW','AOA','MZN']
  const flags = {'NGN':'🇳🇬','GHS':'🇬🇭','KES':'🇰🇪','EGP':'🇪🇬','ZAR':'🇿🇦','ETB':'🇪🇹','MAD':'🇲🇦','ZMW':'🇿🇲','AOA':'🇦🇴','MZN':'🇲🇿'}
  const items = pairs.map(c => flags[c] + ' USD/' + c + ' ' + (fx[c] ? Number(fx[c]).toFixed(2) : '...')).join('   |   ')
  return (
    <div style={{background:'#0a1628',borderBottom:'1px solid #1a2d4a',height:'32px',display:'flex',alignItems:'center',overflow:'hidden'}}>
      <div style={{fontFamily:'Space Mono,monospace',fontSize:'10px',color:'#1e6bff',padding:'0 16px',borderRight:'1px solid #1a2d4a',whiteSpace:'nowrap'}}>LIVE</div>
      <div style={{overflow:'hidden',flex:1}}>
        <div style={{display:'inline-block',whiteSpace:'nowrap',animation:'ticker 40s linear infinite',fontFamily:'Space Mono,monospace',fontSize:'10px',color:'#6b82a0',paddingLeft:'100%'}}>
          {items}   |   {items}
        </div>
      </div>
      <div style={{fontFamily:'Space Mono,monospace',fontSize:'10px',color:'#2d4463',padding:'0 16px',borderLeft:'1px solid #1a2d4a',whiteSpace:'nowrap'}}>{time}</div>
      <style>{'@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }'}</style>
    </div>
  )
}
