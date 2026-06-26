"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-[#060b0d]/80 backdrop-blur-md border-b border-brand-mint/5 shadow-lg shadow-black/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-brand-expedition/20 border border-brand-mint/10 group-hover:border-brand-forsythia/30 transition-all duration-200">
            <svg className="w-5 h-5 text-brand-forsythia transition-transform duration-200 group-hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="font-mono font-bold text-base md:text-lg text-brand-powder tracking-wider uppercase">
            Noviq
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] font-bold tracking-wider text-brand-mint/60">
          <a href="#features" className="hover:text-brand-powder transition-colors duration-150 relative group">
            FEATURES
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-forsythia transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#agents" className="hover:text-brand-powder transition-colors duration-150 relative group">
            AI AGENTS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-forsythia transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#automations" className="hover:text-brand-powder transition-colors duration-150 relative group">
            AUTOMATIONS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-forsythia transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#pricing" className="hover:text-brand-powder transition-colors duration-150 relative group">
            PRICING
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-forsythia transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#faq" className="hover:text-brand-powder transition-colors duration-150 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-forsythia transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#pricing"
            className="glow-border-btn-premium inline-block px-5 py-2.5 rounded-full text-[11px] font-bold font-mono tracking-wider text-brand-noir bg-gradient-to-r from-brand-forsythia to-brand-saffron hover:brightness-105 active:scale-[0.98] transition-all duration-150 shadow-md shadow-brand-forsythia/10"
          >
            Deploy AI Employees
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-mint/80 hover:text-brand-powder focus:outline-none transition-colors duration-150"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#060b0d]/95 backdrop-blur-2xl border-b border-brand-mint/10 py-6 px-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-5 font-mono text-xs font-bold tracking-wider text-brand-mint/60 mb-6">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-powder transition-colors duration-150"
            >
              FEATURES
            </a>
            <a 
              href="#agents" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-powder transition-colors duration-150"
            >
              AI AGENTS
            </a>
            <a 
              href="#automations" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-powder transition-colors duration-150"
            >
              AUTOMATIONS
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-powder transition-colors duration-150"
            >
              PRICING
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-powder transition-colors duration-150"
            >
              FAQ
            </a>
          </nav>
          <a 
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center inline-block px-5 py-3 rounded-full text-xs font-bold font-mono tracking-wider text-brand-noir bg-gradient-to-r from-brand-forsythia to-brand-saffron"
          >
            Deploy AI Employees
          </a>
        </div>
      )}
    </header>
  );
}
