import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const LosingCarSalesLeadsSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="Losing Car Sales Leads"
        description="If you’re losing car sales leads, it’s rarely volume. It’s contact speed and follow-up consistency. Velocity recovers missed opportunities autonomously."
        canonicalPath="/losing-car-sales-leads"
      />

      <section className="px-6 py-32 md:py-48 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-slate-950">
          Losing car <br />
          sales leads <br />
          isn’t random.
        </h1>
        <p className="mt-16 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-3xl mx-auto">
          It’s a predictable sequence.
          <br />
          Slow contact.
          <br />
          Inconsistent follow-up.
          <br />
          Quiet leakage.
        </p>
      </section>

      <section className="px-6 py-32 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">What’s actually happening</h2>
          <div className="text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <p>Leads arrive across multiple sources.</p>
            <p>Calls. Forms. OEM. Paid search. Marketplace traffic.</p>
            <p>They land in a queue.</p>
            <p>The queue becomes a backlog.</p>
            <p className="text-slate-950 font-normal">
              The dealership that reaches the buyer first sets the appointment.
            </p>
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
              When you’re losing internet leads, you don’t see the loss.
              You just see “no show.”
              Or “went dark.”
            </p>
            <p>
              The cost shows up later as fewer appointments, lower show rate, and more aging units.
              The margin erodes quietly.
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
            <p>Staffing is finite.</p>
            <p>Peak lead volume doesn’t align with peak coverage.</p>
            <p>Process depends on perfect execution.</p>
            <p>CRMs record activity. They don’t enforce outcomes.</p>
            <p className="text-slate-950 font-normal">
              The gap isn’t effort.
              It’s infrastructure.
            </p>
          </div>
          <div className="bg-slate-50 p-16 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Lead Loss</div>
            <div className="text-5xl font-bold tracking-tighter text-slate-950">Systemic</div>
            <p className="mt-4 text-slate-500 font-light">
              Most stores can’t hold sub-minute response across every channel.
              That’s where the car sales leads leak.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-48 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Lead recovery vs lead generation</h2>
          <p className="text-slate-400 text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-tight mb-16">
            Lead generation increases volume.
            <br />
            Lead recovery increases utilization.
            <br />
            Velocity focuses on converting existing demand into appointments.
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

export default LosingCarSalesLeadsSEO;


