"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useModal } from "@/contexts/ModalContext";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openEmailModal } = useModal();
  const pathname = usePathname();

  // Dark pages where navbar needs light text
  const isDarkPage = pathname === "/privacy" || pathname === "/terms";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : isDarkPage
          ? "bg-neutral-900/50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
            </div>
            <span className={`text-xl font-bold font-serif ${scrolled || !isDarkPage ? "text-neutral-800" : "text-white"}`}>HotBot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/product"
              className={`hover:text-primary-pink transition-colors duration-300 font-medium link-underline ${scrolled || !isDarkPage ? "text-neutral-600" : "text-white/90"}`}
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-primary-pink transition-colors duration-300 font-medium link-underline ${scrolled || !isDarkPage ? "text-neutral-600" : "text-white/90"}`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary-pink transition-colors duration-300 font-medium link-underline ${scrolled || !isDarkPage ? "text-neutral-600" : "text-white/90"}`}
            >
              About
            </Link>
            <button
              onClick={openEmailModal}
              className="bg-primary-pink text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-pink-dark hover:shadow-pink-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center hover:text-primary-pink transition-colors ${scrolled || !isDarkPage ? "text-neutral-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-neutral-100 px-6 py-4 space-y-1">
          <Link
            href="/product"
            className="block py-3 text-neutral-700 hover:text-primary-pink transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="block py-3 text-neutral-700 hover:text-primary-pink transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block py-3 text-neutral-700 hover:text-primary-pink transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openEmailModal();
            }}
            className="block w-full py-3 mt-2 text-center bg-primary-pink text-white rounded-full font-semibold hover:bg-primary-pink-dark transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}
