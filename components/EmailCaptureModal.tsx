"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = email.toLowerCase().trim();

    if (!normalizedEmail || !normalizedEmail.includes("@") || !normalizedEmail.includes(".")) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Check if email already exists
      const emailQuery = query(
        collection(db, "early_access_emails"),
        where("email", "==", normalizedEmail)
      );
      const existingEmails = await getDocs(emailQuery);

      if (!existingEmails.empty) {
        setStatus("success"); // Show success anyway - don't reveal if email exists
        setEmail("");
        return;
      }

      await addDoc(collection(db, "early_access_emails"), {
        email: normalizedEmail,
        createdAt: serverTimestamp(),
        source: "website",
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setEmail("");
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-serif">You&apos;re on the list!</h3>
              <p className="text-neutral-600 mb-6">
                We&apos;ll notify you when HotBot launches. Get ready to level up your conversations.
              </p>
              <button
                onClick={handleClose}
                className="text-primary-pink font-semibold hover:text-primary-pink-dark transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-pink" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-serif">Get Early Access</h3>
                <p className="text-neutral-600">
                  Be the first to try <span className="text-primary-pink font-semibold">HotBot</span> when we launch in Q2 2026.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all text-neutral-800 placeholder:text-neutral-400"
                    disabled={status === "loading"}
                  />
                  {status === "error" && errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary-pink text-white py-3 rounded-xl font-bold hover:bg-primary-pink-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>

              <p className="text-center text-neutral-400 text-xs mt-4">
                No spam, ever. Email <a href="mailto:support@velkos.org" className="text-primary-pink hover:underline">support@velkos.org</a> to unsubscribe.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
