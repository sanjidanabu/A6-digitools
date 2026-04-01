import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 border ${
              plan.isPopular 
                ? 'bg-[#7C3AED] text-white border-[#7C3AED] shadow-xl scale-105 z-10' 
                : 'bg-slate-50 text-slate-900 border-slate-100'
            } flex flex-col`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF9C3] text-[#854D0E] text-xs font-bold px-3 py-1 rounded-full border border-[#FDE047]">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm ${plan.isPopular ? 'text-purple-100' : 'text-slate-500'}`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`ml-1 text-sm ${plan.isPopular ? 'text-purple-100' : 'text-slate-500'}`}>
                  /Month
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-purple-200' : 'text-green-500'}`} />
                  <span className="text-sm ">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-white text-[#7C3AED] hover:bg-slate-50'
                  : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;