import { useEffect, useState } from "react";

const CTAsection = () => {
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysVv-5hm9yWLTjOYuqxyU6W7UZ-OJtcJG7pDWU-vZbnFWb2Z9fYuFdcMCme7DBKlay/exec"; // 👈 paste your URL here

    const [formData, setFormData] = useState({ name: "", email: "", inquiry: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [successVisible, setSuccessVisible] = useState(false);

    useEffect(() => {
        if (status !== "success") {
            setSuccessVisible(false);
            return;
        }
        const raf = requestAnimationFrame(() => setSuccessVisible(true));
        return () => cancelAnimationFrame(raf);
    }, [status]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
        // Send as URL-encoded form data instead of JSON
        const params = new URLSearchParams({
            name: formData.name,
            email: formData.email,
            inquiry: formData.inquiry,
        });

        await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
        });

        setStatus("success");
        setFormData({ name: "", email: "", inquiry: "" });

    } catch {
        setStatus("error");
    }
};



    return (
        <section className="relative z-[1] py-24 px-6" id="contact">
            <div className="max-w-[560px] mx-auto">
                <div
                    data-glass
                    className="bg-white/45 backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/60 rounded-[28px] p-10 md:p-14 shadow-[0_8px_32px_rgba(31,38,135,0.08)]"
                >
                    <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] mb-3 text-center">
                        Let's build something great
                    </h2>
                    <p className="text-ink-muted text-[15px] text-center mb-10">
                        Tell us about your project and we'll reply within a day.
                    </p>

                    {status === "success" ? (
                        <div className="reveal text-center py-6" data-visible={successVisible}>
                            <p className="text-[19px] font-bold mb-2">Message sent.</p>
                            <p className="text-ink-muted text-sm mb-5">We'll get back to you shortly.</p>
                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className="pressable bg-transparent border-none text-accent font-semibold text-sm cursor-pointer"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-[13px] text-ink-muted mb-1.5">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full box-border px-4 py-3.5 rounded-xl border border-white/70 bg-white/50 text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] text-ink-muted mb-1.5">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full box-border px-4 py-3.5 rounded-xl border border-white/70 bg-white/50 text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] text-ink-muted mb-1.5">Project details</label>
                                <textarea
                                    name="inquiry"
                                    rows={4}
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us about your project..."
                                    className="w-full box-border px-4 py-3.5 rounded-xl border border-white/70 bg-white/50 text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="pressable mt-1 py-3.5 rounded-full border-none bg-accent hover:bg-accent-hover text-white font-semibold text-[15px] cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? "Sending..." : "Send Inquiry"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTAsection;