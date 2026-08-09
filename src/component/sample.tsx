import Reveal from "./reveal";

const Sample = () => {
  return (
    <section id="work" className="relative z-[1] py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] mb-4 text-center">Selected work</h2>
        <p className="text-ink-muted text-[17px] text-center max-w-[560px] mx-auto mb-16">
          A range of projects, from single-page brands to full multi-page platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 md:h-[640px] gap-5">

          {/* Modern Corporate */}
          <Reveal delayMs={0} className="aspect-video md:aspect-auto md:col-span-8">
            <a
              className="pressable group relative block w-full h-full rounded-[20px] overflow-hidden border border-white/50 cursor-pointer"
              href="https://afiqmuhaimin-construction.pages.dev/"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Enterprise Project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRFtTqDjlP_xedGDzOQnb8DpTBqU2_LBZMabZ4w9zD4j8jfpb9rd1DR1b-CmgafPhay24Vf2-qmzCdcST0H3j-iRS08DgM5SVrW4aVlsuOPJ2WvKAl9hnZ8E77DFu2Ffl1Gz0N86lU9BYNOwR_aL0Scqweae-M8YI5v_nrQdagyfnrJPelsg8w1QtqdEc_XUnvRLNw8ysjafhi-7ljqc_BcPx5MvmfTMp1QTPzLeOd3h0SwYuwMJR-tX7e4J7j2kkQVgYeB4M03O3"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8 bg-gradient-to-t from-black/55 to-transparent to-55%">
                <span
                  data-glass
                  className="bg-accent/55 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2.5"
                >
                  Business Portfolio
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Modern Corporate</h3>
                <p className="hidden sm:block text-white/85 max-w-md text-sm md:text-base">Scalable architectures with focus on security and professional brand integrity.</p>
              </div>
            </a>
          </Reveal>

          {/* Sleek E-commerce */}
          <Reveal delayMs={80} className="aspect-[4/3] md:aspect-auto md:col-span-4">
            <a
              className="pressable group relative block w-full h-full rounded-[20px] overflow-hidden border border-white/50 cursor-pointer"
              href="https://afiqmuhaimin-woody.pages.dev/"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Retail Project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6AOBgz1qmgVtQUBEeVbbsK4apolTDEuCI8j4K14wkZRzzjYpkTS5iSfTuPT3bqI8poEERE5uhC-nOQvj0F9rvCtGNKC-NNHmS3TPRTpU8b_4ajogm7BjoZjkaTDhe_6OMGl4KOBuv2hN0WhhNdSmlpp3jCpBXADueEiCJqvRQ3Dt9Pal7LHP8-2yOJk1Wq0z2FHchPaQPj7XWyX1QmQpKxzebnlFovslAUgAcRgQM601k9OflYungAAfG9UoeRVypCFGRNKk3u86"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-7 bg-gradient-to-t from-black/55 to-transparent to-55%">
                <span
                  data-glass
                  className="bg-accent/55 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2.5"
                >
                  Retail
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Product Showcase</h3>
                <p className="hidden sm:block text-white/85 max-w-md text-sm md:text-base">Sleek product-centric showcase.</p>
              </div>
            </a>
          </Reveal>

          {/* Minimalist Portfolio */}
          <Reveal delayMs={160} className="aspect-[4/3] md:aspect-auto md:col-span-4">
            <a
              className="pressable group relative block w-full h-full rounded-[20px] overflow-hidden border border-white/50 cursor-pointer"
              href="https://minimalistportfolio.afiqmuhaimin211188.workers.dev/"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Creative Project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEBwREkleYRAccRvPUEw-t7oNKw_MiPi9twvBHtQVhRJH-_9T54dZO2RfyxJAnD5PiggpINuQF_QghyzgP2RpfCouzCf-7bbHQb0MbK-hjMo3_m-k2dsq9P8UsGC1UlyJNTArEJRTLIXy_HHq7PKgRFMwf1QhQ4f4LI1LAGavVkP01b7dvSX1pbi1M7D2PbFIFjALdBRiUih0RUOVCvL67xXApCb_FC2evV6QKGQx9JPiVHlXMXuULdQyFELIRRIPRTAdUGb8BF1sP"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-7 bg-gradient-to-t from-black/55 to-transparent to-55%">
                <span
                  data-glass
                  className="bg-accent/55 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2.5"
                >
                  Creative
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Minimalist Portfolio</h3>
                <p className="hidden sm:block text-white/85 max-w-md text-sm md:text-base">Simple yet powerful portfolio showcase.</p>
              </div>
            </a>
          </Reveal>

          {/* Dynamic Startup */}
          <Reveal delayMs={240} className="aspect-video md:aspect-auto md:col-span-8">
            <a
              className="pressable group relative block w-full h-full rounded-[20px] overflow-hidden border border-white/50 cursor-pointer"
              href="https://afiqmuhaimin-solartec.pages.dev/"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="SaaS Project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-zBtOJ2z173iad9QvZw7n-knkhG7jBv1cMaH5mTfTvU_I3we-u-PWamNeA85297mwx68aS2q5ARfKqkHX0znOhouCy5QoWnZLj2bTZnDN427yrdDkM5RlcsG5fTONC_6vmEqb5eYvO-GrNhYBMs1wnPKOWT4b2-ROgs-nmnZAzyQe-B95cb684_-L2CG9F5prNDWLrdi15k9ymiOvNEO60HZbX5Fs2W7Dtm3tf2ns_oI81thXdxQRcjtgnK_oW9JDZn-cn8jedGz"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8 bg-gradient-to-t from-black/55 to-transparent to-55%">
                <span
                  data-glass
                  className="bg-accent/55 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2.5"
                >
                  Professional Brands
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Digital Presence Platform</h3>
                <p className="hidden sm:block text-white/85 max-w-md text-sm md:text-base">Elevating brands through modern, high-performance web experiences.</p>
              </div>
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Sample;
