"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedActionBar from "@/components/FixedActionBar";
import Loader from "@/components/Loader";
import LenisProvider from "@/components/LenisProvider";
import { Scroll } from "lucide-react";
import ScrollToTop from "@/components/ScroolToTop";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>IGSB - Indira Global School of Business</title>
        <link rel="icon" href="/shortLogo.png" />
      </head>

      <body className="min-h-screen bg-white">
        <Loader isLoading={isLoading} />

        <Navbar />
        <ScrollToTop />
        <FixedActionBar />

        {/* ✔ Wrap entire scrollable content with Lenis */}
        <LenisProvider>
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
