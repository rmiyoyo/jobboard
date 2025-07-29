import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Metadata } from 'next'
import { GTMProvider } from '../components/GTMProvider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    template: '%s | Monica HR',
    default: 'Monica HR - Find Your Next Opportunity'
  },
  description: 'Premier job board connecting talent with opportunity across Africa. Find your dream job or hire top talent.',
  keywords: ['jobs', 'careers', 'hiring', 'Africa', 'recruitment', 'HR services'],
  authors: [{ name: 'Monica HR' }],
  creator: 'Monica HR',
  publisher: 'Monica HR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://monicahr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicahr.com',
    siteName: 'Monica HR',
    title: 'Monica HR - Find Your Next Opportunity',
    description: 'Premier job board connecting talent with opportunity across Africa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monica HR - Find Your Next Opportunity',
    description: 'Premier job board connecting talent with opportunity across Africa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <GTMProvider />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K465PW9C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        <header role="banner">
          <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-40" aria-label="Main navigation">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="text-xl font-semibold text-slate-900 tracking-tight" aria-label="Monica HR home">
                  Monica <span className="text-emerald-600">HR</span>
                </Link>
                <div className="flex space-x-8" role="navigation">
                  <Link href="/" className="nav-link" aria-label="Browse jobs">
                    Jobs
                  </Link>
                  <Link href="/post-job" className="nav-link" aria-label="Post a job">
                    Post Job
                  </Link>
                  <Link href="/services" className="nav-link" aria-label="HR services">
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        
        <main id="main-content" className="max-w-6xl mx-auto px-4 py-12" role="main">
          {children}
        </main>
        
        <footer className="border-t border-slate-200/60 mt-24 bg-slate-50/50" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <p className="text-center text-slate-500 text-sm">
              © 2025 Monica HR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-H1KV6LS6XT" />
    </html>
  )
}