import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Monica HR - Find Your Next Opportunity',
  description: 'Premier job board and HR services platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-semibold text-slate-900 tracking-tight">
                Monica <span className="text-emerald-600">HR</span>
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="nav-link">
                  Jobs
                </Link>
                <Link href="/post-job" className="nav-link">
                  Post Job
                </Link>
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          {children}
        </main>
        
        <footer className="border-t border-slate-200/60 mt-24 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="text-center text-slate-500 text-sm">
              © 2024 Monica HR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}