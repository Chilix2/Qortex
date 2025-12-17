"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Check, Zap, Shield, Clock, Mail, MessageSquare, Briefcase, Code, BarChart, Brain, Globe, Smartphone, TrendingUp } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import { ContentCard } from "@/components/content-card"

export default function IntegrationenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-900 font-semibold mb-6 backdrop-blur-sm">
              Integrations
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Integration Ecosystem
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Verbinden Sie Ihre gesamte Tool-Landschaft nahtlos mit QORTEX. Über 500+ vorgefertigte Integrationen für
              alle wichtigen Business-Tools.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Integrationen suchen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                color: "orange",
                title: "Plug & Play",
                description: "Integration in wenigen Minuten ohne Code",
              },
              {
                icon: Shield,
                color: "green",
                title: "Enterprise Security",
                description: "SSL, OAuth 2.0 und Datenverschlüsselung",
              },
              {
                icon: Clock,
                color: "blue",
                title: "Echtzeit-Sync",
                description: "Daten werden in Millisekunden synchronisiert",
              },
              {
                icon: Check,
                color: "purple",
                title: "500+ Apps",
                description: "Alle wichtigen Business-Tools verfügbar",
              },
            ].map((benefit, i) => (
              <Card key={i} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">
                  <GlassIcon icon={benefit.icon} color={benefit.color} size="md" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Beliebteste Integrationen</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">Die meistgenutzten Tools unserer Kunden</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            {[
              "Airtable",
              "Google Sheets",
              "Slack",
              "Teams",
              "DocuSign",
              "SAP",
              "AutoCAD",
              "Revit",
              "OpenAI",
              "Calendar",
              "Gmail",
              "Dropbox",
            ].map((tool, i) => (
              <Card
                key={i}
                className="p-4 glass-card-neon bg-white/30 border-white/40 flex flex-col items-center justify-center text-center hover:bg-white/50 hover:scale-[1.05] transition-all cursor-pointer shadow-md"
              >
                <div className="w-10 h-10 bg-white/50 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <Database className="h-5 w-5 text-slate-600" />
                </div>
                <div className="font-semibold text-slate-800 text-sm">{tool}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="bg-white/30 hover:bg-white/50 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm px-8">
              Alle 500+ Integrationen ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Integrationen nach Kategorie</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Entdecken Sie, wie QORTEX Ihre Lieblingstools verbindet und Prozesse automatisiert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Produktivität",
                title: "Slack & Teams Automation",
                description: "Automatisieren Sie Benachrichtigungen, erstellen Sie Tasks aus Nachrichten und halten Sie Ihr Team synchron.",
                icon: MessageSquare,
                color: "blue",
                features: ["Automatische Status-Updates", "Meeting-Zusammenfassungen", "Cross-Platform Sync"],
                impact: "2h/Tag",
                impactLabel: "Zeitersparnis",
              },
              {
                category: "Datenbanken",
                title: "Centralized Data Hub",
                description: "Synchronisieren Sie Daten zwischen Airtable, PostgreSQL und Google Sheets in Echtzeit ohne manuelle Eingabe.",
                icon: Database,
                color: "green",
                features: ["Bi-direktionale Sync", "Automatische Backups", "Daten-Validierung"],
                impact: "100%",
                impactLabel: "Datenkonsistenz",
              },
              {
                category: "CRM & Sales",
                title: "Salesforce & HubSpot Sync",
                description: "Halten Sie Kundendaten synchron. Erstellen Sie Deals automatisch und benachrichtigen Sie Sales-Teams bei Abschlüssen.",
                icon: Briefcase,
                color: "orange",
                features: ["Lead-Enrichment", "Deal-Pipeline Automation", "Automatisches Reporting"],
                impact: "25%",
                impactLabel: "Mehr Abschlüsse",
              },
              {
                category: "Development",
                title: "Git & Jira Workflows",
                description: "Verbinden Sie Code-Commits mit Jira-Tickets. Automatisieren Sie Release-Notes und Deployment-Benachrichtigungen.",
                icon: Code,
                color: "purple",
                features: ["Auto-Ticket Updates", "CI/CD Trigger", "Bug-Tracking Automation"],
                impact: "40%",
                impactLabel: "Schnellere Deployments",
              },
              {
                category: "Marketing",
                title: "Campaign Automation",
                description: "Verbinden Sie Mailchimp, Meta Ads und Analytics. Personalisieren Sie Kampagnen basierend auf Nutzerverhalten.",
                icon: TrendingUp,
                color: "red",
                features: ["Lead-Scoring", "Multi-Channel Kampagnen", "ROI-Tracking"],
                impact: "3x",
                impactLabel: "Höhere Conversion",
              },
              {
                category: "AI & Machine Learning",
                title: "LLM Integration",
                description: "Integrieren Sie OpenAI und Anthropic in Ihre Prozesse. Automatisieren Sie Support-Antworten und Content-Erstellung.",
                icon: Brain,
                color: "cyan",
                features: ["Intelligente Chatbots", "Dokumenten-Analyse", "Automatisierte Übersetzungen"],
                impact: "-70%",
                impactLabel: "Support-Kosten",
              },
            ].map((item, i) => (
              <ContentCard
                key={i}
                // @ts-expect-error icon prop type mismatch
                category={item.category}
                title={item.title}
                description={item.description}
                // @ts-expect-error icon prop type mismatch
                icon={item.icon}
                // @ts-expect-error color prop type mismatch
                color={item.color}
                features={item.features}
                impact={item.impact}
                impactLabel={item.impactLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-cyan-600/90 to-blue-600/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Bereit, Ihre Tools zu verbinden?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Starten Sie jetzt kostenlos und automatisieren Sie Ihre Workflows in Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold rounded-xl shadow-lg">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Integrationen durchsuchen
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
