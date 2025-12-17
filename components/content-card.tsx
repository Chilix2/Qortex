"use client"

import { ArrowRight, LucideIcon, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassIcon } from "@/components/ui/glass-icon"
import { Button } from "@/components/ui/button"

interface ContentCardProps {
  category: string
  title: string
  description: string
  icon: LucideIcon
  color?: "blue" | "purple" | "orange" | "green" | "red" | "cyan"
  impact?: string
  impactLabel?: string
  features?: string[]
  className?: string
  ctaText?: string
  ctaLink?: string
}

export function ContentCard({
  category,
  title,
  description,
  icon,
  color = "blue",
  impact,
  impactLabel = "Impact",
  features,
  className,
  ctaText = "Mehr erfahren",
  ctaLink
}: ContentCardProps) {
  return (
    <div className={cn(
      "group relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300",
      "glass-card-neon bg-white/20 border-white/30 hover:bg-white/30 hover:scale-[1.02] hover:border-white/50",
      "shadow-lg hover:shadow-xl backdrop-blur-xl",
      className
    )}>
      <div>
        <div className="flex items-center justify-between mb-6">
          <GlassIcon icon={icon} color={color} size="md" />
          <span className={cn(
            "text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border",
            color === "blue" && "bg-blue-100/50 text-blue-800 border-blue-200/50",
            color === "purple" && "bg-purple-100/50 text-purple-800 border-purple-200/50",
            color === "orange" && "bg-orange-100/50 text-orange-800 border-orange-200/50",
            color === "green" && "bg-emerald-100/50 text-emerald-800 border-emerald-200/50",
            color === "red" && "bg-red-100/50 text-red-800 border-red-200/50",
            color === "cyan" && "bg-cyan-100/50 text-cyan-800 border-cyan-200/50",
          )}>
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-700 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start text-xs font-medium text-slate-600">
                <Check className={cn(
                  "h-3.5 w-3.5 mr-2 shrink-0 mt-0.5",
                  color === "blue" && "text-blue-600",
                  color === "purple" && "text-purple-600",
                  color === "orange" && "text-orange-600",
                  color === "green" && "text-emerald-600",
                  color === "red" && "text-red-600",
                  color === "cyan" && "text-cyan-600",
                )} />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-white/20 flex items-center justify-between">
        {impact ? (
          <div>
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-0.5">
              {impactLabel}
            </div>
            <div className={cn(
              "text-lg font-bold",
              color === "blue" && "text-blue-700",
              color === "purple" && "text-purple-700",
              color === "orange" && "text-orange-700",
              color === "green" && "text-emerald-700",
              color === "red" && "text-red-700",
              color === "cyan" && "text-cyan-700",
            )}>
              {impact}
            </div>
          </div>
        ) : (
          <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent text-slate-600 hover:text-blue-700 font-medium group/btn">
            {ctaText}
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        )}
        
        {impact && (
          <div className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300",
            "bg-white/40 text-slate-600 group-hover:text-white",
            color === "blue" && "group-hover:bg-blue-600",
            color === "purple" && "group-hover:bg-purple-600",
            color === "orange" && "group-hover:bg-orange-600",
            color === "green" && "group-hover:bg-emerald-600",
            color === "red" && "group-hover:bg-red-600",
            color === "cyan" && "group-hover:bg-cyan-600",
          )}>
            <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        )}
      </div>
    </div>
  )
}



