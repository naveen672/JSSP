import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Target, CheckCircle, FileText, TrendingUp } from "lucide-react";

export default function IQAC() {
  const iqacMembers = [
    {
      id: 1,
      name: "Sri Prashanth Kumar malvade",
      designation: "Lecturer/ME"
    },
    {
      id: 2,
      name: "Smt Pavithra",
      designation: "Lecturer/EC"
    },
    {
      id: 3,
      name: "Smt Shewtha M P",
      designation: "Lecturer/EE"
    },
    {
      id: 4,
      name: "Smt Maheshwari",
      designation: "Lecturer/MC"
    },
    {
      id: 5,
      name: "Sri Roopesh Kumar",
      designation: "Lecturer/CE"
    },
    {
      id: 6,
      name: "Smt Shruthi M",
      designation: "Lecturer / IS"
    },
    {
      id: 7,
      name: "Smt Sowmyashree",
      designation: "Lecturer/CS"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold text-lg px-4 py-2">
                Quality Assurance
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Internal Quality Assurance Cell (IQAC)
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Ensuring excellence in academic standards through systematic inspection, verification, and continuous improvement of all academic processes at JSS Polytechnic.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Purpose and Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Target className="h-8 w-8" />
              About IQAC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Internal Quality Assurance Cell was constituted by the Institute to inspect / verify all the academic related documents such as IA test books, attendance registers, course plan, continuous internal evaluation sheets, CO attainments of courses, time tables, practical records, academic calendars and other academic documents related to the department etc. The committee also prepares the detailed proceedings of the verification process and further action will be initiated depending on the shortfalls of the evaluation.
            </p>
          </CardContent>
        </Card>

        {/* IQAC Members */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Users className="h-8 w-8" />
              IQAC Committee Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">SI No</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Name</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {iqacMembers.map((member, index) => (
                    <tr key={member.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-blue-600">{member.id}</td>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">{member.name}</td>
                      <td className="border border-gray-300 px-6 py-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {member.designation}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Roles & Responsibilities */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <CheckCircle className="h-8 w-8" />
              Roles & Responsibilities of IQAC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <TrendingUp className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 text-lg mb-2">Quality Improvement in Teaching</h3>
                  <p className="text-gray-700">
                    Improvement of quality of teaching by regular inputs to all concerned on feedback of students.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                <Users className="h-8 w-8 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-800 text-lg mb-2">Administrative Excellence</h3>
                  <p className="text-gray-700">
                    Providing inputs for better practices in administration for effective resource utilization of better services to the staff and students.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <FileText className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-800 text-lg mb-2">Academic Audit & Analysis</h3>
                  <p className="text-gray-700">
                    Providing inputs for academic audit and analysis of results for improvement in the areas found weak.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Assurance Process */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Shield className="h-8 w-8" />
              Quality Assurance Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-indigo-600 mb-4 text-lg">Documents Under Review</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>IA test books and evaluation records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Attendance registers and student records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Course plans and curriculum implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Continuous internal evaluation sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>CO attainments of courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Time tables and academic schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Practical records and laboratory assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Academic calendars and departmental documents</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-600 mb-4 text-lg">Quality Assurance Activities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Systematic inspection and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Detailed proceedings documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Gap analysis and improvement identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Student feedback collection and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Resource utilization assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Academic audit and performance review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Corrective action implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Continuous monitoring and evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">7</h3>
            <p>IQAC Members</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">8+</h3>
            <p>Document Categories</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Target className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Quality Assurance</p>
          </Card>
        </div>
      </div>
    </div>
  );
}