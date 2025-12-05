import { AbstractShape1 } from "@/components/Illustrations";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <AbstractShape1 className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 opacity-40" />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Contact
            </p>
            <h1 className="font-serif text-neutral-800 mb-4 text-4xl md:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Have questions about HotBot? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Support */}
            <div className="card group">
              <div className="w-12 h-12 mb-4 rounded-full bg-primary-pink/10 flex items-center justify-center text-primary-pink group-hover:bg-primary-pink group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2 font-serif">General Support</h3>
              <p className="text-neutral-500 text-sm mb-3">
                Product questions, feature requests, and general inquiries
              </p>
              <a
                href="mailto:support@velkos.org"
                className="text-lg text-primary-pink hover:text-primary-pink-dark transition-colors font-semibold"
              >
                support@velkos.org
              </a>
            </div>

            {/* Business */}
            <div className="card group">
              <div className="w-12 h-12 mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2 font-serif">Business Inquiries</h3>
              <p className="text-neutral-500 text-sm mb-3">
                Partnerships, media, and business opportunities
              </p>
              <a
                href="mailto:luka.velimirovic@velkos.org"
                className="text-lg text-accent-teal hover:text-accent-teal-dark transition-colors font-semibold"
              >
                luka.velimirovic@velkos.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
              Our Location
            </p>
            <h2 className="font-serif text-neutral-800 mb-4 text-3xl">
              Based in Belgrade, Serbia
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Velkos Ltd is building the future of AI-powered communication from the heart of the Balkans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
