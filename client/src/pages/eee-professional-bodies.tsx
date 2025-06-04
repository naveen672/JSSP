import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building } from "lucide-react";

export default function EEEProfessionalBodies() {
  const events = [
    {
      slNo: 1,
      professionalSociety: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      technicalEvent: "3 Days workshop on Basic Web Design",
      date: "14-07-2022 To 16-07-2022",
      resourcePerson: "Nandan N, Lecturer/CSE Govt Polytechnic, Sorabh",
      remarks: "Organized by EE Dept For 1st Semester Students."
    },
    {
      slNo: 2,
      professionalSociety: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      technicalEvent: "One day Workshop on SCADA and PLC application",
      date: "29/7/22",
      resourcePerson: "Shashi Kiran, Vidyut Automation Mysuru",
      remarks: "Organized by EE Dept For 4th Semester Students"
    },
    {
      slNo: 3,
      professionalSociety: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      technicalEvent: "National level Technical Paper Presentation",
      date: "24-05-2023",
      resourcePerson: "",
      remarks: "Organized by E&E Dept Forum, JSS Polytechnic, Mysuru"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Electrical & Electronics Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Technical Events</p>
            <p className="text-lg text-blue-200">
              Department of Electrical & Electronics Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Society Activities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Electrical & Electronics Engineering department actively participates in ISTE activities 
              and organizes technical workshops and events to enhance student learning in electrical and electronics technologies.
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
                ISTE Technical Events
              </CardTitle>
              <p className="text-gray-600">
                Technical workshops and events organized under ISTE collaboration
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
                        Professional Societies
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Member
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Technical Event
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        DATE
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        Resource Person
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        REMARKS
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
                          <Badge className="bg-primary text-white">
                            {event.professionalSociety}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {event.member}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {event.technicalEvent}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {event.resourcePerson || "—"}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">
                          {event.remarks}
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

      {/* Event Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Web Design Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> 3 Days (14-16 July 2022)</p>
                  <p className="text-sm text-gray-700"><strong>Topic:</strong> Basic Web Design</p>
                  <p className="text-sm text-gray-700"><strong>Expert:</strong> Nandan N from Govt Polytechnic, Sorabh</p>
                  <p className="text-sm text-gray-700"><strong>Target:</strong> 1st Semester Students</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Introduction to web technologies and design principles</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">SCADA & PLC Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> One Day (29 July 2022)</p>
                  <p className="text-sm text-gray-700"><strong>Topic:</strong> SCADA and PLC Application</p>
                  <p className="text-sm text-gray-700"><strong>Expert:</strong> Shashi Kiran from Vidyut Automation</p>
                  <p className="text-sm text-gray-700"><strong>Target:</strong> 4th Semester Students</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Industrial automation and control systems</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technical Paper Presentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Date:</strong> 24 May 2023</p>
                  <p className="text-sm text-gray-700"><strong>Level:</strong> National Level</p>
                  <p className="text-sm text-gray-700"><strong>Organizer:</strong> E&E Dept Forum</p>
                  <p className="text-sm text-gray-700"><strong>Scope:</strong> Technical paper presentations</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Research and innovation in electrical engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ISTE Membership Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  ISTE Institutional Membership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Membership Details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Institution:</strong> JSS Polytechnic, Mysuru</li>
                      <li><strong>Professional Society:</strong> Indian Society for Technical Education (ISTE)</li>
                      <li><strong>Department:</strong> Electrical & Electronics Engineering</li>
                      <li><strong>Status:</strong> Active institutional membership</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Activities</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Technical workshops and training programs</li>
                      <li>• Industry expert guest lectures</li>
                      <li>• National level technical events</li>
                      <li>• Student skill development programs</li>
                      <li>• Faculty development initiatives</li>
                    </ul>
                  </div>
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
                <h3 className="font-semibold text-lg mb-3">ISTE Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Active participation in ISTE programs ensures alignment with 
                  national technical education standards and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  Collaborations with industry experts from Vidyut Automation 
                  and government institutions for practical training.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Multi-Level Programs</h3>
                <p className="text-gray-600 text-sm">
                  Events designed for different semesters from 1st semester 
                  foundation to 4th semester advanced applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Focus Areas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technical Domains</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Industrial Automation (SCADA, PLC)</li>
                  <li>• Control Systems and Applications</li>
                  <li>• Web Design and Development</li>
                  <li>• Electrical Systems Design</li>
                  <li>• Electronics Circuit Applications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Student Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hands-on workshop training</li>
                  <li>• Industry expert interactions</li>
                  <li>• Technical paper presentations</li>
                  <li>• National level competitions</li>
                  <li>• Practical skill enhancement</li>
                </ul>
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
                    <h3 className="font-semibold mb-2">Department of Electrical & Electronics Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For ISTE activities and technical workshop inquiries, contact the department office
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