"use client";
import Image from "next/image";

export default function Cell() {
  /* ========================================================
      ✅ ALL CELL DATA ARRAYS
  ======================================================== */

  const industryInstitutionalCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy.Director & Teaching Representative" },
    { sr: 3, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Mr. Jayant Joshi", role: "Member", rep: "Placement Coordinator" },
    { sr: 5, name: "Mr. Dinesh Khodke", role: "Member", rep: "Non-Teaching Representative" },
    { sr: 6, name: "Aakash Deshmukh", role: "Member", rep: "Student Representative – Girl" },
    { sr: 7, name: "Aabha Karale", role: "Member", rep: "Student Representative – Boy" },
    { sr: 8, name: "Mr. Hemant Apte", role: "Member", rep: "Industry Representative" },
    { sr: 9, name: "Dr. Priyanka Darekar", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const iprCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Pro. Amol Ankush", role: "Member", rep: "Teaching Representative" },
    { sr: 5, name: "Mr. Santosh Dagade", role: "Member", rep: "Librarian" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const equalOpportunityCell = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Mr. Amol Ankush", mobile: "8767740257", role: "Member", rep: "Student Welfare Council Officer (OBC Category)" },
    { sr: 4, name: "Dr. Anuradha Phadnis", mobile: "9850728206", role: "Member", rep: "Teaching Representative–Female" },
    { sr: 5, name: "Mr. Dinesh Khodke", mobile: "9823245799", role: "Member", rep: "Non–Teaching Representative (OBC Category)" },
    { sr: 6, name: "Dr. Shilpa Tambe", mobile: "9226958888", role: "Member", rep: "Counsellor / Social / Subject Expert" },
    { sr: 7, name: "Ms. Priyanka Dattu Dhumase", mobile: "7085157091", role: "Member", rep: "Student Representative (ST Category)" },
    { sr: 8, name: "Mr. Bhavesh Deepak Nunse", mobile: "7276594726", role: "Member", rep: "Student Representative (SC Category)" },
    { sr: 9, name: "M Sai Sahil", mobile: "9755104082", role: "Member", rep: "Student Representative (Open Category)" },
    { sr: 10, name: "Ms. Yukta Patil", mobile: "8626015231", role: "Member", rep: "Student Representative (OBC Category)" },
    { sr: 11, name: "Chandrashekhar Sanjay Rathod", mobile: "8459516498", role: "Member", rep: "Student Representative (DT/VJ/Minority Category)" },
    { sr: 12, name: "Mr. Vijay Patil", mobile: "9503163139", role: "Member", rep: "Parent Representatives" },
    { sr: 13, name: "M S Jagannath", mobile: "9399478784", role: "Member", rep: "Parent Representatives" },
    { sr: 14, name: "Prof. Kanchan Patil", mobile: "7385717517", role: "Member Secretary", rep: "Teaching Representative (OBC)" },
  ];

  const divyangCell = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Dr. Aatish Zagade", mobile: "9823939483", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Mr. Yogesh Gheware", mobile: "9545278111", role: "Member", rep: "Non–Teaching Representative" },
    { sr: 5, name: "Mr. Santosh Dagade", mobile: "9763853241", role: "Member", rep: "Expert Advisor 1" },
    { sr: 6, name: "Mr. Shivkumar", mobile: "9730419066", role: "Member", rep: "Expert Advisor 2" },
    { sr: 7, name: "Ms. Shravani Otari", mobile: "9307247732", role: "Member", rep: "Student Representative 1" },
    { sr: 8, name: "Mr. Hrishikesh Nikam", mobile: "7775957990", role: "Member", rep: "Student Representative 2" },
    { sr: 9, name: "Mr. Vijay Otari", mobile: "7385117113", role: "Member", rep: "Parent Representative 1" },
    { sr: 10, name: "Mr. Anil Nikam", mobile: "8655492610", role: "Member", rep: "Parent Representative 2" },
    { sr: 11, name: "Dr. Ashish Vyas", mobile: "9422366894", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const internshipCell = [
    { sr: 1, name: "Dr. Aatish Zagade", mobile: "9823939483", role: "Dy. Director", rep: "Nodal Officer" },
    { sr: 2, name: "Prof. Jayant Joshi", mobile: "9423226420", role: "Member", rep: "Assistant Coordinator" },
    { sr: 3, name: "Piyush Dilip Pavase", mobile: "7620904434", role: "Member", rep: "Management Student Coordinator" },
    { sr: 4, name: "Mr. Divyanshu Nandeshwar", mobile: "", role: "Member", rep: "Management Student Coordinator" },
    { sr: 5, name: "Ms. Snehal Masurkar", mobile: "9561317957", role: "Member Secretary", rep: "Management Faculty" },
  ];

  const placementCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy. Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head & LF HR" },
    { sr: 5, name: "Dr. Poonam Wani", role: "Member", rep: "LF Finance" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", rep: "LF Mktg" },
    { sr: 7, name: "Atharva Mule", role: "Member", rep: "Student Representative–2nd Year" },
    { sr: 8, name: "Yukta Patil", role: "Member", rep: "Student Representative–1st Year" },
    { sr: 9, name: "Prof. Jayant Joshi", role: "Member Secretary", rep: "Teaching Representative – Dy. Director Placements Chanakya Campus" },
  ];

  const brandingCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", rep: "Teaching Representative – IQAC Head" },
    { sr: 4, name: "Sneha Marodkar", role: "Member", rep: "Student Representative – Team Coordinator" },
    { sr: 5, name: "Sakshi Purohit", role: "Member", rep: "Student Representative – Mktg & Creative Coordinator" },
    { sr: 6, name: "Aditi Agarwal", role: "Member", rep: "Student Representative – Mktg & Creative Coordinator" },
    { sr: 7, name: "Harshwardhan Maske", role: "Member", rep: "Student Representative – Photographer/ Cinematographer" },
    { sr: 8, name: "Aryan Jadhav", role: "Member", rep: "Student Representative – Content Writer" },
    { sr: 9, name: "Rohit Lags", role: "Member", rep: "Student Representative – Content Planning" },
    { sr: 10, name: "Mr. Solomon Gaikwad", role: "Member Secretary", rep: "Branding Officer" },
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

      {/* ===== Main Container ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">

        {/* ✅ Industry Institutional Cell */}
        <section className="relative">
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Industry Institutional Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], industryInstitutionalCell)}
          </div>
        </section>

        {/* ✅ IPR Cell */}
        <section className="relative">
    
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Intellectual Property Right Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], iprCell)}
          </div>
        </section>

        {/* ✅ Equal Opportunity Committee */}
        <section className="relative">
   
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Caste Based Discrimination Committee (Equal Opportunity Cell)</h2>
            {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], equalOpportunityCell)}
          </div>
        </section>

        {/* ✅ Divyang Cell */}
        <section className="relative">
        
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Divyang Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], divyangCell)}
          </div>
        </section>

        {/* ✅ Internship Cell */}
        <section className="relative">
        
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Internship Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], internshipCell)}
          </div>
        </section>

        {/* ✅ Placement Cell */}
        <section className="relative">
      
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Placement Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], placementCell)}
          </div>
        </section>

        {/* ✅ Branding & Creative Cell */}
        <section className="relative">

          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-8">Branding and Creative Cell</h2>
            {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], brandingCell)}
          </div>
        </section>

      </div>
    </div>
  );
}
