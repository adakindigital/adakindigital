import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EntryflowCaseStudy from './pages/EntryflowCaseStudy';
import ComingSoon from './pages/ComingSoon';
import ContactPopup from './components/ContactPopup';
import { ContactProvider } from './context/ContactContext';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Adakin Digital. Digital Product Agency.</p>
    </div>
  </footer>
);

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      <Navbar />
      <ContactPopup />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/entryflow" element={<EntryflowCaseStudy />} />
          <Route path="/coming-soon/:slug" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  );
}

export default App;
