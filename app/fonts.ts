import { Geist, Geist_Mono } from "next/font/google";

export const bodyFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const monoFont = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});
