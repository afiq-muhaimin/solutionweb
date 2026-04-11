import { useState } from "react";

const CTAsection = () => {
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysVv-5hm9yWLTjOYuqxyU6W7UZ-OJtcJG7pDWU-vZbnFWb2Z9fYuFdcMCme7DBKlay/exec"; // 👈 paste your URL here

    const [formData, setFormData] = useState({ name: "", email: "", inquiry: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        <section className="py-32 relative overflow-hidden" id="contact">
            <div className="max-w-4xl mx-auto px-8">
                <div className="bg-surface-container-high border border-white/10 rounded-[40px] p-12 md:p-16 relative">
                    <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-headline text-center">
                            Let's Work Together
                        </h2>
                        <p className="text-on-surface-variant text-center mb-10 max-w-xl mx-auto font-body">
                            Tell me about your project and I'll get back to you as soon as possible.
                        </p>

                        {status === "success" ? (
                            <div className="text-center py-10">
                                <p className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</p>
                                <p className="text-on-surface-variant">I'll get back to you as soon as possible.</p>
                                <button onClick={() => setStatus("idle")} className="mt-6 text-primary underline">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm text-on-surface-variant mb-2 font-body">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-on-surface-variant mb-2 font-body">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-on-surface-variant mb-2 font-body">Inquiry</label>
                                    <textarea
                                        name="inquiry"
                                        rows={4}
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold text-lg shadow-lg hover:translate-y-[-2px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Inquiry"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAsection;