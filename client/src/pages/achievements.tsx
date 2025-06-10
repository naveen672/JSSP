import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy, Users, BookOpen, Target, Star } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Achievements & Recognitions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JSS Polytechnic takes pride in the outstanding achievements of our faculty and students, 
            demonstrating excellence in academics, research, and professional development.
          </p>
        </div>

        {/* Faculty Achievements */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Faculty Achievements & Recognitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Professional Development</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Higher Education Qualifications</h4>
                      <p className="text-sm text-blue-700">
                        Multiple faculty members have advanced from BE to MTech qualifications, 
                        demonstrating continuous professional growth and commitment to excellence.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Faculty Development Initiatives</h4>
                      <p className="text-sm text-green-700">
                        Regular participation in Faculty Development Programs (FDP) to stay updated 
                        with latest technological advancements and teaching methodologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Academic Excellence</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Research Contributions</h4>
                      <p className="text-sm text-purple-700">
                        Faculty members actively contribute to research through publications, 
                        conferences, and technical seminars at national and international levels.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Industry Collaboration</h4>
                      <p className="text-sm text-orange-700">
                        Strong industry partnerships and collaborative projects with leading 
                        companies for practical exposure and skill development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Performance */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Student Performance Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Final Year Results</h3>
                  <p className="text-blue-700">
                    Consistently high pass percentage in final year examinations across all departments
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Placement Success</h3>
                  <p className="text-green-700">
                    Outstanding placement records with students placed in top companies
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Higher Education</h3>
                  <p className="text-purple-700">
                    Significant number of students pursuing higher education through DCET and other programs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placement Details */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Placement Achievements (2018-2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Recent Placement Success (2023-2024)</h3>
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Our placement cell has achieved remarkable success in placing students across various 
                      leading companies in the industry. The comprehensive training and industry exposure 
                      provided to students has resulted in excellent placement opportunities.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">100+</div>
                        <div className="text-sm text-gray-600">Students Placed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">50+</div>
                        <div className="text-sm text-gray-600">Partner Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Placement Trends (2018-2021 Batch)</h3>
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Consistent improvement in placement percentages and salary packages over the years. 
                      Our students have been successfully placed in core engineering companies as well as 
                      IT sector organizations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Overall Placement Rate</span>
                        <span className="font-semibold text-green-600">85%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Core Engineering Jobs</span>
                        <span className="font-semibold text-green-600">60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">IT Sector Placements</span>
                        <span className="font-semibold text-green-600">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quality Assurance Initiatives */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Quality Assurance & Accreditation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Institutional Quality Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Program Assessment Committee (PAC)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Program Advisory Committee</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Internal Quality Assurance Cell (IQAC)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Faculty Development Initiatives</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Assessment Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Outcome-Based Education (OBE) Process</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-sm">Continuous Internal Assessment</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Faculty & Facility Feedback Systems</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">Academic Performance Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Support Achievements */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Student Support & Welfare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Student-Centric Policies & Utilization</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Group Accident Insurance</h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Student Group Accident Policy from JSS Mahavidyapeetha provides comprehensive coverage for all students.
                    </p>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <div className="text-sm text-gray-600">Recent Utilization:</div>
                      <div className="font-semibold text-blue-800">5 students claimed ₹1,48,769</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Comprehensive Support Services</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 24/7 Medical assistance and emergency support</li>
                      <li>• Counseling and mentoring programs</li>
                      <li>• Financial aid and scholarship opportunities</li>
                      <li>• Career guidance and placement assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}