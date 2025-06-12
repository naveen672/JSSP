import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building, Calendar } from "lucide-react";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function StatCounter({ end, duration = 2000, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { data: stats } = useQuery({
    queryKey: ["/api/stats"],
  });

  const statsData = [
    { label: "Students", value: 15000, suffix: "+" },
    { label: "Faculty", value: 80, suffix: "+" },
    { label: "Departments", value: 7, suffix: "" },
    { label: "Years Legacy", value: 39, suffix: "" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary text-white p-3 rounded-full transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg">
                  {index === 0 && <Users className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />}
                  {index === 1 && <GraduationCap className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />}
                  {index === 2 && <Building className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />}
                  {index === 3 && <Calendar className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />}
                </div>
              </motion.div>
              <motion.div 
                className="text-4xl lg:text-5xl font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-accent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "bounce" }}
              >
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-gray-600 font-medium transition-all duration-300 group-hover:text-gray-800 group-hover:font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
