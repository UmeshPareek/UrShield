"use client";
import React from 'react';
import { ArrowLeft, Activity } from 'lucide-react';
import Link from 'next/link';

export default function PulseReport() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="flex items-center gap-4 mb-32">
        <Link href="/" className="text-white/40 hover:text-white transition-colors"><ArrowLeft size={20} /></Link>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Diagnostic Intelligence</span>
      </nav>

      <main className="max-w-4xl text-center md:text-left">
        <Activity className="text-[#00ffd1] mb-8 mx-auto md:mx-0" size={32} />
        <h1 className="text-5xl md:text-6xl mb-8 italic">The Resilience Audit.</h1>
        <p className="text-lg font-light max-w-xl mb-12">A 360° clinical diagnostic of your entity's current compliance standing and financial health.</p>
        
        <div className="p-12 border border-white/10 rounded-3xl bg-white/5 inline-block text-left w-full max-w-2xl">
          <h4 className="text-xl mb-6">Initiate Analysis</h4>
          <p className="text-sm text-white/40 mb-10 leading-relaxed">By submitting your entity for an audit, you receive a comprehensive report on regulatory vulnerabilities and tax optimization gaps.</p>
          <Link href="/#contact" className="btn-minimal block text-center">Request Access</Link>
        </div>
      </main>
    </div>
  );
}
