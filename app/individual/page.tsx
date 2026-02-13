"use client";
import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function IndividualSector() {
  const offerings = [
    { title: "Tax Design", desc: "Advanced engineering of personal tax liabilities and wealth retention." },
    { title: "Capital Protection", desc: "Shielding personal assets from market and regulatory volatility." },
    { title: "Sovereign Advisory", desc: "Bespoke strategies for high-net-worth growth and legacy planning." }
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="flex items-center gap-4 mb-32">
        <Link href="/" className="text-white/40 hover:text-white transition-colors"><ArrowLeft size={20} /></Link>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Private Wealth</span>
      </nav>

      <main className="max-w-4xl">
        <header className="mb-24">
          <h1 className="text-5xl md:text-6xl mb-8 italic">Financial sovereignty.</h1>
          <p className="text-lg font-light max-w-xl">We design the structures that allow individuals to navigate wealth management with absolute privacy and compliance.</p>
        </header>

        <div className="space-y-16">
          {offerings.map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6">
              <h3 className="text-2xl italic">{item.title}</h3>
              <p className="text-sm max-w-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
