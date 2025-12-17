"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, FileText, Search, Shield, Check, Clock, Folder } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function LegalPage() {
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
          <span className="text-blue-700 font-semibold">Rechtswesen</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-slate-500/20 rounded-2xl border border-slate-400/30 backdrop-blur-sm">
              <GlassIcon icon={Scale} color="blue" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Rechtswesen</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für Anwaltskanzleien und Rechtsabteilungen: Präzision und Effizienz.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={FileText} color="purple" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vertragsanalyse</h3>
              <p className="text-slate-700">KI-gestützte Analyse und Prüfung von Verträgen in Sekunden.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Search} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Rechtsrecherche</h3>
              <p className="text-slate-700">Automatisierte Suche nach Präzedenzfällen, Gesetzen und Urteilen.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Shield} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance</h3>
              <p className="text-slate-700">Automatische Überwachung und Einhaltung rechtlicher Vorschriften.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Legal Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Vertragsmanagement",
                title: "Vertragsprüfung",
                description: "KI-gestützte Analyse von Verträgen. Identifikation von Klauseln und Risiken in Sekunden.",
                icon: FileText,
                color: "blue",
                features: ["Risiko-Analyse", "Klausel-Vergleich", "Änderungs-Tracking"],
                impact: "90%",
                impactLabel: "Zeitersparnis"
              },
              {
                category: "Compliance",
                title: "Due Diligence",
                description: "Automatisierte Prüfung von Unternehmensdaten und Dokumenten bei Transaktionen.",
                icon: Shield,
                color: "purple",
                features: ["Datenraum-Analyse", "Red-Flag Report", "Dokumenten-Indexierung"],
                impact: "2 Tage",
                impactLabel: "Statt 2 Wochen"
              },
              {
                category: "Research",
                title: "Recherche-Assistent",
                description: "Intelligente Suche in juristischen Datenbanken, Urteilen und Gesetzen.",
                icon: Search,
                color: "cyan",
                features: ["Semantische Suche", "Relevanz-Ranking", "Zusammenfassungen"],
                impact: "10x",
                impactLabel: "Schnellere Recherche"
              },
              {
                category: "Verwaltung",
                title: "Fristenmanagement",
                description: "Automatische Berechnung und Überwachung von Fristen und Terminen.",
                icon: Clock,
                color: "green",
                features: ["Gerichtsfristen", "Wiedervorlage", "Kalender-Sync"],
                impact: "0",
                impactLabel: "Versäumte Fristen"
              },
              {
                category: "Aktenführung",
                title: "E-Akte",
                description: "Digitalisierung und automatische Verschlagwortung von Eingangspost und Akten.",
                icon: Folder,
                color: "orange",
                features: ["Scan-Prozess", "Auto-Tagging", "Volltextsuche"],
                impact: "100%",
                impactLabel: "Digital"
              },
              {
                category: "Abrechnung",
                title: "Billing Automation",
                description: "Automatische Erfassung von Zeiten und Erstellung von Honorarrechnungen.",
                icon: Scale,
                color: "red",
                features: ["Zeiterfassung", "RVG-Rechner", "Rechnungsversand"],
                impact: "+15%",
                impactLabel: "Umsatz"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-slate-600/90 to-gray-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Legal-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-slate-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und gewinnen Sie wertvolle Zeit.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-50 font-bold rounded-xl shadow-lg">
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
