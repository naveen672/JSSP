import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Radio, 
  Settings, 
  Users, 
  Calendar,
  User,
  MapPin,
  BookOpen,
  Award
} from "lucide-react";

export default function ElectronicsCommunication() {
  const workshopData = [
    {
      slNo: 1,
      workshop: "PCB Design & Fabrication",
      dateOfSanction: "April – 23",
      dateOfConduction: "13-5-2023",
      resourcePerson: "Vinay Y N Florence Technologies, Mysuru",
      semester: "IV",
      organizedBy: "Sri B Parashiva Murthy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Electronics & Communication Engineering</h1>
              <p className="text-xl text-blue-100">Connecting Innovation with Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Radio className="h-6 w-6 mr-3 text-primary" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Electronics & Communication Engineering department is dedicated to providing 
                  comprehensive education in the field of electronics, communication systems, and 
                  emerging technologies. Our curriculum focuses on both theoretical foundations 
                  and practical applications.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Advanced Electronics</h3>
                    <p className="text-sm text-gray-600">Modern electronic circuit design and analysis</p>
                  </div>
                  
                  <div className="text-center">
                    <Radio className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Communication Systems</h3>
                    <p className="text-sm text-gray-600">Digital and analog communication technologies</p>
                  </div>
                  
                  <div className="text-center">
                    <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Signal Processing</h3>
                    <p className="text-sm text-gray-600">Digital signal processing and embedded systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Bodies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 mr-3 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Professional Bodies</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our department actively collaborates with professional bodies to enhance student learning 
                through workshops, seminars, and industry interactions.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BookOpen className="h-6 w-6 mr-3 text-primary" />
                  ISTE Workshops & Training Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          SL NO
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Workshop
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Date of Sanction from ISTE
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Date of Conduction
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Resource Person
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          SEM
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Organized By
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workshopData.map((workshop, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            {workshop.slNo}
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="font-medium text-primary">{workshop.workshop}</div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              {workshop.dateOfSanction}
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              {workshop.dateOfConduction}
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-start">
                              <User className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">Vinay Y N</div>
                                <div className="text-sm text-gray-600 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  Florence Technologies, Mysuru
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <Badge variant="secondary">{workshop.semester}</Badge>
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-500" />
                              {workshop.organizedBy}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">About ISTE Collaboration</h4>
                      <p className="text-blue-700 text-sm">
                        The Indian Society for Technical Education (ISTE) collaboration enables our 
                        department to conduct industry-relevant workshops and training programs. 
                        These initiatives bridge the gap between academic learning and practical 
                        industry requirements, ensuring our students are well-prepared for 
                        professional challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Department Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Curriculum Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Industry-aligned curriculum with latest technologies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Hands-on laboratory experience
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Project-based learning approach
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Industry Connections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Professional body collaborations (ISTE)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Industry expert workshops
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Practical training programs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}