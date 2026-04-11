import { useState } from "react";
import CTAsection from "./component/ctasection";
import Sample from "./component/sample";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-background text-on-background selection:bg-primary/30 min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight text-white font-headline">DevEx Digital</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-400 hover:text-white">Services</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#samples" className="text-gray-400 hover:text-white">Samples</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200" href="https://afiq-muhaimin.github.io/">
              About Me
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden bg-[#131313] px-8 pb-6 flex flex-col gap-4 transition-all duration-300 ${menuOpen ? "block" : "hidden"
            }`}
        >
          <a
            href="#services"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#samples"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Samples
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="pt-24"></div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-primary text-xs font-semibold tracking-wider uppercase mb-6 font-label">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Available for new projects
                </div>
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 font-headline">
                  Comprehensive <span className="text-primary">web solutions</span> for your business
                </h1>
                <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
                  Bridging the gap between creative vision and technical excellence. We build high-performance digital experiences that scale.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-primary-container/20" href="#contact">
                    Start a Project
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a className="bg-transparent border border-outline-variant/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all" href="#sample">
                    View Samples
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container-low p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-container-high relative group">
                    <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Modern workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoa9NYJ8ZcU_SWpkd2gVMYRE6U-erZiQtKD9N8KfHAzYB25Z5ZtlPPNrJfH_sLZYRMqeoD8v1RG8giiOfJNc-Y38NFaa_jF2eDuUOEKlxdUFM5RPxStLeLT_LJB3Bj298_SPxQFuM42TdMJwFDQCC-IdaSrxHDt04tpXm1VrDPANnvk9ig36wmOX-mstPeYNCYz7ch9dCRxIIjbyawcOaON620OeovU5GOv1eb-_wpmPl5XrPjCoEQCEaWIZQME_s_6MxmDP4yJOD8" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-highest/80 backdrop-blur-md rounded-xl border border-white/5">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">code</span>
                        </div>
                        <div>
                          <div className="text-white font-bold font-headline">Modern Stack</div>
                          <div className="text-on-surface-variant text-xs font-label">React • Node • Cloud</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline">Technical Expertise</h2>
                <p className="text-on-surface-variant text-lg font-body">Specialized services designed to elevate your digital presence through rigorous engineering and refined design.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Website Development */}
              <div className="bg-surface p-10 rounded-3xl hover:bg-surface-container-high transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-headline">Website Development</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 font-body flex-grow">Custom web solutions built with cutting-edge technologies to meet your specific business needs.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Custom Tech</span>
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Scalable</span>
                </div>
              </div>
              {/* Server Maintenance */}
              <div className="bg-surface p-10 rounded-3xl hover:bg-surface-container-high transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 bg-tertiary-container/10 rounded-2xl flex items-center justify-center text-tertiary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">dns</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-headline">Server Maintenance</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 font-body flex-grow">24/7 server monitoring and maintenance to ensure your website runs smoothly and securely.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-tertiary tracking-widest uppercase">24/7 Monitoring</span>
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-tertiary tracking-widest uppercase">Secure</span>
                </div>
              </div>
              {/* Website Redesign */}
              <div className="bg-surface p-10 rounded-3xl hover:bg-surface-container-high transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-headline">Website Redesign</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 font-body flex-grow">Transform your existing website with modern designs and improved user experience.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Modern UX</span>
                  <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Packages Section */}
        <section className="py-32" id="pricing">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline">Investment Packages</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto font-body">Transparent pricing for premium development. Choose the package that fits your business stage.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="bg-surface-container-low p-8 md:p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
                <div className="mb-8">
                  <h3 className="text-white font-bold text-xl mb-2 font-headline">Single Page Website</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">RM380</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4 font-body">Suitable for personal branding.</p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    1 Page, 4-5 Sections
                  </div>
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Up to 2 Revisions
                  </div>
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Mobile Responsive
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl">card_giftcard</span>
                    FREE 1-Year Domain & Hosting
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl">support_agent</span>
                    FREE 1-Month Support
                  </div>
                </div>
                {/* <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-white font-bold hover:bg-surface-container-high transition-all">Get Started</button> */}
              </div>
              {/* Package 2 (Recommended) */}
              <div className="bg-surface-container-high p-8 md:p-10 rounded-3xl flex flex-col h-full relative border-t-2 border-primary ring-1 ring-primary/20 shadow-2xl shadow-primary/10">
                <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-on-primary font-bold text-[10px] tracking-widest uppercase rounded-bl-2xl">Recommended</div>
                <div className="mb-8">
                  <h3 className="text-white font-bold text-xl mb-2 font-headline">Multiple Pages Website</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">RM980</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4 font-body">Suitable for corporate/informational.</p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-3 text-white text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Up to 5 pages, 5-7 Sections
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Up to 2 Revisions
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Mobile Responsive
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>card_giftcard</span>
                    FREE 1-Year Domain & Hosting
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                    FREE 1-Month Support
                  </div>
                </div>
                {/* <button className="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-bold shadow-lg shadow-primary-container/30 hover:scale-[1.02] transition-all">Select Package</button> */}
              </div>
              {/* Package 3 */}
              <div className="bg-surface-container-low p-8 md:p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
                <div className="mb-8">
                  <h3 className="text-white font-bold text-xl mb-2 font-headline">Website Redesign</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">RM290</span>
                    <span className="text-on-surface-variant font-bold text-lg">/Page</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-4 font-body">Suitable for updating old sites.</p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Up to 3 pages, 5-7 Sections
                  </div>
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Up to 2 Revisions
                  </div>
                  <div className="flex items-center gap-3 text-on-background/80 text-sm font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Mobile Responsive
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl">card_giftcard</span>
                    FREE 1-Year Domain & Hosting
                  </div>
                  <div className="flex items-center gap-3 text-primary text-sm font-bold font-body">
                    <span className="material-symbols-outlined text-xl">support_agent</span>
                    FREE 1-Month Support
                  </div>
                </div>
                {/* <button className="w-full py-4 rounded-xl border border-outline-variant/30 text-white font-bold hover:bg-surface-container-high transition-all">Get Started</button> */}
              </div>
            </div>
          </div>
        </section>

        <Sample />

        {/* CTA Section */}
        <CTAsection />

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-white font-headline mb-2">DevEx Digital</div>
            <div className="text-gray-500 text-sm font-body">© 2026 DevEx Digital. Built with precision.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">afiqmuhaimin211188@gmail.com</a>
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">011-28343371</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
