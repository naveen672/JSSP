import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, TrendingUp, Users, Building } from "lucide-react";

export default function HigherEducation() {
  const higherEducation2022_23 = [
    { slNo: 1, name: "Adithya M B", registerNo: "418CS2001", college: "MIT, Belavadi, Mysuru" },
    { slNo: 2, name: "Akash M V", registerNo: "418CS2002", college: "SJCE, Mysuru" },
    { slNo: 3, name: "Akashith Aditya M", registerNo: "418CS2003", college: "SJCE, Mysuru" },
    { slNo: 4, name: "Akshay G", registerNo: "418CS2004", college: "Working" },
    { slNo: 5, name: "Balaji R", registerNo: "418CS2006", college: "Vidya Vikas, Mysuru" },
    { slNo: 6, name: "Bharath N", registerNo: "418CS2007", college: "MVJ College of Engg, Kaadugodi, Bengaluru" },
    { slNo: 7, name: "Chandan R", registerNo: "418CS2008", college: "SJCE, Mysuru" },
    { slNo: 8, name: "Deekshith D", registerNo: "418CS2009", college: "NIE, Mysuru" },
    { slNo: 9, name: "Dhanush K M", registerNo: "418CS2010", college: "SJCE, Mysuru" },
    { slNo: 10, name: "Dhanush lal V", registerNo: "418CS2011", college: "SJCE, Mysuru" },
    { slNo: 11, name: "Darshan B M", registerNo: "418CS2011", college: "NIE, Mysuru" },
    { slNo: 12, name: "Durgesh Gowda H B", registerNo: "418CS2012", college: "MIT, Belavadi, Mysuru" },
    { slNo: 13, name: "Harshavardhan K S", registerNo: "418CS2013", college: "MIT, Thandavapura, Mysuru" },
    { slNo: 14, name: "Hemanth V", registerNo: "418CS2017", college: "Mysore University" },
    { slNo: 15, name: "Jayanth V", registerNo: "418CS2018", college: "Mysore University" },
    { slNo: 16, name: "Kaleem M", registerNo: "418CS2019", college: "NIE, Mysuru" },
    { slNo: 17, name: "Krishna B", registerNo: "418CS2021", college: "NIE, Mysuru" },
    { slNo: 18, name: "Manish K R", registerNo: "418CS2022", college: "SJCE, Mysuru" },
    { slNo: 19, name: "Manjunath B S", registerNo: "418CS2025", college: "MIT, Belavadi, Mysuru" },
    { slNo: 20, name: "Manmath Yashasvi M", registerNo: "418CS2026", college: "VVCE, Mysuru" },
    { slNo: 21, name: "Mohammed Rayyan Jameel", registerNo: "418CS2027", college: "NIE, Mysuru" },
    { slNo: 22, name: "Nisarga Revanna", registerNo: "418CS2029", college: "ATME, Mysuru" },
    { slNo: 23, name: "Nithin K S", registerNo: "418CS2031", college: "ATME, Mysuru" },
    { slNo: 24, name: "Pavan Kumar S", registerNo: "418CS2032", college: "KLE, Bengaluru" },
    { slNo: 25, name: "Rachana N", registerNo: "418CS2033", college: "BMS, Bengaluru" },
    { slNo: 26, name: "Ragahvendra M", registerNo: "418CS2034", college: "SJCE, Mysuru" },
    { slNo: 27, name: "Rishab R", registerNo: "418CS2035", college: "RV College of Engg, Bengaluru" },
    { slNo: 28, name: "Shravani B Bhat", registerNo: "418CS2036", college: "MIT, Thandavapura, Mysuru" },
    { slNo: 29, name: "Somashekar B", registerNo: "418CS2037", college: "MIT, Thandavapura, Mysuru" },
    { slNo: 30, name: "Sonika M N", registerNo: "418CS2038", college: "BGSIT, Belluru Cross, Mandya" },
    { slNo: 31, name: "Sudarshan N K", registerNo: "418CS2040", college: "Vidya Vikas, Mysuru" },
    { slNo: 32, name: "Tejas MU", registerNo: "418CS2041", college: "SJCE, Mysuru" },
    { slNo: 33, name: "Ullas R Gowda", registerNo: "418CS2042", college: "SJCE, Mysuru" },
    { slNo: 34, name: "Usama Azeem", registerNo: "418CS2043", college: "MIT, Belavadi, Mysuru" },
    { slNo: 35, name: "Vijay H S", registerNo: "418CS2044", college: "Working" },
    { slNo: 36, name: "Vishal H Sortur", registerNo: "418CS2046", college: "ATME, Mysuru" },
    { slNo: 37, name: "Vishwas N", registerNo: "418CS2048", college: "MIT, Belavadi, Mysuru" },
    { slNo: 38, name: "Yashwanth G", registerNo: "418CS2049", college: "DON Bosco, Bengaluru" },
    { slNo: 39, name: "Amogh Kapil V", registerNo: "418CS21701", college: "NIE, Mysuru" },
    { slNo: 40, name: "Dhanyashree A Gowda", registerNo: "418CS21702", college: "BGSIT, Belluru Cross" },
    { slNo: 41, name: "Druva S Urs", registerNo: "418CS21703", college: "NIE, Mysuru" }
  ];

  const higherEducation2020_21 = [
    { slNo: 1, name: "Anand M", course: "Biotechnology", college: "JSS Science and Technology University, Mysuru" },
    { slNo: 2, name: "Chethan mallik H M", course: "Mechanical Engg", college: "JSS Science and Technology University, Mysuru" },
    { slNo: 3, name: "G M Ravi Thejas", course: "Mechanical Engineering", college: "Vidyavardaka college of engineering" },
    { slNo: 4, name: "Jaikeerthi K", course: "Mechanical Engineering", college: "Vidyavardaka college of engineering, Mysuru" },
    { slNo: 5, name: "Lohith M R", course: "Mechanical Engineering", college: "Vidyavardaka college of engineering, Mysuru" },
    { slNo: 6, name: "Madesh R", course: "Mechanical Engineering", college: "JSS Science and Technology University, Mysuru" },
    { slNo: 7, name: "Nagadarshan P A", course: "Mechanical Engineering", college: "The National Institute of Engineering, Mysuru" },
    { slNo: 8, name: "Shivashankar Y M", course: "Computer Science and Engg", college: "St Joseph Engineering College, Vamanjoor post Dharamagiri, Mangalore" },
    { slNo: 9, name: "Shrikrishna Shridhar udupi", course: "Mechanical Engineering", college: "Dayananda Sagar College of Engineering, Bengaluru" },
    { slNo: 10, name: "Siddarth", course: "Mechanical Engineering", college: "The National Institute of Engineering, Mysuru" },
    { slNo: 11, name: "Yogesh", course: "Information Science and Engg", college: "MVJ College of Engineering, Bengaluru" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-indigo-900 font-semibold text-lg px-4 py-2">
                Academic Excellence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Higher Education
            </h1>
            <p className="text-xl text-indigo-100 mb-6 max-w-4xl mx-auto">
              Tracking the academic journey of our students who pursue higher education in prestigious institutions across Karnataka and India.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800 text-2xl">
              <BookOpen className="h-8 w-8" />
              Higher Education Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              JSS Polytechnic takes pride in the academic achievements of our students who continue their educational journey in renowned engineering colleges and universities. Our graduates consistently secure admissions in top institutions, demonstrating the quality of foundation provided by our institution.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <Award className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">52+</h3>
                <p className="text-gray-700">Students (2022-23 & 2020-21)</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Building className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800 mb-2">20+</h3>
                <p className="text-gray-700">Partner Institutions</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">95%</h3>
                <p className="text-gray-700">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Higher Education 2022-23 */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800 text-2xl">
              <GraduationCap className="h-8 w-8" />
              Higher Education Details 2022-23
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Candidate Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Register No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Admission College</th>
                  </tr>
                </thead>
                <tbody>
                  {higherEducation2022_23.map((student, index) => (
                    <tr key={student.slNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-indigo-600">{student.slNo}</td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{student.name}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{student.registerNo}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {student.college === "Working" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {student.college}
                          </Badge>
                        ) : (
                          student.college
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Higher Education 2020-21 */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Award className="h-8 w-8" />
              Higher Education Details 2020-21
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sl No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Candidate Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Course</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">College</th>
                  </tr>
                </thead>
                <tbody>
                  {higherEducation2020_21.map((student, index) => (
                    <tr key={student.slNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-purple-600">{student.slNo}</td>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{student.name}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {student.course}
                        </Badge>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{student.college}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Popular Institutions */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Building className="h-8 w-8" />
              Popular Higher Education Institutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-600 mb-4 text-lg">Engineering Colleges in Mysuru</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>SJCE (Sri Jayachamarajendra College of Engineering), Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>NIE (The National Institute of Engineering), Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>MIT (Mysore Institute of Technology), Belavadi & Thandavapura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>VVCE (Vidya Vikas College of Engineering), Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>ATME College of Engineering, Mysuru</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-purple-600 mb-4 text-lg">Institutions in Bengaluru & Others</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>MVJ College of Engineering, Kaadugodi, Bengaluru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>RV College of Engineering, Bengaluru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Dayananda Sagar College of Engineering, Bengaluru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>JSS Science and Technology University, Mysuru</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>University of Mysore</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">41</h3>
            <p>Students (2022-23)</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <GraduationCap className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">11</h3>
            <p>Students (2020-21)</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Building className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p>Engineering Colleges</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Academic Support</p>
          </Card>
        </div>
      </div>
    </div>
  );
}