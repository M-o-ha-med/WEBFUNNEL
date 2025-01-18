import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Testimonials from './components/Testimonials.tsx'
import Timeline from './components/Timeline.tsx'
import Banner from './components/Banner.tsx'

function App() {
  const [count, setCount] = useState(0)

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
