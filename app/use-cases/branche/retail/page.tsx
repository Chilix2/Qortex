"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, TrendingUp, Package, Users, Check, Tag, Truck } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"
import { ContentCard } from "@/components/content-card"

export default function RetailPage() {
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
          <span className="text-blue-700 font-semibold">Retail</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-pink-500/20 rounded-2xl border border-pink-400/30 backdrop-blur-sm">
              <GlassIcon icon={ShoppingBag} color="red" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">Retail</h1>
              <p className="text-xl text-slate-700 max-w-2xl">Automatisierung für den Einzelhandel: Besseres Kundenerlebnis und optimierte Prozesse.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Package} color="orange" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bestandsverwaltung</h3>
              <p className="text-slate-700">Automatisierte Lager- und Bestandsverwaltung für optimale Verfügbarkeit.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={TrendingUp} color="purple" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Commerce</h3>
              <p className="text-slate-700">Nahtlose Integration von Online-Shops und automatische Bestellabwicklung.</p>
            </Card>
            <Card className="p-8 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <GlassIcon icon={Users} color="blue" size="lg" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kundenservice</h3>
              <p className="text-slate-700">Automatisierter Kundensupport für schnelle und zufriedenstellende Lösungen.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Retail Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Logistik",
                title: "Bestellabwicklung",
                description: "Vollautomatische Verarbeitung von Webshop-Bestellungen bis zum Versandlabel.",
                icon: Truck,
                color: "blue",
                features: ["Shopify/WooCommerce Sync", "Auto-Invoicing", "Versand-Routing"],
                impact: "24/7",
                impactLabel: "Bearbeitung"
              },
              {
                category: "Bestandsmanagement",
                title: "Inventory Sync",
                description: "Echtzeit-Synchronisation von Beständen über alle Verkaufskanäle (Omnichannel).",
                icon: Package,
                color: "orange",
                features: ["Multi-Channel Sync", "Low-Stock Alerts", "Auto-Reordering"],
                impact: "0",
                impactLabel: "Überverkäufe"
              },
              {
                category: "Marketing",
                title: "Personalisierung",
                description: "KI-gestützte Produktempfehlungen und personalisierte Newsletter-Kampagnen.",
                icon: Tag,
                color: "green",
                features: ["Kaufhistorien-Analyse", "Segmentierung", "Auto-Campaigns"],
                impact: "+25%",
                impactLabel: "Conversion Rate"
              },
              {
                category: "Kundenservice",
                title: "Retouren-Management",
                description: "Automatisierter Retourenprozess inkl. Label-Erstellung und Erstattungsprüfung.",
                icon: Users,
                color: "purple",
                features: ["Self-Service Portal", "Status-Updates", "Qualitäts-Check"],
                impact: "-40%",
                impactLabel: "Support-Aufwand"
              },
              {
                category: "Pricing",
                title: "Dynamic Pricing",
                description: "Automatische Preisanpassung basierend auf Wettbewerber-Preisen und Nachfrage.",
                icon: TrendingUp,
                color: "cyan",
                features: ["Markt-Monitoring", "Regelbasierte Preise", "Marge-Schutz"],
                impact: "+15%",
                impactLabel: "Marge"
              },
              {
                category: "Einkauf",
                title: "Supplier Management",
                description: "Automatisierte Lieferantenkommunikation und Bestellübermittlung.",
                icon: ShoppingBag,
                color: "red",
                features: ["Bestell-Automation", "Liefertermin-Tracking", "Rechnungs-Abgleich"],
                impact: "5h",
                impactLabel: "Pro Woche gespart"
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-pink-600/90 to-rose-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Retail-Prozesse zu automatisieren?</h2>
            <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und maximieren Sie Ihren Umsatz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50 font-bold rounded-xl shadow-lg">
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
