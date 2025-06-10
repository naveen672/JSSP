import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Computer, Users, Award, TrendingUp, Building, BookOpen, Target, Lightbulb, Heart, Book, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { useState } from "react";
import csLabImage from "@assets/image_1748548855043.png";
import shinuKoshyImage from "@assets/image_1748548869170.png";
import sowmyashreeImage from "@assets/image_1748548879916.png";
import lokeshaImage from "@assets/image_1748548889358.png";
import somaprabhaImage from "@assets/image_1748548895036.png";
import shruthiImage from "@assets/image_1748548900087.png";
import keerthanaImage from "@assets/image_1748548906199.png";
import achievementsImage from "@assets/image_1748548917310.png";
import departmentActivitiesImage from "@assets/image_1748548923025.png";
import studentSuccessImage from "@assets/image_1748548933226.png";
import dcetRankersImage from "@assets/image_1748548940019.png";
// Industrial visit images
import csVisitImage1 from "@assets/WhatsApp Image 2024-06-07 at 3.11.28 PM (1)_1749581410979.jpeg";
import csVisitImage2 from "@assets/WhatsApp Image 2024-06-07 at 3.11.28 PM_1749581414683.jpeg";
import csVisitImage3 from "@assets/WhatsApp Image 2024-06-07 at 3.11.27 PM_1749581416722.jpeg";
import csVisitImage4 from "@assets/WhatsApp Image 2024-06-07 at 3.11.26 PM_1749581418764.jpeg";
import csVisitImage5 from "@assets/WhatsApp Image 2024-06-07 at 3.11.25 PM_1749581420584.jpeg";
import csVisitImage6 from "@assets/WhatsApp Image 2024-06-07 at 3.11.19 PM_1749581422365.jpeg";
import csVisitImage7 from "@assets/WhatsApp Image 2024-06-07 at 3.07.53 PM_1749581424005.jpeg";
import csVisitImage8 from "@assets/WhatsApp Image 2024-06-07 at 3.07.52 PM_1749581425571.jpeg";
import csVisitImage9 from "@assets/WhatsApp Image 2024-06-07 at 3.07.51 PM (1)_1749581426971.jpeg";
import csVisitImage10 from "@assets/WhatsApp Image 2024-06-07 at 3.07.51 PM_1749581428559.jpeg";
import csVisitImage11 from "@assets/WhatsApp Image 2024-06-07 at 3.07.50 PM (1)_1749581430187.jpeg";
import csVisitImage12 from "@assets/WhatsApp Image 2024-06-07 at 3.07.50 PM_1749581431798.jpeg";
import csVisitImage13 from "@assets/WhatsApp Image 2024-06-07 at 3.07.49 PM (1)_1749581433459.jpeg";
import csVisitImage14 from "@assets/WhatsApp Image 2024-06-07 at 3.07.49 PM_1749581435096.jpeg";
import csVisitImage15 from "@assets/WhatsApp Image 2024-06-07 at 3.07.48 PM (1)_1749581437446.jpeg";
import csVisitImage16 from "@assets/WhatsApp Image 2024-06-07 at 3.07.48 PM_1749581439045.jpeg";

