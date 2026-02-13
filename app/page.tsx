"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Rocket, Building2, User, ChevronRight, BarChart3, Globe, Lock, Cpu, Zap, Eye } from 'lucide-react';
import Link from 'next/link';

export default function UrShieldElite() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* ELITE NAV */}
      <nav className="flex justify-between items-center px-12 py-10 fixed top-0 w-full z-50 mix-blend-difference">
        <div className="flex items-center gap-3">
          <Shield className="text-[#00FFD1] w-10 h-10" />
          <span className="text-3xl font-bold tracking-tighter uppercase italic">URSHIELD</span>
        </div>
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.5em]">
          <Link href="/individual" className="hover:text-[#00FFD1] transition-all">Wealth</Link>
          <Link href="/organisation" className="hover:text-[#00FFD1] transition-all">Enterprise</Link>
          <Link href="/startup" className="hover:text-[#00FFD1] transition-all">Venture</Link>
        </div>
      </nav>

      {/* GIANT HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden">
        <motion.div style={{ opacity }} className="text-center z-10">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }} 
            animate={{ opacity: 1, tracking: "1em" }} 
            className="text-[#00FFD1] font-bold text-xs uppercase mb-10 block"
          >
            ESTABLISHED 2026
          </motion.span>
          <h1 className="text-[12vw] font-serif leading-none italic mb-10 tracking-tighter">
            Vision <span className="text-gradient not-italic">Shielded.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
            The new architectural standard for global compliance, strategic intelligence, and financial sovereignty. 
          </p>
        </motion.div>
        
        {/* Background Graphic Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border-[1px] border-white/5 rounded-full animate-pulse" />
      </section>

      {/* THE THREE SECTORS - GIANT CARDS */}
      <section className="px-8 py-40 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-4">
        {[
          { title: "Individual", icon: <User />, link: "/individual", tag: "Private Wealth" },
          { title: "Organisation", icon: <Building2 />, link: "/organisation", tag: "Enterprise" },
          { title: "Startup", icon: <Rocket />, link: "/startup", tag: "Venture" }
        ].map((item, i) => (
          <Link key={i} href={item.link}>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="glass h-[700px] rounded-[4rem] p-16 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="z-10">
                <span className="text-[#00FFD1] text-[10px] font-bold tracking-[0.4em] uppercase">{item.tag}</span>
                <h3 className="text-6xl font-serif italic mt-4">{item.title}</h3>
              </div>
              <div className="text-white/20 group-hover:text-[#00FFD1] transition-colors duration-700 z-10">
                {React.cloneElement(item.icon as React.ReactElement, { size: 80, strokeWidth: 1 })}
              </div>
              <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif italic text-white/[0.02] select-none">
                {i + 1}
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* SERVICE DETAILS - THE "GIANT" LIST */}
      <section className="py-40 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-40">
          <div>
            <h2 className="text-7xl font-serif italic mb-20">Comprehensive <br/><span className="text-[#00FFD1]">Fortification.</span></h2>
            <div className="space-y-20">
              {[
                { title: "Strategic Stress-Testing", desc: "A 360-degree diagnostic of operational resilience and financial performance.", icon: <BarChart3/> },
                { title: "Regulatory Architecture", icon: <Cpu/>, desc: "End-to-end management of GST, PAN, FSSAI, and complex local licensing." },
                { title: "Global Intelligence", icon: <Globe/>, desc: "Market-leading advisory on international tax planning and wealth sovereignty." }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-10 group">
                  <div className="text-[#00FFD1] group-hover:scale-125 transition-transform">{s.icon}</div>
                  <div>
                    <h4 className="text-3xl font-bold mb-4">{s.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[5rem] p-20 flex flex-col justify-center items-center text-center">
            <Zap className="text-[#00FFD1] mb-10" size={60} />
            <h3 className="text-5xl font-serif italic mb-8">The Resilience Audit</h3>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed"> Clarity is mandatory; risk is optional. Order your comprehensive diagnostic report today.</p>
            <button className="w-full py-6 rounded-full bg-white text-black font-black uppercase tracking-[0.3em] hover:bg-[#00FFD1] transition-all">Initiate Report</button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - THE VAULT */}
      <section id="contact" className="py-60 px-8 bg-white text-black rounded-t-[10rem]">
        <div className="max-w-4xl mx-auto text-center">
          <Eye className="mx-auto mb-10 opacity-20" size={40} />
          <h2 className="text-8xl font-serif italic mb-10 tracking-tighter">Secure Your <span className="text-[#008080]">Legacy.</span></h2>
          <form className="mt-20 space-y-12">
            <div className="grid md:grid-cols-2 gap-10">
              <input type="text" placeholder="IDENTITY / NAME" className="w-full border-b-2 border-black/10 py-6 focus:outline-none focus:border-[#008080] bg-transparent text-xl font-serif italic" />
              <input type="email" placeholder="SECURE EMAIL" className="w-full border-b-2 border-black/10 py-6 focus:outline-none focus:border-[#008080] bg-transparent text-xl font-serif italic" />
            </div>
            <textarea rows={4} placeholder="THE CHALLENGE" className="w-full border-b-2 border-black/10 py-6 focus:outline-none focus:border-[#008080] bg-transparent text-xl font-serif italic resize-none"></textarea>
            <button className="bg-black text-white px-20 py-8 rounded-full font-black text-xl tracking-widest uppercase hover:scale-105 transition-all shadow-2xl">
              SUBMIT BRIEF
            </button>
          </form>
          <div className="mt-20 flex justify-center gap-10 font-bold text-xs tracking-widest opacity-30">
            <span>+91 [MOBILE]</span>
            <span>INTEL@URSHIELD.COM</span>
          </div>
        </div>
      </section>
    </div>
  );
}
