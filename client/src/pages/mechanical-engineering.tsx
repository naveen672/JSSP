import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, ExternalLink, GraduationCap, Target, Eye, Building, UserCheck, Award, Phone, Mail } from "lucide-react";
import classroomImage from "@assets/image_1748547541718.png";
import hodImage from "@assets/image_1748547564485.png";
import prashanthImage from "@assets/image_1748547571826.png";
import principalImage from "@assets/image_1748547577741.png";
import udayImage from "@assets/image_1748547583155.png";
import thirumaleshImage from "@assets/image_1748547591250.png";
import supportStaffImage from "@assets/image_1748547597996.png";

export default function MechanicalEngineering() {
  const facultyMembers = [
    {
      id: 1,
      name: "Rajashekara. H.M",
      designation: "HOD",
      qualification: "BE (Mechanical Engineering)",
      dateOfJoining: "Data not available",
      experience: "25+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Mechanical Engineering, Department Administration",
      image: hodImage,
      hasProfile: false
    },
    {
      id: 2,
      name: "Prashanthkumar N Malavade",
      designation: "Lecturer",
      qualification: "MTech (Engineering Management)",
      dateOfJoining: "25/03/1998",
      experience: "26+ years Teaching",
      phone: "9980265133",
      email: "pnm@jsspolytechnic.org",
      profilePdf: "/attached_assets/PNM sir_1749579126857.pdf",
      specialization: "Engineering Management, MEMS, Mechatronics",
      image: prashanthImage,
      hasProfile: true
    },
    {
      id: 3,
      name: "Dr. Bhaktavatsala. K.S",
      designation: "Principal",
      qualification: "PhD",
      dateOfJoining: "Data not available",
      experience: "30+ years Teaching & Administration",
      phone: "Contact office",
      email: "Contact office",
      profilePdf: null,
      specialization: "Institutional Leadership, Academic Administration",
      image: principalImage,
      hasProfile: false
    },
    {
      id: 4,
      name: "Uday R",
      designation: "Lecturer",
      qualification: "MTech (Maintenance & Engineering)",
      dateOfJoining: "26/02/2024",
      experience: "Fresh Graduate",
      phone: "7892235595",
      email: "udayraj987654@gmail.com",
      profilePdf: "/attached_assets/Uday_1749579126856.pdf",
      specialization: "Industrial & Production Engineering, Mechatronics",
      image: udayImage,
      hasProfile: true
    },
    {
      id: 5,
      name: "Chandrashekharamurthy K.B",
      designation: "Lecturer",
      qualification: "BE (Mechanical Engineering)",
      dateOfJoining: "01/01/2009",
      experience: "15+ years Teaching, 5 years Industry",
      phone: "9448558571",
      email: "kbc@jsspolytechnic.org",
      profilePdf: "/attached_assets/Chandrashekhara Murthy K B_1749579126856.pdf",
      specialization: "Manufacturing Process, Engineering Metrology, NSS Activities",
      image: null,
      hasProfile: true
    },
    {
      id: 6,
      name: "Thirumalesha. B.R",
      designation: "Lecturer",
      qualification: "ME",
      dateOfJoining: "Data not available",
      experience: "20+ years Teaching",
      phone: "Contact department",
      email: "Contact department",
      profilePdf: null,
      specialization: "Mechanical Engineering",
      image: thirumaleshImage,
      hasProfile: false
    }
  ];

  const supportingStaff = [
    {
      slNo: 1,
      name: "Nagendra. H.C",
      designation: "Instructor",
      qualification: "DME",
      image: null
    },
    {
      slNo: 3,
      name: "Prakash.N",
      designation: "Lab Helper",
      qualification: "ITI",
      image: null
    },
    {
      slNo: 4,
      name: "Udayakumar. R",
      designation: "Lab Helper",
      qualification: "ITI",
      image: null
    },
    {
      slNo: 5,
      name: "Mahadevaswamy",
      designation: "Lab Helper",
      qualification: "ITI",
      image: supportStaffImage
    }
  ];

  const missions = [
    "To benefit the society by imparting quality technical education to students by providing excellent Teaching learning Environment in collaboration with industry and academia.",
    "To apply the knowledge of basic and contemporary science, engineering and innovative skills to identify problems in Academia, Industry and Society and to develop practical solutions to them.",
    "To impart ethical values, leadership, teamwork, communication skills and hands-on activities for day-to-day mechanical engineering problems."
  ];

  const objectives = [
    "To enhance their technical knowledge by pursuing higher studies.",
    "To lead successful careers in wider ranges of industries by acquiring the knowledge through continuous learning.",
    "To develop entrepreneurship skills and become a successful entrepreneur.",
    "To develop professional ethics and responsibilities to address societal and environmental issues."
  ];

  return (
    <div className="w-full">
      {/* Department Image */}
      <section className="relative">
        <img 
          src={classroomImage} 
          alt="Mechanical Engineering Department Classroom" 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Mechanical Engineering</h1>
            <p className="text-xl lg:text-2xl opacity-90">Excellence in Engineering Education Since 1987</p>
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
              To develop programme with excellence in teaching-learning to produce competent professionals 
              in Mechanical Engineering with ethical values to meet the needs of the industry and society.
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

      {/* Program Educational Objectives */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="h-8 w-8 mr-3 text-accent" />
              <h2 className="text-3xl font-bold">Program Educational Objectives</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOD's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">FROM HOD'S DESK</h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={hodImage} 
                      alt="Rajashekara. H.M - HOD"
                      className="w-32 h-40 rounded-lg object-cover mx-auto md:mx-0"
                    />
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-primary">Rajashekara. H.M</h4>
                      <Badge className="mt-1">Head of Department</Badge>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Mechanical Engineering department is one of the oldest and evergreen engineering programmes, 
                        established in the year 1987, recognised by DTE, Bengaluru and affiliated to AICTE, New Delhi. 
                        The current intake is 60 students.
                      </p>
                      <p>
                        The department has committed, experienced and highly qualified teaching faculty.
                      </p>
                      <p>
                        It has very good supporting staff, with hands on experience in imparting practical training 
                        in well-equipped laboratories, workshop and machine shop, with adequate and high end equipment's.
                      </p>
                      <p>
                        The department has a very good track record of successful students who have passed with flying colours.
                      </p>
                      <p>
                        Many students are either employees of prestigious organisations like Infosys, Toyota Kirloskar, 
                        Wipro, L&T, to name a few or pursuing their higher studies in coveted institutions, 
                        like RVCE, PESIT, SJCE, NIE.
                      </p>
                      <p>
                        In addition, students are given one to one attention, for their all-round development, 
                        be it academics, sports, placement or ethical engineering practices.
                      </p>
                      <p>
                        Staff and students are provided with unlimited free internet access at e-Library during spare time, 
                        so that they can develop and enhance their knowledge acquired in class rooms.
                      </p>
                      <p className="font-medium text-primary">
                        Students express that their stay in the department is not only an experience to reckon with 
                        but is an emotional attachment to be experienced.
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
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
        </div>
      </section>

      {/* Supporting Staff */}
      <section className="bg-gray-50 py-16">
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
                        {staff.image ? (
                          <img 
                            src={staff.image} 
                            alt={staff.name}
                            className="w-24 h-32 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Users className="h-12 w-12 text-gray-400" />
                          </div>
                        )}
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
                <div className="text-3xl font-bold text-primary mb-2">60</div>
                <div className="text-gray-600">Student Intake</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-gray-600">Teaching Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">Supporting Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}