"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, FileText, Activity, Check, Calendar, Clipboard } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function HealthcarePage() {
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
          <span className="text-blue-700 font-semibold">Healthcare</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-red-500/20 rounded-2xl border border-red-400/30 backdrop-blur-sm">
              <GlassIcon icon={Heart} color="red" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Healthcare</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für das Gesundheitswesen: Mehr Zeit für Patienten durch intelligente Prozesse.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Shield} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">HIPAA-konform</h3>
              <p className="text-slate-700">Vollständige Einhaltung von Datenschutzbestimmungen und sicherer Umgang mit Patientendaten.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={FileText} color="purple" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Patientendaten</h3>
              <p className="text-slate-700">Sichere, automatisierte Verarbeitung und Archivierung medizinischer Dokumente.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Activity} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Workflow-Optimierung</h3>
              <p className="text-slate-700">Effiziente Abläufe in Kliniken und Praxen zur Entlastung des Personals.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Healthcare Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Patientenaufnahme",
                title: "Digitales Onboarding",
                description: "Vollständig digitaler Aufnahmeprozess. Patienten füllen Formulare online aus, Daten fließen direkt ins KIS.",
                icon: Clipboard,
                color: "blue",
                features: ["Digitale Anamnese", "Versichertenkarten-Scan", "Automatische Aktenanlage"],
                impact: "15min",
                impactLabel: "Pro Patient gespart"
              },
              {
                category: "Verwaltung",
                title: "Termin-Management",
                description: "Intelligentes Buchungssystem, das Ausfälle minimiert und Lücken automatisch füllt.",
                icon: Calendar,
                color: "purple",
                features: ["Auto-Recall", "Wartelisten-Management", "SMS-Erinnerungen"],
                impact: "-30%",
                impactLabel: "Terminausfälle"
              },
              {
                category: "Diagnostik",
                title: "Befund-Verarbeitung",
                description: "KI-gestützte Analyse und Klassifizierung von eingehenden Befunden und Laborberichten.",
                icon: Activity,
                color: "green",
                features: ["OCR für Faxe/Briefe", "Werte-Extraktion", "Automatische Zuordnung"],
                impact: "99%",
                impactLabel: "Erkennungsrate"
              },
              {
                category: "Datenschutz",
                title: "Compliance & Archivierung",
                description: "Automatische, rechtssichere Archivierung und Löschung von Patientendaten nach Fristen.",
                icon: Shield,
                color: "red",
                features: ["DSGVO-konform", "Audit-Logs", "Löschkonzepte"],
                impact: "100%",
                impactLabel: "Rechtssicherheit"
              },
              {
                category: "Kommunikation",
                title: "Arztbrief-Erstellung",
                description: "Automatisierte Generierung von Arztbriefen basierend auf Behandlungsdaten und Textbausteinen.",
                icon: FileText,
                color: "cyan",
                features: ["Text-Generierung", "Format-Vorlagen", "Versand-Automation"],
                impact: "50%",
                impactLabel: "Schnellere Erstellung"
              },
              {
                category: "Logistik",
                title: "Materialwirtschaft",
                description: "Automatische Nachbestellung von Verbrauchsmaterialien bei Erreichen von Meldebeständen.",
                icon: Activity,
                color: "orange",
                features: ["Bestands-Tracking", "Lieferanten-Anbindung", "Verbrauchs-Analyse"],
                impact: "0",
                impactLabel: "Engpässe"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-teal-600/90 to-emerald-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Healthcare-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und verbessern Sie die Patientenversorgung.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-xl shadow-lg">
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
