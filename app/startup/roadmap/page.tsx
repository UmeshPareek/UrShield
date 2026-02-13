"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Milestone, Layers, FileCode, Landmark, 
  TrendingUp, Ship, ArrowRight, CheckCircle 
} from 'lucide-react';
import Link from 'next/link';

export default function VentureRoadmap() {
  const steps = [
    {
      stage: "01 / FOUNDATION",
      title: "Regulatory Infrastructure",
      desc: "Instant execution of GST, PAN, and local operational licenses. We establish the legal fortress so you can focus on the product.",
      icon: <Landmark />,
      services: ["FSSAI Licensing", "MSME Registration", "Digital Signature Setup"]
    },
    {
      stage: "02 / ARCHITECTURE",
      title: "Financial Engineering",
      desc: "High-fidelity financial modeling. We build the 3-year projection models that withstand aggressive VC scrutiny.",
      icon: <FileCode />,
      services: ["Unit Economics Analysis", "Burn Rate Optimization", "Revenue Projections"]
    },
    {
      stage: "03 / NARRATIVE",
      title: "Investor Storytelling",
      desc: "Pitch Deck architecture designed for impact. We translate your disruptive vision into the language of capital.",
      icon: <Layers />,
      services: ["Deck Design", "Market Sizing (TAM/SAM)", "Exit Strategy Mapping"]
    },
    {
      stage: "04 / TRACTION",
      title: "Compliance Stress-Testing",
      desc: "Ensuring the entity is 'Due Diligence Ready' at all times. No surprises during the funding round.",
      icon: <CheckCircle />,
      services: ["Internal Audits", "Tax Health Checkups", "Governance Structuring"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      {/* HEADER */}
      <nav className="p-12 border-b border-white/5 flex justify-between items-center fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
        <Link href="/startup" className="text-[#00FFD1] font-black tracking-widest text-[10px] uppercase flex items-center gap-2">
          <ArrowRight className="rotate-180" size={14} /> Back to Startup Sector
        </Link>
        <span className="font-serif italic text-white/20">The UrShield Protocol</span>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-60 pb-40">
        <header className="mb-40 max-w-4xl">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-[10vw] font-serif italic leading-none mb-12">
              The <span className="text-[#00FFD1] not-italic">Venture</span> <br /> Roadmap.
            </h1>
            <p className="text-2xl text-white/40 font-light leading-relaxed">
              A systematic progression from inception to institutional exit. 
              We don't just advise; we architect the journey.
            </p>
          </motion.div>
        </header>

        {/* THE ROADMAP DIAGRAM */}
        <div className="relative border-l border-white/5 ml-4 md:ml-20 space-y-60">
          {steps.map((step, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-24 group"
            >
              {/* Animated Connector Point */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:bg-[#00FFD1] group-hover:scale-150 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,209,0.3)]" />
              
              <div className="grid lg:grid-cols-2 gap-20">
                <div>
                  <span className="text-[#00FFD1] font-bold text-xs tracking-[0.4em] mb-4 block">{step.stage}</span>
                  <h2 className="text-5xl md:text-6xl font-serif italic mb-8">{step.title}</h2>
                  <p className="text-white/40 text-xl font-light leading-relaxed mb-10">{step.desc}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    {step.services.map((s, j) => (
                      <span key={j} className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-[4rem] p-16 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 120, strokeWidth: 0.5, className: "text-[#00FFD1]" })}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* FINAL CTA */}
        <section className="mt-60 pt-40 border-t border-white/5 text-center">
          <Ship size={60} className="mx-auto mb-10 text-[#00FFD1] opacity-20" />
          <h3 className="text-6xl font-serif italic mb-10">Ready for Launch.</h3>
          <Link href="/#contact" className="btn-giant bg-white text-black inline-block hover:bg-[#00FFD1]">
            Initiate Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
