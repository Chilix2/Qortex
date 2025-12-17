"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-24">
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Kontaktieren Sie uns</h1>
            <p className="text-xl text-slate-600">
              Haben Sie Fragen zu QORTEX oder möchten Sie eine Demo vereinbaren? Unser Team hilft Ihnen gerne weiter.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">E-Mail</h3>
                <p className="text-slate-600">hello@qortex.com</p>
                <p className="text-slate-600">support@qortex.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 text-purple-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Standort</h3>
                <p className="text-slate-600">QORTEX HQ</p>
                <p className="text-slate-600">Musterstraße 123</p>
                <p className="text-slate-600">10115 Berlin, Deutschland</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 text-green-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Telefon</h3>
                <p className="text-slate-600">+49 (0) 30 12345678</p>
                <p className="text-sm text-slate-500">Mo-Fr, 9:00 - 18:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-slate-900">Vorname</label>
                <Input id="first-name" placeholder="Max" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-slate-900">Nachname</label>
                <Input id="last-name" placeholder="Mustermann" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900">E-Mail</label>
              <Input id="email" type="email" placeholder="max@firma.de" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-900">Betreff</label>
              <Input id="subject" placeholder="Demo Anfrage" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-900">Nachricht</label>
              <Textarea id="message" placeholder="Wie können wir Ihnen helfen?" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full btn-3d bg-blue-600 hover:bg-blue-700 text-white">
              Nachricht senden
            </Button>
          </form>
        </div>

      </div>
    </main>
  )
}
