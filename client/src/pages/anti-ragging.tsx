import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Users, Phone, FileText, Heart } from "lucide-react";

export default function AntiRagging() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-red-900 font-semibold text-lg px-4 py-2">
                Zero Tolerance
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Anti-Ragging Policy
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-4xl mx-auto">
              JSS Polytechnic stands for students by supporting anti-ragging. We are taking a pledge saying no ragging.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Anti-Ragging Pledge */}
        <Card className="mb-12 shadow-lg border-l-4 border-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
              <Heart className="h-8 w-8" />
              Our Commitment Against Ragging
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Anti-Ragging Pledge</h3>
              <p className="text-lg text-gray-800 leading-relaxed text-center mb-6">
                "JSS Polytechnic stands for students by supporting anti-ragging. We are taking a pledge saying no ragging. All students are hereby informed that please take pledge by saying no anti-ragging."
              </p>
              <div className="text-center">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
                  Take the Anti-Ragging Pledge
                </button>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              JSS Polytechnic is committed to providing a safe, secure, and conducive learning environment for all students. We have a zero-tolerance policy towards ragging and ensure that every student can pursue their education without fear or intimidation.
            </p>
          </CardContent>
        </Card>

        {/* What is Ragging */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 text-2xl">
              <AlertTriangle className="h-8 w-8" />
              What Constitutes Ragging?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Ragging is any act of physical or mental abuse (including bullying and exclusion) targeted at another student (fresher or otherwise) on the ground of color, race, religion, caste, ethnicity, appearance, nationality, regional origins, linguistic identity, place of birth, place of residence or economic background.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-orange-600 mb-4 text-lg">Physical Ragging Includes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                      <span>Any form of physical assault or abuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                      <span>Forcing students to perform physical tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                      <span>Any activity that causes physical harm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                      <span>Inappropriate physical contact</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-4 text-lg">Mental/Emotional Ragging Includes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                      <span>Verbal abuse, threats, or intimidation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                      <span>Social exclusion or isolation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                      <span>Humiliation in public or private</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                      <span>Cyber bullying or online harassment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reporting Mechanism */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Phone className="h-8 w-8" />
              How to Report Ragging
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-600 mb-4 text-lg">Immediate Action Required</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Emergency Helpline</h4>
                    <p className="text-blue-700 font-semibold text-lg">UGC 24x7 Helpline: 1800-180-5522</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">College Anti-Ragging Committee</h4>
                    <p className="text-green-700">Contact Principal's Office immediately</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">Online Reporting</h4>
                    <p className="text-purple-700">Submit complaints through college website</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-indigo-600 mb-4 text-lg">Support System</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Complete confidentiality assured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Counseling support available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>24/7 helpline access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Legal assistance if required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-indigo-600 mt-1" />
                    <span>Victim protection measures</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consequences */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
              <AlertTriangle className="h-8 w-8" />
              Consequences of Ragging
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-red-800 text-xl mb-4">Legal Consequences</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Academic Penalties:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Immediate suspension from institution</li>
                    <li>• Debarment from examination</li>
                    <li>• Withholding of results</li>
                    <li>• Cancellation of admission</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Legal Action:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Criminal charges under IPC</li>
                    <li>• Fine up to Rs. 25,000</li>
                    <li>• Imprisonment up to 6 months</li>
                    <li>• Permanent record in police files</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention Measures */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 text-2xl">
              <Shield className="h-8 w-8" />
              Prevention Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold text-green-800 text-lg mb-2">Orientation Programs</h3>
                <p className="text-gray-700 text-sm">Comprehensive anti-ragging awareness sessions for all new students</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Monitoring System</h3>
                <p className="text-gray-700 text-sm">Regular monitoring of hostels, canteens, and common areas</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Heart className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-purple-800 text-lg mb-2">Mentorship Program</h3>
                <p className="text-gray-700 text-sm">Senior students as mentors to guide and support juniors</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Zero</h3>
            <p>Ragging Incidents</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Safe Environment</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p>Helpline Support</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-red-500 to-red-600 text-white">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Zero</h3>
            <p>Tolerance Policy</p>
          </Card>
        </div>
      </div>
    </div>
  );
}