"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

export default function UrShieldHome() {
  const sectors = [
    { 
      title: "Individual", 
      label: "Wealth & Tax",
      desc: "Private tax design and capital protection for individuals.",
      path: "/individual" 
    },
    { 
      title: "Organisation", 
      label: "Compliance & Risk",
      desc: "Institutional stress-testing and scrutiny management.",
      path: "/organisation" 
    },
    { 
      title: "Startup", 
      label: "Venture Architecture",
      desc: "Regulatory infrastructure and investor-ready modeling.",
      path: "/startup" 
    }
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
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-40">
          <h1 className="text-5xl md:text-7xl mb-8 italic">Strategic resilience <br />for modern capital.</h1>
          <p className="text-white/40 text-lg max-w-xl font-light">
            We simplify complex regulatory landscapes to shield your vision and maximize financial sovereignty.
          </p>
        </motion.div>

        {/* GUIDED SELECTION */}
        <section className="grid gap-0 mb-60">
          {sectors.map((sector, i) => (
            <Link key={i} href={sector.path} className="group">
              <div className="sector-card flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[#00ffd1] text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                    {sector.label}
                  </span>
                  <h2 className="text-4xl group-hover:italic transition-all">{sector.title}</h2>
                </div>
                <div className="flex items-center gap-12">
                  <p className="text-white/30 text-sm max-w-[240px] hidden md:block">{sector.desc}</p>
                  <ArrowRight className="text-white/20 group-hover:text-[#00ffd1] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* THE VAULT (CONTACT) */}
        <section id="vault" className="max-w-2xl py-40 border-t border-white/5">
          <div className="mb-16">
            <Eye className="text-white/10 mb-6" size={32} />
            <h2 className="text-4xl italic mb-4">Secure Intake.</h2>
            <p className="text-white/40 font-light">State your objective. Our architects will review the brief and contact you via secure channels.</p>
          </div>

          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-b border-white/10 py-4 focus-within:border-[#00ffd1] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-2">Identity</label>
                <input type="text" placeholder="Name or Entity" className="bg-transparent w-full outline-none text-xl font-light placeholder:text-white/5" />
              </div>
              <div className="border-b border-white/10 py-4 focus-within:border-[#00ffd1] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-2">Comms</label>
                <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none text-xl font-light placeholder:text-white/5" />
              </div>
            </div>
            <div className="border-b border-white/10 py-4 focus-within:border-[#00ffd1] transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-2">Brief</label>
              <textarea rows={3} placeholder="Describe the vulnerability or objective" className="bg-transparent w-full outline-none text-xl font-light placeholder:text-white/5 resize-none" />
            </div>
            <button type="submit" className="btn-minimal w-full md:w-auto">Submit Briefing</button>
          </form>
        </section>
      </main>

      <footer className="mt-40 pt-10 border-t border-white/5 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
        <span>© 2026 UrShield Group</span>
        <div className="flex gap-8">
          <span>Intelligence Briefings</span>
          <span>Legal</span>
        </div>
      </footer>
    </div>
  );
}
