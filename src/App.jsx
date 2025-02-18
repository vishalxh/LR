import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/home'
import { Router, Routes,Route } from 'react-router-dom'
import First from './components/pages/First/firstpage'
import Second from './components/pages/second/secondpage'
import Third from './components/pages/third/Third'
function App() {

  return (
    <>
      <Routes>
      <Route path='/game' element={<Third />} />
      <Route path='/first' element={<Second />} />
      <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
