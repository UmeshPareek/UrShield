"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, Rocket, Building2, User, ChevronRight, 
  BarChart3, Globe, Lock, Cpu, Zap, Eye, ArrowDown 
} from 'lucide-react';
import Link from 'next/link';

export default function UrShieldEliteHub() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Parallax logic for high-end depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const sectors = [
    { 
      id: '01', 
      title: 'Individual', 
      tag: 'Private Wealth', 
      icon: <User size={48} strokeWidth={0.5} />, 
      path: '/individual',
      desc: 'Bespoke capital fortification and tax ڈیزائن for the global elite.' 
    },
    { 
      id: '02', 
      title: 'Organisation', 
      tag: 'Enterprise', 
      icon: <Building2 size={48} strokeWidth={0.5} />, 
      path: '/organisation',
      desc: 'Institutional resilience through deep-tier compliance stress testing.' 
    },
    { 
      id: '03', 
      title: 'Startup', 
      tag: 'Venture', 
      icon: <Rocket size={48} strokeWidth={0.5} />, 
      path: '/startup',
      desc: 'Architecting venture logic from seed to institutional-grade exit.' 
    }
  ];

  return (
    <div className="relative selection:bg-[#00FFD1] selection:text-black">
      {/* NOISE OVERLAY */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-[9999] mix-blend-overlay" />

      {/* ELITE NAVIGATION */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-10 fixed top-0 w-full z-50 mix-blend-difference">
        <div className="flex items-center gap-3">
          <Shield className="text-[#00FFD1] w-8 h-8 md:w-10 md:h-10" />
          <span className="text-2xl md:text-3xl font-black tracking-[-0.05em] uppercase italic text-white">URSHIELD</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.6em] text-white/40">
          <Link href="/individual" className="hover:text-[#00FFD1] transition-all">Wealth</Link>
          <Link href="/organisation" className="hover:text-[#00FFD1] transition-all">Enterprise</Link>
          <Link href="/startup" className="hover:text-[#00FFD1] transition-all">Venture</Link>
          <Link href="/pulse-report" className="text-[#00FFD1] border-b border-[#00FFD1]/30 pb-1">Intelligence</Link>
        </div>
      </nav>

      {/* GIANT HERO SECTION */}
      <section ref={targetRef} className="relative h-[110vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="text-center z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#00FFD1] font-black text-[10px] uppercase tracking-[1.2em] mb-12 block opacity-60">
              Architects of Compliance
            </span>
            <h1 className="text-[clamp(4rem,14vw,18rem)] font-serif leading-[0.8] italic mb-12 tracking-[-0.06em] text-white">
              Vision <br />
              <span className="text-gradient not-italic tracking-[-0.08em]">Shielded.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/30 font-light max-w-2xl mx-auto leading-relaxed mt-10 tracking-tight">
              The definitive global standard for financial intelligence, 
              strategic sovereignty, and institutional fortification.
            </p>
          </motion.div>
        </motion.div>

        {/* Dynamic Background Orbital Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[85vw] h-[85vw] border border-white/5 rounded-full animate-spin-slow" />
          <div className="absolute w-[65vw] h-[65vw] border border-[#00FFD1]/5 rounded-full animate-spin-slow [animation-direction:reverse]" />
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/10"
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </section>

      {/* SECTOR CARDS - GIANT SCALE */}
      <section className="px-4 md:px-8 py-40 max-w-[1700px] mx-auto grid lg:grid-cols-3 gap-8 bg-black">
        {sectors.map((sector) => (
          <Link key={sector.id} href={sector.path}>
            <motion.div 
              whileHover={{ y: -15, scale: 0.99 }}
              className="glass min-h-[700px] rounded-[4.5rem] p-12 md:p-16 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="z-10">
                <span className="text-[#00FFD1] text-[10px] font-black tracking-[0.6em] uppercase opacity-50">{sector.tag}</span>
                <h3 className="text-6xl md:text-7xl font-serif italic mt-8 group-hover:text-[#00FFD1] transition-colors leading-tight">{sector.title}</h3>
                <p className="text-white/30 mt-12 text-lg leading-relaxed max-w-[300px] font-light italic">
                  {sector.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-white/10 group-hover:text-white transition-all z-10">
                <span className="text-4xl font-serif italic opacity-30">{sector.id}</span>
                <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-[#00FFD1]/30 transition-all" />
                <div className="p-4 rounded-full border border-white/5 group-hover:border-[#00FFD1] transition-all">
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Huge Background Icon Element */}
              <div className="absolute -bottom-16 -right-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-[3.5] pointer-events-none text-white grayscale">
                {sector.icon}
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* SERVICE LIST - THE ELITE GRID */}
      <section className="py-60 px-8 border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-40">
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(4rem,10vw,12rem)] font-serif italic mb-24 leading-[0.85] tracking-tighter">
              Absolute <br /><span className="text-[#00FFD1] not-italic tracking-[-0.05em]">Clarity.</span>
            </h2>
            <div className="space-y-32">
              {[
                { title: "Resilience Audits", icon: <BarChart3 />, desc: "High-fidelity diagnostics of institutional capital and operational health." },
                { title: "Regulatory Tech", icon: <Cpu />, desc: "Proprietary architecture for global licensing and tax-sync frameworks." },
                { title: "Sovereign Intel", icon: <Globe />, desc: "Strategic advisory on cross-border tax design and asset sovereignty." }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-12 group">
                  <div className="text-[#00FFD1] opacity-30 group-hover:opacity-100 transition-opacity pt-2">{service.icon}</div>
                  <div>
                    <h4 className="text-4xl font-serif italic mb-4">{service.title}</h4>
                    <p className="text-white/30 text-xl font-light leading-relaxed max-w-md">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-40 glass rounded-[5.5rem] p-16 md:p-24 text-center overflow-hidden">
              <Zap className="text-[#00FFD1] mx-auto mb-10 opacity-50 animate-pulse" size={56} strokeWidth={1} />
              <h3 className="text-5xl md:text-6xl font-serif italic mb-10 leading-tight">Initiate the <br/>Pulse Report.</h3>
              <p className="text-white/30 text-xl font-light mb-16 leading-relaxed max-w-xs mx-auto">
                Risk is an option. Clarity is a mandate. Order your 360° vulnerability diagnostic.
              </p>
              <Link href="/pulse-report" className="block w-full btn-giant bg-white text-black hover:bg-[#00FFD1] text-center shadow-2xl">
                RUN STRESS TEST
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE VAULT - CONTACT */}
      <section id="contact" className="py-60 px-6 md:px-8 bg-white text-black rounded-t-[10rem] md:rounded-t-[20rem] relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Eye className="mx-auto mb-16 opacity-10" size={60} strokeWidth={1} />
            <h2 className="text-[clamp(4rem,12vw,14rem)] font-serif italic mb-12 tracking-tighter leading-[0.85]">
              The <span className="text-[#008080] not-italic tracking-[-0.05em]">Vault.</span>
            </h2>
            <p className="text-black/30 text-xl md:text-2xl font-light mb-28 tracking-tight italic">Exclusivity is our core policy. State your objective.</p>
            
            <form className="space-y-24 text-left max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 block mb-6 transition-colors group-focus-within:text-[#008080]">IDENTITY</label>
                  <input type="text" placeholder="NAME / ENTITY" className="w-full bg-transparent border-b-2 border-black/5 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-all placeholder:text-black/5" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 block mb-6 transition-colors group-focus-within:text-[#008080]">SECURE COMMS</label>
                  <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b-2 border-black/5 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-all placeholder:text-black/5" />
                </div>
              </div>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 block mb-6 transition-colors group-focus-within:text-[#008080]">CHALLENGE</label>
                <textarea rows={4} placeholder="DESCRIBE THE VULNERABILITY" className="w-full bg-transparent border-b-2 border-black/5 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-all resize-none placeholder:text-black/5" />
              </div>
              
              <div className="flex justify-center pt-12">
                <button type="submit" className="px-24 py-10 rounded-full bg-black text-white font-black text-2xl tracking-tight uppercase hover:bg-[#008080] transition-all shadow-3xl hover:shadow-[#008080]/20">
                  SUBMIT BRIEFING
                </button>
              </div>
            </form>

            <div className="mt-48 pt-24 border-t border-black/5 flex flex-wrap justify-center gap-16 md:gap-24 text-[10px] font-black tracking-[0.6em] text-black/20">
              <span>+91 [INSERT MOBILE]</span>
              <span>SECURE@URSHIELD.COM</span>
              <span>GLOBAL HEADQUARTERS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL FOOTER */}
      <footer className="bg-white text-black/20 py-16 px-8 text-center border-t border-black/5">
        <p className="text-[10px] font-black tracking-[1em] uppercase">© 2026 URSHIELD GROUP // ABSOLUTE COMPLIANCE</p>
      </footer>
    </div>
  );
}
