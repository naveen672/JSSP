import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, Building2, Target, Eye, Book, UserCheck, Calendar, MapPin, Building, BookOpen, Mail, Phone, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { useState } from "react";
import ecLabImage from "@assets/image_1748550425145.png";
import drAshaKulkarniImage from "@assets/image_1748550430744.png";
import niranjanamurthyImage from "@assets/image_1748550435055.png";
import yogithaImage from "@assets/image_1748550439012.png";
import shilpaImage from "@assets/image_1748550443402.png";
import chandrashekara from "@assets/image_1749574090140.png";
import yamunaImage from "@assets/image_1749723594433.png";
import vimalaImage from "@assets/image_1749723600476.png";
import pavithraImage from "@assets/image_1749723606419.png";
import rashmiImage from "@assets/image_1749723611230.png";
import srikantamurthyImage from "@assets/image_1749723627247.png";
// Industrial visit images
import ecVisitImage1 from "@assets/WhatsApp Image 2024-03-07 at 3.34.02 PM (1)_1749581625987.jpeg";
import ecVisitImage2 from "@assets/WhatsApp Image 2024-03-07 at 3.34.02 PM_1749581628658.jpeg";
import ecVisitImage3 from "@assets/WhatsApp Image 2024-03-07 at 3.34.00 PM (1)_1749581630196.jpeg";
import ecVisitImage4 from "@assets/WhatsApp Image 2024-03-07 at 3.34.00 PM_1749581631874.jpeg";
import ecVisitImage5 from "@assets/WhatsApp Image 2024-03-07 at 3.33.58 PM_1749581633399.jpeg";

