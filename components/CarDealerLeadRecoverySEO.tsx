import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const CarDealerLeadRecoverySEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="Car Dealer Lead Recovery"
        description="Car dealer lead recovery is a speed problem: why missed car leads happen, why response time matters, and what an operator-first process looks like."
        canonicalPath="/car-dealer-lead-recovery"
      />

      <article className="px-6 py-24 md:py-32 max-w-screen-xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <header className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[0.95]">
            Car Dealer Lead Recovery
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-slate-600 font-light leading-snug">
            Car dealer lead recovery means converting missed or delayed contacts into real conversations.
            Most “lost leads” are not lost because of messaging.
            They are lost because the dealership did not respond first.
          </p>
        </header>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Why this problem exists</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              Leads arrive in bursts.
              The sales floor gets busy.
              Calls are missed.
              Forms sit in a queue.
            </p>
            <p>
              The CRM records activity, but it does not enforce outcomes.
              If response time slips, the lead goes cold before the first real conversation happens.
            </p>
            <p>
              This applies to buyers and to private sellers.
              Private sellers are especially time-sensitive because they get contacted by multiple dealers immediately.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Why speed matters</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              Speed-to-lead is the difference between a live conversation and a follow-up attempt.
              The first contact sets the appointment.
            </p>
            <p>
              Example: a private seller submits a form at 2:07 PM.
              If your first call is 2:45 PM, you are likely competing against a dealer who called at 2:09 PM.
            </p>
            <p>
              “Missed car leads” often means the store was late, not that the lead was bad.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">How Velocity solves this</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              Velocity is an operator focused on response time and first contact.
              We recover missed and delayed opportunities by executing the first attempts immediately and consistently.
            </p>
            <p>
              The workflow is practical:
              detect the opportunity, attempt contact, retry, and document outcomes.
              You get a timeline that explains what happened and when.
            </p>
            <p>
              This reframes lead recovery away from “more tools” and toward “faster execution.”
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">What Velocity does NOT do</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>Velocity is not a CRM.</p>
            <p>Velocity does not change your lead sources.</p>
            <p>Velocity does not guarantee deals.</p>
            <p>Velocity guarantees speed, first contact attempts, and documented conversations when the other party engages.</p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">FAQ</h2>
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What is “lead recovery” in a dealership context?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                It is the process of turning missed or delayed contacts into real conversations and appointments.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Is lead recovery a CRM configuration problem?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Usually no. The primary failure mode is response time and coverage, not settings.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What does “dealership response time” actually affect?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                It affects whether you get the first conversation. First conversation drives appointment probability.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Does this apply to private sellers too?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Yes. Private sellers get contacted by multiple dealers. Follow up private sellers is a speed race.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What does Velocity guarantee?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Speed, first contact attempts, retries, and a documented timeline of outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Where is Velocity live today?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Current rollout details are captured in <Link to="/miami" className="underline hover:text-slate-950">Miami early access</Link>.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-20 max-w-4xl border-t border-slate-100 pt-10">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-snug">
            The cleanest definition of lead recovery is “first conversation recovered.”
            For the broader operating model, start at the <Link to="/" className="underline hover:text-slate-950">Velocity homepage</Link>.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CarDealerLeadRecoverySEO;


