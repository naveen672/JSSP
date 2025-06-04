import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, BookOpen, TrendingUp, Calendar } from "lucide-react";

export default function MentoringScheme() {
  const mentoringProcess = [
    "The Head of the Department allocates Mentors, approximately 20 Mentees are allotted for each Mentor.",
    "Mentors' meetings are conducted once in a month.",
    "Details of Discussed matters with Mentees are recorded in the Mentors book.",
    "Action plans are initiated to bring the best out of the Mentoring system."
  ];

  const departmentWiseMentors = [
    { year: "2023-24", CE: 4, CS: 5, EC: 5, EE: 5, IS: 4, ME: 5, MC: 4, total: 32 },
    { year: "2022-23", CE: 4, CS: 5, EC: 6, EE: 5, IS: 4, ME: 6, MC: 4, total: 34 },
    { year: "2021-22", CE: 4, CS: 5, EC: 5, EE: 5, IS: 4, ME: 6, MC: 4, total: 33 },
    { year: "2020-21", CE: 4, CS: 5, EC: 5, EE: 5, IS: 4, ME: 6, MC: 4, total: 33 }
  ];

  const departmentData = [
    {
      name: "Civil Engineering",
      code: "CE",
      data: [
        { year: "2023-24", students: 103, mentors: 4, ratio: "1:26" },
        { year: "2022-23", students: 112, mentors: 4, ratio: "1:28" },
        { year: "2021-22", students: 115, mentors: 4, ratio: "1:29" },
        { year: "2020-21", students: 128, mentors: 4, ratio: "1:32" }
      ]
    },
    {
      name: "Computer Science and Engineering",
      code: "CS",
      data: [
        { year: "2023-24", students: 183, mentors: 5, ratio: "1:37" },
        { year: "2022-23", students: 163, mentors: 5, ratio: "1:33" },
        { year: "2021-22", students: 161, mentors: 5, ratio: "1:32" },
        { year: "2020-21", students: 170, mentors: 5, ratio: "1:34" }
      ]
    },
    {
      name: "Electronics and Communication Engineering",
      code: "EC",
      data: [
        { year: "2023-24", students: 164, mentors: 5, ratio: "1:33" },
        { year: "2022-23", students: 134, mentors: 6, ratio: "1:23" },
        { year: "2021-22", students: 81, mentors: 5, ratio: "1:16" },
        { year: "2020-21", students: 93, mentors: 5, ratio: "1:19" }
      ]
    },
    {
      name: "Electrical and Electronics Engineering",
      code: "EE",
      data: [
        { year: "2023-24", students: 127, mentors: 5, ratio: "1:26" },
        { year: "2022-23", students: 128, mentors: 5, ratio: "1:26" },
        { year: "2021-22", students: 109, mentors: 5, ratio: "1:22" },
        { year: "2020-21", students: 118, mentors: 5, ratio: "1:24" }
      ]
    },
    {
      name: "Information Science and Engineering",
      code: "IS",
      data: [
        { year: "2023-24", students: 76, mentors: 4, ratio: "1:19" },
        { year: "2022-23", students: 50, mentors: 3, ratio: "1:17" },
        { year: "2021-22", students: 40, mentors: 4, ratio: "1:10" },
        { year: "2020-21", students: 34, mentors: 4, ratio: "1:09" }
      ]
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      data: [
        { year: "2023-24", students: 165, mentors: 5, ratio: "1:33" },
        { year: "2022-23", students: 142, mentors: 6, ratio: "1:24" },
        { year: "2021-22", students: 122, mentors: 6, ratio: "1:21" },
        { year: "2020-21", students: 152, mentors: 6, ratio: "1:26" }
      ]
    },
    {
      name: "Mechatronics Engineering",
      code: "MC",
      data: [
        { year: "2023-24", students: 84, mentors: 4, ratio: "1:21" },
        { year: "2022-23", students: 69, mentors: 4, ratio: "1:18" },
        { year: "2021-22", students: 74, mentors: 4, ratio: "1:19" },
        { year: "2020-21", students: 83, mentors: 4, ratio: "1:21" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Mentoring Scheme
            </h1>
            <p className="text-xl text-blue-100 mb-2">Effective Student Guidance System</p>
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
                  <Users className="h-6 w-6 mr-3 text-primary" />
                  Mentoring System Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  The following are the process followed in JSS Polytechnic, Mysuru, for effective Mentoring system:
                </p>
                <div className="grid gap-4">
                  {mentoringProcess.map((process, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{process}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department-wise Mentors Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department-wise Mentors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Total number of mentors across all departments for the past four academic years
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Academic Year</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">CE</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">CS</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">EC</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">EE</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">IS</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">ME</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">MC</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentWiseMentors.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{row.year}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.CE}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.CS}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.EC}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.EE}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.IS}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.ME}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{row.MC}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-primary/5">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Department Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department-wise Student-Mentor Statistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of student strength and mentor-student ratios across departments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {departmentData.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Dept. of {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-primary">Years</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-primary">Students</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-primary">Mentors</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-primary">Ratio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dept.data.map((yearData, yearIndex) => (
                          <tr key={yearIndex} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2 font-medium">{yearData.year}</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">{yearData.students}</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">{yearData.mentors}</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {yearData.ratio}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mentoring System Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <p className="text-sm text-gray-600">Departments</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">32</div>
                <p className="text-sm text-gray-600">Total Mentors (2023-24)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">900+</div>
                <p className="text-sm text-gray-600">Total Students</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1:28</div>
                <p className="text-sm text-gray-600">Average Ratio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentoring Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Mentoring System</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Personalized Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Individual attention with approximately 20 students per mentor 
                  ensures personalized academic and career guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Regular Monitoring</h3>
                <p className="text-gray-600 text-sm">
                  Monthly meetings ensure continuous tracking of student progress 
                  and timely intervention when needed.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Documented Progress</h3>
                <p className="text-gray-600 text-sm">
                  All mentoring activities are recorded in mentor books, 
                  creating a comprehensive development record.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Abbreviations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Department Abbreviations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">CE</span>
                      <span className="text-sm text-gray-600">Civil Engineering</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">CS</span>
                      <span className="text-sm text-gray-600">Computer Science Engineering</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">EC</span>
                      <span className="text-sm text-gray-600">Electronics & Communication</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">EE</span>
                      <span className="text-sm text-gray-600">Electrical & Electronics</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">IS</span>
                      <span className="text-sm text-gray-600">Information Science Engineering</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">ME</span>
                      <span className="text-sm text-gray-600">Mechanical Engineering</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="font-medium">MC</span>
                      <span className="text-sm text-gray-600">Mechatronics Engineering</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Mentoring Support</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Student Mentoring Office</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For mentoring-related queries, contact your respective department Head of Department
                    </p>
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