
import { Suspense } from 'react'
import './App.css'
import HeroSection from './component/HeroSection'
import Models from './component/Models'
import NavBar from './component/NavBar'
import UserSection from './component/UserSection'


const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json()
}


const modelPromise = getModels()
function App() {
 

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <UserSection></UserSection>

    <Suspense fallback={<div>loading models....</div>}>
      <Models modelPromise={modelPromise}></Models>
    </Suspense>
   
      </>
  )
}

export default App
