"use client";

import React, { useState } from "react";
import GlowCard from "@/components/GlowCard";

// Trusted By Companies - Scrolling Marquee Logo Bar
export function TrustedBy() {
  const logos = [
    "Stripe", "Linear", "Vercel", "OpenAI", "Notion", "Perplexity", "Arc Browser", "Clay"
  ];
  return (
    <section className="py-16 border-y border-brand-mint/5 bg-brand-expedition/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center font-mono text-[9px] font-bold text-brand-mint/40 uppercase tracking-widest">
          Trusted by high-growth startup engineering and design teams
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-noir to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-noir to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee-premium flex gap-20 items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <span 
              key={idx} 
              className="text-base md:text-lg font-bold font-mono text-brand-mint/25 hover:text-brand-forsythia/60 transition-colors duration-150 select-none cursor-default tracking-widest"
            >
              {"//" + logo.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// The Marketing Problem Today - siloing vs. unified AI employees
export function MarketingProblem() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
          The Growth Problem
        </div>
        <h2 className="text-4xl font-bold font-mono tracking-tight text-brand-powder">
          Legacy Marketing is Broken
        </h2>
        <p className="text-brand-mint/60 mt-4 text-sm leading-relaxed">
          Growth departments waste hundreds of hours configuring point solutions that don&apos;t share context. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Old Way Card wrapped in GlowCard */}
        <GlowCard className="p-8 border-red-500/10 bg-red-500/5 hover:border-red-500/20 transition-all duration-200">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <h3 className="text-sm font-bold font-mono text-brand-powder uppercase tracking-wider">The Siloed Pipeline</h3>
          </div>
          <ul className="space-y-4 font-mono text-xs text-brand-mint/70">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold shrink-0 font-sans">×</span>
              <span><strong>Manual competitor tracking:</strong> Sheets get stale in 48 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold shrink-0 font-sans">×</span>
              <span><strong>Disconnected Copywriting:</strong> Copywriters draft assets blind to active search volume gaps.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold shrink-0 font-sans">×</span>
              <span><strong>Human Latency:</strong> Constructing SEO briefs and campaigns takes weeks of reviews.</span>
            </li>
          </ul>
        </GlowCard>

        {/* New Way Card wrapped in GlowCard */}
        <GlowCard className="p-8 border-brand-forsythia/20 bg-brand-expedition/10 shadow-lg hover:border-brand-forsythia/35 transition-all duration-200">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-forsythia animate-pulse" />
            <h3 className="text-sm font-bold font-mono text-brand-powder uppercase tracking-wider">The Noviq Operating System</h3>
          </div>
          <ul className="space-y-4 font-mono text-xs text-brand-mint/90">
            <li className="flex items-start gap-3">
              <span className="text-brand-forsythia font-bold shrink-0 font-sans">✓</span>
              <span><strong>Unified context models:</strong> Every agent shares competitor analysis, SWOT, and brand books instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-forsythia font-bold shrink-0 font-sans">✓</span>
              <span><strong>Concurrently auditing:</strong> Crawlers check competitor adjustments and edit keywords in real-time.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-forsythia font-bold shrink-0 font-sans">✓</span>
              <span><strong>Autonomous execution:</strong> Agents construct copy, format SWOT boards, and launch ad packages.</span>
            </li>
          </ul>
        </GlowCard>
      </div>
    </section>
  );
}

