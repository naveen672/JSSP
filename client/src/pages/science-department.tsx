import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, ExternalLink, Phone, Mail, Award, Target } from "lucide-react";
import pankajaImage from "@assets/image_1749580328288.png";
import arunImage from "@assets/image_1749580355804.png";
import geethaImage from "@assets/image_1749580381067.png";
import chaitraImage from "@assets/image_1749580418912.png";

export default function ScienceDepartment() {
  const facultyMembers = [
    {
      id: 1,
      name: "Pankaja H N",
      designation: "HOD (Head of Department)",
      qualification: "MSc (Mathematics)",
      dateOfJoining: "28/07/2004",
      experience: "30+ years Teaching",
      phone: "9886975805",
      email: "pankajahn17@gmail.com",
      profilePdf: "/attached_assets/PANKAJA H N_1749580425407.pdf",
      specialization: "Mathematics, Statistics and Analytics, Environmental Sustainability",
      image: pankajaImage,
      hasProfile: true,
      coursesHandled: "Statistics and Analytics, Engineering Mathematics, Environmental Sustainability"
    },
    {
      id: 2,
      name: "Arun N S",
      designation: "Lecturer",
      qualification: "MA, MPhil (English)",
      dateOfJoining: "01/07/2003",
      experience: "21+ years Teaching",
      phone: "9986397221",
      email: "arunnsofficial@gmail.com",
      profilePdf: "/attached_assets/arun sir_1749580425406.pdf",
      specialization: "English Communication, Communication Skills Development",
      image: arunImage,
      hasProfile: true,
      coursesHandled: "English Communication, Communication Skills in English, Communication Skills Development"
    },
    {
      id: 3,
      name: "Geeta M",
      designation: "Lecturer",
      qualification: "MSc (Mathematics - Graph Theory)",
      dateOfJoining: "17/07/2010",
      experience: "16+ years Teaching",
      phone: "9538778534",
      email: "geetha.m927@gmail.com",
      profilePdf: "/attached_assets/geetha_1749580425406.pdf",
      specialization: "Mathematics, Graph Theory, Statistics and Analytics",
      image: geethaImage,
      hasProfile: true,
      coursesHandled: "Engineering Mathematics, Statistics and Analytics Lab, Environmental Sustainability"
    },
    {
      id: 4,
      name: "Chaithra S N",
      designation: "Lecturer",
      qualification: "MSc (Physics - Nuclear Physics)",
      dateOfJoining: "21/12/2022",
      experience: "12+ years Teaching",
      phone: "9880251957",
      email: "mouna.chaithu@gmail.com",
      profilePdf: "/attached_assets/chaitra SN_1749580425405.pdf",
      specialization: "Physics, Nuclear Physics, Environmental Sustainability",
      image: chaitraImage,
      hasProfile: true,
      coursesHandled: "Statistics and Analytics, Engineering Mathematics, Environmental Sustainability"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Science & Humanities Department</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Providing foundational science education with experienced faculty dedicated to academic excellence in mathematics, physics, and English communication.
          </p>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About Science & Humanities Department</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Science & Humanities Department at JSS Polytechnic plays a crucial role in providing strong foundational knowledge 
              in mathematics, physics, and English communication to all engineering students. Our dedicated faculty members ensure 
              that students develop a solid understanding of scientific principles and communication skills that form the backbone of engineering education.
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

      {/* Faculty Profiles Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Users className="h-6 w-6" />
                Faculty Profiles - Science & Humanities Department
              </CardTitle>
              <p className="text-gray-600 mt-2">Click on "View Profile" to access detailed faculty information and achievements</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {facultyMembers.map((faculty, index) => (
                  <Card key={faculty.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <img 
                          src={faculty.image || "/api/placeholder/150/180"} 
                          alt={faculty.name}
                          className="w-24 h-28 object-cover rounded-lg mx-auto shadow-md mb-3"
                        />
                        <h3 className="font-bold text-lg text-gray-800">{faculty.name}</h3>
                        <p className="text-blue-600 font-medium">{faculty.designation}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Qualification:</span>
                          <span className="text-gray-600 ml-1 text-xs">{faculty.qualification}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Experience:</span>
                          <span className="text-gray-600 ml-1">{faculty.experience}</span>
                        </div>
                        {faculty.specialization && (
                          <div>
                            <span className="font-medium text-gray-700">Specialization:</span>
                            <span className="text-gray-600 ml-1 text-xs">{faculty.specialization}</span>
                          </div>
                        )}
                        {faculty.coursesHandled && (
                          <div>
                            <span className="font-medium text-gray-700">Courses:</span>
                            <span className="text-gray-600 ml-1 text-xs">{faculty.coursesHandled}</span>
                          </div>
                        )}
                        {faculty.email && (
                          <div>
                            <span className="font-medium text-gray-700">Email:</span>
                            <span className="text-gray-600 ml-1 text-xs">{faculty.email}</span>
                          </div>
                        )}
                        {faculty.phone && (
                          <div>
                            <span className="font-medium text-gray-700">Phone:</span>
                            <span className="text-gray-600 ml-1">{faculty.phone}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 text-center">
                        {faculty.profilePdf ? (
                          <a
                            href={faculty.profilePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                          >
                            <BookOpen className="h-4 w-4" />
                            View Profile
                          </a>
                        ) : (
                          <Button
                            disabled
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-400 text-white text-sm rounded-lg cursor-not-allowed"
                          >
                            <BookOpen className="h-4 w-4" />
                            Profile Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Faculty Summary Table */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-medium text-gray-700">Name</th>
                        <th className="text-left py-2 font-medium text-gray-700">Designation</th>
                        <th className="text-left py-2 font-medium text-gray-700">Qualification</th>
                        <th className="text-left py-2 font-medium text-gray-700">Experience</th>
                        <th className="text-left py-2 font-medium text-gray-700">Joining Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultyMembers.map((faculty, index) => (
                        <tr key={faculty.id} className="border-b border-gray-200">
                          <td className="py-2 text-gray-800">{faculty.name}</td>
                          <td className="py-2 text-gray-600">{faculty.designation}</td>
                          <td className="py-2 text-gray-600">{faculty.qualification}</td>
                          <td className="py-2 text-gray-600">{faculty.experience}</td>
                          <td className="py-2 text-gray-600">{faculty.dateOfJoining}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Department Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Department Mission</h2>
            
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide comprehensive foundational knowledge in sciences and humanities that forms the basis for all engineering 
                  disciplines, fostering analytical thinking, problem-solving skills, communication abilities, and scientific temperament among students.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Our Objectives</h3>
                    <ul className="text-sm text-gray-700 space-y-1 text-left">
                      <li>• Build strong mathematical foundation for engineering applications</li>
                      <li>• Develop understanding of physical principles and phenomena</li>
                      <li>• Foster analytical and problem-solving capabilities</li>
                      <li>• Enhance communication skills in English</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Teaching Approach</h3>
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

      {/* Subjects Offered */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Subjects Offered</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Mathematics</h3>
                  <p className="text-sm text-gray-600">
                    Engineering Mathematics, Statistics and Analytics, Environmental Sustainability
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Physics</h3>
                  <p className="text-sm text-gray-600">
                    Nuclear Physics, Engineering Physics, Environmental Sustainability
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">English</h3>
                  <p className="text-sm text-gray-600">
                    English Communication, Communication Skills Development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}