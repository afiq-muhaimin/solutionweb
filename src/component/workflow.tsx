import Reveal from "./reveal";

const Workflow = () => {
  return (
    <section id="workflow" className="relative z-[1] py-24 px-6">
      <div
        data-glass
        className="max-w-[980px] mx-auto bg-white/35 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/50 rounded-[32px] p-10 md:p-16 shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
      >
        {/* Header */}
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] mb-4 text-center">How we work</h2>
        <p className="text-ink-muted text-[17px] text-center max-w-[480px] mx-auto mb-16">
          A transparent process, delivered in one to two weeks.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Reveal delayMs={0} className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mx-auto mb-5">1</div>
            <h3 className="text-[15px] font-bold mb-1">Day 1–2</h3>
            <p className="text-accent text-[13px] font-semibold mb-2">Design Phase</p>
            <p className="text-ink-muted text-[13px] leading-relaxed">Wireframes and UI design based on your requirements and branding.</p>
          </Reveal>

          <Reveal delayMs={80} className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mx-auto mb-5">2</div>
            <h3 className="text-[15px] font-bold mb-1">Day 3–7</h3>
            <p className="text-accent text-[13px] font-semibold mb-2">Development</p>
            <p className="text-ink-muted text-[13px] leading-relaxed">Full build with responsive, optimized performance.</p>
          </Reveal>

          <Reveal delayMs={160} className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mx-auto mb-5">3</div>
            <h3 className="text-[15px] font-bold mb-1">Day 7–10</h3>
            <p className="text-accent text-[13px] font-semibold mb-2">Feedback & Refinement</p>
            <p className="text-ink-muted text-[13px] leading-relaxed">Revisions based on your feedback before final delivery.</p>
          </Reveal>

          <Reveal delayMs={240} className="text-center">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mx-auto mb-5">4</div>
            <h3 className="text-[15px] font-bold mb-1">Day 10–14</h3>
            <p className="text-accent text-[13px] font-semibold mb-2">Deployment</p>
            <p className="text-ink-muted text-[13px] leading-relaxed">Launch, DNS setup, and final handover.</p>
          </Reveal>
        </div>

        <p className="text-center text-ink-muted text-[13px] mt-14">
          Estimated delivery: <span className="text-ink font-semibold">1–2 weeks</span>, depending on scope and feedback turnaround.
        </p>
      </div>
    </section>
  );
};

export default Workflow;
