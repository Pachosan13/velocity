
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import TheLeak from './components/TheLeak';
import SpeedWins from './components/SpeedWins';
import HowItWorks from './components/HowItWorks';
import WhyDifferent from './components/WhyDifferent';
import Calculator from './components/Calculator';
import ForWhom from './components/ForWhom';
import FinalCTA from './components/FinalCTA';
import MissedCallsSEO from './components/MissedCallsSEO';
import LeadsNotContactedSEO from './components/LeadsNotContactedSEO';
import SlowResponseSEO from './components/SlowResponseSEO';
import SEO from './components/SEO';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <SEO 
      title="Automated Lead Recovery for Dealerships" 
      description="Velocity recovers lost car dealership revenue by contacting internet leads in under 60 seconds, autonomously."
      canonicalPath="/"
    />
    <Hero />
    <TheLeak />
    <div id="how-it-works">
      <HowItWorks />
    </div>
    <WhyDifferent />
    <div id="calculator">
      <Calculator />
    </div>
    <div className="py-24 px-6 bg-white border-t border-slate-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap gap-x-12 gap-y-4 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
        <span className="text-slate-900">Analysis:</span>
        <Link to="/car-dealership-leads-not-contacted" className="hover:text-slate-900 transition-colors">Uncontacted Patterns</Link>
        <Link to="/missed-calls-car-dealership" className="hover:text-slate-900 transition-colors">Missed Call Impact</Link>
        <Link to="/slow-lead-response-car-dealers" className="hover:text-slate-900 transition-colors">Speed-to-Lead Logic</Link>
      </div>
    </div>
    <ForWhom />
    <FinalCTA />
  </>
);

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missed-calls-car-dealership" element={<MissedCallsSEO />} />
        <Route path="/car-dealership-leads-not-contacted" element={<LeadsNotContactedSEO />} />
        <Route path="/slow-lead-response-car-dealers" element={<SlowResponseSEO />} />
      </Routes>
      
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">
              © 2024 Velocity Systems. Recovering lost revenue autonomously.
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-[11px] uppercase tracking-widest font-bold text-slate-400">
              <Link to="/car-dealership-leads-not-contacted" className="hover:text-slate-900 transition-colors">Leads Not Contacted</Link>
              <Link to="/missed-calls-car-dealership" className="hover:text-slate-900 transition-colors">Missed Calls</Link>
              <Link to="/slow-lead-response-car-dealers" className="hover:text-slate-900 transition-colors">Slow Response</Link>
            </div>
          </div>
          <div className="flex gap-8 text-[10px] text-slate-300 font-medium">
            <a href="#" className="hover:text-slate-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
