import { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Slide {
  image: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

interface HeroSlideshowProps {
  slides: Slide[];
}

export default function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="p-0">
              <div 
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                  <div className="text-white max-w-2xl z-10">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-4 text-lg md:text-xl drop-shadow-md font-medium text-white/90"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mt-8 flex flex-wrap gap-4"
                    >
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-primary/90 text-white font-bold shadow-lg hover:shadow-xl border-0 hover:translate-y-[-2px] transition-all duration-300"
                        asChild
                      >
                        <a href={slide.primaryButton.url} className="px-6">{slide.primaryButton.text}</a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:translate-y-[-2px]"
                        asChild
                      >
                        <a href={slide.secondaryButton.url} className="px-6">{slide.secondaryButton.text}</a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-primary/90 text-white p-3 rounded-full focus:outline-none z-10 shadow-md transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 border border-white/20">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-primary/90 text-white p-3 rounded-full focus:outline-none z-10 shadow-md transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 border border-white/20">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
              current === index 
                ? 'bg-gradient-to-r from-primary to-primary/90 shadow-md scale-125 border border-white/30' 
                : 'bg-white/70 hover:bg-white/90 hover:scale-110'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
