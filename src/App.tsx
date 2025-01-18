import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Testimonials from './components/Testimonials.tsx'
import Timeline from './components/Timeline.tsx'
import Banner from './components/Banner.tsx'

function App() {


  return (
  <div>
    <Navbar />
	<Banner />
	<Timeline />
	<Testimonials />
	
	<Footer />
  </div>
  );
}

export default App
