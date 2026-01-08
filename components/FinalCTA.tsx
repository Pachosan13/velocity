
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-80 px-6 bg-white text-center">
      <div className="max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h2 className="text-8xl md:text-[160px] font-bold tracking-tighter mb-24 leading-[0.75]">
          End the delay.
        </h2>
        
        <p className="text-slate-400 text-3xl md:text-5xl font-light mb-24 max-w-3xl mx-auto leading-none tracking-tight">
          Silence is costing you sales today.<br />
          Recover them tomorrow.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-16 py-9 bg-black text-white rounded-full text-3xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-slate-300"
          >
            Calculate lost sales
          </button>
        </div>
        
        <div className="mt-64 pt-32 border-t border-slate-100 flex flex-wrap justify-center gap-24 opacity-20 grayscale">
           <span className="font-bold tracking-tighter text-3xl">ELEAD</span>
           <span className="font-bold tracking-tighter text-3xl">VIN SOLUTIONS</span>
           <span className="font-bold tracking-tighter text-3xl">REYNOLDS & REYNOLDS</span>
           <span className="font-bold tracking-tighter text-3xl">DEALERSOCKET</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
