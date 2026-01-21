import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import BusinessWebsites from "./components/BusinessWebsites"
import LandingPages from "./components/LandingPages"
import WebsitesRedesign from "./components/WebsitesRedesign"
import Wordpress from "./components/Wordpress"
import WhatsAppButton from "./components/WhatsappButton"


const App = () => {
  return (
    <div>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/business-websites" element={<BusinessWebsites />} />
        <Route path="/services/landing-pages" element={<LandingPages />} />
        <Route path="/services/redesign" element={<WebsitesRedesign />} />
        <Route path="/services/wordpress-ecommerce" element={<Wordpress />} />
      
      </Routes>
      
    </div>
  )
}

export default App