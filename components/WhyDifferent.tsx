
import React from 'react';

const WhyDifferent: React.FC = () => {
  const points = [
    { title: "No BDC hiring.", desc: "Eliminate fixed overhead and management debt." },
    { title: "No dashboards.", desc: "Velocity runs entirely inside your existing CRM." },
    { title: "No learning curve.", desc: "Your team answers the phone. We do the work." },
    { title: "No off-hours.", desc: "Midnight leads are recovered while your store is closed." }
  ];

  return (
    <section className="py-48 px-6 bg-white border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-32 scroll-reveal opacity-0 transition-all duration-1000 leading-[0.9]">A system.<br />Not a service.</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal opacity-0 transition-all duration-1000"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6">{point.title}</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
