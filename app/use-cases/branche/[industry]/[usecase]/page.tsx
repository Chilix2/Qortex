"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  Target,
  Zap
} from "lucide-react";
import { GlassIcon } from "@/components/ui/glass-icon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// Use case data - in a real app this would come from a database
const useCases = [
  {
    industry: "banking",
    industryName: "Banking & Finanzdienstleistungen",
    slug: "loan-processing-automation",
    title: "Automatisierte Kreditbearbeitung",
    description: "Vollautomatisierte Bearbeitung von Kreditanträgen mit KI-gestützter Risikoanalyse",
    longDescription: "Revolutionieren Sie Ihre Kreditbearbeitung mit intelligenter Automatisierung. Unser System analysiert Kreditanträge automatisch, führt Bonitätsprüfungen durch und erstellt Risikoberichte - alles in wenigen Minuten statt Tagen.",
    benefits: [
      "95% Reduzierung der Bearbeitungszeit",
      "Automatische Dokumentenvalidierung",
      "KI-gestützte Risikoanalyse",
      "Compliance-konforme Prozesse",
      "Nahtlose Integration in bestehende Systeme"
    ],
    metrics: {
      timeReduction: "95%",
      costSavings: "€2.5M",
      accuracyImprovement: "99.2%",
      customerSatisfaction: "4.8/5"
    },
    workflow: [
      { step: 1, title: "Antrag eingehen", description: "Digitaler Kreditantrag wird automatisch erfasst" },
      { step: 2, title: "Dokumentenprüfung", description: "KI validiert alle erforderlichen Dokumente" },
      { step: 3, title: "Bonitätsprüfung", description: "Automatische Abfrage bei Auskunfteien" },
      { step: 4, title: "Risikoanalyse", description: "ML-Algorithmus bewertet Kreditrisiko" },
      { step: 5, title: "Entscheidung", description: "Automatische Genehmigung oder Weiterleitung" }
    ],
    integrations: ["SAP Banking", "Temenos", "SCHUFA", "Creditreform", "Core Banking"],
    implementationTime: "4-6 Wochen",
    difficulty: "Komplex",
    roi: "320%",
    category: "Finanzautomatisierung"
  },
  {
    industry: "healthcare",
    industryName: "Healthcare",
    slug: "patient-data-management",
    title: "Intelligente Patientendatenverwaltung",
    description: "Automatisierte Erfassung und Verwaltung von Patientendaten mit KI-Unterstützung",
    longDescription: "Optimieren Sie Ihre Patientendatenverwaltung mit intelligenter Automatisierung. Unser System erfasst Patientendaten automatisch, erstellt digitale Akten und unterstützt bei der Diagnose durch KI-Analyse.",
    benefits: [
      "80% weniger manuelle Dateneingabe",
      "Automatische Aktenführung",
      "KI-gestützte Diagnosehilfe",
      "GDPR-konforme Datenverwaltung",
      "Nahtlose Arztpraxis-Integration"
    ],
    metrics: {
      timeReduction: "80%",
      costSavings: "€1.8M",
      accuracyImprovement: "97.5%",
      customerSatisfaction: "4.9/5"
    },
    workflow: [
      { step: 1, title: "Patientenanmeldung", description: "Automatische Erfassung der Patientendaten" },
      { step: 2, title: "Datenvalidierung", description: "KI prüft Vollständigkeit und Korrektheit" },
      { step: 3, title: "Aktenanlage", description: "Digitale Patientenakte wird erstellt" },
      { step: 4, title: "Terminplanung", description: "Automatische Terminzuweisung basierend auf Priorität" },
      { step: 5, title: "Nachverfolgung", description: "Automatische Erinnerungen und Follow-ups" }
    ],
    integrations: ["Epic", "Cerner", "Allscripts", "HL7 FHIR", "DICOM"],
    implementationTime: "6-8 Wochen",
    difficulty: "Mittel",
    roi: "280%",
    category: "Patientenmanagement"
  }
  // Add more use cases as needed...
];

interface PageProps {
  params: Promise<{ industry: string; usecase: string }>;
}

export default async function UseCasePage({ params }: PageProps) {
  const { industry, usecase: usecaseSlug } = await params;
  
  // Find the use case
  const useCase = useCases.find(uc => 
    uc.industry === industry && uc.slug === usecaseSlug
  );
  
  if (!useCase) {
    notFound();
  }
  
  return <UseCasePageClient useCase={useCase} />;
}

