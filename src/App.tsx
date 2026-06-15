import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnerRibbon from './components/PartnerRibbon'
import Services from './components/Services'
import ProcessSection from './components/Process'
import Results from './components/Results'
import WhyUs from './components/WhyUs'
import ContactFooter from './components/Contact'
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1D', color: '#fff' }}>
      <Navbar />
      <Hero />
      <PartnerRibbon />
      <Services />
      <ProcessSection />
      <Results />
      <WhyUs />
      <ContactFooter />
      <ScrollTop />
    </div>
  )
}
