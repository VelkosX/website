"use client";

import { useModal } from "@/contexts/ModalContext";

interface EarlyAccessButtonProps {
  variant?: "primary" | "secondary" | "outline-white" | "white";
  className?: string;
  children?: React.ReactNode;
}

export default function EarlyAccessButton({
  variant = "secondary",
  className = "",
  children = "Get Early Access",
}: EarlyAccessButtonProps) {
  const { openEmailModal } = useModal();

  const baseStyles = "px-8 py-4 rounded-full text-lg font-bold transition-all duration-300";

  const variants = {
    primary:
      "bg-primary-pink text-white hover:bg-primary-pink-dark hover:shadow-pink-glow hover:-translate-y-0.5",
    secondary:
      "bg-white text-primary-pink border-2 border-primary-pink hover:bg-primary-pink hover:text-white",
    "outline-white":
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-pink",
    white:
      "bg-white text-primary-pink hover:shadow-lg hover:-translate-y-0.5",
  };

  return (
    <button
      onClick={openEmailModal}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
