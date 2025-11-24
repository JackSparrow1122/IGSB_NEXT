"use client";

import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQMBA";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function MBA() {
  const [activeTab, setActiveTab] = useState("admissions");
  const faqRef = useRef(null);
  const [specialization, setSpecialization] = useState("marketing");
  const [isModalOpen, setIsModalOpen] = useState(false); // Added missing state

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/IGSB/programmes/IGSB-Prospectus-Final.pdf";
    link.download = "IGSB-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Array of MBA highlight images
  const mbaHighlightImages = [
    "/Programs/MBA/MBA1.jpg",
    "/Programs/MBA/MBA2.jpg", 
    "/Programs/MBA/MBA3.jpg"
  ];

  // ==============================
  // MBA SPECIALIZATION CONTENT
  // ==============================
  const mbaData = {
    marketing: {
      title: "MBA in Marketing Management",
      subHeadline: "Crafting Brands and Driving Market Growth",
      overview:
        "This specialization delves into consumer behaviour, digital marketing strategies, brand management, and integrated marketing communications. It equips students with the skills to analyse markets, build powerful brands, and design data-driven campaigns that deliver measurable business results.",
      structure: [
        "Marketing Management & Consumer Behaviour",
        "Digital Marketing & Social Media Strategy",
        "Brand Management & Integrated Marketing Communications",
        "Sales & Distribution Management",
        "Strategic Marketing & Marketing Analytics",
      ],
      highlights: [
        {
          title: "Strategic Marketing Expertise",
          text: "Develop a profound understanding of market dynamics, consumer insights, and competitive strategy to make informed, impactful marketing decisions.",
        },
        {
          title: "Digital-First Approach",
          text: "Gain hands-on experience with the latest digital marketing tools and analytics platforms, preparing you for the evolving landscape of online consumer engagement.",
        },
        {
          title: "Industry Interface",
          text: "Learn from industry experts and work on live projects with leading brands, bridging the gap between theory and practical marketing challenges.",
        },
      ],
      careers: [
        "Brand Manager",
        "Digital Marketing Manager",
        "Market Research Analyst",
        "Sales Manager",
        "Product Manager",
        "Media Planner",
        "CRM Manager",
        "Head of Marketing",
      ],
    },

    finance: {
      title: "MBA in Financial Management",
      subHeadline: "Mastering the Art and Science of Value Creation",
      overview:
        "This specialization provides an in-depth understanding of corporate finance, investment analysis, financial markets, and risk management. It prepares students to make strategic financial decisions and navigate the global financial ecosystem.",
      structure: [
        "Corporate Finance & Financial Statement Analysis",
        "Investment Analysis & Portfolio Management",
        "Financial Markets & Institutions",
        "International Finance & Risk Management",
        "Mergers, Acquisitions & Corporate Valuation",
      ],
      highlights: [
        {
          title: "Analytical Rigor",
          text: "Build quantitative and analytical skills essential for modelling, valuation, and investment decision-making.",
        },
        {
          title: "Market-Ready Skills",
          text: "Gain practical exposure using financial databases, tools, and simulations.",
        },
        {
          title: "Strategic Perspective",
          text: "Understand the strategic role of finance in budgeting, governance, and corporate decision-making.",
        },
      ],
      careers: [
        "Financial Analyst",
        "Investment Banker",
        "Equity Research Analyst",
        "Risk Manager",
        "Corporate Finance Manager",
        "Wealth Manager",
        "Credit Analyst",
        "Chief Financial Officer",
      ],
    },

    hr: {
      title: "MBA in Human Resources Management",
      subHeadline: "Developing Talent, Building Organizational Culture",
      overview:
        "This specialization focuses on strategic HR, talent hiring, organizational behaviour, performance management, and employee development. It prepares future HR leaders.",
      structure: [
        "Talent Management & Acquisition",
        "Organizational Behaviour & Development",
        "Performance Management Systems & Compensation",
        "Employment Laws & Labor Relations",
        "HR Analytics & Strategic HRM",
      ],
      highlights: [
        {
          title: "Strategic HR Partnering",
          text: "Align HR strategies with business goals for talent-driven growth.",
        },
        {
          title: "People Analytics",
          text: "Use data for evidence-based decisions in hiring, retention, and performance.",
        },
        {
          title: "Leadership in Change Management",
          text: "Develop the ability to drive organizational transformation and employee engagement.",
        },
      ],
      careers: [
        "HR Business Partner",
        "Talent Acquisition Manager",
        "L&D Manager",
        "Compensation & Benefits Manager",
        "OD Consultant",
        "HR Analytics Specialist",
        "Employee Relations Manager",
        "Chief Human Resources Officer",
      ],
    },

    operations: {
      title: "MBA in Operations & Supply Chain Management",
      subHeadline: "Optimizing Systems for Efficiency and Excellence",
      overview:
        "This specialization covers supply chain dynamics, logistics, operations management, and project planning. It prepares students to manage large-scale systems efficiently.",
      structure: [
        "Operations Strategy & Supply Chain Management",
        "Logistics & Transportation Management",
        "Project Management & Quality Control",
        "Procurement & Sourcing Strategies",
        "Analytics for Operations & Decision Modelling",
      ],
      highlights: [
        {
          title: "End-to-End Supply Chain View",
          text: "Understand sourcing, production, logistics, distribution, and last-mile operations.",
        },
        {
          title: "Quantitative Problem-Solving",
          text: "Learn forecasting, optimization, and ERP tools for real-world problem solving.",
        },
        {
          title: "Global Perspective",
          text: "Explore international logistics, trade regulations, and risk mitigation strategies.",
        },
      ],
      careers: [
        "Supply Chain Analyst",
        "Operations Manager",
        "Logistics Manager",
        "Procurement Manager",
        "Project Manager",
        "Process Improvement Consultant",
        "Demand Planner",
        "Head of Supply Chain",
      ],
    },
  };

  const s = mbaData[specialization];

  return (
    <div className="w-full bg-white text-white">
      {/* =======================
          HERO SECTION
      ======================= */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/IGSB/Programmes/Banner.jpg"
            alt="MBA Program"
            fill
            className="object-cover object-center scale-105  opacity-90"
            priority
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Content Wrapper */}
        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              2-Year Master of Business Administration (MBA) Programme <br />
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              This rigorous programme is designed to develop strategic thinkers and future business leaders. It combines core management principles with deep specialization, fostering analytical prowess, leadership qualities, and an ethical mindset to drive organizational success in a complex global economy.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold"
              >
                Enquire Now
              </button>

              <button
                onClick={handleBrochureDownload}
                className="bg-secondary text-white px-8 py-3 rounded-lg"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* =======================
          WHITE INFO SECTION
      ======================= */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">🕓 Course Duration</h4>
            <p className="text-gray-700">The MBA Programme lasts 2 years.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">💼 Internship</h4>
            <p className="text-gray-700">
              Internships with leading organizations across industries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">🏫 Placements</h4>
            <p className="text-gray-700">
              Excellent placement record with top companies nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">🎓 Eligibility</h4>
            <p
              onClick={scrollToFAQ}
              className="cursor-pointer hover:text-blue-600 hover:underline"
            >
              Click here to see eligibility.
            </p>
          </div>
        </div>
      </div>

      {/* =======================
          MBA SPECIALIZATION TABS
      ======================= */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 flex-nowrap overflow-hidden">
          {[
            ["marketing", "MARKETING MANAGEMENT"],
            ["finance", "FINANCIAL MANAGEMENT"],
            ["hr", "HUMAN RESOURCES MANAGEMENT"],
            ["operations", "OPERATIONS & SUPPLY CHAIN MANAGEMENT"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSpecialization(key)}
              className={`px-4 md:px-6 h-14 max-w-[300px] flex items-center justify-center rounded-lg font-semibold text-sm md:text-base text-center border whitespace-normal leading-tight ${
                specialization === key
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* =======================
          STRUCTURE + FORM
      ======================= */}
      <div className="w-full bg-white py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="bg-white shadow-sm border p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              {s.title}
            </h2>
            <p className="text-gray-700 mb-6">{s.overview}</p>

            <h3 className="text-xl font-semibold text-secondary mb-3">
              Programme Structure
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {s.structure.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <ApplyForm />
          </div>
        </div>
      </div>

      {/* =======================
          PROGRAM HIGHLIGHTS
      ======================= */}
      <div className="w-full bg-[#f7f7f7] py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-10">
            Programme Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={mbaHighlightImages[i] || "/placeholder/program.jpg"}
                    alt={h.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {h.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          CAREER OPPORTUNITIES
      ======================= */}
      <div className="w-full bg-white py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-700 mb-6">
              This specialization opens pathways to impactful roles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {s.careers.map((item, index) => (
                <p key={index}>➜ {item}</p>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                src="/Programs/9.jpg"
                alt="Career Opportunities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <RecruitersSection />
      <CTASection />

      <div ref={faqRef}>
        <FAQSection />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60] animate-in fade-in-0 duration-300">
          <div className="bg-white w-[90%] md:w-[680px] p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-500">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 animate-in fade-in-0 slide-in-from-top-2 duration-500">
              Enquire Now
            </h2>

            <form className="space-y-4">
              {/* Name & Email */}
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />
              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />

              {/* Mobile */}
              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded-md px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" selected className="text-gray-400">
                    +91
                  </option>
                  <option value="" className="text-gray-400">
                    +92
                  </option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* State & City */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select State *
                  </option>
                  <option value="Maharashtra" className="text-gray-900">
                    Maharashtra
                  </option>
                  <option value="Karnataka" className="text-gray-900">
                    Karnataka
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select City *
                  </option>
                  <option value="Pune" className="text-gray-900">
                    Pune
                  </option>
                  <option value="Mumbai" className="text-gray-900">
                    Mumbai
                  </option>
                </select>
              </div>

              {/* Discipline & Course */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select Discipline Applying For *
                  </option>
                  <option value="Engineering" className="text-gray-900">
                    Engineering
                  </option>
                  <option value="Management" className="text-gray-900">
                    Management
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select Course *
                  </option>
                  <option
                    value="Computer Engineering"
                    className="text-gray-900"
                  >
                    Computer Engineering
                  </option>
                  <option
                    value="Mechanical Engineering"
                    className="text-gray-900"
                  >
                    Mechanical Engineering
                  </option>
                </select>
              </div>

              {/* Program */}
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                <option value="" disabled selected className="text-gray-400">
                  Select Programme *
                </option>
                <option value="B.Tech" className="text-gray-900">
                  B.Tech
                </option>
                <option value="M.Tech" className="text-gray-900">
                  M.Tech
                </option>
              </select>

              {/* CET Score */}
              <input
                type="text"
                placeholder="Enter CET Score"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />

              {/* Captcha */}
              <div className="flex gap-3 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 text-gray-700 font-bold select-none transition-all duration-300 hover:shadow-md">
                  8fcb09
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="agreeModal"
                  className="transition-all duration-300 hover:scale-110"
                />
                <label htmlFor="agreeModal" className="text-sm text-gray-700">
                  I agree to receive information regarding my submitted enquiry*
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E85C0D] hover:bg-[#d14f08] text-white font-semibold py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}