import { Plane } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const Cart = ({ carts, setCarts, setActiveTab }) => {
    const total = carts.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (id, name) => {
        setCarts(carts.filter(item => item.id !== id));
        toast.error(`${name} removed from cart`);
    };

    const handleCheckout = () => {
        if (carts.length > 0) {
            toast.success("Purchase successful! Thank you.", {
               
                duration: 4000
            });
            setCarts([]);
           
            setTimeout(() => setActiveTab("Products"), 2000);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-10 bg-white rounded-3xl shadow-sm border mb-20 animate-in fade-in duration-500">
            <h2 className="text-xl font-bold mb-8 text-gray-800">Your Cart</h2>
            
            {carts.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-400 mb-4">No items in cart</p>
                    <button onClick={() => setActiveTab("Products")} className="text-blue-600 font-semibold text-sm">Browse Products</button>
                </div>
            ) : (
                <div className="space-y-5">
                    {carts.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
                                    <Plane></Plane>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[15px] text-gray-800">{item.name}</h4>
                                    <p className="text-gray-400 text-xs">${item.price}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleRemove(item.id, item.name)}
                                className="text-red-400 text-xs font-medium hover:text-red-600 transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="pt-8">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-gray-400 text-sm">Total</span>
                            <span className="text-2xl font-bold text-gray-900">${total}</span>
                        </div>
                        
                        <button 
                            onClick={handleCheckout}
                            className="w-full py-4 bg-[#5A67D8] text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-[#4c51bf] hover:shadow-indigo-200 transition-all active:scale-95"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;