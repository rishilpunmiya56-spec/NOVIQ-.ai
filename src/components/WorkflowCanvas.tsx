"use client";

import React, { useState } from "react";
import GlowCard from "@/components/GlowCard";

type NodeStatus = "idle" | "processing" | "success";

export default function WorkflowCanvas() {
  const [idea, setIdea] = useState<string>("B2B SaaS calendar scheduling assistant");
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "complete">("idle");
  const [node1Status, setNode1Status] = useState<NodeStatus>("idle");
  const [node2Status, setNode2Status] = useState<NodeStatus>("idle");
  const [node3Status, setNode3Status] = useState<NodeStatus>("idle");

  const runPipeline = () => {
    if (pipelineState === "running") return;
    setPipelineState("running");
    
    // Step 1: Input & Research
    setNode1Status("processing");
    setNode2Status("idle");
    setNode3Status("idle");

    setTimeout(() => {
      setNode1Status("success");
      setNode2Status("processing");
    }, 1800);

    // Step 2: Audit & Copywriting
    setTimeout(() => {
      setNode2Status("success");
      setNode3Status("processing");
    }, 3600);

    // Step 3: Deployment
    setTimeout(() => {
      setNode3Status("success");
      setPipelineState("complete");
    }, 5400);
  };

  return (
    <section className="relative py-32 px-6 bg-brand-noir noise-overlay-premium border-t border-brand-mint/5 overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-brand-expedition/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            Interactive Agent Pipeline
          </div>
          <h2 className="text-4xl font-bold font-mono tracking-tight text-brand-powder">
            Watch the Machine Work
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm leading-relaxed">
            Enter a startup concept or target domain. Watch how the specialized agents communicate to analyze, draft content, and launch the brand.
          </p>
        </div>

        {/* Input box area */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-20 p-2.5 rounded-[22px] bg-[#091216]/50 border border-brand-mint/10 backdrop-blur-xl">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Enter startup or campaign idea..."
            disabled={pipelineState === "running"}
            className="flex-1 px-4 py-3 bg-[#060b0d]/50 border border-brand-mint/5 hover:border-brand-mint/10 focus:border-brand-forsythia/30 text-xs font-mono rounded-xl text-brand-powder outline-none transition-colors duration-150 disabled:opacity-60"
          />
          <button
            onClick={runPipeline}
            disabled={pipelineState === "running"}
            className={`px-6 py-3 rounded-xl text-xs font-bold font-mono tracking-wide text-brand-noir transition-all duration-150 ${
              pipelineState === "running"
                ? "bg-brand-mint/10 text-brand-mint/40 cursor-not-allowed border border-brand-mint/5"
                : "bg-gradient-to-r from-brand-forsythia to-brand-saffron shadow-lg shadow-brand-forsythia/10 hover:brightness-105 active:scale-[0.98]"
            }`}
          >
            {pipelineState === "running" ? "Syncing..." : "Run AI Pipeline"}
          </button>
        </div>

        {/* Node map container */}
        <div className="relative border border-brand-mint/10 bg-[#091216]/40 p-6 md:p-12 rounded-[32px] backdrop-blur-2xl overflow-hidden min-h-[360px] flex items-center justify-center">
          {/* Animated Flow Paths SVG layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "360px" }}>
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFC801" />
                <stop offset="100%" stopColor="#FF9932" />
              </linearGradient>
            </defs>

            {/* Left to Middle paths */}
            <path d="M 120 180 L 300 100" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />
            <path d="M 120 180 L 300 180" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />
            <path d="M 120 180 L 300 260" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />

            {/* Middle to Right paths */}
            <path d="M 460 100 L 640 180" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />
            <path d="M 460 180 L 640 180" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />
            <path d="M 460 260 L 640 180" stroke="rgba(241, 246, 244, 0.03)" strokeWidth="1.5" fill="none" />

            {/* Active flow animations (traveling dashes) */}
            {node1Status === "processing" && (
              <>
                <path d="M 120 180 L 300 100" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
                <path d="M 120 180 L 300 180" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
                <path d="M 120 180 L 300 260" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
              </>
            )}

            {node2Status === "processing" && (
              <>
                <path d="M 460 100 L 640 180" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
                <path d="M 460 180 L 640 180" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
                <path d="M 460 260 L 640 180" stroke="url(#glowGrad)" strokeWidth="2" fill="none" strokeDasharray="8, 30" strokeDashoffset="0" className="animate-[marquee-premium_3s_linear_infinite]" />
              </>
            )}
          </svg>

          {/* Node containers wrapper */}
          <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-4 relative z-10 font-mono text-left">
            
            {/* Column 1: Input node */}
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-40">
              <GlowCard
                className={`p-4 transition-all duration-300 w-full bg-[#060b0d]/50 ${
                  node1Status === "processing"
                    ? "border-brand-forsythia/40 shadow-lg shadow-brand-forsythia/5 scale-[1.02]"
                    : node1Status === "success"
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-brand-mint/5"
                }`}
              >
                <span className="text-[8px] text-brand-mint/40 uppercase block mb-1 font-bold">Source Input</span>
                <span className="text-[10px] text-brand-powder font-bold block truncate">{idea}</span>
                <div className="flex items-center gap-1.5 mt-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    node1Status === "processing" ? "bg-brand-forsythia animate-ping" : node1Status === "success" ? "bg-green-400" : "bg-brand-mint/20"
                  }`} />
                  <span className="text-[8px] text-brand-mint/50 uppercase font-bold tracking-wider">
                    {node1Status === "processing" ? "Researching" : node1Status === "success" ? "Audited" : "Pending"}
                  </span>
                </div>
              </GlowCard>
            </div>

            {/* Column 2: Agent audit nodes */}
            <div className="flex flex-col justify-center gap-4 w-full md:w-56">
              
              <GlowCard
                className={`p-3.5 transition-all duration-300 bg-[#060b0d]/40 ${
                  node2Status === "processing"
                    ? "border-brand-forsythia/40 shadow-lg shadow-brand-forsythia/5 scale-[1.02]"
                    : node2Status === "success"
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-brand-mint/5"
                }`}
              >
                <div className="flex justify-between items-center text-[10px] mb-1 font-bold">
                  <span className="text-brand-powder">1. Market Auditor</span>
                  {node1Status === "success" && (
                    <span className="text-green-400 text-[8px]">98% Match</span>
                  )}
                </div>
                <span className="text-[8px] text-brand-mint/50 block leading-normal font-sans">Scraping demand & intent metrics</span>
              </GlowCard>

              <GlowCard
                className={`p-3.5 transition-all duration-300 bg-[#060b0d]/40 ${
                  node2Status === "processing"
                    ? "border-brand-forsythia/40 shadow-lg shadow-brand-forsythia/5 scale-[1.02]"
                    : node2Status === "success"
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-brand-mint/5"
                }`}
              >
                <div className="flex justify-between items-center text-[10px] mb-1 font-bold">
                  <span className="text-brand-powder">2. SWOT Engine</span>
                  {node1Status === "success" && (
                    <span className="text-green-400 text-[8px]">Compiled</span>
                  )}
                </div>
                <span className="text-[8px] text-brand-mint/50 block leading-normal font-sans">Evaluating alignment strengths</span>
              </GlowCard>

              <GlowCard
                className={`p-3.5 transition-all duration-300 bg-[#060b0d]/40 ${
                  node2Status === "processing"
                    ? "border-brand-forsythia/40 shadow-lg shadow-brand-forsythia/5 scale-[1.02]"
                    : node2Status === "success"
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-brand-mint/5"
                }`}
              >
                <div className="flex justify-between items-center text-[10px] mb-1 font-bold">
                  <span className="text-brand-powder">3. Copywriter</span>
                  {node2Status === "success" && (
                    <span className="text-green-400 text-[8px]">Ready</span>
                  )}
                </div>
                <span className="text-[8px] text-brand-mint/50 block leading-normal font-sans">Constructing ad copy drafts</span>
              </GlowCard>
            </div>

            {/* Column 3: Outputs deployment */}
            <div className="flex flex-col justify-center items-center md:items-end w-full md:w-40">
              <GlowCard
                className={`p-4 transition-all duration-300 w-full bg-[#060b0d]/50 ${
                  node3Status === "processing"
                    ? "border-brand-forsythia/40 shadow-lg shadow-brand-forsythia/5 scale-[1.02]"
                    : node3Status === "success"
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-brand-mint/5"
                }`}
              >
                <span className="text-[8px] text-brand-mint/40 uppercase block mb-1 font-bold">Deployable Bundles</span>
                <span className="text-[10px] text-brand-powder font-bold block">Google Campaign</span>
                <div className="flex items-center gap-1.5 mt-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    node3Status === "processing" ? "bg-brand-forsythia animate-ping" : node3Status === "success" ? "bg-green-400" : "bg-brand-mint/20"
                  }`} />
                  <span className="text-[8px] text-brand-mint/50 uppercase font-bold tracking-wider">
                    {node3Status === "processing" ? "Deploying" : node3Status === "success" ? "Complete" : "Pending"}
                  </span>
                </div>
              </GlowCard>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
