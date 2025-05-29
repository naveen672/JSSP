import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Users, Award, Building2, Target, Eye, Book, UserCheck, Calendar, MapPin } from "lucide-react";
import ecLabImage from "@assets/image_1748550425145.png";
import drAshaKulkarniImage from "@assets/image_1748550430744.png";
import niranjanamurthyImage from "@assets/image_1748550435055.png";
import yogithaImage from "@assets/image_1748550439012.png";
import shilpaImage from "@assets/image_1748550443402.png";

export default function ElectronicsCommunicationEngineering() {
  const facultyMembers = [
    {
      id: 1,
      image: drAshaKulkarniImage,
      name: "Dr. Asha Kulkarni",
      designation: "HOD",
      qualification: "PhD",
      dateOfJoining: "15/9/1997",
      hasProfile: true
    },
    {
      id: 2,
      image: null,
      name: "Yamuna K",
      designation: "Lecturer",
      qualification: "MTech",
      dateOfJoining: "09-03-1998",
      hasProfile: true
    },
    {
      id: 3,
      image: null,
      name: "Vimala H N",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "25/7/2003",
      hasProfile: true
    },
    {
      id: 4,
      image: null,
      name: "Pavithra B",
      designation: "Lecturer",
      qualification: "MTech",
      dateOfJoining: "07-10-2006",
      hasProfile: true
    },
    {
      id: 5,
      image: niranjanamurthyImage,
      name: "Niranjanamurthy M",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "19/10/2013",
      hasProfile: true
    },
    {
      id: 6,
      image: null,
      name: "Parashivamurthy",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "25/3/1998",
      hasProfile: true
    },
    {
      id: 7,
      image: yogithaImage,
      name: "Yogitha M S",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "01-07-2024",
      hasProfile: true
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
      image: null,
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
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
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

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <Target className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-indigo-600">M1:</span>
                  <span>Imparting quality technical education to the students by providing excellent teaching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-indigo-600">M2:</span>
                  <span>Establishing Industry institute interaction to make students ready for the industrial environment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-indigo-600">M3:</span>
                  <span>Inculcating ethical values and leadership abilities in the students so as to work towards the growth of the society.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Program Educational Objectives */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Book className="h-6 w-6" />
              Program Educational Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <span className="font-bold text-blue-600 text-lg">1</span>
                <p className="text-gray-700">
                  Demonstrate, update and adapt domain knowledge in the area of Electronics and Communication Engineering 
                  and the allied fields to propose solutions for the core industry in the ever changing global enterprise 
                  with ethical practices.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                <span className="font-bold text-indigo-600 text-lg">2</span>
                <p className="text-gray-700">
                  Assume leadership roles and succeed in their chosen career path, in industry or public service through 
                  engineering ability, life skills and multidisciplinary skill set acquired.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <span className="font-bold text-purple-600 text-lg">3</span>
                <p className="text-gray-700">
                  Pursue higher education institutes of national level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HOD's Message */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <UserCheck className="h-6 w-6" />
              From HOD's Desk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Electronics & Communication Engineering Department was established in year 1987, recognized by DTE, 
                Bengaluru and affiliated to AICTE, New Delhi. The current intake is 60 students.
              </p>
              <p>
                The department has modern, well-equipped Laboratories with adequate facilities, with high end electronic gadgets.
              </p>
              <p>
                It is committed to provide students with an environment for overall development.
              </p>
              <p>
                The department has consistent academic record and also provides excellent career opportunities in various 
                sectors, through placement.
              </p>
              <p>
                Many students are serving at reputed organizations like <span className="font-semibold text-blue-600">
                ABB, Werth Electronics, AT&S, L&T Infotech</span> and those who are pursuing higher studies are studying 
                in prestigious Engineering colleges, like <span className="font-semibold text-indigo-600">
                PESIT, SJCE, NIE</span>.
              </p>
              <p>
                Staff and students are provided with unlimited free internet access at e-Library during spare time, 
                so that they can develop and enhance their knowledge acquired in class rooms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Users className="h-6 w-6" />
              Faculty Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">SL No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Image</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Qualification</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Date of Joining</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyMembers.map((faculty, index) => (
                    <tr key={faculty.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{faculty.id}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        {faculty.image ? (
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-16 h-20 object-cover rounded border"
                          />
                        ) : (
                          <div className="w-16 h-20 bg-gray-200 rounded border flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-blue-800">{faculty.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.designation}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.qualification}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.dateOfJoining}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        {faculty.hasProfile && (
                          <span className="text-blue-600 hover:underline cursor-pointer">click here to view</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: All Employees nature of association is regular
            </p>
          </CardContent>
        </Card>

        {/* Supporting Staff */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Building2 className="h-6 w-6" />
              Supporting Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">SL No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Image</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {supportingStaff.map((staff, index) => (
                    <tr key={staff.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{staff.id}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        {staff.image ? (
                          <img 
                            src={staff.image} 
                            alt={staff.name}
                            className="w-16 h-20 object-cover rounded border"
                          />
                        ) : (
                          <div className="w-16 h-20 bg-gray-200 rounded border flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-indigo-800">{staff.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{staff.designation}</td>
                      <td className="border border-gray-300 px-4 py-3">{staff.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Department Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">36+</h3>
            <p>Years of Excellence</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">60</h3>
            <p>Annual Intake</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Placement Success</p>
          </Card>
        </div>

        {/* Industry Partners */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Building2 className="h-6 w-6" />
              Industry Partners & Higher Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-indigo-600 mb-3">Placement Partners</h3>
                <div className="flex flex-wrap gap-2">
                  {["ABB", "Werth Electronics", "AT&S", "L&T Infotech"].map((company) => (
                    <Badge key={company} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 mb-3">Higher Education Institutes</h3>
                <div className="flex flex-wrap gap-2">
                  {["PESIT", "SJCE", "NIE"].map((institute) => (
                    <Badge key={institute} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      {institute}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}