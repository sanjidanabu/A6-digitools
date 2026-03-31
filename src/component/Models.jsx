import React, { use } from 'react';

const Models = ({modelPromise}) => {
    
    const models = use(modelPromise)
    console.log(models)
    return (
       <div className='py-20'>
        <div className='text-center pt-20'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
        <p className='text-[#627382] pt-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>

        <div className='flex items-center justify-center pt-5 gap-6 mb-12'>
       <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full px-8 py-3 '>Products</button>
       
        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-semibold rounded-full px-8 py-3'>Cart</button>
        </div>
        
<div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10'>
    {
        models.map((model) => (
            <div key={model.id} className="border p-8 rounded-3xl shadow-sm bg-white relative">
                
                {model.tag && (
                    <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {model.tag}
                    </span>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{model.description}</p>
                <div className="text-3xl font-bold mb-6">${model.price}</div>
                
                
                <ul className="mb-8 space-y-2 text-sm text-gray-600">
                    {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            ✅ {feature}
                        </li>
                    ))}
                </ul>

                
                <button className="w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold rounded-full transition-colors">
                    Buy Now
                </button>
            </div>
        ))
    }
</div>
   </div>

      
    );
};

export default Models;