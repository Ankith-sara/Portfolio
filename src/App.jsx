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
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
        <CTA />
        <Footer />
      </div>
    </SoundProvider>
  );
}

export default App;