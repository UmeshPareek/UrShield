"use client";
import { motion } from "framer-motion";
import { Rocket, FileText, PieChart, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StartupPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-8"><Link href="/" className="flex items-center gap-2 text-teal-800 font-bold"><ArrowLeft size={18}/> BACK TO HUB</Link></nav>
      
      <header className="px-8 py-20 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span className="text-teal-800 font-bold tracking-widest text-xs uppercase">Venture Architecture</span>
          <h1 className="text-6xl font-serif mt-4 mb-6 italic">From Concept to <span className="text-teal-800">Capital.</span></h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We turn disruptive ideas into institutional-grade investments. Our team has built and scaled brands across Ad-Tech and QSR sectors.
          </p>
        </motion.div>
      </header>

      <section className="grid md:grid-cols-2 gap-12 px-8 max-w-7xl mx-auto pb-32">
        <div className="bg-slate-50 p-12 rounded-[3rem]">
          <Rocket className="text-teal-800 mb-6" size={40} />
          <h3 className="text-2xl font-bold mb-4 text-teal-800">Investor-Ready Decks</h3>
          <p className="text-slate-600 mb-6">High-conversion storytelling and design that stands up to aggressive VC scrutiny.</p>
          <ul className="space-y-3 text-sm font-semibold">
            <li className="flex gap-2"><ShieldCheck size={18} className="text-teal-800"/> Market Analysis</li>
            <li className="flex gap-2"><ShieldCheck size={18} className="text-teal-800"/> Financial Modeling</li>
          </ul>
        </div>
        <div className="bg-teal-800 p-12 rounded-[3rem] text-white">
          <FileText className="text-teal-100 mb-6" size={40} />
          <h3 className="text-2xl font-bold mb-4">Regulatory Launchpad</h3>
          <p className="text-teal-100 mb-6">Seamless execution of GST, PAN, FSSAI, and local licensing to get your ideas running.</p>
          <button className="bg-white text-teal-800 px-8 py-3 rounded-full font-bold uppercase text-xs">Start Filing</button>
        </div>
      </section>
    </div>
  );
}
