import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/common/Navigation';
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import JourneyPage from './pages/JourneyPage';
import LoveTimerPage from './pages/LoveTimerPage';
import EnhancedBackground from './components/common/EnhancedBackground';

// Tạm sử dụng một trang đơn giản cho các route còn lại
const BirthChartPage = () => (
  <div className="container py-10 text-center">
    <h1 className="text-3xl font-display font-bold mb-4 text-gradient">Bản Đồ Sao</h1>
    <p className="text-overlay content-backdrop">Trang đang được phát triển...</p>
  </div>
);

const PersonalityPage = () => (
  <div className="flex flex-col h-screen">
    <h1 className="text-3xl font-display font-bold py-4 text-gradient text-center flex items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
      Mio & Yamin
    </h1>
    <div className="flex-grow">
      <iframe 
        src="https://taoanhdep.com/love/?b=eyJ0IjpbIk1pbyBDxrBuZyBj4bunYSBhbmtrayIsIllhbWluIHnDqnUgTWlvIiwiTWlvIGPDsyB5w6p1IGFuaCBoxINtPyIsIlnDqnV1dXUiLCJNaW8gTmdvYW4gbmjDqWUiLCJOaOG7nyBlbSBxdcOhYWFhIiwiTcOqIGVtIG7hu69hYWFhYWFhYWEiXSwiYSI6InBtIn0=" 
        width="100%" 
        height="100%" 
        style={{border: 'none'}}
        title="Tình yêu Mio & Yamin"
      />
    </div>
  </div>
);

const InsightsPage = () => (
  <div className="container py-10 text-center">
    <h1 className="text-3xl font-display font-bold mb-4 text-gradient">Phân Tích</h1>
    <p className="text-overlay content-backdrop">Trang đang được phát triển...</p>
  </div>
);

// Wrapper component để handle location changes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/birth-chart" element={<BirthChartPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/personality" element={<PersonalityPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/love-timer" element={<LoveTimerPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [showNavigation, setShowNavigation] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showBackground, setShowBackground] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Hide navigation, header, footer and custom background on the journey page
    if (location.pathname === '/journey') {
      setShowNavigation(false);
      setShowHeader(false);
      setShowFooter(false);
      setShowBackground(false);
    } else {
      setShowNavigation(true);
      setShowHeader(true);
      setShowFooter(true);
      setShowBackground(true);
    }
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {showBackground && <EnhancedBackground intensity="medium" />}
      
      {showHeader && <Header />}
      
      <main>
        <AnimatedRoutes />
      </main>
      
      {showNavigation && <Navigation />}
      {showFooter && <Footer />}
    </div>
  );
}

// Wrapper to provide location context
const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWithRouter;
