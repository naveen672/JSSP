import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

interface NewsTickerProps {
  news: string[];
}

export default function NewsTicker({ news }: NewsTickerProps) {
  // Duplicate news items to ensure smooth infinite scrolling
  const duplicatedNews = [...news, ...news];
  
  return (
    <div className="bg-gradient-to-r from-primary via-primary/95 to-primary text-white py-3 overflow-hidden shadow-md relative border-y border-white/10">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 flex items-center relative z-10">
        {/* Styled bell icon container */}
        <div className="mr-4 p-2 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner border border-white/10">
          <Bell className="h-5 w-5 text-white animate-pulse flex-shrink-0" />
        </div>
        
        {/* Latest Updates Label */}
        <div className="mr-6 bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm hidden sm:block shadow-sm border border-white/10">
          <span className="text-sm font-bold tracking-wide">Latest Updates</span>
        </div>
        
        {/* Scrolling news items */}
        <div className="relative overflow-hidden flex-1">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {duplicatedNews.map((item, index) => (
              <span key={index} className="inline-block mr-16 flex items-center">
                <span className="inline-flex items-center">
                  <span className="h-1.5 w-1.5 bg-white/70 rounded-full mr-2.5"></span>
                  <span className="text-white font-semibold tracking-wide text-shadow-sm">{item}</span>
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
