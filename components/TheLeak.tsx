
import React, { useState, useEffect } from 'react';

const TheLeak: React.FC = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + 0.15);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-64 px-6 bg-slate-950 text-white selection:bg-white selection:text-black">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12 scroll-reveal opacity-0 transition-all duration-1000">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">The Leak.</h2>
          <div className="space-y-8 text-slate-400 text-2xl md:text-3xl font-light leading-none">
            <p>A lead is not a data point.</p>
            <p>It is a person waiting.</p>
            <p>Silence is a choice.</p>
            <p>Silence costs more than marketing.</p>
            <p className="text-white mt-12 font-normal">You are leaking margin right now.</p>
          </div>
        </div>

        <div className="relative p-16 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl scroll-reveal opacity-0 delay-300 transition-all duration-1000">
          <div className="absolute top-10 right-12 text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Live Loss Analysis</div>
          
          <div className="py-16">
            <div className="text-slate-500 text-sm mb-6 uppercase tracking-[0.2em] font-bold">Estimated Revenue Leaked</div>
            <div className="text-8xl md:text-9xl font-mono font-bold tracking-tighter text-red-500">
              ${revenue.toFixed(2)}
            </div>
            <div className="mt-12 text-slate-400 text-sm font-light">Based on 150 monthly leads at $2,500 average front-end gross.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLeak;
