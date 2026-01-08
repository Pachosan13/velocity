
import React from 'react';

const SpeedWins: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-32 scroll-reveal opacity-0 transition-all duration-1000">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[0.95]">Lead to Call.<br />Under 60s.</h2>
          <p className="text-slate-400 text-2xl md:text-3xl max-w-3xl font-light leading-tight">
            Wait 5 minutes: You lose 30% of your leads.<br />
            Wait 30 minutes: You lose the sale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-4 scroll-reveal opacity-0 transition-all duration-1000">
          <div className="p-12 border border-slate-100 flex flex-col justify-between h-80 rounded-tl-[3rem]">
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">T+ 0s</span>
            <div>
              <h3 className="text-3xl font-bold">Inbound</h3>
              <p className="text-slate-400 mt-2">Submission hits CRM.</p>
            </div>
          </div>
          <div className="p-12 border-x border-slate-100 bg-slate-50 flex flex-col justify-between h-80">
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">T+ 35s</span>
            <div>
              <h3 className="text-3xl font-bold">Velocity Call</h3>
              <p className="text-slate-600 mt-2">Connection established.</p>
            </div>
          </div>
          <div className="p-12 border border-slate-100 flex flex-col justify-between h-80 rounded-br-[3rem]">
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">Outcome</span>
            <div>
              <h3 className="text-3xl font-bold">The Sale</h3>
              <p className="text-slate-400 mt-2">First to call wins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedWins;
