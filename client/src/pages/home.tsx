import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import NewsTicker from "@/components/home/news-ticker";
import AboutJSS from "@/components/home/about-jss";
import FacultyHighlights from "@/components/home/faculty-highlights";
import IndustryPartners from "@/components/home/industry-partners";
import NewsSection from "@/components/home/news-section";

export default function Home() {
  return (
    <div className="w-full">
      <NewsTicker />
      <HeroSection />
      <StatsCounter />
      <AboutJSS />
      <FacultyHighlights />
      <IndustryPartners />
      <NewsSection />
    </div>
  );
}
