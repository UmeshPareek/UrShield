"use client";
import { motion } from 'framer-motion';
import { Landmark, TrendingUp, Fingerprint, ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';

export default function IndividualVault() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      
      <header className="h-[70vh] flex flex-col justify-end px-12 pb-20">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-[10vw] font-serif italic leading-none"
        >
          Private <span className="text-[#00FFD1]">Sovereignty.</span>
        </motion.h1>
      </header>

      <section className="px-12 py-40 grid md:grid-cols-2 gap-20 border-t border-white/5">
        <div>
          <h2 className="text-5xl font-serif italic mb-12">Tax Architecture & <br/>Wealth Design.</h2>
          <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
            We don't just file; we engineer. Our Individual tier is designed for those who require 
            mathematical precision in tax planning and legacy growth.
          </p>
          <div className="space-y-12">
            {[
              { title: "Personal Tax Strategy", desc: "Plan, Save, and Invest. We design portfolios that legally minimize liability while maximizing retention.", icon: <TrendingUp/> },
              { title: "Wealth Shielding", desc: "Protecting personal capital from market volatility and regulatory shifts.", icon: <Landmark/> },
              { title: "Bespoke Advisory", desc: "One-on-one high-fidelity consultation for high-net-worth growth.", icon: <Fingerprint/> }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 border-l border-[#00FFD1]/20 pl-8 hover:border-[#00FFD1] transition-colors">
                <div className="text-[#00FFD1]">{item.icon}</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full aspect-square border border-white/5 rounded-full flex items-center justify-center relative">
            <div className="w-3/4 aspect-square border border-[#00FFD1]/20 rounded-full animate-spin-slow" />
            <div className="absolute text-center">
              <span className="text-[10px] tracking-[1em] text-[#00FFD1] block mb-4 uppercase">Status</span>
              <span className="text-5xl font-serif italic uppercase">Secured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
