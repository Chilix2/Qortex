"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowLeft, 
  Brain, 
  Code, 
  Zap,
  Users,
  CheckCircle,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  Clock,
  DollarSign,
  TrendingUp,
  Settings,
  Database,
  Shield
} from "lucide-react";
import { GlassIcon } from "@/components/ui/glass-icon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// AI Impact data - in a real app this would come from a database
const aiImpacts = [
  {
    impact: "it-ops",
    impactName: "IT Ops",
    slug: "automated-employee-onboarding",
    title: "Automatisiertes Mitarbeiter-Onboarding",
    description: "KI-gestützte Automatisierung des gesamten Onboarding-Prozesses für neue Mitarbeiter",
    longDescription: "Revolutionieren Sie Ihr Mitarbeiter-Onboarding mit intelligenter KI-Automatisierung. Unser System orchestriert alle Onboarding-Schritte automatisch - von der Account-Erstellung bis zur Arbeitsplatz-Einrichtung - und sorgt für eine nahtlose Integration neuer Teammitglieder.",
    aiCapabilities: [
      "Intelligente Dokumentenerkennung und -verarbeitung",
      "Automatische Account-Provisionierung basierend auf Rolle",
      "KI-gestützte Arbeitsplatz-Konfiguration",
      "Personalisierte Onboarding-Pfade",
      "Predictive Analytics für Onboarding-Erfolg"
    ],
    technicalSpecs: {
      aiModels: ["NLP für Dokumentenverarbeitung", "ML für Rollenerkennung", "Predictive Analytics"],
      integrations: ["Active Directory", "SAP SuccessFactors", "ServiceNow", "Slack", "Microsoft 365"],
      dataProcessing: "GDPR-konform, verschlüsselt",
      scalability: "Bis zu 10,000 Onboardings/Monat"
    },
    metrics: {
      timeReduction: "90%",
      costSavings: "€850K",
      accuracyImprovement: "99.5%",
      employeeSatisfaction: "4.9/5"
    },
    workflow: [
      { 
        step: 1, 
        title: "Datenerfassung", 
        description: "KI extrahiert Mitarbeiterdaten aus HR-Dokumenten",
        aiFeature: "OCR + NLP Verarbeitung"
      },
      { 
        step: 2, 
        title: "Rollenerkennung", 
        description: "ML-Algorithmus bestimmt benötigte Zugriffsrechte und Tools",
        aiFeature: "Role-based ML Classification"
      },
      { 
        step: 3, 
        title: "Account-Erstellung", 
        description: "Automatische Provisionierung aller erforderlichen Accounts",
        aiFeature: "Intelligent Provisioning"
      },
      { 
        step: 4, 
        title: "Arbeitsplatz-Setup", 
        description: "KI konfiguriert Hardware und Software basierend auf Rolle",
        aiFeature: "Adaptive Configuration"
      },
      { 
        step: 5, 
        title: "Onboarding-Tracking", 
        description: "Predictive Analytics überwacht Fortschritt und Erfolg",
        aiFeature: "Predictive Success Analytics"
      }
    ],
    codeExample: `// Beispiel: KI-gestützte Rollenerkennung
const roleClassifier = new AIRoleClassifier({
  model: 'qortex-role-detection-v2',
  confidence: 0.95
});

async function determineEmployeeRole(employeeData) {
  const prediction = await roleClassifier.predict({
    department: employeeData.department,
    jobTitle: employeeData.title,
    responsibilities: employeeData.description,
    reportingStructure: employeeData.manager
  });
  
  return {
    role: prediction.role,
    confidence: prediction.confidence,
    requiredAccess: prediction.accessRights,
    recommendedTools: prediction.tools
  };
}`,
    implementationTime: "3-4 Wochen",
    difficulty: "Mittel",
    roi: "420%",
    category: "IT Operations Automation"
  },
  {
    impact: "support",
    impactName: "Support",
    slug: "whatsapp-rag-chatbot",
    title: "WhatsApp RAG-Chatbot",
    description: "Intelligenter WhatsApp-Chatbot mit Retrieval-Augmented Generation für Kundensupport",
    longDescription: "Transformieren Sie Ihren Kundensupport mit einem hochintelligenten WhatsApp-Chatbot, der RAG-Technologie nutzt. Das System greift auf Ihre gesamte Wissensdatenbank zu und liefert präzise, kontextuelle Antworten in Echtzeit.",
    aiCapabilities: [
      "Retrieval-Augmented Generation (RAG) für präzise Antworten",
      "Multilinguale Konversation mit Sentiment-Analyse",
      "Dynamisches Lernen aus Kundeninteraktionen",
      "Intelligente Eskalation an menschliche Agents",
      "Personalisierte Antworten basierend auf Kundenhistorie"
    ],
    technicalSpecs: {
      aiModels: ["GPT-4 für Konversation", "RAG für Wissenszugriff", "Sentiment Analysis", "Intent Classification"],
      integrations: ["WhatsApp Business API", "Zendesk", "Salesforce", "Knowledge Base", "CRM"],
      dataProcessing: "End-to-End verschlüsselt, GDPR-konform",
      scalability: "Unbegrenzte gleichzeitige Gespräche"
    },
    metrics: {
      timeReduction: "85%",
      costSavings: "€1.2M",
      accuracyImprovement: "94%",
      employeeSatisfaction: "4.7/5"
    },
    workflow: [
      { 
        step: 1, 
        title: "Nachricht empfangen", 
        description: "WhatsApp-Nachricht wird erfasst und analysiert",
        aiFeature: "Intent Recognition + NLP"
      },
      { 
        step: 2, 
        title: "Kontext-Retrieval", 
        description: "RAG-System sucht relevante Informationen in Wissensdatenbank",
        aiFeature: "Vector Search + Semantic Matching"
      },
      { 
        step: 3, 
        title: "Antwort-Generierung", 
        description: "KI generiert personalisierte Antwort basierend auf Kontext",
        aiFeature: "GPT-4 + RAG Synthesis"
      },
      { 
        step: 4, 
        title: "Qualitätsprüfung", 
        description: "Automatische Validierung der Antwortqualität",
        aiFeature: "Response Quality Assessment"
      },
      { 
        step: 5, 
        title: "Lernen & Optimierung", 
        description: "System lernt aus Interaktion für zukünftige Verbesserungen",
        aiFeature: "Continuous Learning Loop"
      }
    ],
    codeExample: `// Beispiel: RAG-basierte Antwortgenerierung
const ragChatbot = new RAGChatbot({
  model: 'gpt-4-turbo',
  vectorStore: 'pinecone',
  knowledgeBase: 'company-kb'
});

async function generateResponse(userMessage, customerContext) {
  // 1. Retrieve relevante Dokumente
  const relevantDocs = await ragChatbot.retrieve({
    query: userMessage,
    context: customerContext,
    topK: 5
  });
  
  // 2. Generiere kontextuelle Antwort
  const response = await ragChatbot.generate({
    query: userMessage,
    context: relevantDocs,
    customerHistory: customerContext.history,
    tone: 'helpful_professional'
  });
  
  return {
    message: response.text,
    confidence: response.confidence,
    sources: response.sources
  };
}`,
    implementationTime: "4-6 Wochen",
    difficulty: "Komplex",
    roi: "380%",
    category: "Customer Support AI"
  }
  // Add more AI impacts as needed...
];

