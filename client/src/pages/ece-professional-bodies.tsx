import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building } from "lucide-react";

export default function ECEProfessionalBodies() {
  const workshops = [
    {
      slNo: 1,
      workshop: "PCB Design & Fabrication",
      dateOfSanction: "April – 23",
      dateOfConduction: "13-5-2023",
      resourcePerson: "Vinay Y N Florence Technologies, Mysuru",
      semester: "IV",
      organized: "Sri B Parashiva Murthy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Electronics & Communication Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Workshops</p>
            <p className="text-lg text-blue-200">
              Department of Electronics & Communication Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Development Activities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Electronics & Communication Engineering department actively engages with professional bodies 
              and conducts specialized workshops to enhance student learning and industry readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                ISTE Sanctioned Workshops
              </CardTitle>
              <p className="text-gray-600">
                Workshops conducted in collaboration with the Indian Society for Technical Education (ISTE)
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        SL NO
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Workshop
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Date of Sanction from ISTE
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Date of Conduction
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Resource Person
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        SEM
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Organized
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((workshop, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {workshop.slNo}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {workshop.workshop}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {workshop.dateOfSanction}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {workshop.dateOfConduction}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {workshop.resourcePerson}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <Badge className="bg-primary text-white">
                            {workshop.semester}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {workshop.organized}
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

      {/* Key Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">ISTE Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Workshops sanctioned and supported by the Indian Society for Technical Education 
                  to enhance practical learning outcomes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Experts</h3>
                <p className="text-gray-600 text-sm">
                  Resource persons from leading technology companies provide hands-on training 
                  and real-world insights to students.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Practical Learning</h3>
                <p className="text-gray-600 text-sm">
                  Workshops focus on practical skills like PCB design and fabrication, 
                  preparing students for industry requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Workshop Highlights</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">PCB Design & Fabrication Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Workshop Details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Conducted:</strong> May 13, 2023</li>
                      <li><strong>Target Semester:</strong> IV Semester Students</li>
                      <li><strong>Resource Partner:</strong> Florence Technologies, Mysuru</li>
                      <li><strong>ISTE Sanction:</strong> April 2023</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Learning Outcomes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Hands-on PCB design techniques</li>
                      <li>• Modern fabrication processes</li>
                      <li>• Industry-standard tools and software</li>
                      <li>• Practical circuit implementation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Organized by:</strong> Sri B Parashiva Murthy, Department of Electronics & Communication Engineering
                  </p>
                </div>
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
                    <h3 className="font-semibold mb-2">Department of Electronics & Communication Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For workshop inquiries and professional body activities, contact the department office
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