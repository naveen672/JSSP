import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Building, Gift } from "lucide-react";

export default function Alumni() {
  const alumniCommittee = [
    { name: "Sri. K S Bhaktavastala", occupation: "Principal, JSS Polytechnic, Mysuru.", position: "President" },
    { name: "Sri. Sharath Chandra", occupation: "Works Manager ELKAYEM Auto Ancillary Pvt. Ltd., Kadkola, Mysuru.", position: "Vice President" },
    { name: "Sri. Harsha Kumar S", occupation: "Lecturer in Mechatronics, JSS Polytechnic, Mysuru.", position: "Secretary" },
    { name: "Sri. Arun J", occupation: "Lecturer in Information Science, SJCE, Mysuru", position: "Joint Secretary" },
    { name: "Sri. Harsha G", occupation: "Senior Design Engineer Applied Materials, Bangalore", position: "Director" },
    { name: "Sri. Hema Kumar K S", occupation: "Joint Supervisor BEML, Mysuru", position: "Director" },
    { name: "Sri. Chidananda", occupation: "Contractor & Builder, Mysuru", position: "Director" },
    { name: "Sri. Deepak Bharadwaj", occupation: "Senior System Engineer Infosys, Mysuru", position: "Director" },
    { name: "Sri. Anjan", occupation: "Proprietor Sri Manjunatha Fabrication, Mysuru", position: "Director" },
    { name: "Sri. Raghu T", occupation: "Senior Associate Nestle India Pvt. Ltd. Nanjangudu.", position: "Director" },
    { name: "Sri. Krishna", occupation: "Asst. Engineer, Sides Farging, Mysuru.", position: "Director" }
  ];

  const donations = [
    { slNo: "01", description: "Epson projector with wall mounting kit with wiring", date: "13/07/2021", place: "Seminar hall" },
    { slNo: "02", description: "Curtains to windows and doors, frill to main screen at seminar hall", date: "13/07/2021", place: "Seminar hall" },
    { slNo: "03", description: "Ups 12v/260h fixed SMF batteries (150 Nos)", date: "25/04/2022", place: "UPS room 1st floor" },
    { slNo: "04", description: "Electrical wiring for UPS room at 2nd class/Seminar hall", date: "", place: "2nd floor" },
    { slNo: "05", description: "Projector Big screen", date: "", place: "Seminar hall" },
    { slNo: "06", description: "Projector Big screen for CE lab", date: "", place: "CE lab" },
    { slNo: "07", description: "LED tv", date: "", place: "JSSP Boys hostel" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Alumni
            </h1>
            <p className="text-xl text-blue-100 mb-2">Connecting Past, Present & Future</p>
            <p className="text-lg text-blue-200">
              JSS Polytechnic Alumni Network
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Day Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="h-6 w-6 mr-3 text-primary" />
                  Alumni Day Celebration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Annual Alumni Day</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Alumni committee every year 2nd week of December celebrating Alumni day. 
                        In this event we are honoring the rank holder Alumni from all the departments.
                      </p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          December 2nd Week
                        </Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Annual Event
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Committee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Committee Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Distinguished alumni and faculty members leading the alumni network and activities
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Occupation</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">Position in Governing Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumniCommittee.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm">{member.occupation}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <Badge 
                            variant="outline" 
                            className={`${
                              member.position === 'President' ? 'bg-red-50 text-red-700 border-red-200' :
                              member.position === 'Vice President' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                              member.position === 'Secretary' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                              member.position === 'Joint Secretary' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                              'bg-green-50 text-green-700 border-green-200'
                            }`}
                          >
                            {member.position}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alumni Contributions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Contributions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Infrastructure and equipment donations by our generous alumni for institutional development
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Gift className="h-5 w-5 mr-2 text-primary" />
                Equipment & Infrastructure Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">SL NO</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">ITEM DESCRIPTION</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">DATE</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">PLACE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{donation.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3">{donation.description}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {donation.date ? (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {donation.date}
                            </Badge>
                          ) : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">{donation.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alumni Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Network Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <p className="text-sm text-gray-600">Committee Members</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <p className="text-sm text-gray-600">Equipment Donations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Dec</div>
                <p className="text-sm text-gray-600">Annual Alumni Day</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <p className="text-sm text-gray-600">Departments Represented</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Network Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Professional Networking</h3>
                <p className="text-gray-600 text-sm">
                  Connect with fellow alumni across various industries and build professional relationships
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Recognition Programs</h3>
                <p className="text-gray-600 text-sm">
                  Annual recognition of outstanding alumni achievements and contributions to society
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Institution Development</h3>
                <p className="text-gray-600 text-sm">
                  Opportunity to contribute to institutional growth through donations and mentorship
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Committee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Executive Positions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                        <span className="font-medium">President</span>
                        <Badge className="bg-red-100 text-red-800">1 Position</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                        <span className="font-medium">Vice President</span>
                        <Badge className="bg-orange-100 text-orange-800">1 Position</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                        <span className="font-medium">Secretary</span>
                        <Badge className="bg-blue-100 text-blue-800">1 Position</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-cyan-50 rounded">
                        <span className="font-medium">Joint Secretary</span>
                        <Badge className="bg-cyan-100 text-cyan-800">1 Position</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Board Members</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span className="font-medium">Directors</span>
                        <Badge className="bg-green-100 text-green-800">7 Positions</Badge>
                      </div>
                      <div className="mt-4 p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-600">
                          Directors represent various industries including automotive, IT, manufacturing, 
                          construction, and engineering sectors, providing diverse expertise to the committee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Connect with Alumni Network</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Alumni Relations Office</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For alumni registration, event updates, and networking opportunities, 
                      contact the alumni relations office during regular business hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}