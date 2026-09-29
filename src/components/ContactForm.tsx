"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { submitContactForm } from "@/app/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      setErrorMessage("Please complete the bot verification.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData, turnstileToken);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 max-w-md w-full bg-brand-green-light p-6 border-2 border-brand-green">
        <h3 className="text-xl font-bold text-brand-green uppercase tracking-widest">Thank You!</h3>
        <p className="text-black font-medium">Your message has been sent successfully. Our engineering team will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-4 bg-brand-green text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-colors w-fit rounded-none"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-green">Name</label>
        <input 
          id="name"
          name="name"
          type="text" 
          required 
          className="border border-brand-green px-4 py-2 bg-white text-black outline-none focus:ring-2 focus:ring-brand-green rounded-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-green">Email</label>
        <input 
          id="email"
          name="email"
          type="email" 
          required 
          className="border border-brand-green px-4 py-2 bg-white text-black outline-none focus:ring-2 focus:ring-brand-green rounded-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-green">Phone Number</label>
        <input 
          id="phone"
          name="phone"
          type="tel" 
          required 
          className="border border-brand-green px-4 py-2 bg-white text-black outline-none focus:ring-2 focus:ring-brand-green rounded-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-green">Message</label>
        <textarea 
          id="message"
          name="message"
          rows={3} 
          required 
          className="border border-brand-green px-4 py-2 bg-white text-black outline-none focus:ring-2 focus:ring-brand-green rounded-none resize-y"
        ></textarea>
      </div>
      
      <div className="h-[65px]">
        <Turnstile 
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} 
          onSuccess={(token) => setTurnstileToken(token)}
          options={{ theme: "light" }}
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status === "submitting" || !turnstileToken}
        className="bg-brand-red text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-none shadow-[4px_4px_0px_0px_var(--color-brand-green)] active:translate-y-1 active:translate-x-1 active:shadow-none mt-1"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-brand-red text-sm font-medium">{errorMessage}</p>
      )}
    </form>
  );
}
