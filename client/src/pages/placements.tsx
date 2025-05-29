import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Building, FileText, Target, MapPin, Award, Phone } from "lucide-react";
import organizationChartImage from "@assets/image_1748552815200.png";

export default function Placements() {
  const placementCoordinators = [
    {
      slNo: 1,
      department: "Mechanical Engineering",
      coordinator: "Sri. Uday R"
    },
    {
      slNo: 2,
      department: "Electronics & Communication Engineering",
      coordinator: "Smt. Vimala H N"
    },
    {
      slNo: 3,
      department: "Computer Science & Engineering",
      coordinator: "Smt. Shruthi S"
    },
    {
      slNo: 4,
      department: "Information Science & Engineering",
      coordinator: "Smt. Shruthi M"
    },
    {
      slNo: 5,
      department: "Mechatronics Engineering",
      coordinator: "Kum. Mayeshwari D"
    },
    {
      slNo: 6,
      department: "Electrical & Electronics Engineering",
      coordinator: "Smt. Vidya S K"
    },
    {
      slNo: 7,
      department: "Civil Engineering",
      coordinator: "Smt. Bhavya M"
    }
  ];

  const mouCompanies = [
    {
      department: "Mechanical Engineering",
      companies: [
        "KGTTI, Mysuru",
        "Flow & Force Engineers, Bengaluru",
        "GTTC, Mysuru",
        "VIDYUT Automation, Mysuru",
        "IRobo Automations Pvt.Ltd, Mysuru"
      ]
    },
    {
      department: "Electronics & Communication Engineering",
      companies: [
        "Ultismart Infotech LLP, Mysuru",
        "IQuest Technologies, Mysuru",
        "MARCONICS Technologies, Mysuru",
        "KGTTI, Mysuru"
      ]
    },
    {
      department: "Computer Science & Engineering",
      companies: [
        "Diliber Foundation",
        "StormX Technologies Pvt Ltd",
        "Sai Sofsol Hebbal Industrial Area Mysuru",
        "Ecclesia Advanced Computer Technology Mysuru",
        "MyViz Mysuru",
        "Jupiter King Infotech, Srirampura, Mysuru"
      ]
    },
    {
      department: "Mechatronics Engineering",
      companies: [
        "BDS Enterprises, Mysuru",
        "KGTTI, Mysuru",
        "GTTC, Mysuru"
      ]
    },
    {
      department: "Electrical & Electronics Engineering",
      companies: [
        "Vidyut Automation, Mysuru",
        "Sri Sai Enterprises, Hebbal, Mysuru"
      ]
    },
    {
      department: "Civil Engineering",
      companies: [
        "CAD DESK"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold text-lg px-4 py-2">
                Career Opportunities
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Placements
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Career Guidance & Counselling: JSS Polytechnic Training and Placement Cell to support and guide students to shape up their career through strategic industry partnerships and placement opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Organizational Structure */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Building className="h-8 w-8" />
              Training and Placement Cell Organization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <img 
                src={organizationChartImage} 
                alt="Training and Placement Cell Organizational Chart showing Principal at top, followed by Chief Placement Officer Roopesh Kumar B, and seven department coordinators below"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The training and placement cell smoothens the procedure of placement activities for students passing out from the institute. It also associates with leading organizations and institutes for the benefit of students in terms of internship and training programmes. The cell is led by a committed member Sri. Roopesh Kumar B, expert advice of the Principal and last but not the least, the effective support from the department placement coordinators.
            </p>
          </CardContent>
        </Card>

        {/* Placement Coordinators */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Users className="h-8 w-8" />
              Department Placement Coordinators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Sl. No</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Department</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Placement Coordinators</th>
                  </tr>
                </thead>
                <tbody>
                  {placementCoordinators.map((coordinator, index) => (
                    <tr key={coordinator.slNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-blue-600">{coordinator.slNo}</td>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">{coordinator.department}</td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">{coordinator.coordinator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Functions of T&P Cell */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Target className="h-8 w-8" />
              Functions of Training and Placement Cell
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The institute has contacts with various companies for the placement of students. Our students get placed with different Multi-National Companies, Retails, Hospitality, Industries, Service and Skill Oriented sectors. Training and Placement cell also impart productive direction among students to pursue higher education. The cell operates like a link between the institution and industries.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <Building className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold text-blue-800 text-lg mb-2">Industry Partnerships</h3>
                  <p className="text-gray-700">Strong connections with MNCs, retail, hospitality, and service sectors</p>
                </div>
                
                <div className="text-center p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <Award className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                  <h3 className="font-semibold text-indigo-800 text-lg mb-2">Higher Education</h3>
                  <p className="text-gray-700">Guidance for students pursuing further studies and advanced degrees</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold text-purple-800 text-lg mb-2">Industry Bridge</h3>
                  <p className="text-gray-700">Acting as a vital link between academic institution and industry</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MOUs with Companies */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <FileText className="h-8 w-8" />
              MOUs Signed for Placement and Training Ventures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {mouCompanies.map((dept, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">{dept.department}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="bg-gray-50 p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                          <Building className="h-5 w-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{company}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Placement & Higher Education Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 text-xl">
                <Briefcase className="h-7 w-7" />
                Placement Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Access comprehensive placement statistics and success stories from the last 4 years.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <FileText className="h-5 w-5" />
                View Placement Status (Last 4 Years)
              </button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800 text-xl">
                <Award className="h-7 w-7" />
                Higher Education Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Track record of students pursuing higher education across different academic years.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">
                  2018-2021 Higher Education Details
                </button>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">
                  2019-2022 Higher Education Details
                </button>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors text-sm">
                  2020-2023 Higher Education Details
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">7</h3>
            <p>Department Coordinators</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <Building className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p>Industry Partners</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Briefcase className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p>Annual Placements</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">80%</h3>
            <p>Placement Success Rate</p>
          </Card>
        </div>
      </div>
    </div>
  );
}