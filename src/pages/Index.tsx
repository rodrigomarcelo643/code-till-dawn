import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RulesSection from "@/components/RulesSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import JudgesSection from "@/components/JudgesSection";
import WinnersSection from "@/components/WinnersSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RulesSection />
      <TimelineSection />
      <FAQSection />
      <JudgesSection />
      <WinnersSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
