import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Shield, BookOpen, AlertTriangle, UserCheck, Heart } from "lucide-react";

export default function Committees() {
  const scstCommittee = [
    { name: "Smt Sadhana", designation: "Lecturer / E&E" },
    { name: "Smt Yogitha", designation: "Lecturer / CE" },
    { name: "Smt Geetha", designation: "Lecturer Science" },
    { name: "Sri Madhusudan", designation: "Instructor / E&E" },
    { name: "Kum Jayarajeshwari K", designation: "Lecturer / IS" },
    { name: "Smt Nagarathna P", designation: "Office" },
    { name: "Sri Nagaraju", designation: "Office" }
  ];

  const moocsCommittee = [
    { name: "Smt Shinu Koshy", designation: "HOD Dept of CS" },
    { name: "Smt Shruthi S", designation: "Lecturer/CS" }
  ];

  const internalComplaintCommittee = [
    { name: "Smt Manjula M HOD Dept of MC", designation: "Chairperson" },
    { name: "Smt Shinukoushy HOD Dept of CS", designation: "Faculty Members" },
    { name: "Smt Shwetha M P Lecture Dept of E&E", designation: "Faculty Members" },
    { name: "Smt Rashmi N S Instructor Dept of E&C", designation: "Non Teaching Faculty" },
    { name: "Smt Nagarathna P SDA", designation: "Non Teaching Faculty" },
    { name: "Minchu", designation: "Student Members" },
    { name: "Kusuma", designation: "Student Members" },
    { name: "Akshaya", designation: "Student Members" },
    { name: "Smt Jyothi Children Team Member RLHP", designation: "NGO" }
  ];

  const antiRaggingCommittee = [
    { name: "Sri Mahadevaprabhu KM", designation: "HOD / CE" },
    { name: "Sri Prashanth Kumar Malavade", designation: "Lecturer /ME" },
    { name: "Sri Parashiva Murthy B M", designation: "Lecturer / EC" },
    { name: "Smt Pankaja H N", designation: "HOD/Science" },
    { name: "Sri Lokesh K R", designation: "Lecturer / CS" },
    { name: "Sri Harshakumar S", designation: "Lecturer / MC" }
  ];

  const iccDocuments = [
    { title: "ICC constitution", description: "click here to view" },
    { title: "Women Development Cell constitution", description: "click here to view" },
    { title: "Sexual Harassment at Workplace Act Gazatte", description: "click here to view" },
    { title: "AICTE order on Gender Sensitization", description: "Click here to view" },
    { title: "Handbook on Sexual Harassment of Women at Workplace", description: "click here to view" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold text-lg px-4 py-2">
                Institutional Governance
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Committees
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Dedicated committees ensuring quality education, student welfare, and institutional excellence through structured governance and support systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="scst" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="scst" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              SC/ST Committee
            </TabsTrigger>
            <TabsTrigger value="moocs" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              MOOC's Committee
            </TabsTrigger>
            <TabsTrigger value="icc" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Internal Complaint
            </TabsTrigger>
            <TabsTrigger value="anti-ragging" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Anti-Ragging
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scst">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
                  <UserCheck className="h-8 w-8" />
                  SC/ST Committee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Sri Mahadeva prabhu K M</strong> is in-charge of SC/ST Committee. The Committee aims to uplift the morale of deprived section of students and staff. Students are properly informed about different schemes, deadlines etc to avail the benefit.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scstCommittee.map((member, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.name}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="moocs">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 text-2xl">
                  <BookOpen className="h-8 w-8" />
                  MOOC's Committee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed">
                    As per Circular of Government of Karnataka and Circular of AICTE, MOOC's Committee has been formed with the following members:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moocsCommittee.map((member, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.name}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="icc">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
                  <Heart className="h-8 w-8" />
                  Internal Complaint Committee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Internal Complaint Committee is established to receive the complaints from the women, staff, parents through a well-defined web interface connected in the existing website of institute. The committee receives any complaints either from the web portal or manually will be addressed in consultation with the concerned along with the committee members to resolve the issues.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Government of India has introduced a law against sexual harassment – The Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, (POSH Act – Prevention of Sexual Harassment Act). The POSH Act 2013 provides for establishing Internal Complaints Committees (ICCs) in organisations to address complaints of sexual harassment and to create a safe working environment for women employees.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Committee Members</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internalComplaintCommittee.map((member, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-3">{member.name}</td>
                            <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Related Documents</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {iccDocuments.map((doc, index) => (
                      <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2">{doc.title}</h4>
                        <p className="text-sm text-purple-600">{doc.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="anti-ragging">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
                  <Shield className="h-8 w-8" />
                  Anti-Ragging Committee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="text-gray-700 leading-relaxed">
                    The Anti Ragging Committee comprising of the following members to create awareness about ragging and ensure a student-friendly environment at all times and to facilitate campus monitoring to ensure free campus.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {antiRaggingCommittee.map((member, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.name}</td>
                          <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <UserCheck className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">7</h3>
            <p>SC/ST Committee Members</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">2</h3>
            <p>MOOC's Committee Members</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">9</h3>
            <p>ICC Members</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-red-500 to-red-600 text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">6</h3>
            <p>Anti-Ragging Committee</p>
          </Card>
        </div>
      </div>
    </div>
  );
}