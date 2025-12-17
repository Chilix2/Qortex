"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  Shield,
  Database,
  Smartphone,
  Cloud,
  Code,
  Cpu,
  BarChart,
  Layout,
} from "lucide-react"
import NewsScrollShowcase from "@/components/news-scroll-showcase"

export default function NewsPage() {
  // Helper component for icons that might not be in the initial import
  function BotIcon(props: any) {
    return <Cpu {...props} />
  }

  function UsersIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  function BrainIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    )
  }

  function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }

  function SettingsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }

  function EyeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }

  function TrophyIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }

  const newsItems = [
    {
      category: "Cloud Optimization",
      title: "StageClip Slashes Cloud Costs by 93%",
      summary: "Strategic infrastructure optimization reduced monthly cloud spend from $30,000 to just $2,000.",
      impact: "93% Savings",
      icon: Cloud,
    },
    {
      category: "Market Speed",
      title: "eSky Accelerates Time-to-Market by 75%",
      summary: "Backend modernization enables rapid deployment, cutting release cycles significantly.",
      impact: "75% Faster",
      icon: Zap,
    },
    {
      category: "Global Expansion",
      title: "Bank Reaches 36+ Countries with SEPA",
      summary: "New certification enabled immediate expansion into over 36 international markets.",
      impact: "Global Reach",
      icon: Globe,
    },
    {
      category: "FinTech Innovation",
      title: "Stablecoin Payments via AI Chatbot",
      summary: "MCP-based AI solution empowers users to pay in stablecoin anywhere, redefining payments.",
      impact: "AI Payments",
      icon: BotIcon,
    },
    {
      category: "AI Security",
      title: "LLM App Secures Sensitive Data",
      summary: "PII anonymization service protects user data while leveraging Large Language Models.",
      impact: "Data Safety",
      icon: Shield,
    },
    {
      category: "Efficiency",
      title: "App Setup Reduced from 2 Weeks to 1 Day",
      summary: "Frontend modernization streamlined the setup process, boosting developer productivity.",
      impact: "14x Faster",
      icon: Clock,
    },
    {
      category: "AWS Cost Cutting",
      title: "Major British Firm Cuts AWS Costs by 70%",
      summary: "Storage costs reduced by 70% and compute costs by 50% through expert optimization.",
      impact: "70% Savings",
      icon: Cloud,
    },
    {
      category: "Revenue Growth",
      title: "Data Migration Drives 4x Revenue Growth",
      summary: "Seamless data migration unlocked new insights and opportunities, quadrupling revenue.",
      impact: "400% Growth",
      icon: TrendingUp,
    },
    {
      category: "User Adoption",
      title: "Travelia Sees 31.6% User Growth",
      summary: "Platform improvements boosted adoption while cutting maintenance costs by 40%.",
      impact: "Growth & Savings",
      icon: UsersIcon,
    },
    {
      category: "FinTech Speed",
      title: "xpate Cuts Payouts from 7 Days to Minutes",
      summary: "Payment processing revolution allows e-commerce merchants to receive funds instantly.",
      impact: "Real-time",
      icon: Zap,
    },
    {
      category: "AI Efficiency",
      title: "Translation Costs Reduced by 99% with AI",
      summary: "AI-based solution automated translation processes, virtually eliminating manual costs.",
      impact: "99% Savings",
      icon: BrainIcon,
    },
    {
      category: "Infrastructure",
      title: "Construction Tech Saves $90k Annually",
      summary: "Infrastructure optimization delivered immediate and recurring annual savings.",
      impact: "$90k/Year",
      icon: Database,
    },
    {
      category: "Data Analysis",
      title: "New Data Lake Saves Hours of Analysis",
      summary: "xpate leveraged a $18k AWS grant to build a data lake that automates complex analysis.",
      impact: "Automated Insights",
      icon: BarChart,
    },
    {
      category: "Scalability",
      title: "GCI Migrates Terabytes to AWS",
      summary: "Legacy system migration to AWS improved scalability and performance for massive datasets.",
      impact: "Scalable",
      icon: Cloud,
    },
    {
      category: "Automation",
      title: "AI Cuts Manual Data Work to Zero",
      summary: "Travel document management fully automated, removing manual data entry entirely.",
      impact: "100% Automation",
      icon: BotIcon,
    },
    {
      category: "Rapid Development",
      title: "Fintech Marketplace Built in Weeks",
      summary: "BankGrader launched a complex marketplace in record time using agile methodology.",
      impact: "Rapid Launch",
      icon: Clock,
    },
    {
      category: "Cost Efficiency",
      title: "Observability Saves $720/Instance Monthly",
      summary: "Active observability methods for graphical computing drove significant cost reductions.",
      impact: "High Savings",
      icon: SearchIcon,
    },
    {
      category: "Startup Speed",
      title: "EnergyWeb Launches MVP in 6 Weeks",
      summary: "From concept to launch in just 6 weeks, proving the speed of modern development.",
      impact: "6 Weeks",
      icon: Zap,
    },
    {
      category: "Automation",
      title: "XTRF Automates Vendor Finding",
      summary: "Automation streamlined the vendor search process, making it faster and more reliable.",
      impact: "Automated",
      icon: SettingsIcon,
    },
    {
      category: "Business Impact",
      title: "£10M+ Loans Processed via Automation",
      summary: "Automated loan platform facilitated over £10M to British businesses efficiently.",
      impact: "£10M+ Flow",
      icon: TrendingUp,
    },
    {
      category: "Modernization",
      title: "PMG Modernizes for 7M Users",
      summary: "Marketplace modernization improved experience and performance for 7 million users.",
      impact: "7M Users",
      icon: UsersIcon,
    },
    {
      category: "Scalability",
      title: "Custom Adyen Integration at Scale",
      summary: "Built a custom payment integration that balances speed with enterprise-grade scalability.",
      impact: "Enterprise Scale",
      icon: Globe,
    },
    {
      category: "Content Management",
      title: "Headless CMS for Sports Organization",
      summary: "Enabled developer-free publishing for an international sports organization.",
      impact: "Agile Content",
      icon: Layout,
    },
    {
      category: "App Success",
      title: "Top Bill-Splitting App in Netherlands",
      summary: "WieBetaaltWat scaled to become the most popular app in its category.",
      impact: "#1 App",
      icon: Smartphone,
    },
    {
      category: "Productivity",
      title: "Pension Lab Boosts Dev Productivity",
      summary: "Templates and API upgrades significantly increased development speed and efficiency.",
      impact: "High Output",
      icon: Code,
    },
    {
      category: "Accessibility",
      title: "PMG Aligns Branding with A11y",
      summary: "Consolidated branding made fully aligned with accessibility standards.",
      impact: "Inclusive",
      icon: EyeIcon,
    },
    {
      category: "New Revenue",
      title: "MVP to Full Streaming Platform",
      summary: "Reservix turned an MVP into a full streaming platform, generating new revenue.",
      impact: "New Stream",
      icon: TrendingUp,
    },
    {
      category: "Funding",
      title: "Lipefi Prototype Secures Funding",
      summary: "Attractive prototype helped secure investor funding for the next stage of growth.",
      impact: "Funded",
      icon: TrophyIcon,
    },
  ]

  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-[var(--background)]">
      <NewsScrollShowcase items={newsItems} />

      {/* CTA Section */}
      <div className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-neon p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[var(--primary)]/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
              Verpassen Sie nicht den Anschluss
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 relative z-10">
              Die Konkurrenz schläft nicht. Automatisieren Sie Ihre Prozesse mit QORTEX und sichern Sie sich Ihren
              Wettbewerbsvorteil.
            </p>
            <div className="flex justify-center relative z-10">
              <Button
                size="lg"
                className="btn-3d text-primary-foreground border-0 rounded-xl px-8 py-6 text-lg"
              >
                Jetzt Transformation starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
