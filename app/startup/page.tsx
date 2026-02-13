"use client";
import React from 'react';
import { ArrowLeft, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function StartupSector() {
  const tiers = [
    { label: "Infrastructure", items: ["GST & PAN Setup", "FSSAI & Local Licensing", "MSME Registration"] },
    { label: "Narrative", items: ["Pitch Deck Architecture", "Financial Modeling", "Capital Strategy"] },
    { label: "Exit", items: ["Exit-Ready Audit", "Board-Ready Governance", "Due Diligence Readiness"] }
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="mb-32"><Link href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest"><ArrowLeft size={14}/> Back</Link></nav>
      <main className="max-w-4xl">
        <h1 className="text-6xl mb-12 italic">Venture architecture.</h1>
        <div className="grid md:grid-cols-3 gap-12">
          {tiers.map((tier) => (
            <div key={tier.label} className="border-t border-white/10 pt-8">
              <h3 className="text-[#00ffd1] text-[10px] font-bold uppercase tracking-widest mb-6">{tier.label}</h3>
              <ul className="space-y-4 text-sm text-white/60 font-light italic">
                {tier.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
