"use client";
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-12 py-10 fixed top-0 w-full z-50 mix-blend-difference bg-black/20 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3 group">
        <Shield className="text-[#00FFD1] w-10 h-10 group-hover:rotate-12 transition-transform" />
        <span className="text-3xl font-bold tracking-tighter uppercase italic">URSHIELD</span>
      </Link>
      <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">
        <Link href="/individual" className="hover:text-[#00FFD1] transition-all">Wealth</Link>
        <Link href="/organisation" className="hover:text-[#00FFD1] transition-all">Enterprise</Link>
        <Link href="/startup" className="hover:text-[#00FFD1] transition-all">Venture</Link>
      </div>
    </nav>
  );
}
