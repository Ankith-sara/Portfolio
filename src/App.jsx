import { Route, Routes } from 'react-router-dom';
import SoundProvider from './context/SoundContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <SoundProvider>
      <div className="min-h-screen space-bg scanlines" style={{ background: '#00000a' }}>
        {/* Persistent star field */}
        <div className="stars-layer" />

        {/* Falling meteor shower */}
        <div className="meteor-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="meteor" />
          ))}
        </div>

        {/* Deep nebula blobs */}
        <div className="nebula-blob" style={{ width: 700, height: 700, top: '0%', left: '-20%', background: 'radial-gradient(circle, rgba(26,108,240,0.1) 0%, transparent 70%)' }} />
        <div className="nebula-blob" style={{ width: 600, height: 600, top: '35%', right: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', animationDelay: '7s' }} />
        <div className="nebula-blob" style={{ width: 800, height: 500, bottom: '5%', left: '15%', background: 'radial-gradient(circle, rgba(0,168,255,0.06) 0%, transparent 70%)', animationDelay: '14s' }} />
        <div className="nebula-blob" style={{ width: 400, height: 400, top: '60%', left: '40%', background: 'radial-gradient(circle, rgba(168,216,240,0.04) 0%, transparent 70%)', animationDelay: '3s' }} />

        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
          <CTA />
          <Footer />
        </div>
      </div>
    </SoundProvider>
  );
}

export default App;
