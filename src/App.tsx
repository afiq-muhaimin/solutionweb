import { useState } from "react";
import CTAsection from "./component/ctasection";
import Sample from "./component/sample";
import Workflow from "./component/workflow";
import Carousel from "./component/carousel";
import Reveal from "./component/reveal";
import SectionDotNav from "./component/section-dot-nav";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative bg-page text-ink min-h-screen overflow-x-hidden">
      {/* Ambient color blobs for glass to refract */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[8%] w-[520px] h-[520px] rounded-full blur-[40px] bg-[radial-gradient(circle,rgba(0,113,227,0.35),transparent_70%)]" />
        <div className="absolute top-[20%] -right-[10%] w-[480px] h-[480px] rounded-full blur-[40px] bg-[radial-gradient(circle,rgba(209,0,107,0.28),transparent_70%)]" />
        <div className="absolute bottom-0 left-[20%] w-[560px] h-[560px] rounded-full blur-[40px] bg-[radial-gradient(circle,rgba(26,138,74,0.25),transparent_70%)]" />
        <div className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] rounded-full blur-[40px] bg-[radial-gradient(circle,rgba(0,113,227,0.22),transparent_70%)]" />
      </div>

      <SectionDotNav />

      {/* Nav */}
      <nav
        data-glass
        className="sticky top-0 z-50 bg-white/55 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/60 shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-18px_rgba(0,0,0,0.15)]"
      >
        <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="text-[19px] font-bold tracking-[-0.02em]">DevEx Digital</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-ink hover:text-accent text-sm font-medium no-underline transition-colors">Services</a>
            <a href="#pricing" className="text-ink hover:text-accent text-sm font-medium no-underline transition-colors">Pricing</a>
            <a href="#work" className="text-ink hover:text-accent text-sm font-medium no-underline transition-colors">Work</a>
            <a href="#contact" className="text-ink hover:text-accent text-sm font-medium no-underline transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="pressable bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-full text-[13px] font-semibold no-underline whitespace-nowrap transition-colors"
            >
              Start a Project
            </a>
            <button
              type="button"
              className="pressable md:hidden flex items-center justify-center bg-transparent border-none text-ink cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-[26px]">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden border-t border-[#d2d2d7] transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
            }`}
        >
          <div className="px-6 pt-4 pb-5 flex flex-col gap-4">
            <a href="#services" className="text-ink text-[15px] no-underline" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#pricing" className="text-ink text-[15px] no-underline" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#work" className="text-ink text-[15px] no-underline" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" className="text-ink text-[15px] no-underline" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative z-[1] text-center max-w-[900px] mx-auto box-border px-6 pt-[90px] pb-[60px] md:px-[90px] md:pt-[120px] md:pb-[100px]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-accent text-[13px] font-semibold mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-accent" />
            Available for new projects
          </div>
          <h1 className="text-[clamp(2.6rem,5vw+1rem,5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
            Web experiences, engineered with precision.
          </h1>
          <p className="text-[clamp(1.05rem,1.5vw,1.35rem)] text-ink-muted leading-[1.5] max-w-[640px] mx-auto mb-10">
            We design and build fast, beautiful websites that turn visitors into customers — from single-page brands to full platforms.
          </p>
          <div className="flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#contact"
              className="pressable bg-accent hover:bg-accent-hover hover:-translate-y-px text-white px-7 py-3.5 rounded-full text-base font-semibold no-underline transition-all"
            >
              Start a Project
            </a>
            <a href="#work" className="text-accent hover:text-accent-hover text-base font-semibold no-underline inline-flex items-center gap-1 transition-colors">
              See our work <span className="text-lg">›</span>
            </a>
          </div>
          <div className="mt-14 rounded-3xl overflow-hidden aspect-video bg-[#eaeaec] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] border border-white/60 relative group">
            <img
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              alt="Modern workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoa9NYJ8ZcU_SWpkd2gVMYRE6U-erZiQtKD9N8KfHAzYB25Z5ZtlPPNrJfH_sLZYRMqeoD8v1RG8giiOfJNc-Y38NFaa_jF2eDuUOEKlxdUFM5RPxStLeLT_LJB3Bj298_SPxQFuM42TdMJwFDQCC-IdaSrxHDt04tpXm1VrDPANnvk9ig36wmOX-mstPeYNCYz7ch9dCRxIIjbyawcOaON620OeovU5GOv1eb-_wpmPl5XrPjCoEQCEaWIZQME_s_6MxmDP4yJOD8"
            />
            <div
              data-glass
              className="absolute bottom-5 left-5 right-5 md:right-auto md:w-auto p-4 pr-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 flex items-center gap-3 shadow-[0_8px_24px_rgba(31,38,135,0.1)]"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                <span className="material-symbols-outlined">code</span>
              </div>
              <div className="text-left">
                <div className="text-ink font-bold text-sm">Modern Stack</div>
                <div className="text-ink-muted text-xs">React • Node • Cloud</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative z-[1] py-24 px-6">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] mb-4 text-center">What we do</h2>
            <p className="text-ink-muted text-[17px] text-center max-w-[520px] mx-auto mb-16">
              Three focused services, each built to a professional standard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Website Development */}
              <div
                data-glass
                className="bg-white/45 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 rounded-[20px] p-10 shadow-[0_8px_32px_rgba(31,38,135,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-6">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <h3 className="text-xl font-bold tracking-[-0.01em] mb-2.5">Website Development</h3>
                <p className="text-ink-muted text-[15px] leading-relaxed">Custom-built sites tailored to your business, from concept to launch.</p>
              </div>
              {/* Website Redesign */}
              <div
                data-glass
                className="bg-white/45 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 rounded-[20px] p-10 shadow-[0_8px_32px_rgba(31,38,135,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-magenta/15 flex items-center justify-center text-magenta mb-6">
                  <span className="material-symbols-outlined text-[26px]">auto_fix_high</span>
                </div>
                <h3 className="text-xl font-bold tracking-[-0.01em] mb-2.5">Website Redesign</h3>
                <p className="text-ink-muted text-[15px] leading-relaxed">Modernize an aging site with a faster, cleaner, more convincing experience.</p>
              </div>
              {/* Server Maintenance */}
              <div
                data-glass
                className="bg-white/45 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 rounded-[20px] p-10 shadow-[0_8px_32px_rgba(31,38,135,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-forest/15 flex items-center justify-center text-forest mb-6">
                  <span className="material-symbols-outlined text-[26px]">dns</span>
                </div>
                <h3 className="text-xl font-bold tracking-[-0.01em] mb-2.5">Server Maintenance</h3>
                <p className="text-ink-muted text-[15px] leading-relaxed">Round-the-clock monitoring so your site stays fast, secure, and online.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative z-[1] py-24 px-6">
          <div className="max-w-[1120px] mx-auto">
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] mb-4 text-center">Simple, transparent pricing</h2>
            <p className="text-ink-muted text-[17px] text-center max-w-[520px] mx-auto mb-16">
              Choose the package that fits where your business is today.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Starter */}
              <Reveal
                delayMs={0}
                className="bg-white/40 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 rounded-3xl p-10 flex flex-col shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
              >
                <h3 className="text-lg font-bold mb-1">Starter</h3>
                <p className="text-ink-muted text-sm mb-6">Single page, built to convert</p>
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-[40px] font-extrabold tracking-[-0.02em]">RM380</span>
                  <span className="text-ink-muted text-sm">one-time</span>
                </div>
                <div className="flex flex-col gap-3.5 mb-8 flex-grow">
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>1 page, 4–5 sections</div>
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>Up to 2 revisions</div>
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>Mobile responsive</div>
                  <div className="flex gap-2.5 text-sm text-accent font-semibold"><span>✓</span>Free 1-year domain &amp; hosting</div>
                  <div className="flex gap-2.5 text-sm text-accent font-semibold"><span>✓</span>Free 1-month support</div>
                </div>
                <a
                  href="#contact"
                  className="pressable text-center py-3 rounded-full border border-ink text-ink no-underline font-semibold text-[15px] hover:bg-white/60 transition-colors"
                >
                  Get Started
                </a>
              </Reveal>

              {/* Business (recommended) */}
              <Reveal
                delayMs={80}
                className="rounded-3xl p-10 flex flex-col bg-[#1d1d1f]/75 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/15 text-white relative shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)]"
              >
                <span className="absolute top-6 right-6 bg-accent text-white text-[11px] font-bold tracking-[0.04em] uppercase px-3 py-1 rounded-full">
                  Most popular
                </span>
                <h3 className="text-lg font-bold mb-1">Business</h3>
                <p className="text-[#a1a1a6] text-sm mb-6">Up to 5 pages for growing brands</p>
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-[40px] font-extrabold tracking-[-0.02em]">RM980</span>
                  <span className="text-[#a1a1a6] text-sm">one-time</span>
                </div>
                <div className="flex flex-col gap-3.5 mb-8 flex-grow">
                  <div className="flex gap-2.5 text-sm"><span className="text-accent-light">✓</span>Up to 5 pages, 5–7 sections</div>
                  <div className="flex gap-2.5 text-sm"><span className="text-accent-light">✓</span>Up to 2 revisions</div>
                  <div className="flex gap-2.5 text-sm"><span className="text-accent-light">✓</span>Mobile responsive</div>
                  <div className="flex gap-2.5 text-sm text-accent-light font-semibold"><span>✓</span>Free 1-year domain &amp; hosting</div>
                  <div className="flex gap-2.5 text-sm text-accent-light font-semibold"><span>✓</span>Free 1-month support</div>
                </div>
                <a
                  href="#contact"
                  className="pressable text-center py-3 rounded-full bg-accent hover:bg-accent-light text-white no-underline font-semibold text-[15px] transition-colors"
                >
                  Select Package
                </a>
              </Reveal>

              {/* Redesign */}
              <Reveal
                delayMs={160}
                className="bg-white/40 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 rounded-3xl p-10 flex flex-col shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
              >
                <h3 className="text-lg font-bold mb-1">Redesign</h3>
                <p className="text-ink-muted text-sm mb-6">Give an existing site new life</p>
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-[40px] font-extrabold tracking-[-0.02em]">RM290</span>
                  <span className="text-ink-muted text-sm">/ page</span>
                </div>
                <div className="flex flex-col gap-3.5 mb-8 flex-grow">
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>Up to 3 pages, 5–7 sections</div>
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>Up to 2 revisions</div>
                  <div className="flex gap-2.5 text-sm text-ink"><span className="text-accent">✓</span>Mobile responsive</div>
                  <div className="flex gap-2.5 text-sm text-accent font-semibold"><span>✓</span>Free 1-year domain &amp; hosting</div>
                  <div className="flex gap-2.5 text-sm text-accent font-semibold"><span>✓</span>Free 1-month support</div>
                </div>
                <a
                  href="#contact"
                  className="pressable text-center py-3 rounded-full border border-ink text-ink no-underline font-semibold text-[15px] hover:bg-white/60 transition-colors"
                >
                  Get Started
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <Sample />
        <Carousel />

        {/* Workflow Section */}
        <Workflow />

        {/* CTA Section */}
        <CTAsection />
      </main>

      {/* Footer */}
      <footer
        data-glass
        className="relative z-[1] border-t border-white/60 bg-white/30 backdrop-blur-xl px-6 py-10"
      >
        <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-ink-muted text-[13px]">© 2026 DevEx Digital. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="mailto:afiqmuhaimin211188@gmail.com" className="text-ink-muted hover:text-accent no-underline text-[13px] transition-colors">afiqmuhaimin211188@gmail.com</a>
            <a href="tel:0112834337" className="text-ink-muted hover:text-accent no-underline text-[13px] transition-colors">011-2834 3371</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