export default function ElectronicsCommunicationEngineering() {
  const [currentVisitImageIndex, setCurrentVisitImageIndex] = useState(0);
  
  const visitImages = [
    ecVisitImage1, ecVisitImage2, ecVisitImage3, ecVisitImage4, ecVisitImage5
  ];

  const nextVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev + 1) % visitImages.length);
  };

  const prevVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev - 1 + visitImages.length) % visitImages.length);
  };

  const facultyMembers = [
    {
      id: 1,
      image: drAshaKulkarniImage,
      name: "Dr. Asha Kulkarni",
      designation: "HOD",
      qualification: "PhD (Medical Electronics)",
      dateOfJoining: "15/09/1997",
      experience: "27+ years Teaching",
      phone: "9986035186",
      email: "ak@jsspolytechnic.org",
      profilePdf: "/attached_assets/asha kulkarni_1749578032086.pdf",
      specialization: "Medical Electronics, VLSI & Embedded Systems, Carotid Plaque Analysis",
      hasProfile: true
    },
    {
      id: 2,
      image: null,
      name: "Yamuna K",
      designation: "Lecturer",
      qualification: "MTech (Computer Networks Engineering)",
      dateOfJoining: "03/09/1998",
      experience: "26+ years Teaching",
      phone: "9480771691",
      email: "Yamunak26@gmail.com",
      profilePdf: "/attached_assets/yamuna maam_1749578032086.pdf",
      specialization: "Computer Networks, Automation Technologies",
      hasProfile: true
    },
    {
      id: 3,
      image: null,
      name: "Vimala H N",
      designation: "Lecturer",
      qualification: "BE (Electronics & Communication Engineering)",
      dateOfJoining: "25/07/2003",
      experience: "21+ years Teaching",
      phone: "9611945930",
      email: "hnv@jsspolytechnic.org",
      profilePdf: "/attached_assets/vimala maam_1749578032085.pdf",
      specialization: "Electronics & Communication, IoT, Healthcare Technology",
      hasProfile: true
    },
    {
      id: 4,
      image: pavithraImage,
      name: "Pavithra B",
      designation: "Lecturer",
      qualification: "MTech (VLSI Design and Embedded Systems)",
      dateOfJoining: "10/06/2006",
      experience: "18+ years Teaching",
      phone: "9632685475",
      email: "pavi1984renu@gmail.com",
      profilePdf: "/attached_assets/pavithra_1749578032085.pdf",
      specialization: "VLSI Design, Embedded Systems, Green Energy",
      hasProfile: true
    },
    {
      id: 5,
      image: niranjanamurthyImage,
      name: "Niranjanamurthy M",
      designation: "Lecturer",
      qualification: "BE (Electronics & Communication Engineering)",
      dateOfJoining: "19/10/2013",
      experience: "10+ years Teaching",
      phone: "9743180640",
      email: "niruscp@gmail.com",
      profilePdf: "/attached_assets/niranjan_1749578032084.pdf",
      specialization: "Electronics & Communication, Policy Enhancement, Training",
      hasProfile: true
    },
    {
      id: 6,
      image: null,
      name: "B Parashiva Murthy",
      designation: "Lecturer",
      qualification: "BE (Electronics & Communication Engineering)",
      dateOfJoining: "25/03/1998",
      experience: "24+ years Teaching",
      phone: "9448638397",
      email: "bpm.jsspn@gmail.com",
      profilePdf: "/attached_assets/parashivamurthy_1749578032084.pdf",
      specialization: "C Programming, Microcontrollers, Wireless Communication",
      hasProfile: true
    },
    {
      id: 7,
      image: yamunaImage,
      name: "Yamuna K",
      designation: "Lecturer",
      qualification: "Electronics & Communication Engineering",
      dateOfJoining: "Data not available",
      experience: "Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Electronics & Communication Engineering",
      hasProfile: false
    },
    {
      id: 8,
      image: vimalaImage,
      name: "Vimala H N",
      designation: "Lecturer",
      qualification: "Electronics & Communication Engineering",
      dateOfJoining: "Data not available",
      experience: "Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Electronics & Communication Engineering",
      hasProfile: false
    },
    {
      id: 9,
      image: rashmiImage,
      name: "Rashmi N S",
      designation: "Lecturer",
      qualification: "Electronics & Communication Engineering",
      dateOfJoining: "Data not available",
      experience: "Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Electronics & Communication Engineering",
      hasProfile: false
    },
    {
      id: 10,
      image: srikantamurthyImage,
      name: "Srikantamurthy",
      designation: "Lecturer",
      qualification: "Electronics & Communication Engineering",
      dateOfJoining: "Data not available",
      experience: "Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Electronics & Communication Engineering",
      hasProfile: false
    }
  ];

  const supportingStaff = [
    {
      id: 1,
      image: null,
      name: "Rashmi N S",
      designation: "Instructor",
      qualification: "DEC"
    },
    {
      id: 2,
      image: chandrashekara,
      name: "Chandrashekara M P",
      designation: "Instructor",
      qualification: "DEC"
    },
    {
      id: 3,
      image: null,
      name: "Manjunath S R",
      designation: "Instructor",
      qualification: "DEC"
    },
    {
      id: 4,
      image: shilpaImage,
      name: "Shilpa G",
      designation: "Mechanic",
      qualification: "ITI, BA"
    },
    {
      id: 5,
      image: null,
      name: "Srikantamurthy",
      designation: "Lab Helper",
      qualification: "ITI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-10 w-10 text-yellow-400" />
                <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold">
                  Established 1987
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Electronics & Communication Engineering
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Excellence in emerging electronics and communication technologies with industry-ready education since 1987
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
                src={ecLabImage} 
                alt="Electronics & Communication Engineering Laboratory"
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
          <Card className="border-l-4 border-l-blue-600 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Eye className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To excel in the emerging area of Electronics and Communication Engineering by imparting 
                knowledge with relevant practices to meet the industrial and societal needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Target className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  To develop efficient Electronics and Communication Engineering professionals
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  To serve competently in the industrial and societal environment
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  To provide quality education in emerging technologies
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Laboratory */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Building className="h-6 w-6" />
              Electronics & Communication Laboratory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={ecLabImage} 
                  alt="Electronics & Communication Laboratory with advanced equipment"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our advanced Electronics & Communication laboratory is equipped with cutting-edge instruments 
                  and measurement devices that support comprehensive curriculum requirements. The lab provides 
                  hands-on experience with modern electronics and communication systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Advanced electronic measurement instruments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Communication systems training kits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Microprocessor and embedded systems lab
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Digital and analog circuit design facilities
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
                  src={drAshaKulkarniImage} 
                  alt="Dr. Asha Kulkarni - Head of Department"
                  className="w-32 h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
                />
                <h3 className="font-semibold text-blue-900">Dr. Asha Kulkarni</h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">PhD, 27+ years experience</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Department of Electronics & Communication Engineering (ECE) was established in 1987. 
                  It is recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake of students is 60. 
                  The department has well-equipped laboratories with modern instruments and training kits.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our graduates excel in higher education, with many securing top ranks in DCET and pursuing 
                  studies in prestigious engineering colleges. The department maintains strong industry connections 
                  and focuses on practical learning through hands-on laboratory experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to developing competent professionals who can contribute effectively to the 
                  rapidly evolving electronics and communication industry. Our faculty members are dedicated 
                  to providing quality education and mentoring students for successful careers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Profiles Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              Faculty Profiles - Electronics & Communication Engineering
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
                    
                    {faculty.profilePdf && (
                      <div className="mt-4 text-center">
                        <a
                          href={faculty.profilePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                        >
                          <BookOpen className="h-4 w-4" />
                          View Profile
                        </a>
                      </div>
                    )}
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

        {/* Supporting Staff Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
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
                      <p className="text-blue-600 text-sm">{staff.designation}</p>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">60</div>
              <div className="text-gray-600">Student Intake</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Faculty Members</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
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

      {/* Industrial Visit Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industrial Visit Program</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Briefcase className="h-6 w-6" />
                  Industry Exposure & Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Electronics & Communication Engineering department organizes comprehensive industrial visits 
                  to provide students with real-world exposure to telecommunications, electronics manufacturing, 
                  and communication systems. These visits bridge the gap between theoretical knowledge and 
                  practical industry applications.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">March 2024</div>
                    <div className="text-gray-600 text-sm">Latest Visit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">80+</div>
                    <div className="text-gray-600 text-sm">Students Participated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Positive Feedback</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Visit Objectives</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Understand telecommunication infrastructure and network systems</li>
                      <li>• Explore electronic manufacturing processes and quality control</li>
                      <li>• Learn about RF and microwave communication technologies</li>
                      <li>• Gain insights into industry standards and regulatory compliance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Learning Outcomes</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Practical understanding of communication protocols</li>
                      <li>• Exposure to advanced testing and measurement equipment</li>
                      <li>• Knowledge of career opportunities in electronics industry</li>
                      <li>• Professional networking with industry experts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Gallery */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">Visit Gallery</h3>
            
            {/* Main Image Slider */}
            <div className="mb-6">
              <div className="relative">
                <img 
                  src={visitImages[currentVisitImageIndex]} 
                  alt={`EC Industrial Visit - Image ${currentVisitImageIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevVisitImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={nextVisitImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentVisitImageIndex + 1} / {visitImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-5 gap-2 max-w-2xl mx-auto">
              {visitImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVisitImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square ${
                    currentVisitImageIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`EC visit thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </button>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm mb-4">
                Students gained valuable insights into modern electronics and communication systems 
                through hands-on demonstrations and interactive sessions with industry professionals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About EC Department
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}