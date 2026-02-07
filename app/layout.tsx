import type { Metadata } from "next";
import "./globals.css";
import {EB_Garamond, Dancing_Script, Playfair_Display} from "next/font/google"
import type { RootLayoutProps } from "@/types";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap"
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script"
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["600", "700"]
})

export const metadata: Metadata = {
  title: "JadeLily",
  description: "restaurant app",
};

export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`min-h-screen flex flex-col antialiased text-orange-800 
                       ${ebGaramond.className} ${dancingScript.variable} ${playfairDisplay.variable}`}>
        <a href="#content" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <Header />
          <main id="content" className="flex-1 flex min-w-0 w-full">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}

