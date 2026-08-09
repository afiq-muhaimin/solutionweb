import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, type PanInfo } from "motion/react";

interface CarouselItem {
  id: number;
  title: string;
  tag: string;
  description: string;
  href: string;
  imageSrc?: string;
  /** "cover" (default) fills the frame and crops; "contain" zooms out to show the full screenshot, letterboxed. */
  imageFit?: "cover" | "contain";
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Running Club",
    tag: "Landing Page",
    description: "A bold, conversion-focused landing page.",
    href: "#",
    imageSrc: "dist/assets/running-club.avif"
  },
  {
    id: 2,
    title: "Motosport",
    tag: "E-commerce",
    description: "Modern storefront with clean product UX.",
    href: "#",
    imageSrc: "dist/assets/motorsport.jpg"
  },
  {
    id: 3,
    title: "Personal Folio",
    tag: "Portfolio",
    description: "Minimalist personal branding site.",
    href: "https://afiq-muhaimin.github.io/",
    imageSrc: "dist/assets/Frame 1-CeptMx_S.png",
    imageFit: "contain"
  },
  {
    id: 4,
    title: "Coffee Break",
    tag: "Landing Page",
    description: "Coffee-rich store front experience.",
    href: "#",
    imageSrc: "dist/assets/coffee-break.avif"
  },
  // {
  //   id: 5,
  //   title: "Harbor Group",
  //   tag: "Corporate",
  //   description: "Professional multi-page corporate site.",
  //   href: "#",
  // },
  // {
  //   id: 6,
  //   title: "The Weekly",
  //   tag: "Blog",
  //   description: "Editorial-style content-first blog.",
  //   href: "#",
  // },
];

const GAP = 20;

// Apple's momentum projection (Designing Fluid Interfaces, WWDC 2018)
function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const releaseVelocityRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const maxIndex = Math.max(0, carouselItems.length - itemsVisible);
  const x = useMotionValue(0);

  const targetX = (index: number) => -(index * (cardWidth + GAP));

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;
      const count = width < 768 ? 1 : width < 1024 ? 2 : 3;
      const totalGaps = GAP * (count - 1);
      setItemsVisible(count);
      setCardWidth((containerRef.current.offsetWidth - totalGaps) / count);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (!cardWidth) return;
    const controls = animate(x, targetX(activeIndex), {
      type: "spring",
      duration: shouldReduceMotion ? 0 : releaseVelocityRef.current ? 0.4 : 0.45,
      bounce: shouldReduceMotion ? 0 : releaseVelocityRef.current ? 0.15 : 0,
      velocity: releaseVelocityRef.current,
    });
    releaseVelocityRef.current = 0;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, cardWidth]);

  const goTo = (index: number) => {
    releaseVelocityRef.current = 0;
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const onDragEnd = (_e: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    setIsDragging(false);
    const projected = x.get() + project(info.velocity.x);

    let nearest = 0;
    let nearestDistance = Infinity;
    for (let i = 0; i <= maxIndex; i++) {
      const distance = Math.abs(targetX(i) - projected);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = i;
      }
    }

    releaseVelocityRef.current = info.velocity.x;
    setActiveIndex(nearest);
  };

  return (
    <section id="more-projects" className="relative z-[1] py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] mb-2">More projects</h2>
            <p className="text-ink-muted text-[15px]">Browse additional samples and case studies.</p>
          </div>
          {/* Nav Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="pressable w-10 h-10 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center text-ink disabled:opacity-30 hover:bg-white/65 transition-colors duration-200"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex >= maxIndex}
              className="pressable w-10 h-10 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center text-ink disabled:opacity-30 hover:bg-white/65 transition-colors duration-200"
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Track */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            style={{ x, cursor: isDragging ? "grabbing" : "grab" }}
            drag="x"
            dragConstraints={{ left: targetX(maxIndex), right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={onDragEnd}
          >
            {carouselItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                draggable={false}
                onClickCapture={(e) => isDragging && e.preventDefault()}
                className="pressable group flex-shrink-0 block rounded-[18px] overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl backdrop-saturate-[1.8] shadow-[0_8px_24px_rgba(31,38,135,0.06)]"
                style={{ width: cardWidth || "calc(33.33% - 14px)" }}
              >
                <div className="aspect-square w-full relative overflow-hidden bg-[#f0f0f2]">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      draggable={false}
                      className={`absolute inset-0 w-full h-full transition-transform duration-700 ${
                        item.imageFit === "contain"
                          ? "object-contain p-3 group-hover:scale-[1.03]"
                          : "object-cover group-hover:scale-105"
                      }`}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, #eaeaec 0px, #eaeaec 14px, #dedee1 14px, #dedee1 28px)",
                      }}
                    >
                      <span className="material-symbols-outlined text-3xl text-ink-faint/70">add_photo_alternate</span>
                      <span className="text-ink-faint/70 text-[11px] font-semibold tracking-wide uppercase">
                        Add screenshot
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-[18px]">
                  <span className="inline-block bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-2.5">
                    {item.tag}
                  </span>
                  <h3 className="text-ink font-bold text-base mb-1.5 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`pressable rounded-full transition-[background-color,width] duration-300 ${
                i === activeIndex
                  ? "bg-accent w-6 h-2"
                  : "bg-ink/20 hover:bg-ink/35 w-2 h-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
