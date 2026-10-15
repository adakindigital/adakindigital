import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import ContactPopup from './components/ContactPopup';
import { ContactProvider } from './context/ContactContext';
import useReveal from './hooks/useReveal';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import SolutionPage from './pages/SolutionPage';
import PricingPage from './pages/PricingPage';
import WorkflowAuditPage from './pages/WorkflowAuditPage';
import CalculatorPage from './pages/CalculatorPage';
import DemoPage from './pages/DemoPage';
import InsightsPage from './pages/InsightsPage';
import ArticleSignsPage from './pages/ArticleSignsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import EntryflowCaseStudy from './pages/EntryflowCaseStudy';
import ComingSoon from './pages/ComingSoon';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function AppContent() {
  useReveal();

  return (
    <div className="app">
      <div id="scroll-sentinel" aria-hidden="true" />
      <ScrollToTop />
      <SiteNav />
      <ContactPopup />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/workflow-audit" element={<WorkflowAuditPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/outgrown-spreadsheets" element={<ArticleSignsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/case-study/entryflow" element={<EntryflowCaseStudy />} />
          <Route path="/coming-soon/:slug" element={<ComingSoon />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
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
