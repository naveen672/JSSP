import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, ExternalLink, GraduationCap, Target, Eye, Building, UserCheck, Phone, Mail, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { useState } from "react";
import computerLabImage from "@assets/image_1748548333376.png";
import hodImage from "@assets/image_1748548354011.png";
import shruthiImage from "@assets/image_1748548358487.png";
import sowrabhaImage from "@assets/image_1748548362909.png";
import jayarajeshwariImage from "@assets/image_1748548368465.png";
import nagakanyaImage from "@assets/image_1748548373860.png";
import mahadevaswamyImage from "@assets/image_1748548378323.png";
// Industrial visit images
import isVisitImage1 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (8)_1749581748895.jpeg";
import isVisitImage2 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (7)_1749581750578.jpeg";
import isVisitImage3 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (6)_1749581751949.jpeg";
import isVisitImage4 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (5)_1749581753187.jpeg";
import isVisitImage5 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (4)_1749581754564.jpeg";
import isVisitImage6 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (3)_1749581755936.jpeg";
import isVisitImage7 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (2)_1749581757402.jpeg";
import isVisitImage8 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM (1)_1749581758773.jpeg";
import isVisitImage9 from "@assets/WhatsApp Image 2024-04-02 at 4.12.24 PM_1749581760331.jpeg";
// ISRO images
import isroImage1 from "@assets/WhatsApp Image 2025-02-18 at 10.43.38 AM (1)_1749581917681.jpeg";
import isroImage2 from "@assets/WhatsApp Image 2025-02-18 at 10.43.38 AM_1749581919097.jpeg";
import isroImage3 from "@assets/WhatsApp Image 2025-02-17 at 3.39.35 PM_1749581920338.jpeg";
import isroImage4 from "@assets/WhatsApp Image 2025-02-17 at 3.39.34 PM_1749581921497.jpeg";
import isroImage5 from "@assets/WhatsApp Image 2025-02-17 at 3.39.33 PM_1749581922928.jpeg";

