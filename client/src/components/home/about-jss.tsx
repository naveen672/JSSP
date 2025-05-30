import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, BookOpen } from "lucide-react";
import jssMainBuilding from "@assets/b1.jpg";

export default function AboutJSS() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About JSS Polytechnic</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JSS Polytechnic is a premier technical education institution committed to excellence in education, research, and innovation. 
            Established with a vision to nurture skilled technicians and engineers, we have been at the forefront of technical education for over three decades.
          </p>
        </div>

        {/* Campus Image */}
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={jssMainBuilding} 
              alt="JSS Polytechnic Main Building" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Vision of the Institute</h3>
              <p className="text-gray-600 leading-relaxed">
                Vision of the institute to be recognized as a prestigious academic Centre for excellence in 
                technical education and to meet the needs of Academia, Industry & Society.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Mission of the Institute</h3>
              <div className="space-y-3 text-gray-600 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M1:</span>
                  <span>To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M2:</span>
                  <span>To promote industry institutional collaboration through MOUs and internship programs.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M3:</span>
                  <span>To infuse ethical and responsible engineering practices to create successful professionals.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">30+ Years</h4>
              <p className="text-gray-600 text-sm">of Excellence in Education</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Experienced Faculty</h4>
              <p className="text-gray-600 text-sm">Dedicated to Student Success</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Industry Partnerships</h4>
              <p className="text-gray-600 text-sm">Strong Corporate Connections</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Modern Facilities</h4>
              <p className="text-gray-600 text-sm">State-of-the-art Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution is equipped with state-of-the-art facilities, experienced faculty, and strong industry connections 
            to provide students with a comprehensive learning experience that prepares them for successful careers.
          </p>
        </div>
      </div>
    </section>
  );
}