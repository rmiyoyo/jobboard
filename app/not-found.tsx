import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-12 space-y-4">
      <h1 className="text-4xl font-light text-gray-900">404</h1>
      <p className="text-gray-600">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="inline-block bg-gray-900 text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
