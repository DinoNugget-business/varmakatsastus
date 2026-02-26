import HeroSection from "@/components/sections/HeroSection";
import InfoStrip from "@/components/sections/InfoStrip";
import PopularOffers from "@/components/sections/PopularOffers";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CertificationsBar from "@/components/sections/CertificationsBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoStrip />
      <PopularOffers />
      <ServicesOverview />
      <TestimonialsSection />
      <CertificationsBar />
    </>
  );
}
