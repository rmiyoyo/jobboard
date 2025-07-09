export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">HR Services</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Resume Writing</h2>
          <p className="text-gray-600 mb-4">
            Professional resume writing services to help you stand out from the competition.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>ATS-optimized formatting</li>
            <li>Industry-specific keywords</li>
            <li>Professional review and editing</li>
            <li>Cover letter included</li>
          </ul>
          <div className="text-green-600 font-semibold text-lg mb-4">
            Starting at KES 5,000
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interview Coaching</h2>
          <p className="text-gray-600 mb-4">
            One-on-one interview coaching to boost your confidence and performance.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Mock interviews</li>
            <li>Behavioral question practice</li>
            <li>Technical interview prep</li>
            <li>Feedback and improvement tips</li>
          </ul>
          <div className="text-green-600 font-semibold text-lg mb-4">
            KES 8,000 per session
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Session
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Consultation</h2>
          <p className="text-gray-600 mb-4">
            Strategic career planning and guidance from industry experts.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Career path analysis</li>
            <li>Skills gap assessment</li>
            <li>Industry insights</li>
            <li>Networking strategies</li>
          </ul>
          <div className="text-green-600 font-semibold text-lg mb-4">
            KES 10,000 per hour
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Schedule Call
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">HR Consulting</h2>
          <p className="text-gray-600 mb-4">
            Complete HR solutions for businesses of all sizes.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Recruitment process optimization</li>
            <li>Employee handbook creation</li>
            <li>Performance management systems</li>
            <li>Compliance and legal guidance</li>
          </ul>
          <div className="text-green-600 font-semibold text-lg mb-4">
            Contact for pricing
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
