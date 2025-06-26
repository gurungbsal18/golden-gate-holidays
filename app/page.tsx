import Hero from "@/components/client/HomePage/Hero";
import BestSellingTour from "@/components/client/HomePage/BestSellingTour";
import AboutSection from "@/components/client/HomePage/AboutSection";
import TopPickPackageSection from "@/components/client/HomePage/TopPickPackageSection";
import DepartureDateSection from "@/components/client/HomePage/DepartureDateSection";
import AccomplishmentSection from "@/components/client/HomePage/AccomplishmentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellingTour />
      <AboutSection />
      <TopPickPackageSection />
      <DepartureDateSection />
      <AccomplishmentSection />
    </>
  );
}
