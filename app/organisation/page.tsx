"use client";
import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function OrganisationSector() {
  const sections = [
    {
      category: "Operations",
      items: ["Regulatory Sync (GST/PAN Alignment)", "Institutional Stress-Testing", "Operational Resilience Strategy"]
    },
    {
      category: "Defense",
      items: ["Scrutiny Response Unit", "Internal Audit Preparation", "Regulatory Drift Analysis"]
    }
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="mb-32"><Link href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest"><ArrowLeft size={14}/> Back</Link></nav>
      <main className="max-w-4xl">
        <h1 className="text-6xl mb-12 italic">Institutional resilience.</h1>
        <div className="grid md:grid-cols-2 gap-20">
          {sections.map((sec) => (
            <div key={sec.category} className="border-t border-white/10 pt-8">
              <h3 className="text-[#00ffd1] text-[10px] font-bold uppercase tracking-widest mb-8">{sec.category}</h3>
              <ul className="space-y-6">
                {sec.items.map((item) => (
                  <li key={item} className="flex gap-3 text-white/60 font-light text-sm italic"><CheckCircle2 size={16} className="text-white/20"/> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
