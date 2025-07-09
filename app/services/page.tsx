export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-light text-gray-900 mb-8">HR Services</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Resume Writing</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Professional resume writing services to help you stand out from the competition.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• ATS-optimized formatting</li>
            <li>• Industry-specific keywords</li>
            <li>• Professional review and editing</li>
            <li>• Cover letter included</li>
          </ul>
          <div className="pt-4 space-y-3">
            <div className="text-gray-900 font-medium">
              Starting at KES 5,000
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Interview Coaching</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            One-on-one interview coaching to boost your confidence and performance.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Mock interviews</li>
            <li>• Behavioral question practice</li>
            <li>• Technical interview prep</li>
            <li>• Feedback and improvement tips</li>
          </ul>
          <div className="pt-4 space-y-3">
            <div className="text-gray-900 font-medium">
              KES 8,000 per session
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
              Book Session
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Career Consultation</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Strategic career planning and guidance from industry experts.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Career path analysis</li>
            <li>• Skills gap assessment</li>
            <li>• Industry insights</li>
            <li>• Networking strategies</li>
          </ul>
          <div className="pt-4 space-y-3">
            <div className="text-gray-900 font-medium">
              KES 10,000 per hour
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-900">HR Consulting</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Complete HR solutions for businesses of all sizes.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Recruitment process optimization</li>
            <li>• Employee handbook creation</li>
            <li>• Performance management systems</li>
            <li>• Compliance and legal guidance</li>
          </ul>
          <div className="pt-4 space-y-3">
            <div className="text-gray-900 font-medium">
              Contact for pricing
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}