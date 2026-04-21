import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fiifi Terminal',
  description: 'Live Africa Macro Terminal by Lord Fiifi Quayle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#050d1a' }}>
        <nav style={{
          background: '#0a1628',
          borderBottom: '1px solid #1a2d4a',
          padding: '0 32px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: '#00c48c',
              boxShadow: '0 0 8px #00c48c',
            }} />
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '14px',
              letterSpacing: '0.15em',
              color: '#e8eef8',
            }}>FIIFI TERMINAL</span>
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: '#6b82a0',
              letterSpacing: '0.1em',
              marginLeft: '8px',
            }}>AFRICA MACRO INTELLIGENCE</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#6b82a0', textDecoration: 'none' }}>HOME</Link>
            <Link href="/insights" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#6b82a0', textDecoration: 'none' }}>INSIGHTS</Link>
            <Link href="/about" style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#6b82a0', textDecoration: 'none' }}>ABOUT</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
