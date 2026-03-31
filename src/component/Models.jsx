import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);
    
    return (
       <div className='pb-20'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-[#627382] pt-4'>Choose from our curated collection of premium digital products.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-7xl mx-auto pt-10'>
            {models.map((model) => (
                <ModelCard 
                    key={model.id} 
                    model={model} 
                    carts={carts} 
                    setCarts={setCarts}
                />
            ))}
        </div>
       </div>
    );
};

export default Models;