"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Settings, TrendingUp, Package, Check, Clipboard, Clock } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function ManufacturingPage() {
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
          <span className="text-blue-700 font-semibold">Manufacturing</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-orange-500/20 rounded-2xl border border-orange-400/30 backdrop-blur-sm">
              <GlassIcon icon={Factory} color="orange" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Manufacturing</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für die Fertigungsindustrie: Optimieren Sie Produktion, Qualität und Supply Chain.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Settings} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Produktionsoptimierung</h3>
              <p className="text-slate-700">Automatisierte Steuerung und Überwachung von Fertigungsprozessen.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Package} color="orange" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Qualitätskontrolle</h3>
              <p className="text-slate-700">KI-gestützte Qualitätsprüfung und Fehlererkennung in Echtzeit.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={TrendingUp} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Supply Chain</h3>
              <p className="text-slate-700">Automatisierte Lieferketten-Verwaltung und Bestandsoptimierung.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Manufacturing Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Produktion",
                title: "Predictive Maintenance",
                description: "KI-basierte Vorhersage von Maschinenausfällen durch Analyse von Sensordaten.",
                icon: Settings,
                color: "blue",
                features: ["Sensor-Analyse", "Wartungs-Planung", "Alarm-Workflow"],
                impact: "-40%",
                impactLabel: "Ausfallzeiten"
              },
              {
                category: "Qualität",
                title: "Visual Inspection",
                description: "Automatisierte Qualitätskontrolle in der Produktionslinie durch Computer Vision.",
                icon: Check,
                color: "green",
                features: ["Defekt-Erkennung", "Ausschuss-Sortierung", "Dokumentation"],
                impact: "99.9%",
                impactLabel: "Genauigkeit"
              },
              {
                category: "Logistik",
                title: "Supply Chain",
                description: "Echtzeit-Tracking von Lieferungen und automatische Anpassung der Produktionsplanung.",
                icon: Package,
                color: "orange",
                features: ["Track & Trace", "Bestands-Sync", "Lieferanten-Portal"],
                impact: "100%",
                impactLabel: "Transparenz"
              },
              {
                category: "Planung",
                title: "Auftragsplanung",
                description: "Optimierte Einplanung von Produktionsaufträgen basierend auf Kapazität und Material.",
                icon: Clipboard,
                color: "purple",
                features: ["Kapazitäts-Planung", "Material-Check", "Termin-Prognose"],
                impact: "+20%",
                impactLabel: "Auslastung"
              },
              {
                category: "Personal",
                title: "Schichtplanung",
                description: "Automatisierte Schichtplanerstellung unter Berücksichtigung von Qualifikationen und Verfügbarkeit.",
                icon: Clock,
                color: "cyan",
                features: ["Qualifikations-Matrix", "Urlaubs-Sync", "Zeiterfassung"],
                impact: "-5h",
                impactLabel: "Planungsaufwand"
              },
              {
                category: "Einkauf",
                title: "Beschaffung",
                description: "Automatische Auslösung von Bestellungen bei Unterschreitung von Meldebeständen.",
                icon: TrendingUp,
                color: "red",
                features: ["ERP-Integration", "Genehmigungs-Workflow", "Wareneingang"],
                impact: "0",
                impactLabel: "Produktionsstopps"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-orange-600/90 to-amber-600/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Manufacturing-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und steigern Sie Ihre Produktivität.</p>
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
