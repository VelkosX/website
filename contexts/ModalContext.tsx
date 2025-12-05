"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import EmailCaptureModal from "@/components/EmailCaptureModal";

interface ModalContextType {
  openEmailModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const openEmailModal = () => setIsEmailModalOpen(true);
  const closeEmailModal = () => setIsEmailModalOpen(false);

  return (
    <ModalContext.Provider value={{ openEmailModal }}>
      {children}
      <EmailCaptureModal isOpen={isEmailModalOpen} onClose={closeEmailModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
