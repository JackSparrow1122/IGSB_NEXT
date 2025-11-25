"use client";
import Image from "next/image";

export default function Committee() {
  /* ========================================================
      ✅ ALL COMMITTEE DATA ARRAYS
  ======================================================== */

  const boardOfGovernors = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", rep: "Chairperson IGI" },
    { sr: 2, name: "Mrs. Sarita Shankarrao Wakalkar", role: "Member", rep: "Trust Representative" },
    { sr: 3, name: "Dr. Pandit Mali", role: "Member", rep: "Trust Representative" },
    { sr: 4, name: "Mr. Shardul Gangal", role: "Member", rep: "Trust Representative" },
    { sr: 5, name: "Prof. Chetan Wakalkar", role: "Member", rep: "IGI Academic Advisor" },
    { sr: 6, name: "Western Regional Officer", role: "Member", rep: "Nominee AICTE" },
    { sr: 7, name: "Dr. D.V Jadhav", role: "Member", rep: "Nominee DTE" },
    { sr: 8, name: "Ms. Rajeshree Ghavte", role: "Member", rep: "Nominee State Govt./UT (Ex-Officio)" },
    { sr: 9, name: "Mr. Shash Bhat", role: "Member", rep: "Industry Expert" },
    { sr: 10, name: "Awaited", role: "Member", rep: "SPPU Academic Expert" },
    { sr: 11, name: "Dr. Pallavi Sajnawar", role: "Member", rep: "Nominee Teaching Representative (Dean Academics & Research)" },
    { sr: 12, name: "Dr. Aatish Zagade", role: "Member", rep: "Nominee Teaching Representative (Assoc. Professor & Dy. Director)" },
    { sr: 13, name: "Dr. Anuradha Phadnis", role: "Member", rep: "Nominee Teaching Representative (Assoc. Professor & IQAC Head)" },
    { sr: 14, name: "Dr. Priyanka Darekar", role: "Member", rep: "Nominee Teaching Representative – Asst. Prof" },
    { sr: 15, name: "Dr. Virendra Tatake", role: "Director", rep: "Member Secretary" },
  ];

  const collegeDevelopmentCommittee = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", rep: "Chairperson IGI" },
    { sr: 2, name: "Mr. Shardul Gangal", role: "Member", rep: "Trust Nominee" },
    { sr: 3, name: "Prof. Chetan Wakalkar", role: "Member", rep: "IGI Academic Advisor" },
    { sr: 4, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Women Teacher Representative (Dean Academics & Research)" },
    { sr: 5, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy. Director" },
    { sr: 6, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head & LF-HR" },
    { sr: 7, name: "Dr. Poonam Wani", role: "Member", rep: "Teaching Representatives, LF-Finance" },
    { sr: 8, name: "Dr. Parshant Dubey", role: "Member", rep: "Teaching Representatives, LF-Marketing" },
    { sr: 9, name: "Mr. Mahesh Bhagat", role: "Member", rep: "Teaching Representatives, CEO" },
    { sr: 10, name: "Mr. Jayant Joshi", role: "Member", rep: "Nominee Teaching & Placement Cell" },
    { sr: 11, name: "Dr. Priyanka Darekar", role: "Member", rep: "Teaching Representatives" },
    { sr: 12, name: "Dr. Supriya Patil", role: "Member", rep: "Local Member – HOD PUMBA SPPU" },
    { sr: 13, name: "Mr. Paresh Gund", role: "Member", rep: "Local Member – Industry Representative (Alumni)" },
    { sr: 14, name: "Mr. Pratik Puppetirwar", role: "Member", rep: "Local Member – Research Representative" },
    { sr: 15, name: "Ms. Smita Shetty", role: "Member", rep: "Local Member – Social Service Representative" },
    { sr: 16, name: "Mr. Yogesh Gheware", role: "Member", rep: "Nominee Non-Teaching Representative" },
    { sr: 17, name: "Mr. Atharva Mulay", role: "Member", rep: "Student Representation" },
    { sr: 18, name: "Dr. Virendra Tatake", role: "Member Secretary", rep: "Director" },
  ];

  const grievanceCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Prof. Kanchan Patil", mobile: "7385717517", role: "Member", rep: "Teaching Representative – Female" },
    { sr: 3, name: "Shri. B. D. Udhane", mobile: "25601192 / 25690028", role: "Member", rep: "Ombudsman by University" },
    { sr: 4, name: "Mr. Yogesh Gheware", mobile: "02114 661 568 / 9545278111", role: "Member", rep: "Non-Teaching Representatives" },
    { sr: 5, name: "Mr. Santosh Dagade", mobile: "9763853241", role: "Member", rep: "Librarian" },
    { sr: 6, name: "Dr. Priyanka Darekar", mobile: "9890067178", role: "Member Secretary", rep: "Senior Faculty" },
  ];

  const internalComplaintsCommittee = [
    { sr: 1, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Presiding Officer (Female)", rep: "Senior Faculty (Professor/Asso. Professor)" },
    { sr: 2, name: "Ms. Snehal Masurkar", mobile: "9561317957", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Ms. Pushpa Modi", mobile: "7038669091", role: "Member", rep: "Non-Teaching Staff Representative" },
    { sr: 4, name: "Mr. Dinesh Khodke", mobile: "9823245799", role: "Member", rep: "Non-Teaching Staff Representative" },
    { sr: 5, name: "Adv. Mitali Savlekar", mobile: "9890826444", role: "Member", rep: "NGO Representative" },
    { sr: 6, name: "Ms. Riya Sharma", mobile: "7879011138", role: "Member", rep: "Student Representative – Girl" },
    { sr: 7, name: "Ms. Varsha Mohite", mobile: "7350089103", role: "Member", rep: "Student Representative – Girl" },
    { sr: 8, name: "Mr. Deepak Javalgekar", mobile: "9370499040", role: "Member", rep: "Student Representative – Boy" },
    { sr: 9, name: "Ms. Girija Shirurkar", mobile: "9823440772", role: "Member Secretary", rep: "Teaching Representative – Female" },
  ];

  const academicAdvisoryCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head and LF-HR" },
    { sr: 4, name: "Dr. Poonam Wani", role: "Member", desig: "Teaching Representatives, LF-Finance" },
    { sr: 5, name: "Mr. Mahesh Bhagat", role: "Member", desig: "Teaching Representatives, LF-OSCM" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", desig: "Teaching Representatives, LF-Marketing" },
    { sr: 7, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 8, name: "Mr. Dinesh Khodke", role: "Member", desig: "ICT Cell" },
    { sr: 9, name: "-", role: "Member", desig: "Industry Representative" },
    { sr: 10, name: "Mr. Prashant Katrabad", role: "Member", desig: "Alumni Representative" },
    { sr: 11, name: "Mr. Jayant Joshi", role: "Member", desig: "Placement Representative" },
    { sr: 12, name: "Mr. Shashwat Doshetti", role: "Member", desig: "Mentoring Representative" },
    { sr: 13, name: "Prof. Kanchan Patil", role: "Member", desig: "Academic Coordinator" },
    { sr: 14, name: "Dr. Aatish Zagade", role: "Member Secretary", desig: "Dy. Director" },
  ];

  const examinationCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director / Center Head" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research / IS" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director / ISS" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head / AISS" },
    { sr: 5, name: "Ms. Snehal Masurkar", role: "Member", desig: "SIP Co-ordinator / External Viva Voce" },
    { sr: 6, name: "Prof. Kanchan Patil", role: "Member", desig: "Academic Coordinator / Custodian" },
    { sr: 7, name: "Mr. Santosh Dagade", role: "Member", desig: "Non-Teaching Representative – Stationery Incharge" },
    { sr: 8, name: "Mr. Nilesh Yedre", role: "Member", desig: "Non-Teaching Representative – Accountant" },
    { sr: 9, name: "Mr. Sameer Jadhav", role: "Member", desig: "Support Staff" },
    { sr: 10, name: "Mr. Mahesh Bhagat", role: "Member Secretary", desig: "CEO" },
  ];

  const mentoringCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Deputy Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head" },
    { sr: 5, name: "Mr. Shrinivas Pande", role: "Member", rep: "Student Representative – Male" },
    { sr: 6, name: "Ms. Anushka Edake", role: "Member", rep: "Student Representative – Female" },
    { sr: 7, name: "Mr. Shashwat Deoshetti", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const libraryCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director & Teaching Representative" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head & LF-HR" },
    { sr: 5, name: "Dr. Poonam Wani", role: "Member", desig: "LF Finance" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", desig: "LF Marketing" },
    { sr: 7, name: "Prof. Mahesh Bhagat", role: "Member", desig: "LF OSCM" },
    { sr: 8, name: "Mr. Jaganath Kadam", role: "Member", desig: "Non-Teaching Representative" },
    { sr: 9, name: "Saurabhkumar Kadam", role: "Member", desig: "Student Representative II Year" },
    { sr: 10, name: "Vaishnavi Sawkar", role: "Member", desig: "Student Representative II Year" },
    { sr: 11, name: "Mr. Santosh Dagade", role: "Member Secretary", desig: "Librarian and Secretary" },
  ];

  const ictCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Neha Choudhary", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Ms. Pushpa Modi", role: "Member", rep: "Non-Teaching Representative" },
    { sr: 4, name: "Mr. Rohan Shinde", role: "Member", rep: "Asst. IT" },
    { sr: 5, name: "Dakshayani Gaikwad", role: "Member", rep: "Student Representative – II Year" },
    { sr: 6, name: "Atharva Kumbhar", role: "Member", rep: "Student Representative – I Year" },
    { sr: 7, name: "Mr. Dinesh Khodke", role: "Member Secretary", rep: "IT Head" },
  ];

  const adminCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Teaching Representative & Dy. Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "Teaching Representative – IQAC Head" },
    { sr: 5, name: "Mr. Manish Patel", role: "Member", desig: "HR & Admin Incharge" },
    { sr: 6, name: "Mr. Jaganath Kadam", role: "Member", desig: "Admin: Senior Clerk" },
    { sr: 7, name: "Mr. Balasaheb Shinde", role: "Member", desig: "Admin Officer" },
    { sr: 8, name: "Mr. Nilesh Yedre", role: "Member", desig: "Accountant" },
    { sr: 9, name: "Mr. Dinesh Khodke", role: "Member", desig: "IT Head" },
    { sr: 10, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 11, name: "Mr. Yogesh Gheware", role: "Member Secretary", desig: "Office Superintendent" },
  ];

  const hostelCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Mr. Amol Ankush", role: "Member", rep: "Teaching Representative – Students Welfare Officer" },
    { sr: 3, name: "Dr. Poonam Wani", role: "Member", rep: "Teaching Representative – Anti Ragging Committee" },
    { sr: 4, name: "Ms. Kanchan Patil", role: "Member", rep: "Teaching Representative – Anti Ragging Squad" },
    { sr: 5, name: "Mr. Balasaheb Shinde", role: "Member", rep: "Non-Teaching Representative – Male" },
    { sr: 6, name: "Ms. Pushpa Modi", role: "Member", rep: "Non-Teaching Representative – Female" },
    { sr: 7, name: "Ms. Snehal Masurkar", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  /* ========================================================
      ✅ REUSABLE TABLE RENDER FUNCTION
  ======================================================== */
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
              {Object.values(r).map((val, j) => (
                <td key={j} className="border px-4 py-3">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /* ========================================================
      ✅ UI STARTS HERE
  ======================================================== */
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

      {/* ===== Main Content Container ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">

        {/* ✅ Render ALL COMMITTEES sequentially */}

  

        <section className="relative">

          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">College Development Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], collegeDevelopmentCommittee)}
          </div>
        </section>

        <section className="relative">
      
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Grievance Redressal Committee - Staff</h2>
            {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], grievanceCommittee)}
          </div>
        </section>

        <section className="relative">
       
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Internal Complaints Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], internalComplaintsCommittee)}
          </div>
        </section>

        <section className="relative">
   
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Academic Advisory Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], academicAdvisoryCommittee)}
          </div>
        </section>

        <section className="relative">
       
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Examination Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], examinationCommittee)}
          </div>
        </section>

        <section className="relative">
         
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Mentoring Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], mentoringCommittee)}
          </div>
        </section>

        <section className="relative">

          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Library Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], libraryCommittee)}
          </div>
        </section>

        <section className="relative">
    
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">ICT Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], ictCommittee)}
          </div>
        </section>

        <section className="relative">
    
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Administration, Accounts & Maintenance Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], adminCommittee)}
          </div>
        </section>

        <section className="relative">
     
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Hostel Committee</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], hostelCommittee)}
          </div>
        </section>

      </div>
    </div>
  );
}
