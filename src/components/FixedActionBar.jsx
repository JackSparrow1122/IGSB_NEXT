"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FixedActionBar = () => {
  const [isOpenRight, setIsOpenRight] = useState(false);

  return (
    <>
      {/* ================= LEFT BAR (UNCHANGED) ================= */}
      <div className="hidden md:flex fixed bottom-6 left-0 z-[99999] items-center">
        {/* Your left code stays exactly same */}
      </div>

      {/* ================= RIGHT BAR (NEW) ================= */}
      <div className="hidden md:flex fixed bottom-8 right-5 z-[99999] items-center">
        <div
          className="relative flex items-center group"
          onMouseEnter={() => setIsOpenRight(true)}
          onMouseLeave={() => setIsOpenRight(false)}
        >
          {/* 🌈 Right Hamburger Button */}
          <div className="relative p-[2px] bg-gradient-to-r from-[#00e5ff] via-[#ff00ea] to-[#00e5ff] bg-[length:200%_100%] animate-glow-border transition-all duration-500 rounded-md">
            <button
              title="Menu"
              className="relative flex items-center justify-center bg-black text-white p-4 rounded-r-md shadow-lg hover:brightness-110 transition-all duration-300"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* 🚀 Right Side Social Icons */}
          <div
            className={`absolute right-full top-1/2 -translate-y-1/2 flex items-center transition-all duration-500 ease-in-out ${
              isOpenRight
                ? "opacity-100 -translate-x-0"
                : "opacity-0 translate-x-3 pointer-events-none"
            }`}
          >
            <div className="bg-black px-3 py-2 shadow-lg flex items-center gap-3 rounded-l-md">
              <a
                href="#"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <a
                href="#"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <a
                href="#"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaSquareXTwitter size={18} />
              </a>

              <span className="w-[1px] h-6 bg-white/40"></span>

              <a
                href="#"
                className="bg-white text-black p-2.5 rounded-md shadow hover:scale-105 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🌈 Glow Border Styles */}
      <style>{`
        @keyframes glow-border {
          0% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 15px rgba(255, 0, 234, 0.6);
          }
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
          }
        }
        .animate-glow-border {
          animation: glow-border 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FixedActionBar;
