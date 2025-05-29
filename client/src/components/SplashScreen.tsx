import { motion } from 'framer-motion';
import Logo from './Logo';
import { ImageLoader } from './Images';

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
        <div className="w-auto h-auto bg-white p-5 rounded-lg flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-md">
              <ImageLoader src="/images/jssmvp.png" alt="JSS Mahavidyapeetha" className="h-16 w-16 rounded-full object-contain" />
            </div>
            <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-md">
              <ImageLoader src="/images/jsspoly.png" alt="JSS Polytechnic" className="h-16 w-16 rounded-full object-contain" />
            </div>
          </div>
          <h2 className="text-primary text-lg font-bold">JSS Polytechnic</h2>
          <p className="text-gray-600 text-xs">Mysuru, Est. 1986</p>
        </div>
      </motion.div>
      <p className="text-neutral-100 mt-2 text-sm">Providing technical education since 1986</p>
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
