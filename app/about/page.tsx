"use client"

import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Über Uns
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Wir demokratisieren <span className="text-gradient-blue">Prozessautomatisierung</span>
          </h1>
          <p className="text-xl text-slate-600">
            QORTEX wurde gegründet, um Unternehmen jeder Größe den Zugang zu leistungsstarken, KI-getriebenen Workflows zu ermöglichen.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Unsere Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Wir glauben, dass Menschen nicht für Roboter-Arbeit gemacht sind. Unsere Mission ist es, repetitive Aufgaben zu eliminieren, damit sich Teams auf Kreativität, Strategie und menschliche Beziehungen konzentrieren können.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">Fokus</h3>
                  <p className="text-sm text-slate-600">Wir lösen echte Business-Probleme, keine theoretischen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-purple-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">Empowerment</h3>
                  <p className="text-sm text-slate-600">Wir geben jedem Mitarbeiter die Tools an die Hand, um Prozesse zu verbessern.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-80 flex items-center justify-center">
            <span className="text-9xl">🚀</span>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto text-blue-600">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">Kundenliebe</h3>
            <p className="text-sm text-slate-600">Wir bauen Produkte, die unsere Kunden lieben und die ihnen echten Mehrwert bieten.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
            <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto text-green-600">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">Nachhaltigkeit</h3>
            <p className="text-sm text-slate-600">Wir setzen auf langfristige Lösungen und nachhaltiges Wachstum statt schneller Hacks.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
            <div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto text-orange-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">Teamwork</h3>
            <p className="text-sm text-slate-600">Große Probleme löst man nicht allein. Wir arbeiten kollaborativ und transparent.</p>
          </div>
        </div>

      </div>
    </main>
  )
}
