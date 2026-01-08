import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const VirtualBDCForCarDealershipsSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="Virtual BDC for Car Dealerships"
        description="A virtual BDC for car dealerships should deliver consistent speed-to-lead and follow-up. Velocity provides autonomous, always-on lead recovery."
        canonicalPath="/virtual-bdc-for-car-dealerships"
      />

      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          Virtual BDC <br />
          for car <br />
          dealerships.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-3xl mx-auto">
          The question isn’t “should we outsource.”
          <br />
          It’s “can we guarantee contact.”
          <br />
          Every time.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">What’s actually happening</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>Dealerships add tools to cover gaps.</p>
            <p>Outsourced BDC. Chat providers. Answering services.</p>
            <p>The handoffs multiply.</p>
            <p>Ownership of the first contact becomes unclear.</p>
            <p className="text-slate-950 font-normal">The buyer experiences delay. Or repetition. Or silence.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-slate-950 text-white scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-none">
            Why this quietly <br />
            costs sales
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-xl font-light">
            <p>
              A virtual BDC can create coverage.
              But coverage without speed is still loss.
              Buyers don’t wait.
            </p>
            <p>
              When follow-up is inconsistent, appointment quality drops.
              The showroom sees it as “low intent.”
              It’s usually just low responsiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 text-2xl font-light text-slate-500">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight mb-8">
              Why most dealerships don’t fix it
            </h2>
            <p>Most solutions are add-ons.</p>
            <p>They depend on humans to keep queues clean.</p>
            <p>They don’t operate inside your real-time lead flow.</p>
            <p>They often stop at the same edges: nights, weekends, overflow.</p>
            <p className="text-slate-950 font-normal">
              A virtual BDC only works if it behaves like infrastructure.
              Not a patch.
            </p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Virtual BDC</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">Needs Autonomy</div>
            <p className="mt-4 text-slate-500 font-light">
              The win is consistent first contact and persistent follow-up.
              Without that, it’s just another inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Lead recovery vs lead generation</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Lead generation increases spend.
            <br />
            Lead recovery increases conversion.
            <br />
            Velocity is built to recover missed and delayed opportunities automatically.
          </p>
        </div>
      </section>

      <section className="px-6 py-64 text-center scroll-reveal opacity-0 transition-all duration-1000">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16">Next step</h2>
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

export default VirtualBDCForCarDealershipsSEO;


