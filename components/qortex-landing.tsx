"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Clock,
  FileCheck,
  Settings,
  Shield,
  TrendingDown,
  Zap,
  Sparkles,
  Brain,
  AlertTriangle,
} from "lucide-react"
import QortexVortex from "@/components/qortex-vortex"
import QortexStats from "@/components/qortex-stats"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function QortexLanding() {
  // Client-side bubble generation to avoid hydration mismatch
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
  }>>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0-100%
      size: Math.random() * 60 + 30, // 30-90px
      delay: Math.random() * 10, // 0-10s delay
      duration: Math.random() * 8 + 8, // 8-16s duration
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-[var(--background)]">
      <div className="cosmic-iris-global" />
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Organic blob shapes - keeping existing ones but enhancing visibility via global CSS */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-40 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, #c8f0ec 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "cosmic-float 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full opacity-30 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, #b8e6e0 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "cosmic-float 35s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Light Background Section - Hero until Trusted By */}
      <div className="relative z-10">
        {/* Background decorative elements for light section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle moving light orbs */}
          <div
            className="absolute top-20 left-1/4 w-[120px] h-[120px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[60%] left-[15%] w-[80px] h-[80px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
              animation: "pulse 6s ease-in-out infinite",
              animationDelay: "-1s",
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center relative z-10">
          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center text-center">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-light-heading)] mb-4 sm:mb-6 leading-tight text-shadow-sm">
                  Flexible Workflow-
                  <br />
                  <span className="text-gradient-blue">Automatisierung</span>
                  <br />
                  für Ihr Unternehmen
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-light-body)] mb-6 sm:mb-8 leading-relaxed font-medium">
                  Bauen Sie mit der Präzision von Code oder der Geschwindigkeit von Drag-and-Drop. QORTEX gibt Ihnen
                  mehr Freiheit, komplexe Workflows zu automatisieren.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
                  <Button
                    size="lg"
                    className="btn-3d text-primary-foreground border-0 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                  >
                    Kostenlos starten
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/40 backdrop-blur-md border-white/50 text-[var(--text-light-heading)] hover:bg-white/60 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto shadow-lg"
                  >
                    Demo ansehen
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--text-light-body)] justify-center font-semibold">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-success)]" />
                    <span>DSGVO-konform</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-success)]" />
                    <span>ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-success)]" />
                    <span>Enterprise-ready</span>
                  </div>
                </div>
              </div>

              <div className="relative"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Dark Background Section - Rest of the page */}
      <div className="relative">
        <div className="neural-network-bg" style={{ background: "transparent" }}>
          {/* Constellations and neural lines kept for depth, but subtle */}
        </div>

        {/* Problem/Solution Section - With Bubbles */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          
          {/* Dynamic Bubble Background for this section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="bubble-container"
                style={{
                  left: `${bubble.left}%`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  animation: `bubble-rise ${bubble.duration}s ease-in infinite`,
                  animationDelay: `-${bubble.delay}s`,
                  bottom: "-100px", // Start below
                }}
              />
            ))}
          </div>

          <div className="flex justify-center mb-12 sm:mb-20 relative z-20">
            <QortexVortex />
          </div>

          <div className="max-w-6xl mx-auto relative z-20">
            <div className="text-center mb-8 sm:mb-16">
              <span className="glass-pill-badge-orange mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
                Herausforderungen
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4 text-shadow-md">
                Manuelle Prozesse kosten Zeit und Geld
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4 font-medium text-shadow-sm">
                Unternehmen verlieren täglich Stunden mit repetitiven Aufgaben
              </p>
            </div>

            {/* Problem Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
              {/* Card 1 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge text-[var(--accent-error)]/90 bg-white/10 border-[var(--accent-error)]/30 mb-4 inline-block text-xs py-2 px-4 font-bold">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-error)]/30 to-[var(--accent-error)]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-[var(--accent-error)]/20">
                  <Clock className="h-8 w-8 text-white drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Zeitverschwendung</h3>
                <p className="text-white/80 font-medium">
                  Manuelle Datenvalidierung und Dokumentenprüfung kosten 8-12 Stunden pro Vorgang
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge text-[var(--accent-warning)]/90 bg-white/10 border-[var(--accent-warning)]/30 mb-4 inline-block text-xs py-2 px-4 font-bold">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-warning)]/30 to-[var(--accent-warning)]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-[var(--accent-warning)]/20">
                  <TrendingDown className="h-8 w-8 text-white drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Inkonsistente Qualität</h3>
                <p className="text-white/80 font-medium">
                  Manuelle Prozesse führen zu unterschiedlichen Ergebnissen zwischen Teams
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge text-yellow-300 bg-white/10 border-yellow-400/30 mb-4 inline-block text-xs py-2 px-4 font-bold">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-yellow-500/20">
                  <AlertTriangle className="h-8 w-8 text-white drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Fehleranfällig</h3>
                <p className="text-white/80 font-medium">
                  Menschliche Fehler führen zu kostspieligen Nacharbeiten und Verzögerungen
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="text-center mb-16">
              <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Die Lösung</span>
              <h2 className="text-4xl font-bold text-white mb-4 text-shadow-md">QORTEX automatisiert Ihre Workflows</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Mit KI-gestützter Automatisierung reduzieren Sie Bearbeitungszeit um 80%
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-16">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center shadow-lg glow-cyan ring-4 ring-white/10">
                <ArrowRight className="h-8 w-8 text-primary-foreground rotate-90" />
              </div>
            </div>

            {/* Solution Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Solution Card 1 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-success)] to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                  <Zap className="h-8 w-8 text-primary-foreground drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Automatische Validierung</h3>
                <p className="text-white/80 font-medium">KI-gestützte Prüfung von Daten und Dokumenten in Minuten statt Stunden</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 2 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                  <Check className="h-8 w-8 text-primary-foreground drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Konsistente Prozesse</h3>
                <p className="text-white/80 font-medium">Standardisierte Workflows sorgen für gleichbleibende Qualität</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 3 */}
              <div className="glass-panel-ultimate p-8 group">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                  <Sparkles className="h-8 w-8 text-primary-foreground drop-shadow-md" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-shadow-sm">Mehr Kapazität</h3>
                <p className="text-white/80 font-medium">Teams fokussieren sich auf strategische Arbeit</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - with split cards */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <span className="glass-pill-badge glass-pill-badge-blue mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
                So funktioniert es
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-light-heading)] mb-3 sm:mb-4 px-4 text-shadow-sm">
                In 3 Schritten zur Automatisierung
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="glass-card-split group shadow-xl">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center glow-cyan shadow-lg">
                    <FileCheck className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    1
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Analyse</h3>
                  <p className="text-[var(--text-light-body)] text-sm font-medium">
                    Wir analysieren Ihre Prozesse und identifizieren Automatisierungspotenziale
                  </p>
                </div>
              </div>

              <div className="glass-card-split group shadow-xl">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-success)] to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Settings className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    2
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Integration</h3>
                  <p className="text-[var(--text-light-body)] text-sm font-medium">
                    Unser Team integriert QORTEX in Ihre bestehende Infrastruktur
                  </p>
                </div>
              </div>

              <div className="glass-card-split group shadow-xl">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    3
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Automatisierung</h3>
                  <p className="text-[var(--text-light-body)] text-sm font-medium">
                    Ihre Workflows laufen automatisch und Sie sparen Zeit und Kosten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges section with Vortex #2 */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12 sm:mb-20">
              <QortexVortex />
            </div>
            
            {/* CTA Section - Repurposed structure */}
            <div className="glass-panel-ultimate p-6 sm:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4 text-shadow-md">
                Bereit für die Automatisierung?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 font-medium">
                Starten Sie noch heute und entdecken Sie, wie QORTEX Ihre Prozesse transformieren kann.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-3d text-primary-foreground border-0 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  Kostenlose Demo anfragen
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto font-semibold"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
              <div className="card-lines mt-8">
                <span style={{ width: "100%" }} />
                <span style={{ width: "80%" }} />
                <span style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* QortexVortex Component #3 */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <QortexVortex />
              </div>
              <div className="relative z-10 text-center py-12 sm:py-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4 text-shadow-lg">
                  QORTEX Workflow Engine
                </h2>
                <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4 font-medium text-shadow-sm">
                  Intelligente Automatisierung für Ihr Unternehmen
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="glass-panel-ultimate p-6 sm:p-8">
              <p className="text-center text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 font-bold uppercase tracking-wider">
                Vertraut von führenden Unternehmen weltweit
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
                {["SIEMENS", "SAP", "BOSCH", "MERCEDES", "ALLIANZ", "DEUTSCHE BANK"].map((company) => (
                  <div
                    key={company}
                    className="text-white/70 font-bold text-lg hover:text-white transition-colors cursor-pointer text-shadow-sm"
                  >
                    {company}
                  </div>
                ))}
              </div>
              <div className="card-lines">
                <span style={{ width: "100%" }} />
                <span style={{ width: "80%" }} />
                <span style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <QortexStats />

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 gradient-blue rounded-lg flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gradient-blue text-shadow-sm">QORTEX</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[var(--text-dark-body)] font-medium">
                <a href="/about" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Über Uns
                </a>
                <a href="/careers" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Karriere
                </a>
                <a href="/partners" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Partner
                </a>
                <a href="/contact" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Kontakt
                </a>
                <a href="#" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Impressum
                </a>
                <a href="#" className="hover:text-primary transition-colors text-white/80 hover:text-white">
                  Datenschutz
                </a>
              </div>
              <p className="text-xs sm:text-sm text-white/50 text-center">
                © 2025 QORTEX. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
