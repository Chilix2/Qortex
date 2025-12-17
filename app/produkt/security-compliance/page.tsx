"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, FileCheck, Eye, CheckCircle, Award } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"

export default function SecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-900 font-semibold mb-6 backdrop-blur-sm">
              Security & Compliance
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Security & Compliance
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Enterprise-Grade Sicherheit für Ihre Workflows. DSGVO-konform, ISO 27001 zertifiziert 
              und für kritische Geschäftsprozesse entwickelt.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                Security Whitepaper
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Compliance-Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Zertifizierungen & Standards</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              QORTEX erfüllt die höchsten Sicherheits- und Compliance-Standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { name: "ISO 27001", desc: "Information Security Management" },
              { name: "DSGVO", desc: "EU-Datenschutz-Grundverordnung" },
              { name: "SOC 2 Type II", desc: "Security & Availability Controls" },
              { name: "GDPR", desc: "General Data Protection Regulation" }
            ].map((cert, i) => (
              <Card key={i} className="p-6 text-center glass-card-neon border-white/40 bg-white/20 hover:bg-white/30 hover:scale-[1.05] transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col items-center">
                <div className="mb-4">
                  <Award className="h-12 w-12 text-blue-600 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-slate-700 text-sm">{cert.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sicherheits-Features</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Umfassende Sicherheitsmaßnahmen auf allen Ebenen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                color: "blue",
                title: "End-to-End Verschlüsselung",
                description: "Alle Daten werden verschlüsselt übertragen und gespeichert. AES-256 Verschlüsselung für maximale Sicherheit.",
                features: ["TLS 1.3 für Transport", "AES-256 für Storage", "Encryption at Rest", "Key Management"]
              },
              {
                icon: Shield,
                color: "green",
                title: "Identity & Access Management",
                description: "Robuste Authentifizierung und Autorisierung mit Multi-Factor Authentication und Role-Based Access Control.",
                features: ["SSO Support", "MFA/2FA", "RBAC", "OAuth 2.0"]
              },
              {
                icon: Eye,
                color: "purple",
                title: "Audit Logging",
                description: "Vollständige Nachverfolgbarkeit aller Aktionen. Compliance-ready Audit Logs für alle Workflows.",
                features: ["Complete Audit Trail", "Immutable Logs", "Real-time Monitoring", "Compliance Reports"]
              },
              {
                icon: FileCheck,
                color: "cyan",
                title: "Data Privacy",
                description: "DSGVO-konforme Datenverarbeitung. Datenresidenz, Right to be Forgotten und mehr.",
                features: ["Data Residency", "Right to Deletion", "Privacy by Design", "Data Minimization"]
              },
              {
                icon: CheckCircle,
                color: "orange",
                title: "Network Security",
                description: "Mehrschichtige Netzwerk-Sicherheit mit Firewalls, DDoS-Schutz und Intrusion Detection.",
                features: ["DDoS Protection", "WAF", "Network Segmentation", "VPN Support"]
              },
              {
                icon: Shield,
                color: "red",
                title: "Vulnerability Management",
                description: "Regelmäßige Security Audits, Penetration Testing und automatische Updates.",
                features: ["Regular Audits", "Pen Testing", "Auto Updates", "Bug Bounty Program"]
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6">
                  <GlassIcon icon={feature.icon} color={feature.color} size="lg" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-start text-slate-800 text-sm font-medium">
                      <div className="mt-1 mr-3 min-w-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Compliance & Regulierung</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              QORTEX unterstützt Sie bei der Einhaltung aller relevanten Vorschriften
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "DSGVO/GDPR", items: ["Data Processing Agreements", "Privacy Impact Assessments", "Data Subject Rights"] },
              { name: "ISO Standards", items: ["ISO 27001", "ISO 9001", "ISO 14001"] },
              { name: "Industry Specific", items: ["HIPAA (Healthcare)", "PCI DSS (Payment)", "SOX (Finance)"] }
            ].map((compliance, i) => (
              <Card key={i} className="p-6 glass-card-neon bg-white/30 border-white/40 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{compliance.name}</h3>
                <ul className="space-y-3">
                  {compliance.items.map((item, j) => (
                    <li key={j} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-blue-600/90 to-indigo-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Haben Sie Fragen zur Sicherheit?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Unser Security-Team steht Ihnen für alle Fragen zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
                Security Whitepaper anfordern
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
