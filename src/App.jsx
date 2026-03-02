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
      {/* True black space canvas */}
      <div className="min-h-screen space-bg scanlines" style={{ background: '#000000' }}>
        {/* Persistent star field */}
        <div className="stars-layer" />
        {/* Nebula ambient blobs — subtle, not overdone */}
        <div className="nebula-blob" style={{ width: 600, height: 600, top: '5%', left: '-15%', background: 'radial-gradient(circle, rgba(26,108,240,0.08) 0%, transparent 70%)' }} />
        <div className="nebula-blob" style={{ width: 500, height: 500, top: '40%', right: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />
        <div className="nebula-blob" style={{ width: 700, height: 400, bottom: '10%', left: '20%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
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