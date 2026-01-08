
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const LeadsNotContactedSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO 
        title="Car Dealership Leads Not Contacted Analysis" 
        description="Stop letting internet leads go uncontacted. Velocity identifies and recovers car dealership leads that slip through standard BDC processes."
        canonicalPath="/car-dealership-leads-not-contacted"
      />
      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          Uncontacted leads <br />are ghosts.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-2xl mx-auto">
          The primary issue isn't lead volume. It's the leads not contacted within the first golden hour. 
          Without immediate engagement, your marketing budget is simply a sunk cost.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The accumulation of zero.</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>Every morning, your CRM refreshes with potential.</p>
            <p>By noon, a significant portion of those leads have already cooled.</p>
            <p>By evening, many remain uncontacted and effectively dead.</p>
            <p className="text-slate-950 font-normal">Uncontacted leads are the hidden tax on your dealership's showroom traffic.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-slate-950 text-white scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-none">
            Inventory velocity <br />is the metric.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-xl font-light">
            <p>
              An uncontacted lead is a missed appointment. A missed appointment is a zero-dollar deal. 
              The financial impact is immediate and compounding.
            </p>
            <p>
              When leads go uncontacted, floor traffic plateaus, and inventory aging increases. 
              You are paying floorplan interest on units that should have been delivered days ago.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 text-2xl font-light text-slate-500">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight mb-8">Operational bottlenecks.</h2>
            <p>Manual BDC dialing has a physical ceiling.</p>
            <p>Sales teams prioritize customers currently on the lot, as they should.</p>
            <p>The system breaks when lead arrival velocity exceeds your team's ability to respond.</p>
            <p className="text-sm border-t pt-4">Compare this to <Link to="/slow-lead-response-car-dealers" className="underline hover:text-black">slow response patterns</Link>.</p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Performance Data</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">Sub-Optimal</div>
            <p className="mt-4 text-slate-500 font-light">Standard operations frequently show a notable percentage of leads that never receive a meaningful first contact attempt.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Recovery is non-negotiable.</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Velocity ensures every lead is contacted instantly and followed up persistently. 
            We turn ghosts back into prospects.
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

export default LeadsNotContactedSEO;
