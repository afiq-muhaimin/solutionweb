const App = () => {
  return (
    <div className="bg-background text-on-background selection:bg-primary/30 min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight text-white font-headline">DevEx Gallery</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-gray-400 font-medium hover:text-white transition-colors font-body" href="#services">Services</a>
            <a className="text-gray-400 font-medium hover:text-white transition-colors font-body" href="#pricing">Pricing</a>
            <a className="text-gray-400 font-medium hover:text-white transition-colors font-body" href="#samples">Samples</a>
          </div>
          <a className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200" href="#footer" onClick={(e) => {
            e.preventDefault();
            document.getElementById("footer")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}>
            Hire Me
          </a>
        </div>
      </nav>

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
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 font-headline">
                  Comprehensive <span className="text-primary">web solutions</span> for your business
                </h1>
                <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
                  Bridging the gap between creative vision and technical excellence. We build high-performance digital experiences that scale.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-primary-container/20">
                    Start a Project
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button className="bg-transparent border border-outline-variant/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all">
                    View Samples
                  </button>
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
              <div className="text-primary font-bold flex items-center gap-2 cursor-pointer group">
                View All Services
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
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

        {/* Sample Projects Section (Bento Grid) */}
        <section className="py-32 bg-surface-container-lowest" id="samples">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headline">The Gallery</h2>
              <p className="text-on-surface-variant text-lg font-body">Sample projects that are available but not limited to:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
              {/* Modern Corporate */}
              <div className="md:col-span-8 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="Enterprise Project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRFtTqDjlP_xedGDzOQnb8DpTBqU2_LBZMabZ4w9zD4j8jfpb9rd1DR1b-CmgafPhay24Vf2-qmzCdcST0H3j-iRS08DgM5SVrW4aVlsuOPJ2WvKAl9hnZ8E77DFu2Ffl1Gz0N86lU9BYNOwR_aL0Scqweae-M8YI5v_nrQdagyfnrJPelsg8w1QtqdEc_XUnvRLNw8ysjafhi-7ljqc_BcPx5MvmfTMp1QTPzLeOd3h0SwYuwMJR-tX7e4J7j2kkQVgYeB4M03O3" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-extrabold tracking-widest uppercase rounded mb-4 inline-block">Enterprise</span>
                  <h3 className="text-3xl font-bold text-white mb-2 font-headline">Modern Corporate</h3>
                  <p className="text-on-surface-variant max-w-md font-body">Scalable architectures with focus on security and professional brand integrity.</p>
                </div>
              </div>
              {/* Sleek E-commerce */}
              <div className="md:col-span-4 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="Retail Project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6AOBgz1qmgVtQUBEeVbbsK4apolTDEuCI8j4K14wkZRzzjYpkTS5iSfTuPT3bqI8poEERE5uhC-nOQvj0F9rvCtGNKC-NNHmS3TPRTpU8b_4ajogm7BjoZjkaTDhe_6OMGl4KOBuv2hN0WhhNdSmlpp3jCpBXADueEiCJqvRQ3Dt9Pal7LHP8-2yOJk1Wq0z2FHchPaQPj7XWyX1QmQpKxzebnlFovslAUgAcRgQM601k9OflYungAAfG9UoeRVypCFGRNKk3u86" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="px-3 py-1 bg-tertiary text-on-tertiary text-[10px] font-extrabold tracking-widest uppercase rounded mb-4 inline-block">Retail</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">Sleek E-commerce</h3>
                </div>
              </div>
              {/* Minimalist Portfolio */}
              <div className="md:col-span-4 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="Creative Project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEBwREkleYRAccRvPUEw-t7oNKw_MiPi9twvBHtQVhRJH-_9T54dZO2RfyxJAnD5PiggpINuQF_QghyzgP2RpfCouzCf-7bbHQb0MbK-hjMo3_m-k2dsq9P8UsGC1UlyJNTArEJRTLIXy_HHq7PKgRFMwf1QhQ4f4LI1LAGavVkP01b7dvSX1pbi1M7D2PbFIFjALdBRiUih0RUOVCvL67xXApCb_FC2evV6QKGQx9JPiVHlXMXuULdQyFELIRRIPRTAdUGb8BF1sP" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="px-3 py-1 bg-secondary text-on-secondary text-[10px] font-extrabold tracking-widest uppercase rounded mb-4 inline-block">Creative</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">Minimalist Portfolio</h3>
                </div>
              </div>
              {/* Dynamic Startup */}
              <div className="md:col-span-8 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="SaaS Project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-zBtOJ2z173iad9QvZw7n-knkhG7jBv1cMaH5mTfTvU_I3we-u-PWamNeA85297mwx68aS2q5ARfKqkHX0znOhouCy5QoWnZLj2bTZnDN427yrdDkM5RlcsG5fTONC_6vmEqb5eYvO-GrNhYBMs1wnPKOWT4b2-ROgs-nmnZAzyQe-B95cb684_-L2CG9F5prNDWLrdi15k9ymiOvNEO60HZbX5Fs2W7Dtm3tf2ns_oI81thXdxQRcjtgnK_oW9JDZn-cn8jedGz" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="px-3 py-1 bg-primary-container text-white text-[10px] font-extrabold tracking-widest uppercase rounded mb-4 inline-block">SaaS</span>
                  <h3 className="text-3xl font-bold text-white mb-2 font-headline">Dynamic Startup</h3>
                  <p className="text-on-surface-variant max-w-md font-body">Agile solutions focused on rapid deployment, user engagement, and conversion optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden" id="footer">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-primary-container/10 border border-primary/20 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-headline">Ready to build your next <span className="text-primary">big thing?</span></h2>
              <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto font-body">Let's discuss your requirements and create a digital masterpiece that drives results.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-container/30 hover:translate-y-[-4px] transition-all">Schedule a Call</button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Send an Email</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-white font-headline mb-2">DevEx Gallery</div>
            <div className="text-gray-500 text-sm font-body">© 2024 DevEx Gallery. Built with precision.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">Email</a>
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">LinkedIn</a>
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">GitHub</a>
            <a className="text-gray-500 hover:text-[#4169E1] transition-colors font-label uppercase text-xs tracking-widest" href="#">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
