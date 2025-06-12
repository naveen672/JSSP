import { Bell, Calendar, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

export default function NewsTicker() {
  const { data: news } = useQuery<any[]>({
    queryKey: ["/api/news"],
  });

  const getIcon = (category: string) => {
    switch (category) {
      case "Academic":
        return Calendar;
      case "Achievements":
        return Trophy;
      default:
        return Bell;
    }
  };

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
              {news && news.length > 0 ? (
                news.map((article: any) => {
                  const IconComponent = getIcon(article.category);
                  return (
                    <span key={article.id} className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{article.title}</span>
                    </span>
                  );
                })
              ) : (
                <span className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Welcome to JSS Polytechnic - Excellence in Technical Education</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}