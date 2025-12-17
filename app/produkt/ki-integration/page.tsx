"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Sparkles, MessageSquare, FileText, Zap, Check, Image as ImageIcon } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"
import { ContentCard } from "@/components/content-card"

export default function KIIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-900 font-semibold mb-6 backdrop-blur-sm">
              AI Integration
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              KI-Integration
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Nutzen Sie die Kraft moderner KI-Modelle direkt in Ihren Workflows. 
              Von OpenAI bis Anthropic – alle führenden LLMs in einer Plattform.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-500/20 transition-all hover:scale-105">
                Jetzt starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Models */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Unterstützte KI-Modelle</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Integrieren Sie die besten KI-Modelle der Welt in Ihre Workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "OpenAI", models: ["GPT-4", "GPT-4 Turbo", "GPT-3.5", "DALL-E", "Whisper"] },
              { name: "Anthropic", models: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku"] },
              { name: "Google", models: ["Gemini Pro", "Gemini Ultra", "PaLM 2"] },
              { name: "Meta", models: ["Llama 2", "Llama 3", "Code Llama"] },
              { name: "Mistral AI", models: ["Mistral Large", "Mixtral", "Mistral 7B"] },
              { name: "Cohere", models: ["Command", "Embed", "Rerank"] }
            ].map((provider, i) => (
              <Card key={i} className="p-6 glass-card-neon border-white/40 bg-white/20 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{provider.name}</h3>
                <ul className="space-y-2">
                  {provider.models.map((model, j) => (
                    <li key={j} className="flex items-center text-slate-700 font-medium">
                      <Check className="h-4 w-4 text-purple-600 mr-2" />
                      {model}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">KI-Anwendungsfälle</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              So nutzen Unternehmen KI in ihren Workflows für messbare Ergebnisse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Document Processing",
                title: "Rechnungs-Automatisierung",
                description: "Extrahiert automatisch Daten aus PDF-Rechnungen und gleicht sie mit Bestellungen ab. Keine manuelle Dateneingabe mehr.",
                icon: FileText,
                color: "blue",
                features: ["OCR & Daten-Extraktion", "SAP/DATEV Integration", "Automatische Freigabe-Workflows"],
                impact: "99%",
                impactLabel: "Weniger Fehler",
              },
              {
                category: "Text Generation",
                title: "Auto-Support Agent",
                description: "Beantwortet Kundenanfragen automatisch basierend auf Ihrer Knowledge Base. Eskaliert komplexe Fälle an Menschen.",
                icon: MessageSquare,
                color: "purple",
                features: ["24/7 Verfügbarkeit", "Multi-Language Support", "Sentiment-Analyse"],
                impact: "-70%",
                impactLabel: "Ticket-Volumen",
              },
              {
                category: "Image Processing",
                title: "Visuelle Qualitätskontrolle",
                description: "Analysiert Produktbilder auf Defekte und klassifiziert sie automatisch. Integriert in Produktionsstraßen.",
                icon: ImageIcon,
                color: "orange",
                features: ["Defekt-Erkennung", "Automatische Klassifizierung", "Echtzeit-Alerts"],
                impact: "10x",
                impactLabel: "Schnellere Prüfung",
              },
              {
                category: "Data Analysis",
                title: "Predictive Analytics",
                description: "Analysiert historische Verkaufsdaten und erstellt präzise Umsatzprognosen für die Ressourcenplanung.",
                icon: Brain,
                color: "cyan",
                features: ["Trend-Erkennung", "Anomaly Detection", "Automatisches Reporting"],
                impact: "95%",
                impactLabel: "Prognose-Genauigkeit",
              },
              {
                category: "Content Generation",
                title: "Marketing Automation",
                description: "Erstellt personalisierte Produktbeschreibungen und Social Media Posts für tausende SKUs automatisch.",
                icon: Sparkles,
                color: "red",
                features: ["SEO-Optimierung", "Brand Voice Anpassung", "Multi-Channel Distribution"],
                impact: "40h",
                impactLabel: "Gespart pro Woche",
              },
              {
                category: "Intelligent Routing",
                title: "Smart Email Dispatcher",
                description: "Klassifiziert eingehende E-Mails und leitet sie sofort an die richtige Abteilung oder Person weiter.",
                icon: Zap,
                color: "green",
                features: ["Inhaltliche Analyse", "Priorisierung", "Auto-Reply Generierung"],
                impact: "0min",
                impactLabel: "Wartezeit",
              },
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

      {/* RAG Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">RAG (Retrieval-Augmented Generation)</h2>
              <p className="text-lg text-slate-800 mb-6 leading-relaxed">
                Verbessern Sie KI-Antworten mit Ihren eigenen Daten. RAG ermöglicht es, LLMs mit 
                firmenspezifischen Informationen zu erweitern.
              </p>
              <ul className="space-y-4">
                {[
                  "Vector Database Integration",
                  "Semantic Search",
                  "Context Injection",
                  "Source Attribution"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium text-lg">
                    <Check className="h-6 w-6 text-purple-600 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 glass-card-neon bg-gradient-to-br from-purple-100/50 to-indigo-100/50 border-white/40 shadow-xl backdrop-blur-md">
              <div className="text-center">
                <Brain className="h-32 w-32 text-purple-600/80 mx-auto mb-6 drop-shadow-lg" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">KI-Powered Workflows</h3>
                <p className="text-slate-700 leading-relaxed">
                  Kombinieren Sie die Kraft von LLMs mit Ihren Workflows für intelligente Automatisierung.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-purple-600/90 to-indigo-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Bereit, KI in Ihre Workflows zu integrieren?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Starten Sie noch heute und erleben Sie die Möglichkeiten der KI-gestützten Automatisierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-bold rounded-xl shadow-lg">
                Kostenlos starten
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
