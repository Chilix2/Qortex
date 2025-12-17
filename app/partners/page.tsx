"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Handshake, Code2, LineChart } from "lucide-react"

export default function PartnersPage() {
  const benefits = [
    {
      title: "Revenue Share",
      description: "Verdienen Sie attraktive Provisionen für jeden vermittelten Kunden.",
      icon: LineChart,
    },
    {
      title: "Co-Marketing",
      description: "Gemeinsame Webinare, Case Studies und Marketing-Kampagnen.",
      icon: Handshake,
    },
    {
      title: "Tech Support",
      description: "Direkter Zugang zu unseren Entwicklern und Priority Support.",
      icon: Code2,
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 border-purple-200 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
            Partnerprogramm
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Wachsen Sie gemeinsam mit <span className="text-gradient-purple">QORTEX</span>
          </h1>
          <p className="text-xl text-slate-600">
            Werden Sie Partner und helfen Sie Unternehmen dabei, ihre Prozesse zu automatisieren. Wir suchen Technologie- und Consulting-Partner.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
              Partner werden
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto text-purple-600">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Types */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl font-bold">Consulting Partner</h2>
              <p className="text-slate-300">
                Für Beratungsunternehmen und Agenturen, die Automatisierungsstrategien für ihre Kunden umsetzen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  Umfassendes Onboarding & Training
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  Dedizierter Partner Manager
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  Zugang zu Demo-Umgebungen
                </li>
              </ul>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 mt-4">
                Mehr erfahren
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl font-bold">Technology Partner</h2>
              <p className="text-blue-100">
                Für Softwareanbieter, die QORTEX in ihre Plattform integrieren oder Connectors bauen möchten.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  API & SDK Access
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  Marketplace Listing
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  Technischer Deep-Dive Support
                </li>
              </ul>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 mt-4">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
