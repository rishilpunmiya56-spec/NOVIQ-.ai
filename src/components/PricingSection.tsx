"use client";

import React, { useEffect, useRef, useState } from "react";
import GlowCard from "@/components/GlowCard";

export interface CurrencyConfig {
  symbol: string;
  tariff: number;
  label: string;
}

export interface BillingConfig {
  discount: number;
  label: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  baseMonthlyRateUSD: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PRICING_MATRIX = {
  currencies: {
    USD: { symbol: "$", tariff: 1.0, label: "USD ($)" },
    EUR: { symbol: "€", tariff: 0.92, label: "EUR (€)" },
    INR: { symbol: "₹", tariff: 80.0, label: "INR (₹)" },
  } as Record<string, CurrencyConfig>,
  billing: {
    monthly: { discount: 1.0, label: "Monthly" },
    annual: { discount: 0.8, label: "Annually" },
  } as Record<string, BillingConfig>,
  tiers: [
    {
      id: "starter",
      name: "Starter",
      description: "Validate startup ideas and perform initial market research.",
      baseMonthlyRateUSD: 19,
      features: [
        "3 Active Autonomous AI Agents",
        "Basic Market & Competitor Audits",
        "Interactive SWOT board generation",
        "15 ICP Customer Personas / mo",
        "Standard API Integration access",
      ],
      cta: "Start Free Trial",
    },
    {
      id: "pro",
      name: "Professional",
      description: "A complete AI marketing team for growing startup brands.",
      baseMonthlyRateUSD: 59,
      features: [
        "10 Active Autonomous AI Agents",
        "Real-time SEO & Keyword Assistant",
        "Deep competitor pricing tracker",
        "Social Media Campaign Scheduler",
        "Unlimited ICP & Trend Audits",
        "Priority Slack & email support",
      ],
      cta: "Upgrade to Professional",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Scale hyper-automation across global marketing divisions.",
      baseMonthlyRateUSD: 149,
      features: [
        "Unlimited AI Agents & Custom Training",
        "Dedicated Creative Director Agent",
        "Full brand asset generator suite",
        "Automated trend alerts & social listening",
        "Custom analytics dashboard API export",
        "Dedicated Success Manager (24/7)",
      ],
      cta: "Contact Enterprise Sales",
    },
  ] as PricingTier[],
};

export function IsolatedPrice({ tierId }: { tierId: string }) {
  const priceRef = useRef<HTMLSpanElement>(null);
  const symbolRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handlePricingChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ billing: string; currency: string }>;
      const { billing, currency } = customEvent.detail;
      
      const currencyConfig = PRICING_MATRIX.currencies[currency];
      const billingConfig = PRICING_MATRIX.billing[billing];
      const tier = PRICING_MATRIX.tiers.find((t) => t.id === tierId);
      
      if (!tier || !currencyConfig || !billingConfig) return;

      const baseVal = tier.baseMonthlyRateUSD;
      const ratePerMonth = Math.round(baseVal * currencyConfig.tariff * billingConfig.discount);
      
