import { Route, Routes } from 'react-router-dom';
import SoundProvider from './context/SoundContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import Background from './components/Background';

function App() {
  return (
    <SoundProvider>
      <div className="min-h-screen text-light-text dark:text-dark-text">
        <Background />
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
            </Routes>
        </main>
        <CTA />
        <Footer />
      </div>
    </SoundProvider>
  );
}

export default App;