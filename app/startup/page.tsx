"use client";
import React from 'react';
import { ArrowLeft, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function StartupSector() {
  const steps = [
    { stage: "Launchpad", services: ["GST & PAN Setup", "FSSAI & Local Licensing"] },
    { stage: "Architecture", services: ["Financial Modeling", "Investor Deck Design"] },
    { stage: "Readiness", services: ["Audit Preparedness", "Capital Strategy"] }
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="flex items-center gap-4 mb-32">
        <Link href="/" className="text-white/40 hover:text-white transition-colors"><ArrowLeft size={20} /></Link>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Venture Architecture</span>
      </nav>

      <main className="max-w-4xl">
        <header className="mb-24">
          <h1 className="text-5xl md:text-6xl mb-8 italic">From concept to capital.</h1>
          <p className="text-lg font-light max-w-xl">Clinical execution of the regulatory and financial infrastructure required for high-growth startups.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="border-t border-white/10 pt-8">
              <h3 className="text-[#00ffd1] text-[10px] font-bold uppercase tracking-widest mb-6">{step.stage}</h3>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                {step.services.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
