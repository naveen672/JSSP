import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Building, FileText } from "lucide-react";

export default function MechanicalProfessionalBodies() {
  const isteMembership = [
    {
      slNo: 1,
      member: "JSS POLYTECHNIC, MYSURU",
      membershipId: "839"
    },
    {
      slNo: 2,
      member: "Dr. K S BHAKTAVATSALA",
      membershipId: "LM65626"
    }
  ];

  const ieiMembership = [
    {
      slNo: 1,
      member: "Dr. K S BHAKTAVATSALA",
      membershipId: "M1786371"
    }
  ];

  const activities = [
    {
      slNo: 1,
      description: "WORKSHOP (6 DAY)",
      topic: "COMPUTER AIDED MANUFACTURING USING MASTER CAM",
      coordinator: "H M RAJASHEKHARA",
      organizedBy: "JSS POLYTECHNIC, MYSURU IN ASSOCIATION WITH STEP, MYSURU",
      year: "2022-23"
    },
    {
      slNo: 2,
      description: "NATIONAL LEVEL PAPER PRESENTATION (2 DAYS)",
      topic: "EMERGING TECHNOLOGIES IN ENGINEERING FIELD",
      coordinator: "PRASHANTH N MALAVADE",
      organizedBy: "JSS POLYTECHNIC, MYSURU",
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
              Mechanical Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-2">Professional Bodies & Activities</p>
            <p className="text-lg text-blue-200">
              Department of Mechanical Engineering
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
              The Mechanical Engineering department maintains active memberships with leading professional 
              societies and organizes various technical activities to enhance engineering education.
            </p>
          </div>
        </div>
      </section>

      {/* ISTE Membership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Indian Society for Technical Education (ISTE)
              </CardTitle>
              <p className="text-gray-600">Professional membership details for ISTE</p>
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
                        NAME OF THE FACULTY
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        ISTE MEMBERSHIP ID NO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isteMembership.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {member.slNo}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {member.member}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge className="bg-primary text-white">
                            {member.membershipId}
                          </Badge>
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

      {/* IEI Membership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-primary" />
                The Institution of Engineers (India)
              </CardTitle>
              <p className="text-gray-600">Professional membership details for IEI</p>
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
                        NAME OF FACULTY
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        IEI MEMBERSHIP ID NO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ieiMembership.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {member.slNo}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {member.member}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge className="bg-accent text-white">
                            {member.membershipId}
                          </Badge>
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

      {/* Activities and Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-3 text-primary" />
                Department Activities
              </CardTitle>
              <p className="text-gray-600">
                Technical workshops, competitions, and professional development programs organized by the department
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
                        DESCRIPTION
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        TOPIC
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        COORDINATOR
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        ORGANISED BY
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">
                        YEAR
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {activity.slNo}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {activity.description}
                          </Badge>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {activity.topic}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {activity.coordinator}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {activity.organizedBy}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Badge className="bg-primary text-white">
                            {activity.year}
                          </Badge>
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

      {/* Activity Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Activity Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CAM Workshop 2022-23</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> 6 Days intensive workshop</p>
                  <p className="text-sm text-gray-700"><strong>Topic:</strong> Computer Aided Manufacturing using Master CAM</p>
                  <p className="text-sm text-gray-700"><strong>Coordinator:</strong> H M RAJASHEKHARA</p>
                  <p className="text-sm text-gray-700"><strong>Partnership:</strong> In association with STEP, Mysuru</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Advanced manufacturing techniques and CAM software</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">National Paper Presentation 2023-24</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> 2 Days national level event</p>
                  <p className="text-sm text-gray-700"><strong>Topic:</strong> Emerging Technologies in Engineering Field</p>
                  <p className="text-sm text-gray-700"><strong>Coordinator:</strong> PRASHANTH N MALAVADE</p>
                  <p className="text-sm text-gray-700"><strong>Scope:</strong> National level participation</p>
                  <p className="text-sm text-gray-700"><strong>Focus:</strong> Latest trends and innovations in engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Bodies Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Bodies Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  ISTE Membership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <strong>Institutional Membership ID:</strong> 839
                  </p>
                  <p className="text-sm text-gray-700">
                    JSS Polytechnic, Mysuru holds institutional membership with ISTE, 
                    enabling participation in technical education development programs.
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Faculty Member:</strong> Dr. K S BHAKTAVATSALA (LM65626)
                  </p>
                  <p className="text-sm text-gray-700">
                    Organizes FDP, Technical talks, Workshops, and Competitions under ISTE guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="h-5 w-5 mr-2 text-primary" />
                  IEI Membership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <strong>Faculty Member:</strong> Dr. K S BHAKTAVATSALA
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Membership ID:</strong> M1786371
                  </p>
                  <p className="text-sm text-gray-700">
                    The Institution of Engineers (India) membership provides access to 
                    professional engineering standards and continuing education programs.
                  </p>
                  <p className="text-sm text-gray-700">
                    Facilitates knowledge exchange and professional development in engineering practices.
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
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Institutional Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Active memberships with ISTE and IEI demonstrate commitment to 
                  professional engineering education standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">
                  Dr. K S BHAKTAVATSALA leads professional activities with 
                  memberships in both ISTE and IEI organizations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Industry Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  Collaborations with organizations like STEP Mysuru for 
                  specialized training and skill development programs.
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
                    <h3 className="font-semibold mb-2">Department of Mechanical Engineering</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                    <p className="mt-2">Professional Bodies Coordinator: Dr. K S BHAKTAVATSALA</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For professional body activities and technical events, contact the department office
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