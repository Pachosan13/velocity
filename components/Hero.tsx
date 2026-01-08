
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-56 pb-40 md:pt-80 md:pb-64 px-6 flex flex-col items-center text-center">
      <div 
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950 mb-4">
            Most dealerships lose $40,000 every month to silence.
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        
        <h1 className="text-7xl md:text-[160px] font-bold tracking-tighter leading-[0.8] text-slate-950 max-w-7xl mx-auto">
          The first call wins.
        </h1>
        
        <p className="mt-16 text-2xl md:text-4xl text-slate-400 max-w-4xl mx-auto font-light leading-tight">
          Silence is a choice.<br />
          Velocity contacts every prospect in under 60 seconds.
        </p>

        <div className="mt-20">
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-14 py-7 bg-black text-white rounded-full text-2xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-slate-300"
          >
            Calculate lost sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
