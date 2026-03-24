import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/home/header";
import { bodyFont, monoFont } from "./fonts";
import "./globals.css";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Jonathan Doe | Senior Software Engineer",
  description:
    "Editorial portfolio with View Transitions API and Next.js 16.2 navigation integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      lang="en"
      className={`${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground smooth-scroll">
        <Header />
        <ViewTransition
          default={{
            default: "auto",
            "navigation-forward": "slide-forward",
            "navigation-back": "slide-back",
          }}
        >
          {children}
        </ViewTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
