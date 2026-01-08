
import React, { useState, useEffect } from 'react';

const Calculator: React.FC = () => {
  const [leads, setLeads] = useState(150);
  const [conversion, setConversion] = useState(12);
  const [avgProfit, setAvgProfit] = useState(3500);
  const [lostRevenue, setLostRevenue] = useState(0);

  useEffect(() => {
    const recoveredLeads = leads * 0.45; // 45% recovery potential
    const lostSales = recoveredLeads * (conversion / 100);
    setLostRevenue(lostSales * avgProfit);
  }, [leads, conversion, avgProfit]);

  return (
    <section id="calculator" className="py-64 px-6 bg-slate-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          <div className="scroll-reveal opacity-0 transition-all duration-1000">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16">Quantify the leakage.</h2>
            <p className="text-slate-500 text-3xl font-light leading-none mb-24 tracking-tight">
              Most dealers overestimate efficiency.<br />
              Measure the margin left on the table.
            </p>
            
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex justify-between text-xl font-bold uppercase tracking-widest text-slate-400">
                  <span>Monthly Leads</span>
                  <span className="text-slate-900">{leads}</span>
                </div>
                <input 
                  type="range" min="50" max="2500" step="10" 
                  value={leads} onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <div className="space-y-8">
                <div className="flex justify-between text-xl font-bold uppercase tracking-widest text-slate-400">
                  <span>Close Rate</span>
                  <span className="text-slate-900">{conversion}%</span>
                </div>
                <input 
                  type="range" min="1" max="40" step="1" 
                  value={conversion} onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <div className="space-y-8">
                <div className="flex justify-between text-xl font-bold uppercase tracking-widest text-slate-400">
                  <span>Avg Profit</span>
                  <span className="text-slate-900">${avgProfit.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="1000" max="10000" step="100" 
                  value={avgProfit} onChange={(e) => setAvgProfit(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-20 shadow-2xl shadow-slate-200 border border-slate-100 scroll-reveal opacity-0 delay-400 transition-all duration-1000">
            <div className="text-xs uppercase tracking-[0.5em] text-slate-400 font-bold mb-16">Monthly Potential Loss</div>
            <div className="mb-20">
              <div className="text-8xl md:text-9xl font-bold tracking-tighter text-slate-950">
                ${Math.round(lostRevenue).toLocaleString()}
              </div>
            </div>
            
            <div className="h-px bg-slate-100 mb-16"></div>
            
            <div className="space-y-8 mb-20">
              <div className="flex items-center gap-6 text-slate-950 text-2xl font-bold tracking-tight">
                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                <span>Recoverable Gross Profit</span>
              </div>
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                Conservative projection based on sub-60s response lift.
              </p>
            </div>

            <button className="w-full py-8 bg-black text-white rounded-[2rem] text-2xl font-bold hover:scale-[1.02] transition-transform">
              Recover this revenue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
