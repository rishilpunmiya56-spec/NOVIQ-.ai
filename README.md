# NOVIQ — The AI Marketing Operating System

Noviq is a premium AI-powered marketing operating system designed to consolidate your growth tech stack. It researches markets, validates startup ideas, audits competitors, generates campaigns, drafts copywriting assets, and schedules content pipelines from a single intelligent workspace operated by autonomous AI employees.

Built with a designer-first aesthetic inspired by Stripe, Linear, and Vercel.

---

## 🚀 Key Features

### 1. Matrix-Driven Pricing & State-Isolated Switcher
- **Calculated Engine**: Pricing tiers compute rates dynamically using a multi-dimensional matrix factoring in base rates, regional tariff multipliers (USD, EUR, INR), and flat 20% annual discount rules.
- **Strict State Isolation**: Switching billing cycles or currencies modifies price text nodes directly in the DOM using React refs and a custom event emitter. The parent component and surrounding cards **do not re-render**, maintaining 100% layout efficiency.

### 2. Bento-to-Accordion Wrapper with Context Lock
- **Fluid Layout**: Adapts from a modern Bento Grid on desktop viewports to a touch-optimized Accordion list on mobile.
- **Context Lock**: Hovering or interacting with a bento box on desktop preserves its active index and opens the corresponding accordion drawer automatically if the browser width transitions past the `768px` mobile breakpoint, and vice versa.
- **Zero-Dependency Motion**: Uses hardware-accelerated, native CSS Transitions (`grid-template-rows 0fr -> 1fr`) rather than external runtime JS animation engines.

### 3. Designer-Grade Aesthetic
- **Custom Backdrops**: Deep mesh gradients and fade-masked grid layers (`.bg-grid-premium`).
- **Cursor-Tracking Glow Cards**: Custom `GlowCard` panels that update coordinates on mouse move to light up card borders relative to cursor coordinates.
- **Immaculate Spacing**: Generous margins, structured grids, and monospace typography offsets (`JetBrains Mono` and `Inter`).

---

## 🛠️ Tech Stack

- **Core**: React 18, Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Language**: TypeScript
- **Motion**: Web Animations API & CSS Transitions (No external engines)

---

## ⚙️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Build Compilation

To generate an optimized production build:

```bash
npm run build
```
The page footprint is highly compressed (`17.7 kB` total page bundle), delivering perfect Core Web Vitals and SEO crawling.
