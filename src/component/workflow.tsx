const Workflow = () => {

    return (
        <section className="py-32 bg-surface-container-low" id="workflow">
            <div className="max-w-6xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline">
                        Project Workflow
                    </h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto font-body">
                        A simple and transparent process to deliver your website within 1–2 weeks.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Line */}
                    <div className="absolute top-6 left-0 w-full h-[2px] bg-white/10"></div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-5 h-5 rounded-full bg-primary border-4 border-[#131313] z-10"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 font-headline">
                                Day 1–2
                            </h3>
                            <p className="text-primary font-semibold mb-2">Design Phase</p>
                            <p className="text-on-surface-variant text-sm font-body">
                                Wireframe and UI design based on your requirements and branding.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-5 h-5 rounded-full bg-primary border-4 border-[#131313] z-10"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 font-headline">
                                Day 3–7
                            </h3>
                            <p className="text-primary font-semibold mb-2">Development</p>
                            <p className="text-on-surface-variant text-sm font-body">
                                Full website development with responsive and optimized performance.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-5 h-5 rounded-full bg-primary border-4 border-[#131313] z-10"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 font-headline">
                                Day 7–10
                            </h3>
                            <p className="text-primary font-semibold mb-2">Feedback & Refinement</p>
                            <p className="text-on-surface-variant text-sm font-body">
                                Revisions and improvements based on your feedback before final delivery.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-5 h-5 rounded-full bg-primary border-4 border-[#131313] z-10"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 font-headline">
                                Day 10–14
                            </h3>
                            <p className="text-primary font-semibold mb-2">Deployment</p>
                            <p className="text-on-surface-variant text-sm font-body">
                                Revisions and improvements based on your feedback before final delivery.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline note */}
                <div className="text-center mt-16">
                    <span className="text-sm text-on-surface-variant font-body">
                        ⏱ Estimated delivery: <span className="text-white font-semibold">1 – 2 weeks</span>
                    </span>
                </div>
                <div className="text-center">
                    <span className="text-sm text-on-surface-variant font-body">
                        <span className="text-white font-semibold">Kindly note that this timeline is an estimated project duration and may vary depending on requirements and feedback.</span>
                    </span>
                </div>

            </div>
        </section>
    )

}

export default Workflow