import React, { useState } from 'react';
import {
  Shield, Wallet, BarChart3, Globe, LayoutDashboard, ChevronRight,
  AlertCircle, ArrowRight, CheckCircle2, Github, Twitter, Linkedin,
} from 'lucide-react';
import sendEmail from './sendEmail';

function App() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'brand' | 'influencer' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !userType) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      await sendEmail(email, userType);
      console.log('Signup:', { email, userType });
      setEmail('');
      setUserType(null);
      alert('Thank you for joining the waitlist!');
      window.location.reload();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('There was an error sending your email. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-2 px-4">
        <p className="text-xs font-medium flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3" />
          LIMITED ACCESS: SECURE YOUR SPOT NOW!
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tighter">
                THE FUTURE OF INFLUENCER MARKETING IS{' '}
                <span className="gradient-text">FRAUD-FREE</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Connect with verified influencers using AI fraud detection and smart contract payments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-base 
                    hover:bg-blue-700 transition-all duration-200 shadow-lg flex items-center gap-1 group"
                  onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  JOIN WAITLIST
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>Limited spots remaining!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">WHY CHOOSE INVEX</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-800 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4 gradient-text">FOR BRANDS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">Get trusted partnerships, zero fraud risk</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">AI flags fake engagement before you invest</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">Smart contracts pay only when KPIs are met</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-800 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4 gradient-text">FOR INFLUENCERS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">Gain verified status, attract top deals</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">Join exclusive network of proven creators</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-300">Access premium brand partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">OUR KEY SERVICES</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-800 
                  transition-all duration-200"
              >
                <service.icon className="w-6 h-6 text-blue-500 mb-4 
                  group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-base font-bold mb-3">{service.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 group/item">
                      <ArrowRight className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0 
                        group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">HOW IT WORKS</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 
                    text-white flex items-center justify-center font-bold text-sm flex-shrink-0
                    group-hover:scale-110 transition-transform duration-200">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">LIMITED BETA ACCESS</h2>
                <p className="text-base text-gray-400 mb-6">
                  Only 100 brands & 500 influencers in Phase 1!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 
                      focus:ring-1 focus:ring-blue-400 text-white text-sm transition-all duration-200"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType('brand')}
                      className={`px-3 py-2 rounded-md border text-sm ${userType === 'brand'
                        ? 'border-blue-600 bg-blue-900/30 text-blue-400'
                        : 'border-gray-600 hover:border-gray-500 text-gray-300'
                      } transition-all duration-200`}
                    >
                      Brand/Agency
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('influencer')}
                      className={`px-3 py-2 rounded-md border text-sm ${userType === 'influencer'
                        ? 'border-blue-600 bg-blue-900/30 text-blue-400'
                        : 'border-gray-600 hover:border-gray-500 text-gray-300'
                      } transition-all duration-200`}
                    >
                      Influencer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm 
                    hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-blue-900/50 
                    flex items-center justify-center gap-1 group mt-2"
                >
                  JOIN WAITLIST
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold gradient-text">INVEX</div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-gray-600">
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