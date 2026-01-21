
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PortfolioSection from '../components/PortfolioSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <CTA />
        <Footer />
    </div>
  )
}

export default Home