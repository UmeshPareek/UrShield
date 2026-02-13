"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, Key, FileText, Calendar, 
  UserCheck, ShieldCheck, ArrowRight, Download 
} from 'lucide-react';
import Link from 'next/link';

export default function ClientOnboarding() {
  const roadmap = [
    { step: "01", title: "Intelligence Briefing", status: "PENDING", desc: "Initial strategy alignment and vulnerability assessment." },
    { step: "02", title: "Document Vaulting", status: "LOCKED", desc: "Secure upload of GST, PAN, and internal financial records." },
    { step: "03", title: "Fortification Plan", status: "LOCKED", desc: "Deployment of custom tax and compliance architecture." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      {/* SECURE HEADER */}
      <nav className="p-10 border-b border-white/5 flex justify-between items-center fixed w-full z-50 bg-black/50 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <Lock className="text-[#00FFD1]" size={20} />
          <span className="font-black tracking-[0.5em] uppercase text-[10px]">Secure Client Portal</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Client ID: US-0992</span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <UserCheck size={14} className="text-[#00FFD1]" />
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-52 pb-40">
        <header className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-[10vw] font-serif italic leading-none mb-10">
              Welcome to <br /><span className="text-[#00FFD1] not-italic">UrShield.</span>
            </h1>
            <p className="text-2xl text-white/30 font-light max-w-2xl leading-relaxed">
              Your vision is now shielded. This portal serves as your command center for all 
              strategic and regulatory operations.
            </p>
          </motion.div>
        </header>

        <section className="grid lg:grid-cols-3 gap-6 mb-40">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">Activation Roadmap</h3>
            {roadmap.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="glass p-12 rounded-[3rem] flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-10">
                  <span className="text-4xl font-serif italic text-white/10 group-hover:text-[#00FFD1] transition-colors">{item.step}</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-white/30 text-sm max-w-md">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black tracking-widest text-white/20">{item.status}</span>
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#00FFD1] transition-colors">
                    <Key size={14} className="text-white/20 group-hover:text-[#00FFD1]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="glass rounded-[4rem] p-16 flex flex-col justify-between border-t-2 border-[#00FFD1]">
            <div>
              <Calendar className="text-[#00FFD1] mb-8" size={32} />
              <h4 className="text-3xl font-serif italic mb-6">Strategy Session</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-10">
                Your primary briefing with our Strategic Architects is being prepared. 
                Expect contact via your secure comms within 24 hours.
              </p>
            </div>
            <button className="w-full py-6 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-[#00FFD1] transition-all text-[10px]">
              Confirm Availability
            </button>
          </aside>
        </section>

        {/* SECURE DOWNLOADS */}
        <section className="pt-20 border-t border-white/5">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Initial Assets</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-center justify-between p-10 border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <div className="flex items-center gap-6">
                <FileText className="text-[#00FFD1]" />
                <span className="font-serif italic text-xl">Onboarding_Manifesto.pdf</span>
              </div>
              <Download size={20} className="text-white/10 group-hover:text-white" />
            </div>
            <div className="flex items-center justify-between p-10 border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <div className="flex items-center gap-6">
                <ShieldCheck className="text-[#00FFD1]" />
                <span className="font-serif italic text-xl">Privacy_Protocol.pdf</span>
              </div>
              <Download size={20} className="text-white/10 group-hover:text-white" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
