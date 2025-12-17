"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Radio, Users, Settings, TrendingUp, Check, Phone, Wifi } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function TelecomPage() {
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
          <span className="text-blue-700 font-semibold">Telekommunikation</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-cyan-500/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
              <GlassIcon icon={Radio} color="cyan" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Telekommunikation</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für Telekom-Unternehmen: Skalierbare Lösungen für Millionen von Kunden.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Users} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kundenservice</h3>
              <p className="text-slate-700">Automatisierter Support für reibungslose Kundenerlebnisse.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Settings} color="purple" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Netzwerk-Management</h3>
              <p className="text-slate-700">Automatisierte Überwachung, Optimierung und Wartung von Netzwerken.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={TrendingUp} color="green" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Abrechnung</h3>
              <p className="text-slate-700">Automatisierte, fehlerfreie Rechnungsstellung und Zahlungsabwicklung.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Telecom Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Onboarding",
                title: "Kunden-Aktivierung",
                description: "Vollautomatisierter Prozess von der Bestellung bis zur SIM-Aktivierung.",
                icon: Users,
                color: "blue",
                features: ["Ident-Check", "SIM-Provisioning", "Vertragsanlage"],
                impact: "5min",
                impactLabel: "Bis zur Aktivierung"
              },
              {
                category: "Operations",
                title: "Network Monitoring",
                description: "Proaktive Überwachung der Netzwerkinfrastruktur und automatische Störungsmeldung.",
                icon: Radio,
                color: "cyan",
                features: ["Outage Detection", "Auto-Ticketing", "Techniker-Dispatch"],
                impact: "-30%",
                impactLabel: "Downtime"
              },
              {
                category: "Service",
                title: "Störungsbehebung",
                description: "KI-gestützte Diagnose und Remote-Fixing von Kundenproblemen.",
                icon: Settings,
                color: "purple",
                features: ["Remote-Diagnose", "Self-Service", "Router-Reset"],
                impact: "60%",
                impactLabel: "First Contact Resolution"
              },
              {
                category: "Finance",
                title: "Billing & Invoicing",
                description: "Automatisierte Abrechnung von Verbindungsdaten und Zusatzdiensten.",
                icon: TrendingUp,
                color: "green",
                features: ["Usage Rating", "Rechnungslauf", "Payment Collection"],
                impact: "100%",
                impactLabel: "Genauigkeit"
              },
              {
                category: "Sales",
                title: "Cross-Selling",
                description: "KI-basierte Empfehlung von passenden Tarifen und Optionen.",
                icon: Phone,
                color: "orange",
                features: ["Next Best Action", "Churn Prediction", "Offer Management"],
                impact: "+15%",
                impactLabel: "ARPU"
              },
              {
                category: "Infrastruktur",
                title: "Rollout Management",
                description: "Koordination von Glasfaser- und 5G-Ausbauprojekten.",
                icon: Wifi,
                color: "red",
                features: ["Projekt-Tracking", "Genehmigungs-Workflow", "Ressourcen-Planung"],
                impact: "-20%",
                impactLabel: "Projektlaufzeit"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-cyan-600/90 to-blue-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Telecom-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und skalieren Sie Ihr Geschäft.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold rounded-xl shadow-lg">
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
