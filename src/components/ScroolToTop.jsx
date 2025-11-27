"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
// import { ArrowUp } from "lucide-react";
// import { MoveUp } from "lucide-react";


export default function ScrollToTop({ lenis }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-28 right-6 z-[999999] bg-[#e69a38] text-white p-4 rounded-md shadow-lg 
        transition-all duration-500 
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp size={22} />
    </button>
  );
}
