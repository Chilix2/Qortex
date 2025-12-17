"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Check, Lock } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import Link from "next/link"

export default function SecOpsPage() {
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
          <span className="text-blue-700 font-semibold">SecOps - Email-Sicherheit</span>
        </div>
      </div>

      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="p-6 bg-red-500/20 rounded-2xl border border-red-400/30 backdrop-blur-sm">
              <GlassIcon icon={Lock} color="red" size="xl" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-slate-900">SecOps - Email-Sicherheit</h1>
              <p className="text-xl text-slate-700 max-w-2xl">
                Automatische Erkennung und Abwehr von Phishing-Angriffen, Malware und verdächtigen E-Mails.
                KI-gestützte Analyse für proaktiven Schutz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                step: "1",
                title: "Phishing-Erkennung",
                description: "KI-gestützte Erkennung von Phishing-Versuchen durch Analyse von Inhalt, Links und Absender.",
                features: ["Content Analysis", "Link Scanning", "Sender Verification", "URL Reputation Check"],
                color: "red"
              },
              {
                step: "2",
                title: "Malware-Detection",
                description: "Automatische Erkennung von Malware in Anhängen und verdächtigen Dateien.",
                features: ["Attachment Scanning", "File Type Analysis", "Sandbox Testing", "Threat Intelligence"],
                color: "orange"
              },
              {
                step: "3",
                title: "Quarantäne & Blocking",
                description: "Automatische Quarantäne verdächtiger E-Mails und Blockierung bekannter Bedrohungen.",
                features: ["Auto-Quarantine", "Blacklist Management", "Whitelist Exceptions", "Admin Notifications"],
                color: "purple"
              },
              {
                step: "4",
                title: "Incident Response",
                description: "Automatisierte Reaktion auf Sicherheitsvorfälle mit Eskalation und Reporting.",
                features: ["Alert Generation", "Incident Creation", "Automated Response", "Compliance Reporting"],
                color: "blue"
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
              { icon: Shield, title: "Proaktiver Schutz", desc: "Erkennung von Bedrohungen bevor sie Schaden anrichten", color: "blue" },
              { icon: AlertTriangle, title: "Reduzierte False Positives", desc: "KI reduziert Fehlalarme durch präzise Analyse", color: "orange" },
              { icon: CheckCircle, title: "Compliance", desc: "Automatische Einhaltung von Sicherheitsrichtlinien", color: "green" }
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
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-red-600/90 to-rose-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Email-Sicherheit zu automatisieren?</h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">Starten Sie noch heute mit QORTEX und schützen Sie Ihr Unternehmen.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 font-bold rounded-xl shadow-lg">
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
