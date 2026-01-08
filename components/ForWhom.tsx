
import React from 'react';

const ForWhom: React.FC = () => {
  return (
    <section className="py-64 px-6 bg-white border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-40">
          <div className="scroll-reveal opacity-0 transition-all duration-1000">
            <h3 className="text-5xl font-bold mb-16 tracking-tight">Velocity is for:</h3>
            <ul className="space-y-12 text-2xl font-light text-slate-500">
              <li className="flex items-start gap-8">
                <span className="text-black font-bold">01</span>
                <span>Stores handling 150+ internet leads per month.</span>
              </li>
              <li className="flex items-start gap-8">
                <span className="text-black font-bold">02</span>
                <span>Dealers who prioritize revenue over manual BDC calls.</span>
              </li>
              <li className="flex items-start gap-8">
                <span className="text-black font-bold">03</span>
                <span>Managers who want a system, not an agency.</span>
              </li>
            </ul>
          </div>

          <div className="scroll-reveal opacity-0 delay-400 transition-all duration-1000">
            <h3 className="text-5xl font-bold mb-16 text-slate-300 tracking-tight">Velocity is not for:</h3>
            <ul className="space-y-12 text-2xl font-light text-slate-400">
              <li className="flex items-start gap-8">
                <span>—</span>
                <span>Dealers looking for "more leads." We fix conversion, not traffic.</span>
              </li>
              <li className="flex items-start gap-8">
                <span>—</span>
                <span>Curiosity seekers or AI enthusiasts. This is a revenue recovery system.</span>
              </li>
              <li className="flex items-start gap-8">
                <span>—</span>
                <span>Anyone satisfied with losing $25,000 a month to silence.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
