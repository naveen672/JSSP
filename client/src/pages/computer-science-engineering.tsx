import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Computer, Users, Award, TrendingUp, Building, BookOpen, Target, Lightbulb, Heart, Book } from "lucide-react";
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

export default function ComputerScienceEngineering() {
  const facultyMembers = [
    {
      name: "Shinu Koshy",
      designation: "HOD",
      qualification: "MTech",
      dateOfJoining: "30/7/2003",
      image: shinuKoshyImage,
      experience: "20+ years"
    },
    {
      name: "Sowmyashree H.G",
      designation: "Lecturer",
      qualification: "MTech",
      dateOfJoining: "14/7/2006",
      image: sowmyashreeImage,
      experience: "17+ years"
    },
    {
      name: "Lokesha K.R",
      designation: "Lecturer", 
      qualification: "MTech",
      dateOfJoining: "17/7/2006",
      image: lokeshaImage,
      experience: "17+ years"
    },
    {
      name: "Somaprabha S",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "29/1/2008",
      image: somaprabhaImage,
      experience: "15+ years"
    },
    {
      name: "Shruthi S",
      designation: "Lecturer",
      qualification: "MTech",
      dateOfJoining: "10/03/2009",
      image: shruthiImage,
      experience: "14+ years"
    },
    {
      name: "Keerthana M",
      designation: "Lecturer",
      qualification: "BE",
      dateOfJoining: "18/1/2024",
      image: keerthanaImage,
      experience: "Fresh Graduate"
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

        {/* Faculty Members */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Users className="h-6 w-6" />
              Teaching Faculty
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
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Date of Joining</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Experience</th>
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
                      <td className="border border-gray-300 px-4 py-3 font-medium">{faculty.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.designation}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.qualification}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.dateOfJoining}</td>
                      <td className="border border-gray-300 px-4 py-3">{faculty.experience}</td>
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

      </div>
    </div>
  );
}