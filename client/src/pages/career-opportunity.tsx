import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, User, Briefcase, MapPin, Clock } from "lucide-react";

export default function CareerOpportunity() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Career Opportunity
            </h1>
            <p className="text-xl text-blue-100 mb-2">Join Our Team</p>
            <p className="text-lg text-blue-200">
              JSS Polytechnic, Mysuru
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="h-6 w-6 mr-3 text-primary" />
                  Contact Us for Career Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email Contact */}
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Address</h3>
                          <p className="text-gray-600 mb-3">Send your resume and application</p>
                          <a 
                            href="mailto:jssp418@yahoo.co.in"
                            className="text-primary font-medium hover:underline"
                          >
                            jssp418@yahoo.co.in
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Placement Officer Contact */}
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">Placement Officer</h3>
                          <p className="text-gray-900 font-medium mb-1">Mr. Roopesh</p>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            <a 
                              href="tel:9886662898"
                              className="text-green-600 font-medium hover:underline"
                            >
                              9886662898
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join JSS Polytechnic?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover rewarding career opportunities in technical education and contribute to shaping the future of engineering students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Join a prestigious institution committed to quality technical education and student development
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Professional Growth</h3>
                <p className="text-gray-600 text-sm">
                  Opportunities for career advancement, skill development, and professional excellence
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Great Location</h3>
                <p className="text-gray-600 text-sm">
                  Located in the heritage city of Mysuru with excellent connectivity and amenities
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
                    <h4 className="font-semibold mb-3 text-primary">How to Apply</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                      <li>Prepare your updated resume with relevant qualifications</li>
                      <li>Include a cover letter highlighting your interest</li>
                      <li>Send application to our official email address</li>
                      <li>Contact our placement officer for specific inquiries</li>
                      <li>Await response from our recruitment team</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Required Documents</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Updated resume/CV</li>
                      <li>• Educational qualification certificates</li>
                      <li>• Experience certificates (if applicable)</li>
                      <li>• Identity proof</li>
                      <li>• Passport size photographs</li>
                      <li>• Any relevant certifications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Contact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Email Application</h3>
                <p className="mb-4 text-blue-100">Send your complete application via email</p>
                <a 
                  href="mailto:jssp418@yahoo.co.in"
                  className="inline-block px-6 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
                >
                  jssp418@yahoo.co.in
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-green-600 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Call Placement Officer</h3>
                <p className="mb-4 text-green-100">Speak directly with Mr. Roopesh for inquiries</p>
                <a 
                  href="tel:9886662898"
                  className="inline-block px-6 py-2 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  9886662898
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Application Guidelines</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Applications are reviewed on a rolling basis</li>
                      <li>• Only shortlisted candidates will be contacted</li>
                      <li>• Please ensure all documents are authentic</li>
                      <li>• Follow up after 2 weeks if no response</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Contact Hours</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Email: 24/7 acceptance</li>
                      <li>• Phone: Monday to Friday, 9:00 AM - 5:00 PM</li>
                      <li>• Office visits: By appointment only</li>
                      <li>• Response time: 3-5 working days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Start Your Career with Us</h2>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Human Resources Department</h3>
                    <p>JSS Polytechnic, Mysore-570 006, Karnataka</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      We are an equal opportunity employer committed to diversity and inclusion in our workforce
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