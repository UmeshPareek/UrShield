"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, ShieldAlert, Activity, Globe, 
  FileSearch, Database, ArrowLeft, RefreshCw 
} from 'lucide-react';
import Link from 'next/link';

export default function OrganisationDashboard() {
  const riskMetrics = [
    { label: "Compliance Integrity", value: "98.2%", status: "OPTIMAL" },
    { label: "Tax Liability Risk", value: "14.5%", status: "MITIGATED" },
    { label: "Operational Friction", value: "LOW", status: "STABLE" },
    { label: "Regulatory Sync", value: "ACTIVE", status: "SYNCED" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00FFD1] selection:text-black">
      {/* ENTERPRISE HEADER */}
      <nav className="p-10 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-xl fixed w-full z-50">
        <div className="flex items-center gap-4">
          <Link href="/organisation" className="text-white/40 hover:text-[#00FFD1] transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-black tracking-[0.5em] uppercase text-[10px] text-[#00FFD1]">System Status: Secure</span>
        </div>
        <div className="flex items-center gap-6">
          <RefreshCw size={16} className="text-white/20 animate-spin-slow" />
          <span className="font-serif italic text-white/40">Enterprise Dashboard // 2026</span>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-12 pt-48 pb-40">
        <header className="mb-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-[9vw] font-serif italic leading-none mb-10">
              Institutional <span className="text-[#00FFD1] not-italic text-[8vw]">Oversight.</span>
            </h1>
            <p className="text-2xl text-white/30 font-light max-w-3xl leading-relaxed">
              We provide the diagnostic engine that monitors enterprise compliance, financial performance, 
              and global regulatory standing in real-time.
            </p>
          </motion.div>
        </header>

        {/* RISK METRIC CARDS */}
        <section className="grid lg:grid-cols-4 gap-4 mb-20">
          {riskMetrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[3rem] border border-white/5 hover:border-[#00FFD1]/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-8">{metric.label}</span>
              <div className="text-5xl font-serif italic mb-4 group-hover:text-[#00FFD1] transition-colors">{metric.value}</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                <span className="text-[10px] font-bold text-[#00FFD1] tracking-widest">{metric.status}</span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SYSTEM MODULES */}
        <section className="grid lg:grid-cols-2 gap-4">
          <div className="glass rounded-[4rem] p-20 relative overflow-hidden group">
            <Database className="text-[#00FFD1] mb-10 opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
            <h3 className="text-4xl font-serif italic mb-6 text-white">Compliance Stress-Testing.</h3>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Our proprietary audit engine scans for GST, PAN, and local regulatory drift. 
              We identify vulnerabilities before they become scrutinies.
            </p>
            <div className="space-y-4">
              {["Audit Preparedness", "Scrutiny Management", "Governance Framework"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-sm font-bold text-white/60">
                  <div className="w-1 h-1 bg-[#00FFD1]" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[4rem] p-20 bg-gradient-to-br from-[#00FFD1]/[0.02] to-transparent">
            <Globe className="text-[#00FFD1] mb-10" size={40} />
            <h3 className="text-4xl font-serif italic mb-6">Global Resilience.</h3>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              International tax planning and asset fortification strategies for organizations 
              operating across borders. We ensure global fluidity with local compliance.
            </p>
            <button className="btn-giant bg-white text-black hover:bg-[#00FFD1] w-full">
              Initiate Enterprise Scan
            </button>
          </div>
        </section>

        {/* DATA VISUALIZATION PLACEHOLDER (GIANT ICON) */}
        <section className="mt-40 flex flex-col items-center justify-center py-40 border-t border-white/5">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="opacity-[0.03] pointer-events-none absolute"
          >
            <ShieldAlert size={800} strokeWidth={0.5} />
          </motion.div>
          <div className="z-10 text-center">
            <h4 className="text-6xl font-serif italic mb-6">Risk Intelligence.</h4>
            <p className="text-white/20 text-xl font-light">Advanced diagnostics for the next generation of industry leaders.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
