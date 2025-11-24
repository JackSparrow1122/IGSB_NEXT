"use client";

import React from "react";
import Image from "next/image";

export default function StudentCommittees() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-committees/Banner.jpg"
          alt="Student Certification Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* ================================
            1. Grievance Redressal Committee
        ================================= */}
        <section
          id="student-grievance-redressal-committee"
          className="space-y-6"
        >
          <div className="text-left mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023b5e] mb-4">
              Grievance Redressal Committee - Student
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Pallavi Sajanapwar",
                "9822406437",
                "Member",
                "Teaching Representative - Senior Faculty",
              ],
              [
                "3",
                "Ms.Snehal Masurkar",
                "9561317957",
                "Member",
                "Teaching Representative - Female",
              ],
              [
                "4",
                "Shri. B. D. Udhane Deputy Registrar, Law & Grievances",
                "25601192/ 25690028",
                "Member",
                "Ombudsman by University",
              ],
              [
                "5",
                "Mr. Yogesh Gheware",
                "02114 661 568 / 9545278111",
                "Member",
                "Non-Teaching Representatives",
              ],
              [
                "6",
                "Sejal Chandak",
                "9322180511",
                "Member",
                "Student Representative - Academic Representative",
              ],
              [
                "7",
                "Vaishnavi Chavan",
                "9975557161",
                "Member",
                "Student Representative - Academic Representative",
              ],
              [
                "8",
                "Karan Chandankhed",
                "7057625895",
                "Member",
                "Student Representative - Academic Representative / Sports Representative",
              ],
              [
                "9",
                "Nidhi Sachin Nene",
                "9022523307",
                "Member",
                "Student Representative (Female) - Co-curricular Representative",
              ],
              [
                "10",
                "Mr.Mahesh Bhagat",
                "9822074890",
                "Member Secretary",
                "Teaching Representative (SC/ST/OBC)",
              ],
            ]}
          />
        </section>

        {/* ================================
            2. Anti Ragging Committee
        ================================= */}
        <section id="anti-ragging-committee" className="space-y-6">
          <div className="text-left mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023b5e] mb-4">
              Anti Ragging Committee
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Prashant Dubey",
                "9699314970",
                "Member",
                "Teaching Representative",
              ],
              [
                "3",
                "Mr.Ashish Jadhav",
                "9527225056",
                "Member",
                "Non - Teaching Representative",
              ],
              [
                "4",
                "Mr. Ganesh Phanve",
                "9503884287",
                "Member",
                "Boys Hostel Rector",
              ],
              [
                "5",
                "Ms. Sapana Dhalke",
                "9699913109",
                "Member",
                "Girls Hostel Rector",
              ],
              [
                "6",
                "Devesh Nehete",
                "9545783376",
                "Member",
                "Student Representative - Seniors-Boy",
              ],
              [
                "7",
                "Janhavi Kulkarni",
                "7021078573",
                "Member",
                "Student Representative - Seniors-Girl",
              ],
              [
                "8",
                "Sahil M",
                "9755104082",
                "Member",
                "Student Representative - Seniors-Boy",
              ],
              [
                "9",
                "Yukta Patil",
                "8626015231",
                "Member",
                "Student Representative - Seniors-Girl",
              ],
              [
                "10",
                "Mr.Swapnali Mule",
                "7020524022",
                "Member",
                "Parents Representative - Senior Batch",
              ],
              [
                "11",
                "Mr.Vijay Patil",
                "9503163139",
                "Member",
                "Parents Representative - Senior Batch",
              ],
              [
                "12",
                "Mrs. Sulbhatai Kundan Bhote",
                "8766456009",
                "Member",
                "Civil Administration Representative",
              ],
              [
                "13",
                "Mr. Samadhan Phadtare",
                "8805544106",
                "Member",
                "Police Administration Representative",
              ],
              [
                "14",
                "Mrs. Reshma Phadtare",
                "7038784875",
                "Member",
                "Local Media - Senior Officer (Business Standard Pvt. Ltd.)",
              ],
              [
                "15",
                "Ms.Smita Roy",
                "9881091409",
                "Member",
                "NGO Representative",
              ],
              [
                "16",
                "Dr.Poonam Wani",
                "9595411935",
                "Member Secretary",
                "Teaching Representative - Female",
              ],
            ]}
          />
        </section>

        {/* ================================
            3. Anti Ragging Squad
        ================================= */}
        <section id="anti-ragging-squad" className="space-y-6">
          <div className="text-left mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023b5e] mb-4">
              Anti Ragging Squad
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Mr.Jagannath Kadam",
                "97300 23413",
                "Member",
                "Non-Teaching Staff Representative",
              ],
              [
                "3",
                "Mr.Balasaheb Shinde",
                "99716 58919",
                "Member",
                "Non-Teaching Staff Representative",
              ],
              [
                "4",
                "Mr.Ganesh Phanve",
                "9503884287",
                "Member",
                "Boys Hostel Warden",
              ],
              [
                "5",
                "Ms.Sapna Dhalke",
                "9699913109",
                "Member",
                "Girls Hostel Warden",
              ],
              [
                "6",
                "Prof.Kanchan Patil",
                "7385717517",
                "Member Secretary",
                "Academic Coordinator",
              ],
            ]}
          />
        </section>

        {/* ================================
            4. Students Welfare Council
        ================================= */}
        <section id="students-welfare-council" className="space-y-6">
          <div className="text-left mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023b5e] mb-4">
              Students Welfare Council
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Pallavi Sajanapwar",
                "9822406437",
                "Member",
                "Teaching Representative - Senior Faculty Member",
              ],
              ["3", "Ms. Mrunal Salve", "-", "President", "-"],
              ["4", "Mr. Abhishek Padale", "-", "Secretary", "-"],
              ["5", "Ms. Neha Wankhade", "-", "Lady Representative", "-"],
              [
                "6",
                "Ms. Shrawani Otari",
                "-",
                "VP - Community Representative",
                "-",
              ],
              ["7", "Mr. Prafull Shinde", "-", "VP - Placement", "-"],
              ["8", "Ms. Unnati Gawali", "-", "VP - Alumni", "-"],
              ["9", "Ms. Aditi Agarwal", "-", "VP - Branding", "-"],
              ["10", "Mr. Mayur Darade", "-", "VP - Cultural", "-"],
              ["11", "Mr. Hrishikesh Nikam", "-", "VP - Sports", "-"],
              [
                "12",
                "Mr.Amol Ankush",
                "8767740257",
                "Member Secretary",
                "Teaching Representative - Sports Coordinator",
              ],
            ]}
          />
        </section>

        {/* ================================
            5. Student Counsellor
        ================================= */}
        <section id="student-counsellor" className="space-y-6">
          <div className="text-left mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023b5e] mb-4">
              Student Counsellor
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr.Shilpa Tambe",
                "92269 58888",
                "Student Counsellor",
                "Clinical Counsellor",
              ],
            ]}
          />
        </section>
      </div>
    </div>
  );
}

/* ============================================
   TABLE COMPONENT (Updated)
============================================= */
function CommitteeTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 shadow-lg transition-all hover:shadow-xl">
      <table className="min-w-full text-left text-[0.95rem] border-collapse">
        <thead className="bg-secondary text-white">
          <tr>
            {[
              "Sr.No",
              "Name of the Member",
              "Mobile Number",
              "Role",
              "Representation",
            ].map((head, idx) => (
              <th
                key={idx}
                className="px-6 py-4 font-semibold text-sm uppercase tracking-wider border border-gray-200"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="transition-colors hover:bg-gray-50 even:bg-gray-50/50"
            >
              {row.map((col, i) => (
                <td
                  key={i}
                  className="px-6 py-4 text-gray-700 border border-gray-200"
                >
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
