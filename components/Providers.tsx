"use client";

import { ModalProvider } from "@/contexts/ModalContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
