import Hero from "@/components/client/HomePage/Hero";
import BestSellingTour from "@/components/client/HomePage/BestSellingTour";
import AboutSection from "@/components/client/HomePage/AboutSection";
import TopPickPackageSection from "@/components/client/HomePage/TopPickPackageSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellingTour />
      <AboutSection />
      <TopPickPackageSection />
    </>
  );
}
