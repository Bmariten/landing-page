import React, { useState } from 'react';
import {
  Shield, Wallet, BarChart3, Globe, LayoutDashboard, ChevronRight,
  AlertCircle, ArrowRight, CheckCircle2, Github, Twitter, Linkedin, Plus, Minus
} from 'lucide-react';
import sendEmail from './sendEmail';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = async (e) => {
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
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 py-2 px-4">
        <p className="text-xs font-medium flex items-center justify-center gap-1 text-white">
          <AlertCircle className="w-3 h-3" />
          LIMITED ACCESS: SECURE YOUR SPOT NOW!
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 light-circuit-pattern opacity-10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tighter">
                THE FUTURE OF INFLUENCER MARKETING IS{' '}
                <span className="text-blue-600">FRAUD-FREE</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>Limited Spots Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">WHY CHOOSE INVEX</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">FOR BRANDS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Build trusted partnerships with verified creators</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Advanced fraud detection protects your investment</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Performance-based payment system</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">FOR INFLUENCERS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Join our exclusive verified creator network</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Access premium brand partnerships</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 
                      group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-gray-700">Guaranteed payments for completed campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-md p-3">
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm 
                hover:bg-blue-700 transition-all duration-200 flex items-center gap-1 group"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN WAITLIST
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Limited Spots Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">OUR KEY SERVICES</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-400 
                  transition-all duration-200 shadow-sm"
              >
                <service.icon className="w-6 h-6 text-blue-500 mb-4 
                  group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-base font-bold mb-3">{service.title}</h3>
                <ul className="space-y-2 text-gray-600">
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
        <div className="mt-12 flex justify-center items-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-md p-3">
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm 
                hover:bg-blue-700 transition-all duration-200 flex items-center gap-1 group"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN WAITLIST
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Limited Spots Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-white py-16">
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
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-md p-3">
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm 
                hover:bg-blue-700 transition-all duration-200 flex items-center gap-1 group"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN WAITLIST
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Limited Spots Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">LIMITED BETA ACCESS</h2>
                <p className="text-base text-gray-600 mb-6">
                  Only 100 brands & 500 influencers in Phase 1!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 focus:border-blue-500 
                      focus:ring-1 focus:ring-blue-400 text-gray-800 text-sm transition-all duration-200"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType('brand')}
                      className={`px-3 py-2 rounded-md border text-sm ${userType === 'brand'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      } transition-all duration-200`}
                    >
                      Brand/Agency
                    </button>
                    <button type="button"
                      onClick={() => setUserType('influencer')}
                      className={`px-3 py-2 rounded-md border text-sm ${userType === 'influencer'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      } transition-all duration-200`}
                    >
                      Influencer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm 
                    hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-blue-200
                    flex items-center justify-center gap-1 group mt-2"
                >
                  JOIN WAITLIST
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-xs text-center text-gray-500 flex items-center justify-center gap-1 mt-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>Limited Spots Available</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <h3 className="text-base font-semibold">{faq.question}</h3>
                    {openFaqIndex === index ? (
                      <Minus className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-200 ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 pt-0 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-md p-3">
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm 
                hover:bg-blue-700 transition-all duration-200 flex items-center gap-1 group"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN WAITLIST
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Limited Spots Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold text-blue-600">INVEX</div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
                <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-gray-500">
              © 2025 Invex. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}

const services = [
  {
    icon: Shield,
    title: "FRAUD PREVENTION",
    features: [
      "Advanced engagement verification",
      "Continuous monitoring",
      "Brand safety protection",
      "Comprehensive security",
    ],
  },
  {
    icon: Wallet,
    title: "SECURE PAYMENTS",
    features: [
      "Performance-based system",
      "Automated processing",
      "Protected transactions",
      "Flexible payment options",
    ],
  },
  {
    icon: BarChart3,
    title: "CAMPAIGN ANALYTICS",
    features: [
      "Performance tracking",
      "Data-driven insights",
      "Optimization tools",
      "ROI measurement",
    ],
  },
  {
    icon: Globe,
    title: "CREATOR NETWORK",
    features: [
      "Verified partnerships",
      "Quality talent pools",
      "Direct connections",
      "Global reach",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "MANAGEMENT SUITE",
    features: [
      "Centralized dashboard",
      "Workflow automation",
      "Progress tracking",
      "Team collaboration",
    ],
  },
];

const steps = [
  {
    title: "Apply for early access",
    description:
      "Join our exclusive launch phase and be among the first to transform your influencer marketing.",
  },
  {
    title: "Complete verification",
    description:
      "Our advanced system verifies your profile and ensures platform quality.",
  },
  {
    title: "Start collaborating",
    description:
      "Launch campaigns with performance-based partnerships and track results.",
  },
];

const faqs = [
  {
    question: "What makes Invex different from other influencer platforms?",
    answer: "Invex combines advanced fraud prevention, secure payment systems, and comprehensive analytics to create a trusted ecosystem for influencer marketing. Our platform ensures authentic partnerships and measurable results for both brands and creators."
  },
  {
    question: "How does your verification system work?",
    answer: "Our advanced system analyzes engagement patterns and account activity to verify authenticity. We continuously monitor partnerships to maintain platform integrity and protect both brands and creators."
  },
  {
    question: "How do payments work on the platform?",
    answer: "Our secure payment system is performance-based, ensuring fair compensation for creators while protecting brands' investments. Payments are automatically processed when campaign milestones are achieved."
  },
  {
    question: "How do I get started as a creator?",
    answer: "Join our waitlist for early access, complete our verification process, and gain access to our exclusive network. Once approved, you'll be visible to brands seeking authentic partnerships."
  },
  {
    question: "What pricing plans are available?",
    answer: "We offer flexible subscription plans designed to meet different needs and budgets. Each plan includes access to our core features, with optional add-ons for additional capabilities."
  },
  {
    question: "Can Invex handle international partnerships?",
    answer: "Yes! Our platform supports global partnerships with multi-language support and international payment processing, making it easy to collaborate across borders."
  },
  {
    question: "How does your matching system work?",
    answer: "Our platform analyzes various factors to suggest relevant partnerships, helping brands and creators find ideal matches while saving time and improving success rates."
  },
];

export default App;