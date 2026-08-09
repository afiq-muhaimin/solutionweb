import { useEffect, useState } from "react";

interface SectionMeta {
  id: string;
  label: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "work", label: "Work" },
  { id: "more-projects", label: "More Projects" },
  { id: "workflow", label: "Workflow" },
  { id: "contact", label: "Contact" },
];

const SectionDotNav = () => {
  const [visible, setVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1040 : true
  );
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleResize = () => setVisible(window.innerWidth >= 1040);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      data-glass
      className="fixed right-[22px] top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-[18px] py-3.5 px-2.5 rounded-full bg-white/35 backdrop-blur-2xl backdrop-saturate-[1.6] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            title={section.label}
            className="relative block w-[9px] h-[9px] rounded-full transition-[opacity] duration-200"
            style={{
              backgroundColor: isActive ? "#0071e3" : "#8a8a8e",
              opacity: isActive ? 1 : 0.45,
            }}
          >
            {isActive && (
              <span className="dot-pulse-ring absolute -inset-1.5 rounded-full border-[1.5px] border-accent" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SectionDotNav;
