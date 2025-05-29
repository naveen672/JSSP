import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserCheck, 
  Target, 
  Award, 
  FileText, 
  Users, 
  CheckCircle,
  Calendar,
  BookOpen
} from "lucide-react";

export default function IQAC() {
  const objectives = [
    "To develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions",
    "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture",
    "To ensure enhancement and coordination among various activities of the institution and institutionalize all good practices",
    "To provide a sound basis for decision-making to improve institutional functioning",
    "To act as a dynamic system for quality changes in HEIs",
    "To build an organized methodology of documentation and internal communication"
  ];

  const functions = [
    "Development and application of quality benchmarks/parameters for various academic and administrative activities",
    "Facilitating the creation of a learner-centric environment conducive to quality education",
    "Arrangement for feedback from students, parents and other stakeholders on quality-related institutional processes",
    "Dissemination of information on various quality parameters of higher education",
    "Organization of inter and intra institutional workshops, seminars on quality related themes",
    "Documentation of the various programmes/activities leading to quality improvement",
    "Acting as a nodal agency of the Institution for coordinating quality-related activities"
  ];

  const members = [
    { name: "Dr. B.S. Kedarnath", designation: "Principal (Chairperson)", department: "Administration" },
    { name: "Prof. Rajesh Kumar", designation: "IQAC Coordinator", department: "Computer Science" },
    { name: "Dr. Sunitha M", designation: "Faculty Representative", department: "Electronics & Communication" },
    { name: "Prof. Manjunath B.R.", designation: "Faculty Representative", department: "Mechanical Engineering" },
    { name: "Dr. Priya Sharma", designation: "Faculty Representative", department: "Civil Engineering" },
    { name: "Mr. Suresh Babu", designation: "Administrative Officer", department: "Administration" },
    { name: "Ms. Kavitha R", designation: "Industry Expert", department: "External Member" },
    { name: "Mr. Ravi Kumar", designation: "Alumni Representative", department: "External Member" }
  ];

  const activities = [
    {
      title: "Annual Quality Assurance Report (AQAR)",
      description: "Preparation and submission of comprehensive annual report",
      status: "Completed",
      date: "March 2024"
    },
    {
      title: "Faculty Development Programs",
      description: "Organizing workshops and training sessions for faculty",
      status: "Ongoing",
      date: "Throughout the year"
    },
    {
      title: "Student Feedback Analysis",
      description: "Collection and analysis of student feedback on curriculum and teaching",
      status: "Completed",
      date: "February 2024"
    },
    {
      title: "Infrastructure Audit",
      description: "Assessment of institutional infrastructure and facilities",
      status: "In Progress",
      date: "April 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <UserCheck className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Internal Quality Assurance Cell (IQAC)</h1>
              <p className="text-xl text-blue-100">Ensuring Excellence in Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* About IQAC */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-2 text-primary" />
                About IQAC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Internal Quality Assurance Cell (IQAC) was established at JSS Polytechnic as per the guidelines 
                of the National Assessment and Accreditation Council (NAAC) and All India Council for Technical Education (AICTE). 
                The IQAC serves as a catalyst for quality enhancement and sustenance in the institution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It aims to promote measures for institutional functioning towards quality enhancement through 
                internalization of quality culture and institutionalization of best practices. The cell works 
                towards continuous improvement in the academic and administrative performance of the institution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Objectives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The primary objectives of IQAC focus on quality enhancement and institutional development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Functions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key functions performed by IQAC to ensure quality in all institutional activities
            </p>
          </div>
          
          <div className="space-y-4">
            {functions.map((func, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{func}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IQAC Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IQAC Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated team members working towards quality assurance and enhancement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.designation}</p>
                  <p className="text-gray-600 text-sm">{member.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current and completed quality assurance initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{activity.title}</h3>
                    <Badge 
                      variant={activity.status === "Completed" ? "default" : 
                               activity.status === "Ongoing" ? "secondary" : "outline"}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-3">{activity.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {activity.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact IQAC</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        IQAC Coordinator
                      </h3>
                      <p>Prof. Rajesh Kumar</p>
                      <p className="text-blue-100">Computer Science Department</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Email: iqac@jssp.edu.in</p>
                      <p className="text-blue-100">Phone: +91-821-2548318</p>
                    </div>
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