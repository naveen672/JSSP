import { Bell, Calendar, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsTicker() {
  return (
    <motion.div 
      className="bg-primary text-white py-3 overflow-hidden border-b border-primary-dark"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <motion.div 
            className="flex items-center space-x-2 mr-8 flex-shrink-0 bg-primary z-10 pr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bell className="h-4 w-4 text-accent" />
            </motion.div>
            <span className="text-sm text-accent whitespace-nowrap font-bold">Latest News:</span>
          </motion.div>
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-12 text-sm whitespace-nowrap animate-ticker ml-4">
              <span className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Admissions open for 2023-24 academic year</span>
              </span>
              <span className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-accent flex-shrink-0" />
                <span>JSS Polytechnic wins Best Technical Institution Award</span>
              </span>
              <span className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Graduation ceremony scheduled for May 15th</span>
              </span>
              <span className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-accent flex-shrink-0" />
                <span>New Computer Science lab inaugurated by Education Minister</span>
              </span>
              <span className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-accent flex-shrink-0" />
                <span>100% placement record for the 5th consecutive year</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}