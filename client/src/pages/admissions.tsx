import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, DollarSign, Calendar, Users, Phone, Clock, User } from "lucide-react";

export default function Admissions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">JSS Polytechnic Admissions</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Admissions for 2024-2025 are now open. Begin your journey toward technical excellence and professional growth at JSS Polytechnic, Mysuru.
          </p>
          <Button size="lg" className="bg-accent text-primary hover:bg-yellow-300">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Online Application</h3>
                <p className="text-sm text-gray-600">Complete and submit your application form with required documents.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Document Review</h3>
                <p className="text-sm text-gray-600">Our admissions team reviews your academic credentials and documents.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Entrance Exam</h3>
                <p className="text-sm text-gray-600">Take the entrance examination for your chosen program.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Admission Decision</h3>
                <p className="text-sm text-gray-600">Receive your admission decision and enrollment information.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements and Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Information</h2>
          
          <Tabs defaultValue="undergraduate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <span>Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Academic Requirements</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">High School Diploma or equivalent</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Minimum GPA of 3.0</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">SAT/ACT scores</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">English proficiency (for international students)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Required Documents</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Official transcripts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Letters of recommendation (2)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Personal statement</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Application fee payment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="graduate" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <span>Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Academic Requirements</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Bachelor's degree from accredited institution</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Minimum GPA of 3.5</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">GRE/GMAT scores (program dependent)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Research experience (preferred)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Required Documents</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Official transcripts (all institutions)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Letters of recommendation (3)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Statement of purpose</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Research proposal (for PhD)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Scholarships & Financial Aid</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <span>Merit Scholarships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800">Up to 100% Tuition</Badge>
                  <p className="text-sm text-gray-600">
                    Awarded to students with exceptional academic performance and leadership qualities.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Presidential Scholarship: Full tuition</li>
                    <li>• Dean's Scholarship: 75% tuition</li>
                    <li>• Excellence Scholarship: 50% tuition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Need-Based Aid</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-blue-100 text-blue-800">Financial Support</Badge>
                  <p className="text-sm text-gray-600">
                    Financial assistance for students who demonstrate financial need.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Federal Pell Grants</li>
                    <li>• State Grants</li>
                    <li>• Institutional Grants</li>
                    <li>• Work-Study Programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>International Scholarships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-purple-100 text-purple-800">Global Opportunities</Badge>
                  <p className="text-sm text-gray-600">
                    Special scholarships for international students from diverse backgrounds.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• International Excellence Award</li>
                    <li>• Cultural Diversity Scholarship</li>
                    <li>• Global Leadership Grant</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary">Fall 2024 Admissions</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Application Opens:</span>
                        <span className="text-sm text-gray-600">October 1, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Early Decision:</span>
                        <span className="text-sm text-gray-600">November 15, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Regular Decision:</span>
                        <span className="text-sm text-gray-600">February 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Decision Notification:</span>
                        <span className="text-sm text-gray-600">March 15, 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-primary">Spring 2025 Admissions</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Application Opens:</span>
                        <span className="text-sm text-gray-600">June 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Application Deadline:</span>
                        <span className="text-sm text-gray-600">October 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Decision Notification:</span>
                        <span className="text-sm text-gray-600">November 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Enrollment Deposit:</span>
                        <span className="text-sm text-gray-600">December 1, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Help Desk */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Phone className="h-8 w-8" />
                  Admission Help Desk / Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    JSS Polytechnic, Mysuru admission for the year <span className="font-semibold text-blue-600">2024-2025 is open</span>. 
                    For admission related information parents/students are requested to contact any of the below mentioned admission committee members.
                  </p>
                  
                  <div className="flex items-center gap-2 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg mb-6">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Office Hours:</span> 
                      <span className="ml-2">Monday to Friday: 9:00 AM - 4:45 PM</span>
                      <span className="ml-4">Saturday: 9:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-6 py-4 text-left font-semibold">Sl No</th>
                        <th className="px-6 py-4 text-left font-semibold">Name</th>
                        <th className="px-6 py-4 text-left font-semibold">Contact No</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-blue-600">1</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-gray-900">Principal</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a 
                            href="tel:9844333115" 
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Phone className="h-4 w-4" />
                            9844333115
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-blue-600">2</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-gray-900">Umesh</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a 
                            href="tel:9164333359" 
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Phone className="h-4 w-4" />
                            9164333359
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    For immediate assistance, call during office hours. Our admission committee is ready to help you with all your queries regarding the admission process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
