import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center">
      <motion.div 
        className="mb-6"
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      >
        <div className="w-24 h-24 rounded-full bg-white p-2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m0 2.18l6 3.27h-2.18l-3.82-2.09l-3.82 2.09H6l6-3.27m1 14.05l-5-2.73v-4.77L12 15l4-2.27v4.77l-3 1.73"/>
          </svg>
        </div>
      </motion.div>
      <motion.h1 
        className="text-white font-heading font-bold text-3xl md:text-4xl"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      >
        JSS POLYTECHNIC
      </motion.h1>
      <p className="text-neutral-100 mt-2 text-sm">Building tomorrow's leaders</p>
      <div className="mt-8">
        <motion.div 
          className="w-16 h-1 bg-secondary rounded-full"
          animate={{ 
            scaleX: [0.5, 1, 0.5],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        ></motion.div>
      </div>
    </div>
  );
}
