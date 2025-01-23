import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Testimonials from './components/Testimonials.tsx'
import Timeline from './components/Timeline.tsx'
import Timeline_Planning from './components/Timeline_Planning.tsx'
import Banner from './components/Banner.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'
import { Route,Routes } from 'react-router-dom';

function App() {


  return (
  <>
  
    <Navbar />
	<Banner/>
	<ExperienceSection />
	<Timeline />
	<Timeline_Planning />
	<Testimonials />
	<Footer />
  </>
  );
}

export default App