// Integrations - Connected Systems Grid
export function Integrations() {
  const integrations = [
    { name: "Google Ads", desc: "Automate campaign launch.", state: "Ready" },
    { name: "Shopify", desc: "Sync inventory and store URLs.", state: "Synced" },
    { name: "Slack", desc: "Real-time logs and alerts.", state: "Active" },
    { name: "LinkedIn", desc: "Publish B2B copywriting drafts.", state: "Ready" },
    { name: "HubSpot", desc: "Sync target ICP cohorts.", state: "Active" },
    { name: "Google Analytics", desc: "Audit traffic & conversions.", state: "Active" },
  ];
  return (
    <section className="py-32 px-6 bg-[#091216]/20 border-t border-brand-mint/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia" />
            Integrations Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-brand-powder">
            Connect Your Stack
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm leading-relaxed">
            Noviq interfaces directly with core search APIs, ad networks, content management suites, and chat servers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((item, idx) => (
            <GlowCard 
              key={idx} 
              className="p-5 bg-[#091216]/30 border border-brand-mint/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[8px] font-mono text-brand-forsythia uppercase block mb-2.5 font-bold tracking-wider">
                  {item.state}
                </span>
                <h4 className="font-bold text-xs text-brand-powder font-mono uppercase tracking-wide">{item.name}</h4>
              </div>
              <p className="text-[10px] text-brand-mint/50 mt-3 leading-normal font-sans">{item.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Security Section
export function Security() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-brand-mint/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            Enterprise Grade Security
          </div>
          <h2 className="text-3xl font-bold font-mono tracking-tight text-brand-powder">
            Your Proprietary Data is Protected
          </h2>
          <p className="text-brand-mint/60 mt-4 text-xs md:text-sm leading-relaxed font-sans">
            We employ workspace isolation guidelines, SOC 2 compliance standards, and automated model toxicity filtering to keep competitor, SEO, and copywriting assets secure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:max-w-xl font-mono text-xs">
          <GlowCard className="p-5 bg-[#091216]/30 border border-brand-mint/10">
            <span className="text-brand-forsythia font-bold block mb-1.5 uppercase tracking-wider text-[10px]">SOC 2 Compliant</span>
            <span className="text-brand-mint/60 font-sans text-xs">Strict administrative access controls audited annually.</span>
          </GlowCard>
          <GlowCard className="p-5 bg-[#091216]/30 border border-brand-mint/10">
            <span className="text-brand-forsythia font-bold block mb-1.5 uppercase tracking-wider text-[10px]">Workspace Lock</span>
            <span className="text-brand-mint/60 font-sans text-xs">Your competitor data and brand context are never leaked.</span>
          </GlowCard>
          <GlowCard className="p-5 bg-[#091216]/30 border border-brand-mint/10">
            <span className="text-brand-forsythia font-bold block mb-1.5 uppercase tracking-wider text-[10px]">AES-256 Crypto</span>
            <span className="text-brand-mint/60 font-sans text-xs">AES-256 data protection on databases and pipelines.</span>
          </GlowCard>
          <GlowCard className="p-5 bg-[#091216]/30 border border-brand-mint/10">
            <span className="text-brand-forsythia font-bold block mb-1.5 uppercase tracking-wider text-[10px]">Model Sandbox</span>
            <span className="text-brand-mint/60 font-sans text-xs">Data is never trained on public LLM pipelines.</span>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

// FAQ Accordion Section
export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do the AI agents communicate with each other?",
      a: "Agents operate via a central state store. When the Competitor Auditor detects a competitor price change, it updates the workspace model, which automatically signals the Copywriter to draft a targeted campaign."
    },
    {
      q: "Does the pricing update cause global page re-renders?",
      a: "No. The pricing engine uses a state-isolated pub/sub pattern that updates only the specific text nodes in the DOM. This protects accessibility, indexing, and runtime efficiency."
    },
    {
      q: "Can I invite my human design and marketing team?",
      a: "Yes. Humans and AI employees work side-by-side. You can review drafts, override templates, and approve ad campaign launches before they are pushed live."
    },
    {
      q: "Are the regional tariff variables and conversions hardcoded?",
      a: "No. All currencies (USD, EUR, INR) and billing cycles are calculated dynamically using a multi-dimensional pricing matrix configured at the framework layer."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-brand-noir border-t border-brand-mint/5 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia" />
            Support Center
          </div>
          <h2 className="text-3xl font-bold font-mono tracking-tight text-brand-powder">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 font-mono text-xs">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 bg-[#091216]/25 ${
                  isOpen ? "border-brand-forsythia/40 bg-brand-expedition/15" : "border-brand-mint/10"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-brand-powder hover:text-brand-forsythia transition-colors duration-150"
                >
                  <span className="text-xs font-mono uppercase tracking-wider">{faq.q}</span>
                  <svg className={`w-4 h-4 text-brand-mint/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-brand-mint/5 text-brand-mint/70 leading-relaxed font-sans text-xs">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Massive CTA & Footer
export function Footer() {
  return (
    <footer className="relative bg-brand-noir noise-overlay-premium border-t border-brand-mint/10 overflow-hidden">
      {/* Massive CTA */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10 border-b border-brand-mint/5">
        {/* Soft background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-saffron/80 rounded-full blur-[160px] pointer-events-none opacity-10" />
        
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-brand-powder mb-8 select-none">
          Ready to scale <br />
          <span className="text-gradient-premium">automatically?</span>
        </h2>
        <p className="text-brand-mint/60 mt-4 text-xs md:text-sm max-w-lg mx-auto mb-12 font-sans px-4">
          Deploy your autonomous AI marketing employees and watch your workspace optimize SEO, SWOT, and copywriting assets overnight.
        </p>
        <a
          href="#pricing"
          className="glow-border-btn-premium inline-block px-10 py-5 rounded-full text-[11px] font-bold font-mono tracking-wider text-brand-noir bg-gradient-to-r from-brand-forsythia to-brand-saffron shadow-xl shadow-brand-forsythia/15 hover:brightness-105 transition-all duration-150"
        >
          Initialize AI Workspace
        </a>
      </div>

      {/* Footer link directories */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[9px] font-bold tracking-widest text-brand-mint/35">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-brand-expedition/20 border border-brand-mint/10">
            <svg className="w-4 h-4 text-brand-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="font-bold text-brand-powder tracking-wider uppercase">{"// NOVIQ AI INC."}</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#features" className="hover:text-brand-powder transition-colors duration-150">FEATURES</a>
          <a href="#agents" className="hover:text-brand-powder transition-colors duration-150">AI AGENTS</a>
          <a href="#pricing" className="hover:text-brand-powder transition-colors duration-150">PRICING</a>
          <a href="#faq" className="hover:text-brand-powder transition-colors duration-150">FAQ</a>
        </div>

        <div>
          © {new Date().getFullYear()} NOVIQ. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
