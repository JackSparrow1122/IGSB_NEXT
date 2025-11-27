"use client";

import React, { useEffect, useState } from "react";

export default function CTASection() {
  const [pathname, setPathname] = useState("");

  // ✅ Detect route (works for both App & Pages router)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  // ✅ Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/IGSB/programmes/IGSB-Prospectus-Final.pdf";
    link.download = "IGSB-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Scroll to Apply Form
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ Headline & Body text per route
  const pageContent = {
    "/": {
      headline: "The Next Steps",
      body: "The steps you take today shape your future. At Indira College, we empower bright minds with strong fundamentals, a global perspective, and leadership skills to make a meaningful change in the world.",
    },
    "/programs/mba": {
      headline: "Lead the Future of Business",
      body: "The decision to pursue an MBA is an investment in your leadership potential. At Indira Global School of Business, we provide the strategic knowledge, specialized skills, and industry connections to accelerate your career and prepare you for senior management roles.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  return (
    <section className=" bg-secondary text-center text-white py-16 px-6   mx-auto  shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{headline}</h2>
      <p className="text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
        {body}
      </p>

      {/* ✅ Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
  onClick={handleBrochureDownload}
  className="
    bg-white text-[#002D72] font-semibold px-8 py-3 rounded-md 
    transition-all duration-300 
    hover:bg-gray-100 
    hover:shadow-lg 
    hover:-translate-y-1
  "
>
  Download Brochure
</button>

<button
  onClick={handleScrollToForm}
  className="
    bg-white text-[#002D72] font-semibold px-8 py-3 rounded-md 
    transition-all duration-300 
    hover:bg-gray-100 
    hover:shadow-lg 
    hover:-translate-y-1
  "
>
  Get in Touch
</button>

      </div>
    </section>
  );
}
