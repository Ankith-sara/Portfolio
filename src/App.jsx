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
      <div className="relative min-h-screen" style={{ background: 'var(--void)' }}>
        <div className="starfield" />
        <div className="aurora-bg">
          <div className="aurora-orb aurora-orb-1" />
          <div className="aurora-orb aurora-orb-2" />
          <div className="aurora-orb aurora-orb-3" />
          <div className="aurora-orb aurora-orb-4" />
        </div>
        <div className="meteor-wrap">
          {[...Array(8)].map((_, i) => <div key={i} className="meteor" />)}
        </div>
        <div className="noise-overlay" />
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