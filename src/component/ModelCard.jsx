import {} from "react";
import toast from 'react-hot-toast'; 

const ModelCard = ({model , carts , setCarts}) => {
    
    const isAlreadyBought = carts.find(item => item.id === model.id);

    const handleBuyers = () => {
        if (!isAlreadyBought) {
            setCarts([...carts, model]);
            toast.success(`${model.name} added to cart!`, {
                style: { borderRadius: '10px', background: '#333', color: '#fff' }
            });
        } else {
            toast.error("Already in cart!");
        }
    }

    return (
       <div className="border p-8 rounded-3xl shadow-lg bg-white relative border-zinc-300 flex flex-col justify-between">
                {model.tag && (
                    <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {model.tag}
                    </span>
                )}
                
                <div>
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
                </div>

                <button 
                    onClick={handleBuyers} 
                    className={`w-full py-3 font-bold rounded-full transition-all ${isAlreadyBought ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"}`}
                >
                    {isAlreadyBought ? "In Cart" : "Buy Now"}
                </button>
            </div>
    );
};

export default ModelCard;