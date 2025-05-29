import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Handshake, MapPin } from "lucide-react";

export default function JSSCollaborationMOUs() {
  const mousByDepartment = [
    {
      department: "Mechanical Engineering",
      icon: "⚙️",
      companies: [
        { name: "KGTTI", location: "Mysuru" },
        { name: "Flow & Force Engineers", location: "Bengaluru" },
        { name: "GTTC", location: "Mysuru" },
        { name: "VIDYUT Automation", location: "Mysuru" },
        { name: "IRobo Automations Pvt.Ltd", location: "Mysuru" }
      ]
    },
    {
      department: "Electronics & Communication Engineering",
      icon: "📡",
      companies: [
        { name: "Ultismart Infotech LLP", location: "Mysuru" },
        { name: "IQuest Technologies", location: "Mysuru" },
        { name: "MARCONICS Technologies", location: "Mysuru" },
        { name: "KGTTI", location: "Mysuru" }
      ]
    },
    {
      department: "Computer Science & Engineering",
      icon: "💻",
      companies: [
        { name: "Diliber Foundation", location: "" },
        { name: "StormX Technologies Pvt Ltd", location: "" },
        { name: "Sai Sofsol", location: "Hebbal Industrial Area Mysuru" },
        { name: "Ecclesia Advanced Computer Technology", location: "Mysuru" },
        { name: "MyViz", location: "Mysuru" },
        { name: "Jupiter King Infotech", location: "Srirampura, Mysuru" }
      ]
    },
    {
      department: "Mechatronics Engineering",
      icon: "🤖",
      companies: [
        { name: "BDS Enterprises", location: "Mysuru" },
        { name: "KGTTI", location: "Mysuru" },
        { name: "GTTC", location: "Mysuru" }
      ]
    },
    {
      department: "Electrical & Electronics Engineering",
      icon: "⚡",
      companies: [
        { name: "Vidyut Automation", location: "Mysuru" },
        { name: "Sri Sai Enterprises", location: "Hebbal, Mysuru" }
      ]
    },
    {
      department: "Civil Engineering",
      icon: "🏗️",
      companies: [
        { name: "CAD DESK", location: "" }
      ]
    }
  ];

  const totalMOUs = mousByDepartment.reduce((total, dept) => total + dept.companies.length, 0);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">JSS Collaboration MOUs</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Strategic partnerships with industry leaders for placement and training opportunities across all engineering departments.
          </p>
        </div>
      </section>

      {/* Overview Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">{totalMOUs}</div>
                <div className="text-gray-700">Total MOUs Signed</div>
                <div className="text-sm text-gray-600 mt-2">Across all departments</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-gray-700">Engineering Departments</div>
                <div className="text-sm text-gray-600 mt-2">With industry partnerships</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-700">Department Coverage</div>
                <div className="text-sm text-gray-600 mt-2">All departments have MOUs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOU Purpose */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-center justify-center">
                  <Handshake className="h-6 w-6 text-accent" />
                  <span>MOUs Signed in Support of Placement and Training Ventures</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  JSS Polytechnic has established strategic partnerships with leading companies and industries 
                  across various sectors to enhance placement opportunities and provide practical training 
                  experiences for our students. These Memorandums of Understanding (MOUs) ensure industry-relevant 
                  education and smooth transition from academics to professional careers.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <Users className="h-8 w-8 text-accent mx-auto" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Training Programs</h3>
                    <p className="text-sm text-gray-600">Industry-specific skill development and hands-on training</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <Building2 className="h-8 w-8 text-accent mx-auto" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Placement Support</h3>
                    <p className="text-sm text-gray-600">Direct recruitment opportunities and career placements</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <Handshake className="h-8 w-8 text-accent mx-auto" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Industry Collaboration</h3>
                    <p className="text-sm text-gray-600">Knowledge exchange and technology transfer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department-wise MOUs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Department-wise Industry Partnerships</h2>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {mousByDepartment.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <span className="text-2xl">{dept.icon}</span>
                    <div>
                      <span className="text-xl">{dept.department}</span>
                      <Badge className="ml-3">{dept.companies.length} MOUs</Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.companies.map((company, compIndex) => (
                      <div key={compIndex} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-primary mb-2">{company.name}</h3>
                        {company.location && (
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>{company.location}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Impact */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Industry Partnerships</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Direct placement opportunities with partner companies</li>
                    <li>• Industry-relevant training and skill development</li>
                    <li>• Exposure to real-world projects and technologies</li>
                    <li>• Internship opportunities during academic programs</li>
                    <li>• Enhanced employability and career prospects</li>
                    <li>• Networking opportunities with industry professionals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>For Industry Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Access to skilled and trained engineering graduates</li>
                    <li>• Opportunity to shape curriculum according to industry needs</li>
                    <li>• Cost-effective recruitment from qualified talent pool</li>
                    <li>• Collaboration on research and development projects</li>
                    <li>• Knowledge exchange and technology transfer</li>
                    <li>• Corporate social responsibility fulfillment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Partnership Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Training Ventures</h3>
                    <p className="text-sm text-gray-600">
                      Specialized training programs designed to meet industry requirements and 
                      enhance student competencies in emerging technologies.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Placement Support</h3>
                    <p className="text-sm text-gray-600">
                      Direct recruitment drives, campus interviews, and placement assistance 
                      to ensure smooth transition from academics to industry.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-primary mb-2">Skill Development</h3>
                    <p className="text-sm text-gray-600">
                      Continuous skill enhancement programs, workshops, and certification 
                      courses aligned with current industry standards.
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