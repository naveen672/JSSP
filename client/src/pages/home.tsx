import HeroSection from "@/components/home/hero-section";
import StatsCounter from "@/components/home/stats-counter";
import NewsTicker from "@/components/home/news-ticker";
import AboutJSS from "@/components/home/about-jss";
import VideoShowcase from "@/components/home/video-showcase";
import IndustryPartners from "@/components/home/industry-partners";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useEffect } from "react";

export default function Home() {
  const incrementVisitor = useMutation({
    mutationFn: () => apiRequest("POST", "/api/visitor-count"),
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
      <VideoShowcase />
      <IndustryPartners />
    </div>
  );
}
