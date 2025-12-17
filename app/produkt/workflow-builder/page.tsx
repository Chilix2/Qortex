"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointerClick, Code, GitBranch, Play, Eye, Download } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"

export default function WorkflowBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-900 font-semibold mb-6 backdrop-blur-sm">
              Visual Builder
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Visual Workflow Builder
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Erstellen Sie komplexe Workflows mit einem intuitiven Drag-and-Drop-Interface. 
              Kein Code erforderlich – aber Code-Unterstützung für maximale Flexibilität.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                Jetzt testen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Demo ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Builder-Features</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Alles, was Sie für effiziente Workflow-Erstellung brauchen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: MousePointerClick,
                color: "blue",
                title: "Drag-and-Drop Interface",
                description: "Intuitives Interface für Business-User. Ziehen Sie Nodes per Drag-and-Drop und verbinden Sie sie visuell.",
                details: [
                  "Hunderte vorgefertigter Nodes",
                  "Intelligente Verbindungsvorschläge",
                  "Kontextbezogene Hilfe",
                  "Mobile-responsive Design"
                ]
              },
              {
                icon: Code,
                color: "purple",
                title: "Code-Editor Integration",
                description: "Für Entwickler: Integrieren Sie eigenen Code direkt in Workflows. JavaScript, Python, und mehr.",
                details: [
                  "Multi-Language Support",
                  "Syntax Highlighting",
                  "Code Completion",
                  "Debugging Tools"
                ]
              },
              {
                icon: GitBranch,
                color: "cyan",
                title: "Version Control",
                description: "Git-Integration für Workflow-Versionierung. Branching, Merging, und Rollback-Funktionen.",
                details: [
                  "Git Integration",
                  "Branch Management",
                  "Change History",
                  "Collaborative Editing"
                ]
              },
              {
                icon: Play,
                color: "green",
                title: "Live Testing",
                description: "Testen Sie Workflows in Echtzeit. Debugging und Performance-Monitoring direkt im Builder.",
                details: [
                  "Real-time Execution",
                  "Step-by-Step Debugging",
                  "Performance Metrics",
                  "Error Handling"
                ]
              },
              {
                icon: Eye,
                color: "orange",
                title: "Live Preview",
                description: "Sehen Sie Änderungen sofort. Live-Vorschau zeigt Workflow-Verhalten in Echtzeit.",
                details: [
                  "Instant Preview",
                  "Data Flow Visualization",
                  "Execution Simulation",
                  "Visual Feedback"
                ]
              },
              {
                icon: Download,
                color: "red",
                title: "Export & Import",
                description: "Teilen Sie Workflows als Templates. Exportieren Sie in verschiedene Formate.",
                details: [
                  "JSON Export",
                  "Template Sharing",
                  "Import from Files",
                  "Version Migration"
                ]
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 glass-card-neon border-white/40 bg-white/20 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-xl">
                <div className="mb-6">
                  <GlassIcon icon={feature.icon} color={feature.color} size="lg" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex items-start text-slate-800 text-sm font-medium">
                      <div className="mt-1 mr-3 min-w-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Example */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Workflow-Beispiel</h2>
            <p className="text-xl text-slate-700">
              So einfach ist Workflow-Erstellung mit QORTEX
            </p>
          </div>
          <Card className="p-12 glass-card-neon bg-white/30 border-white/40 shadow-2xl backdrop-blur-xl">
            <div className="bg-white/50 rounded-2xl p-8 text-center border border-white/20">
              <div className="text-slate-500 mb-6 font-mono text-sm uppercase tracking-widest">Workflow-Visualisierung</div>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {["Trigger", "→", "Process", "→", "AI Analysis", "→", "Action"].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`px-6 py-3 rounded-lg font-semibold shadow-md ${
                      step === "→" 
                        ? "bg-transparent text-slate-400" 
                        : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                    }`}>
                      {step}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 mt-8 text-sm">
                Erstellen Sie solche Workflows in Minuten mit unserem Visual Builder
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-blue-600/90 to-indigo-700/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Bereit, Workflows zu erstellen?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Starten Sie noch heute und erleben Sie die Einfachheit des Visual Workflow Builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg">
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
