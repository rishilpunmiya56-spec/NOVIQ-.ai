"use client";

import React, { useEffect, useState, useRef } from "react";
import GlowCard from "@/components/GlowCard";

export function NodesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const numParticles = 35;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
      });
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes
      for (let i = 0; i < numParticles; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(217, 232, 226, 0.25)";
        ctx.fill();

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 200, 1, ${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        if (mouse.x > 0 && mouse.y > 0) {
          const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (mDist < 160) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 153, 50, ${0.2 * (1 - mDist / 160)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function HeroSection() {
  const [metrics, setMetrics] = useState({ conversions: 1240, ctr: 4.8, spent: 340 });
  const [activeWorkflowMsg, setActiveWorkflowMsg] = useState("Initializing competitor research audit...");

  // Metrics simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        conversions: prev.conversions + (Math.random() > 0.4 ? 1 : 0),
        ctr: parseFloat((prev.ctr + (Math.random() - 0.5) * 0.04).toFixed(2)),
        spent: prev.spent + (Math.random() > 0.75 ? 1 : 0),
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Workflow steps typewriter simulation
  useEffect(() => {
    const messages = [
      "Auditing competitor URL pricing structures...",
      "Generating SWOT matrix for SaaS product expansion...",
      "SEO Crawler identifying 4 target keyword gaps...",
      "Drafting personalized LinkedIn & Twitter threads...",
      "Rendering optimized landing page HTML blocks...",
      "Launching AI-optimized campaign via Google Ads API...",
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % messages.length;
      setActiveWorkflowMsg(messages[idx]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-40 pb-24 px-6 bg-mesh-dark noise-overlay-premium flex flex-col items-center justify-center overflow-hidden">
      {/* Background canvas connections */}
      <NodesCanvas />
      
      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 bg-grid-premium pointer-events-none z-0" />

      {/* Lighting / glowing overlays */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-expedition/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Top announcement pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-mint/15 bg-[#091216]/50 mb-8 text-[10px] font-mono font-bold tracking-widest text-brand-mint uppercase shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-forsythia animate-ping" />
          The AI Marketing Operating System
        </div>

        {/* Primary headers */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-mono tracking-tight text-brand-powder max-w-5xl leading-[1.03] mb-8 select-none">
          Everything is alive. <br />
          <span className="text-gradient-premium">Meet Noviq.</span>
        </h1>

        {/* Subtext description */}
        <p className="text-xs sm:text-sm md:text-base text-brand-mint/65 max-w-2xl leading-relaxed mb-12 font-sans px-4">
          Noviq collapses your marketing stacks into an intelligent, connected workspace powered by specialized AI employees. They analyze competitor strategies, map target intent, write copy, and execute growth campaigns.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto px-6">
          <a
            href="#pricing"
            className="glow-border-btn-premium w-full sm:w-auto px-8 py-4 rounded-full text-[11px] font-bold font-mono tracking-wider text-brand-noir bg-gradient-to-r from-brand-forsythia to-brand-saffron shadow-lg shadow-brand-forsythia/15 hover:brightness-105 active:scale-[0.98] transition-all duration-150"
          >
            Deploy AI Employees
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-[11px] font-bold font-mono tracking-wider text-brand-powder bg-brand-expedition/20 hover:bg-brand-expedition/30 border border-brand-mint/10 hover:border-brand-mint/20 transition-all duration-150"
          >
            Explore Autonomous Workspace
          </a>
        </div>

        {/* Cinematic Dashboard Workspace Preview */}
        <div className="w-full max-w-5xl rounded-[32px] border border-brand-mint/10 bg-[#091216]/50 p-2 sm:p-4 backdrop-blur-2xl relative shadow-3xl">
          {/* Top bezel layout */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-mint/5 font-mono text-[9px] text-brand-mint/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500/30" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/30" />
              <span className="w-2 h-2 rounded-full bg-green-500/30" />
            </div>
            <span className="font-bold tracking-widest uppercase text-brand-mint/30">NOVIQ-CORE-CONSOLE</span>
            <span>v1.0.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 text-left">
            {/* Left sidebar: Running agents stream */}
            <div className="md:col-span-1 border-r border-brand-mint/5 pr-4 flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="font-mono text-[9px] font-bold text-brand-forsythia uppercase tracking-widest mb-4">
                  Active Sync Stream
                </p>
                <ul className="space-y-3 font-mono text-[11px]">
                  <li className="flex items-center gap-2.5 text-brand-powder">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Market Analyst
                  </li>
                  <li className="flex items-center gap-2.5 text-brand-powder">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Competitor Auditor
                  </li>
                  <li className="flex items-center gap-2.5 text-brand-mint/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/10" />
                    SEO Crawler
                  </li>
                  <li className="flex items-center gap-2.5 text-brand-mint/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/10" />
                    Creative Director
                  </li>
                </ul>
              </div>

              {/* Bottom active pipeline stream */}
              <div className="mt-4 pt-4 border-t border-brand-mint/5">
                <span className="text-[8px] font-mono text-brand-mint/30 uppercase block mb-1.5 font-bold tracking-wider">
                  Active Intent Log
                </span>
                <span className="text-[10px] font-mono text-brand-powder/95 leading-normal block min-h-[36px] transition-all duration-200">
                  {activeWorkflowMsg}
                </span>
              </div>
            </div>

            {/* Right container: dynamic charts and metrics */}
            <div className="md:col-span-3 pl-0 md:pl-4 space-y-4">
              {/* Three statistical values wrapped in GlowCards */}
              <div className="grid grid-cols-3 gap-4 font-mono">
                <GlowCard className="p-4 bg-[#091216]/40">
                  <span className="text-[9px] text-brand-mint/40 uppercase font-bold tracking-wider">Conversions</span>
                  <span className="text-xl font-bold text-brand-powder mt-1 block tracking-tight">
                    {metrics.conversions.toLocaleString()}
                  </span>
                </GlowCard>
                <GlowCard className="p-4 bg-[#091216]/40">
                  <span className="text-[9px] text-brand-mint/40 uppercase font-bold tracking-wider">CTR Avg</span>
                  <span className="text-xl font-bold text-brand-forsythia mt-1 block tracking-tight">
                    {metrics.ctr}%
                  </span>
                </GlowCard>
                <GlowCard className="p-4 bg-[#091216]/40">
                  <span className="text-[9px] text-brand-mint/40 uppercase font-bold tracking-wider">Ad Budget</span>
                  <span className="text-xl font-bold text-brand-saffron mt-1 block tracking-tight">
                    ${metrics.spent}/hr
                  </span>
                </GlowCard>
              </div>

              {/* Animated SVG performance curve */}
              <GlowCard className="bg-[#091216]/20 p-5 relative overflow-hidden h-[160px]">
                <div className="absolute top-3 left-4 text-[9px] font-mono text-brand-mint/30 uppercase font-bold tracking-wider">
                  Growth Velocity Map (Real-time)
                </div>
                <svg className="w-full h-full pt-6" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(241, 246, 244, 0.02)" strokeWidth="0.5" />

                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFC801" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF9932" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M0 90 Q 50 80, 100 50 T 200 45 T 300 15 T 400 8"
                    fill="url(#chartGlow)"
                  />
                  <path
                    d="M0 90 Q 50 80, 100 50 T 200 45 T 300 15 T 400 8"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF9932" />
                    <stop offset="50%" stopColor="#FFC801" />
                    <stop offset="100%" stopColor="#F1F6F4" />
                  </linearGradient>
                </svg>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
