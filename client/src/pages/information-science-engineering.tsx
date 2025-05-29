import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calendar, ExternalLink, GraduationCap, Target, Eye } from "lucide-react";
import computerLabImage from "@assets/image_1748548333376.png";
import hodImage from "@assets/image_1748548354011.png";
import shruthiImage from "@assets/image_1748548358487.png";
import sowrabhaImage from "@assets/image_1748548362909.png";
import jayarajeshwariImage from "@assets/image_1748548368465.png";
import nagakanyaImage from "@assets/image_1748548373860.png";
import mahadevaswamyImage from "@assets/image_1748548378323.png";

export default function InformationScienceEngineering() {
  const teachingFaculty = [
    {
      slNo: 1,
      name: "Tejaswini M P",
      designation: "HOD",
      qualification: "MTech",
      dateOfJoining: "07-12-2007",
      profileLink: "#",
      image: hodImage
    },
    {
      slNo: 2,
      name: "Shruthi M",
      designation: "Lecturer",
      qualification: "MTech",
      dateOfJoining: "08-06-2009",
      profileLink: "#",
      image: shruthiImage
    },
    {
      slNo: 3,
      name: "Sowrabha MC",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "11-07-2022",
      profileLink: "#",
      image: sowrabhaImage
    },
    {
      slNo: 4,
      name: "Jayarajeshwari K",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "18/1/2024",
      profileLink: "#",
      image: jayarajeshwariImage
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

      {/* Teaching Faculty */}
      <section className="py-16">
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
                    <th className="px-6 py-4 text-left">Date of Joining</th>
                    <th className="px-6 py-4 text-left">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {teachingFaculty.map((faculty, index) => (
                    <tr key={faculty.slNo} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-primary">{faculty.slNo}</td>
                      <td className="px-6 py-4">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-24 h-32 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-700">{faculty.name}</td>
                      <td className="px-6 py-4">
                        <Badge variant={faculty.designation === "HOD" ? "default" : "secondary"}>
                          {faculty.designation}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{faculty.qualification}</Badge>
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Faculty</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachingFaculty.map((faculty) => (
              <Card key={faculty.slNo} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-32 h-40 rounded-lg mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-primary mb-2">{faculty.name}</h3>
                  <Badge className="mb-2" variant={faculty.designation === "HOD" ? "default" : "secondary"}>
                    {faculty.designation}
                  </Badge>
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
    </div>
  );
}