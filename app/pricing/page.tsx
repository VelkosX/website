import Link from "next/link";
import { AbstractShape1, AbstractShape2, FloatingHeart } from "@/components/Illustrations";
import EarlyAccessButton from "@/components/EarlyAccessButton";

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AbstractShape1 className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 opacity-40" />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Pricing
            </p>
            <h1 className="font-serif text-neutral-800 mb-6 text-4xl md:text-5xl lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Invest in yourself. HotBot&apos;s pricing reflects the quality of genuinely human AI coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="card flex flex-col">
              <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-serif">Novice</h3>
              <p className="text-neutral-500 text-sm mb-6">Start your journey for free.</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-neutral-800">$0</span>
                <span className="text-neutral-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-neutral-600">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 AI conversations/month
                </li>
                <li className="flex items-center gap-3 text-neutral-600">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic responses
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="line-through">Chain of thought</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="line-through">Priority support</span>
                </li>
              </ul>
              <EarlyAccessButton className="w-full mt-auto text-base !bg-neutral-100 !text-neutral-600 !border-0 hover:!bg-neutral-200 hover:!text-neutral-700" variant="secondary">
                Join Waitlist
              </EarlyAccessButton>
            </div>

            {/* Casanova */}
            <div className="card flex flex-col border-2 border-primary-pink">
              <h3 className="text-2xl font-bold text-primary-pink mb-2 font-serif">Casanova</h3>
              <p className="text-neutral-500 text-sm mb-6">Master the art of conversation.</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-neutral-800">$14.37</span>
                <span className="text-neutral-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-neutral-800 font-medium">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited conversations
                </li>
                <li className="flex items-center gap-3 text-neutral-800 font-medium">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced responses
                </li>
                <li className="flex items-center gap-3 text-neutral-800 font-medium">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chain of thought
                </li>
                <li className="flex items-center gap-3 text-neutral-800 font-medium">
                  <svg className="w-5 h-5 text-accent-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <EarlyAccessButton className="w-full mt-auto text-base" variant="primary">
                Join Waitlist
              </EarlyAccessButton>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-neutral-800 mb-8">
              Why we price the way we do
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Creating an AI that actually feels human takes real work. HotBot isn&apos;t a generic chatbot — it&apos;s a conversation coach built with advanced language technology and a custom-designed communication framework.
              </p>
              <p>
                Most competitors use off-the-shelf systems that give bland, robotic responses. HotBot is built differently: every message is crafted to help you communicate better, not just reply faster.
              </p>
              <p>
                Our pricing reflects the quality, depth, and intelligence behind the experience — a tool that&apos;s genuinely useful from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-pink to-primary-pink-dark relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <FloatingHeart className="absolute top-20 right-1/4 w-8 h-8 text-white/20 animate-float" />
          <FloatingHeart className="absolute bottom-20 left-1/4 w-6 h-6 text-white/20 animate-float delay-300" />
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-4">
            Coming Soon
          </p>
          <h2 className="font-serif text-white mb-6 text-4xl md:text-5xl">
            Almost there.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be the first to know when HotBot launches in <span className="font-bold">Q2 2026</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-white text-primary-pink px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Meet the Team
            </Link>
            <EarlyAccessButton variant="outline-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
