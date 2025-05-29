import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import NewsTicker from "@/components/home/news-ticker";
import AboutJSS from "@/components/home/about-jss";
import DepartmentCards from "@/components/home/department-cards";
import FacultyHighlights from "@/components/home/faculty-highlights";
import FacilitiesShowcase from "@/components/home/facilities-showcase";
import NewsSection from "@/components/home/news-section";

export default function Home() {
  return (
    <div className="w-full">
      <NewsTicker />
      <HeroSection />
      <StatsCounter />
      <AboutJSS />
      <DepartmentCards />
      <FacultyHighlights />
      <FacilitiesShowcase />
      <NewsSection />
    </div>
  );
}
