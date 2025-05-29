import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calendar, ExternalLink } from "lucide-react";

export default function ScienceDepartment() {
  const facultyMembers = [
    {
      slNo: 1,
      name: "Pankaja",
      qualification: "MSc",
      designation: "HOD",
      dateOfJoining: "28/7/2004",
      profileLink: "#"
    },
    {
      slNo: 2,
      name: "Arun",
      qualification: "MPhil",
      designation: "Lecturer",
      dateOfJoining: "07-01-2003",
      profileLink: "#"
    },
    {
      slNo: 3,
      name: "Geetha",
      qualification: "MSc",
      designation: "Lecturer",
      dateOfJoining: "17/7/2010",
      profileLink: "#"
    },
    {
      slNo: 4,
      name: "Chaitra",
      qualification: "MSc",
      designation: "Lecturer",
      dateOfJoining: "21/12/2022",
      profileLink: "#"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Science Department</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Providing foundational science education with experienced faculty dedicated to academic excellence in mathematics, physics, and chemistry.
          </p>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About Science Department</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Science Department at JSS Polytechnic plays a crucial role in providing strong foundational knowledge 
              in mathematics, physics, and chemistry to all engineering students. Our dedicated faculty members ensure 
              that students develop a solid understanding of scientific principles that form the backbone of engineering education.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Years Average Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">All</div>
                <div className="text-gray-600">Engineering Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Faculty Members</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Sl No</th>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Qualification</th>
                    <th className="px-6 py-4 text-left">Designation</th>
                    <th className="px-6 py-4 text-left">Date of Joining</th>
                    <th className="px-6 py-4 text-left">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyMembers.map((faculty, index) => (
                    <tr key={faculty.slNo} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-primary">{faculty.slNo}</td>
                      <td className="px-6 py-4 font-semibold text-gray-700">{faculty.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{faculty.qualification}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={faculty.designation === "HOD" ? "default" : "secondary"}>
                          {faculty.designation}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{faculty.dateOfJoining}</td>
                      <td className="px-6 py-4">
                        <a 
                          href={faculty.profileLink}
                          className="inline-flex items-center space-x-1 text-accent hover:text-primary transition-colors"
                        >
                          <span className="text-sm">click here to view</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Faculty</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.slNo} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{faculty.name}</h3>
                  <Badge className="mb-2">{faculty.designation}</Badge>
                  <p className="text-sm text-gray-600 mb-2">{faculty.qualification}</p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>Joined: {faculty.dateOfJoining}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Leadership */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Department Leadership</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-accent" />
                  <span>Head of Department</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Pankaja</h3>
                    <Badge className="mb-3">Head of Department</Badge>
                    <p className="text-gray-700 mb-2">
                      <strong>Qualification:</strong> MSc
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Experience:</strong> Serving since July 28, 2004
                    </p>
                    <p className="text-gray-600 text-sm">
                      Leading the Science Department with over 19 years of dedicated service, 
                      ensuring quality education in foundational sciences for all engineering students.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Subjects Offered</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Mathematics</h3>
                  <p className="text-sm text-gray-600">
                    Engineering Mathematics, Applied Mathematics, Statistics, and Numerical Methods
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Physics</h3>
                  <p className="text-sm text-gray-600">
                    Engineering Physics, Applied Physics, and Physics Laboratory
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Chemistry</h3>
                  <p className="text-sm text-gray-600">
                    Engineering Chemistry, Applied Chemistry, and Chemistry Laboratory
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Department Mission</h2>
            
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide comprehensive foundational knowledge in sciences that forms the basis for all engineering 
                  disciplines, fostering analytical thinking, problem-solving skills, and scientific temperament among students.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Our Objectives</h3>
                    <ul className="text-sm text-gray-700 space-y-1 text-left">
                      <li>• Build strong mathematical foundation for engineering applications</li>
                      <li>• Develop understanding of physical principles and phenomena</li>
                      <li>• Foster analytical and problem-solving capabilities</li>
                      <li>• Encourage scientific research and innovation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Teaching Approach</h3>
                    <ul className="text-sm text-gray-700 space-y-1 text-left">
                      <li>• Interactive and practical learning methods</li>
                      <li>• Application-oriented teaching</li>
                      <li>• Laboratory-based learning experiences</li>
                      <li>• Regular assessment and feedback</li>
                    </ul>
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