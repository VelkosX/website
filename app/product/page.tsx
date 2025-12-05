import Link from "next/link";
import { AbstractShape1, AbstractShape2 } from "@/components/Illustrations";
import EarlyAccessButton from "@/components/EarlyAccessButton";

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AbstractShape1 className="absolute top-0 right-0 w-96 h-96 translate-x-1/2 opacity-40" />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Product Details
            </p>
            <h1 className="font-serif text-neutral-800 mb-6 text-4xl md:text-5xl lg:text-6xl">
              Meet HotBot
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Your AI-powered conversation coach that teaches genuine communication skills through natural, human-like interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="card border-2 border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-500">The Problem</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Most AI assistants generate responses that sound robotic, overly formal, or just plain awkward. People can tell immediately—and it kills the conversation.
              </p>
            </div>

            {/* Solution */}
            <div className="card border-2 border-accent-teal/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-primary-pink">HotBot&apos;s Approach</span>
              </div>
              <p className="text-neutral-800 leading-relaxed">
                We fine-tuned our AI on real conversations to sound genuinely human. Plus, we show you <em>why</em> each response works—so you actually learn, not just copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-neutral-800 mb-4">How it works</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Four steps to better conversations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Share a conversation",
                desc: "Paste a message, upload a screenshot, or describe the situation you're in.",
              },
              {
                step: "2",
                title: "Get 3 options",
                desc: "HotBot generates three natural, human-sounding responses tailored to your context.",
              },
              {
                step: "3",
                title: "See why they work",
                desc: "Each response comes with an explanation of the psychology and reasoning behind it.",
              },
              {
                step: "4",
                title: "Learn the skill",
                desc: "Over time, you internalize the patterns and communicate more confidently on your own.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-pink text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-neutral-800 mb-4">Key features</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              What makes HotBot different from everything else
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Fine-Tuned AI Model",
                desc: "HotBot uses an extensively fine-tuned version of Google's Gemini 3 Pro model, trained on real conversations to generate responses that are indistinguishable from genuine human humor and wit.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Educational Chain of Thought",
                desc: "Every suggestion comes with a detailed explanation of the thinking process. Understand what makes a response effective, funny, or engaging.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Available Everywhere",
                desc: "Built with Kotlin Multiplatform for a native experience on Android, iOS, Web, and Desktop.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="card flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-pink/10 flex items-center justify-center text-primary-pink flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-neutral-800 mb-4">Who is this for?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              HotBot helps anyone who wants to communicate better
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dating App Users",
                desc: "Anyone who wants to improve their messaging game and have more engaging, authentic conversations.",
              },
              {
                title: "Social Skills Learners",
                desc: "People looking to develop better conversation skills and build confidence in social interactions.",
              },
              {
                title: "Those Tired of Robotic AI",
                desc: "Users disappointed with apps that provide cringe-worthy, unnatural suggestions from generic AI.",
              },
              {
                title: "Lifelong Learners",
                desc: "Anyone interested in understanding the psychology behind effective, humorous communication.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-lg font-bold text-neutral-800 mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Technology
            </p>
            <h2 className="font-serif text-white mb-4">
              Built for the future
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Powered by Google&apos;s most advanced AI and a sleek, modern cross-platform architecture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Engine",
                tech: "Gemini 3 Pro",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Platforms",
                tech: "Android | iOS | Web | Desktop",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Infrastructure",
                tech: "Google Cloud",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: "Security",
                tech: "Enterprise-grade",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-800/50 border border-neutral-700 p-6 rounded-2xl text-center group hover:border-primary-pink/50 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-pink/10 flex items-center justify-center text-primary-pink group-hover:bg-primary-pink group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.title}</p>
                <p className="font-semibold text-white">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-pink to-primary-pink-dark relative overflow-hidden">
        <AbstractShape2 className="absolute bottom-0 left-0 w-80 h-80 -translate-x-1/2 opacity-20" />

        <div className="max-w-content mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-4">
            Coming Soon
          </p>
          <h2 className="font-serif text-white mb-6 text-4xl md:text-5xl">
            Your conversations are about to level up
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to experience HotBot when it launches in <span className="font-bold">Q2 2026</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-primary-pink px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              View Pricing
            </Link>
            <EarlyAccessButton variant="outline-white" />
          </div>
        </div>
      </section>

    </div>
  );
}
