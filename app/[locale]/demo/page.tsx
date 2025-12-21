"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  Zap, 
  Settings, 
  Database, 
  Mail, 
  CheckCircle,
  Clock,
  Users,
  BarChart3
} from "lucide-react";
import { GlassIcon } from "@/components/ui/glass-icon";
import Link from "next/link";

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const workflowSteps = [
    {
      id: 1,
      title: "Email Trigger",
      description: "New customer inquiry received",
      icon: Mail,
      color: "blue",
      duration: 2000
    },
    {
      id: 2,
      title: "Data Processing",
      description: "Extract customer information",
      icon: Database,
      color: "green",
      duration: 1500
    },
    {
      id: 3,
      title: "AI Analysis",
      description: "Analyze inquiry intent and priority",
      icon: Zap,
      color: "purple",
      duration: 3000
    },
    {
      id: 4,
      title: "Route Assignment",
      description: "Assign to appropriate team member",
      icon: Users,
      color: "orange",
      duration: 1000
    },
    {
      id: 5,
      title: "Notification",
      description: "Send notification and create task",
      icon: CheckCircle,
      color: "emerald",
      duration: 1500
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    runWorkflow();
  };

  const runWorkflow = async () => {
    for (let i = 0; i < workflowSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, workflowSteps[i].duration));
      setCompletedSteps(prev => [...prev, i]);
    }
    setIsPlaying(false);
    setCurrentStep(-1);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
    setCompletedSteps([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8b4d4] via-[#8b9dc3] to-[#7c8bc4] pt-24 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-900 font-semibold mb-6 backdrop-blur-sm">
              Interactive Demo
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              See QORTEX in Action
            </h1>
            <p className="text-xl text-slate-800 mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience how QORTEX automates complex workflows with AI-powered intelligence. 
              Watch a real customer inquiry get processed automatically from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Controls */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 glass-card-neon bg-white/20 border-white/30 shadow-lg">
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={startDemo}
                disabled={isPlaying}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all hover:scale-105 disabled:opacity-50"
                size="lg"
              >
                {isPlaying ? (
                  <>
                    <Clock className="mr-2 h-5 w-5 animate-spin" />
                    Running Demo...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Start Demo
                  </>
                )}
              </Button>
              <Button
                onClick={resetDemo}
                variant="outline"
                className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm"
                size="lg"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Customer Inquiry Workflow</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Watch how QORTEX processes a customer inquiry through multiple automated steps
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => {
              const isActive = currentStep === index;
              const isCompleted = completedSteps.includes(index);
              const isPending = !isCompleted && !isActive;

              return (
                <Card 
                  key={step.id}
                  className={`p-6 transition-all duration-500 ${
                    isActive 
                      ? 'glass-card-neon bg-white/40 border-white/50 scale-105 shadow-xl' 
                      : isCompleted
                      ? 'glass-card-neon bg-green-500/20 border-green-400/30 shadow-lg'
                      : 'glass-card-neon bg-white/10 border-white/20 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <div className={`mb-4 flex justify-center ${isActive ? 'animate-pulse' : ''}`}>
                      <GlassIcon 
                        icon={step.icon} 
                        color={isCompleted ? "emerald" : step.color as any} 
                        size="lg" 
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                    
                    {/* Status Indicator */}
                    <div className="flex justify-center">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : isActive ? (
                        <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-slate-300 rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 hidden md:block">
                      <ArrowRight className={`h-6 w-6 ${
                        completedSteps.includes(index) ? 'text-green-600' : 'text-slate-400'
                      }`} />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Results */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass-card-neon bg-white/20 border-white/30 shadow-lg">
            <div className="text-center">
              <div className="mb-6">
                <GlassIcon icon={BarChart3} color="blue" size="xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Demo Results</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2.3s</div>
                  <div className="text-sm text-slate-600">Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                  <div className="text-sm text-slate-600">Manual Steps</div>
                </div>
              </div>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                This workflow typically takes 15-30 minutes when done manually. 
                QORTEX completed it in under 3 seconds with perfect accuracy.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card-neon bg-white/20 border-white/30 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              See how QORTEX can transform your business processes with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all hover:scale-105" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white/40 hover:bg-white/60 border-white/40 text-slate-900 rounded-xl backdrop-blur-sm" size="lg">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
