import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, Award, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Excellence University</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Inspiring Excellence Since 1965 - A Legacy of Academic Achievement and Character Development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Excellence University is committed to providing transformative educational experiences that foster intellectual growth, 
                  critical thinking, and ethical leadership. We strive to create an inclusive learning environment where students from 
                  diverse backgrounds can thrive academically, personally, and professionally while contributing meaningfully to society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be a globally recognized institution of higher learning that shapes tomorrow's leaders through innovation in 
                  education, groundbreaking research, and community engagement. We envision a future where our graduates serve as 
                  catalysts for positive change in their communities and fields of expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rich History</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <History className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">1965 - Foundation</h3>
                  <p className="text-gray-600">
                    Excellence University was established with a vision to provide quality higher education and was initially founded 
                    with three departments and 150 students.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">1985 - Accreditation Excellence</h3>
                  <p className="text-gray-600">
                    Achieved full accreditation from the National Council for Higher Education and established our first research 
                    centers in Science and Technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2000 - Global Expansion</h3>
                  <p className="text-gray-600">
                    Launched international exchange programs and partnerships with universities across five continents, 
                    welcoming our first international students.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2024 - Modern Era</h3>
                  <p className="text-gray-600">
                    Today, we proudly serve over 15,000 students across 25 departments with state-of-the-art facilities and 
                    a commitment to innovation in education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership & Governance</h2>
          
          <Tabs defaultValue="administration" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="administration">Administration</TabsTrigger>
              <TabsTrigger value="board">Board of Trustees</TabsTrigger>
              <TabsTrigger value="committees">Committees</TabsTrigger>
            </TabsList>
            
            <TabsContent value="administration" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Dr. Margaret Thompson</h3>
                    <p className="text-accent font-medium mb-2">Chancellor</p>
                    <p className="text-sm text-gray-600">Ph.D. Harvard University, 20+ years in academic leadership</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Dr. Robert Chen</h3>
                    <p className="text-accent font-medium mb-2">Vice Chancellor</p>
                    <p className="text-sm text-gray-600">Ph.D. MIT, Former Dean of Engineering</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Dr. Lisa Rodriguez</h3>
                    <p className="text-accent font-medium mb-2">Registrar</p>
                    <p className="text-sm text-gray-600">Ed.D. Columbia, Academic Affairs Specialist</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Mr. David Wilson</h3>
                    <p className="text-accent font-medium mb-2">Chief Financial Officer</p>
                    <p className="text-sm text-gray-600">MBA Wharton, 15+ years in higher education finance</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="board" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Board of Trustees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Our Board of Trustees comprises distinguished leaders from academia, industry, and public service who provide 
                    strategic guidance and oversight for the university's mission and operations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">Board Members</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Dr. James Patterson - Chairman (Former CEO, Tech Innovations Inc.)</li>
                        <li>• Ms. Sarah Kim - Vice Chair (Partner, Global Law Firm)</li>
                        <li>• Prof. Michael Brown - Academic Representative</li>
                        <li>• Ms. Jennifer Davis - Alumni Representative</li>
                        <li>• Mr. Thomas Anderson - Community Leader</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Strategic planning and policy development</li>
                        <li>• Financial oversight and budget approval</li>
                        <li>• Chancellor selection and evaluation</li>
                        <li>• Institutional governance and compliance</li>
                        <li>• Fundraising and community relations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="committees" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Academic Committee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Oversees curriculum development, academic standards, and faculty affairs.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline">Dr. Emily Rodriguez - Chair</Badge>
                      <Badge variant="outline">Prof. Mark Johnson</Badge>
                      <Badge variant="outline">Dr. Anna Williams</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Student Affairs Committee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Focuses on student welfare, campus life, and support services.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline">Dr. Kevin Lee - Chair</Badge>
                      <Badge variant="outline">Ms. Rachel Green</Badge>
                      <Badge variant="outline">Mr. Alex Turner</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">IQAC (Internal Quality Assurance Cell)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Ensures quality enhancement and sustenance of academic programs.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline">Dr. Patricia Moore - Chair</Badge>
                      <Badge variant="outline">Prof. Daniel Clark</Badge>
                      <Badge variant="outline">Dr. Susan Taylor</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Anti-Ragging Committee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Prevents and addresses ragging incidents, ensuring a safe campus environment.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline">Dr. Richard Blake - Chair</Badge>
                      <Badge variant="outline">Ms. Karen White</Badge>
                      <Badge variant="outline">Officer John Smith</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">NAAC A+ Grade</h3>
                <p className="text-sm text-gray-600">Highest accreditation grade for academic excellence</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Global Rankings</h3>
                <p className="text-sm text-gray-600">Top 100 universities in national rankings</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">98% Placement</h3>
                <p className="text-sm text-gray-600">Outstanding career placement record</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Research Excellence</h3>
                <p className="text-sm text-gray-600">100+ research publications annually</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
