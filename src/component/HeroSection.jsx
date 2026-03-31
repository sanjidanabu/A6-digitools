import React from 'react';
import bannerImage from '../assets/banner.png'
import { Play } from 'lucide-react';

const HeroSection = () => {
    return (
       <section className='bg-white py-12 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto'>
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        
        <div className="flex-1 text-left order-2 lg:order-1">
          
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#9514FA]  px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

        
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          
          <p className="text-gray-500 text-lg md:text-xl mb-6 max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>
          
          

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md shadow-purple-200">
              Explore Products
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 px-8 py-3.5 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-all">
              <Play ></Play> <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span>
            </button>
          </div>
        </div>
          <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative p-2">
            
            <img 
              src={bannerImage} 
              alt="Digital Workflow with AI" 
              className="w-full h-auto "
            />
           
          </div>
        </div>
        </div>

       </section>
    );
};

export default HeroSection;