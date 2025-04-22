import { useState, useNavigate, useLocation } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Timeline from './components/Timeline'
import BandPage from './components/BandPage'




function App() {
  return( 
    <div>
      <Routes>
        <Route path="/" element={<Timeline />}></Route>
        <Route path="/band/:id" element={<BandPage />}></Route>
      </Routes>
    </div>
  );
}




export default App
