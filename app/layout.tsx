import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js 16.2.0 - View Transitions Demo",
  description: "Small demo of Next.js 16.2.0 View Transitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ViewTransition
          default={{
            default: "auto",
            "navigation-forward": "slide-forward",
            "navigation-back": "slide-back",
          }}
        >
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
