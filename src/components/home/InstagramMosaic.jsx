"use client";

import { useEffect } from "react";

export default function InstagramMosaic() {
  useEffect(() => {
    // If script already exists, reprocess embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Inject Instagram embed script
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const posts = [
    "https://www.instagram.com/p/DP0GgGyCEa9/?utm_source=ig_embed",
    "https://www.instagram.com/p/DPv1b_BjHqw/?utm_source=ig_embed",
    "https://www.instagram.com/reel/DQ80grgiPCF/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        <span className="text-primary">#Connect</span> with us on Socials
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {posts.map((url, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center"
          >
            <blockquote
              className="instagram-media w-full max-w-[350px]"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 4px 10px 0 rgba(0,0,0,0.15)",
                margin: "auto",
                padding: 0,
                width: "100%",
                cursor: "default",
                pointerEvents: "none", // 🔥 Added to disable mouse interaction
              }}
            ></blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
