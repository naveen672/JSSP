import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import HeroSlideshow from '@/components/HeroSlideshow';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

import { 
  newsItems, 
  heroSlides, 
  programs, 
  aboutInfo, 
  facilities, 
  testimonials, 
  ctaInfo 
} from '@/data/collegeData';

import { 
  Monitor, 
  FlaskConical, 
  BookOpen, 
  Volleyball 
} from 'lucide-react';

// Map the facility icon string to a component
const getFacilityIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'computer': <Monitor className="text-3xl" />,
    'science': <FlaskConical className="text-3xl" />,
    'library': <BookOpen className="text-3xl" />,
    'sports': <Volleyball className="text-3xl" />
  };
  
  return iconMap[iconName] || <Monitor className="text-3xl" />;
};

export default function Home() {
  // Add icons to facilities
  const facilitiesWithIcons = facilities.map(facility => ({
    ...facility,
    icon: getFacilityIcon(facility.iconName)
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      <HeroSlideshow slides={heroSlides} />
      <ProgramsSection programs={programs} />
      <AboutSection {...aboutInfo} />
      <FacilitiesSection facilities={facilitiesWithIcons} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection {...ctaInfo} />
      <Footer />
    </div>
  );
}
