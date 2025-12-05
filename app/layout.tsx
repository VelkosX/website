import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "HotBot – AI-Powered Communication Coach by Velkos",
  description: "A smarter way to improve your communication. HotBot gives you natural, human-like AI coaching to help you express yourself effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navigation />

          <main>{children}</main>

          <footer className="bg-neutral-900 text-white">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            {/* Main footer content */}
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand column */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold font-serif">HotBot</span>
                </Link>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  AI-powered conversation coaching that actually sounds human.
                </p>
                <p className="text-neutral-500 text-xs">
                  A product by Velkos Ltd
                </p>
              </div>

              {/* Product column */}
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-neutral-300">HotBot</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/product" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company column */}
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-neutral-300">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal column */}
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-neutral-300">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Velkos Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="mailto:support@velkos.org" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  support@velkos.org
                </a>
              </div>
            </div>
          </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
