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
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-medium text-gray-900">
                Monica HR
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Jobs
                </Link>
                <Link href="/post-job" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Post Job
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-6xl mx-auto px-4 py-12">
          {children}
        </main>
        
        <footer className="border-t border-gray-100 mt-24">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Monica HR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}