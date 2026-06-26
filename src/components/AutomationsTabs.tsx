"use client";

import React, { useState } from "react";
import GlowCard from "@/components/GlowCard";

interface Tab {
  id: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

export default function AutomationsTabs() {
  const [activeTab, setActiveTab] = useState<string>("competitor");

  const tabs: Tab[] = [
    {
      id: "competitor",
      name: "Competitor Audit",
      badge: "Market Intel",
      title: "Automated Competitor Pricing & Feature Comparison",
      description: "Noviq crawls competitor domains, mapping their packages and identifying pricing gaps to target in your ad copies.",
      content: (
        <div className="space-y-4 font-mono text-[10px] leading-relaxed">
          <div className="grid grid-cols-4 border-b border-brand-mint/10 pb-2 text-brand-mint/35 font-bold uppercase tracking-wider">
            <span>PARAMETER</span>
            <span>COMPETITOR ALPHA</span>
            <span>COMPETITOR BETA</span>
            <span className="text-brand-forsythia font-bold">NOVIQ OPTIMIZATION</span>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">Starter Price</span>
            <span className="text-brand-mint/60">$49/mo</span>
            <span className="text-brand-mint/60">$29/mo</span>
            <span className="text-green-400 font-bold">Position at $19/mo (Validate TAM)</span>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">Seat Limit</span>
            <span className="text-brand-mint/60">5 seats</span>
            <span className="text-brand-mint/60">3 seats</span>
            <span className="text-green-400 font-bold">Offer Unlimited Seats on Starter</span>
          </div>
          <div className="grid grid-cols-4 py-2 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">API Rate Cap</span>
            <span className="text-brand-mint/60">10,000 reqs/mo</span>
            <span className="text-brand-mint/60">5,000 reqs/mo</span>
            <span className="text-green-400 font-bold">Include Webhook Automation triggers</span>
          </div>
          <div className="grid grid-cols-4 py-2">
            <span className="text-brand-powder font-semibold">Feature focus</span>
            <span className="text-brand-mint/60">Manual builder</span>
            <span className="text-brand-mint/60">Template library</span>
            <span className="text-green-400 font-bold">Position: &apos;Autonomous AI Employees&apos;</span>
          </div>
        </div>
      ),
    },
    {
      id: "swot",
      name: "SWOT Board",
      badge: "Strategy",
      title: "Interactive SWOT Analysis & Positioning Board",
      description: "Instantly compile a strategic SWOT framework mapping out competitive advantages and risks based on scraped target audience reviews.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-mono leading-relaxed">
          <div className="border border-green-500/10 bg-green-500/5 p-4 rounded-2xl">
            <span className="text-green-400 font-bold block mb-2 uppercase tracking-widest text-[9px]">Strengths (S)</span>
            <ul className="space-y-1.5 text-brand-mint/70 list-disc pl-4 leading-normal font-sans">
              <li>Low cost structure relative to legacy competitors.</li>
              <li>Fully automated agent sync prevents data siloing.</li>
              <li>Dynamic regional multi-currency billing built-in.</li>
            </ul>
          </div>
          <div className="border border-red-500/10 bg-red-500/5 p-4 rounded-2xl">
            <span className="text-red-400 font-bold block mb-2 uppercase tracking-widest text-[9px]">Weaknesses (W)</span>
            <ul className="space-y-1.5 text-brand-mint/70 list-disc pl-4 leading-normal font-sans">
              <li>New domain lacks historical domain authority (DA) for SEO.</li>
              <li>Requires customer education regarding &apos;AI employees&apos; scope.</li>
            </ul>
          </div>
          <div className="border border-brand-forsythia/15 bg-brand-forsythia/5 p-4 rounded-2xl">
            <span className="text-brand-forsythia font-bold block mb-2 uppercase tracking-widest text-[9px]">Opportunities (O)</span>
            <ul className="space-y-1.5 text-brand-mint/70 list-disc pl-4 leading-normal font-sans">
              <li>Capture search spikes for target keyword &apos;marketing operating system&apos;.</li>
              <li>Partner with growth incubators to bundle early trials.</li>
            </ul>
          </div>
          <div className="border border-brand-saffron/15 bg-brand-saffron/5 p-4 rounded-2xl">
            <span className="text-brand-saffron font-bold block mb-2 uppercase tracking-widest text-[9px]">Threats (T)</span>
            <ul className="space-y-1.5 text-brand-mint/70 list-disc pl-4 leading-normal font-sans">
              <li>Competitor Alpha releasing simple content script extensions.</li>
              <li>Data regulation compliance adjustments across EU markets.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "icp",
      name: "Target Personas",
      badge: "Audience",
      title: "ICP Demographics & Intent Persona Mapping",
      description: "Define precisely who your target buyers are, what channels they occupy, and their primary technical friction points.",
      content: (
        <div className="space-y-4 font-sans text-xs">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-5 rounded-2xl border border-brand-mint/10 bg-brand-noir/45 hover:border-brand-mint/20 transition-all duration-150">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-brand-forsythia/10 flex items-center justify-center font-mono font-bold text-brand-forsythia text-xs border border-brand-forsythia/20">
                  PM
                </div>
                <div>
                  <h4 className="font-bold text-brand-powder text-xs uppercase tracking-wide">Product Founder Sarah</h4>
                  <span className="text-[9px] font-mono text-brand-mint/45">Pre-seed / Series A Startup</span>
                </div>
              </div>
              <p className="text-brand-mint/70 leading-relaxed text-xs">
                <strong>Primary Friction:</strong> Lacks bandwidth to conduct comprehensive market analyses and write daily copywriting outreach assets.
              </p>
              <p className="text-[10px] text-brand-mint/45 mt-2.5 font-mono">
                <strong>TARGET CHANNELS:</strong> LinkedIn, HackerNews, ProductHunt, Twitter
              </p>
            </div>
            
            <div className="flex-1 p-5 rounded-2xl border border-brand-mint/10 bg-brand-noir/45 hover:border-brand-mint/20 transition-all duration-150">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-brand-saffron/10 flex items-center justify-center font-mono font-bold text-brand-saffron text-xs border border-brand-saffron/20">
                  GM
                </div>
                <div>
                  <h4 className="font-bold text-brand-powder text-xs uppercase tracking-wide">Growth Lead David</h4>
                  <span className="text-[9px] font-mono text-brand-mint/45">Mid-Market B2B SaaS</span>
                </div>
              </div>
              <p className="text-brand-mint/70 leading-relaxed text-xs">
                <strong>Primary Friction:</strong> High cost of agencies for content creation and SEO optimization pipelines.
              </p>
              <p className="text-[10px] text-brand-mint/45 mt-2.5 font-mono">
                <strong>TARGET CHANNELS:</strong> Search engines, B2B newsletters, Slack communities
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "social",
      name: "Social Copy",
      badge: "Copywriting",
      title: "Conversion-Optimized Copywriting Drafts",
      description: "Auto-generated social scripts, optimized by engagement trends captured by the Social Listening Agent.",
      content: (
        <div className="space-y-4 font-mono text-[10px] text-brand-powder leading-relaxed">
          <div className="border border-brand-mint/5 bg-brand-noir/40 p-4 rounded-xl">
            <span className="text-[8px] text-brand-forsythia font-bold block mb-2 uppercase tracking-widest">LINKEDIN DRAFT (Engagement Score: High)</span>
            <p className="text-brand-powder/90 font-sans text-xs">
              Most startup marketing is guesswork.<br /><br />
              We spend weeks writing articles, launching ad packages, and testing subject lines, hoping something sticks. Meanwhile, competitors with bigger budgets crawl past.<br /><br />
              Noviq changes the cycle. It deploys dedicated AI employees to crawl competitor gaps, validate marketing strategies, and auto-deploy campaigns in minutes.<br /><br />
              Stop guessing. Start executing. → noviq.ai
            </p>
          </div>
          <div className="border border-brand-mint/5 bg-brand-noir/40 p-4 rounded-xl">
            <span className="text-[8px] text-brand-saffron font-bold block mb-2">TWITTER DRAFT (Thread length: 3 tweets)</span>
            <p className="text-brand-mint/80 font-sans text-xs">
              1/ Marketing tools shouldn&apos;t exist in silos. If your competitor researcher doesn&apos;t share data with your copywriter, you&apos;re losing money. <br /><br />
              2/ We built Noviq to solve this. It&apos;s a unified Marketing OS. AI agents research markets, build SEO briefs, write copy, and launch campaigns. <br /><br />
              3/ Read how we scaled TAM validation from 14 days to 4 minutes: noviq.ai/blog/speedrun
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "seo",
      name: "SEO Auditor",
      badge: "SEO Gaps",
      title: "SEO Keyword Quality & Volume Auditing",
      description: "Perform search index tracking, identify high-volume low-competition phrases, and review ranking prospects automatically.",
      content: (
        <div className="space-y-3 font-mono text-[10px] leading-tight">
          <div className="grid grid-cols-5 text-brand-mint/35 border-b border-brand-mint/5 pb-2 font-bold uppercase tracking-wider">
            <span>KEYPHRASE</span>
            <span>SEARCH VOL</span>
            <span>COMPETITION</span>
            <span>CPC VALUE</span>
            <span className="text-brand-forsythia">RANK OPPORTUNITY</span>
          </div>
          <div className="grid grid-cols-5 py-2.5 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">ai marketing os</span>
            <span>4,200/mo</span>
            <span className="text-green-400">Low (0.18)</span>
            <span>$4.50</span>
            <span className="text-green-400 font-bold">94% (Very High)</span>
          </div>
          <div className="grid grid-cols-5 py-2.5 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">autonomous marketing agent</span>
            <span>12,800/mo</span>
            <span className="text-yellow-400">Medium (0.42)</span>
            <span>$7.20</span>
            <span className="text-brand-forsythia font-bold">81% (High)</span>
          </div>
          <div className="grid grid-cols-5 py-2.5 border-b border-brand-mint/5">
            <span className="text-brand-powder font-semibold">automated startup audit</span>
            <span>1,850/mo</span>
            <span className="text-green-400">Low (0.09)</span>
            <span>$3.10</span>
            <span className="text-green-400 font-bold">96% (Very High)</span>
          </div>
          <div className="grid grid-cols-5 py-2.5">
            <span className="text-brand-powder font-semibold">saas competitor price tracker</span>
            <span>3,400/mo</span>
            <span className="text-red-400">High (0.78)</span>
            <span>$12.10</span>
            <span className="text-red-400 font-bold">34% (Low)</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="automations" className="relative py-32 px-6 bg-brand-noir noise-overlay-premium border-t border-brand-mint/5 overflow-hidden">
      {/* Soft light glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-expedition/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            Automations Console
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-brand-powder">
            See Real Work in Action
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm md:text-base leading-relaxed">
            AI employees do not just output recommendations—they execute complex research pipelines, write high-converting copy, and deploy marketing bundles dynamically.
          </p>
        </div>

        {/* Dynamic switcher tabs */}
        <div className="border border-brand-mint/10 bg-[#091216]/50 p-2 rounded-[32px] backdrop-blur-2xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 border-b border-brand-mint/10 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-brand-forsythia text-brand-noir shadow-lg shadow-brand-forsythia/10"
                    : "text-brand-mint/60 hover:text-brand-powder hover:bg-brand-expedition/20"
                }`}
              >
                {tab.name}
                <span className={`px-1.5 py-0.5 rounded text-[8px] tracking-normal font-mono ${
                  activeTab === tab.id
                    ? "bg-brand-noir/10 text-brand-noir font-bold"
                    : "bg-brand-expedition/30 text-brand-mint/45"
                }`}>
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active tab content panel wrapped in GlowCard */}
          {tabs.map((tab) => {
            if (tab.id !== activeTab) return null;
            return (
              <div
                key={tab.id}
                className="p-6 md:p-10 animate-in fade-in slide-in-from-bottom-2 duration-200 text-left"
              >
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-bold font-mono text-brand-powder">
                    {tab.title}
                  </h3>
                  <p className="text-brand-mint/60 text-xs md:text-sm mt-2 leading-relaxed font-sans max-w-3xl">
                    {tab.description}
                  </p>
                </div>
                
                <GlowCard className="bg-[#060b0d]/50 p-6 rounded-2xl overflow-x-auto">
                  {tab.content}
                </GlowCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
