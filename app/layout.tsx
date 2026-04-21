import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fiifi Terminal',
  description: 'Live Africa Macro Terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <nav className="border-b border-gray-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold text-sm">●</span>
            <span className="text-white font-bold text-sm">FIIFI TERMINAL</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-400 hover:text-white text-sm transition">
              HOME
            </Link>
            <Link href="/insights" className="text-gray-400 hover:text-white text-sm transition">
              INSIGHTS
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white text-sm transition">
              ABOUT
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
