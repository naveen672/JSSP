import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building } from "lucide-react";

export default function CSProfessionalBodies() {
  const events = [
    {
      slNo: 1,
      event: "2 days workshop on \"Interview skills\"",
      date: "26/06/2022 & 30/06/2022",
      coordinator: "Sowmyashree HG",
      resourcePerson: "Saifsol, Mysuru",
      year: "2021-22"
    },
    {
      slNo: 2,
      event: "One week Student Development program on \"Laptop service and maintenance\"",
      date: "05/04/2023 & 12/04/2023",
      coordinator: "Somaprabha S",
      resourcePerson: "RadhaKrishan R & Madhu Kumar R, Delibir Foundation Mysuru",
      year: "2022-23"
    },
    {
      slNo: 3,
      event: "National level paper presentation",
      date: "24/05/2023",
      coordinator: "Somaprabha S",
      resourcePerson: "10 Students Present the papers from various polytechnic",
      year: "2022-23"
    },
    {
      slNo: 4,
      event: "State Level Faculty development program on \"Full Stack Development\"",
      date: "14/08/2023 & 19/08/2023",
      coordinator: "Lokesha KR, Sowmyashree HG",
      resourcePerson: "28 Faculties From government Aided and private polytechnic participated",
      year: "2023-24"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Computer Science & Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Technical Events</p>
            <p className="text-lg text-blue-200">
              Department of Computer Science & Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ISCE Approved Technical Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Computer Science & Engineering department organizes various technical events approved by ISCE 
              to enhance student skills and faculty development in emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Events Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                Technical Events by Academic Year
              </CardTitle>
              <p className="text-gray-600">
                ISCE approved technical events organized by the Department of Computer Science and Engineering
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
                        ISCE Approved Technical Event
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Date
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Coordinator from CS
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Resource Person / Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {event.slNo}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div>
                            <div className="font-medium">{event.event}</div>
                            <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700 border-blue-200">
                              {event.year}
                            </Badge>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {event.coordinator}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {event.resourcePerson}
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

      {/* Event Highlights by Year */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Highlights by Academic Year</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 2023-24 Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Academic Year 2023-24</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">State Level Faculty Development Program</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Topic:</strong> Full Stack Development</li>
                      <li><strong>Duration:</strong> 14/08/2023 to 19/08/2023</li>
                      <li><strong>Coordinators:</strong> Lokesha KR, Sowmyashree HG</li>
                      <li><strong>Participants:</strong> 28 Faculties from government, aided and private polytechnics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2022-23 Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Academic Year 2022-23</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Student Development Program</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Topic:</strong> Laptop Service and Maintenance</li>
                      <li><strong>Duration:</strong> One week program</li>
                      <li><strong>Coordinator:</strong> Somaprabha S</li>
                      <li><strong>Resource Persons:</strong> RadhaKrishan R & Madhu Kumar R</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">National Level Paper Presentation</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Date:</strong> 24/05/2023</li>
                      <li><strong>Coordinator:</strong> Somaprabha S</li>
                      <li><strong>Participants:</strong> 10 Students from various polytechnics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2021-22 Events */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">Academic Year 2021-22</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Interview Skills Workshop</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Duration:</strong> 2 days (26/06/2022 & 30/06/2022)</li>
                    <li><strong>Coordinator:</strong> Sowmyashree HG</li>
                    <li><strong>Resource Person:</strong> Saifsol, Mysuru</li>
                    <li><strong>Focus:</strong> Enhancing student employability and interview preparation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">ISCE Approval</h3>
                <p className="text-gray-600 text-sm">
                  All technical events are approved by ISCE ensuring quality standards 
                  and industry relevance in computer science education.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Partnerships with industry experts and organizations like Saifsol and 
                  Delibir Foundation for practical training.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Multi-level Programs</h3>
                <p className="text-gray-600 text-sm">
                  Events range from student development to faculty development and 
                  national level competitions and presentations.
                </p>
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
                    <h3 className="font-semibold mb-2">Department of Computer Science & Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For technical event inquiries and professional body activities, contact the department office
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