"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  FileCheck,
  Settings,
  Shield,
  Zap,
  Target,
  Sparkles,
  Brain,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function QortexHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = {
    produkt: {
      title: "Produkt",
      items: [
        { name: "Platform Overview", href: "/produkt/platform-overview", icon: FileCheck },
        { name: "Visual Workflow Builder", href: "/produkt/workflow-builder", icon: Zap },
        { name: "KI-Integration", href: "/produkt/ki-integration", icon: Brain },
        { name: "Integrationen", href: "/produkt/integrationen", icon: Shield },
        { name: "Security & Compliance", href: "/produkt/security-compliance", icon: Shield },
        { name: "Templates", href: "/produkt/templates", icon: Sparkles },
      ],
    },
    useCases: {
      title: "Use Cases",
      items: [
        { name: "Architektur & Bau", href: "/use-cases/branche/baubranche", icon: Target },
        { name: "Banking & Finanzdienstleistungen", href: "/use-cases/branche/banking", icon: Shield },
        { name: "Healthcare", href: "/use-cases/branche/healthcare", icon: Shield },
        { name: "Manufacturing", href: "/use-cases/branche/manufacturing", icon: Shield },
        { name: "Öffentlicher Sektor", href: "/use-cases/branche/public-sector", icon: Shield },
        { name: "Retail", href: "/use-cases/branche/retail", icon: Shield },
        { name: "Rechtswesen", href: "/use-cases/branche/legal", icon: Shield },
        { name: "Telekommunikation", href: "/use-cases/branche/telecom", icon: Shield },
      ],
    },
    aiImpacts: {
      title: "AImpacts",
      items: [
        { name: "IT Ops - Mitarbeiter onboarden", href: "/ai-impacts/it-ops", icon: Zap },
        { name: "Support - WhatsApp mit RAG", href: "/ai-impacts/support", icon: Zap },
        { name: "SecOps - Email-Sicherheit", href: "/ai-impacts/secops", icon: Shield },
        { name: "Sales - Call-Daten extrahieren", href: "/ai-impacts/sales", icon: Zap },
        { name: "Marketing - Branchen-Analyse", href: "/ai-impacts/marketing", icon: Zap },
      ],
    },
    news: {
      title: "News",
      href: "/news",
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-full mx-auto flex items-center justify-between backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-10 sm:w-10 gradient-blue rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg glow-cyan">
            <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-primary-foreground" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gradient-blue">QORTEX</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--text-light-heading)] hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Produkt Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("produkt")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-[var(--text-light-heading)] hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
              {menuItems.produkt.title}
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "produkt" && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl p-3 bg-blue-50 backdrop-blur-xl border border-blue-100 shadow-xl">
                {menuItems.produkt.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg border-2 border-slate-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <item.icon className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Use Cases Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("useCases")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-[var(--text-light-heading)] hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
              {menuItems.useCases.title}
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "useCases" && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl p-3 bg-blue-50 backdrop-blur-xl border border-blue-100 shadow-xl">
                {menuItems.useCases.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg border-2 border-slate-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <item.icon className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* AImpacts Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("aiImpacts")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="text-[var(--text-light-heading)] hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
              {menuItems.aiImpacts.title}
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "aiImpacts" && (
              <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl p-3 bg-blue-50 backdrop-blur-xl border border-blue-100 shadow-xl">
                {menuItems.aiImpacts.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg border-2 border-slate-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <item.icon className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* News Link */}
          <Link
            href={menuItems.news.href}
            className="text-[var(--text-light-heading)] hover:text-primary transition-colors text-sm font-medium"
          >
            {menuItems.news.title}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-[var(--text-light-heading)] hover:text-primary hover:bg-secondary"
          >
            Anmelden
          </Button>
          <Button className="btn-3d text-primary-foreground border-0 rounded-xl px-6">Kostenlos starten</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20">
          <nav className="flex flex-col gap-4">
            {/* Mobile Menu Items */}
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                {"items" in menu ? (
                  <>
                    <h3 className="text-sm font-semibold text-[var(--text-light-heading)] mb-2">{menu.title}</h3>
                    <div className="flex flex-col gap-2">
                      {menu.items.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2 text-[var(--text-light-body)] hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-6 h-6 rounded-lg border-2 border-slate-300 flex items-center justify-center">
                            <item.icon className="h-3 w-3 text-slate-600" />
                          </div>
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={menu.href}
                    className="block text-sm font-semibold text-[var(--text-light-heading)] hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button
                variant="ghost"
                className="text-[var(--text-light-heading)] hover:text-primary hover:bg-secondary justify-start"
              >
                Anmelden
              </Button>
              <Button className="btn-3d text-primary-foreground border-0 rounded-xl justify-start">
                Kostenlos starten
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}


