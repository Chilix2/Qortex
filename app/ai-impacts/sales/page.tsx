"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, FileText, TrendingUp, CheckCircle, Check } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"

export default function SalesPage() {
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
          <span className="text-slate-600">AImpacts</span>
          <span className="text-slate-500">/</span>
          <span className="text-blue-700 font-semibold">Sales - Call-Daten extrahieren</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-green-500/20 rounded-2xl border border-green-400/30 backdrop-blur-sm">
              <GlassIcon icon={Phone} color="green" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Sales - Call-Daten extrahieren</h1>
              <p className="text-xl text-slate-700 max-w-2xl">
                Automatische Extraktion von wichtigen Informationen aus Verkaufsgesprächen.
                KI-gestützte Transkription und Analyse für bessere Sales-Performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                step: "1",
                title: "Call-Aufzeichnung",
                description: "Automatische Aufzeichnung von Verkaufsgesprächen aus verschiedenen Quellen.",
                features: ["Call Recording", "Multi-Source Support", "Audio Quality Check", "Storage Management"],
                color: "green"
              },
              {
                step: "2",
                title: "Transkription",
                description: "KI-gestützte Transkription von Audio zu Text mit hoher Genauigkeit.",
                features: ["Speech-to-Text", "Multi-Language", "Speaker Identification", "Timestamp Generation"],
                color: "blue"
              },
              {
                step: "3",
                title: "Daten-Extraktion",
                description: "Automatische Extraktion von Schlüsselinformationen aus Gesprächen.",
                features: ["Key Points", "Action Items", "Objections", "Next Steps", "Contact Info"],
                color: "purple"
              },
              {
                step: "4",
                title: "CRM-Integration",
                description: "Automatische Speicherung extrahierter Daten im CRM-System.",
                features: ["CRM Update", "Lead Scoring", "Activity Logging", "Follow-up Reminders"],
                color: "orange"
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl bg-${item.color}-500 text-white shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-700 mb-6 text-lg">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-slate-800 font-medium">
                      <Check className={`h-5 w-5 mr-3 text-${item.color}-600`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Vollständige Dokumentation", desc: "Keine wichtigen Informationen gehen verloren", color: "blue" },
              { icon: TrendingUp, title: "Bessere Performance", desc: "Datenbasierte Insights für Sales-Optimierung", color: "green" },
              { icon: CheckCircle, title: "Zeitersparnis", desc: "Automatische Dateneingabe spart Stunden pro Woche", color: "orange" }
            ].map((benefit, i) => (
              <Card key={i} className="p-8 glass-card-neon bg-white/30 border-white/40 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="flex justify-center mb-6">
                  {/* @ts-expect-error icon prop type mismatch */}
                  <GlassIcon icon={benefit.icon} color={benefit.color} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-700">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-green-600/90 to-teal-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Call-Daten-Extraktion zu automatisieren?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und boosten Sie Ihre Sales-Performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl shadow-lg">
                Template verwenden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Demo buchen
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
