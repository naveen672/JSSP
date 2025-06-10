import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, Building2, Target, Eye, Book, UserCheck, Calendar, MapPin, Building, BookOpen, Mail, Phone } from "lucide-react";

export default function MechanicalEngineering() {
  const facultyMembers = [
    {
      id: 1,
      image: null,
      name: "Prashanthkumar N Malavade",
      designation: "Lecturer",
      qualification: "MTech (Engineering Management), BE (Mechanical Engineering)",
      dateOfJoining: "25/03/1998",
      experience: "26+ years Teaching",
      phone: "9980265133",
      email: "pnm@jsspolytechnic.org",
      profilePdf: "/attached_assets/PNM sir_1749578783714.pdf",
      specialization: "Engineering Management, Mechanical Systems Design",
      hasProfile: true
    },
    {
      id: 2,
      image: null,
      name: "Chandrashekhara Murthy K B",
      designation: "Lecturer",
      qualification: "BE (Mechanical Engineering), Diploma (Mechanical Engineering)",
      dateOfJoining: "01/01/2009",
      experience: "15+ years Teaching, 5 years Industry",
      phone: "9448558571",
      email: "kbc@jsspolytechnic.org",
      profilePdf: "/attached_assets/Chandrashekhara Murthy K B_1749578783713.pdf",
      specialization: "Manufacturing Processes, Engineering Metrology",
      hasProfile: true
    },
    {
      id: 3,
      image: null,
      name: "Uday R",
      designation: "Lecturer",
      qualification: "MTech (Maintenance & Engineering), BE (Industrial & Production Engineering)",
      dateOfJoining: "26/02/2024",
      experience: "New Faculty Member",
      phone: "7892235595",
      email: "udayraj987654@gmail.com",
      profilePdf: "/attached_assets/Uday_1749578783714.pdf",
      specialization: "Industrial Engineering, Production Systems, Maintenance Engineering",
      hasProfile: true
    },
    {
      id: 4,
      image: null,
      name: "Faculty Member 4",
      designation: "Lecturer",
      qualification: "To be updated",
      dateOfJoining: "To be updated",
      experience: "Profile will be added soon",
      phone: "To be updated",
      email: "To be updated",
      profilePdf: null,
      specialization: "To be updated",
      hasProfile: false
    },
    {
      id: 5,
      image: null,
      name: "Faculty Member 5",
      designation: "Lecturer",
      qualification: "To be updated",
      dateOfJoining: "To be updated",
      experience: "Profile will be added soon",
      phone: "To be updated",
      email: "To be updated",
      profilePdf: null,
      specialization: "To be updated",
      hasProfile: false
    },
    {
      id: 6,
      image: null,
      name: "Faculty Member 6",
      designation: "Lecturer",
      qualification: "To be updated",
      dateOfJoining: "To be updated",
      experience: "Profile will be added soon",
      phone: "To be updated",
      email: "To be updated",
      profilePdf: null,
      specialization: "To be updated",
      hasProfile: false
    }
  ];

  const supportingStaff = [
    {
      id: 1,
      image: null,
      name: "Supporting Staff 1",
      designation: "Instructor",
      qualification: "To be updated"
    },
    {
      id: 2,
      image: null,
      name: "Supporting Staff 2",
      designation: "Mechanic",
      qualification: "To be updated"
    },
    {
      id: 3,
      image: null,
      name: "Supporting Staff 3",
      designation: "Lab Helper",
      qualification: "To be updated"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-10 w-10 text-yellow-400" />
                <Badge variant="secondary" className="bg-yellow-400 text-green-900 font-semibold">
                  Established 1987
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mechanical Engineering
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Excellence in mechanical engineering education with hands-on practical training and industry-focused curriculum since 1987
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>60 Students Intake</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>AICTE Approved</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Mechanical Engineering Laboratory"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-l-4 border-l-green-600 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Eye className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To excel in mechanical engineering education by providing quality technical education 
                that develops competent professionals capable of meeting industrial and societal needs 
                through innovation and sustainable practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-600 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <Target className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                  To provide quality technical education in mechanical engineering
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                  To develop skilled professionals for industry and entrepreneurship
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                  To promote research and innovation in mechanical engineering
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Laboratory */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <Building className="h-6 w-6" />
              Mechanical Engineering Laboratory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Mechanical Engineering Laboratory with advanced machinery"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our comprehensive Mechanical Engineering laboratory is equipped with state-of-the-art 
                  machinery and testing equipment that support the complete curriculum. The lab provides 
                  hands-on experience with manufacturing processes, material testing, and thermal systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Advanced manufacturing machinery and tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Material testing and quality control equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Thermal engineering and fluid mechanics lab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    CAD/CAM and design visualization facilities
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HOD Message */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <Users className="h-6 w-6" />
              From HOD's Desk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 items-start">
              <div className="text-center">
                <img 
                  src="/api/placeholder/200/240" 
                  alt="Head of Department - Mechanical Engineering"
                  className="w-32 h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
                />
                <h3 className="font-semibold text-green-900">Head of Department</h3>
                <p className="text-sm text-gray-600">Department Head</p>
                <p className="text-sm text-gray-600">Profile to be updated</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Department of Mechanical Engineering was established in 1987 and has been at the forefront 
                  of technical education in Karnataka. It is recognized by DTE, Bengaluru and affiliated to AICTE, 
                  New Delhi. The current intake of students is 60 per year.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our department focuses on providing comprehensive mechanical engineering education with emphasis 
                  on practical training, industry exposure, and skill development. We maintain well-equipped 
                  laboratories that support hands-on learning and research activities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our graduates are well-prepared for careers in manufacturing, automotive, aerospace, energy, 
                  and other mechanical engineering sectors. Many pursue higher education in prestigious institutions 
                  while others contribute to industry through their technical expertise and innovative solutions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Profiles Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <Users className="h-6 w-6" />
              Faculty Profiles - Mechanical Engineering
            </CardTitle>
            <p className="text-gray-600 mt-2">Click on "View Profile" to access detailed faculty information and achievements</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {facultyMembers.map((faculty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img 
                        src={faculty.image || "/api/placeholder/150/180"} 
                        alt={faculty.name}
                        className="w-24 h-28 object-cover rounded-lg mx-auto shadow-md mb-3"
                      />
                      <h3 className="font-bold text-lg text-gray-800">{faculty.name}</h3>
                      <p className="text-green-600 font-medium">{faculty.designation}</p>
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
                      {faculty.email && faculty.email !== "To be updated" && (
                        <div>
                          <span className="font-medium text-gray-700">Email:</span>
                          <span className="text-gray-600 ml-1 text-xs">{faculty.email}</span>
                        </div>
                      )}
                      {faculty.phone && faculty.phone !== "To be updated" && (
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
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors shadow-md"
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
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 text-gray-800">{faculty.name}</td>
                        <td className="py-2 text-gray-600">{faculty.designation}</td>
                        <td className="py-2 text-gray-600 text-xs">{faculty.qualification}</td>
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

        {/* Supporting Staff Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <UserCheck className="h-6 w-6" />
              Supporting Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingStaff.map((staff, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <img 
                        src={staff.image || "/api/placeholder/100/120"} 
                        alt={staff.name}
                        className="w-16 h-20 object-cover rounded-lg mx-auto shadow-sm mb-3"
                      />
                      <h3 className="font-semibold text-gray-800">{staff.name}</h3>
                      <p className="text-green-600 text-sm">{staff.designation}</p>
                      <p className="text-gray-600 text-xs">{staff.qualification}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Department Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">60</div>
              <div className="text-gray-600">Student Intake</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-gray-600">Faculty Members</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">3</div>
              <div className="text-gray-600">Support Staff</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">37+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}