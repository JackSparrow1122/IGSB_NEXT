"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Alumni() {
  const [activeTab, setActiveTab] = useState("alumni");

  /* ✅ Alumni Meet Sections — FULLY UPDATED */
  const alumniMeet = [
    {
      heading: "IGSB Alumni Meet 2025",
      text: `The IGSB Alumni Meet 2025, scheduled for 5th April, was a vibrant and memorable gathering celebrating the achievements and togetherness of the IGSB community. The event commenced with a warm welcome to alumni, including the distribution of welcome kits, followed by the dignified rendition of the National Anthem. The traditional lamp lighting ceremony and an uplifting Ganesh Vandana dance performance set an auspicious tone for the day.

The formal proceedings included were a welcome address by Dr. Virendra Tatake, Director of IGSB, and special addresses by Prof. Chetan Wakalkar, Academic Advisor at IGI, and the distinguished Chief Guest, Mr. Sangram Abhang, an alumnus from the 2011-13 batch. The program enlivened by a series of cultural performances by students, celebrating talent and diversity.

Academic excellence was recognized through the felicitation of this year’s toppers, followed by vibrant performances by alumni, further strengthening the spirit of camaraderie. An audio-visual presentation showcased the notable achievements of alumni, followed by a dedicated alumni speech, highlighting their journey and contribution.

Fun and entertainment continued with interactive faculty activities and engaging games, after which Dr. Poonam Wani, Faculty Coordinator, IGSB Alumni Cell delivered the vote of thanks. A networking lunch afterwards provided a relaxed atmosphere for reconnecting and sharing experiences.

The event concluded with specialization-wise interactive sessions and a panel discussion, fostering insightful conversations and future collaborations among alumni and faculty.

The IGSB Alumni Meet 2025 stands as a testament to the institute’s enduring legacy, providing a platform for learning, enjoyment, and renewed bonds.`,
      images: ["/IGSB/AlumniMeet/2025/M1.jpg"], // ✅ Update with real path
    },

    {
      heading: "IGSB Alumni Meet 2024",
      text: `On 21st September 2024, Indira Global School of Business organized an alumni panel discussion for first-year students, featuring two distinguished alumni from the 2015-2017 batch: Mr. Vishal Garje and Mr. Rushi Gokani. The session aimed to provide students with essential guidance on navigating the placement process and developing the necessary skills to secure desirable roles in the corporate world.

Both alumni shared their professional journeys and practical advice on how to approach interviews, select suitable roles, and handle different stages of recruitment. They emphasized understanding company expectations, job profiles, and long-term growth.

Students were encouraged to choose roles that align with career aspirations instead of focusing only on salary. The session concluded with an interactive Q&A, boosting student confidence for upcoming placements.

Overall, the discussion helped students gain clarity, direction, and motivation for their future careers.`,
      images: [
        "/IGSB/AlumniMeet/2024/M1.jpg",
        "/IGSB/AlumniMeet/2024/M2.jpg",
        "/IGSB/AlumniMeet/2024/M3.jpg",
        "/IGSB/AlumniMeet/2024/M4.jpg",
      ],
    },

    {
      heading: "IGSB Alumni Meet 2023",
      text: `The alumni meet 2023 was organized by alumni committee on Thursday, 8th June 2023.

Objectives:
• To reconnect with alumni  
• To make them aware about recent institute-level structural changes  
• Brief about Alumni committee composition  
• Discuss and plan student development inputs involving alumni  

Event Description:
Prof. Aatish Zagade opened the event with a warm welcome and introduction. He updated alumni about institute merger, new organizational structure, new teams, and recent placement achievements.

Dr. Anuradha Phadnis discussed IQAC initiatives, committees, accreditation process, and encouraged alumni involvement.

Dr. Priyanka Darekar highlighted MDP cell activities and requested industry collaboration.

Dr. Priya Tiwari spoke about industry-academia collaboration and requested alumni support for industrial visits and expert lectures.

Prof. Pranita Bhujbal introduced IGI Alumni Portal, benefits, registrations, and networking reach of 5000+ IGI alumni.

Alumni Inputs:
• Alumni requested to mentor students through their MBA journey  
• Offered expertise for SIP viva, PI, GD, guest lectures  
• Suggested identifying high-performing students for advanced inputs  
• Recommended training in communication, business etiquette, professionalism, mental well-being, technical certifications`,
      images: [
        "/IGSB/AlumniMeet/2023/M1.jpg",
        "/IGSB/AlumniMeet/2023/M2.jpg",
        "/IGSB/AlumniMeet/2023/M3.jpg",
        "/IGSB/AlumniMeet/2023/M4.jpg",
      ],
    },

    {
      heading: "IGSB Alumni Meet 2022",
      text: `The virtual alumni meet 2022 was organized by alumni committee on Saturday, 6th August 2022. Alumni from batch 2010-12 to 2019-2021 attended.

Organized By: Alumni Committee  
Objective: reconnecting with alumni, introducing revised Vision & Mission, newly registered alumni association, and sharing achievements.

Brief Report:
The program began with a welcome note by Director, Dr. Virendra Tatake, followed by a keynote by Chief Guest Mr. Sankalp Chandelkar on “Chanakya’s Leadership Wisdom for Corporate Excellence.”

An interactive talk show “Gup Shup” allowed alumni to express thoughts related to Azadi Ka Amrit Mahotsav. Cultural performances including dance, poetry, and memory lane segments created nostalgia.

The Alumni Portal, achievements, and opportunities to contribute were highlighted. Alumni enthusiastically expressed willingness to support placements, guest lectures, mentoring, and industry connects.

Outcome:
The meet was insightful, engaging, and productive with exchange of ideas, feedback, networking, and commitment toward student development.`,
      images: ["/IGSB/AlumniMeet/2022/M1.jpg"],
    },
  ];

  /* ✅ Alumni Interaction Cards (Old + Retained) */
  const interactionCards = [
    {
      img: "/IGSB/Alumni/AlumnniInteraction/PK2223.png",
      topic: "Career Prospects in Marketing.",
      speaker: "Prashant Katrabad",
      organization: "Assistant Vice president at Credit Sussie.",
      date: "3rd February 2023.",
      time: "9.30 AM to 12.30 PM.",
      mode: "Offline , Chanakya Hall, IGSB Pune.",
      academicYear: "2022-23",
    },
    {
      img: "/alumni/A2.jpg",
      topic: "Placement Preparatory Session (ANZ Bank)",
      speaker: "MS. Nisha Pareekh",
      date: "1 st November, 2022",
      time: "4 PM to 6 PM",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/alumni/A3.jpg",
      topic: "Placement Preparatory Session (Nielsen IQ)",
      speaker: "Nikita Gedam",
      organization: "Nielsen IQ",
      date: "7th th October, 2022",
      time: "4 pm to 6 pm",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/alumni/A3.jpg",
      topic: "Placement Preparatory Session (Nielsen IQ)",
      speaker: "Pratik Balkawade",
      organization: "Nielsen IQ",
      date: "7th th October, 2022",
      time: "4 pm to 6 pm",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/alumni/A3.jpg",
      topic: "Sector Deep Dive of IT and ITES sector.",
      speaker: "Mr. Saurabh Tadelkar",
      organization: "TIBCO Software",
      date: "14th May, 2022",
      time: "10.30 to 1.00 pm",
      mode: "Offline , Classroom-1, First Floor, IGSB",
      academicYear: "2022-23",
    },
    {
      img: "/alumni/A4.jpg",
      topic: " Placement preparation for core sales roles.",
      speaker: "Akshay Shirke",
      organization: "Amazon (Customer Service Manager)",
      date: "19th September, 2020",
      time: "12:00noon to 01.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/alumni/A5.jpg",
      topic: "Practical tips and domain knowledge to crack interviews.",
      speaker: "Hemant Apte",
      organization: "Huron Consulting (EPM Consultant)",
      date: "17th October, 2020",
      time: "02:00pm to 04.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/alumni/A6.jpg",
      topic: "Product Development and Pricing Strategies.",
      speaker: "Govind Singh",
      organization: "Renault India (Product Manager)",
      date: "22nd August, 2020",
      time: "11:00am to 12.00noon",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/alumni/A7.jpg",
      topic: "Career Opportunities relating to Knowledge Management",
      speaker: " Vaishnavi Vartak",
      organization: "Deloitte (Business Analyst)",
      date: "26th March, 2020",
      time: "02:00pm to 05.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/alumni/A8.jpg",
      topic: "Overview of the profiles relating to Taxation",
      speaker: "Samiksha Tiwari",
      organization: "KPMG (Tax Associate)",
      date: "7th March, 2021",
      time: "11:00am to 12.30pm",
      mode: "Online",
      academicYear: "2020-21",
    },
  ];

  /* ✅ Alumni Achievements — ALL 23 CARDS RECORDED */
  const achievementCards = [
  // ✅ Existing 23 Cards — unchanged
  {
    img: "",
    name: "Prashant C Katrabad",
    batch: "2012-14",
    position: "AVP - Lead Business Analyst",
    organization: "Credit Suisse",
    awards: "Employee of the year, Employee of the Quarter, Best Newcomer",
  },
  {
    img: "",
    name: "Omkar Barge",
    batch: "2014-16",
    position: "Senior Territory Manager",
    organization: "IDFC First Bank Ltd",
    awards: "Ace Award winner",
  },
  {
    img: "",
    name: "Sridhar Kadam",
    batch: "2013-14",
    position: "Regional Lead",
    organization: "Salesforce",
    awards: "Presidents Club",
  },
  {
    img: "",
    name: "Mayuresh Sonawane",
    batch: "2012-14",
    position: "Operations Manager",
    organization: "Stellar Value Chain Solutions",
    awards: "Awarded for best Inventory Management",
  },
  {
    img: "",
    name: "Jyoti Dhanwani",
    batch: "2012-14",
    position: "Head of People & Culture Business Partner",
    organization: "Agile Group of Companies, Ahmedabad",
    awards: "Top 101 HR Tech Minds — World HRD Congress",
  },
  {
    img: "",
    name: "Rajashree Dilip Ghavate",
    batch: "2018-20",
    position: "Assistant Inspector",
    organization: "RTO Nashik",
    awards: "Selected as inspector via MPSC exam",
  },
  {
    img: "",
    name: "Praghya Anil Gurung",
    batch: "2017-19",
    position: "Deputy Manager",
    organization: "Axis Bank Ltd.",
    awards: "Awarded by CEO of ICICI Prudential LIC LTD",
  },
  {
    img: "",
    name: "Shrikant Shinde",
    batch: "2017-19",
    position: "Branch Sales Manager",
    organization: "Piramal Capital & Housing Finance",
    awards: "Business Heads Club Award — Best PAN India Portfolio (2nd Rank)",
  },
  {
    img: "",
    name: "Saurabh Kulkarni",
    batch: "2017-19",
    position: "SME Fixed Asset Associate",
    organization: "NielsenIQ",
    awards: "CFO Award 2022 Q1, Silver Award, Q1 2020 Best Performance",
  },
  {
    img: "",
    name: "Reshmi Bagchi",
    batch: "2012-14",
    position: "Entrepreneur, General Manager",
    organization: "Medinilla Healthcare Pvt Ltd",
    awards: "Language expert in French & Mandarin",
  },
  {
    img: "",
    name: "Sangram Mansing Abhang",
    batch: "2011-13",
    position: "Cloud Solution Architect",
    organization: "Microsoft Corp Mumbai",
    awards: "Best Employee, Spot Award",
  },
  {
    img: "",
    name: "Tapan Singh",
    batch: "2010-12",
    position: "Area Sales Manager",
    organization: "Bata India Ltd",
    awards: "Top 2 ASM India, Highest Franchisee Openings Award",
  },
  {
    img: "",
    name: "Saurabh Deb",
    batch: "2011-13",
    position: "Head - Student Outreach",
    organization: "XL Education India",
    awards:
      "Multiple recognitions across organizations including Big Basket, Housejoy, Bajaj Finserv",
  },
  {
    img: "",
    name: "Amit Soni",
    batch: "2011-13",
    position:
      "Senior Manager (Team Lead, Group Underwriting SME Business)",
    organization: "NivaBupa Health Insurance",
    awards: "Superstar Performer of the Year",
  },
  {
    img: "",
    name: "Sumanth Narla",
    batch: "—",
    position: "Business Head – EMR",
    organization: "Sriven Corporation",
    awards:
      "Best Business Leader Award, Best Lorealian Award, Game Changer Award",
  },
  {
    img: "",
    name: "Kishan Kolhapur",
    batch: "2013-15",
    position: "Senior Business Analyst",
    organization: "London Stock Exchange",
    awards: "Branding Ambassador, Multiple project awards",
  },
  {
    img: "",
    name: "Amit Kumar",
    batch: "2011-13",
    position: "Project Manager",
    organization: "Shyam Global",
    awards: "Vice President — NGO Sahyog, The Helping Hand Delhi",
  },
  {
    img: "",
    name: "Nivesh Kumar",
    batch: "2011-13",
    position: "Area Business Manager",
    organization: "Samsung Electronics",
    awards: "Best CDE Award",
  },
  {
    img: "",
    name: "Shrikant Bambargekar",
    batch: "2013-15",
    position: "Strategy & Operations Associate — CEO Office",
    organization: "Swades Foundation",
    awards: "Chief Minister’s Fellowship Program Award — 2018",
  },
  {
    img: "",
    name: "Samiksha Tiwari",
    batch: "2017-19",
    position: "Tax Associate 2",
    organization: "KPMG US",
    awards: "Kudos Award",
  },
  {
    img: "",
    name: "Nikhil Wadekar",
    batch: "2013-15",
    position: "Assistant Vice President",
    organization: "IndusInd Bank",
    awards: "Multiple ICICI Bank Excellence & MDRT Awards",
  },
  {
    img: "",
    name: "Kamlesh Jagdale",
    batch: "2013-15",
    position:
      "India Lead – University Recruiting and Early Talent Programs",
    organization: "Nutanix",
    awards:
      "CEO Award, Business Excellence, Industry Partnership Award, Best Industry Mentor",
  },
  {
    img: "",
    name: "Neeklesh Sabale",
    batch: "2014-16",
    position: "Business Analyst",
    organization: "Cognizant",
    awards: "Best Performer of the Quarter & Year — Orbis Research",
  },

  // ✅ Newly Added Based on Shared Screenshots
  {
    img: "",
    name: "Vikrant Kulkarni",
    batch: "2014-16",
    position: "Manager",
    organization:
      "Nayara Energy Ltd (formerly known as Essar Oil)",
    awards:
      "ABHIMAAN – Pride of Nayara 2022 for outstanding contribution in Retail",
  },
  {
    img: "",
    name: "Shimon Salve",
    batch: "2016-18",
    position: "Business Analyst",
    organization: "Springer Nature",
    awards:
      "Shoutout Award for significant project contribution, PSPO certified B.A.",
  },
  {
    img: "",
    name: "Bhagwan Patil",
    batch: "2012-14",
    position: "Team Lead",
    organization: "Citco",
    awards: "Employee of the year in project, Star Performer",
  },
  {
    img: "",
    name: "Mahesh Mitkari",
    batch: "2011-13",
    position: "Associate Vice President Sales",
    organization: "Truecopy Credentials Private Limited",
    awards: "Recognized for best sales performance",
  },
  {
    img: "",
    name: "Paresh Gund",
    batch: "2016-18",
    position: "Assistant Sales Manager",
    organization: "Kohinoor Group, Shirgaon",
    awards:
      "Awarded as Top Performer of the Year 2019 by Paranjape Schemes",
  },
  {
    img: "",
    name: "Sagar Chaudhari",
    batch: "2019-21",
    position: "L2 Manager",
    organization: "—",
    awards:
      "Promoted from Sr. Associate to Manager; leading UI/UX, GET, product marketing & EV programs",
  },
  {
    img: "",
    name: "Vaishnavi Vartak",
    batch: "2017-19",
    position: "Sr. Analyst",
    organization: "Deloitte, Hyderabad",
    awards:
      "Applause Award for excellence in project & stakeholder management",
  },
  {
    img: "",
    name: "Prashant C Katrabad",
    batch: "2012-14",
    position: "Business Analyst / Solution Consultant",
    organization: "Ivy Mobility",
    awards:
      "Recognized for project execution & client engagement (2019–2020)",
  },
  {
    img: "",
    name: "Kiran Kad",
    batch: "2013-15",
    position: "—",
    organization: "Abhiyanta India Solutions Pvt. Ltd.",
    awards:
      "Represented SAP India in Make in India Week 2016; interacted with Union Minister Nitin Gadkari",
  },
  {
    img: "",
    name: "Viraj Deshmukh",
    batch: "2013-15",
    position: "—",
    organization: "Kolte Patil Developers Ltd",
    awards:
      '"Best Channel Manager" for outstanding sales performance in Pune region',
  },
  {
    img: "",
    name: "Hemant Apte",
    batch: "2016-18",
    position: "—",
    organization: "KPMG",
    awards: "Qualified UGC-NET",
  },
  {
    img: "",
    name: "Vishal Garje",
    batch: "2015-17",
    position: "—",
    organization: "Deloitte",
    awards: "Qualified UGC-NET",
  },
  {
    img: "",
    name: "Bhumika Bhardwaj",
    batch: "2012-14",
    position: "—",
    organization: "Boyden Global Executive Search",
    awards: "Most consistent employee award",
  },
  {
    img: "",
    name: "Rinky Soni",
    batch: "2013-15",
    position: "—",
    organization:
      "Signify Innovation’s India Ltd (Philips Lighting)",
    awards: "Indira HR Excellence Award",
  },
  {
    img: "",
    name: "Eeshwari Pawar",
    batch: "2015-17",
    position: "—",
    organization: "Deloitte",
    awards:
      "Spot Award, KX Clients Recognition, Applause Award for collaboration & domain expertise",
  },
  {
  img: "",
  name: "Shashank Mishra",
  batch: "2012-2014",
  position: "Assistant Manager",
  organization: "Deloitte",
  awards: "Applause Award, Spot Award",
},
];


  /* ✅ Alumni Association Members — TABLE FROM IMAGE */
  const associationMembers = [
    {
      sr: 1,
      name: "Dr. Virendra Tatake",
      role: "Chairman",
      representation: "Director",
    },
    {
      sr: 2,
      name: "Dr. Aatish Zagade",
      role: "Treasurer",
      representation: "Teaching Representative",
    },
    {
      sr: 3,
      name: "Dr. Pallavi Sajanapwar",
      role: "Member",
      representation: "Teaching Representative",
    },
    {
      sr: 4,
      name: "Mr. Hans Daryani",
      role: "Alumni Association - President",
      representation: "Alumni Representative",
    },
    {
      sr: 5,
      name: "Ms. Rashmi Bagchi",
      role: "Alumni Association - Secretary",
      representation: "Alumni Representative – Female",
    },
    {
      sr: 6,
      name: "Mr. Prashant Katrabad",
      role: "Member",
      representation: "Alumni Representative",
    },
    {
      sr: 7,
      name: "Mr. Saurabh Tadelkar",
      role: "Member",
      representation: "Alumni Representative",
    },
    {
      sr: 8,
      name: "Mr. Rushi Gokani",
      role: "Member",
      representation: "Alumni Representative (Hyderabad)",
    },
    {
      sr: 9,
      name: "Mr. Neeklesh Sable",
      role: "Member",
      representation: "Alumni Representative (Bangalore)",
    },
    {
      sr: 10,
      name: "Mr. Vishal Garje",
      role: "Member",
      representation: "Alumni Representative (Mumbai)",
    },
    {
      sr: 11,
      name: "Prof. Poonam Wani",
      role: "Member Secretary",
      representation: "Teaching Representative",
    },
  ];

  /* ✅ Alumni Meet Sections */

  return (
    <>
      <Head>
        <title>ICEM Alumni Network</title>
        <meta
          name="description"
          content="Connect with ICEM alumni and stay updated with our alumni network."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ✅ Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              ICEM Alumni Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your alma mater and fellow alumni. Join our
              growing network of successful professionals.
            </p>
          </div>

          {/* ✅ Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "alumni", label: "Alumni" },
              { id: "interaction", label: "Alumni Interaction" },
              { id: "achievements", label: "Alumni Achievements" },
              { id: "association", label: "Alumni Association" },
              { id: "meet", label: "Alumni Meet" },
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

          {/* ✅ TAB CONTENT */}
          <div>
            {/* ✅ Alumni Description */}
            {activeTab === "alumni" && (
              <div className="bg-white p-10 rounded-2xl shadow-lg text-lg text-gray-700 leading-[1.9] text-justify space-y-6">
                <p>
                  Alumni are the strongest representation of Indira Global
                  School of Business in the outside world. The IGSB Alumni’s are
                  doing extremely well in their respective fields and are also
                  contributing to the growth of our institute with their support
                  and expertise. The Alumni Cell had its inception in the year
                  2014, currently our faculty Prof. Pranita Bhujbal is handling
                  Alumni Cell as the faculty in charge. We believe in having a
                  strong foundation for this team with the onus of representing
                  the strong alumni network.
                </p>
                <p>
                  We conduct various Alumni Initiatives throughout the academic
                  year. Keeping in mind the core competencies that would be
                  needed to surge ahead, the alumni contribute in various
                  activities of the Institute like – Experience sharing in
                  Induction & Orientation Programs, Expert Sessions, Workshops,
                  organizing Industrial Visits, Entrepreneurship Development,
                  judging cultural and sports activities, and supporting
                  extension activities.
                </p>
                <p>
                  All these activities lead to the development of holistic
                  personality and enhancing employability and entrepreneurial
                  abilities of the students.
                </p>
              </div>
            )}

            {/* ✅ Alumni Interaction */}
            {activeTab === "interaction" && (
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-secondary text-center">
                  Alumni Interaction Sessions
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                  {interactionCards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={card.img}
                        alt={card.speaker}
                        width={400}
                        height={400}
                        className="w-full h-40 object-cover"
                      />

                      <div className="p-4 text-sm text-gray-700 space-y-1">
                        <p className="font-semibold text-secondary">
                          {card.topic}
                        </p>
                        <p>
                          <span className="font-medium">Speaker:</span>{" "}
                          {card.speaker}
                        </p>
                        <p>
                          <span className="font-medium">Organization:</span>{" "}
                          {card.organization}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span> {card.date}
                        </p>
                        <p>
                          <span className="font-medium">Time:</span> {card.time}
                        </p>
                        <p>
                          <span className="font-medium">Mode:</span> {card.mode}
                        </p>
                        <p>
                          <span className="font-medium">Academic Year:</span>{" "}
                          {card.academicYear}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Alumni Achievements */}
            {activeTab === "achievements" && (
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-secondary text-center">
                  Alumni Achievements
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {achievementCards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4"
                    >
                      {/* Placeholder Image */}
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto bg-gray-200" />

                      <div className="space-y-1 text-gray-700 text-sm">
                        <p>
                          <strong>Name of Student:</strong> {card.name}
                        </p>
                        <p>
                          <strong>Batch:</strong> {card.batch}
                        </p>
                        <p>
                          <strong>Position:</strong> {card.position}
                        </p>
                        <p>
                          <strong>Organization:</strong> {card.organization}
                        </p>
                        <p>
                          <strong>Awards:</strong> {card.awards}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Alumni Association */}
            {activeTab === "association" && (
              <div className="overflow-x-auto bg-white p-10 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
                  Alumni Association Committee
                </h2>

                <table className="w-full border border-gray-300 text-gray-700">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-3 border">Sr.No</th>
                      <th className="p-3 border">Name of the Member</th>
                      <th className="p-3 border">Role</th>
                      <th className="p-3 border">Representation</th>
                    </tr>
                  </thead>

                  <tbody>
                    {associationMembers.map((m) => (
                      <tr key={m.sr} className="text-center">
                        <td className="p-3 border">{m.sr}</td>
                        <td className="p-3 border">{m.name}</td>
                        <td className="p-3 border">{m.role}</td>
                        <td className="p-3 border">{m.representation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ✅ Alumni Meet */}
            {activeTab === "meet" && (
              <div className="space-y-20">
                {alumniMeet.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
                  >
                    <h2 className="text-3xl font-bold text-secondary text-center">
                      {m.heading}
                    </h2>

                    <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center leading-relaxed">
                      {m.text}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                      {m.images.map((img, index) => (
                        <div
                          key={index}
                          className="rounded-2xl overflow-hidden border shadow-md"
                        >
                          <Image
                            src={img}
                            alt={`${m.heading} Image ${index + 1}`}
                            width={1400}
                            height={800}
                            className="w-full h-[350px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
