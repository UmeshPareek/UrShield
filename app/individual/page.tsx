"use client";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Landmark } from 'lucide-react';

export default function IndividualPage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="py-20 px-8 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif mb-6 italic"
        >
          Wealth <span className="text-teal-800">Sovereignty.</span>
        </motion.h1>
        <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">
          Advanced tax planning and legacy protection for HNIs. We don't just file your returns; we engineer your financial future.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-1 px-8">
        <div className="p-12 border border-slate-50 hover:bg-teal-50/30 transition-all">
          <Landmark className="text-teal-800 mb-4" size={32} />
          <h3 className="font-bold text-xl mb-2">Tax Optimization</h3>
          <p className="text-sm text-slate-400">Legal strategies to minimize liability and maximize retention.</p>
        </div>
        {/* Add more cards here */}
      </section>
    </div>
  );
}
