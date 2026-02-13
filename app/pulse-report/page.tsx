"use client";
import React, { useState } from 'react';
import { Activity, ArrowRight, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PulseReport() {
  const [step, setStep] = useState(0);
  const questions = [
    "Has your entity performed a compliance health check in the last 6 months?",
    "Are your personal and business tax structures legally isolated?",
    "Do you have a pre-defined protocol for GST or Income Tax scrutinies?",
    "Is your financial modeling ready for institutional due diligence?",
    "Are all operational licenses currently in sync with growth?"
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="mb-32"><Link href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest"><ArrowLeft size={14}/> Back</Link></nav>
      <main className="max-w-3xl">
        <Activity className="text-[#00ffd1] mb-8" size={32} />
        {step < questions.length ? (
          <div className="p-12 border border-white/10 rounded-3xl bg-white/5">
            <span className="text-[10px] font-bold text-[#00ffd1] mb-4 block uppercase">Diagnostic Q0{step + 1}</span>
            <h3 className="text-3xl italic mb-12">{questions[step]}</h3>
            <div className="flex gap-4">
              <button onClick={() => setStep(step + 1)} className="btn-minimal">Yes</button>
              <button onClick={() => setStep(step + 1)} className="btn-minimal">No / Uncertain</button>
            </div>
          </div>
        ) : (
          <div className="p-12 border border-[#00ffd1]/20 rounded-3xl bg-[#00ffd1]/5">
            <ShieldAlert className="text-[#00ffd1] mb-6" size={32} />
            <h3 className="text-3xl italic mb-6">Action Required.</h3>
            <p className="text-white/60 mb-10 leading-relaxed italic">Vulnerabilities detected. Strategic fortification recommended via the Organisation sector.</p>
            <Link href="/organisation" className="btn-minimal inline-flex items-center gap-2">View Strategy <ArrowRight size={14}/></Link>
          </div>
        )}
      </main>
    </div>
  );
}
