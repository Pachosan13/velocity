
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Integrate.",
      description: "Connect Velocity to your CRM. Zero IT effort. All major platforms supported.",
    },
    {
      title: "Contact.",
      description: "Leads are dialed the moment they arrive. No delay. No human error.",
    },
    {
      title: "Recover.",
      description: "Automated SMS and voice follow-up for those who don't answer. 24/7.",
    }
  ];

  return (
    <section id="how-it-works" className="py-48 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-32 scroll-reveal opacity-0 transition-all duration-1000">Autonomous recovery.</h2>
        
        <div className="grid md:grid-cols-3 gap-24">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal opacity-0 transition-all duration-1000"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <h3 className="text-3xl font-bold mb-6">{step.title}</h3>
              <p className="text-slate-500 text-xl font-light leading-snug">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
