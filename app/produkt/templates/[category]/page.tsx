"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star, ArrowLeft, Search, Filter } from "lucide-react";
import { GlassIcon } from "@/components/ui/glass-icon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// Template data - in a real app this would come from a database
const templates = [
  { category: "Produktivität", subcategory: "Email Management", name: "Email zu Task", description: "Automatisch Tasks aus E-Mails erstellen", downloads: 1250, rating: 4.8, slug: "email-zu-task" },
  { category: "Produktivität", subcategory: "Task Management", name: "Task Automatisierung", description: "Automatische Task-Zuweisung und Priorisierung", downloads: 980, rating: 4.7, slug: "task-automatisierung" },
  { category: "Produktivität", subcategory: "Calendar Sync", name: "Kalender Synchronisation", description: "Mehrere Kalender nahtlos synchronisieren", downloads: 1200, rating: 4.6, slug: "kalender-synchronisation" },
  { category: "Datenverarbeitung", subcategory: "Data Import", name: "CSV zu Database", description: "Importieren Sie CSV-Dateien in Datenbanken", downloads: 890, rating: 4.6, slug: "csv-zu-database" },
  { category: "Datenverarbeitung", subcategory: "Data Transformation", name: "Daten Transformation", description: "Automatische Datenkonvertierung und Formatierung", downloads: 750, rating: 4.5, slug: "daten-transformation" },
  { category: "Datenverarbeitung", subcategory: "Data Export", name: "Database Export", description: "Datenbank-Export in verschiedene Formate", downloads: 650, rating: 4.4, slug: "database-export" },
  { category: "KI & Automation", subcategory: "Document Processing", name: "Document Analysis", description: "KI-gestützte Dokumentenanalyse", downloads: 2100, rating: 4.9, slug: "document-analysis" },
  { category: "KI & Automation", subcategory: "Text Generation", name: "Content Generator", description: "KI-basierte Textgenerierung für verschiedene Anwendungen", downloads: 1800, rating: 4.8, slug: "content-generator" },
  { category: "KI & Automation", subcategory: "Image Processing", name: "Bildanalyse", description: "Automatische Bilderkennung und -verarbeitung", downloads: 1450, rating: 4.7, slug: "bildanalyse" },
  { category: "Integration", subcategory: "Communication", name: "Slack Notifications", description: "Automatische Benachrichtigungen in Slack", downloads: 3400, rating: 4.7, slug: "slack-notifications" },
  { category: "Integration", subcategory: "Communication", name: "Teams Integration", description: "Microsoft Teams Workflow-Integration", downloads: 2800, rating: 4.8, slug: "teams-integration" },
  { category: "Integration", subcategory: "API Integration", name: "REST API Connector", description: "Universeller REST API Verbinder", downloads: 2200, rating: 4.6, slug: "rest-api-connector" },
  { category: "E-Commerce", subcategory: "Order Management", name: "Order Processing", description: "Automatische Bestellabwicklung", downloads: 1560, rating: 4.8, slug: "order-processing" },
  { category: "E-Commerce", subcategory: "Inventory", name: "Lagerverwaltung", description: "Automatische Lagerbestandsverwaltung", downloads: 1300, rating: 4.7, slug: "lagerverwaltung" },
  { category: "E-Commerce", subcategory: "Payment", name: "Zahlungsabwicklung", description: "Automatische Zahlungsverarbeitung", downloads: 1100, rating: 4.6, slug: "zahlungsabwicklung" },
  { category: "HR", subcategory: "Onboarding", name: "Employee Onboarding", description: "Automatisierter Onboarding-Prozess", downloads: 980, rating: 4.5, slug: "employee-onboarding" },
  { category: "HR", subcategory: "Recruitment", name: "Bewerber-Management", description: "Automatisiertes Bewerber-Screening", downloads: 850, rating: 4.4, slug: "bewerber-management" },
  { category: "HR", subcategory: "Payroll", name: "Gehaltsabrechnung", description: "Automatische Gehaltsabrechnung", downloads: 720, rating: 4.5, slug: "gehaltsabrechnung" },
  { category: "Marketing", subcategory: "Lead Management", name: "Lead Scoring", description: "Automatisches Lead-Scoring", downloads: 2200, rating: 4.9, slug: "lead-scoring" },
  { category: "Marketing", subcategory: "Email Marketing", name: "Newsletter Automation", description: "Automatisierte Newsletter-Kampagnen", downloads: 1900, rating: 4.8, slug: "newsletter-automation" },
  { category: "Marketing", subcategory: "Analytics", name: "Marketing Analytics", description: "Automatische Marketing-Datenanalyse", downloads: 1650, rating: 4.7, slug: "marketing-analytics" },
  { category: "Support", subcategory: "Ticket Management", name: "Ticket Routing", description: "Intelligentes Ticket-Routing", downloads: 1800, rating: 4.7, slug: "ticket-routing" },
  { category: "Support", subcategory: "Customer Service", name: "Chatbot Integration", description: "KI-Chatbot für Kundensupport", downloads: 2100, rating: 4.8, slug: "chatbot-integration" },
  { category: "Support", subcategory: "Knowledge Base", name: "Wissensdatenbank Sync", description: "Automatische Wissensdatenbank-Aktualisierung", downloads: 1400, rating: 4.6, slug: "wissensdatenbank-sync" },
  { category: "Finance", subcategory: "Accounting", name: "Invoice Processing", description: "Automatische Rechnungsverarbeitung", downloads: 1450, rating: 4.8, slug: "invoice-processing" },
  { category: "Finance", subcategory: "Reporting", name: "Finanzberichte", description: "Automatische Finanzberichtserstellung", downloads: 1200, rating: 4.7, slug: "finanzberichte" },
  { category: "Finance", subcategory: "Expense Management", name: "Spesenverwaltung", description: "Automatische Spesenerfassung und -abrechnung", downloads: 1100, rating: 4.6, slug: "spesenverwaltung" },
  { category: "IT Ops", subcategory: "Monitoring", name: "Server Monitoring", description: "Automatische Server-Überwachung", downloads: 1100, rating: 4.6, slug: "server-monitoring" },
  { category: "IT Ops", subcategory: "Deployment", name: "CI/CD Pipeline", description: "Automatisierte Deployment-Pipelines", downloads: 1300, rating: 4.7, slug: "cicd-pipeline" },
  { category: "IT Ops", subcategory: "Backup", name: "Backup Automation", description: "Automatische Backup-Erstellung", downloads: 950, rating: 4.5, slug: "backup-automation" },
  { category: "Sales", subcategory: "CRM", name: "CRM Sync", description: "Synchronisation mit CRM-Systemen", downloads: 2700, rating: 4.9, slug: "crm-sync" },
  { category: "Sales", subcategory: "Pipeline Management", name: "Sales Pipeline", description: "Automatische Sales-Pipeline-Verwaltung", downloads: 2000, rating: 4.8, slug: "sales-pipeline" },
  { category: "Sales", subcategory: "Reporting", name: "Sales Reports", description: "Automatische Sales-Berichte", downloads: 1750, rating: 4.7, slug: "sales-reports" },
  { category: "Data", subcategory: "ETL", name: "ETL Pipeline", description: "Extract, Transform, Load Pipeline", downloads: 1650, rating: 4.7, slug: "etl-pipeline" },
  { category: "Data", subcategory: "Data Warehousing", name: "Data Warehouse Sync", description: "Automatische Data Warehouse Synchronisation", downloads: 1400, rating: 4.6, slug: "data-warehouse-sync" },
  { category: "Data", subcategory: "Analytics", name: "Data Analytics", description: "Automatische Datenanalyse und Visualisierung", downloads: 1800, rating: 4.8, slug: "data-analytics" }
];

