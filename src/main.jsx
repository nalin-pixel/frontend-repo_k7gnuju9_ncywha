import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

// Pages
import ChiSiamo from './components/ChiSiamo'
import ServiziPage from './components/ServiziPage'
import Fisioterapia from './components/Fisioterapia'
import Benessere from './components/Benessere'
import Altro from './components/Altro'
import ServiceDetail from './components/ServiceDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/servizi" element={<ServiziPage />} />
        <Route path="/servizi/fisioterapia" element={<Fisioterapia />} />
        <Route path="/servizi/benessere" element={<Benessere />} />
        <Route path="/servizi/altro" element={<Altro />} />
        <Route path="/servizi/:categoria/:slug" element={<ServiceDetail />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
