import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  FileText, 
  Download,
  Shield,
  AlertCircle,
  CheckCircle,
  Calendar,
  CreditCard,
  Phone,
  Building
} from "lucide-react";
import healthSchemePdf from "@assets/New-Doc-2024-04-12-16.34.12.pdf";

export default function JSSHealthScheme() {
  const benefits = [
    {
      title: "Comprehensive Health Coverage",
      description: "Complete medical care for JSS employees and their families",
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      title: "Family Coverage",
      description: "Extended coverage for spouse and dependent children",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Cashless Treatment",
      description: "Direct billing arrangement with network hospitals",
      icon: <CreditCard className="h-6 w-6 text-green-600" />
    },
    {
      title: "Preventive Care",
      description: "Regular health check-ups and preventive treatments",
      icon: <Shield className="h-6 w-6 text-purple-600" />
    }
  ];

  const keyFeatures = [
    "Available for all JSS Mahavidyapeetha employees",
    "Coverage extends to family members",
    "Network hospitals across Karnataka",
    "Annual health check-up provisions",
    "Emergency medical assistance",
    "Specialist consultation coverage",
    "Prescription medication benefits",
    "Maternity and childcare coverage"
  ];

  const eligibility = [
    {
      category: "Teaching Staff",
      description: "All permanent and contract teaching faculty members",
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Non-Teaching Staff", 
      description: "Administrative and support staff members",
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Family Members",
      description: "Spouse and dependent children up to specified age",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">JSS Health Scheme</h1>
              <p className="text-xl text-blue-100">Comprehensive Healthcare for JSS Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Health Scheme Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The JSS Health Scheme is a comprehensive healthcare program designed to provide 
                    medical coverage and wellness benefits to all JSS Mahavidyapeetha employees 
                    and their families. This scheme ensures access to quality healthcare services 
                    across a network of trusted medical facilities.
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <a 
                      href={healthSchemePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Scheme Details
                    </a>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-900">Scheme Highlights</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Type:</span>
                      <span className="font-medium">Comprehensive</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network:</span>
                      <span className="font-medium">Karnataka Wide</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Family Coverage:</span>
                      <span className="font-medium text-green-600">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Care:</span>
                      <span className="font-medium text-green-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Who can benefit from the JSS Health Scheme
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {eligibility.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.category}</CardTitle>
                    <Badge className={item.color}>Eligible</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare coverage for all medical needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scheme Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive features of the JSS Health Scheme
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Avail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Avail Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to access your health scheme benefits
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Registration</h3>
                <p className="text-sm text-gray-600">Register with HR department for health scheme enrollment</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">ID Card</h3>
                <p className="text-sm text-gray-600">Receive your health scheme ID card and family member cards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Network Hospital</h3>
                <p className="text-sm text-gray-600">Visit any network hospital for cashless treatment</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="font-semibold mb-2">Treatment</h3>
                <p className="text-sm text-gray-600">Receive quality medical care with direct billing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact for Health Scheme</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        JSS Mahavidyapeetha
                      </h3>
                      <p>Human Resources Department</p>
                      <p className="text-blue-100">Mysore-570 004</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: +91-821-2548318</p>
                      <p className="text-blue-100">Email: hr@jssmvp.edu.in</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For health scheme enrollment and queries, contact the HR Department
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}