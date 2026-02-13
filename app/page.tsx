"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Eye, activity, zap, Lock } from 'lucide-react';
import Link from 'next/link';
import ServiceTable from './components/ServiceTable';

export default function UrShieldHome() {
  const methodology = [
    { step: "01", title: "Diagnostic", desc: "Identification of systemic vulnerabilities via the Pulse Report." },
    { step: "02", title: "Architecture", desc: "Engineering the protective framework for your capital or entity." },
    { step: "03", title: "Fortification", desc: "Implementation of licenses, filings, and financial models." },
    { step: "04", title: "Oversight", desc: "Continuous monitoring of your shield's integrity." }
  ];

  return (
    <div className="min-h-screen px-6 md:px-20 py-10 selection:bg-[#00ffd1] selection:text-black">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center mb-32">
        <div className="flex items-center gap-2">
          <Shield className="text-[#00ffd1]" size={20} />
          <span className="font-bold tracking-tighter text-lg uppercase">UrShield</span>
        </div>
        <div className="flex gap-8 items-center">
          <Link href="/pulse-report" className="nav-link text-[#00ffd1]">Intelligence</Link>
          <Link href="#vault" className="btn-minimal">Enter Vault</Link>
        </div>
      </nav>

      {/* HERO */}
      <main className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl mb-8 italic">Strategic resilience <br />for modern capital.</h1>
        <p className="text-white/40 text-lg max-w-xl font-light mb-40">
          We simplify complex regulatory landscapes to shield your vision and maximize financial sovereignty.
        </p>

        {/* METHODOLOGY SECTION */}
        <section className="mb-60">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-12">The UrShield Protocol</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {methodology.map((m) => (
              <div key={m.step} className="border-t border-white/10 pt-6">
                <span className="text-[#00ffd1] text-[10px] font-bold block mb-4">{m.step}</span>
                <h4 className="text-xl italic mb-4">{m.title}</h4>
                <p className="text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE MATRIX COMPONENT */}
        <ServiceTable />

        {/* GUIDED VAULT INTAKE */}
        <section id="vault" className="max-w-2xl py-40">
          <Eye className="text-white/10 mb-6" size={32} />
          <h2 className="text-4xl italic mb-4 text-white">Secure Intake.</h2>
          <form className="mt-16 space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <input type="text" placeholder="NAME / ENTITY" className="bg-transparent border-b border-white/10 py-4 outline-none text-xl font-light focus:border-[#00ffd1] transition-colors" />
              <input type="email" placeholder="SECURE COMMS" className="bg-transparent border-b border-white/10 py-4 outline-none text-xl font-light focus:border-[#00ffd1] transition-colors" />
            </div>
            <textarea placeholder="THE CHALLENGE" className="bg-transparent border-b border-white/10 py-4 w-full outline-none text-xl font-light focus:border-[#00ffd1] transition-colors resize-none" />
            <button className="btn-minimal">Submit Briefing</button>
          </form>
        </section>
      </main>
    </div>
  );
}
