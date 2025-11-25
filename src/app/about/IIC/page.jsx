"use client";
import React from "react";
import Image from "next/image";

export default function IICPage() {
  const iicCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative - Consultancy" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Vice President", rep: "Teaching Representative" },
    { sr: 4, name: "Dr. Aniruddh Thuse", role: "Innovation activity coordinator", rep: "Teaching Representative" },
    { sr: 5, name: "Dr. Anuradha Phadnis", role: "Startup activity coordinator", rep: "Teaching Representative" },
    { sr: 6, name: "Ms. Snehal Masurkar", role: "Internship coordinator", rep: "Teaching Representative" },
    { sr: 7, name: "Dr. Prashant Dubey", role: "IPR activity coordinator", rep: "Teaching Representative" },
    { sr: 8, name: "Mr. Solomon Gaikwad", role: "Social media coordinator", rep: "Non-Teaching Representative" },
    { sr: 9, name: "Mr. Jaganath Kadam", role: "ARIIA coordinator", rep: "Non-Teaching Representative" },
    { sr: 10, name: "Mr. Yogesh Gheware", role: "NIRF coordinator", rep: "Non-Teaching Representative" },
    { sr: 11, name: "Mr. Santosh Dagade", role: "Member", rep: "Librarian" },
    { sr: 12, name: "Ms. Saurav Nilpatrewar", role: "Member", rep: "Student Representation" },
    { sr: 13, name: "Ms. Akshata Mali", role: "Member", rep: "Student Representation" },
    { sr: 14, name: "Mr. Amol Ankush", role: "Convenor", rep: "Teaching Representative" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">

      {/* ✅ PAGE 1 — IIC COMMITTEE TABLE */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-12">
        <h1 className="text-4xl font-bold text-secondary">
          Institutions Innovation Council (IIC)
        </h1>

        <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
          <table className="min-w-full text-center border-collapse">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="border px-4 py-3 w-20">Sr.No</th>
                <th className="border px-4 py-3 w-96">Name of the Member</th>
                <th className="border px-4 py-3 w-60">Role</th>
                <th className="border px-4 py-3 w-[350px]">Representation</th>
              </tr>
            </thead>

            <tbody>
              {iicCommittee.map((row) => (
                <tr key={row.sr} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-4 py-3">{row.sr}</td>
                  <td className="border px-4 py-3">{row.name}</td>
                  <td className="border px-4 py-3">{row.role}</td>
                  <td className="border px-4 py-3">{row.rep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ PAGE 2 — TEXT + TWO IMAGES */}
      <div className="max-w-7xl mx-auto py-20 px-6 space-y-10">
        <p className="text-lg leading-relaxed text-gray-700">
          The online (IPR) lecture series for MBA students offers a practical and comprehensive
          understanding of intellectual property rights, covering patents, trademarks, copyrights,
          and trade secrets. Through engaging presentations and real-world examples, students gain
          valuable skills for protecting and leveraging intellectual assets in today’s business
          landscape. The online format enhances accessibility and flexibility, ensuring students
          can engage with the material at their own pace. Overall, the series equips MBA students
          with essential knowledge and skills for navigating the complexities of modern business
          environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow-md">
            <Image src="/ipr1.jpg" alt="IPR Session 1" fill className="object-cover" />
          </div>

          <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow-md">
            <Image src="/ipr2.jpg" alt="IPR Session 2" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* ✅ NEW SECTION — FULL-WIDTH CERTIFICATE IMAGE */}
      <div className="w-full bg-gray-50 py-20 px-4">
        <h2 className="text-3xl font-bold text-secondary text-center mb-10">
          Certificate of Participation
        </h2>

        <div className="max-w-6xl mx-auto relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/certificate.jpg"  // ✅ Replace with actual certificate image
            alt="IIC Certificate"
            width={2000}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  );
}