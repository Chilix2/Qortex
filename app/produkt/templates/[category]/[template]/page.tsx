"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Download, 
  Star, 
  ArrowLeft, 
  Play, 
  Code, 
  Users, 
  Clock,
  CheckCircle,
  ExternalLink,
  Copy,
  Heart
} from "lucide-react";
import { GlassIcon } from "@/components/ui/glass-icon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// Template data - in a real app this would come from a database
const templates = [
  { 
    category: "Produktivität", 
    subcategory: "Email Management", 
    name: "Email zu Task", 
    description: "Automatisch Tasks aus E-Mails erstellen", 
    downloads: 1250, 
    rating: 4.8, 
    slug: "email-zu-task",
    longDescription: "Dieses Template automatisiert die Erstellung von Tasks aus eingehenden E-Mails. Es analysiert E-Mail-Inhalte, extrahiert wichtige Informationen und erstellt automatisch strukturierte Aufgaben in Ihrem Projektmanagement-System.",
    features: [
      "Automatische E-Mail-Analyse",
      "Intelligente Prioritätserkennung", 
      "Integration mit gängigen Task-Management-Tools",
      "Anpassbare Regeln und Filter",
      "Benachrichtigungen bei neuen Tasks"
    ],
    workflow: [
      { step: 1, title: "E-Mail empfangen", description: "Neue E-Mail wird im Posteingang erkannt" },
      { step: 2, title: "Inhalt analysieren", description: "KI analysiert E-Mail-Inhalt und Priorität" },
      { step: 3, title: "Task erstellen", description: "Automatische Erstellung einer strukturierten Aufgabe" },
      { step: 4, title: "Zuweisen", description: "Task wird dem entsprechenden Team-Mitglied zugewiesen" },
      { step: 5, title: "Benachrichtigung", description: "Benachrichtigung über neue Aufgabe wird gesendet" }
    ],
    integrations: ["Gmail", "Outlook", "Trello", "Asana", "Jira", "Slack"],
    setupTime: "5 Minuten",
    difficulty: "Einfach",
    author: "QORTEX Team",
    lastUpdated: "2024-12-15"
  },
  { 
    category: "KI & Automation", 
    subcategory: "Document Processing", 
    name: "Document Analysis", 
    description: "KI-gestützte Dokumentenanalyse", 
    downloads: 2100, 
    rating: 4.9, 
    slug: "document-analysis",
    longDescription: "Erweiterte KI-gestützte Dokumentenanalyse, die automatisch Inhalte extrahiert, kategorisiert und wichtige Informationen identifiziert. Perfekt für die Verarbeitung großer Dokumentenmengen.",
    features: [
      "OCR-Texterkennung",
      "Automatische Kategorisierung",
      "Entitätserkennung (Namen, Daten, Beträge)",
      "Sentiment-Analyse",
      "Mehrsprachige Unterstützung"
    ],
    workflow: [
      { step: 1, title: "Dokument hochladen", description: "PDF, Word oder Bilddatei wird hochgeladen" },
      { step: 2, title: "OCR-Verarbeitung", description: "Text wird aus dem Dokument extrahiert" },
      { step: 3, title: "KI-Analyse", description: "Inhalt wird analysiert und kategorisiert" },
      { step: 4, title: "Datenextraktion", description: "Wichtige Informationen werden identifiziert" },
      { step: 5, title: "Ergebnisse speichern", description: "Analysierte Daten werden strukturiert gespeichert" }
    ],
    integrations: ["Google Drive", "Dropbox", "SharePoint", "Box", "OneDrive"],
    setupTime: "10 Minuten",
    difficulty: "Mittel",
    author: "QORTEX AI Team",
    lastUpdated: "2024-12-18"
  }
  // Add more templates as needed...
];

interface PageProps {
  params: Promise<{ category: string; template: string }>;
}

export default async function TemplatePage({ params }: PageProps) {
  const { category, template: templateSlug } = await params;
  const decodedCategory = decodeURIComponent(category);
  
  // Find the template
  const template = templates.find(t => 
    t.category.toLowerCase() === decodedCategory.toLowerCase() && 
    t.slug === templateSlug
  );
  
  if (!template) {
    notFound();
  }
  
  return <TemplatePageClient template={template} />;
}

function TemplatePageClient({ template }: { template: typeof templates[0] }) {
  const [activeTab, setActiveTab] = useState<"overview" | "workflow" | "integrations">("overview");
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/produkt/templates" className="text-slate-600 hover:text-slate-900 transition-colors">
                Templates
              </Link>
              <span className="text-slate-400">/</span>
              <Link href={`/produkt/templates/${encodeURIComponent(template.category)}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                {template.category}
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">{template.name}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Link href={`/produkt/templates/${encodeURIComponent(template.category)}`}>
                <Button variant="outline" size="sm" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zu {template.category}
                </Button>
              </Link>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-900 text-sm font-semibold backdrop-blur-sm">
                {template.subcategory}
              </span>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                  {template.name}
                </h1>
                <p className="text-xl text-slate-800 mb-6 leading-relaxed">
                  {template.longDescription}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold">{template.downloads.toLocaleString()}</span>
                    <span className="text-slate-600">Downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{template.rating}</span>
                    <span className="text-slate-600">Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold">{template.setupTime}</span>
                    <span className="text-slate-600">Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold">{template.difficulty}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Template verwenden
                  </Button>
                  <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Demo ansehen
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Template Preview */}
              <div className="w-80 hidden lg:block">
                <Card className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <GlassIcon icon={Code} color="blue" size="xl" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Template Vorschau</h3>
                  <p className="text-sm text-slate-600">
                    Workflow-Diagramm und Konfiguration
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <section className="py-8 px-6 border-b border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-1 bg-white/20 p-1 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Übersicht
            </button>
            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "workflow"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Workflow
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "integrations"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Integrationen
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Features */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Features</h3>
                <div className="space-y-4">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Template Info */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Template Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Autor:</span>
                    <span className="font-medium text-slate-900">{template.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Letzte Aktualisierung:</span>
                    <span className="font-medium text-slate-900">{template.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Schwierigkeit:</span>
                    <span className="font-medium text-slate-900">{template.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Setup-Zeit:</span>
                    <span className="font-medium text-slate-900">{template.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Kategorie:</span>
                    <span className="font-medium text-slate-900">{template.category}</span>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Workflow-Schritte</h3>
              <div className="space-y-6">
                {template.workflow.map((step, index) => (
                  <Card key={step.step} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-700">{step.description}</p>
                      </div>
                    </div>
                    {index < template.workflow.length - 1 && (
                      <div className="ml-5 mt-4">
                        <div className="w-px h-6 bg-slate-300"></div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Unterstützte Integrationen</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {template.integrations.map((integration, index) => (
                  <Card key={index} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg hover:bg-white/30 transition-all cursor-pointer">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <ExternalLink className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{integration}</h4>
                      <p className="text-sm text-slate-600">Nahtlose Integration verfügbar</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-white/20 border-white/30 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Bereit, dieses Template zu verwenden?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Starten Sie in wenigen Minuten mit diesem bewährten Workflow-Template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Template herunterladen
              </Button>
              <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                <Copy className="mr-2 h-5 w-5" />
                Link kopieren
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
