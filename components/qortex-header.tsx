"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { QuellyAgent } from "@/components/quelly-agent";
import { 
  ChevronDown, 
  Menu, 
  X,
  FileCheck,
  Zap,
  Brain,
  Shield,
  Sparkles,
  Target,
  LayoutGrid,
  Book,
  Newspaper,
  Users,
  GraduationCap
} from "lucide-react";

interface NavProps {
  dict: any;
  locale: string;
}

export default function QortexHeader({ dict, locale }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname;
    const pathSegments = currentPath.split("/");
    pathSegments[1] = newLocale;
    const newPath = pathSegments.join("/");
    router.push(newPath);
  };

  // Menu Configuration using Dictionary
  const menuConfig = {
    product: {
      key: "product",
      items: [
        { key: "platform", icon: FileCheck, href: "/produkt/platform-overview" },
        { key: "builder", icon: Zap, href: "/produkt/workflow-builder" },
        { key: "ai", icon: Brain, href: "/produkt/ki-integration" },
        { key: "integrations", icon: Shield, href: "/produkt/integrationen" },
        { key: "security", icon: Shield, href: "/produkt/security-compliance" },
        { key: "templates", icon: Sparkles, href: "/produkt/templates" },
      ]
    },
    useCases: {
      key: "useCases",
      items: [
        { key: "construction", icon: Target, href: "/use-cases/branche/baubranche" },
        { key: "banking", icon: Shield, href: "/use-cases/branche/banking" },
        { key: "healthcare", icon: Shield, href: "/use-cases/branche/healthcare" },
        { key: "manufacturing", icon: Shield, href: "/use-cases/branche/manufacturing" },
        { key: "public", icon: Shield, href: "/use-cases/branche/public-sector" },
        { key: "retail", icon: Shield, href: "/use-cases/branche/retail" },
        { key: "legal", icon: Shield, href: "/use-cases/branche/legal" },
        { key: "telecom", icon: Shield, href: "/use-cases/branche/telecom" },
      ]
    },
    impacts: {
      key: "impacts",
      items: [
        { key: "it", icon: Zap, href: "/ai-impacts/it-ops" },
        { key: "support", icon: Zap, href: "/ai-impacts/support" },
        { key: "secops", icon: Shield, href: "/ai-impacts/secops" },
        { key: "sales", icon: Zap, href: "/ai-impacts/sales" },
        { key: "marketing", icon: Zap, href: "/ai-impacts/marketing" },
      ]
    },
    resources: {
      key: "resources",
      items: [
        { key: "center", icon: LayoutGrid, href: "/resources" },
        { key: "docs", icon: Book, href: "/resources" },
        { key: "blog", icon: Newspaper, href: "/blog" },
        { key: "community", icon: Users, href: "/community" },
        { key: "academy", icon: GraduationCap, href: "/resources" },
      ]
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 px-4 sm:px-6 py-4",
        isScrolled ? "glass-panel-ultimate rounded-none border-t-0 border-x-0 !bg-white/10" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group relative z-50">
          <div className="relative h-10 w-40 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/qortex-logo-text.png" 
              alt="QORTEX" 
              width={160}
              height={40}
              className="object-contain object-left w-full h-full"
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Fallback text */}
            <span className="text-2xl font-bold tracking-tight uppercase text-white absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-[.opacity-0]:opacity-100">
              Qortex
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg">
          {/* Product Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("product")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2">
              {dict.nav.product.title}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            
            {openDropdown === "product" && (
              <div className="absolute top-full left-0 pt-4 w-72">
                <div className="glass-panel-ultimate p-2 bg-[#0a0c12]/90 border-white/20">
                  {menuConfig.product.items.map((item) => (
                    <Link 
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="p-2 rounded-md bg-blue-500/20 text-blue-400 group-hover/item:text-blue-300 group-hover/item:bg-blue-500/30 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                        {dict.nav.product.items[item.key as keyof typeof dict.nav.product.items]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Use Cases Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("useCases")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2">
              {dict.nav.useCases.title}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            
            {openDropdown === "useCases" && (
              <div className="absolute top-full left-0 pt-4 w-80">
                <div className="glass-panel-ultimate p-2 bg-[#0a0c12]/90 border-white/20 grid grid-cols-1 gap-1">
                  {menuConfig.useCases.items.map((item) => (
                    <Link 
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="p-2 rounded-md bg-purple-500/20 text-purple-400 group-hover/item:text-purple-300 group-hover/item:bg-purple-500/30 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                        {dict.nav.useCases.items[item.key as keyof typeof dict.nav.useCases.items]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AImpacts Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("impacts")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2">
              {dict.nav.impacts.title}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            
            {openDropdown === "impacts" && (
              <div className="absolute top-full left-0 pt-4 w-72">
                <div className="glass-panel-ultimate p-2 bg-[#0a0c12]/90 border-white/20">
                  {menuConfig.impacts.items.map((item) => (
                    <Link 
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="p-2 rounded-md bg-green-500/20 text-green-400 group-hover/item:text-green-300 group-hover/item:bg-green-500/30 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                        {dict.nav.impacts.items[item.key as keyof typeof dict.nav.impacts.items]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <Link href={`/${locale}/pricing`} className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            {dict.nav.pricing}
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2">
              {dict.nav.resources.title}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            
            {openDropdown === "resources" && (
              <div className="absolute top-full left-0 pt-4 w-64">
                <div className="glass-panel-ultimate p-2 bg-[#0a0c12]/90 border-white/20">
                  {menuConfig.resources.items.map((item) => (
                    <Link 
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="p-2 rounded-md bg-orange-500/20 text-orange-400 group-hover/item:text-orange-300 group-hover/item:bg-orange-500/30 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                        {dict.nav.resources.items[item.key as keyof typeof dict.nav.resources.items]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* News Link */}
          <Link href={`/${locale}/news`} className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            {dict.nav.news}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => switchLocale("de")}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full transition-all text-lg",
                locale === "de" ? "bg-white/10 shadow-sm" : "opacity-50 hover:opacity-100"
              )}
              title="Deutsch"
            >
              🇩🇪
            </button>
            <button 
              onClick={() => switchLocale("en")}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full transition-all text-lg",
                locale === "en" ? "bg-white/10 shadow-sm" : "opacity-50 hover:opacity-100"
              )}
              title="English"
            >
              EN
            </button>
          </div>
          
          <div className="hidden sm:block">
            <QuellyAgent 
              mode="icon-only" 
              size="sm" 
              className="!p-0 !bg-transparent !border-0 hover:scale-110" 
            />
          </div>
          
          <Link 
            href={`/${locale}/contact`}
            className="hidden md:inline-flex items-center justify-center bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-50 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            {dict.nav.cta}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Enhanced) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#0a0c12] z-40 p-6 overflow-y-auto xl:hidden">
          <div className="flex flex-col gap-6">
            {/* Product Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">{dict.nav.product.title}</h3>
              <div className="space-y-2 ml-4">
                {menuConfig.product.items.map((item) => (
                  <Link 
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className="block text-slate-300 hover:text-white transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.product.items[item.key as keyof typeof dict.nav.product.items]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Use Cases Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">{dict.nav.useCases.title}</h3>
              <div className="space-y-2 ml-4">
                {menuConfig.useCases.items.map((item) => (
                  <Link 
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className="block text-slate-300 hover:text-white transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.useCases.items[item.key as keyof typeof dict.nav.useCases.items]}
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Impacts Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">{dict.nav.impacts.title}</h3>
              <div className="space-y-2 ml-4">
                {menuConfig.impacts.items.map((item) => (
                  <Link 
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className="block text-slate-300 hover:text-white transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.impacts.items[item.key as keyof typeof dict.nav.impacts.items]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <Link 
              href={`/${locale}/pricing`} 
              className="text-xl font-bold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.pricing}
            </Link>

            {/* Resources Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">{dict.nav.resources.title}</h3>
              <div className="space-y-2 ml-4">
                {menuConfig.resources.items.map((item) => (
                  <Link 
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className="block text-slate-300 hover:text-white transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.resources.items[item.key as keyof typeof dict.nav.resources.items]}
                  </Link>
                ))}
              </div>
            </div>

            {/* News */}
            <Link 
              href={`/${locale}/news`} 
              className="text-xl font-bold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.news}
            </Link>

            {/* Language Switcher */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-white/20">
               <button onClick={() => switchLocale("de")} className="px-4 py-2 bg-white/10 rounded-lg text-white">Deutsch 🇩🇪</button>
               <button onClick={() => switchLocale("en")} className="px-4 py-2 bg-white/10 rounded-lg text-white">English EN</button>
            </div>

            {/* CTA Button */}
            <Link 
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center bg-white text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-all mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
