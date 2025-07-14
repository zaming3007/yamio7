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
  <div className="container py-10 text-center">
    <h1 className="text-3xl font-display font-bold mb-4 text-gradient">Tính Cách</h1>
    <p className="text-overlay content-backdrop">Trang đang được phát triển...</p>
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
