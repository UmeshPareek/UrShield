"use client";
import { motion } from "framer-motion";
import { Building2, BarChart3, ShieldAlert, FileSearch, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function OrganisationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="p-8"><Link href="/" className="flex items-center gap-2 text-teal-800 font-bold"><ArrowLeft size={18}/> BACK TO HUB</Link></nav>
      
      <header className="px-8 py-20 max-w-5xl mx-auto">
        <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl font-serif mb-6 italic">
          Institutional <span className="text-teal-800 text-6xl block not-italic">Resilience.</span>
        </motion.h1>
      </header>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-6 pb-24">
        {[
          { icon: <BarChart3/>, title: "Stress-Testing", desc: "Audit your financial performance and compliance health." },
          { icon: <ShieldAlert/>, title: "Risk Mitigation", desc: "Fortifying your organization against industry volatility." },
          { icon: <FileSearch/>, title: "Scrutiny Management", desc: "Expert handling of Income Tax and GST scrutinies." }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-teal-800 mb-4">{item.icon}</div>
            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
