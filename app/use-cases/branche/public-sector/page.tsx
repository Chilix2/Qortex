"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, FileText, Users, Shield, Check, Database, MessageSquare } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function PublicSectorPage() {
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
          <span className="text-blue-700 font-semibold">Öffentlicher Sektor</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-blue-500/20 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
              <GlassIcon icon={Building} color="blue" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Öffentlicher Sektor</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für Behörden und öffentliche Einrichtungen: Bürgerfreundlich, effizient und sicher.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={FileText} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bürgerservices</h3>
              <p className="text-slate-700">Automatisierte, schnelle Bearbeitung von Anträgen und Anfragen.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Users} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Effizienzsteigerung</h3>
              <p className="text-slate-700">Optimierung administrativer Prozesse und Entlastung der Mitarbeiter.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Shield} color="purple" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance</h3>
              <p className="text-slate-700">Sichere Einhaltung behördlicher Vorschriften und Datenschutz.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Public Sector Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Bürgerservice",
                title: "Antragsbearbeitung",
                description: "Automatisierte Verarbeitung von Bürgeranträgen. Von der Eingabe bis zum Bescheid in Rekordzeit.",
                icon: FileText,
                color: "blue",
                features: ["Intelligente Formulare", "Dokumenten-Prüfung (OCR)", "Auto-Bescheid"],
                impact: "50%",
                impactLabel: "Schnellere Bearbeitung"
              },
              {
                category: "IT-Infrastruktur",
                title: "Datenverwaltung & Sync",
                description: "Sichere Synchronisation von Stammdaten zwischen Fachverfahren und zentralen Registern.",
                icon: Database,
                color: "cyan",
                features: ["Register-Abgleich", "Daten-Validierung", "DSGVO-konform"],
                impact: "100%",
                impactLabel: "Datenkonsistenz"
              },
              {
                category: "Compliance",
                title: "Reporting & Aufsicht",
                description: "Automatische Generierung von Berichten für Aufsichtsbehörden und interne Revision.",
                icon: Shield,
                color: "purple",
                features: ["Audit-Trails", "Auto-Reporting", "Fristen-Überwachung"],
                impact: "0",
                impactLabel: "Manuelle Fehler"
              },
              {
                category: "Kommunikation",
                title: "Bürger-Chatbot",
                description: "KI-gestützte Beantwortung von Standardanfragen rund um die Uhr. Entlastung der Telefonzentrale.",
                icon: MessageSquare,
                color: "green",
                features: ["24/7 Erreichbarkeit", "Mehrsprachig", "Termin-Buchung"],
                impact: "-60%",
                impactLabel: "Anrufvolumen"
              },
              {
                category: "Personal",
                title: "Onboarding Verwaltung",
                description: "Automatisierte Bereitstellung von Zugängen und Hardware für neue Mitarbeiter.",
                icon: Users,
                color: "orange",
                features: ["Active Directory", "Hardware-Bestellung", "Rechte-Vergabe"],
                impact: "1 Tag",
                impactLabel: "Statt 2 Wochen"
              },
              {
                category: "Gebäudemanagement",
                title: "Facility Management",
                description: "Koordination von Wartung und Instandhaltung städtischer Liegenschaften.",
                icon: Building,
                color: "red",
                features: ["Ticket-System", "Wartungs-Kalender", "Dienstleister-Steuerung"],
                impact: "30%",
                impactLabel: "Kostenersparnis"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-blue-700/90 to-indigo-800/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Public Sector-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und modernisieren Sie Ihre Verwaltung.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
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
