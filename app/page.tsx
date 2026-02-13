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

  // Giant text parallax effects for high-end feel
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const sectors = [
    { 
      id: '01', 
      title: 'Individual', 
      tag: 'Private Wealth', 
      icon: <User size={48} strokeWidth={1} />, 
      path: '/individual',
      desc: 'Sophisticated wealth shielding and private tax design for elite capital.' 
    },
    { 
      id: '02', 
      title: 'Organisation', 
      tag: 'Enterprise', 
      icon: <Building2 size={48} strokeWidth={1} />, 
      path: '/organisation',
      desc: 'Institutional-grade compliance and financial stress-testing.' 
    },
    { 
      id: '03', 
      title: 'Startup', 
      tag: 'Venture', 
      icon: <Rocket size={48} strokeWidth={1} />, 
      path: '/startup',
      desc: 'Venture architecture from inception to strategic capital exit.' 
    }
  ];

  return (
    <div className="relative">
      {/* NOISE OVERLAY - Applied via globals.css utility */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-[9999]" />

      {/* ELITE NAVIGATION - Mix blend difference for that premium look */}
      <nav className="flex justify-between items-center px-12 py-10 fixed top-0 w-full z-50 mix-blend-difference">
        <div className="flex items-center gap-3">
          <Shield className="text-[#00FFD1] w-10 h-10" />
          <span className="text-3xl font-bold tracking-tighter uppercase italic tracking-[0.2em] text-white">URSHIELD</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-white/50">
          <Link href="/individual" className="hover:text-[#00FFD1] transition-all">Wealth</Link>
          <Link href="/organisation" className="hover:text-[#00FFD1] transition-all">Enterprise</Link>
          <Link href="/startup" className="hover:text-[#00FFD1] transition-all">Venture</Link>
          <Link href="/pulse-report" className="text-[#00FFD1] border-b border-[#00FFD1]">Intelligence</Link>
        </div>
      </nav>

      {/* GIANT HERO SECTION */}
      <section ref={targetRef} className="relative h-[120vh] flex flex-col justify-center items-center px-8 overflow-hidden bg-black">
        <motion.div style={{ y, opacity, scale }} className="text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <span className="text-[#00FFD1] font-bold text-xs uppercase tracking-[1em] mb-12 block">
              Architects of Compliance
            </span>
            <h1 className="text-[14vw] font-serif leading-[0.8] italic mb-12 tracking-tighter text-white">
              Vision <br />
              <span className="text-gradient not-italic">Shielded.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed mt-10">
              The new global standard for financial intelligence, 
              strategic sovereignty, and institutional fortification.
            </p>
          </motion.div>
        </motion.div>

        {/* Dynamic Background Orbital Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] border border-white/[0.03] rounded-full animate-spin-slow" />
          <div className="absolute w-[60vw] h-[60vw] border border-[#00FFD1]/[0.02] rounded-full animate-spin-slow [animation-direction:reverse]" />
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ArrowDown size={30} strokeWidth={1} />
        </motion.div>
      </section>

      {/* SECTOR CARDS - GIANT SCALE */}
      <section className="px-6 py-40 max-w-[1600px] mx-auto grid lg:grid-cols-3 gap-6 bg-black">
        {sectors.map((sector) => (
          <Link key={sector.id} href={sector.path}>
            <motion.div 
              whileHover={{ y: -20, scale: 0.98 }}
              className="glass min-h-[750px] rounded-[5rem] p-16 flex flex-col justify-between group relative overflow-hidden transition-all duration-700"
            >
              <div className="z-10">
                <span className="text-[#00FFD1] text-[10px] font-black tracking-[0.5em] uppercase">{sector.tag}</span>
                <h3 className="text-7xl font-serif italic mt-6 group-hover:text-[#00FFD1] transition-colors">{sector.title}</h3>
                <p className="text-white/40 mt-10 text-lg leading-relaxed max-w-[280px] font-light italic">
                  {sector.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-white/20 group-hover:text-white transition-all z-10">
                <span className="text-5xl font-serif italic">{sector.id}</span>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#00FFD1] transition-all" />
                <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Huge Background Icon Element */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity scale-[3] pointer-events-none text-white">
                {sector.icon}
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* SERVICE LIST - THE ELITE GRID */}
      <section className="py-60 px-8 border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-40">
          <div>
            <h2 className="text-8xl font-serif italic mb-24 leading-none">
              Absolute <br /><span className="text-[#00FFD1] not-italic">Clarity.</span>
            </h2>
            <div className="space-y-32">
              {[
                { title: "Resilience Audits", icon: <BarChart3 />, desc: "High-fidelity diagnostic reports on operational compliance and capital health." },
                { title: "Regulatory Tech", icon: <Cpu />, desc: "Automated architecture for GST, PAN, FSSAI, and global licensing frameworks." },
                { title: "Sovereign Intelligence", icon: <Globe />, desc: "Strategic advisory on international tax planning and asset fortification." }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-12 group">
                  <div className="text-[#00FFD1] group-hover:rotate-12 transition-transform pt-2">{service.icon}</div>
                  <div>
                    <h4 className="text-4xl font-serif italic mb-6">{service.title}</h4>
                    <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* PULSE REPORT CTA - NOW LINKED TO THE RESULTS PAGE */}
            <div className="sticky top-40 glass rounded-[6rem] p-24 text-center overflow-hidden">
              <Zap className="text-[#00FFD1] mx-auto mb-10 animate-pulse" size={64} />
              <h3 className="text-6xl font-serif italic mb-10">Order the Pulse Report.</h3>
              <p className="text-white/40 text-xl font-light mb-16 leading-relaxed">
                Clarity is mandatory. Risk is an choice. Get your 360° vulnerability diagnostic today.
              </p>
              <Link href="/pulse-report" className="block w-full btn-giant bg-white text-black hover:bg-[#00FFD1] text-center">
                Initiate Stress Test
              </Link>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1] to-transparent opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* THE VAULT - CONTACT */}
      <section id="contact" className="py-60 px-8 bg-white text-black rounded-t-[15rem] relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Eye className="mx-auto mb-12 opacity-10" size={60} />
            <h2 className="text-[10vw] font-serif italic mb-12 tracking-tighter leading-none">
              The <span className="text-[#008080]">Vault.</span>
            </h2>
            <p className="text-black/40 text-2xl font-light mb-24">Exclusivity is our core policy. State your identity.</p>
            
            <form className="space-y-20 text-left max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 block mb-4">IDENTITY</label>
                  <input type="text" placeholder="NAME / ENTITY" className="w-full bg-transparent border-b border-black/10 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-colors placeholder:text-black/10" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 block mb-4">SECURE COMMS</label>
                  <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-black/10 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-colors placeholder:text-black/10" />
                </div>
              </div>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 block mb-4">OBJECTIVE</label>
                <textarea rows={4} placeholder="DESCRIBE THE VULNERABILITY" className="w-full bg-transparent border-b border-black/10 py-6 text-3xl font-serif italic focus:outline-none focus:border-[#008080] transition-colors resize-none placeholder:text-black/10" />
              </div>
              
              <div className="flex justify-center pt-10">
                <button type="submit" className="px-24 py-10 rounded-full bg-black text-white font-black text-2xl tracking-tighter uppercase hover:scale-105 transition-all shadow-2xl">
                  Submit Briefing
                </button>
              </div>
            </form>

            <div className="mt-40 pt-20 border-t border-black/5 flex flex-wrap justify-center gap-20 text-[10px] font-black tracking-[0.5em] text-black/30">
              <span>+91 [MOBILE]</span>
              <span>SECURE@URSHIELD.COM</span>
              <span>GLOBAL HEADQUARTERS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL FOOTER */}
      <footer className="bg-white text-black/20 py-12 px-8 text-center border-t border-black/5">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase">© 2026 URSHIELD GROUP // ABSOLUTE COMPLIANCE</p>
      </footer>
    </div>
  );
}
