import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Users, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="bg-cover bg-center h-96 lg:h-[500px] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shaping Tomorrow's Leaders
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Excellence in Education, Innovation in Research, Excellence in Character Development
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-accent text-primary hover:bg-yellow-300 font-semibold flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Virtual Tour</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
