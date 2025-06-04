import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Compass, CheckCircle, Target, Award, Building, Phone } from "lucide-react";

export default function VisionMission() {
  const missionStatements = [
    {
      id: "M1",
      title: "Holistic Education",
      description: "To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process."
    },
    {
      id: "M2", 
      title: "Industry Collaboration",
      description: "To promote industry institutional collaboration through MOUs and internship programs."
    },
    {
      id: "M3",
      title: "Ethical Practices",
      description: "To infuse ethical and responsible engineering practices to create successful professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Vision Mission of the Institute</h1>
              <p className="text-xl text-blue-100">Guiding Principles for Academic Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-3xl">
                <Eye className="h-8 w-8 mr-3 text-primary" />
                Vision of the Institute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-primary/10 p-8 rounded-lg">
                <p className="text-lg text-gray-800 leading-relaxed font-medium text-center">
                  Vision of the institute to be recognized as a prestigious academic Centre for excellence 
                  in technical education and to meet the needs of Academia, Industry & Society.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Compass className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900">Mission of the Institute</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission statements define the strategic objectives that guide our educational approach and institutional development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {missionStatements.map((mission, index) => (
              <Card key={index} className="h-full shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{mission.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-primary">{mission.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{mission.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our vision and mission translate into specific focus areas that drive institutional excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Delivering state-of-the-art curriculum and effective teaching-learning processes 
                  for comprehensive technical education.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Partnership</h3>
                <p className="text-gray-600 text-sm">
                  Building strong industry-institutional collaborations through MOUs, 
                  internships, and practical exposure programs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Ethical Development</h3>
                <p className="text-gray-600 text-sm">
                  Instilling ethical and responsible engineering practices to develop 
                  well-rounded professionals for society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Strategy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we translate our vision and mission into actionable educational outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Academic Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Outcome-based curriculum design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Modern teaching methodologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Technical and non-technical program integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Continuous assessment and improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Industry Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic MOU partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Structured internship programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Industry expert guest lectures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Real-world project collaborations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More About Our Vision</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        JSS Polytechnic
                      </h3>
                      <p>Academic Office</p>
                      <p className="text-blue-100">Mysore-570 006, Karnataka</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: +91-821-2548318</p>
                      <p className="text-blue-100">Email: info@jssp.edu.in</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For more information about our vision and mission, contact the Academic Office
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}