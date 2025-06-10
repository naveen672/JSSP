import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Users, CheckCircle, ArrowRight, FileText } from "lucide-react";

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Curriculum Framework</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to meet industry standards and prepare students 
            for successful careers in engineering and technology through outcome-based education.
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Curriculum Development Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Department-wise Curriculum Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">DTE Curriculum Alignment</h4>
                        <p className="text-sm text-gray-600">Strict adherence to Department of Technical Education prescribed curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">CO-PO Mapping</h4>
                        <p className="text-sm text-gray-600">Course Outcomes to Program Outcomes mapping by dedicated course coordinators</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Gap Analysis</h4>
                        <p className="text-sm text-gray-600">Identification of curriculum gaps and content beyond syllabus requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Program Coordination</h4>
                        <p className="text-sm text-gray-600">Dedicated program coordinators for each department ensuring quality delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Teaching-Learning Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Academic Calendar</h4>
                        <p className="text-sm text-gray-600">Structured program curriculum with planned subject allocation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Content Delivery</h4>
                        <p className="text-sm text-gray-600">Systematic teaching-learning timetable with detailed lesson plans</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Continuous Assessment</h4>
                        <p className="text-sm text-gray-600">Regular Continuous Internal Assessment (CIE) for performance tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Student Identification</h4>
                        <p className="text-sm text-gray-600">Early identification of weak and bright students through CIE for targeted support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* OBE Framework */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Outcome-Based Education (OBE) Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Program Educational Objectives (PEOs)</h3>
                  <p className="text-sm text-blue-700">
                    Broad statements describing career and professional accomplishments graduates are expected to achieve
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-green-800 mb-2">Program Outcomes (POs)</h3>
                  <p className="text-sm text-green-700">
                    Attributes that students should possess upon graduation from the program
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Program Specific Outcomes (PSOs)</h3>
                  <p className="text-sm text-purple-700">
                    Specific skills and knowledge related to the particular engineering discipline
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Framework */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Assessment & Evaluation Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Course Outcomes Assessment</h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">CIE & SEE Course Attainment</h4>
                      <p className="text-sm text-orange-700">
                        Comprehensive evaluation through Continuous Internal Evaluation (CIE) and 
                        Semester End Examination (SEE) for measuring course attainment levels.
                      </p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-800 mb-2">Continuous Improvement</h4>
                      <p className="text-sm text-teal-700">
                        Regular analysis of attainment levels with methodology changes implemented 
                        in subsequent academic years for enhanced learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Quality Enhancement Process</h3>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                          <span className="text-indigo-800 font-bold text-sm">1</span>
                        </div>
                        <span className="text-sm text-gray-700">Identification of weakly mapped POs and PSOs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                          <span className="text-indigo-800 font-bold text-sm">2</span>
                        </div>
                        <span className="text-sm text-gray-700">Analysis of curriculum gaps and enhancement opportunities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                          <span className="text-indigo-800 font-bold text-sm">3</span>
                        </div>
                        <span className="text-sm text-gray-700">Implementation of improved teaching methodologies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                          <span className="text-indigo-800 font-bold text-sm">4</span>
                        </div>
                        <span className="text-sm text-gray-700">Continuous monitoring and target achievement evaluation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department-wise Curriculum */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Department-wise Curriculum Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Civil Engineering</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Comprehensive curriculum covering structural design, construction technology, and infrastructure development.
                  </p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Structural Analysis & Design</li>
                    <li>• Construction Management</li>
                    <li>• Environmental Engineering</li>
                    <li>• Transportation Engineering</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Computer Science Engineering</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Modern curriculum with programming, software development, and emerging technologies.
                  </p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Data Structures & Algorithms</li>
                    <li>• Web Development</li>
                    <li>• Database Management</li>
                    <li>• Machine Learning</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Electronics & Communication</h4>
                  <p className="text-sm text-purple-700 mb-3">
                    Advanced electronics curriculum with communication systems and embedded technologies.
                  </p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Analog & Digital Electronics</li>
                    <li>• Communication Systems</li>
                    <li>• Microprocessors</li>
                    <li>• VLSI Design</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Electrical & Electronics</h4>
                  <p className="text-sm text-orange-700 mb-3">
                    Power systems and control engineering with renewable energy focus.
                  </p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Power Systems</li>
                    <li>• Control Systems</li>
                    <li>• Renewable Energy</li>
                    <li>• Industrial Automation</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Mechanical Engineering</h4>
                  <p className="text-sm text-red-700 mb-3">
                    Manufacturing and design-focused curriculum with modern CAD/CAM integration.
                  </p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Manufacturing Processes</li>
                    <li>• Thermal Engineering</li>
                    <li>• CAD/CAM</li>
                    <li>• Automation</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Mechatronics Engineering</h4>
                  <p className="text-sm text-indigo-700 mb-3">
                    Interdisciplinary curriculum combining mechanical, electrical, and computer engineering.
                  </p>
                  <ul className="text-xs text-indigo-600 space-y-1">
                    <li>• Robotics & Automation</li>
                    <li>• Control Systems</li>
                    <li>• Embedded Systems</li>
                    <li>• Industrial IoT</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}