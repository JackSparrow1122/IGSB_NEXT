import ScrollCrushWrapper from "@/components/ScrollCrushWrapper";

import HeroSlider from "@/components/home/HeroSlider";
import ExploreSection from "@/components/home/ExploreSection";
import DiscoverPaths from "@/components/home/DiscoverPaths";
import AcademicYearSection from "@/components/home/AcademicYearSection";
import RecruitersSection from "@/components/home/RecruiterSection";
import EnergyInnovation from "@/components/home/EnergyInnovation";
import CollegeUnplugged from "@/components/home/CollegeUnplugged";
import EventsSection from "@/components/home/EventSection";
import CTASection from "@/components/home/CTASection";
import InstagramMosaic from "@/components/home/InstagramMosaic";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollCrushWrapper Hero={<HeroSlider />}>
        <ExploreSection />
        <DiscoverPaths />
        <AcademicYearSection />
        <RecruitersSection />
        <EnergyInnovation />
        <CollegeUnplugged />
        <EventsSection />
        <CTASection />
      </ScrollCrushWrapper>
      <InstagramMosaic />
    </div>
  );
}
