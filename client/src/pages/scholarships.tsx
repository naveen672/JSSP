import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Phone, User, Award, AlertTriangle, Globe } from "lucide-react";

export default function Scholarships() {
  const contactPersons = [
    {
      name: "Mrs. Nagarathna",
      phone: "9845285145",
      department: "Accounts Section"
    },
    {
      name: "Mrs. Sadhana",
      phone: "9060500050", 
      department: "Lecturer, Dept. of Electronics and Electrical Engineering"
    }
  ];

  const scholarshipLinks = [
    {
      title: "State Scholarship",
      description: "Karnataka State Post-Matric Scholarship",
      url: "ssp.postmatric.karnataka.gov.in",
      fullUrl: "https://ssp.postmatric.karnataka.gov.in"
    },
    {
      title: "National Scholarship",
      description: "National Scholarship Portal",
      url: "scholarships.gov.in",
      fullUrl: "https://scholarships.gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Scholarships
            </h1>
            <p className="text-xl text-blue-100 mb-2">Financial Support for Students</p>
            <p className="text-lg text-blue-200">
              Merit and Category-based Scholarship Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  Scholarship Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-3">Available Scholarship Schemes</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Scholarship facilities are available for students under various schemes depending upon 
                      merit as well as category. Students who are eligible to apply can contact college 
                      scholarship staff member in the accounts section.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-yellow-800">Important Notice</p>
                          <p className="text-yellow-700 text-sm mt-1">
                            Do not apply through private agencies. All scholarship information is available 
                            on the website of respective categories.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact for Scholarship Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For details of scholarships available, procedure to apply and contact person in JSSP, Mysuru
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactPersons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{person.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{person.department}</p>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">{person.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Application Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for Scholarships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access official scholarship portals to apply for state and national scholarships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scholarshipLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{link.title}</h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <p className="text-sm text-gray-500 mb-6">{link.url}</p>
                    <a 
                      href={link.fullUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarship Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Merit-Based Scholarships</h3>
                <p className="text-gray-600 text-sm">
                  Scholarships awarded based on academic performance and merit achievements
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Category-Based Scholarships</h3>
                <p className="text-gray-600 text-sm">
                  Financial assistance for students from specific social and economic categories
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Government Schemes</h3>
                <p className="text-gray-600 text-sm">
                  State and national government scholarship programs for technical education
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Steps to Apply</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                      <li>Contact scholarship staff in accounts section</li>
                      <li>Verify eligibility criteria for your category</li>
                      <li>Gather required documents and certificates</li>
                      <li>Visit official scholarship portal</li>
                      <li>Complete online application form</li>
                      <li>Submit application before deadline</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Important Guidelines</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Only apply through official government portals</li>
                      <li>• Avoid private agencies and unauthorized agents</li>
                      <li>• Keep all original documents ready for verification</li>
                      <li>• Contact college staff for guidance and support</li>
                      <li>• Check application deadlines regularly</li>
                      <li>• Maintain academic performance requirements</li>
                    </ul>
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
            <h2 className="text-3xl font-bold mb-8">Need Help with Scholarships?</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Scholarship Support Office</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                    <p className="mt-2">Accounts Section - Scholarship Desk</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      Visit the accounts section during office hours for scholarship guidance and application support
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