export default function InformationScienceEngineering() {
  const [currentVisitImageIndex, setCurrentVisitImageIndex] = useState(0);
  const [currentIsroImageIndex, setCurrentIsroImageIndex] = useState(0);
  
  const visitImages = [
    isVisitImage1, isVisitImage2, isVisitImage3, isVisitImage4, isVisitImage5,
    isVisitImage6, isVisitImage7, isVisitImage8, isVisitImage9
  ];

  const isroImages = [
    isroImage1, isroImage2, isroImage3, isroImage4, isroImage5
  ];

  const nextVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev + 1) % visitImages.length);
  };

  const prevVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev - 1 + visitImages.length) % visitImages.length);
  };

  const nextIsroImage = () => {
    setCurrentIsroImageIndex((prev) => (prev + 1) % isroImages.length);
  };

  const prevIsroImage = () => {
    setCurrentIsroImageIndex((prev) => (prev - 1 + isroImages.length) % isroImages.length);
  };

  const teachingFaculty = [
    {
      id: 1,
      name: "Tejaswini M P",
      designation: "HOD (Head of Department)",
      qualification: "BE, MTech",
      dateOfJoining: "12/07/2007",
      experience: "17+ years Teaching",
      phone: "9066229953",
      email: "tejaswinimp@jsspolytechnic.org",
      profilePdf: "/attached_assets/Tejaswini MP_1749579887244.pdf",
      specialization: "Computer Science & Engineering, Computer Networks",
      image: hodImage,
      hasProfile: true,
      positions: "Entrepreneur cell Coordinator, Grievance cell Coordinator, Cultural cell Coordinator"
    },
    {
      id: 2,
      name: "Shruthi M",
      designation: "Lecturer",
      qualification: "BE (Instrumentation Technology), MTech (Information Science)",
      dateOfJoining: "06/08/2009",
      experience: "16+ years Teaching",
      phone: "9482584695",
      email: "Shruthi.m@jsspolytechnic.org",
      profilePdf: "/attached_assets/shruthi M_1749579887244.pdf",
      specialization: "Information Science & Engineering, IoT Applications, Python Programming",
      image: shruthiImage,
      hasProfile: true,
      positions: "Workshop Organizer (IT Skills Lab, Social IoT, Pervasive Computing)"
    },
    {
      id: 3,
      name: "Sowrabha M C",
      designation: "Lecturer",
      qualification: "BE (Computer Science & Engineering)",
      dateOfJoining: "11/07/2022",
      experience: "2+ years Teaching",
      phone: "9535481888",
      email: "Sowrabha@jsspolytechnic.org",
      profilePdf: "/attached_assets/sowrabha_1749579887243.pdf",
      specialization: "Computer Science & Engineering, Full Stack Development, Machine Learning",
      image: sowrabhaImage,
      hasProfile: true,
      positions: "Alumni Coordinator, Website Coordinator, Industry Interaction cell member, Innovation Cell Member"
    },
    {
      id: 4,
      name: "Jayarajeshwari K",
      designation: "Lecturer",
      qualification: "BE (Computer Science & Engineering)",
      dateOfJoining: "19/01/2024",
      experience: "1+ year Teaching",
      phone: "6364681604",
      email: "jayarajeshwari.k@jsspolytechnic.org",
      profilePdf: "/attached_assets/jayarajseshwari_1749579887243.pdf",
      specialization: "Computer Science & Engineering",
      image: jayarajeshwariImage,
      hasProfile: true,
      positions: "Fresh Graduate with First Class Distinction"
    }
  ];

  const supportingStaff = [
    {
      slNo: 1,
      name: "Nagakanya M P",
      designation: "Lab helper",
      qualification: "ITI",
      image: nagakanyaImage
    },
    {
      slNo: 2,
      name: "Mahadevaswamy K N",
      designation: "Lab helper",
      qualification: "ITI",
      image: mahadevaswamyImage
    }
  ];

  const missions = [
    "To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.",
    "To promote industry institutional collaboration through MOUs and internship programs.",
    "To infuse ethical and responsible engineering practices to create successful professionals."
  ];

  return (
    <div className="w-full">
      {/* Department Image */}
      <section className="relative">
        <img 
          src={computerLabImage} 
          alt="Information Science and Engineering Computer Laboratory" 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Information Science & Engineering</h1>
            <p className="text-lg lg:text-xl opacity-90">Excellence in Computing Education Since 1987</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">VISION</h2>
            </div>
            <p className="text-xl leading-relaxed">
              To be recognized as a prestigious academic centre for excellence in technical education 
              and to meet the needs of Academia, Industry & Society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-8 w-8 mr-3 text-accent" />
              <h2 className="text-3xl font-bold">MISSION</h2>
            </div>
            <div className="space-y-6">
              {missions.map((mission, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge className="mt-1">M{index + 1}</Badge>
                      <p className="text-gray-700">{mission}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOD's Message */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">FROM HOD'S DESK</h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={hodImage} 
                      alt="Tejaswini M P - HOD"
                      className="w-32 h-40 rounded-lg object-cover mx-auto md:mx-0"
                    />
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-primary">Tejaswini M P</h4>
                      <Badge className="mt-1">Head of Department</Badge>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4 text-gray-700">
                      <p>
                        The Department of Information Science and Engineering was established in the year 1987, 
                        recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 30 students.
                      </p>
                      <p>
                        The department has well equipped computer facility with the latest hardware, 
                        software and peripherals with internet facilities.
                      </p>
                      <p>
                        The students pursuing higher studies are studying in prestigious Engineering colleges 
                        like PESIT, SJCE, NIE etc…
                      </p>
                      <p>
                        The department is dedicated to education and overall excellence.
                      </p>
                      <p>
                        In addition to classes, students also have the opportunity to interact with 
                        faculty and supporting staff for mentoring.
                      </p>
                      <p className="font-medium text-primary">
                        Staff and students are provided with unlimited free internet access at e-library during spare time, 
                        so that they can develop and enhance their knowledge acquired in class rooms.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Profiles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Users className="h-6 w-6" />
                Faculty Profiles - Information Science & Engineering
              </CardTitle>
              <p className="text-gray-600 mt-2">Click on "View Profile" to access detailed faculty information and achievements</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {teachingFaculty.map((faculty, index) => (
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
                      {teachingFaculty.map((faculty, index) => (
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

      {/* Supporting Staff */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">LIST OF SUPPORTING STAFF</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Sl No</th>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Designation</th>
                    <th className="px-6 py-4 text-left">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {supportingStaff.map((staff, index) => (
                    <tr key={staff.slNo} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-primary">{staff.slNo}</td>
                      <td className="px-6 py-4">
                        <img 
                          src={staff.image} 
                          alt={staff.name}
                          className="w-24 h-32 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-700">{staff.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary">{staff.designation}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{staff.qualification}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Department Facilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Modern Computer Lab</h3>
                  <p className="text-sm text-gray-600">
                    Well equipped computer facility with latest hardware, software and peripherals with internet facilities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Faculty Mentoring</h3>
                  <p className="text-sm text-gray-600">
                    Students have opportunities to interact with faculty and supporting staff for personalized mentoring
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">E-Library Access</h3>
                  <p className="text-sm text-gray-600">
                    Unlimited free internet access at e-library for knowledge development and enhancement
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Higher Education Support</h3>
                  <p className="text-sm text-gray-600">
                    Students pursuing higher studies in prestigious institutions like PESIT, SJCE, NIE
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Department Highlights</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1987</div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30</div>
                <div className="text-gray-600">Student Intake</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">Teaching Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-gray-600">Supporting Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Visit Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industrial Visit Program</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Briefcase className="h-6 w-6" />
                  Industry Exposure & Technology Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Information Science & Engineering department organizes comprehensive industrial visits 
                  to provide students with hands-on exposure to cutting-edge information technologies, 
                  data centers, software development practices, and emerging trends in the IT industry.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">April 2024</div>
                    <div className="text-gray-600 text-sm">Latest Visit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">90+</div>
                    <div className="text-gray-600 text-sm">Students Participated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                    <div className="text-gray-600 text-sm">Learning Satisfaction</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Visit Objectives</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Explore modern data centers and cloud infrastructure</li>
                      <li>• Understand software development lifecycle and agile methodologies</li>
                      <li>• Learn about database management and data analytics tools</li>
                      <li>• Gain insights into cybersecurity practices and protocols</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Learning Outcomes</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Practical understanding of enterprise IT systems</li>
                      <li>• Knowledge of emerging technologies and industry trends</li>
                      <li>• Career guidance and skill development insights</li>
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
                  alt={`IS Industrial Visit - Image ${currentVisitImageIndex + 1}`}
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
            <div className="grid grid-cols-3 md:grid-cols-9 gap-2 max-w-4xl mx-auto">
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
                    alt={`IS visit thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </button>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm mb-4">
                Students experienced firsthand the practical applications of information science concepts 
                through interactive demonstrations and technical discussions with industry professionals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore IS Department Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ISRO Collaboration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ISRO Collaboration Program</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Target className="h-6 w-6" />
                  Space Technology & Research Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Information Science & Engineering department has established a prestigious collaboration 
                  with the Indian Space Research Organisation (ISRO) to provide students with exposure to 
                  cutting-edge space technology, satellite communication systems, and advanced research opportunities.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Feb 2025</div>
                    <div className="text-gray-600 text-sm">Latest Program</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
                    <div className="text-gray-600 text-sm">Students Participated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Research Excellence</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Program Highlights</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Advanced satellite communication technologies</li>
                      <li>• Space mission planning and execution methodologies</li>
                      <li>• Data processing and analysis for space applications</li>
                      <li>• Research collaboration on space technology projects</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Learning Outcomes</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Understanding of space technology applications</li>
                      <li>• Knowledge of satellite systems and ground stations</li>
                      <li>• Research methodology in space science</li>
                      <li>• Career opportunities in aerospace industry</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 text-sm">
                    <strong>Achievement:</strong> This collaboration positions JSS Polytechnic as one of the 
                    leading institutions providing hands-on experience in space technology and satellite 
                    communication systems to diploma students.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ISRO Image Gallery */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">ISRO Program Gallery</h3>
            
            {/* Main Image Slider */}
            <div className="mb-6">
              <div className="relative">
                <img 
                  src={isroImages[currentIsroImageIndex]} 
                  alt={`ISRO Program - Image ${currentIsroImageIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevIsroImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={nextIsroImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIsroImageIndex + 1} / {isroImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-5 gap-2 max-w-2xl mx-auto">
              {isroImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIsroImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square ${
                    currentIsroImageIndex === index ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`ISRO thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </button>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm mb-4">
                Students gained unprecedented exposure to space technology and research methodologies 
                through direct collaboration with ISRO scientists and engineers.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Learn More About ISRO Collaboration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}