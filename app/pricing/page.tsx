"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle, X } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfekt für Einzelpersonen und kleine Projekte.",
      price: isAnnual ? "0" : "0",
      period: "dauerhaft",
      features: [
        "Bis zu 5 aktive Workflows",
        "100 Workflow-Ausführungen / Monat",
        "Basis-Integrationen",
        "Community Support",
        "1 Benutzer",
      ],
      missing: ["Erweiterte KI-Modelle", "Prioritäts-Support", "SSO & Audit Logs"],
      cta: "Kostenlos starten",
      ctaVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      description: "Für wachsende Teams und automatisierte Prozesse.",
      price: isAnnual ? "49" : "59",
      period: "pro Benutzer / Monat",
      features: [
        "Unbegrenzte Workflows",
        "5.000 Workflow-Ausführungen / Monat",
        "Premium Integrationen",
        "Erweiterte KI-Modelle (GPT-4, Claude 3)",
        "Email & Chat Support",
        "Bis zu 10 Benutzer",
        "Team-Sharing & Kollaboration",
      ],
      missing: ["SSO & Audit Logs", "Dedizierter Success Manager"],
      cta: "14 Tage kostenlos testen",
      ctaVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Für Organisationen mit hohen Anforderungen.",
      price: "Custom",
      period: "individuell",
      features: [
        "Unbegrenzte Ausführungen",
        "Dedizierte Infrastruktur",
        "Custom Integrationen",
        "SSO (SAML/OIDC) & SCIM",
        "Erweiterte Audit Logs & Compliance",
        "24/7 Priority Support",
        "On-Premise Deployment Option",
        "Dedizierter Success Manager",
      ],
      missing: [],
      cta: "Vertrieb kontaktieren",
      ctaVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Preise & Pläne
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Transparente Preise für <span className="text-gradient-blue">jeden Workflow</span>
          </h1>
          <p className="text-xl text-slate-600">
            Wählen Sie den Plan, der am besten zu Ihren Anforderungen passt. Skalieren Sie jederzeit nach oben oder unten.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monatlich</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Jährlich <span className="text-green-600 font-bold ml-1">(-20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-slate-200 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "border-blue-500 shadow-lg scale-105 z-10" : "bg-white hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                <CardDescription className="text-slate-600 mt-2 min-h-[40px]">{plan.description}</CardDescription>
                <div className="mt-6 flex items-baseline text-slate-900">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className="text-4xl font-extrabold tracking-tight">€{plan.price}</span>
                      <span className="ml-1 text-sm font-semibold text-slate-500">/{plan.period === "dauerhaft" ? "Monat" : "Mo"}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold tracking-tight">Custom</span>
                  )}
                </div>
                {plan.period !== "dauerhaft" && plan.price !== "Custom" && (
                  <p className="text-xs text-slate-500 mt-1">
                    {isAnnual ? "Jährliche Abrechnung" : "Monatliche Abrechnung"}
                  </p>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-900">Enthält:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.missing.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {plan.missing.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                          <X className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}`}
                  variant={plan.ctaVariant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Häufig gestellte Fragen</h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Kann ich meinen Plan jederzeit ändern?
              </h3>
              <p className="text-slate-600">
                Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Änderungen werden zum nächsten Abrechnungszyklus wirksam.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Gibt es eine kostenlose Testversion für den Pro-Plan?
              </h3>
              <p className="text-slate-600">
                Absolut! Wir bieten eine 14-tägige kostenlose Testphase für den Pro-Plan an, damit Sie alle Funktionen ausgiebig testen können.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Was passiert, wenn ich das Limit an Ausführungen erreiche?
              </h3>
              <p className="text-slate-600">
                Wir benachrichtigen Sie rechtzeitig. Im Starter-Plan werden weitere Ausführungen pausiert. Im Pro-Plan können Sie zusätzliche Kapazitäten hinzubuchen oder upgraden.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Bereit, Ihre Workflows zu automatisieren?</h2>
            <p className="text-blue-100 text-lg">
              Starten Sie noch heute kostenlos und erleben Sie die Kraft intelligenter Prozessautomatisierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Jetzt kostenlos starten
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Vertrieb kontaktieren
              </Button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
