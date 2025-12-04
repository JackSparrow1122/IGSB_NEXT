"use client";
import { useState } from "react";
import BannerSlider from "./BannerSlider";
import Image from "next/image";

export default function Sports() {
  const [activeSection, setActiveSection] = useState("Sports");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Library staff data
  const libraryStaff = [
    { name: "Dr. Darshna Desai", designation: "Coordinator", email: "desai.darshana@indiraicem.ac.in" },
    { name: "Mr. Narayan Jundare", designation: "Librarian & Head", email: "library@indiraicem.ac.in" },
    { name: "Mrs. Anita Chavan", designation: "Assistant Librarian", email: "anita.chavan@indiraicem.ac.in" },
    { name: "Mr. Sunil Phuge", designation: "Library Assistant", email: "sunil.phuge@indiraicem.ac.in" },
    { name: "Mr. Dinesh Deore", designation: "Library Assistant", email: "dinesh.deore@indiraicem.ac.in" },
    { name: "Mr. Arun Lad", designation: "Sr. Library Clerk", email: "arun.lad@indiraicem.ac.in" }
  ];

  // Library collection data
  const libraryCollection = {
    overview: [
      { label: "Total number of Books", value: "32948" },
      { label: "Total Number of Titles", value: "8331" },
      { label: "Print Journals", value: "30" },
      { label: "E-Journals", value: "62018" },
      { label: "NPTEL Video lecture", value: "600" },
      { label: "E-Books", value: "1050" },
      { label: "IRC CODE", value: "64" },
      { label: "IS CODE", value: "128" },
      { label: "Newspapers", value: "14" },
      { label: "CDs/DVDs", value: "1300" },
      { label: "Library Staff", value: "5" },
      { label: "Library Area", value: "575 SQM" }
    ],
    books: [
      { course: "APPLIED SCIENCE", titles: "404", volumes: "2277" },
      { course: "CIVIL", titles: "398", volumes: "1735" },
      { course: "COMPUTER", titles: "390", volumes: "3150" },
      { course: "E&TC", titles: "699", volumes: "3097" },
      { course: "IT", titles: "481", volumes: "1860" },
      { course: "MECH", titles: "995", volumes: "3741" },
      { course: "MECHANICAL SANDWICH", titles: "131", volumes: "425" },
      { course: "AIDS", titles: "45", volumes: "188" },
      { course: "GENERAL BOOKS", titles: "927", volumes: "1012" },
      { course: "CEXAM", titles: "169", volumes: "245" },
      { course: "M.TECH( MECH)", titles: "115", volumes: "381" },
      { course: "M.TECH(COMP)", titles: "58", volumes: "429" },
      { course: "M.E(E&TC)", titles: "55", volumes: "159" },
      { course: "MBA", titles: "825", volumes: "4747" },
      { course: "MCA", titles: "1866", volumes: "8222" },
      { course: "BBA", titles: "42", volumes: "42" },
      { course: "BCA", titles: "47", volumes: "138" },
      { course: "DONATED BOOKS", titles: "684", volumes: "1100" }
    ],
    otherMaterials: [
      { item: "Journals", volumes: "30" },
      { item: "Magazines", volumes: "10" },
      { item: "Newspapers", volumes: "14" },
      { item: "E-Journal Subscription J-Gate (JST/JSSH)", volumes: "2" },
      { item: "CDs/DVDs (Free with Books & Magazines)", volumes: "1300" }
    ],
    newspapers: [
      { language: "English", count: "7" },
      { language: "Marathi", count: "6" },
      { language: "Hindi", count: "1" }
    ],
    timing: {
      regular: "Monday to Saturday: 09:00 am to 4:00 pm",
      readingRoom: "Reading Room (Exam): 09:00 am to 9:00 pm",
      closed: "Every Sunday (1st & 3rd Saturday & Public Holiday)"
    },
    services: [
      "Computerized Issue / Return",
      "Reference Service",
      "Newspaper Clipping",
      "Current Awareness Service",
      "Selective Dissemination of Information",
      "User Orientation / Information Literacy",
      "New Arrival Service"
    ],
    facilities: [
      "Reading Hall",
      "Book Bank",
      "Earn While Learn",
      "Reprographic, Scanning",
      "Softcopy of Syllabus and Question Papers",
      "OPAC",
      "Internet",
      "Library Website"
    ],
    policies: {
      general: [
        "All readers are required to maintain discipline in the library.",
        "Smoking, eating, sleeping and talking loudly are strictly prohibited in the Library.",
        "Seek permission of the library staff before entering the stack room.",
        "The patron should submit his/her Identity card at the counter while entering the library for any purpose.",
        "The Library remains open on MON – SAT: 09:00 AM – 04:30 PM.",
        "Changes, if any, in the timings will be notified whenever necessary.",
        "Every person who enters the library will sign the visitor register.",
        "Deposit your personal belongings at the property counter.",
        "Switch off mobile phones or keep on silent mode in the library premises.",
        "Follow instructions given by the librarian or the staff at the counter."
      ],
      borrowing: [
        "Books will be issued for a period of 30 days at first instance.",
        "Four books to PG students and three books to UG students (per month) will be issued against their I-Card.",
        "Check the book at the time of issuing. In case of defect or damage please inform the library staff.",
        "Return the issued book on or before the due date.",
        "Renewals are compulsory before the due date otherwise fine will be charged at Rs. 5/- per day.",
        "Reference books/Journals/Magazines & project reports will not be issued outside the library.",
        "In case of loss or damage of book, replacement of book has to be made by the user."
      ]
    },
    eContent: [
      { database: "Science-Direct", url: "http://www.sciencedirect.com" },
      { database: "FTP", url: "ftp://172.16.32.40" },
      { database: "NDL (National Digital Library of India)", url: "https://ndl.iitkgp.ac.in" },
      { database: "DELNET (Developing Library Network)", url: "http://www.delnet.in" },
      { database: "J-gate", url: "https://www.jgateenext.com" },
      { database: "Question Papers", url: "Autonomous ENDSEM Question Papers ICEM" }
    ]
  };

  // Transport data
  const transportData = {
    contact: {
      telephone: "02114-661661",
      mobile: "+91 9158302525"
    }
  };

  // Gym data
  const gymData = {
    equipment: [
      "Bicep Machine",
      "Multifunctional 5 Station Machine",
      "Benches",
      "Bars & Plates",
      "Cardio Station (Treadmill, Cycle, Cross Trainer)",
      "Chest Press Machine",
      "Calf Raises Machine",
      "Dumbbells",
      "Leg Press Machine",
      "Leg Extension Machine",
      "Leg Curl Machine",
      "Lat Pull Down Machine",
      "Shoulder Press Machine",
      "Squat Machine",
      "Chest Press Machine",
      "Cross Trainer",
      "Leg Press Machine",
      "Leg Curl Machine",
      "Single Bar",
      "Twister"
    ],
    contact: {
      name: "Mr. Atul Gore",
      designation: "Physical Director",
      telephone: "02114-661599"
    }
  };

  // Primary Health Centre data
  const healthCentreData = {
    description: "Indira Primary Health Centre is an In-house Medical Clinic Facility for Students and Staffs of ICEM campus. Medical Clinic is equipped with equipment needed for primary health management.",
    services: [
      "Medical Consultation",
      "Gynaecological Consultation",
      "Counselling for Students",
      "First Aid",
      "Nebulization",
      "Tetanus Vaccination",
      "Free Medicines"
    ]
  };

  // Hostel data
  const hostelData = {
    overview: {
      description: "ICEM is having Boys & Girls hostel facility with spacious rooms.",
      capacity: {
        girls: "168",
        boys: "126"
      },
      roomFacilities: [
        "Beds",
        "Study table",
        "Chairs",
        "Cupboard facility"
      ]
    },
    managementTeam: [
      { name: "Mr. Dattatray Ovhal", designation: "Boys Hostel Warden", contact: "8788562431", email: "dattatraya.ovhal@indiraicem.ac.in" },
      { name: "Ms. Manisha Dhiwar", designation: "Girls Hostel Warden", contact: "9588475368", email: "Manisha.dhiwar@indiraicem.ac.in" },
      { name: "Ms. Sapna Dahake", designation: "Girls Hostel Warden", contact: "9699913109", email: "sapnadahake@indiraicem.ac.in" }
    ],
    messTeam: [
      { name: "Mr. Vikas Kumar Shetty – M/s Little Chef Canteen", designation: "Canteen Owner", contact: "9665869000", email: "" },
      { name: "Mr. Prajwal Shetty – M/s Little Chef Canteen", designation: "Canteen In-charge for Mess Fees", contact: "8310972775", email: "" }
    ],
    facilities: [
      "Free College Ambulance service 24×7 for hostel students.",
      "Washing machine Facility.",
      "Water coolers for drinking water on each floor.",
      "Separate Common TV room with LCD facility at girls & boys hostel.",
      "CCTV cameras at all major points at girls & boys hostel.",
      "Wi-Fi facility.",
      "DG power backup – 24×7.",
      "Housekeeping & daily cleaning of all rooms (8 am to 4 pm).",
      "Hot water facility in all rooms (6 am to 9 am).",
      "Sanitary pad disposal machine in girls hostel.",
      "Facility of Easy dry wash system in all rooms.",
      "Facility of Security Guards – 24×7.",
      "Facility of warden in hostel.",
      "Facility of Pest control – Monthly.",
      "Facility of Separate sports room – carom & table tennis.",
      "Common Gym facility for hostel students.",
      "Daily attendance & roll call register is maintained.",
      "Health & Accident Insurance coverage for all hostel students.",
      "Hostel committee is operational at hostel.",
      "Mess facility for all hostel students."
    ],
    timings: [
      "Hostel entry time: 7:00 PM",
      "Campus Gate closing time: 7:15 PM",
      "All students should be present in their respective rooms before wardens visit for daily night attendance i.e. by 9:45 PM sharp.",
      "Late Entry NOT ALLOWED. (In case of valid reason, parents' written message/mail must be sent in advance. Only 2 emergency late entries permitted per month.)",
      "Admission will be cancelled if found frequently late or indisciplined.",
      "Students should maintain entries in 'In & Out' registers available at the Main Security Gate."
    ],
    messTimings: [
      "Breakfast: 7:45 am – 9:15 am",
      "Lunch: 1:00 pm – 2:30 pm",
      "Evening Snacks: 5:00 pm – 6:00 pm",
      "Dinner: 8:00 pm – 9:00 pm"
    ],
    documents: [
      "Indemnity Bond (Rs. 100/- Stamp paper with Notary) (format with warden).",
      "Medical Fitness Certificate on Doctor's Letterhead stamped & signed. (If any medical history exists, it must be informed to warden.)",
      "Copy of Student's Aadhar Card.",
      "2 Passport size photos.",
      "Undertaking by Students & Parents (at time of hostel entry).",
      "Declarations (at the time of hostel entry).",
      "Copy of hostel & mess fees receipts.",
      "Two-wheeler permission form."
    ],
    cancellationRules: [
      {
        title: "Cancel Seat Before Hostel Accommodation Within 20 Days",
        steps: [
          "Inform Institute Coordinator → Fill Hostel Cancellation Form (PDF with warden) → Get Director/HOD signature → Submit to warden within 20 days from date of registration.",
          "(Refund amount calculated as per management policy.)"
        ]
      },
      {
        title: "Cancel Seat Before Hostel Accommodation Exceeding 20 Days",
        steps: [
          "If student delays more than 20 days → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund after 20 days.)"
        ]
      },
      {
        title: "Cancel Seat After Taking Hostel Accommodation",
        steps: [
          "Step 1: Inform Institute Coordinator → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund policy applicable.)",
          "Step 2: Fill Hostel Leaving Form at authorized signatures → Submit at Security Gate to take luggage out.",
          "(No refund policy applicable.)"
        ]
      }
    ],
    securityDeposit: [
      "At the end of academic session, Refund Form (signed by warden) + Security deposit of Rs. 5000/- refunded after deducting insurance amount.",
      "Keep original receipts safely for refund process."
    ],
    messInstructions: [
      "Hostel student must pay full mess fees for academic year in advance.",
      "Mess food services are mandatory for hostel students.",
      "Students should not waste food or share food with outsiders.",
      "Timings must be strictly followed.",
      "Complaints related to mess must be reported immediately to Canteen In-charge."
    ],
    medicalAssistance: [
      "It is mandatory for all hostel students to submit Medical Fitness Form.",
      "If a student has any previous medical history, it must be informed during admission.",
      "For any medical assistance, contact warden immediately (First Aid Box available).",
      "In case of emergency – Warden & Hostel Team will shift student to nearby hospital in college ambulance.",
      "Parents & Guardians will be connected for updates & expenses.",
      "Medical Fitness Certificate must be submitted after vacation/long leave."
    ]
  };

  // Sports-specific data
 const achievements = [
    {
      title: "Table Tennis Runners-Up",
      description:
        "The ICEM Parandwadi Girls Team clinched the Runner-up position in the SPPU Intercollegiate Table Tennis Tournament, honoured by national player Mr. Rajat Kadam.",
        img: "/sports/tabletennis.webp",
    },
    {
      title: "National Gold Medal (Athletics)",
      description:
        "Mr. Dhanaraj Raut (B.E. Civil) brought pride to the institute and state by winning a Gold Medal while representing the Maharashtra Team at the Senior National Championship in Karnataka.",
        img: "/sports/tabletennis.webp",
    },
    {
      title: "Gold Medal in Boxing",
      description:
        "Ms. Kartikee Salve (T.E. AI-DS) demonstrated exceptional skill to secure a Gold Medal in Boxing, earning a qualification for the SPPU Interzonal round.",
        img: "/sports/boxing.webp",
    },
    {
      title: "Bronze Medal in Fencing",
      description:
        "Our talented fencer, Ms. Surbhi Jadhav, showcased her prowess by winning a Bronze Medal and qualifying for the prestigious SPPU Interzonal Competition.",
        img: "/sports/fencing.webp",
    },
    {
      title: "Water Polo Runners-Up",
      description:
        "The ICEM Water Polo Team secured the Runner-up trophy at the SPPU Intercollegiate tournament, with team members Mr. Dhanraj Raut and Mr. Vallabh Lawate selected for the Pune District Team.",
        img: "/sports/water-polo.webp",
    },
    {
      title: "Mallkhambh Qualification",
      description:
        "Mr. Deepak Yadav (S.E. Computer) excelled in his sport, qualifying to represent ICEM at the SPPU Interzonal Mallkhambh Competition.",
        img: "/sports/malkhamb.webp",
    },
  ];

const highlight = {
    title: "Arjuna Award & Alumnus Felicitation",
    description1:
      "In a moment of immense pride, our alumnus Mr. Sachin Khilari was honored with the prestigious Arjuna Award by the Honorable President of India, Smt. Droupadi Murmu.",
    description2:
      "The institute also proudly felicitated Mr. Sachin Khilari (Mechanical Engineering, Batch 2013), a Paralympic Silver Medallist in Men's Shot Put F46, during the Induction Programme 2024-25.",
      img: "/sports/arjunaward1.png",
  };

 

  return (
    <div className="w-full bg-white text-gray-800">
      <BannerSlider activeSection={activeSection}/>
      <div className="max-w-7xl mx-auto py-4 px-6 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["Sports", "Library", "Transport", "Canteen", "Gym", "Hostel", "Primary Health Centre"].map((facility) => (
            <button
              key={facility}
              onClick={() => {
                setActiveSection(facility);
                setActiveFAQ(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === facility
                  ? "bg-secondary text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {facility}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeSection === "Sports" ? (
          // Sports-specific content
          <div className="max-w-full mx-auto px-6 py-10">
            {/* Main Content */}
            <div className="w-full bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-4xl font-semibold text-secondary text-center mb-6">
                 Sports & Recreation
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                At <b>ICEM</b>, we believe in the holistic development of our
                students, and sports play a vital role in shaping character,
                building teamwork, and promoting physical fitness.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our institute provides state-of-the-art sports facilities and
                encourages students to participate in various indoor and outdoor
                sports activities at university, state, and national levels.
              </p>

              <h3 className="text-xl font-semibold text-secondary mb-4">
                Sports Facilities
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Well-equipped gymnasium with modern equipment</li>
                <li>Indoor sports complex for table tennis, chess, and carrom</li>
                <li>Outdoor playground for cricket, football, and athletics</li>
                <li>Basketball and volleyball courts</li>
              </ul>

              {/* Sports Infrastructure Marquee */}
              <h2 className="text-2xl font-bold text-secondary mt-10 mb-6">
                Sports Infrastructure
              </h2>

              {/* Single Marquee Image */}
              <div className="relative w-full overflow-hidden h-[50vh] mb-12 ">
                <div className="flex w-[200%] animate-smoothScroll h-full">
                  {/* Image 1 */}
                  <div className="relative w-full h-full flex-shrink-0">
                    <Image
                      src="/sportsmarque.jpg"
                      alt="Sports Infrastructure"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="relative w-full h-full flex-shrink-0">
                    <Image
                      src="/sportsmarque.jpg"
                      alt="Sports Infrastructure duplicate"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Sports Achievements Section */}
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Sports Achievements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col"
                  >
                    {/* Image Placeholder */}
                    <div className=" relative w-full h-40 bg-gray-200 rounded-sm flex items-center justify-center text-gray-500 text-sm mb-4">
                      <Image
                        src={item.img || "/sports/tabletennis.jpg"}
                        alt="Achievement Icon"
                        fill
                        className="object-cover rounded-sm"
                        unoptimized={true}
                      />
                    </div>

                    {/* Text */}
                    <h4 className="text-lg font-semibold text-secondary mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Special Highlight Section */}
              <div className="sm:mt-18 sm:p-0 bg-secondary-50 rounded-xl ">
                {/* Highlight Section */}
                <div className="relative border-2 border-gray-200 rounded-2xl p-2 sm:p-8 sm:pl-80 shadow-md  flex flex-col sm:flex-row  items-center gap-6">
                  {/* Floating Image - Desktop */}
                  <div className="hidden sm:block absolute -left-3 top-1/3 -translate-y-1/2 z-20">
                    <Image
                      src="/sports/arjunaward1.png"
                      alt="Arjuna Award Winner"
                      height={320}
                      width={320}
                      className="object-contain drop-shadow-2xl select-none"
                      unoptimized
                    />
                  </div>

                  {/* Floating Image - Mobile (inline instead of absolute) */}
                  <div className="sm:hidden flex justify-center mb-4">
                    <Image
                      src="/sports/arjunaward1.png"
                      alt="Arjuna Award Winner"
                      height={200}
                      width={200}
                      className="object-contain drop-shadow-2xl select-none"
                      unoptimized
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {highlight.title}
                    </h3>

                    <p className="text-gray-800 leading-relaxed mb-3">
                      {highlight.description1}
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                      {highlight.description2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Library" ? (
          // Library-specific content
          <div className="max-w-full mx-auto px-6 py-10 space-y-12">
            {/* About Us Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-4xl font-bold text-secondary mb-8 text-center">About Library</h2>
              
              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Library Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide comprehensive resources and services in support of the research, teaching, and learning to its Faculty Members, Students, Researchers and Support Staff.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Library Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mr. Shankar Rao Wakalkar Library (ICEM Central Library) will be recognized as leading library by informing and inspiring its user making them all more resilient, more knowledgeable, more connected and more successful.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    The Library continues to embrace change and align itself to thrive on diversity, to support professional growth and opportunity, and to reward flexibility and innovation.
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Introduction</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The college library is well equipped with large number of textbook, reference books, periodicals, journals and newspapers. The number of books in the library at present is about 32948. The library receives 30 journals and 10 magazines in specialized areas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The library consists of reading hall, internet browsing center, reference section, open access periodical and research library. The library has introduced computerized PVC I- card system for the students as well as staff. The library is automated with Koha Library Software(Version-23.11.06) to ease its clientele at various levels while in the library.
                  </p>
                </div>
              </div>

              {/* Library Information */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Library Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Mr. Shankar Rao Wakalkar Library, established in the year 2007, is an invaluable resource for students, researchers and faculties of management and engineering. The college library is well equipped with large number of textbook, reference books, periodicals, journals and newspapers. The number of books in the library at present is about 32948. The library receives 30 journals and 10 magazines in specialized areas. The library consists of reading hall, internet browsing center, reference section, open access periodical and research library. The library has introduced computerized PVC I- card system for the students as well as staff. The library is automated with Koha Library Software (Version-23.11.06) to ease its clientele at various levels while in the library.
                  </p>
                </div>
              </div>

              {/* Staff Information */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Staff Information</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Designation</th>
                        <th className="p-4 text-left">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryStaff.map((staff, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 border-b border-gray-200">{staff.name}</td>
                          <td className="p-4 border-b border-gray-200">{staff.designation}</td>
                          <td className="p-4 border-b border-gray-200 text-blue-600">{staff.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Library Resources Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Library Resources</h2>
              
              {/* Collection Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Collection</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The library has developed an unlikely collection of over 32196 books, 1300 CD's/ DVD's and over 87 hard copy journals and magazines in last five years. The same tends to grow at a very expediential rate in coming years.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-secondary mb-4">Library At A Glance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {libraryCollection.overview.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="text-lg font-semibold text-secondary">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Books Collection */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Books Collection</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-4 text-left">Sr. No</th>
                        <th className="p-4 text-left">Course</th>
                        <th className="p-4 text-left">Total No Of Titles</th>
                        <th className="p-4 text-left">Total No. Of Volumes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryCollection.books.map((book, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 border-b border-gray-200">{index + 1}</td>
                          <td className="p-4 border-b border-gray-200">{book.course}</td>
                          <td className="p-4 border-b border-gray-200">{book.titles}</td>
                          <td className="p-4 border-b border-gray-200">{book.volumes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Reading Materials */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Other Reading Materials</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <table className="w-full">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-4 text-left">Sr. No</th>
                        <th className="p-4 text-left">Items</th>
                        <th className="p-4 text-left">Volumes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libraryCollection.otherMaterials.map((material, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 border-b border-gray-200">{index + 1}</td>
                          <td className="p-4 border-b border-gray-200">{material.item}</td>
                          <td className="p-4 border-b border-gray-200">{material.volumes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-bold text-secondary mb-4">Newspapers Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {libraryCollection.newspapers.map((paper, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="text-lg font-semibold text-secondary">{paper.count}</div>
                      <div className="text-sm text-gray-600">{paper.language} Newspapers</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timing Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Library Timing</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Working Hours</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.regular}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.readingRoom}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Library Closed On</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="text-lg font-semibold text-gray-800">{libraryCollection.timing.closed}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Library Services & Facilities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Library Services</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Facilities</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.facilities.map((facility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3">✓</span>
                          <span className="text-gray-700">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Library Policies</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">General Policies</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.policies.general.map((policy, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-3">•</span>
                          <span className="text-gray-700">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Borrowing Policies</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      {libraryCollection.policies.borrowing.map((policy, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-3">•</span>
                          <span className="text-gray-700">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* E-Content Tab Content */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Electronic Databases</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Keeping in view the importance of research in the academic sector, the library has provided access to various electronic journal databases. These databases cater to the research needs of its patrons.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-4 text-left">Sr. No</th>
                      <th className="p-4 text-left">Database / OPAC / FTP / NDL / DELNET / WEB PORTAL</th>
                      <th className="p-4 text-left">URL's</th>
                    </tr>
                  </thead>
                  <tbody>
                    {libraryCollection.eContent.map((content, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 border-b border-gray-200">{index + 1}</td>
                        <td className="p-4 border-b border-gray-200 font-medium">{content.database}</td>
                        <td className="p-4 border-b border-gray-200 text-blue-600 break-all">
                          {content.url.startsWith('http') ? (
                            <a href={content.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {content.url}
                            </a>
                          ) : (
                            content.url
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeSection === "Transport" ? (
          // Transport-specific content
          <div className="max-w-full mx-auto px-6 py-10">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Transport @ ICEM</h2>
              
              {/* Route Layout Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Route Layout</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {["Route-Layout-1","Route-Layout-2", "Route-Layout-3", "Route-Layout-4", "Route-Layout-5"].map((item) => (
                    <div key={item} className=" rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-106  flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Transport Route ${item}`}
                          fill
                          className="object-contain h-auto"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Route {item}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Telephone Number</h4>
                    <p className="text-xl">{transportData.contact.telephone}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Mobile Number</h4>
                    <p className="text-xl">{transportData.contact.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Gym" ? (
          // Gym-specific content
          <div className="max-w-full mx-auto px-6 py-10">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Gymnasium @ ICEM</h2>
              
              {/* Gym Images Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Our Gym Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {["Gym1","Gym2","Gym3","Gym4","Gym5","Gym6","Gym7","Gym8","Gym10"].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-54 bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Gym Equipment ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment List */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Fully Equipped and Specious Gym with following machines
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gymData.equipment.map((equipment, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>
                <div className="text-center">
                  <p className="text-xl font-semibold mb-2">{gymData.contact.name}</p>
                  <p className="text-lg mb-2">{gymData.contact.designation}</p>
                  <p className="text-lg">Tel: {gymData.contact.telephone}</p>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Canteen" ? (
          // Canteen-specific content
          <div className="max-w-full mx-auto px-6 py-10">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Canteen @ ICEM</h2>
              
              {/* Canteen Images Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Our Canteen Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {["Canteen1","Canteen2","Canteen3","Canteen4","Canteen5","Canteen6"].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.jpg`}
                          alt={`Canteen ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                       
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 text-lg">
                  Our canteen offers a variety of delicious, hygienic, and affordable food options 
                  to cater to diverse tastes and dietary preferences of students and staff.
                </p>
              </div>
            </div>
          </div>
        ) : activeSection === "Primary Health Centre" ? (
          // Primary Health Centre-specific content
          <div className="max-w-full mx-auto px-6 py-10">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Primary Health Centre @ ICEM</h2>
              
              {/* Health Centre Images Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-secondary mb-6">Our Medical Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {["Indira_Primary_Health_Centre_1","Indira_Primary_Health_Centre_2","Indira_Primary_Health_Centre_3","Indira_Primary_Health_Centre_4"].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Health Centre ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    {healthCentreData.description}
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Services Provided</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {healthCentreData.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Hostel" ? (
          // Hostel-specific content
          <div className="max-w-full mx-auto px-6 py-10 space-y-12">
            {/* Overview Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Hostel @ ICEM</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Girls Hostel</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{hostelData.overview.capacity.girls}</div>
                  <p className="text-gray-700">Seats Available</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Boys Hostel</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{hostelData.overview.capacity.boys}</div>
                  <p className="text-gray-700">Seats Available</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {hostelData.overview.description} All rooms are equipped with:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hostelData.overview.roomFacilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Hostel Management Team</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Designation</th>
                      <th className="p-4 text-left">Contact</th>
                      <th className="p-4 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostelData.managementTeam.map((staff, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 border-b border-gray-200">{staff.name}</td>
                        <td className="p-4 border-b border-gray-200">{staff.designation}</td>
                        <td className="p-4 border-b border-gray-200">{staff.contact}</td>
                        <td className="p-4 border-b border-gray-200 text-blue-600">{staff.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-6">Mess (Canteen) Team</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Designation</th>
                      <th className="p-4 text-left">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostelData.messTeam.map((staff, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 border-b border-gray-200">{staff.name}</td>
                        <td className="p-4 border-b border-gray-200">{staff.designation}</td>
                        <td className="p-4 border-b border-gray-200">{staff.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Hostel Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostelData.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Hostel Timings</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  {hostelData.timings.map((timing, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-gray-700">{timing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-xl font-bold text-secondary mb-4">Mess Timings</h4>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {hostelData.messTimings.map((timing, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-gray-800">{timing}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Documents Required for Admission</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">{index + 1}.</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Rules Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Hostel Admission Cancellation Rules</h3>
              <div className="space-y-6">
                {hostelData.cancellationRules.map((rule, index) => (
                  <div key={index} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-bold text-red-800 mb-3">{rule.title}</h4>
                    <ul className="space-y-2">
                      {rule.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-green-800 mb-3">Security Deposit Refund</h4>
                <ul className="space-y-2">
                  {hostelData.securityDeposit.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mess Instructions Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Canteen (Mess) Instructions</h3>
              <div className="bg-orange-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.messInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medical Assistance Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Medical Assistance & Insurance</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.medicalAssistance.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Default content for other tabs
          <div className="max-w-full mx-auto px-6 py-10">
            <div className="w-full bg-white p-8 rounded-xl shadow-md text-center">
              <h2 className="text-3xl font-bold text-secondary mb-6">{activeSection} @ ICEM</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Content for {activeSection} section is being updated. Please check back later for detailed information about our {activeSection.toLowerCase()} facilities and services.
                </p>
                <div className="mt-6 text-gray-500">
                  <p>For immediate assistance, please contact the administration office.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-smoothScroll {
          animation: smoothScroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}