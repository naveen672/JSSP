import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building } from "lucide-react";

export default function CivilProfessionalBodies() {
  const professionalBodies = [
    {
      society: "THE INSTITUTE OF ENGINEERING KOLKATA",
      member: "ROOPESH KUMAR B",
      events: "–"
    },
    {
      society: "INDIAN SOCIETY OF TECHNICAL EDUCATION",
      member: "JSS POLYTECHNIC, MYSURU",
      events: "NATIONAL SEMINAR ON EMERGING TECHNOLOGIES IN ENGINEERING FIELD"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Civil Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Events</p>
            <p className="text-lg text-blue-200">
              Department of Civil Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Society Memberships</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Civil Engineering department maintains active memberships with prestigious professional 
              societies and organizes technical seminars to advance civil engineering education and practice.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Bodies Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Professional Societies & Events
              </CardTitle>
              <p className="text-gray-600">
                Professional society memberships and technical events organized by the Civil Engineering department
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        PROFESSIONAL SOCIETIES REGISTERED
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        MEMBER
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        EVENTS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {professionalBodies.map((body, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {body.society}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {body.member}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {body.events === "–" ? (
                            <span className="text-gray-500">–</span>
                          ) : (
                            <Badge className="bg-primary text-white">
                              {body.events}
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Bodies Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Society Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Institute of Engineering, Kolkata</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Member:</strong> Roopesh Kumar B</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> Individual Faculty Membership</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Professional engineering standards and practices</p>
                  <p className="text-sm text-gray-700"><strong>Benefits:</strong> Access to technical resources and professional networking</p>
                  <p className="text-sm text-gray-700"><strong>Status:</strong> Active membership maintained</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Indian Society of Technical Education (ISTE)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Member:</strong> JSS Polytechnic, Mysuru</p>
                  <p className="text-sm text-gray-700"><strong>Type:</strong> Institutional Membership</p>
                  <p className="text-sm text-gray-700"><strong>Key Event:</strong> National Seminar on Emerging Technologies</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Technical education advancement in engineering field</p>
                  <p className="text-sm text-gray-700"><strong>Impact:</strong> Knowledge sharing and innovation promotion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="h-6 w-6 mr-3 text-primary" />
                  National Seminar on Emerging Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Event Details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Title:</strong> National Seminar on Emerging Technologies in Engineering Field</li>
                      <li><strong>Organizer:</strong> JSS Polytechnic, Mysuru</li>
                      <li><strong>Department:</strong> Civil Engineering</li>
                      <li><strong>Level:</strong> National</li>
                      <li><strong>Professional Body:</strong> ISTE Collaboration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Focus Areas</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Latest technologies in civil engineering</li>
                      <li>• Sustainable construction practices</li>
                      <li>• Digital transformation in construction</li>
                      <li>• Innovation in structural engineering</li>
                      <li>• Environmental engineering solutions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Objective:</strong> The seminar aims to bring together academicians, researchers, and industry experts 
                    to discuss emerging technologies and their applications in the engineering field, with special emphasis on 
                    civil engineering innovations and sustainable practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Professional Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Faculty membership in The Institute of Engineering, Kolkata 
                  demonstrates commitment to professional engineering standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">ISTE Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Institutional membership with ISTE enables participation in 
                  national technical education initiatives and seminars.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Knowledge Sharing</h3>
                <p className="text-gray-600 text-sm">
                  National seminars and technical events promote knowledge 
                  exchange in emerging civil engineering technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Civil Engineering Focus Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Specializations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Structural Engineering</h4>
                <p className="text-xs text-gray-600">Design and analysis of buildings and infrastructure</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Construction Technology</h4>
                <p className="text-xs text-gray-600">Modern construction methods and materials</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Environmental Engineering</h4>
                <p className="text-xs text-gray-600">Sustainable and eco-friendly solutions</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Transportation Engineering</h4>
                <p className="text-xs text-gray-600">Highway and traffic engineering systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Engagement</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-sm text-gray-600">Professional Societies</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-sm text-gray-600">Faculty Member</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-sm text-gray-600">National Seminar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Department Contact</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Department of Civil Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                    <p className="mt-2">Professional Bodies Coordinator: Roopesh Kumar B</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For professional society activities and technical seminars, contact the department office
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}