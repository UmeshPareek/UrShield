"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Rocket, Building2, User, ChevronRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function UrShieldHub() {
  const sectors = [
    { 
      id: 'individual', 
      title: 'Individual', 
      icon: <User />, 
      path: '/individual',
      desc: 'Private Wealth & Tax Sovereignty.' 
    },
    { 
      id: 'organisation', 
      title: 'Organisation', 
      icon: <Building2 />, 
      path: '/organisation',
      desc: 'Institutional Resilience & Compliance.' 
    },
    { 
      id: 'startup', 
      title: 'Startup', 
      icon: <Rocket />, 
      path: '/startup',
      desc: 'Venture Architecture & Capital Strategy.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ELITE NAV */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-gray-50 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <Shield className="text-[#008080] w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter text-[#008080]">URSHIELD</span>
        </div>
        <Link href="#contact" className="bg-[#008080] text-white px-8 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-[#006666] transition-all">
          SECURE ACCESS
        </Link>
      </nav>

      {/* HERO SECTION */}
      <header className="px-8 py-32 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-tight italic text-slate-900">
            Vision <span className="text-[#008080]">Shielded.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            The elite consulting standard for leaders who demand absolute compliance and strategic growth.
          </p>
        </motion.div>
      </header>

      {/* SECTOR CARDS */}
      <section className="px-8 pb-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <Link key={sector.id} href={sector.path}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-12 border border-slate-100 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="text-[#008080] mb-6 group-hover:scale-110 transition-transform">{sector.icon}</div>
              <h3 className="text-3xl font-serif mb-4 uppercase tracking-tighter">{sector.title}</h3>
              <p className="text-slate-400 mb-8 text-sm">{sector.desc}</p>
              <div className="flex items-center text-[#008080] font-bold text-xs tracking-[0.2em] uppercase">
                Explore Sector <ChevronRight size={14} className="ml-1" />
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* CASE STUDY TEASER */}
      <section className="bg-slate-900 py-24 px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-serif italic mb-4">The UrShield Portfolio</h2>
            <p className="text-slate-400 max-w-md">Our strategies have powered ventures like Wendz, Gully Bowl, and Bungry's. Real growth, verified.</p>
          </div>
          <Link href="/startup" className="border border-teal-800 text-teal-500 px-10 py-4 rounded-full font-bold hover:bg-teal-800 hover:text-white transition-all">
            VIEW CASE STUDIES
          </Link>
        </div>
      </section>
    </div>
  );
}
