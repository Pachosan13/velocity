import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const AfterHoursCarDealershipLeadsSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="After Hours Car Dealership Leads"
        description="After hours car dealership leads don’t wait for morning. Velocity recovers off-hours opportunities with instant, autonomous contact."
        canonicalPath="/after-hours-car-dealership-leads"
      />

      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          After hours car <br />
          dealership leads <br />
          go silent.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-3xl mx-auto">
          The buyer is still shopping.
          <br />
          Your team is offline.
          <br />
          The window closes fast.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">What’s actually happening</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>After hours dealership leads come in late.</p>
            <p>Forms. Calls. Chats. Inventory clicks.</p>
            <p>The CRM logs them.</p>
            <p>The store doesn’t answer them.</p>
            <p className="text-slate-950 font-normal">By the time the morning queue starts, the buyer has moved on.</p>
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
              An after-hours lead is usually high intent.
              They’re comparing.
              They’re ready to schedule.
            </p>
            <p>
              A delayed first contact turns into a missed appointment.
              Missed appointments become aged inventory and lower close rate.
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
            <p>Coverage after hours is expensive.</p>
            <p>Schedules don’t match buyer behavior.</p>
            <p>Turnover resets consistency.</p>
            <p>Tools are fragmented across phone, CRM, and forms.</p>
            <p className="text-slate-950 font-normal">
              It isn’t neglect.
              It’s a system that stops at close.
            </p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">After Hours</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">Low Coverage</div>
            <p className="mt-4 text-slate-500 font-light">
              Most stores rely on next-day follow up for overnight car dealership leads.
              That delay is the loss.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Lead recovery vs lead generation</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Lead generation buys attention.
            <br />
            Lead recovery captures it.
            <br />
            Velocity focuses on the demand you already paid for.
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

export default AfterHoursCarDealershipLeadsSEO;


