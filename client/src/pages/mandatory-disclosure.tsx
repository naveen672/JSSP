import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink, Download, Eye } from "lucide-react";

export default function MandatoryDisclosure() {
  const disclosureUrl = "https://docs.google.com/document/d/1_Tnb6z_b1g5xH9Nz_EYgBEezTKtjov71/edit?usp=drive_link&ouid=107979518854372710184&rtpof=true&sd=true";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Mandatory Disclosure</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive institutional information and mandatory disclosures as per regulatory requirements for JSS Polytechnic, Mysuru.
          </p>
        </div>
      </section>

      {/* Disclosure Document */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-accent" />
                  <span>Official Mandatory Disclosure Document</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center bg-gray-50 p-8 rounded-lg">
                  <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Mandatory Disclosure of JSS Polytechnic, Mysuru
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Access the complete mandatory disclosure document containing all essential institutional 
                    information, infrastructure details, faculty qualifications, course offerings, and 
                    regulatory compliance information.
                  </p>
                  
                  <a 
                    href={disclosureUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Eye className="h-5 w-5" />
                    <span>View Mandatory Disclosure Document</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    Click above to access the official Google Document containing the complete mandatory disclosure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included in Mandatory Disclosure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Institutional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Basic institutional details and contact information</li>
                    <li>• AICTE approval and affiliation details</li>
                    <li>• Management and governance structure</li>
                    <li>• Principal and administrative staff information</li>
                    <li>• Institutional history and establishment details</li>
                    <li>• Geographic location and campus information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete list of courses and programs offered</li>
                    <li>• Department-wise course details and intake capacity</li>
                    <li>• Faculty qualifications and experience</li>
                    <li>• Academic calendar and examination schedule</li>
                    <li>• Fee structure and admission criteria</li>
                    <li>• Student enrollment statistics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Infrastructure & Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Laboratory and workshop facilities</li>
                    <li>• Library resources and digital collections</li>
                    <li>• Classroom and seminar hall details</li>
                    <li>• Sports and recreational facilities</li>
                    <li>• Hostel and accommodation facilities</li>
                    <li>• Safety and security measures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• NBA accreditation status and details</li>
                    <li>• Quality assurance measures and policies</li>
                    <li>• Placement statistics and industry partnerships</li>
                    <li>• Student grievance redressal mechanism</li>
                    <li>• Financial transparency and audit reports</li>
                    <li>• Regulatory compliance certificates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Regulatory Compliance Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    JSS Polytechnic, Mysuru is committed to maintaining complete transparency and regulatory 
                    compliance as mandated by the All India Council for Technical Education (AICTE) and other 
                    regulatory bodies. This mandatory disclosure document contains comprehensive information 
                    about our institution's operations, facilities, and academic programs.
                  </p>
                  
                  <div className="bg-accent/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-3">Document Authenticity</h3>
                    <p className="text-sm text-gray-700">
                      The mandatory disclosure document is regularly updated and maintained as per AICTE guidelines. 
                      All information provided is accurate and reflects the current status of the institution. 
                      For any queries or clarifications regarding the disclosed information, please contact the 
                      institution directly.
                    </p>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <a 
                      href={disclosureUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <Download className="h-5 w-5" />
                      <span>Access Complete Document</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need More Information?</h2>
            
            <Card>
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6">
                  For additional information, clarifications, or queries regarding the mandatory disclosure, 
                  please contact JSS Polytechnic directly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Contact Details</h3>
                    <p className="text-sm text-gray-600">
                      JSS Polytechnic, Mysuru<br/>
                      JSS Technical Institutions' Campus<br/>
                      Manasa Gangothri, Mysore - 570006<br/>
                      Phone: 0821-2548318<br/>
                      Email: jssp418@yahoo.co.in
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Principal's Office</h3>
                    <p className="text-sm text-gray-600">
                      Dr. Bhakthavathsala K S<br/>
                      Principal<br/>
                      Mobile: 9844333115<br/>
                      Email: KSB@JSSPOLYTECHNIC.ORG
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