function UseCasePageClient({ useCase }: { useCase: typeof useCases[0] }) {
  const [activeTab, setActiveTab] = useState<"overview" | "workflow" | "implementation">("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/use-cases" className="text-slate-600 hover:text-slate-900 transition-colors">
                Use Cases
              </Link>
              <span className="text-slate-400">/</span>
              <Link href={`/use-cases/branche/${useCase.industry}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                {useCase.industryName}
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">{useCase.title}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Link href={`/use-cases/branche/${useCase.industry}`}>
                <Button variant="outline" size="sm" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zu {useCase.industryName}
                </Button>
              </Link>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-900 text-sm font-semibold backdrop-blur-sm">
                {useCase.category}
              </span>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
                  {useCase.title}
                </h1>
                <p className="text-xl text-slate-800 mb-6 leading-relaxed">
                  {useCase.longDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">{useCase.metrics.timeReduction}</div>
                    <div className="text-sm text-slate-600">Zeit gespart</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{useCase.metrics.costSavings}</div>
                    <div className="text-sm text-slate-600">Kosteneinsparung</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{useCase.metrics.accuracyImprovement}</div>
                    <div className="text-sm text-slate-600">Genauigkeit</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{useCase.roi}</div>
                    <div className="text-sm text-slate-600">ROI</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Demo starten
                  </Button>
                  <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Fallstudie herunterladen
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Beratung anfragen
                    </Button>
                  </Link>
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="w-80 hidden lg:block">
                <Card className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <div className="text-center mb-4">
                    <GlassIcon icon={BarChart3} color="purple" size="lg" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-4 text-center">ROI Rechner</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Implementierungszeit:</span>
                      <span className="font-medium">{useCase.implementationTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Schwierigkeit:</span>
                      <span className="font-medium">{useCase.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Erwarteter ROI:</span>
                      <span className="font-bold text-green-600">{useCase.roi}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                    Individuell berechnen
                  </Button>
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
              onClick={() => setActiveTab("implementation")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "implementation"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Implementierung
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Benefits */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={Target} color="green" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">Vorteile</h3>
                </div>
                <div className="space-y-4">
                  {useCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Key Metrics Detail */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={TrendingUp} color="blue" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">Messbare Ergebnisse</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Zeitersparnis</span>
                      <span className="font-bold text-green-600">{useCase.metrics.timeReduction}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: useCase.metrics.timeReduction }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Genauigkeit</span>
                      <span className="font-bold text-blue-600">{useCase.metrics.accuracyImprovement}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: useCase.metrics.accuracyImprovement }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Kundenzufriedenheit</span>
                      <span className="font-bold text-purple-600">{useCase.metrics.customerSatisfaction}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <GlassIcon icon={Zap} color="purple" size="xl" />
                <h3 className="text-2xl font-bold text-slate-900 mt-4">Automatisierter Workflow</h3>
                <p className="text-slate-600 mt-2">So funktioniert die Automatisierung Schritt für Schritt</p>
              </div>
              <div className="space-y-6">
                {useCase.workflow.map((step, index) => (
                  <Card key={step.step} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-700">{step.description}</p>
                      </div>
                      <div className="text-slate-400">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    {index < useCase.workflow.length - 1 && (
                      <div className="ml-6 mt-4">
                        <div className="w-px h-6 bg-gradient-to-b from-purple-400 to-transparent"></div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "implementation" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Implementation Details */}
                <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Implementierung</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Dauer:</span>
                      <span className="font-medium text-slate-900">{useCase.implementationTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Komplexität:</span>
                      <span className="font-medium text-slate-900">{useCase.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">ROI:</span>
                      <span className="font-bold text-green-600">{useCase.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Kosteneinsparung:</span>
                      <span className="font-bold text-blue-600">{useCase.metrics.costSavings}</span>
                    </div>
                  </div>
                </Card>

                {/* Integrations */}
                <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Integrationen</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.integrations.map((integration, index) => (
                      <div key={index} className="p-3 bg-white/30 rounded-lg text-center">
                        <div className="text-sm font-medium text-slate-900">{integration}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Implementation Timeline */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Implementierungs-Timeline</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
                    <h4 className="font-bold text-slate-900 mb-2">Analyse</h4>
                    <p className="text-sm text-slate-600">Anforderungen definieren</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
                    <h4 className="font-bold text-slate-900 mb-2">Setup</h4>
                    <p className="text-sm text-slate-600">System konfigurieren</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
                    <h4 className="font-bold text-slate-900 mb-2">Testing</h4>
                    <p className="text-sm text-slate-600">Workflows testen</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
                    <h4 className="font-bold text-slate-900 mb-2">Go-Live</h4>
                    <p className="text-sm text-slate-600">Produktiv schalten</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-white/20 border-white/30 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Bereit für die Implementierung?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihren individuellen Use Case entwickeln und implementieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  Beratungstermin buchen
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Live Demo ansehen
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
