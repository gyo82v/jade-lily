import type { Metadata } from "next";
import "./globals.css";
import {EB_Garamond, Dancing_Script} from "next/font/google"
import type { RootLayoutProps } from "@/types";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap"
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script"
})

export const metadata: Metadata = {
  title: "JadeLily",
  description: "restaurant app",
};

export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col antialiased ${ebGaramond.className} ${dancingScript.variable}`}>
        <a href="#content" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <main id="content" className="flex-1 container mx-auto py-8 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

