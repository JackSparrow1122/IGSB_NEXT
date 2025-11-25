"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Alumni() {
  const [activeTab, setActiveTab] = useState("alumni");

  const [showMoreAchievements, setShowMoreAchievements] = useState(false);

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
      images: ["/IGSB/Alumni/AlumniMeet/Meet25.png"],
    },

    {
      heading: "IGSB Alumni Meet 2024",
      text: `On 21st September 2024, Indira Global School of Business organized an alumni panel discussion for first-year students, featuring two distinguished alumni from the 2015-2017 batch: Mr. Vishal Garje and Mr. Rushi Gokani. The session aimed to provide students with essential guidance on navigating the placement process and developing the necessary skills to secure desirable roles in the corporate world.

Both alumni shared their professional journeys and practical advice on how to approach interviews, select suitable roles, and handle different stages of recruitment. They emphasized understanding company expectations, job profiles, and long-term growth.

Students were encouraged to choose roles that align with career aspirations instead of focusing only on salary. The session concluded with an interactive Q&A, boosting student confidence for upcoming placements.

Overall, the discussion helped students gain clarity, direction, and motivation for their future careers.`,
      images: [
        "/IGSB/Alumni/AlumniMeet/1Meet23.jpg",
        "/IGSB/Alumni/AlumniMeet/2Meet23.jpg",
        "/IGSB/Alumni/AlumniMeet/3Meet23.jpg",
        "/IGSB/Alumni/AlumniMeet/4Meet23.jpg",
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
        "/IGSB/Alumni/AlumniMeet/1Meeet24.jpg",
        "/IGSB/Alumni/AlumniMeet/2Meet24.jpg",
        "/IGSB/Alumni/AlumniMeet/3Meet24.jpg",
        "/IGSB/Alumni/AlumniMeet/4Meet24.jpg",
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
      images: ["/IGSB/Alumni/AlumniMeet/Meet22.jpg"],
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
      img: "/IGSB/Alumni/AlumnniInteraction/NP2223.png",
      topic: "Placement Preparatory Session (ANZ Bank)",
      speaker: "MS. Nisha Pareekh",
      date: "1 st November, 2022",
      time: "4 PM to 6 PM",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/NG2223.png",
      topic: "Placement Preparatory Session (Nielsen IQ)",
      speaker: "Nikita Gedam",
      organization: "Nielsen IQ",
      date: "7th th October, 2022",
      time: "4 pm to 6 pm",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/PB2223.png",
      topic: "Placement Preparatory Session (Nielsen IQ)",
      speaker: "Pratik Balkawade",
      organization: "Nielsen IQ",
      date: "7th th October, 2022",
      time: "4 pm to 6 pm",
      mode: "Online",
      academicYear: "2022-23",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/ST2223.png",
      topic: "Sector Deep Dive of IT and ITES sector.",
      speaker: "Mr. Saurabh Tadelkar",
      organization: "TIBCO Software",
      date: "14th May, 2022",
      time: "10.30 to 1.00 pm",
      mode: "Offline , Classroom-1, First Floor, IGSB",
      academicYear: "2022-23",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/AK2223.jpg",
      topic: " Placement preparation for core sales roles.",
      speaker: "Akshay Shirke",
      organization: "Amazon (Customer Service Manager)",
      date: "19th September, 2020",
      time: "12:00noon to 01.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/HP2223.jpg",
      topic: "Practical tips and domain knowledge to crack interviews.",
      speaker: "Hemant Apte",
      organization: "Huron Consulting (EPM Consultant)",
      date: "17th October, 2020",
      time: "02:00pm to 04.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/GS2223.jpg",
      topic: "Product Development and Pricing Strategies.",
      speaker: "Govind Singh",
      organization: "Renault India (Product Manager)",
      date: "22nd August, 2020",
      time: "11:00am to 12.00noon",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/VV2223.jpg",
      topic: "Career Opportunities relating to Knowledge Management",
      speaker: " Vaishnavi Vartak",
      organization: "Deloitte (Business Analyst)",
      date: "26th March, 2020",
      time: "02:00pm to 05.00pm",
      mode: "Online",
      academicYear: "2020-21",
    },
    {
      img: "/IGSB/Alumni/AlumnniInteraction/ST2223.jpg",
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
      img: "/IGSB/Alumni/AlumniAchievements/PK1214.png",
      name: "Prashant C Katrabad",
      batch: "2012-14",
      position: "AVP - Lead Business Analyst",
      organization: "Credit Suisse",
      awards: "Employee of the year, Employee of the Quarter, Best Newcomer",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/OB1416.jpg",
      name: "Omkar Barge",
      batch: "2014-16",
      position: "Senior Territory Manager",
      organization: "IDFC First Bank Ltd",
      awards: "Ace Award winner",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SK1314.png",
      name: "Sridhar Kadam",
      batch: "2013-14",
      position: "Regional Lead",
      organization: "Salesforce",
      awards: "Presidents Club",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/MS1214.png",
      name: "Mayuresh Sonawane",
      batch: "2012-14",
      position: "Operations Manager",
      organization: "Stellar Value Chain Solutions",
      awards: "Awarded for best Inventory Management",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/JD1214.png",
      name: "Jyoti Dhanwani",
      batch: "2012-14",
      position: "Head of People & Culture Business Partner",
      organization: "Agile Group of Companies, Ahmedabad",
      awards: "Top 101 HR Tech Minds — World HRD Congress",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/RDG1820.png",
      name: "Rajashree Dilip Ghavate",
      batch: "2018-20",
      position: "Assistant Inspector",
      organization: "RTO Nashik",
      awards: "Selected as inspector via MPSC exam",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/PAG1719.png",
      name: "Praghya Anil Gurung",
      batch: "2017-19",
      position: "Deputy Manager",
      organization: "Axis Bank Ltd.",
      awards: "Awarded by CEO of ICICI Prudential LIC LTD",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SS1719.png",
      name: "Shrikant Shinde",
      batch: "2017-19",
      position: "Branch Sales Manager",
      organization: "Piramal Capital & Housing Finance",
      awards: "Business Heads Club Award — Best PAN India Portfolio (2nd Rank)",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SK1719.png",
      name: "Saurabh Kulkarni",
      batch: "2017-19",
      position: "SME Fixed Asset Associate",
      organization: "NielsenIQ",
      awards: "CFO Award 2022 Q1, Silver Award, Q1 2020 Best Performance",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/RB1214.jpg",
      name: "Reshmi Bagchi",
      batch: "2012-14",
      position: "Entrepreneur, General Manager",
      organization: "Medinilla Healthcare Pvt Ltd",
      awards: "Language expert in French & Mandarin",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SMA1113.png",
      name: "Sangram Mansing Abhang",
      batch: "2011-13",
      position: "Cloud Solution Architect",
      organization: "Microsoft Corp Mumbai",
      awards: "Best Employee, Spot Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/TS1012.png",
      name: "Tapan Singh",
      batch: "2010-12",
      position: "Area Sales Manager",
      organization: "Bata India Ltd",
      awards: "Top 2 ASM India, Highest Franchisee Openings Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SD1113.png",
      name: "Saurabh Deb",
      batch: "2011-13",
      position: "Head - Student Outreach",
      organization: "XL Education India",
      awards:
        "Multiple recognitions across organizations including Big Basket, Housejoy, Bajaj Finserv",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/AS1113.png",
      name: "Amit Soni",
      batch: "2011-13",
      position: "Senior Manager (Team Lead, Group Underwriting SME Business)",
      organization: "NivaBupa Health Insurance",
      awards: "Superstar Performer of the Year",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SN.png",
      name: "Sumanth Narla",
      batch: "—",
      position: "Business Head – EMR",
      organization: "Sriven Corporation",
      awards:
        "Best Business Leader Award, Best Lorealian Award, Game Changer Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/KK1315.png",
      name: "Kishan Kolhapur",
      batch: "2013-15",
      position: "Senior Business Analyst",
      organization: "London Stock Exchange",
      awards: "Branding Ambassador, Multiple project awards",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/AK1113.jpg",
      name: "Amit Kumar",
      batch: "2011-13",
      position: "Project Manager",
      organization: "Shyam Global",
      awards: "Vice President — NGO Sahyog, The Helping Hand Delhi",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/NK1113.png",
      name: "Nivesh Kumar",
      batch: "2011-13",
      position: "Area Business Manager",
      organization: "Samsung Electronics",
      awards: "Best CDE Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SB1315.png",
      name: "Shrikant Bambargekar",
      batch: "2013-15",
      position: "Strategy & Operations Associate — CEO Office",
      organization: "Swades Foundation",
      awards: "Chief Minister’s Fellowship Program Award — 2018",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/ST1719.jpg",
      name: "Samiksha Tiwari",
      batch: "2017-19",
      position: "Tax Associate 2",
      organization: "KPMG US",
      awards: "Kudos Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/NW1315.jpg",
      name: "Nikhil Wadekar",
      batch: "2013-15",
      position: "Assistant Vice President",
      organization: "IndusInd Bank",
      awards: "Multiple ICICI Bank Excellence & MDRT Awards",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/KJ1315.jpg",
      name: "Kamlesh Jagdale",
      batch: "2013-15",
      position: "India Lead – University Recruiting and Early Talent Programs",
      organization: "Nutanix",
      awards:
        "CEO Award, Business Excellence, Industry Partnership Award, Best Industry Mentor",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/NS1416.jpg",
      name: "Neeklesh Sabale",
      batch: "2014-16",
      position: "Business Analyst",
      organization: "Cognizant",
      awards: "Best Performer of the Quarter & Year — Orbis Research",
    },

    // ✅ Newly Added Based on Shared Screenshots
    {
      img: "/IGSB/Alumni/AlumniAchievements/VK1416.png",
      name: "Vikrant Kulkarni",
      batch: "2014-16",
      position: "Manager",
      organization: "Nayara Energy Ltd (formerly known as Essar Oil)",
      awards:
        "ABHIMAAN – Pride of Nayara 2022 for outstanding contribution in Retail",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SS1618.png",
      name: "Shimon Salve",
      batch: "2016-18",
      position: "Business Analyst",
      organization: "Springer Nature",
      awards:
        "Shoutout Award for significant project contribution, PSPO certified B.A.",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/BP1214.jpg",
      name: "Bhagwan Patil",
      batch: "2012-14",
      position: "Team Lead",
      organization: "Citco",
      awards: "Employee of the year in project, Star Performer",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/MM1113.jpg",
      name: "Mahesh Mitkari",
      batch: "2011-13",
      position: "Associate Vice President Sales",
      organization: "Truecopy Credentials Private Limited",
      awards: "Recognized for best sales performance",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/PG1618.png",
      name: "Paresh Gund",
      batch: "2016-18",
      position: "Assistant Sales Manager",
      organization: "Kohinoor Group, Shirgaon",
      awards: "Awarded as Top Performer of the Year 2019 by Paranjape Schemes",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SC1921.png",
      name: "Sagar Chaudhari",
      batch: "2019-21",
      position: "L2 Manager",
      organization: "—",
      awards:
        "Promoted from Sr. Associate to Manager; leading UI/UX, GET, product marketing & EV programs",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/VV1719.png",
      name: "Vaishnavi Vartak",
      batch: "2017-19",
      position: "Sr. Analyst",
      organization: "Deloitte, Hyderabad",
      awards:
        "Applause Award for excellence in project & stakeholder management",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/PK1214.png",
      name: "Prashant C Katrabad",
      batch: "2012-14",
      position: "Business Analyst / Solution Consultant",
      organization: "Ivy Mobility",
      awards:
        "Recognized for project execution & client engagement (2019–2020)",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/KK1315.png",
      name: "Kiran Kad",
      batch: "2013-15",
      position: "—",
      organization: "Abhiyanta India Solutions Pvt. Ltd.",
      awards:
        "Represented SAP India in Make in India Week 2016; interacted with Union Minister Nitin Gadkari",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/VD1315.jpg",
      name: "Viraj Deshmukh",
      batch: "2013-15",
      position: "—",
      organization: "Kolte Patil Developers Ltd",
      awards:
        '"Best Channel Manager" for outstanding sales performance in Pune region',
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/HP1618.jpg",
      name: "Hemant Apte",
      batch: "2016-18",
      position: "—",
      organization: "KPMG",
      awards: "Qualified UGC-NET",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/VG1517.png",
      name: "Vishal Garje",
      batch: "2015-17",
      position: "—",
      organization: "Deloitte",
      awards: "Qualified UGC-NET",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/BB1214.png",
      name: "Bhumika Bhardwaj",
      batch: "2012-14",
      position: "—",
      organization: "Boyden Global Executive Search",
      awards: "Most consistent employee award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/RS1315.jpg",
      name: "Rinky Soni",
      batch: "2013-15",
      position: "—",
      organization: "Signify Innovation’s India Ltd (Philips Lighting)",
      awards: "Indira HR Excellence Award",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/EP1517.png",
      name: "Eeshwari Pawar",
      batch: "2015-17",
      position: "—",
      organization: "Deloitte",
      awards:
        "Spot Award, KX Clients Recognition, Applause Award for collaboration & domain expertise",
    },
    {
      img: "/IGSB/Alumni/AlumniAchievements/SM1214.png",
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

      <div className="min-h-screen bg-gray-50">
        <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[65vh]">
          <Image
            src="/NISMBanner1.jpg"
            alt="Alumni Banner"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ✅ Header Section */}
          <div className="text-center  py-8">
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
              <div className="bg-white p-10 rounded-2xl shadow-lg text-md text-gray-700 leading-[1.9] text-justify space-y-6">
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

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
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
                        className="w-full h-48 object-contain bg-gray-100"
                      />

                      <div className="p-4 text-sm text-gray-700 space-y-1">
                        <p className="font-semibold text-secondary">
                          {card.topic}
                        </p>
                        <p>
                          <span className="font-bold">Speaker:</span>{" "}
                          {card.speaker}
                        </p>
                        <p>
                          <span className="font-bold">Organization:</span>{" "}
                          {card.organization}
                        </p>
                        <p>
                          <span className="font-bold">Date:</span> {card.date}
                        </p>
                        <p>
                          <span className="font-bold">Time:</span> {card.time}
                        </p>
                        <p>
                          <span className="font-bold">Mode:</span> {card.mode}
                        </p>
                        <p>
                          <span className="font-bold">Academic Year:</span>{" "}
                          {card.academicYear}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Alumni Achievements */}
            {/* ✅ Alumni Achievements */}
            {activeTab === "achievements" && (
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-secondary text-center">
                  Alumni Achievements
                </h2>

                {/* Show Limited Data */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {achievementCards
                    .slice(
                      0,
                      showMoreAchievements ? achievementCards.length : 8
                    )
                    .map((card, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4"
                      >
                        {/* Placeholder Image */}
                        <Image
                          src={card.img}
                          alt={card.name}
                          width={400}
                          height={400}
                          className="w-full h-48 object-contain bg-gray-100"
                        />

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

                {/* Show More / Show Less Button */}
                {achievementCards.length > 8 && (
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        setShowMoreAchievements(!showMoreAchievements)
                      }
                      className="px-6 py-2 bg-secondary text-white rounded-lg shadow hover:bg-secondary/90 transition"
                    >
                      {showMoreAchievements ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
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

                    <p className="text-gray-700 text-lg max-w-7xl mx-auto text-justify leading-relaxed">
                      {m.text}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
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
