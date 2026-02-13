"use client";
import { motion } from 'framer-motion';
import { Rocket, FileText, PieChart, Layers, ArrowUpRight } from 'lucide-react';
import Nav from '../components/Nav';

export default function StartupLaunchpad() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      
      <header className="h-[70vh] flex flex-col justify-end px-12 pb-20">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="text-[10vw] font-serif italic leading-none"
        >
          Venture <span className="text-[#00FFD1]">Logic.</span>
        </motion.h1>
      </header>

      <section className="px-12 py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32">
          <div className="space-y-32">
            <div className="group">
              <span className="text-[#00FFD1] font-bold text-xs tracking-widest mb-4 block">01 / ARCHITECTURE</span>
              <h3 className="text-5xl font-serif italic mb-6">Pitch Decks & <br/>Financial Modeling.</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Institutional-grade valuations and storytelling. We build the financial models that survive the 
                most aggressive Venture Capital scrutiny.
              </p>
              <FileText className="text-white/10 group-hover:text-[#00FFD1] transition-colors" size={100} strokeWidth={1}/>
            </div>

            <div className="group">
              <span className="text-[#00FFD1] font-bold text-xs tracking-widest mb-4 block">02 / INFRASTRUCTURE</span>
              <h3 className="text-5xl font-serif italic mb-6">Regulatory <br/>Launchpad.</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Bureaucracy is a friction point. We eliminate it. End-to-end execution of GST, PAN, 
                Local Licenses, and FSSAI filings.
              </p>
              <Layers className="text-white/10 group-hover:text-[#00FFD1] transition-colors" size={100} strokeWidth={1}/>
            </div>
          </div>

          <div className="sticky top-40 h-[600px] glass rounded-[4rem] p-16 flex flex-col justify-between overflow-hidden">
            <div>
              <Rocket className="text-[#00FFD1] mb-10" size={60} />
              <h4 className="text-4xl font-serif italic">Initiate Your <br/>Market Disruption.</h4>
            </div>
            <p className="text-slate-400">
              The Startup tier is designed for those who value speed as much as compliance. 
              We handle the foundation; you handle the innovation.
            </p>
            <button className="w-full py-8 bg-[#00FFD1] text-black font-black uppercase tracking-widest flex items-center justify-center gap-4 group">
              ORDER LAUNCHPAD <ArrowUpRight className="group-hover:rotate-45 transition-transform"/>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
