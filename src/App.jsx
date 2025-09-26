import React from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className="flex flex-col min-h-screen min-w-screen">
      <Navbar/>
      <div className="flex-1 overflow-auto">
      <Dashboard/>
      </div>
    
      <Footer />
      </div>
    </div>
  )
}

export default App