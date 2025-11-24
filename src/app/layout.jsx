// app/layout.js
"use client"; // Add this since we're using useState and useEffect
import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedActionBar from "@/components/FixedActionBar";
import Loader from "@/components/Loader";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>ICEM - Indira College of Engineering and Management</title>
        <meta
          name="description"
          content="Official ICEM website built with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/shortLogo.png" />
      </head>
      <body className="min-h-screen bg-white flex flex-col">

        <Loader isLoading={isLoading} />

        <Navbar />
        <FixedActionBar />
        <main className="flex-grow">{children}</main>
        {/* <div className="w-full bg-zinc-100">
          <Image
            src="/footer-illustration.webp"
            alt="Indira College Silhouette"
            width={1920}
            height={300}
            className="w-full h-auto object-cover"
            priority
          />
        </div> */}
        <Footer />
      </body>
    </html>
  );
}
