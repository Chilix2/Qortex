"use client"

import { ContentCard } from "@/components/content-card"
import { Badge } from "@/components/ui/badge"
import { Book, Code, GraduationCap, MessageSquare, Newspaper, FileText } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Lernen",
      title: "Dokumentation",
      description: "Ausführliche Anleitungen, Konzepte und Best Practices für QORTEX.",
      icon: Book,
      color: "blue" as const,
      features: ["Schnellstart-Guides", "Core Konzepte", "Tutorials"],
      ctaText: "Zur Dokumentation",
    },
    {
      category: "Entwickler",
      title: "API Referenz",
      description: "Technische Dokumentation für die QORTEX API und SDKs.",
      icon: Code,
      color: "purple" as const,
      features: ["REST API", "Python SDK", "Node.js SDK"],
      ctaText: "API Docs öffnen",
    },
    {
      category: "Community",
      title: "Community Forum",
      description: "Tauschen Sie sich mit anderen Nutzern aus und erhalten Sie Hilfe.",
      icon: MessageSquare,
      color: "orange" as const,
      features: ["Diskussionen", "Q&A", "Showcase"],
      ctaText: "Der Community beitreten",
    },
    {
      category: "Academy",
      title: "QORTEX Academy",
      description: "Interaktive Kurse und Zertifizierungen für alle Level.",
      icon: GraduationCap,
      color: "green" as const,
      features: ["Video-Kurse", "Zertifizierungen", "Workshops"],
      ctaText: "Kurse ansehen",
    },
    {
      category: "News",
      title: "Blog & Updates",
      description: "Neuigkeiten, Fallstudien und Einblicke in die Automatisierung.",
      icon: Newspaper,
      color: "cyan" as const,
      features: ["Produkt-Updates", "Success Stories", "Tech Deep Dives"],
      ctaText: "Blog lesen",
    },
    {
      category: "Changelog",
      title: "Release Notes",
      description: "Alle Änderungen und neuen Funktionen im Überblick.",
      icon: FileText,
      color: "red" as const,
      features: ["Neue Features", "Bug Fixes", "Verbesserungen"],
      ctaText: "Changelog ansehen",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Ressourcen Center
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Alles, was Sie für Ihren <span className="text-gradient-blue">Erfolg</span> brauchen
          </h1>
          <p className="text-xl text-slate-600">
            Entdecken Sie Dokumentationen, Tutorials, Community-Support und mehr, um das Beste aus QORTEX herauszuholen.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ContentCard
              key={index}
              {...resource}
              className="h-full"
            />
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-sm mt-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Nicht gefunden, was Sie suchen?</h2>
            <p className="text-slate-600">
              Unser Support-Team steht Ihnen zur Seite. Kontaktieren Sie uns direkt oder suchen Sie in unserer Wissensdatenbank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Support kontaktieren
              </button>
              <button className="bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Status Page
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
