import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

interface NewsTickerProps {
  news: string[];
}

export default function NewsTicker({ news }: NewsTickerProps) {
  // Duplicate news items to ensure smooth infinite scrolling
  const duplicatedNews = [...news, ...news];
  
  return (
    <div className="bg-primary text-white py-3 overflow-hidden shadow-md relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90"></div>
      <div className="container mx-auto px-4 flex items-center relative z-10">
        {/* Styled bell icon container */}
        <div className="mr-4 p-1.5 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Bell className="h-5 w-5 text-white animate-pulse flex-shrink-0" />
        </div>
        
        {/* Latest Updates Label */}
        <div className="mr-6 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm hidden sm:block">
          <span className="text-sm font-semibold">Latest Updates</span>
        </div>
        
        {/* Scrolling news items */}
        <div className="relative overflow-hidden flex-1">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {duplicatedNews.map((item, index) => (
              <span key={index} className="inline-block mr-12 flex items-center">
                <span className="text-white font-medium">{item}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
