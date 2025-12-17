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

export default function QortexLanding() {
  // Header is now in shared component (QortexHeader)
  // Navigation menu is handled by the shared header component

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4]" />

        {/* Organic blob shapes */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, #c8f0ec 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "cosmic-float 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, #b8e6e0 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "cosmic-float 35s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #7c8bc4 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "cosmic-float 40s ease-in-out infinite",
            animationDelay: "-10s",
          }}
        />
        <div
          className="absolute top-[50%] left-[40%] w-[35%] h-[35%] rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, #d4c8f0 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "cosmic-float 25s ease-in-out infinite reverse",
            animationDelay: "-5s",
          }}
        />

        {/* Noise texture overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
          <filter id="cosmic-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cosmic-noise)" />
        </svg>
      </div>

      {/* Light Background Section - Hero until Trusted By */}
      <div className="relative z-10">
        {/* Background decorative elements for light section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-1/4 w-[120px] h-[120px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-40 right-1/4 w-[100px] h-[100px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
              animation: "pulse 5s ease-in-out infinite",
              animationDelay: "-2s",
            }}
          />
          <div
            className="absolute top-[60%] left-[15%] w-[80px] h-[80px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
              animation: "pulse 6s ease-in-out infinite",
              animationDelay: "-1s",
            }}
          />
          <div
            className="absolute top-[30%] right-[10%] w-[150px] h-[150px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(200,210,230,0.3) 0%, transparent 70%)",
              animation: "pulse 7s ease-in-out infinite",
              animationDelay: "-3s",
            }}
          />
          {/* Neon line accents */}
          <div className="absolute top-[30%] left-0 w-[60%] h-[2px] neon-line rotate-[-15deg]" />
          <div className="absolute top-[60%] right-0 w-[40%] h-[2px] neon-line rotate-[10deg]" />
        </div>

        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center relative z-10">
          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center text-center">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-light-heading)] mb-4 sm:mb-6 leading-tight">
                  Flexible Workflow-
                  <br />
                  <span className="text-gradient-blue">Automatisierung</span>
                  <br />
                  für Ihr Unternehmen
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-light-body)] mb-6 sm:mb-8 leading-relaxed">
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
                    className="bg-background/60 backdrop-blur-sm border-border text-[var(--text-light-heading)] hover:bg-background/80 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                  >
                    Demo ansehen
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--text-light-muted)] justify-center">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-success)]" />
                    <span>DSGVO-konform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-success)]" />
                    <span>ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2">
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
          {/* Galaxy stars - Size 1 (2px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "5%",
              left: "3%",
              width: "2px",
              height: "2px",
              background: "rgba(255,255,255,0.5)",
              animation: "pulse 3.5s ease-in-out infinite",
              animationDelay: "0.2s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "12%",
              left: "67%",
              width: "2px",
              height: "2px",
              background: "rgba(230,235,250,0.45)",
              animation: "pulse 5.2s ease-in-out infinite",
              animationDelay: "1.7s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "28%",
              left: "92%",
              width: "2px",
              height: "2px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 2.8s ease-in-out infinite",
              animationDelay: "0.9s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "45%",
              left: "18%",
              width: "2px",
              height: "2px",
              background: "rgba(220,225,245,0.5)",
              animation: "pulse 6.1s ease-in-out infinite",
              animationDelay: "2.4s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "67%",
              left: "54%",
              width: "2px",
              height: "2px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 4.3s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "83%",
              left: "31%",
              width: "2px",
              height: "2px",
              background: "rgba(235,240,255,0.45)",
              animation: "pulse 7.2s ease-in-out infinite",
              animationDelay: "3.1s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "91%",
              left: "78%",
              width: "2px",
              height: "2px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 3.9s ease-in-out infinite",
              animationDelay: "1.3s",
            }}
          />

          {/* Galaxy stars - Size 2 (3px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "8%",
              left: "23%",
              width: "3px",
              height: "3px",
              background: "rgba(225,230,250,0.5)",
              animation: "pulse 4.7s ease-in-out infinite",
              animationDelay: "2.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "19%",
              left: "81%",
              width: "3px",
              height: "3px",
              background: "rgba(255,255,255,0.45)",
              animation: "pulse 5.8s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "34%",
              left: "7%",
              width: "3px",
              height: "3px",
              background: "rgba(240,242,255,0.4)",
              animation: "pulse 2.5s ease-in-out infinite",
              animationDelay: "1.9s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "52%",
              left: "43%",
              width: "3px",
              height: "3px",
              background: "rgba(255,255,255,0.5)",
              animation: "pulse 6.4s ease-in-out infinite",
              animationDelay: "3.6s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "71%",
              left: "89%",
              width: "3px",
              height: "3px",
              background: "rgba(230,235,250,0.35)",
              animation: "pulse 3.1s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "88%",
              left: "12%",
              width: "3px",
              height: "3px",
              background: "rgba(255,255,255,0.45)",
              animation: "pulse 7.6s ease-in-out infinite",
              animationDelay: "2.2s",
            }}
          />

          {/* Galaxy stars - Size 3 (4px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "3%",
              left: "45%",
              width: "4px",
              height: "4px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 4.2s ease-in-out infinite",
              animationDelay: "1.1s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "16%",
              left: "34%",
              width: "4px",
              height: "4px",
              background: "rgba(235,240,255,0.5)",
              animation: "pulse 2.9s ease-in-out infinite",
              animationDelay: "3.4s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "29%",
              left: "73%",
              width: "4px",
              height: "4px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 5.5s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "48%",
              left: "61%",
              width: "4px",
              height: "4px",
              background: "rgba(220,228,250,0.45)",
              animation: "pulse 3.8s ease-in-out infinite",
              animationDelay: "2.7s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "63%",
              left: "22%",
              width: "4px",
              height: "4px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 6.7s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "79%",
              left: "95%",
              width: "4px",
              height: "4px",
              background: "rgba(230,235,250,0.5)",
              animation: "pulse 4.4s ease-in-out infinite",
              animationDelay: "4.1s",
            }}
          />

          {/* Galaxy stars - Size 4 (5px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "11%",
              left: "56%",
              width: "5px",
              height: "5px",
              background: "rgba(255,255,255,0.45)",
              animation: "pulse 5.1s ease-in-out infinite",
              animationDelay: "0.4s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "24%",
              left: "14%",
              width: "5px",
              height: "5px",
              background: "rgba(225,230,250,0.4)",
              animation: "pulse 3.3s ease-in-out infinite",
              animationDelay: "2.9s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "41%",
              left: "86%",
              width: "5px",
              height: "5px",
              background: "rgba(255,255,255,0.5)",
              animation: "pulse 7.1s ease-in-out infinite",
              animationDelay: "1.2s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "58%",
              left: "37%",
              width: "5px",
              height: "5px",
              background: "rgba(240,245,255,0.35)",
              animation: "pulse 2.6s ease-in-out infinite",
              animationDelay: "3.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "76%",
              left: "68%",
              width: "5px",
              height: "5px",
              background: "rgba(255,255,255,0.45)",
              animation: "pulse 4.9s ease-in-out infinite",
              animationDelay: "0.7s",
            }}
          />

          {/* Galaxy stars - Size 5 (6px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "7%",
              left: "78%",
              width: "6px",
              height: "6px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 6.3s ease-in-out infinite",
              animationDelay: "2.1s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "22%",
              left: "48%",
              width: "6px",
              height: "6px",
              background: "rgba(230,235,250,0.5)",
              animation: "pulse 3.7s ease-in-out infinite",
              animationDelay: "0.9s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "39%",
              left: "29%",
              width: "6px",
              height: "6px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 5.4s ease-in-out infinite",
              animationDelay: "3.3s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "55%",
              left: "83%",
              width: "6px",
              height: "6px",
              background: "rgba(220,228,250,0.45)",
              animation: "pulse 2.2s ease-in-out infinite",
              animationDelay: "1.6s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "73%",
              left: "9%",
              width: "6px",
              height: "6px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 7.8s ease-in-out infinite",
              animationDelay: "4.5s",
            }}
          />

          {/* Galaxy stars - Size 6 (8px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "4%",
              left: "91%",
              width: "8px",
              height: "8px",
              background: "rgba(235,240,255,0.45)",
              animation: "pulse 4.1s ease-in-out infinite",
              animationDelay: "1.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "18%",
              left: "5%",
              width: "8px",
              height: "8px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 5.9s ease-in-out infinite",
              animationDelay: "3.7s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "33%",
              left: "62%",
              width: "8px",
              height: "8px",
              background: "rgba(230,235,250,0.5)",
              animation: "pulse 3.2s ease-in-out infinite",
              animationDelay: "0.2s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "51%",
              left: "26%",
              width: "8px",
              height: "8px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 6.8s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "69%",
              left: "74%",
              width: "8px",
              height: "8px",
              background: "rgba(220,228,250,0.45)",
              animation: "pulse 4.6s ease-in-out infinite",
              animationDelay: "1.4s",
            }}
          />

          {/* Galaxy stars - Size 7 (10px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "9%",
              left: "38%",
              width: "10px",
              height: "10px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 5.3s ease-in-out infinite",
              animationDelay: "4.2s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "26%",
              left: "85%",
              width: "10px",
              height: "10px",
              background: "rgba(235,240,255,0.4)",
              animation: "pulse 2.7s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "44%",
              left: "51%",
              width: "10px",
              height: "10px",
              background: "rgba(255,255,255,0.5)",
              animation: "pulse 7.4s ease-in-out infinite",
              animationDelay: "2.3s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "62%",
              left: "16%",
              width: "10px",
              height: "10px",
              background: "rgba(230,235,250,0.35)",
              animation: "pulse 3.6s ease-in-out infinite",
              animationDelay: "3.9s",
            }}
          />

          {/* Galaxy stars - Size 8 (12px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "14%",
              left: "71%",
              width: "12px",
              height: "12px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 6.2s ease-in-out infinite",
              animationDelay: "1.7s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "31%",
              left: "41%",
              width: "12px",
              height: "12px",
              background: "rgba(220,228,250,0.45)",
              animation: "pulse 4.8s ease-in-out infinite",
              animationDelay: "3.2s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "49%",
              left: "93%",
              width: "12px",
              height: "12px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 5.6s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "68%",
              left: "33%",
              width: "12px",
              height: "12px",
              background: "rgba(235,240,255,0.5)",
              animation: "pulse 3.4s ease-in-out infinite",
              animationDelay: "2.6s",
            }}
          />

          {/* Galaxy stars - Size 9 (14px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "6%",
              left: "17%",
              width: "14px",
              height: "14px",
              background: "rgba(255,255,255,0.35)",
              animation: "pulse 7.7s ease-in-out infinite",
              animationDelay: "4.4s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "23%",
              left: "59%",
              width: "14px",
              height: "14px",
              background: "rgba(230,235,250,0.4)",
              animation: "pulse 4.5s ease-in-out infinite",
              animationDelay: "1.1s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "42%",
              left: "4%",
              width: "14px",
              height: "14px",
              background: "rgba(255,255,255,0.45)",
              animation: "pulse 2.4s ease-in-out infinite",
              animationDelay: "3.5s",
            }}
          />

          {/* Galaxy stars - Size 10 (16px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "17%",
              left: "27%",
              width: "16px",
              height: "16px",
              background: "rgba(240,245,255,0.35)",
              animation: "pulse 5.7s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "37%",
              left: "77%",
              width: "16px",
              height: "16px",
              background: "rgba(255,255,255,0.4)",
              animation: "pulse 6.5s ease-in-out infinite",
              animationDelay: "2.8s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "57%",
              left: "47%",
              width: "16px",
              height: "16px",
              background: "rgba(225,230,250,0.45)",
              animation: "pulse 3.9s ease-in-out infinite",
              animationDelay: "1.9s",
            }}
          />

          {/* Galaxy stars - Size 11 (20px) */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "13%",
              left: "88%",
              width: "20px",
              height: "20px",
              background: "rgba(255,255,255,0.3)",
              animation: "pulse 7.3s ease-in-out infinite",
              animationDelay: "3.6s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "35%",
              left: "19%",
              width: "20px",
              height: "20px",
              background: "rgba(235,240,255,0.35)",
              animation: "pulse 4.9s ease-in-out infinite",
              animationDelay: "0.9s",
            }}
          />

          {/* Galaxy stars - Size 12 (24px) - largest, rare */}
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "21%",
              left: "52%",
              width: "24px",
              height: "24px",
              background: "rgba(255,255,255,0.25)",
              animation: "pulse 8s ease-in-out infinite",
              animationDelay: "2.4s",
            }}
          />
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "65%",
              left: "85%",
              width: "24px",
              height: "24px",
              background: "rgba(230,235,250,0.3)",
              animation: "pulse 6.1s ease-in-out infinite",
              animationDelay: "4.7s",
            }}
          />

          {/* Neural connecting lines - subtle */}
          <div className="neural-line" style={{ top: "15%", left: "5%", width: "150px", transform: "rotate(25deg)" }} />
          <div
            className="neural-line"
            style={{ top: "25%", left: "10%", width: "200px", transform: "rotate(15deg)" }}
          />
          <div
            className="neural-line"
            style={{ top: "35%", left: "15%", width: "180px", transform: "rotate(35deg)" }}
          />
          <div className="neural-line" style={{ top: "45%", left: "8%", width: "220px", transform: "rotate(20deg)" }} />
          <div
            className="neural-line"
            style={{ top: "55%", left: "20%", width: "160px", transform: "rotate(10deg)" }}
          />
          <div className="neural-line" style={{ top: "65%", left: "5%", width: "190px", transform: "rotate(30deg)" }} />
          <div
            className="neural-line"
            style={{ top: "20%", right: "5%", width: "170px", transform: "rotate(-20deg)" }}
          />
          <div
            className="neural-line"
            style={{ top: "30%", right: "10%", width: "200px", transform: "rotate(-30deg)" }}
          />
          <div
            className="neural-line"
            style={{ top: "40%", right: "15%", width: "150px", transform: "rotate(-15deg)" }}
          />
          <div
            className="neural-line"
            style={{ top: "50%", right: "8%", width: "180px", transform: "rotate(-25deg)" }}
          />
          <div
            className="neural-line"
            style={{ top: "60%", right: "20%", width: "140px", transform: "rotate(-35deg)" }}
          />
        </div>

        {/* Problem/Solution Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="flex justify-center mb-12 sm:mb-20">
            <QortexVortex />
          </div>

          {/* Soap Bubbles - kept */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large bubbles */}
            <div
              className="soap-bubble"
              style={{
                width: "120px",
                height: "120px",
                top: "10%",
                left: "5%",
                animationDelay: "0s",
                animationDuration: "10s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "80px",
                height: "80px",
                top: "20%",
                right: "10%",
                animationDelay: "2s",
                animationDuration: "8s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "100px",
                height: "100px",
                bottom: "15%",
                left: "15%",
                animationDelay: "1s",
                animationDuration: "12s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "60px",
                height: "60px",
                top: "40%",
                right: "5%",
                animationDelay: "3s",
                animationDuration: "9s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "90px",
                height: "90px",
                bottom: "25%",
                right: "20%",
                animationDelay: "4s",
                animationDuration: "11s",
              }}
            />

            {/* Medium bubbles */}
            <div
              className="soap-bubble"
              style={{
                width: "50px",
                height: "50px",
                top: "5%",
                left: "30%",
                animationDelay: "1.5s",
                animationDuration: "7s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "40px",
                height: "40px",
                top: "60%",
                left: "8%",
                animationDelay: "2.5s",
                animationDuration: "9s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "55px",
                height: "55px",
                bottom: "40%",
                right: "12%",
                animationDelay: "0.5s",
                animationDuration: "10s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "45px",
                height: "45px",
                top: "35%",
                left: "40%",
                animationDelay: "3.5s",
                animationDuration: "8s",
              }}
            />

            {/* Small bubbles */}
            <div
              className="soap-bubble"
              style={{
                width: "25px",
                height: "25px",
                top: "15%",
                left: "50%",
                animationDelay: "1s",
                animationDuration: "6s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "20px",
                height: "20px",
                top: "70%",
                right: "30%",
                animationDelay: "2s",
                animationDuration: "7s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "30px",
                height: "30px",
                bottom: "10%",
                left: "45%",
                animationDelay: "4s",
                animationDuration: "8s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "22px",
                height: "22px",
                top: "50%",
                left: "25%",
                animationDelay: "0s",
                animationDuration: "5s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "28px",
                height: "28px",
                bottom: "30%",
                right: "40%",
                animationDelay: "3s",
                animationDuration: "6s",
              }}
            />

            <div
              className="soap-bubble"
              style={{
                width: "65px",
                height: "65px",
                top: "45%",
                left: "45%",
                animationDelay: "0.8s",
                animationDuration: "9s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "45px",
                height: "45px",
                top: "50%",
                left: "55%",
                animationDelay: "2.2s",
                animationDuration: "7s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "55px",
                height: "55px",
                top: "55%",
                left: "40%",
                animationDelay: "1.5s",
                animationDuration: "10s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "35px",
                height: "35px",
                top: "40%",
                left: "50%",
                animationDelay: "3.2s",
                animationDuration: "8s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "50px",
                height: "50px",
                top: "48%",
                left: "60%",
                animationDelay: "0.5s",
                animationDuration: "11s",
              }}
            />
            <div
              className="soap-bubble"
              style={{
                width: "40px",
                height: "40px",
                top: "52%",
                left: "35%",
                animationDelay: "2.8s",
                animationDuration: "6s",
              }}
            />

            {/* Bokeh dots */}
            <div
              className="bokeh-dot"
              style={{ width: "60px", height: "60px", top: "25%", left: "20%", animationDelay: "0s" }}
            />
            <div
              className="bokeh-dot"
              style={{ width: "40px", height: "40px", top: "45%", right: "25%", animationDelay: "2s" }}
            />
            <div
              className="bokeh-dot"
              style={{ width: "50px", height: "50px", bottom: "20%", left: "35%", animationDelay: "4s" }}
            />
            <div
              className="bokeh-dot"
              style={{ width: "35px", height: "35px", top: "10%", right: "35%", animationDelay: "1s" }}
            />
            <div
              className="bokeh-dot"
              style={{ width: "45px", height: "45px", bottom: "35%", right: "15%", animationDelay: "3s" }}
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <span className="glass-pill-badge-orange mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
                Herausforderungen
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
                Manuelle Prozesse kosten Zeit und Geld
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
                Unternehmen verlieren täglich Stunden mit repetitiven Aufgaben
              </p>
            </div>

            {/* Problem Cards - Mixed glow variants for comparison */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
              {/* Card 1 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-[var(--accent-error)]/80 bg-[var(--accent-error)]/10 border-[var(--accent-error)]/30 mb-4 inline-block text-xs py-2 px-4">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-error)]/30 to-[var(--accent-error)]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-[var(--accent-error)]" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Zeitverschwendung</h3>
                <p className="text-white/70">
                  Manuelle Datenvalidierung und Dokumentenprüfung kosten 8-12 Stunden pro Vorgang
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 2 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-[var(--accent-warning)]/80 bg-[var(--accent-warning)]/10 border-[var(--accent-warning)]/30 mb-4 inline-block text-xs py-2 px-4">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-warning)]/30 to-[var(--accent-warning)]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingDown className="h-8 w-8 text-[var(--accent-warning)]" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Inkonsistente Qualität</h3>
                <p className="text-white/70">
                  Manuelle Prozesse führen zu unterschiedlichen Ergebnissen zwischen Teams
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 3 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-yellow-300/80 bg-yellow-500/10 border-yellow-400/30 mb-4 inline-block text-xs py-2 px-4">
                  Problem
                </span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Fehleranfällig</h3>
                <p className="text-white/70">
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
              <h2 className="text-4xl font-bold text-white mb-4">QORTEX automatisiert Ihre Workflows</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Mit KI-gestützter Automatisierung reduzieren Sie Bearbeitungszeit um 80%
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-16">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center shadow-lg glow-cyan">
                <ArrowRight className="h-8 w-8 text-primary-foreground rotate-90" />
              </div>
            </div>

            {/* Solution Cards - Mixed glow variants for comparison */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Solution Card 1 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-success)] to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Automatische Validierung</h3>
                <p className="text-white/70">KI-gestützte Prüfung von Daten und Dokumenten in Minuten statt Stunden</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 2 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Konsistente Prozesse</h3>
                <p className="text-white/70">Standardisierte Workflows sorgen für gleichbleibende Qualität</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 3 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-4 inline-block">Lösung</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Mehr Kapazität</h3>
                <p className="text-white/70">Teams fokussieren sich auf strategische Arbeit</p>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-dark-heading)] mb-3 sm:mb-4 px-4">
                In 3 Schritten zur Automatisierung
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="glass-card-split group">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center glow-cyan">
                    <FileCheck className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Analyse</h3>
                  <p className="text-[var(--text-light-body)] text-sm">
                    Wir analysieren Ihre Prozesse und identifizieren Automatisierungspotenziale
                  </p>
                </div>
              </div>

              <div className="glass-card-split group">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-success)] to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Settings className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Integration</h3>
                  <p className="text-[var(--text-light-body)] text-sm">
                    Unser Team integriert QORTEX in Ihre bestehende Infrastruktur
                  </p>
                </div>
              </div>

              <div className="glass-card-split group">
                <div className="glass-card-split-top relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                </div>
                <div className="glass-card-split-bottom">
                  <h3 className="font-bold text-lg text-[var(--text-light-heading)] mb-2">Automatisierung</h3>
                  <p className="text-[var(--text-light-body)] text-sm">
                    Ihre Workflows laufen automatisch und Sie sparen Zeit und Kosten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges section with Vortex */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12 sm:mb-20">
              {/* VORTEX #2 */}
              <QortexVortex />
            </div>

            <div className="text-center mb-8 sm:mb-16">
              <span className="glass-pill-badge-orange mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
                Herausforderungen
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
                Manuelle Prozesse kosten Zeit und Geld
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
                Unternehmen verlieren täglich Stunden mit repetitiven Aufgaben
              </p>
            </div>

            {/* Problem Cards - Mixed glow variants for comparison */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
              {/* Card 1 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-[var(--accent-error)]/80 bg-[var(--accent-error)]/10 border-[var(--accent-error)]/30 mb-3 sm:mb-4 inline-block text-xs py-1.5 sm:py-2 px-3 sm:px-4">
                  Problem
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent-error)]/30 to-[var(--accent-error)]/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--accent-error)]" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Zeitverschwendung</h3>
                <p className="text-sm sm:text-base text-white/70">
                  Manuelle Datenvalidierung und Dokumentenprüfung kosten 8-12 Stunden pro Vorgang
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 2 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-[var(--accent-warning)]/80 bg-[var(--accent-warning)]/10 border-[var(--accent-warning)]/30 mb-3 sm:mb-4 inline-block text-xs py-1.5 sm:py-2 px-3 sm:px-4">
                  Problem
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent-warning)]/30 to-[var(--accent-warning)]/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--accent-warning)]" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Inkonsistente Qualität</h3>
                <p className="text-sm sm:text-base text-white/70">
                  Manuelle Prozesse führen zu unterschiedlichen Ergebnissen zwischen Teams
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Card 3 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge text-yellow-300/80 bg-yellow-500/10 border-yellow-400/30 mb-3 sm:mb-4 inline-block text-xs py-1.5 sm:py-2 px-3 sm:px-4">
                  Problem
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Fehleranfällig</h3>
                <p className="text-sm sm:text-base text-white/70">
                  Menschliche Fehler führen zu kostspieligen Nacharbeiten und Verzögerungen
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="text-center mb-8 sm:mb-16">
              <span className="glass-pill-badge glass-pill-badge-blue mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
                Die Lösung
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
                QORTEX automatisiert Ihre Workflows
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
                Mit KI-gestützter Automatisierung reduzieren Sie Bearbeitungszeit um 80%
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8 sm:mb-16">
              <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-blue rounded-full flex items-center justify-center shadow-lg glow-cyan">
                <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground rotate-90" />
              </div>
            </div>

            {/* Solution Cards - Mixed glow variants for comparison */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Solution Card 1 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
                  Lösung
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent-success)] to-emerald-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Automatische Validierung</h3>
                <p className="text-sm sm:text-base text-white/70">
                  KI-gestützte Prüfung von Daten und Dokumenten in Minuten statt Stunden
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 2 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
                  Lösung
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-blue flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Konsistente Prozesse</h3>
                <p className="text-sm sm:text-base text-white/70">
                  Standardisierte Workflows sorgen für gleichbleibende Qualität
                </p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>

              {/* Solution Card 3 - Apply Glow #5 (Soft Mint-White) */}
              <div className="glass-card-neon-5 p-6 sm:p-8 group backdrop-blur-md bg-white/10">
                <span className="glass-pill-badge glass-pill-badge-blue mb-3 sm:mb-4 inline-block text-xs sm:text-sm">
                  Lösung
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent-purple)] to-purple-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3">Mehr Kapazität</h3>
                <p className="text-sm sm:text-base text-white/70">Teams fokussieren sich auf strategische Arbeit</p>
                <div className="card-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QortexVortex Component */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Vortex behind text with lower z-index */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                {/* VORTEX #3 */}
                <QortexVortex />
              </div>
              {/* Text overlay above vortex */}
              <div className="relative z-10 text-center py-12 sm:py-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
                  QORTEX Workflow Engine
                </h2>
                <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
                  Intelligente Automatisierung für Ihr Unternehmen
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card-neon p-6 sm:p-8">
              <p className="text-center text-[var(--text-dark-body)] text-xs sm:text-sm mb-4 sm:mb-6 font-medium uppercase tracking-wider">
                Vertraut von führenden Unternehmen weltweit
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
                {["SIEMENS", "SAP", "BOSCH", "MERCEDES", "ALLIANZ", "DEUTSCHE BANK"].map((company) => (
                  <div
                    key={company}
                    className="text-[var(--text-dark-muted)] font-bold text-lg hover:text-primary transition-colors cursor-pointer"
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

        {/* CTA Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-neon p-6 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-dark-heading)] mb-3 sm:mb-4 px-4">
                Bereit für die Automatisierung?
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-dark-body)] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
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
                    className="bg-background/10 backdrop-blur-sm border-border/30 text-[var(--text-dark-heading)] hover:bg-background/20 rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
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

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 relative z-10 border-t border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 gradient-blue rounded-lg flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gradient-blue">QORTEX</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[var(--text-dark-body)]">
                <a href="/about" className="hover:text-primary transition-colors">
                  Über Uns
                </a>
                <a href="/careers" className="hover:text-primary transition-colors">
                  Karriere
                </a>
                <a href="/partners" className="hover:text-primary transition-colors">
                  Partner
                </a>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Impressum
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Datenschutz
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-dark-muted)] text-center">
                © 2025 QORTEX. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
