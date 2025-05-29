import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import NewsTicker from "@/components/home/news-ticker";
import AboutJSS from "@/components/home/about-jss";
import FacultyHighlights from "@/components/home/faculty-highlights";
import IndustryPartners from "@/components/home/industry-partners";
import NewsSection from "@/components/home/news-section";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useEffect } from "react";

export default function Home() {
  const incrementVisitor = useMutation({
    mutationFn: () => apiRequest("/api/visitor-count", { method: "POST" }),
  });

  useEffect(() => {
    // Track visitor when component mounts
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      incrementVisitor.mutate();
      sessionStorage.setItem("visited", "true");
    }
  }, []);

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
