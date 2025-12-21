"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bubbles } from "@/components/bubbles";

export function WaveFooter() {
  return (
    <footer className="relative pt-0 overflow-hidden bg-transparent">
      {/* 
        The "Electric Wave" Separator - Integrated as part of footer
        Creates the jagged transition from content to footer
      */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-[200px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow Filter for the Electric Edge */}
            <filter id="wave-glow-footer" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="wave-gradient-footer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Main jagged path - The "Ripped" Horizon */}
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          
          {/* The Electric Edge Line - Sitting on top of the black shape */}
          <path
            fill="none"
            stroke="url(#wave-gradient-footer)"
            strokeWidth="3"
            filter="url(#wave-glow-footer)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192"
            className="opacity-80"
          />
          
          {/* Secondary Faint Glow Line for Depth */}
          <path
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="8"
            filter="blur(8px)"
            className="opacity-50"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192"
          />
        </svg>
      </div>

      {/* Bubbles rising from the darkness - Cyan/White energy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Bubbles className="opacity-40 mix-blend-screen" />
      </div>
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-40 pt-8 pb-12 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">QORTEX</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
            <Link href="/about" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Über Uns</Link>
            <Link href="/careers" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Karriere</Link>
            <Link href="/partners" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Partner</Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Kontakt</Link>
            <Link href="/imprint" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Impressum</Link>
            <Link href="/privacy" className="hover:text-cyan-300 transition-colors hover:scale-105 inline-block hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Datenschutz</Link>
          </div>

          <p className="text-sm text-slate-500 font-medium">
            © 2025 QORTEX. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
