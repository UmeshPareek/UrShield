"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, ShieldCheck, Activity, Lock, 
  ChevronRight, Download, AlertTriangle, Zap 
} from 'lucide-react';
import Link from 'next/link';

export default function PulseReport() {
  const metrics = [
    { label: "Regulatory Compliance", score: 68, status: "Vulnerable", color: "text-red-500" },
    { label: "Financial Fluidity", score: 84, status: "Stable", color: "text-[#00FFD1]" },
    { label: "Tax Optimization", score: 42, status: "Critical", color: "text-red-600" },
    { label: "Operational Resilience", score: 91, status: "Shielded", color: "text-[#00FFD1]" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      {/* ELITE HEADER */}
      <nav className="p-12 border-b border-white/5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Lock className="text-[#00FFD1] group-hover:rotate-12 transition-transform" />
          <span className="font-black tracking-[0.4em] uppercase text-xs">UrShield Intelligence</span>
        </Link>
        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#00FFD1]">
          <Download size={14} /> Export Briefing
        </button>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 py-32">
        <header className="mb-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#00FFD1] font-bold text-xs tracking-[0.5em] uppercase mb-6 block">Diagnostic Result // 0x44F2</span>
            <h1 className="text-[8vw] font-serif italic leading-none mb-10">
              The <span className="text-gradient not-italic">Resilience</span> Audit.
            </h1>
            <p className="text-2xl text-white/30 font-light max-w-2xl leading-relaxed">
              Real-time analysis of your entity's compliance infrastructure and capital vulnerability. 
            </p>
          </motion.div>
        </header>

        {/* METRIC GRID */}
        <section className="grid lg:grid-cols-4 gap-6 mb-40">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[3rem] relative overflow-hidden group"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-10 block">{m.label}</span>
              <div className="flex items-end gap-2 mb-4">
                <span className={`text-7xl font-serif italic ${m.color}`}>{m.score}</span>
                <span className="text-xs font-bold text-white/20 mb-4 uppercase italic">/ 100</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={12} className={m.color} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{m.status}</span>
              </div>
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00FFD1]/5 rounded-full blur-3xl group-hover:bg-[#00FFD1]/10 transition-colors" />
            </motion.div>
          ))}
        </section>

        {/* DETAILED ANALYSIS */}
        <section className="grid lg:grid-cols-2 gap-40 border-t border-white/5 pt-40">
          <div>
            <h2 className="text-6xl font-serif italic mb-12 underline decoration-[#00FFD1] decoration-1 underline-offset-8">Critical Gaps.</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <AlertTriangle className="text-red-600 shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl font-bold mb-4">Regulatory Desync</h4>
                  <p className="text-white/40 leading-relaxed text-lg">Your current GST and FSSAI filing structure shows a 32% deviation from local compliance standards. This exposes the entity to immediate scrutiny.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <ShieldAlert className="text-red-400 shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl font-bold mb-4">Capital Vulnerability</h4>
                  <p className="text-white/40 leading-relaxed text-lg">Personal and organizational wealth pools are currently unshielded. Tax optimization is required to prevent capital erosion of 18% in the next fiscal quarter.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[5rem] p-20 flex flex-col justify-between items-start text-left relative overflow-hidden">
            <Zap className="text-[#00FFD1] mb-10 animate-pulse" size={60} />
            <h3 className="text-5xl font-serif italic mb-8">Initiate <br/>Fortification.</h3>
            <p className="text-white/40 mb-12 text-lg leading-relaxed">
              We have already engineered the roadmap to resolve these vulnerabilities. 
              The Individual and Organisation sectors are prepped for immediate deployment.
            </p>
            <button className="btn-giant bg-[#00FFD1] text-black w-full flex justify-center items-center gap-4">
              DEPLOY SHIELD <ChevronRight />
            </button>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFD1]/5 blur-[80px]" />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <span className="text-[10px] font-black tracking-[1em] text-white/10 uppercase italic">Absolute Intelligence // UrShield 2026</span>
      </footer>
    </div>
  );
}
