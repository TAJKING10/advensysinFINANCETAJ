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
import Glossary from './pages/Glossary'
import CorporateFinanceLuxembourg from './components/pages/CorporateFinanceLuxembourg'
import FundraisingLuxembourg from './components/pages/FundraisingLuxembourg'
import MandAAdvisoryLuxembourg from './components/pages/MandAAdvisoryLuxembourg'
import ValuationServicesLuxembourg from './components/pages/ValuationServicesLuxembourg'
import TreasuryManagementLuxembourg from './components/pages/TreasuryManagementLuxembourg'
import RegulatoryReportingLuxembourg from './components/pages/RegulatoryReportingLuxembourg'
import { INDEXNOW_KEY } from './utils/seo'
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
              <Route path="/glossary" element={<Glossary />} />

              {/* Corporate Finance Services */}
              <Route path="/services/corporate-finance-luxembourg" element={<CorporateFinanceLuxembourg />} />
              <Route path="/services/fundraising-luxembourg" element={<FundraisingLuxembourg />} />
              <Route path="/services/m-and-a-advisory-luxembourg" element={<MandAAdvisoryLuxembourg />} />
              <Route path="/services/valuation-services-luxembourg" element={<ValuationServicesLuxembourg />} />
              <Route path="/services/treasury-management-luxembourg" element={<TreasuryManagementLuxembourg />} />
              <Route path="/services/regulatory-reporting-luxembourg" element={<RegulatoryReportingLuxembourg />} />

              {/* Other Services */}
              <Route path="/services/insurance" element={<InsuranceService />} />
              <Route path="/services/dedicated-life-insurance" element={<DedicatedLifeInsurance />} />
              <Route path="/services/investment-adviser" element={<InvestmentAdviser />} />
              <Route path="/services/broker-in-bank" element={<BrokerInBank />} />
              <Route path="/services/private-pension-plan" element={<PrivatePensionPlan />} />

              {/* IndexNow Key File */}
              <Route path={`/${INDEXNOW_KEY}.txt`} element={
                <div style={{ fontFamily: 'monospace', padding: '1rem' }}>
                  {INDEXNOW_KEY}
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </LocationProvider>
    </LanguageProvider>
  )
}

export default App