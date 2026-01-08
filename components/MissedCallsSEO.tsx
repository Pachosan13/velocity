
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const MissedCallsSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO 
        title="Missed Calls Car Dealership Lead Recovery" 
        description="Every missed call at your dealership is a potential lost sale. Velocity recovers missed phone leads autonomously."
        canonicalPath="/missed-calls-car-dealership"
      />
      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          Missed calls are <br />missed sales.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-2xl mx-auto">
          Every missed call event ends with a potential buyer shopping your competitor. 
          Silence is the single most expensive error in fixed ops and sales.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The 6:01 PM silence.</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>The showroom closes.</p>
            <p>The leads don't stop.</p>
            <p>Your BDC is offline. Your sales floor is empty.</p>
            <p className="text-slate-950 font-normal">While operations pause, your prospects are still in-market and actively clicking.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-slate-950 text-white scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-none">
            An invisible <br />revenue leak.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-xl font-light">
            <p>
              When a prospect calls and reaches a voicemail without an immediate automated fallback, the likelihood of connection drops significantly. 
              They hang up and engage the next dealer in their search results.
            </p>
            <p>
              By failing to respond to missed calls instantly, you are indirectly funding your competition's growth. 
              Even a small volume of daily missed leads compounds into significant lost gross over a fiscal quarter.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 text-2xl font-light text-slate-500">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight mb-8">Systemic failure.</h2>
            <p>Standard BDC operations have capacity limits. They have shifts.</p>
            <p>Employee turnover and training gaps introduce persistent friction.</p>
            <p>The missed call problem is an infrastructure challenge, not a personnel one. It requires an autonomous solution.</p>
            <p className="text-sm border-t pt-4">Learn more about our <Link to="/car-dealership-leads-not-contacted" className="underline hover:text-black">leads not contacted logic</Link>.</p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Pattern Analysis</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">High Loss</div>
            <p className="mt-4 text-slate-500 font-light">Industry patterns show a drastic connection drop-off if a missed call is not followed up within the first few rings.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Capture the fire.</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Marketing creates the interest. Velocity ensures it is captured. 
            We provide 100% utilization of the traffic you've already paid for, day or night.
          </p>
        </div>
      </section>

      <section className="px-6 py-64 text-center scroll-reveal opacity-0 transition-all duration-1000">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16">Quantify the leak.</h2>
        <div className="flex justify-center">
          <Link 
            to="/#calculator"
            className="px-16 py-8 bg-black text-white rounded-full text-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-slate-200"
          >
            Calculate lost sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MissedCallsSEO;
