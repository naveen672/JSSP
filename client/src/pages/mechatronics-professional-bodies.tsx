import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building } from "lucide-react";

export default function MechatronicsProfessionalBodies() {
  const events2023_24 = [
    {
      slNo: 1,
      date: "03/10/2023 TO 04/10/2023",
      event: "Workshop on Basic of Industrial Automation PLC, SCADA, HMI, VFD, PID controller, Temperature controller",
      resourcePerson: "Mr. Shashi Kiran M, Director, Vidyut Automation, Dattagalli, Mysuru-22",
      semester: "V sem MC and EC",
      participants: "59"
    },
    {
      slNo: 2,
      date: "13/09/2023 To 15/09/2023",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "III sem MC",
      participants: "27"
    },
    {
      slNo: 3,
      date: "19/09/2023 To 21/09/2023",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "III sem MC, EE, EC, CS",
      participants: "14"
    }
  ];

  const events2022_23 = [
    {
      slNo: 1,
      date: "30/5/2022 to 1/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "IV sem MC & EC",
      participants: "22"
    },
    {
      slNo: 2,
      date: "2/6/2022 to 4/6/2022",
      event: "National Conference on Emerging Technologies in Engineering Field-2023",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "National Level",
      participants: "3"
    }
  ];

  const events2021_22 = [
    {
      slNo: 1,
      date: "30/5/2022 to 1/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "IV sem MC & EC",
      participants: "22"
    },
    {
      slNo: 2,
      date: "2/6/2022 to 4/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "IV sem MC, IS, CS",
      participants: "21"
    },
    {
      slNo: 3,
      date: "15/6/2022 to 16/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, JSS polytechnic, Mysuru",
      semester: "IV sem EC JSSPW MYSURU",
      participants: "21"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Mechatronics Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Workshops</p>
            <p className="text-lg text-blue-200">
              Department of Mechatronics Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Workshops & Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Mechatronics Engineering department conducts specialized workshops and technical events 
              to enhance practical learning in automation, embedded systems, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Year 2023-24 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                Academic Year 2023-24
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">SL NO</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">DATE</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Name of the Event</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Resource Person</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Semester</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Participants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events2023_24.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">{event.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{event.event}</td>
                        <td className="border border-gray-300 px-4 py-3">{event.resourcePerson}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge className="bg-primary text-white">{event.semester}</Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{event.participants}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Academic Year 2022-23 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                Academic Year 2022-23
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">SL NO</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">DATE</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Name of the Event</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Resource Person</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Semester</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Participants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events2022_23.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">{event.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{event.event}</td>
                        <td className="border border-gray-300 px-4 py-3">{event.resourcePerson}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge className="bg-accent text-white">{event.semester}</Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{event.participants}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Academic Year 2021-22 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                Academic Year 2021-22
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">SL NO</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">DATE</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Name of the Event</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Resource Person</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Semester</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Participants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events2021_22.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">{event.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{event.event}</td>
                        <td className="border border-gray-300 px-4 py-3">{event.resourcePerson}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-gray-100 text-gray-700">{event.semester}</Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{event.participants}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Industrial Automation Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Focus Areas:</strong> PLC, SCADA, HMI, VFD, PID controller, Temperature controller</p>
                  <p className="text-sm text-gray-700"><strong>Industry Expert:</strong> Mr. Shashi Kiran M from Vidyut Automation</p>
                  <p className="text-sm text-gray-700"><strong>Target:</strong> V semester MC and EC students</p>
                  <p className="text-sm text-gray-700"><strong>Participants:</strong> 59 students</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Arduino Workshop Series</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Conducted by:</strong> Manjula M, HOD Mechatronics Department</p>
                  <p className="text-sm text-gray-700"><strong>Multiple Sessions:</strong> For different semesters and departments</p>
                  <p className="text-sm text-gray-700"><strong>Cross-Department:</strong> MC, EC, EE, CS, IS students</p>
                  <p className="text-sm text-gray-700"><strong>Hands-on Learning:</strong> Embedded systems programming</p>
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
                <h3 className="font-semibold text-lg mb-3">HOD Leadership</h3>
                <p className="text-gray-600 text-sm">
                  Most workshops conducted under the guidance of Manjula M, 
                  HOD of Mechatronics Department, ensuring quality education.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Partnerships with industry experts from Vidyut Automation 
                  for real-world automation and control systems training.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Cross-Department Learning</h3>
                <p className="text-gray-600 text-sm">
                  Workshops designed for multiple departments including MC, EC, EE, 
                  CS, and IS, promoting interdisciplinary learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Statistics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <p className="text-sm text-gray-600">Total Workshops</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-gray-600">Academic Years</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-gray-600">Student Participants</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-sm text-gray-600">Departments Involved</p>
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
                    <h3 className="font-semibold mb-2">Department of Mechatronics Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                    <p className="mt-2">HOD: Manjula M</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For workshop inquiries and automation training programs, contact the department office
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