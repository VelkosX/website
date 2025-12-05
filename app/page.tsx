import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import {
  HeartBubble,
  ChatBubble,
  AbstractShape1,
  AbstractShape2,
  FloatingHeart,
} from "@/components/Illustrations";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background decorations */}
        <AbstractShape1 className="absolute top-20 left-0 w-96 h-96 -translate-x-1/2 opacity-50" />
        <AbstractShape2 className="absolute bottom-20 right-0 w-80 h-80 translate-x-1/3 opacity-50" />
        <FloatingHeart className="absolute top-40 right-20 w-8 h-8 animate-float opacity-60" />
        <FloatingHeart className="absolute bottom-40 left-20 w-6 h-6 animate-float delay-300 opacity-40" />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
                AI-Powered Conversation Coach
              </p>
              <h1 className="font-serif mb-6 text-neutral-800 text-4xl md:text-5xl lg:text-6xl">
                Stop guessing what to text.
                <br />
                <span className="text-primary-pink">Start connecting.</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed mx-auto lg:mx-0">
                Real, natural, human replies—powered by AI that finally gets it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/product"
                  className="bg-primary-pink text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-pink-dark hover:shadow-pink-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn How It Works
                </Link>
                <EarlyAccessButton variant="secondary" />
              </div>
              <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary-pink animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ))}
                </div>
                <span className="text-neutral-500 text-sm">
                  Launching Q2 2026
                </span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <HeartBubble className="absolute -top-8 -left-8 w-16 h-16 animate-bounce-soft" />
                <ChatBubble className="absolute -bottom-4 -right-12 w-20 h-16 animate-float delay-200" />
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-neutral-800 mb-4">
              AI just doesn&apos;t get how we talk
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Generic AI assistants try too hard—and it shows. Responses end up cheesy and nothing like real human conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bad Example */}
            <div className="card border-2 border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-500">Generic AI</span>
              </div>
              <div className="bg-neutral-100 rounded-2xl p-5">
                <p className="text-neutral-700 italic">
                  &ldquo;I hope you&apos;re having a wonderful day! Your smile is radiant
                  like the sun. Would you perhaps enjoy getting coffee sometime?&rdquo;
                </p>
              </div>
              <p className="mt-4 text-red-500 font-semibold text-sm">
                Too formal. Too robotic. Everyone knows it&apos;s AI.
              </p>
            </div>

            {/* Good Example */}
            <div className="card border-2 border-accent-teal/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-primary-pink">HotBot</span>
              </div>
              <div className="bg-gradient-to-br from-primary-pink/5 to-accent-teal/5 rounded-2xl p-5 border border-primary-pink/10">
                <p className="text-neutral-800">
                  &ldquo;lol same energy. what&apos;s your go-to late night snack though?&rdquo;
                </p>
              </div>
              <p className="mt-4 text-accent-teal font-semibold text-sm">
                Natural. Playful. Actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-pink to-primary-pink-dark relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <FloatingHeart className="absolute top-20 right-1/4 w-8 h-8 text-white/20 animate-float" />
          <FloatingHeart className="absolute bottom-20 left-1/4 w-6 h-6 text-white/20 animate-float delay-300" />
        </div>

        <div className="max-w-content mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-white mb-6 text-4xl md:text-5xl">
            Ready to level up your conversations?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            HotBot launches <span className="font-bold">Q2 2026</span>. Get early access and be the first to try it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="bg-white text-primary-pink px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Features
            </Link>
            <EarlyAccessButton variant="outline-white" />
          </div>
        </div>
      </section>

    </div>
  );
}
