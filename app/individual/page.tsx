"use client";
import { User, Landmark, TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-8 border-b border-gray-50"><Link href="/" className="flex items-center gap-2 text-teal-800 font-bold tracking-tighter"><ArrowLeft size={18}/> URSHIELD PRIVATE</Link></nav>
      <section className="flex flex-col items-center justify-center py-32 px-8 text-center max-w-4xl mx-auto">
        <Landmark size={64} className="text-teal-800 mb-8 opacity-20" />
        <h1 className="text-6xl font-serif mb-8">Wealth <span className="italic text-teal-800">Design.</span></h1>
        <p className="text-xl text-slate-500 font-light mb-12">Don't just pay taxes; play the game. Advanced planning that aligns with investment growth.</p>
        <div className="grid md:grid-cols-2 gap-4 w-full text-left">
          <div className="border p-8 rounded-xl hover:border-teal-800 transition-colors">
            <TrendingUp className="text-teal-800 mb-2"/>
            <h5 className="font-bold">Tax Optimization</h5>
            <p className="text-xs text-slate-400">Plan, Save, Invest and Grow your personal capital.</p>
          </div>
          <div className="border p-8 rounded-xl hover:border-teal-800 transition-colors">
            <User className="text-teal-800 mb-2"/>
            <h5 className="font-bold">HNI Advisory</h5>
            <p className="text-xs text-slate-400">Bespoke strategies for personal legacy and asset protection.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
