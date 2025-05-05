import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

interface NewsTickerProps {
  news: string[];
}

export default function NewsTicker({ news }: NewsTickerProps) {
  // Duplicate news items to ensure smooth infinite scrolling
  const duplicatedNews = [...news, ...news];
  
  return (
    <div className="bg-primary-dark text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        {/* Single bell icon on the left */}
        <Bell className="mr-3 h-5 w-5 text-secondary animate-pulse flex-shrink-0" />
        
        {/* Scrolling news items */}
        <div className="relative overflow-hidden flex-1">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedNews.map((item, index) => (
              <span key={index} className="inline-block mr-8 flex items-center">
                <span className="text-white font-medium">{item}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
