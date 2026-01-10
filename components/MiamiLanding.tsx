import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from './SEO';

const APPLY_EMAIL_HREF =
  'mailto:hello@getvelocity.com?subject=Miami%20inventory%20access%20application';

const MiamiLanding: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="Miami Inventory Access (Early Access Pilot)"
        description="Velocity is an inventory acquisition operator focused on speed. Apply for Miami early access."
        canonicalPath="/miami"
      />
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="px-6 py-32 md:py-40 text-center max-w-5xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-950">
          Inventory is won by speed.
        </h1>
        <p className="mt-12 text-2xl md:text-3xl text-slate-400 font-light leading-tight max-w-3xl mx-auto">
          We detect and contact private sellers faster than any dealer in Miami.
        </p>
        <p className="mt-10 text-xl md:text-2xl text-slate-500 font-light leading-snug max-w-2xl mx-auto">
          If you don’t call first, you don’t win the car.
        </p>

        <div className="mt-14 flex flex-col items-center gap-4">
          <a
            href={APPLY_EMAIL_HREF}
            className="px-14 py-6 bg-black text-white rounded-full text-xl font-bold hover:scale-[1.03] transition-transform shadow-2xl shadow-slate-200"
          >
            Apply for Miami inventory access
          </a>
          <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
            Limited early access. Applications reviewed manually.
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="px-6 py-24 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The problem isn’t demand. It’s delay.</h2>
          <div className="text-xl md:text-2xl font-light text-slate-500 space-y-8 leading-snug">
            <ul className="space-y-4 list-disc pl-6">
              <li>Cars are posted by private sellers every day</li>
              <li>Multiple dealers see the same listings</li>
              <li>The first call wins</li>
              <li>Everyone else loses the inventory</li>
            </ul>
            <p className="text-slate-950 font-normal">
              Velocity exists to remove hesitation and make sure your dealership is first.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT VELOCITY DOES / DOES NOT DO */}
      <section className="px-6 py-24 bg-slate-950 text-white scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">What Velocity guarantees</h2>
              <ul className="text-slate-300 text-xl font-light space-y-4 list-disc pl-6">
                <li>Detection in minutes</li>
                <li>Immediate call attempts</li>
                <li>Seller conversations recorded</li>
                <li>Full timeline and proof</li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">What Velocity does NOT guarantee</h2>
              <ul className="text-slate-300 text-xl font-light space-y-4 list-disc pl-6">
                <li>Purchase price</li>
                <li>Seller acceptance</li>
                <li>Deal closure</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-slate-300 text-xl font-light">
            Velocity delivers opportunities, not promises.
          </div>
          <div className="mt-10 text-slate-400 text-sm font-medium leading-relaxed">
            <div>This is an Early Access Pilot for Miami.</div>
            <div>Velocity does NOT guarantee purchases.</div>
            <div>Velocity guarantees speed, first contact, and real seller conversations.</div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (MIAMI PILOT) */}
      <section className="px-6 py-24 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-950">
            How it works (Miami pilot)
          </h2>
          <ol className="text-xl md:text-2xl font-light text-slate-500 space-y-6 leading-snug list-decimal pl-6">
            <li>Detect private seller listings (Craigslist, Marketplace, Encuentra24)</li>
            <li>Call immediately and retry if needed</li>
            <li>Log conversation and outcome</li>
            <li>Hand off hot opportunities to the dealer</li>
          </ol>
        </div>
      </section>

      {/* 5. EXCLUSIVITY & ACCESS RULES */}
      <section className="px-6 py-24 border-t border-slate-50 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-950">
            This Miami pilot is limited.
          </h2>
          <ul className="text-xl md:text-2xl font-light text-slate-500 space-y-4 leading-snug list-disc pl-6">
            <li>Temporary exclusivity during the pilot</li>
            <li>One dealer per market</li>
            <li>Rules will harden as Velocity scales</li>
          </ul>
        </div>
      </section>

      {/* 6. WHO THIS IS FOR / NOT FOR */}
      <section className="px-6 py-24 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-slate-50 p-14 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">For</div>
            <ul className="text-xl md:text-2xl font-light text-slate-600 space-y-4 leading-snug list-disc pl-6">
              <li>Dealers buying 10+ cars per month</li>
              <li>Fast decision makers</li>
              <li>Teams that answer phones</li>
            </ul>
          </div>
          <div className="bg-white p-14 rounded-[3rem] border border-slate-100">
            <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold mb-8">Not for</div>
            <ul className="text-xl md:text-2xl font-light text-slate-600 space-y-4 leading-snug list-disc pl-6">
              <li>Slow follow-up dealers</li>
              <li>Consignment-only shops</li>
              <li>Anyone looking for cheap leads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. OFFER SECTION */}
      <section className="px-6 py-24 bg-white border-y border-slate-100 scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-950 mb-10">
            Velocity Pilot — Miami (Early Access)
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ul className="text-xl md:text-2xl font-light text-slate-600 space-y-4 leading-snug list-disc pl-6">
              <li>$500 setup (early partners)</li>
              <li>50% revenue share</li>
              <li>30-day pilot</li>
              <li>Cancel anytime</li>
              <li>Limited slots</li>
            </ul>
            <div className="flex md:justify-end">
              <a
                href={APPLY_EMAIL_HREF}
                className="px-14 py-6 bg-black text-white rounded-full text-xl font-bold hover:scale-[1.03] transition-transform shadow-2xl shadow-slate-200"
              >
                Apply for Miami inventory access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CLOSE */}
      <section className="px-6 py-28 text-center scroll-reveal opacity-0 transition-all duration-1000">
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl md:text-6xl font-bold tracking-tight text-slate-950">
            Delay kills deals. Speed creates inventory.
          </div>
          <div className="mt-10 text-xl md:text-2xl font-light text-slate-500">
            Apply only if you’re ready to move fast.
          </div>
          <div className="mt-14 flex justify-center">
            <a
              href={APPLY_EMAIL_HREF}
              className="px-14 py-6 bg-black text-white rounded-full text-xl font-bold hover:scale-[1.03] transition-transform shadow-2xl shadow-slate-200"
            >
              Apply for Miami inventory access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiamiLanding;


