import React, { useState } from 'react';
import {
  Shield,
  Wallet,
  BarChart3,
  Globe,
  LayoutDashboard,
  ChevronRight,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';
import sendEmail from './sendEmail'; // Import the sendEmail function

function App() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'brand' | 'influencer' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validate email and userType
    if (!email || !userType) {
      alert('Please fill in all fields.');
      return;
    }
  
    try {
      // Call the sendEmail function and wait for it to complete
      await sendEmail(email, userType);
  
      // Log the signup (optional)
      console.log('Signup:', { email, userType });
  
      // Reset form fields (optional)
      setEmail('');
      setUserType(null);
  
      // Show success message (optional)
      alert('Thank you for joining the waitlist!');
  
      // Refresh the page after the email is sent
      window.location.reload();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('There was an error sending your email. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 px-4">
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4" />
          LIMITED ACCESS: SECURE YOUR SPOT NOW!
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="slide-up">
              <h1 className="text-6xl font-bold mb-8 leading-tight tracking-tight">
                THE FUTURE OF INFLUENCER MARKETING IS{' '}
                <span className="gradient-text">FRAUD-FREE</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Connect with verified influencers using AI fraud detection and smart contract payments.
                No more fake engagement or wasted spend.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 
                    flex items-center gap-2 group"
                  onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  JOIN WAITLIST
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{100 - 42} brand spots remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">WHY CHOOSE INVEX</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                border border-transparent hover:border-blue-100">
                <h3 className="text-2xl font-bold mb-4 gradient-text">FOR BRANDS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>Get trusted partnerships, zero fraud risk</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>AI flags fake engagement before you invest</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>Smart contracts pay only when KPIs are met</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                border border-transparent hover:border-blue-100">
                <h3 className="text-2xl font-bold mb-4 gradient-text">FOR INFLUENCERS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>Gain verified status, attract top deals</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>Join exclusive network of proven creators</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span>Access premium brand partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">OUR KEY SERVICES</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white border border-gray-100 hover:border-blue-100 
                  transition-all duration-300 hover:shadow-lg"
              >
                <service.icon className="w-8 h-8 text-blue-600 mb-6 
                  group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0 
                        group-hover/item:translate-x-1 transition-transform" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">HOW IT WORKS</h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 
                    text-white flex items-center justify-center font-bold text-xl flex-shrink-0
                    group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">LIMITED BETA ACCESS</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Only 100 brands & 500 influencers in Phase 1!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                      focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('brand')}
                      className={`px-4 py-3 rounded-lg border ${userType === 'brand'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-blue-300'
                      } transition-all duration-300`}
                    >
                      Brand/Agency
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('influencer')}
                      className={`px-4 py-3 rounded-lg border ${userType === 'influencer'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-blue-300'
                      } transition-all duration-300`}
                    >
                      Influencer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 
                    flex items-center justify-center gap-2 group"
                >
                  JOIN WAITLIST
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-2xl font-bold gradient-text">INVEX</div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              © 2025 Invex. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: Shield,
    title: "AI-POWERED FRAUD DETECTION",
    features: [
      "Real-time engagement analysis identifies bots",
      "99.8% accuracy in verification",
      "Continuous monitoring prevents fraud",
      "Detailed authenticity reports",
    ],
  },
  {
    icon: Wallet,
    title: "SMART CONTRACT PAYMENTS",
    features: [
      "Performance-based payment system",
      "Automatic fund releases on KPI achievement",
      "Blockchain-based dispute resolution",
      "Flexible payment structures",
    ],
  },
  {
    icon: BarChart3,
    title: "PREDICTIVE ROI MODELING",
    features: [
      "AI-powered campaign forecasting",
      "Historical data analysis",
      "Customized optimization recommendations",
      "Real-time performance adjustments",
    ],
  },
  {
    icon: Globe,
    title: "VERIFIED CREATOR NETWORK",
    features: [
      "Exclusive vetted influencer access",
      "Industry-specific talent pools",
      "Authentic engagement metrics",
      "Direct creator connections",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "CAMPAIGN MANAGEMENT",
    features: [
      "Centralized partnership platform",
      "Real-time performance tracking",
      "Automated reporting and insights",
      "Collaborative workflow tools",
    ],
  },
];

const steps = [
  {
    title: "Apply for early access",
    description:
      "Join our invite-only launch phase and be among the first to revolutionize your influencer marketing.",
  },
  {
    title: "Complete AI fraud screening",
    description:
      "Our advanced AI system verifies your profile and ensures platform integrity.",
  },
  {
    title: "Use smart contracts",
    description:
      "Deploy campaigns with performance-based payments and guaranteed results.",
  },
];

export default App;