import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const DealerResponseTimeSEO: React.FC = () => {
  return (
    <div className="pt-40 bg-white">
      <SEO
        title="Dealer Response Time and Vehicle Acquisition"
        description="Dealer response time determines who gets the first seller conversation. This page defines the concept and explains how Velocity executes first contact."
        canonicalPath="/dealer-response-time"
      />

      <article className="px-6 py-24 md:py-32 max-w-screen-xl mx-auto scroll-reveal opacity-0 transition-all duration-1000">
        <header className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[0.95]">
            Dealer Response Time and Vehicle Acquisition
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-slate-600 font-light leading-snug">
            Dealer response time is the elapsed time between a private seller listing and the dealership’s first real contact attempt.
            In vehicle acquisition, response time is not a KPI for reports.
            It is the mechanism that decides who wins the inventory.
          </p>
        </header>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Why this problem exists</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              Most dealerships do not run a dedicated private seller acquisition lane all day.
              Phone coverage competes with the showroom.
            </p>
            <p>
              Listings arrive continuously.
              Work arrives in bursts.
              That mismatch creates delay.
            </p>
            <p>
              Tools can store leads.
              They cannot create the first call.
              The first call wins problem is operational.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Why speed matters</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              The first dealer to contact the seller gets the first conversation.
              First conversation controls the next step: appointment, address, documentation.
            </p>
            <p>
              Example: a listing posts at 6:44 PM.
              By 6:52 PM the seller may have multiple messages.
              A call at 7:30 PM is no longer “early.”
            </p>
            <p>
              “Dealership speed to lead” for sellers is the same dynamic as buyers, but faster.
              Sellers make decisions quickly because they want the task done.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">How Velocity solves this</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>
              Velocity is an inventory acquisition operator built around response time.
              We run first contact attempts immediately, then retry, and record outcomes.
            </p>
            <p>
              Dealers receive a clear timeline that shows when the listing was detected, when calls were attempted, and what the seller said.
              This makes response time measurable and enforceable.
            </p>
            <p>
              The output is not “more leads.”
              The output is faster first contact and more real seller conversations.
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">What Velocity does NOT do</h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-slate-600 font-light leading-snug">
            <p>Velocity does not guarantee the seller will answer.</p>
            <p>Velocity does not guarantee purchase price or deal closure.</p>
            <p>Velocity is not an auction supply source.</p>
            <p>Velocity guarantees speed, first contact attempts, and documented seller conversations when the seller engages.</p>
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">FAQ</h2>
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What is “dealer response time” for inventory?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                The time from listing to first contact attempt with the private seller.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Does “first call wins” actually apply to private sellers?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Yes. Sellers typically respond to the first credible, clear, low-friction buyer.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What is a good response time target?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                Minutes, not hours. The early window is when the seller is still uncommitted.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Why can’t a BDC just handle this?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                A BDC can, but only if coverage is consistent and queues don’t build. Most failures are capacity and timing.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">What does Velocity provide to prove speed?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                A timestamped timeline of detection and call attempts, plus recorded conversation outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950">Is there a market example?</h3>
              <p className="mt-3 text-lg md:text-xl text-slate-600 font-light leading-snug">
                See <Link to="/miami" className="underline hover:text-slate-950">Miami early access</Link> for an active pilot model.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-20 max-w-4xl border-t border-slate-100 pt-10">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-snug">
            Response time is a controllable advantage.
            If you want the broader system context, start at the <Link to="/" className="underline hover:text-slate-950">Velocity homepage</Link>.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default DealerResponseTimeSEO;


