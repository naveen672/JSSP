import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Compass, CheckCircle, Target, Award, Building, Phone } from "lucide-react";

export default function About() {
  const missionStatements = [
    {
      id: "M1",
      title: "Holistic Education",
      description: "To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process."
    },
    {
      id: "M2", 
      title: "Industry Collaboration",
      description: "To promote industry institutional collaboration through MOUs and internship programs."
    },
    {
      id: "M3",
      title: "Ethical Practices",
      description: "To infuse ethical and responsible engineering practices to create successful professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Vision Mission of the Institute</h1>
              <p className="text-xl text-blue-100">Guiding Principles for Academic Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSS Polytechnic Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our institution is equipped with state-of-the-art facilities, experienced faculty, and strong industry connections to provide students with a comprehensive learning experience that prepares them for successful careers.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-gray-600">Experienced Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Industry Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Modern</div>
                <div className="text-gray-600">Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Departments</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Computer className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Computer Science & Engineering</h3>
                <p className="text-sm text-gray-600">Modern computing technologies and software development</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Electronics & Communication Engineering</h3>
                <p className="text-sm text-gray-600">Electronic systems and communication technologies</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Mechanical Engineering</h3>
                <p className="text-sm text-gray-600">Design, manufacturing, and mechanical systems</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Electrical & Electronics Engineering</h3>
                <p className="text-sm text-gray-600">Power systems and electrical technologies</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Mechatronics Engineering</h3>
                <p className="text-sm text-gray-600">Integration of mechanical, electrical, and computing systems</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Information Science & Engineering</h3>
                <p className="text-sm text-gray-600">Information systems and data management</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Civil Engineering</h3>
                <p className="text-sm text-gray-600">Infrastructure development and construction</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Science Department</h3>
                <p className="text-sm text-gray-600">Foundation sciences and research</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Academic Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Academic Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Calendar of Events and important academic dates for the year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Professional Bodies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional associations and industry connections for each department</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Admissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">College prospectus, admission help desk, and detailed admission information</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Vision of the Institute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Vision of the institute to be recognized as a prestigious academic Centre for excellence in 
                  technical education and to meet the needs of Academia, Industry & Society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Mission of the Institute</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-accent">M1:</span>
                    <span>To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-accent">M2:</span>
                    <span>To promote industry institutional collaboration through MOUs and internship programs.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-semibold text-accent">M3:</span>
                    <span>To infuse ethical and responsible engineering practices to create successful professionals.</span>
                  </li>
                </ul>
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
