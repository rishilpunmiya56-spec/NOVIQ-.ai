"use client";

import React, { useState, useEffect } from "react";
import GlowCard from "@/components/GlowCard";

interface Agent {
  name: string;
  role: string;
  status: "idle" | "running" | "synced";
  statusText: string;
  confidence: number;
  icon: React.ReactNode;
  capability: string;
  output: string;
}

export default function AgentGrid() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      name: "Market Analyst",
      role: "Audits size, volume, and customer search intent.",
      status: "running",
      statusText: "Mapping TAM...",
      confidence: 97,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      capability: "Target TAM/SAM estimation, semantic indexing",
      output: "TAM: $14B, SAM: $1.2B. High buyer intent for 'AI integrations'.",
    },
    {
      name: "Competitor Auditor",
      role: "Tracks changes in competitor landing pages and ad spend.",
      status: "running",
      statusText: "Crawling prices...",
      confidence: 98,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      capability: "Feature mapping, ad script changes",
      output: "Competitor B modified pricing package. Added +3 workflow seats.",
    },
    {
      name: "SEO Crawler",
      role: "Identifies search ranking index quality and gaps.",
      status: "synced",
      statusText: "Gaps Audited",
      confidence: 99,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      capability: "Authority indexing, crawl rate optimization",
      output: "4 keyword targets identified. Rank opportunity: Top 3.",
    },
    {
      name: "Social Listening Agent",
      role: "Monitors Reddit, Twitter, and LinkedIn intent indicators.",
      status: "running",
      statusText: "Scraping social...",
      confidence: 94,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      capability: "Buyer sentiment extraction, trend capture",
      output: "32 intent posts tracked on Reddit r/startups regarding marketing cost.",
    },
    {
      name: "Creative Director",
      role: "Generates design systems, visual briefs, and color templates.",
      status: "synced",
      statusText: "Theme Locked",
      confidence: 96,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      capability: "SVG generation, palette mapping, layout briefs",
      output: "Constructed premium color palette (Noir + Forsythia + Saffron).",
    },
    {
      name: "Copywriting Architect",
      role: "Auto-drafts newsletters, landing page copy, and subject lines.",
      status: "running",
      statusText: "Drafting copy...",
      confidence: 98,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
        </svg>
      ),
      capability: "Conversion hook scoring, multi-variant headers",
      output: "Generated 3 headlines. Expected click-through rate increase +18%.",
    },
    {
      name: "Campaign Planner",
      role: "Coordinates and deploys multi-channel marketing campaigns.",
      status: "synced",
      statusText: "Flow Synced",
      confidence: 95,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      capability: "API pipeline dispatch, budget constraints",
      output: "Ad layout dispatch ready. Target launch: 10:00 AM.",
    },
    {
      name: "SWOT Validator",
      role: "Evaluates product ideas and compiles SWOT boards.",
      status: "synced",
      statusText: "SWOT Audited",
      confidence: 98,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      capability: "Risk extraction, segment alignment mapping",
      output: "Identified 3 market vulnerabilities and 5 core strengths.",
    },
    {
      name: "Trend Predictor",
      role: "Predicts customer volume shifts using search trends.",
      status: "running",
      statusText: "Predicting...",
      confidence: 93,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      ),
      capability: "Regression forecasting, seasonal keyword spikes",
      output: "Forecasted +24% growth in search volume for 'no-code marketing'.",
    },
    {
      name: "Analytics Agent",
      role: "Audits conversions, click cycles, and ROAS performance.",
      status: "synced",
      statusText: "Report Synced",
      confidence: 97,
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2M4 21h16" />
        </svg>
      ),
      capability: "Attribution modeling, cohort retention audits",
      output: "Average ROAS is 4.2x. Conversion flow is stable.",
    },
  ]);

  // Simulate running status changes to make it look alive
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => {
          if (agent.status === "running") {
            const confidenceOffset = (Math.random() - 0.5) * 0.3;
            return {
              ...agent,
              confidence: parseFloat((agent.confidence + confidenceOffset).toFixed(1)),
            };
          }
          return agent;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="agents" className="relative py-32 px-6 bg-brand-noir noise-overlay-premium border-t border-brand-mint/5 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-expedition/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            AI Department
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-brand-powder">
            Meet Your New AI Employees
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm md:text-base leading-relaxed">
            Ten specialized agents executing workflows concurrently. They coordinate via a shared workspace model to compile, validate, and scale growth projects.
          </p>
        </div>

        {/* Grid Layout of 10 Agents wrapping cards in GlowCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => {
            const isRunning = agent.status === "running";
            return (
              <GlowCard
                key={i}
                className="p-6 transition-all duration-200 group relative bg-[#091216]/50 flex flex-col justify-between"
              >
                <div>
                  {/* Header structure */}
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-brand-expedition/30 border border-brand-mint/10 group-hover:border-brand-forsythia/30 transition-all duration-200">
                        {agent.icon}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold font-mono text-brand-powder group-hover:text-brand-forsythia transition-all duration-150 uppercase tracking-wide">
                          {agent.name}
                        </h3>
                        <span className="text-[9px] font-mono text-brand-mint/40">
                          {agent.confidence}% Confidence
                        </span>
                      </div>
                    </div>

                    {/* Status badge pill */}
                    <span
                      className={`px-2.5 py-1 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 ${
                        isRunning
                          ? "bg-brand-forsythia/10 text-brand-forsythia border border-brand-forsythia/20"
                          : "bg-green-500/10 text-green-400 border border-green-500/20"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isRunning ? "bg-brand-forsythia animate-ping" : "bg-green-400"
                        }`}
                      />
                      {agent.statusText}
                    </span>
                  </div>

                  <p className="text-xs text-brand-mint/65 mb-6 leading-relaxed min-h-[36px]">
                    {agent.role}
                  </p>
                </div>

                <div>
                  {/* Capability line */}
                  <div className="mb-4 text-[9px] font-mono text-brand-mint/40 border-t border-brand-mint/5 pt-3 uppercase tracking-wider">
                    <span className="text-brand-forsythia/70 font-bold block mb-0.5">CAPABILITY</span>
                    {agent.capability}
                  </div>

                  {/* Dynamic console log mock output */}
                  <div className="bg-[#060b0d]/60 rounded-xl border border-brand-mint/5 p-3.5 font-mono text-[9px] text-brand-powder/85 relative overflow-hidden">
                    <div className="text-[8px] text-brand-mint/30 uppercase tracking-widest mb-1.5 font-bold">
                      Output Log
                    </div>
                    <code className="leading-relaxed block whitespace-normal">
                      {agent.output}
                    </code>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
