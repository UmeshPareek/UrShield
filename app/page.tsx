"use client";
import React, { useState } from 'react';
import { Shield, BarChart3, Rocket, Building2, User, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function UrShield() {
  const [category, setCategory] = useState('Organisation');

  const services = {
    Individual: [
      "Personal Wealth Shielding & Tax Optimization",
      "Legacy Planning & Private Investment Advisory",
      "Global Tax Compliance for High-Net-Worth Individuals",
      "Individual PAN, GST & Income Tax Filing"
    ],
    Organisation: [
      "Corporate Stress-Testing & Compliance Audits",
      "FSSAI, Local Licenses & Regulatory Navigation",
      "Institutional Tax Strategy & Scrutiny Management",
      "Fractional CFO & Financial Performance Reporting"
    ],
    Startup: [
      "Investor-Ready Pitch Decks & Storytelling",
      "Dynamic Financial Modeling & Valuation",
      "Seed-to-Exit Regulatory Roadmap",
      "GST, PAN & Startup India Recognition"
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <Shield className="text-teal-800 w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter text-teal-800">URSHIELD</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          <a href="#services" className="hover:text-teal-800 transition-colors">Solutions</a>
          <a href="#contact" className="hover:text-teal-800 transition-colors">Contact</a>
        </div>
      </nav>

      <header className="px-8 py-24 md:py-40 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
          Your Vision, <span className="italic text-teal-800">Shielded.</span><br />
          Your Growth, Guaranteed.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          The elite standard in Compliance, Financial Intelligence, and Strategic Consulting. We fortify your business against the industry’s volatility.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-teal-800 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-900 transition-all shadow-lg shadow-teal-100">
            Get Business Tested
          </button>
        </div>
      </header>

      <section id="services" className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 text-center italic">Choose Your Protection Tier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Individual', 'Organisation', 'Startup'].map((item) => (
              <div 
                key={item}
                onClick={() => setCategory(item)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-500 border-2 ${category === item ? 'bg-white border-teal-800 shadow-2xl scale-105' : 'bg-transparent border-gray-200 opacity-60'}`}
              >
                {item === 'Individual' && <User className="w-10 h-10 mb-4 text-teal-800" />}
                {item === 'Organisation' && <Building2 className="w-10 h-10 mb-4 text-teal-800" />}
                {item === 'Startup' && <Rocket className="w-10 h-10 mb-4 text-teal-800" />}
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{item}</h3>
                <ul className="space-y-4">
                  {services[item as keyof typeof services].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 mt-1 text-teal-800 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 max-w-3xl mx-auto">
        <h2 className="text-5xl font-serif mb-12 text-center">Secure Access</h2>
        <form className="space-y-8">
          <input type="text" placeholder="Full Name" className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-teal-800 transition-colors bg-transparent" />
          <input type="email" placeholder="Email Address" className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-teal-800 transition-colors bg-transparent" />
          <textarea rows={4} placeholder="How can we shield your business?" className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-teal-800 transition-colors bg-transparent resize-none"></textarea>
          <button className="w-full bg-teal-800 text-white py-6 rounded-xl font-bold uppercase tracking-widest hover:bg-teal-900 transition-all">Submit Brief</button>
        </form>
      </section>

      <footer className="bg-slate-900 text-white py-20 px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] text-slate-500 uppercase">© 2026 UrShield Consulting Group. Absolute Compliance.</p>
      </footer>
    </div>
  );
}
