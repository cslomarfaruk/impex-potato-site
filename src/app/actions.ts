"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData, token: string) {
  try {
    // 1. Verify Turnstile token
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET}&response=${token}`,
      }
    );
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return { success: false, error: "Bot verification failed. Please try again." };
    }

    // 2. Send email via Resend
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "info@impexecotech.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Action error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
