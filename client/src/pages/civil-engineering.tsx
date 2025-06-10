import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Building, Users, Award, TrendingUp, Wrench, BookOpen, Target, Lightbulb, Heart, Book, Phone, Mail } from "lucide-react";
import mahadevaprabhuImage from "@assets/image_1748550145401.png";
import bhavyaImage from "@assets/image_1748550149780.png";
import akshaykumarImage from "@assets/image_1748550154217.png";
import roopeshkumarImage from "@assets/image_1748550159645.png";
import yogithaImage from "@assets/image_1748550164280.png";
import manjuImage from "@assets/image_1748550170498.png";
import basavannaImage from "@assets/image_1749574013992.png";

export default function CivilEngineering() {
  const facultyMembers = [
    {
      id: 1,
      name: "Mahadevaprabhu K M",
      designation: "HOD (Head of Department)",
      qualification: "BE (Civil Engineering)",
      dateOfJoining: "13/07/2009",
      experience: "15+ years Teaching (4 years as HOD)",
      phone: "9448601503",
      email: "Mahadevaprabhu1968@gmail.com",
      profilePdf: "/attached_assets/Mahadev PRABHU  CE 2024_1749580150654.pdf",
      specialization: "Civil Engineering, Construction Management",
      image: mahadevaprabhuImage,
      hasProfile: true,
      positions: "HOD (2020-present), Lecturer (2009-2020)"
    },
    {
      id: 2,
      name: "Bhavya M",
      designation: "Lecturer",
      qualification: "BE (Civil Engineering), MTech (Industrial Structures)",
      dateOfJoining: "22/07/2011",
      experience: "13+ years Teaching",
      phone: "6363719856",
      email: "Bhavyaprasana2010@gmail.com",
      profilePdf: "/attached_assets/bhavya maam_1749580150654.pdf",
      specialization: "Civil Engineering, Industrial Structures",
      image: bhavyaImage,
      hasProfile: true,
      positions: "Lecturer (2011-present)"
    },
    {
      id: 3,
      name: "Akshay Kumar S",
      designation: "Lecturer",
      qualification: "BE (Civil Engineering), MTech (Industrial Structures)",
      dateOfJoining: "10/10/2013",
      experience: "11+ years Teaching",
      phone: "9480191606",
      email: "sakshyakumar@jsspolytechnic.org",
      profilePdf: "/attached_assets/AKSHAY_1749580150653.pdf",
      specialization: "Civil Engineering, Industrial Structures, Geotechnical Engineering",
      image: akshaykumarImage,
      hasProfile: true,
      positions: "Lecturer, Warden (Boys Hostel 2022-present)"
    },
    {
      id: 4,
      name: "Roopeshkumar B",
      designation: "Lecturer",
      qualification: "BE (Civil Engineering), MTech (Industrial Structures)",
      dateOfJoining: "16/07/2014",
      experience: "10+ years Teaching",
      phone: "8618827079",
      email: "roopesh@jsspolytechnic.org",
      profilePdf: "/attached_assets/roopesh_1749580150653.pdf",
      specialization: "Civil Engineering, Industrial Structures, Geospatial Technologies",
      image: roopeshkumarImage,
      hasProfile: true,
      positions: "Lecturer (2014-present)"
    },
    {
      id: 5,
      name: "Yogitha H M",
      designation: "Lecturer",
      qualification: "BE (Civil Engineering)",
      dateOfJoining: "04/02/2016",
      experience: "8+ years Teaching",
      phone: "8884191079",
      email: "yogitha@jsspolytechnic.org",
      profilePdf: "/attached_assets/yogitha CE_1749580150652.pdf",
      specialization: "Civil Engineering, GIS Applications, Municipal Solid Waste Management",
      image: yogithaImage,
      hasProfile: true,
      positions: "Lecturer (2016-present)"
    }
  ];

  const supportingStaff = [
    {
      name: "Manju B",
      designation: "Lab helper",
      qualification: "ITI",
      image: manjuImage
    },
    {
      name: "Basavanna",
      designation: "Non Teaching Staff",
      qualification: "ITI",
      image: basavannaImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Building className="h-12 w-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Civil Engineering</h1>
            </div>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Building tomorrow's infrastructure with sustainable and ethical engineering practices since 2007
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-yellow-500 text-blue-900 px-4 py-2 text-sm font-semibold">
                <Users className="h-4 w-4 mr-2" />
                Intake: 40 Students
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-4 py-2 text-sm font-semibold">
                <Award className="h-4 w-4 mr-2" />
                AICTE Approved
              </Badge>
              <Badge variant="secondary" className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <TrendingUp className="h-4 w-4 mr-2" />
                Established 2007
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-l-4 border-l-blue-600 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Target className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To develop efficient Civil Engineering professionals who serve competently, collaboratively, 
                and ethically to create a sustainable world and enhance the quality of life.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Lightbulb className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M1:</span>
                  <span>To impart quality education & practical training in collaboration with industry through prescribed curriculum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M2:</span>
                  <span>To develop professionally skilled and ethical planners, designers & constructors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M3:</span>
                  <span>To develop leadership skills in decision making while shaping public, environmental & infrastructure policy.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Program Educational Objectives */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Heart className="h-6 w-6" />
              Program Educational Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-blue-900 mb-2">PEO1:</p>
                <p className="text-gray-700">Apply technical knowledge in analyzing civil engineering problems, with maximum economic benefits to society and minimum environmental damage.</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Users className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-yellow-900 mb-2">PEO2:</p>
                <p className="text-gray-700">Enhance soft skills to work as leaders, team members and contribute to nation building.</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-green-900 mb-2">PEO3:</p>
                <p className="text-gray-700">Commit to professional ethics focusing on quality, safety and environmental sustainability in all professional activities.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HOD Message */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              From HOD's Desk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 items-start">
              <div className="text-center">
                <img 
                  src={mahadevaprabhuImage} 
                  alt="Mahadevaprabhu K M - Head of Department"
                  className="w-32 h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
                />
                <h3 className="font-semibold text-blue-900">Mahadevaprabhu K M</h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">BE, 14+ years experience</p>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Civil Engineering Department was established in the year 2007, recognized by DTE, Bengaluru 
                    and affiliated to AICTE, New Delhi. The current intake is 40 students.
                  </p>
                  <p>
                    The department is committed to educating students in the field of Civil Engineering, with 
                    professional skills and ethical values through teaching-learning process and develop them 
                    to face societal challenges and meet the needs of stakeholders.
                  </p>
                  <p>
                    The program has well-equipped Civil Engineering laboratories with adequate facilities and 
                    high-end equipment. As part of academic curriculum, students take up industrial visits and 
                    internships to augment much needed practical exposure.
                  </p>
                  <p>
                    Many students are serving at reputed organizations like RAMCO, Shobha Constructions and 
                    those pursuing higher studies are studying in prestigious Engineering colleges like PESIT, SJCE, NIE.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Profiles Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              Faculty Profiles - Civil Engineering
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
                      {faculty.positions && (
                        <div>
                          <span className="font-medium text-gray-700">Positions:</span>
                          <span className="text-gray-600 ml-1 text-xs">{faculty.positions}</span>
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

        {/* Supporting Staff */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Wrench className="h-6 w-6" />
              List of Supporting Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-yellow-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-yellow-900">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-yellow-900">Image</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-yellow-900">Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-yellow-900">Designation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-yellow-900">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {supportingStaff.map((staff, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        {staff.image ? (
                          <img 
                            src={staff.image} 
                            alt={staff.name}
                            className="w-16 h-20 object-cover rounded mx-auto shadow-sm"
                          />
                        ) : (
                          <div className="w-16 h-20 bg-gray-200 rounded mx-auto flex items-center justify-center">
                            <Users className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{staff.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{staff.designation}</td>
                      <td className="border border-gray-300 px-4 py-3">{staff.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Department Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Wrench className="h-6 w-6" />
                Facilities & Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Well-equipped Civil Engineering laboratories with high-end equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Industrial visits and internships for practical exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Guest lectures by industry personnel and entrepreneurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Unlimited free internet access at e-Library</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <TrendingUp className="h-6 w-6" />
                Career Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Industry Placements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>RAMCO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Shobha Constructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Higher Education</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>PESIT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>SJCE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>NIE</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Curriculum Structure */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Book className="h-6 w-6" />
              Curriculum Structure & Syllabus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <h3 className="text-lg font-bold mb-2">1st Year</h3>
                <p className="text-sm">Foundation Courses</p>
                <a 
                  href="/attached_assets/civil 1st year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-blue-600 rounded text-sm hover:bg-blue-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <h3 className="text-lg font-bold mb-2">2nd Year</h3>
                <p className="text-sm">Core Engineering</p>
                <a 
                  href="/attached_assets/civil 2nd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-indigo-600 rounded text-sm hover:bg-indigo-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <h3 className="text-lg font-bold mb-2">3rd Year</h3>
                <p className="text-sm">Specialization</p>
                <a 
                  href="/attached_assets/civil 3rd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-purple-600 rounded text-sm hover:bg-purple-50"
                >
                  View Syllabus
                </a>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Program Outcomes (POs)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Apply knowledge of basic mathematics, science and engineering fundamentals</li>
                <li>• Identify and analyze well-defined engineering problems using standard methods</li>
                <li>• Design solutions for technical problems and assist with system design</li>
                <li>• Apply modern engineering tools and conduct standard tests and measurements</li>
                <li>• Apply appropriate technology in context of society, sustainability and environment</li>
                <li>• Use engineering management principles and communicate effectively</li>
                <li>• Engage in life-long learning and updating in the context of technological changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}