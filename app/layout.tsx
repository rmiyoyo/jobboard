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
        
        <footer className="bg-white border-t border-slate-200/60 mt-24" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Monica <span className="text-emerald-600">HR</span></h3>
                <p className="text-slate-600 text-sm">
                  Connecting talent with opportunity across Africa. Your premier job board for career growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-slate-600 text-sm" aria-label="Browse jobs">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/post-job" className="text-slate-600 text-sm" aria-label="Post a job">
                      Post Job
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-slate-600 text-sm" aria-label="HR services">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-slate-600 text-sm" aria-label="Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-slate-600 text-sm" aria-label="Terms of Service">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="https://t.me/MonicaJobs"
                    className="flex items-center gap-2 text-slate-600 text-sm"
                    aria-label="Join our Telegram channel for job updates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </Link>
                  
                  <Link
                    href="https://www.linkedin.com/company/monicahrco/"
                    className="flex items-center gap-2 text-slate-600 text-sm"
                    aria-label="Follow us on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Link>
                  
                  <Link
                    href="https://bsky.app/profile/monicahrco.bsky.social"
                    className="flex items-center gap-2 text-slate-600 text-sm"
                    aria-label="Follow us on Bluesky"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.39-.056-.083.13-.15.314-.167.479-.053.534.314 1.283.816 1.542.5.258 1.32.222 1.865.222.545 0 1.365.036 1.865-.222.502-.259.869-1.008.816-1.542-.017-.165-.084-.35-.167-.479.115.017.254.036.39.056 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203C22.439 1.266 21.434.944 18.798 2.805 16.046 4.747 13.087 8.686 12 10.8Z"/>
                    </svg>
                    Bluesky
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-200/60 text-center">
              <p className="text-slate-600 text-sm">
                &copy; {new Date().getFullYear()} Monica HR. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-H1KV6LS6XT" />
    </html>
  )
}