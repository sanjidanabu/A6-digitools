import React from 'react';
import { UserPlus, Box, Rocket } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: <UserPlus className="w-8 h-8 text-purple-600" />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: <Box className="w-8 h-8 text-purple-600" />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
            >
             
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {step.id}
              </div>

              
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>

              
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;