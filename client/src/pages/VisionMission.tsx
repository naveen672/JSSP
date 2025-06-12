import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Target, Compass } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function VisionMission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "Vision & Mission", path: "/vision-mission" }
        ]} 
      />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Vision and Mission</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-lg md:text-xl text-[#1a2542] font-medium max-w-3xl mx-auto border-b-2 border-primary/20 pb-6 italic">
              Our Vision and Mission statements guide our path toward excellence in technical education, shaping our strategies and day-to-day activities with purpose and direction.
            </p>
          </div>
          
          <div className="grid gap-10">
            {/* Vision Section */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 transform -skew-y-12 scale-x-150 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0 shadow-sm">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary/70 uppercase tracking-wider text-center md:text-left">Our Vision</h4>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a2542] text-center md:text-left">Vision of the Institute</h2>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg shadow-sm border border-primary/10">
                  <p className="text-lg leading-relaxed text-[#1a2542] font-medium">
                    Vision of the institute to be recognized as a prestigious academic Centre for excellence in technical education and to meet the needs of Academia, Industry & Society.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission Section */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/5 transform skew-y-12 scale-x-150 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0 shadow-sm">
                    <Compass className="h-10 w-10 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary/70 uppercase tracking-wider text-center md:text-left">Our Mission</h4>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a2542] text-center md:text-left">Mission of the Institute</h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group hover:border-secondary/20 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-secondary/80"></div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm">
                        <span className="text-secondary font-bold">M1</span>
                      </div>
                      <div>
                        <p className="text-[#1a2542] font-medium">
                          To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group hover:border-secondary/20 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-secondary/80"></div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm">
                        <span className="text-secondary font-bold">M2</span>
                      </div>
                      <div>
                        <p className="text-[#1a2542] font-medium">
                          To promote industry institutional collaboration through MOUs and internship programs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group hover:border-secondary/20 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-secondary/80"></div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm">
                        <span className="text-secondary font-bold">M3</span>
                      </div>
                      <div>
                        <p className="text-[#1a2542] font-medium">
                          To infuse ethical and responsible engineering practices to create successful professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}