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
      <div className="relative overflow-hidden">
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
              <Bell className="mr-2 h-5 w-5 text-secondary animate-pulse" /> <span className="text-white font-medium">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
