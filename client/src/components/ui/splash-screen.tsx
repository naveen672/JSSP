import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jssLogo1 from "@assets/image_1748508966675.png";
import jssLogo2 from "@assets/image_1748508969261.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const logos = [jssLogo1, jssLogo2];

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
    }, 1000);

    const timer = setTimeout(() => {
      clearInterval(logoInterval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(logoInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary/90 to-accent/20 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            key={currentLogoIndex}
            src={logos[currentLogoIndex]}
            alt="JSS Logo"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-lg text-white/80 mb-2">JSS MAHAVIDYAPEETHA</p>
          <h1 className="text-4xl font-bold text-white mb-4">JSS POLYTECHNIC</h1>
          <div className="text-white/90 mb-6 leading-relaxed">
            <p className="text-sm mb-1">JSS Technical Institutions' Campus, Mysuru - 570006.</p>
            <p className="text-sm mb-1">(Approved by Government of Karnataka & A.I.C.T.E. New Delhi)</p>
            <p className="text-sm">Phone: 0821 - 2548318 , E-mail: jssp418@yahoo.co.in</p>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              className="w-16 h-1 bg-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.8, duration: 2 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}