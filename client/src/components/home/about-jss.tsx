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
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality technical education that bridges the gap between academic learning and industry requirements, 
                fostering innovation, creativity, and professional excellence among our students.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized institution that shapes competent technocrats and entrepreneurs who contribute 
                meaningfully to society through their technical expertise and ethical leadership.
              </p>
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