"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Globe, Cpu, ArrowLeft, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function UrShieldTeam() {
  const architects = [
    { 
      role: "Strategic Architect", 
      specialty: "Venture Logic & Capital Strategy",
      icon: <Cpu className="text-[#00FFD1]" />
    },
    { 
      role: "Compliance Lead", 
      specialty: "Institutional Risk & Scrutiny Management",
      icon: <Shield className="text-[#00FFD1]" />
    },
    { 
      role: "Global Advisor", 
      specialty: "Sovereign Tax Design & International Law",
      icon: <Globe className="text-[#00FFD1]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      <nav className="p-10 border-b border-white/5 fixed w-full z-50 bg-black/50 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-4 text-white/40 hover:text-[#00FFD1] transition-colors">
          <ArrowLeft size={20} /> <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Hub</span>
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-52 pb-40">
        <header className="mb-40">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-[#00FFD1] font-bold text-xs tracking-[0.5em] uppercase mb-8 block">The Collective</span>
            <h1 className="text-[10vw] font-serif italic leading-none mb-10">
              Strategic <span className="text-gradient not-italic">Architects.</span>
            </h1>
            <p className="text-2xl text-white/30 font-light max-w-2xl leading-relaxed">
              UrShield is powered by a decentralized network of specialists in finance, law, and regulatory technology. We don't have employees; we have masters.
            </p>
          </motion.div>
        </header>

        {/* TEAM GRID */}
        <section className="grid lg:grid-cols-3 gap-1 px-1 border-y border-white/5 mb-40">
          {architects.map((member, i) => (
            <motion.div 
              key={member.role}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-20 border-x border-white/5 group transition-colors"
            >
              <div className="mb-20 opacity-20 group-hover:opacity-100 transition-opacity">
                {React.cloneElement(member.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
              </div>
              <h3 className="text-4xl font-serif italic mb-4">{member.role}</h3>
              <p className="text-[#00FFD1] text-[10px] font-black uppercase tracking-widest mb-12">
                Specialization: {member.specialty}
              </p>
              <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Mail size={18} className="text-white/20 hover:text-white cursor-pointer" />
                <Linkedin size={18} className="text-white/20 hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* RECRUITMENT CALL */}
        <section className="glass rounded-[5rem] p-32 text-center relative overflow-hidden">
          <Eye size={60} className="mx-auto mb-10 text-[#00FFD1] animate-pulse" />
          <h2 className="text-6xl font-serif italic mb-10">Join the <span className="text-[#00FFD1]">Vanguard.</span></h2>
          <p className="text-white/30 text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed">
            We are always seeking the top 0.1% of financial and legal minds. If your vision is as sharp as ours, state your case.
          </p>
          <Link href="/#contact" className="btn-giant bg-white text-black inline-block hover:bg-[#00FFD1]">
            Submit Credentials
          </Link>
          <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5">
        <span className="text-[10px] font-black tracking-[1em] text-white/10 uppercase italic">Architectural Integrity // UrShield 2026</span>
      </footer>
    </div>
  );
}
