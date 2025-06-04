import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, FileText, Newspaper, Calendar, Award } from "lucide-react";
import image1 from "@assets/ME.jpg";
import image2 from "@assets/4fa7839f-814b-4f4d-b798-ec01638d690b-605x1024.jpg";
import image3 from "@assets/WhatsApp-Image-2025-01-05-at-9.05.25-AM-445x1024.jpeg";
import image4 from "@assets/WhatsApp-Image-2025-01-05-at-9.05.48-AM-1024x983.jpeg";
import image5 from "@assets/WhatsApp-Image-2025-01-06-at-9.26.08-AM-799x1024.jpeg";
import image6 from "@assets/WhatsApp-Image-2025-01-06-at-9.26.09-AM-540x1024.jpeg";
import image7 from "@assets/WhatsApp-Image-2025-01-06-at-9.28.09-AM-1024x436.jpeg";

export default function MediaCoverageUpdate() {
  const mediaCellMembers = [
    { slNo: "1", name: "Sri Arun N S", designation: "Lecturer / English" },
    { slNo: "2", name: "Smt Vidya", designation: "Lecturer/EE" }
  ];

  const mediaImages = [
    { src: image1, alt: "Newspaper coverage - Karnataka media", caption: "Event coverage in local newspaper" },
    { src: image2, alt: "Media coverage update", caption: "Educational program coverage" },
    { src: image3, alt: "Recent media coverage 1", caption: "Institute activities in news" },
    { src: image4, alt: "Recent media coverage 2", caption: "Academic achievements coverage" },
    { src: image5, alt: "Recent media coverage 3", caption: "Student achievements highlighted" },
    { src: image6, alt: "Recent media coverage 4", caption: "Institute events in media" },
    { src: image7, alt: "Recent media coverage 5", caption: "Media coverage of college activities" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Media Coverage Update
            </h1>
            <p className="text-xl text-blue-100 mb-2">News & Media Coverage</p>
            <p className="text-lg text-blue-200">
              JSS Polytechnic in the Media
            </p>
          </div>
        </div>
      </section>

      {/* Media Cell Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Camera className="h-6 w-6 mr-3 text-primary" />
                  Media Cell
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Media cell has been formed with the following members to handle all media-related activities 
                    and ensure proper coverage of institutional events and achievements.
                  </p>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Media Cell Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-primary">SL NO</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">NAME</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-primary">Designation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mediaCellMembers.map((member, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 text-center font-medium">{member.slNo}</td>
                              <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                              <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Coverage Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Media Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collection of recent newspaper articles and media coverage featuring JSS Polytechnic events, 
              achievements, and educational activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Newspaper className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium">{image.caption}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          News Coverage
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Print Media</h3>
                <p className="text-gray-600 text-sm">
                  Regular coverage in leading newspapers highlighting student achievements and institutional activities
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Event Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Professional documentation of all major events, seminars, and academic programs
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Achievement Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Showcasing student and faculty achievements across various competitions and programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Cell Responsibilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Media Cell Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Functions</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Coordinate with media for event coverage</li>
                      <li>• Prepare press releases and media content</li>
                      <li>• Document institutional activities</li>
                      <li>• Maintain media archive and records</li>
                      <li>• Handle media inquiries and interviews</li>
                      <li>• Social media content management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Coverage Areas</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Academic achievements and awards</li>
                      <li>• Student competitions and victories</li>
                      <li>• Faculty research and publications</li>
                      <li>• Industry collaborations and partnerships</li>
                      <li>• Cultural and technical events</li>
                      <li>• Alumni success stories</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Coverage Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage Statistics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-sm text-gray-600">Media Cell Members</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <p className="text-sm text-gray-600">Recent News Articles</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-gray-600">Event Coverage</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-gray-600">Media Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Media Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image1} 
                  alt="Featured newspaper article"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-600">November 26, 2024</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">Educational Program Coverage</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive coverage of JSS Polytechnic's educational initiatives and student achievements 
                  featured in local Kannada newspaper.
                </p>
                <Badge className="bg-primary/10 text-primary">Featured Article</Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image2} 
                  alt="Student achievement coverage"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-600">Recent Coverage</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">Student Achievement Highlight</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Recognition of outstanding student performance and institutional excellence 
                  in technical education programs.
                </p>
                <Badge className="bg-green-100 text-green-700">Achievement Story</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Media Cell */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact Media Cell</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Media Relations Office</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      For media inquiries, press releases, or coverage requests, 
                      please contact our media cell during office hours
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