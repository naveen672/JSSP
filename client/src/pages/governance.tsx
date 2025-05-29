import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, FileText, Award } from "lucide-react";

export default function Governance() {
  const governingCouncilMembers = [
    {
      sl: 1,
      name: "His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru President, JSS Mahavidyapeetha, Mysuru",
      position: "Chairman"
    },
    {
      sl: 2,
      name: "Dr.C G Betsurmath Executive Secretary JSS Mahavidyapeetha, Mysuru",
      position: "Member Management Nominee"
    },
    {
      sl: 3,
      name: "Dr. B. Suresh, Director (TED), JSSMVP, Mysuru",
      position: "Member Management Nominee"
    },
    {
      sl: 4,
      name: "Sri Prasanna H Director, Directorate of Technical Examination, Bengaluru",
      position: "Member"
    },
    {
      sl: 5,
      name: "Dr. H.R. Mahadevaswamy, Joint Director (TED), JSS MVP, Mysuru",
      position: "Member (Nominee of the State Govt.)(Ex-Officio)"
    },
    {
      sl: 6,
      name: "Sri AchuthaBachalli K, M/s. Unilog Content Solutions, Mysuru",
      position: "Member"
    },
    {
      sl: 7,
      name: "Sri Prakash, Principal, CPC(Govt.)Polytechnic, Mysuru",
      position: "Special Invitee"
    },
    {
      sl: 8,
      name: "Smt. Asha Kulkarni, HOD, E&C Dept., JSSP, Mysuru",
      position: "Member"
    },
    {
      sl: 9,
      name: "Sri. K.S. Bhakthavatsala, Principal, JSS Polytechnic, Mysuru",
      position: "Member Secretary"
    },
    {
      sl: 10,
      name: "Sri Srikanth G Joint Director(Exam),Board of Technical Examinations,Bengaluru",
      position: "Member"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Governance</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Institutional governance structure ensuring quality administration and academic excellence.
          </p>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-accent" />
                  <span>Governing Council</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Polytechnic has the Governing Council which has a set of members constituted by the Management 
                  as per the norms of AICTE for giving guidance regarding administration of the Institution.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4">Composition of Governing Council</h3>
                  <p className="text-gray-700 mb-4">
                    The Governing Council shall have at least 11 members including the Chairman and the Member Secretary. 
                    The Management/Registered Society shall nominate members including the Chairman and the Member-Secretary as indicated below:
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li>• The Chairman</li>
                    <li>• Two to Five members (Industrialist/Technologist/Educationalist)</li>
                    <li>• One nominee from the Affiliating Board</li>
                    <li>• One nominee from All India Council for Technical Education (Ex-Officio)</li>
                    <li>• One nominee from the State Government (Ex-Officio)</li>
                    <li>• One Senior Faculty member of the Institute</li>
                    <li>• Principal of the concerned technical institution is the Member Secretary</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Present Members of the Governing Council</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Sl. No.</th>
                    <th className="px-6 py-4 text-left">Name of the Member</th>
                    <th className="px-6 py-4 text-left">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {governingCouncilMembers.map((member, index) => (
                    <tr key={member.sl} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-primary">{member.sl}</td>
                      <td className="px-6 py-4 text-gray-700">{member.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant={member.position.includes("Chairman") ? "default" : member.position.includes("Secretary") ? "secondary" : "outline"}>
                          {member.position}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Functions and Responsibilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-accent" />
                  <span>Functions and Responsibilities of the Governing Council</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Administrative Oversight</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Review action taken on previous meeting solutions</li>
                        <li>• Analyze administrative processes for improvement</li>
                        <li>• Provide guidance for overall institutional development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Financial Management</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Analyze and guide financial status</li>
                        <li>• Approve new initiatives and projects</li>
                        <li>• Critical comments on proposed activities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Excellence</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Suggestions to improve admissions and placements</li>
                        <li>• Approval for curricular, co-curricular activities</li>
                        <li>• Review academic requirements of the institute</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Development Planning</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Suggestions for improvement and development</li>
                        <li>• Recommendations for further enhancement</li>
                        <li>• Strategic planning and vision setting</li>
                      </ul>
                    </div>
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