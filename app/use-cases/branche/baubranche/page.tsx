"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, HardHat, FileText, Check, Clock, Ruler } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import WorkflowDiagrams from "@/components/workflow-diagrams"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function BaubranchePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10 flex items-center gap-2 text-sm text-slate-800">
          <Link href="/" className="hover:text-blue-700 transition-colors flex items-center gap-2 font-medium">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Zurück zur Startseite
          </Link>
          <span className="text-slate-500">/</span>
          <span className="text-slate-600">Use Cases</span>
          <span className="text-slate-500">/</span>
          <span className="text-blue-700 font-semibold">Baubranche</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-orange-500/20 rounded-2xl border border-orange-400/30 backdrop-blur-sm">
              <GlassIcon icon={Building2} color="orange" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Baubranche & Architektur</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung von Architekturprozessen mit QORTEX: Bauen Sie effizienter und fehlerfreier.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={HardHat} color="orange" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Zeitersparnis</h3>
              <p className="text-slate-700">Bis zu 70% schnellere Projektabwicklung durch Automatisierung.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Building2} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fehlerreduktion</h3>
              <p className="text-slate-700">90% weniger manuelle Fehler durch standardisierte Workflows.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Shield} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance</h3>
              <p className="text-slate-700">100% nachvollziehbare Dokumentation und Prüfpfade für jedes Projekt.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Diagrams */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Architektur-Workflow Automatisierung</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Vom manuellen Prozess zur vollautomatisierten Lösung: Sehen Sie, wie QORTEX Ihren Architektur-Workflow
              optimiert
            </p>
          </div>

          <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 mb-20">
            <WorkflowDiagrams />
          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Bau-Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Dokumentation",
                title: "Digitale Bauakte",
                description: "Zentralisierung aller Projektunterlagen. Automatische Ablage von Plänen, Protokollen und Genehmigungen.",
                icon: FileText,
                color: "blue",
                features: ["Versions-Kontrolle", "Plan-Management", "Foto-Dokumentation"],
                impact: "100%",
                impactLabel: "Verfügbarkeit"
              },
              {
                category: "Qualität",
                title: "Mängelmanagement",
                description: "Mobile Erfassung von Mängeln auf der Baustelle und automatische Zuweisung an Gewerke.",
                icon: Check,
                color: "orange",
                features: ["Foto-Upload", "Fristen-Tracking", "Status-Berichte"],
                impact: "-50%",
                impactLabel: "Bearbeitungszeit"
              },
              {
                category: "Planung",
                title: "BIM-Integration",
                description: "Verbindung von BIM-Modellen mit kaufmännischen Prozessen und Ausschreibungen.",
                icon: Building2,
                color: "cyan",
                features: ["IFC-Import", "Mengen-Ermittlung", "LV-Erstellung"],
                impact: "Präzise",
                impactLabel: "Kalkulation"
              },
              {
                category: "Controlling",
                title: "Baukosten-Controlling",
                description: "Echtzeit-Überwachung von Budgets und Kosten. Warnsystem bei Überschreitungen.",
                icon: Ruler,
                color: "green",
                features: ["Rechnungs-Prüfung", "Budget-Abgleich", "Nachtrags-Management"],
                impact: "100%",
                impactLabel: "Transparenz"
              },
              {
                category: "Koordination",
                title: "Bauzeitenplan",
                description: "Automatisierte Anpassung von Bauzeitenplänen bei Verzögerungen und Wetteränderungen.",
                icon: Clock,
                color: "purple",
                features: ["Gantt-Sync", "Wetter-Integration", "Ressourcen-Update"],
                impact: "-20%",
                impactLabel: "Verzögerungen"
              },
              {
                category: "Sicherheit",
                title: "SiGeKo-Management",
                description: "Digitale Verwaltung von Sicherheitsunterweisungen und Baustellen-Zutritten.",
                icon: HardHat,
                color: "red",
                features: ["Zutritts-Kontrolle", "Unterweisungs-Nachweis", "Gefährdungs-Analyse"],
                impact: "0",
                impactLabel: "Papierkram"
              }
            ].map((useCase, i) => (
              <ContentCard
                key={i}
                // @ts-expect-error icon prop type mismatch
                category={useCase.category}
                title={useCase.title}
                description={useCase.description}
                // @ts-expect-error icon prop type mismatch
                icon={useCase.icon}
                // @ts-expect-error color prop type mismatch
                color={useCase.color}
                features={useCase.features}
                impact={useCase.impact}
                impactLabel={useCase.impactLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-orange-600/90 to-red-600/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Ihre Bauprojekte zu automatisieren?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">Starten Sie noch heute und erleben Sie die Vorteile von QORTEX.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold rounded-xl shadow-lg">
                Demo buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Kostenlos testen
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}
