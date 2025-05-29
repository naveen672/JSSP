import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, DollarSign, Calendar, Users } from "lucide-react";

export default function Admissions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Excellence University</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Begin your journey toward academic excellence and personal growth. Apply today to become part of our distinguished community.
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
    </div>
  );
}
