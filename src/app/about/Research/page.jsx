"use client";
import React from "react";

const page = () => {
  const researchConsultancyCommittee = [
    { sr: 1, name: "Dr. Pallavi Sajanapwar", role: "Chairman", desig: "Dean: Academics and Research" },
    { sr: 2, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head" },
    { sr: 4, name: "Dr. Priyanka Darekar", role: "Member", desig: "Teaching Representative – Consultancy" },
    { sr: 5, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 6, name: "Dr. Aniruddh Thuse", role: "Member Secretary", desig: "Teaching Representative – Research" },
  ];

  const renderTable = (headers, rows) => (
    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
      <table className="min-w-full border-collapse text-center text-gray-800">
        <thead>
          <tr className="bg-secondary text-white">
            {headers.map((h, i) => (
              <th key={i} className="border px-4 py-3">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-3">{r.sr}</td>
              <td className="border px-4 py-3">{r.name}</td>
              <td className="border px-4 py-3">{r.role}</td>
              <td className="border px-4 py-3">{r.desig}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">

        {/* ✅ Research & Consultancy Committee */}
        <section className="relative">
          <div className="absolute -left-4 top-0 w-2 h-20 bg-secondary"></div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Research and Consultancy
            </h2>

            {renderTable(
              ["Sr.No", "Name of the Member", "Role", "Designation"],
              researchConsultancyCommittee
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
