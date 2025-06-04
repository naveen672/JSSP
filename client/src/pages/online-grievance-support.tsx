import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield, Users, FileText, AlertCircle, Phone } from "lucide-react";

export default function OnlineGrievanceSupport() {
  const grievanceCommittee = [
    { slNo: "1", name: "Dr. A.T. Bhashyam", designation: "Rtd. Professor, SJCE Ombudsman" },
    { slNo: "2", name: "Smt Pankaja H N", designation: "HOD, Science" },
    { slNo: "3", name: "Smt Ashakulkarni", designation: "HOD, E&C" },
    { slNo: "4", name: "Smt Manjula M", designation: "HOD, MC" },
    { slNo: "5", name: "Smt Prathiba D", designation: "HOD, E&E" },
    { slNo: "6", name: "Sri K M Mahadevaprabhu", designation: "HOD, CE" }
  ];

  const grievanceTypes = [
    { type: "Academic Issues", description: "Concerns related to curriculum, teaching methods, and academic evaluation" },
    { type: "Infrastructure", description: "Problems with facilities, equipment, and campus infrastructure" },
    { type: "Administrative", description: "Issues with administrative processes and services" },
    { type: "Student Services", description: "Concerns about student support services and welfare" },
    { type: "Discrimination", description: "Cases of unfair treatment or discrimination" },
    { type: "Harassment", description: "Any form of harassment or misconduct" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Online Grievance Support
            </h1>
            <p className="text-xl text-blue-100 mb-2">Student Grievance Redressal System</p>
            <p className="text-lg text-blue-200">
              JSS Polytechnic, Mysuru
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Grievance Redressal Cell (GRC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Purpose & Authority</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          As per Circular of Government of Karnataka and Circular of AICTE, the Grievance Redressal Cell 
                          has been formed with the following members for the Academic year 2019-20.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Government of Karnataka
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            AICTE Approved
                          </Badge>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Academic Year 2019-20
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grievance Redressal Committee</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated committee members to address and resolve student grievances effectively
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">SI No</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grievanceCommittee.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{member.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                        <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Online Grievance Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Grievance Online</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our secure online form to submit your grievance. All submissions are confidential and will be addressed promptly.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Online Grievance Form</h3>
              <p className="text-gray-600 mb-6">
                Click the link below to access the official online grievance support form. 
                Please provide detailed information about your concern for better assistance.
              </p>
              <a 
                href="https://forms.gle/txJCFhzTpnP9Q4u66"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Submit Grievance Online
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Secure Google Forms - Your privacy is protected
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Grievances */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Grievances Addressed</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {grievanceTypes.map((grievance, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{grievance.type}</h3>
                      <p className="text-gray-600 text-sm">{grievance.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grievance Resolution Process</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                <h3 className="font-semibold mb-2">Submit</h3>
                <p className="text-sm text-gray-600">Fill out the online grievance form with detailed information</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-gray-600">Committee reviews and acknowledges your grievance</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                <h3 className="font-semibold mb-2">Investigate</h3>
                <p className="text-sm text-gray-600">Thorough investigation and fact-finding process</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                <h3 className="font-semibold mb-2">Resolve</h3>
                <p className="text-sm text-gray-600">Appropriate action taken and resolution communicated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Guidelines for Grievance Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Do's</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Provide accurate and complete information</li>
                      <li>• Include relevant dates, names, and circumstances</li>
                      <li>• Attach supporting documents if available</li>
                      <li>• Use respectful and professional language</li>
                      <li>• Follow up if no response within reasonable time</li>
                      <li>• Maintain confidentiality during the process</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Don'ts</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Don't submit false or misleading information</li>
                      <li>• Don't use abusive or threatening language</li>
                      <li>• Don't submit anonymous complaints without valid reasons</li>
                      <li>• Don't bypass the grievance process initially</li>
                      <li>• Don't discuss the matter publicly during investigation</li>
                      <li>• Don't submit repetitive complaints on same issue</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Committee Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <p className="text-sm text-gray-600">Committee Members</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-sm text-gray-600">Ombudsman</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-sm text-gray-600">Department HODs</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-gray-600">Online Access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Need Additional Support?</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Grievance Redressal Cell</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For urgent matters or additional assistance, you may also contact the 
                      respective department HODs or the Principal's office during office hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      All grievances are treated confidentially
                    </Badge>
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