
const Sample = () => {
return(
<section className="py-16 md:py-32 bg-surface-container-lowest" id="samples">
  <div className="max-w-7xl mx-auto px-5 md:px-8">
    <div className="flex flex-col mb-10 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-headline">The Gallery</h2>
      <p className="text-on-surface-variant text-lg font-body">Explore a range of sample projects, from sleek single-page designs to fully developed multi-page web experiences</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[800px]">

      {/* Modern Corporate */}
      <a className="aspect-video md:aspect-auto md:col-span-8 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer" href="https://afiqmuhaimin-construction.pages.dev/">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          alt="Enterprise Project"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRFtTqDjlP_xedGDzOQnb8DpTBqU2_LBZMabZ4w9zD4j8jfpb9rd1DR1b-CmgafPhay24Vf2-qmzCdcST0H3j-iRS08DgM5SVrW4aVlsuOPJ2WvKAl9hnZ8E77DFu2Ffl1Gz0N86lU9BYNOwR_aL0Scqweae-M8YI5v_nrQdagyfnrJPelsg8w1QtqdEc_XUnvRLNw8ysjafhi-7ljqc_BcPx5MvmfTMp1QTPzLeOd3h0SwYuwMJR-tX7e4J7j2kkQVgYeB4M03O3"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-extrabold tracking-widest uppercase rounded mb-3 md:mb-4 inline-block">Business Portfolio</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 font-headline">Modern Corporate</h3>
          <p className="hidden sm:block text-on-surface-variant max-w-md font-body text-sm md:text-base">Scalable architectures with focus on security and professional brand integrity.</p>
        </div>
      </a>

      {/* Sleek E-commerce */}
      <a className="aspect-[4/3] md:aspect-auto md:col-span-4 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer" href="https://afiqmuhaimin-woody.pages.dev/">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          alt="Retail Project"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6AOBgz1qmgVtQUBEeVbbsK4apolTDEuCI8j4K14wkZRzzjYpkTS5iSfTuPT3bqI8poEERE5uhC-nOQvj0F9rvCtGNKC-NNHmS3TPRTpU8b_4ajogm7BjoZjkaTDhe_6OMGl4KOBuv2hN0WhhNdSmlpp3jCpBXADueEiCJqvRQ3Dt9Pal7LHP8-2yOJk1Wq0z2FHchPaQPj7XWyX1QmQpKxzebnlFovslAUgAcRgQM601k9OflYungAAfG9UoeRVypCFGRNKk3u86"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <span className="px-3 py-1 bg-tertiary text-on-tertiary text-[10px] font-extrabold tracking-widest uppercase rounded mb-3 md:mb-4 inline-block">Retail</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 font-headline">Product Showcase</h3>
          <p className="hidden sm:block text-on-surface-variant max-w-md font-body text-sm md:text-base">Sleek Product Centric Showcase</p>
        </div>
      </a>

      {/* Minimalist Portfolio */}
      <a className="aspect-[4/3] md:aspect-auto md:col-span-4 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer" href="https://minimalistportfolio.afiqmuhaimin211188.workers.dev/">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          alt="Creative Project"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEBwREkleYRAccRvPUEw-t7oNKw_MiPi9twvBHtQVhRJH-_9T54dZO2RfyxJAnD5PiggpINuQF_QghyzgP2RpfCouzCf-7bbHQb0MbK-hjMo3_m-k2dsq9P8UsGC1UlyJNTArEJRTLIXy_HHq7PKgRFMwf1QhQ4f4LI1LAGavVkP01b7dvSX1pbi1M7D2PbFIFjALdBRiUih0RUOVCvL67xXApCb_FC2evV6QKGQx9JPiVHlXMXuULdQyFELIRRIPRTAdUGb8BF1sP"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <span className="px-3 py-1 bg-secondary text-on-secondary text-[10px] font-extrabold tracking-widest uppercase rounded mb-3 md:mb-4 inline-block">Creative</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 font-headline">Minimalist Portfolio</h3>
          <p className="hidden sm:block text-on-surface-variant max-w-md font-body text-sm md:text-base">Simple yet powerful portfolio showcase</p>
          
        </div>
      </a>

      {/* Dynamic Startup */}
      <a className="aspect-video md:aspect-auto md:col-span-8 group relative rounded-3xl overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer" href="https://afiqmuhaimin-solartec.pages.dev/">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          alt="SaaS Project"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-zBtOJ2z173iad9QvZw7n-knkhG7jBv1cMaH5mTfTvU_I3we-u-PWamNeA85297mwx68aS2q5ARfKqkHX0znOhouCy5QoWnZLj2bTZnDN427yrdDkM5RlcsG5fTONC_6vmEqb5eYvO-GrNhYBMs1wnPKOWT4b2-ROgs-nmnZAzyQe-B95cb684_-L2CG9F5prNDWLrdi15k9ymiOvNEO60HZbX5Fs2W7Dtm3tf2ns_oI81thXdxQRcjtgnK_oW9JDZn-cn8jedGz"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <span className="px-3 py-1 bg-primary-container text-white text-[10px] font-extrabold tracking-widest uppercase rounded mb-3 md:mb-4 inline-block">Professional Brands</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 font-headline">Digital Presence Platform</h3>
          <p className="hidden sm:block text-on-surface-variant max-w-md font-body text-sm md:text-base">Elevating brands through modern, high-performance web experiences</p>
        </div>
      </a>

    </div>
  </div>
</section>
)
}

export default Sample