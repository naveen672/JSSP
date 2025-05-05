import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Award, Check } from 'lucide-react';

export default function NBA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 drop-shadow-sm">NBA Accreditation</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="text-white/50">•</span>
            <span className="font-medium">NBA Accreditation</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mb-4 shadow-sm">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a2542] mb-4">
                National Board of Accreditation (NBA)
              </h2>
              <p className="text-lg lead font-semibold text-[#1a2542] max-w-2xl mx-auto border-l-4 pl-4 py-1 border-primary/30 bg-primary/5 rounded-r-md">
                JSS Polytechnic proudly announces that following Six Programs of the Polytechnic have been accredited by NBA for three years (AY 2024-25, 2025-26 & 2026-27).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Civil Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Electronic and Communication Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Electrical and Electronics Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Computer Science and Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Mechatronics Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-1 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2542]">Mechanical Engineering</h3>
                  <p className="text-sm text-[#1a2542]/80 font-medium">Accredited for 3 years</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-base text-[#1a2542]/80 font-medium italic border-t border-primary/10 pt-4 max-w-xl mx-auto">
                The NBA accreditation recognizes the quality and standards of education provided by JSS Polytechnic, reflecting our commitment to academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}