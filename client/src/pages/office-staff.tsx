import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Phone, MapPin, Calendar, BookOpen } from "lucide-react";

export default function OfficeStaff() {
  const staffMembers = [
    {
      id: 1,
      name: "Smt. Nagarathna P",
      designation: "SDA (Senior Data Assistant)",
      qualification: "M.A in Sociology",
      dateOfBirth: "10.10.1969",
      dateOfJoining: "01.02.1997",
      mobile: "9845285145",
      email: "nagumdy69@gmail.com",
      address: "# 2804, Mahadeva Nilaya, Gandhi Nagara, 5th Cross, Mandya 571 401",
      category: "Cat-1",
      experience: "27+ years"
    },
    {
      id: 2,
      name: "Smt. Sujatha S",
      designation: "Library Assistant",
      qualification: "Diploma in Library Science",
      dateOfBirth: "20.07.1973",
      dateOfJoining: "11.10.1999",
      mobile: "8970647555",
      email: "-",
      address: "W/o Manjunath, Kalale V& P Agrahara, Nanjanagud Taluk, Mysuru District",
      category: "Lingayath 3B",
      experience: "25+ years"
    },
    {
      id: 3,
      name: "Smt. Roopa A N",
      designation: "SDA (Senior Data Assistant)",
      qualification: "M. Lib. Science, M.A in Kannada",
      dateOfBirth: "20.06.1980",
      dateOfJoining: "08.12.2004",
      mobile: "8073191112",
      email: "roopa.alur@gmail.com",
      address: "# 170, Nayakara beedi, Hinkal, Mysuru-17",
      category: "Lingayath 3B",
      experience: "20+ years"
    },
    {
      id: 4,
      name: "Sri. Puneeth M",
      designation: "SDA (Senior Data Assistant)",
      qualification: "B.B.M",
      dateOfBirth: "01.01.1986",
      dateOfJoining: "23.10.2009",
      mobile: "9900501076",
      email: "punee8m@gmail.com",
      address: "S/o Late Mallanna, Kamagere, Matada Beedi, Kollegala Taluk, Chamarajanagara District",
      category: "Lingayath 3B",
      experience: "15+ years"
    },
    {
      id: 5,
      name: "Smt. Preethi C.R",
      designation: "SDA (Senior Data Assistant)",
      qualification: "B.B.M",
      dateOfBirth: "04.01.1993",
      dateOfJoining: "08.10.2015",
      mobile: "8147571533",
      email: "-",
      address: "# 1115, 16th Cross, 2nd Stage, Hebbal, Mysuru",
      category: "Lingayath 3B",
      experience: "9+ years"
    },
    {
      id: 6,
      name: "Sri. Umeshkumar M",
      designation: "SDA (Senior Data Assistant)",
      qualification: "M.Com",
      dateOfBirth: "12.08.1992",
      dateOfJoining: "03.10.2016",
      mobile: "9164333359",
      email: "bmumeshkumar7@gmail.com",
      address: "S/o Mahadevappa, Badanavalu, Nanjanagud Taluk, Mysuru District",
      category: "Lingayath 3B",
      experience: "8+ years"
    },
    {
      id: 7,
      name: "Sri. Yogeesha K S",
      designation: "Library Assistant",
      qualification: "M. Lib. Sci.",
      dateOfBirth: "20.07.1985",
      dateOfJoining: "08.01.2016",
      mobile: "-",
      email: "-",
      address: "S/o Shivaswamy, Kabbahalli (V) and (P), Begur Hobli, Gundlupet Taluk, Chamarajanagra District",
      category: "Lingayath 3B",
      experience: "9+ years"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Office Staff</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Dedicated administrative professionals ensuring smooth operations and excellent support services for students and faculty.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Administrative Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our experienced office staff provides essential administrative support, ensuring efficient operations 
              across all departments. From student services to library management and data administration, 
              our team is committed to excellence in service delivery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-gray-600">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">17+</div>
                <div className="text-gray-600">Years Average Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Profiles Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Users className="h-6 w-6" />
                Office Staff Profiles
              </CardTitle>
              <p className="text-gray-600 mt-2">Our dedicated administrative team supporting institutional operations</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {staffMembers.map((staff, index) => (
                  <Card key={staff.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Users className="h-10 w-10 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-800">{staff.name}</h3>
                        <p className="text-blue-600 font-medium">{staff.designation}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Qualification:</span>
                          <span className="text-gray-600 ml-1 text-xs">{staff.qualification}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Experience:</span>
                          <span className="text-gray-600 ml-1">{staff.experience}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Joining Date:</span>
                          <span className="text-gray-600 ml-1">{staff.dateOfJoining}</span>
                        </div>
                        {staff.mobile !== "-" && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600 text-xs">{staff.mobile}</span>
                          </div>
                        )}
                        {staff.email !== "-" && (
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-600 text-xs">{staff.email}</span>
                          </div>
                        )}
                        <div className="flex items-start gap-1">
                          <MapPin className="h-3 w-3 text-gray-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{staff.address}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Staff Summary Table */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Staff Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 font-medium text-gray-700">Sl. No.</th>
                        <th className="text-left py-2 font-medium text-gray-700">Name</th>
                        <th className="text-left py-2 font-medium text-gray-700">Designation</th>
                        <th className="text-left py-2 font-medium text-gray-700">Qualification</th>
                        <th className="text-left py-2 font-medium text-gray-700">Category</th>
                        <th className="text-left py-2 font-medium text-gray-700">Joining Date</th>
                        <th className="text-left py-2 font-medium text-gray-700">Mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffMembers.map((staff, index) => (
                        <tr key={staff.id} className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">{String(index + 1).padStart(2, '0')}</td>
                          <td className="py-2 text-gray-800">{staff.name}</td>
                          <td className="py-2 text-gray-600">{staff.designation}</td>
                          <td className="py-2 text-gray-600">{staff.qualification}</td>
                          <td className="py-2 text-gray-600">{staff.category}</td>
                          <td className="py-2 text-gray-600">{staff.dateOfJoining}</td>
                          <td className="py-2 text-gray-600">{staff.mobile}</td>
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

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Administrative Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Library Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional library management, resource cataloging, and student assistance 
                    for academic research and learning materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Student Services</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive administrative support for student admissions, records management, 
                    and general inquiries.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Data Administration</h3>
                  <p className="text-gray-600 text-sm">
                    Efficient data management, record keeping, and administrative coordination 
                    across all departments.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Communication Support</h3>
                  <p className="text-gray-600 text-sm">
                    Professional communication services, correspondence management, 
                    and information dissemination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}