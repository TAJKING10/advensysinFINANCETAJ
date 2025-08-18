import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { LocationProvider } from './contexts/LocationContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Legal from './components/pages/Legal'
import InsuranceService from './components/pages/InsuranceService'
import DedicatedLifeInsurance from './components/pages/DedicatedLifeInsurance'
import InvestmentAdviser from './components/pages/InvestmentAdviser'
import BrokerInBank from './components/pages/BrokerInBank'
import PrivatePensionPlan from './components/pages/PrivatePensionPlan'
import './styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <LocationProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/services/insurance" element={<InsuranceService />} />
              <Route path="/services/dedicated-life-insurance" element={<DedicatedLifeInsurance />} />
              <Route path="/services/investment-adviser" element={<InvestmentAdviser />} />
              <Route path="/services/broker-in-bank" element={<BrokerInBank />} />
              <Route path="/services/private-pension-plan" element={<PrivatePensionPlan />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LocationProvider>
    </LanguageProvider>
  )
}

export default App