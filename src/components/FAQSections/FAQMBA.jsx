"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "sybtech",
    label: "MBA",
    pdf: "/Programs/IT/SE.pdf",
  },
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`,
}));

// ================== MAIN COMPONENT ==================
export default function FAQENTC() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About IGSB": [
          `Indira Global School of Business (IGSB) offers a transformative two-year MBA program designed to shape future leaders by blending academic excellence with practical business insights, while encouraging learning from real-world challenges and past experiences. This program emphasizes holistic development through a dynamic curriculum, experienced faculty, and industry-oriented training, ensuring students gain exposure to real-world business challenges, innovative problem-solving techniques, and global perspectives.`,
          `The MBA program at IGSB goes beyond traditional boundaries by fostering international collaborations with reputed global institutions, enabling students to participate in exchange programs and gain cross-cultural business acumen. Students can choose from a wide array of specializations, including Marketing, Finance, Human Resource Management, Operations, and Business Analytics, tailored to meet the demands of emerging industries.`,
          `IGSB also hosts a robust series of guest lectures and masterclasses delivered by industry leaders, visionaries, and global experts across diverse sectors. These engagements offer students direct insights into contemporary business practices, emerging trends, and innovative strategies.`,
          `Experiential learning is further elevated through thoughtfully curated industry visits, hands-on projects, and live case studies that offer invaluable insights into corporate culture and operational dynamics. Striking a balance between theoretical rigor and practical exposure, the curriculum is meticulously designed in line with the Choice-Based Credit System (CBCS) and the Grading System Outcome-Based Education Pattern aligned with the National Education Policy (NEP) 2020, ensuring a holistic and outcome-driven academic experience.`,
          `With a strong focus on leadership, entrepreneurship, ethical business practices, and global exposure, the MBA program at IGSB empowers aspiring professionals to transform their ambitions into impactful, successful careers in a competitive corporate environment.`,
        ],
      },
    },
    "MBA Programme Structure": {
      type: "accordion",
      content: {
        "Programme Overview": [
          `Masters of Business Administration (MBA) is a 2-year full-time program offered under the Choice Based Credit System (CBCS) with Outcome Based Education (OBE).`,
          `The programme consists of 4 semesters and follows an outcome-based assessment structure focused on student performance and skill application.`,
        ],

        "Outcome Based Education (OBE) & CBCS": [
          `The revised SPPU MBA curriculum is aligned with Outcome Based Education, emphasizing measurable learning outcomes.`,
          `Students earn their degree by accumulating the required number of credits prescribed by the university.`,
          `The syllabus offers flexibility through CBCS, allowing students to choose courses based on their interests, specializations, and career goals.`,
        ],

        "Types of Courses in CBCS": [
          `• Foundation Courses – For students needing fundamental knowledge such as Accounting, Economics, etc.`,
          `• Enrichment Courses – For students interested in exploring subjects beyond the core syllabus.`,
          `• Alternative Study Credit Courses – Independent study via live projects, MOOCs, research work, and more.`,
        ],

        "Specialization Options at IGSB": [
          `IGSB offers the following specializations:`,
          `• Marketing Management`,
          `• Financial Management`,
          `• Human Resource Management`,
          `• Operations & Supply Chain Management`,
        ],

        "Major + Minor Specialization Structure": [
          `Major Specialization – 9 Courses (4 Core + 5 Elective)`,
          `Minor Specialization – 4 Courses (2 Core + 2 Elective)`,
          `Major Specialization Credits: 22 (12 Core + 10 Elective)`,
          `Minor Specialization Credits: 10 (6 Core + 4 Elective)`,
          `The Major + Minor specialization structure is OPTIONAL.`,
          `Students opting for Major + Minor must choose Foundation/Enrichment/ASC courses ONLY in lieu of Generic Electives.`,
        ],

        "Specialization Guidelines & Rules": [
          `• Institutes may offer specializations based on demand, faculty strength, and industry relevance.`,
          `• A specialization will NOT run unless at least 20% of students enroll.`,
          `• Elective subjects also require a minimum of 20% enrollment.`,
          `• Students may choose any Major + any Minor (subject to institute criteria).`,
          `• Minor specialization courses are taken only in Year 2 (Sem III & IV).`,
          `• All Sem II Core + Elective subjects must belong to the SAME specialization.`,
        ],

        "Degree Award Details": [
          `• Completing 6 Core + 7 Electives in one domain earns: MBA (Specialization).`,
          `• Completing a Major + Minor combination earns: MBA (Major Specialization + Minor Specialization).`,
        ],
      },
    },
    "Fee Structure": {
      type: "accordion",
      content: {
        "MBA Fees (Batch 2025–27)": [
          `MBA 1st & 2nd Year yearly fees in ₹ for the Batch 2025-27`,
          `Final Fees Approved by Fees Regulating Authority, Govt. of Maharashtra in the meeting held on April 3, 2025.`,
          {
            table: true,
            headers: ["Category", "Tuition Fees", "Development Fees", "Total"],
            rows: [
              ["Open (Male/Female)", "₹ 140,359", "₹ 16,141", "₹ 156,500"],
              [
                "EBC / OBC / EWS / SEBC (Female)",
                "₹ 70,180",
                "₹ 16,141",
                "₹ 86,321",
              ],
              ["VJ/DT/NT", "₹ 0", "₹ 16,141", "₹ 16,141"],
              ["SBC", "₹ 0", "₹ 16,141", "₹ 16,141"],
              ["SC", "₹ 0", "₹ 16,141", "₹ 16,141"],
              ["ST", "₹ 0", "₹ 0", "₹ 0"],
            ],
          },
          `*Subject to revision by the Fees Regulating Authority (FRA).`,
          `Category-wise fees apply only if the student is eligible for respective Government Scholarships. Non-eligible students must pay full fees.`,
          `Management Quota Fee (as per FRA meeting dated 24 April 2025): ₹ 4,69,500`,
          `Education loan available under PM Vidyalaxmi scheme: https://pmvidyalaxmi.co.in`,
        ],

        "मराठी शुल्क माहिती": [
          `एमबीए २०२५–२७ बॅचसाठी शुल्क नियामक प्राधिकरण, महाराष्ट्र शासन यांनी ३ एप्रिल २०२५ रोजी मंजूर केलेले शुल्क.`,
          {
            table: true,
            headers: ["प्रवर्ग", "शैक्षणिक शुल्क", "विकास शुल्क", "एकूण"],
            rows: [
              ["खुला", "₹ १४०३५९", "₹ १६१४१", "₹ १५६५००"],
              [
                "ईबीसी / इ.मा.व / आ.दु.घ / सा.शै.मा.प्र.",
                "₹ ७०१८०",
                "₹ १६१४१",
                "₹ ८६३२१",
              ],
              ["वि.जा./भ.ज.(ब)/भ.ज.(क)/भ.ज.(ड)", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
              ["वि.मा.प्र.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
              ["अ.जा.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
              ["अ.ज.", "₹ ०", "₹ ०", "₹ ०"],
            ],
          },
          `व्यवस्थापन कोटा शुल्क: ₹ ४,६९,५००`,
          `PM Vidyalaxmi शैक्षणिक कर्ज: https://pmvidyalaxmi.co.in`,
        ],
      },
    },

    "Admission Procedure": {
      type: "notice",
      content: "Admission procedure details will be updated soon.",
    },

    "Sanctioned Intake": {
      type: "table",
      content: [
        {
          program: "MBA",
          intake: "60 Seats",
          duration: "2 Years",
          type: "Full Time",
        },
      ],
    },

    "Eligibility Criteria": {
      type: "text",
      content: `
Eligibility for admission to the Integrated MCA program requires candidates to have passed 10+2 from any recognized board with Mathematics or Statistics.

Admission is based on merit and institutional selection guidelines. No entrance exam required.`,
    },

    Faculty: {
      type: "gallery",
      content: facultyImages,
      title: "Faculty Members",
    },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList,
    },
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-4">
            {Object.entries(data.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-4 pt-2 space-y-2">
                    {items.map((item, i) => {
                      // TABLE SUPPORT
                      if (typeof item === "object" && item.table) {
                        return (
                          <div key={i} className="overflow-x-auto my-4">
                            <table className="w-full border border-gray-300 text-sm">
                              <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                  {item.headers.map((h, idx) => (
                                    <th
                                      key={idx}
                                      className="border p-2 font-semibold"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.rows.map((row, rIndex) => (
                                  <tr
                                    key={rIndex}
                                    className="border-b hover:bg-gray-50"
                                  >
                                    {row.map((cell, cIndex) => (
                                      <td key={cIndex} className="border p-2">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }

                      // PDF LINKS
                      if (typeof item === "object" && item.pdf) {
                        return (
                          <a
                            key={i}
                            href={item.pdf}
                            target="_blank"
                            className="text-secondary underline font-medium hover:text-secondary/80 block"
                          >
                            {item.label}
                          </a>
                        );
                      }

                      // NORMAL TEXT
                      return (
                        <p key={i} className="text-gray-700">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );
      case "text":
        return (
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {data.content}
          </div>
        );
      case "notice":
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "table":
        return (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 border-b font-semibold">Program</th>
                  <th className="p-3 border-b font-semibold">Intake</th>
                  <th className="p-3 border-b font-semibold">Duration</th>
                  <th className="p-3 border-b font-semibold">Type</th>
                </tr>
              </thead>

              <tbody>
                {data.content.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{row.program}</td>
                    <td className="p-3">{row.intake}</td>
                    <td className="p-3">{row.duration}</td>
                    <td className="p-3">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "syllabus":
        return (
          <div className="space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="px-4 py-2 bg-secondary text-white rounded-md"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );

      case "entcLabs":
        return (
          <div>
            <h4 className="font-semibold text-secondary text-lg mb-4">
              Department Laboratories
            </h4>

            <div className="overflow-x-auto border border-gray-300 rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="border p-3">Sr. No.</th>
                    <th className="border p-3">Lab No.</th>
                    <th className="border p-3">Lab Name</th>
                    <th className="border p-3">Total PCs</th>
                    <th className="border p-3">Configuration</th>
                    <th className="border p-3">Software Installed</th>
                  </tr>
                </thead>

                <tbody>
                  {data.content.map((lab, index) => (
                    <tr key={index} className="border-b align-top">
                      <td className="border p-3">{lab.srNo}</td>
                      <td className="border p-3">{lab.labNo}</td>
                      <td className="border p-3">{lab.labName}</td>
                      <td className="border p-3">{lab.totalPCs}</td>
                      <td className="border p-3 whitespace-pre-line">
                        {lab.configuration}
                      </td>
                      <td className="border p-3 whitespace-pre-line">
                        {lab.software}
                      </td>
                    </tr>
                  ))}

                  {/* Total PCs Row */}
                  <tr className="font-semibold bg-gray-50">
                    <td className="border p-3" colSpan={3}>
                      Total PCs
                    </td>
                    <td className="border p-3">75</td>
                    <td className="border p-3" colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of MBA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with technical excellence, research,
            and hands-on engineering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Quick Links
            </h3>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            {renderContent(sectionContent[active])}
          </div>
        </div>
      </div>
    </section>
  );
}
