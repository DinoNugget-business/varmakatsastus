import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import TrustSignals from "@/components/sections/TrustSignals";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <BrandsCarousel />
      <TrustSignals />
      <CtaBanner />
    </>
  );
}
