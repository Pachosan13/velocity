
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const SlowResponseSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO 
        title="Slow Lead Response Car Dealers - Recovery Strategy" 
        description="Speed-to-lead is the most critical metric for car dealers. Velocity eliminates slow response times with autonomous instant contact."
        canonicalPath="/slow-lead-response-car-dealers"
      />
      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          Slow response <br />is rejection.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-2xl mx-auto">
          In a hyper-competitive market, slow lead response car dealers are effectively invisible. 
          If you are not the first dealer to call, you have already lost the opportunity.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The minute wall.</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>A customer submits a lead.</p>
            <p>The competitive clock starts.</p>
            <p>After the first ten minutes, the connection rate degrades exponentially.</p>
            <p className="text-slate-950 font-normal">Contact speed is the single highest predictor of appointment success.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-slate-950 text-white scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-none">
            First-to-call <br />wins.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-xl font-light">
            <p>
              Digital buyers multi-shop with high intent. 
              The dealership that engages them first captures the psychological commitment to the appointment.
            </p>
            <p>
              Delayed response is a loud signal that your store lacks efficiency. 
              They won't wait for your BDC to clear their queue. They will shop the dealer who is ready when they are.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 text-2xl font-light text-slate-500">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight mb-8">Process over effort.</h2>
            <p>Human teams cannot scale speed indefinitely.</p>
            <p>Fatigue, administrative tasks, and showroom traffic create unavoidable lag.</p>
            <p>Only an autonomous system can provide sub-60 second contact consistently across every lead source.</p>
            <p className="text-sm border-t pt-4">See how this impacts <Link to="/missed-calls-car-dealership" className="underline hover:text-black">missed call events</Link>.</p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Efficiency Impact</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">10x Potential</div>
            <p className="mt-4 text-slate-500 font-light">Conversion rates see a significant uplift when response times move from hours to minutes.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Total capture.</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Velocity removes the friction of human response delay. 
            We initiate conversations while the prospect is still actively browsing your inventory.
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

export default SlowResponseSEO;
