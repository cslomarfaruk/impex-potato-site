"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801927976323"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-green text-white rounded-none shadow-[4px_4px_0px_0px_var(--color-brand-red)] border-2 border-brand-green"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 relative z-10" />
    </a>
  );
}
