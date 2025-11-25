import Image from "next/image";
import Typingsection from "@/components/PlacementComponents/TypingSection";
import CASsection from "@/components/PlacementComponents/CASection";
import TrainingOverview from "@/components/PlacementComponents/TrainingOverview";
import Impact from "@/components/PlacementComponents/Impact";
import Companies from "@/components/PlacementComponents/Companies";
import ResearchLab from "@/components/PlacementComponents/ResearchLab";
import Career from "@/components/PlacementComponents/Career";
import Testimonials from "@/components/PlacementComponents/Testimonials";
import PlacementInformation from "@/components/PlacementComponents/PlacementInformation";
import Upskilling from "@/components/PlacementComponents/Upskilling";
import PlacementCarousel from "@/components/PlacementComponents/PlacementCarousel";
import RecruitersSection from "@/components/home/RecruiterSection";
import PlacementRecords from "@/components/PlacementComponents/PlacementRecords";
import PlacementOrientation from "@/components/PlacementComponents/PlacementOrientation";
import PlacementIndustryVisit from "@/components/PlacementComponents/PlacementIndustryVisit";
import PlacementCell from "@/components/PlacementComponents/PlacementCell";

function Placement() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/PlacementBanner1.jpg"
          alt="Placement Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* <PlacementCarousel/> */}
      {/* <Typingsection /> */}
      <Impact />
      <RecruitersSection />
      {/* <ResearchLab />  */}
      <Career />
      <CASsection />
      <PlacementRecords />
      <PlacementOrientation />
      <PlacementIndustryVisit />
      <PlacementCell />
      {/* <Companies /> */}

      {/* <TrainingOverview /> */}
      {/* <Upskilling /> */}
      {/* <Testimonials /> */}
      {/* <PlacementInformation />  */}
    </div>
  );
}

export default Placement;
