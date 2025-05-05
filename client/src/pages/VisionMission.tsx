import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Vision and Mission of the Institute</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid gap-10">
            {/* Vision Section */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold text-primary">Vision of the Institute</h2>
              </div>
              <p className="text-lg leading-relaxed ml-9">
                Vision of the institute to be recognized as a prestigious academic Centre for excellence in technical education and to meet the needs of Academia, Industry & Society.
              </p>
            </div>
            
            {/* Mission Section */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold text-primary">Mission of the Institute</h2>
              </div>
              <div className="space-y-4 ml-9">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <h3 className="font-semibold text-primary mb-2">M1</h3>
                  <p className="text-gray-700">
                    To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <h3 className="font-semibold text-primary mb-2">M2</h3>
                  <p className="text-gray-700">
                    To promote industry institutional collaboration through MOUs and internship programs.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <h3 className="font-semibold text-primary mb-2">M3</h3>
                  <p className="text-gray-700">
                    To infuse ethical and responsible engineering practices to create successful professionals.
                  </p>
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