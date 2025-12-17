"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react"

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Berlin / Remote",
      type: "Vollzeit",
    },
    {
      title: "AI Research Scientist",
      department: "AI Lab",
      location: "Berlin",
      type: "Vollzeit",
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Vollzeit",
    },
    {
      title: "Customer Success Manager",
      department: "Sales",
      location: "München / Remote",
      type: "Vollzeit",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 border-green-200 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            Karriere bei QORTEX
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Bauen Sie mit uns die <span className="text-gradient-green">Zukunft der Arbeit</span>
          </h1>
          <p className="text-xl text-slate-600">
            Wir sind ein Team aus Träumern, Machern und Innovatoren. Schließen Sie sich uns an und gestalten Sie die nächste Generation der Automatisierung.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-[400px]">
          <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-end lg:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
            {/* Placeholder image background would go here */}
            <div className="absolute inset-0 bg-[url('/placeholder-office.jpg')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-bold mb-2">Remote-First Culture</h3>
              <p className="text-slate-300">Arbeiten Sie von dort, wo Sie am produktivsten sind. Wir unterstützen Home Office und Workations.</p>
            </div>
          </div>
          <div className="bg-green-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-4">
            <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900">Ownership</h3>
            <p className="text-green-800">Bei uns übernimmt jeder Verantwortung. Keine Micromanagement, sondern Vertrauen.</p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Offene Stellen</h2>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {positions.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                  </div>
                </div>
                <Button variant="ghost" className="shrink-0 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-700">
                  Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
