"use client";

import React from "react";
import { QuellyAgent } from "@/components/quelly-agent";
import { 
  ArrowRight, 
  Check, 
  Clock, 
  TrendingDown, 
  AlertTriangle, 
  Zap, 
  Sparkles, 
  FileCheck, 
  Settings 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Bubbles } from "@/components/bubbles";

interface LandingClientProps {
  dict: any;
  locale: string;
}

export function LandingClient({ dict, locale }: LandingClientProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global Background Gradient */}
      <div className="fixed inset-0 landing-page-bg" />
      
      {/* Global Bubbles - Rising from actual footer through all sections to Enterprise Workflow Engine badge */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-[15]" style={{ height: '100%' }}>
        <Bubbles className="opacity-60 mix-blend-screen" />
      </div>
      
      {/* Pulse Dots - Distributed like stars throughout the whole page */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0" style={{ height: '100%' }}>
        <div className="pulse-stars-layer" />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-ultimate border-white/40 text-white text-xs font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              {dict.hero.eyebrow}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-shadow-md text-white">
              {dict.hero.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-shadow-sm">
              {dict.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href={`/${locale}/demo`}>
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border border-white/20">
                  {dict.hero.primary_cta} <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <div className="flex justify-center">
                 <QuellyAgent text={dict.quelly.action} mode="full" />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-8 text-sm font-semibold text-white/80">
              <div className="flex items-center gap-2 glass-pill-badge">
                <Check className="w-4 h-4 text-green-400" /> {dict.hero.badges.gdpr}
              </div>
              <div className="flex items-center gap-2 glass-pill-badge">
                <Check className="w-4 h-4 text-green-400" /> {dict.hero.badges.iso}
              </div>
              <div className="flex items-center gap-2 glass-pill-badge">
                <Check className="w-4 h-4 text-green-400" /> {dict.hero.badges.enterprise}
              </div>
            </div>
          </div>

          {/* Hero Visual - Quelly Centerpiece */}
          <div className="relative flex items-center justify-center lg:justify-end h-[500px]">
            {/* Central Quelly Icon (Large) - Clean PNG with no background effects */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float z-20">
              <Image 
                src="/quelly-icon.png" 
                alt="Quelly AI" 
                width={320}
                height={320}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            {/* Orbiting Elements - Bubbles flying to icon */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-16 h-16 glass-panel-ultimate rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-20 h-20 glass-panel-ultimate rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <FileCheck className="w-10 h-10 text-green-400" />
              </div>
              <div className="absolute top-1/3 left-10 w-12 h-12 glass-panel-ultimate rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <Settings className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="glass-pill-badge glass-pill-badge-orange">{dict.problems.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow-md">
              {dict.problems.title}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              {dict.problems.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/40 border border-red-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.problems.cards.time.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.problems.cards.time.desc}
              </p>
              <div className="card-lines">
                <span className="w-full" />
                <span className="w-[70%]" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/40 border border-orange-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.problems.cards.quality.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.problems.cards.quality.desc}
              </p>
              <div className="card-lines">
                <span className="w-full" />
                <span className="w-[70%]" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/40 border border-yellow-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.problems.cards.error.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.problems.cards.error.desc}
              </p>
              <div className="card-lines">
                <span className="w-full" />
                <span className="w-[70%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="glass-pill-badge glass-pill-badge-blue">{dict.solutions.badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-shadow-md">
              {dict.solutions.title}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              {dict.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/40 border border-green-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.solutions.cards.validation.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.solutions.cards.validation.desc}
              </p>
              <div className="card-lines">
                <span className="w-full bg-green-500/30" />
                <span className="w-[80%] bg-green-500/20" />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/40 border border-blue-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.solutions.cards.consistent.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.solutions.cards.consistent.desc}
              </p>
              <div className="card-lines">
                <span className="w-full bg-blue-500/30" />
                <span className="w-[80%] bg-blue-500/20" />
              </div>
            </div>

            {/* Solution 3 */}
            <div className="glass-panel-ultimate p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/40 border border-purple-500/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{dict.solutions.cards.capacity.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {dict.solutions.cards.capacity.desc}
              </p>
              <div className="card-lines">
                <span className="w-full bg-purple-500/30" />
                <span className="w-[80%] bg-purple-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 relative z-10 pb-32">
        <div className="max-w-4xl mx-auto glass-panel-ultimate p-8 sm:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-shadow-md">
            {dict.cta_section.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            {dict.cta_section.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg">
              {dict.cta_section.demo}
            </button>
            <div className="flex justify-center">
               <QuellyAgent text={dict.cta_section.contact} mode="full" className="bg-white/10 hover:bg-white/20 border-white/30" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
