import React from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  buttonText: string;
  icon: React.ReactNode;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Resume Writing",
      description: "Professional resume writing services to help you stand out from the competition and land your dream job.",
      features: [
        "ATS-optimized formatting",
        "Industry-specific keywords", 
        "Professional review and editing",
        "Cover letter included"
      ],
      pricing: "Starting at KES 5,000",
      buttonText: "Get Started",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Interview Coaching",
      description: "One-on-one interview coaching to boost your confidence and performance in any interview setting.",
      features: [
        "Mock interviews",
        "Behavioral question practice",
        "Technical interview prep", 
        "Feedback and improvement tips"
      ],
      pricing: "KES 8,000 per session",
      buttonText: "Book Session",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Career Consultation",
      description: "Strategic career planning and guidance from industry experts to help you navigate your professional journey.",
      features: [
        "Career path analysis",
        "Skills gap assessment",
        "Industry insights",
        "Networking strategies"
      ],
      pricing: "KES 10,000 per hour",
      buttonText: "Schedule Call",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "HR Consulting",
      description: "Complete HR solutions for businesses of all sizes, from startups to established companies.",
      features: [
        "Recruitment process optimization",
        "Employee handbook creation",
        "Performance management systems",
        "Compliance and legal guidance"
      ],
      pricing: "Contact for pricing",
      buttonText: "Get Quote",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-normal text-slate-800 mb-4">
          HR Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="flex items-start space-x-4 p-2">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-slate-500 flex items-start">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Pricing and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-800">
                    {service.pricing}
                  </span>
                  <button className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-2xl mx-auto text-center">
        <div className="p-8 bg-slate-50 rounded-lg">
          <h3 className="text-xl font-medium text-slate-800 mb-2">
            Need a Custom Solution?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Let's discuss how we can help you achieve your HR goals with a tailored approach.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-2 text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;