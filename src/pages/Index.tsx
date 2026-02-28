import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturedMediaSection from "@/components/FeaturedMediaSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
// import AwardsSection from "@/components/AwardsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
// import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import VideoGallery from "@/components/VideoGallery";
import AwardPage from "@/components/AwardPage";
import BookingSection from "@/components/BookingSection";

// import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => (
  <>
    <StickyHeader />
    <HeroSection />
    <TrustSection />
    <FeaturedMediaSection />
    <VideoGallery />
    <CaseStudiesSection />
    <AwardPage />
    {/* <AwardsSection /> */}
    <WhatYouGetSection />
    {/* <WhoIsThisForSection /> */}
    <WhyChooseSection />
    <TestimonialsSection />
    <BookingSection />
    <FinalCTASection />
    {/* <WhatsAppButton /> */}
    <footer className="bg-navy-deep border-t border-border py-8 text-center">
      <p className="text-muted-foreground text-sm">
        © 2026 AdBullet.co.in – All Rights Reserved
      </p>
    </footer>
  </>
);

export default Index;
