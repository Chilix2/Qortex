"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Brain, Settings, Database, Check, Code, Cloud } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import { ContentCard } from "@/components/content-card"

export default function PlatformOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-900 font-semibold mb-6 backdrop-blur-sm">
              Platform Overview
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Die Automatisierungs-Plattform für <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Enterprise-Anforderungen</span>
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Verbinden Sie Code und No-Code nahtlos. Erstellen Sie komplexe Workflows, integrieren Sie KI-Agenten und skalieren Sie Ihre Prozesse sicher und zuverlässig.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Demo ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Plattform-Features</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Alles, was Sie für moderne Workflow-Automatisierung benötigen, in einer integrierten Plattform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Visual Builder",
                title: "No-Code Workflow Builder",
                description: "Erstellen Sie komplexe Workflows per Drag-and-Drop. Perfekt für Business-Teams und schnelle Prototypen.",
                icon: Zap,
                color: "blue",
                features: ["500+ Nodes", "Live Preview", "Versioning", "Templates"],
                impact: "10x",
                impactLabel: "Schnellere Entwicklung",
              },
              {
                category: "KI-Integration",
                title: "Native KI-Power",
                description: "Integrieren Sie LLMs wie GPT-4 und Claude direkt in Ihre Prozesse. Mit RAG für firmeneigenes Wissen.",
                icon: Brain,
                color: "purple",
                features: ["Multi-Model Support", "RAG Pipeline", "Vector DB Sync"],
                impact: "Smart",
                impactLabel: "Intelligente Prozesse",
              },
              {
                category: "Connectivity",
                title: "Universal Connectors",
                description: "Verbinden Sie jedes Tool per API, Webhook oder direktem Connector. Keine Datensilos mehr.",
                icon: Database,
                color: "cyan",
                features: ["REST/GraphQL", "Webhooks", "Database Sync", "Custom APIs"],
                impact: "100%",
                impactLabel: "Daten-Konnektivität",
              },
              {
                category: "Security",
                title: "Enterprise Grade Security",
                description: "Sicherheit auf Bankenniveau. DSGVO-konform, verschlüsselt und auditiert.",
                icon: Shield,
                color: "green",
                features: ["SSO/MFA", "Audit Logs", "RBAC", "On-Prem Option"],
                impact: "ISO",
                impactLabel: "27001 Zertifiziert",
              },
              {
                category: "Infrastructure",
                title: "Flexible Deployment",
                description: "Cloud, Hybrid oder On-Premise. Skaliert automatisch mit Ihren Anforderungen.",
                icon: Cloud,
                color: "orange",
                features: ["Kubernetes Ready", "Docker Support", "High Availability", "Auto-Scaling"],
                impact: "99.99%",
                impactLabel: "Uptime SLA",
              },
              {
                category: "Operations",
                title: "Monitoring & Insights",
                description: "Behalten Sie die volle Kontrolle. Echtzeit-Monitoring, Error-Tracking und detaillierte Analytics.",
                icon: Settings,
                color: "red",
                features: ["Real-time Dashboards", "Custom Alerts", "Execution Logs", "Performance Metrics"],
                impact: "24/7",
                impactLabel: "Volle Transparenz",
              }
            ].map((feature, i) => (
              <ContentCard
                key={i}
                // @ts-expect-error icon prop type mismatch
                category={feature.category}
                title={feature.title}
                description={feature.description}
                // @ts-expect-error icon prop type mismatch
                icon={feature.icon}
                // @ts-expect-error color prop type mismatch
                color={feature.color}
                features={feature.features}
                impact={feature.impact}
                impactLabel={feature.impactLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Plattform-Architektur</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Skalierbar, zuverlässig und für Enterprise-Anforderungen entwickelt
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: Zap,
                color: "blue",
                title: "Execution Engine", 
                desc: "Hochperformante Workflow-Engine mit Multi-Threading und Queue-Management. Unterstützt Millionen von Workflow-Executions pro Tag." 
              },
              { 
                icon: Code,
                color: "purple",
                title: "API Gateway", 
                desc: "RESTful APIs für alle Plattform-Funktionen. GraphQL Support für flexible Datenabfragen. Webhook-Endpoints für externe Integrationen." 
              },
              { 
                icon: Database,
                color: "cyan",
                title: "Data Layer", 
                desc: "Skalierbare Datenbank-Architektur mit PostgreSQL, Redis für Caching und Vector Database für KI-Features. Automatische Backups und Replikation." 
              },
              { 
                icon: Settings,
                color: "orange",
                title: "Integration Hub", 
                desc: "Zentraler Hub für alle Connectors. OAuth 2.0 Management, Credential Encryption und Connection Pooling für optimale Performance." 
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">
                  <GlassIcon icon={item.icon} color={item.color} size="md" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-blue-600/90 to-indigo-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Bereit, die QORTEX-Plattform zu erleben?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Starten Sie noch heute und entdecken Sie die Möglichkeiten der Workflow-Automatisierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Kontakt aufnehmen
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
