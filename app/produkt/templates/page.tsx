"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Search, Filter, Download, Star } from "lucide-react"
import { GlassIcon } from "@/components/ui/glass-icon"

export default function TemplatesPage() {
  const templates = [
    { category: "Produktivität", subcategory: "Email Management", name: "Email zu Task", description: "Automatisch Tasks aus E-Mails erstellen", downloads: 1250, rating: 4.8 },
    { category: "Produktivität", subcategory: "Task Management", name: "Task Automatisierung", description: "Automatische Task-Zuweisung und Priorisierung", downloads: 980, rating: 4.7 },
    { category: "Produktivität", subcategory: "Calendar Sync", name: "Kalender Synchronisation", description: "Mehrere Kalender nahtlos synchronisieren", downloads: 1200, rating: 4.6 },
    { category: "Datenverarbeitung", subcategory: "Data Import", name: "CSV zu Database", description: "Importieren Sie CSV-Dateien in Datenbanken", downloads: 890, rating: 4.6 },
    { category: "Datenverarbeitung", subcategory: "Data Transformation", name: "Daten Transformation", description: "Automatische Datenkonvertierung und Formatierung", downloads: 750, rating: 4.5 },
    { category: "Datenverarbeitung", subcategory: "Data Export", name: "Database Export", description: "Datenbank-Export in verschiedene Formate", downloads: 650, rating: 4.4 },
    { category: "KI & Automation", subcategory: "Document Processing", name: "Document Analysis", description: "KI-gestützte Dokumentenanalyse", downloads: 2100, rating: 4.9 },
    { category: "KI & Automation", subcategory: "Text Generation", name: "Content Generator", description: "KI-basierte Textgenerierung für verschiedene Anwendungen", downloads: 1800, rating: 4.8 },
    { category: "KI & Automation", subcategory: "Image Processing", name: "Bildanalyse", description: "Automatische Bilderkennung und -verarbeitung", downloads: 1450, rating: 4.7 },
    { category: "Integration", subcategory: "Communication", name: "Slack Notifications", description: "Automatische Benachrichtigungen in Slack", downloads: 3400, rating: 4.7 },
    { category: "Integration", subcategory: "Communication", name: "Teams Integration", description: "Microsoft Teams Workflow-Integration", downloads: 2800, rating: 4.8 },
    { category: "Integration", subcategory: "API Integration", name: "REST API Connector", description: "Universeller REST API Verbinder", downloads: 2200, rating: 4.6 },
    { category: "E-Commerce", subcategory: "Order Management", name: "Order Processing", description: "Automatische Bestellabwicklung", downloads: 1560, rating: 4.8 },
    { category: "E-Commerce", subcategory: "Inventory", name: "Lagerverwaltung", description: "Automatische Lagerbestandsverwaltung", downloads: 1300, rating: 4.7 },
    { category: "E-Commerce", subcategory: "Payment", name: "Zahlungsabwicklung", description: "Automatische Zahlungsverarbeitung", downloads: 1100, rating: 4.6 },
    { category: "HR", subcategory: "Onboarding", name: "Employee Onboarding", description: "Automatisierter Onboarding-Prozess", downloads: 980, rating: 4.5 },
    { category: "HR", subcategory: "Recruitment", name: "Bewerber-Management", description: "Automatisiertes Bewerber-Screening", downloads: 850, rating: 4.4 },
    { category: "HR", subcategory: "Payroll", name: "Gehaltsabrechnung", description: "Automatische Gehaltsabrechnung", downloads: 720, rating: 4.5 },
    { category: "Marketing", subcategory: "Lead Management", name: "Lead Scoring", description: "Automatisches Lead-Scoring", downloads: 2200, rating: 4.9 },
    { category: "Marketing", subcategory: "Email Marketing", name: "Newsletter Automation", description: "Automatisierte Newsletter-Kampagnen", downloads: 1900, rating: 4.8 },
    { category: "Marketing", subcategory: "Analytics", name: "Marketing Analytics", description: "Automatische Marketing-Datenanalyse", downloads: 1650, rating: 4.7 },
    { category: "Support", subcategory: "Ticket Management", name: "Ticket Routing", description: "Intelligentes Ticket-Routing", downloads: 1800, rating: 4.7 },
    { category: "Support", subcategory: "Customer Service", name: "Chatbot Integration", description: "KI-Chatbot für Kundensupport", downloads: 2100, rating: 4.8 },
    { category: "Support", subcategory: "Knowledge Base", name: "Wissensdatenbank Sync", description: "Automatische Wissensdatenbank-Aktualisierung", downloads: 1400, rating: 4.6 },
    { category: "Finance", subcategory: "Accounting", name: "Invoice Processing", description: "Automatische Rechnungsverarbeitung", downloads: 1450, rating: 4.8 },
    { category: "Finance", subcategory: "Reporting", name: "Finanzberichte", description: "Automatische Finanzberichtserstellung", downloads: 1200, rating: 4.7 },
    { category: "Finance", subcategory: "Expense Management", name: "Spesenverwaltung", description: "Automatische Spesenerfassung und -abrechnung", downloads: 1100, rating: 4.6 },
    { category: "IT Ops", subcategory: "Monitoring", name: "Server Monitoring", description: "Automatische Server-Überwachung", downloads: 1100, rating: 4.6 },
    { category: "IT Ops", subcategory: "Deployment", name: "CI/CD Pipeline", description: "Automatisierte Deployment-Pipelines", downloads: 1300, rating: 4.7 },
    { category: "IT Ops", subcategory: "Backup", name: "Backup Automation", description: "Automatische Backup-Erstellung", downloads: 950, rating: 4.5 },
    { category: "Sales", subcategory: "CRM", name: "CRM Sync", description: "Synchronisation mit CRM-Systemen", downloads: 2700, rating: 4.9 },
    { category: "Sales", subcategory: "Pipeline Management", name: "Sales Pipeline", description: "Automatische Sales-Pipeline-Verwaltung", downloads: 2000, rating: 4.8 },
    { category: "Sales", subcategory: "Reporting", name: "Sales Reports", description: "Automatische Sales-Berichte", downloads: 1750, rating: 4.7 },
    { category: "Data", subcategory: "ETL", name: "ETL Pipeline", description: "Extract, Transform, Load Pipeline", downloads: 1650, rating: 4.7 },
    { category: "Data", subcategory: "Data Warehousing", name: "Data Warehouse Sync", description: "Automatische Data Warehouse Synchronisation", downloads: 1400, rating: 4.6 },
    { category: "Data", subcategory: "Analytics", name: "Data Analytics", description: "Automatische Datenanalyse und Visualisierung", downloads: 1800, rating: 4.8 }
  ]

  const categories = ["Alle", "Produktivität", "Datenverarbeitung", "KI & Automation", "Integration", "E-Commerce", "HR", "Marketing", "Support", "Finance", "IT Ops", "Sales", "Data"]
  
  const categorySubcategories: Record<string, string[]> = {
    "Produktivität": ["Email Management", "Task Management", "Calendar Sync"],
    "Datenverarbeitung": ["Data Import", "Data Transformation", "Data Export"],
    "KI & Automation": ["Document Processing", "Text Generation", "Image Processing"],
    "Integration": ["Communication", "API Integration"],
    "E-Commerce": ["Order Management", "Inventory", "Payment"],
    "HR": ["Onboarding", "Recruitment", "Payroll"],
    "Marketing": ["Lead Management", "Email Marketing", "Analytics"],
    "Support": ["Ticket Management", "Customer Service", "Knowledge Base"],
    "Finance": ["Accounting", "Reporting", "Expense Management"],
    "IT Ops": ["Monitoring", "Deployment", "Backup"],
    "Sales": ["CRM", "Pipeline Management", "Reporting"],
    "Data": ["ETL", "Data Warehousing", "Analytics"]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-900 font-semibold mb-6 backdrop-blur-sm">
              Templates
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Workflow Templates
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-2xl">
              Hunderte vorgefertigter Workflow-Templates für schnellen Start. 
              Von einfachen Automatisierungen bis zu komplexen Enterprise-Workflows.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
                Templates durchsuchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm">
                Template erstellen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <section className="py-8 px-6 border-b border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Templates durchsuchen..."
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-slate-500 text-slate-900 backdrop-blur-md"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.slice(0, 6).map((cat) => (
                <Button
                  key={cat}
                  variant={cat === "Alle" ? "default" : "outline"}
                  className={`rounded-lg ${cat === "Alle" ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-white/30 border-white/40 text-slate-800 hover:bg-white/50"}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Beliebteste Templates</h2>
              <p className="text-slate-700">Die meistgenutzten Workflow-Templates unserer Community</p>
            </div>
            <Button variant="outline" className="bg-white/30 border-white/40 text-slate-800">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {templates.map((template, i) => (
              <Card key={i} className="p-6 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-lg cursor-pointer backdrop-blur-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-orange-800 bg-orange-100/50 border border-orange-200/50 px-2 py-1 rounded-md backdrop-blur-sm">
                      {template.category}
                    </span>
                    {template.subcategory && (
                      <span className="text-xs font-medium text-slate-600 bg-slate-100/50 border border-slate-200/50 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        {template.subcategory}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-slate-700">{template.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                <p className="text-slate-700 text-sm mb-6 leading-relaxed">{template.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Download className="h-3 w-3" />
                    <span>{template.downloads} Downloads</span>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                    Verwenden
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="bg-white/30 hover:bg-white/50 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm px-8">
              Mehr Templates anzeigen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Templates nach Kategorie</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Finden Sie das perfekte Template für Ihren Use Case
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {categories.slice(1).map((category, i) => (
              <Card key={i} className="p-6 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.05] transition-all duration-300 cursor-pointer text-center shadow-lg">
                <div className="mb-4 flex justify-center">
                  <GlassIcon icon={Sparkles} color="orange" size="md" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{category}</h3>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  {templates.filter(t => t.category === category).length} Templates
                </p>
                <Button variant="outline" size="sm" className="w-full bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                  Anzeigen
                </Button>
              </Card>
            ))}
          </div>

          {/* Subcategories by Category */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Subkategorien</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(categorySubcategories).map(([category, subcategories]) => (
                <Card key={category} className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{category}</h4>
                  <div className="space-y-2">
                    {subcategories.map((subcategory, idx) => {
                      const subcategoryTemplates = templates.filter(
                        t => t.category === category && t.subcategory === subcategory
                      )
                      return (
                        <div key={idx} className="flex items-center justify-between p-2 bg-white/30 rounded-md">
                          <span className="text-sm font-medium text-slate-700">{subcategory}</span>
                          <span className="text-xs text-slate-600 bg-white/50 px-2 py-1 rounded">
                            {subcategoryTemplates.length}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Create Template */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-orange-100/50 to-amber-100/50 border-white/40 shadow-xl backdrop-blur-md">
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-6 flex justify-center">
                <GlassIcon icon={Sparkles} color="orange" size="xl" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Teilen Sie Ihr Template</h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Haben Sie ein nützliches Workflow-Template erstellt? Teilen Sie es mit der Community 
                und helfen Sie anderen, Zeit zu sparen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg">
                  Template erstellen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600/30 text-orange-800 hover:bg-orange-100/50 rounded-xl">
                  Richtlinien ansehen
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-gradient-to-br from-orange-600/90 to-red-600/90 border-white/20 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Bereit, mit Templates zu starten?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Durchsuchen Sie unsere Template-Bibliothek und starten Sie in Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold rounded-xl shadow-lg">
                Alle Templates ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Kostenlos starten
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
