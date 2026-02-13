"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function UrShieldMinimal() {
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
    <div className="min-h-screen px-6 md:px-20 py-10">
      <nav className="flex justify-between items-center mb-32">
        <div className="flex items-center gap-2">
          <Shield className="text-[#00ffd1]" size={24} />
          <span className="font-bold tracking-tighter text-xl uppercase">UrShield</span>
        </div>
        <Link href="#contact" className="btn-minimal">Contact</Link>
      </nav>

      <main className="max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-40"
        >
          <h1 className="text-5xl md:text-7xl mb-8 italic">
            Strategic resilience <br />for modern capital.
          </h1>
          <p className="text-white/40 text-lg max-w-xl font-light">
            We simplify complex regulatory landscapes to shield your vision and maximize financial sovereignty.
          </p>
        </motion.div>

        <section className="grid gap-0">
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
      </main>

      <footer className="mt-40 pt-10 border-t border-white/5 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
        <span>© 2026 UrShield Group</span>
        <div className="flex gap-8">
          <span>Intelligence</span>
          <span>Terms</span>
        </div>
      </footer>
    </div>
  );
}
