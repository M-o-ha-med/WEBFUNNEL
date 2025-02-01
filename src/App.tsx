import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Testimonials from './components/Testimonials.tsx'
import Timeline from './components/Timeline.tsx'
import Timeline_Planning from './components/Timeline_Planning.tsx'
import Banner from './components/Banner.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'
import VisionAndMission from './components/VisionAndMission.tsx'
import Portofolio from './components/Portofolio.tsx'
import AboutUs from './components/AboutUs.tsx'
import Articles from './components/Articles.tsx'

function App() {


  return (
  <>
  
    <Navbar />
	<Banner/>
	<AboutUs />
	<VisionAndMission />
	<ExperienceSection />
	<Portofolio />
	<Timeline />
	<Timeline_Planning />
	<Testimonials />
	<Articles />
	<Footer />
  </>
  );
}

export default App
