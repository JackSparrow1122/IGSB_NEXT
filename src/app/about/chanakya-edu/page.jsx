"use client";
import React, { useState } from "react";
import Image from "next/image";

const ChanakyaEdu = () => {
  const trustees = [
    {
      name: "Smt. Sarita Shankar Wakalkar",
      role: "President",
      image: "/banners/sarita-shankar.jpeg",
    },
    {
      name: "Dr. Tarita Shankar",
      role: "Chief Managing Trustee and Founder Secretary",
      image: "/banners/dr-tarita-shankar-chairperson.png",
    },
    {
      name: "Mr. Shardul Nitin Gangal",
      role: "Vice - President",
      image: "/banners/Mr-Shardul-Gangal.webp",
    },
    {
      name: "Mr. Sahil Tarita Shankar",
      role: "Joint Secretary",
      image: "/banners/Sahil-Mehendale.jpg",
    },
    {
      name: "Mr. Pilaji Sursingh Jadhavrao",
      role: "Treasurer",
      image: "/banners/pilaji-sursingh-jadhavrao.jpg",
    },
    {
      name: "Mr. Vasant Maruti Maske",
      role: "Trustee Member",
      image: "/banners/VASANT-MARUTI-MASKE.png",
    },
    {
      name: "Mr. Shaan Tarita Shankar",
      role: "Trustee Member",
      image: "/banners/SHAAN-ADITYA-MEHENDALE.png",
    },
  ];

  const tabs = [
    "Research",
    "Awards",
    "Education",
    "Consultancy",
    "Resource Person",
  ];
  const [activeTab, setActiveTab] = useState("Research");
  const [activeYear, setActiveYear] = useState("AY 2024");

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/AboutBanner1.jpg"
          alt="About Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        {/* SCES Section */}
        <section id="about-sces" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Shree Chanakya Education Society (SCES)
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Shree Chanakya Education Society (SCES) was established in
              February 1994, under the visionary leadership of Dr. Tarita
              Shankar, with the aim of providing top quality post-graduate
              education in the ﬁelds of Business Management, International
              Business and Information Technology. By consistently providing
              quality education over the past few decades, institutes at Indira
              Group is now considered as one of the best institutes in Pune. At
              a time when India was struggling to put its economy back on its
              feet, after the nation having pawned the “family jewels” just to
              keep aﬂoat, Dr. Tarita Shankar sensed that education too would
              have to become more broad based and more vocational in nature if
              India was to stand up to the world competition in quality and
              price for its products, The then Finance Minister had prescribed
              for the economy and so, in 1994, began a saga of growth and
              quality in education; a story that is just reaching its zenith
              with 14 full ﬂedged Institutes registering a strong presence on
              Pune’s educational horizon. Since inception, the Institutes
              managed by SCES, have maintained high academic standards and have
              successfully provided trained manpower to the industrial and
              services sector of the country. These institutes are now listed
              amongst the top colleges not just in Pune, but also in Maharashtra
              and India. With a modest strength of 60 students pursuing a single
              course, SCES has grown steadily and today boasts of 14 Institutes,
              having more than 8000 students from all over India pursuing
              multi-disciplinary, graduate & post-graduate programs. The
              objective of the institute is providing ‘Management education in a
              corporate environment’, has been possible due to the sincere and
              dedicated efforts of the members of SCES, who have invaluable
              experience in varied areas like academics, industry, service and
              social-world.
            </p>
          </div>
        </section>
        {/* About IGSB Section */}
        <section id="about-igsb" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg ">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              About Indira Global School of Business
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              About Indira Global School of Business (IGSB) has been established
              with the explicit vision to train managers with a global
              perspective who can provide sustainable impetus to growing
              international business. IGSB has established its presence in Pune
              as a premier B- School offering MBA (MBA and MBA - Services
              Management) affiliated to Savitribai Phule Pune University and
              approved by AICTE, New Delhi. As a driving philosophy, the belief
              is that the emerging global environment has created a scenario
              where managers have to face greater situational challenges,
              predict and handle the vagaries of the market and provide
              sustainable strategic solutions to corporate issues. The current
              global economy has created an environment where managers have to
              face greater situational challenges; predict and handle the
              impulses of the market and provide quality service management.
              Such an environment requires professional graduates not only armed
              with the necessary knowledge but also the confidence of facing
              extreme competition with greater articulation. The IGSB campus is
              located imposingly adjoining the Mumbai-Pune Expressway, on a
              beautiful site amidst open fields and clusters of large trees in a
              beautiful, green valley which gives a sense of endless space to
              the quest of mind and soul. The infrastructure is dynamic in
              nature because of our constant attempt to maintain pace with the
              development opportunities available to us. Our infrastructure acts
              as a facilitator for the effective delivery of our curriculum and
              nurtures the quest for knowledge. The MBA programs (MBA and MBA -
              Services Management) at IGSB equip students with fresh insights
              and alternative ways of thinking, helping them to succeed in
              highly unpredictable and non-linear conditions, making global
              leaders out of them.
            </p>
          </div>
        </section>

        {/* Board of Trustees Section */}
        <section id="about-trustees" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary mb-2">
              Board of Trustees
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Managing Committee Members/Trustees of 'Shree Chanakya Education
              Society'
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trustees.map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary group"
                >
                  <div className="w-full h-90 bg-gray-100 flex items-center justify-center text-gray-400 rounded-t-xl group-hover:bg-gray-50 transition-colors overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-secondary transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-gray-600 mt-2">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Experience / Additional Info Section */}
        <section id="about-campus" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              About Indira Group of Institutes (IGI)
            </h2>

            {/* Text Block */}
            {/* Text Block */}
            <div className="text-gray-700 leading-relaxed text-lg space-y-6 mb-10">
              <p>
                Established in 1994 under the visionary guidance of{" "}
                <span className="font-semibold">Dr. Tarita Shankar</span>, the
                Indira Group of Institutes (IGI) in Pune has emerged as a
                premier educational institution dedicated to shaping
                future-ready professionals. Founded by the{" "}
                <span className="font-semibold">
                  Shree Chanakya Education Society (SCES)
                </span>
                , IGI was envisioned as a platform to nurture talent, foster
                innovation, and empower students with the knowledge and skills
                necessary to succeed in a rapidly evolving world.
              </p>

              <p>
                With a strong legacy spanning over three decades, IGI has
                consistently pursued academic excellence while promoting
                holistic development. The group has expanded its footprint to
                include{" "}
                <span className="font-semibold">
                  12 distinguished institutes
                </span>
                offering a wide array of programs across Management,
                Engineering, Information Technology, Pharmacy, Commerce,
                Science, and Mass Communication. This multi-disciplinary
                approach enables IGI to provide a seamless educational journey
                from{" "}
                <span className="font-semibold">Kindergarten to Doctorate</span>
                , preparing students to excel at every stage of their academic
                and professional careers.
              </p>

              <p>
                At the heart of IGI's philosophy is a commitment to{" "}
                <span className="font-semibold">student empowerment</span>. The
                institutes focus not only on delivering high-quality education
                but also on developing critical thinking, leadership, and
                entrepreneurial skills. Students are encouraged to engage in
                practical learning experiences, research initiatives, industry
                collaborations, and community service, fostering an environment
                that promotes innovation, ethical values, and social
                responsibility.
              </p>

              <p>
                IGI takes pride in its{" "}
                <span className="font-semibold">
                  state-of-the-art infrastructure
                </span>
                , experienced faculty, and a supportive learning environment
                that encourages curiosity, creativity, and self-confidence. The
                campus culture is designed to inspire students to explore their
                potential fully, embrace challenges, and emerge as competent,
                confident, and socially conscious professionals.
              </p>

              <p>
                Over the years, IGI has built a strong network of alumni who
                have made significant contributions across industries,
                demonstrating the institute's commitment to nurturing talent and
                leadership. By combining academic rigor with experiential
                learning and industry exposure, IGI equips its students to
                thrive in diverse professional landscapes, adapt to emerging
                trends, and lead with vision and integrity.
              </p>

              <p>
                As a beacon of educational excellence in Pune, the Indira Group
                of Institutes continues to innovate, inspire, and lead. With a
                forward-looking approach and a student-centric ethos, IGI
                remains dedicated to creating opportunities for growth,
                fostering lifelong learning, and preparing a generation of
                leaders who are ready to make a meaningful impact in the world.
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* IGBS */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <Image
                  src="/IGSB.jpg"
                  alt="Indira Global School of Business (IGSB)"
                  width={1200}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <div className="py-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Indira Global School of Bussiness (IGSB)
                  </h3>
                </div>
              </div>

              {/* ICEM */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <Image
                  src="/ICEM.jpg"
                  alt="Indira College of Engineering & Management (ICEM)"
                  width={1200}
                  height={800}
                  className="w-full h-64 object-cover"
                />
                <div className="py-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Indira College of Engineering & Management (ICEM)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chairperson Section */}
        <section id="about-chairperson" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary mb-10">
              Chairperson & Chief Mentor's – IGI Message
            </h2>

            <div className="flex flex-col lg:flex-row items-start gap-12 bg-white p-8 rounded-xl border border-gray-100">
              <div className="lg:w-2/5 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/TaritaMam1.jpg"
                    alt="Dr. Tarita Shankar"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              <div className="lg:w-3/5 w-full">
                <div className="border-l-4 border-secondary pl-6 mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-1">
                    DR. TARITA SHANKAR
                  </h3>
                  <p className="text-secondary font-semibold text-lg mb-2">
                    CHAIRPERSON & CHIEF MENTOR
                  </p>
                  <p className="text-gray-700 font-semibold">
                    INDIRA GROUP OF INSTITUTES, PUNE
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  The Indira Group of Institutes (IGI) since its inception in
                  the year 1994 has been earning considerable appreciation for
                  imparting value-based education in response to demands of the
                  corporate world and imbibing ideals of academic excellence
                  among both, faculty and students alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Directors Profile Section */}
        <section id="about-director" className="relative scroll-mt-[15vh]">
          <div className="bg-secondary text-white py-8 px-8 rounded-t-2xl">
            <h2 className="text-3xl font-bold">Directors Profile</h2>
          </div>

          <div className="bg-white p-8 rounded-b-2xl shadow-lg">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 w-full flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/banners/dr-virendra-tatake.jpg"
                      alt="Dr. Virendra Tatake"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 w-full">
                <div className=" mb-6">
                  <h2 className="text-4xl font-bold text-secondary mb-2">
                    Dr. Virendra Tatake
                  </h2>
                  <p className="text-gray-700 font-semibold text-lg">
                    Director
                  </p>
                  <p className="text-secondary underline cursor-pointer text-lg mb-2">
                    director@indiragbs.edu.in
                  </p>
                  <p className="text-gray-600">Finance</p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  An academician with industry and research background.
                  Presently, I am associated with a Business School as a
                  Director...
                </p>

                <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
                  PERSONAL WEBSITE
                </button>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="mt-12 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold rounded-t-lg transition-all ${
                      activeTab === tab
                        ? "bg-secondary text-white shadow-lg"
                        : "text-gray-600 hover:text-secondary hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="py-8">
              {activeTab === "Research" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">
                    Research Publications: Papers, National and International,
                    UGC, Scopus, Web of Science, ABDC, etc.
                  </h3>

                  <div>
                    <ul className="space-y-6 text-gray-700 leading-relaxed text-lg">
                      <li className="py-2">
                        <span className="font-semibold text-secondary">1.</span>{" "}
                        NATURAL RESOURCE ACCOUNTING: THE WAY AHEAD, Sambodhi
                        Journal with ISSN : 2249-6661 UGC Care Approved, Peer
                        Reviewed and Referred Journal Impact Factor 5.8 Vol 43
                        No. 3(IV), July – September 2020
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">2.</span>{" "}
                        ANALYSIS OF EQUITY MUTUAL FUND SCHEMES FOR SIP
                        INVESTMENT, Kala Sarovar ISSN : 0975-4520 UGC Care Group
                        – 1 Journal vol-23 No.04(XI) October-December 2020
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">3.</span>{" "}
                        ANALYSIS OF PRICING STRATEGIES OF INDIAN MOBILE PHONE
                        INDUSTRY Journal of the Maharaja Sayajirao University of
                        Baroda ISSN : 0025-0422 Volume-55, No.1 (III) 2021
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">4.</span>{" "}
                        ANALYSIS OF FACTORS AFFECTING INVESTMENT DECISION OF
                        MUTUAL FUND INVESTORS Journal of the Maharaja Sayajirao
                        University of Baroda ISSN : 0025-0422, Volume-54, No.2
                        (XIII) 2020
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">5.</span>{" "}
                        ANALYSIS OF INDIAN INDEX MUTUAL FUNDS AND THEIR TRACKING
                        ERRORS Indian Journal of Adult Education ISSN :
                        0019-5006, Vol. 81, No. 4(III) October-December 2020
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">6.</span>{" "}
                        ANALYSIS OF FREE-FLOAT STOCK MARKET INDEX WITH SPECIAL
                        REFERENCE TO SENSEX Wesleyan Journal of Research, GC
                        Care Approved, Peer Reviewed and Referred Journal, ISSN
                        -0975-1386, Wesleyan Journal of Research, Vol.13 No4(IV)
                        -2020
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">7.</span>{" "}
                        "Marketing of Financial Services to Women: Problems and
                        Prospects", Shodhasamhita: Journal of Fundamental &
                        Comparative Research; IF = 7.268 Vol. VIII, No. 2(III)
                        July –December : 2022 ISSN: 2277-7067
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">8.</span>{" "}
                        EFFECT OF CAPITAL STRUCTURE ON PROFITABILITY: AN
                        EMPIRICAL ANALYSIS OF AUTOMOBILE COMPANIES LISTED ON NSE
                        Utkal Historical Research Journal, ISSN : 0976-2132
                        Vol.-36, No.1(II) 2023
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      Books:
                    </h4>
                    <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">1.</span>{" "}
                        Accounting for business decisions, ICEM, ISBN
                        -978-81-920427-3-2, Sept 2013
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">2.</span>{" "}
                        Balance sheet and Finance Rohan Publishers, ISBN
                        976-93-82591-45-0, August 2014
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">3.</span>{" "}
                        Faltering with stocks, Rohan Publishers, ISBN
                        -976-93-89458-36-7, Jan 2021
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">4.</span>{" "}
                        Financial management, Rohit prints, ISBN –
                        976-93-89458-04-0, December 2019
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">5.</span>{" "}
                        Investment Psychology, Madhushree Publications, ISBN:
                        978-93-91629-55-7, August 2022
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">6.</span>{" "}
                        Family Investment, Rohan publications, ISBN
                        978-93-86493-64-4, August 2019
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      Google Scholar:
                    </h4>
                    <a
                      href="https://sites.google.com/d/1mqfzUuMkQBmj8uSVbTcF0Z4s7QF_hpAi/p/1dQ38zYAp5Z7ejAftENKJuBPGyrUrNvTf/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary underline hover:text-secondary/80 text-lg"
                    >
                      https://sites.google.com/d/1mqfzUuMkQBmj8uSVbTcF0Z4s7QF_hpAi/p/1dQ38zYAp5Z7ejAftENKJuBPGyrUrNvTf/edit
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "Awards" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">
                    Awards & Recognitions
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">1.</span>{" "}
                      Innovative Leader Award at Business Leaders Awards
                      Ceremony at Taj Lands End, Mumbai 21st March 2022
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">2.</span>{" "}
                      Best B School Director at Dewang Mehta National Education
                      Leadership Recognitions Awards on 23rd November 2022
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">3.</span>{" "}
                      Winner of Best Finance Teacher Award by Bloomberg in the
                      year 2014
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">4.</span>{" "}
                      Secured 2nd Rank in University at Post graduation
                      examination
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">5.</span>{" "}
                      Winner of Chitra-Gupta Award of The Institute of Chartered
                      Accountants of India for securing highest marks (100 out
                      of 100) in the subject of Financial Accounting and
                      Auditing at graduation level
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">6.</span>{" "}
                      Secured 4th Rank in University at graduation examination
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "Education" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">
                    Educational Qualifications
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">1.</span>{" "}
                      Ph D in the field of Banking and Finance – October 2013
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">2.</span>{" "}
                      MBA (Master of Business Administration) June 2013 Bcom
                      (Bachelor of Commerce) – CMA
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">3.</span>{" "}
                      ICWA – Final examination of Institute of Cost Accountants
                      of India June 1997
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">4.</span>{" "}
                      Advanced Mcom (Master of Commerce) Advanced Accounting and
                      Auditing April 1994 to April 1996 Shivaji University,
                      Kolhapur, Maharashtra, India
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">5.</span>{" "}
                      Accounting and Auditing April 1991 - April 1994 Shivaji
                      University, Kolhapur, Maharashtra, India
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "Consultancy" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">
                    Consultancy & Workshops
                  </h3>
                  <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">1.</span>{" "}
                      Conducted workshop on stock exchange operations at Modern
                      College of Arts, Science and Commerce on 15th Feb 2023
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">2.</span>{" "}
                      Seminar for the Members of The Institute of Cost
                      Accountants of India on the topic Mutual Funds on 2nd July
                      2022
                    </li>
                    <li className=" py-2">
                      <span className="font-semibold text-secondary">3.</span>{" "}
                      State Level Workshop on stock market and mutual funds at
                      Shardabai Pawar Mahila Arts, Commerce and Science College,
                      Baramati on 22nd Dec 2021
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "Resource Person" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary mb-6">
                    Resource Person & Chief Guest Appearances
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      Subject Expert:
                    </h4>
                    <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                      <li className=" py-2">
                        Subject expert at S.B. Patil Institute of Management,
                        Pune for PhD students guidance on 8th Feb 2023
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      Chief Guest Appearances:
                    </h4>
                    <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">1.</span>{" "}
                        Chief Guest at ICAI PCA chapter training inauguration –
                        14th Jan 2023
                      </li>
                      <li className=" py-2">
                        <span className="font-semibold text-secondary">2.</span>{" "}
                        Chief Guest at ICAI PCA chapter training inauguration –
                        16th Jan 2022
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="about-vision" className="space-y-8 scroll-mt-[15vh]">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-secondary text-white px-8 py-6">
              <h2 className="text-2xl font-bold">Vision</h2>
            </div>
            <div className="px-8 py-8">
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "Indira Global School of Business will be a preferred center of
                academic excellence for developing dynamic management
                practitioners who will be globally competent and socially
                responsible business leaders with a purpose driven life."
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-secondary text-white px-8 py-6">
              <h2 className="text-2xl font-bold">Mission</h2>
            </div>
            <div className="px-8 py-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To mentor budding managers, global business leaders and
                  encourage entrepreneurs by promoting a learning environment to
                  create and lead sustainable business.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To enable stakeholders to cultivate strategic alliance that
                  promote cross-cultural, social sensitivity, academic
                  excellence, research and consultancy aimed at attaining
                  comprehensive development.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-secondary text-white px-8 py-6">
              <h2 className="text-2xl font-bold">Values</h2>
            </div>
            <div className="px-8 py-8 space-y-6">
              {[
                "Integrity: Conduct ourselves in a fair, honest and transparent manner.",
                "Passion: We work with an incomparable passion to make a positive change towards a holistic and wholesome life.",
                "Environment Sensitivity: We aim to protect and promote environmental sustainability.",
                "Social Sensitivity: We stay compassionate to the lesser privileged in society.",
                "Excellence: Aim to be outstanding, brilliant and at par with global standards in all our undertakings",
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition / Affiliation Section */}
        <section id="about-recognition" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Recognition / Affiliation
            </h2>

            {/* Year Tabs */}
            <div className="flex gap-4 mb-12">
              {["AY 2024", "AY 2023"].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-8 py-3 font-semibold rounded-lg transition-all ${
                    activeYear === year
                      ? "bg-secondary text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeYear === "AY 2024" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-secondary">
                  Team IGSB Celebrates Recognition at Dewang Mehta National
                  Education Leadership Awards
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    We are delighted to announce that the Indira Global School
                    of Business (IGSB) has been honored at the prestigious
                    Dewang Mehta National Education Leadership Awards…
                  </p>
                  <p>
                    This accolade reflects our commitment to excellence and
                    innovation in education.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src="/banners/Year_2023.jpg"
                    alt="Award Recognition"
                    width={600}
                    height={400}
                    className="h-auto object-cover"
                  />
                </div>
              </div>
            )}

            {activeYear === "AY 2023" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-secondary">
                  Indira Global School of Business Honoured with "Outstanding B
                  School" Award at World Education Congress Awards
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Indira Global School of Business (IGSB) proudly announces
                    its remarkable achievement of being awarded the "Outstanding
                    B School" at the World Education Congress Awards…
                  </p>
                  <p>
                    This accolade is a testament to IGSB's unwavering commitment
                    to excellence in business education…
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                      src="/banners/Outstanding-B-School-Award.jpg"
                      alt="Award Photo 1"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                      src="/banners/Outstanding-B-School.jpg"
                      alt="Award Photo 2"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChanakyaEdu;
