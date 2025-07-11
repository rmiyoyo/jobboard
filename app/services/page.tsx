import type { NextPage } from 'next';

interface Service {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  buttonText: string;
  color: 'emerald' | 'blue' | 'purple' | 'slate';
}

const Services: NextPage = () => {
  const services: Service[] = [
    {
      title: "Resume Writing",
      description: "Professional resume writing services to help you stand out from the competition.",
      features: [
        "ATS-optimized formatting",
        "Industry-specific keywords",
        "Professional review and editing",
        "Cover letter included"
      ],
      pricing: "Starting at KES 5,000",
      buttonText: "Get Started",
      color: "emerald"
    },
    {
      title: "Interview Coaching",
      description: "One-on-one interview coaching to boost your confidence and performance.",
      features: [
        "Mock interviews",
        "Behavioral question practice",
        "Technical interview prep",
        "Feedback and improvement tips"
      ],
      pricing: "KES 8,000 per session",
      buttonText: "Book Session",
      color: "blue"
    },
    {
      title: "Career Consultation",
      description: "Strategic career planning and guidance from industry experts.",
      features: [
        "Career path analysis",
        "Skills gap assessment",
        "Industry insights",
        "Networking strategies"
      ],
      pricing: "KES 10,000 per hour",
      buttonText: "Schedule Call",
      color: "purple"
    },
    {
      title: "HR Consulting",
      description: "Complete HR solutions for businesses of all sizes.",
      features: [
        "Recruitment process optimization",
        "Employee handbook creation",
        "Performance management systems",
        "Compliance and legal guidance"
      ],
      pricing: "Contact for pricing",
      buttonText: "Get Quote",
      color: "slate"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "from-emerald-50 to-emerald-100/50 border-emerald-200 text-emerald-700",
      blue: "from-blue-50 to-blue-100/50 border-blue-200 text-blue-700",
      purple: "from-purple-50 to-purple-100/50 border-purple-200 text-purple-700",
      slate: "from-slate-50 to-slate-100/50 border-slate-200 text-slate-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.slate;
  };

  const getServiceIcon = (index: number) => {
    const icons = [
      // Resume Writing
      <path key={0} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      // Interview Coaching
      <path key={1} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
      // Career Consultation
      <path key={2} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
      // HR Consulting
      <path key={3} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ];
    return icons[index] || icons[0];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light text-slate-900 mb-4">
          HR <span className="text-emerald-600 font-medium">Services</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Professional services to accelerate your career or streamline your hiring process
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card-subtle p-6 space-y-6 group hover:scale-[1.02] transition-transform duration-200"
            data-testid="service-card"
          >
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {getServiceIcon(index)}
                </svg>
              </div>
              
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-slate-700 flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-4 border-t border-slate-100">
              <div className="text-slate-900 font-semibold text-lg">
                {service.pricing}
              </div>
              <button 
                className="w-full btn-primary font-semibold"
                aria-label={`${service.buttonText} for ${service.title}`}
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="card-subtle p-8 bg-gradient-to-r from-emerald-50 to-sage-50 border-emerald-100">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Need a Custom Solution?
          </h3>
          <p className="text-slate-600 mb-6">
            Let's discuss how we can help you achieve your HR goals
          </p>
          <button className="btn-accent">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;