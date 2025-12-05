import { AbstractShape1, AbstractShape2 } from "@/components/Illustrations";
import TeamAccordion from "@/components/TeamAccordion";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden">
        <AbstractShape2 className="absolute top-0 right-0 w-96 h-96 translate-x-1/2 opacity-40" />
        <AbstractShape1 className="absolute bottom-0 left-0 w-72 h-72 -translate-x-1/2 opacity-30" />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-6">
              About Us
            </p>
            <h1 className="font-serif text-neutral-800 mb-6 text-4xl md:text-5xl lg:text-6xl">
              The story behind Velkos
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              From decades of software development to building the future of AI-powered communication. We&apos;re a small team with big ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Velkos has been around since the 1990s, mostly building administrative software and internal tools for local businesses. In 2025, we decided it was time to take everything we&apos;ve learned over the years and apply it to something new—something we&apos;re genuinely excited about.
              </p>
              <p>
                That &ldquo;something&rdquo; is <span className="font-semibold text-primary-pink">HotBot</span>: an AI-powered communication coach built to make conversations feel natural, smooth, and genuinely human.
              </p>
              <p>
                HotBot is being developed with a modern tech stack—one Kotlin Multiplatform codebase powering Android, iOS, Desktop, and Web; a lightweight Ktor backend on Cloud Run; and the latest AI models from Google, including Gemini 3 Pro and fine-tuned variants deployed on Vertex AI.
              </p>
              <p>
                The product is still in development, with a planned public launch in <span className="font-semibold text-neutral-800">Q2 2026</span>. Our goal is to build AI that not only generates natural, human-sounding responses, but also helps you understand why they work—acting as a real coach so you can communicate more confidently on your own.
              </p>
              <p>
                Velkos may have started decades ago, but this new chapter is something entirely different—a small, focused team building a next-generation AI product with real ambition and modern engineering behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              The Team
            </p>
            <h2 className="font-serif text-neutral-800 mb-4">
              Meet the people behind <span className="text-primary-pink">HotBot</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A lean team of 3 developers passionate about creating AI that feels genuinely human.
            </p>
          </div>
          <TeamAccordion />
        </div>
      </section>

    </div>
  );
}
