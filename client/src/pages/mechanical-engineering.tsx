import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calendar, ExternalLink, GraduationCap, Target, Eye } from "lucide-react";
import classroomImage from "@assets/image_1748547541718.png";
import hodImage from "@assets/image_1748547564485.png";
import prashanthImage from "@assets/image_1748547571826.png";
import principalImage from "@assets/image_1748547577741.png";
import udayImage from "@assets/image_1748547583155.png";
import thirumaleshImage from "@assets/image_1748547591250.png";
import supportStaffImage from "@assets/image_1748547597996.png";

export default function MechanicalEngineering() {
  const teachingFaculty = [
    {
      slNo: 1,
      name: "Rajashekara. H.M",
      designation: "HOD",
      qualification: "BE",
      profileLink: "#",
      image: hodImage
    },
    {
      slNo: 2,
      name: "Prashanthkumar N Malavade",
      designation: "Lecturer",
      qualification: "MTech",
      profileLink: "#",
      image: prashanthImage
    },
    {
      slNo: 3,
      name: "Dr. Bhaktavatsala. K.S",
      designation: "Principal",
      qualification: "PhD",
      profileLink: "#",
      image: principalImage
    },
    {
      slNo: 4,
      name: "Uday R",
      designation: "Lecturer",
      qualification: "M.Tech",
      profileLink: "#",
      image: udayImage
    },
    {
      slNo: 5,
      name: "Chandrashekharamurthy. K.B",
      designation: "Lecturer",
      qualification: "BE",
      profileLink: "#",
      image: null
    },
    {
      slNo: 6,
      name: "Thirumalesha. B.R",
      designation: "Lecturer",
      qualification: "ME",
      profileLink: "#",
      image: thirumaleshImage
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Faculty */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">LIST OF TEACHING FACULTY</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Sl No</th>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Designation</th>
                    <th className="px-6 py-4 text-left">Qualification</th>
                    <th className="px-6 py-4 text-left">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {teachingFaculty.map((faculty, index) => (
                    <tr key={faculty.slNo} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-primary">{faculty.slNo}</td>
                      <td className="px-6 py-4">
                        {faculty.image ? (
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-700">{faculty.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant={faculty.designation === "HOD" ? "default" : faculty.designation === "Principal" ? "destructive" : "secondary"}>
                          {faculty.designation}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{faculty.qualification}</Badge>
                      </td>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teachingFaculty.map((faculty) => (
              <Card key={faculty.slNo} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {faculty.image ? (
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-primary mb-2">{faculty.name}</h3>
                  <Badge className="mb-2" variant={faculty.designation === "HOD" ? "default" : faculty.designation === "Principal" ? "destructive" : "secondary"}>
                    {faculty.designation}
                  </Badge>
                  <p className="text-sm text-gray-600">{faculty.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-gray-400" />
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