export default function ComputerScienceEngineering() {
  const [currentVisitImageIndex, setCurrentVisitImageIndex] = useState(0);
  
  const csVisitImages = [
    csVisitImage1, csVisitImage2, csVisitImage3, csVisitImage4, csVisitImage5, csVisitImage6,
    csVisitImage7, csVisitImage8, csVisitImage9, csVisitImage10, csVisitImage11, csVisitImage12,
    csVisitImage13, csVisitImage14, csVisitImage15, csVisitImage16
  ];

  const nextVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev + 1) % csVisitImages.length);
  };

  const prevVisitImage = () => {
    setCurrentVisitImageIndex((prev) => (prev - 1 + csVisitImages.length) % csVisitImages.length);
  };

  const facultyMembers = [
    {
      name: "Shinu Koshy",
      designation: "HOD",
      qualification: "MTech (VLSI & Embedded Systems)",
      dateOfJoining: "30/7/2003",
      image: shinuKoshyImage,
      experience: "24+ years Teaching, 2 years Industry",
      phone: "8073817604",
      email: "shinu@jsspolytechnic.org",
      profilePdf: "/attached_assets/shinu_koshy_1749577541381.pdf",
      specialization: "VLSI & Embedded Systems, IoT, Artificial Intelligence"
    },
    {
      name: "Sowmyashree H.G",
      designation: "Lecturer",
      qualification: "MTech (ICT)",
      dateOfJoining: "14/7/2006",
      image: sowmyashreeImage,
      experience: "18+ years Teaching",
      phone: "9740661463",
      email: "sowmyashreehg@gmail.com",
      profilePdf: "/attached_assets/Sowmyashree_Profile_1749577541381.pdf",
      specialization: "Information & Communication Technology, Cloud Computing"
    },
    {
      name: "Lokesha K.R",
      designation: "Lecturer", 
      qualification: "MTech (Computer Network Engineering)",
      dateOfJoining: "17/7/2006",
      image: lokeshaImage,
      experience: "18+ years Teaching",
      phone: "9880855760",
      email: "kr.lokesha@gmail.com",
      profilePdf: "/attached_assets/Lokesha KR_Profile_1749577541380.pdf",
      specialization: "Computer Networks, Network Security, Data Analytics"
    },
    {
      name: "Somaprabha S",
      designation: "Lecturer",
      qualification: "BE (Computer Science & Engineering)",
      dateOfJoining: "29/1/2008",
      image: somaprabhaImage,
      experience: "16+ years Teaching",
      phone: "9611392364",
      email: "somaprabha@jsspolytechnic.org",
      profilePdf: "/attached_assets/Somaprabha profile-23-24_1749577541380.pdf",
      specialization: "Machine Learning, Data Science, Mobile App Development"
    },
    {
      name: "Shruthi S",
      designation: "Lecturer",
      qualification: "MTech (Computer Networks)",
      dateOfJoining: "03/10/2009",
      image: shruthiImage,
      experience: "14+ years Teaching",
      phone: "9663121652",
      email: "shruthi.s@jsspolytechnic.org",
      profilePdf: "/attached_assets/Shruthi_Profile_1749577541379.pdf",
      specialization: "Computer Networks, Database Management, Programming"
    },
    {
      name: "Keerthana M",
      designation: "Lecturer",
      qualification: "BE (Computer Science & Engineering)",
      dateOfJoining: "29/01/2008",
      image: keerthanaImage,
      experience: "Fresher",
      phone: "7259513202",
      email: "Keerthyrani55@gmail.com",
      profilePdf: "/attached_assets/keerthana_1749577541379.pdf",
      specialization: "Indian Constitution, IT Skills, Multimedia and Animation"
    }
  ];

  const placementStats = [
    { year: "2018", rvce: 1, sjce: 7, nie: 4 },
    { year: "2019", rvce: 4, sjce: 10, nie: 0 },
    { year: "2020", rvce: 1, sjce: 9, nie: 8 },
    { year: "Total", rvce: 6, sjce: 26, nie: 12 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Computer className="h-12 w-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Computer Science & Engineering</h1>
            </div>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Pioneering technological excellence since 1987 with quality education and industry partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-yellow-500 text-blue-900 px-4 py-2 text-sm font-semibold">
                <Users className="h-4 w-4 mr-2" />
                Intake: 60 Students
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-4 py-2 text-sm font-semibold">
                <Award className="h-4 w-4 mr-2" />
                AICTE Approved
              </Badge>
              <Badge variant="secondary" className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                <TrendingUp className="h-4 w-4 mr-2" />
                Established 1987
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
                To produce technically competent professionals in Computer Science and Engineering through 
                quality teaching – learning environment to meet the needs of Academia, Industry and Society.
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
                  <span>To impart technical knowledge and skills with quality teaching – learning process and supportive infrastructure facilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M2:</span>
                  <span>To motivate students towards lifelong learning and help them to find right career opportunities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">M3:</span>
                  <span>To inculcate the qualities of leadership, personality development and social responsibility in the students.</span>
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
                <p className="text-gray-700">Obtain a strong technical foundation to pursue higher education.</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-gray-700">Pursue a successful career utilizing education to become an excellent employee or entrepreneur.</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-gray-700">Become socially responsible with good leadership qualities, ethical values and effective interpersonal skills.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Laboratory */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Building className="h-6 w-6" />
              Computer Science Laboratory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={csLabImage} 
                  alt="Computer Science Laboratory with students working on computers"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our state-of-the-art Computer Science laboratory is equipped with modern computing facilities 
                  that support the complete curriculum requirements. The lab provides hands-on experience with 
                  latest technologies and programming environments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Modern computer workstations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    High-speed internet connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Latest software development tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Interactive learning environment
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
                  src={shinuKoshyImage} 
                  alt="Shinu Koshy - Head of Department"
                  className="w-32 h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
                />
                <h3 className="font-semibold text-blue-900">Shinu Koshy</h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">MTech, 20+ years experience</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Department of Computer Science and Engineering (CSE) was established in the year 1987. 
                  It is recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake of students is 60. 
                  The department has well equipped computer labs, in accordance with the curriculum.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most of the students opt for higher education after Diploma. Out of these, many of them secure top ranks 
                  in DCET and pursue higher studies in prestigious engineering colleges, like RVCE (Bengaluru), PES (Bengaluru) 
                  and SJCE (Mysuru), and NIE (Mysuru).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We also have students who are placed in reputed companies, such as Infosys, Wipro, and Theorem. 
                  In addition to handling sessions, our dedicated staff members mentor students and motivate them 
                  to be technically competent and socially responsible.
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
              Faculty Profiles - Computer Science & Engineering
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
                        src={faculty.image} 
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
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm text-center">
                <strong>Note:</strong> Profile PDFs contain complete faculty information including education history, 
                workshops attended, courses handled, NPTEL certifications, and professional achievements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Table Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              Faculty Overview
            </CardTitle>
            <p className="text-gray-600 mt-2">All faculty members are regular employees with extensive experience</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Photo</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Designation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Qualification</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Experience</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyMembers.map((faculty, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-16 h-20 object-cover rounded mx-auto shadow-sm"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-3 font-medium">
                        <div>{faculty.name}</div>
                        {faculty.email && (
                          <div className="text-xs text-gray-600 mt-1">{faculty.email}</div>
                        )}
                        {faculty.phone && (
                          <div className="text-xs text-gray-600">{faculty.phone}</div>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.designation}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>{faculty.qualification}</div>
                        {faculty.specialization && (
                          <div className="text-xs text-gray-600 mt-1">{faculty.specialization}</div>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.experience}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        {faculty.profilePdf ? (
                          <a
                            href={faculty.profilePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                          >
                            <BookOpen className="h-3 w-3" />
                            View Profile
                          </a>
                        ) : (
                          <span className="text-gray-400 text-xs">Not Available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Student Placements */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Award className="h-6 w-6" />
              Student Placed in Prestigious Colleges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-900">Academic Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-900">RVCE, Bengaluru</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-900">SJCE, Mysuru</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-900">NIE, Mysuru</th>
                  </tr>
                </thead>
                <tbody>
                  {placementStats.map((stat, index) => (
                    <tr key={index} className={stat.year === "Total" ? "bg-yellow-50 font-semibold" : (index % 2 === 0 ? "bg-white" : "bg-gray-50")}>
                      <td className="border border-gray-300 px-4 py-3">{stat.year}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{stat.rvce}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{stat.sjce}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">{stat.nie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Activities */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Award className="h-6 w-6" />
                Department Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={achievementsImage} 
                alt="Department achievements and recognition ceremonies"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>3 day state level workshop for faculty on 'Statistics and Analytics Lab' with 150+ participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>5 days State Level FDP on Full Stack Development conducted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Alumni placed in reputed companies in India and Abroad</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <TrendingUp className="h-6 w-6" />
                Student Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={departmentActivitiesImage} 
                alt="Student activities and department facilities"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Encouragement for toppers and 100% attendance students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Industry visits, workshops, technical talks by industry experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Public education about security in E-transactions at Suttur Jathra exhibition</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Student Success Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Users className="h-6 w-6" />
                Student Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={studentSuccessImage} 
                alt="Student success and college events"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700 leading-relaxed">
                Our students consistently achieve excellence in academics and extracurricular activities. 
                The department organizes various events to showcase student talents and foster innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Award className="h-6 w-6" />
                DCET 2024 Top Rankers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={dcetRankersImage} 
                alt="DCET 2024 top rankers from Computer Science department"
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700 leading-relaxed">
                We proudly announce that our Computer Science students achieved top rankings in DCET 2024, 
                including Kushal Jain (Rank 15), Hitesh S (Rank 46), and Ahmed Ali Khan (Rank 79). 
                Congratulations to all our achievers!
              </p>
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
                  href="/attached_assets/CS 1st year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-blue-600 rounded text-sm hover:bg-blue-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <h3 className="text-lg font-bold mb-2">2nd Year</h3>
                <p className="text-sm">Core Programming</p>
                <a 
                  href="/attached_assets/CS 2nd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-indigo-600 rounded text-sm hover:bg-indigo-50"
                >
                  View Syllabus
                </a>
              </Card>
              
              <Card className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <h3 className="text-lg font-bold mb-2">3rd Year</h3>
                <p className="text-sm">Specialization Pathways</p>
                <a 
                  href="/attached_assets/CS 3rd year.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-white text-purple-600 rounded text-sm hover:bg-purple-50"
                >
                  View Syllabus
                </a>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Specialization Pathways (3rd Year)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium text-indigo-600 mb-1">Emerging Areas:</h4>
                  <ul className="space-y-1">
                    <li>• Artificial Intelligence and Machine Learning</li>
                    <li>• Full Stack Development</li>
                    <li>• Cloud Computing</li>
                    <li>• Cyber Security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-600 mb-1">Program Outcomes:</h4>
                  <ul className="space-y-1">
                    <li>• Apply software development skills</li>
                    <li>• Design computational systems</li>
                    <li>• Modern engineering tools usage</li>
                    <li>• Ethical practices in technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Computer Science Industrial Visit Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 mt-12 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Industrial Visit Program</h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900 text-xl">
                    <Briefcase className="h-6 w-6" />
                    Technology & Innovation Exposure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Computer Science department organizes comprehensive industrial visits to leading technology 
                    companies and innovation centers, providing students with real-world exposure to cutting-edge 
                    software development practices, emerging technologies, and industry standards.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">June 2024</div>
                      <div className="text-gray-600 text-sm">Latest Visit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                      <div className="text-gray-600 text-sm">Students Participated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                      <div className="text-gray-600 text-sm">Tech Exposure</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3">Visit Objectives</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Explore modern software development environments</li>
                        <li>• Understand industry-standard coding practices</li>
                        <li>• Learn about project management methodologies</li>
                        <li>• Network with industry professionals and alumni</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3">Learning Outcomes</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Practical understanding of software engineering</li>
                        <li>• Knowledge of emerging technologies and trends</li>
                        <li>• Career guidance and placement opportunities</li>
                        <li>• Professional communication and teamwork skills</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Highlight:</strong> Students experienced hands-on demonstrations of AI/ML applications, 
                      cloud computing platforms, and agile development methodologies during their industry interactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image Gallery */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Industrial Visit Gallery</h3>
              
              {/* Main Image Slider */}
              <div className="mb-6">
                <div className="relative">
                  <img 
                    src={csVisitImages[currentVisitImageIndex]} 
                    alt={`CS Industrial Visit - Image ${currentVisitImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl"
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
                    {currentVisitImageIndex + 1} / {csVisitImages.length}
                  </div>
                </div>
              </div>

              {/* Thumbnail grid - showing 8 thumbnails per row */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2 max-w-4xl mx-auto">
                {csVisitImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVisitImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg aspect-square ${
                      currentVisitImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`CS visit thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </button>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 text-sm mb-4">
                  Students gained practical insights into software development lifecycle, modern programming 
                  frameworks, and collaborative development through guided facility tours and interactive sessions.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1">16 Images</Badge>
                  <Badge className="bg-indigo-100 text-indigo-800 px-3 py-1">Technology Focus</Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-3 py-1">Career Development</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}