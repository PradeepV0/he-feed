import Hero from '../components/Hero'
import PartnerRibbon from '../components/PartnerRibbon'
import Services from '../components/Services'
import ProcessSection from '../components/Process'
import Results from '../components/Results'
import Testimonials from '../components/Results/Testimonials'
import WhyUs from '../components/WhyUs'
import ContactFooter from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerRibbon />
      <Services />
      <ProcessSection />
      <Results />
      <Testimonials />
      <WhyUs />
      <ContactFooter />
    </>
  )
}
