"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import {
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiMapPin,
  FiAward,
  FiInfo,
} from "react-icons/fi";

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // ✅ Refs to manage hover timers and outside clicks (no flicker)
  const dropdownTimeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // === Hover Handlers (fixed flicker) ===
  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // === Close dropdown if click outside ===
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownContent = {
    aboutUs: {
      title: "About Us",
      sections: [
        {
          title: "About Us",
          items: [
            {
              label: "Shree Chanakya Education Society",
              link: "/about/chanakya-edu",
            },

            { label: "Indira Group of Institutes ", link: "/about/igi" },
            {
              label: "Indira Global School of Business",
              link: "/about/IGSBOverview",
            },
            {
              label: "Chairperson's Profile & Chief Mentor-IGI",
              link: "/about/cfcm",
            },
            { label: "Director's Profile", link: "/about/DP" },
            { label: "Vision Mission & Values", link: "/about/accreditation" },
            {
              label: "Recognition / Affiliation",
              link: "/about/accreditation",
            },
            { label: "Facilities", link: "/about/facilities" },
          ],
        },
        {
          title: "Governance",
          items: [
            {
              label: "Board of Governance",
              link: "/about/governance",
            },

            {
              label: "Committee's",
              link: "/about/committee",
            },
            {
              label: "Cell's",
              link: "/about/cell",
            },
            {
              label: "Research & Consultancy",
              link: "/about/Research",
            },
            {
              label: "Institutions Innovation Council (IIC)",
              link: "/about/IIC",
            },
            ],
        },
      
      ],
    },

    campusLife: {
      title: "Campus Life",
      sections: [
        {
          title: "Events & Activities",
          items: [
            {
              label: "Students Engagement",
              link: "/campus-life/student-engagement",
            },
            {
              label: "Students Certifications",
              link: "/campus-life/induction-programme",
            },
            {
              label: "Student Induction",
              link: "/campus-life/student-engagement#student-council",
            },
            { label: "Student Achievements", link: "/campus-life/nss" },
            {
              label: "Industry Institution Interaction",
              link: "/campus-life/icem-awards",
            },
            {
              label: "Professional Associations",
              link: "/campus-life/academics",
            },
          ],
        },
        {
          title: "Student Committees",
          items: [
            {
              label: "Student Grievance Redrerssal Committee",
              link: "/campus-life/cultural-events",
            },
            { label: "Anti Ragging Committee", link: "/campus-life/sports" },
            { label: "Anti Ragging Squad", link: "/campus-life/clubs" },
            // { label: "Technical Fest", link: "/campus-life/tech-fest" },
            // { label: "Workshops & Seminars", link: "/campus-life/workshops" },
            {
              label: "Student Welfare Council",
              link: "/campus-life/annual-fest",
            },
            { label: "Student Counsellor", link: "/campus-life/annual-fest" },
            { label: "Event Committee", link: "/campus-life/annual-fest" },
            {
              label: "Online Grievance Redressal Mechanism",
              link: "/campus-life/annual-fest",
            },
          ],
        },
      ],
    },
    programs: {
      title: "Programs & Admission",
      sections: [
        {
          title: "MBA",
          items: [
            {
              label: "Program Details/ Orientation",
              link: "/programs/computer-engineering",
            },
            {
              label: "Admissions",
              link: "/programs/mechanical-engineering",
            },
            {
              label: "Human Capital/ Intellectual Capital",
              link: "/programs/ai-ds",
            },
          ],
        },
        {
          title: "PHD",
          items: [{ label: "Research Center", link: "/programs/mba" }],
        },
      ],
    },

    placement: {
      title: "Placement",
      sections: [
        {
          items: [
            "Placement Team",
            "Our Recruiters",
            "Placed Students",
            "Placement Policy",
          ],
        },
      ],
    },

    accreditation: {
      title: "Accreditation",
      sections: [
        {
          title: "NAAC",
          items: [
            "SSR reports year wise",
            "Criteria wise Details",
            "AQAR reports",
            "NAAC Certificate",
          ],
        },
        {
          title: "IQAC",
          items: [
            "IQAC Committee",
            "IQAC Notices",
            "MOMS & Actions",
            "IQAC Formats",
            "Best Practices",
            "Distinctive Practice",
          ],
        },
        {
          title: "Reports & Others",
          items: [
            "SPPU Annual Report",
            "Code of Conduct",
            "NIRF",
            "Financial Statements",
            "Soft Skills & Aptitude",
            "Reports",
          ],
        },
      ],
    },
  };

  const renderDropdownContent = (content) => (
    <div className="max-w-8xl px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in-0 zoom-in-95 duration-300 ">
      {content.sections.map((section, index) => (
        <div key={index}>
          {section.title ? (
            <h3 className="text-lg font-semibold text-secondary mb-4">
              {section.title}
            </h3>
          ) : null}
          <ul className="space-y-4 text-gray-800 text-sm">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex justify-between items-center border-b border-black pb-2 group"
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="font-semibold flex justify-between items-center w-full text-gray-800 hover:text-primary transition-all duration-200 group-hover:translate-x-1"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="font-semibold text-gray-900 transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                ) : (
                  <div className="font-semibold flex justify-between items-center w-full text-gray-600">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 opacity-50" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobileDropdown = (content, dropdownName) => (
    <div className="bg-gray-50 rounded-lg mt-2 overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-300">
      {content.sections.map((section, index) => (
        <div key={index} className="border-t border-gray-200 first:border-t-0">
          {section.title && (
            <h4 className="font-semibold text-secondary px-4 py-2 bg-gray-100">
              {section.title}
            </h4>
          )}
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="animate-in fade-in-0 slide-in-from-left-2 duration-300"
                style={{ animationDelay: `${itemIndex * 50}ms` }}
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-500 text-xs transition-transform duration-200 hover:scale-110" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 text-xs" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        ref={navbarRef}
        className="w-full h-[12vh] flex bg-white shadow-sm font-sans fixed top-0 left-0 right-0 z-50" // Changed from sticky to fixed
      >
        {/* Left: Logo - 80% width on mobile */}
        <div className="w-full md:w-[30%] h-full flex items-center justify-start md:pl-0 md:justify-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              height={240}
              width={240}
              className="h-40 w-[80%] md:h-24 md:w-full cursor-pointer object-contain transition-transform duration-300 "
              priority
              unoptimized={true}
            />
          </Link>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex w-[70%] h-full flex-col">
          {/* Top Bar */}
          <div className="flex justify-end  w-full h-[45%] text-sm text-black">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 font-semibold">
                <a
                  href="https://rapid.grayquest.com/iudp-master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Pay Fee
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="http://220.226.204.21/login.aspx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  ERP Login
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://app.joinsuperset.com/join/#/signup/student/placements/621c7653-bdeb-4ee2-bb72-765e5d1d9635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Superset
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://lc-icem-sumedh.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Leaving Certificate
                </a>
                <span className="text-gray-400">|</span>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>

              {/* Buttons */}
              <div className="flex">
                <button
                  onClick={toggleModal}
                  className="bg-secondary hover:scale-[1.03] text-white px-8 py-3  font-semibold "
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Nav Links */}
          <div className="flex  justify-end items-center gap-1 h-[55%] text-black px-6 text-md font-semibold whitespace-nowrap ">
            <div
              className="flex  h-full  items-center gap-1 cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("aboutUs")}
              onPointerLeave={handleMouseLeave}
            >
              <span>About Us</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "aboutUs" ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className="flex items-center gap-1  px-5  cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("campusLife")}
              onPointerLeave={handleMouseLeave}
            >
              <span>Campus Life</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "campusLife" ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className="flex items-center gap-1  px-5  cursor-pointer hover:text-secondary transition-all duration-200 group"
              onPointerEnter={() => handleMouseEnter("programs")}
              onPointerLeave={handleMouseLeave}
            >
              <span>Programs & Admission</span>
              <FiChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === "programs" ? "rotate-180" : ""
                }`}
              />
            </div>
            <Link
              href="/placement"
              className="hover:text-secondary  px-5  transition-colors duration-200 group"
            >
              Placement
            </Link>
            <Link
              href="/about/examination"
              className="hover:text-secondary  px-5  transition-colors duration-200 group"
            >
              Examination
            </Link>
            <Link
              href="/alumni"
              className="hover:text-secondary  px-5  transition-colors duration-200 group"
            >
              Alumni
            </Link>
            <Link
              href="/research"
              className="hover:text-secondary  px-5  transition-colors duration-200 group"
            >
              Research
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-[20%] flex items-center justify-center pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <HiMenuAlt2 size={28} />
          </button>
        </div>

        {/* Dropdown Menu - Desktop */}
        {activeDropdown && (
          <div
            onPointerEnter={() => handleMouseEnter(activeDropdown)}
            onPointerLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full backdrop-blur-sm bg-white/60 shadow-xl border-t border-gray-200 z-50 hidden md:block animate-in fade-in-0 slide-in-from-top-2 duration-300"
          >
            {renderDropdownContent(dropdownContent[activeDropdown])}
          </div>
        )}
      </nav>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-[12vh]"></div>

      {/* Mobile Menu - Slides from bottom to top */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-50 z-40 animate-in fade-in-0 duration-300"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "85vh" }}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110"
              >
                <HiX size={22} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(85vh - 60px)" }}
            >
              <div className="p-3 space-y-0">
                {/* 🔹 Quick Links Dropdown */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("quickLinks")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Quick Links</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "quickLinks" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {mobileDropdown === "quickLinks" && (
                    <div className="bg-gray-50 rounded-lg mt-1 overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-300">
                      <ul className="space-y-1 text-xs font-medium text-gray-700">
                        {[
                          {
                            label: "Pay Fee",
                            href: "https://rapid.grayquest.com/iudp-master",
                          },
                          {
                            label: "ERP Staff",
                            href: "https://indira.edupluscampus.com/",
                          },
                          {
                            label: "ERP Student",
                            href: "https://myindira.edupluscampus.com/",
                          },
                          {
                            label: "360° Tour",
                            href: "https://indiraicem.ac.in/ICEM-360-degree-virtual-tour/",
                          },
                          {
                            label: "Leaving Certificate",
                            href: "https://lc-icem-sumedh.vercel.app",
                          },
                          { label: "Contact Us", href: "/contact" },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="animate-in fade-in-0 slide-in-from-left-2 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1"
                            >
                              {item.label}
                              <TbExternalLink className="text-gray-500 text-xs transition-transform duration-200 hover:scale-110" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 🔹 About Us */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("aboutUs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>About Us</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "aboutUs" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "aboutUs" &&
                    renderMobileDropdown(dropdownContent.aboutUs, "aboutUs")}
                </div>

                {/* 🔹 Campus Life */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("campusLife")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Campus Life</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "campusLife" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "campusLife" &&
                    renderMobileDropdown(
                      dropdownContent.campusLife,
                      "campusLife"
                    )}
                </div>

                {/* 🔹 Programs & Admission */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleMobileDropdown("programs")}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-900 text-sm hover:text-primary transition-all duration-200"
                  >
                    <span>Programs & Admission</span>
                    <span className="text-lg transition-transform duration-300">
                      {mobileDropdown === "programs" ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {mobileDropdown === "programs" &&
                    renderMobileDropdown(dropdownContent.programs, "programs")}
                </div>

                {/* 🔹 Single Links */}
                {[
                  { label: "Placement", href: "/placement" },
                  { label: "Examination", href: "/about/examination" },
                  { label: "Alumni", href: "/alumni" },
                  { label: "Research", href: "/research" },
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 text-sm font-medium text-gray-900 hover:text-primary transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                      <TbExternalLink className="text-gray-500 text-xs transition-transform duration-200 hover:scale-110" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* 🔹 Compact Enquire Now Button */}
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => {
                    toggleModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#278da4] to-[#003c84] text-white py-2 text-sm font-semibold rounded-md hover:from-[#278da4]/90 hover:to-[#003c84]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== Helpline Drawer ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50 ${
          isHelplineOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Admissions Helpline</h3>
          <button
            onClick={toggleHelpline}
            className="hover:scale-110 transition-transform duration-300"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6 text-gray-800 space-y-6 overflow-y-auto h-full">
          <div className="animate-in fade-in-0 slide-in-from-right-2 duration-500">
            <p className="text-sm text-gray-600">
              For more information give a miss call on
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-2 transition-all duration-300 hover:shadow-md">
              <p className="text-2xl font-bold text-primary text-center">
                1800 267 1999
              </p>
            </div>
          </div>
        </div>
      </div>

      {isHelplineOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-in fade-in-0 duration-300"
          onClick={toggleHelpline}
        />
      )}

      {/* ===== APPLY NOW MODAL ===== */}
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
                  Select Program *
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
    </>
  );
};

export default Navbar;
