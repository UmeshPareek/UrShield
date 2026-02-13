"use client";
import React from 'react';
import { Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function OrganisationSector() {
  const services = [
    {
      category: "Compliance",
      items: ["Institutional Stress-Testing", "GST & PAN Infrastructure", "Local License Management"]
    },
    {
      category: "Risk",
      items: ["Scrutiny Advisory", "Internal Audit Preparation", "Regulatory Drift Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-20 py-10">
      <nav className="flex items-center gap-4 mb-32">
        <Link href="/" className="text-white/40 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Organisation Sector</span>
      </nav>

      <main className="max-w-4xl">
        <header className="mb-24">
          <h1 className="text-5xl md:text-6xl mb-8 italic">Institutional resilience.</h1>
          <p className="text-white/40 text-lg max-w-xl font-light leading-relaxed">
            We provide the infrastructure for organizations to navigate complex regulatory landscapes with absolute certainty.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-20">
          {services.map((group, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h3 className="text-[#00ffd1] text-[10px] font-bold uppercase tracking-widest mb-8">
                {group.category}
              </h3>
              <ul className="space-y-6">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/60 font-light">
                    <CheckCircle2 size={16} className="text-white/20 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-40 p-12 bg-white/5 rounded-3xl border border-white/10">
          <h4 className="text-2xl mb-6 italic">Secure consultation.</h4>
          <p className="text-white/40 mb-10 text-sm max-w-md">Request a clinical diagnostic of your entity's current compliance and risk standing.</p>
          <Link href="/#contact" className="inline-block border border-white/20 px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Initiate Briefing
          </Link>
        </section>
      </main>
    </div>
  );
}