      if (priceRef.current) {
        priceRef.current.textContent = ratePerMonth.toLocaleString();
      }
      if (symbolRef.current) {
        symbolRef.current.textContent = currencyConfig.symbol;
      }
      if (subtextRef.current) {
        if (billing === "annual") {
          const annualTotal = Math.round(baseVal * currencyConfig.tariff * billingConfig.discount * 12);
          subtextRef.current.textContent = `Billed annually (${currencyConfig.symbol}${annualTotal.toLocaleString()}/yr)`;
        } else {
          subtextRef.current.textContent = "Billed monthly";
        }
      }
    };

    window.addEventListener("pricing-change", handlePricingChange);
    return () => {
      window.removeEventListener("pricing-change", handlePricingChange);
    };
  }, [tierId]);

  const tier = PRICING_MATRIX.tiers.find((t) => t.id === tierId);
  const initialPrice = Math.round((tier?.baseMonthlyRateUSD || 0) * 1.0 * 1.0);

  return (
    <div className="mt-4 min-h-[72px]">
      <div className="flex items-baseline gap-1">
        <span 
          ref={symbolRef}
          className="text-3xl font-mono font-bold text-brand-powder transition-all duration-150"
        >
          $
        </span>
        <span 
          ref={priceRef}
          className="text-5xl font-mono font-bold text-brand-powder tracking-tight transition-all duration-150"
        >
          {initialPrice}
        </span>
        <span className="text-sm text-brand-mint/50 ml-1">/mo</span>
      </div>
      <span 
        ref={subtextRef}
        className="text-[10px] text-brand-mint/35 mt-2 block font-mono uppercase tracking-wider font-bold"
      >
        Billed monthly
      </span>
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<string>("monthly");
  const [currency, setCurrency] = useState<string>("USD");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const triggerPricingChange = (newBilling: string, newCurrency: string) => {
    const event = new CustomEvent("pricing-change", {
      detail: { billing: newBilling, currency: newCurrency },
    });
    window.dispatchEvent(event);
  };

  const handleBillingToggle = (type: string) => {
    setBilling(type);
    triggerPricingChange(type, currency);
  };

  const handleCurrencySelect = (curr: string) => {
    setCurrency(curr);
    setDropdownOpen(false);
    triggerPricingChange(billing, curr);
  };

  return (
    <section id="pricing" className="relative py-32 px-6 bg-brand-noir noise-overlay-premium border-t border-brand-mint/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-expedition/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-forsythia/20 bg-brand-forsythia/5 mb-4 text-xs font-mono text-brand-forsythia uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-pulse" />
            Pricing Engine
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-brand-powder">
            Flexible, Scalable Pricing
          </h2>
          <p className="text-brand-mint/60 mt-4 text-sm md:text-base leading-relaxed">
            Choose the workspace capacity that fits your growth trajectory. All plans feature state-isolated instant billing adjustment.
          </p>
        </div>

        {/* Pricing Switcher Controls: billing & currency switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="relative flex items-center p-1 bg-brand-expedition/20 border border-brand-mint/10 rounded-full select-none w-fit">
            <div 
              className={`absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-brand-forsythia to-brand-saffron transition-all duration-200 ease-out`}
              style={{
                left: billing === "monthly" ? "4px" : "calc(50% - 2px)",
                width: "calc(50% - 2px)"
              }}
            />
            
            <button
              onClick={() => handleBillingToggle("monthly")}
              className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase transition-colors duration-150 ${
                billing === "monthly" ? "text-brand-noir" : "text-brand-mint/60 hover:text-brand-powder"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingToggle("annual")}
              className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase transition-colors duration-150 flex items-center gap-1.5 ${
                billing === "annual" ? "text-brand-noir" : "text-brand-mint/60 hover:text-brand-powder"
              }`}
            >
              Annually
              <span className={`px-1.5 py-0.5 rounded text-[8px] tracking-normal font-mono ${
                billing === "annual" ? "bg-brand-noir/10 text-brand-noir font-bold" : "bg-brand-forsythia/10 text-brand-forsythia"
              }`}>
                -20%
              </span>
            </button>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between gap-3 px-6 py-2.5 bg-brand-expedition/20 border border-brand-mint/10 hover:border-brand-forsythia/30 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-brand-powder transition-all duration-200"
            >
              <span>{PRICING_MATRIX.currencies[currency].label}</span>
              <svg className={`w-3.5 h-3.5 text-brand-mint/50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-brand-expedition/90 backdrop-blur-xl border border-brand-mint/15 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {Object.keys(PRICING_MATRIX.currencies).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => handleCurrencySelect(curr)}
                    className={`w-full text-left px-4 py-3 text-[10px] font-mono font-bold tracking-widest uppercase transition-colors duration-150 border-b border-brand-mint/5 last:border-0 hover:bg-brand-forsythia/10 ${
                      currency === curr ? "text-brand-forsythia bg-brand-forsythia/5" : "text-brand-mint/75 hover:text-brand-powder"
                    }`}
                  >
                    {PRICING_MATRIX.currencies[curr].label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid wrapping cards in GlowCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_MATRIX.tiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <GlowCard
                key={tier.id}
                className={`relative flex flex-col justify-between p-8 bg-[#091216]/50 ${
                  isPopular 
                    ? "border-brand-forsythia/35 shadow-xl shadow-brand-expedition/15" 
                    : ""
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 right-6 px-3.5 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase tracking-widest text-brand-noir bg-gradient-to-r from-brand-forsythia to-brand-saffron shadow-lg">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold font-mono text-brand-powder uppercase tracking-wider">{tier.name}</h3>
                  <p className="text-brand-mint/60 text-xs mt-3 leading-relaxed min-h-[44px]">
                    {tier.description}
                  </p>
                  
                  <IsolatedPrice tierId={tier.id} />

                  <hr className="my-6 border-brand-mint/5" />

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-brand-mint/80">
                        <svg className="w-4 h-4 text-brand-forsythia shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 rounded-2xl text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                    isPopular
                      ? "bg-gradient-to-r from-brand-forsythia to-brand-saffron text-brand-noir shadow-lg shadow-brand-forsythia/15 hover:brightness-105"
                      : "bg-brand-expedition/30 text-brand-powder hover:bg-brand-expedition/40 border border-brand-mint/15 hover:border-brand-mint/20"
                  }`}
                >
                  {tier.cta}
                </button>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
