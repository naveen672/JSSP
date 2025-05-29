import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin, Award, BookOpen, Target } from "lucide-react";

export default function TrainingPlacements() {
  const cseTrainingActivities = [
    {
      slNo: 1,
      activity: "Seminar on \"You are Responsible-Data Security\"",
      date: "05/08/2023",
      resourcePerson: "Karthik B.K",
      mode: "Offline",
      studentsPresent: 45,
      relevance: "PO5"
    },
    {
      slNo: 2,
      activity: "Reactjs",
      date: "13/09/2023",
      resourcePerson: "Ravi Kumar S CEO, Infotise IT Solutions, Mysuru",
      mode: "Offline",
      studentsPresent: 58,
      relevance: "PO2-PO7"
    },
    {
      slNo: 3,
      activity: "Seminar on \"IPV6 and Virtual LANS\"",
      date: "19/09/23",
      resourcePerson: "Ganesh Prasad HOD, CSE, JSSP, Nanjungud",
      mode: "Offline",
      studentsPresent: 50,
      relevance: "PO7, PSO1, PSO2"
    },
    {
      slNo: 4,
      activity: "Advancement In software testing in AI Era",
      date: "9/10/2023",
      resourcePerson: "Akshatha K.C Senior software Engg. Excelsoft Technologies Mysuru & Chandrakanth M.G Software Specialist Robert Bosch",
      mode: "Offline",
      studentsPresent: 40,
      relevance: "PO2-PO7"
    },
    {
      slNo: 5,
      activity: "Software Testing",
      date: "16/10/2023",
      resourcePerson: "Akshatha JupiterKing Kuvempunagar Mysuru",
      mode: "Offline",
      studentsPresent: 58,
      relevance: "PO2-PO7"
    },
    {
      slNo: 6,
      activity: "NOSQL, Bigdata, Indexing (3 sem)",
      date: "21/10/2023",
      resourcePerson: "Susan Koshy Senior Analyst Infosys Limited Mysuru",
      mode: "Online",
      studentsPresent: 50,
      relevance: "PO1, PO2"
    },
    {
      slNo: 7,
      activity: "1 day workshop on \"Rest API\"",
      date: "21/10/2023",
      resourcePerson: "Ravi Kumar S CEO, Infotise IT Solutions, Mysuru",
      mode: "Offline",
      studentsPresent: 58,
      relevance: "PO2-PO7"
    },
    {
      slNo: 8,
      activity: "1 day workshop on \"AI & Robotics\"",
      date: "24/01/2024",
      resourcePerson: "ComedKares, Mysuru",
      mode: "Offline",
      studentsPresent: 70,
      relevance: "PO1-PO7"
    },
    {
      slNo: 9,
      activity: "1 day workshop on \"AI & Robotics\"",
      date: "25/01/2024",
      resourcePerson: "ComedKares, Mysuru",
      mode: "Offline",
      studentsPresent: 60,
      relevance: "PO1-PO7"
    },
    {
      slNo: 10,
      activity: "Webinar on \"Data Science\"",
      date: "01/02/2024",
      resourcePerson: "PRAWTECH",
      mode: "Online",
      studentsPresent: 50,
      relevance: "PO1-PO7"
    },
    {
      slNo: 11,
      activity: "Career orientation & IT Industry awareness",
      date: "21/2/2024",
      resourcePerson: "Akshatha K.C CEO, MD JupiterKing Infotech Mysuru",
      mode: "Offline",
      studentsPresent: 44,
      relevance: "PO2-PO7"
    },
    {
      slNo: 12,
      activity: "Industry visit \"KGTTI\"",
      date: "21/2/2024",
      resourcePerson: "Near premier studio, mysuru",
      mode: "Onsite",
      studentsPresent: 65,
      relevance: "PO5"
    },
    {
      slNo: 13,
      activity: "Data Science with python",
      date: "22/02/2024",
      resourcePerson: "Srinivas Nayak, IPCS Global, Mysuru",
      mode: "Offline",
      studentsPresent: 64,
      relevance: "PO5"
    },
    {
      slNo: 14,
      activity: "Career Guidance",
      date: "26/02/2024",
      resourcePerson: "Sampath Kumar P Founder CEO Shano corporation, mysuru",
      mode: "Offline",
      studentsPresent: 60,
      relevance: "PO2-PO7"
    },
    {
      slNo: 15,
      activity: "Alumni Talk \"Opportunities in abroad\"",
      date: "02/02/22",
      resourcePerson: "Anirudh S Research Scholar in Germany",
      mode: "Offline",
      studentsPresent: 50,
      relevance: "PO7"
    },
    {
      slNo: 16,
      activity: "Industrial visit",
      date: "21/02/2022",
      resourcePerson: "Sai soft Technologies",
      mode: "Offline",
      studentsPresent: 55,
      relevance: "PO7"
    },
    {
      slNo: 17,
      activity: "Workshop on \"IOT Application\"",
      date: "09/05/2022",
      resourcePerson: "Eclesia Advanced Computer Technology",
      mode: "Offline",
      studentsPresent: 55,
      relevance: "PO2-PO7"
    },
    {
      slNo: 18,
      activity: "Industrial visit",
      date: "30/05/2022 & 31/05/2022",
      resourcePerson: "Mysore city Traffic department",
      mode: "Offline",
      studentsPresent: 50,
      relevance: "PO2"
    },
    {
      slNo: 19,
      activity: "2 day workshop on \"Interview skills\"",
      date: "29/6/2022 & 30/6/2022",
      resourcePerson: "Saisofsol, Mysuru",
      mode: "Offline",
      studentsPresent: 60,
      relevance: "PO2-PO7"
    },
    {
      slNo: 20,
      activity: "Seminar on \"Network Management in Linux\"",
      date: "16/7/2022",
      resourcePerson: "Ravi Kumar S CEO, Infotise IT Solutions, Mysuru",
      mode: "Offline",
      studentsPresent: 50,
      relevance: "PO2"
    },
    {
      slNo: 21,
      activity: "Software Engineering",
      date: "21/07/2022",
      resourcePerson: "Vani H.Y Asst. Professor SJCE Mysuru",
      mode: "Offline",
      studentsPresent: 48,
      relevance: "PO2"
    }
  ];

  const eeeGuestLectures = [
    {
      slNo: 1,
      speaker: "Hasha Kumar, Lecturer in MC, JSS Polytechnic, Mysuru",
      title: "NCC",
      attendance: "37%",
      date: "01-07-2022",
      outcome: "PO5, PO6"
    },
    {
      slNo: 2,
      speaker: "K S Bhakthavatsala, Lecturer in ME, JSS Polytechnic, Mysuru",
      title: "Placement Activities",
      attendance: "37%",
      date: "02-07-2022",
      outcome: "PO5, PO6"
    },
    {
      slNo: 3,
      speaker: "Sadhana M V, Lecturer in EE, JSS Polytechnic, Mysuru",
      title: "Awareness on Student Scholarship",
      attendance: "37%",
      date: "02-07-2022",
      outcome: "PO5, PO6"
    },
    {
      slNo: 4,
      speaker: "Dr. Raveesh, Psychiatrist, Mysore Medical College, Mysuru",
      title: "Personality Development, Character Building, Motivational, Environmental Concern, Public Health and rural Sanitation",
      attendance: "37%",
      date: "04-07-2022",
      outcome: "PO5, PO6"
    },
    {
      slNo: 5,
      speaker: "A S Nagaraj, Lecturer in ME, JSS Polytechnic, Mysuru",
      title: "Personality Development Program and Human Values",
      attendance: "37%",
      date: "05-07-2022",
      outcome: "PO5, PO6"
    },
    {
      slNo: 6,
      speaker: "Rakesh M D, Assistant Professor, JSSTU, Mysuru",
      title: "IOT",
      attendance: "37%",
      date: "14-07-2022",
      outcome: "PO7"
    },
    {
      slNo: 7,
      speaker: "Nanadan N, Lecturer in CS, Government Polytechnic, Soraba",
      title: "Basic Web Design",
      attendance: "37%",
      date: "14-07-2022 to 16-07-2022",
      outcome: "PO7"
    },
    {
      slNo: 8,
      speaker: "ShashiKiran, Vidyut, Automation, Mysuru",
      title: "SCADA and PLC Application",
      attendance: "37%",
      date: "29-07-2022",
      outcome: "PO2, PO4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-blue-900 font-semibold text-lg px-4 py-2">
                Career Development
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Training & Placements
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto">
              Comprehensive training programs and placement activities designed to enhance student skills and prepare them for successful careers in their respective fields.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Target className="h-8 w-8" />
              Training & Placement Cell Activities Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The Training & Placement Cell at JSS Polytechnic organizes various activities to enhance student skills and prepare them for industry requirements. These activities include seminars, workshops, industrial visits, guest lectures, and career guidance sessions conducted by industry experts and experienced professionals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">21+</h3>
                <p className="text-gray-700">Training Activities (CSE)</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">8</h3>
                <p className="text-gray-700">Guest Lectures (EEE)</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Award className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800 mb-2">1000+</h3>
                <p className="text-gray-700">Students Benefited</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Computer Science & Engineering Training Activities */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Briefcase className="h-8 w-8" />
              Computer Science & Engineering Department - Training Activities (2023-2024)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Activities</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Date</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Resource Person</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mode</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Students</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  {cseTrainingActivities.map((activity, index) => (
                    <tr key={activity.slNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-blue-600">{activity.slNo}</td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{activity.activity}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{activity.date}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">{activity.resourcePerson}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Badge variant={activity.mode === "Online" ? "secondary" : "outline"} className={activity.mode === "Online" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                          {activity.mode}
                        </Badge>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-medium">{activity.studentsPresent}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                          {activity.relevance}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Electrical & Electronics Engineering Guest Lectures */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Users className="h-8 w-8" />
              Electrical & Electronics Engineering Department - Guest Lectures (2021-22)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Invited Speaker</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Title of Lecture</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Attendance</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Date</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {eeeGuestLectures.map((lecture, index) => (
                    <tr key={lecture.slNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-indigo-600">{lecture.slNo}</td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900 text-sm">{lecture.speaker}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">{lecture.title}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {lecture.attendance}
                        </Badge>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{lecture.date}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                          {lecture.outcome}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Award className="h-8 w-8" />
              Key Training & Placement Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-indigo-600 mb-4 text-lg">Training Programs Focus Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Latest Technology Trends (AI, IoT, Data Science)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Software Development and Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Network Management and Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Career Guidance and Industry Awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Personality Development Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                    <span>Interview Skills and Soft Skills</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-600 mb-4 text-lg">Industry Partnerships</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Infotise IT Solutions, Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Excelsoft Technologies Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Robert Bosch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Infosys Limited Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>IPCS Global, Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>ComedKares, Mysuru</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}