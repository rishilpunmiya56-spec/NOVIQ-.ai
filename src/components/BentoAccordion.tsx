"use client";

import React, { useState, useEffect } from "react";
import GlowCard from "@/components/GlowCard";

interface BentoItem {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Responsive breakpoint tracking (768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items: BentoItem[] = [
    {
      id: 0,
      title: "Competitor Intelligence",
      subtitle: "Track advertising spend, page edits, and keyword focus.",
      badge: "Real-time Auditing",
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      content: (
        <div className="space-y-3 font-mono text-[11px] leading-tight">
          <div className="flex justify-between text-brand-mint/35 border-b border-brand-mint/5 pb-1.5 font-bold">
            <span>COMPETITOR</span>
            <span>SEO SCORE</span>
            <span>AD ESTIMATE</span>
          </div>
          <div className="flex justify-between items-center text-brand-powder/90 py-0.5">
            <span className="flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              competitor-a.com
            </span>
            <span className="text-red-400 font-bold">42%</span>
            <span>$12,400/mo</span>
          </div>
          <div className="flex justify-between items-center text-brand-powder/90 py-0.5">
            <span className="flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              competitor-b.com
            </span>
            <span className="text-brand-forsythia font-bold">78%</span>
            <span>$4,200/mo</span>
          </div>
          <div className="flex justify-between items-center text-brand-powder/95 py-0.5">
            <span className="flex items-center gap-1.5 font-sans font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              noviq.ai (You)
            </span>
            <span className="text-green-400 font-bold">96%</span>
            <span className="text-brand-forsythia font-bold">$920/mo</span>
          </div>
          <div className="bg-[#091216]/50 border border-brand-mint/5 p-3 rounded-xl text-[10px] text-brand-mint/60 mt-4 leading-normal font-sans">
            <span className="text-brand-forsythia font-bold font-mono uppercase tracking-wider block mb-1">AI Recommendation</span>
            Competitor-A has scaled target ads for keyword <code className="text-brand-saffron bg-brand-noir/40 px-1 rounded font-mono font-bold">marketing automation</code>. Launch Counter-Campaign.
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Autonomous Campaign Planner",
      subtitle: "Map buyer intent directly to personalized marketing cycles.",
      badge: "Automation Pipeline",
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      content: (
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4 font-mono text-[10px]">
            <div className="flex items-center gap-3 text-brand-powder border border-brand-mint/5 bg-[#091216]/40 p-2.5 rounded-xl">
              <span className="w-5 h-5 rounded-lg bg-brand-forsythia/10 flex items-center justify-center font-bold text-brand-forsythia text-[9px] border border-brand-forsythia/20">1</span>
              <div>
                <p className="font-bold text-brand-powder">Market Trigger</p>
                <p className="text-[9px] text-brand-mint/45">SEO gap detected in SaaS</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-brand-powder border border-brand-forsythia/20 bg-[#091216]/60 p-2.5 rounded-xl relative">
              <span className="w-5 h-5 rounded-lg bg-brand-forsythia/25 flex items-center justify-center font-bold text-brand-forsythia text-[9px] border border-brand-forsythia/35">2</span>
              <div>
                <p className="font-bold text-brand-powder">Agent Action</p>
                <p className="text-[9px] text-brand-mint/45">Copywriting agent drafting copy</p>
              </div>
              <span className="absolute right-3 top-3.5 w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-ping" />
            </div>

            <div className="flex items-center gap-3 text-brand-powder border border-brand-mint/5 bg-[#091216]/40 p-2.5 rounded-xl opacity-40">
              <span className="w-5 h-5 rounded-lg bg-brand-mint/10 flex items-center justify-center font-bold text-brand-mint text-[9px]">3</span>
              <div>
                <p className="font-bold text-brand-mint">Asset Gen</p>
                <p className="text-[9px] text-brand-mint/45">Ad banner & HTML rendering</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-brand-powder border border-brand-mint/5 bg-[#091216]/40 p-2.5 rounded-xl opacity-40">
              <span className="w-5 h-5 rounded-lg bg-brand-mint/10 flex items-center justify-center font-bold text-brand-mint text-[9px]">4</span>
              <div>
                <p className="font-bold text-brand-mint">Deploy & Audit</p>
                <p className="text-[9px] text-brand-mint/45">Launch via Google & LinkedIn API</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "SEO Keyword Assistant",
      subtitle: "Map indexing search volume and analyze content gaps.",
      badge: "SEO Insights",
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      content: (
        <div className="space-y-3.5 font-mono text-[11px]">
          <div className="bg-[#091216]/40 border border-brand-mint/10 p-3 rounded-2xl">
            <div className="flex justify-between items-center mb-1.5 text-[11px] font-bold">
              <span className="text-brand-powder">SEO Index Quality</span>
              <span className="text-brand-forsythia font-bold">89/100</span>
            </div>
            <div className="w-full bg-brand-mint/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-brand-forsythia to-brand-saffron h-full w-[89%]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-brand-mint/70">
              <span>Keyword Rank</span>
              <span className="text-green-400 font-semibold">+14 positions</span>
            </div>
            <div className="flex justify-between text-brand-mint/70">
              <span>Backlink Health</span>
              <span className="text-brand-forsythia font-semibold">Excellent</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Copywriting Engine",
      subtitle: "Generate high-converting messaging and newsletter templates.",
      badge: "Asset Builder",
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
        </svg>
      ),
      content: (
        <div className="space-y-3 font-mono text-[11px]">
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/40">
            <p className="text-[9px] text-brand-forsythia uppercase tracking-widest font-bold mb-1">Subject Line A (92.4% Score)</p>
            <p className="text-brand-powder leading-normal font-sans">Stop wasting money on marketing tools that don&apos;t talk to each other.</p>
          </div>
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/40">
            <p className="text-[9px] text-brand-mint/50 uppercase tracking-widest font-bold mb-1">Subject Line B (74.1% Score)</p>
            <p className="text-brand-mint/70 leading-normal font-sans text-xs">Meet Noviq, the unified operating system for autonomous marketing.</p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "SWOT Analyzer & Growth Metrics",
      subtitle: "Build instant SWOT boards to evaluate strategic alignment.",
      badge: "Strategic Audit",
      icon: (
        <svg className="w-5 h-5 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      content: (
        <div className="grid grid-cols-2 gap-3.5 text-[9px] font-mono leading-tight h-full">
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/30">
            <span className="text-brand-forsythia font-bold block mb-1">STRENGTHS</span>
            <span className="text-brand-mint/60">Fast content scaling, unified analytics.</span>
          </div>
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/30">
            <span className="text-brand-saffron font-bold block mb-1">WEAKNESSES</span>
            <span className="text-brand-mint/60">Limited historical brand context.</span>
          </div>
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/30">
            <span className="text-green-400 font-bold block mb-1">OPPORTUNITIES</span>
            <span className="text-brand-mint/60">Unexplored keyword focus.</span>
          </div>
          <div className="border border-brand-mint/5 p-2.5 rounded-xl bg-[#091216]/30">
            <span className="text-red-400 font-bold block mb-1">THREATS</span>
            <span className="text-brand-mint/60">Legacy tools adding simple scripting.</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6 bg-brand-noir noise-overlay-premium border-t border-brand-mint/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-expedition/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            Core Workspace Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-brand-powder">
            Unified Intelligent Workspace
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm md:text-base leading-relaxed">
            Noviq consolidates your marketing stack into one fluid hub operated by autonomous AI employees.
          </p>
        </div>

        {/* Responsive Bento-to-Accordion Wrapper */}
        <div className="w-full">
          {isMobile ? (
            /* MOBILE LAYOUT: Touch-Optimized Accordion List */
            <div className="space-y-4 border border-brand-mint/10 bg-brand-expedition/5 p-4 rounded-[28px] backdrop-blur-xl">
              {items.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isActive 
                        ? "border-brand-forsythia/40 bg-brand-expedition/20" 
                        : "border-brand-mint/5 bg-transparent"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => setActiveIndex(idx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-brand-expedition/30 border border-brand-mint/10">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-brand-forsythia tracking-wider uppercase">
                            {item.badge}
                          </span>
                          <h3 className="text-xs font-bold font-mono text-brand-powder mt-0.5 uppercase tracking-wide">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <svg
                        className={`w-4 h-4 text-brand-mint/60 transition-transform duration-350 ease-in-out ${
                          isActive ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Accordion Drawers transitioning using CSS grid-template-rows */}
                    <div
                      className="grid transition-[grid-template-rows] duration-350 ease-in-out"
                      style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 pt-0 border-t border-brand-mint/5 bg-[#091216]/40">
                          <p className="text-xs text-brand-mint/65 mb-4 leading-relaxed font-sans">
                            {item.subtitle}
                          </p>
                          <div className="p-4 rounded-xl border border-brand-mint/10 bg-brand-expedition/10 shadow-inner">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* DESKTOP LAYOUT: Bento Grid with cursor-following GlowCards */
            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
              
              {/* Card 0: Wide (Col Span 2, Row Span 1) */}
              <GlowCard
                onMouseEnter={() => setActiveIndex(0)}
                className={`col-span-2 p-8 flex flex-col justify-between transition-all duration-180 ease-out group ${
                  activeIndex === 0
                    ? "border-brand-forsythia/40 bg-brand-expedition/25"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="max-w-[70%]">
                    <span className="text-[9px] font-mono text-brand-forsythia tracking-widest uppercase font-bold">
                      {items[0].badge}
                    </span>
                    <h3 className="text-lg font-bold font-mono text-brand-powder mt-1.5">
                      {items[0].title}
                    </h3>
                    <p className="text-xs text-brand-mint/60 mt-2 leading-relaxed font-sans">
                      {items[0].subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-brand-expedition/40 border border-brand-mint/10 group-hover:scale-105 transition-transform duration-180">
                    {items[0].icon}
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-2xl border border-brand-mint/5 bg-[#091216]/45">
                  {items[0].content}
                </div>
              </GlowCard>

              {/* Card 1: Tall (Col Span 1, Row Span 2) */}
              <GlowCard
                onMouseEnter={() => setActiveIndex(1)}
                className={`row-span-2 p-8 flex flex-col justify-between transition-all duration-180 ease-out group ${
                  activeIndex === 1
                    ? "border-brand-forsythia/40 bg-brand-expedition/25"
                    : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono text-brand-forsythia tracking-widest uppercase font-bold">
                        {items[1].badge}
                      </span>
                      <div className="p-3 rounded-2xl bg-brand-expedition/40 border border-brand-mint/10 group-hover:scale-105 transition-transform duration-180">
                        {items[1].icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-mono text-brand-powder mt-4">
                      {items[1].title}
                    </h3>
                    <p className="text-xs text-brand-mint/60 mt-2 leading-relaxed font-sans">
                      {items[1].subtitle}
                    </p>
                  </div>
                  <div className="mt-6 p-5 rounded-2xl border border-brand-mint/5 bg-[#091216]/45 flex-1 flex flex-col justify-center">
                    {items[1].content}
                  </div>
                </div>
              </GlowCard>

              {/* Card 2: Medium (Col Span 1, Row Span 1) */}
              <GlowCard
                onMouseEnter={() => setActiveIndex(2)}
                className={`p-8 flex flex-col justify-between transition-all duration-180 ease-out group ${
                  activeIndex === 2
                    ? "border-brand-forsythia/40 bg-brand-expedition/25"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-brand-forsythia tracking-widest uppercase font-bold">
                      {items[2].badge}
                    </span>
                    <h3 className="text-base font-bold font-mono text-brand-powder mt-1.5">
                      {items[2].title}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-expedition/40 border border-brand-mint/10 group-hover:scale-105 transition-transform duration-180">
                    {items[2].icon}
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl border border-brand-mint/5 bg-[#091216]/45">
                  {items[2].content}
                </div>
              </GlowCard>

              {/* Card 3: Medium (Col Span 1, Row Span 1) */}
              <GlowCard
                onMouseEnter={() => setActiveIndex(3)}
                className={`p-8 flex flex-col justify-between transition-all duration-180 ease-out group ${
                  activeIndex === 3
                    ? "border-brand-forsythia/40 bg-brand-expedition/25"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-brand-forsythia tracking-widest uppercase font-bold">
                      {items[3].badge}
                    </span>
                    <h3 className="text-base font-bold font-mono text-brand-powder mt-1.5">
                      {items[3].title}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-expedition/40 border border-brand-mint/10 group-hover:scale-105 transition-transform duration-180">
                    {items[3].icon}
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl border border-brand-mint/5 bg-[#091216]/45">
                  {items[3].content}
                </div>
              </GlowCard>

              {/* Card 4: Full Wide (Col Span 3, Row Span 1) */}
              <GlowCard
                onMouseEnter={() => setActiveIndex(4)}
                className={`col-span-3 p-8 flex flex-col justify-between transition-all duration-180 ease-out group ${
                  activeIndex === 4
                    ? "border-brand-forsythia/40 bg-brand-expedition/25"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 h-full">
                  <div className="sm:max-w-[40%]">
                    <span className="text-[9px] font-mono text-brand-forsythia tracking-widest uppercase font-bold">
                      {items[4].badge}
                    </span>
                    <h3 className="text-lg font-bold font-mono text-brand-powder mt-1.5">
                      {items[4].title}
                    </h3>
                    <p className="text-xs text-brand-mint/60 mt-2.5 leading-relaxed font-sans">
                      {items[4].subtitle}
                    </p>
                  </div>
                  <div className="flex-1 w-full p-5 rounded-2xl border border-brand-mint/5 bg-[#091216]/45">
                    {items[4].content}
                  </div>
                </div>
              </GlowCard>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
