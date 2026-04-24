'use client'

import { useState } from 'react'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

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

  const handleLogin = () => {
    if (password === '1221password!') {
      setLoggedIn(true)
      setError('')
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
    }
    localStorage.setItem('terminal_content', JSON.stringify(content))
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
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

  const inputStyle = { width: '100%', padding: '10px', background: '#050d1a', border: '1px solid #1a2d4a', borderRadius: '6px', color: '#e8eef8', fontFamily: 'Syne, sans-serif', fontSize: '13px', outline: 'none', marginBottom: '8px' }
  const textareaStyle = { ...inputStyle, minHeight: '80px', resize: 'vertical' as const }
  const labelStyle = { fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#6b82a0', letterSpacing: '0.15em', marginBottom: '6px', display: 'block' }
  const sectionStyle = { background: '#0a1628', border: '1px solid #1a2d4a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }

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
