import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cape HR - Find Your Next Opportunity',
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
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Cape HR</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-200">Jobs</Link>
              <Link href="/post-job" className="hover:text-blue-200">Post Job</Link>
              <Link href="/services" className="hover:text-blue-200">Services</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-8 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Cape HR. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}