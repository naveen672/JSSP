import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function AICTEEOA() {
  const eoaLinks = [
    {
      year: "2024-2025",
      url: "https://drive.google.com/file/d/1IGVmr64aLPVcQUe4W76sLO_aR9wC9ECF/view?usp=drive_link"
    },
    {
      year: "2023-2024",
      url: "https://drive.google.com/file/d/1-DYaaV8bll6-rACrl2bk8MSAB3QzMd7c/view?usp=drive_link"
    },
    {
      year: "2022-2023",
      url: "https://drive.google.com/file/d/1-Lv9SsExxFByTbFLPz4ZcIvneLE4rZwp/view?usp=drive_link"
    },
    {
      year: "2021-2022",
      url: "https://drive.google.com/file/d/1ZOW2xhmMB8p0lc-EMJTnus09wObcH3th/view?usp=drive_link"
    },
    {
      year: "2020-2021",
      url: "https://drive.google.com/file/d/1Qi9zdG4y9cnzjQk5I_PTcH35vQqwzzHe/view?usp=drive_link"
    },
    {
      year: "2019-2020",
      url: "https://drive.google.com/file/d/1VGDkc8kjscpD9to9Rh9dzr0DuC0TXiWK/view?usp=drive_link"
    },
    {
      year: "2018-2019",
      url: "https://drive.google.com/file/d/1k79PZoqCWRRZ9lLc6O9TUWaFsSGAhPw-/view?usp=drive_link"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">AICTE & EOA</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            All India Council for Technical Education approval and Extension of Approval details for JSS Polytechnic.
          </p>
        </div>
      </section>

      {/* AICTE Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-accent" />
                  <span>AICTE Institutional Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">AICTE File Number</h3>
                      <p className="text-gray-700">South-West/1-9321175360/2021/EOA</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Institution Name</h3>
                      <p className="text-gray-700">JSS Polytechnic, Mysuru</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Address</h3>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-accent mt-1" />
                        <div>
                          <p className="text-gray-700">JSS Technical Institutions' Campus,</p>
                          <p className="text-gray-700">Manasa Gangothri, Mysore</p>
                          <p className="text-gray-700">Mysore - 570006, Karnataka</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Geographic Coordinates</h3>
                      <p className="text-gray-700">Longitude: 76°36'32" | Latitude: 12°18'56"</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-accent" />
                          <span className="text-gray-700">0821-2548318</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-accent" />
                          <span className="text-gray-700">jssp418@yahoo.co.in</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4 text-accent" />
                          <span className="text-gray-700">www.jsspolytechnic.org</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Operating Hours</h3>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-gray-700">Office Hours: 10:00 AM to 5:30 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-gray-700">Academic Hours: 8:00 AM to 5:45 PM</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Transportation Access</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>Railway Station: 6.2 KM (Main Railway Station)</p>
                        <p>Airport: 17.5 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Institution Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Institution Categories</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Badge className="mb-4">Institution Type</Badge>
                  <h3 className="text-lg font-semibold text-primary mb-2">Private Self-financing</h3>
                  <p className="text-sm text-gray-600">Autonomous educational institution</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Badge className="mb-4">Category 1</Badge>
                  <h3 className="text-lg font-semibold text-primary mb-2">Non-Minority</h3>
                  <p className="text-sm text-gray-600">Open to all communities</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Badge className="mb-4">Category 2</Badge>
                  <h3 className="text-lg font-semibold text-primary mb-2">Co-Educational</h3>
                  <p className="text-sm text-gray-600">Both male and female students</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Principal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dr. Bhakthavathsala K S</h3>
                    <p className="text-gray-700 mb-2">Principal, JSS Polytechnic, Mysore-6</p>
                    <p className="text-gray-700 mb-2">Specialization: Mechanical Engineering</p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-gray-700">9844333115</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-gray-700">KSB@JSSPOLYTECHNIC.ORG</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Affiliation Details</h3>
                    <p className="text-gray-700 mb-2">Affiliating University: Department of Technical Education</p>
                    <p className="text-gray-700">Latest Affiliation Period: 2024-25</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EOA Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Extension of Approval (EOA) Documents</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-accent" />
                  <span>Academic Year-wise EOA Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {eoaLinks.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary">Academic Year {item.year}</h3>
                          <p className="text-sm text-gray-600">Extension of Approval Document</p>
                        </div>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-accent hover:text-primary transition-colors"
                        >
                          <span className="text-sm">View Document</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> All EOA documents are available through Google Drive links. 
                    Click on "View Document" to access the respective academic year's Extension of Approval documentation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}