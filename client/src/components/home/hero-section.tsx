import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, ArrowRight, Play, ChevronLeft, ChevronRight, Building, TreePine, Shield } from "lucide-react";
import campusImage1 from "@assets/45-scaled.jpg";
import campusImage2 from "@assets/jssbuild1.jpg";
import campusImage3 from "@assets/b1.jpg";

const slides = [
  {
    title: "Welcome to JSS Polytechnic",
    description: "A premier institution dedicated to technical excellence and innovation",
    buttons: [
      { text: "Apply Now", icon: GraduationCap, primary: true },
      { text: "Learn More", icon: ArrowRight, primary: false }
    ],
    image: campusImage1
  },
  {
    title: "State-of-the-Art Campus",
    description: "Modern infrastructure and facilities for comprehensive technical education",
    buttons: [
      { text: "Campus Tour", icon: Building, primary: true },
      { text: "Our Facilities", icon: Play, primary: false }
    ],
    image: campusImage2
  },
  {
    title: "Excellence in Technical Education",
    description: "JSS Polytechnic - Building futures through quality education since decades",
    buttons: [
      { text: "Explore Programs", icon: GraduationCap, primary: true },
      { text: "Student Life", icon: Users, primary: false }
    ],
    image: campusImage3
  },
  {
    title: "NCC and Extracurricular Activities",
    description: "Comprehensive development through various non-academic programs and activities",
    buttons: [
      { text: "Join Activities", icon: Shield, primary: true },
      { text: "NCC at JSS", icon: Users, primary: false }
    ],
    image: campusImage1
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden h-96 lg:h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url('${slides[currentSlide].image}')`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl mb-8 opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].buttons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <Button 
                      key={index}
                      size="lg" 
                      className={button.primary 
                        ? "bg-accent text-primary hover:bg-yellow-300 font-semibold flex items-center space-x-2"
                        : "border-2 border-white text-white hover:bg-white hover:text-primary font-semibold flex items-center space-x-2"
                      }
                      variant={button.primary ? "default" : "outline"}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{button.text}</span>
                    </Button>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
