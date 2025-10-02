import React from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'


function App() {
  return (
    <div  className="flex flex-col min-h-screen min-w-screen">
    
      <BrowserRouter>
      <Navbar/>
      <Routes >
        
      <Route path='/' element = {<MainPage/>}></Route>

      <Route path='/dashboard' element = {<Dashboard/>}></Route>
        
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
        
    
  )
}

export default App