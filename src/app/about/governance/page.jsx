"use client";
import Image from "next/image";

export default function Governance() {
  const boardOfGovernors = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", representation: "Chairperson IGI" },
    { sr: 2, name: "Mrs. Sarita Shankarrao Wakalkar", role: "Member", representation: "Trust Representative" },
    { sr: 3, name: "Dr. Pandit Mali", role: "Member", representation: "Trust Representative" },
    { sr: 4, name: "Mr. Shardul Gangal", role: "Member", representation: "Trust Representative" },
    { sr: 5, name: "Prof. Chetan Wakalkar", role: "Member", representation: "IGI Academic Advisor" },
    { sr: 6, name: "Western Regional Officer", role: "Member", representation: "Nominee AICTE" },
    { sr: 7, name: "Dr. D.V Jadhav", role: "Member", representation: "Nominee DTE" },
    { sr: 8, name: "Ms. Rajeshree Ghavte", role: "Member", representation: "Nominee State Govt./UT (Ex-Officio)" },
    { sr: 9, name: "Mr. Shash Bhat", role: "Member", representation: "Industry Expert" },
    { sr: 10, name: "Awaited", role: "Member", representation: "SPPU Academic Expert" },
    { sr: 11, name: "Dr. Pallavi Sajnawar", role: "Member", representation: "Nominee Teaching Representative (Professor & Dean - Academics and Research)" },
    { sr: 12, name: "Dr. Aatish Zagade", role: "Member", representation: "Nominee Teaching Representative (Assoc. Professor & Dy. Director)" },
    { sr: 13, name: "Dr. Anuradha Phadnis", role: "Member", representation: "Nominee Teaching Representative (Assoc. Professor & IQAC Head)" },
    { sr: 14, name: "Dr. Priyanka Darekar", role: "Member", representation: "Nominee Teaching Representative - Asst. Prof" },
    { sr: 15, name: "Dr. Virendra Tatake", role: "Director", representation: "Member Secretary" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Governance at ICEM"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Governance at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Container ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">

        {/* ===== Board of Governors Table ===== */}
        <section className="relative">
        

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Board of Governors
            </h2>

            <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
              <table className="min-w-full border-collapse text-center text-gray-800">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="border px-4 py-3 w-20">Sr.No</th>
                    <th className="border px-4 py-3 w-96">Name of the Member</th>
                    <th className="border px-4 py-3 w-48">Role</th>
                    <th className="border px-4 py-3 w-[400px]">Representation</th>
                  </tr>
                </thead>

                <tbody>
                  {boardOfGovernors.map((row) => (
                    <tr key={row.sr} className="odd:bg-white even:bg-gray-50">
                      <td className="border px-4 py-3">{row.sr}</td>
                      <td className="border px-4 py-3">{row.name}</td>
                      <td className="border px-4 py-3">{row.role}</td>
                      <td className="border px-4 py-3">{row.representation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}