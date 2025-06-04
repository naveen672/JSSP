import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Calendar, BookOpen, Download, FileText, Trophy, Phone, Building } from "lucide-react";
import nbaPdf from "@assets/JSS-Polytechnic-Karnataka24_9_2024_14_42_50.pdf";

export default function NBA() {
  const accreditedPrograms = [
    {
      id: 1,
      name: "Civil Engineering",
      icon: "🏗️",
      accredited: true
    },
    {
      id: 2,
      name: "Electronic and Communication Engineering",
      icon: "📡",
      accredited: true
    },
    {
      id: 3,
      name: "Electrical and Electronics Engineering",
      icon: "⚡",
      accredited: true
    },
    {
      id: 4,
      name: "Computer Science and Engineering",
      icon: "💻",
      accredited: true
    },
    {
      id: 5,
      name: "Mechatronics Engineering",
      icon: "🤖",
      accredited: true
    },
    {
      id: 6,
      name: "Mechanical Engineering",
      icon: "⚙️",
      accredited: true
    }
  ];

  const accreditationYears = ["AY 2024-25", "2025-26", "2026-27"];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">NBA Accreditation</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            National Board of Accreditation recognition for academic excellence and quality assurance in technical education.
          </p>
        </div>
      </section>

      {/* NBA Achievement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg mb-8">
              <Award className="h-16 w-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">Proud Achievement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                JSS Polytechnic proudly announces that following Six Programs of the Polytechnic has been 
                accredited by NBA for three years (AY 2024-25, 2025-26 & 2026-27).
              </p>
              <div className="flex items-center justify-center">
                <a 
                  href={nbaPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download NBA Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accredited Programs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NBA Accredited Programs</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {accreditedPrograms.map((program) => (
                <Card key={program.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{program.icon}</div>
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <Badge className="bg-green-100 text-green-800">NBA Accredited</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{program.name}</h3>
                    <p className="text-sm text-gray-600">Accredited for 3 years (2024-27)</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span>Accreditation Period</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4 mb-6">
                  {accreditationYears.map((year, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-lg">
                      {year}
                    </Badge>
                  ))}
                </div>
                <div className="text-center bg-accent/10 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    All six engineering programs have received NBA accreditation for a consecutive three-year period, 
                    demonstrating our commitment to maintaining the highest standards of technical education.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About NBA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About NBA Accreditation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span>What is NBA?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The National Board of Accreditation (NBA) is a premier accreditation body in India that 
                    evaluates and accredits technical education programs to ensure quality and standards.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Established by AICTE</li>
                    <li>• Autonomous body for quality assurance</li>
                    <li>• International recognition</li>
                    <li>• Continuous improvement focus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>Benefits of NBA Accreditation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    NBA accreditation provides numerous advantages for students, faculty, and the institution.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Enhanced global recognition</li>
                    <li>• Quality assurance certification</li>
                    <li>• Better placement opportunities</li>
                    <li>• International mobility for students</li>
                    <li>• Continuous quality improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Accreditation Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <h4 className="font-semibold text-primary">Curriculum Design</h4>
                    </div>
                    <p className="text-sm text-gray-600">Industry-relevant and outcome-based curriculum structure</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <h4 className="font-semibold text-primary">Faculty Excellence</h4>
                    </div>
                    <p className="text-sm text-gray-600">Qualified and experienced teaching faculty</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <h4 className="font-semibold text-primary">Infrastructure Quality</h4>
                    </div>
                    <p className="text-sm text-gray-600">Modern laboratories and learning facilities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Impact */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Impact of NBA Accreditation</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-700">Programs Accredited</div>
                <div className="text-sm text-gray-600 mt-2">All six engineering programs</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-gray-700">Years Validity</div>
                <div className="text-sm text-gray-600 mt-2">2024-25 to 2026-27</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-gray-700">Accredited Programs</div>
                <div className="text-sm text-gray-600 mt-2">Engineering disciplines</div>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                This achievement reflects our unwavering commitment to academic excellence, quality education, 
                and continuous improvement in technical education standards. NBA accreditation validates our 
                efforts in providing world-class engineering education to our students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}