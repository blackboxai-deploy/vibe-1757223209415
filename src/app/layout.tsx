import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Media Generator Prototype',
  description: 'Generate AI images and videos with cutting-edge technology',
  keywords: 'AI, image generation, video generation, artificial intelligence',
  authors: [{ name: 'AI Generator Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
          {children}
        </div>
      </body>
    </html>
  )
}