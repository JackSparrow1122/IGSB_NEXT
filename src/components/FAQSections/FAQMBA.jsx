"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mba",
    label: "MBA",
    pdf: "/IGSB/Programmes/MBA_NEP.pdf",
  },
];

const araList = [
  {
    id: "ara",
    label: "ARA",
    pdf: "/IGSB/Programmes/ARA.pdf",
  },
];
const examList = [
  {
    id: "academic-calendar",
    label: "Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/AcademicCalendar.pdf",
  },
  {
    id: "sppu-academic-calendar",
    label: "SPPU Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/SPPUAcademicCalendar.pdf",
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
    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList,
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

    Admission: {
      type: "table",
      content: [
        {
          title: "Approved Intake for A.Y. 2025-26",
          headers: [
            "Choice Code",
            "Choice Code TFWS",
            "Course Name",
            "Course Status",
            "Intake 2025-26",
            "Intake (AICTE)",
            "Gov. GR",
            "University Affiliated",
            "Final Intake for Admission 2025-26",
            "Intake Status",
          ],
          rows: [
            [
              "697610110",
              "697610111T",
              "M. B. A.",
              "Regular",
              "180",
              "180",
              "180",
              "180",
              "180",
              "Approved",
            ],
            ["Total", "", "", "", "180", "180", "180", "180", "180", ""],
          ],
        },
      ],
    },

    "Eligibility Criteria": {
      type: "accordion",
      content: {
        Criteria: [
          {
            table: true,
            headers: [
              "Maharashtra State Candidates",
              "Jammu & Kashmir Migrant Candidates",
              "All India Candidates (AI)",
            ],
            rows: [
              [
                `(i) The candidate should be an Indian National;

(ii) Passed minimum three-year duration Bachelor’s Degree awarded by any of the Universities recognized by UGC or AIU in any discipline with at least 50% marks in aggregate (45% for backward class categories and PwD of Maharashtra State only);

(iii) Obtained non-zero score in MAH-MBA/MMS-CET.`,
                `**Obtained non-zero positive score in any one of the following examinations:  
MAH-MBA/MMS-CET, CAT, CMAT**`,
                `The candidate should be an Indian National;

Passed minimum three-year duration Bachelor’s Degree awarded by any of the Universities recognized by UGC/AIU with at least 50% marks (45% for backward class categories & PwD of Maharashtra State);

OR

Appeared for final year of any Bachelor's Degree.

Must obtain a non-zero positive score in MAH-MBA/MMS-CET, CAT, CMAT.`,
              ],
            ],
          },

          // NOTES
          `Note:
• "Aggregate marks" means the grand total of marks for subjects considered for class declaration by the respective University.  
• If grades/CGPA are awarded instead of marks, conversion will follow the procedure certified by the respective University/Institution.  
• Percentage shall be calculated by rounding off to two decimal places.  
• Candidates belonging to SC, VJ/DT (NT-A), NT-B, NT-C, NT-D, OBC, SBC, SEBC categories must submit “Caste Validity Certificate” issued by Social Welfare Scrutiny Committee.  
• ST candidates must submit “Tribe Validity Certificate” issued by the Tribal Department Scrutiny Committee.`,

          // DOCUMENTS REQUIRED
          {
            title: "Documents Required",
            list: [
              "MAH CET 2024 Scorecard",
              "FC Acknowledgement (Document Verification)",
              "10th Marksheet",
              "12th Marksheet",
              "Undergraduate Marksheet & Provisional Certificate",
              "Transfer Certificate",
              "Migration Certificate (if applicable)",
              "Educational GAP Certificate (if applicable, on ₹100 stamp paper)",
              "Nationality Certificate (Passport or Certificate from District Magistrate)",
              "Maharashtra Domicile or Birth Certificate",
              "Caste Certificate (if applicable)",
              "Caste Validity Certificate (if applicable)",
              "EWS / SEBC Certificate (if applicable)",
              "Income Certificate (if applicable)",
              "Non-Creamy Layer Certificate (if applicable)",
              "Aadhar Card",
              "(Documents applicable for all candidates)",
            ],
          },

          {
            link: true,
            label: "Click Here: Documents Required",
            href: "/IGSB/Programmes/Admission-Documents-Required.pdf",
          },
        ],
      },
    },

    Faculty: {
      type: "gallery",
      content: facultyImages,
      title: "Faculty Members",
    },
    Exam: {
      type: "syllabus",
      content: examList,
    },

    ARA: {
      type: "syllabus",
      content: araList,
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
              <div key={title} className="border border-gray-300 rounded-lg">
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
                                      className="border border-gray-300 p-2 font-semibold"
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
                                      <td
                                        key={cIndex}
                                        className="border border-gray-300 p-2"
                                      >
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
                      // LIST SUPPORT
                      if (typeof item === "object" && item.list) {
                        return (
                          <ul
                            key={i}
                            className="list-disc pl-6 space-y-1 text-gray-700"
                          >
                            {item.list.map((l, li) => (
                              <li key={li}>{l}</li>
                            ))}
                          </ul>
                        );
                      }

                      // LINK SUPPORT
                      if (typeof item === "object" && item.link) {
                        return (
                          <a
                            key={i}
                            href={item.href}
                            className="text-secondary underline font-medium hover:text-secondary/80 block"
                          >
                            {item.label}
                          </a>
                        );
                      }

                      // NORMAL TEXT
                      return (
                        <p
                          key={i}
                          className="text-gray-700 whitespace-pre-line"
                        >
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
          <div className="space-y-6">
            {data.content.map((tbl, idx) => (
              <div key={idx}>
                {tbl.title && (
                  <h4 className="font-semibold text-secondary text-lg mb-3">
                    {tbl.title}
                  </h4>
                )}

                <div className="overflow-x-auto border border-gray-300 rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        {tbl.headers.map((h, hi) => (
                          <th key={hi} className="p-3 border-b font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {tbl.rows.map((row, ri) => (
                        <tr key={ri} className="border-b hover:bg-gray-50">
                          {row.map((cell, ci) => (
                            <td key={ci} className="p-3 border-b">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "syllabus":
        return (
          <div className="space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
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
                    <th className="border border-gray-300 p-3">Sr. No.</th>
                    <th className="border border-gray-300 p-3">Lab No.</th>
                    <th className="border border-gray-300 p-3">Lab Name</th>
                    <th className="border border-gray-300 p-3">Total PCs</th>
                    <th className="border border-gray-300 p-3">
                      Configuration
                    </th>
                    <th className="border border-gray-300 p-3">
                      Software Installed
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.content.map((lab, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 align-top"
                    >
                      <td className="border border-gray-300 p-3">{lab.srNo}</td>
                      <td className="border border-gray-300 p-3">
                        {lab.labNo}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {lab.labName}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {lab.totalPCs}
                      </td>
                      <td className="border border-gray-300 p-3 whitespace-pre-line">
                        {lab.configuration}
                      </td>
                      <td className="border border-gray-300 p-3 whitespace-pre-line">
                        {lab.software}
                      </td>
                    </tr>
                  ))}

                  {/* Total PCs Row */}
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-300 p-3" colSpan={3}>
                      Total PCs
                    </td>
                    <td className="border border-gray-300 p-3">75</td>
                    <td className="border border-gray-300 p-3" colSpan={2}></td>
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
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-300 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg text-center">
              MBA Overview
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
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-300">
            {/* <div className="mb-6 pb-4 border-b border-gray-300">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div> */}

            {renderContent(sectionContent[active])}
          </div>
        </div>
      </div>
    </section>
  );
}
