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
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-2xl">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-4 text-lg"
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
                        className="bg-secondary hover:bg-secondary-dark text-white font-medium transition duration-300"
                        asChild
                      >
                        <a href={slide.primaryButton.url}>{slide.primaryButton.text}</a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white hover:text-primary"
                        asChild
                      >
                        <a href={slide.secondaryButton.url}>{slide.secondaryButton.text}</a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full focus:outline-none z-10">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full focus:outline-none z-10">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white focus:outline-none transition-opacity duration-300 ${
              current === index ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
