"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Github, Twitter, Calendar, Star, ArrowRight, Heart } from "lucide-react"

export default function CommunityPage() {
  const platforms = [
    {
      name: "Discord Server",
      description: "Chatten Sie live mit anderen Entwicklern, stellen Sie Fragen und erhalten Sie direktes Feedback vom Team.",
      icon: MessageSquare,
      color: "text-indigo-500",
      stats: "2.5k+ Mitglieder",
      cta: "Discord beitreten",
      link: "#",
    },
    {
      name: "GitHub Discussions",
      description: "Melden Sie Bugs, schlagen Sie Features vor und tragen Sie zum Open-Source-Ökosystem bei.",
      icon: Github,
      color: "text-slate-900",
      stats: "150+ Contributors",
      cta: "Zu GitHub",
      link: "#",
    },
    {
      name: "Community Forum",
      description: "Tiefgehende Diskussionen, Tutorials und Showcases für komplexe Automatisierungs-Lösungen.",
      icon: Users,
      color: "text-blue-500",
      stats: "500+ Themen",
      cta: "Zum Forum",
      link: "#",
    },
    {
      name: "Social Media",
      description: "Folgen Sie uns für schnelle Updates, Tipps und Highlights aus der Community.",
      icon: Twitter,
      color: "text-sky-500",
      stats: "10k+ Follower",
      cta: "Folgen",
      link: "#",
    },
  ]

  const upcomingEvents = [
    {
      title: "QORTEX Developer Meetup #4",
      date: "15. Jan 2025 • 18:00 Uhr",
      type: "Online Event",
      description: "Deep Dive in die neuen KI-Features von QORTEX 2.0 mit Live-Demos.",
    },
    {
      title: "Workshop: Advanced RAG Pipelines",
      date: "22. Jan 2025 • 14:00 Uhr",
      type: "Workshop",
      description: "Lernen Sie, wie Sie komplexe Retrieval-Augmented Generation Workflows bauen.",
    },
    {
      title: "Community Town Hall",
      date: "01. Feb 2025 • 17:00 Uhr",
      type: "Live Stream",
      description: "Q&A Session mit den Gründern und Roadmap-Update für Q1.",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 border-purple-200 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
            Global Community
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Werden Sie Teil der <span className="text-gradient-purple">Bewegung</span>
          </h1>
          <p className="text-xl text-slate-600">
            Verbinden Sie sich mit tausenden von Automatisierungs-Experten. Lernen, teilen und wachsen Sie gemeinsam.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              <MessageSquare className="mr-2 h-4 w-4" />
              Discord beitreten
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 rounded-xl">
              <Github className="mr-2 h-4 w-4" />
              Star us on GitHub
            </Button>
          </div>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader>
                <div className={`h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${platform.color}`}>
                  <platform.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
                <CardDescription className="min-h-[60px]">{platform.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-semibold text-slate-500">{platform.stats}</span>
                <a href={platform.link} className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  {platform.cta} <ArrowRight className="h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Events & Contribution Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Events */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-500" />
              Kommende Events
            </h2>
            <div className="grid gap-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">{event.type}</Badge>
                      <span className="text-sm text-slate-500 font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{event.description}</p>
                  </div>
                  <Button variant="outline" className="shrink-0 rounded-xl">Registrieren</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Spotlight */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Community Spotlight
            </h2>
            <Card className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
              <CardContent className="p-8 relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center text-2xl border-2 border-white/50">
                    👩‍💻
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Contributor des Monats</h3>
                    <p className="text-indigo-200">Anna K. aus Berlin</p>
                  </div>
                </div>
                <p className="text-indigo-100 italic">
                  "Anna hat im letzten Monat 3 neue Integrationen beigesteuert und über 50 Fragen im Forum beantwortet. Danke Anna!"
                </p>
                <div className="flex items-center gap-2 text-sm text-indigo-300">
                  <Heart className="h-4 w-4 text-red-400 fill-red-400" />
                  <span>500+ Reputation Points</span>
                </div>
              </CardContent>
              <CardFooter className="relative z-10 border-t border-white/10 pt-4">
                <Button variant="ghost" className="w-full text-white hover:bg-white/10 hover:text-white">
                  Nominiere jemanden
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

      </div>
    </main>
  )
}
