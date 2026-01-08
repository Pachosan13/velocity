
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBtnClick = () => {
    if (pathname === '/') {
      const calc = document.getElementById('calculator');
      if (calc) calc.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#calculator');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 apple-blur border-b border-slate-100 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <img
            src="/velocitylogo.png"
            alt="Velocity"
            className="h-5 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>
        
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-bold text-slate-500">
          <Link 
            to="/#how-it-works" 
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="hover:text-slate-950 transition-colors"
          >
            System
          </Link>
          <Link 
            to="/#calculator" 
            onClick={(e) => handleNavClick(e, 'calculator')}
            className="hover:text-slate-950 transition-colors"
          >
            Analysis
          </Link>
        </div>

        <button 
          onClick={handleBtnClick}
          className="text-xs bg-slate-950 text-white px-5 py-2 rounded-full hover:bg-black transition-all font-bold"
        >
          Calculate lost sales
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
