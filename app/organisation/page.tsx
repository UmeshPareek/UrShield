"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldAlert, BarChart3, Globe, FileSearch, ArrowLeft, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function OrganisationSector() {
  const pillars = [
    { 
      title: "Institutional Stress-Testing", 
      icon: <BarChart3 size={40} strokeWidth={1} />, 
      desc: "Rigorous diagnostic audits of organizational financial health and operational compliance." 
    },
    { 
      title: "Compliance Architecture", 
      icon: <ShieldAlert size={40} strokeWidth={1} />, 
      desc: "End-to-end management of GST, PAN, and local regulatory frameworks to ensure zero drift." 
    },
    { 
      title: "Global Risk Mitigation", 
      icon: <Globe size={40} strokeWidth={1} />, 
      desc: "Strategic advisory on international tax planning and multi-jurisdictional asset protection." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      {/* ELITE NAV */}
      <nav className="p-10 border-b border-white/5 fixed w-full z-50 bg-black/50 backdrop-blur-2xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-white/40 hover:text-[#00FFD1] transition-all">
          <ArrowLeft size={20} /> <span className="text-[10px] font-black uppercase tracking-[0.5em]">Central Hub</span>
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Sector // Enterprise</span>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-60 pb-40">
        <header className="mb-40 max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-serif italic leading-[0.85] tracking-tighter mb-12">
              Institutional <br /><span className="text-gradient not-italic">Resilience.</span>
            </h1>
            <p className="text-2xl text-white/30 font-light max-w-3xl leading-relaxed">
              We provide the architectural foundation for organizations that demand absolute 
              regulatory integrity and optimized capital performance.
            </p>
          </motion.div>
        </header>

        {/* PILLARS OF FORTIFICATION */}
        <section className="grid lg:grid-cols-3 gap-1 border-y border-white/5 px-1 mb-40">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-16 border-x border-white/5 group transition-all duration-700"
            >
              <div className="text-[#00FFD1] mb-12 opacity-30 group-hover:opacity-100 group-hover:rotate-12 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-4xl font-serif italic mb-6 leading-tight">{pillar.title}</h3>
              <p className="text-white/30 text-lg leading-relaxed font-light mb-10">{pillar.desc}</p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Module <Zap size={10} />
              </div>
            </motion.div>
          ))}
        </section>

        {/* THE ENTERPRISE SCANNER BLOCK */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="glass rounded-[5rem] p-24 relative overflow-hidden">
            <Lock className="text-[#00FFD1] mb-12 opacity-40" size={50} strokeWidth={1} />
            <h2 className="text-5xl font-serif italic mb-8">Scrutiny <br/>Management.</h2>
            <p className="text-white/30 text-xl font-light leading-relaxed mb-12">
              UrShield acts as the primary barrier during Income Tax and GST scrutinies. 
              Our specialists manage the entire lifecycle of regulatory inquiries, 
              ensuring institutional stability.
            </p>
            <ul className="space-y-6">
              {["Audit Preparedness", "Tax Return Optimization", "Regulatory Sync"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
                  <div className="w-1.5 h-1.5 bg-[#00FFD1]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left px-12">
            <h3 className="text-6xl font-serif italic mb-10 leading-tight">Fortify Your <br/><span className="text-[#00FFD1] not-italic">Organization.</span></h3>
            <p className="text-white/20 text-xl font-light mb-12">
              Enter the dashboard to monitor your entity's compliance status and resilience score in real-time.
            </p>
            <Link href="/organisation/dashboard" className="btn-giant bg-white text-black inline-block hover:bg-[#00FFD1]">
              OPEN DASHBOARD
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5">
        <span className="text-[10px] font-black tracking-[1em] text-white/10 uppercase italic">Institutional Core // UrShield 2026</span>
      </footer>
    </div>
  );
}
