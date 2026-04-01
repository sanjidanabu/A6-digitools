
import { Suspense, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import HeroSection from './component/HeroSection'
import Models from './component/Models'
import NavBar from './component/NavBar'
import UserSection from './component/UserSection'
import Cart from './component/Cart'
import StepsSection from './component/StepsSection'
import Pricing from './component/Pricing'
import Footer from './component/Footer'

const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
   const [activeTab, setActiveTab] = useState("Products")
   const [carts, setCarts] = useState([])
   
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} /> 
      <NavBar />
      <HeroSection />
      <UserSection />

      
      <div className="flex justify-center py-10 bg-transparent">
        <div className="tabs tabs-box gap-4 border p-2 rounded-full bg-white shadow-sm">
          <button 
            className={`px-8 py-2 rounded-full font-semibold transition-all ${activeTab === "Products" ? "bg-purple-700 text-white" : "bg-transparent text-gray-500 hover:text-black"}`}
            onClick={() => setActiveTab("Products")}
          >
            Products
          </button>
          <button 
            className={`px-8 py-2 rounded-full font-semibold transition-all ${activeTab === "Cart" ? "bg-black text-white" : "bg-transparent text-gray-500 hover:text-black"}`}
            onClick={() => setActiveTab("Cart")}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20 font-bold">Loading models....</div>}>
        {activeTab === "Products" && (
          <Models 
            modelPromise={modelPromise} 
            carts={carts}
            setCarts={setCarts}
          />
        )}
      </Suspense>
      
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />}

      <StepsSection></StepsSection>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App