const categoryColors: Record<string, string> = {
  "Produktivität": "blue",
  "Datenverarbeitung": "green", 
  "KI & Automation": "purple",
  "Integration": "orange",
  "E-Commerce": "pink",
  "HR": "indigo",
  "Marketing": "red",
  "Support": "emerald",
  "Finance": "yellow",
  "IT Ops": "cyan",
  "Sales": "rose",
  "Data": "violet"
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  
  // Find matching category (case-insensitive)
  const categoryTemplates = templates.filter(t => 
    t.category.toLowerCase() === decodedCategory.toLowerCase()
  );
  
  if (categoryTemplates.length === 0) {
    notFound();
  }

  const categoryName = categoryTemplates[0].category;
  const subcategories = [...new Set(categoryTemplates.map(t => t.subcategory))];
  
  return (
    <CategoryPageClient 
      categoryName={categoryName}
      categoryTemplates={categoryTemplates}
      subcategories={subcategories}
      categoryColor={categoryColors[categoryName] || "blue"}
    />
  );
}

function CategoryPageClient({ 
  categoryName, 
  categoryTemplates, 
  subcategories,
  categoryColor 
}: {
  categoryName: string;
  categoryTemplates: typeof templates;
  subcategories: string[];
  categoryColor: string;
}) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("Alle");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = categoryTemplates.filter(template => {
    const matchesSubcategory = selectedSubcategory === "Alle" || template.subcategory === selectedSubcategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubcategory && matchesSearch;
  });

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
              <span className="text-slate-900 font-medium">{categoryName}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Link href="/produkt/templates">
                <Button variant="outline" size="sm" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück
                </Button>
              </Link>
              <span className={`inline-block px-4 py-1.5 rounded-full bg-${categoryColor}-500/20 border border-${categoryColor}-400/30 text-${categoryColor}-900 font-semibold backdrop-blur-sm`}>
                {categoryName}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              {categoryName} Templates
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-3xl">
              {categoryTemplates.length} vorgefertigte Templates für {categoryName.toLowerCase()}. 
              Sparen Sie Zeit mit bewährten Workflow-Lösungen.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Templates durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/40 border border-white/30 rounded-xl text-slate-900 placeholder-slate-600 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400"
              />
            </div>

            {/* Subcategory Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedSubcategory("Alle")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSubcategory === "Alle"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/40 text-slate-700 hover:bg-white/60"
                }`}
              >
                Alle ({categoryTemplates.length})
              </button>
              {subcategories.map(subcategory => {
                const count = categoryTemplates.filter(t => t.subcategory === subcategory).length;
                return (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedSubcategory === subcategory
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white/40 text-slate-700 hover:bg-white/60"
                    }`}
                  >
                    {subcategory} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {filteredTemplates.length} Templates gefunden
            </h2>
            <p className="text-slate-600">
              {selectedSubcategory !== "Alle" && `Gefiltert nach: ${selectedSubcategory}`}
              {searchTerm && ` • Suche: "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <Card key={index} className="p-6 glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 shadow-lg group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-700 rounded-md font-medium">
                        {template.subcategory}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {template.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/produkt/templates/${encodeURIComponent(categoryName)}/${template.slug}`} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all group-hover:scale-105">
                      Details anzeigen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Filter className="h-12 w-12 text-slate-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Keine Templates gefunden</h3>
              <p className="text-slate-600 mb-4">
                Versuchen Sie andere Suchbegriffe oder Filter.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSubcategory("Alle");
                }}
                variant="outline" 
                className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900"
              >
                Filter zurücksetzen
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
