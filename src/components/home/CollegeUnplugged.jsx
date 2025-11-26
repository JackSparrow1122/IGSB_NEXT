"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    title: "Ek aisa College jo kisi Resort se Kam nahi || Indira College of Engineering & Management",
    thumbnail: "https://img.youtube.com/vi/VFNW2xjcLS4/0.jpg",
    url: "https://youtu.be/VFNW2xjcLS4?si=82O2nNba-C76P6Sj",
  },
  {
    title: "ICEM (Indira College of Engineering and Management) Award Function",
    thumbnail: "https://img.youtube.com/vi/KrkLiGVGeT0/0.jpg",
    url: "https://youtu.be/KrkLiGVGeT0?si=-OHivtfzbudfoUWz",
  },
  {
    title: "Sunidhi Chauhan at ICEM",
    thumbnail: "https://img.youtube.com/vi/UxjeDzFtpMY/0.jpg",
    url: "https://youtu.be/UxjeDzFtpMY?si=1PQkCtSjM5gDA0ez",
  },
  {
    title: "Life at Indira University, Pune | Explore Vibrant Campus Life | Cutting Edge Facilities",
    thumbnail: "https://img.youtube.com/vi/gEXvD4OVyXg/0.jpg",
    url: "https://youtu.be/gEXvD4OVyXg?si=68Sex6D7MOVnPik3",
  },
];

function toEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  const videoId = match ? match[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function CollegeUnplugged() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const playerRef = useRef(null);

  const itemRefs = useRef([]);

  /* ------------------------------------------------------
     1️⃣  FIX SCROLL STUCK ON YOUTUBE (Iframe Scroll Lock Fix)
  -------------------------------------------------------*/
  useEffect(() => {
    let iframe = null;
    let scrollTimeout;

    const enableIframe = () => {
      if (iframe) iframe.style.pointerEvents = "auto";
    };

    const disableIframe = () => {
      if (iframe) iframe.style.pointerEvents = "none";

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(enableIframe, 250);
    };

    const handler = () => disableIframe();
    window.addEventListener("scroll", handler);

    iframe = document.querySelector("#youtube-frame");

    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ------------------------------------------------------
     2️⃣  GSAP Fade-In Animations
  -------------------------------------------------------*/
  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-up"),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  /* ------------------------------------------------------
     3️⃣  SWAP Animation (Your existing flip logic stays same)
  -------------------------------------------------------*/

  const createClone = (sourceRect, contentNode) => {
    const clone = document.createElement("div");
    clone.style.position = "fixed";
    clone.style.left = `${sourceRect.left}px`;
    clone.style.top = `${sourceRect.top}px`;
    clone.style.width = `${sourceRect.width}px`;
    clone.style.height = `${sourceRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.pointerEvents = "none";
    clone.style.borderRadius = getComputedStyle(contentNode).borderRadius || "8px";
    clone.style.overflow = "hidden";
    clone.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    clone.style.transition =
      "transform 520ms cubic-bezier(.2,.9,.3,1), left 520ms cubic-bezier(.2,.9,.3,1), top 520ms cubic-bezier(.2,.9,.3,1), width 520ms, height 520ms, opacity 320ms";
    return clone;
  };

  const handleSelect = (clickedIndex) => {
    if (clickedIndex === selectedIndex) return;

    const fromNode = itemRefs.current[clickedIndex];
    const toNode = playerRef.current;

    if (!fromNode || !toNode) {
      setSelectedIndex(clickedIndex);
      return;
    }

    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();

    const cloneFrom = createClone(fromRect, fromNode);
    cloneFrom.innerHTML = `
      <div style="display:flex;align-items:center;height:100%">
        <img src="${videos[clickedIndex].thumbnail}" style="width:40%;height:100%;object-fit:cover" />
        <div style="padding:10px;flex:1;display:flex;align-items:center">
          <div style="font-size:14px;color:#0f172a">
            ${escapeHtmlShort(videos[clickedIndex].title)}
          </div>
        </div>
      </div>`;
    document.body.appendChild(cloneFrom);

    const cloneTo = createClone(toRect, toNode);
    cloneTo.innerHTML = `
      <div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center">
        <img src="${videos[selectedIndex].thumbnail}" style="width:60%;height:60%;object-fit:cover;border-radius:6px" />
      </div>`;
    document.body.appendChild(cloneTo);

    fromNode.style.visibility = "hidden";
    toNode.style.visibility = "hidden";

    cloneFrom.getBoundingClientRect();
    cloneTo.getBoundingClientRect();

    cloneFrom.style.left = `${toRect.left}px`;
    cloneFrom.style.top = `${toRect.top}px`;
    cloneFrom.style.width = `${toRect.width}px`;
    cloneFrom.style.height = `${toRect.height}px`;

    cloneTo.style.left = `${fromRect.left}px`;
    cloneTo.style.top = `${fromRect.top}px`;
    cloneTo.style.width = `${fromRect.width}px`;
    cloneTo.style.height = `${fromRect.height}px`;

    let finished = 0;
    const onFinish = () => {
      finished++;
      if (finished < 2) return;

      cloneFrom.remove();
      cloneTo.remove();
      fromNode.style.visibility = "";
      toNode.style.visibility = "";

      setSelectedIndex(clickedIndex);
    };

    cloneFrom.addEventListener("transitionend", onFinish);
    cloneTo.addEventListener("transitionend", onFinish);
  };

  return (
    <div ref={sectionRef} className="bg-white py-10 fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 fade-up">Indira College Unplugged</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start fade-up">

          {/* LEFT LIST */}
          <div className="lg:col-span-5 space-y-4 fade-up" ref={listRef}>
            {videos.map((v, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-all duration-300 fade-up 
                  ${selectedIndex === i
                    ? "bg-white shadow-md border-blue-100"
                    : "bg-gray-50 border-gray-100"}`}
              >
                <div className="relative w-28 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 line-clamp-2">{v.title}</div>
                </div>

                {selectedIndex === i && (
                  <div className="ml-2 text-xs text-blue-600 font-medium">Playing</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT VIDEO PLAYER */}
          <div className="lg:col-span-7 fade-up">
            <div
              ref={playerRef}
              className="w-full bg-black rounded-xl overflow-hidden shadow-xl fade-up"
              style={{ minHeight: 260 }}
            >
              <iframe
                id="youtube-frame"
                key={videos[selectedIndex].url}
                width="100%"
                height="100%"
                className="min-h-[260px] lg:min-h-[360px]"
                src={toEmbedUrl(videos[selectedIndex].url)}
                title={videos[selectedIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 p-3 fade-up">
              <h3 className="text-lg font-semibold text-gray-800">{videos[selectedIndex].title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Watch the full video to explore campus life, events and facilities.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* HTML escape helper */
function escapeHtmlShort(str) {
  return String(str).replace(/[&<>"']/g, (s) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[s];
  });
}
