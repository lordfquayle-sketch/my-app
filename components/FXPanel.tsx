'use client'

import { useEffect, useState } from 'react'

export default function FXPanel() {
  const [fx, setFx] = useState<any>({ NGN: '1580.00', GHS: '11.05', KES: '129.50', EGP: '50.20', XOF: '610.00', ZAR: '18.50' })
  const [time, setTime] = useState('')

  useEffect(() => {
    const fetchFX = async () => {
      const res = await fetch('/api/fx')
      const data = await res.json()
      if (data.NGN !== 'N/A') setFx(data)
      setTime(new Date().toISOString().slice(11, 19) + ' UTC')
    }
    fetchFX()
    const interval = setInterval(fetchFX, 60000)
    return () => clearInterval(interval)
  }, [])

  const currencies = [
    { code: 'NGN', country: 'Nigeria', flag: '🇳🇬' },
    { code: 'GHS', country: 'Ghana', flag: '🇬🇭' },
    { code: 'KES', country: 'Kenya', flag: '🇰🇪' },
    { code: 'EGP', country: 'Egypt', flag: '🇪🇬' },
    { code: 'XOF', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: 'ZAR', country: 'South Africa', flag: '🇿🇦' },
  ]

  return (
    <div style={{ padding: '24px', height: '100%' }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.15em',
        color: '#6b82a0',
        marginBottom: '24px',
      }}>SOVEREIGN RISK MONITOR</div>

      <div style={{ marginBottom: '32px' }}>
        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '11px',
          color: '#6b82a0',
          marginBottom: '8px',
          letterSpacing: '0.1em',
        }}>AFRICA RISK INDEX</div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '72px',
          fontWeight: 800,
          color: '#ff3b3b',
          lineHeight: 1,
          marginBottom: '8px',
        }}>68</div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: '#2d0f0f',
          border: '1px solid #ff3b3b33',
          borderRadius: '4px',
          padding: '4px 10px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b3b', boxShadow: '0 0 6px #ff3b3b' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ff3b3b', letterSpacing: '0.1em' }}>ELEVATED</span>
        </div>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '12px',
          color: '#6b82a0',
          marginTop: '12px',
          lineHeight: 1.6,
        }}>Driven by FX pressure and widening sovereign spreads.</div>
      </div>

      <div style={{ borderTop: '1px solid #1a2d4a', paddingTop: '24px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em' }}>LIVE FX RATES</div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#2d4463' }}>{time}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {currencies.map(({ code, country, flag }) => (
            <div key={code} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 12px',
              background: '#0a1628',
              border: '1px solid #1a2d4a',
              borderRadius: '6px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{flag}</span>
                <div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8eef8' }}>USD/{code}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', color: '#6b82a0' }}>{country}</div>
                </div>
              </div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '13px', color: '#00c48c', fontWeight: 700 }}>
                {Number(fx[code]).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
