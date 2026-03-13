import Hero from "@/components/sections/Hero";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustSignals from "@/components/sections/TrustSignals";
import BrandTicker from "@/components/sections/BrandTicker";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <ServicesOverview />
      <HowItWorks />
      <TrustSignals />
      <BrandTicker />
      <CtaBanner />
    </>
  );
}
