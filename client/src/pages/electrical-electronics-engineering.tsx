import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Zap, Users, Award, TrendingUp, Wrench, BookOpen, Target, Lightbulb, Heart, Building, UserCheck, Eye, Phone, Mail } from "lucide-react";
import eeLabImage from "@assets/image_1748550277173.png";
import prathibhaImage from "@assets/image_1748550345818.png";
import sadhanaImage from "@assets/image_1748550350454.png";
import snehaImage from "@assets/image_1748550355128.png";
import shwethaImage from "@assets/image_1748550359272.png";
import vidyaImage from "@assets/image_1748550364015.png";
import prashanthImage from "@assets/image_1748550368847.png";
import ashwiniImage from "@assets/image_1749574037427.png";
import raviSkImage from "@assets/image_1749574049944.png";
import somashekaraImage from "@assets/image_1749574058431.png";
import madhusudhanImage from "@assets/image_1749574066759.png";

export default function ElectricalElectronicsEngineering() {
  const facultyMembers = [
    {
      id: 1,
      name: "Prathibha D",
      designation: "HOD",
      qualification: "BE, MTech",
      dateOfJoining: "Data not available",
      experience: "16+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: "/attached_assets/prathibha maam_1749579518162.pdf",
      specialization: "Power Electronics, Digital Electronics, Embedded Systems",
      image: prathibhaImage,
      hasProfile: true
    },
    {
      id: 2,
      name: "Sadhana M V",
      designation: "Lecturer",
      qualification: "BE, MTech",
      dateOfJoining: "Data not available",
      experience: "14+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: "/attached_assets/sadhana maam_1749579518162.pdf",
      specialization: "Power Electronics, Analog & Digital Electronics, Power Systems",
      image: sadhanaImage,
      hasProfile: true
    },
    {
      id: 3,
      name: "Sneha S",
      designation: "Lecturer",
      qualification: "BE, MTech",
      dateOfJoining: "Data not available",
      experience: "14+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: "/attached_assets/sneha maam_1749579518162.pdf",
      specialization: "DC Machines, Transformers, Transmission & Distribution",
      image: snehaImage,
      hasProfile: true
    },
    {
      id: 4,
      name: "Shwetha M P",
      designation: "Lecturer",
      qualification: "BE, MTech",
      dateOfJoining: "Data not available",
      experience: "13+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: "/attached_assets/shwetha M P_1749579518162.pdf",
      specialization: "Electrical Circuits, Power Generation, Communication Networks",
      image: shwethaImage,
      hasProfile: true
    },
    {
      id: 5,
      name: "Vidya S K",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "Data not available",
      experience: "9+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: "/attached_assets/vidya_1749579518161.pdf",
      specialization: "Power Electronics, Industrial Drives, Transmission & Distribution",
      image: vidyaImage,
      hasProfile: true
    },
    {
      id: 6,
      name: "Ashwini",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "22/07/2011",
      experience: "12+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Electrical Engineering",
      image: ashwiniImage,
      hasProfile: false
    }
  ];

  const supportingStaff = [
    {
      name: "Madhusudhan N B",
      designation: "Instructor",
      qualification: "BE",
      image: madhusudhanImage
    },
    {
      name: "Ravi S K",
      designation: "Non Teaching Staff",
      qualification: "ITI",
      image: raviSkImage
    },
    {
      name: "Somashekara A N",
      designation: "Non Teaching Staff",
      qualification: "ITI",
      image: somashekaraImage
    },
    {
      name: "Prashanth H S",
      designation: "Helper",
      qualification: "ITI",
      image: prashanthImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Zap className="h-12 w-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Electrical & Electronics Engineering</h1>
            </div>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Powering innovation and excellence in electrical engineering education since 2007
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
                Established 2007-08
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
                To be an excellent centre for the fundamental education in the field of Electrical & 
                Electronics Engineering and to reach the needs of industry, academia and community.
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
                  <span>To provide quality education in Electrical & Electronics Engineering for increasing opportunities in higher education & employment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M2:</span>
                  <span>To impart value-based education by providing professional ethics & good communication skills to meet societal challenges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M3:</span>
                  <span>To provide practical knowledge by collaborating with industry, research organizations and academia to encourage creativity and innovation.</span>
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
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-gray-700">Graduates will pursue higher education in their chosen field.</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-gray-700">Graduates will have successful career opportunities in Electrical & Electronics industries and other institutions.</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-gray-700">Graduates will exhibit leadership qualities with professional ethics for the development of society.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Laboratory */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Zap className="h-6 w-6" />
              Electrical & Electronics Laboratory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={eeLabImage} 
                  alt="Electrical and Electronics Engineering Laboratory with students working on equipment"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our well-equipped Electrical & Electronics Engineering laboratory provides students with 
                  hands-on experience using modern electrical equipment and measurement instruments. 
                  The lab supports comprehensive practical training aligned with curriculum requirements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Advanced electrical measurement equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Power systems simulation tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Electronics circuit design stations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Industrial automation equipment</span>
                  </li>
                </ul>
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
                  src={prathibhaImage} 
                  alt="Prathibha B - Head of Department"
                  className="w-32 h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
                />
                <h3 className="font-semibold text-blue-900">Prathibha B</h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">MTech, 15+ years experience</p>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Electrical and Electronics Engineering programme was established in the year 2007-08, 
                    recognised by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 40 students.
                  </p>
                  <p>
                    The department has well qualified and experienced teaching faculty. The core courses of 
                    Electrical and Electronics Engineering programme offers a variety of opportunities to 
                    aspirants be it for securing employment or to grow as an entrepreneur.
                  </p>
                  <p>
                    At the end of the course, students will be able to apply the knowledge acquired to 
                    identify, design/redesign and solve Engineering problems.
                  </p>
                  <p>
                    Many students are either employees of prestigious organisations like L&T, TRIPHASE Technology, 
                    Asian Paints, ABB, Toyota Kirloskar, Wipro or pursuing their higher studies in coveted 
                    institutions, like RVCE, SJCE, NIE.
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
              Faculty Profiles - Electrical & Electronics Engineering
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
                      <p className="text-blue-600 font-medium">{faculty.designation}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Qualification:</span>
                        <span className="text-gray-600 ml-1">{faculty.qualification}</span>
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
                      <tr key={index} className="border-b border-gray-200">
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
                <Zap className="h-6 w-6" />
                Facilities & Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Well-equipped laboratories with modern electrical equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Unlimited free internet access at e-Library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Industry collaboration for practical training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Professional ethics and communication skills development</span>
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
                      <span>L&T</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>TRIPHASE Technology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Asian Paints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>ABB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Toyota Kirloskar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Wipro</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Higher Education</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                      <span>RVCE</span>
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
              <BookOpen className="h-6 w-6" />
              Curriculum Structure & Syllabus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <h3 className="text-lg font-bold mb-2">1st Year</h3>
                <p className="text-sm">Foundation Courses</p>
                <a 
                  href="/attached_assets/E&E 1st year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-blue-600 rounded text-sm hover:bg-blue-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <h3 className="text-lg font-bold mb-2">2nd Year</h3>
                <p className="text-sm">Core Electrical</p>
                <a 
                  href="/attached_assets/E&E 2nd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-indigo-600 rounded text-sm hover:bg-indigo-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <h3 className="text-lg font-bold mb-2">3rd Year</h3>
                <p className="text-sm">Industrial Applications</p>
                <a 
                  href="/attached_assets/E&E 3rd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-purple-600 rounded text-sm hover:bg-purple-50"
                >
                  View Syllabus
                </a>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Program Educational Objectives</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Excel in Electrical and Electronics Engineering field and apply knowledge in diverse fields</li>
                <li>• Contribute Electrical and Electronics Engineering skills ethically</li>
                <li>• Promote professional development, entrepreneurship and continuing education</li>
                <li>• Create enthusiasm for life-long learning and career growth</li>
              </ul>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}