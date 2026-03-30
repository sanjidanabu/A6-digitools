import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
     <nav className='bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
            <span className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</span>
        </div>

         <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Products</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Testimonials</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQ</a>
      </div>

      <div className='flex items-center space-x-6'>
       <button className="p-2">
       <ShoppingCart className="text-gray-600 hover:text-gray-900" size={24}  />
       </button>
         <a href="#" className="hidden md:block text-gray-700 hover:text-gray-900 text-sm font-medium">
          Login
        </a>

        
        <button className="hidden md:block bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
          Get Started
        </button>
      </div>
     </nav>
    );
};

export default NavBar;
