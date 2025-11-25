"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function Research() {
  const [activeTab, setActiveTab] = useState("researchCentre");
  const [showMoreAchievements, setShowMoreAchievements] = useState(false);

  return (
    <>
      <Head>
        <title>IGSB Research</title>
        <meta
          name="description"
          content="IGSB Research, MDP, FDP, Conferences, Publications, Resource Person Information."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ===========================
              🔷 PAGE HEADER
          ============================ */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              IGSB Research & Development Centre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore research initiatives, publications, academic development
              programmes, and scholarly contributions of IGSB.
            </p>
          </div>

          {/* ===========================
              🔷 TABS
          ============================ */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "researchCentre", label: "IGSB Research Centre" },
              { id: "mdp", label: "MDP" },
              { id: "fdp", label: "FDP" },
              { id: "research", label: "Research" },
              { id: "conference", label: "Conference" },
              { id: "publications", label: "Publications" },
              { id: "resourcePerson", label: "Resource Person" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-secondary text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ===========================
              🔷 TAB CONTENT
          ============================ */}
          <div>
            {/* ===================== RESEARCH CENTRE ===================== */}
            {activeTab === "researchCentre" && (
  <div className="space-y-20">

    {/* ========================= ABOUT SECTION ========================= */}
    <section className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-secondary text-center">
        About IGSB Research Centre
      </h2>

      {/* FULL WIDTH TEXT */}
      <div className="space-y-4 text-justify text-gray-700">
        <p>
          Indira Global School of Business (IGSB) is recognized by AICTE and
          UGC, and is affiliated with Savitribai Phule Pune University (SPPU).
          It was established with a clear vision to develop globally-oriented
          researchers capable of driving sustainable growth in the evolving
          international business landscape. Over the years, IGSB has emerged as
          a premier B-School in Pune, offering MBA programs. From the academic
          year 2025–26, IGSB also offers Doctoral Programs in Management.
        </p>

        <p>
          The IGSB Research Center (PGRC) is a recognized Ph.D. Research Center,
          affiliated with SPPU, and is dedicated to fostering advanced research
          in the field of management. The Doctoral Programme in Management plays
          a pivotal role in nurturing future scholars, academicians, and industry
          researchers by encouraging rigorous inquiry and innovation across
          various management domains.
        </p>

        <p>
          The aim of the IGSB Research Center is to cultivate a vibrant research
          ecosystem that promotes scholarly inquiry, critical thinking, and
          innovation in management. The Center is committed to contributing to
          the advancement of knowledge by supporting high-quality doctoral
          research, encouraging interdisciplinary collaboration, and addressing
          contemporary business and societal challenges through evidence-based
          insights.
        </p>

        <p>
          The Center offers a Doctoral Programme with specializations in:
        </p>

        <ul className="list-disc ml-6">
          <li>Finance and Accounting</li>
          <li>Human Resource Management</li>
          <li>Marketing</li>
          <li>General Management</li>
          <li>
            Organizational Behaviour, Operations & Decision Sciences
          </li>
          <li>
            Public Systems, Strategy, Innovation and Management in Education
          </li>
        </ul>

        <p>We strongly encourage multidisciplinary research.</p>
      </div>

      {/* IMAGE FULL WIDTH */}
      <div className="w-full rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/IGSBRC/RCBanner.png"
          alt="IGSB Research Centre"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>

    {/* ========================= ADMISSION SECTION ========================= */}
    <section className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-secondary text-center">
        Admission Details
      </h2>

      <p className="text-gray-700 text-justify">
        Admissions to the program are conducted strictly as per SPPU norms and
        guidelines, with vacancy details displayed transparently as per
        university notifications before each admission round.
      </p>


      {/* 🔵 SPPU CIRCULARS */}
      <p className="text-gray-700 text-justify">
        <strong>SPPU Circulars:</strong> The Research Center provides
        comprehensive and up-to-date information through official SPPU
        circulars related to Ph.D. programs.
      </p>
    </section>

    {/* ========================= GUIDE SECTION ========================= */}
    <section className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-secondary text-center">
        PhD Guides
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {[
    ["Dr. Virendra Tatake", "Financial Management", "/IGSB/Research/IGSBRC/PHD1.jpg"],
    ["Dr. Pallavi Sajanapwar", "Marketing Management", "/IGSB/Research/IGSBRC/PHD2.png"],
    ["Dr. Aatish Zagade", "General Management", "/IGSB/Research/IGSBRC/PHD3.jpg"],
    ["Dr. Priyanka Darekar", "Human Resource Management", "/IGSB/Research/IGSBRC/PHD4.png"],
    ["Dr. Ashish Vyas", "Human Resource Management", "/IGSB/Research/IGSBRC/PHD5.png"],
  ].map(([name, field, img], i) => (
    <div
      key={i}
      className="bg-gray-50 border rounded-xl shadow p-4 text-center space-y-3"
    >
      <div className="w-full h-36 rounded-lg overflow-hidden ">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <p className="font-semibold text-secondary">{name}</p>
      <p className="text-gray-600 text-sm">{field}</p>
    </div>
  ))}
</div>
</section>

    {/* ========================= ACTIVITIES SECTION ========================= */}
    <section className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-secondary text-center">
        Research Centre Activities
      </h2>

      <p className="text-gray-700 text-justify">
        On 5th June 2025, we invited Dr. Abhijit Chandratreya, Deputy Director
        (PGRC) IIMP for a guidance session. All teaching faculties of Indira
        Global School of Business had the privilege to receive guidance from 
        Dr. Abhijit Chandratreya.
      </p>

      <p className="text-gray-700 text-justify">
        Dr. Ashish Vyas, Coordinator - IGSB Research Center, welcomed Guest
        Dr. Abhijit Chandratreya, Deputy Director (PGRC) IIMP; Dr. Virendra
        Tatake, Director, IGSB; Dr. Pallavi Sajanapwar, Dean Research and
        Academics, IGSB; and all the faculties of IGSB.
      </p>

      <p className="text-gray-700 text-justify">
        The guidance session covered eligibility for the entrance test for
        Ph.D. program, who should pursue Ph.D., and its benefits. The event was
        held under the heading <strong>Guidance Program for Research Guides and Scholars</strong>.
      </p>

      {/* IMAGE */}
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/IGSBRC/Activities.png"
          alt="Guidance Program"
          className="w-full h-106 object-cover object-top"
        />
      </div>
    </section>
  </div>
)}


            {/* ===================== MDP ===================== */}
            {activeTab === "mdp" && (
  <div className="bg-white p-10 rounded-2xl shadow-lg space-y-12">
    
    {/* INTRO */}
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-secondary text-center">
        Management Development Programmes (MDP)
      </h2>

      <p className="text-gray-700 text-justify leading-relaxed">
        Management Development Program [MDP] Cell of IGSB focuses
        on skill improvement, interaction ability, confidence
        building, competence, and capacity of managing projects in a
        cross-cultural environment.
      </p>

      <p className="text-gray-700 text-justify leading-relaxed">
        Management Development Program cell of IGSB will aim at the
        managerial development within a structured scenario &
        synergetic system of organizational behavior with value
        addition to recognize functional areas such as:
      </p>

      <ul className="list-disc ml-6 text-gray-700">
        <li>Develop effective training programs based on experiential learning models.</li>
        <li>Maximize individual potential of students through soft skills training.</li>
        <li>Personality Grooming (Communication, Presentation Skills, Team Dynamics)</li>
        <li>Finance for Non-Finance</li>
        <li>Personal Effectiveness for Corporates & Academic Capacity Building</li>
        <li>Assessment Centre (360° review of aptitude, personality, teamwork)</li>
        <li>Financial Literacy Campaign</li>
      </ul>

      <p className="text-gray-700 font-semibold mt-4">HIGHLIGHTS OF THE MDP CELL</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Tailor made programs</li>
        <li>Certified Trainers</li>
        <li>Reading material</li>
        <li>Online Pre and Post Training Assessments</li>
        <li>Certification</li>
        <li>Consultancy Projects/MDP conducted</li>
      </ul>
    </section>

    {/* 1 - Development Centre */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">1. Development Centre</h3>
      <p className="text-gray-700 text-justify">
        Dr. Priyanka Darekar conducted a Developmental Centre for an established Insurance company at Mumbai on 23 to 25th January 2023.The assignment involved: Assessing employees’ competencies on prescribed tool matrix; giving feedback; Consolidation of observations, interpretation and preparation of reports and developing Individual Development Plans
      </p>

      <div className="w-full h-64 rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/MDP/1MDP.png"
          alt="Development Centre"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* 2 - External Evaluator */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">
        2. External Evaluator for the HR Capability Program
      </h3>

      <p className="text-gray-700 text-justify">
        Dr. Anuradha Phadnis, undertook an MDP assignment as an External Evaluator for the HR capability program of a large-scale retail client; Reliance Retails- HR Academy (Via V-Mentors) for Capabilities Assessment of Senior HR Professionals for Pan India from 10th July 2023 till 25th September 2023.The evaluation process consisted of an assessment of solutions provided by HR solutions for the Article and Case Study provided to them to solve on a Grade point scale for around 80 HR professionals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/MDP/2MDP1.png"
            alt="HR Capability Program 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/MDP/2MDP2.png"
            alt="HR Capability Program 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* 3 - Mentor for Reliance Retail */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">
        3. Mentor for Reliance Retail's Capability-Building Program
      </h3>

      <p className="text-gray-700 text-justify">
        Dr. Anuradha Phadnis and Dr. Priyanka Darekar had been assigned as a Mentor for Reliance Retail's prestigious capability-building program. It was a skill development program that nurtured and groomed the next set of HR leaders in the organization, and they were a part of the mentoring team for the Business Impact projects. Dr. Anuradha mentored 2 groups and Dr. Priyanka mentored 6 Groups.Their journey of the participants closed with a Business Impact project that they had identified based on the learnings and business needs which were facilitated by the Mentors. The mentoring consultancy was carried out in the month of August and September 2023.
      </p>
    </section>

    {/* 4 - Pre & Post Psychometric Assessment */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">
        4. Pre and Post Psychometric Assessment for VNL Constrotech Pvt Ltd
      </h3>

      <p className="text-gray-700 text-justify">
        Dr. Priyanka Darekar completed the pre and post psychometric assessment for VNL Constrotech Pvt Ltd for their Sales, Negotiation and Presentation Skills Training in June 2024. The assessments were backed by development of Individual development plan for VNL Constrotech Pvt Ltd.
      </p>

      <div className="w-full h-106 rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/MDP/3MDP.png"
          alt="Psychometric Assessment"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* 5 - Mentor for Reliance Retail (second) */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">
        5. Mentor for Reliance Retail's Capability-Building Program
      </h3>

      <p className="text-gray-700 text-justify">
        Dr. Pallavi Sajanapwar and Dr. Priyanka Darekar had been assigned as a Mentor for Reliance Retail's prestigious capability-building program. It was a skill development program that nurtured and groomed the next set of HR leaders in the organization, and they were a part of the mentoring team for the Business Impact projects.Their journey of the participants closed with a Business Impact project that they had identified based on the learnings and business needs which were facilitated by the Mentors. The mentoring consultancy was carried out in the month of September and October 2024.
      </p>

      <div className="w-full h-auto rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/MDP/4MDP.png"
          alt="Mentor Program"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* 6 - Aerospace & Consumer Goods Development Centre */}
    <section className="space-y-4">
      <h3 className="text-2xl font-bold text-secondary">
        6. Development Centre for a Diversified Contract Manufacturing Company
      </h3>

      <p className="text-gray-700 text-justify">
        Dr. Priyanka Darekar was appointed as an Assessor for conducting development centre for senior leadership team of a leading SEZ for diversified contract manufacturing company providing vertically integrated product solutions across the Aerospace and Consumer Goods industries. The assignment was conducted in the duration Jan to March 2025.The assignment involved: Assessing employees’ competencies on prescribed tool matrix; giving feedback; Consolidation of observations, interpretation and preparation of reports and developing Individual Development Plans
      </p>

      <div className="w-full h-106 rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/MDP/5MDP.jpg"
          alt="Manufacturing Development Centre"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

  </div>
)}


            {/* ===================== FDP ===================== */}
         {activeTab === "fdp" && (
  <div className="bg-white p-10 rounded-2xl shadow-lg space-y-16">

    {/* 1 */}
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-secondary text-center">
        1-Day In-House FDP: Overview of NBA, OBE & BLOOMS TAXONOMY
      </h3>

      <p className="text-gray-700 leading-relaxed text-justify">
        IGSB organized 1-day FDP program on Overview of NBA, OBE & BLOOMS TAXONOMY on 28th March 2024.
        The course was delivered by Dr. Pallavi Sajanapwar, starting with basics of deep understanding 
        of NBA, OBE overview to faculty members. The sessions were interactive. Outcome-based education 
        policy and information related CO.PO, PSE, PEO were introduced from its core. The history, 
        evolution, various tools which are available for OBE and BLOOMS TAXONOMY were discussed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img src="/IGSB/Research/FDP/1FDP.jpg" alt="FDP Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img src="/IGSB/Research/FDP/1FDP2.jpg" alt="FDP Image 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* 2 */}
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-secondary text-center">
        1-Day In-House FDP: Sectorial & Industry Analysis Using Strategic Models
      </h3>

      <p className="text-gray-700 leading-relaxed text-justify">
        IGSB's IQAC organized a one-day FDP on "Sectorial and Industry Analysis using Strategic models" 
        for all Faculty members.
      </p>

      <div className="w-full max-w-7xl mx-auto h-106 rounded-2xl overflow-hidden shadow">
        <img src="/IGSB/Research/FDP/2FDP.jpg" alt="Sectorial FDP" className="w-full h-full object-cover" />
      </div>
    </section>

    {/* 3 */}
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-secondary text-center">
        1-Day In-House FDP: CO-PO Mapping and Attainments
      </h3>

      <p className="text-gray-700 leading-relaxed text-justify">
        "IGSB organized 1 day In-house FDP on CO-PO Mapping and attainments for faculty members of 
        IGSB and ICMS on 25th April 2023. Resource Person Dr. Anuradha Phadnis conducted the FDP in 
        workshop mode, which facilitated the participants to get hands on experience on the FDP topic".
      </p>

      <p className="text-gray-700 leading-relaxed text-justify">
        Indira Global School of Business aims to be a preferred center of academic excellence and thus  
        demands innovative approach towards capacity building of faculty and students. Faculty members 
        at IGSB forms a good mix of industry and academia experience, thus promoting an excellent 
        learning environment for management students.
      </p>

      <p className="text-gray-700 leading-relaxed text-justify">
        To ensure that students are benefited from the faculty expertise, it is our ongoing endeavor to 
        invest in capacity building. At IGSB we provide opportunities for faculty to engage in knowledge-
        sharing sessions and industry consultation.
      </p>

      <p className="text-gray-700 leading-relaxed text-justify">
        Dr. Virendra Tatake has been actively involved in Financial Awareness Programs through the 
        Aarthbodh Initiative of IGSB.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <div key={i} className="h-64 rounded-2xl overflow-hidden shadow">
      <img
        src={`/IGSB/Research/FDP/3FDP${i}.png`}
        alt={`CO-PO FDP Image ${i}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


      <h4 className="text-xl font-semibold text-secondary mt-6">
        Translation of Investment-related Books into Regional Language
      </h4>

      <p className="text-gray-700 leading-relaxed text-justify">
        Dr Tatake has translated the famous books *Romancing the Balance Sheet* and 
        *Flirting with the Stocks* into regional languages. These books simplify complex 
        financial concepts for the common man.
      </p>

      <div className="mx-auto h-64 rounded-2xl overflow-hidden ">
        <img src="/IGSB/Research/FDP/4FDP.png" alt="Book Translation FDP" className="w-auto h-full object-contain" />
      </div>
    </section>
  </div>
)}


            {/* ===================== RESEARCH ===================== */}
            {activeTab === "research" && (
              <div className="bg-white p-10 rounded-2xl shadow-lg space-y-10">
                <h2 className="text-3xl font-bold text-secondary text-center">
                  Research & Innovation
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  This section provides a summary of research activities,
                  publications, and scholarly contributions made by the faculty
                  of IGSB.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-gray-700">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-3 border">Sr.No</th>
                        <th className="p-3 border">Description</th>
                        <th className="p-3 border">No. Of Resources / Publications</th>
                        <th className="p-3 border">Resource Person</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Ph.D Guide</td>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Dr. Virendra Tatake</td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">2</td>
                        <td className="p-3 border">Ph.D Faculty</td>
                        <td className="p-3 border text-center">5</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Anuradha Phadnis</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">3</td>
                        <td className="p-3 border">Book Publications</td>
                        <td className="p-3 border text-center">14</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">4</td>
                        <td className="p-3 border">Research Paper – National</td>
                        <td className="p-3 border text-center">9</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                          <p>Prof. Nilam Naidu</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">5</td>
                        <td className="p-3 border">Research Paper – International</td>
                        <td className="p-3 border text-center">8</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">6</td>
                        <td className="p-3 border">Research Paper – UGC CARE</td>
                        <td className="p-3 border text-center">13</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">7</td>
                        <td className="p-3 border">Research Paper – SCOPUS</td>
                        <td className="p-3 border text-center">6</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">8</td>
                        <td className="p-3 border">Research Paper – ABDC</td>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Dr. Aatish Zagade</td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">9</td>
                        <td className="p-3 border">Blogs</td>
                        <td className="p-3 border text-center">15</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                          <p>Prof. Nilam Naidu</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ===================== CONFERENCE ===================== */}
         {activeTab === "conference" && (
  <div className="bg-white p-10 rounded-2xl shadow-lg space-y-12">
    
    {/* AY 24-25 */}
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Academic Year 2024–25
      </h2>

      <p className="text-gray-700 text-justify">
        <strong>Fintech for inclusivity and sustainability</strong>
        <br />
        This conference was organized at IGSB to promote student
        research activity. The conference saw a wonderful response
        with 35 students participating and presenting research papers
        on “Fintech for Inclusivity and Sustainability”.
        The inauguration was done by CMA Sagar Malpure, Chairperson,
        ICMAI PCA Chapter. Valuable inputs were given by Prof.
        Chetan Wakalkar (Academic Advisor - IGI) and Dr. Virendra
        Tatake (Director - IGSB). The program successfully
        showcased multiple dimensions of Fintech and encouraged
        student researchers.
      </p>

      <div className="w-full max-w-7xl mx-auto h-130 rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/Conference/C1.jpg"
          alt="Conference 2024–25"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* AY 23-24 */}
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Academic Year 2023–24
      </h2>

      <p className="text-gray-700 text-justify">
        <strong>India's Growth Story Amidst Global Challenges</strong>
        <br />
        Team Indira celebrated a National Conference in association
        with ICMAI - PCA Chapter. The theme was "India's Growth Story
        Amidst Global Challenges". A total of 57 researchers
        participated and presented research papers, contributing to
        a rich academic discourse.
      </p>

      <div className="w-full max-w-7xl mx-auto h-130 rounded-2xl overflow-hidden shadow">
        <img
          src="/IGSB/Research/Conference/C2.jpg"
          alt="Conference 2023–24"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* AY 22-23 */}
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Academic Year 2022–23
      </h2>

      <p className="text-gray-700 text-justify">
        <strong>
          National Conference in Association with The Institute of Cost Accountants of India PCA
        </strong>
        <br />
        A national conference on "Advancements in Business and
        Management Sciences: Embracing Change, Sustainability &
        Transformation" was organised by IGSB on 11th January 2023
        in association with The Institute of Cost Accountants of
        India, PCA Chapter. The objective was to provide a platform
        for budding and experienced researchers to discuss topics
        of sustainability, growth and transformation. Notable
        guests and speakers provided insights aligned with the
        conference theme.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/Conference/C3.jpeg"
            alt="Conference 2022–23 Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-2xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/Conference/C4.jpeg"
            alt="Conference 2022–23 Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  </div>
)}


            {/* ===================== PUBLICATIONS ===================== */}
          {activeTab === "publications" && (
  <div className="bg-white p-10 rounded-2xl shadow-lg space-y-16">

    {/* Faculty Publications */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-secondary text-center">
        Faculty Publications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          Ph.D Guide
        </div>
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          Faculty with Ph.D
        </div>
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          Book Publications
        </div>

        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          National Journals
        </div>
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          International Journals
        </div>
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          UGC Care
        </div>

        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          Scopus
        </div>
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          ABDC
        </div>

        <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
          Conference Proceedings
        </div>
      </div>
    </section>

    {/* Institute Publications */}
    {/* Institute Publications */}
<section className="space-y-10">
  <h2 className="text-3xl font-bold text-secondary text-center">
    Institute Publications
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Existing Items */}
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Annual Reports
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Institute Journals
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Policy Documents
    </div>

    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Research Bulletins
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Conference Proceedings
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      White Papers
    </div>

    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Industry Reports
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Newsletter Publications
    </div>

    {/* ➕ Newly Added 6 Items */}
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Campus Drone
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Monograph
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Analysi–Case Booklet
    </div>

    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Conference Proceedings
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Blog
    </div>
    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
      Patent
    </div>

  </div>
</section>

  </div>
)}


            {/* ===================== RESOURCE PERSON ===================== */}
          {activeTab === "resourcePerson" && (
  <div className="bg-white p-10 rounded-2xl shadow-lg space-y-20">

    {/* 1 */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Session Chair — International Conference (Tashkent)
      </h2>

      <p className="text-gray-700 text-justify">
        Dr. Priyanka Darekar served as a Session Chair at 4th International Conference on Technological Advancements in Computational Sciences, Amity University, Tashkent City, Street Labzak, Building-70, 100028, Uzbekistan. She facilitated the scholarly presentations and discussions, and contributing to the smooth conduct of the international academic event.
      </p>

      <div className="w-full h-auto rounded-2xl overflow-hidden shadow">
        <img 
          src="/IGSB/Research/ResourcePerson/1RP.png"
          alt="Session Chair Tashkent"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* 2 */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary text-center">
        FDPs Conducted as Resource Person
      </h2>

      <p className="text-gray-700 text-justify">
        Dr. Anuradha Phadnis conducted 1 Day Faculty Development Program at Sinhgad Institute of Management, Pune, Vadagon (BK) for Faculty Members on the Topic: “How to prepare course file and CO PO mapping for NAAC Preparation " on Tuesday 17th Oct 2023.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[1, 2, 3, 4, 5].map((i) => (
    <div key={i} className="h-48 rounded-xl overflow-hidden shadow">
      <img
        src={`/IGSB/Research/ResourcePerson/2RP${i}.jpeg`}
        alt={`FDP Resource Person ${i}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

</ section >


    {/* 3 */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Guest Speaker at Government College for Women, Cluster University, Srinagar
      </h2>

      <p className="text-gray-700 text-justify">
        Dr. Priyanka Darekar conducted was invited as a Guest Speaker at the Government College for Women, Cluster University, Srinagar. She delivered a session on "Career Planning" for the Students of Post Graduate department of Computer Science on 25th May 2023. The students were enlightened on topics like Contemporary practices in CV Writing, creating and using professional social media profiles, latest industry trends in Recruitment and selection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-64 rounded-xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/ResourcePerson/3RP1.jpeg"
            alt="Guest Speaker Session Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-64 rounded-xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/ResourcePerson/3RP2.jpeg"
            alt="Guest Speaker Session Image 2"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>

    {/* 4 */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary text-center">
        Aarthbodh Forum — Initiatives by Dr. Tatake
      </h2>

      {/* sub 1 */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-secondary">
          1. Conducting Investment Awareness Programs at Reputed Educational Institutes:
        </h3>
        <p className="text-gray-700 text-justify">
          IGSB Aarthbodh Forum is very keen in creating financial awareness amongst the young generation. Dr Tatake has been conducting investment awareness sessions for post-graduate and undergraduate students for past 10 years. He has cleared the Series V A Certification Examination of NISM (National Institute of Securities Market) in the year 2005 and has been doing the CEP (Continuous Education Program) as per the rules every three years. By virtue of the same he is able to update the new developments in the field of investments easily. He shares the same with the students through such sessions.
        </p>
        <div className="w-106 h-64 rounded-xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/ResourcePerson/4RP1.png"
            alt="Investment Awareness Program"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* sub 2 */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-secondary">
          2. Writing articles in daily newspapers and magazines
        </h3>
        <p className="text-gray-700 text-justify">
          Dr Tatake has been an avid writer and loves to educate people on financial topics through his prolific writing skills. He has is an editor in regional newspapers and magazines for past 20 years.He is able to reach the rural and semi-urban areas of interior Maharashtra to create financial awareness amongst through these articles.
        </p>
        <div className="w-106 h-64 rounded-xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/ResourcePerson/4RP2.png"
            alt="Newspaper Articles"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* sub 3 */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-secondary">
          3. Conducting programs on Radio
        </h3>
        <p className="text-gray-700 text-justify">
          Radio is an effective tool to reach out to youngsters and can be entertaining to educate people through engaging programs.Dr Tatake has conducted programs on All India Radio, Pune and on Community Radio Channel of Savitribai Phule Pune University (Vidyavani ) to create financial awareness amongst the general public.
        </p>
        <div className="w-106 h-64 rounded-xl overflow-hidden shadow">
          <img
            src="/IGSB/Research/ResourcePerson/4RP3.png"
            alt="Radio Programs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  </div>
)}

          </div>
        </div>
      </div>
    </>
  );
}
