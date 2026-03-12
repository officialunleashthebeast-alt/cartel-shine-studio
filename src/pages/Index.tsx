import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationSection from "@/components/TransformationSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BookingSection from "@/components/BookingSection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DemoBanner />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TransformationSection />
      <WhyChooseSection />
      <BookingSection />
      <ReviewsSection />
      <MapSection />
      <FooterSection />
    </div>
  );
};

export default Index;
