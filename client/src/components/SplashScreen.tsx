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
        <div className="w-64 h-auto bg-white p-4 rounded-lg flex items-center justify-center">
          <img 
            src="/jsslogo.png" 
            alt="JSS Polytechnic Logo" 
            className="w-full h-auto" 
          />
        </div>
      </motion.div>
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
