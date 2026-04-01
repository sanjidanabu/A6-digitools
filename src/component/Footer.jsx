import React from 'react';
import {  X,  SquareFunction, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] text-slate-400 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
         
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-slate-200 transition-all">
                <Camera></Camera>
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-slate-200 transition-all">
                 <SquareFunction></SquareFunction>
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-slate-200 transition-all">
                  <X></X>
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;