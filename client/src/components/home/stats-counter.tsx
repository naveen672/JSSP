import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

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
    { label: "Faculty", value: 800, suffix: "+" },
    { label: "Departments", value: 25, suffix: "" },
    { label: "Years Legacy", value: 59, suffix: "" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
