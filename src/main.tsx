import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Portfolio_details from './Pages/Portfolio_details.tsx'


createRoot(document.getElementById('root')!).render(


  <StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/ModernTropicalHouseAceh" element={<Portfolio_details />} />
		</Routes>
	</BrowserRouter>
  </StrictMode>,
)