interface PageProps {
  params: Promise<{ impact: string; detail: string }>;
}

export default async function AIImpactPage({ params }: PageProps) {
  const { impact, detail: detailSlug } = await params;
  
  // Find the AI impact
  const aiImpact = aiImpacts.find(ai => 
    ai.impact === impact && ai.slug === detailSlug
  );
  
  if (!aiImpact) {
    notFound();
  }
  
  return <AIImpactPageClient aiImpact={aiImpact} />;
}

function AIImpactPageClient({ aiImpact }: { aiImpact: typeof aiImpacts[0] }) {
  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "implementation">("overview");
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link href="/ai-impacts" className="text-slate-600 hover:text-slate-900 transition-colors">
                AI Impacts
              </Link>
              <span className="text-slate-400">/</span>
              <Link href={`/ai-impacts/${aiImpact.impact}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                {aiImpact.impactName}
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">{aiImpact.title}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Link href={`/ai-impacts/${aiImpact.impact}`}>
                <Button variant="outline" size="sm" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zu {aiImpact.impactName}
                </Button>
              </Link>
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-900 text-sm font-semibold backdrop-blur-sm">
                {aiImpact.category}
              </span>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <GlassIcon icon={Brain} color="green" size="lg" />
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    {aiImpact.title}
                  </h1>
                </div>
                <p className="text-xl text-slate-800 mb-6 leading-relaxed">
                  {aiImpact.longDescription}
                </p>

                {/* AI Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">{aiImpact.metrics.timeReduction}</div>
                    <div className="text-sm text-slate-600">Zeit gespart</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{aiImpact.metrics.costSavings}</div>
                    <div className="text-sm text-slate-600">Kosteneinsparung</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{aiImpact.metrics.accuracyImprovement}</div>
                    <div className="text-sm text-slate-600">KI-Genauigkeit</div>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{aiImpact.roi}</div>
                    <div className="text-sm text-slate-600">ROI</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                    <Brain className="mr-2 h-5 w-5" />
                    KI-Demo starten
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" 
                    size="lg"
                    onClick={() => setShowCode(!showCode)}
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Code anzeigen
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      KI-Beratung
                    </Button>
                  </Link>
                </div>
              </div>

              {/* AI Architecture */}
              <div className="w-80 hidden lg:block">
                <Card className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <div className="text-center mb-4">
                    <GlassIcon icon={Settings} color="green" size="lg" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-4 text-center">KI-Architektur</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-slate-600 block mb-1">Hauptmodelle:</span>
                      {aiImpact.technicalSpecs.aiModels.map((model, idx) => (
                        <div key={idx} className="text-xs bg-green-500/20 text-green-800 px-2 py-1 rounded mb-1">
                          {model}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Skalierbarkeit:</span>
                      <span className="font-medium text-xs">{aiImpact.technicalSpecs.scalability}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[80vh] overflow-auto glass-card-neon bg-slate-900 border-slate-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Code-Beispiel: {aiImpact.title}</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowCode(false)}
                  className="text-white border-slate-600 hover:bg-slate-800"
                >
                  Schließen
                </Button>
              </div>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto text-sm text-green-400">
                <code>{aiImpact.codeExample}</code>
              </pre>
            </div>
          </Card>
        </div>
      )}

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
              KI-Übersicht
            </button>
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "technical"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Technische Details
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
              {/* AI Capabilities */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={Brain} color="green" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">KI-Fähigkeiten</h3>
                </div>
                <div className="space-y-4">
                  {aiImpact.aiCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* AI Workflow */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={Settings} color="blue" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">KI-Workflow</h3>
                </div>
                <div className="space-y-4">
                  {aiImpact.workflow.slice(0, 3).map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{step.title}</div>
                        <div className="text-sm text-slate-600">{step.aiFeature}</div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <span className="text-sm text-slate-600">+ {aiImpact.workflow.length - 3} weitere KI-Schritte</span>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "technical" && (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* AI Models */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={Database} color="purple" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">KI-Modelle & Technologie</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Eingesetzte KI-Modelle:</h4>
                    <div className="space-y-2">
                      {aiImpact.technicalSpecs.aiModels.map((model, index) => (
                        <div key={index} className="p-3 bg-purple-500/20 text-purple-800 rounded-lg text-sm font-medium">
                          {model}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Technische Spezifikationen:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Datenverarbeitung:</span>
                        <span className="font-medium">{aiImpact.technicalSpecs.dataProcessing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Skalierbarkeit:</span>
                        <span className="font-medium">{aiImpact.technicalSpecs.scalability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Detailed Workflow */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={Zap} color="green" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">Detaillierter KI-Workflow</h3>
                </div>
                <div className="space-y-6">
                  {aiImpact.workflow.map((step, index) => (
                    <div key={step.step} className="flex items-start gap-4 p-4 bg-white/30 rounded-lg">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-slate-700 mb-2">{step.description}</p>
                        <div className="inline-block px-3 py-1 bg-green-500/20 text-green-800 rounded-full text-xs font-medium">
                          {step.aiFeature}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Integrations */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <GlassIcon icon={ExternalLink} color="blue" size="md" />
                  <h3 className="text-2xl font-bold text-slate-900">System-Integrationen</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {aiImpact.technicalSpecs.integrations.map((integration, index) => (
                    <div key={index} className="p-4 bg-blue-500/20 text-blue-800 rounded-lg text-center font-medium">
                      {integration}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "implementation" && (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Implementation Overview */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <GlassIcon icon={Clock} color="orange" size="md" />
                    <h3 className="text-2xl font-bold text-slate-900">Implementierung</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Dauer:</span>
                      <span className="font-medium text-slate-900">{aiImpact.implementationTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Komplexität:</span>
                      <span className="font-medium text-slate-900">{aiImpact.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">ROI:</span>
                      <span className="font-bold text-green-600">{aiImpact.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Kosteneinsparung:</span>
                      <span className="font-bold text-blue-600">{aiImpact.metrics.costSavings}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <GlassIcon icon={Shield} color="green" size="md" />
                    <h3 className="text-2xl font-bold text-slate-900">Sicherheit & Compliance</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700">GDPR-konforme Datenverarbeitung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700">End-to-End Verschlüsselung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700">ISO 27001 zertifiziert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700">Audit-Trail für alle KI-Entscheidungen</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Implementation Timeline */}
              <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">KI-Implementierungs-Timeline</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                    <h4 className="font-bold text-slate-900 mb-2">KI-Analyse</h4>
                    <p className="text-sm text-slate-600">Datenanalyse und Modell-Auswahl</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                    <h4 className="font-bold text-slate-900 mb-2">Training</h4>
                    <p className="text-sm text-slate-600">KI-Modell Training und Optimierung</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                    <h4 className="font-bold text-slate-900 mb-2">Integration</h4>
                    <p className="text-sm text-slate-600">System-Integration und Testing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                    <h4 className="font-bold text-slate-900 mb-2">Deployment</h4>
                    <p className="text-sm text-slate-600">Produktiv-Schaltung und Monitoring</p>
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
            <div className="mb-6">
              <GlassIcon icon={Brain} color="green" size="xl" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Bereit für KI-gestützte Automatisierung?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre individuellen KI-Lösungen entwickeln und implementieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                  <Brain className="mr-2 h-5 w-5" />
                  KI-Beratung buchen
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  KI-Demo ansehen
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
