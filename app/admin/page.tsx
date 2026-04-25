'use client'

import { useState, useEffect } from 'react'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const [insight1Title, setInsight1Title] = useState('MARKETS ARE MISPRICING DURATION RISK')
  const [insight1Body, setInsight1Body] = useState('Oil volatility is priced. Credit deterioration is not.')
  const [insight1Conclusion, setInsight1Conclusion] = useState('EXPECT CREDIT TO CATCH DOWN.')
  const [insight2Title, setInsight2Title] = useState('FX IS THE FIRST WARNING SIGNAL')
  const [insight2Body, setInsight2Body] = useState('Currency weakness is outpacing bond repricing. This is not stable.')
  const [insight2Conclusion, setInsight2Conclusion] = useState('FX MOVES FIRST. CREDIT FOLLOWS.')
  const [briefTitle, setBriefTitle] = useState('LIQUIDITY IS TIGHTENING FASTER THAN MARKETS ADMIT')
  const [briefBody, setBriefBody] = useState('African sovereign credit is entering a phase where funding conditions are deteriorating quietly.')
  const [weekNumber, setWeekNumber] = useState('17')
  const [riskIndex, setRiskIndex] = useState('68')
  const [riskStatus, setRiskStatus] = useState('ELEVATED')
  const [fxRates, setFxRates] = useState({
    NGN: '', GHS: '', KES: '', EGP: '', XOF: '', ZAR: '',
    ETB: '', TZS: '', UGX: '', MAD: '', XAF: '', ZMW: '', AOA: '', MZN: ''
  })

  const loadContent = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/content')
      const data = await res.json()
      if (data.insight1) { setInsight1Title(data.insight1.title); setInsight1Body(data.insight1.body); setInsight1Conclusion(data.insight1.conclusion) }
      if (data.insight2) { setInsight2Title(data.insight2.title); setInsight2Body(data.insight2.body); setInsight2Conclusion(data.insight2.conclusion) }
      if (data.brief) { setBriefTitle(data.brief.title); setBriefBody(data.brief.body); setWeekNumber(data.brief.week) }
      if (data.riskIndex) setRiskIndex(data.riskIndex)
      if (data.riskStatus) setRiskStatus(data.riskStatus)
      if (data.fxRates) setFxRates(data.fxRates)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const handleLogin = async () => {
    if (password === '1221password!') {
      setLoggedIn(true)
      setError('')
      await loadContent()
    } else {
      setError('Incorrect password')
    }
  }

  const handleSave = async () => {
    setSaving(true)
    const content = {
      insight1: { title: insight1Title, body: insight1Body, conclusion: insight1Conclusion },
      insight2: { title: insight2Title, body: insight2Body, conclusion: insight2Conclusion },
      brief: { title: briefTitle, body: briefBody, week: weekNumber },
      riskIndex,
      riskStatus,
      fxRates,
    }
    try {
      await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      console.error(e)
    }
    setSaving(false)
  }

  if (!loggedIn) {
    return (
      <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 88px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '40px', width: '100%', maxWidth: '400px' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '8px' }}>FIIFI TERMINAL</div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '24px', color: '#e8eef8', marginBottom: '24px' }}>Admin Access</h1>
          <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin()} style={{ width: '100%', padding: '12px', background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', color: '#e8eef8', fontFamily: 'Space Mono, monospace', fontSize: '12px', marginBottom: '12px', outline: 'none' }} />
          {error && <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ff3b3b', marginBottom: '12px' }}>{error}</div>}
          <button onClick={handleLogin} style={{ width: '100%', padding: '12px', background: '#1e6bff', border: 'none', borderRadius: '6px', color: '#fff', fontFamily: 'Space Mono, monospace', fontSize: '11px', cursor: 'pointer' }}>LOGIN</button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 88px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#6b82a0' }}>LOADING CONTENT...</div>
      </div>
    )
  }

  const inputStyle = { width: '100%', padding: '10px', background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', color: '#e8eef8', fontFamily: 'Syne, sans-serif', fontSize: '13px', outline: 'none', marginBottom: '8px' }
  const textareaStyle = { ...inputStyle, minHeight: '80px', resize: 'vertical' as const }
  const labelStyle = { fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '6px', display: 'block' }
  const sectionStyle = { background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }

  const fxCurrencies = [
    { code: 'NGN', country: 'Nigeria' }, { code: 'GHS', country: 'Ghana' },
    { code: 'KES', country: 'Kenya' }, { code: 'EGP', country: 'Egypt' },
    { code: 'XOF', country: 'Ivory Coast' }, { code: 'ZAR', country: 'South Africa' },
    { code: 'ETB', country: 'Ethiopia' }, { code: 'TZS', country: 'Tanzania' },
    { code: 'UGX', country: 'Uganda' }, { code: 'MAD', country: 'Morocco' },
    { code: 'XAF', country: 'Senegal' }, { code: 'ZMW', country: 'Zambia' },
    { code: 'AOA', country: 'Angola' }, { code: 'MZN', country: 'Mozambique' },
  ]

  return (
    <div style={{ background: '#050d1a', minHeight: 'calc(100vh - 88px)', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', marginBottom: '4px' }}>FIIFI TERMINAL</div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '24px', color: '#e8eef8' }}>Content Admin</h1>
        </div>
        <button onClick={handleSave} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', padding: '10px 20px', background: saved ? '#00c48c22' : '#1e6bff', border: saved ? '1px solid #00c48c' : 'none', borderRadius: '6px', color: saved ? '#00c48c' : '#fff', cursor: 'pointer' }}>
          {saving ? 'SAVING...' : saved ? '✓ SAVED' : 'SAVE ALL'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div style={sectionStyle}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>RISK INDEX</div>
          <label style={labelStyle}>AFRICA RISK SCORE (0-100)</label>
          <input style={inputStyle} value={riskIndex} onChange={e => setRiskIndex(e.target.value)} />
          <label style={labelStyle}>STATUS</label>
          <select style={inputStyle} value={riskStatus} onChange={e => setRiskStatus(e.target.value)}>
            <option>ELEVATED</option>
            <option>HIGH</option>
            <option>MODERATE</option>
            <option>LOW</option>
          </select>
        </div>

        <div style={sectionStyle}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>WEEKLY BRIEF</div>
          <label style={labelStyle}>WEEK NUMBER</label>
          <input style={inputStyle} value={weekNumber} onChange={e => setWeekNumber(e.target.value)} />
          <label style={labelStyle}>BRIEF TITLE</label>
          <input style={inputStyle} value={briefTitle} onChange={e => setBriefTitle(e.target.value)} />
          <label style={labelStyle}>BRIEF BODY</label>
          <textarea style={textareaStyle} value={briefBody} onChange={e => setBriefBody(e.target.value)} />
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '4px' }}>MANUAL FX RATES</div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '11px', color: '#2d4463', marginBottom: '16px' }}>Leave blank to use live API rates. Fill in to override manually.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {fxCurrencies.map(({ code, country }) => (
            <div key={code}>
              <label style={labelStyle}>USD/{code} — {country}</label>
              <input style={inputStyle} placeholder="e.g. 11.05" value={fxRates[code as keyof typeof fxRates]} onChange={e => setFxRates(prev => ({ ...prev, [code]: e.target.value }))} />
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>MACRO INSIGHT 1</div>
        <label style={labelStyle}>TITLE</label>
        <input style={inputStyle} value={insight1Title} onChange={e => setInsight1Title(e.target.value)} />
        <label style={labelStyle}>BODY</label>
        <textarea style={textareaStyle} value={insight1Body} onChange={e => setInsight1Body(e.target.value)} />
        <label style={labelStyle}>CONCLUSION</label>
        <input style={inputStyle} value={insight1Conclusion} onChange={e => setInsight1Conclusion(e.target.value)} />
      </div>

      <div style={sectionStyle}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '16px' }}>MACRO INSIGHT 2</div>
        <label style={labelStyle}>TITLE</label>
        <input style={inputStyle} value={insight2Title} onChange={e => setInsight2Title(e.target.value)} />
        <label style={labelStyle}>BODY</label>
        <textarea style={textareaStyle} value={insight2Body} onChange={e => setInsight2Body(e.target.value)} />
        <label style={labelStyle}>CONCLUSION</label>
        <input style={inputStyle} value={insight2Conclusion} onChange={e => setInsight2Conclusion(e.target.value)} />
      </div>

      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#2d4463', textAlign: 'center', marginTop: '24px' }}>
        POWERED BY LORD FIIFI QUAYLE ©️ 2026
      </div>
    </div>
  )
}
